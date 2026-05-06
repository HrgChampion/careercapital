"use client"

import Link from "next/link"
import { useState } from "react"

type Myth = {
  id: number
  myth: string
  choices: string[]
  correctIndex: number
  reality: string
  source: string
  relatedTool?: { href: string; label: string }
}

const MYTHS: Myth[] = [
  {
    id: 1,
    myth: "An MBA from any accredited school pays off financially.",
    choices: ["True — all MBAs provide a salary boost", "False — program tier and target industry determine if it pays off", "It depends only on your major"],
    correctIndex: 1,
    reality: "Non-target school MBAs in low-delta industries (nonprofit, government) often have negative NPV after 10 years. Break-even can exceed 13 years — which means many people never recover costs before switching careers again.",
    source: "GMAC Employment Report 2024 + CareerReturns DCF model",
    relatedTool: { href: "/mba-roi-calculator", label: "Calculate your MBA NPV →" },
  },
  {
    id: 2,
    myth: "Taking an MBA at 35+ is too late — the ROI math doesn't work.",
    choices: ["True — payback period exceeds remaining career years", "False — career runway still produces positive NPV in high-delta fields", "Only true if you have debt"],
    correctIndex: 1,
    reality: "A 35-year-old entering MBB consulting has ~27 years of earning runway. At a $75K salary delta, the 10-year NPV is still $380K+. The math works — but margin for error is smaller, so school and industry selection becomes critical.",
    source: "CareerReturns MBA ROI Model, 2026 data",
    relatedTool: { href: "/mba-roi-calculator", label: "Run the numbers →" },
  },
  {
    id: 3,
    myth: "The average MBA salary increase is about 20%.",
    choices: ["True — consistent across industries", "False — it varies from 15% to over 100% by industry", "False — it's actually negative in some fields"],
    correctIndex: 1,
    reality: "MBB consulting delivers $80–90K annual delta (often 80–120% increase). General management delivers $35–50K (20–40%). Nonprofit can be under $15K. Industry selection drives more of your ROI than the school you attend.",
    source: "GMAC 2024, Glassdoor, Levels.fyi",
    relatedTool: { href: "/mba-salary-increase", label: "MBA salary by industry →" },
  },
  {
    id: 4,
    myth: "Career gaps of 2+ years make it impossible to get a good MBA job offer.",
    choices: ["True — recruiters screen out gaps", "False — gaps are recoverable with the right program and narrative", "Only true at M7 schools"],
    correctIndex: 1,
    reality: "Career returners enter MBAs specifically to re-launch. Schools like Wharton, Booth, and HBS all have dedicated career re-entry resources. A gap with a clear narrative (caregiving, health, entrepreneurship) rarely disqualifies — especially in tech, consulting, and healthcare.",
    source: "MBA Admissions data, 2024–2025",
    relatedTool: { href: "/career-gap-calculator", label: "Model gap recovery →" },
  },
  {
    id: 5,
    myth: "Online MBAs provide the same ROI as full-time residential programs.",
    choices: ["True — employers don't care about format anymore", "False — network and recruiting access differ significantly", "True only for tech companies"],
    correctIndex: 1,
    reality: "Online MBAs cost 40–60% less, but recruiting access to MBB, top IB, and top PE firms remains limited to on-campus programs. For general management and tech PM roles, online programs now deliver comparable outcomes at 40% of the cost.",
    source: "GMAC Online MBA Employment Report 2024",
    relatedTool: { href: "/mba-roi-online-vs-full-time", label: "Online vs full-time ROI →" },
  },
  {
    id: 6,
    myth: "Paying for an MBA with full debt is always a bad financial decision.",
    choices: ["Always bad — never take full debt", "Sometimes good — depends on salary delta and career track", "Always fine — MBA always pays off"],
    correctIndex: 1,
    reality: "At $185K debt entering MBB consulting at $175K base salary, break-even is ~4.5 years and 10-year NPV is $300K+. The debt is manageable. The same debt entering nonprofit with a $20K salary delta: never recovers. Debt is a tool — the career track is the variable.",
    source: "CareerReturns MBA ROI Model — $100K Debt scenario",
    relatedTool: { href: "/mba-roi-100k-debt", label: "MBA with $100K debt →" },
  },
  {
    id: 7,
    myth: "Engineers shouldn't get MBAs — they already earn too much for it to pay off.",
    choices: ["True — SWE salaries are too high to benefit", "False — the transition to PM or consulting unlocks significant delta", "Only true at FAANG companies"],
    correctIndex: 1,
    reality: "A senior SWE earning $180K who transitions to MBB post-MBA earns $185K + $80K bonus. The delta narrows, but the career optionality value — partner tracks, PE/VC access, board roles — often exceeds the financial model alone.",
    source: "CareerReturns MBA ROI for Engineers model",
    relatedTool: { href: "/mba-roi-engineers", label: "MBA ROI for engineers →" },
  },
  {
    id: 8,
    myth: "A scholarship that cuts MBA cost in half always makes a lower-ranked school the better choice.",
    choices: ["True — lower cost = better ROI automatically", "False — salary delta differences can outweigh cost savings", "True only if you have debt aversion"],
    correctIndex: 1,
    reality: "M7 with full debt vs. Top-25 with 50% scholarship: if the M7 unlocks MBB recruiting and the Top-25 doesn't, the NPV difference can be $200K+ over 10 years — far exceeding the $80K tuition discount. Model both scenarios before deciding.",
    source: "CareerReturns MBA Scholarship ROI model",
    relatedTool: { href: "/mba-roi-scholarship", label: "Scholarship ROI calculator →" },
  },
  {
    id: 9,
    myth: "Returnship programs are mostly symbolic — they rarely lead to permanent jobs.",
    choices: ["True — conversion rates are under 30%", "False — top programs have 70–85% conversion rates", "It depends on gender"],
    correctIndex: 1,
    reality: "Amazon, Goldman Sachs, and McKinsey returnship programs report 70–85% full-time conversion. The key signal: companies with dedicated returnship teams treat the program as recruiting, not PR. Programs without dedicated coordinators convert at <40%.",
    source: "iRelaunch 2024 Corporate Returnship Report",
    relatedTool: { href: "/returnship-roi-calculator", label: "Analyze a returnship program →" },
  },
  {
    id: 10,
    myth: "The MBA ROI calculation is simple: salary increase minus tuition.",
    choices: ["True — that's all you need", "False — you must discount future cash flows and include opportunity cost", "Close enough for decision-making"],
    correctIndex: 1,
    reality: "A naive calculation ignores: (1) opportunity cost of 2 years of lost income, (2) time value of money via DCF, (3) loan interest compounding, (4) tax treatment of tuition, (5) signing bonuses timing, and (6) career-stage salary growth differential. The correct method is NPV/IRR — which can shift the answer by $100K+.",
    source: "CareerReturns DCF Methodology",
    relatedTool: { href: "/mba-roi-calculator", label: "Use proper DCF calculator →" },
  },
]

