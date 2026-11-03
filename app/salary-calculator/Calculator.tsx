"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import {
  PERIOD_LABELS,
  STATES,
  TAX_YEAR_2026,
  allPeriods,
  calculatePaycheck,
  fromAnnual,
  stateByCode,
  toAnnual,
  usd,
  type FilingStatus,
  type PayPeriod,
} from "@/lib/paycheckEngine"

const PERIODS = Object.keys(PERIOD_LABELS) as PayPeriod[]

type State = {
  amount: number
  period: PayPeriod
  hours: number
  weeks: number
  filing: FilingStatus
  state: string
  stateRate: number | null // null = use the table default
  k401: number // percent, 0–100
}

const DEFAULTS: State = {
  amount: 30,
  period: "hourly",
  hours: 40,
  weeks: 52,
  filing: "single",
  state: "TX",
  stateRate: null,
  k401: 0,
}

// Inputs are mirrored into the query string so a result can be shared as a link
// and reopened exactly, with no account.
const PARAM_KEYS: Record<keyof State, string> = {
  amount: "pay", period: "per", hours: "hrs", weeks: "wks", filing: "fs", state: "st", stateRate: "sr", k401: "k",
}

function readParams(initial: State): State {
  if (typeof window === "undefined") return initial
  const q = new URLSearchParams(window.location.search)
  const num = (k: string, fallback: number) => {
    const v = parseFloat(q.get(k) ?? "")
    return Number.isFinite(v) && v >= 0 ? v : fallback
  }
  const period = q.get(PARAM_KEYS.period) as PayPeriod | null
  const filing = q.get(PARAM_KEYS.filing) as FilingStatus | null
  const st = q.get(PARAM_KEYS.state)
  const sr = q.get(PARAM_KEYS.stateRate)
  return {
    amount: num(PARAM_KEYS.amount, initial.amount),
    period: period && PERIODS.includes(period) ? period : initial.period,
    hours: Math.min(num(PARAM_KEYS.hours, initial.hours), 100) || initial.hours,
    weeks: Math.min(num(PARAM_KEYS.weeks, initial.weeks), 52) || initial.weeks,
    filing: filing && ["single", "married", "head"].includes(filing) ? filing : initial.filing,
    state: st && STATES.some((s) => s.code === st) ? st : initial.state,
    stateRate: sr !== null && Number.isFinite(parseFloat(sr)) ? parseFloat(sr) : initial.stateRate,
    k401: Math.min(num(PARAM_KEYS.k401, initial.k401), 100),
  }
}

function writeParams(s: State) {
  const q = new URLSearchParams()
  ;(Object.keys(PARAM_KEYS) as (keyof State)[]).forEach((k) => {
    if (s[k] !== DEFAULTS[k] && s[k] !== null) q.set(PARAM_KEYS[k], String(s[k]))
  })
  const qs = q.toString()
  window.history.replaceState(null, "", qs ? `${window.location.pathname}?${qs}` : window.location.pathname)
}

const inputCls =
  "w-full rounded-lg bg-slate-900 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500/60"
const labelCls = "text-xs text-white/50 uppercase tracking-widest block mb-1"

