/**
 * Returnship ROI Engine
 *
 * Evaluates corporate returnship programs using probability-weighted
 * expected-value cash flows. A new math pattern for the platform.
 *
 * Three paths compared:
 *   1. Returnship → conversion (probability-weighted)
 *   2. Direct re-entry (search takes time, chance of finding a role)
 *   3. Wait another year (gap deepens, then direct re-entry)
 *
 * Key output: the minimum conversion rate at which the returnship
 * beats direct re-entry ("conversion break-even").
 */

import { npvFromSeries, irrFromSeries, DISCOUNT_RATE } from "./mbaEngine"
import { scoreFinancials, type ScoreResult } from "./scoreEngine"

export const RETURNSHIP_PROJECTION_YEARS = 10

export type ReturnshipInput = {
  /** How many years have already passed since leaving work */
  currentGapYears: number
  /** Last annual salary before the gap */
  preBreakSalary: number
  /** Annual growth rate the pre-break career would have had */
  preBreakGrowthRate: number
  /** Weekly pay during the returnship program (typically 60-80% of market) */
  returnshipWeeklyPay: number
  /** Duration of the returnship in weeks (typically 12-16) */
  returnshipDurationWeeks: number
  /** Probability of converting to a full-time role (0-1) */
  conversionProbability: number
  /** Annual salary if converted to full-time */
  postConversionSalary: number
  /** Annual salary growth rate post-conversion */
  postConversionGrowthRate: number
  /** Probability of finding a job through direct search within searchDurationMonths */
  directReentrySuccessRate: number
  /** How long the direct job search takes (months) */
  directReentrySearchMonths: number
  /** Expected salary via direct re-entry */
  directReentrySalary: number
  /** Annual growth rate for direct re-entry path */
  directReentryGrowthRate: number
  /** Discount rate for NPV */
  discountRate: number
}

export type PathScenario = {
  label: string
  description: string
  cashFlows: number[]
  npv: number | null
  irr: number | null
  paybackPeriod: number
  /** Year 1 expected salary */
  expectedYear1Salary: number
  /** Year 5 expected salary */
  expectedYear5Salary: number
  score: ScoreResult
}

export type ReturnshipResult = {
  returnshipPath: PathScenario
  directReentryPath: PathScenario
  waitAnotherYearPath: PathScenario
  /** Minimum conversion probability for returnship to beat direct re-entry */
  conversionBreakEvenPct: number
  /** Which path has highest NPV */
  recommendedPath: "returnship" | "direct" | "wait"
  /** Human-readable recommendation */
  recommendation: string
  /** Sensitivity: NPV of returnship at different conversion rates */
  conversionSweep: Array<{ conversionPct: number; returnshipNPV: number; directNPV: number }>
}

// ─── Major returnship program presets ──────────────────────────────────────────

export type ReturnshipProgram = {
  id: string
  company: string
  programName: string
  durationWeeks: number
  weeklyPayEstimate: number
  historicalConversionRate: number
  targetSalaryPostConversion: number
  industry: string
  description: string
}

export const RETURNSHIP_PROGRAMS: ReturnshipProgram[] = [
  {
    id: "amazon_returnship",
    company: "Amazon",
    programName: "Amazon Returnship",
    durationWeeks: 16,
    weeklyPayEstimate: 2500,
    historicalConversionRate: 0.90,
    targetSalaryPostConversion: 145000,
    industry: "Technology",
    description: "16-week paid returnship with full benefits, targeting SDE, PM, and finance roles",
  },
  {
    id: "goldman_returnship",
    company: "Goldman Sachs",
    programName: "Goldman Sachs Returnship",
    durationWeeks: 15,
    weeklyPayEstimate: 3500,
    historicalConversionRate: 0.85,
    targetSalaryPostConversion: 180000,
    industry: "Investment Banking",
    description: "15-week program in various divisions; competitive salary and bonus eligible",
  },
  {
    id: "mckinsey_returnship",
    company: "McKinsey",
    programName: "McKinsey Returners Program",
    durationWeeks: 12,
    weeklyPayEstimate: 3800,
    historicalConversionRate: 0.80,
    targetSalaryPostConversion: 175000,
    industry: "Consulting",
    description: "12-week project-based consulting program for professionals with 2+ year gaps",
  },
  {
    id: "meta_returnship",
    company: "Meta",
    programName: "Meta Back to Engineering",
    durationWeeks: 16,
    weeklyPayEstimate: 3000,
    historicalConversionRate: 0.88,
    targetSalaryPostConversion: 180000,
    industry: "Technology",
    description: "Technical returnship for software engineers returning after 2+ year career breaks",
  },
  {
    id: "jpmorgan_returnship",
    company: "JPMorgan Chase",
    programName: "ReEntry Program",
    durationWeeks: 15,
    weeklyPayEstimate: 2800,
    historicalConversionRate: 0.82,
    targetSalaryPostConversion: 130000,
    industry: "Finance",
    description: "Award-winning 15-week program across technology, operations, and corporate banking",
  },
  {
    id: "deloitte_returnship",
    company: "Deloitte",
    programName: "Encore",
    durationWeeks: 12,
    weeklyPayEstimate: 2200,
    historicalConversionRate: 0.78,
    targetSalaryPostConversion: 110000,
    industry: "Consulting",
    description: "12-week re-entry program at Deloitte for professionals with 2+ year breaks",
  },
  {
    id: "microsoft_returnship",
    company: "Microsoft",
    programName: "LEAP (Encore)",
    durationWeeks: 16,
    weeklyPayEstimate: 2800,
    historicalConversionRate: 0.85,
    targetSalaryPostConversion: 165000,
    industry: "Technology",
    description: "LEAP returnship for engineers and technical program managers with career gaps",
  },
  {
    id: "apple_returnship",
    company: "Apple",
    programName: "Apple Relaunch",
    durationWeeks: 12,
    weeklyPayEstimate: 3200,
    historicalConversionRate: 0.80,
    targetSalaryPostConversion: 175000,
    industry: "Technology",
    description: "Apple's re-entry program for experienced professionals across hardware, software, and design",
  },
  {
    id: "general_returnship",
    company: "Custom Program",
    programName: "Custom Returnship",
    durationWeeks: 12,
    weeklyPayEstimate: 2000,
    historicalConversionRate: 0.75,
    targetSalaryPostConversion: 0, // user sets this
    industry: "Any",
    description: "Model any returnship program with your own parameters",
  },
]

