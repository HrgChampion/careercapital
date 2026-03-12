"use client"

import Link from "next/link"
import { useState, useMemo } from "react"
import {
  calculateGapRecovery,
  GAP_PROJECTION_YEARS,
  type GapInput,
  type ReentryPath,
} from "@/lib/gapEngine"
import { DISCOUNT_RATE } from "@/lib/mbaEngine"
import { COUNTRIES, formatCurrency, defaultCountry, type CountryCode } from "@/lib/locale"
import { CountrySelect } from "@/components/CountrySelect"

// ─── Helpers ────────────────────────────────────────────────────────────────────

function fmtPct(n: number) {
  return (n * 100).toFixed(1) + "%"
}

const gradeColor: Record<string, string> = {
  A: "text-green-400", B: "text-blue-400", C: "text-yellow-400",
  D: "text-orange-400", F: "text-red-500",
}
const gradeBg: Record<string, string> = {
  A: "border-green-400/30 bg-green-400/5",
  B: "border-blue-400/30 bg-blue-400/5",
  C: "border-yellow-400/30 bg-yellow-400/5",
  D: "border-orange-400/30 bg-orange-400/5",
  F: "border-red-500/30 bg-red-500/5",
}
const pathTypeColors: Record<string, string> = {
  same_role: "text-blue-400",
  lateral_move: "text-cyan-400",
  returnship: "text-purple-400",
  reskilling: "text-orange-400",
  freelance_first: "text-yellow-400",
}

const STEPS = ["Gap Details", "Re-entry Paths", "Results"] as const

// ─── Default paths with user-editable fields ────────────────────────────────────

function buildDefaultPaths(preBreakSalary: number): ReentryPath[] {
  return [
    {
      id: "direct_same_role",
      label: "Direct Re-entry — Same Role",
      type: "same_role",
      programCost: 0,
      timeToReentryMonths: 3,
      incomeduringTransitionMonthly: 0,
      reentrySalary: Math.round(preBreakSalary * 0.85),
      growthRate: 0.04,
      successProbability: 0.75,
    },
    {
      id: "returnship",
      label: "Corporate Returnship Program",
      type: "returnship",
      programCost: 0,
      timeToReentryMonths: 4,
      incomeduringTransitionMonthly: Math.round(preBreakSalary / 12 * 0.65),
      reentrySalary: Math.round(preBreakSalary * 0.92),
      growthRate: 0.05,
      successProbability: 0.80,
    },
    {
      id: "reskilling",
      label: "Reskilling Program + Career Change",
      type: "reskilling",
      programCost: 10000,
      timeToReentryMonths: 6,
      incomeduringTransitionMonthly: 0,
      reentrySalary: Math.round(preBreakSalary * 1.12),
      growthRate: 0.06,
      successProbability: 0.65,
    },
  ]
}

type GapBasicInputs = {
  preBreakSalary: number
  breakDurationYears: number
  peerGrowthRate: number
}

