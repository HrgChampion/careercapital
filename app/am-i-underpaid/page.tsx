"use client"

import Link from "next/link"
import { useState, useMemo, useRef } from "react"
import {
  INDUSTRIES,
  EXPERIENCE_BANDS,
  COMPANY_SIZES,
  getBenchmark,
  getLocationTiers,
  type LocationTier,
  type CompanySize,
  type ExperienceBand,
  type BenchmarkCountry,
} from "@/lib/compensationBenchmarks"
import { npvFromSeries, DISCOUNT_RATE } from "@/lib/mbaEngine"
import { COUNTRIES, formatCurrency, defaultCountry, type CountryCode } from "@/lib/locale"
import { CountrySelect } from "@/components/CountrySelect"

function computeResult(
  currentSalary: number,
  industry: string,
  role: string,
  experience: ExperienceBand,
  location: LocationTier,
  companySize: CompanySize,
  country: BenchmarkCountry,
) {
  const benchmark = getBenchmark({ industry, role, experience, location, companySize, country })
  if (!benchmark) return null

  const { p25, p50, p75, p90 } = benchmark
  const annualGap = p75 - currentSalary // gap to p75 (aspirational but realistic target)
  const gapToMedian = p50 - currentSalary

  // Percentile estimate: linear interpolation across the four bands
  let percentile: number
  if (currentSalary <= p25) {
    percentile = Math.round((currentSalary / p25) * 25)
  } else if (currentSalary <= p50) {
    percentile = Math.round(25 + ((currentSalary - p25) / (p50 - p25)) * 25)
  } else if (currentSalary <= p75) {
    percentile = Math.round(50 + ((currentSalary - p50) / (p75 - p50)) * 25)
  } else if (currentSalary <= p90) {
    percentile = Math.round(75 + ((currentSalary - p75) / (p90 - p75)) * 15)
  } else {
    percentile = Math.min(99, Math.round(90 + ((currentSalary - p90) / (p90 * 0.25)) * 9))
  }
  percentile = Math.max(1, Math.min(99, percentile))

  // 5-year NPV of the gap at p75 (compound growth at 3% annual raise for both)
  const fiveYearSeries = Array.from({ length: 5 }, (_, i) => {
    const mktRate = p75 * Math.pow(1.04, i)
    const actualRate = currentSalary * Math.pow(1.03, i)
    return Math.max(0, mktRate - actualRate)
  })
  const fiveYearNPV = npvFromSeries(fiveYearSeries, DISCOUNT_RATE)

  // Status
  const isUnderpaid = currentSalary < p50
  const isFairlyPaid = currentSalary >= p50 && currentSalary < p75
  const isWellPaid = currentSalary >= p75

  return {
    benchmark,
    percentile,
    annualGapToP75: Math.max(0, p75 - currentSalary),
    annualGapToMedian: Math.max(0, p50 - currentSalary),
    fiveYearNPV: Math.max(0, fiveYearNPV),
    isUnderpaid,
    isFairlyPaid,
    isWellPaid,
    status: isUnderpaid ? "underpaid" : isFairlyPaid ? "fair" : "well-paid",
  }
}

