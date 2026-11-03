// Job offer comparison: puts two offers on one footing by valuing each in
// after-tax, cost-of-living-adjusted dollars, net of commute cost, then projecting
// five years and discounting with the site-wide rate.

import { METROS, metroLabel } from "./costOfLiving"
import { DISCOUNT_RATE, npvFromSeries } from "./mbaEngine"
import { calculatePaycheck, type FilingStatus } from "./paycheckEngine"

// US locations an offer can be in. COL index is the BEA Regional Price Parity
// (100 = US average); "other" lets the visitor pick any state at an average index.
export const OFFER_LOCATIONS: Array<{ id: string; label: string; state: string; colIndex: number }> = [
  ...METROS.map((m) => ({ id: m.id, label: metroLabel(m), state: m.state, colIndex: m.rpp })),
  { id: "other", label: "Elsewhere in the US (average cost)", state: "TX", colIndex: 100 },
]

export const WORK_WEEKS_PER_YEAR = 48 // commute days exclude holidays and vacation
export const PROJECTION_YEARS = 5

export type Offer = {
  name: string
  base: number
  bonusPct: number // target annual bonus, % of base
  signing: number // one-time, year 1 only
  equityPerYear: number // RSU value vesting per year, taxed as wages
  matchPct: number // employer 401(k) match, % of base
  raisePct: number // expected annual raise, %
  location: string // OFFER_LOCATIONS id
  state: string // state used for tax when location = "other"
  officeDays: number // days per week in the office
  commutePerDay: number // round-trip cost in $
}

export type OfferResult = {
  grossYear1: number
  takeHomeYear1: number
  employerMatch: number
  commuteCost: number
  colIndex: number
  /** Year-1 spendable value in US-average dollars: (take-home + match − commute) ÷ COL. */
  realValueYear1: number
  /** Recurring real value (excludes the signing bonus). */
  realValueRecurring: number
  npv5: number
  yearly: number[]
}

function locationOf(o: Offer) {
  return OFFER_LOCATIONS.find((l) => l.id === o.location) ?? OFFER_LOCATIONS[OFFER_LOCATIONS.length - 1]
}

function yearValue(o: Offer, year: number, filing: FilingStatus, k401Pct: number) {
  const loc = locationOf(o)
  const growth = Math.pow(1 + o.raisePct / 100, year)
  const base = o.base * growth
  const signing = year === 0 ? o.signing : 0
  const gross = base + base * (o.bonusPct / 100) + o.equityPerYear + signing
  const stateCode = o.location === "other" ? o.state : loc.state
  const pay = calculatePaycheck({ annualGross: gross, filingStatus: filing, stateCode, k401Pct })
  const match = base * (o.matchPct / 100)
  const commute = o.officeDays * WORK_WEEKS_PER_YEAR * o.commutePerDay
  // 401(k) money (yours and the match) is still yours, so add it back to spendable value.
  const real = ((pay.takeHome + pay.k401 + match - commute) / loc.colIndex) * 100
  return { gross, takeHome: pay.takeHome, match, commute, colIndex: loc.colIndex, real }
}

export function evaluateOffer(o: Offer, filing: FilingStatus, k401Pct: number): OfferResult {
  const years = Array.from({ length: PROJECTION_YEARS }, (_, t) => yearValue(o, t, filing, k401Pct))
  const y1 = years[0]
  const recurring = yearValue({ ...o, signing: 0 }, 0, filing, k401Pct)
  return {
    grossYear1: y1.gross,
    takeHomeYear1: y1.takeHome,
    employerMatch: y1.match,
    commuteCost: y1.commute,
    colIndex: y1.colIndex,
    realValueYear1: y1.real,
    realValueRecurring: recurring.real,
    // Cash arrives through each year, so year 1 is discounted one period.
    npv5: npvFromSeries([0, ...years.map((y) => y.real)], DISCOUNT_RATE),
    yearly: years.map((y) => y.real),
  }
}