export default function CareerGapCalculator() {
  const [country, setCountry] = useState<CountryCode>(() => defaultCountry())
  const [step, setStep] = useState(0)
  const [basic, setBasic] = useState<GapBasicInputs>({
    preBreakSalary: 85000,
    breakDurationYears: 2,
    peerGrowthRate: 0.04,
  })
  const [paths, setPaths] = useState<ReentryPath[]>(() => buildDefaultPaths(85000))

  const handleCountryChange = (c: CountryCode) => {
    setCountry(c)
    const sal = COUNTRIES[c].defaultSalary
    setBasic(prev => ({ ...prev, preBreakSalary: sal }))
    setPaths(buildDefaultPaths(sal))
  }

  const setBasicField = <K extends keyof GapBasicInputs>(k: K, v: GapBasicInputs[K]) => {
    setBasic(prev => {
      const updated = { ...prev, [k]: v }
      if (k === "preBreakSalary") {
        setPaths(buildDefaultPaths(v as number))
      }
      return updated
    })
  }

  const setPath = (idx: number, field: keyof ReentryPath, val: string | number) => {
    setPaths(prev => prev.map((p, i) => i === idx ? { ...p, [field]: val } : p))
  }

  const gapInput: GapInput = {
    ...basic,
    discountRate: DISCOUNT_RATE,
    paths,
  }

  const result = useMemo(() => {
    try { return calculateGapRecovery(gapInput) }
    catch { return null }
  }, [basic, paths])

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-12 max-w-5xl mx-auto">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative flex items-start justify-between gap-4 mb-4">
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">CareerReturns · Career Gap Recovery</p>
          <CountrySelect value={country} onChange={handleCountryChange} />
        </div>
        <h1 className="relative text-3xl md:text-4xl font-semibold tracking-tight mb-3 leading-tight bg-linear-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
          Your Career Break Has a Price Tag. Here&apos;s How to Recover It.
        </h1>
        <p className="text-slate-400 max-w-2xl text-base mb-6 leading-relaxed">
          Career breaks destroy earnings in two ways: direct foregone income during the gap,
          and a 6–14% salary penalty at re-entry. This is the only tool that models both —
          and tells you which path (returnship, direct, or reskill) recovers them fastest.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {[
            { stat: "6–14%", label: "Salary penalty at re-entry" },
            { stat: "4–7 yrs", label: "Typical earnings recovery time" },
            { stat: "3 paths", label: "Compared side-by-side" },
            { stat: "DCF math", label: "Probability-weighted analysis" },
          ].map(({ stat, label }) => (
            <div key={label} className="border border-white/10 rounded-2xl p-3 text-center bg-white/5">
              <p className="text-white font-bold text-lg">{stat}</p>
              <p className="text-white/40 text-xs mt-0.5">{label}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 text-xs text-white/30">
          <span>Earnings gap quantified</span>
          <span>·</span>
          <span>3 paths compared</span>
          <span>·</span>
          <span>{GAP_PROJECTION_YEARS}-year recovery horizon</span>
          <span>·</span>
          <span>Free — no signup</span>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Step nav */}
        <div className="flex gap-1 mb-8">
          {STEPS.map((s, i) => (
            <button
              key={s}
              onClick={() => setStep(i)}
              className={`flex-1 py-2 text-xs uppercase tracking-widest border-b-2 transition-all ${
                step === i ? "border-white text-white" : "border-white/10 text-white/40 hover:text-white/60"
              }`}
            >
              {i + 1}. {s}
            </button>
          ))}
        </div>

        {/* Step 0: Gap Details */}
        {step === 0 && (
          <div className="max-w-lg">
            <div className="space-y-6">
              <Field label="Salary Before Career Break ($)" hint="Your annual compensation at the time you left work">
                <input
                  type="number" value={basic.preBreakSalary} step={5000} min={0}
                  onChange={e => setBasicField("preBreakSalary", parseFloat(e.target.value) || 0)}
                  className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:outline-none focus:border-white/30"
                />
              </Field>

              <Field label="Career Break Duration" hint="How long have you been (or do you plan to be) out of the workforce?">
                <div className="flex items-center gap-4">
                  <input
                    type="range" min={0.5} max={7} step={0.5}
                    value={basic.breakDurationYears}
                    onChange={e => setBasicField("breakDurationYears", parseFloat(e.target.value))}
                    className="flex-1 accent-white"
                  />
                  <span className="text-sm w-16 text-right font-medium">
                    {basic.breakDurationYears} yr{basic.breakDurationYears !== 1 ? "s" : ""}
                  </span>
                </div>
              </Field>

              <Field label="Peer Salary Growth Rate" hint="Annual raise % someone in your role would have received if they never stopped working">
                <div className="flex items-center gap-4">
                  <input
                    type="range" min={0.01} max={0.10} step={0.005}
                    value={basic.peerGrowthRate}
                    onChange={e => setBasicField("peerGrowthRate", parseFloat(e.target.value))}
                    className="flex-1 accent-white"
                  />
                  <span className="text-sm w-12 text-right">{fmtPct(basic.peerGrowthRate)}</span>
                </div>
              </Field>

              {/* Earnings gap preview */}
              {result && (
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 mt-2">
                  <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-3">Your Earnings Gap</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs text-white/40 mb-1">Direct Break Cost</p>
                      <p className="text-xl font-bold text-red-400">{formatCurrency(result.totalBreakCost, country)}</p>
                      <p className="text-xs text-white/30">Foregone earnings during gap</p>
                    </div>
                    <div>
                      <p className="text-xs text-white/40 mb-1">NPV of Gap Cost</p>
                      <p className="text-xl font-bold text-red-400">{formatCurrency(-result.gapCostNPV, country)}</p>
                      <p className="text-xs text-white/30">Discounted at {DISCOUNT_RATE * 100}%</p>
                    </div>
                  </div>
                </div>
              )}

              <button onClick={() => setStep(1)} className="px-6 py-2 bg-white text-black text-sm font-bold rounded hover:bg-white/90 transition-all">
                Configure Re-entry Paths →
              </button>
            </div>
          </div>
        )}

        {/* Step 1: Re-entry Paths */}
        {step === 1 && (
          <div>
            <p className="text-sm text-white/50 mb-6">
              Customize the 3 re-entry paths below. The calculator will model each path&apos;s recovery trajectory and find which one maximizes your lifetime earnings.
            </p>
            <div className="grid md:grid-cols-3 gap-5">
              {paths.map((path, idx) => (
                <div key={path.id} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="mb-4">
                    <input
                      type="text"
                      value={path.label}
                      onChange={e => setPath(idx, "label", e.target.value)}
                      className="w-full bg-transparent text-sm font-medium border-b border-white/20 pb-1 focus:outline-none focus:border-white/50 mb-1"
                    />
                    <span className={`text-xs ${pathTypeColors[path.type]}`}>{path.type.replace("_", " ")}</span>
                  </div>

                  <div className="space-y-4 text-xs">
                    <PathField label="Program Cost ($)">
                      <input type="number" value={path.programCost} min={0} step={500}
                        onChange={e => setPath(idx, "programCost", parseFloat(e.target.value) || 0)}
                        className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-sm focus:outline-none focus:border-white/30" />
                    </PathField>

                    <PathField label="Time to Re-entry (months)">
                      <input type="number" value={path.timeToReentryMonths} min={1} max={24} step={1}
                        onChange={e => setPath(idx, "timeToReentryMonths", parseFloat(e.target.value) || 0)}
                        className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-sm focus:outline-none focus:border-white/30" />
                    </PathField>

                    <PathField label="Monthly Income During Transition ($)">
                      <input type="number" value={path.incomeduringTransitionMonthly} min={0} step={500}
                        onChange={e => setPath(idx, "incomeduringTransitionMonthly", parseFloat(e.target.value) || 0)}
                        className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-sm focus:outline-none focus:border-white/30" />
                    </PathField>

                    <PathField label="Re-entry Annual Salary ($)">
                      <input type="number" value={path.reentrySalary} min={0} step={5000}
                        onChange={e => setPath(idx, "reentrySalary", parseFloat(e.target.value) || 0)}
                        className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-sm focus:outline-none focus:border-white/30" />
                    </PathField>

                    <PathField label={`Growth Rate: ${fmtPct(path.growthRate)}`}>
                      <input type="range" min={0.01} max={0.12} step={0.005}
                        value={path.growthRate}
                        onChange={e => setPath(idx, "growthRate", parseFloat(e.target.value))}
                        className="w-full accent-white" />
                    </PathField>

                    <PathField label={`Success Probability: ${Math.round(path.successProbability * 100)}%`}>
                      <input type="range" min={0.3} max={1.0} step={0.05}
                        value={path.successProbability}
                        onChange={e => setPath(idx, "successProbability", parseFloat(e.target.value))}
                        className="w-full accent-white" />
                    </PathField>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-6">
              <button onClick={() => setStep(0)} className="px-6 py-2 border border-white/20 text-sm rounded hover:border-white/40 transition-all">← Back</button>
              <button onClick={() => setStep(2)} className="px-6 py-2 bg-white text-black text-sm font-bold rounded hover:bg-white/90 transition-all">View Results →</button>
            </div>
          </div>
        )}

        {/* Step 2: Results */}
        {step === 2 && result && (
          <div>
            {/* Key insight banner */}
            <div className="rounded-2xl border border-white/20 bg-white/5 p-5 mb-8">
              <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Bottom Line</p>
              <p className="text-sm text-white/80 leading-relaxed">{result.keyInsight}</p>
            </div>

            {/* Path cards */}
            <div className="grid md:grid-cols-3 gap-5 mb-8">
              {result.paths.map(p => {
                const isBest = p.pathId === result.bestPathId
                return (
                  <div key={p.pathId} className={`rounded-lg border p-5 ${isBest ? "border-white/40 bg-white/5" : "border-white/10"}`}>
                    {isBest && (
                      <div className="text-xs text-green-400 uppercase tracking-widest mb-2">★ Recommended</div>
                    )}
                    <h3 className="text-sm font-bold mb-1">{p.label}</h3>
                    <span className={`text-xs ${pathTypeColors[p.type]}`}>{p.type.replace("_", " ")}</span>

                    <div className={`mt-3 text-center py-2 rounded border ${gradeBg[p.score.grade]}`}>
                      <span className={`text-3xl font-bold ${gradeColor[p.score.grade]}`}>{p.score.grade}</span>
                    </div>

                    <div className="mt-4 space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-white/50">10-Year NPV</span>
                        <span className={p.npv !== null && p.npv > 0 ? "text-green-400" : "text-red-400"}>
                          {p.npv !== null ? formatCurrency(p.npv, country) : "—"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/50">IRR</span>
                        <span>{p.irr !== null ? fmtPct(p.irr) : "—"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/50">Break-even</span>
                        <span>{p.paybackPeriod === Infinity ? ">10 yrs" : p.paybackPeriod.toFixed(1) + " yrs"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/50">Catch Peer By</span>
                        <span>{p.breakEvenVsPeerYear === Infinity ? "Never in 10yr" : "Year " + p.breakEvenVsPeerYear}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/50">10-yr Earnings</span>
                        <span>{formatCurrency(p.cumulativeEarnings, country)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/50">Gap vs Peer</span>
                        <span className="text-red-400">{formatCurrency(p.cumulativeGapVsPeer, country)}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Earnings recovery chart */}
            <div className="rounded-2xl border border-white/10 p-5 bg-white/5 mb-6">
              <p className="text-xs text-white/40 uppercase tracking-widest mb-4">Year-by-Year Earnings Recovery (vs Peer)</p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="text-white/40 border-b border-white/10">
                      <th className="text-left pb-2">Year</th>
                      <th className="text-right pb-2">Peer Baseline</th>
                      {result.paths.map(p => (
                        <th key={p.pathId} className={`text-right pb-2 ${p.pathId === result.bestPathId ? "text-green-400" : ""}`}>
                          {p.label.split(" ")[0]}...
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: GAP_PROJECTION_YEARS }, (_, i) => {
                      const yr = i + 1
                      const peer = basic.preBreakSalary * Math.pow(1 + basic.peerGrowthRate, basic.breakDurationYears + yr)
                      return (
                        <tr key={yr} className="border-b border-white/5">
                          <td className="py-1 text-white/40">Yr {yr}</td>
                          <td className="text-right text-white/50">{formatCurrency(peer, country)}</td>
                          {result.paths.map(p => {
                            const val = p.absoluteFlows[Math.ceil(basic.breakDurationYears) + i] ?? 0
                            const ahead = val >= peer
                            return (
                              <td key={p.pathId} className={`text-right ${ahead ? "text-green-400" : "text-white/60"}`}>
                                {formatCurrency(val, country)}
                              </td>
                            )
                          })}
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex gap-3">
              <button onClick={() => setStep(1)} className="px-6 py-2 border border-white/20 text-sm rounded hover:border-white/40 transition-all">← Adjust Paths</button>
              <button onClick={() => setStep(0)} className="px-6 py-2 border border-white/20 text-sm rounded hover:border-white/40 transition-all">Start Over</button>
            </div>
          </div>
        )}
      </div>

      {/* Methodology */}
      <section className="border-t border-white/10 px-6 py-8 max-w-5xl mx-auto">
        <p className="text-xs text-white/30 uppercase tracking-widest mb-2">Methodology</p>
        <p className="text-xs text-white/40 max-w-2xl">
          Cash flows are probability-weighted by path success rate. The peer baseline compounds pre-break salary
          at your specified growth rate as if no break occurred. NPV discounted at {DISCOUNT_RATE * 100}%.
          Break-even vs peer is the first year cumulative path earnings equal cumulative peer earnings.
        </p>
      </section>

      <footer className="border-t border-white/10 pt-8 text-center text-slate-500 text-xs space-y-2 mt-12 mx-4 pb-8">
        <p>
          <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
          {" · "}
          <Link href="/mba-roi-calculator" className="hover:text-slate-300 transition-colors">MBA ROI Calculator</Link>
          {" · "}
          <Link href="/mba-roi" className="hover:text-slate-300 transition-colors">MBA ROI Guide</Link>
          {" · "}
          <Link href="/mba-worth-it" className="hover:text-slate-300 transition-colors">Is MBA Worth It?</Link>
          {" · "}
          <Link href="/about" className="hover:text-slate-300 transition-colors">About</Link>
          {" · "}
          <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy</Link>
        </p>
        <p>Rational decisions. Compounding outcomes.</p>
      </footer>
    </main>
  )
}

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs text-white/60 uppercase tracking-widest mb-1">{label}</label>
      {hint && <p className="text-xs text-white/30 mb-2">{hint}</p>}
      {children}
    </div>
  )
}

function PathField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-white/40 mb-1">{label}</label>
      {children}
    </div>
  )
}
