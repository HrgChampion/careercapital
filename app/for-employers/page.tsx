import Link from "next/link"
import { pageAlternates } from "@/lib/seo"

export const metadata = {
  title: "MBA Salary Analytics for Employers | Custom Reports & Benchmarking | CareerReturns",
  description:
    "MBA salary analytics and benchmarking data for employers, HR teams, and talent leaders. Use CareerReturns data to set competitive MBA-hire compensation, design retention packages, and support executive decisions.",
  alternates: pageAlternates("https://careerreturns.com/for-employers"),
  openGraph: {
    title: "MBA Salary Analytics for Employers | CareerReturns",
    description: "Institutional-grade MBA compensation benchmarks for HR teams, talent leaders, and executive decision-making.",
    url: "https://careerreturns.com/for-employers",
  },
}

const benchmarks = [
  { role: "MBA Associate – MBB Consulting", base: "$190,000–$200,000", bonus: "$20,000–$40,000", total: "$210,000–$240,000" },
  { role: "MBA Associate – Investment Banking (BB)", base: "$175,000–$200,000", bonus: "$50,000–$150,000", total: "$225,000–$350,000" },
  { role: "MBA Associate – Private Equity", base: "$175,000–$225,000", bonus: "$50,000–$175,000", total: "$225,000–$400,000+" },
  { role: "MBA Product Manager – FAANG / Tier-1 Tech", base: "$170,000–$200,000", bonus: "$30,000–$50,000", total: "$220,000–$350,000 (+ RSU)" },
  { role: "MBA Strategy / Corp Dev – F500", base: "$140,000–$175,000", bonus: "$20,000–$40,000", total: "$160,000–$215,000" },
  { role: "MBA Associate – Big 4 Advisory", base: "$130,000–$150,000", bonus: "$15,000–$25,000", total: "$145,000–$175,000" },
  { role: "MBA Manager – Healthcare / Pharma", base: "$135,000–$160,000", bonus: "$15,000–$30,000", total: "$150,000–$190,000" },
  { role: "MBA Brand Manager – CPG / Consumer", base: "$120,000–$140,000", bonus: "$15,000–$25,000", total: "$135,000–$165,000" },
]

const useCases = [
  {
    icon: "📊",
    title: "Offer Benchmarking",
    description:
      "Use CareerReturns salary data to calibrate your MBA-hire offer packages. Our benchmarks cover M7, T15, and online MBA programs across 12 industries — so you can set competitive offers without overpaying.",
  },
  {
    icon: "🔒",
    title: "Retention Planning",
    description:
      "Understand the 3-year and 5-year salary trajectories of MBA hires. CareerReturns salary arc data helps you model retention bonuses and equity grants that keep top performers from leaving for MBB or PE.",
  },
  {
    icon: "📋",
    title: "Board & Executive Reporting",
    description:
      "Prepare board-ready compensation benchmarks using institutional MBA salary data. Our DCF-based framework translates salary costs into NPV terms — useful for presenting talent ROI to executive leadership.",
  },
  {
    icon: "🎓",
    title: "MBA Recruitment Strategy",
    description:
      "Identify which MBA programs produce the best return for your hiring budget. CareerReturns data shows school-tier salary distributions, helping you focus on-campus recruiting spend effectively.",
  },
]

const schoolTierBenchmarks = [
  { tier: "M7 (HBS, Wharton, Booth, Kellogg, Columbia, Sloan, Tuck)", medianOffer: "$175,000", topQuartile: "$210,000+", signingBonus: "$25,000–$50,000" },
  { tier: "Top 10–15 (Haas, Fuqua, Darden, Yale SOM, Ross, Stern)", medianOffer: "$155,000", topQuartile: "$185,000+", signingBonus: "$15,000–$30,000" },
  { tier: "Top 15–25 (Kelley, Mendoza, Kenan-Flagler, etc.)", medianOffer: "$120,000", topQuartile: "$145,000+", signingBonus: "$10,000–$20,000" },
  { tier: "Top Online MBA (UNC, Indiana, USC, CMU)", medianOffer: "$105,000", topQuartile: "$130,000+", signingBonus: "$5,000–$15,000" },
]

const faqs = [
  {
    q: "What MBA salary analytics services does CareerReturns offer for employers?",
    a: "CareerReturns provides free MBA compensation benchmarks by school tier (M7, T15, T25, online) and by industry (consulting, banking, tech, healthcare, CPG, nonprofit). The data covers base salary, bonus, and total compensation at years 1, 3, 5, and 10 post-MBA. The MBA ROI Report 2026 is available as a downloadable reference for HR teams and talent leaders.",
  },
  {
    q: "How accurate is CareerReturns MBA salary data for employer benchmarking?",
    a: "CareerReturns aggregates data from GMAC Employment Reports, school-published placement data, Levels.fyi (tech), Glassdoor, and Bloomberg Businessweek surveys. Our methodology applies DCF modeling to convert salary benchmarks into financial projections. For institutional-grade compensation surveys used in board reporting, we recommend supplementing with Mercer or Korn Ferry Pay data.",
  },
  {
    q: "Which MBA programs produce the highest salary outcomes for employer hires?",
    a: "M7 programs (Harvard, Wharton, Booth, Kellogg, MIT Sloan, Columbia, Stanford) produce median first-year offers of $175K, with top-quartile outcomes exceeding $210K. For consulting and finance roles specifically, M7 candidates command 15–25% salary premiums over T15 candidates. For tech PM roles, the school tier premium narrows significantly — T15 and T25 candidates often receive equivalent offers at FAANG.",
  },
  {
    q: "How do I use CareerReturns data for executive compensation decisions?",
    a: "CareerReturns salary arc data (years 1, 3, 5, 10) provides the long-term compensation context needed for executive talent decisions. The MBA ROI Report 2026 includes IRR and NPV benchmarks that can be repurposed to show talent investment returns in financial terms — useful for board-level discussions on MBA hiring programs, training budgets, or MBA sponsorship policies.",
  },
  {
    q: "Does CareerReturns offer custom MBA salary reports for employers?",
    a: "CareerReturns currently provides standardized salary analytics through the MBA ROI Report 2026 and this For Employers page. For custom segmentation (industry-specific, geography-adjusted, role-level breakdowns), contact us at careerreturns.com/contact. For fully custom enterprise compensation surveys, Mercer, Korn Ferry, and Radford (Aon) are the established institutional providers.",
  },
]

