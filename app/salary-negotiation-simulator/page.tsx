"use client"

import Link from "next/link"
import { useState, useMemo } from "react"

function formatCurrency(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`
  if (n >= 1_000) return `$${Math.round(n / 1_000)}K`
  return `$${Math.round(n)}`
}

function npvOfSalaryDelta(delta: number, years = 10, rate = 0.08): number {
  let npv = 0
  for (let y = 1; y <= years; y++) {
    npv += delta / Math.pow(1 + rate, y)
  }
  return npv
}

type NegStep = {
  hrLine: string
  options: { text: string; nextId: string; salaryGained: number; label?: string }[]
}

function buildScript(offer: number): Record<string, NegStep> {
  const above = Math.round(offer * 1.12 / 1000) * 1000
  const mid = Math.round(offer * 1.07 / 1000) * 1000
  const small = Math.round(offer * 1.03 / 1000) * 1000

  return {
    start: {
      hrLine: `"We'd like to offer you the position at ${formatCurrency(offer)} base salary. Are you interested in moving forward?"`,
      options: [
        { text: `"Yes, I accept ${formatCurrency(offer)}."`, nextId: "accepted_low", salaryGained: 0, label: "Accept immediately" },
        { text: `"I'm very excited about the role. I was expecting something closer to ${formatCurrency(above)} based on my research. Is there flexibility?"`, nextId: "counter_high", salaryGained: 0, label: "Counter with market research" },
        { text: `"Thank you. I need 48 hours to review the full package."`, nextId: "delay", salaryGained: 0, label: "Buy time" },
      ],
    },
    accepted_low: {
      hrLine: `"Great! We'll send the offer letter right away."`,
      options: [
        { text: "Sign and start", nextId: "end_no_gain", salaryGained: 0, label: "Done" },
      ],
    },
    delay: {
      hrLine: `"Of course, take your time. We do have other candidates, so we'd appreciate a response by Friday."`,
      options: [
        { text: `"After reviewing, I'd like to request ${formatCurrency(mid)} — I have competing offers in that range."`, nextId: "counter_mid_late", salaryGained: 0, label: "Counter after delay" },
        { text: `"I'll accept at ${formatCurrency(offer)}."`, nextId: "accepted_low", salaryGained: 0, label: "Accept" },
      ],
    },
    counter_high: {
      hrLine: `"I appreciate you sharing that. We're limited in budget but can possibly stretch to ${formatCurrency(small)}. Would that work?"`,
      options: [
        { text: `"I really appreciate that. I still feel ${formatCurrency(mid)} better reflects what I bring. Is there any additional flexibility?"`, nextId: "counter_mid", salaryGained: small - offer, label: "Push further" },
        { text: `"${formatCurrency(small)} works for me. Thank you."`, nextId: "end_small_gain", salaryGained: small - offer, label: "Accept the stretch" },
        { text: `"Could we also discuss signing bonus or earlier review?"`, nextId: "bonus_route", salaryGained: small - offer, label: "Pivot to bonus" },
      ],
    },
    counter_mid: {
      hrLine: `"Let me speak with the hiring manager. I can get back to you tomorrow."`,
      options: [
        { text: `"Of course, thank you for advocating. I'm committed to this role."`, nextId: "end_mid_gain", salaryGained: mid - offer, label: "Wait confidently" },
        { text: `"I understand. ${formatCurrency(small)} is fine — let's move forward."`, nextId: "end_small_gain", salaryGained: small - offer, label: "Accept current offer" },
      ],
    },
    counter_mid_late: {
      hrLine: `"We can do ${formatCurrency(small)}, but that's our firm maximum."`,
      options: [
        { text: `"I understand. I'll accept ${formatCurrency(small)}."`, nextId: "end_small_gain", salaryGained: small - offer, label: "Accept" },
        { text: `"Could we offset the remainder with a signing bonus?"`, nextId: "bonus_route", salaryGained: small - offer, label: "Request signing bonus" },
      ],
    },
    bonus_route: {
      hrLine: `"A signing bonus is possible. We could do ${formatCurrency(Math.round(offer * 0.05))} as a one-time bonus."`,
      options: [
        { text: `"That works well. I'll accept."`, nextId: "end_bonus", salaryGained: small - offer, label: "Accept package" },
      ],
    },
    end_no_gain: {
      hrLine: `"Welcome aboard!"`,
      options: [],
    },
    end_small_gain: {
      hrLine: `"We're delighted to have you. Welcome to the team!"`,
      options: [],
    },
    end_mid_gain: {
      hrLine: `"Great news — the hiring manager approved ${formatCurrency(mid)}. We're thrilled to welcome you."`,
      options: [],
    },
    end_bonus: {
      hrLine: `"Perfect — we'll include the signing bonus in the offer letter. Looking forward to working with you."`,
      options: [],
    },
  }
}

export default function SalaryNegotiationSimulatorPage() {
  const [offer, setOffer] = useState(95000)
  const [started, setStarted] = useState(false)
  const [currentStep, setCurrentStep] = useState("start")
  const [history, setHistory] = useState<{ speaker: "hr" | "you"; text: string }[]>([])
  const [totalGained, setTotalGained] = useState(0)
  const [finished, setFinished] = useState(false)

  const script = useMemo(() => buildScript(offer), [offer])

  function start() {
    setStarted(true)
    setCurrentStep("start")
    setHistory([{ speaker: "hr", text: script["start"].hrLine }])
    setTotalGained(0)
    setFinished(false)
  }

  function choose(opt: { text: string; nextId: string; salaryGained: number }) {
    const next = script[opt.nextId]
    const newGained = totalGained + opt.salaryGained
    const newHistory = [
      ...history,
      { speaker: "you" as const, text: opt.text },
      ...(next ? [{ speaker: "hr" as const, text: next.hrLine }] : []),
    ]
    setHistory(newHistory)
    setTotalGained(newGained)
    setCurrentStep(opt.nextId)
    if (!next || next.options.length === 0) {
      setFinished(true)
    }
  }

  const step = script[currentStep]
  const lifetimeNPV = npvOfSalaryDelta(totalGained)

  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-150 h-150 bg-blue-600/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Link href="/" className="text-xs text-slate-500 hover:text-slate-300 transition-colors mb-8 inline-block">← CareerReturns</Link>

        <p className="text-xs font-medium text-blue-400 uppercase tracking-widest mb-3">Simulator</p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight bg-linear-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mb-4">
          Salary Negotiation<br />Simulator
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl">
          Practice the conversation before it matters. Each choice shows the 10-year NPV impact in real time — because negotiating is just applied financial modeling.
        </p>

        {!started && (
          <div className="space-y-6">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-4">
              <label className="text-sm font-medium text-slate-300">What&apos;s the offer they put on the table?</label>
              <div className="flex items-center gap-3">
                <span className="text-slate-500">$</span>
                <input
                  type="number"
                  value={offer}
                  onChange={e => setOffer(Number(e.target.value))}
                  className="w-full bg-transparent text-white text-2xl font-bold outline-none border-b border-white/20 focus:border-blue-500 pb-1 transition-colors"
                />
              </div>
              <p className="text-xs text-slate-500">The HR manager just said this number. What do you do next?</p>
            </div>

            <div className="rounded-2xl bg-blue-950/30 border border-blue-500/20 p-5 text-sm text-slate-300 space-y-2">
              <p className="font-medium text-blue-300">Why this matters financially</p>
              <p>Accepting {formatCurrency(offer)} vs. negotiating to {formatCurrency(Math.round(offer * 1.07))} ({formatCurrency(Math.round(offer * 0.07))} more):</p>
              <p className="text-blue-400 font-semibold text-lg">10-year NPV: {formatCurrency(npvOfSalaryDelta(Math.round(offer * 0.07)))}</p>
              <p className="text-slate-500 text-xs">Assumes 8% discount rate, 3% annual raises on the new base</p>
            </div>

            <button
              onClick={start}
              className="w-full bg-linear-to-r from-blue-600 to-cyan-600 hover:opacity-90 transition-all py-4 rounded-xl font-semibold text-white shadow-[0_0_60px_rgba(59,130,246,0.3)]"
            >
              Start the Negotiation →
            </button>
          </div>
        )}

        {started && (
          <div className="space-y-6">
            {/* NPV tracker */}
            <div className={`rounded-xl px-5 py-3 flex justify-between items-center transition-all ${
              totalGained > 0 ? "bg-emerald-950/40 border border-emerald-500/30" : "bg-white/5 border border-white/10"
            }`}>
              <p className="text-sm text-slate-400">Salary gained so far</p>
              <div className="text-right">
                <p className={`font-bold text-lg ${totalGained > 0 ? "text-emerald-400" : "text-slate-500"}`}>
                  +{formatCurrency(totalGained)}/yr
                </p>
                {totalGained > 0 && (
                  <p className="text-xs text-slate-500">10-yr NPV: {formatCurrency(lifetimeNPV)}</p>
                )}
              </div>
            </div>

            {/* Conversation */}
            <div className="space-y-4 max-h-96 overflow-y-auto pr-1">
              {history.map((msg, i) => (
                <div key={i} className={`flex ${msg.speaker === "you" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-xs sm:max-w-sm rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.speaker === "hr"
                      ? "bg-slate-800 text-slate-300 rounded-tl-sm"
                      : "bg-linear-to-br from-blue-600 to-cyan-600 text-white rounded-tr-sm"
                  }`}>
                    {msg.speaker === "hr" && <p className="text-xs text-slate-500 mb-1 font-medium">HR Manager</p>}
                    {msg.speaker === "you" && <p className="text-xs text-cyan-200/70 mb-1 font-medium">You</p>}
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Options */}
            {!finished && step && step.options.length > 0 && (
              <div className="space-y-3">
                <p className="text-xs text-slate-500 uppercase tracking-wide">Your response:</p>
                {step.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => choose(opt)}
                    className="w-full text-left rounded-xl border border-white/10 hover:border-blue-500/40 bg-white/5 hover:bg-white/8 p-4 text-sm text-slate-300 hover:text-white transition-all group"
                  >
                    {opt.label && <p className="text-xs text-blue-400 mb-1 font-medium">{opt.label}</p>}
                    {opt.text}
                    {opt.salaryGained > 0 && (
                      <p className="text-xs text-emerald-400 mt-1">+{formatCurrency(opt.salaryGained)}/yr gained</p>
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* Outcome */}
            {finished && (
              <div className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-4">
                <p className="text-xs font-medium text-slate-400 uppercase tracking-widest">Negotiation Complete</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-xs text-slate-500 mb-1">Final salary</p>
                    <p className="text-2xl font-bold text-white">{formatCurrency(offer + totalGained)}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-slate-500 mb-1">10-yr NPV gained</p>
                    <p className={`text-2xl font-bold ${totalGained > 0 ? "text-emerald-400" : "text-slate-500"}`}>
                      {totalGained > 0 ? `+${formatCurrency(lifetimeNPV)}` : "$0"}
                    </p>
                  </div>
                </div>
                {totalGained === 0 && (
                  <p className="text-sm text-yellow-400/80">You left {formatCurrency(npvOfSalaryDelta(Math.round(offer * 0.07)))} on the table by not negotiating. Try again.</p>
                )}
                {totalGained > 0 && (
                  <p className="text-sm text-emerald-400/80">A {formatCurrency(totalGained)}/yr raise creates {formatCurrency(lifetimeNPV)} in 10-year NPV. Every negotiation compounds.</p>
                )}
                <div className="flex gap-3">
                  <button onClick={start} className="flex-1 border border-white/20 hover:border-white/40 py-3 rounded-xl text-sm text-slate-300 hover:text-white transition-all">
                    Try Again
                  </button>
                  <Link href="/salary-benchmark-calculator" className="flex-1 text-center bg-linear-to-r from-blue-600 to-cyan-600 py-3 rounded-xl text-sm font-medium hover:opacity-90 transition-all">
                    Check Market Rate →
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          {[
            { href: "/salary-benchmark-calculator", label: "Salary Benchmark", desc: "Find your market rate" },
            { href: "/career-compounder", label: "Career Compounder", desc: "Model compounding gains" },
            { href: "/career-roi-score", label: "Career ROI Score", desc: "Your career health score" },
          ].map(item => (
            <Link key={item.href} href={item.href} className="group rounded-xl bg-white/5 border border-white/10 p-4 hover:border-blue-500/30 transition-all">
              <p className="text-sm font-medium text-white group-hover:text-blue-300">{item.label}</p>
              <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
