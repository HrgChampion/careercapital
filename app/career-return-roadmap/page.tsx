"use client"

import Link from "next/link"
import { useState, useMemo, useEffect } from "react"
import { generateRoadmap } from "@/lib/roadmapEngine"
import {
  type GapDuration,
  type Industry,
  type ReentryGoal,
  type TopPriority,
  type HoursPerWeek,
  type Timeline,
  type RoadmapInput,
  type Phase,
  GAP_LABELS,
  INDUSTRY_LABELS,
  GOAL_LABELS,
  PRIORITY_LABELS,
  HOURS_LABELS,
  TIMELINE_LABELS,
} from "@/lib/roadmapData"

// ─── Quiz step definitions ────────────────────────────────────────────────────

const QUIZ_STEPS = 6
const STORAGE_KEY = "cr_roadmap_v1"

type QuizState = {
  gapDuration: GapDuration | null
  lastIndustry: Industry | null
  targetIndustry: Industry | null
  reentryGoal: ReentryGoal | null
  topPriority: TopPriority | null
  hoursPerWeek: HoursPerWeek | null
  timeline: Timeline | null
}

const INITIAL: QuizState = {
  gapDuration: null,
  lastIndustry: null,
  targetIndustry: null,
  reentryGoal: null,
  topPriority: null,
  hoursPerWeek: null,
  timeline: null,
}

type PersistedState = { step: number; quiz: QuizState }

function loadSaved(): PersistedState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as PersistedState
  } catch {
    return null
  }
}

function persist(step: number, quiz: QuizState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ step, quiz }))
  } catch {
    // Storage unavailable — proceed without persistence
  }
}

function clearSaved() {
  try { localStorage.removeItem(STORAGE_KEY) } catch { /* noop */ }
}

// ─── Option button ────────────────────────────────────────────────────────────

