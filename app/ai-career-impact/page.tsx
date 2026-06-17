"use client"

import Link from "next/link"
import { useState, useMemo } from "react"
import { calculateAIImpact, AI_IMPACT_ROLES } from "@/lib/aiDisplacementEngine"
import { COUNTRIES, formatCurrency, defaultCountry, type CountryCode } from "@/lib/locale"
import { CountrySelect } from "@/components/CountrySelect"

const RISK_CONFIGS = {
  low:      { color: "text-green-400",  border: "border-green-400/30",  bg: "bg-green-400/5",  badge: "border-green-400/40 text-green-400" },
  medium:   { color: "text-yellow-400", border: "border-yellow-400/30", bg: "bg-yellow-400/5", badge: "border-yellow-400/40 text-yellow-400" },
  high:     { color: "text-orange-400", border: "border-orange-400/30", bg: "bg-orange-400/5", badge: "border-orange-400/40 text-orange-400" },
  critical: { color: "text-red-400",    border: "border-red-400/30",    bg: "bg-red-400/5",    badge: "border-red-400/40 text-red-400" },
}

export default function AICareerImpactPage() {
  const [country, setCountry] = useState<CountryCode>(() => defaultCountry())
  const [currentSalary, setCurrentSalary] = useState(95000)
  const [selectedIndustryIdx, setSelectedIndustryIdx] = useState(0)
  const [selectedRoleId, setSelectedRoleId] = useState("software_engineer")
  const [copied, setCopied] = useState(false)

  const selectedIndustry = AI_IMPACT_ROLES[selectedIndustryIdx]

  const handleIndustryChange = (idx: number) => {
    setSelectedIndustryIdx(idx)
    const firstRole = AI_IMPACT_ROLES[idx]?.roles[0]
    if (firstRole) setSelectedRoleId(firstRole.id)
  }

  const handleCountryChange = (c: CountryCode) => {
    setCountry(c)
    setCurrentSalary(COUNTRIES[c].defaultSalary)
  }

  const result = useMemo(
    () => calculateAIImpact(currentSalary, selectedIndustry.industryId, selectedRoleId),
    [currentSalary, selectedIndustry, selectedRoleId]
  )

  const cfg = RISK_CONFIGS[result.profile.riskLevel]
  const topHedges = result.hedgeAnalysis.slice(0, 3)

  const handleShare = () => {
    const roleName = selectedIndustry.roles.find(r => r.id === selectedRoleId)?.label ?? selectedRoleId
    const text = [
      `🤖 AI Career Impact Audit`,
      ``,
      `Role: ${roleName} in ${selectedIndustry.industryLabel}`,
      `AI Displacement Risk: ${(result.profile.displacementProbability * 100).toFixed(0)}% (${result.riskLabel})`,
      `Tasks automatable today: ${(result.profile.partialAutomationFraction * 100).toFixed(0)}%`,
      ``,
      `⚠️ Without action:`,
      `Expected 5-year income loss: ${formatCurrency(result.fiveYearExpectedLossNPV, country)} (NPV)`,
      ``,
      `🛡️ Best hedge: ${topHedges[0]?.hedge.label ?? ""}`,
      `Cost: ${topHedges[0] ? (topHedges[0].hedgeCost > 0 ? formatCurrency(topHedges[0].hedgeCost, country) : "Free") : ""}`,
      `Net NPV gain: ${topHedges[0] ? formatCurrency(topHedges[0].netNPV, country) : ""}`,
      ``,
      `Calculate yours → careerreturns.com/ai-career-impact`,
    ].join("\n")

    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2500)
      })
    }
  }

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-12 max-w-5xl mx-auto">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative flex items-start justify-between gap-4 mb-4">
          <p className="text-xs font-medium text-blue-400 uppercase tracking-widest">CareerReturns · AI Risk</p>
          <CountrySelect value={country} onChange={handleCountryChange} />
        </div>
        <h1 className="relative text-3xl md:text-4xl font-semibold tracking-tight mb-3 leading-tight bg-linear-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
          AI Career Impact Calculator
        </h1>
        <p className="text-white/70 max-w-2xl mb-6 text-lg leading-relaxed">
          Most AI risk tools give you a percentage. This one gives you a dollar figure — and the exact hedge that
          reduces it the most for your role.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
          {[
            { stat: "300M", label: "Jobs facing AI disruption globally (Goldman Sachs 2023)" },
            { stat: "25%", label: "Of work tasks automatable by current AI (McKinsey 2024)" },
            { stat: "82%", label: "Of customer service tasks already automatable" },
            { stat: "2031", label: "Target year for 50% task automation in most roles" },
          ].map(({ stat, label }) => (
            <div key={stat} className="border border-white/10 rounded-lg p-3 bg-white/2">
              <div className="text-2xl font-bold text-white mb-1">{stat}</div>
              <div className="text-xs text-white/40 leading-tight">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-[1fr_400px] gap-10 items-start">
        {/* Inputs */}
        <div className="space-y-6">
          <div>
            <label className="text-xs text-white/50 uppercase tracking-widest block mb-1">
              Current Annual Salary ({COUNTRIES[country].currency})
            </label>
            <input type="number" value={currentSalary} step={5000} min={0}
              onChange={e => setCurrentSalary(parseFloat(e.target.value) || 0)}
              className="w-full bg-white/5 border border-white/10 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-white/30" />
          </div>

          <div>
            <label className="text-xs text-white/50 uppercase tracking-widest block mb-2">Industry</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {AI_IMPACT_ROLES.map((ind, idx) => (
                <button key={ind.industryId} onClick={() => handleIndustryChange(idx)}
                  className={`px-2 py-2 text-xs rounded border transition-all ${selectedIndustryIdx === idx ? "border-blue-400/50 bg-blue-400/10 text-white" : "border-white/10 text-white/40 hover:border-white/20"}`}>
                  {ind.industryLabel}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs text-white/50 uppercase tracking-widest block mb-2">Role</label>
            <div className="flex flex-wrap gap-2">
              {(selectedIndustry?.roles ?? []).map(r => (
                <button key={r.id} onClick={() => setSelectedRoleId(r.id)}
                  className={`px-3 py-2 text-xs rounded border transition-all ${selectedRoleId === r.id ? "border-blue-400/50 bg-blue-400/10 text-white" : "border-white/10 text-white/40 hover:border-white/20"}`}>
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          {/* Hedge options ranked by NPV */}
          <div className="rounded-lg border border-white/10 overflow-hidden">
            <div className="px-4 py-3 border-b border-white/10">
              <p className="text-xs font-medium text-blue-400 uppercase tracking-widest">Reskilling Hedges — Ranked by NPV</p>
              <p className="text-xs text-white/30 mt-0.5">All 8 options sorted by net 5-year value</p>
            </div>
            <div className="divide-y divide-white/5">
              {result.hedgeAnalysis.map((h, i) => (
                <div key={h.hedge.id} className={`px-4 py-3 flex items-start gap-3 ${i === 0 ? "bg-blue-400/5" : ""}`}>
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-xs text-white/30 font-mono mt-0.5">
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className={`text-sm font-medium ${i === 0 ? "text-blue-300" : "text-white/70"}`}>{h.hedge.label}</p>
                      {i === 0 && <span className="text-[10px] text-blue-400 border border-blue-400/30 rounded px-1.5 py-0.5 whitespace-nowrap">Best ROI</span>}
                    </div>
                    <div className="flex items-center gap-3 mt-1 text-xs text-white/40">
                      <span>Cost: {h.hedgeCost > 0 ? formatCurrency(h.hedgeCost, country) : "Free"}</span>
                      <span>·</span>
                      <span>{h.hedge.durationMonths} mo</span>
                      <span>·</span>
                      <span>Risk: {(result.profile.displacementProbability * 100).toFixed(0)}% → {(h.displacementRiskAfter * 100).toFixed(0)}%</span>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className={`text-sm font-bold ${h.netNPV > 0 ? "text-green-400" : "text-red-400"}`}>
                      +{formatCurrency(h.netNPV, country)}
                    </p>
                    <p className="text-xs text-white/30">net NPV</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4 sticky top-6">
          {/* Risk card */}
          <div className={`rounded-xl border p-6 ${cfg.border} ${cfg.bg}`}>
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs font-medium text-white/40 uppercase tracking-widest">AI Risk Audit</p>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${cfg.badge}`}>
                {result.riskLabel}
              </span>
            </div>

            {/* Displacement probability — hero number */}
            <div className="text-center py-4 border-b border-white/10 mb-4">
              <div className={`text-7xl font-black mb-1 ${cfg.color}`}>
                {(result.profile.displacementProbability * 100).toFixed(0)}<span className="text-3xl">%</span>
              </div>
              <p className="text-white/50 text-sm">displacement probability</p>
              <p className="text-white/30 text-xs mt-1">
                {(result.profile.partialAutomationFraction * 100).toFixed(0)}% of tasks automatable now · ~{result.profile.timelineYears}yr timeline
              </p>
            </div>

            {/* Financial impact */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Annual Expected Loss</p>
                <p className={`text-xl font-bold ${cfg.color}`}>{formatCurrency(result.expectedAnnualLoss, country)}</p>
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-wider mb-1">5-Year NPV Loss</p>
                <p className={`text-xl font-bold ${cfg.color}`}>{formatCurrency(result.fiveYearExpectedLossNPV, country)}</p>
              </div>
            </div>

            {/* Best hedge highlight */}
            {topHedges[0] && (
              <div className="rounded-lg border border-blue-400/20 bg-blue-400/5 p-3 mb-4">
                <p className="text-xs text-blue-400 font-medium mb-1">Best Hedge for Your Role</p>
                <p className="text-sm text-white/80 font-medium">{topHedges[0].hedge.label}</p>
                <div className="flex items-center gap-3 mt-1 text-xs text-white/50">
                  <span>Cost: {topHedges[0].hedgeCost > 0 ? formatCurrency(topHedges[0].hedgeCost, country) : "Free"}</span>
                  <span>·</span>
                  <span className="text-green-400 font-medium">Net NPV: +{formatCurrency(topHedges[0].netNPV, country)}</span>
                </div>
                <p className="text-xs text-white/30 mt-1">
                  Reduces displacement risk: {(result.profile.displacementProbability * 100).toFixed(0)}% → {(topHedges[0].displacementRiskAfter * 100).toFixed(0)}%
                </p>
              </div>
            )}

            {/* Share button */}
            <button
              onClick={handleShare}
              className="w-full py-2.5 rounded-lg border border-white/20 text-sm font-medium text-white/80 hover:bg-white/5 hover:border-white/30 transition-all flex items-center justify-center gap-2"
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-green-400">Copied! Share on LinkedIn</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Share My AI Risk Report
                </>
              )}
            </button>
          </div>

          {/* Unhedged vs hedged summary */}
          <div className="rounded-lg border border-white/10 p-4 bg-white/2">
            <p className="text-xs font-medium text-white/40 uppercase tracking-widest mb-3">Unhedged vs. Hedged (5yr NPV)</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/60">Unhedged expected loss</span>
                <span className={`font-medium ${cfg.color}`}>−{formatCurrency(result.fiveYearExpectedLossNPV, country)}</span>
              </div>
              {topHedges[0] && (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">After best hedge ({topHedges[0].hedge.durationMonths}mo)</span>
                  <span className="font-medium text-green-400">+{formatCurrency(topHedges[0].netNPV, country)}</span>
                </div>
              )}
              {topHedges[0] && (
                <div className="border-t border-white/10 pt-2 flex items-center justify-between text-sm font-semibold">
                  <span className="text-white/80">Hedge ROI</span>
                  <span className="text-green-400">{topHedges[0].roiPct > 999 ? "∞ (free)" : `${topHedges[0].roiPct.toFixed(0)}%`}</span>
                </div>
              )}
            </div>
          </div>

          <div className="rounded-lg border border-white/10 p-4 bg-white/2">
            <p className="text-xs font-medium text-white/30 uppercase tracking-widest mb-3">Related Tools</p>
            <div className="space-y-2">
              <Link href="/reskilling-roi-calculator" className="flex items-center justify-between text-sm text-white/60 hover:text-white transition-colors group">
                <span>Model your reskilling ROI →</span>
                <span className="text-white/20 group-hover:text-white/40 text-xs">Reskilling ROI</span>
              </Link>
              <Link href="/am-i-underpaid" className="flex items-center justify-between text-sm text-white/60 hover:text-white transition-colors group">
                <span>Check your salary percentile →</span>
                <span className="text-white/20 group-hover:text-white/40 text-xs">Salary Audit</span>
              </Link>
              <Link href="/career-roi-score" className="flex items-center justify-between text-sm text-white/60 hover:text-white transition-colors group">
                <span>Get your full Career ROI Score →</span>
                <span className="text-white/20 group-hover:text-white/40 text-xs">ROI Score</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-12 border-t border-white/10">
        <h2 className="text-xl font-semibold mb-6 text-white/90">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which jobs are most at risk from AI?",
              a: "Administrative assistants (76%), customer service reps (82%), paralegal/legal assistants (71%), content writers (74%), and accountants (67%) face the highest automation rates. Lower-risk roles include nurses (10%), management consultants (20%), and lawyers (25%), where judgment and relationship skills resist automation.",
            },
            {
              q: "What is the best skill to learn to protect yourself from AI?",
              a: "AI tools proficiency (ChatGPT, Claude, Copilot) is the highest-ROI hedge for most roles: it costs nothing, takes 1-2 months, and adds 8-12% salary uplift while reducing displacement risk by 20%+. For technical roles, Python and AWS certifications offer stronger long-term protection. The key: learn to direct AI, not compete with it.",
            },
            {
              q: "How is the AI displacement risk calculated?",
              a: "Data is sourced from Goldman Sachs' 2023 report (300M jobs at risk), McKinsey's 2024 generative AI analysis, and WEF Future of Jobs 2025. Displacement probability = fraction of job tasks automatable by current LLMs. The expected income loss model is probability-weighted and NPV-discounted at 6% over 5 years.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="border-b border-white/10 pb-6">
              <h3 className="font-medium text-white/90 mb-2">{q}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
