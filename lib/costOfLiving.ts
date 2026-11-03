// US metro cost of living from BEA Regional Price Parities (RPP), all items,
// 2024 (released December 2025). 100 = US average price level. Values were pulled
// from FRED series RPPALL{CBSA} on 2026-11-04. Update yearly when BEA publishes.
//
// `state` is the principal city's state and drives the tax estimate. Multi-state
// metros (New York, Washington, Philadelphia, Kansas City …) are taxed as that state.

import { calculatePaycheck, type FilingStatus } from "./paycheckEngine"

export const RPP_YEAR = 2024
export const RPP_SOURCE = "U.S. Bureau of Economic Analysis, Regional Price Parities by Metro Area, 2024 (via FRED)"

export type Metro = { id: string; name: string; state: string; rpp: number }

export const METROS: Metro[] = [
  { id: "albuquerque", name: "Albuquerque", state: "NM", rpp: 95.5 },
  { id: "atlanta", name: "Atlanta-Sandy Springs", state: "GA", rpp: 100.1 },
  { id: "austin", name: "Austin-Round Rock-Georgetown", state: "TX", rpp: 98.1 },
  { id: "baltimore", name: "Baltimore-Columbia-Towson", state: "MD", rpp: 104.5 },
  { id: "birmingham", name: "Birmingham-Hoover", state: "AL", rpp: 91.6 },
  { id: "boise", name: "Boise City", state: "ID", rpp: 98.4 },
  { id: "boston", name: "Boston-Cambridge-Newton", state: "MA", rpp: 108.3 },
  { id: "boulder", name: "Boulder", state: "CO", rpp: 105.2 },
  { id: "buffalo", name: "Buffalo-Cheektowaga", state: "NY", rpp: 95.8 },
  { id: "charlotte", name: "Charlotte-Concord-Gastonia", state: "NC", rpp: 97.3 },
  { id: "chicago", name: "Chicago-Naperville-Elgin", state: "IL", rpp: 103.6 },
  { id: "cincinnati", name: "Cincinnati", state: "OH", rpp: 95.4 },
  { id: "columbus", name: "Columbus", state: "OH", rpp: 95.5 },
  { id: "dallas", name: "Dallas-Fort Worth-Arlington", state: "TX", rpp: 103.1 },
  { id: "denver", name: "Denver-Aurora-Lakewood", state: "CO", rpp: 105.8 },
  { id: "detroit", name: "Detroit-Warren-Dearborn", state: "MI", rpp: 100.3 },
  { id: "durham", name: "Durham-Chapel Hill", state: "NC", rpp: 97.6 },
  { id: "hartford", name: "Hartford-East Hartford-Middletown", state: "CT", rpp: 102.7 },
  { id: "houston", name: "Houston-The Woodlands-Sugar Land", state: "TX", rpp: 98.6 },
  { id: "indianapolis", name: "Indianapolis-Carmel-Anderson", state: "IN", rpp: 95.7 },
  { id: "jacksonville", name: "Jacksonville", state: "FL", rpp: 99.5 },
  { id: "kansas_city", name: "Kansas City", state: "MO", rpp: 92.5 },
  { id: "las_vegas", name: "Las Vegas-Henderson-Paradise", state: "NV", rpp: 100.2 },
  { id: "los_angeles", name: "Los Angeles-Long Beach-Anaheim", state: "CA", rpp: 113.6 },
  { id: "louisville", name: "Louisville/Jefferson County", state: "KY", rpp: 93.1 },
  { id: "madison", name: "Madison", state: "WI", rpp: 97.3 },
  { id: "memphis", name: "Memphis", state: "TN", rpp: 92.2 },
  { id: "miami", name: "Miami-Fort Lauderdale", state: "FL", rpp: 114.2 },
  { id: "milwaukee", name: "Milwaukee-Waukesha", state: "WI", rpp: 96.9 },
  { id: "minneapolis", name: "Minneapolis-St. Paul-Bloomington", state: "MN", rpp: 104.8 },
  { id: "nashville", name: "Nashville-Davidson-Murfreesboro", state: "TN", rpp: 96.3 },
  { id: "new_orleans", name: "New Orleans-Metairie", state: "LA", rpp: 92.6 },
  { id: "new_york", name: "New York-Newark-Jersey City", state: "NY", rpp: 112.6 },
  { id: "oklahoma_city", name: "Oklahoma City", state: "OK", rpp: 90.4 },
  { id: "omaha", name: "Omaha-Council Bluffs", state: "NE", rpp: 91.9 },
  { id: "orlando", name: "Orlando-Kissimmee-Sanford", state: "FL", rpp: 101.4 },
  { id: "philadelphia", name: "Philadelphia-Camden-Wilmington", state: "PA", rpp: 102.6 },
  { id: "phoenix", name: "Phoenix-Mesa-Chandler", state: "AZ", rpp: 103.3 },
  { id: "pittsburgh", name: "Pittsburgh", state: "PA", rpp: 94.7 },
  { id: "portland", name: "Portland-Vancouver-Hillsboro", state: "OR", rpp: 105.4 },
  { id: "providence", name: "Providence-Warwick", state: "RI", rpp: 101.8 },
  { id: "raleigh", name: "Raleigh-Cary", state: "NC", rpp: 98.2 },
  { id: "richmond", name: "Richmond", state: "VA", rpp: 97.9 },
  { id: "riverside", name: "Riverside-San Bernardino-Ontario", state: "CA", rpp: 106.4 },
  { id: "sacramento", name: "Sacramento-Roseville", state: "CA", rpp: 106.7 },
  { id: "salt_lake_city", name: "Salt Lake City", state: "UT", rpp: 100.9 },
  { id: "san_antonio", name: "San Antonio-New Braunfels", state: "TX", rpp: 94.7 },
  { id: "san_diego", name: "San Diego-Chula Vista-Carlsbad", state: "CA", rpp: 111.9 },
  { id: "san_francisco", name: "San Francisco-Oakland-Berkeley", state: "CA", rpp: 115.6 },
  { id: "san_jose", name: "San Jose-Sunnyvale-Santa Clara", state: "CA", rpp: 110.4 },
  { id: "seattle", name: "Seattle-Tacoma-Bellevue", state: "WA", rpp: 111.1 },
  { id: "st_louis", name: "St. Louis", state: "MO", rpp: 95.1 },
  { id: "tampa", name: "Tampa-St. Petersburg-Clearwater", state: "FL", rpp: 100.9 },
  { id: "tucson", name: "Tucson", state: "AZ", rpp: 96.9 },
  { id: "honolulu", name: "Urban Honolulu", state: "HI", rpp: 111.0 },
  { id: "virginia_beach", name: "Virginia Beach-Norfolk-Newport News", state: "VA", rpp: 97.9 },
  { id: "washington", name: "Washington-Arlington-Alexandria", state: "DC", rpp: 108.9 },
]

