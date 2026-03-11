/**
 * Career Gap Salary Recovery Engine
 *
 * The core question: "Which re-entry path recovers my lifetime earnings fastest
 * after a career break?"
 *
 * Model:
 *   - Builds a "peer baseline": salary of someone who never stopped working
 *   - For each re-entry path: models the full cash flow including training cost,
 *     re-entry salary, and growth trajectory
 *   - Computes NPV, IRR, and "break-even vs peer" for each path
 *   - Identifies the optimal path by highest NPV
 *
 * This is the only tool on the market that quantifies career gap recovery
 * using DCF rather than qualitative advice.
 */

import { calculateLoanDetails, npvFromSeries, irrFromSeries, DISCOUNT_RATE } from "./mbaEngine"
import { scoreFinancials, type ScoreResult } from "./scoreEngine"

export const GAP_PROJECTION_YEARS = 10

export type ReentryPathType =
  | "same_role"       // Return to same role/industry
  | "lateral_move"    // Adjacent role with slight salary adjustment
  | "returnship"      // Structured returnship program (below-market → conversion)
  | "reskilling"      // Paid program before re-entry
  | "freelance_first" // Start freelancing to rebuild credibility

export type ReentryPath = {
  id: string
  label: string
  type: ReentryPathType
  /** Upfront cost of any training/program ($0 for direct re-entry) */
  programCost: number
  /** Time in months before earning full re-entry salary */
  timeToReentryMonths: number
  /** Income during program/search period (0 if full-time study, stipend for returnship) */
  incomeduringTransitionMonthly: number
  /** Year 1 salary after successful re-entry */
  reentrySalary: number
  /** Annual salary growth rate post re-entry */
  growthRate: number
  /** Probability of successfully getting this path (0-1) */
  successProbability: number
}

export type GapInput = {
  /** Salary immediately before the career break */
  preBreakSalary: number
  /** How long was (or will be) the career break, in years */
  breakDurationYears: number
  /** Annual salary growth rate the person would have had if they never stopped */
  peerGrowthRate: number
  /** Discount rate for NPV (default 0.06) */
  discountRate: number
  /** Re-entry paths to compare */
  paths: ReentryPath[]
}

export type PathResult = {
  pathId: string
  label: string
  type: ReentryPathType
  /** Expected (probability-weighted) cash flows vs the peer baseline */
  relativeFlows: number[]
  /** Absolute earnings per year */
  absoluteFlows: number[]
  npv: number | null
  irr: number | null
  paybackPeriod: number
  /** Year when cumulative earnings = peer's cumulative earnings */
  breakEvenVsPeerYear: number
  /** 10-year cumulative earnings (undiscounted) */
  cumulativeEarnings: number
  /** Gap in cumulative earnings vs peer over 10 years */
  cumulativeGapVsPeer: number
  score: ScoreResult
}

export type GapResult = {
  /** What the peer (no-break) earns over the projection period */
  peerCumulativeEarnings: number
  peerNPV: number
  /** NPV of gap cost: discounted foregone earnings during break */
  gapCostNPV: number
  /** Total undiscounted earnings lost during break */
  totalBreakCost: number
  paths: PathResult[]
  bestPathId: string
  bestPathLabel: string
  /** Key insight message for the user */
  keyInsight: string
}

export const DEFAULT_PATHS: ReentryPath[] = [
  {
    id: "direct_same_role",
    label: "Direct Re-entry — Same Role",
    type: "same_role",
    programCost: 0,
    timeToReentryMonths: 3,
    incomeduringTransitionMonthly: 0,
    reentrySalary: 0, // will be set to preBreakSalary * 0.85 in engine
    growthRate: 0.04,
    successProbability: 0.75,
  },
  {
    id: "returnship_program",
    label: "Corporate Returnship Program",
    type: "returnship",
    programCost: 0,
    timeToReentryMonths: 4,
    incomeduringTransitionMonthly: 0, // returnship stipend — set in UI
    reentrySalary: 0, // set to preBreakSalary * 0.9 (post-conversion)
    growthRate: 0.05,
    successProbability: 0.80,
  },
  {
    id: "reskilling_bootcamp",
    label: "Reskilling + Career Change",
    type: "reskilling",
    programCost: 12000,
    timeToReentryMonths: 6,
    incomeduringTransitionMonthly: 0,
    reentrySalary: 0, // set to preBreakSalary * 1.1 (target new role)
    growthRate: 0.06,
    successProbability: 0.65,
  },
]

