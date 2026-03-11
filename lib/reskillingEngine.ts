/**
 * Reskilling ROI Engine
 *
 * Models any reskilling program (bootcamp, certificate, part-time Masters, self-study)
 * as a capital allocation decision using timing-correct DCF.
 *
 * Cash flow model:
 *   CF[0]   = -(upfront cost + opportunity cost during full-time program)
 *   CF[1..programYears] = reduced income during part-time program (if applicable)
 *   CF[program+1..LOAN_TERM] = salaryDelta - annual loan payment
 *   CF[LOAN_TERM+1..10]      = salaryDelta
 *
 * Key differentiation: includes a "vs no-change" NPV baseline
 * so users see the true marginal value of reskilling.
 */

import { calculateLoanDetails, npvFromSeries, irrFromSeries, DISCOUNT_RATE, LOAN_TERM_YEARS } from "./mbaEngine"
import { scoreFinancials, type ScoreResult } from "./scoreEngine"

export const RESKILLING_PROJECTION_YEARS = 10

export type ProgramType = "bootcamp" | "certificate" | "parttime_masters" | "self_study"

export type ReskillingInput = {
  /** Current annual salary */
  currentSalary: number
  /** Current annual salary growth rate (no-change scenario) */
  currentGrowthRate: number
  /** Total program cost (tuition + materials) */
  programCost: number
  /** Program duration in months */
  programDurationMonths: number
  /** Is this full-time (true = you quit/stop working) or part-time? */
  isFullTime: boolean
  /** If part-time: fraction of work capacity lost to studying (0.0–1.0) */
  studyTimeImpactPct: number
  /** Expected salary in the new role at re-entry */
  targetSalary: number
  /** Expected annual salary growth rate in the new role */
  targetGrowthRate: number
  /** Amount financed via loan (0 = self-funded) */
  loanAmount: number
  /** Annual loan interest rate (e.g. 0.06) */
  loanInterestRate: number
  /** Discount rate for NPV (default 0.06) */
  discountRate: number
}

export type ReskillingResult = {
  cashFlows: number[]
  npv: number | null
  irr: number | null
  paybackPeriod: number
  totalProgramCost: number
  opportunityCost: number
  salaryDelta: number
  /** NPV of staying in current career with no reskilling */
  baselineNPV: number
  /** NPV advantage of reskilling vs doing nothing */
  npvVsNoChange: number | null
  sensitivity: {
    optimistic: number | null
    conservative: number | null
  }
  loanDetails: ReturnType<typeof calculateLoanDetails>
  score: ScoreResult
}

export type ReskillingPreset = {
  id: string
  label: string
  programType: ProgramType
  typicalCost: number
  typicalDurationMonths: number
  isFullTime: boolean
  studyTimeImpactPct: number
  medianCurrentSalary: number
  medianTargetSalary: number
  targetGrowthRate: number
  currentGrowthRate: number
  description: string
}

