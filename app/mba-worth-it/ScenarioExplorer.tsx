"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { PRESET_SCENARIOS, runMbaScenario, type MbaScenarioInput } from "@/lib/mbaScenarioModel"

/* Deterministic formatting (no locale detection) so server and client render the same text. */
function money(n: number) {
  const sign = n < 0 ? "−" : ""
  const a = Math.abs(n)
  if (a >= 1_000_000) return `${sign}$${(a / 1_000_000).toFixed(2)}M`
  if (a >= 10_000) return `${sign}$${Math.round(a / 1000)}k`
  return `${sign}$${Math.round(a).toLocaleString("en-US")}`
}
function pct(n: number | null) {
  return n === null ? "n/a" : `${(n * 100).toFixed(1)}%`
}
function years(n: number) {
  return isFinite(n) ? `${n.toFixed(1)} yrs` : "Not within 10 yrs"
}

type NumField = {
  key: keyof MbaScenarioInput
  label: string
  step: number
  min: number
  max: number
  /** Displayed and edited as a percentage */
  percent?: boolean
}

const FIELDS: NumField[] = [
  { key: "preSalary", label: "Pre-MBA salary", step: 5000, min: 0, max: 500000 },
  { key: "postSalary", label: "Post-MBA salary", step: 5000, min: 0, max: 600000 },
  { key: "programCost", label: "Tuition + living (after aid)", step: 5000, min: 0, max: 450000 },
  { key: "age", label: "Age at start", step: 1, min: 20, max: 60 },
  { key: "loanPct", label: "Share financed", step: 5, min: 0, max: 100, percent: true },
  { key: "rate", label: "Loan rate", step: 0.25, min: 0, max: 20, percent: true },
  { key: "growthNoMba", label: "Raise rate, no MBA", step: 0.25, min: 0, max: 15, percent: true },
  { key: "growthMba", label: "Raise rate, post-MBA", step: 0.25, min: 0, max: 15, percent: true },
]

