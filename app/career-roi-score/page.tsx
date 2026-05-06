"use client"

import Link from "next/link"
import { useState } from "react"

type ScoreCategory = {
  label: string
  score: number
  weight: number
  description: string
  color: string
}

type ScoreResult = {
  total: number
  grade: string
  gradeColor: string
  tagline: string
  categories: ScoreCategory[]
}

function computeScore(inputs: {
  currentSalary: number
  marketSalary: number
  gapYears: number
  skillsCurrent: number
  skillsTarget: number
  yearsToRetirement: number
  savingsRate: number
}): ScoreResult {
  const { currentSalary, marketSalary, gapYears, skillsCurrent, skillsTarget, yearsToRetirement, savingsRate } = inputs

  // 1. Salary market position (max 200 pts)
  const salaryRatio = marketSalary > 0 ? Math.min(currentSalary / marketSalary, 1.3) : 0.7
  const salaryScore = Math.round(Math.min(200, Math.max(0, salaryRatio * 154)))

  // 2. Career continuity (max 150 pts) — penalized by gap years
  const continuityScore = Math.round(Math.max(0, 150 - gapYears * 20))

  // 3. Skills alignment (max 200 pts)
  const skillsRatio = skillsTarget > 0 ? Math.min(skillsCurrent / skillsTarget, 1) : 0.5
  const skillsScore = Math.round(skillsRatio * 200)

  // 4. Career runway (max 150 pts) — more years = more compounding
  const runwayScore = Math.round(Math.min(150, yearsToRetirement * 4.5))

  // 5. Financial discipline (max 150 pts)
  const savingsScore = Math.round(Math.min(150, savingsRate * 500))

  const raw = salaryScore + continuityScore + skillsScore + runwayScore + savingsScore
  // Scale to 300–850 range
  const maxRaw = 200 + 150 + 200 + 150 + 150 // 850
  const total = Math.round(300 + ((raw / maxRaw) * 550))

  let grade = "F"
  let gradeColor = "text-red-400"
  let tagline = "Critical — immediate action needed across all areas"
  if (total >= 780) { grade = "A+"; gradeColor = "text-emerald-400"; tagline = "Elite — top 5% career financial health" }
  else if (total >= 720) { grade = "A"; gradeColor = "text-emerald-400"; tagline = "Excellent — strong trajectory across all dimensions" }
  else if (total >= 660) { grade = "B+"; gradeColor = "text-teal-400"; tagline = "Very Good — above average with room to optimize" }
  else if (total >= 600) { grade = "B"; gradeColor = "text-teal-400"; tagline = "Good — solid foundation, targeted improvements needed" }
  else if (total >= 540) { grade = "C+"; gradeColor = "text-yellow-400"; tagline = "Average — meaningful gaps to address" }
  else if (total >= 480) { grade = "C"; gradeColor = "text-yellow-400"; tagline = "Below Average — multiple areas need attention" }
  else if (total >= 400) { grade = "D"; gradeColor = "text-orange-400"; tagline = "Poor — significant career financial risk" }

  return {
    total,
    grade,
    gradeColor,
    tagline,
    categories: [
      {
        label: "Salary Market Position",
        score: salaryScore,
        weight: 200,
        description: `You earn ${marketSalary > 0 ? Math.round((currentSalary / marketSalary) * 100) : "?"}% of your market rate`,
        color: "indigo",
      },
      {
        label: "Career Continuity",
        score: continuityScore,
        weight: 150,
        description: `${gapYears} year${gapYears !== 1 ? "s" : ""} of career gaps detected`,
        color: "violet",
      },
      {
        label: "Skills Alignment",
        score: skillsScore,
        weight: 200,
        description: `${Math.round(skillsRatio * 100)}% skills match to target role`,
        color: "purple",
      },
      {
        label: "Career Runway",
        score: runwayScore,
        weight: 150,
        description: `${yearsToRetirement} years to compound your investments`,
        color: "blue",
      },
      {
        label: "Financial Discipline",
        score: savingsScore,
        weight: 150,
        description: `${Math.round(savingsRate * 100)}% savings rate`,
        color: "cyan",
      },
    ],
  }
}

const colorMap: Record<string, string> = {
  indigo: "bg-indigo-500",
  violet: "bg-violet-500",
  purple: "bg-purple-500",
  blue: "bg-blue-500",
  cyan: "bg-cyan-500",
}

const borderMap: Record<string, string> = {
  indigo: "border-indigo-500/30",
  violet: "border-violet-500/30",
  purple: "border-purple-500/30",
  blue: "border-blue-500/30",
  cyan: "border-cyan-500/30",
}

