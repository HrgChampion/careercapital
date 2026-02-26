/**
 * MBA financial engine v2
 *
 * Timing-correct model:
 *   CF[0] = -(out-of-pocket equity + lost income during program)
 *   CF[1..LOAN_TERM_YEARS] = salaryDelta − annual loan payment
 *   CF[LOAN_TERM_YEARS+1..PROJECTION_YEARS] = salaryDelta (debt-free)
 *
 * NPV and IRR are derived from this series — not a uniform-flow approximation.
 * Break-even is algorithmic (iterates cumulative CF, not a ratio).
 * Loan uses true amortization: PMT = rL / (1 − (1+r)^−n)
 */

export type MBAInput = {
  currentSalary: number
  postMbaSalary: number
  mbaCost: number
  programDuration: number // in years (1 or 2)
  loanPercentage: number  // 0 to 1
  interestRate: number    // annual (e.g. 0.08)
}

export const DISCOUNT_RATE = 0.06
export const PROJECTION_YEARS = 10
export const LOAN_TERM_YEARS = 5

export type AmortizationRow = {
  month: number
  payment: number
  interest: number
  principal: number
  balance: number
}

export type LoanDetails = {
  principal: number
  annualRate: number
  monthlyPayment: number
  totalPaid: number
  totalInterest: number
  totalPayments: number
  amortizationSchedule?: AmortizationRow[]
}

export type MBAResult = {
  /** Full cash flow series: CF[0] = Year 0 outflow, CF[t≥1] = net annual inflow */
  cashFlows: number[]
  lostIncome: number
  /** Summary metric: equity paid + lost income + total interest paid */
  totalCost: number
  salaryDelta: number
  postMbaSalary: number
  /** Years until cumulative cash flow turns positive (algorithmic, interpolated) */
  paybackPeriod: number
  npv: number | null
  irr: number | null
  sensitivity: {
    optimistic: number | null
    conservative: number | null
  }
  loanDetails: LoanDetails
}

// ─────────────────────────────────────────────────────────────────────
// Validation helpers
// ─────────────────────────────────────────────────────────────────────

function assertFiniteNumber(v: unknown, name: string) {
  if (typeof v !== 'number' || !isFinite(v)) {
    throw new TypeError(`${name} must be a finite number`)
  }
}

function validateMBAInput(input: MBAInput) {
  assertFiniteNumber(input.currentSalary, 'currentSalary')
  assertFiniteNumber(input.postMbaSalary, 'postMbaSalary')
  assertFiniteNumber(input.mbaCost, 'mbaCost')
  assertFiniteNumber(input.programDuration, 'programDuration')
  assertFiniteNumber(input.loanPercentage, 'loanPercentage')
  assertFiniteNumber(input.interestRate, 'interestRate')

  if (input.currentSalary < 0) throw new RangeError('currentSalary must be >= 0')
  if (input.postMbaSalary < 0) throw new RangeError('postMbaSalary must be >= 0')
  if (input.mbaCost < 0) throw new RangeError('mbaCost must be >= 0')
  if (input.programDuration <= 0) throw new RangeError('programDuration must be > 0')
  if (input.loanPercentage < 0 || input.loanPercentage > 1)
    throw new RangeError('loanPercentage must be between 0 and 1')
  if (input.interestRate < 0) throw new RangeError('interestRate must be >= 0')

  return input
}

// ─────────────────────────────────────────────────────────────────────
// Loan amortization
// ─────────────────────────────────────────────────────────────────────

/**
 * calculateLoanDetails
 * Standard annuity (amortization) formula: PMT = rL / (1 − (1+r)^−n)
 */
