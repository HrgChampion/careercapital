/**
 * Education Program Comparison Engine
 *
 * Side-by-side DCF comparison of 2-4 education programs on equal financial footing.
 * All programs evaluated using the same methodology: NPV, IRR, payback vs no-program baseline.
 *
 * This answers: "Given my situation, which investment — MBA, bootcamp, certificate, or nothing
 * — maximizes my 10-year financial outcome?"
 */

import { calculateLoanDetails, npvFromSeries, irrFromSeries, DISCOUNT_RATE, LOAN_TERM_YEARS } from "./mbaEngine"
import { scoreFinancials, type ScoreResult } from "./scoreEngine"

export const COMPARISON_PROJECTION_YEARS = 10

export type ProgramType = "mba" | "masters" | "bootcamp" | "certificate" | "self_study" | "none"

export type ProgramOption = {
  id: string
  label: string
  type: ProgramType
  tuitionCost: number
  programDurationYears: number
  /** True = quit job to study; false = keep working */
  isFullTime: boolean
  /** If part-time: fraction of work capacity consumed (0.0–1.0) */
  studyImpactPct: number
  postProgramSalary: number
  postProgramGrowthRate: number
  loanAmount: number
  loanInterestRate: number
}

export type ComparisonInput = {
  currentSalary: number
  currentGrowthRate: number
  discountRate: number
  programs: ProgramOption[]
}

export type ProgramResult = {
  programId: string
  label: string
  type: ProgramType
  cashFlows: number[]
  npv: number | null
  irr: number | null
  paybackPeriod: number
  totalInvestment: number
  opportunityCost: number
  salaryDelta: number
  /** NPV advantage vs doing nothing */
  npvVsNoProgram: number | null
  sensitivity: { optimistic: number | null; conservative: number | null }
  loanDetails: ReturnType<typeof calculateLoanDetails>
  score: ScoreResult
  rank: number
}

export type ComparisonResult = {
  /** No-program baseline: NPV of staying in current career */
  noProgramNPV: number
  programs: ProgramResult[]
  winnerId: string
  winnerLabel: string
  winnerMargin: number | null
  insights: string[]
}

// ─── Preset comparison bundles ──────────────────────────────────────────────────

export type ComparisonPreset = {
  id: string
  label: string
  description: string
  programs: ProgramOption[]
  currentSalary: number
  currentGrowthRate: number
}

export const COMPARISON_PRESETS: ComparisonPreset[] = [
  {
    id: "mba_vs_bootcamp",
    label: "Full-Time MBA vs Coding Bootcamp",
    description: "Classic dilemma: $150k MBA vs $15k bootcamp for a tech career transition",
    currentSalary: 85000,
    currentGrowthRate: 0.03,
    programs: [
      {
        id: "fulltime_mba",
        label: "Full-Time MBA (Top-20)",
        type: "mba",
        tuitionCost: 130000,
        programDurationYears: 2,
        isFullTime: true,
        studyImpactPct: 1.0,
        postProgramSalary: 160000,
        postProgramGrowthRate: 0.05,
        loanAmount: 100000,
        loanInterestRate: 0.07,
      },
      {
        id: "coding_bootcamp",
        label: "Coding Bootcamp (4 months)",
        type: "bootcamp",
        tuitionCost: 15000,
        programDurationYears: 0.33,
        isFullTime: true,
        studyImpactPct: 1.0,
        postProgramSalary: 95000,
        postProgramGrowthRate: 0.06,
        loanAmount: 0,
        loanInterestRate: 0.06,
      },
    ],
  },
  {
    id: "mba_vs_masters",
    label: "MBA vs Specialized Masters",
    description: "Generalist MBA vs targeted MS in Data Science or Finance",
    currentSalary: 90000,
    currentGrowthRate: 0.04,
    programs: [
      {
        id: "fulltime_mba",
        label: "Full-Time MBA (Top-20)",
        type: "mba",
        tuitionCost: 130000,
        programDurationYears: 2,
        isFullTime: true,
        studyImpactPct: 1.0,
        postProgramSalary: 165000,
        postProgramGrowthRate: 0.05,
        loanAmount: 100000,
        loanInterestRate: 0.07,
      },
      {
        id: "ms_data",
        label: "Online MS Data Science (part-time)",
        type: "masters",
        tuitionCost: 22000,
        programDurationYears: 1.5,
        isFullTime: false,
        studyImpactPct: 0.2,
        postProgramSalary: 130000,
        postProgramGrowthRate: 0.07,
        loanAmount: 0,
        loanInterestRate: 0.06,
      },
    ],
  },
  {
    id: "cert_vs_bootcamp_vs_nothing",
    label: "Certificate vs Bootcamp vs Staying Put",
    description: "Low-cost upskilling paths vs doing nothing",
    currentSalary: 60000,
    currentGrowthRate: 0.02,
    programs: [
      {
        id: "google_cert",
        label: "Google Data Analytics Certificate",
        type: "certificate",
        tuitionCost: 300,
        programDurationYears: 0.5,
        isFullTime: false,
        studyImpactPct: 0.1,
        postProgramSalary: 75000,
        postProgramGrowthRate: 0.05,
        loanAmount: 0,
        loanInterestRate: 0,
      },
      {
        id: "ux_bootcamp",
        label: "UX Design Bootcamp (6 months)",
        type: "bootcamp",
        tuitionCost: 12000,
        programDurationYears: 0.5,
        isFullTime: true,
        studyImpactPct: 1.0,
        postProgramSalary: 85000,
        postProgramGrowthRate: 0.05,
        loanAmount: 0,
        loanInterestRate: 0,
      },
    ],
  },
]

