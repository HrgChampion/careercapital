"use client"

import Link from "next/link"
import { useState, useMemo } from "react"
import { COUNTRIES, formatCurrency, defaultCountry, type CountryCode } from "@/lib/locale"
import { CountrySelect } from "@/components/CountrySelect"
import { npvFromSeries, DISCOUNT_RATE } from "@/lib/mbaEngine"

// IRS standard mileage rate 2026
const IRS_MILEAGE_RATE = 0.67 // USD per mile

// Remote salary premium by role type (research-based estimates)
const REMOTE_PREMIUM_RATES: Record<string, { label: string; premium: number }> = {
  tech:        { label: "Tech / Software", premium: 0.18 },
  finance:     { label: "Finance / Banking", premium: 0.12 },
  consulting:  { label: "Consulting / Strategy", premium: 0.10 },
  marketing:   { label: "Marketing / Creative", premium: 0.14 },
  operations:  { label: "Operations / PM", premium: 0.10 },
  healthcare:  { label: "Healthcare Admin", premium: 0.08 },
  legal:       { label: "Legal / Compliance", premium: 0.09 },
  other:       { label: "Other", premium: 0.10 },
}

// Commute mode cost multipliers
const COMMUTE_MODES = [
  { id: "car",     label: "Car (own vehicle)", costPerMileUSD: IRS_MILEAGE_RATE },
  { id: "transit", label: "Public Transit", costPerMileUSD: 0 }, // uses fixed monthly cost
  { id: "uber",    label: "Rideshare / Uber", costPerMileUSD: 1.8 },
]

type CommuteMode = "car" | "transit" | "uber"

function computeRTOCost(
  annualSalary: number,
  commuteMiles: number,
  commuteMinutes: number,
  commuteMode: CommuteMode,
  monthlyTransitCost: number,
  officeDaysPerWeek: number,
  hasChildcare: boolean,
  monthlyChildcareDelta: number,
  monthlyMealsDelta: number,
  monthlyParkingCost: number,
  roleType: string,
  country: CountryCode,
) {
  const workweeks = 50 // 50 work weeks per year
  const annualOfficeDays = officeDaysPerWeek * workweeks
  const hourlyRate = annualSalary / 2080

  // 1. Commute cost
  let annualCommuteCost = 0
  if (commuteMode === "car") {
    annualCommuteCost = commuteMiles * 2 * IRS_MILEAGE_RATE * annualOfficeDays
  } else if (commuteMode === "transit") {
    annualCommuteCost = monthlyTransitCost * 12
  } else {
    annualCommuteCost = commuteMiles * 2 * 1.8 * annualOfficeDays
  }

  // 2. Parking
  const annualParkingCost = monthlyParkingCost * 12

  // 3. Time cost (commute hours × hourly rate)
  const annualCommuteHours = (commuteMinutes / 60) * 2 * annualOfficeDays
  const annualTimeCost = annualCommuteHours * hourlyRate

  // 4. Remote salary premium lost
  const remotePremiumRate = REMOTE_PREMIUM_RATES[roleType]?.premium ?? 0.10
  const annualRemotePremiumLost = annualSalary * remotePremiumRate

  // 5. Childcare delta
  const annualChildcareCost = hasChildcare ? monthlyChildcareDelta * 12 : 0

  // 6. Meals / incidentals
  const annualMealsCost = monthlyMealsDelta * 12

  const totalAnnual = annualCommuteCost + annualParkingCost + annualTimeCost + annualRemotePremiumLost + annualChildcareCost + annualMealsCost

  // 5-year NPV
  const fiveYearSeries = Array.from({ length: 5 }, () => totalAnnual)
  const fiveYearNPV = npvFromSeries(fiveYearSeries, DISCOUNT_RATE)

  return {
    annualCommuteCost,
    annualParkingCost,
    annualTimeCost,
    annualCommuteHours,
    annualRemotePremiumLost,
    annualChildcareCost,
    annualMealsCost,
    totalAnnual,
    fiveYearNPV,
    percentOfSalary: (totalAnnual / annualSalary) * 100,
  }
}

