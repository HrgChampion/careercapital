/**
 * Loyalty Tax Engine
 *
 * Models the compounding salary gap between staying at one company
 * and switching to market rate annually. The "loyalty tax" is the
 * cumulative salary compression employees pay for job stability.
 *
 * Research basis:
 *   - Atlanta Fed Wage Tracker: job-switchers earn ~5% more annually
 *   - ADP: external hires paid 18% more than internal promotions
 *   - LinkedIn Economic Graph: median internal raise ~3% vs ~7% external
 */

import { npvFromSeries, DISCOUNT_RATE } from "./mbaEngine"

export type LoyaltyTaxInput = {
  currentSalary: number
  startingSalary: number
  yearsAtCompany: number
  averageAnnualRaisePct: number  // actual internal raise % (e.g. 3.0)
  marketGrowthRatePct: number    // external market growth % (e.g. 5.0)
  projectionYears: number        // years to project forward
  discountRate?: number
}

export type YearlyBreakdown = {
  year: number
  actualSalary: number
  marketSalary: number
  annualTax: number
  cumulativeTax: number
}

export type LoyaltyTaxResult = {
  /** Year-by-year breakdown */
  breakdown: YearlyBreakdown[]
  /** Total underpayment accumulated over tenure */
  totalLoyaltyTax: number
  /** NPV of total loyalty tax */
  loyaltyTaxNPV: number
  /** Annual burn rate in the most recent year */
  currentAnnualTax: number
  /** Current salary vs what market would have paid at year N */
  currentMarketRate: number
  /** NPV gain from switching now (salary delta over next 5 yrs) */
  switchNowNPV: number
  /** Year with highest annual tax increment (optimal switch point in hindsight) */
  optimalSwitchYear: number
  /** Market salary that would have been earned if switched at optimal year */
  optimalSwitchSalary: number
}

export function calculateLoyaltyTax(input: LoyaltyTaxInput): LoyaltyTaxResult {
  const {
    currentSalary,
    startingSalary,
    yearsAtCompany,
    averageAnnualRaisePct,
    marketGrowthRatePct,
    projectionYears,
    discountRate = DISCOUNT_RATE,
  } = input

  const internalRate = averageAnnualRaisePct / 100
  const marketRate = marketGrowthRatePct / 100

  // Reconstruct historical salary series
  const breakdown: YearlyBreakdown[] = []
  let cumulativeTax = 0

  let maxAnnualTaxIncrement = -Infinity
  let optimalSwitchYear = 1

  for (let year = 1; year <= yearsAtCompany; year++) {
    const actualSalary = startingSalary * Math.pow(1 + internalRate, year)
    const marketSalary = startingSalary * Math.pow(1 + marketRate, year)
    const annualTax = Math.max(0, marketSalary - actualSalary)
    const increment = year > 1 ? annualTax - breakdown[year - 2].annualTax : annualTax
    cumulativeTax += annualTax

    if (increment > maxAnnualTaxIncrement) {
      maxAnnualTaxIncrement = increment
      optimalSwitchYear = year
    }

    breakdown.push({ year, actualSalary, marketSalary, annualTax, cumulativeTax })
  }

  const currentMarketRate = startingSalary * Math.pow(1 + marketRate, yearsAtCompany)
  const currentAnnualTax = Math.max(0, currentMarketRate - currentSalary)

  // NPV of historical loyalty tax stream
  const taxSeries = breakdown.map(b => b.annualTax)
  const loyaltyTaxNPV = npvFromSeries(taxSeries, discountRate)

  // Switch-now NPV: gain from jumping to market rate over next projectionYears years
  const switchNowSeries = Array.from({ length: projectionYears }, (_, i) => {
    const marketAtYear = currentMarketRate * Math.pow(1 + marketRate, i)
    const stayAtYear = currentSalary * Math.pow(1 + internalRate, i)
    return Math.max(0, marketAtYear - stayAtYear)
  })
  const switchNowNPV = npvFromSeries(switchNowSeries, discountRate)

  // Optimal switch year hindsight: what would you have earned at the switch point
  const optimalSwitchSalary = startingSalary * Math.pow(1 + marketRate, optimalSwitchYear)

  return {
    breakdown,
    totalLoyaltyTax: cumulativeTax,
    loyaltyTaxNPV,
    currentAnnualTax,
    currentMarketRate,
    switchNowNPV,
    optimalSwitchYear,
    optimalSwitchSalary,
  }
}