function CumulativeChart({ cumulative, startAge }: { cumulative: number[]; startAge: number }) {
  const [hover, setHover] = useState<number | null>(null)
  const W = 600
  const H = 180
  const PAD_L = 8
  const PAD_R = 8
  const PAD_T = 12
  const PAD_B = 22
  const n = cumulative.length
  const maxV = Math.max(0, ...cumulative)
  const minV = Math.min(0, ...cumulative)
  const span = maxV - minV || 1
  const x = (i: number) => PAD_L + (i / Math.max(1, n - 1)) * (W - PAD_L - PAD_R)
  const y = (v: number) => PAD_T + ((maxV - v) / span) * (H - PAD_T - PAD_B)
  const zeroY = y(0)
  const line = cumulative.map((v, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ")
  const area = `${line} L${x(n - 1).toFixed(1)},${zeroY.toFixed(1)} L${x(0).toFixed(1)},${zeroY.toFixed(1)} Z`
  const ticks = [0, Math.round((n - 1) / 2), n - 1]

  const onMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const rel = ((e.clientX - rect.left) / rect.width) * W
    const i = Math.round(((rel - PAD_L) / (W - PAD_L - PAD_R)) * (n - 1))
    setHover(Math.max(0, Math.min(n - 1, i)))
  }

  return (
    <div className="relative">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto touch-none"
        role="img"
        aria-label="Cumulative net earnings gain from the MBA by age, after program cost and loan payments"
        onMouseMove={onMove}
        onMouseLeave={() => setHover(null)}
        onTouchStart={(e) => {
          const t = e.touches[0]
          const rect = e.currentTarget.getBoundingClientRect()
          const rel = ((t.clientX - rect.left) / rect.width) * W
          setHover(Math.max(0, Math.min(n - 1, Math.round(((rel - PAD_L) / (W - PAD_L - PAD_R)) * (n - 1)))))
        }}
      >
        <path d={area} fill="rgb(129 140 248 / 0.15)" />
        <line x1={PAD_L} x2={W - PAD_R} y1={zeroY} y2={zeroY} stroke="rgb(148 163 184 / 0.5)" strokeDasharray="3 3" strokeWidth={1} />
        <text x={W - PAD_R} y={zeroY - 4} textAnchor="end" fontSize={10} fill="rgb(148 163 184)">break-even</text>
        <path d={line} fill="none" stroke="rgb(129 140 248)" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
        {ticks.map((i) => (
          <text key={i} x={x(i)} y={H - 6} textAnchor={i === 0 ? "start" : i === n - 1 ? "end" : "middle"} fontSize={10} fill="rgb(100 116 139)">
            Age {startAge + i + 1}
          </text>
        ))}
        {hover !== null && (
          <g>
            <line x1={x(hover)} x2={x(hover)} y1={PAD_T} y2={H - PAD_B} stroke="rgb(148 163 184 / 0.6)" strokeWidth={1} />
            <circle cx={x(hover)} cy={y(cumulative[hover])} r={4} fill="rgb(129 140 248)" stroke="rgb(2 6 23)" strokeWidth={2} />
          </g>
        )}
      </svg>
      {hover !== null && (
        <div
          className="pointer-events-none absolute top-0 -translate-x-1/2 rounded-lg bg-slate-900 border border-white/15 px-2.5 py-1.5 text-xs whitespace-nowrap"
          style={{ left: `${Math.min(85, Math.max(15, (x(hover) / W) * 100))}%` }}
        >
          <span className="text-slate-400">Age {startAge + hover + 1}: </span>
          <span className="text-white font-semibold tabular-nums">{money(cumulative[hover])}</span>
        </div>
      )}
    </div>
  )
}

export default function ScenarioExplorer() {
  const [presetId, setPresetId] = useState(PRESET_SCENARIOS[0].id)
  const [input, setInput] = useState<MbaScenarioInput>(PRESET_SCENARIOS[0].input)
  const preset = PRESET_SCENARIOS.find((p) => p.id === presetId) ?? PRESET_SCENARIOS[0]
  const r = useMemo(() => runMbaScenario(input), [input])

  const choose = (id: string) => {
    const p = PRESET_SCENARIOS.find((s) => s.id === id)
    if (!p) return
    setPresetId(id)
    setInput(p.input)
  }

  const setField = (f: NumField, raw: string) => {
    const v = Number(raw)
    if (!isFinite(v)) return
    const clamped = Math.max(f.min, Math.min(f.max, v))
    setInput((prev) => ({ ...prev, [f.key]: f.percent ? clamped / 100 : clamped }))
  }

  const milestones = [45, 55, 65]
    .map((age) => ({ age, idx: age - input.age - 1 }))
    .filter((m) => m.idx >= 0 && m.idx < r.cumulative.length)

  const npvColor = r.npv10 >= 0 ? "text-emerald-400" : "text-red-400"

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 space-y-5">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">Interactive: MBA scenario explorer</p>
        <span className="text-[11px] text-slate-500">Same engine as the MBA ROI Calculator</span>
      </div>

      {/* Preset tabs */}
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Sample profiles">
        {PRESET_SCENARIOS.map((p) => (
          <button
            key={p.id}
            type="button"
            role="tab"
            aria-selected={p.id === presetId}
            onClick={() => choose(p.id)}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium border transition-colors ${
              p.id === presetId
                ? "bg-indigo-600 border-indigo-500 text-white"
                : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>
      <p className="text-slate-400 text-xs leading-relaxed">{preset.persona}. Change any input below.</p>

      {/* Inputs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {FIELDS.map((f) => {
          const raw = input[f.key] as number
          const shown = f.percent ? +(raw * 100).toFixed(2) : raw
          return (
            <label key={f.key} className="bg-white/5 border border-white/10 rounded-lg p-2.5 block space-y-1">
              <span className="text-[10px] text-slate-400 uppercase tracking-wide leading-tight block">
                {f.label}
                {f.percent ? " (%)" : ""}
              </span>
              <input
                type="number"
                inputMode="decimal"
                min={f.min}
                max={f.max}
                step={f.step}
                value={shown}
                onChange={(e) => setField(f, e.target.value)}
                className="w-full bg-transparent text-white font-semibold text-sm outline-none tabular-nums"
              />
            </label>
          )
        })}
        <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 space-y-1 col-span-2 sm:col-span-4">
          <span className="text-[10px] text-slate-400 uppercase tracking-wide block">Format</span>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Full-time, 2 yrs", keepsSalary: false, programYears: 2 },
              { label: "Full-time, 1 yr", keepsSalary: false, programYears: 1 },
              { label: "Part-time / online, 3 yrs", keepsSalary: true, programYears: 3 },
            ].map((o) => {
              const active = input.keepsSalary === o.keepsSalary && input.programYears === o.programYears
              return (
                <button
                  key={o.label}
                  type="button"
                  onClick={() => setInput((prev) => ({ ...prev, keepsSalary: o.keepsSalary, programYears: o.programYears }))}
                  className={`rounded-md px-2.5 py-1 text-xs border transition-colors ${
                    active ? "bg-violet-600 border-violet-500 text-white" : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                  }`}
                >
                  {o.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* 10-year DCF snapshot */}
      <div>
        <p className="text-[11px] text-slate-500 uppercase tracking-widest mb-2">10-year DCF snapshot (MBA ROI Calculator view)</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <div className="bg-slate-900/60 border border-white/10 rounded-lg p-3">
            <p className={`font-semibold tabular-nums ${npvColor}`}>{money(r.npv10)}</p>
            <p className="text-slate-500 text-[11px] mt-0.5">NPV at 6%</p>
          </div>
          <div className="bg-slate-900/60 border border-white/10 rounded-lg p-3">
            <p className="font-semibold tabular-nums text-white">{pct(r.irr10)}</p>
            <p className="text-slate-500 text-[11px] mt-0.5">IRR</p>
          </div>
          <div className="bg-slate-900/60 border border-white/10 rounded-lg p-3">
            <p className="font-semibold tabular-nums text-white">{years(r.payback)}</p>
            <p className="text-slate-500 text-[11px] mt-0.5">Payback after graduation</p>
          </div>
          <div className="bg-slate-900/60 border border-white/10 rounded-lg p-3">
            <p className="font-semibold tabular-nums text-white">{money(r.totalEconomicCost)}</p>
            <p className="text-slate-500 text-[11px] mt-0.5">All-in cost incl. lost pay</p>
          </div>
        </div>
      </div>

      {/* Lifetime snapshot */}
      <div className="space-y-2">
        <p className="text-[11px] text-slate-500 uppercase tracking-widest">Lifetime earnings snapshot (to age {input.retireAge})</p>
        <CumulativeChart cumulative={r.cumulative} startAge={input.age} />
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
          <div className="bg-slate-900/60 border border-white/10 rounded-lg p-2.5">
            <p className="text-white font-semibold tabular-nums">{r.crossoverAge ?? "Never"}</p>
            <p className="text-slate-500 text-[11px]">Lifetime break-even age</p>
          </div>
          <div className="bg-slate-900/60 border border-white/10 rounded-lg p-2.5">
            <p className="text-white font-semibold tabular-nums">{money(r.lifetimeGainPV)}</p>
            <p className="text-slate-500 text-[11px]">Lifetime gain, today&apos;s $</p>
          </div>
          {milestones.map((m) => (
            <div key={m.age} className="bg-slate-900/60 border border-white/10 rounded-lg p-2.5">
              <p className="text-white font-semibold tabular-nums">{money(r.cumulative[m.idx])}</p>
              <p className="text-slate-500 text-[11px]">Cumulative by age {m.age}</p>
            </div>
          ))}
        </div>
        <p className="text-slate-600 text-[11px] leading-relaxed">
          Lifetime view: both paths grow at their own raise rates; the MBA path pays tuition and loan payments; figures are nominal
          except &ldquo;today&apos;s $&rdquo;, which is discounted at 6%. Pre-tax. The biggest assumption is that the post-MBA premium
          persists. If your no-MBA path would catch up, set the two raise rates closer together.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <Link
          href="/mba-roi-calculator"
          className="flex-1 text-center rounded-lg bg-linear-to-r from-indigo-600 to-violet-600 hover:opacity-90 px-4 py-2.5 text-sm font-medium text-white"
        >
          Run the full DCF in the MBA ROI Calculator →
        </Link>
        <Link
          href="/lifetime-earnings-calculator"
          className="flex-1 text-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 px-4 py-2.5 text-sm font-medium text-white"
        >
          Model career phases in Lifetime Earnings →
        </Link>
      </div>
    </div>
  )
}
