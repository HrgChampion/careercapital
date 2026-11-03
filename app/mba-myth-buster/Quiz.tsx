"use client"

import Link from "next/link"
import { useState } from "react"
import { MYTHS } from "./myths"

export default function MythBusterQuiz() {
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
      <div className="relative overflow-hidden">
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
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden">
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
    </div>
  )
}