export function calculateGapRecovery(input: GapInput): GapResult {
  const {
    preBreakSalary,
    breakDurationYears,
    peerGrowthRate,
    discountRate,
    paths,
  } = input

  // Peer baseline: salary growing from Year 1 (break start) onward, as if no break
  const totalYears = breakDurationYears + GAP_PROJECTION_YEARS
  const peerFlows: number[] = []
  for (let y = 1; y <= totalYears; y++) {
    peerFlows.push(preBreakSalary * Math.pow(1 + peerGrowthRate, y))
  }
  const peerNPV = npvFromSeries([0, ...peerFlows], discountRate)
  const peerCumulativeEarnings = peerFlows.reduce((a, b) => a + b, 0)

  // Break cost: earnings lost during gap (years 1..breakDurationYears)
  const breakFlows = peerFlows.slice(0, Math.ceil(breakDurationYears))
  const gapCostNPV = npvFromSeries([0, ...breakFlows.map(f => -f)], discountRate)
  const totalBreakCost = breakFlows.reduce((a, b) => a + b, 0)

  // Process each path
  const pathResults: PathResult[] = paths.map(path => {
    // Determine re-entry salary (allow 0 to be a sentinel for "use default")
    const effectiveReentrySalary = path.reentrySalary > 0
      ? path.reentrySalary
      : path.type === "same_role" ? preBreakSalary * 0.85
      : path.type === "returnship" ? preBreakSalary * 0.90
      : path.type === "reskilling" ? preBreakSalary * 1.10
      : preBreakSalary * 0.80

    const transitionYears = path.timeToReentryMonths / 12
    const absoluteFlows: number[] = []

    // During break + transition period: 0 or stipend income
    const breakAndTransitionYears = breakDurationYears + transitionYears
    for (let y = 1; y <= Math.ceil(breakAndTransitionYears); y++) {
      const monthsAtStipend = Math.min(12, path.timeToReentryMonths)
      absoluteFlows.push(path.incomeduringTransitionMonthly * monthsAtStipend)
    }

    // Post re-entry: growing salary for projection years
    for (let y = 1; y <= GAP_PROJECTION_YEARS; y++) {
      const postReentryYear = y
      absoluteFlows.push(
        effectiveReentrySalary * Math.pow(1 + path.growthRate, postReentryYear - 1)
      )
    }

    // Probability-weight the cash flows
    // On failure (1 - successProbability): earn 0 for transition period, then market rate
    const failureSalary = preBreakSalary * 0.70 // penalty for extended gap
    const weightedFlows: number[] = absoluteFlows.map((cf, i) => {
      const isPostReentry = i >= Math.ceil(breakAndTransitionYears)
      if (isPostReentry) {
        return path.successProbability * cf + (1 - path.successProbability) * failureSalary
      }
      return cf
    })

    // Relative flows vs peer baseline
    const peerAtEachYear = Array.from({ length: weightedFlows.length }, (_, i) =>
      preBreakSalary * Math.pow(1 + peerGrowthRate, i + 1)
    )
    const relativeFlows = weightedFlows.map((wf, i) => wf - peerAtEachYear[i])

    // Build DCF-ready series starting at Year 0 (today = start of break)
    const cfSeries = [-(path.programCost), ...relativeFlows]
    const npv = (() => { try { return npvFromSeries(cfSeries, discountRate) } catch { return null } })()
    const irr = irrFromSeries(cfSeries)

    // Cumulative earnings
    const cumulativeEarnings = weightedFlows.reduce((a, b) => a + b, 0)
    const cumulativeGapVsPeer = peerCumulativeEarnings - cumulativeEarnings

    // Break-even vs peer: year when cumulative(path) >= cumulative(peer)
    let breakEvenVsPeerYear = Infinity
    let cumPath = 0; let cumPeer = 0
    for (let i = 0; i < weightedFlows.length; i++) {
      cumPath += weightedFlows[i]
      cumPeer += peerAtEachYear[i]
      if (cumPath >= cumPeer) {
        breakEvenVsPeerYear = i + 1
        break
      }
    }

    // Payback period: years until cumulative CF (relative) >= 0
    let paybackPeriod = Infinity
    let cumRel = 0
    for (let t = 0; t < cfSeries.length; t++) {
      const prev = cumRel
      cumRel += cfSeries[t]
      if (cumRel >= 0 && t > 0) {
        paybackPeriod = (t - 1) + (-prev / cfSeries[t])
        break
      }
    }

    const score = scoreFinancials({
      npv,
      irr,
      paybackPeriod,
      debtToIncomeRatio: 0,
      conservativeNPV: npv !== null ? npv * 0.85 : null,
    })

    return {
      pathId: path.id,
      label: path.label,
      type: path.type,
      relativeFlows,
      absoluteFlows: weightedFlows,
      npv,
      irr,
      paybackPeriod,
      breakEvenVsPeerYear,
      cumulativeEarnings,
      cumulativeGapVsPeer,
      score,
    }
  })

  // Find best path
  const sorted = [...pathResults].sort((a, b) => (b.npv ?? -Infinity) - (a.npv ?? -Infinity))
  const best = sorted[0]

  // Generate insight
  let keyInsight = ""
  if (best) {
    const gapStr = best.cumulativeGapVsPeer > 0
      ? `You'll close the earnings gap in ${best.breakEvenVsPeerYear === Infinity ? ">10" : best.breakEvenVsPeerYear} years via ${best.label}.`
      : `${best.label} puts you ahead of where you'd be — no break at all.`
    keyInsight = `Best path: ${best.label} (NPV: ${best.npv !== null ? new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(best.npv) : "—"}). ${gapStr}`
  }

  return {
    peerCumulativeEarnings,
    peerNPV,
    gapCostNPV,
    totalBreakCost,
    paths: pathResults,
    bestPathId: best?.pathId ?? "",
    bestPathLabel: best?.label ?? "",
    keyInsight,
  }
}
