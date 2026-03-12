"use client"

import Link from "next/link"
import { useState, useMemo } from "react"
import {
  calculateComparison,
  COMPARISON_PRESETS,
  COMPARISON_PROJECTION_YEARS,
  type ProgramOption,
  type ComparisonInput,
  type ProgramType,
} from "@/lib/comparisonEngine"
import { DISCOUNT_RATE } from "@/lib/mbaEngine"
import { COUNTRIES, formatCurrency, defaultCountry, type CountryCode } from "@/lib/locale"
import { CountrySelect } from "@/components/CountrySelect"

// ─── Helpers ────────────────────────────────────────────────────────────────────

function fmtPct(n: number) { return (n * 100).toFixed(1) + "%" }

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
const typeColors: Record<ProgramType, string> = {
  mba: "text-purple-400",
  masters: "text-blue-400",
  bootcamp: "text-orange-400",
  certificate: "text-cyan-400",
  self_study: "text-yellow-400",
  none: "text-white/40",
}
const typeLabels: Record<ProgramType, string> = {
  mba: "MBA", masters: "Masters", bootcamp: "Bootcamp",
  certificate: "Certificate", self_study: "Self Study", none: "None",
}

const PROGRAM_TYPES: ProgramType[] = ["mba", "masters", "bootcamp", "certificate", "self_study"]

