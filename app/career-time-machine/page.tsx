"use client"

import Link from "next/link"
import { useState, useMemo } from "react"

function formatCurrency(n: number): string {
  if (Math.abs(n) >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`
  if (Math.abs(n) >= 1_000) return `$${Math.round(n / 1_000)}K`
  return `$${Math.round(n)}`
}

const DECISION_TYPES = [
  { id: "mba", label: "Skipped an MBA", defaultDelta: 55000, defaultGrowth: 1.5 },
  { id: "gap", label: "Took a career break", defaultDelta: -15000, defaultGrowth: -0.5 },
  { id: "reskill", label: "Skipped reskilling / bootcamp", defaultDelta: 25000, defaultGrowth: 0.8 },
  { id: "negotiate", label: "Failed to negotiate salary", defaultDelta: 12000, defaultGrowth: 0.3 },
  { id: "switch", label: "Stayed at same company too long", defaultDelta: 18000, defaultGrowth: 0.5 },
  { id: "custom", label: "Custom scenario", defaultDelta: 20000, defaultGrowth: 1.0 },
]

type YearPoint = { year: number; actual: number; alternative: number; label: string }

function computeTimeMachine(
  currentSalary: number,
  yearsAgo: number,
  salaryDelta: number,
  extraGrowth: number,
  baseGrowth: number,
): { points: YearPoint[]; pastDivergence: number; futureDivergence: number } {
  const points: YearPoint[] = []
  let actSal = currentSalary - salaryDelta * yearsAgo * 0.8 // approximate starting salary
  let altSal = actSal + salaryDelta

  let actCum = 0
  let altCum = 0

  // Past years (before today)
  for (let y = 1; y <= yearsAgo; y++) {
    actCum += actSal
    altCum += altSal
    points.push({ year: -yearsAgo + y, actual: actCum, alternative: altCum, label: `${yearsAgo - y}yr ago` })
    actSal *= 1 + baseGrowth / 100
    altSal *= 1 + (baseGrowth + extraGrowth) / 100
  }

  const pastDivergence = altCum - actCum

  // Reset to current for future projection
  actSal = currentSalary
  altSal = currentSalary + salaryDelta

  // Future years
  for (let y = 1; y <= 10; y++) {
    actCum += actSal
    altCum += altSal
    points.push({ year: y, actual: actCum, alternative: altCum, label: `+${y}yr` })
    actSal *= 1 + baseGrowth / 100
    altSal *= 1 + (baseGrowth + extraGrowth) / 100
  }

  return { points, pastDivergence, futureDivergence: altCum - actCum - pastDivergence }
}

export default function CareerTimeMachinePage() {
  const [decisionType, setDecisionType] = useState("mba")
  const [yearsAgo, setYearsAgo] = useState(3)
  const [currentSalary, setCurrentSalary] = useState(85000)
  const [salaryDelta, setSalaryDelta] = useState(55000)
  const [extraGrowth, setExtraGrowth] = useState(1.5)
  const [baseGrowth, setBaseGrowth] = useState(3)

  function handleDecisionChange(id: string) {
    setDecisionType(id)
    const dt = DECISION_TYPES.find(d => d.id === id)!
    setSalaryDelta(Math.abs(dt.defaultDelta))
    setExtraGrowth(Math.abs(dt.defaultGrowth))
  }

  const { points, pastDivergence } = useMemo(
    () => computeTimeMachine(currentSalary, yearsAgo, salaryDelta, extraGrowth, baseGrowth),
    [currentSalary, yearsAgo, salaryDelta, extraGrowth, baseGrowth],
  )

  const maxVal = Math.max(...points.map(p => p.alternative))
  const todayIdx = yearsAgo - 1

  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute -top-40 right-0 w-125 h-125 bg-violet-600/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Link href="/" className="text-xs text-slate-500 hover:text-slate-300 transition-colors mb-8 inline-block">← CareerReturns</Link>

        <p className="text-xs font-medium text-violet-400 uppercase tracking-widest mb-3">Career Time Machine</p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight bg-linear-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          What If You Had<br />Made a Different Choice?
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-xl">
          Select a past career decision, enter how long ago it was, and see the financial divergence between your actual trajectory and the alternative — from then to 10 years into the future.
        </p>

        {/* Decision selector */}
        <div className="mb-6">
          <p className="text-sm font-medium text-slate-300 mb-3">What decision do you want to model?</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {DECISION_TYPES.map(dt => (
              <button
                key={dt.id}
                onClick={() => handleDecisionChange(dt.id)}
                className={`text-left px-4 py-3 rounded-xl border text-sm transition-all ${
                  decisionType === dt.id
                    ? "bg-violet-950/50 border-violet-500/50 text-violet-300"
                    : "bg-white/5 border-white/10 text-slate-400 hover:border-violet-500/30"
                }`}
              >
                {dt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Inputs */}
        <div className="space-y-5 mb-10">
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-3">
              <label className="text-sm font-medium text-slate-300">Current Annual Salary</label>
              <div className="flex items-center gap-2">
                <span className="text-slate-500 text-sm">$</span>
                <input type="number" value={currentSalary} onChange={e => setCurrentSalary(Number(e.target.value))}
                  className="w-full bg-transparent text-white text-lg font-semibold outline-none border-b border-white/20 focus:border-violet-500 pb-1 transition-colors" />
              </div>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-3">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-slate-300">Decision Made How Long Ago?</label>
                <span className="text-violet-400 font-semibold">{yearsAgo} yrs</span>
              </div>
              <input type="range" min={1} max={10} value={yearsAgo}
                onChange={e => setYearsAgo(Number(e.target.value))}
                className="w-full accent-violet-500" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="rounded-2xl bg-white/5 border border-violet-500/20 p-5 space-y-3">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-violet-300">Annual Salary Difference</label>
                <span className="text-violet-400 font-semibold">{formatCurrency(salaryDelta)}/yr</span>
              </div>
              <input type="range" min={0} max={120000} step={1000} value={salaryDelta}
                onChange={e => setSalaryDelta(Number(e.target.value))}
                className="w-full accent-violet-500" />
              <p className="text-xs text-slate-500">what the other path would have paid more/less</p>
            </div>
            <div className="rounded-2xl bg-white/5 border border-purple-500/20 p-5 space-y-3">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-purple-300">Extra Annual Growth Rate</label>
                <span className="text-purple-400 font-semibold">+{extraGrowth}%/yr</span>
              </div>
              <input type="range" min={0} max={5} step={0.25} value={extraGrowth}
                onChange={e => setExtraGrowth(Number(e.target.value))}
                className="w-full accent-purple-500" />
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-medium text-slate-400">Cumulative Earnings: Then vs. Now</h2>
            <div className="text-xs text-slate-600 bg-slate-800/60 px-2 py-1 rounded-full">TODAY ↓</div>
          </div>
          <div className="relative h-48 flex items-end gap-0.5">
            {/* Today marker */}
            <div
              className="absolute top-0 bottom-0 w-px bg-white/20 z-10"
              style={{ left: `${((todayIdx) / (points.length - 1)) * 100}%` }}
            />
            {points.map((pt, i) => {
              const aH = (pt.actual / maxVal) * 100
              const bH = (pt.alternative / maxVal) * 100
              const isPast = i <= todayIdx
              return (
                <div key={i} className="flex-1 flex items-end gap-px group relative">
                  <div className={`flex-1 rounded-t-sm ${isPast ? "bg-slate-700/50" : "bg-slate-600/30"}`} style={{ height: `${aH}%` }} />
                  <div className={`flex-1 rounded-t-sm ${isPast ? "bg-linear-to-t from-violet-700 to-purple-500" : "bg-linear-to-t from-violet-600/60 to-purple-400/60"}`} style={{ height: `${bH}%` }} />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 pointer-events-none transition-all bg-slate-800 border border-white/10 rounded-lg px-2 py-1 text-xs text-white whitespace-nowrap z-20">
                    {pt.label}: {formatCurrency(pt.alternative)}
                  </div>
                </div>
              )
            })}
          </div>
          <div className="flex justify-between text-xs text-slate-600 mt-2">
            <span>{yearsAgo} yrs ago</span>
            <span className="text-white/40">Today</span>
            <span>+10 yrs</span>
          </div>
          <div className="flex gap-4 mt-3 text-xs">
            <span className="flex items-center gap-1.5"><span className="w-3 h-1.5 rounded bg-slate-600 inline-block" />Your actual path</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-1.5 rounded bg-violet-500 inline-block" />Alternative path</span>
          </div>
        </div>

        {/* Key numbers */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="rounded-2xl bg-violet-950/40 border border-violet-500/20 p-5 space-y-1">
            <p className="text-xs text-slate-500 uppercase tracking-wide">Past {yearsAgo} Years — Divergence</p>
            <p className="text-3xl font-bold text-violet-400">{formatCurrency(pastDivergence)}</p>
            <p className="text-xs text-slate-500">cumulative difference over past {yearsAgo} years</p>
          </div>
          <div className="rounded-2xl bg-purple-950/40 border border-purple-500/20 p-5 space-y-1">
            <p className="text-xs text-slate-500 uppercase tracking-wide">Forward Opportunity (10 yr)</p>
            <p className="text-3xl font-bold text-purple-400">{formatCurrency(salaryDelta * 10 * 1.3)}</p>
            <p className="text-xs text-slate-500">approximate future compounding value</p>
          </div>
        </div>

        <div className="rounded-2xl bg-slate-900/60 border border-white/5 p-6 text-sm text-slate-400 leading-relaxed mb-10">
          <p className="font-medium text-slate-300 mb-2">The key insight</p>
          <p>Past divergence is sunk cost — it&apos;s gone. But the same {formatCurrency(salaryDelta)}/year difference still lies ahead. Making the same decision today starts a new compounding curve. The best time to optimize a career decision was {yearsAgo} years ago. The second best time is now.</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { href: "/career-compounder", label: "Career Compounder", desc: "Model compounding forward" },
            { href: "/mba-roi-calculator", label: "MBA ROI Calculator", desc: "Calculate MBA return" },
            { href: "/reskilling-roi-calculator", label: "Reskilling ROI", desc: "Model upskilling returns" },
          ].map(item => (
            <Link key={item.href} href={item.href} className="group rounded-xl bg-white/5 border border-white/10 p-4 hover:border-violet-500/30 transition-all">
              <p className="text-sm font-medium text-white group-hover:text-violet-300">{item.label}</p>
              <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