export function metroById(id: string): Metro | undefined {
  return METROS.find((m) => m.id === id)
}

export function metroLabel(m: Metro): string {
  return `${m.name}, ${m.state}`
}

export type EquivalentSalary = {
  /** Gross salary needed in the destination on prices alone. */
  priceOnly: number
  /** Gross salary needed so take-home ÷ price level matches, including both states' taxes. */
  taxAware: number
  takeHomeFrom: number
  takeHomeTo: number
  priceDiffPct: number
}

/** Salary needed in `to` to keep the same purchasing power as `salary` in `from`. */
export function equivalentSalary(salary: number, from: Metro, to: Metro, filing: FilingStatus): EquivalentSalary {
  const net = (gross: number, state: string) => calculatePaycheck({ annualGross: gross, filingStatus: filing, stateCode: state }).takeHome
  const takeHomeFrom = net(salary, from.state)
  const targetNet = (takeHomeFrom / from.rpp) * to.rpp

  // Take-home is monotonic in gross, so bisection finds the gross that hits the target.
  let lo = 0
  let hi = Math.max(salary * 4, 50000)
  for (let i = 0; i < 60; i++) {
    const mid = (lo + hi) / 2
    if (net(mid, to.state) < targetNet) lo = mid
    else hi = mid
  }
  const taxAware = Math.round(hi)
  return {
    priceOnly: (salary * to.rpp) / from.rpp,
    taxAware,
    takeHomeFrom,
    takeHomeTo: net(taxAware, to.state),
    priceDiffPct: (to.rpp / from.rpp - 1) * 100,
  }
}
