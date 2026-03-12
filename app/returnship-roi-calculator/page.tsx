"use client"

import Link from "next/link"
import { useState, useMemo } from "react"
import {
  calculateReturnship,
  RETURNSHIP_PROGRAMS,
  RETURNSHIP_PROJECTION_YEARS,
  type ReturnshipInput,
  type ReturnshipProgram,
} from "@/lib/returnshipEngine"
import { DISCOUNT_RATE } from "@/lib/mbaEngine"
import { COUNTRIES, formatCurrency, defaultCountry, type CountryCode } from "@/lib/locale"
import { CountrySelect } from "@/components/CountrySelect"

// ─── Helpers ────────────────────────────────────────────────────────────────────

function fmtPct(n: number) { return (n * 100).toFixed(0) + "%" }
function fmtPct1(n: number) { return (n * 100).toFixed(1) + "%" }

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

const industryColors: Record<string, string> = {
  Technology: "text-blue-400",
  "Investment Banking": "text-yellow-400",
  Consulting: "text-purple-400",
  Finance: "text-cyan-400",
  Any: "text-white/40",
}

export default function ReturnshipCalculator() {
  const [country, setCountry] = useState<CountryCode>(() => defaultCountry())
  const handleCountryChange = (c: CountryCode) => {
    setCountry(c)
    const sal = COUNTRIES[c].defaultSalary
    setInputs(prev => ({
      ...prev,
      preBreakSalary: sal,
      postConversionSalary: Math.round(sal * 1.6),
      directReentrySalary: Math.round(sal * 1.1),
      returnshipWeeklyPay: Math.round(sal / 52 * 0.65),
    }))
  }
  const [selectedProgram, setSelectedProgram] = useState<string>("amazon_returnship")
  const [inputs, setInputs] = useState<ReturnshipInput>({
    currentGapYears: 2,
    preBreakSalary: 90000,
    preBreakGrowthRate: 0.04,
    returnshipWeeklyPay: 2500,
    returnshipDurationWeeks: 16,
    conversionProbability: 0.90,
    postConversionSalary: 145000,
    postConversionGrowthRate: 0.05,
    directReentrySuccessRate: 0.70,
    directReentrySearchMonths: 4,
    directReentrySalary: 100000,
    directReentryGrowthRate: 0.04,
    discountRate: DISCOUNT_RATE,
  })

  const applyProgram = (prog: ReturnshipProgram) => {
    setSelectedProgram(prog.id)
    setInputs(prev => ({
      ...prev,
      returnshipWeeklyPay: prog.weeklyPayEstimate,
      returnshipDurationWeeks: prog.durationWeeks,
      conversionProbability: prog.historicalConversionRate,
      postConversionSalary: prog.targetSalaryPostConversion > 0 ? prog.targetSalaryPostConversion : prev.postConversionSalary,
    }))
  }

  const set = (k: keyof ReturnshipInput, v: number) =>
    setInputs(prev => ({ ...prev, [k]: v }))

  const result = useMemo(() => {
    try { return calculateReturnship(inputs) }
    catch { return null }
  }, [inputs])

  const paths = result
    ? [
        { key: "returnship" as const, data: result.returnshipPath, color: "text-green-400", border: "border-green-400/30" },
        { key: "direct" as const, data: result.directReentryPath, color: "text-blue-400", border: "border-blue-400/30" },
        { key: "wait" as const, data: result.waitAnotherYearPath, color: "text-red-400", border: "border-red-400/20" },
      ]
    : []

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-12 max-w-5xl mx-auto">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative flex items-start justify-between gap-4 mb-4">
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">CareerReturns · Free Calculator · 2026</p>
          <CountrySelect value={country} onChange={handleCountryChange} />
        </div>
        <h1 className="relative text-3xl md:text-4xl font-semibold tracking-tight mb-3 leading-tight bg-linear-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
          Amazon Returnship Converts at 90%.<br className="hidden md:block" /> But Is It Worth 16 Weeks of Your Time?
        </h1>
        <p className="text-white/60 max-w-2xl text-base mb-6">
          Most people take (or skip) returnships based on gut feel. This calculator finds the exact
          conversion rate where the returnship beats applying directly — using probability-weighted
          DCF math. Pre-loaded with real data from 9 major programs.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {[
            { stat: "9", label: "Programs pre-loaded" },
            { stat: "90%", label: "Amazon conversion rate" },
            { stat: "~55%", label: "Break-even conversion rate" },
            { stat: "$280k+", label: "Amazon path NPV (10-yr)" },
          ].map(({ stat, label }) => (
            <div key={label} className="border border-white/10 rounded-2xl p-3 text-center bg-white/5">
              <p className="text-white font-bold text-lg">{stat}</p>
              <p className="text-white/40 text-xs mt-0.5">{label}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 text-xs text-white/30">
          <span>Probability-weighted cash flows</span>
          <span>·</span>
          <span>Conversion break-even finder</span>
          <span>·</span>
          <span>3-path comparison</span>
          <span>·</span>
          <span>Free — no signup</span>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Program picker */}
        <div className="mb-8">
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-3">Select a Returnship Program</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {RETURNSHIP_PROGRAMS.map(prog => (
              <button
                key={prog.id}
                onClick={() => applyProgram(prog)}
                className={`text-left px-4 py-3 rounded border transition-all ${
                  selectedProgram === prog.id
                    ? "border-white/40 bg-white/5"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{prog.company} — {prog.programName}</span>
                  <span className={`text-xs ml-2 ${industryColors[prog.industry] ?? "text-white/40"}`}>{prog.industry}</span>
                </div>
                <div className="flex gap-4 mt-1 text-xs text-white/40">
                  <span>{prog.durationWeeks} weeks</span>
                  <span>{formatCurrency(prog.weeklyPayEstimate * 52, country)}/yr stipend</span>
                  <span>{fmtPct(prog.historicalConversionRate)} conversion</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_380px] gap-10">
          {/* Left: inputs */}
          <div className="space-y-5">
            <p className="text-xs text-white/40 uppercase tracking-widest">Your Situation</p>

            <div className="grid grid-cols-2 gap-4">
              <Field label="Pre-Break Salary ($)">
                <NumInput value={inputs.preBreakSalary} onChange={v => set("preBreakSalary", v)} step={5000} />
              </Field>
              <Field label="Gap Duration (yrs)">
                <NumInput value={inputs.currentGapYears} onChange={v => set("currentGapYears", v)} min={0} max={10} step={0.5} />
              </Field>
            </div>

            <p className="text-xs text-white/40 uppercase tracking-widest pt-2">Returnship Terms</p>

            <div className="grid grid-cols-2 gap-4">
              <Field label="Weekly Pay ($)">
                <NumInput value={inputs.returnshipWeeklyPay} onChange={v => set("returnshipWeeklyPay", v)} step={250} />
              </Field>
              <Field label="Duration (weeks)">
                <NumInput value={inputs.returnshipDurationWeeks} onChange={v => set("returnshipDurationWeeks", v)} min={4} max={26} step={1} />
              </Field>
            </div>

            <Field label={`Conversion Probability: ${fmtPct(inputs.conversionProbability)}`}>
              <input type="range" min={0.3} max={1.0} step={0.05}
                value={inputs.conversionProbability}
                onChange={e => set("conversionProbability", parseFloat(e.target.value))}
                className="w-full accent-white" />
            </Field>

            <Field label="Post-Conversion Annual Salary ($)">
              <NumInput value={inputs.postConversionSalary} onChange={v => set("postConversionSalary", v)} step={5000} />
            </Field>

            <p className="text-xs text-white/40 uppercase tracking-widest pt-2">Direct Re-entry Alternative</p>

            <div className="grid grid-cols-2 gap-4">
              <Field label="Expected Salary ($)">
                <NumInput value={inputs.directReentrySalary} onChange={v => set("directReentrySalary", v)} step={5000} />
              </Field>
              <Field label="Search Duration (months)">
                <NumInput value={inputs.directReentrySearchMonths} onChange={v => set("directReentrySearchMonths", v)} min={1} max={12} step={1} />
              </Field>
            </div>

            <Field label={`Direct Search Success Rate: ${fmtPct(inputs.directReentrySuccessRate)}`}>
              <input type="range" min={0.3} max={1.0} step={0.05}
                value={inputs.directReentrySuccessRate}
                onChange={e => set("directReentrySuccessRate", parseFloat(e.target.value))}
                className="w-full accent-white" />
            </Field>
          </div>

          {/* Right: results */}
          <div className="space-y-4">
            {result && (
              <>
                {/* Recommendation */}
                <div className={`rounded-lg border p-5 ${result.recommendedPath === "returnship" ? "border-green-400/30 bg-green-400/5" : result.recommendedPath === "direct" ? "border-blue-400/30 bg-blue-400/5" : "border-red-400/20 bg-red-400/5"}`}>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Recommendation</p>
                  <p className="text-sm font-medium mb-2">
                    {result.recommendedPath === "returnship" ? "✓ Take the Returnship" : result.recommendedPath === "direct" ? "→ Apply Directly" : "✗ Do Not Wait"}
                  </p>
                  <p className="text-xs text-white/60 leading-relaxed">{result.recommendation}</p>
                </div>

                {/* Conversion break-even */}
                <div className="rounded-lg border border-white/10 p-4 bg-white/[0.02]">
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Conversion Break-Even</p>
                  <p className="text-2xl font-bold">
                    {result.conversionBreakEvenPct > 0 && result.conversionBreakEvenPct < 1
                      ? fmtPct(result.conversionBreakEvenPct)
                      : result.conversionBreakEvenPct <= 0 ? "Always wins" : "Never wins"}
                  </p>
                  <p className="text-xs text-white/40 mt-1">Minimum conversion rate for returnship to beat direct re-entry</p>
                </div>

                {/* Path comparison */}
                {paths.map(({ key, data, color, border }) => (
                  <div key={key} className={`rounded-lg border p-4 ${key === result.recommendedPath ? border : "border-white/10"} bg-white/[0.02]`}>
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <span className={`text-sm font-medium ${key === result.recommendedPath ? color : "text-white/80"}`}>{data.label}</span>
                        <p className="text-xs text-white/30 mt-0.5">{data.description}</p>
                      </div>
                      <span className={`text-2xl font-bold ${gradeColor[data.score.grade]}`}>{data.score.grade}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <p className="text-white/40">NPV</p>
                        <p className={`font-medium ${data.npv !== null && data.npv > 0 ? "text-green-400" : "text-red-400"}`}>
                          {data.npv !== null ? formatCurrency(data.npv, country) : "—"}
                        </p>
                      </div>
                      <div>
                        <p className="text-white/40">IRR</p>
                        <p className="font-medium">{data.irr !== null ? fmtPct1(data.irr) : "—"}</p>
                      </div>
                      <div>
                        <p className="text-white/40">Yr 1 Expected</p>
                        <p className="font-medium">{formatCurrency(data.expectedYear1Salary, country)}</p>
                      </div>
                      <div>
                        <p className="text-white/40">Yr 5 Expected</p>
                        <p className="font-medium">{formatCurrency(data.expectedYear5Salary, country)}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Conversion sweep mini chart */}
                <div className="rounded-lg border border-white/10 p-4 bg-white/[0.02]">
                  <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-3">NPV by Conversion Rate</p>
                  <div className="space-y-1">
                    {result.conversionSweep.filter((_, i) => i % 2 === 0).map(row => {
                      const maxNPV = Math.max(...result.conversionSweep.map(r => Math.max(r.returnshipNPV, r.directNPV)))
                      const minNPV = Math.min(0, ...result.conversionSweep.map(r => Math.min(r.returnshipNPV, r.directNPV)))
                      const range = maxNPV - minNPV
                      const rPct = range > 0 ? Math.max(0, (row.returnshipNPV - minNPV) / range * 100) : 50
                      const dPct = range > 0 ? Math.max(0, (row.directNPV - minNPV) / range * 100) : 50
                      const rWins = row.returnshipNPV >= row.directNPV
                      return (
                        <div key={row.conversionPct} className="flex items-center gap-2 text-xs">
                          <span className="text-white/30 w-8 text-right">{fmtPct(row.conversionPct)}</span>
                          <div className="flex-1 relative h-3 bg-white/5 rounded overflow-hidden">
                            <div className="absolute left-0 top-0 h-full bg-green-400/30 rounded" style={{ width: `${rPct}%` }} />
                          </div>
                          <span className={`w-24 text-right ${rWins ? "text-green-400" : "text-blue-400"}`}>
                            {formatCurrency(Math.max(row.returnshipNPV, row.directNPV), country)}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                  <div className="flex gap-4 mt-2 text-xs text-white/30">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-400/50" />Returnship</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-400/50" />Direct</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <section className="border-t border-white/10 px-6 py-8 max-w-5xl mx-auto">
        <p className="text-xs text-white/30 uppercase tracking-widest mb-2">Methodology</p>
        <p className="text-xs text-white/40 max-w-2xl">
          Cash flows are probability-weighted by conversion/success rate. On program failure, earnings revert to
          a 70% of pre-break salary fallback to model realistic outcomes. NPV discounted at {DISCOUNT_RATE * 100}%.
          Conversion break-even is solved via linear interpolation across the 40%–100% conversion sweep.
          Program data is sourced from public company disclosures and career resource sites; verify directly.
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

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs text-white/50 uppercase tracking-widest mb-1">{label}</label>
      {children}
    </div>
  )
}

function NumInput({ value, onChange, min, max, step }: {
  value: number; onChange: (v: number) => void; min?: number; max?: number; step?: number
}) {
  return (
    <input type="number" value={value} min={min} max={max} step={step}
      onChange={e => onChange(parseFloat(e.target.value) || 0)}
      className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:outline-none focus:border-white/30 transition-all" />
  )
}
