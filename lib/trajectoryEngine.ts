/**
 * Lifetime Earnings Trajectory Engine
 *
 * Models total compensation from today to retirement across 1-3 user-defined scenarios.
 * Each scenario is built from career phases (each with its own salary, growth, and optional break).
 * Outputs nominal lifetime earnings, inflation-adjusted real earnings, and NPV.
 *
 * Key use case: comparing "stay in current career", "pivot + reskill", "take a break now" scenarios
 * over a 20-30 year horizon to understand which path maximizes lifetime financial outcomes.
 */

import { npvFromSeries, irrFromSeries, DISCOUNT_RATE } from "./mbaEngine"

export type BreakType = "full_exit" | "part_time"

export type CareerPhase = {
  id: string
  label: string
  durationYears: number
  startingSalary: number
  annualGrowthRate: number
  includesBreak: boolean
  breakDurationYears?: number
  breakType?: BreakType
  /** Fraction of salary earned during a part-time break (default 0.4) */
  partTimeFraction?: number
}

export type TrajectoryScenario = {
  id: string
  label: string
  color: string
  phases: CareerPhase[]
}

export type TrajectoryInput = {
  currentAge: number
  retirementAge: number
  inflationRate: number
  discountRate: number
  scenarios: TrajectoryScenario[]
}

export type ScenarioResult = {
  scenarioId: string
  label: string
  color: string
  /** One entry per year from currentAge to retirementAge */
  annualEarnings: number[]
  nominalLifetimeEarnings: number
  realLifetimeEarnings: number
  npv: number | null
  peakEarningsYear: number
  peakEarningsAmount: number
  averageAnnualEarnings: number
  /** Year (from now) when this scenario first exceeds the baseline (scenario 0) */
  breakEvenVsBaselineYear: number | null
}

export type TrajectoryResult = {
  yearsToRetirement: number
  scenarios: ScenarioResult[]
  bestScenarioId: string
  bestByNPV: string
  bestByLifetime: string
  insights: string[]
}

export function buildEarningsArray(phases: CareerPhase[], totalYears: number): number[] {
  const earnings: number[] = []
  let yearIndex = 0

  for (const phase of phases) {
    if (yearIndex >= totalYears) break

    const phaseYears = Math.min(phase.durationYears, totalYears - yearIndex)

    if (phase.includesBreak && phase.breakDurationYears && phase.breakDurationYears > 0) {
      // Working years before break
      const workYears = Math.max(0, phaseYears - phase.breakDurationYears)
      for (let y = 0; y < workYears && yearIndex < totalYears; y++) {
        earnings.push(phase.startingSalary * Math.pow(1 + phase.annualGrowthRate, y))
        yearIndex++
      }
      // Break years
      const breakYears = Math.min(phase.breakDurationYears, totalYears - yearIndex)
      const partTimeFrac = phase.partTimeFraction ?? (phase.breakType === "part_time" ? 0.4 : 0)
      const salaryAtBreakStart = phase.startingSalary * Math.pow(1 + phase.annualGrowthRate, workYears)
      for (let y = 0; y < breakYears && yearIndex < totalYears; y++) {
        earnings.push(salaryAtBreakStart * partTimeFrac)
        yearIndex++
      }
    } else {
      for (let y = 0; y < phaseYears && yearIndex < totalYears; y++) {
        earnings.push(phase.startingSalary * Math.pow(1 + phase.annualGrowthRate, y))
        yearIndex++
      }
    }
  }

  // Pad with zeros if phases don't cover full horizon
  while (earnings.length < totalYears) {
    earnings.push(0)
  }

  return earnings.slice(0, totalYears)
}