export const RESKILLING_PRESETS: ReskillingPreset[] = [
  {
    id: "fullstack_bootcamp",
    label: "Full-Stack Bootcamp → Software Engineer",
    programType: "bootcamp",
    typicalCost: 15000,
    typicalDurationMonths: 4,
    isFullTime: true,
    studyTimeImpactPct: 1.0,
    medianCurrentSalary: 55000,
    medianTargetSalary: 95000,
    targetGrowthRate: 0.06,
    currentGrowthRate: 0.03,
    description: "Intensive coding bootcamp targeting entry-level SWE roles at tech companies",
  },
  {
    id: "data_analytics_cert",
    label: "Google Data Analytics Certificate",
    programType: "certificate",
    typicalCost: 300,
    typicalDurationMonths: 6,
    isFullTime: false,
    studyTimeImpactPct: 0.1,
    medianCurrentSalary: 60000,
    medianTargetSalary: 75000,
    targetGrowthRate: 0.05,
    currentGrowthRate: 0.03,
    description: "Part-time Coursera certificate targeting data analyst and BI analyst roles",
  },
  {
    id: "aws_solutions_architect",
    label: "AWS Solutions Architect Certification",
    programType: "certificate",
    typicalCost: 800,
    typicalDurationMonths: 3,
    isFullTime: false,
    studyTimeImpactPct: 0.15,
    medianCurrentSalary: 80000,
    medianTargetSalary: 115000,
    targetGrowthRate: 0.06,
    currentGrowthRate: 0.03,
    description: "Cloud architect certification for tech or IT professionals targeting cloud roles",
  },
  {
    id: "pmp_certification",
    label: "PMP Certification → Senior PM",
    programType: "certificate",
    typicalCost: 1500,
    typicalDurationMonths: 4,
    isFullTime: false,
    studyTimeImpactPct: 0.1,
    medianCurrentSalary: 85000,
    medianTargetSalary: 110000,
    targetGrowthRate: 0.04,
    currentGrowthRate: 0.03,
    description: "Project Management Professional cert targeting senior PM and program manager roles",
  },
  {
    id: "ux_bootcamp",
    label: "UX Design Bootcamp → Product Designer",
    programType: "bootcamp",
    typicalCost: 12000,
    typicalDurationMonths: 6,
    isFullTime: true,
    studyTimeImpactPct: 1.0,
    medianCurrentSalary: 50000,
    medianTargetSalary: 85000,
    targetGrowthRate: 0.05,
    currentGrowthRate: 0.02,
    description: "Full-time UX/product design bootcamp targeting entry-level designer roles",
  },
  {
    id: "data_science_masters",
    label: "Part-Time Online MS Data Science",
    programType: "parttime_masters",
    typicalCost: 20000,
    typicalDurationMonths: 24,
    isFullTime: false,
    studyTimeImpactPct: 0.25,
    medianCurrentSalary: 90000,
    medianTargetSalary: 130000,
    targetGrowthRate: 0.07,
    currentGrowthRate: 0.03,
    description: "Online MS targeting ML engineer or data science roles at tech companies",
  },
  {
    id: "cybersecurity_cert",
    label: "CompTIA Security+ → Cybersecurity Analyst",
    programType: "certificate",
    typicalCost: 600,
    typicalDurationMonths: 3,
    isFullTime: false,
    studyTimeImpactPct: 0.1,
    medianCurrentSalary: 65000,
    medianTargetSalary: 90000,
    targetGrowthRate: 0.06,
    currentGrowthRate: 0.03,
    description: "Entry-level cybersecurity cert targeting SOC analyst and security roles",
  },
  {
    id: "digital_marketing_cert",
    label: "Google/Meta Marketing Certificates",
    programType: "certificate",
    typicalCost: 500,
    typicalDurationMonths: 4,
    isFullTime: false,
    studyTimeImpactPct: 0.1,
    medianCurrentSalary: 50000,
    medianTargetSalary: 65000,
    targetGrowthRate: 0.04,
    currentGrowthRate: 0.02,
    description: "Digital marketing certifications targeting growth marketing and paid media roles",
  },
  {
    id: "self_taught_dev",
    label: "Self-Taught Developer (Free Resources)",
    programType: "self_study",
    typicalCost: 0,
    typicalDurationMonths: 12,
    isFullTime: false,
    studyTimeImpactPct: 0.3,
    medianCurrentSalary: 55000,
    medianTargetSalary: 80000,
    targetGrowthRate: 0.05,
    currentGrowthRate: 0.02,
    description: "Self-directed learning via freeCodeCamp, The Odin Project, and open-source contribution",
  },
]