export function calculateLoanDetails(
  principal: number,
  annualRate: number,
  years: number,
  includeSchedule = false
): LoanDetails {
  assertFiniteNumber(principal, 'principal')
  assertFiniteNumber(annualRate, 'annualRate')
  assertFiniteNumber(years, 'years')

  if (principal <= 0) {
    return { principal: 0, annualRate, monthlyPayment: 0, totalPaid: 0, totalInterest: 0, totalPayments: 0 }
  }

  const monthlyRate = annualRate / 12
  const totalPayments = Math.round(years * 12)

  const monthlyPayment = monthlyRate === 0
    ? principal / totalPayments
    : (monthlyRate * principal) / (1 - Math.pow(1 + monthlyRate, -totalPayments))

  const totalPaid = monthlyPayment * totalPayments
  const totalInterest = totalPaid - principal

  const result: LoanDetails = { principal, annualRate, monthlyPayment, totalPaid, totalInterest, totalPayments }

  if (includeSchedule) {
    const schedule: AmortizationRow[] = []
    let balance = principal
    for (let m = 1; m <= totalPayments; m++) {
      const interest = balance * monthlyRate
      const principalPaid = Math.min(monthlyPayment - interest, balance)
      const payment = interest + principalPaid
      balance = Math.max(0, balance - principalPaid)
      schedule.push({ month: m, payment, interest, principal: principalPaid, balance })
      if (balance <= 0) break
    }
    result.amortizationSchedule = schedule
  }

  return result
}

// ─────────────────────────────────────────────────────────────────────
// Internal: variable cash flow series helpers
// ─────────────────────────────────────────────────────────────────────

/** NPV = Σ CF[t] / (1+r)^t for t = 0..n */
function npvFromSeries(cashFlows: number[], rate: number): number {
  return cashFlows.reduce((sum, cf, t) => sum + cf / Math.pow(1 + rate, t), 0)
}

/** Find rate r where npvFromSeries(cashFlows, r) = 0 via bisection + fallback scan */
function irrFromSeries(
  cashFlows: number[],
  options?: { tol?: number; maxIter?: number }
): number | null {
  const tol = options?.tol ?? 1e-7
  const maxIter = options?.maxIter ?? 200

  const npvAt = (r: number): number => {
    if (r <= -1) return Number.POSITIVE_INFINITY
    return npvFromSeries(cashFlows, r)
  }

  let low = -0.9999
  let high = 1.0
  let fLow = npvAt(low)
  let fHigh = npvAt(high)

  if (fLow === 0) return low
  if (fHigh === 0) return high

  // Scan for sign change if initial bracket doesn't straddle zero
  if (fLow * fHigh > 0) {
    let found = false
    let lastF = fLow
    for (let r = -0.9; r <= 5.0; r += 0.01) {
      const f = npvAt(r)
      if (f === 0) return r
      if (lastF * f < 0) {
        low = r - 0.01; high = r; fLow = lastF
        found = true; break
      }
      lastF = f
    }
    if (!found) return null
  }

  // Bisection — only fa sign needed to track the bracket
  let a = low, b = high, fa = fLow
  for (let i = 0; i < maxIter; i++) {
    const m = 0.5 * (a + b)
    const fm = npvAt(m)
    if (!isFinite(fm)) break
    if (Math.abs(fm) < tol) return m
    if (fa * fm < 0) { b = m } else { a = m; fa = fm }
    if (Math.abs(b - a) < tol) return 0.5 * (a + b)
  }

  return null
}

// ─────────────────────────────────────────────────────────────────────
// Public API — uniform-flow wrappers (backward compatible)
// ─────────────────────────────────────────────────────────────────────

/**
 * calculateNPV
 * Uniform-flow convenience: assumes constant annual cash flow.
 * NPV = −C₀ + Σ CF/(1+r)^t for t = 1..n
 */
export function calculateNPV(
  initialCost: number,
  annualCashFlow: number,
  discountRate: number,
  years: number
): number {
  assertFiniteNumber(initialCost, 'initialCost')
  assertFiniteNumber(annualCashFlow, 'annualCashFlow')
  assertFiniteNumber(discountRate, 'discountRate')
  assertFiniteNumber(years, 'years')

  const flows = [-initialCost, ...Array.from({ length: Math.floor(years) }, () => annualCashFlow)]
  return npvFromSeries(flows, discountRate)
}

