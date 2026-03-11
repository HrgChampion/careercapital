"use client"

import { useState, useMemo } from "react"
import {
  calculateReskilling,
  RESKILLING_PRESETS,
  RESKILLING_PROJECTION_YEARS,
  type ReskillingInput,
  type ReskillingPreset,
} from "@/lib/reskillingEngine"
import { DISCOUNT_RATE } from "@/lib/mbaEngine"
import { COUNTRIES, formatCurrency, defaultCountry, type CountryCode } from "@/lib/locale"
import { CountrySelect } from "@/components/CountrySelect"

// ─── Color helpers ──────────────────────────────────────────────────────────────

const gradeColor: Record<string, string> = {
  A: "text-green-400", B: "text-blue-400", C: "text-yellow-400",
  D: "text-orange-400", F: "text-red-500",
}
const gradeBg: Record<string, string> = {
  A: "bg-green-400/10 border-green-400/30", B: "bg-blue-400/10 border-blue-400/30",
  C: "bg-yellow-400/10 border-yellow-400/30", D: "bg-orange-400/10 border-orange-400/30",
  F: "bg-red-500/10 border-red-500/30",
}
const riskColor: Record<string, string> = {
  Low: "text-green-400", Moderate: "text-yellow-400", High: "text-red-400",
}