export default function EducationComparisonCalculator() {
  const [country, setCountry] = useState<CountryCode>(() => defaultCountry())
  const handleCountryChange = (c: CountryCode) => {
    setCountry(c)
    setCurrentSalary(COUNTRIES[c].defaultSalary)
  }
  const [selectedPreset, setSelectedPreset] = useState("mba_vs_bootcamp")
  const [currentSalary, setCurrentSalary] = useState(85000)
  const [currentGrowthRate, setCurrentGrowthRate] = useState(0.03)
  const [programs, setPrograms] = useState<ProgramOption[]>(COMPARISON_PRESETS[0].programs)

  const applyPreset = (presetId: string) => {
    const preset = COMPARISON_PRESETS.find(p => p.id === presetId)
    if (!preset) return
    setSelectedPreset(presetId)
    setCurrentSalary(preset.currentSalary)
    setCurrentGrowthRate(preset.currentGrowthRate)
    setPrograms(preset.programs)
  }

  const updateProgram = (idx: number, field: keyof ProgramOption, val: string | number | boolean) => {
    setPrograms(prev => prev.map((p, i) => i === idx ? { ...p, [field]: val } : p))
  }

  const addProgram = () => {
    if (programs.length >= 4) return
    setPrograms(prev => [...prev, {
      id: `custom_${Date.now()}`,
      label: "New Program",
      type: "certificate",
      tuitionCost: 5000,
      programDurationYears: 0.5,
      isFullTime: false,
      studyImpactPct: 0.1,
      postProgramSalary: currentSalary * 1.15,
      postProgramGrowthRate: 0.04,
      loanAmount: 0,
      loanInterestRate: 0.06,
    }])
  }

  const removeProgram = (idx: number) => {
    if (programs.length <= 2) return
    setPrograms(prev => prev.filter((_, i) => i !== idx))
  }

  const compInput: ComparisonInput = {
    currentSalary,
    currentGrowthRate,
    discountRate: DISCOUNT_RATE,
    programs,
  }

  const result = useMemo(() => {
    try { return calculateComparison(compInput) }
    catch { return null }
  }, [programs, currentSalary, currentGrowthRate])

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-12 max-w-6xl mx-auto">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative flex items-start justify-between gap-4 mb-4">
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">CareerReturns · Free Calculator · 2026</p>
          <CountrySelect value={country} onChange={handleCountryChange} />
        </div>
        <h1 className="relative text-3xl md:text-4xl font-semibold tracking-tight mb-3 leading-tight bg-linear-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
          MBA vs Bootcamp vs Certificate:<br className="hidden md:block" /> Which Wins Financially?
        </h1>
        <p className="text-white/60 max-w-2xl text-base mb-6">
          A $160k MBA, a $15k bootcamp, and a $300 Google certificate walk into the same DCF model.
          The winner surprises most people. Compare any 2–4 programs on equal financial footing —
          NPV, IRR, and break-even — ranked by return, not prestige.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          {[
            { stat: "4", label: "Programs compared at once" },
            { stat: "3", label: "Preset comparison bundles" },
            { stat: "$0", label: "Cost of this tool" },
            { stat: "< 2 min", label: "To a side-by-side ranking" },
          ].map(({ stat, label }) => (
            <div key={label} className="border border-white/10 rounded-2xl p-3 text-center bg-white/5">
              <p className="text-white font-bold text-lg">{stat}</p>
              <p className="text-white/40 text-xs mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Presets */}
        <div className="mb-8">
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-3">Start with a Preset</p>
          <div className="flex flex-wrap gap-2">
            {COMPARISON_PRESETS.map(p => (
              <button
                key={p.id}
                onClick={() => applyPreset(p.id)}
                className={`px-4 py-2 text-sm rounded border transition-all ${
                  selectedPreset === p.id
                    ? "border-white/40 bg-white/5 text-white"
                    : "border-white/10 text-white/50 hover:border-white/20 hover:text-white/70"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Baseline */}
        <div className="grid md:grid-cols-2 gap-4 mb-8 p-4 rounded-2xl border border-white/10 bg-white/5">
          <div>
            <label className="text-xs text-white/40 uppercase tracking-widest block mb-1">Current Annual Salary ($)</label>
            <input
              type="number" value={currentSalary} step={5000} min={0}
              onChange={e => setCurrentSalary(parseFloat(e.target.value) || 0)}
              className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:outline-none focus:border-white/30"
            />
          </div>
          <div>
            <label className="text-xs text-white/40 uppercase tracking-widest block mb-1">
              Current Career Growth: {fmtPct(currentGrowthRate)}/yr
            </label>
            <input
              type="range" min={0.01} max={0.10} step={0.005}
              value={currentGrowthRate}
              onChange={e => setCurrentGrowthRate(parseFloat(e.target.value))}
              className="w-full accent-white mt-3"
            />
          </div>
        </div>

        {/* Program cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
          {programs.map((prog, idx) => (
            <div key={prog.id} className={`rounded-lg border p-4 ${result?.winnerId === prog.id ? "border-white/30 bg-white/5" : "border-white/10"}`}>
              {result?.winnerId === prog.id && (
                <div className="text-xs text-green-400 uppercase tracking-widest mb-2">★ Highest NPV</div>
              )}

              <div className="mb-3">
                <input
                  type="text" value={prog.label}
                  onChange={e => updateProgram(idx, "label", e.target.value)}
                  className="w-full bg-transparent text-sm font-medium border-b border-white/20 pb-1 focus:outline-none focus:border-white/50"
                />
                <div className="flex gap-1 mt-1.5 flex-wrap">
                  {PROGRAM_TYPES.map(t => (
                    <button
                      key={t}
                      onClick={() => updateProgram(idx, "type", t)}
                      className={`text-[10px] px-1.5 py-0.5 rounded ${prog.type === t ? typeColors[t] + " border border-current" : "text-white/30 border border-white/10"}`}
                    >
                      {typeLabels[t]}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <InputRow label="Tuition ($)">
                  <input type="number" value={prog.tuitionCost} min={0} step={1000}
                    onChange={e => updateProgram(idx, "tuitionCost", parseFloat(e.target.value) || 0)}
                    className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-sm focus:outline-none focus:border-white/30" />
                </InputRow>

                <InputRow label="Duration (years)">
                  <input type="number" value={prog.programDurationYears} min={0.1} max={4} step={0.1}
                    onChange={e => updateProgram(idx, "programDurationYears", parseFloat(e.target.value) || 0)}
                    className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-sm focus:outline-none focus:border-white/30" />
                </InputRow>

                <InputRow label="Format">
                  <div className="flex gap-1">
                    {[{ l: "Full-time", v: true }, { l: "Part-time", v: false }].map(opt => (
                      <button
                        key={String(opt.v)}
                        onClick={() => updateProgram(idx, "isFullTime", opt.v)}
                        className={`flex-1 py-1 px-1 text-[10px] rounded border transition-all ${prog.isFullTime === opt.v ? "border-white/40 bg-white/10" : "border-white/10 text-white/40"}`}
                      >
                        {opt.l}
                      </button>
                    ))}
                  </div>
                </InputRow>

                <InputRow label="Target Salary ($)">
                  <input type="number" value={prog.postProgramSalary} min={0} step={5000}
                    onChange={e => updateProgram(idx, "postProgramSalary", parseFloat(e.target.value) || 0)}
                    className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-sm focus:outline-none focus:border-white/30" />
                </InputRow>

                <InputRow label={`Growth: ${fmtPct(prog.postProgramGrowthRate)}`}>
                  <input type="range" min={0.01} max={0.15} step={0.005}
                    value={prog.postProgramGrowthRate}
                    onChange={e => updateProgram(idx, "postProgramGrowthRate", parseFloat(e.target.value))}
                    className="w-full accent-white" />
                </InputRow>

                <InputRow label="Loan Amount ($)">
                  <input type="number" value={prog.loanAmount} min={0} step={5000}
                    onChange={e => updateProgram(idx, "loanAmount", parseFloat(e.target.value) || 0)}
                    className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-sm focus:outline-none focus:border-white/30" />
                </InputRow>
              </div>

              {programs.length > 2 && (
                <button
                  onClick={() => removeProgram(idx)}
                  className="mt-3 text-xs text-red-400/60 hover:text-red-400 transition-all"
                >
                  Remove
                </button>
              )}
            </div>
          ))}

          {programs.length < 4 && (
            <button
              onClick={addProgram}
              className="rounded-lg border border-dashed border-white/10 p-4 text-white/30 hover:border-white/20 hover:text-white/50 transition-all text-sm flex items-center justify-center"
            >
              + Add Program
            </button>
          )}
        </div>

        {/* Results */}
        {result && (
          <>
            {/* Insights */}
            {result.insights.length > 0 && (
              <div className="rounded-lg border border-white/20 bg-white/[0.02] p-5 mb-6">
                <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-3">Key Insights</p>
                <ul className="space-y-2">
                  {result.insights.map((ins, i) => (
                    <li key={i} className="text-sm text-white/70 flex gap-2">
                      <span className="text-white/30">→</span>
                      {ins}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Comparison table */}
            <div className="rounded-lg border border-white/10 overflow-hidden mb-6">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03]">
                    <th className="text-left p-3 text-white/40 uppercase tracking-widest">Metric</th>
                    <th className="text-right p-3 text-white/40">No Change</th>
                    {result.programs.map(p => (
                      <th key={p.programId} className={`text-right p-3 ${p.programId === result.winnerId ? "text-green-400" : "text-white/60"}`}>
                        {p.label.split(" ").slice(0, 3).join(" ")}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <TableRow label="NPV (10-yr)">
                    <td className="text-right p-3 text-white/40">{formatCurrency(result.noProgramNPV, country)}</td>
                    {result.programs.map(p => (
                      <td key={p.programId} className={`text-right p-3 font-medium ${p.programId === result.winnerId ? "text-green-400" : (p.npv !== null && p.npv > 0 ? "text-white/80" : "text-red-400/70")}`}>
                        {p.npv !== null ? formatCurrency(p.npv, country) : "—"}
                      </td>
                    ))}
                  </TableRow>
                  <TableRow label="IRR">
                    <td className="text-right p-3 text-white/40">—</td>
                    {result.programs.map(p => (
                      <td key={p.programId} className={`text-right p-3 ${p.irr !== null && p.irr > DISCOUNT_RATE ? "text-green-400/80" : "text-white/50"}`}>
                        {p.irr !== null ? fmtPct(p.irr) : "—"}
                      </td>
                    ))}
                  </TableRow>
                  <TableRow label="Break-Even">
                    <td className="text-right p-3 text-white/40">0 yrs</td>
                    {result.programs.map(p => (
                      <td key={p.programId} className="text-right p-3 text-white/60">
                        {p.paybackPeriod === Infinity ? ">10 yrs" : p.paybackPeriod.toFixed(1) + " yrs"}
                      </td>
                    ))}
                  </TableRow>
                  <TableRow label="Total Investment">
                    <td className="text-right p-3 text-white/40">$0</td>
                    {result.programs.map(p => (
                      <td key={p.programId} className="text-right p-3 text-white/60">{formatCurrency(p.totalInvestment, country)}</td>
                    ))}
                  </TableRow>
                  <TableRow label="Salary Jump">
                    <td className="text-right p-3 text-white/40">—</td>
                    {result.programs.map(p => (
                      <td key={p.programId} className="text-right p-3 text-white/60">{formatCurrency(p.salaryDelta, country)}</td>
                    ))}
                  </TableRow>
                  <TableRow label="ROI Grade">
                    <td className="text-right p-3 text-white/40">—</td>
                    {result.programs.map(p => (
                      <td key={p.programId} className={`text-right p-3 font-bold ${gradeColor[p.score.grade]}`}>
                        {p.score.grade}
                      </td>
                    ))}
                  </TableRow>
                </tbody>
              </table>
            </div>

            {/* Score cards */}
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
              {result.programs.map(p => (
                <div key={p.programId} className={`rounded-lg border p-4 ${gradeBg[p.score.grade]}`}>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs text-white/50 flex-1 leading-tight">{p.label}</span>
                    <span className={`text-3xl font-bold ml-2 ${gradeColor[p.score.grade]}`}>
                      {p.score.grade}
                    </span>
                  </div>
                  <p className="text-xs text-white/50">{p.score.summary}</p>
                  <p className="text-xs text-white/30 mt-1">{p.score.riskFactors}</p>
                  <div className="mt-3 pt-3 border-t border-white/10 flex justify-between text-xs">
                    <span className="text-white/40">Rank #{p.rank}</span>
                    <span className={p.npv !== null && p.npv > 0 ? "text-green-400" : "text-red-400"}>
                      {p.npv !== null ? formatCurrency(p.npv, country) : "—"} NPV
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <section className="border-t border-white/10 px-6 py-8 max-w-6xl mx-auto">
        <p className="text-xs text-white/30 uppercase tracking-widest mb-2">Methodology</p>
        <p className="text-xs text-white/40 max-w-2xl">
          All programs evaluated using the same DCF model: CF[0] = upfront cost + opportunity cost;
          CF[t] = salary delta − loan payments (5-year term). NPV discounted at {DISCOUNT_RATE * 100}%.
          Rankings are purely financial — non-financial benefits (network, prestige, learning) are not modeled.
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
          <Link href="/mba-vs-masters-roi" className="hover:text-slate-300 transition-colors">MBA vs Master&apos;s ROI</Link>
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

function InputRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-white/40 mb-1">{label}</label>
      {children}
    </div>
  )
}

function TableRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <tr className="border-b border-white/5">
      <td className="p-3 text-white/40">{label}</td>
      {children}
    </tr>
  )
}