/**
 * estimateIRR
 * Uniform-flow convenience: builds series and delegates to irrFromSeries.
 * 0 = Σ CF[t] / (1+IRR)^t
 */
export function estimateIRR(
  initialCost: number,
  annualCashFlow: number,
  years: number,
  options?: { tol?: number; maxIter?: number }
): number | null {
  assertFiniteNumber(initialCost, 'initialCost')
  assertFiniteNumber(annualCashFlow, 'annualCashFlow')
  assertFiniteNumber(years, 'years')

  const flows = [-initialCost, ...Array.from({ length: Math.floor(years) }, () => annualCashFlow)]
  return irrFromSeries(flows, options)
}

/**
 * calculateTrueCost
 * Summary breakdown: tuition + lost income + total loan interest.
 */
export function calculateTrueCost(mbaCost: number, lostIncome: number, loanDetails: LoanDetails) {
  assertFiniteNumber(mbaCost, 'mbaCost')
  assertFiniteNumber(lostIncome, 'lostIncome')

  const totalInterest = loanDetails?.totalInterest ?? 0
  return { mbaCost, lostIncome, loanInterest: totalInterest, totalCost: mbaCost + lostIncome + totalInterest }
}

// ─────────────────────────────────────────────────────────────────────
// Main calculator
// ─────────────────────────────────────────────────────────────────────

/**
 * calculateMBA
 * Timing-correct full model:
 *
 *   CF[0] = − (out-of-pocket equity + opportunity cost)
 *   CF[t] = salaryDelta − annualLoanPayment  (t = 1..LOAN_TERM_YEARS)
 *   CF[t] = salaryDelta                      (t = LOAN_TERM_YEARS+1..PROJECTION_YEARS)
 *
 * NPV, IRR, and break-even are all derived from this series.
 */
export function calculateMBA(input: MBAInput): MBAResult {
  validateMBAInput(input)

  const { currentSalary, postMbaSalary, mbaCost, programDuration, loanPercentage, interestRate } = input

  const lostIncome = currentSalary * programDuration
  const loanPrincipal = mbaCost * loanPercentage
  const loanDetails = calculateLoanDetails(loanPrincipal, interestRate, LOAN_TERM_YEARS)
  const totalCost = mbaCost + lostIncome + loanDetails.totalInterest
  const salaryDelta = postMbaSalary - currentSalary
  const annualLoanPayment = loanDetails.monthlyPayment * 12

  // Build cash flow series
  const outOfPocket = mbaCost * (1 - loanPercentage)
  const cashFlows: number[] = [-(outOfPocket + lostIncome)]
  for (let t = 1; t <= PROJECTION_YEARS; t++) {
    cashFlows.push(salaryDelta - (t <= LOAN_TERM_YEARS ? annualLoanPayment : 0))
  }

  // NPV from series
  const npv = (() => {
    try { return npvFromSeries(cashFlows, DISCOUNT_RATE) }
    catch { return null }
  })()

  // IRR from series
  const irr = irrFromSeries(cashFlows)

  // Sensitivity: ±10% salary delta, loan payments stay fixed
  const sensitivity = {
    optimistic:    npvFromSeries(cashFlows.map((cf, t) => t === 0 ? cf : cf + salaryDelta * 0.1), DISCOUNT_RATE),
    conservative:  npvFromSeries(cashFlows.map((cf, t) => t === 0 ? cf : cf - salaryDelta * 0.1), DISCOUNT_RATE),
  }

  // Algorithmic break-even: first year cumulative CF ≥ 0, linearly interpolated
  let paybackPeriod = Infinity
  let cumulative = 0
  for (let t = 0; t < cashFlows.length; t++) {
    const prev = cumulative
    cumulative += cashFlows[t]
    if (cumulative >= 0 && t > 0) {
      paybackPeriod = (t - 1) + (-prev / cashFlows[t])
      break
    }
  }

  return { cashFlows, lostIncome, totalCost, salaryDelta, postMbaSalary, paybackPeriod, npv, irr, sensitivity, loanDetails }
}

