/**
 * Compensation Recovery Engine
 *
 * For career returners who've already re-entered and suspect they took
 * a below-market offer. Answers:
 *   1. How much are you leaving on the table annually?
 *   2. What is the 10-year NPV of that underpayment?
 *   3. Which action (ask now / wait / switch) has the best financial outcome?
 *
 * The "gap penalty" model: research shows a ~3-5% salary discount per
 * career break year, eroding over time as performance proves out.
 */

import { npvFromSeries, DISCOUNT_RATE, PROJECTION_YEARS } from "./mbaEngine"
import {
  getBenchmark,
  type BenchmarkKey,
  type LocationTier,
  type CompanySize,
  type ExperienceBand,
} from "./compensationBenchmarks"

export const GAP_PENALTY_PER_YEAR = 0.04 // 4% per gap year — research-based estimate

export type CompensationInput = {
  currentSalary: number
  yearsExperience: number
  gapYears: number
  industry: string
  role: string
  location: LocationTier
  companySize: CompanySize
  experience: ExperienceBand
  discountRate: number
  /** Annual growth rate for salary projection */
  annualGrowthRate: number
}

export type NegotiationScenario = {
  label: string
  description: string
  expectedSalaryYear1: number
  npvGain: number | null
  /** Cost of this action (months of lost income, etc.) */
  actionCost: number
  netNPVGain: number | null
  recommendation: string
}

export type CompensationResult = {
  benchmark: { p25: number; p50: number; p75: number; p90: number } | null
  currentVsMedian: number
  annualLeaveOnTable: number
  tenYearNPVLeaveOnTable: number
  /** Estimated salary without gap penalty (what you'd earn at market) */
  marketSalaryAtYourExperience: number
  /** Estimated contribution of the career gap to salary discount */
  estimatedGapPenalty: number
  /** Years until gap penalty erodes to <5% impact */
  gapPenaltyRecoveryYears: number
  negotiationScenarios: NegotiationScenario[]
  /** Percentile the user's current salary sits at */
  currentPercentile: number
}

export function calculateCompensation(input: CompensationInput): CompensationResult {
  const {
    currentSalary,
    gapYears,
    industry,
    role,
    location,
    companySize,
    experience,
    discountRate,
    annualGrowthRate,
  } = input

  const benchmarkKey: BenchmarkKey = { industry, role, experience, location, companySize }
  const benchmark = getBenchmark(benchmarkKey)

  // Estimate gap penalty
  const estimatedGapPenalty = currentSalary * GAP_PENALTY_PER_YEAR * gapYears

  // Market salary = what they'd earn without the gap discount
  const marketSalaryAtYourExperience = benchmark?.p50 ?? (currentSalary + estimatedGapPenalty)

  const currentVsMedian = benchmark ? currentSalary - benchmark.p50 : 0
  const annualLeaveOnTable = Math.max(0, -currentVsMedian)

  // NPV of 10-year underpayment gap
  const underpaymentFlows = [0, ...Array.from({ length: PROJECTION_YEARS }, (_, i) => {
    const gap = annualLeaveOnTable * Math.pow(1 + annualGrowthRate, i)
    return -gap
  })]
  const tenYearNPVLeaveOnTable = Math.abs(npvFromSeries(underpaymentFlows, discountRate))

  // Gap penalty recovery: penalty erodes as performance proves out (modeled as linear decay)
  const gapPenaltyRecoveryYears = gapYears * 1.5 // rough industry research estimate

  // Percentile estimation
  let currentPercentile = 50
  if (benchmark) {
    if (currentSalary <= benchmark.p25) currentPercentile = 15
    else if (currentSalary <= benchmark.p50) currentPercentile = 25 + 25 * (currentSalary - benchmark.p25) / (benchmark.p50 - benchmark.p25)
    else if (currentSalary <= benchmark.p75) currentPercentile = 50 + 25 * (currentSalary - benchmark.p50) / (benchmark.p75 - benchmark.p50)
    else if (currentSalary <= benchmark.p90) currentPercentile = 75 + 15 * (currentSalary - benchmark.p75) / (benchmark.p90 - benchmark.p75)
    else currentPercentile = 90
  }

  // ─── Negotiation scenarios ────────────────────────────────────────────────────

  const negotiate = (targetSalary: number, delayCostMonths: number): NegotiationScenario["npvGain"] => {
    const delta = targetSalary - currentSalary
    if (delta <= 0) return 0
    const flows = [0, ...Array.from({ length: PROJECTION_YEARS }, (_, i) =>
      delta * Math.pow(1 + annualGrowthRate, i)
    )]
    const grossNPV = npvFromSeries(flows, discountRate)
    const delayCost = currentSalary / 12 * delayCostMonths // opportunity cost of waiting
    return grossNPV - delayCost
  }

  // Scenario 1: Ask for raise now
  const askNowTarget = benchmark ? Math.max(benchmark.p50, currentSalary * 1.10) : currentSalary * 1.10
  const askNowNPV = negotiate(askNowTarget, 0)

  // Scenario 2: Wait 6 months, build case, then ask
  const waitTarget = benchmark ? Math.max(benchmark.p50 * 1.06, currentSalary * 1.12) : currentSalary * 1.12
  const waitNPV = negotiate(waitTarget, 6)

  // Scenario 3: Switch jobs
  const switchTarget = benchmark ? Math.max(benchmark.p75, currentSalary * 1.20) : currentSalary * 1.20
  const switchNPV = negotiate(switchTarget, 3) // 3-month search

  const scenarios: NegotiationScenario[] = [
    {
      label: "Ask for Raise Now",
      description: `Target the market median (${benchmark ? new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(benchmark.p50) : "N/A"})`,
      expectedSalaryYear1: askNowTarget,
      npvGain: askNowNPV,
      actionCost: 0,
      netNPVGain: askNowNPV,
      recommendation: askNowNPV !== null && askNowNPV > 0
        ? "Strong case if you've been performing well. Asking has no direct cost."
        : "You're already at or above median — use this to negotiate for title or equity instead.",
    },
    {
      label: "Build Case, Ask in 6 Months",
      description: "Accumulate wins, get promoted, target above-median pay",
      expectedSalaryYear1: waitTarget,
      npvGain: waitNPV,
      actionCost: (currentSalary / 12) * 6 * ((askNowTarget - currentSalary) / currentSalary),
      netNPVGain: waitNPV,
      recommendation: "Best strategy if you've had no wins to point to yet. 6 months of documented impact dramatically strengthens your case.",
    },
    {
      label: "Switch Jobs",
      description: `Target 75th percentile (${benchmark ? new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(benchmark.p75) : "N/A"}) at a new employer`,
      expectedSalaryYear1: switchTarget,
      npvGain: switchNPV,
      actionCost: (currentSalary / 12) * 3,
      netNPVGain: switchNPV,
      recommendation: "Highest salary gains typically come from switching. Risk: 3-month search window and loss of institutional knowledge/relationships.",
    },
  ]

  return {
    benchmark,
    currentVsMedian,
    annualLeaveOnTable,
    tenYearNPVLeaveOnTable,
    marketSalaryAtYourExperience,
    estimatedGapPenalty,
    gapPenaltyRecoveryYears,
    negotiationScenarios: scenarios,
    currentPercentile: Math.round(currentPercentile),
  }
}
