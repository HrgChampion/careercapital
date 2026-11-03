"use client"

import Link from "next/link"
import { useState } from "react"
import { COUNTRIES, formatCurrency, type CountryCode } from "@/lib/locale"
import { calculatePaycheck, fromAnnual } from "@/lib/paycheckEngine"

export type PayView = "annual" | "monthly" | "hourly"

/**
 * Lets a salary tool show annual figures as annual, monthly or hourly, and (for
 * US salaries, where the paycheck engine applies) after federal tax and FICA.
 * Returns a formatter for annual amounts plus the toggle UI and footnote.
 */
export function usePayView(country: CountryCode) {
  const [view, setView] = useState<PayView>("annual")
  const [afterTax, setAfterTax] = useState(false)

  const taxAvailable = country === "US"
  const showAfterTax = afterTax && taxAvailable
  const suffix = view === "annual" ? "/yr" : view === "monthly" ? "/mo" : "/hr"

  function fmt(annual: number): string {
    const base = showAfterTax
      ? calculatePaycheck({ annualGross: annual, filingStatus: "single", stateCode: "TX" }).takeHome
      : annual
    const v = fromAnnual(base, view)
    if (view !== "hourly") return formatCurrency(v, country)
    const c = COUNTRIES[country]
    return new Intl.NumberFormat(c.locale, {
      style: "currency",
      currency: c.currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(v)
  }

  const controls = (
    <div className="flex items-center justify-between gap-2">
      <div className="flex rounded-md border border-white/10 overflow-hidden" role="group" aria-label="Pay period">
        {(["annual", "monthly", "hourly"] as PayView[]).map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => setView(p)}
            aria-pressed={view === p}
            className={`px-2.5 py-1 text-[11px] capitalize ${view === p ? "bg-white/15 text-white" : "text-white/40 hover:text-white/70"}`}
          >
            {p}
          </button>
        ))}
      </div>
      {taxAvailable && (
        <label className="flex items-center gap-1.5 text-[11px] text-white/50 cursor-pointer">
          <input type="checkbox" checked={afterTax} onChange={(e) => setAfterTax(e.target.checked)} className="accent-violet-500" />
          After tax
        </label>
      )}
    </div>
  )

  function footnote(salary: number) {
    if (view === "annual" && !showAfterTax) return null
    return (
      <p className="text-center text-[10px] text-white/30 mt-1">
        {showAfterTax ? "After 2026 federal tax & FICA, single filer, before state tax. " : ""}
        {view === "hourly" ? "Hourly assumes 2,080 hours a year. " : ""}
        {taxAvailable && (
          <Link href={`/salary-calculator?pay=${salary}&per=annual`} className="underline hover:text-white/60">
            Full paycheck breakdown
          </Link>
        )}
      </p>
    )
  }

  return { fmt, suffix, controls, footnote }
}
