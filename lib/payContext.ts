// Rate-specific context for the programmatic pay pages (/hourly-to-salary/*,
// /salary-to-hourly/*). Each page picks the occupations closest to its own
// hourly rate, so the "jobs at this pay" text differs from page to page.
//
// Wages are approximate national median hourly wages from the BLS Occupational
// Employment and Wage Statistics survey (May 2024), rounded to the nearest
// $0.50. Update when BLS publishes the next release.

export const OEWS_RELEASE = "BLS Occupational Employment and Wage Statistics, May 2024"
export const US_MEDIAN_HOURLY = 23.8
export const FEDERAL_MINIMUM_WAGE = 7.25

export type Occupation = { title: string; hourly: number; field: string }

export const OCCUPATIONS: Occupation[] = [
  { title: "Fast food and counter workers", hourly: 14.5, field: "Food service" },
  { title: "Cashiers", hourly: 14.5, field: "Retail" },
  { title: "Childcare workers", hourly: 15.5, field: "Care" },
  { title: "Retail salespersons", hourly: 16, field: "Retail" },
  { title: "Home health and personal care aides", hourly: 17, field: "Healthcare support" },
  { title: "Janitors and cleaners", hourly: 17, field: "Facilities" },
  { title: "Security guards", hourly: 18, field: "Protective service" },
  { title: "Stockers and order fillers", hourly: 18, field: "Warehousing" },
  { title: "Bank tellers", hourly: 18.5, field: "Finance" },
  { title: "Pharmacy technicians", hourly: 20, field: "Healthcare support" },
  { title: "Customer service representatives", hourly: 20.5, field: "Office" },
  { title: "Medical assistants", hourly: 21, field: "Healthcare support" },
  { title: "Construction laborers", hourly: 22, field: "Construction" },
  { title: "Dental assistants", hourly: 22.5, field: "Healthcare support" },
  { title: "Administrative assistants", hourly: 22.5, field: "Office" },
  { title: "Bookkeeping and accounting clerks", hourly: 23, field: "Finance" },
  { title: "Heavy truck drivers", hourly: 27.5, field: "Transportation" },
  { title: "Carpenters", hourly: 28.5, field: "Construction" },
  { title: "HVAC technicians", hourly: 28.5, field: "Skilled trades" },
  { title: "Paralegals", hourly: 29, field: "Legal" },
  { title: "Licensed practical nurses", hourly: 29.5, field: "Healthcare" },
  { title: "Electricians", hourly: 29.5, field: "Skilled trades" },
  { title: "Plumbers", hourly: 30, field: "Skilled trades" },
  { title: "Police officers", hourly: 36, field: "Protective service" },
  { title: "Accountants and auditors", hourly: 39, field: "Finance" },
  { title: "Web developers", hourly: 43, field: "Technology" },
  { title: "Registered nurses", hourly: 45, field: "Healthcare" },
  { title: "Dental hygienists", hourly: 45, field: "Healthcare" },
  { title: "Occupational therapists", hourly: 47, field: "Healthcare" },
  { title: "Management analysts", hourly: 48.5, field: "Consulting" },
  { title: "Physical therapists", hourly: 48.5, field: "Healthcare" },
  { title: "Mechanical engineers", hourly: 49, field: "Engineering" },
  { title: "Financial analysts", hourly: 49.5, field: "Finance" },
  { title: "Construction managers", hourly: 51, field: "Construction" },
  { title: "Data scientists", hourly: 54, field: "Technology" },
  { title: "Medical and health services managers", hourly: 56, field: "Healthcare" },
  { title: "Information security analysts", hourly: 59.5, field: "Technology" },
  { title: "Actuaries", hourly: 60.5, field: "Finance" },
  { title: "Nurse practitioners", hourly: 62, field: "Healthcare" },
  { title: "Software developers", hourly: 64, field: "Technology" },
  { title: "Pharmacists", hourly: 66, field: "Healthcare" },
  { title: "Sales managers", hourly: 66.5, field: "Sales" },
  { title: "Human resources managers", hourly: 67, field: "Management" },
  { title: "Lawyers", hourly: 73, field: "Legal" },
  { title: "Marketing managers", hourly: 75.5, field: "Management" },
  { title: "Financial managers", hourly: 77.5, field: "Management" },
  { title: "Computer and information systems managers", hourly: 82.5, field: "Management" },
  { title: "Architectural and engineering managers", hourly: 80, field: "Management" },
]

/** The occupations whose median hourly wage is closest to `hourly` (up to `n`). */
export function nearestOccupations(hourly: number, n = 4): Occupation[] {
  return [...OCCUPATIONS]
    .sort((a, b) => Math.abs(a.hourly - hourly) - Math.abs(b.hourly - hourly) || a.hourly - b.hourly)
    .slice(0, n)
    .sort((a, b) => a.hourly - b.hourly)
}

/** "cashiers ($14.50), retail salespersons ($16.00) and …" for FAQ answers. */
export function listJobs(hourly: number, n = 3): string {
  const items = nearestOccupations(hourly, n).map((o) => `${o.title.toLowerCase()} ($${o.hourly.toFixed(2)})`)
  return items.length > 1 ? `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}` : items.join("")
}

/** One sentence placing a rate against the US median hourly wage and the federal minimum. */
export function medianComparison(hourly: number): string {
  const diff = hourly / US_MEDIAN_HOURLY - 1
  const pct = Math.round(Math.abs(diff) * 100)
  const vsMedian =
    pct < 3
      ? `almost exactly the US median hourly wage of $${US_MEDIAN_HOURLY.toFixed(2)}`
      : `${pct}% ${diff > 0 ? "above" : "below"} the US median hourly wage of $${US_MEDIAN_HOURLY.toFixed(2)}`
  const multiple = (hourly / FEDERAL_MINIMUM_WAGE).toFixed(1)
  return `That is ${vsMedian} and ${multiple}× the $${FEDERAL_MINIMUM_WAGE} federal minimum wage.`
}

/** What to do next, by pay band. Differs from PayBreakdown's MBA-focused context. */
export function nextStepHint(hourly: number): string {
  if (hourly < 18)
    return "At this level, a certificate or apprenticeship that moves you into healthcare support, the skilled trades or office administration is usually the quickest route to $20+ an hour."
  if (hourly < 30)
    return "Licensed trades, nursing (LPN to RN) and accounting are common next steps from this band, and each typically adds $10–$20 an hour within a few years."
  if (hourly < 50)
    return "From here, the step to $50+ an hour usually comes from moving into management, a specialist license, or a graduate degree in a high-paying field."
  if (hourly < 75)
    return "Most jobs at this rate are salaried professional roles. Further gains tend to come from management responsibility or switching employers rather than annual raises."
  return "This rate is in the top tier of US pay, typical of senior management, medicine, law and finance. Bonus and equity often matter as much as base pay at this level."
}
