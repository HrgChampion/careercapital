"use client"

import { useState } from "react"
import {
  calculateMBA,
  calculateScore,
  PROJECTION_YEARS,
  DISCOUNT_RATE,
  LOAN_TERM_YEARS,
  type MBAResult,
  type ScoreResult,
} from "@/lib/mbaEngine"

// ─── Color maps & copy ─────────────────────────────────────────────────────────

const riskCopy: Record<string, string> = {
  Low:      "Low risk — strong return profile relative to cost of capital",
  Moderate: "Moderate risk — acceptable for long-term capital investment",
  High:     "High risk — return assumptions need stress-testing",
}

const gradeColor: Record<string, string> = {
  A: "text-green-400",
  B: "text-blue-400",
  C: "text-yellow-400",
  D: "text-orange-400",
  F: "text-red-500",
}

const riskColor: Record<string, string> = {
  Low: "text-green-400",
  Moderate: "text-yellow-400",
  High: "text-red-400",
}

// ─── Types ─────────────────────────────────────────────────────────────────────

type Inputs = {
  currentSalary: number
  postMbaSalary: number
  mbaCost: number
  programDuration: number
  loanPercentage: number
  interestRate: number
}

const DEFAULTS: Inputs = {
  currentSalary: 90000,
  postMbaSalary: 140000,
  mbaCost: 120000,
  programDuration: 2,
  loanPercentage: 0.8,
  interestRate: 0.06,
}

const STEPS = ["Career", "Cost", "Financing"] as const

// ─── Main component ────────────────────────────────────────────────────────────