export default function CareerROIScorePage() {
  const [currentSalary, setCurrentSalary] = useState(85000)
  const [marketSalary, setMarketSalary] = useState(95000)
  const [gapYears, setGapYears] = useState(0)
  const [skillsCurrent, setSkillsCurrent] = useState(6)
  const [skillsTarget, setSkillsTarget] = useState(10)
  const [yearsToRetirement, setYearsToRetirement] = useState(25)
  const [savingsRate, setSavingsRate] = useState(0.15)
  const [showResult, setShowResult] = useState(false)

  const result = computeScore({ currentSalary, marketSalary, gapYears, skillsCurrent, skillsTarget, yearsToRetirement, savingsRate })

  const gaugeAngle = ((result.total - 300) / 550) * 180 - 90

  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-150 h-150 bg-indigo-600/15 rounded-full blur-[120px] -z-10" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">

        <Link href="/" className="text-xs text-slate-500 hover:text-slate-300 transition-colors mb-8 inline-block">← CareerReturns</Link>

        <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-3">New Tool</p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight bg-linear-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent mb-4">
          Career ROI Score
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-xl">
          Your single composite score for career financial health — like a credit score, but for your human capital. Scored 300–850 across 5 dimensions.
        </p>

        {/* Input Form */}
        <div className="space-y-6 mb-10">

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-3">
              <label className="text-sm font-medium text-slate-300">Current Annual Salary</label>
              <div className="flex items-center gap-2">
                <span className="text-slate-500 text-sm">$</span>
                <input
                  type="number"
                  value={currentSalary}
                  onChange={e => setCurrentSalary(Number(e.target.value))}
                  className="w-full bg-transparent text-white text-lg font-semibold outline-none border-b border-white/20 focus:border-indigo-500 pb-1 transition-colors"
                />
              </div>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-3">
              <label className="text-sm font-medium text-slate-300">Market Rate (same role)</label>
              <div className="flex items-center gap-2">
                <span className="text-slate-500 text-sm">$</span>
                <input
                  type="number"
                  value={marketSalary}
                  onChange={e => setMarketSalary(Number(e.target.value))}
                  className="w-full bg-transparent text-white text-lg font-semibold outline-none border-b border-white/20 focus:border-indigo-500 pb-1 transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-slate-300">Career Gap (years)</label>
              <span className="text-indigo-400 font-semibold">{gapYears} yr{gapYears !== 1 ? "s" : ""}</span>
            </div>
            <input type="range" min={0} max={10} step={0.5} value={gapYears}
              onChange={e => setGapYears(Number(e.target.value))}
              className="w-full accent-indigo-500" />
            <div className="flex justify-between text-xs text-slate-600">
              <span>0 years</span><span>10 years</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-slate-300">Current Skills (out of 10)</label>
                <span className="text-violet-400 font-semibold">{skillsCurrent}/10</span>
              </div>
              <input type="range" min={1} max={10} value={skillsCurrent}
                onChange={e => setSkillsCurrent(Number(e.target.value))}
                className="w-full accent-violet-500" />
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-slate-300">Target Role Requires</label>
                <span className="text-purple-400 font-semibold">{skillsTarget}/10</span>
              </div>
              <input type="range" min={1} max={10} value={skillsTarget}
                onChange={e => setSkillsTarget(Number(e.target.value))}
                className="w-full accent-purple-500" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-slate-300">Years to Retirement</label>
                <span className="text-blue-400 font-semibold">{yearsToRetirement} yrs</span>
              </div>
              <input type="range" min={5} max={40} value={yearsToRetirement}
                onChange={e => setYearsToRetirement(Number(e.target.value))}
                className="w-full accent-blue-500" />
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-slate-300">Savings Rate</label>
                <span className="text-cyan-400 font-semibold">{Math.round(savingsRate * 100)}%</span>
              </div>
              <input type="range" min={0} max={0.5} step={0.01} value={savingsRate}
                onChange={e => setSavingsRate(Number(e.target.value))}
                className="w-full accent-cyan-500" />
            </div>
          </div>

          <button
            onClick={() => setShowResult(true)}
            className="w-full bg-linear-to-r from-indigo-600 to-violet-600 hover:opacity-90 transition-all py-4 rounded-xl font-semibold text-white text-base shadow-[0_0_60px_rgba(99,102,241,0.35)]"
          >
            Calculate My Career ROI Score →
          </button>
        </div>

        {/* Results */}
        {showResult && (
          <div className="space-y-6 animate-in fade-in duration-500">

            {/* Score Gauge */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-8 text-center space-y-4">
              <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">Your Career ROI Score</p>

              {/* Gauge visual */}
              <div className="relative w-48 h-24 mx-auto">
                <svg viewBox="0 0 200 100" className="w-full">
                  {/* Background arc */}
                  <path d="M 10 100 A 90 90 0 0 1 190 100" fill="none" stroke="#1e293b" strokeWidth="16" strokeLinecap="round" />
                  {/* Score arc */}
                  <path d="M 10 100 A 90 90 0 0 1 190 100" fill="none"
                    stroke="url(#scoreGrad)" strokeWidth="16" strokeLinecap="round"
                    strokeDasharray={`${((result.total - 300) / 550) * 283} 283`} />
                  <defs>
                    <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ef4444" />
                      <stop offset="40%" stopColor="#eab308" />
                      <stop offset="75%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                  {/* Needle */}
                  <line
                    x1="100" y1="100"
                    x2={100 + 70 * Math.cos((gaugeAngle * Math.PI) / 180)}
                    y2={100 + 70 * Math.sin((gaugeAngle * Math.PI) / 180)}
                    stroke="white" strokeWidth="2" strokeLinecap="round"
                  />
                  <circle cx="100" cy="100" r="4" fill="white" />
                </svg>
              </div>

              <div className="space-y-1">
                <p className="text-6xl font-bold tracking-tight">{result.total}</p>
                <p className={`text-3xl font-bold ${result.gradeColor}`}>{result.grade}</p>
                <p className="text-slate-400 text-sm">{result.tagline}</p>
              </div>

              <div className="flex justify-center gap-6 text-xs text-slate-600 mt-2">
                <span>Poor 300</span>
                <span>Fair 480</span>
                <span>Good 600</span>
                <span>Excellent 720</span>
                <span>Elite 850</span>
              </div>
            </div>

            {/* Category Breakdown */}
            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-slate-200">Score Breakdown</h2>
              {result.categories.map((cat) => (
                <div key={cat.label} className={`rounded-xl bg-white/5 border ${borderMap[cat.color]} p-4 space-y-2`}>
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium text-slate-200">{cat.label}</p>
                    <p className="text-sm font-semibold text-white">{cat.score}<span className="text-slate-500">/{cat.weight}</span></p>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5">
                    <div
                      className={`h-1.5 rounded-full ${colorMap[cat.color]} transition-all duration-700`}
                      style={{ width: `${(cat.score / cat.weight) * 100}%` }}
                    />
                  </div>
                  <p className="text-xs text-slate-500">{cat.description}</p>
                </div>
              ))}
            </div>

            {/* Recommendations */}
            <div className="rounded-2xl bg-indigo-950/40 border border-indigo-500/20 p-6 space-y-4">
              <h2 className="text-lg font-semibold">Improve Your Score</h2>
              <div className="space-y-3 text-sm text-slate-300">
                {result.categories.find(c => c.label === "Salary Market Position" && c.score < c.weight * 0.7) && (
                  <div className="flex gap-3">
                    <span className="text-indigo-400 shrink-0">→</span>
                    <p>Your salary is below market. Use our <Link href="/salary-benchmark-calculator" className="text-indigo-400 hover:underline">Salary Benchmark Calculator</Link> to quantify the gap and build a negotiation case.</p>
                  </div>
                )}
                {result.categories.find(c => c.label === "Career Continuity" && c.score < c.weight * 0.8) && (
                  <div className="flex gap-3">
                    <span className="text-violet-400 shrink-0">→</span>
                    <p>Career gaps are impacting your score. Model your recovery path with our <Link href="/career-gap-calculator" className="text-violet-400 hover:underline">Career Gap Recovery Calculator</Link>.</p>
                  </div>
                )}
                {result.categories.find(c => c.label === "Skills Alignment" && c.score < c.weight * 0.7) && (
                  <div className="flex gap-3">
                    <span className="text-purple-400 shrink-0">→</span>
                    <p>Skills gap is holding you back. Quantify the cost with our <Link href="/skills-gap-calculator" className="text-purple-400 hover:underline">Skills Gap Calculator</Link>.</p>
                  </div>
                )}
                {result.categories.find(c => c.label === "Career Runway" && c.score < 100) && (
                  <div className="flex gap-3">
                    <span className="text-blue-400 shrink-0">→</span>
                    <p>Limited runway means every decision is higher stakes. Model your lifetime trajectory with the <Link href="/lifetime-earnings-calculator" className="text-blue-400 hover:underline">Lifetime Earnings Modeler</Link>.</p>
                  </div>
                )}
                {result.categories.find(c => c.label === "Financial Discipline" && c.score < 80) && (
                  <div className="flex gap-3">
                    <span className="text-cyan-400 shrink-0">→</span>
                    <p>Increasing your savings rate has compounding impact over decades. Even 5% more saves significantly at retirement.</p>
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={() => setShowResult(false)}
              className="w-full border border-white/20 hover:border-white/40 py-3 rounded-xl text-sm text-slate-400 hover:text-white transition-all"
            >
              Adjust Inputs
            </button>
          </div>
        )}

        {/* Footer nav */}
        <div className="mt-16 border-t border-white/10 pt-10 grid sm:grid-cols-3 gap-4">
          {[
            { href: "/career-gap-calculator", label: "Career Gap Calculator", desc: "Model earnings recovery" },
            { href: "/skills-gap-calculator", label: "Skills Gap Calculator", desc: "Quantify skills cost" },
            { href: "/salary-benchmark-calculator", label: "Salary Benchmark", desc: "Find your market rate" },
          ].map(item => (
            <Link key={item.href} href={item.href} className="group rounded-xl bg-white/5 border border-white/10 p-4 hover:border-indigo-500/30 transition-all">
              <p className="text-sm font-medium text-white group-hover:text-indigo-300 transition-colors">{item.label}</p>
              <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
