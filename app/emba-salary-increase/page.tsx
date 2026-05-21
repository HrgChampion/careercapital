import Link from "next/link"
import { pageAlternates, articleSchema, breadcrumbSchema } from "@/lib/seo"

const _articleSchema = articleSchema({
  title: "EMBA Salary Increase 2026: How Much Does an Executive MBA Raise Your Pay?",
  description: "Executive MBA salary increase data: median +14–28% within 3 years. Wharton EMBA +$35K–$55K, Booth +$30K–$50K. Full program-by-program breakdown and ROI.",
  url: "https://careerreturns.com/emba-salary-increase",
  datePublished: "2026-05-01",
  dateModified: "2026-05-21",
})
const _breadcrumbSchema = breadcrumbSchema([{ name: "EMBA Salary Increase", url: "https://careerreturns.com/emba-salary-increase" }])

export const metadata = {
  title: "Executive MBA Salary Increase 2026: How Much Does an EMBA Raise Your Pay?",
  description:
    "EMBA salary increase 2026: median +14–17% within 3 years. Wharton EMBA +$35K–$55K. 40% of participants get promoted during the program. Full program-by-program data & ROI vs. full-time MBA →",
  alternates: pageAlternates("https://careerreturns.com/emba-salary-increase"),
  openGraph: {
    title: "Executive MBA Salary Increase 2026: How Much Does an EMBA Raise Your Pay?",
    description:
      "EMBA salary increase 2026: median +14–17% within 3 years. Wharton +$35K–$55K. 40% promoted during program. Full data & ROI.",
    url: "https://careerreturns.com/emba-salary-increase",
    siteName: "CareerReturns",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EMBA Salary Increase 2026: +14–28% Median, Wharton +$55K",
    description: "Executive MBA salary data: median +14–17% overall, up to +28% at top programs. 40% promoted during program. Full breakdown by school.",
  },
}

const programData = [
  { school: "Wharton EMBA", cost: "$220K", medianIncrease: "+$35K–$55K", pctIncrease: "22–28%", promotionRate: "50%", breakEven: "4–5 yrs" },
  { school: "Booth EMBA (Chicago)", cost: "$195K", medianIncrease: "+$30K–$50K", pctIncrease: "20–26%", promotionRate: "48%", breakEven: "4–5 yrs" },
  { school: "Kellogg EMBA", cost: "$185K", medianIncrease: "+$28K–$45K", pctIncrease: "18–24%", promotionRate: "45%", breakEven: "4–5 yrs" },
  { school: "Columbia EMBA", cost: "$195K", medianIncrease: "+$25K–$40K", pctIncrease: "16–22%", promotionRate: "43%", breakEven: "5–6 yrs" },
  { school: "INSEAD EMBA", cost: "$180K", medianIncrease: "+$30K–$50K", pctIncrease: "20–28%", promotionRate: "52%", breakEven: "4–5 yrs" },
  { school: "UCLA Anderson EMBA", cost: "$170K", medianIncrease: "+$20K–$35K", pctIncrease: "14–20%", promotionRate: "40%", breakEven: "5–6 yrs" },
  { school: "NYU Stern EMBA", cost: "$175K", medianIncrease: "+$20K–$35K", pctIncrease: "14–20%", promotionRate: "40%", breakEven: "5–6 yrs" },
  { school: "Indiana Kelley Online MBA", cost: "$55K", medianIncrease: "+$15K–$25K", pctIncrease: "10–16%", promotionRate: "35%", breakEven: "2–3 yrs" },
]

const embavFullTime = [
  { factor: "Immediate salary increase", emba: "14–17% median", fullTime: "65–75% median", winner: "Full-Time" },
  { factor: "Starting salary base", emba: "$120K–$160K pre-enrollment", fullTime: "$70K–$100K pre-enrollment", winner: "EMBA" },
  { factor: "Opportunity cost", emba: "None (remain employed)", fullTime: "$150K–$200K (2 yrs income lost)", winner: "EMBA" },
  { factor: "Career switch ability", emba: "Limited", fullTime: "Full — access to recruiting pipelines", winner: "Full-Time" },
  { factor: "MBB consulting access", emba: "Limited", fullTime: "Full on-campus recruiting", winner: "Full-Time" },
  { factor: "IB recruiting access", emba: "Limited", fullTime: "Full on-campus recruiting", winner: "Full-Time" },
  { factor: "10-year cumulative earnings", emba: "Comparable (higher starting base)", fullTime: "Comparable (larger jump)", winner: "Tie" },
  { factor: "Break-even timeline", emba: "4–6 yrs", fullTime: "4–7 yrs", winner: "Tie" },
]

export default function EmbaSalaryIncreasePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-indigo-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12 sm:space-y-20">

        {/* Hero */}
        <section className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium tracking-wide uppercase">
            Executive MBA Salary · 2026 Data
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
            Executive MBA Salary Increase 2026: How Much Does an EMBA Raise Your Pay?
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            The median EMBA salary increase is <strong className="text-white">14–17%</strong> within 3 years of graduation (GMAC 2025). Top-tier programs (Wharton, Booth, INSEAD) produce 20–28% increases. Critically, <strong className="text-white">40% of EMBA participants receive a promotion during or within 1 year of the program</strong> — often before graduation. Here is the full program-by-program breakdown.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-slate-400">
            <span>Updated May 2026</span>
            <span>·</span>
            <span>GMAC Corporate Recruiters Survey 2025 + program data</span>
          </div>
        </section>

        {/* Key stat callouts */}
        <section className="grid sm:grid-cols-3 gap-4">
          {[
            { label: "Median salary increase", value: "+14–17%", sub: "Within 3 years, all EMBA programs" },
            { label: "Top-tier EMBA increase", value: "+20–28%", sub: "Wharton, Booth, INSEAD, Kellogg" },
            { label: "Promoted during program", value: "40%", sub: "Receive promotion during enrollment" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-5 space-y-1">
              <div className="text-2xl font-bold text-emerald-400">{stat.value}</div>
              <div className="text-sm font-semibold text-white">{stat.label}</div>
              <div className="text-xs text-slate-400">{stat.sub}</div>
            </div>
          ))}
        </section>

        {/* Program Table */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">EMBA Salary Increase by Program (2026)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-700/60">
                  <th className="text-left py-3 pr-4 text-slate-400 font-medium">Program</th>
                  <th className="text-left py-3 pr-4 text-slate-400 font-medium">Program Cost</th>
                  <th className="text-left py-3 pr-4 text-slate-400 font-medium">Median $ Increase</th>
                  <th className="text-left py-3 pr-4 text-slate-400 font-medium">% Increase</th>
                  <th className="text-left py-3 pr-4 text-slate-400 font-medium">Promo Rate</th>
                  <th className="text-left py-3 pr-4 text-slate-400 font-medium">Break-Even</th>
                </tr>
              </thead>
              <tbody>
                {programData.map((row, i) => (
                  <tr key={i} className="border-b border-slate-800/60 hover:bg-white/2">
                    <td className="py-3 pr-4 font-medium text-white">{row.school}</td>
                    <td className="py-3 pr-4 text-slate-300 font-mono">{row.cost}</td>
                    <td className="py-3 pr-4 text-emerald-400 font-mono font-medium">{row.medianIncrease}</td>
                    <td className="py-3 pr-4 text-violet-400">{row.pctIncrease}</td>
                    <td className="py-3 pr-4 text-slate-300">{row.promotionRate}</td>
                    <td className="py-3 pr-4 text-slate-300">{row.breakEven}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-400">
            Salary increase figures are median within 3 years of graduation. Actual increase depends heavily on whether you change employers during or after the program — employer changers see 30–50% higher salary increases than those who stay.
          </p>
        </section>

        {/* EMBA vs Full-Time */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">EMBA vs. Full-Time MBA: Salary Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-700/60">
                  <th className="text-left py-3 pr-4 text-slate-400 font-medium">Factor</th>
                  <th className="text-left py-3 pr-4 text-slate-400 font-medium">EMBA</th>
                  <th className="text-left py-3 pr-4 text-slate-400 font-medium">Full-Time MBA</th>
                  <th className="text-left py-3 pr-4 text-slate-400 font-medium">Winner</th>
                </tr>
              </thead>
              <tbody>
                {embavFullTime.map((row, i) => (
                  <tr key={i} className="border-b border-slate-800/60">
                    <td className="py-3 pr-4 text-slate-200">{row.factor}</td>
                    <td className="py-3 pr-4 text-slate-300 text-xs">{row.emba}</td>
                    <td className="py-3 pr-4 text-slate-300 text-xs">{row.fullTime}</td>
                    <td className={`py-3 pr-4 text-xs font-medium ${row.winner === "EMBA" ? "text-indigo-400" : row.winner === "Full-Time" ? "text-emerald-400" : "text-slate-400"}`}>{row.winner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* When EMBA is right */}
        <section className="rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-6 space-y-4">
          <h3 className="font-semibold text-indigo-300">Is an EMBA Right for You?</h3>
          <div className="space-y-2 text-sm text-slate-300">
            <p><strong className="text-white">Choose an EMBA if:</strong> You earn $100K+, want advancement in your current industry, cannot afford 2 years out of the workforce, and do not need access to on-campus recruiting at MBB or IB firms.</p>
            <p><strong className="text-white">Choose a full-time MBA if:</strong> You want to switch industries (especially into consulting or banking), need brand-name recruiting pipelines, or are earlier in your career with more to gain from the full-time network and curriculum.</p>
          </div>
        </section>

        {/* Internal links */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold">Related MBA ROI Data</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: "/mba-roi-calculator", label: "MBA ROI Calculator — Model Your EMBA Numbers" },
              { href: "/mba-roi-report-2026", label: "MBA ROI Report 2026 — Full Industry Breakdown" },
              { href: "/mba-salary-by-school", label: "MBA Salary by School — M7, T15 & EMBA Rankings" },
              { href: "/executive-mba-roi", label: "Executive MBA ROI — Full Cost & Break-Even Analysis" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-slate-700/50 bg-slate-900/50 p-4 text-sm text-indigo-300 hover:text-indigo-200 hover:border-indigo-500/40 transition-colors"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_breadcrumbSchema) }} />
      </div>
    </main>
  )
}