function buildPathCFs(
  breakYears: number,
  transitionYears: number,
  monthlyTransitionIncome: number,
  reentryYearOneSalary: number,
  growthRate: number,
  successProb: number,
  fallbackSalary: number,
): number[] {
  const totalBreakAndTransition = breakYears + transitionYears
  const flows: number[] = [0] // Year 0 = now (end of gap or start of evaluation)

  for (let t = 1; t <= RETURNSHIP_PROJECTION_YEARS; t++) {
    if (t <= Math.ceil(transitionYears)) {
      // In program / searching
      flows.push(monthlyTransitionIncome * 12)
    } else {
      const postReentryYear = t - Math.ceil(totalBreakAndTransition)
      const successEarnings = reentryYearOneSalary * Math.pow(1 + growthRate, Math.max(0, postReentryYear))
      const failureEarnings = fallbackSalary
      flows.push(successProb * successEarnings + (1 - successProb) * failureEarnings)
    }
  }

  return flows
}

export function calculateReturnship(input: ReturnshipInput): ReturnshipResult {
  const {
    preBreakSalary,
    returnshipWeeklyPay,
    returnshipDurationWeeks,
    conversionProbability,
    postConversionSalary,
    postConversionGrowthRate,
    directReentrySuccessRate,
    directReentrySearchMonths,
    directReentrySalary,
    directReentryGrowthRate,
    discountRate,
  } = input

  const returnshipDurationYears = returnshipDurationWeeks / 52
  const directSearchYears = directReentrySearchMonths / 12
  const returnshipMonthlyPay = returnshipWeeklyPay * (52 / 12)
  const fallbackSalary = preBreakSalary * 0.70 // if neither path succeeds

  // ─── Path 1: Returnship ───────────────────────────────────────────────────────
  const returnshipCFs = buildPathCFs(
    0,
    returnshipDurationYears,
    returnshipMonthlyPay,
    postConversionSalary,
    postConversionGrowthRate,
    conversionProbability,
    fallbackSalary,
  )

  const returnshipNPV = (() => { try { return npvFromSeries(returnshipCFs, discountRate) } catch { return null } })()
  const returnshipIRR = irrFromSeries(returnshipCFs)

  let returnshipPayback = Infinity
  let cum = 0
  for (let t = 0; t < returnshipCFs.length; t++) {
    const prev = cum; cum += returnshipCFs[t]
    if (cum >= 0 && t > 0) { returnshipPayback = (t - 1) + (-prev / returnshipCFs[t]); break }
  }

  const yr5Returnship = returnshipCFs[5] ?? 0
  const yr1Returnship = returnshipCFs[Math.ceil(returnshipDurationYears) + 1] ?? 0

  // ─── Path 2: Direct Re-entry ──────────────────────────────────────────────────
  const directCFs = buildPathCFs(
    0,
    directSearchYears,
    0,
    directReentrySalary,
    directReentryGrowthRate,
    directReentrySuccessRate,
    fallbackSalary,
  )

  const directNPV = (() => { try { return npvFromSeries(directCFs, discountRate) } catch { return null } })()
  const directIRR = irrFromSeries(directCFs)

  let directPayback = Infinity
  let cumD = 0
  for (let t = 0; t < directCFs.length; t++) {
    const prev = cumD; cumD += directCFs[t]
    if (cumD >= 0 && t > 0) { directPayback = (t - 1) + (-prev / directCFs[t]); break }
  }

  const yr5Direct = directCFs[5] ?? 0
  const yr1Direct = directCFs[Math.ceil(directSearchYears) + 1] ?? 0

  // ─── Path 3: Wait Another Year ────────────────────────────────────────────────
  // One more year of $0 income, then same as direct re-entry but delayed
  const waitCFs = [0, 0, ...directCFs.slice(1, RETURNSHIP_PROJECTION_YEARS)]
  const waitNPV = (() => { try { return npvFromSeries(waitCFs, discountRate) } catch { return null } })()
  const waitIRR = irrFromSeries(waitCFs)

  let waitPayback = Infinity
  let cumW = 0
  for (let t = 0; t < waitCFs.length; t++) {
    const prev = cumW; cumW += waitCFs[t]
    if (cumW >= 0 && t > 0) { waitPayback = (t - 1) + (-prev / waitCFs[t]); break }
  }

  // ─── Conversion break-even sweep ─────────────────────────────────────────────
  const conversionSweep = Array.from({ length: 13 }, (_, i) => {
    const pct = 0.4 + i * 0.05
    const sweptCFs = buildPathCFs(0, returnshipDurationYears, returnshipMonthlyPay, postConversionSalary, postConversionGrowthRate, pct, fallbackSalary)
    const sweptNPV = (() => { try { return npvFromSeries(sweptCFs, discountRate) } catch { return 0 } })()
    return { conversionPct: pct, returnshipNPV: sweptNPV, directNPV: directNPV ?? 0 }
  })

  // Find crossover
  let conversionBreakEvenPct = 0
  for (let i = 0; i < conversionSweep.length - 1; i++) {
    const a = conversionSweep[i]; const b = conversionSweep[i + 1]
    if (a.returnshipNPV <= a.directNPV && b.returnshipNPV >= b.directNPV) {
      // Linear interpolation
      const slope = (b.returnshipNPV - a.returnshipNPV) / (b.conversionPct - a.conversionPct)
      const offset = a.returnshipNPV - slope * a.conversionPct
      conversionBreakEvenPct = (a.directNPV - offset) / slope
      break
    }
  }

  // Determine winner
  const npvs = [
    { id: "returnship" as const, npv: returnshipNPV ?? -Infinity },
    { id: "direct" as const, npv: directNPV ?? -Infinity },
    { id: "wait" as const, npv: waitNPV ?? -Infinity },
  ]
  const winner = npvs.reduce((best, cur) => cur.npv > best.npv ? cur : best, npvs[0])

  const breakEvenStr = conversionBreakEvenPct > 0 && conversionBreakEvenPct < 1
    ? `The returnship wins as long as conversion probability exceeds ${(conversionBreakEvenPct * 100).toFixed(0)}%.`
    : conversionBreakEvenPct <= 0
    ? "The returnship wins even at the lowest conversion rates."
    : "Direct re-entry has higher NPV even at 100% conversion."

  const recommendation = winner.id === "returnship"
    ? `The returnship program is your best financial move. ${breakEvenStr}`
    : winner.id === "direct"
    ? `Direct re-entry has the highest NPV. ${breakEvenStr}`
    : `Waiting another year is not recommended — it costs you ${preBreakSalary > 0 ? new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(preBreakSalary) : ""} in foregone income.`

  const makeScore = (npv: number | null, irr: number | null, payback: number) =>
    scoreFinancials({ npv, irr, paybackPeriod: payback, debtToIncomeRatio: 0, conservativeNPV: npv !== null ? npv * 0.85 : null })

  return {
    returnshipPath: {
      label: "Returnship Program",
      description: `${returnshipDurationWeeks}-week program at ${Math.round(returnshipWeeklyPay * 52 / 1000)}k/yr stipend, ${Math.round(conversionProbability * 100)}% conversion rate`,
      cashFlows: returnshipCFs,
      npv: returnshipNPV,
      irr: returnshipIRR,
      paybackPeriod: returnshipPayback,
      expectedYear1Salary: yr1Returnship,
      expectedYear5Salary: yr5Returnship,
      score: makeScore(returnshipNPV, returnshipIRR, returnshipPayback),
    },
    directReentryPath: {
      label: "Direct Re-entry",
      description: `${directReentrySearchMonths}-month job search, ${Math.round(directReentrySuccessRate * 100)}% success rate`,
      cashFlows: directCFs,
      npv: directNPV,
      irr: directIRR,
      paybackPeriod: directPayback,
      expectedYear1Salary: yr1Direct,
      expectedYear5Salary: yr5Direct,
      score: makeScore(directNPV, directIRR, directPayback),
    },
    waitAnotherYearPath: {
      label: "Wait Another Year",
      description: "12 more months of gap, then direct re-entry",
      cashFlows: waitCFs,
      npv: waitNPV,
      irr: waitIRR,
      paybackPeriod: waitPayback,
      expectedYear1Salary: yr1Direct,
      expectedYear5Salary: yr5Direct * 0.9,
      score: makeScore(waitNPV, waitIRR, waitPayback),
    },
    conversionBreakEvenPct,
    recommendedPath: winner.id,
    recommendation,
    conversionSweep,
  }
}