function fmt(n: number, opts?: Intl.NumberFormatOptions) {
  return new Intl.NumberFormat("en-US", opts).format(n)
}
function fmtPct(n: number) {
  return fmt(n * 100, { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + "%"
}

const STEPS = ["Program", "Salary", "Financing"] as const

type Inputs = {
  currentSalary: number
  currentGrowthRate: number
  programCost: number
  programDurationMonths: number
  isFullTime: boolean
  studyTimeImpactPct: number
  targetSalary: number
  targetGrowthRate: number
  loanAmount: number
  loanInterestRate: number
}

const DEFAULTS: Inputs = {
  currentSalary: 65000,
  currentGrowthRate: 0.03,
  programCost: 15000,
  programDurationMonths: 4,
  isFullTime: true,
  studyTimeImpactPct: 0.2,
  targetSalary: 95000,
  targetGrowthRate: 0.06,
  loanAmount: 0,
  loanInterestRate: 0.06,
}

export default function ReskillingCalculator() {
  const [country, setCountry] = useState<CountryCode>(() => defaultCountry())
  const handleCountryChange = (c: CountryCode) => {
    setCountry(c)
    setInputs(prev => ({
      ...prev,
      currentSalary: COUNTRIES[c].defaultSalary,
      targetSalary: COUNTRIES[c].defaultTargetSalary,
      programCost: COUNTRIES[c].defaultBootcampCost,
    }))
  }
  const [inputs, setInputs] = useState<Inputs>(DEFAULTS)
  const [step, setStep] = useState(0)
  const [selectedPreset, setSelectedPreset] = useState<string>("fullstack_bootcamp")

  const set = (k: keyof Inputs, v: number | boolean) =>
    setInputs(prev => ({ ...prev, [k]: v }))

  const applyPreset = (preset: ReskillingPreset) => {
    setSelectedPreset(preset.id)
    setInputs({
      currentSalary: preset.medianCurrentSalary,
      currentGrowthRate: preset.currentGrowthRate,
      programCost: preset.typicalCost,
      programDurationMonths: preset.typicalDurationMonths,
      isFullTime: preset.isFullTime,
      studyTimeImpactPct: preset.studyTimeImpactPct,
      targetSalary: preset.medianTargetSalary,
      targetGrowthRate: preset.targetGrowthRate,
      loanAmount: 0,
      loanInterestRate: 0.06,
    })
    setStep(0)
  }

  const engineInput: ReskillingInput = { ...inputs, discountRate: DISCOUNT_RATE }
  const result = useMemo(() => {
    try { return calculateReskilling(engineInput) }
    catch { return null }
  }, [inputs])

  const cashFlows = result?.cashFlows ?? []

  // Chart: normalize to [-1, 1] for bar height
  const maxAbs = Math.max(...cashFlows.map(Math.abs), 1)

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
          Is Your Bootcamp or Certificate<br className="hidden md:block" /> Actually Worth It?
        </h1>
        <p className="text-white/60 max-w-2xl text-base mb-6">
          A $15k bootcamp can return $240k in NPV — or lose you money. A $300 Google certificate
          beats most MBAs on cost-efficiency. Model the exact dollar return before you quit your job or spend a dollar.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {[
            { stat: "< 3 yrs", label: "Typical bootcamp break-even" },
            { stat: "~$240k", label: "10-yr NPV, full-stack bootcamp" },
            { stat: "9", label: "Programs pre-loaded" },
            { stat: "60 sec", label: "Time to get your answer" },
          ].map(({ stat, label }) => (
            <div key={label} className="border border-white/10 rounded-2xl p-3 text-center bg-white/5">
              <p className="text-white font-bold text-lg">{stat}</p>
              <p className="text-white/40 text-xs mt-0.5">{label}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 text-xs text-white/30">
          <span>DCF · NPV · IRR · Break-even</span>
          <span>·</span>
          <span>{DISCOUNT_RATE * 100}% hurdle rate</span>
          <span>·</span>
          <span>{RESKILLING_PROJECTION_YEARS}-year horizon</span>
          <span>·</span>
          <span>Free — no signup</span>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-[1fr_380px] gap-10">
        {/* Left: form */}
        <div>
          {/* Preset picker */}
          <div className="mb-8">
            <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-3">Quick Start — Pick a Program</p>
            <div className="grid grid-cols-1 gap-2">
              {RESKILLING_PRESETS.map(p => (
                <button
                  key={p.id}
                  onClick={() => applyPreset(p)}
                  className={`text-left px-4 py-3 rounded border transition-all ${
                    selectedPreset === p.id
                      ? "border-white/40 bg-white/5"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{p.label}</span>
                    <span className="text-xs text-white/40 ml-2">
                      {p.typicalCost === 0 ? "Free" : formatCurrency(p.typicalCost, country)}
                    </span>
                  </div>
                  <p className="text-xs text-white/40 mt-0.5">{p.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step nav */}
          <div className="flex gap-1 mb-6">
            {STEPS.map((s, i) => (
              <button
                key={s}
                onClick={() => setStep(i)}
                className={`flex-1 py-2 text-xs uppercase tracking-widest border-b-2 transition-all ${
                  step === i ? "border-white text-white" : "border-white/10 text-white/40 hover:text-white/60"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Step 0: Program */}
          {step === 0 && (
            <div className="space-y-5">
              <Field label="Program Cost ($)" hint="Total tuition + materials">
                <NumberInput value={inputs.programCost} onChange={v => set("programCost", v)} min={0} step={500} />
              </Field>
              <Field label="Program Duration (months)" hint="How long is the program?">
                <NumberInput value={inputs.programDurationMonths} onChange={v => set("programDurationMonths", v)} min={1} max={36} step={1} />
              </Field>
              <Field label="Study Format" hint="Does this program require you to quit working?">
                <div className="flex gap-3">
                  {[
                    { label: "Full-Time (quit job)", val: true },
                    { label: "Part-Time (keep working)", val: false },
                  ].map(opt => (
                    <button
                      key={String(opt.val)}
                      onClick={() => set("isFullTime", opt.val)}
                      className={`flex-1 py-2 px-3 text-sm rounded border transition-all ${
                        inputs.isFullTime === opt.val
                          ? "border-white bg-white/10"
                          : "border-white/20 text-white/50 hover:border-white/40"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </Field>
              {!inputs.isFullTime && (
                <Field label="Study Time Impact" hint="What fraction of your work capacity does studying consume?">
                  <div className="flex items-center gap-3">
                    <input
                      type="range" min={0.05} max={0.8} step={0.05}
                      value={inputs.studyTimeImpactPct}
                      onChange={e => set("studyTimeImpactPct", parseFloat(e.target.value))}
                      className="flex-1 accent-white"
                    />
                    <span className="text-sm w-10 text-right">{Math.round(inputs.studyTimeImpactPct * 100)}%</span>
                  </div>
                </Field>
              )}
              <div className="flex justify-end pt-2">
                <button onClick={() => setStep(1)} className="px-6 py-2 bg-linear-to-r from-indigo-600 to-violet-600 text-white shadow-[0_0_40px_rgba(99,102,241,0.3)] text-sm font-bold rounded hover:opacity-90 transition-all">
                  Next: Salary →
                </button>
              </div>
            </div>
          )}

          {/* Step 1: Salary */}
          {step === 1 && (
            <div className="space-y-5">
              <Field label="Current Annual Salary ($)" hint="Your salary before reskilling">
                <NumberInput value={inputs.currentSalary} onChange={v => set("currentSalary", v)} min={0} step={5000} />
              </Field>
              <Field label="Current Career Growth Rate" hint="Annual raise % if you stay in current role">
                <div className="flex items-center gap-3">
                  <input
                    type="range" min={0.01} max={0.12} step={0.005}
                    value={inputs.currentGrowthRate}
                    onChange={e => set("currentGrowthRate", parseFloat(e.target.value))}
                    className="flex-1 accent-white"
                  />
                  <span className="text-sm w-12 text-right">{fmtPct(inputs.currentGrowthRate)}</span>
                </div>
              </Field>
              <Field label="Target Salary After Reskilling ($)" hint="Expected Year 1 salary in your new role">
                <NumberInput value={inputs.targetSalary} onChange={v => set("targetSalary", v)} min={0} step={5000} />
              </Field>
              <Field label="Target Career Growth Rate" hint="Annual raise % in the new role/industry">
                <div className="flex items-center gap-3">
                  <input
                    type="range" min={0.01} max={0.15} step={0.005}
                    value={inputs.targetGrowthRate}
                    onChange={e => set("targetGrowthRate", parseFloat(e.target.value))}
                    className="flex-1 accent-white"
                  />
                  <span className="text-sm w-12 text-right">{fmtPct(inputs.targetGrowthRate)}</span>
                </div>
              </Field>
              <div className="flex justify-between pt-2">
                <button onClick={() => setStep(0)} className="px-6 py-2 border border-white/20 text-sm rounded hover:border-white/40 transition-all">← Back</button>
                <button onClick={() => setStep(2)} className="px-6 py-2 bg-linear-to-r from-indigo-600 to-violet-600 text-white shadow-[0_0_40px_rgba(99,102,241,0.3)] text-sm font-bold rounded hover:opacity-90 transition-all">Next: Financing →</button>
              </div>
            </div>
          )}

          {/* Step 2: Financing */}
          {step === 2 && (
            <div className="space-y-5">
              <Field label="Loan Amount ($)" hint="How much are you financing? (0 = self-funded)">
                <NumberInput value={inputs.loanAmount} onChange={v => set("loanAmount", v)} min={0} step={1000} />
              </Field>
              {inputs.loanAmount > 0 && (
                <Field label="Annual Interest Rate" hint="Loan interest rate (e.g. 6% for federal loans)">
                  <div className="flex items-center gap-3">
                    <input
                      type="range" min={0.03} max={0.15} step={0.005}
                      value={inputs.loanInterestRate}
                      onChange={e => set("loanInterestRate", parseFloat(e.target.value))}
                      className="flex-1 accent-white"
                    />
                    <span className="text-sm w-12 text-right">{fmtPct(inputs.loanInterestRate)}</span>
                  </div>
                </Field>
              )}
              <div className="flex justify-start pt-2">
                <button onClick={() => setStep(1)} className="px-6 py-2 border border-white/20 text-sm rounded hover:border-white/40 transition-all">← Back</button>
              </div>
            </div>
          )}
        </div>

        {/* Right: results */}
        <div className="space-y-4">
          {result ? (
            <>
              {/* Grade card */}
              <div className={`rounded-lg border p-5 ${gradeBg[result.score.grade]}`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-white/40 uppercase tracking-widest">ROI Grade</span>
                  <span className={`text-4xl font-bold ${gradeColor[result.score.grade]}`}>{result.score.grade}</span>
                </div>
                <p className="text-sm text-white/70">{result.score.summary}</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className={`text-xs font-medium ${riskColor[result.score.riskLevel]}`}>{result.score.riskLevel} Risk</span>
                  <span className="text-white/20">·</span>
                  <span className="text-xs text-white/40">{result.score.riskFactors}</span>
                </div>
              </div>

              {/* Key metrics */}
              <div className="grid grid-cols-2 gap-3">
                <Metric
                  label="10-Year NPV"
                  value={result.npv !== null ? formatCurrency(result.npv, country) : "—"}
                  sub={result.npv !== null && result.npv > 0 ? "Positive return" : "Negative return"}
                  highlight={result.npv !== null && result.npv > 0}
                />
                <Metric
                  label="IRR"
                  value={result.irr !== null ? fmtPct(result.irr) : "—"}
                  sub={`Hurdle: ${DISCOUNT_RATE * 100}%`}
                  highlight={result.irr !== null && result.irr > DISCOUNT_RATE}
                />
                <Metric
                  label="Break-Even"
                  value={result.paybackPeriod === Infinity ? ">10 yrs" : `${result.paybackPeriod.toFixed(1)} yrs`}
                  sub="Years to recover cost"
                  highlight={result.paybackPeriod < 6}
                />
                <Metric
                  label="Salary Jump"
                  value={formatCurrency(result.salaryDelta, country)}
                  sub={`${formatCurrency(inputs.currentSalary, country)} → ${formatCurrency(inputs.targetSalary, country)}`}
                  highlight={result.salaryDelta > 0}
                />
              </div>

              {/* Vs no-change */}
              <div className="rounded-lg border border-white/10 p-4 bg-white/[0.02]">
                <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-3">vs. Staying in Current Career</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/60">Total Program Cost</span>
                    <span>{formatCurrency(result.totalProgramCost, country)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Opportunity Cost</span>
                    <span>{formatCurrency(result.opportunityCost, country)}</span>
                  </div>
                  {result.loanDetails.totalInterest > 0 && (
                    <div className="flex justify-between">
                      <span className="text-white/60">Loan Interest</span>
                      <span>{formatCurrency(result.loanDetails.totalInterest, country)}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Sensitivity */}
              <div className="rounded-lg border border-white/10 p-4 bg-white/[0.02]">
                <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-3">Sensitivity (±10% Salary)</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-green-400/80">Optimistic</span>
                    <span className="text-green-400">{result.sensitivity.optimistic !== null ? formatCurrency(result.sensitivity.optimistic, country) : "—"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Base Case</span>
                    <span>{result.npv !== null ? formatCurrency(result.npv, country) : "—"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-red-400/80">Conservative</span>
                    <span className="text-red-400">{result.sensitivity.conservative !== null ? formatCurrency(result.sensitivity.conservative, country) : "—"}</span>
                  </div>
                </div>
              </div>

              {/* Cash flow chart */}
              <div className="rounded-lg border border-white/10 p-4 bg-white/[0.02]">
                <p className="text-xs text-white/40 uppercase tracking-widest mb-4">10-Year Cash Flow</p>
                <div className="flex items-end gap-1 h-28">
                  {cashFlows.map((cf, i) => {
                    const pct = Math.abs(cf) / maxAbs
                    const h = Math.max(pct * 100, 4)
                    const isPos = cf >= 0
                    return (
                      <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                        {isPos ? <div className="w-full rounded-sm bg-green-400/70" style={{ height: `${h}%` }} /> : null}
                        <div className="text-[8px] text-white/30">{i}</div>
                        {!isPos ? <div className="w-full rounded-sm bg-red-400/50" style={{ height: `${h}%` }} /> : null}
                      </div>
                    )
                  })}
                </div>
                <div className="flex justify-between text-[10px] text-white/30 mt-1">
                  <span>Year 0</span>
                  <span>Year {RESKILLING_PROJECTION_YEARS}</span>
                </div>
              </div>
            </>
          ) : (
            <div className="rounded-lg border border-white/10 p-6 text-center text-white/40 text-sm">
              Enter your inputs to see results
            </div>
          )}
        </div>
      </div>

      {/* Methodology footer */}
      <section className="border-t border-white/10 px-6 py-8 max-w-5xl mx-auto">
        <p className="text-xs text-white/30 uppercase tracking-widest mb-2">Methodology</p>
        <p className="text-xs text-white/40 max-w-2xl">
          NPV discounted at {DISCOUNT_RATE * 100}% (risk-adjusted equity return baseline). Cash flows account for
          program duration as opportunity cost, loan amortization over 5 years, and salary delta compounded
          at user-specified growth rates. IRR solved via bisection on the full cash flow series.
          Sensitivity analysis applies ±10% to salary delta while holding all other variables constant.
        </p>
      </section>
    </main>
  )
}

// ─── UI primitives ──────────────────────────────────────────────────────────────

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs text-white/60 uppercase tracking-widest mb-1">{label}</label>
      {hint && <p className="text-xs text-white/30 mb-2">{hint}</p>}
      {children}
    </div>
  )
}

function NumberInput({ value, onChange, min, max, step }: {
  value: number; onChange: (v: number) => void; min?: number; max?: number; step?: number
}) {
  return (
    <input
      type="number"
      value={value}
      min={min}
      max={max}
      step={step}
      onChange={e => onChange(parseFloat(e.target.value) || 0)}
      className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:outline-none focus:border-white/30 transition-all"
    />
  )
}

function Metric({ label, value, sub, highlight }: {
  label: string; value: string; sub?: string; highlight?: boolean
}) {
  return (
    <div className={`rounded-lg border p-3 ${highlight ? "border-white/20 bg-white/5" : "border-white/10"}`}>
      <p className="text-xs text-white/40 uppercase tracking-widest mb-1">{label}</p>
      <p className={`text-lg font-bold ${highlight ? "text-white" : "text-white/70"}`}>{value}</p>
      {sub && <p className="text-xs text-white/30 mt-0.5">{sub}</p>}
    </div>
  )
}
