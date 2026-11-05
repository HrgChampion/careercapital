/**
 * MBA scenario model
 *
 * Two lenses on the same decision:
 *  1. A 10-year DCF that uses the exact timing conventions of the MBA ROI
 *     calculator (lib/mbaEngine.ts): flat salary delta, 5-year loan, 6% discount.
 *  2. A lifetime lens: both paths grow at their own rates until retirement,
 *     so the gap compounds. This is what the Lifetime Earnings Calculator models.
 *
 * Part-time programs keep the salary during the program, so lost income is 0.
 */

import {
  calculateLoanDetails,
  npvFromSeries,
  irrFromSeries,
  DISCOUNT_RATE,
  PROJECTION_YEARS,
  LOAN_TERM_YEARS,
} from "./mbaEngine"

export type MbaScenarioInput = {
  /** Age when the program starts */
  age: number
  preSalary: number
  postSalary: number
  /** Tuition + fees + living costs actually paid (after scholarships) */
  programCost: number
  programYears: number
  /** true = part-time / online / EMBA: keep earning during the program */
  keepsSalary: boolean
  /** Share of programCost financed, 0..1 */
  loanPct: number
  /** Annual loan rate, e.g. 0.08 */
  rate: number
  /** Annual raise rate without the MBA */
  growthNoMba: number
  /** Annual raise rate on the post-MBA path */
  growthMba: number
  retireAge: number
}

export type MbaScenarioResult = {
  lostIncome: number
  totalEconomicCost: number
  salaryDelta: number
  npv10: number
  irr10: number | null
  payback: number
  /** Lifetime earnings gain net of program cost and loan interest, nominal */
  lifetimeGain: number
  /** Same, discounted to today at DISCOUNT_RATE */
  lifetimeGainPV: number
  /** Age at which the cumulative lifetime gap first turns positive (null = never) */
  crossoverAge: number | null
  /** Cumulative net gain by year, index 0 = start of program */
  cumulative: number[]
}

export function runMbaScenario(s: MbaScenarioInput): MbaScenarioResult {
  const lostIncome = s.keepsSalary ? 0 : s.preSalary * s.programYears
  const loan = calculateLoanDetails(s.programCost * s.loanPct, s.rate, LOAN_TERM_YEARS)
  const annualLoanPayment = loan.monthlyPayment * 12
  const outOfPocket = s.programCost * (1 - s.loanPct)
  const salaryDelta = s.postSalary - s.preSalary

  // ── 10-year DCF after graduation ──
  // Full-time: identical to calculateMBA (all program-period outflows at t=0).
  // Part-time: you keep your salary, but tuition is paid across the program
  // years, so those outflows are spread instead of lumped at t=0.
  const ptYears = Math.max(1, Math.round(s.programYears))
  const programFlows: number[] = s.keepsSalary
    ? Array.from({ length: ptYears }, () => -outOfPocket / ptYears)
    : [-(outOfPocket + lostIncome)]
  const flows: number[] = [...programFlows]
  for (let t = 1; t <= PROJECTION_YEARS; t++) {
    flows.push(salaryDelta - (t <= LOAN_TERM_YEARS ? annualLoanPayment : 0))
  }
  const npv10 = npvFromSeries(flows, DISCOUNT_RATE)
  const irr10 = irrFromSeries(flows)

  // Payback, measured in years after graduation
  const firstPostIdx = programFlows.length
  let payback = Infinity
  let cum = 0
  for (let t = 0; t < flows.length; t++) {
    const prev = cum
    cum += flows[t]
    if (cum >= 0 && t >= firstPostIdx) {
      payback = t - firstPostIdx + -prev / flows[t]
      break
    }
  }

  // ── Lifetime lens: year-by-year earnings on both paths to retirement ──
  const years = Math.max(1, s.retireAge - s.age)
  const cumulative: number[] = []
  let running = 0
  let gainPV = 0
  let crossoverAge: number | null = null
  for (let y = 0; y < years; y++) {
    const base = s.preSalary * Math.pow(1 + s.growthNoMba, y)
    let mba: number
    if (y < s.programYears) {
      mba = s.keepsSalary ? base : 0
    } else {
      mba = s.postSalary * Math.pow(1 + s.growthMba, y - s.programYears)
    }
    // Program cost is spread across program years; loan repaid over the 5 years after
    const cost =
      (y < s.programYears ? outOfPocket / s.programYears : 0) +
      (y >= s.programYears && y < s.programYears + LOAN_TERM_YEARS ? annualLoanPayment : 0)
    const net = mba - base - cost
    running += net
    gainPV += net / Math.pow(1 + DISCOUNT_RATE, y)
    cumulative.push(running)
    if (crossoverAge === null && running >= 0 && y >= s.programYears) crossoverAge = s.age + y + 1
  }

  return {
    lostIncome,
    totalEconomicCost: s.programCost + lostIncome + loan.totalInterest,
    salaryDelta,
    npv10,
    irr10,
    payback,
    lifetimeGain: running,
    lifetimeGainPV: gainPV,
    crossoverAge,
    cumulative,
  }
}

export type PresetScenario = {
  id: string
  label: string
  persona: string
  input: MbaScenarioInput
}

/**
 * Representative profiles used in the "Is an MBA worth it?" article.
 * Salary anchors: GMAC Corporate Recruiters Survey 2025 (US median MBA start
 * $125k), MBB 2025 offers ($190k–$192k base), BLS OEWS May 2024 medical and
 * health services managers ($117,960 median). Costs: 2025–26 school budgets.
 */
export const PRESET_SCENARIOS: PresetScenario[] = [
  {
    id: "tech",
    label: "Early-career tech",
    persona: "26, three years as a data analyst at a SaaS company, targeting product management via a T15 full-time MBA",
    input: {
      age: 26,
      preSalary: 115000,
      postSalary: 170000,
      programCost: 230000,
      programYears: 2,
      keepsSalary: false,
      loanPct: 0.7,
      rate: 0.08,
      growthNoMba: 0.04,
      growthMba: 0.04,
      retireAge: 65,
    },
  },
  {
    id: "consulting",
    label: "Mid-career → consulting",
    persona: "32, nine years in operations management, pivoting to MBB consulting via an M7 full-time MBA",
    input: {
      age: 32,
      preSalary: 135000,
      postSalary: 215000,
      programCost: 270000,
      programYears: 2,
      keepsSalary: false,
      loanPct: 0.6,
      rate: 0.08,
      growthNoMba: 0.03,
      growthMba: 0.035,
      retireAge: 65,
    },
  },
  {
    id: "healthcare",
    label: "Healthcare professional",
    persona: "34, registered nurse and unit manager, moving into hospital administration via a part-time MBA while working",
    input: {
      age: 34,
      preSalary: 98000,
      postSalary: 140000,
      programCost: 75000,
      programYears: 3,
      keepsSalary: true,
      loanPct: 0.5,
      rate: 0.08,
      growthNoMba: 0.03,
      growthMba: 0.03,
      retireAge: 65,
    },
  },
]
