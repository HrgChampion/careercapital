"use client"

import Link from "next/link"
import { useState, useMemo } from "react"
import {
  calculateTrajectory,
  buildDefaultScenarios,
  buildEarningsArray,
  type TrajectoryScenario,
  type CareerPhase,
  type TrajectoryInput,
  type BreakType,
} from "@/lib/trajectoryEngine"
import { DISCOUNT_RATE } from "@/lib/mbaEngine"
import { COUNTRIES, formatCurrency, defaultCountry, type CountryCode } from "@/lib/locale"
import { CountrySelect } from "@/components/CountrySelect"

function fmtM(n: number, c: CountryCode) {
  if (Math.abs(n) >= 1_000_000) return (n / 1_000_000).toFixed(2) + "M"
  return formatCurrency(n, c)
}
function fmtPct(n: number) { return (n * 100).toFixed(1) + "%" }

const SCENARIO_COLORS = ["#60a5fa", "#4ade80", "#f87171", "#facc15"]

export default function LifetimeEarningsCalculator() {
  const [country, setCountry] = useState<CountryCode>(() => defaultCountry())
  const handleCountryChange = (c: CountryCode) => {
    setCountry(c)
    const sal = COUNTRIES[c].defaultSalary
    setCurrentSalary(sal)
    setScenarios(buildDefaultScenarios(sal))
  }
  const [currentAge, setCurrentAge] = useState(32)
  const [retirementAge, setRetirementAge] = useState(65)
  const [inflationRate, setInflationRate] = useState(0.03)
  const [currentSalary, setCurrentSalary] = useState(85000)
  const [scenarios, setScenarios] = useState<TrajectoryScenario[]>(() =>
    buildDefaultScenarios(85000)
  )
  const [activeScenario, setActiveScenario] = useState(0)

  const handleSalaryChange = (v: number) => {
    setCurrentSalary(v)
    setScenarios(buildDefaultScenarios(v))
  }

  const updatePhase = (scenarioIdx: number, phaseIdx: number, field: keyof CareerPhase, val: string | number | boolean) => {
    setScenarios(prev => prev.map((s, si) => {
      if (si !== scenarioIdx) return s
      return {
        ...s,
        phases: s.phases.map((p, pi) => pi === phaseIdx ? { ...p, [field]: val } : p),
      }
    }))
  }

  const updateScenarioLabel = (idx: number, label: string) => {
    setScenarios(prev => prev.map((s, i) => i === idx ? { ...s, label } : s))
  }

  const addPhase = (scenarioIdx: number) => {
    setScenarios(prev => prev.map((s, si) => {
      if (si !== scenarioIdx) return s
      const lastPhase = s.phases[s.phases.length - 1]
      const lastSalary = lastPhase
        ? lastPhase.startingSalary * Math.pow(1 + lastPhase.annualGrowthRate, lastPhase.durationYears)
        : currentSalary
      return {
        ...s,
        phases: [...s.phases, {
          id: `phase_${Date.now()}`,
          label: "New Phase",
          durationYears: 5,
          startingSalary: lastSalary,
          annualGrowthRate: 0.04,
          includesBreak: false,
        }],
      }
    }))
  }

  const removePhase = (scenarioIdx: number, phaseIdx: number) => {
    setScenarios(prev => prev.map((s, si) => {
      if (si !== scenarioIdx || s.phases.length <= 1) return s
      return { ...s, phases: s.phases.filter((_, pi) => pi !== phaseIdx) }
    }))
  }

  const input: TrajectoryInput = {
    currentAge,
    retirementAge,
    inflationRate,
    discountRate: DISCOUNT_RATE,
    scenarios,
  }

  const result = useMemo(() => {
    try { return calculateTrajectory(input) }
    catch { return null }
  }, [currentAge, retirementAge, inflationRate, scenarios])

  const yearsToRetirement = retirementAge - currentAge
  const chartYears = result?.yearsToRetirement ?? yearsToRetirement

  // Build chart data
  const chartMax = result
    ? Math.max(...result.scenarios.flatMap(s => s.annualEarnings), 1)
    : 1

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-12 max-w-6xl mx-auto">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative flex items-start justify-between gap-4 mb-4">
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">CareerReturns · Lifetime Financial Modeling</p>
          <CountrySelect value={country} onChange={handleCountryChange} />
        </div>
        <h1 className="relative text-3xl md:text-4xl font-semibold tracking-tight mb-3 leading-tight bg-linear-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
          Stay, Pivot, or Take a Break — Which Career Path Makes You More Money?
        </h1>
        <p className="text-white/70 max-w-2xl mb-6 text-lg leading-relaxed">
          A 2-year career break at age 35 can cost <span className="text-white font-semibold">$400k–$800k</span> in lifetime earnings.
          But the right pivot can more than compensate. Model up to 3 scenarios side-by-side — with real NPV and inflation-adjusted projections to retirement.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
          {[
            { stat: "3", label: "Scenarios compared side-by-side" },
            { stat: "30 yrs", label: "Projection horizon to retirement" },
            { stat: "NPV + real", label: "Inflation-adjusted lifetime totals" },
            { stat: "Free", label: "No signup, instant results" },
          ].map(({ stat, label }) => (
            <div key={stat} className="border border-white/10 rounded-lg p-3 bg-white/[0.02]">
              <div className="text-2xl font-bold text-white mb-1">{stat}</div>
              <div className="text-xs text-white/40 leading-tight">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Global inputs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-4 rounded-2xl border border-white/10 bg-white/5">
          <div>
            <label className="text-xs text-white/40 uppercase tracking-widest block mb-1">Current Salary ($)</label>
            <input type="number" value={currentSalary} step={5000} min={0}
              onChange={e => handleSalaryChange(parseFloat(e.target.value) || 0)}
              className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:outline-none focus:border-white/30" />
          </div>
          <div>
            <label className="text-xs text-white/40 uppercase tracking-widest block mb-1">Current Age</label>
            <input type="number" value={currentAge} step={1} min={20} max={60}
              onChange={e => setCurrentAge(parseInt(e.target.value) || 30)}
              className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:outline-none focus:border-white/30" />
          </div>
          <div>
            <label className="text-xs text-white/40 uppercase tracking-widest block mb-1">Retirement Age</label>
            <input type="number" value={retirementAge} step={1} min={50} max={75}
              onChange={e => setRetirementAge(parseInt(e.target.value) || 65)}
              className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:outline-none focus:border-white/30" />
          </div>
          <div>
            <label className="text-xs text-white/40 uppercase tracking-widest block mb-1">
              Inflation Rate: {fmtPct(inflationRate)}
            </label>
            <input type="range" min={0.01} max={0.06} step={0.005}
              value={inflationRate}
              onChange={e => setInflationRate(parseFloat(e.target.value))}
              className="w-full accent-white mt-3" />
          </div>
        </div>

        {/* Chart */}
        {result && (
          <div className="rounded-2xl border border-white/10 p-5 bg-white/5 mb-8">
            <p className="text-xs text-white/40 uppercase tracking-widest mb-4">Annual Earnings by Scenario</p>
            <div className="flex items-end gap-0.5 h-40 overflow-hidden">
              {Array.from({ length: Math.min(chartYears, 40) }, (_, i) => (
                <div key={i} className="flex-1 flex flex-col justify-end gap-0.5 group relative">
                  {result.scenarios.map((s, si) => {
                    const val = s.annualEarnings[i] ?? 0
                    const pct = (val / chartMax) * 100
                    return (
                      <div
                        key={s.scenarioId}
                        className="w-full rounded-sm transition-opacity"
                        style={{ height: `${Math.max(pct, 0.5)}%`, backgroundColor: s.color + "88" }}
                        title={`${s.label}: ${formatCurrency(val, country)}`}
                      />
                    )
                  })}
                  {i % 5 === 0 && (
                    <div className="absolute -bottom-5 text-[8px] text-white/20 w-full text-center">
                      {currentAge + i}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              {result.scenarios.map(s => (
                <div key={s.scenarioId} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: s.color }} />
                  <span className="text-xs text-white/60">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {/* Scenario builder */}
          <div>
            <div className="flex gap-1 mb-4">
              {scenarios.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setActiveScenario(i)}
                  className={`flex-1 py-2 text-xs border-b-2 transition-all truncate px-2 ${activeScenario === i ? "border-white text-white" : "border-white/10 text-white/40 hover:text-white/60"}`}
                  style={{ borderBottomColor: activeScenario === i ? s.color : undefined }}
                >
                  {s.label}
                </button>
              ))}
            </div>

            {scenarios[activeScenario] && (
              <div>
                <input
                  type="text"
                  value={scenarios[activeScenario].label}
                  onChange={e => updateScenarioLabel(activeScenario, e.target.value)}
                  className="w-full bg-transparent text-sm font-medium border-b border-white/20 pb-1 mb-4 focus:outline-none focus:border-white/50"
                />

                <div className="space-y-4">
                  {scenarios[activeScenario].phases.map((phase, pi) => (
                    <div key={phase.id} className="rounded-lg border border-white/10 p-4 bg-white/[0.02]">
                      <div className="flex justify-between items-center mb-3">
                        <input
                          type="text" value={phase.label}
                          onChange={e => updatePhase(activeScenario, pi, "label", e.target.value)}
                          className="bg-transparent text-xs font-medium border-b border-white/20 pb-0.5 focus:outline-none focus:border-white/50 flex-1 mr-2"
                        />
                        {scenarios[activeScenario].phases.length > 1 && (
                          <button onClick={() => removePhase(activeScenario, pi)} className="text-xs text-red-400/50 hover:text-red-400">×</button>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div>
                          <label className="text-white/40 block mb-1">Duration (years)</label>
                          <input type="number" value={phase.durationYears} min={0.5} max={40} step={0.5}
                            onChange={e => updatePhase(activeScenario, pi, "durationYears", parseFloat(e.target.value) || 1)}
                            className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 focus:outline-none focus:border-white/30" />
                        </div>
                        <div>
                          <label className="text-white/40 block mb-1">Starting Salary ($)</label>
                          <input type="number" value={phase.startingSalary} min={0} step={5000}
                            onChange={e => updatePhase(activeScenario, pi, "startingSalary", parseFloat(e.target.value) || 0)}
                            className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 focus:outline-none focus:border-white/30" />
                        </div>
                        <div className="col-span-2">
                          <label className="text-white/40 block mb-1">Growth Rate: {fmtPct(phase.annualGrowthRate)}</label>
                          <input type="range" min={0} max={0.15} step={0.005}
                            value={phase.annualGrowthRate}
                            onChange={e => updatePhase(activeScenario, pi, "annualGrowthRate", parseFloat(e.target.value))}
                            className="w-full accent-white" />
                        </div>

                        <div className="col-span-2">
                          <label className="flex items-center gap-2 text-white/40 cursor-pointer">
                            <input type="checkbox"
                              checked={phase.includesBreak}
                              onChange={e => updatePhase(activeScenario, pi, "includesBreak", e.target.checked)}
                              className="accent-white" />
                            Includes a career break
                          </label>
                        </div>

                        {phase.includesBreak && (
                          <>
                            <div>
                              <label className="text-white/40 block mb-1">Break Duration (yrs)</label>
                              <input type="number" value={phase.breakDurationYears ?? 1} min={0.5} max={5} step={0.5}
                                onChange={e => updatePhase(activeScenario, pi, "breakDurationYears", parseFloat(e.target.value) || 1)}
                                className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 focus:outline-none focus:border-white/30" />
                            </div>
                            <div>
                              <label className="text-white/40 block mb-1">Break Type</label>
                              <div className="flex gap-1">
                                {(["full_exit", "part_time"] as BreakType[]).map(bt => (
                                  <button key={bt} onClick={() => updatePhase(activeScenario, pi, "breakType", bt)}
                                    className={`flex-1 py-1 px-1 text-[10px] rounded border transition-all ${(phase.breakType ?? "full_exit") === bt ? "border-white/40 bg-white/10" : "border-white/10 text-white/40"}`}>
                                    {bt === "full_exit" ? "Full Exit" : "Part-Time"}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  ))}

                  <button onClick={() => addPhase(activeScenario)}
                    className="w-full py-2 border border-dashed border-white/10 rounded text-xs text-white/30 hover:border-white/20 hover:text-white/50 transition-all">
                    + Add Phase
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Results panel */}
          <div className="space-y-4">
            {result && (
              <>
                {result.insights.length > 0 && (
                  <div className="rounded-lg border border-white/20 bg-white/[0.02] p-4">
                    <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Insights</p>
                    <ul className="space-y-2">
                      {result.insights.map((ins, i) => (
                        <li key={i} className="text-xs text-white/70 flex gap-2">
                          <span className="text-white/30">→</span>{ins}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {result.scenarios.map(s => {
                  const isBest = s.scenarioId === result.bestScenarioId
                  return (
                    <div key={s.scenarioId} className={`rounded-lg border p-4 ${isBest ? "border-white/30 bg-white/5" : "border-white/10"}`}
                      style={{ borderLeftColor: s.color, borderLeftWidth: 3 }}>
                      {isBest && <p className="text-xs mb-1" style={{ color: s.color }}>★ Highest NPV</p>}
                      <p className="text-sm font-medium mb-3">{s.label}</p>
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div>
                          <p className="text-white/40">Lifetime Earnings</p>
                          <p className="text-base font-bold">{fmtM(s.nominalLifetimeEarnings, country)}</p>
                        </div>
                        <div>
                          <p className="text-white/40">NPV ({DISCOUNT_RATE * 100}%)</p>
                          <p className="text-base font-bold">{s.npv !== null ? fmtM(s.npv, country) : "—"}</p>
                        </div>
                        <div>
                          <p className="text-white/40">Real (Inflation-Adj)</p>
                          <p className="font-medium">{fmtM(s.realLifetimeEarnings, country)}</p>
                        </div>
                        <div>
                          <p className="text-white/40">Avg Annual</p>
                          <p className="font-medium">{formatCurrency(s.averageAnnualEarnings, country)}</p>
                        </div>
                        <div>
                          <p className="text-white/40">Peak Earnings</p>
                          <p className="font-medium">{formatCurrency(s.peakEarningsAmount, country)}</p>
                          <p className="text-white/30">Age {currentAge + s.peakEarningsYear}</p>
                        </div>
                        {s.breakEvenVsBaselineYear !== null && (
                          <div>
                            <p className="text-white/40">Catches Baseline</p>
                            <p className="font-medium text-green-400">Year {s.breakEvenVsBaselineYear}</p>
                            <p className="text-white/30">Age {currentAge + s.breakEvenVsBaselineYear}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </>
            )}
          </div>
        </div>
      </div>

      <section className="border-t border-white/10 px-6 py-8 max-w-6xl mx-auto">
        <p className="text-xs text-white/30 uppercase tracking-widest mb-2">Methodology</p>
        <p className="text-xs text-white/40 max-w-2xl">
          Lifetime earnings are the sum of annual salary compounding within each career phase.
          Break periods earn 0 (full exit) or a user-specified fraction (part-time). NPV discounted at {DISCOUNT_RATE * 100}%.
          Real earnings adjust for inflation at your specified rate. Non-salary income (equity, bonuses) not modeled.
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
          <Link href="/mba-roi-report-2026" className="hover:text-slate-300 transition-colors">MBA ROI Report 2026</Link>
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
