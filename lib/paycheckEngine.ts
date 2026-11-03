// Paycheck / take-home engine: pay-period conversion plus a US federal, FICA and
// state income tax estimate for W-2 wages. Pure functions, no React.
//
// All statutory figures live in TAX_YEAR_2026 so the yearly update is one edit.
// Sources (verified 2026-11-03):
//   - Brackets & standard deduction: IRS Rev. Proc. 2025-32 / IR-2025-103
//   - Social Security wage base $184,500: SSA, Federal Register 2025-19763
//   - 401(k) elective deferral limit $24,500: IRS Notice 2025-67
//   - Additional Medicare Tax thresholds: IRC §3101(b)(2)
//   - State flat rates: Tax Foundation, "2026 State Tax Changes" and state rate tables

export type FilingStatus = "single" | "married" | "head"
export type PayPeriod = "hourly" | "daily" | "weekly" | "biweekly" | "semimonthly" | "monthly" | "annual"

type Bracket = { upTo: number; rate: number } // upTo = top of the bracket (Infinity for the last)

export const TAX_YEAR_2026 = {
  year: 2026,
  standardDeduction: { single: 16100, married: 32200, head: 24150 } as Record<FilingStatus, number>,
  brackets: {
    single: [
      { upTo: 12400, rate: 0.10 },
      { upTo: 50400, rate: 0.12 },
      { upTo: 105700, rate: 0.22 },
      { upTo: 201775, rate: 0.24 },
      { upTo: 256225, rate: 0.32 },
      { upTo: 640600, rate: 0.35 },
      { upTo: Infinity, rate: 0.37 },
    ],
    married: [
      { upTo: 24800, rate: 0.10 },
      { upTo: 100800, rate: 0.12 },
      { upTo: 211400, rate: 0.22 },
      { upTo: 403550, rate: 0.24 },
      { upTo: 512450, rate: 0.32 },
      { upTo: 768700, rate: 0.35 },
      { upTo: Infinity, rate: 0.37 },
    ],
    head: [
      { upTo: 17700, rate: 0.10 },
      { upTo: 67450, rate: 0.12 },
      { upTo: 105700, rate: 0.22 },
      { upTo: 201775, rate: 0.24 },
      { upTo: 256225, rate: 0.32 },
      { upTo: 640600, rate: 0.35 },
      { upTo: Infinity, rate: 0.37 },
    ],
  } as Record<FilingStatus, Bracket[]>,
  socialSecurityRate: 0.062,
  socialSecurityWageBase: 184500,
  medicareRate: 0.0145,
  additionalMedicareRate: 0.009,
  additionalMedicareThreshold: { single: 200000, married: 250000, head: 200000 } as Record<FilingStatus, number>,
  k401Limit: 24500,
} as const

export type StateTax = {
  code: string
  name: string
  /** "none" = no tax on wages, "flat" = single statutory rate, "estimate" = graduated state, editable estimate */
  kind: "none" | "flat" | "estimate"
  rate: number
  /** Income exempt before the flat rate applies (Ohio's 0% band). */
  exemptFirst?: number
}

// Default effective rate shown for graduated-bracket states. It is a placeholder
// the visitor is told to edit, not a claim about any specific state.
export const GRADUATED_STATE_DEFAULT_RATE = 0.05

const NONE = (code: string, name: string): StateTax => ({ code, name, kind: "none", rate: 0 })
const FLAT = (code: string, name: string, rate: number, exemptFirst?: number): StateTax =>
  ({ code, name, kind: "flat", rate, exemptFirst })
const EST = (code: string, name: string): StateTax =>
  ({ code, name, kind: "estimate", rate: GRADUATED_STATE_DEFAULT_RATE })

export const STATES: StateTax[] = [
  EST("AL", "Alabama"), NONE("AK", "Alaska"), FLAT("AZ", "Arizona", 0.025), EST("AR", "Arkansas"),
  EST("CA", "California"), FLAT("CO", "Colorado", 0.044), EST("CT", "Connecticut"), EST("DE", "Delaware"),
  EST("DC", "District of Columbia"), NONE("FL", "Florida"), FLAT("GA", "Georgia", 0.0519), EST("HI", "Hawaii"),
  FLAT("ID", "Idaho", 0.053), FLAT("IL", "Illinois", 0.0495), FLAT("IN", "Indiana", 0.0295), FLAT("IA", "Iowa", 0.038),
  EST("KS", "Kansas"), FLAT("KY", "Kentucky", 0.035), FLAT("LA", "Louisiana", 0.03), EST("ME", "Maine"),
  EST("MD", "Maryland"), EST("MA", "Massachusetts"), FLAT("MI", "Michigan", 0.0425), EST("MN", "Minnesota"),
  FLAT("MS", "Mississippi", 0.04), EST("MO", "Missouri"), EST("MT", "Montana"), EST("NE", "Nebraska"),
  NONE("NV", "Nevada"), NONE("NH", "New Hampshire"), EST("NJ", "New Jersey"), EST("NM", "New Mexico"),
  EST("NY", "New York"), FLAT("NC", "North Carolina", 0.0399), EST("ND", "North Dakota"), FLAT("OH", "Ohio", 0.0275, 26050),
  EST("OK", "Oklahoma"), EST("OR", "Oregon"), FLAT("PA", "Pennsylvania", 0.0307), EST("RI", "Rhode Island"),
  EST("SC", "South Carolina"), NONE("SD", "South Dakota"), NONE("TN", "Tennessee"), NONE("TX", "Texas"),
  FLAT("UT", "Utah", 0.045), EST("VT", "Vermont"), EST("VA", "Virginia"), NONE("WA", "Washington"),
  EST("WV", "West Virginia"), EST("WI", "Wisconsin"), NONE("WY", "Wyoming"),
]