export default function RTOCostCalculatorPage() {
  const [country, setCountry] = useState<CountryCode>(() => defaultCountry())
  const [annualSalary, setAnnualSalary] = useState(110000)
  const [commuteMiles, setCommuteMiles] = useState(15)
  const [commuteMinutes, setCommuteMinutes] = useState(35)
  const [commuteMode, setCommuteMode] = useState<CommuteMode>("car")
  const [monthlyTransitCost, setMonthlyTransitCost] = useState(150)
  const [officeDaysPerWeek, setOfficeDaysPerWeek] = useState(5)
  const [hasChildcare, setHasChildcare] = useState(false)
  const [monthlyChildcareDelta, setMonthlyChildcareDelta] = useState(800)
  const [monthlyMealsDelta, setMonthlyMealsDelta] = useState(200)
  const [monthlyParkingCost, setMonthlyParkingCost] = useState(0)
  const [roleType, setRoleType] = useState("tech")
  const [copied, setCopied] = useState(false)

  const handleCountryChange = (c: CountryCode) => {
    setCountry(c)
    setAnnualSalary(COUNTRIES[c].defaultSalary)
  }

  const result = useMemo(
    () => computeRTOCost(
      annualSalary, commuteMiles, commuteMinutes, commuteMode, monthlyTransitCost,
      officeDaysPerWeek, hasChildcare, monthlyChildcareDelta, monthlyMealsDelta,
      monthlyParkingCost, roleType, country
    ),
    [annualSalary, commuteMiles, commuteMinutes, commuteMode, monthlyTransitCost,
     officeDaysPerWeek, hasChildcare, monthlyChildcareDelta, monthlyMealsDelta,
     monthlyParkingCost, roleType, country]
  )

  const handleShare = () => {
    const text = `🚨 My RTO Cost Invoice\n\n` +
      `Commute: ${formatCurrency(result.annualCommuteCost, country)}/yr\n` +
      `Time cost: ${formatCurrency(result.annualTimeCost, country)}/yr\n` +
      `Remote premium lost: ${formatCurrency(result.annualRemotePremiumLost, country)}/yr\n` +
      (result.annualChildcareCost > 0 ? `Childcare: ${formatCurrency(result.annualChildcareCost, country)}/yr\n` : "") +
      (result.annualMealsCost > 0 ? `Meals: ${formatCurrency(result.annualMealsCost, country)}/yr\n` : "") +
      `\nTotal RTO Cost: ${formatCurrency(result.totalAnnual, country)}/yr\n` +
      `That's ${result.percentOfSalary.toFixed(1)}% of my salary.\n\n` +
      `Calculate yours → careerreturns.com/rto-cost-calculator`

    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2500)
      })
    }
  }

  const lineItems = [
    { label: "Commute cost", value: result.annualCommuteCost, note: commuteMode === "car" ? `${commuteMiles} mi × 2 × $${IRS_MILEAGE_RATE}/mi × ${officeDaysPerWeek * 50} days` : commuteMode === "transit" ? `$${monthlyTransitCost}/mo × 12` : `${commuteMiles} mi × 2 × $1.80/mi × ${officeDaysPerWeek * 50} days` },
    { label: "Parking", value: result.annualParkingCost, note: `$${monthlyParkingCost}/mo × 12` },
    { label: "Time cost", value: result.annualTimeCost, note: `${result.annualCommuteHours.toFixed(0)} hrs/yr × hourly rate` },
    { label: "Remote premium lost", value: result.annualRemotePremiumLost, note: `${(REMOTE_PREMIUM_RATES[roleType]?.premium ?? 0.10) * 100}% salary premium foregone` },
    { label: "Childcare delta", value: result.annualChildcareCost, note: `$${monthlyChildcareDelta}/mo × 12`, hide: !hasChildcare },
    { label: "Meals & incidentals", value: result.annualMealsCost, note: `$${monthlyMealsDelta}/mo × 12` },
  ].filter(i => !i.hide && i.value > 0)

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-12 max-w-5xl mx-auto">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative flex items-start justify-between gap-4 mb-4">
          <p className="text-xs font-medium text-orange-400 uppercase tracking-widest">CareerReturns · RTO Cost</p>
          <CountrySelect value={country} onChange={handleCountryChange} />
        </div>
        <h1 className="relative text-3xl md:text-4xl font-semibold tracking-tight mb-3 leading-tight bg-linear-to-r from-orange-400 via-red-400 to-rose-400 bg-clip-text text-transparent">
          Return-to-Office Cost Calculator
        </h1>
        <p className="text-white/70 max-w-2xl mb-6 text-lg leading-relaxed">
          Amazon, JPMorgan, Goldman, Google all forced full RTO. Enter your situation — get an itemized invoice showing exactly what it&apos;s costing you per year.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
          {[
            { stat: "$11k", label: "Average annual RTO cost for US workers" },
            { stat: "18%", label: "Typical remote salary premium eliminated by RTO" },
            { stat: "247hrs", label: "Annual commute time for a 30-min each-way commute" },
            { stat: "5-day", label: "Amazon, JPMorgan, Goldman Sachs RTO mandate" },
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
            <label className="text-xs text-white/50 uppercase tracking-widest block mb-1">Annual Salary ({COUNTRIES[country].currency})</label>
            <input type="number" value={annualSalary} step={5000} min={0}
              onChange={e => setAnnualSalary(parseFloat(e.target.value) || 0)}
              className="w-full bg-white/5 border border-white/10 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-white/30" />
          </div>

          <div>
            <label className="text-xs text-white/50 uppercase tracking-widest block mb-2">Role / Industry (for remote premium)</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {Object.entries(REMOTE_PREMIUM_RATES).map(([k, v]) => (
                <button key={k} onClick={() => setRoleType(k)}
                  className={`px-2 py-2 text-xs rounded border transition-all ${roleType === k ? "border-orange-400/50 bg-orange-400/10 text-white" : "border-white/10 text-white/40 hover:border-white/20"}`}>
                  {v.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs text-white/50 uppercase tracking-widest block mb-2">
              Office Days Per Week: <span className="text-white">{officeDaysPerWeek}</span>
            </label>
            <input type="range" min={1} max={5} value={officeDaysPerWeek}
              onChange={e => setOfficeDaysPerWeek(parseInt(e.target.value))}
              className="w-full accent-orange-400" />
            <div className="flex justify-between text-xs text-white/30 mt-1">
              <span>1 day/wk</span><span>2</span><span>3</span><span>4</span><span>5 days/wk</span>
            </div>
          </div>

          <div>
            <label className="text-xs text-white/50 uppercase tracking-widest block mb-2">Commute Mode</label>
            <div className="flex gap-2">
              {COMMUTE_MODES.map(m => (
                <button key={m.id} onClick={() => setCommuteMode(m.id as CommuteMode)}
                  className={`flex-1 px-3 py-2 text-xs rounded border transition-all ${commuteMode === m.id ? "border-orange-400/50 bg-orange-400/10 text-white" : "border-white/10 text-white/40 hover:border-white/20"}`}>
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {commuteMode === "transit" ? (
            <div>
              <label className="text-xs text-white/50 uppercase tracking-widest block mb-1">Monthly Transit Pass / Fare ($)</label>
              <input type="number" value={monthlyTransitCost} step={10} min={0}
                onChange={e => setMonthlyTransitCost(parseFloat(e.target.value) || 0)}
                className="w-full bg-white/5 border border-white/10 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-white/30" />
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-white/50 uppercase tracking-widest block mb-1">One-Way Commute Distance (miles)</label>
                <input type="number" value={commuteMiles} step={1} min={0}
                  onChange={e => setCommuteMiles(parseFloat(e.target.value) || 0)}
                  className="w-full bg-white/5 border border-white/10 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-white/30" />
              </div>
              <div>
                <label className="text-xs text-white/50 uppercase tracking-widest block mb-1">Monthly Parking Cost ($)</label>
                <input type="number" value={monthlyParkingCost} step={25} min={0}
                  onChange={e => setMonthlyParkingCost(parseFloat(e.target.value) || 0)}
                  className="w-full bg-white/5 border border-white/10 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-white/30" />
              </div>
            </div>
          )}

          <div>
            <label className="text-xs text-white/50 uppercase tracking-widest block mb-1">One-Way Commute Time (minutes)</label>
            <input type="number" value={commuteMinutes} step={5} min={0}
              onChange={e => setCommuteMinutes(parseFloat(e.target.value) || 0)}
              className="w-full bg-white/5 border border-white/10 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-white/30" />
            <p className="text-xs text-white/30 mt-1">
              = {result.annualCommuteHours.toFixed(0)} hours/year commuting ({(result.annualCommuteHours / 40).toFixed(1)} work weeks)
            </p>
          </div>

          <div>
            <label className="text-xs text-white/50 uppercase tracking-widest block mb-1">Extra Meals / Lunches Per Month ($)</label>
            <input type="number" value={monthlyMealsDelta} step={25} min={0}
              onChange={e => setMonthlyMealsDelta(parseFloat(e.target.value) || 0)}
              className="w-full bg-white/5 border border-white/10 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-white/30" />
          </div>

          <div className="rounded-lg border border-white/10 p-4 bg-white/2">
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-medium text-white/80">Childcare cost increased due to RTO?</label>
              <button
                onClick={() => setHasChildcare(!hasChildcare)}
                className={`relative w-10 h-6 rounded-full transition-colors ${hasChildcare ? "bg-orange-500" : "bg-white/20"}`}
              >
                <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${hasChildcare ? "translate-x-5" : "translate-x-1"}`} />
              </button>
            </div>
            {hasChildcare && (
              <div>
                <label className="text-xs text-white/50 uppercase tracking-widest block mb-1">Extra Monthly Childcare Cost ($)</label>
                <input type="number" value={monthlyChildcareDelta} step={50} min={0}
                  onChange={e => setMonthlyChildcareDelta(parseFloat(e.target.value) || 0)}
                  className="w-full bg-white/5 border border-white/10 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-white/30" />
              </div>
            )}
          </div>
        </div>

        {/* Results — RTO Invoice */}
        <div className="space-y-4 sticky top-6">
          {/* Invoice card */}
          <div className="rounded-xl border border-orange-400/20 bg-orange-400/5 overflow-hidden">
            {/* Invoice header */}
            <div className="px-5 py-4 border-b border-orange-400/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-orange-400 uppercase tracking-widest">RTO Invoice</p>
                  <p className="text-white/40 text-xs mt-0.5">Annual cost of your RTO mandate</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-white/30">FY 2026</p>
                  <p className="text-xs text-orange-400/70">Due: Every Workday</p>
                </div>
              </div>
            </div>

            {/* Line items */}
            <div className="px-5 py-3 space-y-3 border-b border-orange-400/10">
              {lineItems.map(item => (
                <div key={item.label} className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="text-sm text-white/80">{item.label}</p>
                    <p className="text-xs text-white/30">{item.note}</p>
                  </div>
                  <p className="text-sm font-medium text-orange-300 whitespace-nowrap">
                    {formatCurrency(item.value, country)}/yr
                  </p>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="px-5 py-4 border-b border-orange-400/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-white/40">TOTAL DUE ANNUALLY</p>
                  <p className="text-3xl font-black text-orange-400 mt-1">
                    {formatCurrency(result.totalAnnual, country)}
                  </p>
                  <p className="text-xs text-orange-400/60 mt-1">
                    = {result.percentOfSalary.toFixed(1)}% of your salary
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-white/30">5-YEAR NPV</p>
                  <p className="text-xl font-bold text-orange-300 mt-1">
                    {formatCurrency(result.fiveYearNPV, country)}
                  </p>
                </div>
              </div>
            </div>

            {/* Breakdown note */}
            <div className="px-5 py-3">
              <p className="text-xs text-white/30 leading-relaxed">
                Remote premium calculated at {((REMOTE_PREMIUM_RATES[roleType]?.premium ?? 0.10) * 100).toFixed(0)}% for {REMOTE_PREMIUM_RATES[roleType]?.label ?? "your role"}.
                Commute time valued at your effective hourly rate of {formatCurrency(annualSalary / 2080, country)}/hr.
              </p>
            </div>

            {/* Share button */}
            <div className="px-5 pb-4">
              <button
                onClick={handleShare}
                className="w-full py-2.5 rounded-lg border border-orange-400/30 text-sm font-medium text-orange-300 hover:bg-orange-400/10 transition-all flex items-center justify-center gap-2"
              >
                {copied ? (
                  <>
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-green-400">Invoice copied! Share on LinkedIn</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    Copy My RTO Invoice
                  </>
                )}
              </button>
            </div>
          </div>

          {/* What to do */}
          <div className="rounded-lg border border-white/10 p-4 bg-white/2">
            <p className="text-xs font-medium text-white/40 uppercase tracking-widest mb-3">What Can You Do?</p>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <span className="text-white/30 font-mono text-xs pt-0.5">01</span>
                <div>
                  <p className="font-medium text-white/90">Negotiate a remote stipend</p>
                  <p className="text-white/40 text-xs">Ask HR to offset commute costs. Some companies offer transit subsidies or remote day options.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-white/30 font-mono text-xs pt-0.5">02</span>
                <div>
                  <p className="font-medium text-white/90">Use it to negotiate a raise</p>
                  <p className="text-white/40 text-xs">Your RTO cost is a quantified argument. &quot;My effective pay dropped by {formatCurrency(result.totalAnnual, country)}/yr.&quot;</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-white/30 font-mono text-xs pt-0.5">03</span>
                <div>
                  <p className="font-medium text-white/90">Explore remote-first roles</p>
                  <p className="text-white/40 text-xs">If RTO cost exceeds 10% of your comp, a remote-first switch often pays for itself within the first year.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 p-4 bg-white/2">
            <p className="text-xs font-medium text-white/30 uppercase tracking-widest mb-3">Related Tools</p>
            <div className="space-y-2">
              <Link href="/am-i-underpaid" className="flex items-center justify-between text-sm text-white/60 hover:text-white transition-colors group">
                <span>Check if you're underpaid →</span>
                <span className="text-white/20 group-hover:text-white/40 text-xs">Salary Audit</span>
              </Link>
              <Link href="/salary-negotiation-simulator" className="flex items-center justify-between text-sm text-white/60 hover:text-white transition-colors group">
                <span>Practice your raise negotiation →</span>
                <span className="text-white/20 group-hover:text-white/40 text-xs">Negotiation Sim</span>
              </Link>
              <Link href="/loyalty-tax-calculator" className="flex items-center justify-between text-sm text-white/60 hover:text-white transition-colors group">
                <span>Calculate your loyalty tax →</span>
                <span className="text-white/20 group-hover:text-white/40 text-xs">Loyalty Tax</span>
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
              q: "How much does return-to-office cost employees?",
              a: "Studies estimate $5,000–$12,000/year for the average US worker, including commute, childcare, and meals. In high-cost cities, the total including the remote salary premium can reach $20,000–$35,000. This calculator personalizes that figure to your exact situation.",
            },
            {
              q: "What is the remote work salary premium?",
              a: "Remote workers can command salaries equal to top-tier metro rates regardless of location, effectively earning 10–25% more than equivalent in-office roles in lower-cost areas. RTO eliminates this premium by restricting where you can live.",
            },
            {
              q: "Can I use this to negotiate a raise or remote stipend?",
              a: "Yes. The itemized invoice gives you a precise, data-backed number to bring into a negotiation. 'My effective pay dropped by $X due to RTO' is a quantified argument that's harder for a manager to dismiss than a general complaint.",
            },
            {
              q: "Does the IRS mileage rate cover my real commute cost?",
              a: "The IRS standard mileage rate ($0.67/mile in 2026) is a conservative estimate that covers fuel, depreciation, and basic maintenance. In practice, true per-mile cost including insurance and depreciation is $0.75–$1.10 for most vehicles, so this calculator slightly understates car commute costs.",
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
