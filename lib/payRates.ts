// Shared parameter lists for the programmatic pay-conversion pages. The page
// routes (generateStaticParams) and the sitemap both read from here, so the set
// of indexable URLs can never drift from the set of built pages.

/** Visible "Last updated" date and sitemap lastmod for every programmatic pay page. */
export const PAY_PAGES_UPDATED = "2026-11-03"

export const HOURLY_RATES: number[] = Array.from({ length: 91 }, (_, i) => 10 + i) // $10–$100

export const ANNUAL_SALARIES: number[] = Array.from({ length: 45 }, (_, i) => 30000 + i * 5000) // $30K–$250K

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