function OptionButton({
  label,
  selected,
  onClick,
}: {
  label: string
  selected: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-5 py-4 rounded-xl border text-sm font-medium transition-all ${
        selected
          ? "border-cyan-500 bg-cyan-500/15 text-white"
          : "border-white/10 bg-white/5 text-slate-300 hover:border-white/25 hover:bg-white/8"
      }`}
    >
      {selected && <span className="text-cyan-400 mr-2">✓</span>}
      {label}
    </button>
  )
}

// ─── Phase card ───────────────────────────────────────────────────────────────

function PhaseCard({ phase, index }: { phase: Phase; index: number }) {
  const [open, setOpen] = useState(index === 0)

  return (
    <div className={`rounded-2xl border ${phase.borderColor} ${phase.bgColor} overflow-hidden`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 px-5 py-4 text-left"
      >
        <div className={`w-7 h-7 rounded-full ${phase.dotColor} flex items-center justify-center shrink-0`}>
          <span className="text-slate-950 text-xs font-bold">{phase.number}</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className={`text-xs font-medium uppercase tracking-widest ${phase.accentColor}`}>
            {phase.subtitle} · {phase.weekRange}
          </p>
          <p className="text-white font-semibold text-base mt-0.5">{phase.title}</p>
        </div>
        <svg
          className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="px-5 pb-5 space-y-3 border-t border-white/5 pt-4">
          {phase.actions.map((action, i) => (
            <div key={i} className="flex gap-3">
              <div className="mt-1 w-5 h-5 rounded-full border border-white/15 flex items-center justify-center shrink-0">
                <span className="text-slate-400 text-[10px] font-semibold">{i + 1}</span>
              </div>
              <div className="space-y-1 flex-1">
                <p className="text-slate-300 text-sm leading-relaxed">{action.task}</p>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-slate-600 text-xs">{action.timeEst}</span>
                  {action.toolPath && (
                    <Link
                      href={action.toolPath}
                      className={`text-xs font-medium underline underline-offset-2 ${phase.accentColor} hover:opacity-80`}
                    >
                      {action.toolLabel} →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}

          <div className={`mt-4 pt-4 border-t border-white/5 flex gap-2`}>
            <svg className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-slate-500 text-xs leading-relaxed italic">{phase.milestone}</p>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function CareerReturnRoadmapPage() {
  const [step, setStep] = useState(0)
  const [quiz, setQuiz] = useState<QuizState>(INITIAL)
  const [email, setEmail] = useState("")
  const [emailSent, setEmailSent] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  // Restore saved state after hydration (avoids SSR mismatch)
  useEffect(() => {
    const saved = loadSaved()
    if (saved && saved.step > 0) {
      setStep(saved.step)
      setQuiz(saved.quiz)
    }
    setHydrated(true)
  }, [])

  // Persist step + quiz to localStorage on every change
  useEffect(() => {
    if (!hydrated) return
    if (step === 0) {
      clearSaved()
    } else {
      persist(step, quiz)
    }
  }, [step, quiz, hydrated])

  // Build roadmap only when all inputs are present
  const roadmap = useMemo(() => {
    if (step < 7) return null
    if (
      !quiz.gapDuration || !quiz.lastIndustry || !quiz.targetIndustry ||
      !quiz.reentryGoal || !quiz.topPriority || !quiz.hoursPerWeek || !quiz.timeline
    ) return null
    return generateRoadmap(quiz as RoadmapInput)
  }, [step, quiz])

  function select<K extends keyof QuizState>(key: K, value: QuizState[K]) {
    setQuiz((q) => ({ ...q, [key]: value }))
  }

  function next() {
    setStep((s) => s + 1)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  function canAdvance(): boolean {
    if (step === 1) return !!quiz.gapDuration
    if (step === 2) return !!quiz.lastIndustry
    if (step === 3) return !!quiz.targetIndustry
    if (step === 4) return !!quiz.reentryGoal
    if (step === 5) return !!quiz.topPriority
    if (step === 6) return !!quiz.hoursPerWeek && !!quiz.timeline
    return true
  }

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setEmailError(false)
    try {
      const res = await fetch("https://formspree.io/f/xeoqgzkw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          roadmap_summary: roadmap?.subheadline ?? "",
          share_text: roadmap?.shareText ?? "",
        }),
      })
      if (res.ok) {
        setEmailSent(true)
      } else {
        setEmailError(true)
      }
    } catch {
      setEmailError(true)
    }
  }

  // ─── Intro screen ─────────────────────────────────────────────────────────
  if (step === 0) {
    return (
      <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24 flex flex-col items-center text-center space-y-8">
          <div className="space-y-2">
            <p className="text-xs font-medium text-cyan-400 uppercase tracking-widest">CareerReturns · Free Tool</p>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
              Your Personalized<br />
              <span className="text-cyan-400">Career Return Roadmap</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-lg mx-auto pt-2">
              Answer 6 questions. Get a step-by-step 90-day plan built around your gap length, target industry,
              and weekly availability — with the exact tools to use each phase.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-left">
            {[
              { icon: "⏱", label: "Takes 2 minutes", sub: "6 questions, no sign-up required" },
              { icon: "🎯", label: "Fully personalized", sub: "No two roadmaps are the same" },
              { icon: "🔗", label: "Tool-linked tasks", sub: "Every action links to a free calculator" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 space-y-1">
                <p className="text-xl">{item.icon}</p>
                <p className="text-white text-sm font-semibold">{item.label}</p>
                <p className="text-slate-500 text-xs">{item.sub}</p>
              </div>
            ))}
          </div>

          <button
            onClick={next}
            className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:opacity-90 transition-all px-8 py-4 rounded-xl font-semibold text-white text-base shadow-[0_0_40px_rgba(6,182,212,0.3)]"
          >
            Build My Roadmap →
          </button>

          <p className="text-slate-600 text-xs">Free. No account needed. All data stays in your browser.</p>
        </div>
      </main>
    )
  }

  // ─── Quiz screens ─────────────────────────────────────────────────────────
  if (step >= 1 && step <= 6) {
    const progress = Math.round((step / QUIZ_STEPS) * 100)

    return (
      <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-600/8 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-8">

          {/* Progress bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-slate-500">
              <span>Question {step} of {QUIZ_STEPS}</span>
              <span>{progress}% complete</span>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Step 1 — Gap duration */}
          {step === 1 && (
            <div className="space-y-5">
              <h2 className="text-2xl sm:text-3xl font-semibold leading-tight">How long has your career break been?</h2>
              <div className="space-y-3">
                {(Object.entries(GAP_LABELS) as [GapDuration, string][]).map(([val, label]) => (
                  <OptionButton
                    key={val}
                    label={label}
                    selected={quiz.gapDuration === val}
                    onClick={() => select("gapDuration", val)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Step 2 — Last industry */}
          {step === 2 && (
            <div className="space-y-5">
              <h2 className="text-2xl sm:text-3xl font-semibold leading-tight">What was your last industry before the break?</h2>
              <div className="space-y-3">
                {(Object.entries(INDUSTRY_LABELS) as [Industry, string][]).map(([val, label]) => (
                  <OptionButton
                    key={val}
                    label={label}
                    selected={quiz.lastIndustry === val}
                    onClick={() => select("lastIndustry", val)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Step 3 — Target industry */}
          {step === 3 && (
            <div className="space-y-5">
              <h2 className="text-2xl sm:text-3xl font-semibold leading-tight">What industry are you targeting now?</h2>
              <p className="text-slate-400 text-sm">It&apos;s fine if it&apos;s different from before.</p>
              <div className="space-y-3">
                {(Object.entries(INDUSTRY_LABELS) as [Industry, string][]).map(([val, label]) => (
                  <OptionButton
                    key={val}
                    label={val === quiz.lastIndustry ? `${label} (same as before)` : label}
                    selected={quiz.targetIndustry === val}
                    onClick={() => select("targetIndustry", val)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Step 4 — Re-entry goal */}
          {step === 4 && (
            <div className="space-y-5">
              <h2 className="text-2xl sm:text-3xl font-semibold leading-tight">What&apos;s your primary re-entry goal?</h2>
              <div className="space-y-3">
                {(Object.entries(GOAL_LABELS) as [ReentryGoal, string][]).map(([val, label]) => (
                  <OptionButton
                    key={val}
                    label={label}
                    selected={quiz.reentryGoal === val}
                    onClick={() => select("reentryGoal", val)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Step 5 — Top priority */}
          {step === 5 && (
            <div className="space-y-5">
              <h2 className="text-2xl sm:text-3xl font-semibold leading-tight">What matters most to you right now?</h2>
              <p className="text-slate-400 text-sm">Your plan will be structured around this.</p>
              <div className="space-y-3">
                {(Object.entries(PRIORITY_LABELS) as [TopPriority, string][]).map(([val, label]) => (
                  <OptionButton
                    key={val}
                    label={label}
                    selected={quiz.topPriority === val}
                    onClick={() => select("topPriority", val)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Step 6 — Hours + timeline (combined) */}
          {step === 6 && (
            <div className="space-y-8">
              <div className="space-y-5">
                <h2 className="text-2xl sm:text-3xl font-semibold leading-tight">How many hours a week can you commit?</h2>
                <div className="space-y-3">
                  {(Object.entries(HOURS_LABELS) as [HoursPerWeek, string][]).map(([val, label]) => (
                    <OptionButton
                      key={val}
                      label={label}
                      selected={quiz.hoursPerWeek === val}
                      onClick={() => select("hoursPerWeek", val)}
                    />
                  ))}
                </div>
              </div>
              <div className="space-y-5">
                <h2 className="text-2xl sm:text-3xl font-semibold leading-tight">What&apos;s your target return timeline?</h2>
                <div className="space-y-3">
                  {(Object.entries(TIMELINE_LABELS) as [Timeline, string][]).map(([val, label]) => (
                    <OptionButton
                      key={val}
                      label={label}
                      selected={quiz.timeline === val}
                      onClick={() => select("timeline", val)}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center gap-3 pt-2">
            {step > 1 && (
              <button
                onClick={() => setStep((s) => s - 1)}
                className="px-5 py-3 rounded-xl border border-white/10 text-slate-400 text-sm hover:border-white/20 hover:text-white transition-all"
              >
                ← Back
              </button>
            )}
            <button
              onClick={() => {
                if (step === QUIZ_STEPS) {
                  setStep(7)
                  window.scrollTo({ top: 0, behavior: "smooth" })
                } else {
                  next()
                }
              }}
              disabled={!canAdvance()}
              className={`flex-1 py-3 rounded-xl font-semibold text-sm transition-all ${
                canAdvance()
                  ? "bg-gradient-to-r from-cyan-600 to-teal-600 hover:opacity-90 text-white shadow-[0_0_30px_rgba(6,182,212,0.2)]"
                  : "bg-white/5 text-slate-600 cursor-not-allowed"
              }`}
            >
              {step === QUIZ_STEPS ? "Generate My Roadmap →" : "Continue →"}
            </button>
          </div>
        </div>
      </main>
    )
  }

  // ─── Roadmap result screen ────────────────────────────────────────────────
  if (!roadmap) return null

  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-600/8 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12">

        {/* Header */}
        <header className="space-y-4">
          <p className="text-xs font-medium text-cyan-400 uppercase tracking-widest">CareerReturns · Your Personalized Plan</p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
            {roadmap.headline}
          </h1>
          <p className="text-slate-400 text-sm">{roadmap.subheadline}</p>

          {/* Confidence + timeline */}
          <div className="flex flex-wrap gap-3 pt-1">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10">
              <span className="text-cyan-400 text-sm font-bold">{roadmap.confidenceScore}%</span>
              <span className="text-slate-400 text-xs">return confidence</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/5">
              <span className="text-white text-sm font-bold">{roadmap.estimatedReturnWeeks} weeks</span>
              <span className="text-slate-400 text-xs">estimated timeline</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/5">
              <span className="text-white text-sm font-bold">5 phases</span>
              <span className="text-slate-400 text-xs">step-by-step</span>
            </div>
          </div>
        </header>

        {/* Phases */}
        <section className="space-y-3">
          <h2 className="text-xs font-medium text-slate-500 uppercase tracking-widest">Your 5-Phase Plan</h2>
          {roadmap.phases.map((phase, i) => (
            <PhaseCard key={phase.number} phase={phase} index={i} />
          ))}
        </section>

        {/* Email capture */}
        <section className="rounded-2xl border border-cyan-500/25 bg-cyan-500/8 p-6 space-y-4">
          <div className="space-y-1">
            <h3 className="text-white font-semibold text-lg">Get weekly check-ins for each phase</h3>
            <p className="text-slate-400 text-sm">
              One email per phase. Your action items, the right tool to use, and a nudge to keep moving.
              No newsletters. Unsubscribe anytime.
            </p>
          </div>
          {emailSent ? (
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              You&apos;re in — check your inbox for Phase 1.
            </div>
          ) : (
            <div className="space-y-2">
              <form onSubmit={handleEmailSubmit} className="flex gap-3 flex-wrap sm:flex-nowrap">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setEmailError(false) }}
                  placeholder="your@email.com"
                  className={`flex-1 min-w-0 px-4 py-3 rounded-xl border bg-white/5 text-white placeholder-slate-500 text-sm focus:outline-none transition-colors ${emailError ? "border-red-500/60 focus:border-red-500" : "border-white/15 focus:border-cyan-500/60"}`}
                />
                <button
                  type="submit"
                  className="shrink-0 bg-linear-to-r from-cyan-600 to-teal-600 hover:opacity-90 transition-all px-6 py-3 rounded-xl font-semibold text-white text-sm"
                >
                  Send me the plan
                </button>
              </form>
              {emailError && (
                <p className="text-red-400 text-xs">
                  Something went wrong — try again or email <a href="mailto:hgauba4@gmail.com" className="underline">hgauba4@gmail.com</a> directly.
                </p>
              )}
            </div>
          )}
        </section>

        {/* Share */}
        <section className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
          <div className="space-y-1">
            <h3 className="text-white font-semibold">Share your roadmap</h3>
            <p className="text-slate-400 text-sm">Career returners who share their plan publicly are 2× more likely to complete it.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://careerreturns.com/career-return-roadmap")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#0A66C2]/50 bg-[#0A66C2]/15 text-[#0A66C2] hover:bg-[#0A66C2]/25 transition-all text-sm font-medium"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Share on LinkedIn
            </a>
            <button
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(roadmap.shareText)
                }
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/15 bg-white/5 text-slate-300 hover:border-white/25 hover:text-white transition-all text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy text
            </button>
          </div>
          <p className="text-slate-600 text-xs italic">&ldquo;{roadmap.shareText}&rdquo;</p>
        </section>

        {/* Restart */}
        <div className="text-center">
          <button
            onClick={() => { clearSaved(); setStep(0); setQuiz(INITIAL); setEmail(""); setEmailSent(false); setEmailError(false) }}
            className="text-slate-500 text-sm hover:text-slate-300 transition-colors underline underline-offset-2"
          >
            Start over with different inputs
          </button>
        </div>
      </div>
    </main>
  )
}
