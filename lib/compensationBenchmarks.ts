/**
 * Compensation benchmark data
 * Sources: BLS Occupational Employment Statistics, Levels.fyi, Glassdoor, GMAC placement reports
 * Last updated: 2026
 *
 * Structure: industry → role → experience band → location tier → company size → p25/p50/p75/p90
 */

export type LocationTier = "tier1" | "tier2" | "tier3" | "remote"
export type CompanySize = "startup" | "mid" | "enterprise"
export type ExperienceBand = "junior" | "mid" | "senior" | "lead" | "director"

export type Benchmark = {
  p25: number
  p50: number
  p75: number
  p90: number
}

export type BenchmarkKey = {
  industry: string
  role: string
  experience: ExperienceBand
  location: LocationTier
  companySize: CompanySize
}

// Simplified benchmark table — base salary only (not total comp)
// Keyed as: `${industry}:${role}:${experience}:${location}:${companySize}`

const RAW_BENCHMARKS: Record<string, Benchmark> = {
  // ─── Software Engineering ───────────────────────────────────────────────────
  "tech:software_engineer:junior:tier1:enterprise": { p25: 105000, p50: 125000, p75: 145000, p90: 165000 },
  "tech:software_engineer:junior:tier1:mid":        { p25: 90000,  p50: 110000, p75: 130000, p90: 150000 },
  "tech:software_engineer:junior:tier1:startup":    { p25: 80000,  p50: 100000, p75: 120000, p90: 140000 },
  "tech:software_engineer:junior:tier2:enterprise": { p25: 85000,  p50: 100000, p75: 120000, p90: 140000 },
  "tech:software_engineer:junior:tier2:mid":        { p25: 72000,  p50: 88000,  p75: 105000, p90: 125000 },
  "tech:software_engineer:junior:tier2:startup":    { p25: 65000,  p50: 80000,  p75: 95000,  p90: 115000 },
  "tech:software_engineer:junior:tier3:enterprise": { p25: 65000,  p50: 78000,  p75: 92000,  p90: 110000 },
  "tech:software_engineer:junior:tier3:mid":        { p25: 58000,  p50: 70000,  p75: 83000,  p90: 98000  },
  "tech:software_engineer:junior:tier3:startup":    { p25: 52000,  p50: 63000,  p75: 75000,  p90: 90000  },
  "tech:software_engineer:junior:remote:enterprise": { p25: 95000, p50: 115000, p75: 135000, p90: 155000 },
  "tech:software_engineer:junior:remote:mid":        { p25: 82000, p50: 98000,  p75: 115000, p90: 135000 },
  "tech:software_engineer:junior:remote:startup":    { p25: 72000, p50: 88000,  p75: 105000, p90: 125000 },

  "tech:software_engineer:mid:tier1:enterprise": { p25: 140000, p50: 165000, p75: 195000, p90: 230000 },
  "tech:software_engineer:mid:tier1:mid":        { p25: 120000, p50: 145000, p75: 170000, p90: 200000 },
  "tech:software_engineer:mid:tier1:startup":    { p25: 110000, p50: 135000, p75: 160000, p90: 190000 },
  "tech:software_engineer:mid:tier2:enterprise": { p25: 110000, p50: 132000, p75: 158000, p90: 185000 },
  "tech:software_engineer:mid:tier2:mid":        { p25: 95000,  p50: 115000, p75: 138000, p90: 162000 },
  "tech:software_engineer:mid:tier2:startup":    { p25: 88000,  p50: 108000, p75: 130000, p90: 155000 },
  "tech:software_engineer:mid:tier3:enterprise": { p25: 85000,  p50: 100000, p75: 118000, p90: 140000 },
  "tech:software_engineer:mid:tier3:mid":        { p25: 75000,  p50: 90000,  p75: 107000, p90: 128000 },
  "tech:software_engineer:mid:remote:enterprise": { p25: 128000, p50: 152000, p75: 180000, p90: 212000 },
  "tech:software_engineer:mid:remote:mid":        { p25: 110000, p50: 132000, p75: 156000, p90: 184000 },

  "tech:software_engineer:senior:tier1:enterprise": { p25: 175000, p50: 210000, p75: 250000, p90: 295000 },
  "tech:software_engineer:senior:tier1:mid":        { p25: 155000, p50: 185000, p75: 220000, p90: 260000 },
  "tech:software_engineer:senior:tier2:enterprise": { p25: 140000, p50: 168000, p75: 200000, p90: 235000 },
  "tech:software_engineer:senior:tier2:mid":        { p25: 120000, p50: 145000, p75: 173000, p90: 204000 },
  "tech:software_engineer:senior:remote:enterprise": { p25: 162000, p50: 194000, p75: 230000, p90: 271000 },

  // ─── Product Management ─────────────────────────────────────────────────────
  "tech:product_manager:junior:tier1:enterprise": { p25: 105000, p50: 125000, p75: 148000, p90: 172000 },
  "tech:product_manager:junior:tier1:startup":    { p25: 90000,  p50: 110000, p75: 132000, p90: 155000 },
  "tech:product_manager:mid:tier1:enterprise":    { p25: 140000, p50: 165000, p75: 195000, p90: 230000 },
  "tech:product_manager:mid:tier1:startup":       { p25: 118000, p50: 142000, p75: 170000, p90: 200000 },
  "tech:product_manager:senior:tier1:enterprise": { p25: 170000, p50: 200000, p75: 235000, p90: 278000 },
  "tech:product_manager:mid:tier2:enterprise":    { p25: 112000, p50: 134000, p75: 158000, p90: 186000 },
  "tech:product_manager:mid:remote:enterprise":   { p25: 128000, p50: 152000, p75: 180000, p90: 213000 },

  // ─── Data Science / Analytics ───────────────────────────────────────────────
  "tech:data_scientist:junior:tier1:enterprise": { p25: 100000, p50: 120000, p75: 142000, p90: 165000 },
  "tech:data_scientist:mid:tier1:enterprise":    { p25: 135000, p50: 160000, p75: 190000, p90: 224000 },
  "tech:data_scientist:senior:tier1:enterprise": { p25: 160000, p50: 190000, p75: 225000, p90: 265000 },
  "tech:data_scientist:junior:tier2:enterprise": { p25: 80000,  p50: 95000,  p75: 113000, p90: 132000 },
  "tech:data_scientist:mid:tier2:enterprise":    { p25: 108000, p50: 128000, p75: 152000, p90: 178000 },
  "tech:data_scientist:mid:remote:enterprise":   { p25: 122000, p50: 146000, p75: 173000, p90: 204000 },

  // ─── Finance ────────────────────────────────────────────────────────────────
  "finance:financial_analyst:junior:tier1:enterprise": { p25: 70000,  p50: 85000,  p75: 100000, p90: 118000 },
  "finance:financial_analyst:mid:tier1:enterprise":    { p25: 95000,  p50: 115000, p75: 138000, p90: 162000 },
  "finance:financial_analyst:senior:tier1:enterprise": { p25: 130000, p50: 155000, p75: 183000, p90: 215000 },
  "finance:financial_analyst:junior:tier2:enterprise": { p25: 58000,  p50: 70000,  p75: 84000,  p90: 99000  },
  "finance:financial_analyst:mid:tier2:enterprise":    { p25: 78000,  p50: 95000,  p75: 113000, p90: 134000 },

  "finance:investment_banker:junior:tier1:enterprise": { p25: 100000, p50: 120000, p75: 150000, p90: 185000 },
  "finance:investment_banker:mid:tier1:enterprise":    { p25: 150000, p50: 185000, p75: 235000, p90: 290000 },
  "finance:investment_banker:senior:tier1:enterprise": { p25: 200000, p50: 250000, p75: 320000, p90: 400000 },

  // ─── Marketing ──────────────────────────────────────────────────────────────
  "marketing:marketing_manager:junior:tier1:enterprise": { p25: 62000, p50: 75000,  p75: 90000,  p90: 108000 },
  "marketing:marketing_manager:mid:tier1:enterprise":    { p25: 88000, p50: 105000, p75: 125000, p90: 148000 },
  "marketing:marketing_manager:senior:tier1:enterprise": { p25: 115000, p50: 138000, p75: 165000, p90: 195000 },
  "marketing:marketing_manager:mid:tier2:enterprise":    { p25: 70000,  p50: 84000,  p75: 100000, p90: 118000 },

  // ─── Operations / Project Management ────────────────────────────────────────
  "operations:project_manager:junior:tier1:enterprise": { p25: 65000,  p50: 78000,  p75: 93000,  p90: 110000 },
  "operations:project_manager:mid:tier1:enterprise":    { p25: 90000,  p50: 108000, p75: 128000, p90: 150000 },
  "operations:project_manager:senior:tier1:enterprise": { p25: 120000, p50: 143000, p75: 170000, p90: 200000 },
  "operations:project_manager:mid:tier2:enterprise":    { p25: 72000,  p50: 86000,  p75: 103000, p90: 122000 },

  // ─── Healthcare ─────────────────────────────────────────────────────────────
  "healthcare:healthcare_manager:mid:tier1:enterprise":    { p25: 85000,  p50: 100000, p75: 118000, p90: 138000 },
  "healthcare:healthcare_manager:senior:tier1:enterprise": { p25: 110000, p50: 130000, p75: 153000, p90: 180000 },

  // ─── Education ──────────────────────────────────────────────────────────────
  "education:teacher:junior:tier1:enterprise": { p25: 45000, p50: 52000, p75: 62000, p90: 73000 },
  "education:teacher:mid:tier1:enterprise":    { p25: 52000, p50: 63000, p75: 75000, p90: 88000 },
  "education:teacher:senior:tier1:enterprise": { p25: 62000, p50: 75000, p75: 88000, p90: 103000 },
}