export function stateByCode(code: string): StateTax {
  return STATES.find((s) => s.code === code) ?? STATES.find((s) => s.code === "TX")!
}

// ── Pay-period conversion ────────────────────────────────────────────────────

export type Schedule = { hoursPerWeek: number; weeksPerYear: number; daysPerWeek: number }
export const DEFAULT_SCHEDULE: Schedule = { hoursPerWeek: 40, weeksPerYear: 52, daysPerWeek: 5 }

export const PERIOD_LABELS: Record<PayPeriod, string> = {
  hourly: "Hourly",
  daily: "Daily",
  weekly: "Weekly",
  biweekly: "Biweekly",
  semimonthly: "Semi-monthly",
  monthly: "Monthly",
  annual: "Annual",
}

/** Number of each period in a year for the given schedule. */
export function periodsPerYear(period: PayPeriod, s: Schedule = DEFAULT_SCHEDULE): number {
  switch (period) {
    case "hourly": return s.hoursPerWeek * s.weeksPerYear
    case "daily": return s.daysPerWeek * s.weeksPerYear
    case "weekly": return s.weeksPerYear
    case "biweekly": return s.weeksPerYear / 2
    case "semimonthly": return 24
    case "monthly": return 12
    case "annual": return 1
  }
}

export function toAnnual(amount: number, period: PayPeriod, s: Schedule = DEFAULT_SCHEDULE): number {
  return amount * periodsPerYear(period, s)
}

export function fromAnnual(annual: number, period: PayPeriod, s: Schedule = DEFAULT_SCHEDULE): number {
  const n = periodsPerYear(period, s)
  return n > 0 ? annual / n : 0
}

export function allPeriods(annual: number, s: Schedule = DEFAULT_SCHEDULE): Record<PayPeriod, number> {
  return Object.fromEntries(
    (Object.keys(PERIOD_LABELS) as PayPeriod[]).map((p) => [p, fromAnnual(annual, p, s)])
  ) as Record<PayPeriod, number>
}

// ── Tax estimate ─────────────────────────────────────────────────────────────

export type PaycheckInput = {
  annualGross: number
  filingStatus: FilingStatus
  stateCode: string
  /** Override for the state rate (decimal). Defaults to the table rate. */
  stateRate?: number
  /** Pre-tax 401(k) contribution as a share of gross (0–1), capped at the IRS limit. */
  k401Pct?: number
}

export type PaycheckResult = {
  gross: number
  k401: number
  federalTaxable: number
  federalTax: number
  socialSecurity: number
  medicare: number
  stateTax: number
  totalTax: number
  takeHome: number
  effectiveRate: number
  marginalRate: number
}

export function federalIncomeTax(taxable: number, status: FilingStatus): { tax: number; marginal: number } {
  let tax = 0
  let lower = 0
  let marginal = TAX_YEAR_2026.brackets[status][0].rate
  for (const b of TAX_YEAR_2026.brackets[status]) {
    if (taxable <= lower) break
    tax += (Math.min(taxable, b.upTo) - lower) * b.rate
    marginal = b.rate
    lower = b.upTo
  }
  return { tax, marginal }
}

export function calculatePaycheck(input: PaycheckInput): PaycheckResult {
  const t = TAX_YEAR_2026
  const gross = Math.max(0, input.annualGross)
  const k401 = Math.min(gross * Math.min(Math.max(input.k401Pct ?? 0, 0), 1), t.k401Limit)
  const wagesAfter401k = gross - k401

  const federalTaxable = Math.max(0, wagesAfter401k - t.standardDeduction[input.filingStatus])
  const { tax: federalTax, marginal } = federalIncomeTax(federalTaxable, input.filingStatus)

  // 401(k) deferrals do not reduce FICA wages.
  const socialSecurity = Math.min(gross, t.socialSecurityWageBase) * t.socialSecurityRate
  const medicare =
    gross * t.medicareRate +
    Math.max(0, gross - t.additionalMedicareThreshold[input.filingStatus]) * t.additionalMedicareRate

  const state = stateByCode(input.stateCode)
  const stateRate = state.kind === "none" ? 0 : input.stateRate ?? state.rate
  const stateTax = Math.max(0, wagesAfter401k - (state.exemptFirst ?? 0)) * stateRate

  const totalTax = federalTax + socialSecurity + medicare + stateTax
  const takeHome = gross - k401 - totalTax

  return {
    gross,
    k401,
    federalTaxable,
    federalTax,
    socialSecurity,
    medicare,
    stateTax,
    totalTax,
    takeHome,
    effectiveRate: gross > 0 ? totalTax / gross : 0,
    marginalRate: marginal,
  }
}

export function usd(n: number, decimals = 0): string {
  const sign = n < 0 ? "−" : ""
  return `${sign}$${Math.abs(n).toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}`
}
