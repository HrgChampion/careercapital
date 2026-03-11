// ─── Country / Locale Configuration ──────────────────────────────────────────
// Single source of truth for all per-country data used across calculators.
// No i18n library required — pure Intl API + static lookup tables.

export type CountryCode = "US" | "GB" | "CA" | "AU" | "IN" | "DE" | "SG"

export type CountryConfig = {
  label: string             // "United States"
  flag: string              // "🇺🇸"
  currency: string          // "USD"
  locale: string            // "en-US"
  symbol: string            // "$"
  defaultSalary: number     // default pre-break / current salary (local currency)
  defaultTargetSalary: number // default post-program / target salary
  salaryStep: number        // input increment granularity
  defaultProgramCost: number  // default MBA / bootcamp cost (local currency)
  defaultBootcampCost: number // typical coding bootcamp cost
  defaultCertCost: number     // typical cert (AWS, Google, PMP) cost
  gapPenaltyPerYear: number   // earnings penalty % per gap year (research-based)
  discountRate: number        // local risk-free rate approximation
  avgLoanRate: number         // avg education loan interest rate
}

export const COUNTRIES: Record<CountryCode, CountryConfig> = {
  US: {
    label: "United States", flag: "🇺🇸",
    currency: "USD", locale: "en-US", symbol: "$",
    defaultSalary: 90000, defaultTargetSalary: 140000, salaryStep: 5000,
    defaultProgramCost: 130000, defaultBootcampCost: 15000, defaultCertCost: 800,
    gapPenaltyPerYear: 0.04, discountRate: 0.06, avgLoanRate: 0.07,
  },
  GB: {
    label: "United Kingdom", flag: "🇬🇧",
    currency: "GBP", locale: "en-GB", symbol: "£",
    defaultSalary: 65000, defaultTargetSalary: 95000, salaryStep: 2500,
    defaultProgramCost: 45000, defaultBootcampCost: 8000, defaultCertCost: 600,
    gapPenaltyPerYear: 0.03, discountRate: 0.05, avgLoanRate: 0.045,
  },
  CA: {
    label: "Canada", flag: "🇨🇦",
    currency: "CAD", locale: "en-CA", symbol: "CA$",
    defaultSalary: 85000, defaultTargetSalary: 130000, salaryStep: 5000,
    defaultProgramCost: 60000, defaultBootcampCost: 12000, defaultCertCost: 700,
    gapPenaltyPerYear: 0.035, discountRate: 0.055, avgLoanRate: 0.065,
  },
  AU: {
    label: "Australia", flag: "🇦🇺",
    currency: "AUD", locale: "en-AU", symbol: "A$",
    defaultSalary: 95000, defaultTargetSalary: 140000, salaryStep: 5000,
    defaultProgramCost: 65000, defaultBootcampCost: 13000, defaultCertCost: 750,
    gapPenaltyPerYear: 0.03, discountRate: 0.05, avgLoanRate: 0.06,
  },
  IN: {
    label: "India", flag: "🇮🇳",
    currency: "INR", locale: "en-IN", symbol: "₹",
    defaultSalary: 1500000, defaultTargetSalary: 2500000, salaryStep: 100000,
    defaultProgramCost: 2500000, defaultBootcampCost: 150000, defaultCertCost: 30000,
    gapPenaltyPerYear: 0.08, discountRate: 0.08, avgLoanRate: 0.10,
  },
  DE: {
    label: "Germany", flag: "🇩🇪",
    currency: "EUR", locale: "de-DE", symbol: "€",
    defaultSalary: 65000, defaultTargetSalary: 95000, salaryStep: 2500,
    defaultProgramCost: 35000, defaultBootcampCost: 7000, defaultCertCost: 500,
    gapPenaltyPerYear: 0.025, discountRate: 0.04, avgLoanRate: 0.03,
  },
  SG: {
    label: "Singapore", flag: "🇸🇬",
    currency: "SGD", locale: "en-SG", symbol: "S$",
    defaultSalary: 90000, defaultTargetSalary: 140000, salaryStep: 5000,
    defaultProgramCost: 80000, defaultBootcampCost: 12000, defaultCertCost: 700,
    gapPenaltyPerYear: 0.04, discountRate: 0.055, avgLoanRate: 0.065,
  },
}

export const COUNTRY_ORDER: CountryCode[] = ["US", "GB", "CA", "AU", "IN", "DE", "SG"]

// ─── Currency Formatting ──────────────────────────────────────────────────────

export function formatCurrency(n: number, country: CountryCode): string {
  const c = COUNTRIES[country]
  return new Intl.NumberFormat(c.locale, {
    style: "currency",
    currency: c.currency,
    maximumFractionDigits: 0,
  }).format(n)
}

// ─── Auto-detect country from browser locale ──────────────────────────────────

export function defaultCountry(): CountryCode {
  if (typeof navigator === "undefined") return "US"
  const lang = (navigator.language || "").toLowerCase()
  if (lang.startsWith("en-gb")) return "GB"
  if (lang.startsWith("en-au")) return "AU"
  if (lang.startsWith("en-ca") || lang.startsWith("fr-ca")) return "CA"
  if (lang.startsWith("en-in") || lang.startsWith("hi")) return "IN"
  if (lang.startsWith("de")) return "DE"
  if (lang.startsWith("en-sg")) return "SG"
  return "US"
}
