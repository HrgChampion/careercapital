"use client"

import Link from "next/link"
import { useState, useMemo } from "react"

type Employer = {
  name: string
  industry: string
  country: string
  returnshipProgram: boolean
  programLength: string
  conversionRate: number   // %
  salaryRecovery: number   // % of market rate at 2-year mark
  promotionVelocity: string
  flexWork: boolean
  sponsorship: boolean
  programName: string
  score: number
  grade: string
}

const EMPLOYERS: Employer[] = [
  { name: "Amazon", industry: "Tech", country: "US", returnshipProgram: true, programLength: "16 weeks", conversionRate: 80, salaryRecovery: 95, promotionVelocity: "Fast (12–18 mo)", flexWork: true, sponsorship: true, programName: "Amazon Returnship", score: 88, grade: "A" },
  { name: "Goldman Sachs", industry: "Finance", country: "US", returnshipProgram: true, programLength: "10 weeks", conversionRate: 75, salaryRecovery: 97, promotionVelocity: "Standard (18–24 mo)", flexWork: false, sponsorship: true, programName: "Returnship", score: 85, grade: "A" },
  { name: "McKinsey", industry: "Consulting", country: "US", returnshipProgram: true, programLength: "8 weeks", conversionRate: 82, salaryRecovery: 100, promotionVelocity: "Fast (up/out 24 mo)", flexWork: true, sponsorship: true, programName: "Return to McKinsey", score: 91, grade: "A+" },
  { name: "Google", industry: "Tech", country: "US", returnshipProgram: true, programLength: "18 weeks", conversionRate: 70, salaryRecovery: 98, promotionVelocity: "Standard (18–24 mo)", flexWork: true, sponsorship: true, programName: "reWORKed", score: 86, grade: "A" },
  { name: "JPMorgan Chase", industry: "Finance", country: "US", returnshipProgram: true, programLength: "10 weeks", conversionRate: 65, salaryRecovery: 93, promotionVelocity: "Standard (24 mo)", flexWork: false, sponsorship: true, programName: "ReEntry Program", score: 78, grade: "B+" },
  { name: "Microsoft", industry: "Tech", country: "US", returnshipProgram: true, programLength: "16 weeks", conversionRate: 72, salaryRecovery: 96, promotionVelocity: "Standard (18–24 mo)", flexWork: true, sponsorship: true, programName: "LEAP", score: 84, grade: "A-" },
  { name: "Morgan Stanley", industry: "Finance", country: "US", returnshipProgram: true, programLength: "12 weeks", conversionRate: 68, salaryRecovery: 94, promotionVelocity: "Standard (24 mo)", flexWork: false, sponsorship: false, programName: "Return to Work", score: 74, grade: "B" },
  { name: "Deloitte", industry: "Consulting", country: "US", returnshipProgram: true, programLength: "6 weeks", conversionRate: 60, salaryRecovery: 90, promotionVelocity: "Standard (24 mo)", flexWork: true, sponsorship: false, programName: "Encore", score: 70, grade: "B" },
  { name: "Apple", industry: "Tech", country: "US", returnshipProgram: false, programLength: "—", conversionRate: 0, salaryRecovery: 92, promotionVelocity: "Standard (24 mo)", flexWork: false, sponsorship: false, programName: "—", score: 58, grade: "C+" },
  { name: "Accenture", industry: "Consulting", country: "US", returnshipProgram: true, programLength: "12 weeks", conversionRate: 65, salaryRecovery: 88, promotionVelocity: "Fast (12–18 mo)", flexWork: true, sponsorship: true, programName: "Career Re-Entry", score: 76, grade: "B+" },
  { name: "Bank of America", industry: "Finance", country: "US", returnshipProgram: true, programLength: "10 weeks", conversionRate: 62, salaryRecovery: 91, promotionVelocity: "Standard (24 mo)", flexWork: false, sponsorship: false, programName: "Returning Talent", score: 69, grade: "B-" },
  { name: "Meta", industry: "Tech", country: "US", returnshipProgram: true, programLength: "16 weeks", conversionRate: 73, salaryRecovery: 99, promotionVelocity: "Fast (12–18 mo)", flexWork: true, sponsorship: true, programName: "Career Relaunch", score: 83, grade: "A-" },
]

const INDUSTRIES = ["All", "Tech", "Finance", "Consulting"]

const gradeColors: Record<string, string> = {
  "A+": "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
  "A": "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
  "A-": "text-teal-400 bg-teal-400/10 border-teal-400/30",
  "B+": "text-blue-400 bg-blue-400/10 border-blue-400/30",
  "B": "text-blue-400 bg-blue-400/10 border-blue-400/30",
  "B-": "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
  "C+": "text-orange-400 bg-orange-400/10 border-orange-400/30",
}