export default function ForEmployersPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-violet-600/12 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12 sm:space-y-20">

        {/* Header */}
        <header className="space-y-5">
          <p className="text-xs font-medium text-violet-400 uppercase tracking-widest">CareerReturns · For Employers</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            MBA Salary Analytics<br />
            <span className="text-slate-400">for Employers & Talent Leaders</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Set competitive MBA-hire offer packages, design retention strategies, and present board-ready
            compensation benchmarks — using the same salary data that powers the CareerReturns financial model.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Industries Covered", value: "12" },
              { label: "School Tiers", value: "5" },
              { label: "M7 Median Offer", value: "$175k" },
              { label: "10-yr MBB Potential", value: "$1.5M+" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <p className="text-violet-400 font-semibold text-base">{value}</p>
                <p className="text-slate-500 text-xs mt-1">{label}</p>
              </div>
            ))}
          </div>
        </header>

        {/* Use Cases */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">How Employers Use CareerReturns Data</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {useCases.map(({ icon, title, description }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-2xl">{icon}</p>
                <h3 className="text-white font-semibold text-sm">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Role-Level Benchmarks */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">MBA Compensation Benchmarks by Role (2026)</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Total compensation by role and industry for first-year MBA associate hires. Figures represent
            national US benchmarks; adjust +10–20% for New York / San Francisco and -5–10% for secondary markets.
          </p>
          <div className="space-y-3">
            {benchmarks.map(({ role, base, bonus, total }) => (
              <div key={role} className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <p className="text-white font-semibold text-xs">{role}</p>
                  <span className="text-violet-400 font-semibold text-sm w-fit">{total}</span>
                </div>
                <div className="flex gap-4 text-xs text-slate-400">
                  <span>Base: <span className="text-slate-300">{base}</span></span>
                  <span>Bonus: <span className="text-slate-300">{bonus}</span></span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs">
            Source: GMAC Employment Report 2025, school placement data, Levels.fyi, Glassdoor. Compiled by CareerReturns.
          </p>
        </section>

        {/* School Tier Benchmarks */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Median MBA Offers by School Tier</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            School tier is a significant compensation driver in consulting and finance, but matters less
            in technology, where role and company are stronger determinants.
          </p>
          <div className="space-y-3">
            {schoolTierBenchmarks.map(({ tier, medianOffer, topQuartile, signingBonus }) => (
              <div key={tier} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
                <p className="text-white font-semibold text-sm">{tier}</p>
                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div>
                    <p className="text-slate-500 uppercase tracking-wider text-[10px] mb-1">Median Offer</p>
                    <p className="text-violet-400 font-semibold">{medianOffer}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 uppercase tracking-wider text-[10px] mb-1">Top Quartile</p>
                    <p className="text-slate-300">{topQuartile}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 uppercase tracking-wider text-[10px] mb-1">Signing Bonus</p>
                    <p className="text-slate-300">{signingBonus}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA / Reports */}
        <section className="bg-violet-600/10 border border-violet-500/20 rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Access the MBA ROI Report 2026</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The CareerReturns MBA ROI Report 2026 includes comprehensive salary benchmarks, IRR analysis
            by school and industry, break-even timelines, and recession scenario modeling. Available free —
            no registration required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/mba-roi-report-2026"
              className="inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-medium text-sm px-6 py-3 rounded-xl transition-colors"
            >
              View MBA ROI Report 2026
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm px-6 py-3 rounded-xl transition-colors"
            >
              Request Custom Data
            </Link>
          </div>
          <p className="text-slate-500 text-xs">
            For enterprise compensation surveys and custom segmentation, see our{" "}
            <Link href="/mba-salary-analytics" className="text-violet-400 hover:text-violet-300">
              MBA salary analytics provider comparison
            </Link>.
          </p>
        </section>

        {/* FAQs */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <h3 className="text-white font-semibold text-sm">{q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 pt-8 text-slate-500 text-xs space-y-3">
          <p className="font-medium text-slate-400">CareerReturns</p>
          <p className="leading-relaxed">
            <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            {" · "}
            <Link href="/mba-salary-analytics" className="hover:text-slate-300 transition-colors">MBA Salary Analytics</Link>
            {" · "}
            <Link href="/average-mba-salary" className="hover:text-slate-300 transition-colors">Average MBA Salary</Link>
            {" · "}
            <Link href="/mba-roi-report-2026" className="hover:text-slate-300 transition-colors">MBA ROI Report 2026</Link>
            {" · "}
            <Link href="/mba-roi-calculator" className="hover:text-slate-300 transition-colors">ROI Calculator</Link>
            {" · "}
            <Link href="/contact" className="hover:text-slate-300 transition-colors">Contact</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
          <p className="mt-1">Salary data sourced from GMAC surveys, school employment reports, Glassdoor, Levels.fyi, and publicly reported compensation figures. All ranges are estimates; individual outcomes vary.</p>
        </footer>

      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(({ q, a }) => ({
              "@type": "Question",
              "name": q,
              "acceptedAnswer": { "@type": "Answer", "text": a },
            })),
          }),
        }}
      />
    </main>
  )
}
