// Raise calculator: what a raise is worth per paycheck, after tax, after
// inflation, and compounded over a career horizon.

import { DISCOUNT_RATE, npvFromSeries } from "./mbaEngine"
import { calculatePaycheck, type FilingStatus } from "./paycheckEngine"

export type RaiseInput = {
  currentSalary: number
  raisePct: number // percent, e.g. 5
  filingStatus: FilingStatus
  stateCode: string
  inflationPct: number // expected inflation, percent
  growthPct: number // future annual raises on both paths, percent
  years: number // horizon for the compounding view
}

export type RaiseResult = {
  newSalary: number
  grossIncrease: number
  netBefore: number
  netAfter: number
  netIncrease: number
  /** Share of the gross raise you keep after tax. */
  keepRate: number
  /** Raise after inflation, percent. */
  realRaisePct: number
  /** Extra gross earnings over the horizon, undiscounted. */
  cumulativeGain: number
  /** Present value of the extra gross earnings at the site discount rate. */
  npvGain: number
}

export function calculateRaise(i: RaiseInput): RaiseResult {
  const current = Math.max(0, i.currentSalary)
  const newSalary = current * (1 + i.raisePct / 100)
  const tax = (gross: number) =>
    calculatePaycheck({ annualGross: gross, filingStatus: i.filingStatus, stateCode: i.stateCode }).takeHome
  const netBefore = tax(current)
  const netAfter = tax(newSalary)
  const growth = 1 + i.growthPct / 100
  // Both paths grow at the same rate, so the raise compounds: year t gap = Δ × growth^t.
  const gaps = Array.from({ length: Math.max(1, Math.round(i.years)) }, (_, t) => (newSalary - current) * Math.pow(growth, t))
  return {
    newSalary,
    grossIncrease: newSalary - current,
    netBefore,
    netAfter,
    netIncrease: netAfter - netBefore,
    keepRate: newSalary > current ? (netAfter - netBefore) / (newSalary - current) : 0,
    realRaisePct: ((1 + i.raisePct / 100) / (1 + i.inflationPct / 100) - 1) * 100,
    cumulativeGain: gaps.reduce((s, g) => s + g, 0),
    npvGain: npvFromSeries([0, ...gaps], DISCOUNT_RATE),
  }
}