export default function EmployerScorecardPage() {
  const [industry, setIndustry] = useState("All")
  const [minGrade, setMinGrade] = useState("All")
  const [sortBy, setSortBy] = useState<"score" | "conversionRate" | "salaryRecovery">("score")
  const [returnshipOnly, setReturnshipOnly] = useState(false)

  const filtered = useMemo(() => {
    return EMPLOYERS
      .filter(e => industry === "All" || e.industry === industry)
      .filter(e => minGrade === "All" || e.grade <= minGrade || e.grade.startsWith(minGrade[0]))
      .filter(e => !returnshipOnly || e.returnshipProgram)
      .sort((a, b) => b[sortBy] - a[sortBy])
  }, [industry, minGrade, sortBy, returnshipOnly])

  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-175 h-150 bg-indigo-600/10 rounded-full blur-[130px] -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Link href="/" className="text-xs text-slate-500 hover:text-slate-300 transition-colors mb-8 inline-block">← CareerReturns</Link>

        <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-3">Employer Scorecard</p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight bg-linear-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent mb-4">
          Career Return<br />Employer Rankings
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl">
          Which employers are genuinely return-to-work friendly? Scored on returnship conversion rate, salary recovery, promotion velocity, and program quality — not marketing.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          <div className="flex gap-2">
            {INDUSTRIES.map(i => (
              <button key={i} onClick={() => setIndustry(i)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${industry === i ? "bg-indigo-600 text-white" : "bg-white/5 text-slate-400 hover:bg-white/10"}`}>
                {i}
              </button>
            ))}
          </div>
          <button
            onClick={() => setReturnshipOnly(!returnshipOnly)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${returnshipOnly ? "bg-emerald-700 text-white" : "bg-white/5 text-slate-400 hover:bg-white/10"}`}
          >
            Has Returnship Program
          </button>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value as typeof sortBy)}
            className="bg-white/5 border border-white/10 rounded-lg text-xs text-slate-300 px-3 py-1.5 outline-none"
          >
            <option value="score">Sort: Overall Score</option>
            <option value="conversionRate">Sort: Conversion Rate</option>
            <option value="salaryRecovery">Sort: Salary Recovery</option>
          </select>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
            <p className="text-2xl font-bold text-white">{filtered.filter(e => e.returnshipProgram).length}</p>
            <p className="text-xs text-slate-500 mt-1">with returnship programs</p>
          </div>
          <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
            <p className="text-2xl font-bold text-white">
              {Math.round(filtered.filter(e => e.returnshipProgram).reduce((s, e) => s + e.conversionRate, 0) / Math.max(1, filtered.filter(e => e.returnshipProgram).length))}%
            </p>
            <p className="text-xs text-slate-500 mt-1">avg conversion rate</p>
          </div>
          <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
            <p className="text-2xl font-bold text-white">
              {Math.round(filtered.reduce((s, e) => s + e.salaryRecovery, 0) / Math.max(1, filtered.length))}%
            </p>
            <p className="text-xs text-slate-500 mt-1">avg salary recovery</p>
          </div>
        </div>

        {/* Employer cards */}
        <div className="space-y-3">
          {filtered.map((emp, rank) => (
            <div key={emp.name} className="rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/20 p-5 sm:p-6 transition-all">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-slate-700 text-sm font-mono w-5 shrink-0">#{rank + 1}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold text-white text-lg">{emp.name}</p>
                      <span className="text-xs text-slate-500 bg-white/5 px-2 py-0.5 rounded-full">{emp.industry}</span>
                    </div>
                    {emp.returnshipProgram ? (
                      <p className="text-xs text-emerald-400">{emp.programName} · {emp.programLength}</p>
                    ) : (
                      <p className="text-xs text-slate-600">No dedicated returnship program</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <div className="text-right">
                    <p className="text-2xl font-bold text-white">{emp.score}</p>
                    <p className="text-xs text-slate-500">score</p>
                  </div>
                  <span className={`text-sm font-bold px-2 py-1 rounded-lg border ${gradeColors[emp.grade] ?? "text-slate-400"}`}>
                    {emp.grade}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-4 border-t border-white/5">
                <div>
                  <p className="text-xs text-slate-600 mb-1">Conversion Rate</p>
                  <p className={`text-sm font-semibold ${emp.conversionRate >= 70 ? "text-emerald-400" : emp.conversionRate >= 55 ? "text-yellow-400" : "text-slate-500"}`}>
                    {emp.returnshipProgram ? `${emp.conversionRate}%` : "—"}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-600 mb-1">Salary Recovery</p>
                  <p className={`text-sm font-semibold ${emp.salaryRecovery >= 95 ? "text-emerald-400" : emp.salaryRecovery >= 88 ? "text-yellow-400" : "text-orange-400"}`}>
                    {emp.salaryRecovery}% of market
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-600 mb-1">Promotion Speed</p>
                  <p className="text-sm font-semibold text-slate-300">{emp.promotionVelocity}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-600 mb-1">Flex / Sponsor</p>
                  <p className="text-sm font-semibold text-slate-300">
                    {[emp.flexWork && "Flex", emp.sponsorship && "Sponsors"].filter(Boolean).join(" · ") || "Neither"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-slate-600 mt-6 text-center">
          Data sourced from iRelaunch 2024, company career pages, and CareerReturns research. Scores are estimates; verify program status before applying.
        </p>

        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          {[
            { href: "/returnship-roi-calculator", label: "Returnship ROI Analyzer", desc: "Model any program's ROI" },
            { href: "/returnship-programs-2026", label: "Returnship Programs 2026", desc: "Full program directory" },
            { href: "/career-gap-calculator", label: "Career Gap Calculator", desc: "Model gap recovery" },
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
