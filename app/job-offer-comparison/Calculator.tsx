"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { OFFER_LOCATIONS, PROJECTION_YEARS, evaluateOffer, type Offer } from "@/lib/jobOfferEngine"
import { STATES, usd, type FilingStatus } from "@/lib/paycheckEngine"

const DEFAULT_A: Offer = {
  name: "Offer A",
  base: 150000,
  bonusPct: 10,
  signing: 0,
  equityPerYear: 0,
  matchPct: 4,
  raisePct: 3,
  location: "san_francisco",
  state: "TX",
  officeDays: 3,
  commutePerDay: 20,
}

const DEFAULT_B: Offer = {
  name: "Offer B",
  base: 130000,
  bonusPct: 10,
  signing: 10000,
  equityPerYear: 0,
  matchPct: 5,
  raisePct: 3,
  location: "austin",
  state: "TX",
  officeDays: 0,
  commutePerDay: 0,
}

const NUM_FIELDS: Array<{ key: keyof Offer; label: string; step: number; suffix?: string }> = [
  { key: "base", label: "Base salary", step: 5000 },
  { key: "bonusPct", label: "Target bonus", step: 1, suffix: "%" },
  { key: "signing", label: "Signing bonus", step: 1000 },
  { key: "equityPerYear", label: "Equity / RSUs per year", step: 5000 },
  { key: "matchPct", label: "401(k) match", step: 0.5, suffix: "%" },
  { key: "raisePct", label: "Expected raise / yr", step: 0.5, suffix: "%" },
  { key: "officeDays", label: "Office days / week", step: 1 },
  { key: "commutePerDay", label: "Commute cost / day", step: 5 },
]

// Offers are mirrored into the query string (a.base=…, b.location=…) so a
// comparison can be shared as a link.
function encode(a: Offer, b: Offer, filing: FilingStatus, k401: number): string {
  const q = new URLSearchParams()
  ;([["a", a, DEFAULT_A], ["b", b, DEFAULT_B]] as const).forEach(([p, o, d]) => {
    ;(Object.keys(o) as (keyof Offer)[]).forEach((k) => {
      if (o[k] !== d[k]) q.set(`${p}.${k}`, String(o[k]))
    })
  })
  if (filing !== "single") q.set("fs", filing)
  if (k401 !== 0) q.set("k", String(k401))
  return q.toString()
}

function decode(defaults: Offer, prefix: string, q: URLSearchParams): Offer {
  const o = { ...defaults }
  ;(Object.keys(defaults) as (keyof Offer)[]).forEach((k) => {
    const v = q.get(`${prefix}.${k}`)
    if (v === null) return
    if (typeof defaults[k] === "number") {
      const n = parseFloat(v)
      if (Number.isFinite(n) && n >= 0) (o as Record<string, unknown>)[k] = n
    } else if (k === "location" ? OFFER_LOCATIONS.some((l) => l.id === v) : k === "state" ? STATES.some((s) => s.code === v) : true) {
      (o as Record<string, unknown>)[k] = v.slice(0, 40)
    }
  })
  return o
}

const inputCls =
  "w-full rounded-lg bg-slate-900 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500/60"
const labelCls = "text-[11px] text-white/50 uppercase tracking-widest block mb-1"