export default function SalaryCalculator({
  initial,
  embedded = false,
}: {
  initial?: Partial<State>
  embedded?: boolean
}) {
  const start = { ...DEFAULTS, ...initial }
  const [s, setS] = useState<State>(start)
  const [copied, setCopied] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  // Read shared-link params after mount so server HTML and first client render match.
  useEffect(() => {
    if (!embedded) setS(readParams(start))
    setHydrated(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!embedded && hydrated) writeParams(s)
  }, [s, embedded, hydrated])

  const set = <K extends keyof State>(k: K, v: State[K]) => setS((prev) => ({ ...prev, [k]: v }))

  const schedule = { hoursPerWeek: s.hours, weeksPerYear: s.weeks, daysPerWeek: 5 }
  const annual = toAnnual(s.amount, s.period, schedule)
  const stateInfo = stateByCode(s.state)
  const effectiveStateRate = stateInfo.kind === "none" ? 0 : s.stateRate ?? stateInfo.rate

  const result = useMemo(
    () =>
      calculatePaycheck({
        annualGross: annual,
        filingStatus: s.filing,
        stateCode: s.state,
        stateRate: effectiveStateRate,
        k401Pct: s.k401 / 100,
      }),
    [annual, s.filing, s.state, effectiveStateRate, s.k401]
  )

  const grossByPeriod = allPeriods(annual, schedule)
  const netByPeriod = allPeriods(result.takeHome, schedule)

  function share() {
    navigator.clipboard?.writeText(window.location.href).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const breakdown = [
    { label: "Federal income tax", value: result.federalTax },
    { label: "Social Security (6.2%)", value: result.socialSecurity },
    { label: "Medicare (1.45%+)", value: result.medicare },
    { label: `${stateInfo.name} income tax`, value: result.stateTax },
    ...(result.k401 > 0 ? [{ label: "401(k) contribution", value: result.k401 }] : []),
  ]

  return (
    <div className="grid lg:grid-cols-5 gap-6">
      {/* Inputs */}
      <div className="lg:col-span-2 rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6 space-y-4">
        <div className="grid grid-cols-5 gap-3">
          <div className="col-span-3">
            <label className={labelCls} htmlFor="pay-amount">Pay amount ($)</label>
            <input
              id="pay-amount"
              type="number"
              min={0}
              step={s.period === "hourly" ? 0.5 : 100}
              value={s.amount}
              onChange={(e) => set("amount", Math.max(0, parseFloat(e.target.value) || 0))}
              className={inputCls}
            />
          </div>
          <div className="col-span-2">
            <label className={labelCls} htmlFor="pay-period">Per</label>
            <select
              id="pay-period"
              value={s.period}
              onChange={(e) => {
                // Keep the same annual pay when switching the period.
                const next = e.target.value as PayPeriod
                const converted = fromAnnual(annual, next, schedule)
                setS((prev) => ({ ...prev, period: next, amount: Math.round(converted * 100) / 100 }))
              }}
              className={inputCls}
            >
              {PERIODS.map((p) => (
                <option key={p} value={p}>{PERIOD_LABELS[p]}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={labelCls} htmlFor="hours">Hours / week</label>
            <input id="hours" type="number" min={1} max={100} value={s.hours}
              onChange={(e) => set("hours", Math.min(100, Math.max(1, parseFloat(e.target.value) || 1)))}
              className={inputCls} />
          </div>
          <div>
            <label className={labelCls} htmlFor="weeks">Weeks / year</label>
            <input id="weeks" type="number" min={1} max={52} value={s.weeks}
              onChange={(e) => set("weeks", Math.min(52, Math.max(1, parseFloat(e.target.value) || 1)))}
              className={inputCls} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={labelCls} htmlFor="filing">Filing status</label>
            <select id="filing" value={s.filing} onChange={(e) => set("filing", e.target.value as FilingStatus)} className={inputCls}>
              <option value="single">Single</option>
              <option value="married">Married, jointly</option>
              <option value="head">Head of household</option>
            </select>
          </div>
          <div>
            <label className={labelCls} htmlFor="state">State</label>
            <select
              id="state"
              value={s.state}
              onChange={(e) => setS((prev) => ({ ...prev, state: e.target.value, stateRate: null }))}
              className={inputCls}
            >
              {STATES.map((st) => (
                <option key={st.code} value={st.code}>{st.name}</option>
              ))}
            </select>
          </div>
        </div>

        {stateInfo.kind !== "none" && (
          <div>
            <label className={labelCls} htmlFor="state-rate">State tax rate (%)</label>
            <input
              id="state-rate"
              type="number"
              min={0}
              max={15}
              step={0.05}
              value={+(effectiveStateRate * 100).toFixed(3)}
              onChange={(e) => set("stateRate", Math.min(15, Math.max(0, parseFloat(e.target.value) || 0)) / 100)}
              className={inputCls}
            />
            <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
              {stateInfo.kind === "flat"
                ? `${stateInfo.name} has a flat income tax rate${stateInfo.exemptFirst ? ` on income above ${usd(stateInfo.exemptFirst)}` : ""}.`
                : `${stateInfo.name} uses graduated brackets. 5% is a placeholder, so enter your effective state rate for a closer estimate.`}
            </p>
          </div>
        )}
        {stateInfo.kind === "none" && (
          <p className="text-[11px] text-emerald-400/80">{stateInfo.name} has no state income tax on wages.</p>
        )}

        <div>
          <label className={labelCls} htmlFor="k401">Pre-tax 401(k) (% of pay)</label>
          <input id="k401" type="number" min={0} max={100} step={1} value={s.k401}
            onChange={(e) => set("k401", Math.min(100, Math.max(0, parseFloat(e.target.value) || 0)))}
            className={inputCls} />
          <p className="text-[11px] text-slate-500 mt-1">Capped at the {TAX_YEAR_2026.year} limit of {usd(TAX_YEAR_2026.k401Limit)}.</p>
        </div>
      </div>

      {/* Results */}
      <div className="lg:col-span-3 space-y-5" aria-live="polite">
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="rounded-2xl bg-linear-to-br from-indigo-950/70 to-violet-950/60 border border-indigo-500/25 p-5">
            <p className="text-xs text-indigo-300 uppercase tracking-widest">Annual salary (gross)</p>
            <p className="text-3xl font-semibold mt-1">{usd(annual)}</p>
            <p className="text-xs text-slate-400 mt-1">{usd(grossByPeriod.hourly, 2)}/hr · {usd(grossByPeriod.monthly)}/mo</p>
          </div>
          <div className="rounded-2xl bg-linear-to-br from-emerald-950/60 to-teal-950/50 border border-emerald-500/25 p-5">
            <p className="text-xs text-emerald-300 uppercase tracking-widest">Estimated take-home</p>
            <p className="text-3xl font-semibold mt-1">{usd(result.takeHome)}</p>
            <p className="text-xs text-slate-400 mt-1">
              {usd(netByPeriod.monthly)}/mo · {(result.effectiveRate * 100).toFixed(1)}% total tax · {(result.marginalRate * 100).toFixed(0)}% federal bracket
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-white/5 border border-white/10 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-slate-400">
                <th className="text-left font-medium p-3">Pay period</th>
                <th className="text-right font-medium p-3">Gross</th>
                <th className="text-right font-medium p-3">Take-home</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {PERIODS.map((p) => (
                <tr key={p}>
                  <td className="p-3 text-white">{PERIOD_LABELS[p]}</td>
                  <td className="p-3 text-right text-slate-300">{usd(grossByPeriod[p], p === "hourly" ? 2 : 0)}</td>
                  <td className="p-3 text-right text-emerald-300">{usd(netByPeriod[p], p === "hourly" ? 2 : 0)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-2">
          <p className="text-xs text-white/50 uppercase tracking-widest mb-2">Where your pay goes (per year)</p>
          {breakdown.map((b) => (
            <div key={b.label} className="flex items-center gap-3 text-sm">
              <span className="flex-1 text-slate-300">{b.label}</span>
              <span className="text-slate-400 w-12 text-right text-xs">{annual > 0 ? ((b.value / annual) * 100).toFixed(1) : "0.0"}%</span>
              <span className="text-white w-24 text-right">{usd(b.value)}</span>
            </div>
          ))}
          <div className="flex items-center gap-3 text-sm border-t border-white/10 pt-2 font-semibold">
            <span className="flex-1 text-emerald-300">Take-home pay</span>
            <span className="text-emerald-300 w-24 text-right">{usd(result.takeHome)}</span>
          </div>
        </div>

        {embedded ? (
          <p className="text-xs text-slate-500">
            Powered by the{" "}
            <a href="https://careerreturns.com/salary-calculator" target="_blank" rel="noopener" className="text-indigo-400 hover:underline">
              CareerReturns Salary Calculator
            </a>
            . Estimates only, not tax advice.
          </p>
        ) : (
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={share}
              className="bg-linear-to-r from-indigo-600 to-violet-600 hover:opacity-90 px-5 py-2.5 rounded-xl text-sm font-medium"
            >
              {copied ? "Link copied ✓" : "Copy link to this result"}
            </button>
            <Link href="/am-i-underpaid" className="text-sm text-indigo-400 hover:underline">
              Is {usd(annual)} a fair salary for your role? →
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
