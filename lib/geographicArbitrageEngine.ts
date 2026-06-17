/**
 * Geographic Arbitrage Wealth Multiplier Engine
 *
 * Models the effective wealth gain from earning a high-location salary
 * while living in a lower cost-of-living location.
 *
 * COL index: 100 = average US cost of living (Numbeo 2025-2026 data)
 * Tax rates: effective rates for remote workers (income tax only, not payroll)
 *
 * FIRE timeline: standard SWR model at 4% withdrawal rate, 7% portfolio return
 */

import { DISCOUNT_RATE } from "./mbaEngine"

export type CityData = {
  name: string
  country: string
  colIndex: number      // 100 = avg US
  effectiveTaxRate: number  // 0-1
  avgMonthlyCost: number    // USD equivalent for comfortable living
  visaFriendly: boolean     // easy for remote workers
  timezone: string
}

export const CITIES: Record<string, CityData> = {
  // US Cities
  "san_francisco": { name: "San Francisco, CA",  country: "US", colIndex: 165, effectiveTaxRate: 0.38, avgMonthlyCost: 4800, visaFriendly: true,  timezone: "PST" },
  "new_york":      { name: "New York, NY",        country: "US", colIndex: 160, effectiveTaxRate: 0.37, avgMonthlyCost: 4600, visaFriendly: true,  timezone: "EST" },
  "seattle":       { name: "Seattle, WA",         country: "US", colIndex: 148, effectiveTaxRate: 0.32, avgMonthlyCost: 4200, visaFriendly: true,  timezone: "PST" },
  "boston":        { name: "Boston, MA",           country: "US", colIndex: 145, effectiveTaxRate: 0.36, avgMonthlyCost: 4100, visaFriendly: true,  timezone: "EST" },
  "austin":        { name: "Austin, TX",           country: "US", colIndex: 118, effectiveTaxRate: 0.28, avgMonthlyCost: 3200, visaFriendly: true,  timezone: "CST" },
  "denver":        { name: "Denver, CO",           country: "US", colIndex: 112, effectiveTaxRate: 0.30, avgMonthlyCost: 3000, visaFriendly: true,  timezone: "MST" },
  "chicago":       { name: "Chicago, IL",          country: "US", colIndex: 108, effectiveTaxRate: 0.31, avgMonthlyCost: 2900, visaFriendly: true,  timezone: "CST" },
  "miami":         { name: "Miami, FL",            country: "US", colIndex: 122, effectiveTaxRate: 0.29, avgMonthlyCost: 3400, visaFriendly: true,  timezone: "EST" },
  "phoenix":       { name: "Phoenix, AZ",          country: "US", colIndex: 98,  effectiveTaxRate: 0.27, avgMonthlyCost: 2600, visaFriendly: true,  timezone: "MST" },
  // Europe
  "lisbon":        { name: "Lisbon, Portugal",     country: "PT", colIndex: 68,  effectiveTaxRate: 0.20, avgMonthlyCost: 1900, visaFriendly: true,  timezone: "WET" },
  "barcelona":     { name: "Barcelona, Spain",     country: "ES", colIndex: 78,  effectiveTaxRate: 0.22, avgMonthlyCost: 2200, visaFriendly: true,  timezone: "CET" },
  "berlin":        { name: "Berlin, Germany",      country: "DE", colIndex: 92,  effectiveTaxRate: 0.35, avgMonthlyCost: 2600, visaFriendly: true,  timezone: "CET" },
  "amsterdam":     { name: "Amsterdam, Netherlands",country:"NL", colIndex: 108, effectiveTaxRate: 0.37, avgMonthlyCost: 3100, visaFriendly: true,  timezone: "CET" },
  "prague":        { name: "Prague, Czech Republic",country:"CZ", colIndex: 62,  effectiveTaxRate: 0.22, avgMonthlyCost: 1700, visaFriendly: true,  timezone: "CET" },
  "tallinn":       { name: "Tallinn, Estonia",     country: "EE", colIndex: 65,  effectiveTaxRate: 0.20, avgMonthlyCost: 1800, visaFriendly: true,  timezone: "EET" },
  "london":        { name: "London, UK",           country: "GB", colIndex: 145, effectiveTaxRate: 0.33, avgMonthlyCost: 4000, visaFriendly: true,  timezone: "GMT" },
  // Americas
  "medellin":      { name: "Medellín, Colombia",   country: "CO", colIndex: 42,  effectiveTaxRate: 0.10, avgMonthlyCost: 1200, visaFriendly: true,  timezone: "COT" },
  "mexico_city":   { name: "Mexico City, Mexico",  country: "MX", colIndex: 52,  effectiveTaxRate: 0.12, avgMonthlyCost: 1400, visaFriendly: true,  timezone: "CST" },
  "buenos_aires":  { name: "Buenos Aires, Argentina",country:"AR",colIndex: 45,  effectiveTaxRate: 0.08, avgMonthlyCost: 1300, visaFriendly: true,  timezone: "ART" },
  "toronto":       { name: "Toronto, Canada",      country: "CA", colIndex: 130, effectiveTaxRate: 0.33, avgMonthlyCost: 3600, visaFriendly: true,  timezone: "EST" },
  // Asia-Pacific
  "bali":          { name: "Bali, Indonesia",      country: "ID", colIndex: 38,  effectiveTaxRate: 0.08, avgMonthlyCost: 1100, visaFriendly: true,  timezone: "WITA" },
  "chiang_mai":    { name: "Chiang Mai, Thailand", country: "TH", colIndex: 36,  effectiveTaxRate: 0.08, avgMonthlyCost: 1000, visaFriendly: true,  timezone: "ICT" },
  "singapore":     { name: "Singapore",            country: "SG", colIndex: 128, effectiveTaxRate: 0.17, avgMonthlyCost: 3500, visaFriendly: true,  timezone: "SGT" },
  "tokyo":         { name: "Tokyo, Japan",         country: "JP", colIndex: 118, effectiveTaxRate: 0.28, avgMonthlyCost: 3200, visaFriendly: false, timezone: "JST" },
  "taipei":        { name: "Taipei, Taiwan",       country: "TW", colIndex: 72,  effectiveTaxRate: 0.18, avgMonthlyCost: 2000, visaFriendly: true,  timezone: "CST" },
  // Middle East / Africa
  "dubai":         { name: "Dubai, UAE",           country: "AE", colIndex: 108, effectiveTaxRate: 0.00, avgMonthlyCost: 3000, visaFriendly: true,  timezone: "GST" },
  "cape_town":     { name: "Cape Town, South Africa",country:"ZA",colIndex: 42, effectiveTaxRate: 0.18, avgMonthlyCost: 1200, visaFriendly: true,  timezone: "SAST" },
}