export function calculateComparison(input: ComparisonInput): ComparisonResult {
  const { currentSalary, currentGrowthRate, discountRate, programs } = input

  // No-program baseline NPV: current career earnings over 10 years
  const baselineFlows = [0, ...Array.from({ length: COMPARISON_PROJECTION_YEARS }, (_, i) =>
    currentSalary * Math.pow(1 + currentGrowthRate, i + 1)
  )]
  const noProgramNPV = npvFromSeries(baselineFlows, discountRate)

  // Evaluate each program
  const rawResults: Omit<ProgramResult, "rank">[] = programs.map(prog => {
    const opportunityCost = prog.isFullTime
      ? currentSalary * prog.programDurationYears
      : currentSalary * prog.programDurationYears * prog.studyImpactPct

    const loanDetails = calculateLoanDetails(prog.loanAmount, prog.loanInterestRate, LOAN_TERM_YEARS)
    const annualLoanPayment = loanDetails.monthlyPayment * 12
    const upfrontCash = prog.tuitionCost - prog.loanAmount
    const totalInvestment = prog.tuitionCost + opportunityCost + loanDetails.totalInterest
    const salaryDelta = prog.postProgramSalary - currentSalary

    // Build cash flow series
    const cashFlows: number[] = [-(upfrontCash + opportunityCost)]
    for (let t = 1; t <= COMPARISON_PROJECTION_YEARS; t++) {
      const postProgramYear = t - prog.programDurationYears
      if (postProgramYear <= 0) {
        // Still in program (part-time overlap)
        const partialDelta = (prog.isFullTime ? 0 : prog.postProgramSalary - currentSalary)
        cashFlows.push(partialDelta - (t <= LOAN_TERM_YEARS ? annualLoanPayment : 0))
      } else {
        const grownSalary = prog.postProgramSalary * Math.pow(1 + prog.postProgramGrowthRate, postProgramYear - 1)
        const grownCurrent = currentSalary * Math.pow(1 + currentGrowthRate, t)
        const delta = grownSalary - grownCurrent
        cashFlows.push(delta - (t <= LOAN_TERM_YEARS ? annualLoanPayment : 0))
      }
    }

    const npv = (() => { try { return npvFromSeries(cashFlows, discountRate) } catch { return null } })()
    const irr = irrFromSeries(cashFlows)
    const npvVsNoProgram = npv !== null ? npv - noProgramNPV + noProgramNPV : null
    // Actually the NPV already reflects incremental value; vs-no-program is just npv itself

    // Payback
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

    // Sensitivity
    const sensitivity = {
      optimistic: (() => { try { return npvFromSeries(cashFlows.map((cf, t) => t === 0 ? cf : cf + salaryDelta * 0.1), discountRate) } catch { return null } })(),
      conservative: (() => { try { return npvFromSeries(cashFlows.map((cf, t) => t === 0 ? cf : cf - salaryDelta * 0.1), discountRate) } catch { return null } })(),
    }

    const score = scoreFinancials({
      npv,
      irr,
      paybackPeriod,
      debtToIncomeRatio: prog.postProgramSalary > 0 ? loanDetails.monthlyPayment / (prog.postProgramSalary / 12) : 0,
      conservativeNPV: sensitivity.conservative,
    })

    return {
      programId: prog.id,
      label: prog.label,
      type: prog.type,
      cashFlows,
      npv,
      irr,
      paybackPeriod,
      totalInvestment,
      opportunityCost,
      salaryDelta,
      npvVsNoProgram,
      sensitivity,
      loanDetails,
      score,
    }
  })

  // Sort by NPV descending and assign ranks
  const sorted = [...rawResults].sort((a, b) => (b.npv ?? -Infinity) - (a.npv ?? -Infinity))
  const programResults: ProgramResult[] = sorted.map((r, i) => ({ ...r, rank: i + 1 }))

  const winner = programResults[0]
  const second = programResults[1]
  const winnerMargin = winner?.npv !== null && second?.npv !== null
    ? (winner.npv ?? 0) - (second.npv ?? 0)
    : null

  // Generate insights
  const insights: string[] = []
  if (winner) {
    insights.push(`${winner.label} has the highest NPV at ${winner.npv !== null ? new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(winner.npv) : "—"}.`)
  }
  if (winnerMargin && winnerMargin > 10000) {
    insights.push(`It beats the next-best option by ${new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(winnerMargin)} in NPV terms.`)
  }
  const bestPayback = programResults.reduce((best, r) => r.paybackPeriod < best.paybackPeriod ? r : best, programResults[0])
  if (bestPayback && bestPayback.programId !== winner?.programId) {
    insights.push(`${bestPayback.label} recoups your investment fastest at ${bestPayback.paybackPeriod.toFixed(1)} years — useful if you need near-term cash flow.`)
  }
  const lowestCost = [...programResults].sort((a, b) => a.totalInvestment - b.totalInvestment)[0]
  if (lowestCost && lowestCost.programId !== winner?.programId && lowestCost.npv !== null && lowestCost.npv > 0) {
    insights.push(`${lowestCost.label} costs only ${new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(lowestCost.totalInvestment)} all-in and still generates positive NPV.`)
  }

  return {
    noProgramNPV,
    programs: programResults,
    winnerId: winner?.programId ?? "",
    winnerLabel: winner?.label ?? "",
    winnerMargin,
    insights,
  }
}
