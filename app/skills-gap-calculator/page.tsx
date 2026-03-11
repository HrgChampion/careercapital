"use client"

import { useState, useMemo } from "react"
import {
  calculateSkillsGap,
  SKILL_META,
  SKILLS_PROJECTION_YEARS,
  type SkillAssessment,
  type SkillLevel,
  type SkillCategory,
} from "@/lib/skillsGapEngine"
import { DISCOUNT_RATE } from "@/lib/mbaEngine"

function fmtUSD(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n)
}

const LEVEL_LABELS: Record<SkillLevel, string> = {
  0: "None",
  1: "Basic",
  2: "Intermediate",
  3: "Advanced",
}

const PATH_TYPE_COLORS: Record<string, string> = {
  free: "text-green-400 border-green-400/30",
  certificate: "text-blue-400 border-blue-400/30",
  bootcamp: "text-orange-400 border-orange-400/30",
  degree: "text-purple-400 border-purple-400/30",
}

export default function SkillsGapCalculator() {
  const [currentSalary, setCurrentSalary] = useState(75000)
  const [assessments, setAssessments] = useState<SkillAssessment[]>(
    SKILL_META.map(s => ({ skill: s.id, currentLevel: 0 as SkillLevel, targetLevel: 0 as SkillLevel }))
  )

  const setLevel = (skill: SkillCategory, field: "currentLevel" | "targetLevel", val: SkillLevel) => {
    setAssessments(prev => prev.map(a =>
      a.skill === skill ? { ...a, [field]: val } : a
    ))
  }

  const activeAssessments = assessments.filter(a => a.targetLevel > a.currentLevel)

  const result = useMemo(() => {
    if (activeAssessments.length === 0) return null
    try { return calculateSkillsGap(activeAssessments, currentSalary, DISCOUNT_RATE) }
    catch { return null }
  }, [activeAssessments, currentSalary])

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-mono">
      {/* Hero */}
      <section className="border-b border-white/10 px-6 py-12 max-w-5xl mx-auto">
        <p className="text-xs text-white/40 uppercase tracking-widest mb-3">CareerReturns · Skills Intelligence</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Not Knowing Python Costs {fmtUSD(22000)}/Year. What's Your Skills Gap Costing You?
        </h1>
        <p className="text-white/70 max-w-2xl mb-6 text-lg leading-relaxed">
          Most career returners underestimate the <span className="text-white font-semibold">dollar value of their skills gaps</span>.
          Assess 12 skill categories, see the annual salary cost of each gap, and get a ranked upskilling plan — sorted by ROI per month invested.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
          {[
            { stat: "12", label: "Skill categories assessed" },
            { stat: "$22k/yr", label: "Cost of a Python gap at median salary" },
            { stat: "3 free", label: "Top upskill paths cost $0" },
            { stat: "10-yr NPV", label: "Dollar value of closing each gap" },
          ].map(({ stat, label }) => (
            <div key={stat} className="border border-white/10 rounded-lg p-3 bg-white/2">
              <div className="text-2xl font-bold text-white mb-1">{stat}</div>
              <div className="text-xs text-white/40 leading-tight">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Salary input */}
        <div className="mb-8 flex items-center gap-6 p-4 rounded-lg border border-white/10 bg-white/2">
          <div>
            <label className="text-xs text-white/40 uppercase tracking-widest block mb-1">Current Annual Salary ($)</label>
            <input type="number" value={currentSalary} step={5000} min={0}
              onChange={e => setCurrentSalary(parseFloat(e.target.value) || 0)}
              className="bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:outline-none focus:border-white/30 w-48" />
          </div>
          <p className="text-xs text-white/40 max-w-xs">
            Assess your current skill level and where you want to be. We&apos;ll calculate the dollar cost of each gap and the best path to close it.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_360px] gap-10">
          {/* Left: skill assessment */}
          <div>
            <p className="text-xs text-white/40 uppercase tracking-widest mb-4">
              Assess Your Skills ({activeAssessments.length} gap{activeAssessments.length !== 1 ? "s" : ""} identified)
            </p>
            <div className="space-y-3">
              {SKILL_META.map(meta => {
                const assessment = assessments.find(a => a.skill === meta.id)!
                const hasGap = assessment.targetLevel > assessment.currentLevel

                return (
                  <div key={meta.id} className={`rounded-lg border p-4 transition-all ${hasGap ? "border-white/20 bg-white/[0.03]" : "border-white/8 bg-white/[0.01]"}`}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-base">{meta.icon}</span>
                        <div>
                          <p className="text-sm font-medium">{meta.label}</p>
                          <p className="text-xs text-white/30">{meta.description}</p>
                        </div>
                      </div>
                      {hasGap && (
                        <div className="text-right">
                          <p className="text-xs text-orange-400 font-medium">
                            ~{fmtUSD(meta.maxAnnualImpact * (assessment.targetLevel - assessment.currentLevel) / 3)}/yr gap
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <p className="text-white/40 mb-2">Current Level</p>
                        <div className="flex gap-1">
                          {([0, 1, 2, 3] as SkillLevel[]).map(l => (
                            <button
                              key={l}
                              onClick={() => {
                                setLevel(meta.id, "currentLevel", l)
                                if (assessment.targetLevel < l) setLevel(meta.id, "targetLevel", l)
                              }}
                              className={`flex-1 py-1 text-[10px] rounded border transition-all ${
                                assessment.currentLevel === l
                                  ? "border-white/60 bg-white/10 text-white"
                                  : "border-white/10 text-white/30 hover:border-white/20"
                              }`}
                            >
                              {l}
                            </button>
                          ))}
                        </div>
                        <p className="text-white/30 text-[10px] mt-1">{LEVEL_LABELS[assessment.currentLevel]}</p>
                      </div>
                      <div>
                        <p className="text-white/40 mb-2">Target Level</p>
                        <div className="flex gap-1">
                          {([0, 1, 2, 3] as SkillLevel[]).map(l => (
                            <button
                              key={l}
                              onClick={() => setLevel(meta.id, "targetLevel", l)}
                              disabled={l < assessment.currentLevel}
                              className={`flex-1 py-1 text-[10px] rounded border transition-all ${
                                assessment.targetLevel === l
                                  ? "border-blue-400/60 bg-blue-400/10 text-blue-300"
                                  : l < assessment.currentLevel
                                  ? "border-white/5 text-white/10 cursor-not-allowed"
                                  : "border-white/10 text-white/30 hover:border-white/20"
                              }`}
                            >
                              {l}
                            </button>
                          ))}
                        </div>
                        <p className="text-white/30 text-[10px] mt-1">{LEVEL_LABELS[assessment.targetLevel]}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right: results */}
          <div className="space-y-4">
            {activeAssessments.length === 0 && (
              <div className="rounded-lg border border-white/10 p-6 text-center text-white/40 text-sm">
                <p className="text-2xl mb-2">↑</p>
                Set target levels higher than current levels to identify your skills gap.
              </div>
            )}

            {result && (
              <>
                {/* Total gap cost */}
                <div className="rounded-lg border border-red-400/20 bg-red-400/5 p-5">
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-3">Your Total Skills Gap Cost</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs text-white/40">Annual Salary Cost</p>
                      <p className="text-2xl font-bold text-red-400">{fmtUSD(result.totalAnnualSalaryCost)}</p>
                    </div>
                    <div>
                      <p className="text-xs text-white/40">{SKILLS_PROJECTION_YEARS}-Year NPV</p>
                      <p className="text-2xl font-bold text-red-400">{fmtUSD(result.totalNPVCostOfGap)}</p>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-red-400/10 grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <p className="text-white/40">Total Upskill Cost</p>
                      <p className="font-medium text-green-400">{fmtUSD(result.totalUpskillCost)}</p>
                    </div>
                    <div>
                      <p className="text-white/40">Upskill Timeline</p>
                      <p className="font-medium">{result.totalUpskillMonths} months (sequential)</p>
                    </div>
                  </div>
                </div>

                {/* Quick wins */}
                {result.quickWins.length > 0 && (
                  <div className="rounded-lg border border-green-400/20 bg-green-400/5 p-4">
                    <p className="text-xs text-green-400 uppercase tracking-widest mb-2">Quick Wins (Free / Low-Cost)</p>
                    {result.quickWins.slice(0, 3).map(item => (
                      <div key={item.skill} className="flex justify-between text-xs py-1">
                        <span className="text-white/70">{item.recommendedPath.label}</span>
                        <span className="text-green-400">+{fmtUSD(item.annualSalaryImpact)}/yr</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Ranked upskilling plan */}
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-3">
                    Prioritized Action Plan (by ROI/month)
                  </p>
                  <div className="space-y-3">
                    {result.prioritizedSkills.map((item, rank) => (
                      <div key={item.skill} className="rounded-lg border border-white/10 p-4 bg-white/2">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-white/30">#{rank + 1}</span>
                              <p className="text-sm font-medium">{item.skillLabel}</p>
                            </div>
                            <p className="text-xs text-white/40 mt-0.5">
                              {LEVEL_LABELS[item.currentLevel]} → {LEVEL_LABELS[item.targetLevel]}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-bold text-orange-400">{fmtUSD(item.annualSalaryImpact)}/yr</p>
                            <p className="text-xs text-white/30">salary gap</p>
                          </div>
                        </div>

                        {/* Recommended path */}
                        <div className={`rounded border px-3 py-2 mt-2 ${PATH_TYPE_COLORS[item.recommendedPath.pathType] ?? "border-white/10"} bg-white/2`}>
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-xs font-medium">{item.recommendedPath.label}</p>
                              <p className="text-[10px] text-white/40">{item.recommendedPath.provider}</p>
                            </div>
                            <div className="text-right text-[10px] text-white/40">
                              <p>{item.recommendedPath.cost === 0 ? "Free" : fmtUSD(item.recommendedPath.cost)}</p>
                              <p>{item.recommendedPath.durationMonths} mo · {item.recommendedPath.learningHoursPerWeek}hr/wk</p>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 mt-2 text-xs">
                          <div>
                            <p className="text-white/30">NPV of Path</p>
                            <p className={`font-medium ${item.pathNPV !== null && item.pathNPV > 0 ? "text-green-400" : "text-white/60"}`}>
                              {item.pathNPV !== null ? fmtUSD(item.pathNPV) : "—"}
                            </p>
                          </div>
                          <div>
                            <p className="text-white/30">Payback</p>
                            <p className="font-medium">
                              {item.paybackMonths === Infinity ? "Free!" : item.recommendedPath.cost === 0 ? "Free!" : `${item.paybackMonths.toFixed(0)} mo`}
                            </p>
                          </div>
                          <div>
                            <p className="text-white/30">Type</p>
                            <p className={`font-medium capitalize ${PATH_TYPE_COLORS[item.recommendedPath.pathType]?.split(" ")[0]}`}>
                              {item.recommendedPath.pathType}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <section className="border-t border-white/10 px-6 py-8 max-w-5xl mx-auto">
        <p className="text-xs text-white/30 uppercase tracking-widest mb-2">Methodology</p>
        <p className="text-xs text-white/40 max-w-2xl">
          Salary impact estimates sourced from BLS, Levels.fyi, Glassdoor, and LinkedIn Salary data (2025-2026).
          Gap cost = max impact × (level gap / 3), compounded at 3% inflation over {SKILLS_PROJECTION_YEARS} years.
          Priority score = annual salary impact / (program cost + duration × $1,000). Upskilling paths are curated
          — costs and timelines are approximate; verify directly with providers.
        </p>
      </section>
    </main>
  )
}
