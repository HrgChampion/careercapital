"use client"

import Link from "next/link"
import { useState, useMemo } from "react"

function formatCurrency(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`
  if (n >= 1_000) return `$${Math.round(n / 1_000)}K`
  return `$${Math.round(n)}`
}

type YearPoint = { year: number; baseline: number; optimized: number }

function computeTrajectory(
  currentSalary: number,
  baseGrowth: number,
  salaryBoost: number,
  growthBoost: number,
  years: number,
): YearPoint[] {
  const points: YearPoint[] = []
  let baseEarnings = 0
  let optEarnings = 0
  let baseSal = currentSalary
  let optSal = currentSalary + salaryBoost

  for (let y = 1; y <= years; y++) {
    baseEarnings += baseSal
    optEarnings += optSal
    points.push({ year: y, baseline: baseEarnings, optimized: optEarnings })
    baseSal *= 1 + baseGrowth / 100
    optSal *= 1 + (baseGrowth + growthBoost) / 100
  }
  return points
}

export default function CareerCompounderPage() {
  const [currentSalary, setCurrentSalary] = useState(80000)
  const [salaryBoost, setSalaryBoost] = useState(8000)
  const [baseGrowth, setBaseGrowth] = useState(3)
  const [growthBoost, setGrowthBoost] = useState(1)
  const [years, setYears] = useState(20)

  const data = useMemo(
    () => computeTrajectory(currentSalary, baseGrowth, salaryBoost, growthBoost, years),
    [currentSalary, salaryBoost, baseGrowth, growthBoost, years],
  )

  const last = data[data.length - 1]
  const diff = last.optimized - last.baseline
  const maxVal = last.optimized

  const milestones = [5, 10, 15, 20].filter(y => y <= years)

  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-150 h-150 bg-emerald-600/10 rounded-full blur-[140px] -z-10" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Link href="/" className="text-xs text-slate-500 hover:text-slate-300 transition-colors mb-8 inline-block">← CareerReturns</Link>

        <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest mb-3">Career Compounder</p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight bg-linear-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          Small Decisions,<br />Massive Outcomes
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-xl">
          See how a small salary increase or faster growth rate compounds into life-changing wealth over 20 years. The math is counterintuitive — see it visualized.
        </p>

        {/* Controls */}
        <div className="space-y-5 mb-10">
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-3">
              <label className="text-sm font-medium text-slate-300">Current Annual Salary</label>
              <div className="flex items-center gap-2">
                <span className="text-slate-500 text-sm">$</span>
                <input type="number" value={currentSalary} onChange={e => setCurrentSalary(Number(e.target.value))}
                  className="w-full bg-transparent text-white text-lg font-semibold outline-none border-b border-white/20 focus:border-emerald-500 pb-1 transition-colors" />
              </div>
            </div>
            <div className="rounded-2xl bg-white/5 border border-emerald-500/20 p-5 space-y-3">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-emerald-300">One-Time Salary Boost</label>
                <span className="text-emerald-400 font-semibold">{formatCurrency(salaryBoost)}</span>
              </div>
              <input type="range" min={0} max={60000} step={1000} value={salaryBoost}
                onChange={e => setSalaryBoost(Number(e.target.value))}
                className="w-full accent-emerald-500" />
              <p className="text-xs text-slate-500">e.g. a raise you negotiate this year</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-3">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-slate-300">Base Annual Growth Rate</label>
                <span className="text-teal-400 font-semibold">{baseGrowth}%</span>
              </div>
              <input type="range" min={0} max={10} step={0.5} value={baseGrowth}
                onChange={e => setBaseGrowth(Number(e.target.value))}
                className="w-full accent-teal-500" />
            </div>
            <div className="rounded-2xl bg-white/5 border border-cyan-500/20 p-5 space-y-3">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-cyan-300">Additional Growth from Decision</label>
                <span className="text-cyan-400 font-semibold">+{growthBoost}%/yr</span>
              </div>
              <input type="range" min={0} max={5} step={0.25} value={growthBoost}
                onChange={e => setGrowthBoost(Number(e.target.value))}
                className="w-full accent-cyan-500" />
              <p className="text-xs text-slate-500">e.g. faster growth from MBA/reskilling</p>
            </div>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-3">
            <div className="flex justify-between">
              <label className="text-sm font-medium text-slate-300">Projection Horizon</label>
              <span className="text-white font-semibold">{years} years</span>
            </div>
            <input type="range" min={5} max={35} step={1} value={years}
              onChange={e => setYears(Number(e.target.value))}
              className="w-full accent-emerald-500" />
          </div>
        </div>

        {/* Chart */}
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 mb-6">
          <h2 className="text-sm font-medium text-slate-400 mb-4">Cumulative Lifetime Earnings</h2>
          <div className="relative h-48 flex items-end gap-0.5">
            {data.filter((_, i) => i % Math.max(1, Math.floor(years / 40)) === 0 || i === data.length - 1).map((pt) => {
              const bH = (pt.baseline / maxVal) * 100
              const oH = (pt.optimized / maxVal) * 100
              return (
                <div key={pt.year} className="flex-1 flex items-end gap-px group relative">
                  <div className="flex-1 bg-slate-700/50 rounded-t-sm" style={{ height: `${bH}%` }} />
                  <div className="flex-1 bg-linear-to-t from-emerald-600 to-teal-400 rounded-t-sm" style={{ height: `${oH}%` }} />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 pointer-events-none transition-all bg-slate-800 border border-white/10 rounded-lg px-2 py-1 text-xs text-white whitespace-nowrap z-10">
                    Yr {pt.year}: {formatCurrency(pt.optimized)}
                  </div>
                </div>
              )
            })}
          </div>
          <div className="flex justify-between text-xs text-slate-600 mt-2">
            <span>Year 1</span>
            <span>Year {years}</span>
          </div>
          <div className="flex gap-4 mt-3 text-xs">
            <span className="flex items-center gap-1.5"><span className="w-3 h-1.5 rounded bg-slate-600 inline-block" />Without change</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-1.5 rounded bg-emerald-500 inline-block" />With change</span>
          </div>
        </div>

        {/* Summary cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <div className="rounded-2xl bg-emerald-950/40 border border-emerald-500/20 p-5 text-center space-y-1">
            <p className="text-xs text-slate-500 uppercase tracking-wide">Total Gain</p>
            <p className="text-3xl font-bold text-emerald-400">{formatCurrency(diff)}</p>
            <p className="text-xs text-slate-500">over {years} years</p>
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-5 text-center space-y-1">
            <p className="text-xs text-slate-500 uppercase tracking-wide">Baseline Total</p>
            <p className="text-3xl font-bold text-white">{formatCurrency(last.baseline)}</p>
            <p className="text-xs text-slate-500">cumulative earnings</p>
          </div>
          <div className="rounded-2xl bg-teal-950/40 border border-teal-500/20 p-5 text-center space-y-1">
            <p className="text-xs text-slate-500 uppercase tracking-wide">Optimized Total</p>
            <p className="text-3xl font-bold text-teal-400">{formatCurrency(last.optimized)}</p>
            <p className="text-xs text-slate-500">cumulative earnings</p>
          </div>
        </div>

        {/* Milestones */}
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 mb-10">
          <h2 className="text-sm font-semibold text-slate-300 mb-4">Compounding Milestones</h2>
          <div className="space-y-3">
            {milestones.map(y => {
              const pt = data[y - 1]
              if (!pt) return null
              const d = pt.optimized - pt.baseline
              return (
                <div key={y} className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Year {y}</span>
                  <div className="flex gap-6">
                    <span className="text-slate-500">{formatCurrency(pt.baseline)}</span>
                    <span className="text-emerald-400 font-semibold">{formatCurrency(pt.optimized)}</span>
                    <span className="text-teal-300 font-bold">+{formatCurrency(d)}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="rounded-2xl bg-slate-900/60 border border-white/5 p-6 text-sm text-slate-400 leading-relaxed">
          <p className="font-medium text-slate-300 mb-2">Why this matters</p>
          <p>A {formatCurrency(salaryBoost)} raise today doesn&apos;t just pay you {formatCurrency(salaryBoost)} more this year. It becomes the new base that every future raise, bonus, and retirement contribution is calculated from. Over {years} years at {baseGrowth + growthBoost}% growth, the cumulative gap is <strong className="text-emerald-400">{formatCurrency(diff)}</strong>. This is why negotiating your salary matters more than almost any other financial decision.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          {[
            { href: "/salary-benchmark-calculator", label: "Salary Benchmark", desc: "Find your market rate" },
            { href: "/lifetime-earnings-calculator", label: "Lifetime Earnings", desc: "Full trajectory model" },
            { href: "/mba-roi-calculator", label: "MBA ROI Calculator", desc: "Model the salary boost" },
          ].map(item => (
            <Link key={item.href} href={item.href} className="group rounded-xl bg-white/5 border border-white/10 p-4 hover:border-emerald-500/30 transition-all">
              <p className="text-sm font-medium text-white group-hover:text-emerald-300">{item.label}</p>
              <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