export function calculateReskilling(input: ReskillingInput): ReskillingResult {
  const {
    currentSalary,
    currentGrowthRate,
    programCost,
    programDurationMonths,
    isFullTime,
    studyTimeImpactPct,
    targetSalary,
    targetGrowthRate,
    loanAmount,
    loanInterestRate,
    discountRate,
  } = input

  const programYears = programDurationMonths / 12
  const loanDetails = calculateLoanDetails(loanAmount, loanInterestRate, LOAN_TERM_YEARS)
  const annualLoanPayment = loanDetails.monthlyPayment * 12

  // Opportunity cost: income lost during program
  let opportunityCost = 0
  if (isFullTime) {
    opportunityCost = currentSalary * programYears
  } else {
    opportunityCost = currentSalary * programYears * studyTimeImpactPct
  }

  const upfrontCash = programCost - loanAmount
  const totalProgramCost = programCost + opportunityCost + loanDetails.totalInterest

  const salaryDelta = targetSalary - currentSalary

  // Build cash flow series (annual, 10-year horizon)
  const cashFlows: number[] = [-(upfrontCash + opportunityCost)]

  for (let t = 1; t <= RESKILLING_PROJECTION_YEARS; t++) {
    if (t <= programYears && !isFullTime) {
      // During part-time study: partial income reduction already in CF[0], annual delta begins at re-entry
      const yearlyGrowth = Math.pow(1 + targetGrowthRate, t - programYears)
      const newSalary = targetSalary * yearlyGrowth
      const currentAtT = currentSalary * Math.pow(1 + currentGrowthRate, t)
      const delta = newSalary - currentAtT
      cashFlows.push(delta - (t <= LOAN_TERM_YEARS ? annualLoanPayment : 0))
    } else {
      const yearsPostProgram = t - programYears
      const grownTargetSalary = targetSalary * Math.pow(1 + targetGrowthRate, Math.max(0, yearsPostProgram))
      const grownCurrentSalary = currentSalary * Math.pow(1 + currentGrowthRate, t)
      const delta = grownTargetSalary - grownCurrentSalary
      cashFlows.push(delta - (t <= LOAN_TERM_YEARS ? annualLoanPayment : 0))
    }
  }

  const npv = (() => { try { return npvFromSeries(cashFlows, discountRate) } catch { return null } })()
  const irr = irrFromSeries(cashFlows)

  // Baseline NPV: staying in current career (opportunity cost of reskilling vs doing nothing)
  // Baseline = NPV of (0 incremental CF each year) = 0, but the question is what's the gain
  // We compute: sum of undiscounted salary gains over 10 years
  const baselineCFs = [0, ...Array.from({ length: RESKILLING_PROJECTION_YEARS }, (_, i) => {
    const yearsPostProgram = i + 1 - programYears
    const grownTarget = targetSalary * Math.pow(1 + targetGrowthRate, Math.max(0, yearsPostProgram))
    const grownCurrent = currentSalary * Math.pow(1 + currentGrowthRate, i + 1)
    return grownTarget - grownCurrent
  })]
  const baselineNPV = npvFromSeries([0, ...Array.from({ length: RESKILLING_PROJECTION_YEARS }, () => 0)], discountRate)
  const npvVsNoChange = npv !== null ? npv - baselineNPV : null

  // Sensitivity: ±10% on salary delta
  const sensitivity = {
    optimistic: (() => {
      try {
        return npvFromSeries(
          cashFlows.map((cf, t) => t === 0 ? cf : cf + salaryDelta * 0.1),
          discountRate
        )
      } catch { return null }
    })(),
    conservative: (() => {
      try {
        return npvFromSeries(
          cashFlows.map((cf, t) => t === 0 ? cf : cf - salaryDelta * 0.1),
          discountRate
        )
      } catch { return null }
    })(),
  }

  // Payback period
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

  const score = scoreFinancials({
    npv,
    irr,
    paybackPeriod,
    debtToIncomeRatio: targetSalary > 0 ? (loanDetails.monthlyPayment / (targetSalary / 12)) : 0,
    conservativeNPV: sensitivity.conservative,
  })

  return {
    cashFlows,
    npv,
    irr,
    paybackPeriod,
    totalProgramCost,
    opportunityCost,
    salaryDelta,
    baselineNPV,
    npvVsNoChange,
    sensitivity,
    loanDetails,
    score,
  }
}