export default function AmIUnderpaidPage() {
  const [country, setCountry] = useState<CountryCode>(() => defaultCountry())
  const [currentSalary, setCurrentSalary] = useState(85000)
  const [industry, setIndustry] = useState("tech")
  const [experience, setExperience] = useState<ExperienceBand>("mid")
  const [location, setLocation] = useState<LocationTier>("tier2")
  const [companySize, setCompanySize] = useState<CompanySize>("enterprise")
  const [copied, setCopied] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const selectedIndustry = INDUSTRIES.find(i => i.id === industry)
  const [role, setRole] = useState(selectedIndustry?.roles[0]?.id ?? "software_engineer")

  const handleIndustryChange = (ind: string) => {
    setIndustry(ind)
    const meta = INDUSTRIES.find(i => i.id === ind)
    if (meta?.roles[0]) setRole(meta.roles[0].id)
  }

  const handleCountryChange = (c: CountryCode) => {
    setCountry(c)
    setCurrentSalary(COUNTRIES[c].defaultSalary)
  }

  const locationTiers = getLocationTiers(country as BenchmarkCountry)

  const result = useMemo(
    () => computeResult(currentSalary, industry, role, experience, location, companySize, country as BenchmarkCountry),
    [currentSalary, industry, role, experience, location, companySize, country]
  )

  const statusConfig = {
    underpaid: { color: "text-red-400", bg: "border-red-400/30 bg-red-400/5", label: "Underpaid", emoji: "🔴" },
    fair:      { color: "text-yellow-400", bg: "border-yellow-400/30 bg-yellow-400/5", label: "Fairly Paid", emoji: "🟡" },
    "well-paid": { color: "text-green-400", bg: "border-green-400/30 bg-green-400/5", label: "Well Paid", emoji: "🟢" },
  }

  const cfg = result ? statusConfig[result.status as keyof typeof statusConfig] : statusConfig.underpaid

  const handleShare = () => {
    if (!result) return
    const roleName = selectedIndustry?.roles.find(r => r.id === role)?.label ?? role
    const industryName = selectedIndustry?.label ?? industry
    const status = result.status === "underpaid"
      ? `I'm in the ${result.percentile}th percentile — leaving ${formatCurrency(result.annualGapToP75, country as CountryCode)}/year on the table.`
      : result.status === "fair"
      ? `I'm in the ${result.percentile}th percentile — fairly paid but there's room to grow.`
      : `I'm in the ${result.percentile}th percentile — above market for my role!`

    const text = `💰 Salary Audit — ${roleName} in ${industryName}\n\n${status}\n5-year NPV of the gap: ${result.fiveYearNPV > 0 ? formatCurrency(result.fiveYearNPV, country as CountryCode) : "You're ahead of the market"}\n\nCheck yours free → careerreturns.com/am-i-underpaid`

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
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-violet-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative flex items-start justify-between gap-4 mb-4">
          <p className="text-xs font-medium text-violet-400 uppercase tracking-widest">CareerReturns · Salary Audit</p>
          <CountrySelect value={country} onChange={handleCountryChange} />
        </div>
        <h1 className="relative text-3xl md:text-4xl font-semibold tracking-tight mb-3 leading-tight bg-linear-to-r from-violet-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
          Am I Underpaid?
        </h1>
        <p className="text-white/70 max-w-2xl mb-6 text-lg leading-relaxed">
          Enter your role and salary. See your market percentile in 60 seconds — and exactly how much you&apos;re leaving on the table per year.
          <span className="text-white/40 text-sm block mt-1">No signup. No email. Just data.</span>
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
          {[
            { stat: "73%", label: "of workers are underpaid vs. their market p75" },
            { stat: "$18k", label: "Median annual gap for underpaid professionals" },
            { stat: "$78k", label: "5-year NPV of a $15K underpayment" },
            { stat: "60 sec", label: "To see your exact percentile and gap" },
          ].map(({ stat, label }) => (
            <div key={stat} className="border border-white/10 rounded-lg p-3 bg-white/2">
              <div className="text-2xl font-bold text-white mb-1">{stat}</div>
              <div className="text-xs text-white/40 leading-tight">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-[1fr_380px] gap-10 items-start">
        {/* Inputs */}
        <div className="space-y-6">
          <div>
            <label className="text-xs text-white/50 uppercase tracking-widest block mb-1">
              Your Current Annual Salary ({COUNTRIES[country].currency})
            </label>
            <input
              type="number"
              value={currentSalary}
              step={5000}
              min={0}
              onChange={e => setCurrentSalary(parseFloat(e.target.value) || 0)}
              className="w-full bg-white/5 border border-white/10 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-white/30 text-white"
            />
          </div>

          <div>
            <label className="text-xs text-white/50 uppercase tracking-widest block mb-2">Industry</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {INDUSTRIES.map(ind => (
                <button
                  key={ind.id}
                  onClick={() => handleIndustryChange(ind.id)}
                  className={`px-3 py-2 text-xs rounded border transition-all ${
                    industry === ind.id
                      ? "border-violet-400/50 bg-violet-400/10 text-white"
                      : "border-white/10 text-white/40 hover:border-white/20 hover:text-white/60"
                  }`}
                >
                  {ind.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs text-white/50 uppercase tracking-widest block mb-2">Role</label>
            <div className="flex flex-wrap gap-2">
              {(selectedIndustry?.roles ?? []).map(r => (
                <button
                  key={r.id}
                  onClick={() => setRole(r.id)}
                  className={`px-3 py-2 text-xs rounded border transition-all ${
                    role === r.id
                      ? "border-violet-400/50 bg-violet-400/10 text-white"
                      : "border-white/10 text-white/40 hover:border-white/20"
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs text-white/50 uppercase tracking-widest block mb-2">Experience Level</label>
            <div className="flex flex-wrap gap-2">
              {EXPERIENCE_BANDS.map(b => (
                <button
                  key={b.id}
                  onClick={() => setExperience(b.id)}
                  className={`px-3 py-2 text-xs rounded border transition-all ${
                    experience === b.id
                      ? "border-violet-400/50 bg-violet-400/10 text-white"
                      : "border-white/10 text-white/40 hover:border-white/20"
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-white/50 uppercase tracking-widest block mb-2">Location</label>
              <div className="space-y-1">
                {locationTiers.map(l => (
                  <button
                    key={l.id}
                    onClick={() => setLocation(l.id)}
                    className={`w-full text-left px-3 py-2 text-xs rounded border transition-all ${
                      location === l.id
                        ? "border-violet-400/50 bg-violet-400/10"
                        : "border-white/10 text-white/40 hover:border-white/20 hover:text-white/60"
                    }`}
                  >
                    <span className="font-medium block">{l.label}</span>
                    <span className="text-white/30 text-[10px]">{l.examples}</span>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs text-white/50 uppercase tracking-widest block mb-2">Company Size</label>
              <div className="space-y-1">
                {COMPANY_SIZES.map(c => (
                  <button
                    key={c.id}
                    onClick={() => setCompanySize(c.id)}
                    className={`w-full text-left px-3 py-2 text-xs rounded border transition-all ${
                      companySize === c.id
                        ? "border-violet-400/50 bg-violet-400/10"
                        : "border-white/10 text-white/40 hover:border-white/20 hover:text-white/60"
                    }`}
                  >
                    <span className="font-medium block">{c.label}</span>
                    <span className="text-white/30 text-[10px]">{c.examples}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4 sticky top-6">
          {result ? (
            <>
              {/* Main Salary Audit Card — designed to be shared */}
              <div ref={cardRef} className={`rounded-xl border p-6 ${cfg.bg}`}>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs font-medium text-white/40 uppercase tracking-widest">Salary Audit</p>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${
                    result.isUnderpaid ? "border-red-400/40 text-red-400" :
                    result.isFairlyPaid ? "border-yellow-400/40 text-yellow-400" :
                    "border-green-400/40 text-green-400"
                  }`}>
                    {cfg.label}
                  </span>
                </div>

                {/* Percentile — the hero number */}
                <div className="text-center py-4 border-b border-white/10 mb-4">
                  <div className={`text-7xl font-black mb-1 ${cfg.color}`}>
                    {result.percentile}<span className="text-3xl">th</span>
                  </div>
                  <p className="text-white/50 text-sm">percentile for your role</p>
                  <p className="text-white/30 text-xs mt-1">
                    {selectedIndustry?.roles.find(r => r.id === role)?.label} · {selectedIndustry?.label}
                  </p>
                </div>

                {/* Market range visual */}
                {result.benchmark && (
                  <div className="mb-4">
                    <div className="relative h-3 bg-white/10 rounded-full overflow-hidden mb-2">
                      {/* P25-P75 band */}
                      <div
                        className="absolute inset-y-0 bg-white/20 rounded-full"
                        style={{
                          left: `${(result.benchmark.p25 / result.benchmark.p90) * 100}%`,
                          right: `${100 - (result.benchmark.p75 / result.benchmark.p90) * 100}%`,
                        }}
                      />
                      {/* Current salary marker */}
                      <div
                        className={`absolute inset-y-0 w-1.5 rounded ${cfg.color.replace("text-", "bg-")}`}
                        style={{
                          left: `${Math.min(97, Math.max(1, (currentSalary / result.benchmark.p90) * 100))}%`,
                        }}
                      />
                    </div>
                    <div className="grid grid-cols-4 gap-1 text-center">
                      {[
                        { label: "P25", val: result.benchmark.p25 },
                        { label: "Median", val: result.benchmark.p50 },
                        { label: "P75", val: result.benchmark.p75 },
                        { label: "P90", val: result.benchmark.p90 },
                      ].map(b => (
                        <div key={b.label}>
                          <p className="text-[10px] text-white/30">{b.label}</p>
                          <p className="text-xs font-medium text-white/70">{formatCurrency(b.val, country as CountryCode)}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-center text-xs text-white/40 mt-1">
                      Your salary: <span className="text-white font-medium">{formatCurrency(currentSalary, country as CountryCode)}</span>
                    </p>
                  </div>
                )}

                {/* Gap numbers */}
                {result.isUnderpaid && (
                  <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
                    <div>
                      <p className="text-[10px] text-white/40 uppercase tracking-wider mb-1">Gap to P75 / year</p>
                      <p className={`text-xl font-bold ${cfg.color}`}>
                        {formatCurrency(result.annualGapToP75, country as CountryCode)}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] text-white/40 uppercase tracking-wider mb-1">5-Year NPV</p>
                      <p className={`text-xl font-bold ${cfg.color}`}>
                        {formatCurrency(result.fiveYearNPV, country as CountryCode)}
                      </p>
                    </div>
                  </div>
                )}

                {result.isFairlyPaid && (
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-yellow-300 text-sm font-medium mb-1">You&apos;re at the median — room to grow.</p>
                    <p className="text-white/50 text-xs">
                      Reaching P75 would add {formatCurrency(result.annualGapToP75, country as CountryCode)}/year.
                      Over 5 years: {formatCurrency(result.fiveYearNPV, country as CountryCode)} NPV.
                    </p>
                  </div>
                )}

                {result.isWellPaid && (
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-green-300 text-sm font-medium mb-1">You&apos;re above market — well done.</p>
                    <p className="text-white/50 text-xs">
                      You earn above the P75 for your role. Your compensation is strong.
                    </p>
                  </div>
                )}

                {/* Share button */}
                <button
                  onClick={handleShare}
                  className="w-full mt-4 py-2.5 rounded-lg border border-white/20 text-sm font-medium text-white/80 hover:bg-white/5 hover:border-white/30 transition-all flex items-center justify-center gap-2"
                >
                  {copied ? (
                    <>
                      <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-green-400">Copied to clipboard!</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                      Share My Salary Audit
                    </>
                  )}
                </button>
              </div>

              {/* Action plan */}
              {result.isUnderpaid && (
                <div className="rounded-lg border border-white/10 p-4 bg-white/2">
                  <p className="text-xs font-medium text-violet-400 uppercase tracking-widest mb-3">Your 3 Options</p>
                  <div className="space-y-3 text-sm">
                    <div className="flex gap-3">
                      <span className="text-white/30 font-mono text-xs pt-0.5">01</span>
                      <div>
                        <p className="font-medium text-white/90">Ask for a raise now</p>
                        <p className="text-white/40 text-xs">Internal raises: 5-10%. Low risk, fast.</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-white/30 font-mono text-xs pt-0.5">02</span>
                      <div>
                        <p className="font-medium text-white/90">Get an outside offer</p>
                        <p className="text-white/40 text-xs">Use it as leverage. External offers: +15-25%.</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-white/30 font-mono text-xs pt-0.5">03</span>
                      <div>
                        <p className="font-medium text-white/90">Switch jobs</p>
                        <p className="text-white/40 text-xs">Job-switchers earn 17% more on average (Atlanta Fed).</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Next steps */}
              <div className="rounded-lg border border-white/10 p-4 bg-white/2">
                <p className="text-xs font-medium text-white/30 uppercase tracking-widest mb-3">Go Deeper</p>
                <div className="space-y-2">
                  <Link href="/salary-negotiation-simulator"
                    className="flex items-center justify-between text-sm text-white/70 hover:text-white transition-colors group">
                    <span>Practice salary negotiation →</span>
                    <span className="text-white/20 group-hover:text-white/50 text-xs">Negotiation Simulator</span>
                  </Link>
                  <Link href="/loyalty-tax-calculator"
                    className="flex items-center justify-between text-sm text-white/70 hover:text-white transition-colors group">
                    <span>See your loyalty tax →</span>
                    <span className="text-white/20 group-hover:text-white/50 text-xs">Loyalty Tax</span>
                  </Link>
                  <Link href="/salary-benchmark-calculator"
                    className="flex items-center justify-between text-sm text-white/70 hover:text-white transition-colors group">
                    <span>Returning from a career break? →</span>
                    <span className="text-white/20 group-hover:text-white/50 text-xs">Gap Penalty</span>
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <div className="rounded-xl border border-white/10 p-8 text-center bg-white/2">
              <div className="text-5xl mb-3">🔍</div>
              <p className="text-white/60 text-sm">Select your role and location to see your salary audit.</p>
            </div>
          )}
        </div>
      </div>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-12 border-t border-white/10">
        <h2 className="text-xl font-semibold mb-6 text-white/90">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "How do I know if I am underpaid?",
              a: "Compare your salary to the p50 (median) for your exact role, industry, experience level, and location. If you're below the p50, more than half your peers in the same position earn more. This tool does that lookup instantly using 2026 benchmark data from BLS, Glassdoor, and Levels.fyi.",
            },
            {
              q: "What's the average underpayment gap?",
              a: "Research from LinkedIn's Workforce Report shows the median underpaid worker earns approximately 12-18% below market rate. For a $90,000 salary, that's $10,800–$16,200/year left on the table — $47,000–$70,000 NPV over 5 years.",
            },
            {
              q: "What should I do if I'm underpaid?",
              a: "Three paths work: (1) Ask for a raise — internal raises yield 5-10%, (2) Get an outside offer and use it as leverage for 15-25%, or (3) Switch jobs — the Atlanta Fed Wage Tracker shows job-switchers earn an average of 17% more. The best move depends on how far below market you are and how tenure-locked you are.",
            },
            {
              q: "Is this different from the salary benchmark calculator?",
              a: "The salary benchmark calculator is designed for career returners who took a gap year — it models the career break penalty and negotiation scenarios. This tool is for everyone: it answers 'am I underpaid right now' in the fewest possible steps.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="border-b border-white/10 pb-6">
              <h3 className="font-medium text-white/90 mb-2">{q}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Internal links */}
      <section className="max-w-5xl mx-auto px-6 py-10 border-t border-white/10">
        <p className="text-xs font-medium text-white/30 uppercase tracking-widest mb-4">Related Tools</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { href: "/salary-negotiation-simulator", label: "Negotiation Simulator" },
            { href: "/salary-benchmark-calculator", label: "Career Gap Salary Check" },
            { href: "/loyalty-tax-calculator", label: "Loyalty Tax Calculator" },
            { href: "/career-roi-score", label: "Career ROI Score" },
          ].map(l => (
            <Link key={l.href} href={l.href}
              className="border border-white/10 rounded-lg px-3 py-2.5 text-xs text-white/50 hover:border-white/20 hover:text-white/70 transition-all text-center">
              {l.label}
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