export type ArbitrageResult = {
  cityA: CityData
  cityB: CityData
  // Effective purchasing power in each city
  netSalaryA: number
  netSalaryB: number // same salary but in city B
  purchasingPowerA: number // normalized to US baseline
  purchasingPowerB: number
  wealthMultiplier: number // purchasingPowerB / purchasingPowerA
  // Monthly surplus (income - expenses)
  monthlySurplusA: number
  monthlySurplusB: number
  // FIRE timeline (years to financial independence)
  fireTimelineA: number
  fireTimelineB: number
  fireYearsSaved: number
  // 5-year wealth accumulation comparison
  wealthAt5YearsA: number
  wealthAt5YearsB: number
  wealthDifference5yr: number
}

export function calculateArbitrage(
  grossSalary: number,
  cityAKey: string,
  cityBKey: string,
): ArbitrageResult {
  const cityA = CITIES[cityAKey] ?? CITIES["san_francisco"]
  const cityB = CITIES[cityBKey] ?? CITIES["lisbon"]

  // Net salary after tax in each location (same gross salary, different tax rates)
  const netSalaryA = grossSalary * (1 - cityA.effectiveTaxRate)
  const netSalaryB = grossSalary * (1 - cityB.effectiveTaxRate)

  // Purchasing power = net salary adjusted by cost of living index
  const purchasingPowerA = (netSalaryA / cityA.colIndex) * 100
  const purchasingPowerB = (netSalaryB / cityB.colIndex) * 100

  const wealthMultiplier = purchasingPowerB / purchasingPowerA

  // Monthly surplus: net monthly income minus average living costs
  const netMonthlyA = netSalaryA / 12
  const netMonthlyB = netSalaryB / 12
  const monthlySurplusA = Math.max(0, netMonthlyA - cityA.avgMonthlyCost)
  const monthlySurplusB = Math.max(0, netMonthlyB - cityB.avgMonthlyCost)

  // FIRE timeline: at 7% annual return, 4% SWR
  // Target: 25× annual expenses (the 4% rule)
  const annualExpensesA = cityA.avgMonthlyCost * 12
  const annualExpensesB = cityB.avgMonthlyCost * 12
  const fireTargetA = annualExpensesA * 25
  const fireTargetB = annualExpensesB * 25
  const monthlyReturn = 0.07 / 12

  const calcFireYears = (monthlyContrib: number, target: number): number => {
    if (monthlyContrib <= 0) return 99
    // FV = PMT * ((1+r)^n - 1) / r → solve for n
    // n = log(1 + target*r/PMT) / log(1+r)
    const n = Math.log(1 + (target * monthlyReturn) / monthlyContrib) / Math.log(1 + monthlyReturn)
    return Math.max(0, n / 12) // months to years
  }

  const fireTimelineA = calcFireYears(monthlySurplusA, fireTargetA)
  const fireTimelineB = calcFireYears(monthlySurplusB, fireTargetB)
  const fireYearsSaved = Math.max(0, fireTimelineA - fireTimelineB)

  // 5-year wealth accumulation: compound monthly surplus at 7% annual
  const compound5yr = (monthly: number): number => {
    let total = 0
    for (let m = 0; m < 60; m++) {
      total = (total + monthly) * (1 + monthlyReturn)
    }
    return total
  }

  const wealthAt5YearsA = compound5yr(monthlySurplusA)
  const wealthAt5YearsB = compound5yr(monthlySurplusB)
  const wealthDifference5yr = wealthAt5YearsB - wealthAt5YearsA

  return {
    cityA, cityB,
    netSalaryA, netSalaryB,
    purchasingPowerA, purchasingPowerB,
    wealthMultiplier,
    monthlySurplusA, monthlySurplusB,
    fireTimelineA, fireTimelineB,
    fireYearsSaved,
    wealthAt5YearsA, wealthAt5YearsB,
    wealthDifference5yr,
  }
}
