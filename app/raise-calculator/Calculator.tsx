"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { calculateRaise } from "@/lib/raiseEngine"
import { PERIOD_LABELS, STATES, fromAnnual, usd, type FilingStatus, type PayPeriod } from "@/lib/paycheckEngine"

const PERIODS: PayPeriod[] = ["hourly", "weekly", "biweekly", "monthly", "annual"]

type S = {
  salary: number
  mode: "pct" | "new"
  raisePct: number
  newSalary: number
  filing: FilingStatus
  state: string
  inflation: number
  growth: number
  years: number
}

const DEFAULTS: S = { salary: 80000, mode: "pct", raisePct: 5, newSalary: 84000, filing: "single", state: "TX", inflation: 3, growth: 3, years: 10 }
const KEYS: Record<keyof S, string> = { salary: "s", mode: "m", raisePct: "r", newSalary: "n", filing: "fs", state: "st", inflation: "inf", growth: "g", years: "y" }

const inputCls =
  "w-full rounded-lg bg-slate-900 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500/60"
const labelCls = "text-xs text-white/50 uppercase tracking-widest block mb-1"

export default function RaiseCalculator() {
  const [s, setS] = useState<S>(DEFAULTS)
  const [hydrated, setHydrated] = useState(false)
  const [copied, setCopied] = useState(false)
  const set = <K extends keyof S>(k: K, v: S[K]) => setS((p) => ({ ...p, [k]: v }))

  // Inputs are mirrored into the query string so a result can be shared as a link.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search)
    const next = { ...DEFAULTS }
    ;(["salary", "raisePct", "newSalary", "inflation", "growth", "years"] as const).forEach((k) => {
      const n = parseFloat(q.get(KEYS[k]) ?? "")
      if (Number.isFinite(n) && n >= 0) next[k] = k === "years" ? Math.min(40, Math.max(1, n)) : n
    })
    if (q.get(KEYS.mode) === "new") next.mode = "new"
    const fs = q.get(KEYS.filing)
    if (fs === "married" || fs === "head") next.filing = fs
    const st = q.get(KEYS.state)
    if (st && STATES.some((x) => x.code === st)) next.state = st
    setS(next)
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    const q = new URLSearchParams()
    ;(Object.keys(KEYS) as (keyof S)[]).forEach((k) => {
      if (s[k] !== DEFAULTS[k]) q.set(KEYS[k], String(s[k]))
    })
    const qs = q.toString()
    window.history.replaceState(null, "", qs ? `${window.location.pathname}?${qs}` : window.location.pathname)
  }, [s, hydrated])

  const raisePct = s.mode === "pct" ? s.raisePct : s.salary > 0 ? (s.newSalary / s.salary - 1) * 100 : 0
  const r = useMemo(
    () =>
      calculateRaise({
        currentSalary: s.salary,
        raisePct,
        filingStatus: s.filing,
        stateCode: s.state,
        inflationPct: s.inflation,
        growthPct: s.growth,
        years: s.years,
      }),
    [s.salary, raisePct, s.filing, s.state, s.inflation, s.growth, s.years]
  )

  function share() {
    navigator.clipboard?.writeText(window.location.href).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="grid lg:grid-cols-5 gap-6">
      <div className="lg:col-span-2 rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6 space-y-4">
        <div>
          <label className={labelCls} htmlFor="salary">Current annual salary ($)</label>
          <input id="salary" type="number" min={0} step={1000} value={s.salary}
            onChange={(e) => set("salary", Math.max(0, parseFloat(e.target.value) || 0))} className={inputCls} />
        </div>

        <div className="flex rounded-lg border border-white/10 overflow-hidden text-xs" role="group" aria-label="Raise input">
          {([["pct", "Raise %"], ["new", "New salary"]] as const).map(([m, label]) => (
            <button key={m} type="button" aria-pressed={s.mode === m} onClick={() => set("mode", m)}
              className={`flex-1 py-2 ${s.mode === m ? "bg-white/15 text-white" : "text-white/40 hover:text-white/70"}`}>
              {label}
            </button>
          ))}
        </div>

        {s.mode === "pct" ? (
          <div>
            <label className={labelCls} htmlFor="raise">Raise (%)</label>
            <input id="raise" type="number" min={0} max={200} step={0.5} value={s.raisePct}
              onChange={(e) => set("raisePct", Math.min(200, Math.max(0, parseFloat(e.target.value) || 0)))} className={inputCls} />
          </div>
        ) : (
          <div>
            <label className={labelCls} htmlFor="new">New annual salary ($)</label>
            <input id="new" type="number" min={0} step={1000} value={s.newSalary}
              onChange={(e) => set("newSalary", Math.max(0, parseFloat(e.target.value) || 0))} className={inputCls} />
          </div>
        )}

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
            <select id="state" value={s.state} onChange={(e) => set("state", e.target.value)} className={inputCls}>
              {STATES.map((st) => (
                <option key={st.code} value={st.code}>{st.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className={labelCls} htmlFor="inf">Inflation %</label>
            <input id="inf" type="number" min={0} max={20} step={0.1} value={s.inflation}
              onChange={(e) => set("inflation", Math.min(20, Math.max(0, parseFloat(e.target.value) || 0)))} className={inputCls} />
          </div>
          <div>
            <label className={labelCls} htmlFor="g">Future raises %</label>
            <input id="g" type="number" min={0} max={20} step={0.5} value={s.growth}
              onChange={(e) => set("growth", Math.min(20, Math.max(0, parseFloat(e.target.value) || 0)))} className={inputCls} />
          </div>
          <div>
            <label className={labelCls} htmlFor="y">Years</label>
            <input id="y" type="number" min={1} max={40} value={s.years}
              onChange={(e) => set("years", Math.min(40, Math.max(1, parseFloat(e.target.value) || 1)))} className={inputCls} />
          </div>
        </div>
        <p className="text-[11px] text-slate-500 leading-relaxed">
          Graduated-bracket states use a 5% placeholder rate. For an exact state figure, use the{" "}
          <Link href="/salary-calculator" className="underline">salary calculator</Link>.
        </p>
      </div>

      <div className="lg:col-span-3 space-y-5" aria-live="polite">
        <div className="grid sm:grid-cols-3 gap-3">
          <div className="rounded-2xl bg-linear-to-br from-indigo-950/70 to-violet-950/60 border border-indigo-500/25 p-5">
            <p className="text-xs text-indigo-300 uppercase tracking-widest">New salary</p>
            <p className="text-2xl font-semibold mt-1">{usd(r.newSalary)}</p>
            <p className="text-xs text-slate-400 mt-1">+{usd(r.grossIncrease)} ({raisePct.toFixed(1)}%)</p>
          </div>
          <div className="rounded-2xl bg-linear-to-br from-emerald-950/60 to-teal-950/50 border border-emerald-500/25 p-5">
            <p className="text-xs text-emerald-300 uppercase tracking-widest">After tax</p>
            <p className="text-2xl font-semibold mt-1">+{usd(r.netIncrease)}/yr</p>
            <p className="text-xs text-slate-400 mt-1">You keep {(r.keepRate * 100).toFixed(0)}% of the raise</p>
          </div>
          <div className={`rounded-2xl border p-5 ${r.realRaisePct >= 0 ? "bg-white/5 border-white/10" : "bg-red-950/40 border-red-500/30"}`}>
            <p className="text-xs text-slate-300 uppercase tracking-widest">After inflation</p>
            <p className={`text-2xl font-semibold mt-1 ${r.realRaisePct < 0 ? "text-red-300" : ""}`}>
              {r.realRaisePct >= 0 ? "+" : ""}{r.realRaisePct.toFixed(1)}%
            </p>
            <p className="text-xs text-slate-400 mt-1">{r.realRaisePct < 0 ? "A real pay cut" : "Real purchasing-power gain"}</p>
          </div>
        </div>

        <div className="rounded-2xl bg-white/5 border border-white/10 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-slate-400">
                <th className="text-left font-medium p-3">Per</th>
                <th className="text-right font-medium p-3">Before</th>
                <th className="text-right font-medium p-3">After</th>
                <th className="text-right font-medium p-3">Gross change</th>
                <th className="text-right font-medium p-3">Take-home change</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {PERIODS.map((p) => {
                const d = p === "hourly" ? 2 : 0
                return (
                  <tr key={p}>
                    <td className="p-3 text-white">{PERIOD_LABELS[p]}</td>
                    <td className="p-3 text-right text-slate-400">{usd(fromAnnual(s.salary, p), d)}</td>
                    <td className="p-3 text-right text-white">{usd(fromAnnual(r.newSalary, p), d)}</td>
                    <td className="p-3 text-right text-slate-300">+{usd(fromAnnual(r.grossIncrease, p), d)}</td>
                    <td className="p-3 text-right text-emerald-300">+{usd(fromAnnual(r.netIncrease, p), d)}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <div className="rounded-2xl bg-linear-to-br from-violet-950/50 to-indigo-950/40 border border-violet-500/20 p-5 space-y-1">
          <p className="text-xs text-violet-300 uppercase tracking-widest">The long-run value of this raise</p>
          <p className="text-xl font-semibold">
            {usd(r.cumulativeGain)} more over {s.years} year{s.years === 1 ? "" : "s"}
          </p>
          <p className="text-sm text-slate-300">
            Worth {usd(r.npvGain)} in today&apos;s money (discounted at 6%). Future raises are a percentage of your base, so
            today&apos;s raise keeps compounding. That&apos;s why the first number you negotiate matters most.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button onClick={share} className="bg-linear-to-r from-indigo-600 to-violet-600 hover:opacity-90 px-5 py-2.5 rounded-xl text-sm font-medium">
            {copied ? "Link copied ✓" : "Copy link to this result"}
          </button>
          <Link href="/salary-negotiation-simulator" className="text-sm text-indigo-400 hover:underline">Practise negotiating it →</Link>
          <Link href="/am-i-underpaid" className="text-sm text-indigo-400 hover:underline">Is your new salary at market? →</Link>
        </div>
      </div>
    </div>
  )
}