export type IndustryMeta = {
  id: string
  label: string
  roles: { id: string; label: string }[]
}

export const INDUSTRIES: IndustryMeta[] = [
  {
    id: "tech",
    label: "Technology",
    roles: [
      { id: "software_engineer", label: "Software Engineer" },
      { id: "product_manager", label: "Product Manager" },
      { id: "data_scientist", label: "Data Scientist / Analyst" },
    ],
  },
  {
    id: "finance",
    label: "Finance",
    roles: [
      { id: "financial_analyst", label: "Financial Analyst" },
      { id: "investment_banker", label: "Investment Banker" },
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    roles: [
      { id: "marketing_manager", label: "Marketing Manager" },
    ],
  },
  {
    id: "operations",
    label: "Operations / PM",
    roles: [
      { id: "project_manager", label: "Project / Program Manager" },
    ],
  },
  {
    id: "healthcare",
    label: "Healthcare",
    roles: [
      { id: "healthcare_manager", label: "Healthcare Manager / Admin" },
    ],
  },
  {
    id: "education",
    label: "Education",
    roles: [
      { id: "teacher", label: "Teacher / Educator" },
    ],
  },
]

export const EXPERIENCE_BANDS: { id: ExperienceBand; label: string; yearsRange: string }[] = [
  { id: "junior", label: "Junior (0-3 yrs)", yearsRange: "0-3" },
  { id: "mid",    label: "Mid-Level (3-7 yrs)", yearsRange: "3-7" },
  { id: "senior", label: "Senior (7-12 yrs)", yearsRange: "7-12" },
  { id: "lead",   label: "Lead / Principal (12+ yrs)", yearsRange: "12+" },
  { id: "director", label: "Director / VP", yearsRange: "15+" },
]

export const LOCATION_TIERS: { id: LocationTier; label: string; examples: string }[] = [
  { id: "tier1", label: "Tier 1 Metro", examples: "NYC, SF, Seattle, Boston, DC" },
  { id: "tier2", label: "Tier 2 Metro", examples: "Chicago, Austin, Denver, Atlanta" },
  { id: "tier3", label: "Tier 3 / Small City", examples: "Midwest, South, smaller cities" },
  { id: "remote", label: "Remote", examples: "Fully remote position" },
]

export const COMPANY_SIZES: { id: CompanySize; label: string; examples: string }[] = [
  { id: "enterprise", label: "Large / Enterprise", examples: "Fortune 500, public companies" },
  { id: "mid", label: "Mid-size", examples: "100-2000 employees" },
  { id: "startup", label: "Startup / Early Stage", examples: "<100 employees" },
]

/**
 * Look up a benchmark, falling back gracefully through the hierarchy
 * if the exact match doesn't exist.
 */
export function getBenchmark(key: BenchmarkKey): Benchmark | null {
  const { industry, role, experience, location, companySize } = key
  const exact = `${industry}:${role}:${experience}:${location}:${companySize}`
  if (RAW_BENCHMARKS[exact]) return RAW_BENCHMARKS[exact]

  // Fallback 1: enterprise if company size not found
  const enterpriseFallback = `${industry}:${role}:${experience}:${location}:enterprise`
  if (RAW_BENCHMARKS[enterpriseFallback]) {
    const base = RAW_BENCHMARKS[enterpriseFallback]
    const multiplier = companySize === "mid" ? 0.88 : companySize === "startup" ? 0.78 : 1.0
    return { p25: base.p25 * multiplier, p50: base.p50 * multiplier, p75: base.p75 * multiplier, p90: base.p90 * multiplier }
  }

  // Fallback 2: tier1 if location not found
  const tier1Fallback = `${industry}:${role}:${experience}:tier1:enterprise`
  if (RAW_BENCHMARKS[tier1Fallback]) {
    const base = RAW_BENCHMARKS[tier1Fallback]
    const locMult = location === "tier2" ? 0.80 : location === "tier3" ? 0.65 : location === "remote" ? 0.88 : 1.0
    const sizeMult = companySize === "mid" ? 0.88 : companySize === "startup" ? 0.78 : 1.0
    const mult = locMult * sizeMult
    return { p25: base.p25 * mult, p50: base.p50 * mult, p75: base.p75 * mult, p90: base.p90 * mult }
  }

  return null
}
