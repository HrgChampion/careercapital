"use client"

import Link from "next/link"
import { useState, useMemo } from "react"

type Skill = {
  id: string
  name: string
  category: string
  currentLevel: number   // 0-10
  marketDemand: number   // 0-10
  growthRate: number     // annual % increase in market demand
  annualValue: number    // $/yr this skill contributes
}

const DEFAULT_SKILLS: Skill[] = [
  { id: "python", name: "Python / Data Science", category: "Technical", currentLevel: 5, marketDemand: 9, growthRate: 12, annualValue: 18000 },
  { id: "pm", name: "Product Management", category: "Leadership", currentLevel: 6, marketDemand: 8, growthRate: 8, annualValue: 22000 },
  { id: "finance", name: "Financial Modeling", category: "Finance", currentLevel: 7, marketDemand: 7, growthRate: 5, annualValue: 15000 },
  { id: "communication", name: "Executive Communication", category: "Soft Skills", currentLevel: 8, marketDemand: 8, growthRate: 4, annualValue: 12000 },
  { id: "ai", name: "AI / Prompt Engineering", category: "Technical", currentLevel: 3, marketDemand: 10, growthRate: 35, annualValue: 20000 },
  { id: "strategy", name: "Business Strategy", category: "Leadership", currentLevel: 6, marketDemand: 7, growthRate: 4, annualValue: 16000 },
]

const CATEGORY_COLORS: Record<string, { bg: string; border: string; text: string; bar: string }> = {
  Technical: { bg: "bg-blue-950/40", border: "border-blue-500/30", text: "text-blue-400", bar: "bg-blue-500" },
  Leadership: { bg: "bg-violet-950/40", border: "border-violet-500/30", text: "text-violet-400", bar: "bg-violet-500" },
  Finance: { bg: "bg-emerald-950/40", border: "border-emerald-500/30", text: "text-emerald-400", bar: "bg-emerald-500" },
  "Soft Skills": { bg: "bg-amber-950/40", border: "border-amber-500/30", text: "text-amber-400", bar: "bg-amber-500" },
}

function formatCurrency(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `$${Math.round(n / 1_000)}K`
  return `$${Math.round(n)}`
}

function skillScore(s: Skill): number {
  const alignment = (s.currentLevel / 10) * (s.marketDemand / 10)
  const momentum = Math.min(1, s.growthRate / 30)
  return Math.round((alignment * 0.7 + momentum * 0.3) * 100)
}