export default { calculateMBA, calculateLoanDetails, calculateNPV, estimateIRR, calculateTrueCost, calculateScore }

// ─────────────────────────────────────────────────────────────────────
// Financial Scoring Engine
// ─────────────────────────────────────────────────────────────────────

export type ScoreResult = {
  score: number
  grade: string
  riskLevel: string
  riskFactors: string
  summary: string
}

export function calculateScore(result: ReturnType<typeof calculateMBA>): ScoreResult {
  const { npv, irr, paybackPeriod, sensitivity, loanDetails } = result

  let score = 0

  // 1️⃣ NPV (30 pts)
  if ((npv ?? 0) > 100000) score += 30
  else if ((npv ?? 0) > 50000) score += 25
  else if ((npv ?? 0) > 0) score += 18
  else if ((npv ?? 0) > -50000) score += 8

  // 2️⃣ IRR (25 pts)
  if (irr && irr > 0.18) score += 25
  else if (irr && irr > 0.12) score += 20
  else if (irr && irr > 0.08) score += 15
  else if (irr && irr > 0.06) score += 10

  // 3️⃣ Payback (20 pts)
  if (paybackPeriod < 4) score += 20
  else if (paybackPeriod < 6) score += 15
  else if (paybackPeriod < 8) score += 10
  else score += 3

  // 4️⃣ Debt burden (15 pts)
  const totalMonthlyIncome = result.postMbaSalary / 12
  const debtRatio = totalMonthlyIncome > 0 ? loanDetails.monthlyPayment / totalMonthlyIncome : Infinity

  if (debtRatio < 0.2) score += 15
  else if (debtRatio < 0.35) score += 10
  else if (debtRatio < 0.5) score += 5

  // 5️⃣ Sensitivity stability (10 pts)
  if ((sensitivity?.conservative ?? -Infinity) > 0) score += 10
  else if ((sensitivity?.conservative ?? -Infinity) > -50000) score += 5

  // Grade
  let grade = 'F'
  if (score >= 85) grade = 'A'
  else if (score >= 70) grade = 'B'
  else if (score >= 55) grade = 'C'
  else if (score >= 40) grade = 'D'

  // Risk — 3-factor model: leverage × IRR buffer × payback
  const irrBuffer = irr !== null ? irr - DISCOUNT_RATE : -DISCOUNT_RATE
  const leverageRisk = debtRatio > 0.35 ? 2 : debtRatio > 0.2 ? 1 : 0
  const returnRisk   = irrBuffer > 0.06 ? 0 : irrBuffer > 0 ? 1 : 2
  const paybackRisk  = paybackPeriod < 5 ? 0 : paybackPeriod < 8 ? 1 : 2
  const riskScore    = leverageRisk + returnRisk + paybackRisk

  let riskLevel = 'High'
  if (riskScore <= 1) riskLevel = 'Low'
  else if (riskScore <= 3) riskLevel = 'Moderate'

  const elevated: string[] = []
  if (leverageRisk >= 1) elevated.push('leverage')
  if (returnRisk >= 1)   elevated.push('IRR buffer')
  if (paybackRisk >= 1)  elevated.push('payback duration')
  const riskFactors = elevated.length > 0
    ? `Risk factors: ${elevated.join(', ')}`
    : 'Risk profile: well-balanced'

  return { score, grade, riskLevel, riskFactors, summary: generateSummary(grade) }
}

function generateSummary(grade: string): string {
  if (grade === 'A') return 'This MBA appears to be a strong financial investment with solid long-term value creation.'
  if (grade === 'B') return 'Financially viable with moderate upside. Sensible if aligned with career goals.'
  if (grade === 'C') return 'Marginal financial return. Decision should depend heavily on non-financial benefits.'
  if (grade === 'D') return 'High financial risk. Returns are weak relative to cost.'
  return 'Financially unattractive under current assumptions.'
}
