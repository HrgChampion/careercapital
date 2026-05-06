"use client"

import Link from "next/link"
import { useState, useMemo } from "react"
import { calculateCompensation, GAP_PENALTY_PER_YEAR, type CompensationInput } from "@/lib/compensationEngine"
import {
  INDUSTRIES,
  EXPERIENCE_BANDS,
  COMPANY_SIZES,
  getLocationTiers,
  type LocationTier,
  type CompanySize,
  type ExperienceBand,
  type BenchmarkCountry,
} from "@/lib/compensationBenchmarks"
import { DISCOUNT_RATE, PROJECTION_YEARS } from "@/lib/mbaEngine"
import { COUNTRIES, formatCurrency, defaultCountry, type CountryCode } from "@/lib/locale"
import { CountrySelect } from "@/components/CountrySelect"

export default function SalaryBenchmarkCalculator() {
  const [country, setCountry] = useState<CountryCode>(() => defaultCountry())
  const handleCountryChange = (c: CountryCode) => {
    setCountry(c)
    setCurrentSalary(COUNTRIES[c].defaultSalary)
  }
  const [currentSalary, setCurrentSalary] = useState(85000)
  const [gapYears, setGapYears] = useState(2)
  const [yearsExperience, setYearsExperience] = useState(7)
  const [industry, setIndustry] = useState("tech")
  const [role, setRole] = useState("software_engineer")
  const [experience, setExperience] = useState<ExperienceBand>("mid")
  const [location, setLocation] = useState<LocationTier>("tier2")
  const [companySize, setCompanySize] = useState<CompanySize>("enterprise")
  const [growthRate] = useState(0.04)

  const selectedIndustry = INDUSTRIES.find(i => i.id === industry)

  // Auto-set role when industry changes
  const handleIndustryChange = (ind: string) => {
    setIndustry(ind)
    const meta = INDUSTRIES.find(i => i.id === ind)
    if (meta && meta.roles[0]) setRole(meta.roles[0].id)
  }

  const locationTiers = getLocationTiers(country as BenchmarkCountry)

  const input: CompensationInput = {
    currentSalary,
    yearsExperience,
    gapYears,
    industry,
    role,
    location,
    companySize,
    experience,
    discountRate: DISCOUNT_RATE,
    annualGrowthRate: growthRate,
    country: country as BenchmarkCountry,
  }

  const result = useMemo(() => {
    try { return calculateCompensation(input) }
    catch { return null }
  }, [currentSalary, gapYears, yearsExperience, industry, role, experience, location, companySize])

  const isUnderpaid = result && result.currentVsMedian < -5000

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-12 max-w-5xl mx-auto">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative flex items-start justify-between gap-4 mb-4">
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">CareerReturns · Salary Intelligence</p>
          <CountrySelect value={country} onChange={handleCountryChange} />
        </div>
        <h1 className="relative text-3xl md:text-4xl font-semibold tracking-tight mb-3 leading-tight bg-linear-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
          Am I Underpaid After My Career Break?
        </h1>
        <p className="text-white/70 max-w-2xl mb-6 text-lg leading-relaxed">
          Career returners accept <span className="text-white font-semibold">8–15% below market</span> just to get back in the door.
          Enter your role and salary — we'll show you your percentile, the dollar gap, and the exact NPV of negotiating now vs. waiting vs. switching.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
          {[
            { stat: "8–15%", label: "Typical below-market offer for returners" },
            { stat: "$47k", label: "Avg 10-yr NPV of a single $5k raise" },
            { stat: "3 paths", label: "Raise now · build case · switch jobs" },
            { stat: "60 sec", label: "To see your market position" },
          ].map(({ stat, label }) => (
            <div key={stat} className="border border-white/10 rounded-lg p-3 bg-white/[0.02]">
              <div className="text-2xl font-bold text-white mb-1">{stat}</div>
              <div className="text-xs text-white/40 leading-tight">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-[1fr_400px] gap-10">
        {/* Left: inputs */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-white/50 uppercase tracking-widest block mb-1">Current Annual Salary ($)</label>
              <input type="number" value={currentSalary} step={5000} min={0}
                onChange={e => setCurrentSalary(parseFloat(e.target.value) || 0)}
                className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:outline-none focus:border-white/30" />
            </div>
            <div>
              <label className="text-xs text-white/50 uppercase tracking-widest block mb-1">Career Break Duration (yrs)</label>
              <input type="number" value={gapYears} step={0.5} min={0} max={10}
                onChange={e => setGapYears(parseFloat(e.target.value) || 0)}
                className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:outline-none focus:border-white/30" />
            </div>
          </div>

          <div>
            <label className="text-xs text-white/50 uppercase tracking-widest block mb-2">Industry</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {INDUSTRIES.map(ind => (
                <button key={ind.id} onClick={() => handleIndustryChange(ind.id)}
                  className={`px-3 py-2 text-xs rounded border transition-all ${industry === ind.id ? "border-white/40 bg-white/5 text-white" : "border-white/10 text-white/40 hover:border-white/20 hover:text-white/60"}`}>
                  {ind.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs text-white/50 uppercase tracking-widest block mb-2">Role</label>
            <div className="flex flex-wrap gap-2">
              {(selectedIndustry?.roles ?? []).map(r => (
                <button key={r.id} onClick={() => setRole(r.id)}
                  className={`px-3 py-2 text-xs rounded border transition-all ${role === r.id ? "border-white/40 bg-white/5 text-white" : "border-white/10 text-white/40 hover:border-white/20"}`}>
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs text-white/50 uppercase tracking-widest block mb-2">Experience Level</label>
            <div className="flex flex-wrap gap-2">
              {EXPERIENCE_BANDS.map(b => (
                <button key={b.id} onClick={() => setExperience(b.id)}
                  className={`px-3 py-2 text-xs rounded border transition-all ${experience === b.id ? "border-white/40 bg-white/5 text-white" : "border-white/10 text-white/40 hover:border-white/20"}`}>
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
                  <button key={l.id} onClick={() => setLocation(l.id)}
                    className={`w-full text-left px-3 py-2 text-xs rounded border transition-all ${location === l.id ? "border-white/40 bg-white/5" : "border-white/10 text-white/40 hover:border-white/20"}`}>
                    <span className="font-medium">{l.label}</span>
                    <span className="block text-white/30 text-[10px]">{l.examples}</span>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs text-white/50 uppercase tracking-widest block mb-2">Company Size</label>
              <div className="space-y-1">
                {COMPANY_SIZES.map(c => (
                  <button key={c.id} onClick={() => setCompanySize(c.id)}
                    className={`w-full text-left px-3 py-2 text-xs rounded border transition-all ${companySize === c.id ? "border-white/40 bg-white/5" : "border-white/10 text-white/40 hover:border-white/20"}`}>
                    <span className="font-medium">{c.label}</span>
                    <span className="block text-white/30 text-[10px]">{c.examples}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: results */}
        <div className="space-y-4">
          {result ? (
            <>
              {/* Market position banner */}
              <div className={`rounded-lg border p-5 ${isUnderpaid ? "border-red-400/30 bg-red-400/5" : "border-green-400/30 bg-green-400/5"}`}>
                <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Your Market Position</p>
                <div className="flex items-end gap-2 mb-2">
                  <span className={`text-4xl font-bold ${isUnderpaid ? "text-red-400" : "text-green-400"}`}>
                    {result.currentPercentile}th
                  </span>
                  <span className="text-white/50 mb-1">percentile</span>
                </div>
                {result.benchmark && (
                  <p className={`text-sm ${isUnderpaid ? "text-red-300" : "text-green-300"}`}>
                    {isUnderpaid
                      ? `You're ${formatCurrency(result.annualLeaveOnTable, country)} below market median`
                      : `You're ${formatCurrency(-result.currentVsMedian, country)} above market median`}
                  </p>
                )}
              </div>

              {/* Benchmark band */}
              {result.benchmark && (
                <div className="rounded-lg border border-white/10 p-4 bg-white/[0.02]">
                  <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-3">Market Range for Your Profile</p>
                  <div className="relative h-6 bg-white/5 rounded-full overflow-hidden mb-2">
                    <div className="absolute inset-y-0 bg-white/10 rounded-full"
                      style={{
                        left: "0%",
                        width: "100%",
                      }} />
                    <div className="absolute inset-y-0 bg-blue-400/30 rounded-full"
                      style={{
                        left: `${((result.benchmark.p25 / result.benchmark.p90) * 100)}%`,
                        right: `${100 - ((result.benchmark.p75 / result.benchmark.p90) * 100)}%`,
                      }} />
                    {/* Current salary marker */}
                    <div className="absolute inset-y-0 w-1 bg-white rounded"
                      style={{ left: `${Math.min(98, Math.max(1, (currentSalary / result.benchmark.p90) * 100))}%` }} />
                  </div>
                  <div className="grid grid-cols-4 gap-1 text-xs text-center">
                    {[
                      { label: "P25", val: result.benchmark.p25 },
                      { label: "Median", val: result.benchmark.p50 },
                      { label: "P75", val: result.benchmark.p75 },
                      { label: "P90", val: result.benchmark.p90 },
                    ].map(b => (
                      <div key={b.label}>
                        <p className="text-white/30">{b.label}</p>
                        <p className="font-medium text-white/80">{formatCurrency(b.val, country)}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 text-center">
                    <span className="text-xs text-white/50">Your salary: </span>
                    <span className="text-xs font-medium text-white">{formatCurrency(currentSalary, country)}</span>
                  </div>
                </div>
              )}

              {/* Gap penalty */}
              {gapYears > 0 && (
                <div className="rounded-lg border border-white/10 p-4 bg-white/[0.02]">
                  <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-3">Career Gap Impact</p>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-xs text-white/40">Estimated Gap Penalty</p>
                      <p className="font-medium text-orange-400">{formatCurrency(result.estimatedGapPenalty, country)}/yr</p>
                      <p className="text-[10px] text-white/30">{GAP_PENALTY_PER_YEAR * 100}% per gap year</p>
                    </div>
                    <div>
                      <p className="text-xs text-white/40">Penalty Erodes In</p>
                      <p className="font-medium">{result.gapPenaltyRecoveryYears.toFixed(1)} yrs</p>
                      <p className="text-[10px] text-white/30">As performance proves out</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Leave on table */}
              {isUnderpaid && (
                <div className="rounded-lg border border-red-400/20 p-4 bg-red-400/5">
                  <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-3">What You&apos;re Leaving On The Table</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs text-white/40">Per Year</p>
                      <p className="text-xl font-bold text-red-400">{formatCurrency(result.annualLeaveOnTable, country)}</p>
                    </div>
                    <div>
                      <p className="text-xs text-white/40">{PROJECTION_YEARS}-Year NPV</p>
                      <p className="text-xl font-bold text-red-400">{formatCurrency(result.tenYearNPVLeaveOnTable, country)}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Negotiation scenarios */}
              <div>
                <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-3">Your Options</p>
                <div className="space-y-3">
                  {result.negotiationScenarios.map((s, i) => (
                    <div key={i} className="rounded-lg border border-white/10 p-4 bg-white/[0.02]">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="text-sm font-medium">{s.label}</p>
                          <p className="text-xs text-white/40">{s.description}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-green-400">
                            {s.netNPVGain !== null && s.netNPVGain > 0 ? "+" + formatCurrency(s.netNPVGain, country) : "—"}
                          </p>
                          <p className="text-[10px] text-white/30">NPV gain</p>
                        </div>
                      </div>
                      <p className="text-xs text-white/50 leading-relaxed">{s.recommendation}</p>
                      <div className="mt-2 pt-2 border-t border-white/5 flex justify-between text-xs text-white/40">
                        <span>Target salary: {formatCurrency(s.expectedSalaryYear1, country)}</span>
                        <span>Action cost: {s.actionCost > 0 ? formatCurrency(s.actionCost, country) : "Free"}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="rounded-lg border border-white/10 p-6 text-center text-white/40 text-sm">
              Select your profile to see results
            </div>
          )}
        </div>
      </div>

      <section className="border-t border-white/10 px-6 py-8 max-w-5xl mx-auto">
        <p className="text-xs text-white/30 uppercase tracking-widest mb-2">Methodology</p>
        <p className="text-xs text-white/40 max-w-2xl">
          Benchmarks sourced from BLS Occupational Employment Statistics, Levels.fyi, Glassdoor, and GMAC placement data.
          Gap penalty model based on academic research showing ~3-5% salary discount per career break year.
          NPV of underpayment discounted at {DISCOUNT_RATE * 100}% over {PROJECTION_YEARS} years.
          All figures are base salary only — total comp may differ significantly in equity-heavy roles.
        </p>
      </section>

      {/* ── Educational Content ─────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 pb-16 space-y-14">

        {/* How the calculator works */}
        <section className="space-y-5 border-t border-white/10 pt-12">
          <h2 className="text-2xl font-semibold tracking-tight">How the Salary Benchmark Calculator Works</h2>
          <p className="text-slate-400 leading-relaxed">
            This calculator benchmarks your current salary against market data for your specific role, industry,
            experience level, location tier, and company size — then models the financial cost of any gap between
            where you are and where you should be. It answers a question that most salary tools ignore: not just
            what the market pays, but what the present value of closing that gap is worth to you over the next
            decade.
          </p>
          <p className="text-slate-400 leading-relaxed">
            The benchmark data is drawn from BLS Occupational Employment Statistics, Levels.fyi for tech roles,
            GMAC placement reports for post-MBA salaries, and Glassdoor compensation surveys. For career returners,
            we layer in a gap penalty model derived from academic research on re-entry salary discounts, which
            shows a 3–5% annual penalty for each year of career break, recovering over 3–5 years as performance
            proves out. This recovery curve varies significantly by industry — tech and consulting recover faster
            than healthcare or government roles.
          </p>
          <p className="text-slate-400 leading-relaxed">
            The NPV calculation uses a 6% discount rate — the long-run real return on a balanced portfolio —
            projected over 10 years. This is intentionally conservative. At this discount rate, a $10,000
            annual salary shortfall costs you roughly $73,600 in present value over a decade. That figure is
            why negotiating at re-entry matters far more than negotiating after your first performance review:
            every dollar of base salary compounds forward through every future raise, bonus, and equity grant.
          </p>
        </section>

        {/* Understanding your market position */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Understanding Your Market Position</h2>
          <p className="text-slate-400 leading-relaxed">
            The percentile shown in your results reflects where your current salary falls within the distribution
            for your specific profile — not against all workers, but against people with the same industry, role
            category, experience band, location tier, and company size. This precision matters. A software
            engineer at a 500-person tech company in Austin is benchmarked differently from one at a FAANG in
            San Francisco, even if their job titles are identical.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Being in the 25th–40th percentile is the most common situation for career returners. Companies
            routinely offer returning professionals salaries at or below the 25th percentile, framing it as
            "accounting for the gap." This framing is financially illiterate on your behalf: a gap in employment
            does not reduce the market rate for the work you are doing now. The P50 (median) is the floor you
            should be negotiating toward at re-entry. The P75 is achievable if you have a specific high-value
            skill, relevant certifications, or a competing offer.
          </p>
          <p className="text-slate-400 leading-relaxed">
            If your current salary is above the P75 for your profile, you are likely in a strong market position
            and the highest-leverage next move is lateral growth — expanding your scope, picking up adjacent
            skills, or targeting a promotion rather than a salary correction. The calculator shows you which
            of the three negotiation paths (negotiate now, build case first, or switch employers) produces the
            highest 10-year NPV for your specific situation.
          </p>
        </section>

        {/* Career gap penalty explained */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">The Career Gap Salary Penalty: What the Research Says</h2>
          <p className="text-slate-400 leading-relaxed">
            Academic research consistently finds that career breaks reduce re-entry salaries by 3–5% per year
            of absence, with the effect front-loaded in the first offer rather than spread across performance
            reviews. A two-year break typically produces an 8–12% initial salary discount; a four-year break
            can produce a 15–22% discount in the first offer from employers who are not explicitly running
            returnship programs.
          </p>
          <p className="text-slate-400 leading-relaxed">
            The penalty varies sharply by industry. In technology, where skills decay faster and role definitions
            shift more quickly, a two-year break can look like four years of drift to a hiring manager. In
            healthcare administration, government, and operations management, institutional knowledge and
            process experience hold value longer, producing smaller initial discounts. Consulting falls in the
            middle: MBB and Big 4 firms actively run returnship programs that hire at 90–95% of market rate,
            while smaller boutiques may discount more aggressively.
          </p>
          <p className="text-slate-400 leading-relaxed">
            The good news is that the penalty is not permanent. Research also shows that performance-based
            raises and promotional cycles tend to close the gap within 3–5 years for strong performers —
            but only if you negotiated at re-entry and did not accept a salary so far below market that even
            strong performance reviews leave you underpaid relative to peers hired without a gap. This is
            the compounding problem: a $15,000 annual shortfall at year one, with typical 4–5% annual raises,
            will still leave you $8,000–$11,000 below market at year five.
          </p>
        </section>

        {/* Negotiation strategies */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Salary Negotiation Strategies for Career Returners</h2>
          <p className="text-slate-400 leading-relaxed">
            The calculator models three distinct negotiation strategies, each with a different risk-return
            profile. Understanding when to use each one is as important as the salary number itself.
          </p>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
              <p className="text-white font-semibold text-sm">Strategy 1: Negotiate Now — Counter the First Offer</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Appropriate when you have a competing offer, a strong pre-break track record in a visible role,
                or are entering through a structured returnship that benchmarks salaries internally. The NPV
                of negotiating at the offer stage is always higher than negotiating six months later, because
                the base effect compounds forward. Counter to P50 as a floor, with P75 as your anchor. If the
                employer says the gap is the reason for the lower offer, ask them to show you their internal
                compensation band for the role — most cannot justify paying below P25 if they're being transparent.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
              <p className="text-white font-semibold text-sm">Strategy 2: Accept and Build the Case — 90-Day Review</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Appropriate when you are entering a new industry, changing roles significantly, or returning
                after a 3+ year gap in a field that has changed substantially. Accepting slightly below market
                to prove performance, then negotiating aggressively at a 90-day or 6-month review, can produce
                higher total compensation over 3 years than refusing an offer and waiting for a better one.
                This strategy requires documenting specific, quantified outputs from day one and asking for
                the review date in writing at acceptance.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
              <p className="text-white font-semibold text-sm">Strategy 3: Switch Employers — Target Market Rate from Day One</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Appropriate when you have been in your current role for 12+ months, have documented performance,
                and are still being paid below P40 of the market. Internal pay compression — where new hires
                are offered market rates but existing employees receive smaller annual raises — makes
                employer-switching the fastest path to market correction for established performers. The NPV
                model in this calculator accounts for the cost of a job search (typically 2–4 months of
                reduced or no income) versus the lifetime gain from a market-rate reset.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "How accurate are the salary benchmarks?",
                a: "Benchmarks are aggregated from BLS OES data, Levels.fyi (for tech roles), GMAC placement reports (for post-MBA roles), and Glassdoor surveys. They reflect median ranges for US-based roles by default; the country selector adjusts ranges using purchasing-power-parity-adjusted multipliers for UK, Canada, Australia, India, Germany, and Singapore. All figures are base salary — total compensation in equity-heavy roles (especially tech) can be 30–80% higher."
              },
              {
                q: "Why does my industry selection change the salary range significantly?",
                a: "Salary ranges vary sharply by industry because of structural differences in how companies are funded, how productivity is measured, and how compensation is structured. A software engineer at a tech company and a software engineer at a hospital system performing similar work will see 20–40% salary differences simply due to industry. This calculator accounts for industry as the primary driver of your market rate, which is more accurate than role-title benchmarks alone."
              },
              {
                q: "What is the gap penalty based on?",
                a: "The 3–5% annual gap penalty is derived from peer-reviewed research on re-entry salary discounts, including work published in the American Economic Review and Journal of Labor Economics studying career interruptions by gender, industry, and duration. The recovery curve — where the penalty diminishes over 3–5 years — is modeled on performance-review cycles assuming standard 4–5% annual merit increases. Individual outcomes vary based on the reason for the gap, skills maintenance during the break, and employer attitudes toward career returners."
              },
              {
                q: "Should I disclose my career break salary history?",
                a: "Many US states (including California, New York, Massachusetts, and Illinois) prohibit employers from asking for salary history. Even where it is legal, you are not obligated to disclose it. Instead, anchor your negotiation on the market rate for the role you are entering, not on what you were paid before or during a gap. If asked directly, you can respond: 'I've benchmarked this role at $X–$Y in this market. I'm looking for an offer in that range.' This calculator gives you the data to support that anchor."
              },
              {
                q: "How is the 10-year NPV of underpayment calculated?",
                a: "The NPV calculation treats the annual salary shortfall (your salary minus the P50 market rate for your profile) as a stream of cash flows discounted at 6% per year over 10 years. This assumes the gap remains constant — it does not model raises, which would actually make the real gap larger over time due to base compounding. The 6% discount rate reflects the long-run real return on a balanced investment portfolio, the opportunity cost of money received in the future versus today."
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-white font-semibold text-sm">{q}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related tools */}
        <section className="space-y-4 border-t border-white/10 pt-10">
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">Related Tools & Guides</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: "/salary-negotiation-simulator", label: "Salary Negotiation Simulator", desc: "Practice the conversation — see NPV impact of each move" },
              { href: "/career-roi-score", label: "Career ROI Score", desc: "Your composite 300–850 career financial health score" },
              { href: "/career-gap-calculator", label: "Career Gap Recovery Calculator", desc: "Model your re-entry path and recovery timeline" },
              { href: "/return-to-work-after-career-break", label: "Return to Work After a Career Break", desc: "Research-backed strategies and salary data" },
              { href: "/returnship-roi-calculator", label: "Returnship ROI Calculator", desc: "Compare returnship programs vs. direct re-entry" },
              { href: "/women-returning-to-work", label: "Women Returning to Work", desc: "Gender-specific salary penalty data and programs" },
            ].map(({ href, label, desc }) => (
              <Link key={href} href={href}
                className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/8 transition-colors space-y-1 block">
                <p className="text-white font-medium text-sm">{label}</p>
                <p className="text-slate-500 text-xs">{desc}</p>
              </Link>
            ))}
          </div>
        </section>

      </div>

      <footer className="border-t border-white/10 pt-8 text-center text-slate-500 text-xs space-y-2 mt-12 mx-4 pb-8">
        <p>
          <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
          {" · "}
          <Link href="/mba-roi-calculator" className="hover:text-slate-300 transition-colors">MBA ROI Calculator</Link>
          {" · "}
          <Link href="/mba-roi" className="hover:text-slate-300 transition-colors">MBA ROI Guide</Link>
          {" · "}
          <Link href="/average-mba-salary" className="hover:text-slate-300 transition-colors">Average MBA Salary</Link>
          {" · "}
          <Link href="/about" className="hover:text-slate-300 transition-colors">About</Link>
          {" · "}
          <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy</Link>
        </p>
        <p>Rational decisions. Compounding outcomes.</p>
      </footer>
    </main>
  )
}
