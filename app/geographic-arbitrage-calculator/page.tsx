"use client"

import Link from "next/link"
import { useState, useMemo } from "react"
import { calculateArbitrage, CITIES } from "@/lib/geographicArbitrageEngine"
import { formatCurrency } from "@/lib/locale"

const CITY_KEYS = Object.keys(CITIES)

const CITY_GROUPS = [
  { label: "🇺🇸 US Cities", keys: ["san_francisco", "new_york", "seattle", "boston", "austin", "denver", "chicago", "miami", "phoenix"] },
  { label: "🌍 Europe",     keys: ["lisbon", "barcelona", "berlin", "amsterdam", "prague", "tallinn", "london"] },
  { label: "🌎 Americas",   keys: ["medellin", "mexico_city", "buenos_aires", "toronto"] },
  { label: "🌏 Asia-Pacific",keys: ["bali", "chiang_mai", "singapore", "tokyo", "taipei"] },
  { label: "🌐 Other",      keys: ["dubai", "cape_town"] },
]

function formatYears(years: number): string {
  if (years >= 99) return "Never (expenses exceed income)"
  if (years < 1) return "< 1 year"
  return `${years.toFixed(1)} years`
}

export default function GeographicArbitrageCalculatorPage() {
  const [grossSalary, setGrossSalary] = useState(150000)
  const [cityAKey, setCityAKey] = useState("san_francisco")
  const [cityBKey, setCityBKey] = useState("lisbon")
  const [copied, setCopied] = useState(false)

  const result = useMemo(
    () => calculateArbitrage(grossSalary, cityAKey, cityBKey),
    [grossSalary, cityAKey, cityBKey]
  )

  const multiplierPositive = result.wealthMultiplier > 1

  const handleShare = () => {
    const text = [
      `🌍 Geographic Arbitrage Analysis`,
      ``,
      `Salary: $${grossSalary.toLocaleString()} (remote)`,
      ``,
      `📍 ${result.cityA.name}`,
      `Net salary: ${formatCurrency(result.netSalaryA, "US")}`,
      `Monthly surplus: ${formatCurrency(result.monthlySurplusA, "US")}`,
      `FIRE in: ${formatYears(result.fireTimelineA)}`,
      ``,
      `📍 ${result.cityB.name}`,
      `Net salary: ${formatCurrency(result.netSalaryB, "US")}`,
      `Monthly surplus: ${formatCurrency(result.monthlySurplusB, "US")}`,
      `FIRE in: ${formatYears(result.fireTimelineB)}`,
      ``,
      `Wealth Multiplier: ${result.wealthMultiplier.toFixed(2)}×`,
      `FIRE years saved: ${result.fireYearsSaved > 0 ? result.fireYearsSaved.toFixed(1) : "0"}`,
      `5-year wealth difference: ${formatCurrency(Math.abs(result.wealthDifference5yr), "US")}`,
      ``,
      `Calculate yours → careerreturns.com/geographic-arbitrage-calculator`,
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
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-teal-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative flex items-start justify-between gap-4 mb-4">
          <p className="text-xs font-medium text-teal-400 uppercase tracking-widest">CareerReturns · Geographic Arbitrage</p>
        </div>
        <h1 className="relative text-3xl md:text-4xl font-semibold tracking-tight mb-3 leading-tight bg-linear-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Remote Work Wealth Multiplier
        </h1>
        <p className="text-white/70 max-w-2xl mb-6 text-lg leading-relaxed">
          Earn a San Francisco salary, live in Lisbon. See your exact purchasing power multiplier, monthly surplus, and years until financial independence — for any two cities.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
          {[
            { stat: "2.1×",  label: "Typical wealth multiplier: NYC salary + Lisbon living" },
            { stat: "27",    label: "Cities covered across US, Europe, Asia, Americas" },
            { stat: "8yrs",  label: "Average FIRE timeline reduction for SF → Medellín" },
            { stat: "0%",    label: "Income tax in Dubai for remote workers" },
          ].map(({ stat, label }) => (
            <div key={stat} className="border border-white/10 rounded-lg p-3 bg-white/2">
              <div className="text-2xl font-bold text-white mb-1">{stat}</div>
              <div className="text-xs text-white/40 leading-tight">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-10 space-y-8">
        {/* Salary input */}
        <div className="max-w-sm">
          <label className="text-xs text-white/50 uppercase tracking-widest block mb-1">Gross Annual Salary (USD)</label>
          <input type="number" value={grossSalary} step={10000} min={0}
            onChange={e => setGrossSalary(parseFloat(e.target.value) || 0)}
            className="w-full bg-white/5 border border-white/10 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-white/30" />
        </div>

        {/* City pickers */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* City A */}
          <div>
            <label className="text-xs text-white/50 uppercase tracking-widest block mb-3">
              📍 City A — Where you earn / current location
            </label>
            <div className="space-y-3">
              {CITY_GROUPS.map(group => (
                <div key={group.label}>
                  <p className="text-xs text-white/30 mb-1">{group.label}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.keys.map(k => (
                      <button key={k} onClick={() => setCityAKey(k)}
                        className={`px-2 py-1 text-xs rounded border transition-all ${cityAKey === k ? "border-teal-400/50 bg-teal-400/10 text-white" : "border-white/10 text-white/40 hover:border-white/20"}`}>
                        {CITIES[k].name.split(",")[0]}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* City B */}
          <div>
            <label className="text-xs text-white/50 uppercase tracking-widest block mb-3">
              ✈️ City B — Where you&apos;d live / destination
            </label>
            <div className="space-y-3">
              {CITY_GROUPS.map(group => (
                <div key={group.label}>
                  <p className="text-xs text-white/30 mb-1">{group.label}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.keys.map(k => (
                      <button key={k} onClick={() => setCityBKey(k)}
                        className={`px-2 py-1 text-xs rounded border transition-all ${cityBKey === k ? "border-cyan-400/50 bg-cyan-400/10 text-white" : "border-white/10 text-white/40 hover:border-white/20"}`}>
                        {CITIES[k].name.split(",")[0]}
                        {CITIES[k].effectiveTaxRate === 0 && <span className="ml-1 text-yellow-400 text-[9px]">0% tax</span>}
                        {CITIES[k].visaFriendly && <span className="ml-1 text-green-400 text-[9px]">✓ visa</span>}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results comparison */}
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
          {/* City A card */}
          <div className="rounded-xl border border-white/10 p-5 bg-white/2">
            <p className="text-xs font-medium text-teal-400 uppercase tracking-widest mb-1">📍 {result.cityA.name}</p>
            <p className="text-xs text-white/30 mb-4">COL Index: {result.cityA.colIndex} · Tax: {(result.cityA.effectiveTaxRate * 100).toFixed(0)}%</p>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-white/40">Net Annual Salary</p>
                <p className="text-xl font-bold text-white">{formatCurrency(result.netSalaryA, "US")}</p>
              </div>
              <div>
                <p className="text-xs text-white/40">Monthly Surplus</p>
                <p className={`text-lg font-semibold ${result.monthlySurplusA > 0 ? "text-green-400" : "text-red-400"}`}>
                  {result.monthlySurplusA > 0 ? "+" : ""}{formatCurrency(result.monthlySurplusA, "US")}/mo
                </p>
              </div>
              <div>
                <p className="text-xs text-white/40">FIRE Timeline</p>
                <p className="text-sm font-medium text-white/80">{formatYears(result.fireTimelineA)}</p>
              </div>
              <div>
                <p className="text-xs text-white/40">5-Year Wealth Built</p>
                <p className="text-sm font-medium text-white/80">{formatCurrency(result.wealthAt5YearsA, "US")}</p>
              </div>
            </div>
          </div>

          {/* Wealth multiplier badge */}
          <div className="flex flex-col items-center gap-2 py-4">
            <div className={`text-4xl font-black ${multiplierPositive ? "text-cyan-400" : "text-red-400"}`}>
              {result.wealthMultiplier.toFixed(2)}×
            </div>
            <p className="text-xs text-white/40 text-center">wealth<br/>multiplier</p>
            <div className="text-2xl text-white/20">→</div>
          </div>

          {/* City B card */}
          <div className={`rounded-xl border p-5 ${multiplierPositive ? "border-cyan-400/30 bg-cyan-400/5" : "border-white/10 bg-white/2"}`}>
            <p className={`text-xs font-medium uppercase tracking-widest mb-1 ${multiplierPositive ? "text-cyan-400" : "text-white/50"}`}>
              ✈️ {result.cityB.name}
            </p>
            <p className="text-xs text-white/30 mb-4">COL Index: {result.cityB.colIndex} · Tax: {(result.cityB.effectiveTaxRate * 100).toFixed(0)}%</p>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-white/40">Net Annual Salary</p>
                <p className="text-xl font-bold text-white">{formatCurrency(result.netSalaryB, "US")}</p>
              </div>
              <div>
                <p className="text-xs text-white/40">Monthly Surplus</p>
                <p className={`text-lg font-semibold ${result.monthlySurplusB > 0 ? "text-green-400" : "text-red-400"}`}>
                  {result.monthlySurplusB > 0 ? "+" : ""}{formatCurrency(result.monthlySurplusB, "US")}/mo
                </p>
              </div>
              <div>
                <p className="text-xs text-white/40">FIRE Timeline</p>
                <p className={`text-sm font-medium ${result.fireTimelineB < result.fireTimelineA ? "text-green-400" : "text-white/80"}`}>
                  {formatYears(result.fireTimelineB)}
                  {result.fireYearsSaved > 0 && (
                    <span className="text-xs text-green-400 ml-1">(−{result.fireYearsSaved.toFixed(1)} yrs)</span>
                  )}
                </p>
              </div>
              <div>
                <p className="text-xs text-white/40">5-Year Wealth Built</p>
                <p className={`text-sm font-medium ${result.wealthAt5YearsB > result.wealthAt5YearsA ? "text-green-400" : "text-white/80"}`}>
                  {formatCurrency(result.wealthAt5YearsB, "US")}
                  {result.wealthDifference5yr > 0 && (
                    <span className="text-xs ml-1">(+{formatCurrency(result.wealthDifference5yr, "US")})</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary insight + share */}
        <div className={`rounded-xl border p-5 ${multiplierPositive ? "border-cyan-400/20 bg-cyan-400/5" : "border-white/10 bg-white/2"}`}>
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="flex-1">
              <p className="text-sm font-medium text-white/90 mb-1">
                {multiplierPositive
                  ? `Moving from ${result.cityA.name.split(",")[0]} to ${result.cityB.name.split(",")[0]} gives you a ${result.wealthMultiplier.toFixed(2)}× wealth multiplier.`
                  : `${result.cityB.name.split(",")[0]} is more expensive than ${result.cityA.name.split(",")[0]} on a net-adjusted basis.`}
              </p>
              <p className="text-xs text-white/50">
                {result.wealthDifference5yr > 0
                  ? `Over 5 years, you build ${formatCurrency(result.wealthDifference5yr, "US")} more wealth in ${result.cityB.name.split(",")[0]}.`
                  : `Over 5 years, you build ${formatCurrency(Math.abs(result.wealthDifference5yr), "US")} more in ${result.cityA.name.split(",")[0]}.`}
                {result.fireYearsSaved > 0.5 && ` You reach financial independence ${result.fireYearsSaved.toFixed(1)} years sooner.`}
              </p>
            </div>
            <button
              onClick={handleShare}
              className={`py-2 px-4 rounded-lg border text-sm font-medium transition-all flex items-center gap-2 flex-shrink-0 ${multiplierPositive ? "border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10" : "border-white/20 text-white/70 hover:bg-white/5"}`}
            >
              {copied ? (
                <><span className="text-green-400">✓ Copied!</span></>
              ) : (
                <><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>Share Comparison</>
              )}
            </button>
          </div>
        </div>

        {/* Related tools */}
        <div className="rounded-lg border border-white/10 p-4 bg-white/2">
          <p className="text-xs font-medium text-white/30 uppercase tracking-widest mb-3">Related Tools</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { href: "/am-i-underpaid", label: "Am I Underpaid?" },
              { href: "/rto-cost-calculator", label: "RTO Cost Calculator" },
              { href: "/loyalty-tax-calculator", label: "Loyalty Tax Calculator" },
              { href: "/ai-career-impact", label: "AI Career Impact" },
            ].map(l => (
              <Link key={l.href} href={l.href}
                className="border border-white/10 rounded-lg px-3 py-2.5 text-xs text-white/50 hover:border-white/20 hover:text-white/70 transition-all text-center">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-12 border-t border-white/10">
        <h2 className="text-xl font-semibold mb-6 text-white/90">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "What is geographic arbitrage?",
              a: "Geographic arbitrage is earning income in a high-wage market (San Francisco, New York) while living in a lower cost-of-living location (Lisbon, Medellín, Chiang Mai). Remote workers can keep their salary while dramatically cutting expenses — increasing purchasing power and accelerating financial independence.",
            },
            {
              q: "What are the best cities for geographic arbitrage in 2026?",
              a: "Top destinations include Lisbon (Portugal) for its NHR tax program and low COL, Medellín (Colombia) for sub-$1,200/mo living costs, Chiang Mai (Thailand) for sub-$1,000/mo with excellent infrastructure, Tallinn (Estonia) and Prague (Czech Republic) for EU access, and Dubai for 0% income tax.",
            },
            {
              q: "Do I pay US taxes if I live abroad?",
              a: "US citizens and permanent residents must file US taxes regardless of where they live. However, the Foreign Earned Income Exclusion (FEIE) allows you to exclude up to ~$130,000 in foreign-earned income from US tax in 2026, and the Foreign Tax Credit can offset taxes paid abroad. Consult a tax professional familiar with expat taxation before relocating.",
            },
            {
              q: "How accurate are the tax rates in this calculator?",
              a: "This calculator uses estimated effective tax rates (income tax as a fraction of gross income) for a single person earning $100K–$200K in each location. The figures are directionally accurate but simplified — they do not account for municipal taxes, social security contributions, capital gains, or complex treaty provisions. Use them for planning, not filing.",
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