export default function Home() {
  const [inputs, setInputs] = useState<Inputs>(DEFAULTS)
  const [step, setStep] = useState(0)
  const [drawerOpen, setDrawerOpen] = useState(false)

  let result: MBAResult | null = null
  let scoreData: ScoreResult | null = null
  try {
    result = calculateMBA(inputs)
    scoreData = calculateScore(result)
  } catch {
    // inputs temporarily invalid (mid-keystroke NaN, etc.) — hold last render
  }

  function set(key: keyof Inputs, value: number) {
    if (!isFinite(value)) return  // silently drop NaN / Infinity
    setInputs(prev => ({ ...prev, [key]: value }))
  }

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* SEO Header */}
        <div className="mb-16 flex items-start justify-between gap-8">
          <section>
            <p className="text-xs font-medium text-purple-400 uppercase tracking-widest mb-3">
              Capital Allocation Simulator
            </p>
            <h1 className="text-4xl font-semibold tracking-tight">MBA ROI Calculator – Is an MBA Worth It?</h1>
            <p className="mt-4 text-slate-400 text-lg leading-relaxed max-w-2xl">
              This MBA ROI calculator helps you determine if an MBA is worth it financially by modeling
              tuition costs, lost income, student loans, and post-MBA salary increases using
              Net Present Value (NPV), Internal Rate of Return (IRR), and break-even analysis.
            </p>
          </section>
          <button
            onClick={() => setDrawerOpen(true)}
            className="shrink-0 text-xs text-slate-400 hover:text-white border border-white/10 rounded-lg px-4 py-2 transition-colors hover:border-white/30"
          >
            Assumptions ↗
          </button>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ── Left: Step Flow ── */}
          <div className="space-y-10">
            <ProgressBar step={step} />
            <StepContent step={step} inputs={inputs} set={set} result={result} />
            <NavButtons step={step} setStep={setStep} />
          </div>

          {/* ── Right: Results Panel (sticky) ── */}
          <div className="sticky top-8">
            <ResultsPanel result={result} scoreData={scoreData} inputs={inputs} />
          </div>

        </div>

        {/* ── Below-fold SEO content ── */}
        <div className="mt-28 border-t border-white/10 pt-20 space-y-20">

          {/* Financial explanation */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-10">How This MBA ROI Calculator Works</h2>
            <div className="grid md:grid-cols-3 gap-8">

              <div className="space-y-3">
                <h3 className="text-base font-semibold text-white">Net Present Value (NPV)</h3>
                <div className="font-mono text-sm text-purple-300 bg-white/5 border border-white/10 rounded-lg px-4 py-3">
                  NPV = Σ CF_t / (1 + r)^t
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Your MBA is modeled as a capital investment. The initial outflow includes tuition,
                  opportunity cost (lost income during the program), and equity paid. Post-graduation
                  cash flows are the salary increase net of loan payments, discounted at 6% per year.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-semibold text-white">Internal Rate of Return (IRR)</h3>
                <div className="font-mono text-sm text-purple-300 bg-white/5 border border-white/10 rounded-lg px-4 py-3">
                  0 = Σ CF_t / (1 + IRR)^t
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  IRR is the annualized return of the MBA investment — the discount rate at which NPV
                  equals zero. It is solved numerically using a bisection method over the full
                  projected cash flow series, not a simplified approximation.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-semibold text-white">Break-Even Period</h3>
                <div className="font-mono text-sm text-purple-300 bg-white/5 border border-white/10 rounded-lg px-4 py-3">
                  t* : cumulative CF(t*) = 0
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  The exact year when cumulative net cash flow crosses zero, computed algorithmically
                  with linear interpolation — not a simple cost-to-salary ratio. This accounts for
                  loan repayment timing, which significantly shifts the break-even point.
                </p>
              </div>

            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-10">Frequently Asked Questions</h2>
            <div className="space-y-8 max-w-3xl">

              <div className="space-y-2">
                <h3 className="text-base font-semibold text-white">Is an MBA worth it financially?</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  It depends on tuition, your pre- and post-MBA salary delta, how much you borrow,
                  and your personal discount rate. This calculator models the MBA as a capital
                  allocation decision — the same framework used to evaluate any long-term investment.
                  A positive NPV means the MBA creates value at your assumed discount rate.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-semibold text-white">What is a good IRR for an MBA?</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Generally, an IRR above your cost of capital (typically 6–8%) indicates value
                  creation. Elite programs with strong placement in finance, consulting, or tech
                  frequently produce IRRs in the 12–20% range. IRR below 6% suggests the financial
                  return alone does not justify the investment.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-semibold text-white">How long does it take to break even on an MBA?</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Most programs break even between 4 and 8 years depending on post-MBA salary uplift,
                  financing structure, and total program cost. This tool computes your specific
                  break-even using an algorithmic cumulative cash flow model, accounting for loan
                  repayment in the early post-graduation years.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-semibold text-white">What discount rate should I use?</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  The model uses 6% as the default discount rate, which approximates a long-run
                  risk-adjusted return on diversified equity investments. If you have high-yield
                  student loan debt, using your loan interest rate as the discount rate is more
                  conservative and appropriate.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-semibold text-white">Is an MBA better than investing in the stock market?</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  It depends on your MBA&apos;s IRR. If your modeled IRR exceeds the long-run equity
                  return (~8%), the MBA generates more value than a passive index fund investment of
                  the same principal. However, equity returns are diversified and liquid — an MBA is
                  a concentrated, illiquid bet on a single career path. A higher IRR alone does not
                  make an MBA the better choice; personal fit, career optionality, and network value
                  also matter. This calculator&apos;s comparison panel shows the exact breakeven point
                  between the two scenarios for your specific inputs.
                </p>
              </div>

            </div>
          </section>

        </div>
      </div>

      {/* Slide-in assumptions drawer */}
      <AssumptionsDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </main>
  )
}

// ─── Progress bar ───────────────────────────────────────────────────────────────

