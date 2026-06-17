"use client"

import Link from "next/link"
import { useState, useMemo } from "react"
import { calculateLoyaltyTax } from "@/lib/loyaltyTaxEngine"
import { COUNTRIES, formatCurrency, defaultCountry, type CountryCode } from "@/lib/locale"
import { CountrySelect } from "@/components/CountrySelect"

export default function LoyaltyTaxCalculatorPage() {
  const [country, setCountry] = useState<CountryCode>(() => defaultCountry())
  const [startingSalary, setStartingSalary] = useState(80000)
  const [currentSalary, setCurrentSalary] = useState(95000)
  const [yearsAtCompany, setYearsAtCompany] = useState(5)
  const [averageRaisePct, setAverageRaisePct] = useState(3.0)
  const [marketGrowthPct, setMarketGrowthPct] = useState(5.5)
  const [copied, setCopied] = useState(false)

  const handleCountryChange = (c: CountryCode) => {
    setCountry(c)
    setStartingSalary(COUNTRIES[c].defaultSalary)
    setCurrentSalary(Math.round(COUNTRIES[c].defaultSalary * 1.18))
  }

  const result = useMemo(
    () => calculateLoyaltyTax({
      currentSalary,
      startingSalary,
      yearsAtCompany,
      averageAnnualRaisePct: averageRaisePct,
      marketGrowthRatePct: marketGrowthPct,
      projectionYears: 5,
    }),
    [currentSalary, startingSalary, yearsAtCompany, averageRaisePct, marketGrowthPct]
  )

  const handleShare = () => {
    const text = [
      `💸 My Loyalty Tax Statement`,
      ``,
      `${yearsAtCompany} years at the same company.`,
      `Starting salary: ${formatCurrency(startingSalary, country)}`,
      `Current salary: ${formatCurrency(currentSalary, country)}`,
      ``,
      `What the market would pay: ${formatCurrency(result.currentMarketRate, country)}`,
      `Annual loyalty tax (current year): ${formatCurrency(result.currentAnnualTax, country)}/yr`,
      `Total loyalty tax paid: ${formatCurrency(result.totalLoyaltyTax, country)}`,
      ``,
      `Switching now NPV gain (5yr): ${formatCurrency(result.switchNowNPV, country)}`,
      ``,
      `Calculate yours → careerreturns.com/loyalty-tax-calculator`,
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
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative flex items-start justify-between gap-4 mb-4">
          <p className="text-xs font-medium text-amber-400 uppercase tracking-widest">CareerReturns · Loyalty Tax</p>
          <CountrySelect value={country} onChange={handleCountryChange} />
        </div>
        <h1 className="relative text-3xl md:text-4xl font-semibold tracking-tight mb-3 leading-tight bg-linear-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
          Loyalty Tax Calculator
        </h1>
        <p className="text-white/70 max-w-2xl mb-6 text-lg leading-relaxed">
          Every year you stay at your company while external hires get market rates is a year you pay the loyalty tax.
          Enter your tenure — see exactly what it&apos;s cost you.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
          {[
            { stat: "18%", label: "More external hires earn vs. internal promotions (ADP Research)" },
            { stat: "5%+", label: "Average annual raise for job-switchers vs. 3% for stayers (Atlanta Fed)" },
            { stat: "50%", label: "More lifetime earnings for serial job-hoppers vs. loyal employees" },
            { stat: "Yr 3", label: "When the loyalty tax typically starts accelerating fastest" },
          ].map(({ stat, label }) => (
            <div key={stat} className="border border-white/10 rounded-lg p-3 bg-white/2">
              <div className="text-2xl font-bold text-white mb-1">{stat}</div>
              <div className="text-xs text-white/40 leading-tight">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-[1fr_420px] gap-10 items-start">
        {/* Inputs */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-white/50 uppercase tracking-widest block mb-1">
                Starting Salary at This Job ({COUNTRIES[country].currency})
              </label>
              <input type="number" value={startingSalary} step={5000} min={0}
                onChange={e => setStartingSalary(parseFloat(e.target.value) || 0)}
                className="w-full bg-white/5 border border-white/10 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-white/30" />
            </div>
            <div>
              <label className="text-xs text-white/50 uppercase tracking-widest block mb-1">
                Current Salary ({COUNTRIES[country].currency})
              </label>
              <input type="number" value={currentSalary} step={5000} min={0}
                onChange={e => setCurrentSalary(parseFloat(e.target.value) || 0)}
                className="w-full bg-white/5 border border-white/10 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-white/30" />
            </div>
          </div>

          <div>
            <label className="text-xs text-white/50 uppercase tracking-widest block mb-2">
              Years at This Company: <span className="text-amber-400 font-semibold">{yearsAtCompany}</span>
            </label>
            <input type="range" min={1} max={20} value={yearsAtCompany}
              onChange={e => setYearsAtCompany(parseInt(e.target.value))}
              className="w-full accent-amber-400" />
            <div className="flex justify-between text-xs text-white/30 mt-1">
              <span>1 yr</span><span>5</span><span>10</span><span>15</span><span>20 yrs</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-xs text-white/50 uppercase tracking-widest block mb-2">
                Your Average Annual Raise: <span className="text-amber-400 font-semibold">{averageRaisePct.toFixed(1)}%</span>
              </label>
              <input type="range" min={0} max={10} step={0.5} value={averageRaisePct}
                onChange={e => setAverageRaisePct(parseFloat(e.target.value))}
                className="w-full accent-amber-400" />
              <div className="flex justify-between text-xs text-white/30 mt-1">
                <span>0%</span><span>5%</span><span>10%</span>
              </div>
              <p className="text-xs text-white/30 mt-2">Median internal raise: ~3%</p>
            </div>
            <div>
              <label className="text-xs text-white/50 uppercase tracking-widest block mb-2">
                Market Salary Growth Rate: <span className="text-amber-400 font-semibold">{marketGrowthPct.toFixed(1)}%</span>
              </label>
              <input type="range" min={2} max={12} step={0.5} value={marketGrowthPct}
                onChange={e => setMarketGrowthPct(parseFloat(e.target.value))}
                className="w-full accent-amber-400" />
              <div className="flex justify-between text-xs text-white/30 mt-1">
                <span>2%</span><span>7%</span><span>12%</span>
              </div>
              <p className="text-xs text-white/30 mt-2">Job-switcher median: ~5.5%</p>
            </div>
          </div>

          {/* Year-by-year breakdown table */}
          {result.breakdown.length > 0 && (
            <div className="rounded-lg border border-white/10 overflow-hidden">
              <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <p className="text-xs font-medium text-amber-400 uppercase tracking-widest">Year-by-Year Loyalty Tax</p>
                <p className="text-xs text-white/30">Your salary vs. what the market would pay</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-white/5">
                      <th className="text-left px-4 py-2 text-white/30 font-normal">Year</th>
                      <th className="text-right px-4 py-2 text-white/30 font-normal">Your Salary</th>
                      <th className="text-right px-4 py-2 text-white/30 font-normal">Market Rate</th>
                      <th className="text-right px-4 py-2 text-white/30 font-normal">Annual Tax</th>
                      <th className="text-right px-4 py-2 text-white/30 font-normal">Cumulative</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.breakdown.map((row) => (
                      <tr
                        key={row.year}
                        className={`border-b border-white/5 ${row.year === result.optimalSwitchYear ? "bg-amber-400/5" : ""}`}
                      >
                        <td className="px-4 py-2 text-white/60">
                          {row.year}
                          {row.year === result.optimalSwitchYear && (
                            <span className="ml-1 text-amber-400 text-[10px]">← peak tax rate</span>
                          )}
                        </td>
                        <td className="px-4 py-2 text-right text-white/70">{formatCurrency(row.actualSalary, country)}</td>
                        <td className="px-4 py-2 text-right text-white/70">{formatCurrency(row.marketSalary, country)}</td>
                        <td className="px-4 py-2 text-right text-amber-400 font-medium">
                          {row.annualTax > 0 ? formatCurrency(row.annualTax, country) : "—"}
                        </td>
                        <td className="px-4 py-2 text-right text-amber-300">
                          {row.cumulativeTax > 0 ? formatCurrency(row.cumulativeTax, country) : "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Results — Loyalty Tax Statement */}
        <div className="space-y-4 sticky top-6">
          {/* Main statement card */}
          <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 overflow-hidden">
            <div className="px-5 py-4 border-b border-amber-400/20">
              <p className="text-xs font-medium text-amber-400 uppercase tracking-widest">Loyalty Tax Statement</p>
              <p className="text-white/40 text-xs mt-0.5">{yearsAtCompany} years at one company</p>
            </div>

            {/* Total loyalty tax — the hero number */}
            <div className="px-5 py-5 border-b border-amber-400/10">
              <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Total Loyalty Tax Paid</p>
              <div className="text-5xl font-black text-amber-400">
                {formatCurrency(result.totalLoyaltyTax, country)}
              </div>
              <p className="text-white/40 text-sm mt-1">
                in foregone earnings over {yearsAtCompany} year{yearsAtCompany !== 1 ? "s" : ""}
              </p>
            </div>

            {/* Key metrics */}
            <div className="px-5 py-4 grid grid-cols-2 gap-4 border-b border-amber-400/10">
              <div>
                <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Current Annual Tax</p>
                <p className="text-xl font-bold text-amber-300">{formatCurrency(result.currentAnnualTax, country)}/yr</p>
                <p className="text-xs text-white/30 mt-0.5">What you lose each year now</p>
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Market Rate (Your Level)</p>
                <p className="text-xl font-bold text-white/80">{formatCurrency(result.currentMarketRate, country)}</p>
                <p className="text-xs text-white/30 mt-0.5">vs your {formatCurrency(currentSalary, country)}</p>
              </div>
            </div>

            {/* Switch-now NPV */}
            <div className="px-5 py-4 border-b border-amber-400/10">
              <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Switch Now: 5-Year NPV Gain</p>
              <p className="text-2xl font-bold text-green-400">{formatCurrency(result.switchNowNPV, country)}</p>
              <p className="text-xs text-white/30 mt-0.5">
                Present value of earnings difference if you move to market rate today
              </p>
            </div>

            {/* Optimal switch insight */}
            <div className="px-5 py-4 border-b border-amber-400/10">
              <p className="text-xs text-white/40 uppercase tracking-wider mb-2">Hindsight: Optimal Switch</p>
              <p className="text-sm text-white/70">
                Your loyalty tax accelerated fastest at{" "}
                <span className="text-amber-400 font-semibold">Year {result.optimalSwitchYear}</span>.
                Switching then would have landed you at{" "}
                <span className="font-medium">{formatCurrency(result.optimalSwitchSalary, country)}</span>.
              </p>
            </div>

            {/* Share */}
            <div className="px-5 py-4">
              <button
                onClick={handleShare}
                className="w-full py-2.5 rounded-lg border border-amber-400/30 text-sm font-medium text-amber-300 hover:bg-amber-400/10 transition-all flex items-center justify-center gap-2"
              >
                {copied ? (
                  <>
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-green-400">Statement copied! Share on LinkedIn</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    Share My Loyalty Tax Statement
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Action plan */}
          <div className="rounded-lg border border-white/10 p-4 bg-white/2">
            <p className="text-xs font-medium text-white/40 uppercase tracking-widest mb-3">Recover Your Tax</p>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <span className="text-white/30 font-mono text-xs pt-0.5">01</span>
                <div>
                  <p className="font-medium text-white/90">Get a competing offer</p>
                  <p className="text-white/40 text-xs">The fastest way to correct compression. Use it as leverage or as an exit.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-white/30 font-mono text-xs pt-0.5">02</span>
                <div>
                  <p className="font-medium text-white/90">Request a market adjustment</p>
                  <p className="text-white/40 text-xs">Bring this data to HR. Many companies correct compression when shown the math.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-white/30 font-mono text-xs pt-0.5">03</span>
                <div>
                  <p className="font-medium text-white/90">Switch roles internally</p>
                  <p className="text-white/40 text-xs">Internal transfers often get external hire rates, resetting your salary band.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 p-4 bg-white/2">
            <p className="text-xs font-medium text-white/30 uppercase tracking-widest mb-3">Related Tools</p>
            <div className="space-y-2">
              <Link href="/am-i-underpaid" className="flex items-center justify-between text-sm text-white/60 hover:text-white transition-colors group">
                <span>Check your salary percentile →</span>
                <span className="text-white/20 group-hover:text-white/40 text-xs">Salary Audit</span>
              </Link>
              <Link href="/salary-negotiation-simulator" className="flex items-center justify-between text-sm text-white/60 hover:text-white transition-colors group">
                <span>Practice your negotiation →</span>
                <span className="text-white/20 group-hover:text-white/40 text-xs">Negotiation Sim</span>
              </Link>
              <Link href="/rto-cost-calculator" className="flex items-center justify-between text-sm text-white/60 hover:text-white transition-colors group">
                <span>Calculate your RTO cost →</span>
                <span className="text-white/20 group-hover:text-white/40 text-xs">RTO Calculator</span>
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
              q: "What is a loyalty tax?",
              a: "The loyalty tax is the cumulative salary gap between what a long-tenured employee earns and what a new external hire in the same role earns. ADP research shows external hires earn 18% more than internal promotions. Over 5 years at a company with 3% annual raises, this compounds to $30,000–$80,000 in lost earnings.",
            },
            {
              q: "Is job hopping better for your salary?",
              a: "Yes, statistically. The Atlanta Fed Wage Tracker consistently shows job-switchers earning ~5% more annually vs. ~3% for job-stayers. Over 10 years this compounds to a 50-80% salary advantage. The trade-off is loss of tenure benefits, vesting schedules, and institutional knowledge.",
            },
            {
              q: "When is the best time to switch jobs?",
              a: "The loyalty tax accelerates fastest around Years 3-5, when internal promotion rates flatten but market rates keep rising. This calculator shows your year-by-year tax increment to identify the inflection point in your specific situation.",
            },
            {
              q: "Should I use this to ask for a raise?",
              a: "Yes. A quantified loyalty tax is a powerful negotiation tool. 'Based on market data, my salary compression over 4 years totals $X' is far more persuasive than 'I feel underpaid.' Bring a competing offer if you can — that remains the most effective lever.",
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
