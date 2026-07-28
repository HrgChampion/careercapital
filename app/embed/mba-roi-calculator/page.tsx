"use client"

import { useState } from "react"
import { calculateMBA, calculateScore, type MBAInput } from "@/lib/mbaEngine"

const DEFAULTS: MBAInput = {
  currentSalary: 90000,
  postMbaSalary: 140000,
  mbaCost: 120000,
  programDuration: 2,
  loanPercentage: 0.8,
  interestRate: 0.06,
}

const gradeColor: Record<string, string> = {
  A: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  B: "text-emerald-300 border-emerald-500/25 bg-emerald-500/8",
  C: "text-amber-400 border-amber-500/30 bg-amber-500/10",
  D: "text-orange-400 border-orange-500/30 bg-orange-500/10",
  F: "text-red-400 border-red-500/30 bg-red-500/10",
}

function money(n: number) {
  const sign = n < 0 ? "−$" : "$"
  return `${sign}${Math.round(Math.abs(n)).toLocaleString()}`
}

export default function EmbedMbaRoiCalculator() {
  const [inputs, setInputs] = useState<MBAInput>(DEFAULTS)

  const set = (key: keyof MBAInput, value: number) =>
    setInputs((prev) => ({ ...prev, [key]: value }))

  const result = calculateMBA(inputs)
  const score = calculateScore(result)
  const npv = result.npv ?? 0

  return (
    <main className="min-h-screen bg-slate-950 text-white p-4 sm:p-6">
      <div className="max-w-2xl mx-auto space-y-5">

        <header className="flex items-center justify-between gap-3">
          <h1 className="text-base font-semibold tracking-tight">MBA ROI Calculator</h1>
          <span className="text-[11px] text-slate-500 uppercase tracking-widest">NPV · IRR · Break-even</span>
        </header>

        {/* Inputs */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { key: "currentSalary" as const, label: "Current salary ($/yr)", min: 0, max: 500000, step: 5000 },
            { key: "postMbaSalary" as const, label: "Post-MBA salary ($/yr)", min: 0, max: 600000, step: 5000 },
            { key: "mbaCost" as const, label: "Total MBA cost ($)", min: 0, max: 400000, step: 5000 },
          ].map(({ key, label, min, max, step }) => (
            <label key={key} className="bg-white/5 border border-white/10 rounded-xl p-3 space-y-1.5 block">
              <span className="text-[11px] text-slate-400 uppercase tracking-wide">{label}</span>
              <input
                type="number"
                min={min}
                max={max}
                step={step}
                value={inputs[key]}
                onChange={(e) => set(key, Math.max(min, Math.min(max, Number(e.target.value) || 0)))}
                className="w-full bg-transparent text-white font-semibold text-lg outline-none tabular-nums"
              />
            </label>
          ))}

          <label className="bg-white/5 border border-white/10 rounded-xl p-3 space-y-1.5 block">
            <span className="text-[11px] text-slate-400 uppercase tracking-wide">Program length</span>
            <div className="flex gap-2 pt-1">
              {[1, 2].map((y) => (
                <button
                  key={y}
                  type="button"
                  onClick={() => set("programDuration", y)}
                  className={`flex-1 rounded-lg py-1.5 text-sm font-medium border transition-colors ${
                    inputs.programDuration === y
                      ? "bg-violet-600 border-violet-500 text-white"
                      : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                  }`}
                >
                  {y} yr
                </button>
              ))}
            </div>
          </label>

          <label className="bg-white/5 border border-white/10 rounded-xl p-3 space-y-1.5 block">
            <span className="text-[11px] text-slate-400 uppercase tracking-wide">
              Financed by loan: <span className="text-white font-semibold">{Math.round(inputs.loanPercentage * 100)}%</span>
            </span>
            <input
              type="range"
              min={0}
              max={100}
              step={5}
              value={Math.round(inputs.loanPercentage * 100)}
              onChange={(e) => set("loanPercentage", Number(e.target.value) / 100)}
              className="w-full accent-violet-500"
            />
          </label>

          <label className="bg-white/5 border border-white/10 rounded-xl p-3 space-y-1.5 block">
            <span className="text-[11px] text-slate-400 uppercase tracking-wide">
              Loan interest rate: <span className="text-white font-semibold">{(inputs.interestRate * 100).toFixed(1)}%</span>
            </span>
            <input
              type="range"
              min={0}
              max={15}
              step={0.5}
              value={inputs.interestRate * 100}
              onChange={(e) => set("interestRate", Number(e.target.value) / 100)}
              className="w-full accent-violet-500"
            />
          </label>
        </div>

        {/* Results */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className={`rounded-xl border p-3 ${npv >= 0 ? "bg-emerald-500/10 border-emerald-500/25" : "bg-red-500/10 border-red-500/25"}`}>
            <p className="text-[11px] text-slate-400 uppercase tracking-wide mb-1">10-yr NPV</p>
            <p className={`font-semibold tabular-nums ${npv >= 0 ? "text-emerald-400" : "text-red-400"}`}>{money(npv)}</p>
          </div>
          <div className="rounded-xl bg-white/5 border border-white/10 p-3">
            <p className="text-[11px] text-slate-400 uppercase tracking-wide mb-1">IRR</p>
            <p className="text-white font-semibold tabular-nums">
              {result.irr !== null ? `${(result.irr * 100).toFixed(1)}%` : "N/A"}
            </p>
          </div>
          <div className="rounded-xl bg-white/5 border border-white/10 p-3">
            <p className="text-[11px] text-slate-400 uppercase tracking-wide mb-1">Break-even</p>
            <p className="text-white font-semibold tabular-nums">
              {isFinite(result.paybackPeriod) ? `${result.paybackPeriod.toFixed(1)} yrs` : ">10 yrs"}
            </p>
          </div>
          <div className={`rounded-xl border p-3 ${gradeColor[score.grade]}`}>
            <p className="text-[11px] text-slate-400 uppercase tracking-wide mb-1">Grade</p>
            <p className="font-semibold">{score.grade} <span className="text-xs font-normal">({score.riskLevel} risk)</span></p>
          </div>
        </div>

        <p className="text-slate-400 text-xs leading-relaxed">{score.summary}</p>

        <footer className="flex items-center justify-between gap-3 border-t border-white/10 pt-3">
          <p className="text-[11px] text-slate-500">
            DCF model: 6% discount rate, 5-yr loan amortization, 10-yr horizon.
          </p>
          <a
            href="https://careerreturns.com/mba-roi-calculator?utm_source=embed&utm_medium=widget"
            target="_blank"
            rel="noopener"
            className="text-[11px] text-violet-400 hover:text-violet-300 whitespace-nowrap font-medium"
          >
            Full calculator → CareerReturns
          </a>
        </footer>

      </div>
    </main>
  )
}