function ProgressBar({ step }: { step: number }) {
  return (
    <div className="flex items-center text-sm">
      {STEPS.map((label, i) => (
        <div key={label} className="flex items-center">
          {i > 0 && (
            <div className={`w-12 h-px mx-3 ${step >= i ? "bg-purple-500/60" : "bg-white/15"}`} />
          )}
          <span className={
            step === i
              ? "text-white font-semibold"
              : step > i
              ? "text-purple-400"
              : "text-slate-600"
          }>
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}

// ─── Step content ───────────────────────────────────────────────────────────────

function StepContent({
  step, inputs, set, result,
}: {
  step: number
  inputs: Inputs
  set: (k: keyof Inputs, v: number) => void
  result: MBAResult | null
}) {
  const monthlyDelta = (inputs.postMbaSalary - inputs.currentSalary) / 12
  const outOfPocket = inputs.mbaCost * (1 - inputs.loanPercentage)
  const financedAmount = inputs.mbaCost * inputs.loanPercentage

  if (step === 0) return (
    <div className="space-y-6">
      <SectionTitle>Your career trajectory</SectionTitle>
      <NumberInput
        label="Current Salary"
        prefix="$"
        value={inputs.currentSalary}
        step={1000}
        onChange={v => set("currentSalary", v)}
        hint={`~$${Math.round(inputs.currentSalary / 12).toLocaleString()}/month baseline income`}
      />
      <NumberInput
        label="Post-MBA Salary"
        prefix="$"
        value={inputs.postMbaSalary}
        step={1000}
        onChange={v => set("postMbaSalary", v)}
        hint={monthlyDelta > 0
          ? `+$${Math.round(monthlyDelta).toLocaleString()}/month after graduation`
          : `−$${Math.round(Math.abs(monthlyDelta)).toLocaleString()}/month vs. current`}
        hintColor={monthlyDelta >= 0 ? "text-emerald-400" : "text-red-400"}
      />
      <NumberInput
        label="Program Duration"
        suffix=" yrs"
        value={inputs.programDuration}
        min={1}
        max={4}
        step={1}
        onChange={v => set("programDuration", v)}
        hint={`$${Math.round(inputs.currentSalary * inputs.programDuration).toLocaleString()} in opportunity cost`}
      />
    </div>
  )

  if (step === 1) return (
    <div className="space-y-6">
      <SectionTitle>Program costs</SectionTitle>
      <NumberInput
        label="Total MBA Cost (tuition + fees)"
        prefix="$"
        value={inputs.mbaCost}
        step={1000}
        onChange={v => set("mbaCost", v)}
        hint={outOfPocket > 0
          ? `$${Math.round(outOfPocket).toLocaleString()} out of pocket at current loan %`
          : "Fully financed at current loan %"}
      />
    </div>
  )

  // step === 2
  return (
    <div className="space-y-6">
      <SectionTitle>Financing structure</SectionTitle>
      <SliderInput
        label="Loan Percentage"
        value={inputs.loanPercentage}
        min={0}
        max={1}
        step={0.05}
        display={`${Math.round(inputs.loanPercentage * 100)}%`}
        onChange={v => set("loanPercentage", v)}
        hint={inputs.loanPercentage > 0
          ? `$${Math.round(financedAmount).toLocaleString()} financed over ${LOAN_TERM_YEARS} years`
          : "Self-funded — no debt"}
      />
      <SliderInput
        label="Interest Rate"
        value={inputs.interestRate}
        min={0.01}
        max={0.2}
        step={0.005}
        display={`${(inputs.interestRate * 100).toFixed(1)}%`}
        onChange={v => set("interestRate", v)}
        hint={result && result.loanDetails.monthlyPayment > 0
          ? `$${Math.round(result.loanDetails.monthlyPayment).toLocaleString()}/month loan payment`
          : "No loan — no payment"}
      />
    </div>
  )
}

// ─── Navigation buttons ─────────────────────────────────────────────────────────

function NavButtons({ step, setStep }: { step: number; setStep: (s: number) => void }) {
  return (
    <div className="flex gap-3">
      {step > 0 && (
        <button
          onClick={() => setStep(step - 1)}
          className="px-5 py-2.5 text-sm text-slate-400 hover:text-white border border-white/10 rounded-xl hover:border-white/30 transition-colors"
        >
          ← Back
        </button>
      )}
      {step < STEPS.length - 1 && (
        <button
          onClick={() => setStep(step + 1)}
          className="px-6 py-3 text-sm bg-linear-to-r from-violet-600 to-indigo-600 hover:opacity-90 text-white rounded-xl transition-opacity font-medium"
        >
          Next →
        </button>
      )}
    </div>
  )
}

// ─── Results panel ──────────────────────────────────────────────────────────────

function ResultsPanel({
  result, scoreData, inputs,
}: {
  result: MBAResult | null
  scoreData: ScoreResult | null
  inputs: Inputs
}) {
  if (!result || !scoreData) return (
    <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl">
      <div className="flex items-center gap-3 text-slate-500">
        <div className="w-2 h-2 rounded-full bg-slate-600 animate-pulse" />
        <p className="text-sm">Complete your inputs to see analysis</p>
      </div>
    </div>
  )

  const npv = result.npv ?? 0

  return (
    <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl space-y-6">

      {/* Grade + Score */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-slate-400 text-xs mb-1">Investment Grade</p>
          <h2 className={`text-9xl font-semibold tracking-tight leading-none ${gradeColor[scoreData.grade] ?? "text-white"}`}>
            {scoreData.grade}
          </h2>
        </div>
        <div className="text-right">
          <p className="text-slate-400 text-xs mb-1">Score</p>
          <p className="text-4xl font-semibold">
            {scoreData.score}<span className="text-xl text-slate-500">/100</span>
          </p>
          <p className={`text-xs font-medium mt-1 ${riskColor[scoreData.riskLevel] ?? "text-slate-400"}`}>
            {riskCopy[scoreData.riskLevel] ?? `Risk: ${scoreData.riskLevel}`}
          </p>
          <p className="text-xs text-slate-500 mt-0.5 max-w-36 text-right">{scoreData.riskFactors}</p>
          <div className="w-44 h-1.5 bg-white/10 rounded-full mt-3 overflow-hidden ml-auto">
            <div
              className="h-full bg-linear-to-r from-purple-500 to-blue-500"
              style={{ width: `${scoreData.score}%` }}
            />
          </div>
        </div>
      </div>

      {/* Verdict card — color shifts on NPV sign */}
      <VerdictCard result={result} />

      {/* Metrics grid */}
      <div className="grid grid-cols-2 gap-3">
        <MetricCard title="Net Present Value">
          <div className="text-lg font-semibold transition-all duration-300 ease-out tabular-nums">${Math.round(npv).toLocaleString()}</div>
        </MetricCard>

        <MetricCard title="IRR">
          <div className="text-lg font-semibold transition-all duration-300 ease-out tabular-nums">
            {result.irr !== null ? `${(result.irr * 100).toFixed(2)}%` : "N/A"}
          </div>
        </MetricCard>

        <MetricCard title="Total Cost">
          <div className="text-lg font-semibold transition-all duration-300 ease-out tabular-nums">${Math.round(result.totalCost).toLocaleString()}</div>
          <div className="text-xs mt-0.5 text-slate-500">
            {inputs.loanPercentage > 0 ? "Financed" : "Self-funded"}
          </div>
        </MetricCard>

        <MetricCard title="Monthly Payment">
          {inputs.loanPercentage === 0 ? (
            <div className="text-sm text-slate-400">No financing</div>
          ) : (
            <div className="text-lg font-semibold transition-all duration-300 ease-out tabular-nums">${Math.round(result.loanDetails.monthlyPayment).toLocaleString()}</div>
          )}
        </MetricCard>

        <MetricCard title="Conservative NPV">
          <div className="text-lg font-semibold transition-all duration-300 ease-out tabular-nums">
            ${Math.round(result.sensitivity.conservative ?? 0).toLocaleString()}
          </div>
        </MetricCard>

        <MetricCard title="Salary Delta">
          <div className="text-lg font-semibold transition-all duration-300 ease-out tabular-nums">
            +${Math.round(result.salaryDelta).toLocaleString()}/yr
          </div>
        </MetricCard>
      </div>

      {/* Cash flow chart */}
      <div className="rounded-xl bg-white/5 border border-white/10 p-4">
        <p className="text-slate-400 text-xs mb-3">Cumulative Cash Flow</p>
        <CashFlowChart cashFlows={result.cashFlows} />
        <p className="text-slate-600 text-xs mt-1 text-right">years</p>
      </div>

      {/* Summary */}
      <div className="text-slate-300 text-sm leading-relaxed border-t border-white/10 pt-5">
        {scoreData.summary}
      </div>

      {/* Alternative investment comparison */}
      <AlternativeComparison mbaCost={inputs.mbaCost} irr={result.irr} />

    </div>
  )
}

// ─── Verdict card ───────────────────────────────────────────────────────────────

function VerdictCard({ result }: { result: MBAResult }) {
  const npv = result.npv ?? 0
  const colorCls =
    npv > 25_000
      ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-300"
      : npv > 0
      ? "bg-amber-500/10 border-amber-500/20 text-amber-300"
      : "bg-red-500/10 border-red-500/20 text-red-300"

  return (
    <div className={`rounded-xl border p-4 space-y-1 transition-all duration-300 ease-out ${colorCls}`}>
      <p className="text-sm">
        {isFinite(result.paybackPeriod)
          ? `Break-even in ${result.paybackPeriod.toFixed(1)} years`
          : "Payback exceeds projection window"}
      </p>
      <p className="text-sm">
        {npv > 0
          ? `Creates $${Math.round(npv).toLocaleString()} in present value`
          : `Destroys $${Math.round(Math.abs(npv)).toLocaleString()} in present value`}
      </p>
    </div>
  )
}

// ─── Alternative investment comparison ──────────────────────────────────────────

function AlternativeComparison({ mbaCost, irr }: { mbaCost: number; irr: number | null }) {
  const EQUITY_RATE = 0.08
  const YEARS = 10
  const altFV = Math.round(mbaCost * Math.pow(1 + EQUITY_RATE, YEARS))
  const irrPct = irr !== null ? irr * 100 : null

  const verdict =
    irr === null
      ? null
      : irr > EQUITY_RATE
      ? { text: "Your MBA outperforms passive equity investment at this discount rate.", color: "text-emerald-400" }
      : irr > 0
      ? { text: "Passive equity investment outperforms this MBA scenario at this discount rate.", color: "text-amber-400" }
      : { text: "This MBA scenario does not generate a positive return.", color: "text-red-400" }

  return (
    <div className="rounded-xl bg-white/5 border border-white/10 p-4 space-y-3 border-t-0">
      <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">Compare to Alternative Investment</p>
      <p className="text-slate-300 text-sm leading-relaxed">
        If{" "}
        <span className="text-white font-medium">${Math.round(mbaCost).toLocaleString()}</span>
        {" "}invested at 8% for 10 years grows to{" "}
        <span className="text-white font-medium tabular-nums">${altFV.toLocaleString()}</span>.
        {irrPct !== null && (
          <> Your MBA&rsquo;s modeled IRR: <span className="text-purple-300 font-medium tabular-nums">{irrPct.toFixed(1)}%</span>.</>
        )}
      </p>
      {verdict && <p className={`text-xs font-medium ${verdict.color}`}>{verdict.text}</p>}
    </div>
  )
}

// ─── Cash flow chart ────────────────────────────────────────────────────────────

function CashFlowChart({ cashFlows }: { cashFlows: number[] }) {
  const years = Array.from({ length: cashFlows.length }, (_, i) => i)
  const cumulative = years.map(i => cashFlows.slice(0, i + 1).reduce((a, b) => a + b, 0))

  const minVal = Math.min(...cumulative)
  const maxVal = Math.max(...cumulative)
  const range = maxVal - minVal || 1

  const W = 400, H = 110
  const padL = 8, padR = 8, padT = 8, padB = 22

  const toX = (y: number) => padL + (y / PROJECTION_YEARS) * (W - padL - padR)
  const toY = (v: number) => padT + (1 - (v - minVal) / range) * (H - padT - padB)

  const zeroY = toY(0)
  const showZeroLine = zeroY >= padT && zeroY <= H - padB
  const points = years.map(y => `${toX(y)},${toY(cumulative[y])}`).join(" ")

  let breakEvenX: number | null = null
  for (let i = 1; i < cumulative.length; i++) {
    if (cumulative[i] >= 0 && cumulative[i - 1] < 0) {
      const frac = -cumulative[i - 1] / (cumulative[i] - cumulative[i - 1])
      breakEvenX = toX(i - 1 + frac)
      break
    }
  }

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" aria-label="Cumulative cash flow chart">
      {/* Horizontal grid lines at 25%, 50%, 75% of chart height */}
      {[0.25, 0.5, 0.75].map(frac => {
        const gy = padT + frac * (H - padT - padB)
        return (
          <line key={frac} x1={padL} y1={gy} x2={W - padR} y2={gy}
            stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3,4" />
        )
      })}
      {showZeroLine && (
        <line
          x1={padL} y1={zeroY} x2={W - padR} y2={zeroY}
          stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="4,3"
        />
      )}
      <polyline
        points={points}
        fill="none"
        stroke="rgba(139,92,246,0.9)"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {breakEvenX !== null && showZeroLine && (
        <>
          <circle cx={breakEvenX} cy={zeroY} r="7" fill="rgba(167,139,250,0.2)"
            style={{ transition: 'cx 0.3s ease-out' }} />
          <circle cx={breakEvenX} cy={zeroY} r="4.5" fill="#a78bfa"
            style={{ transition: 'cx 0.3s ease-out' }} />
        </>
      )}
      {[0, 2, 4, 6, 8, 10].map(y => (
        <text key={y} x={toX(y)} y={H - 5} textAnchor="middle" fill="rgba(156,163,175,0.55)" fontSize="9">
          {y}
        </text>
      ))}
    </svg>
  )
}

// ─── Assumptions drawer ─────────────────────────────────────────────────────────

function AssumptionsDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
      )}
      <div className={`fixed right-0 top-0 h-full w-88 bg-slate-950 border-l border-white/10 p-8 z-50 transition-transform duration-300 overflow-y-auto ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-semibold">Model Assumptions</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white text-xl leading-none">×</button>
        </div>

        <div className="space-y-5 text-sm">
          <AssumptionRow label="Discount Rate" value={`${(DISCOUNT_RATE * 100).toFixed(1)}%`} />
          <AssumptionRow label="Projection Period" value={`${PROJECTION_YEARS} years`} />
          <AssumptionRow label="Loan Term" value={`${LOAN_TERM_YEARS} years`} />
          <hr className="border-white/10" />
          <AssumptionRow label="NPV Model" value="Variable cash flow series" />
          <AssumptionRow label="CF₀" value="Equity paid + lost income" />
          <AssumptionRow label="CF₁₋₅" value="Salary delta − loan payments" />
          <AssumptionRow label="CF₆₋₁₀" value="Salary delta (debt-free)" />
          <hr className="border-white/10" />
          <AssumptionRow label="IRR Solver" value="Bisection (tol 1e-7, 200 iter)" />
          <AssumptionRow label="Break-even" value="Algorithmic cumulative CF" />
          <AssumptionRow label="Loan Formula" value="PMT = rL / (1−(1+r)^−n)" />
          <AssumptionRow label="Sensitivity" value="±10% salary delta" />
        </div>
      </div>
    </>
  )
}

function AssumptionRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-start gap-4">
      <span className="text-slate-400">{label}</span>
      <span className="text-white text-right">{value}</span>
    </div>
  )
}

// ─── Shared primitives ──────────────────────────────────────────────────────────

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-semibold text-white">{children}</h3>
  )
}

function MetricCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl bg-white/5 border border-white/10 p-4">
      <p className="text-slate-400 text-xs mb-2">{title}</p>
      {children}
    </div>
  )
}

function NumberInput({
  label, value, prefix, suffix, min, max, step = 1000, onChange, hint, hintColor = "text-slate-400",
}: {
  label: string
  value: number
  prefix?: string
  suffix?: string
  min?: number
  max?: number
  step?: number
  onChange: (v: number) => void
  hint?: string
  hintColor?: string
}) {
  return (
    <div>
      <label className="block text-sm text-slate-400 mb-1.5">{label}</label>
      <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus-within:border-purple-500/60 transition-colors">
        {prefix && <span className="text-slate-500 mr-2 text-sm">{prefix}</span>}
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={e => onChange(Number(e.target.value))}
          className="bg-transparent w-full text-white text-base outline-none"
        />
        {suffix && <span className="text-slate-500 ml-2 text-sm">{suffix}</span>}
      </div>
      {hint && <p className={`text-xs mt-1.5 ${hintColor}`}>{hint}</p>}
    </div>
  )
}

function SliderInput({
  label, value, min, max, step, display, onChange, hint,
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  display: string
  onChange: (v: number) => void
  hint?: string
}) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-slate-400">{label}</span>
        <span className="text-white font-medium tabular-nums">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="w-full accent-purple-500"
      />
      {hint && <p className="text-xs mt-1.5 text-slate-400">{hint}</p>}
    </div>
  )
}