function OfferForm({ offer, onChange, accent }: { offer: Offer; onChange: (o: Offer) => void; accent: string }) {
  const set = <K extends keyof Offer>(k: K, v: Offer[K]) => onChange({ ...offer, [k]: v })
  return (
    <div className={`rounded-2xl bg-white/5 border ${accent} p-5 space-y-3`}>
      <input
        aria-label="Offer name"
        value={offer.name}
        maxLength={40}
        onChange={(e) => set("name", e.target.value)}
        className="w-full bg-transparent text-lg font-semibold text-white focus:outline-none"
      />
      <div>
        <label className={labelCls}>Location</label>
        <select value={offer.location} onChange={(e) => set("location", e.target.value)} className={inputCls}>
          {OFFER_LOCATIONS.map((l) => (
            <option key={l.id} value={l.id}>{l.label}</option>
          ))}
        </select>
      </div>
      {offer.location === "other" && (
        <div>
          <label className={labelCls}>State (for tax)</label>
          <select value={offer.state} onChange={(e) => set("state", e.target.value)} className={inputCls}>
            {STATES.map((s) => (
              <option key={s.code} value={s.code}>{s.name}</option>
            ))}
          </select>
        </div>
      )}
      <div className="grid grid-cols-2 gap-3">
        {NUM_FIELDS.map((f) => (
          <div key={f.key}>
            <label className={labelCls}>
              {f.label}
              {f.suffix ? ` (${f.suffix})` : f.key === "officeDays" ? "" : " ($)"}
            </label>
            <input
              type="number"
              min={0}
              max={f.key === "officeDays" ? 5 : undefined}
              step={f.step}
              value={offer[f.key] as number}
              onChange={(e) => {
                const n = Math.max(0, parseFloat(e.target.value) || 0)
                set(f.key, (f.key === "officeDays" ? Math.min(5, n) : n) as never)
              }}
              className={inputCls}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function JobOfferCalculator() {
  const [a, setA] = useState<Offer>(DEFAULT_A)
  const [b, setB] = useState<Offer>(DEFAULT_B)
  const [filing, setFiling] = useState<FilingStatus>("single")
  const [k401, setK401] = useState(0)
  const [hydrated, setHydrated] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const q = new URLSearchParams(window.location.search)
    setA(decode(DEFAULT_A, "a", q))
    setB(decode(DEFAULT_B, "b", q))
    const fs = q.get("fs")
    if (fs === "married" || fs === "head") setFiling(fs)
    const k = parseFloat(q.get("k") ?? "")
    if (Number.isFinite(k) && k >= 0 && k <= 100) setK401(k)
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    const qs = encode(a, b, filing, k401)
    window.history.replaceState(null, "", qs ? `${window.location.pathname}?${qs}` : window.location.pathname)
  }, [a, b, filing, k401, hydrated])

  const ra = useMemo(() => evaluateOffer(a, filing, k401 / 100), [a, filing, k401])
  const rb = useMemo(() => evaluateOffer(b, filing, k401 / 100), [b, filing, k401])

  const diffRecurring = rb.realValueRecurring - ra.realValueRecurring
  const diffNpv = rb.npv5 - ra.npv5
  const winner = diffNpv === 0 ? null : diffNpv > 0 ? b : a

  const rows: Array<{ label: string; a: number; b: number; hint?: string; negative?: boolean }> = [
    { label: "Year-1 gross pay", a: ra.grossYear1, b: rb.grossYear1, hint: "Base + bonus + equity + signing" },
    { label: "Year-1 take-home", a: ra.takeHomeYear1, b: rb.takeHomeYear1, hint: "After federal, FICA and state tax" },
    { label: "Employer 401(k) match", a: ra.employerMatch, b: rb.employerMatch },
    { label: "Commute cost / yr", a: ra.commuteCost, b: rb.commuteCost, negative: true },
    { label: "Cost-of-living index", a: ra.colIndex, b: rb.colIndex, hint: "100 = US average" },
    { label: "Real value, year 1", a: ra.realValueYear1, b: rb.realValueYear1, hint: "In US-average dollars" },
    { label: "Real value, recurring", a: ra.realValueRecurring, b: rb.realValueRecurring, hint: "Excludes signing bonus" },
    { label: `${PROJECTION_YEARS}-year value (NPV)`, a: ra.npv5, b: rb.npv5, hint: "Discounted at 6%/yr" },
  ]

  function share() {
    navigator.clipboard?.writeText(window.location.href).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-5">
        <OfferForm offer={a} onChange={setA} accent="border-indigo-500/30" />
        <OfferForm offer={b} onChange={setB} accent="border-emerald-500/30" />
      </div>

      <div className="flex flex-wrap gap-4 items-end rounded-2xl bg-white/5 border border-white/10 p-4">
        <div>
          <label className={labelCls} htmlFor="filing">Filing status</label>
          <select id="filing" value={filing} onChange={(e) => setFiling(e.target.value as FilingStatus)} className={inputCls}>
            <option value="single">Single</option>
            <option value="married">Married, jointly</option>
            <option value="head">Head of household</option>
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="k401">Your 401(k) contribution (%)</label>
          <input id="k401" type="number" min={0} max={100} value={k401}
            onChange={(e) => setK401(Math.min(100, Math.max(0, parseFloat(e.target.value) || 0)))} className={inputCls} />
        </div>
      </div>

      <div className="rounded-2xl bg-linear-to-br from-violet-950/60 to-indigo-950/50 border border-violet-500/25 p-6 space-y-2" aria-live="polite">
        {winner ? (
          <>
            <p className="text-xs text-violet-300 uppercase tracking-widest">Verdict</p>
            <p className="text-2xl font-semibold">
              {winner.name} is worth about {usd(Math.abs(diffNpv))} more over {PROJECTION_YEARS} years
            </p>
            <p className="text-sm text-slate-300">
              That's {usd(Math.abs(diffRecurring))} a year in recurring, after-tax, cost-of-living-adjusted terms
              {Math.sign(diffRecurring) !== Math.sign(diffNpv) && diffRecurring !== 0
                ? ". The signing bonus flips the result in year 1 only, so look past it."
                : "."}
              {" "}
              {ra.grossYear1 !== rb.grossYear1 && (ra.grossYear1 > rb.grossYear1) === (diffNpv > 0) && (
                <span className="text-amber-300">The offer with the lower headline pay comes out ahead.</span>
              )}
            </p>
          </>
        ) : (
          <p className="text-xl font-semibold">The two offers are worth the same in real terms.</p>
        )}
      </div>

      <div className="rounded-2xl bg-white/5 border border-white/10 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 text-slate-400">
              <th className="text-left font-medium p-3"> </th>
              <th className="text-right font-medium p-3 text-indigo-300">{a.name}</th>
              <th className="text-right font-medium p-3 text-emerald-300">{b.name}</th>
              <th className="text-right font-medium p-3">Difference</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {rows.map((r) => {
              const isIndex = r.label.startsWith("Cost-of-living")
              const fmt = (n: number) => (isIndex ? String(Math.round(n)) : r.negative && n > 0 ? `−${usd(n)}` : usd(n))
              const d = r.b - r.a
              return (
                <tr key={r.label}>
                  <td className="p-3">
                    <span className="text-white">{r.label}</span>
                    {r.hint && <span className="block text-[11px] text-slate-500">{r.hint}</span>}
                  </td>
                  <td className="p-3 text-right text-slate-300">{fmt(r.a)}</td>
                  <td className="p-3 text-right text-slate-300">{fmt(r.b)}</td>
                  <td className="p-3 text-right text-slate-400">
                    {isIndex ? (d > 0 ? `+${Math.round(d)}` : Math.round(d)) : d === 0 ? "—" : `${d > 0 ? "+" : "−"}${usd(Math.abs(d))}`}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button onClick={share} className="bg-linear-to-r from-indigo-600 to-violet-600 hover:opacity-90 px-5 py-2.5 rounded-xl text-sm font-medium">
          {copied ? "Link copied ✓" : "Copy link to this comparison"}
        </button>
        <Link href="/salary-negotiation-simulator" className="text-sm text-indigo-400 hover:underline">
          Negotiate the better offer up →
        </Link>
      </div>
    </div>
  )
}
