// Shared parameter lists for the programmatic pay-conversion pages. The page
// routes (generateStaticParams) and the sitemap both read from here, so the set
// of indexable URLs can never drift from the set of built pages.

/** Visible "Last updated" date and sitemap lastmod for every programmatic pay page. */
export const PAY_PAGES_UPDATED = "2026-11-03"

// Kept deliberately small: a long run of near-identical templated URLs on a
// young domain gets crawled slowly ("Discovered – currently not indexed"), so
// only the rates people actually search for get a page.

/** $10–$30 in $1 steps, then $35–$100 in $5 steps (35 pages). */
export const HOURLY_RATES: number[] = [
  ...Array.from({ length: 21 }, (_, i) => 10 + i),
  ...Array.from({ length: 14 }, (_, i) => 35 + i * 5),
]

/** $30K–$100K in $5K steps, $110K–$200K in $10K steps, plus $250K (26 pages). */
export const ANNUAL_SALARIES: number[] = [
  ...Array.from({ length: 15 }, (_, i) => 30000 + i * 5000),
  ...Array.from({ length: 10 }, (_, i) => 110000 + i * 10000),
  250000,
]

export function hourlyPath(rate: number): string {
  return `hourly-to-salary/${rate}`
}

export function salaryPath(amount: number): string {
  return `salary-to-hourly/${amount}`
}

/** "$75,000" → used for H1s and titles. */
export function shortSalary(amount: number): string {
  return amount % 1000 === 0 ? `$${amount / 1000}K` : `$${amount.toLocaleString("en-US")}`
}
