"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { METROS, equivalentSalary, metroById, metroLabel } from "@/lib/costOfLiving"
import { usd, type FilingStatus } from "@/lib/paycheckEngine"

type S = { salary: number; from: string; to: string; filing: FilingStatus }
const DEFAULTS: S = { salary: 100000, from: "austin", to: "san_francisco", filing: "single" }

const inputCls =
  "w-full rounded-lg bg-slate-900 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500/60"
const labelCls = "text-xs text-white/50 uppercase tracking-widest block mb-1"

export default function CostOfLivingCalculator() {
  const [s, setS] = useState<S>(DEFAULTS)
  const [hydrated, setHydrated] = useState(false)
  const [copied, setCopied] = useState(false)
  const set = <K extends keyof S>(k: K, v: S[K]) => setS((p) => ({ ...p, [k]: v }))

  // Inputs are mirrored into the query string so a result can be shared as a link.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search)
    const next = { ...DEFAULTS }
    const sal = parseFloat(q.get("s") ?? "")
    if (Number.isFinite(sal) && sal > 0) next.salary = sal
    if (metroById(q.get("from") ?? "")) next.from = q.get("from")!
    if (metroById(q.get("to") ?? "")) next.to = q.get("to")!
    const fs = q.get("fs")
    if (fs === "married" || fs === "head") next.filing = fs
    setS(next)
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    const q = new URLSearchParams({ s: String(s.salary), from: s.from, to: s.to })
    if (s.filing !== "single") q.set("fs", s.filing)
    window.history.replaceState(null, "", `${window.location.pathname}?${q.toString()}`)
  }, [s, hydrated])

  const from = metroById(s.from)!
  const to = metroById(s.to)!
  const r = useMemo(() => equivalentSalary(s.salary, from, to, s.filing), [s.salary, from, to, s.filing])
  const cheaper = r.priceDiffPct < 0

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
          <label className={labelCls} htmlFor="salary">Your salary ($ per year)</label>
          <input id="salary" type="number" min={0} step={5000} value={s.salary}
            onChange={(e) => set("salary", Math.max(0, parseFloat(e.target.value) || 0))} className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="from">Where you live now</label>
          <select id="from" value={s.from} onChange={(e) => set("from", e.target.value)} className={inputCls}>
            {METROS.map((m) => (
              <option key={m.id} value={m.id}>{metroLabel(m)}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="to">Where you&apos;re moving</label>
          <select id="to" value={s.to} onChange={(e) => set("to", e.target.value)} className={inputCls}>
            {METROS.map((m) => (
              <option key={m.id} value={m.id}>{metroLabel(m)}</option>
            ))}
          </select>
        </div>
        <button type="button" onClick={() => setS((p) => ({ ...p, from: p.to, to: p.from }))} className="text-xs text-indigo-300 hover:underline">
          ⇅ Swap cities
        </button>
        <div>
          <label className={labelCls} htmlFor="filing">Filing status</label>
          <select id="filing" value={s.filing} onChange={(e) => set("filing", e.target.value as FilingStatus)} className={inputCls}>
            <option value="single">Single</option>
            <option value="married">Married, jointly</option>
            <option value="head">Head of household</option>
          </select>
        </div>
      </div>

      <div className="lg:col-span-3 space-y-5" aria-live="polite">
        <div className="rounded-2xl bg-linear-to-br from-indigo-950/70 to-violet-950/60 border border-indigo-500/25 p-6 space-y-2">
          <p className="text-xs text-indigo-300 uppercase tracking-widest">Salary you need in {to.name.split("-")[0]}</p>
          <p className="text-4xl font-semibold">{usd(r.taxAware)}</p>
          <p className="text-sm text-slate-300">
            to match the after-tax lifestyle of {usd(s.salary)} in {from.name.split("-")[0]}. Prices are{" "}
            <strong className={cheaper ? "text-emerald-300" : "text-amber-300"}>
              {Math.abs(r.priceDiffPct).toFixed(1)}% {cheaper ? "lower" : "higher"}
            </strong>
            {from.state !== to.state ? `, and ${to.state} taxes differ from ${from.state}` : ""}.
          </p>
        </div>

        <div className="rounded-2xl bg-white/5 border border-white/10 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-slate-400">
                <th className="text-left font-medium p-3"> </th>
                <th className="text-right font-medium p-3">{from.name.split("-")[0]}</th>
                <th className="text-right font-medium p-3">{to.name.split("-")[0]}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="p-3 text-white">Price level (US = 100)</td>
                <td className="p-3 text-right text-slate-300">{from.rpp.toFixed(1)}</td>
                <td className="p-3 text-right text-slate-300">{to.rpp.toFixed(1)}</td>
              </tr>
              <tr>
                <td className="p-3 text-white">Equivalent gross salary</td>
                <td className="p-3 text-right text-slate-300">{usd(s.salary)}</td>
                <td className="p-3 text-right text-white font-medium">{usd(r.taxAware)}</td>
              </tr>
              <tr>
                <td className="p-3 text-white">Take-home pay</td>
                <td className="p-3 text-right text-emerald-300">{usd(r.takeHomeFrom)}</td>
                <td className="p-3 text-right text-emerald-300">{usd(r.takeHomeTo)}</td>
              </tr>
              <tr>
                <td className="p-3 text-white">
                  Prices only
                  <span className="block text-[11px] text-slate-500">What a tax-blind calculator would tell you</span>
                </td>
                <td className="p-3 text-right text-slate-400">{usd(s.salary)}</td>
                <td className="p-3 text-right text-slate-400">{usd(r.priceOnly)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {Math.abs(r.taxAware - r.priceOnly) >= 1000 && (
          <p className="text-sm text-slate-400 leading-relaxed">
            Taxes change the answer by <strong className="text-white">{usd(Math.abs(r.taxAware - r.priceOnly))}</strong>. Price-only
            calculators would tell you {usd(r.priceOnly)}, but {to.state === from.state ? "higher brackets on a bigger salary" : `${to.state}'s state income tax compared with ${from.state}'s`}{" "}
            {r.taxAware > r.priceOnly ? "mean you need more" : "mean you need less"}.
          </p>
        )}

        <div className="flex flex-wrap items-center gap-4">
          <button onClick={share} className="bg-linear-to-r from-indigo-600 to-violet-600 hover:opacity-90 px-5 py-2.5 rounded-xl text-sm font-medium">
            {copied ? "Link copied ✓" : "Copy link to this result"}
          </button>
          <Link href="/job-offer-comparison" className="text-sm text-indigo-400 hover:underline">Have an offer in {to.name.split("-")[0]}? Compare it →</Link>
        </div>
      </div>
    </div>
  )
}