export function calculateTrajectory(input: TrajectoryInput): TrajectoryResult {
  const { currentAge, retirementAge, inflationRate, discountRate, scenarios } = input
  const yearsToRetirement = Math.max(1, retirementAge - currentAge)

  const scenarioResults: ScenarioResult[] = scenarios.map(scenario => {
    const annualEarnings = buildEarningsArray(scenario.phases, yearsToRetirement)

    const nominalLifetimeEarnings = annualEarnings.reduce((a, b) => a + b, 0)

    // Real (inflation-adjusted) lifetime earnings
    const realLifetimeEarnings = annualEarnings.reduce((sum, e, t) =>
      sum + e / Math.pow(1 + inflationRate, t), 0)

    // NPV
    const cfSeries = [0, ...annualEarnings]
    const npv = (() => { try { return npvFromSeries(cfSeries, discountRate) } catch { return null } })()

    // Peak earnings
    let peakAmount = 0; let peakYear = 0
    annualEarnings.forEach((e, i) => { if (e > peakAmount) { peakAmount = e; peakYear = i + 1 } })

    const averageAnnualEarnings = nominalLifetimeEarnings / yearsToRetirement

    return {
      scenarioId: scenario.id,
      label: scenario.label,
      color: scenario.color,
      annualEarnings,
      nominalLifetimeEarnings,
      realLifetimeEarnings,
      npv,
      peakEarningsYear: peakYear,
      peakEarningsAmount: peakAmount,
      averageAnnualEarnings,
      breakEvenVsBaselineYear: null, // computed below
    }
  })

  // Compute break-even vs baseline (scenario 0)
  if (scenarioResults.length > 1) {
    const baseline = scenarioResults[0].annualEarnings
    for (let i = 1; i < scenarioResults.length; i++) {
      let cumBase = 0; let cumScenario = 0
      for (let y = 0; y < yearsToRetirement; y++) {
        cumBase += baseline[y]
        cumScenario += scenarioResults[i].annualEarnings[y]
        if (cumScenario >= cumBase) {
          scenarioResults[i] = { ...scenarioResults[i], breakEvenVsBaselineYear: y + 1 }
          break
        }
      }
    }
  }

  // Determine winners
  const sortedByNPV = [...scenarioResults].sort((a, b) => (b.npv ?? -Infinity) - (a.npv ?? -Infinity))
  const sortedByLifetime = [...scenarioResults].sort((a, b) => b.nominalLifetimeEarnings - a.nominalLifetimeEarnings)

  // Insights
  const insights: string[] = []
  const best = sortedByNPV[0]
  if (best && scenarioResults.length > 1) {
    const worst = sortedByNPV[sortedByNPV.length - 1]
    const gap = (best.npv ?? 0) - (worst.npv ?? 0)
    if (gap > 0) {
      insights.push(`"${best.label}" has the highest NPV, beating the lowest scenario by ${new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(gap)}.`)
    }
    if (best.peakEarningsYear > 0) {
      insights.push(`Peak earnings in "${best.label}" occur at age ${currentAge + best.peakEarningsYear} (${new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(best.peakEarningsAmount)}/yr).`)
    }
    const breakEven = scenarioResults.find(s => s.scenarioId !== scenarioResults[0].scenarioId && s.breakEvenVsBaselineYear !== null)
    if (breakEven && breakEven.breakEvenVsBaselineYear !== null) {
      insights.push(`"${breakEven.label}" catches up to the baseline earnings by Year ${breakEven.breakEvenVsBaselineYear} (age ${currentAge + breakEven.breakEvenVsBaselineYear}).`)
    }
  }

  return {
    yearsToRetirement,
    scenarios: scenarioResults,
    bestScenarioId: sortedByNPV[0]?.scenarioId ?? "",
    bestByNPV: sortedByNPV[0]?.label ?? "",
    bestByLifetime: sortedByLifetime[0]?.label ?? "",
    insights,
  }
}

// ─── Default scenarios ──────────────────────────────────────────────────────────

export function buildDefaultScenarios(currentSalary: number): TrajectoryScenario[] {
  return [
    {
      id: "stay",
      label: "Stay in Current Career",
      color: "#60a5fa", // blue
      phases: [
        {
          id: "stay_1",
          label: "Current career",
          durationYears: 30,
          startingSalary: currentSalary,
          annualGrowthRate: 0.04,
          includesBreak: false,
        },
      ],
    },
    {
      id: "pivot",
      label: "Pivot + Reskill (6 months)",
      color: "#4ade80", // green
      phases: [
        {
          id: "pivot_gap",
          label: "Reskilling break",
          durationYears: 0.5,
          startingSalary: 0,
          annualGrowthRate: 0,
          includesBreak: true,
          breakDurationYears: 0.5,
          breakType: "full_exit",
        },
        {
          id: "pivot_new_career",
          label: "New career after reskilling",
          durationYears: 29.5,
          startingSalary: currentSalary * 1.20,
          annualGrowthRate: 0.06,
          includesBreak: false,
        },
      ],
    },
    {
      id: "break_then_return",
      label: "2-Year Break, Then Return",
      color: "#f87171", // red
      phases: [
        {
          id: "break",
          label: "Career break",
          durationYears: 2,
          startingSalary: currentSalary,
          annualGrowthRate: 0,
          includesBreak: true,
          breakDurationYears: 2,
          breakType: "full_exit",
        },
        {
          id: "return",
          label: "Post-break re-entry",
          durationYears: 28,
          startingSalary: currentSalary * 0.85,
          annualGrowthRate: 0.04,
          includesBreak: false,
        },
      ],
    },
  ]
}