export default function SkillsPortfolioPage() {
  const [skills, setSkills] = useState<Skill[]>(DEFAULT_SKILLS)
  const [editing, setEditing] = useState<string | null>(null)
  const [newSkillName, setNewSkillName] = useState("")
  const [showAdd, setShowAdd] = useState(false)

  function updateSkill(id: string, field: keyof Skill, value: number | string) {
    setSkills(prev => prev.map(s => s.id === id ? { ...s, [field]: value } : s))
  }

  function addSkill() {
    if (!newSkillName.trim()) return
    const ns: Skill = {
      id: Date.now().toString(),
      name: newSkillName.trim(),
      category: "Technical",
      currentLevel: 5,
      marketDemand: 5,
      growthRate: 5,
      annualValue: 10000,
    }
    setSkills(prev => [...prev, ns])
    setNewSkillName("")
    setShowAdd(false)
  }

  function removeSkill(id: string) {
    setSkills(prev => prev.filter(s => s.id !== id))
  }

  const totalValue = useMemo(() => skills.reduce((sum, s) => sum + s.annualValue * (s.currentLevel / 10), 0), [skills])
  const avgScore = useMemo(() => Math.round(skills.reduce((sum, s) => sum + skillScore(s), 0) / Math.max(1, skills.length)), [skills])

  const sorted = [...skills].sort((a, b) => skillScore(b) - skillScore(a))
  const underinvested = [...skills].filter(s => s.marketDemand >= 7 && s.currentLevel <= 5).sort((a, b) => b.marketDemand - a.marketDemand)
  const overweight = [...skills].filter(s => s.marketDemand <= 4 && s.currentLevel >= 7)

  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-150 h-150 bg-purple-600/10 rounded-full blur-[130px] -z-10" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Link href="/" className="text-xs text-slate-500 hover:text-slate-300 transition-colors mb-8 inline-block">← CareerReturns</Link>

        <p className="text-xs font-medium text-purple-400 uppercase tracking-widest mb-3">Skills Portfolio</p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight bg-linear-to-r from-purple-400 via-violet-400 to-blue-400 bg-clip-text text-transparent mb-4">
          Your Career<br />Investment Portfolio
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-xl">
          Treat your skillset like an investment portfolio. Each skill has a current value, market demand, and growth trajectory. Find your gaps, concentration risks, and best bets.
        </p>

        {/* Portfolio summary */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <div className="rounded-2xl bg-purple-950/40 border border-purple-500/20 p-5 text-center space-y-1">
            <p className="text-xs text-slate-500 uppercase tracking-wide">Portfolio Score</p>
            <p className="text-3xl font-bold text-purple-400">{avgScore}</p>
            <p className="text-xs text-slate-500">out of 100</p>
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-5 text-center space-y-1">
            <p className="text-xs text-slate-500 uppercase tracking-wide">Annual Value</p>
            <p className="text-3xl font-bold text-white">{formatCurrency(totalValue)}</p>
            <p className="text-xs text-slate-500">market-adjusted contribution</p>
          </div>
          <div className="rounded-2xl bg-blue-950/40 border border-blue-500/20 p-5 text-center space-y-1">
            <p className="text-xs text-slate-500 uppercase tracking-wide">Skills Tracked</p>
            <p className="text-3xl font-bold text-blue-400">{skills.length}</p>
            <p className="text-xs text-slate-500">in your portfolio</p>
          </div>
        </div>

        {/* Recommendations */}
        {(underinvested.length > 0 || overweight.length > 0) && (
          <div className="space-y-3 mb-8">
            {underinvested.length > 0 && (
              <div className="rounded-xl bg-emerald-950/30 border border-emerald-500/20 p-4 text-sm">
                <p className="font-medium text-emerald-400 mb-1">Underinvested (high demand, low level)</p>
                <p className="text-slate-400">Consider investing more in: <span className="text-emerald-300">{underinvested.map(s => s.name).join(", ")}</span></p>
              </div>
            )}
            {overweight.length > 0 && (
              <div className="rounded-xl bg-amber-950/30 border border-amber-500/20 p-4 text-sm">
                <p className="font-medium text-amber-400 mb-1">Overweight (low demand, high level)</p>
                <p className="text-slate-400">These skills may have declining returns: <span className="text-amber-300">{overweight.map(s => s.name).join(", ")}</span></p>
              </div>
            )}
          </div>
        )}

        {/* Skill cards */}
        <div className="space-y-4 mb-8">
          {sorted.map(skill => {
            const colors = CATEGORY_COLORS[skill.category] ?? CATEGORY_COLORS["Technical"]
            const score = skillScore(skill)
            const value = skill.annualValue * (skill.currentLevel / 10)
            const isEditing = editing === skill.id
            return (
              <div key={skill.id} className={`rounded-2xl ${colors.bg} border ${colors.border} p-5 transition-all`}>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="font-semibold text-white">{skill.name}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${colors.bg} ${colors.border} border ${colors.text}`}>{skill.category}</span>
                    </div>
                    <p className="text-xs text-slate-500">Market value: {formatCurrency(value)}/yr · Growth: +{skill.growthRate}%/yr</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`text-lg font-bold ${score >= 60 ? "text-emerald-400" : score >= 40 ? "text-yellow-400" : "text-red-400"}`}>
                      {score}
                    </div>
                    <button onClick={() => setEditing(isEditing ? null : skill.id)} className="text-xs text-slate-600 hover:text-slate-400 transition-colors px-2">
                      {isEditing ? "done" : "edit"}
                    </button>
                    <button onClick={() => removeSkill(skill.id)} className="text-xs text-slate-700 hover:text-red-400 transition-colors">✕</button>
                  </div>
                </div>

                {/* Visual bars */}
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-xs text-slate-500 mb-1">
                      <span>Your Level</span><span>{skill.currentLevel}/10</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-1.5">
                      <div className={`h-1.5 rounded-full ${colors.bar}`} style={{ width: `${skill.currentLevel * 10}%` }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-slate-500 mb-1">
                      <span>Market Demand</span><span>{skill.marketDemand}/10</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-1.5">
                      <div className="h-1.5 rounded-full bg-slate-400" style={{ width: `${skill.marketDemand * 10}%` }} />
                    </div>
                  </div>
                </div>

                {isEditing && (
                  <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/10">
                    {(["currentLevel", "marketDemand", "growthRate", "annualValue"] as const).map(field => (
                      <div key={field}>
                        <label className="text-xs text-slate-500 capitalize">{field.replace(/([A-Z])/g, " $1")}</label>
                        <input
                          type="number"
                          value={skill[field] as number}
                          onChange={e => updateSkill(skill.id, field, Number(e.target.value))}
                          className="w-full bg-transparent text-white text-sm outline-none border-b border-white/20 focus:border-purple-500 py-1 transition-colors"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Add skill */}
        {showAdd ? (
          <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-3 mb-8">
            <input
              type="text"
              placeholder="Skill name (e.g. Machine Learning, SQL, Negotiation)"
              value={newSkillName}
              onChange={e => setNewSkillName(e.target.value)}
              onKeyDown={e => e.key === "Enter" && addSkill()}
              className="w-full bg-transparent text-white outline-none border-b border-white/20 focus:border-purple-500 pb-2 transition-colors placeholder:text-slate-600"
            />
            <div className="flex gap-3">
              <button onClick={addSkill} className="bg-linear-to-r from-purple-600 to-violet-600 px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-all">Add Skill</button>
              <button onClick={() => setShowAdd(false)} className="text-sm text-slate-500 hover:text-slate-300">Cancel</button>
            </div>
          </div>
        ) : (
          <button onClick={() => setShowAdd(true)} className="w-full border border-dashed border-white/20 hover:border-purple-500/40 py-4 rounded-2xl text-sm text-slate-500 hover:text-slate-300 transition-all mb-8">
            + Add a skill to your portfolio
          </button>
        )}

        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { href: "/skills-gap-calculator", label: "Skills Gap Calculator", desc: "Quantify gap in dollars" },
            { href: "/reskilling-roi-calculator", label: "Reskilling ROI", desc: "Model training returns" },
            { href: "/career-roi-score", label: "Career ROI Score", desc: "Overall career health" },
          ].map(item => (
            <Link key={item.href} href={item.href} className="group rounded-xl bg-white/5 border border-white/10 p-4 hover:border-purple-500/30 transition-all">
              <p className="text-sm font-medium text-white group-hover:text-purple-300">{item.label}</p>
              <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