export default function MBAMythBusterPage() {
  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answers, setAnswers] = useState<boolean[]>([])
  const [finished, setFinished] = useState(false)

  const myth = MYTHS[currentQ]
  const isAnswered = selected !== null
  const isCorrect = selected === myth.correctIndex

  function handleSelect(idx: number) {
    if (isAnswered) return
    setSelected(idx)
  }

  function handleNext() {
    const newAnswers = [...answers, selected === myth.correctIndex]
    setAnswers(newAnswers)
    if (currentQ + 1 >= MYTHS.length) {
      setFinished(true)
    } else {
      setCurrentQ(currentQ + 1)
      setSelected(null)
    }
  }

  function handleRestart() {
    setCurrentQ(0)
    setSelected(null)
    setAnswers([])
    setFinished(false)
  }

  const correctCount = answers.filter(Boolean).length

  if (finished) {
    const pct = Math.round((correctCount / MYTHS.length) * 100)
    let verdict = ""
    let color = ""
    if (pct >= 80) { verdict = "MBA Myth Expert"; color = "text-emerald-400" }
    else if (pct >= 60) { verdict = "Mostly Informed"; color = "text-teal-400" }
    else if (pct >= 40) { verdict = "Partially Misinformed"; color = "text-yellow-400" }
    else { verdict = "Significantly Misinformed"; color = "text-orange-400" }

    return (
      <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-150 h-150 bg-indigo-600/15 rounded-full blur-[120px] -z-10" />
        <div className="max-w-2xl mx-auto px-4 py-16 sm:py-24 text-center space-y-8">
          <Link href="/" className="text-xs text-slate-500 hover:text-slate-300 transition-colors mb-4 inline-block">← CareerReturns</Link>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-10 space-y-6">
            <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">Quiz Complete</p>
            <p className="text-6xl font-bold">{correctCount}<span className="text-slate-500 text-3xl">/{MYTHS.length}</span></p>
            <p className={`text-2xl font-semibold ${color}`}>{verdict}</p>
            <p className="text-slate-400">You correctly identified {pct}% of MBA myths. {pct < 60 ? "Many common beliefs about MBA ROI are based on averages that hide enormous variance by industry and school tier." : "You have a strong grasp of how MBA ROI actually works."}</p>
            <div className="grid grid-cols-5 gap-2 pt-2">
              {answers.map((correct, i) => (
                <div key={i} className={`h-2 rounded-full ${correct ? "bg-emerald-500" : "bg-red-500/60"}`} />
              ))}
            </div>
            <div className="flex gap-3 flex-wrap justify-center pt-4">
              <button onClick={handleRestart} className="bg-linear-to-r from-indigo-600 to-violet-600 px-6 py-3 rounded-xl font-medium text-sm hover:opacity-90 transition-all">
                Retake Quiz
              </button>
              <Link href="/mba-roi-calculator" className="border border-white/20 hover:border-white/40 px-6 py-3 rounded-xl font-medium text-sm transition-all">
                Calculate MBA ROI →
              </Link>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 text-left">
            {[
              { href: "/mba-roi-calculator", label: "MBA ROI Calculator", desc: "DCF-based NPV & IRR" },
              { href: "/mba-worth-it", label: "Is MBA Worth It?", desc: "Full financial breakdown" },
              { href: "/mba-roi-report-2026", label: "MBA ROI Report 2026", desc: "Data-driven analysis" },
            ].map(item => (
              <Link key={item.href} href={item.href} className="group rounded-xl bg-white/5 border border-white/10 p-4 hover:border-indigo-500/30 transition-all">
                <p className="text-sm font-medium text-white group-hover:text-indigo-300">{item.label}</p>
                <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-150 h-150 bg-indigo-600/15 rounded-full blur-[120px] -z-10" />

      <div className="max-w-2xl mx-auto px-4 py-16 sm:py-24">
        <Link href="/" className="text-xs text-slate-500 hover:text-slate-300 transition-colors mb-8 inline-block">← CareerReturns</Link>

        <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-3">Interactive Quiz</p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight bg-linear-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent mb-4">
          MBA Myth Buster
        </h1>
        <p className="text-slate-400 mb-10">
          10 common beliefs about MBA ROI. How many are actually true? Each reveal is backed by real data.
        </p>

        {/* Progress */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex-1 bg-slate-800 rounded-full h-1.5">
            <div
              className="h-1.5 rounded-full bg-linear-to-r from-indigo-500 to-violet-500 transition-all duration-500"
              style={{ width: `${((currentQ) / MYTHS.length) * 100}%` }}
            />
          </div>
          <span className="text-xs text-slate-500 shrink-0">{currentQ + 1} / {MYTHS.length}</span>
        </div>

        {/* Question card */}
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8 space-y-6">
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">Myth #{myth.id}</p>
            <p className="text-xl font-semibold text-white leading-snug">&ldquo;{myth.myth}&rdquo;</p>
          </div>

          <div className="space-y-3">
            {myth.choices.map((choice, idx) => {
              let cls = "rounded-xl border p-4 text-sm text-left w-full transition-all cursor-pointer "
              if (!isAnswered) {
                cls += "bg-white/5 border-white/10 hover:border-indigo-500/40 hover:bg-white/8"
              } else if (idx === myth.correctIndex) {
                cls += "bg-emerald-950/40 border-emerald-500/50 text-emerald-300"
              } else if (idx === selected) {
                cls += "bg-red-950/40 border-red-500/40 text-red-300"
              } else {
                cls += "bg-white/3 border-white/5 text-slate-500"
              }
              return (
                <button key={idx} className={cls} onClick={() => handleSelect(idx)}>
                  <span className="font-mono text-xs mr-2 opacity-50">{String.fromCharCode(65 + idx)}.</span>
                  {choice}
                </button>
              )
            })}
          </div>

          {isAnswered && (
            <div className={`rounded-xl p-5 space-y-3 ${isCorrect ? "bg-emerald-950/30 border border-emerald-500/20" : "bg-slate-900/60 border border-white/10"}`}>
              <div className="flex items-center gap-2">
                <span className={`text-sm font-semibold ${isCorrect ? "text-emerald-400" : "text-yellow-400"}`}>
                  {isCorrect ? "✓ Correct" : "✗ Common Misconception"}
                </span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{myth.reality}</p>
              <p className="text-xs text-slate-600">Source: {myth.source}</p>
              {myth.relatedTool && (
                <Link href={myth.relatedTool.href} className="text-xs text-indigo-400 hover:underline">
                  {myth.relatedTool.label}
                </Link>
              )}
            </div>
          )}

          {isAnswered && (
            <button
              onClick={handleNext}
              className="w-full bg-linear-to-r from-indigo-600 to-violet-600 hover:opacity-90 transition-all py-3 rounded-xl font-semibold text-white text-sm"
            >
              {currentQ + 1 >= MYTHS.length ? "See My Results →" : "Next Myth →"}
            </button>
          )}
        </div>

        {/* Score tally */}
        <div className="mt-6 flex gap-2">
          {MYTHS.map((_, i) => (
            <div key={i} className={`h-1.5 flex-1 rounded-full transition-all ${
              i < answers.length ? (answers[i] ? "bg-emerald-500" : "bg-red-500/60") :
              i === currentQ ? "bg-indigo-500" : "bg-slate-800"
            }`} />
          ))}
        </div>
      </div>
    </main>
  )
}
