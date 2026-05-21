import Link from "next/link"
import { pageAlternates, articleSchema, breadcrumbSchema } from "@/lib/seo"

const _articleSchema = articleSchema({
  title: "Marketing MBA Salary 2026: Brand Management $130K–$155K, CMO Track & Full Data",
  description: "Marketing MBA salary by role and school: brand management $130K–$155K, digital marketing $125K–$145K, product marketing $135K–$160K. Kellogg, Wharton, Booth placement data.",
  url: "https://careerreturns.com/marketing-mba-salary",
  datePublished: "2026-05-01",
  dateModified: "2026-05-21",
})
const _breadcrumbSchema = breadcrumbSchema([{ name: "Marketing MBA Salary", url: "https://careerreturns.com/marketing-mba-salary" }])

export const metadata = {
  title: "Marketing MBA Salary 2026: $130K–$155K Brand Management, CMO Track & ROI Data",
  description:
    "Marketing MBA salary 2026: brand management $130K–$155K, digital marketing $125K–$145K, product marketing $135K–$160K. CMO track reaches $250K–$500K. Kellogg, Wharton & Booth placement data →",
  alternates: pageAlternates("https://careerreturns.com/marketing-mba-salary"),
  openGraph: {
    title: "Marketing MBA Salary 2026: $130K–$155K Brand Management, CMO Track & ROI Data",
    description:
      "Marketing MBA salary 2026: brand management $130K–$155K, digital marketing $125K–$145K, CMO track $250K–$500K. Programs, ROI & break-even data.",
    url: "https://careerreturns.com/marketing-mba-salary",
    siteName: "CareerReturns",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing MBA Salary 2026: Brand Mgmt $130K–$155K, CMO Track",
    description: "Marketing MBA salaries by role: brand management, digital marketing, product marketing, CMO track. Kellogg, Wharton, Booth data.",
  },
}

const salaryByRole = [
  { role: "Brand Manager (CPG)", year1: "$130K–$145K", year5: "$180K–$240K", totalComp: "+15–20% bonus", schools: "Kellogg, Ross, Fuqua", verdict: "Best Entry" },
  { role: "Digital Marketing Manager", year1: "$125K–$145K", year5: "$175K–$225K", totalComp: "+15% bonus", schools: "Haas, Sloan, Kellogg", verdict: "Fast Growing" },
  { role: "Product Marketing Manager", year1: "$135K–$160K", year5: "$200K–$280K", totalComp: "+20% bonus + equity", schools: "Sloan, Haas, Stanford", verdict: "Highest Y1" },
  { role: "Marketing Strategy / Consulting", year1: "$175K–$192K", year5: "$280K–$400K", totalComp: "MBB bonus structure", schools: "All M7", verdict: "Fastest ROI" },
  { role: "General Management / CMO Track", year1: "$120K–$150K", year5: "$250K–$500K", totalComp: "Equity + bonus", schools: "HBS, Wharton, Kellogg", verdict: "Highest Ceiling" },
]

const programRankings = [
  { school: "Kellogg (Northwestern)", tier: "M7", marketingPlacement: "25–30%", brandMgmt: "Industry #1", digitalMarketing: "Strong", productMarketing: "Strong", note: "Undisputed #1 for CPG brand management" },
  { school: "Wharton (UPenn)", tier: "M7", marketingPlacement: "15–20%", brandMgmt: "Strong", digitalMarketing: "Strong", productMarketing: "Strong", note: "Strong in strategy + brand, best for financial services marketing" },
  { school: "Booth (Chicago)", tier: "M7", marketingPlacement: "15–20%", brandMgmt: "Good", digitalMarketing: "Good", productMarketing: "Good", note: "Strong analytics emphasis; best for data-driven marketing roles" },
  { school: "HBS", tier: "M7", marketingPlacement: "10–15%", brandMgmt: "Strong", digitalMarketing: "Moderate", productMarketing: "Strong", note: "General management path; fewer dedicated marketing roles" },
  { school: "Ross (Michigan)", tier: "T15", marketingPlacement: "20–25%", brandMgmt: "Strong", digitalMarketing: "Good", productMarketing: "Good", note: "Strong CPG pipeline at lower cost than M7" },
  { school: "Fuqua (Duke)", tier: "T15", marketingPlacement: "20–25%", brandMgmt: "Strong", digitalMarketing: "Good", productMarketing: "Moderate", note: "CPG focus; strong Johnson & Johnson, P&G pipeline" },
  { school: "Haas (Berkeley)", tier: "T15", marketingPlacement: "20–25%", brandMgmt: "Moderate", digitalMarketing: "Industry top", productMarketing: "Industry top", note: "Best for digital/product marketing at Bay Area tech" },
]

const roiData = [
  { scenario: "M7 + MBB Consulting (marketing strategy)", totalCost: "$230K", year1Salary: "$192K", breakEven: "4.2 yrs", irr: "22%", verdict: "Strong" },
  { scenario: "M7 + CPG Brand Management", totalCost: "$230K", year1Salary: "$140K", breakEven: "7.1 yrs", irr: "12%", verdict: "Moderate" },
  { scenario: "M7 + Tech Product Marketing", totalCost: "$230K", year1Salary: "$155K", breakEven: "5.9 yrs", irr: "14%", verdict: "Moderate" },
  { scenario: "T15 + CPG Brand Management", totalCost: "$185K", year1Salary: "$130K", breakEven: "5.8 yrs", irr: "15%", verdict: "Good" },
  { scenario: "M7 + Scholarship + Brand Mgmt", totalCost: "$115K", year1Salary: "$140K", breakEven: "3.2 yrs", irr: "28%", verdict: "Strong" },
]

export default function MarketingMbaSalaryPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-violet-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12 sm:space-y-20">

        {/* Hero */}
        <section className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium tracking-wide uppercase">
            Marketing MBA Salary · 2026 Data
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
            Marketing MBA Salary 2026: $130K–$155K Brand Management, CMO Track & Full ROI Data
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Post-MBA marketing salaries range from <strong className="text-white">$125K–$160K</strong> at year 1 depending on role. Brand management at CPG companies pays $130K–$155K. Product marketing at tech pays $135K–$160K. CMO-track executives with 10+ years post-MBA earn $250K–$500K. Here is the full salary, program, and ROI breakdown.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-slate-400">
            <span>Updated May 2026</span>
            <span>·</span>
            <span>GMAC + program employment reports</span>
          </div>
        </section>

        {/* Salary by Role */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Marketing MBA Salary by Role (2026)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-700/60">
                  <th className="text-left py-3 pr-4 text-slate-400 font-medium">Role</th>
                  <th className="text-left py-3 pr-4 text-slate-400 font-medium">Year 1 Base</th>
                  <th className="text-left py-3 pr-4 text-slate-400 font-medium">Year 5 Base</th>
                  <th className="text-left py-3 pr-4 text-slate-400 font-medium">Best Programs</th>
                </tr>
              </thead>
              <tbody>
                {salaryByRole.map((row, i) => (
                  <tr key={i} className="border-b border-slate-800/60 hover:bg-white/2">
                    <td className="py-3 pr-4 font-medium text-white">{row.role}</td>
                    <td className="py-3 pr-4 text-emerald-400 font-mono font-medium">{row.year1}</td>
                    <td className="py-3 pr-4 text-violet-400 font-mono">{row.year5}</td>
                    <td className="py-3 pr-4 text-slate-300">{row.schools}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-400">
            Base salary only. Total comp including bonus is typically 15–25% above base. Tech product marketing roles include RSU equity — 3-year total comp is often 40–60% above base salary.
          </p>
        </section>

        {/* Key insight */}
        <section className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-6 space-y-3">
          <div className="text-amber-300 font-semibold text-sm uppercase tracking-wide">Key Finding</div>
          <p className="text-slate-200 leading-relaxed">
            Marketing MBAs have a <strong className="text-white">longer break-even (5–8 years)</strong> than consulting (4.2 yrs) or banking (4.5 yrs) at sticker price. The math improves dramatically with scholarship aid — a $60K–$80K scholarship at a T15 program narrows the break-even to 3–4 years. If you&apos;re targeting CPG brand management, a T15 program (Ross, Fuqua, Kenan-Flagler) often produces equivalent outcomes to M7 at 20–30% lower cost.
          </p>
        </section>

        {/* Program Rankings */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Best MBA Programs for Marketing (2026)</h2>
          <div className="space-y-3">
            {programRankings.map((p, i) => (
              <div key={i} className="rounded-lg border border-slate-700/50 bg-slate-900/50 p-4 space-y-1">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="font-semibold text-white">{p.school}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">{p.tier}</span>
                </div>
                <div className="text-sm text-slate-400">Marketing placement: <span className="text-slate-200">{p.marketingPlacement}</span></div>
                <div className="text-sm text-slate-300">{p.note}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ROI Table */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Marketing MBA ROI by Scenario (2026)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-700/60">
                  <th className="text-left py-3 pr-4 text-slate-400 font-medium">Scenario</th>
                  <th className="text-left py-3 pr-4 text-slate-400 font-medium">Total Cost</th>
                  <th className="text-left py-3 pr-4 text-slate-400 font-medium">Year 1 Salary</th>
                  <th className="text-left py-3 pr-4 text-slate-400 font-medium">Break-Even</th>
                  <th className="text-left py-3 pr-4 text-slate-400 font-medium">IRR</th>
                </tr>
              </thead>
              <tbody>
                {roiData.map((row, i) => (
                  <tr key={i} className="border-b border-slate-800/60 hover:bg-white/2">
                    <td className="py-3 pr-4 text-slate-200">{row.scenario}</td>
                    <td className="py-3 pr-4 text-slate-300 font-mono">{row.totalCost}</td>
                    <td className="py-3 pr-4 text-emerald-400 font-mono">{row.year1Salary}</td>
                    <td className="py-3 pr-4 text-slate-300">{row.breakEven}</td>
                    <td className={`py-3 pr-4 font-semibold ${row.irr >= "20%" ? "text-emerald-400" : "text-amber-400"}`}>{row.irr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Internal links */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold">Related MBA Salary & ROI Data</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: "/mba-salary-by-school", label: "MBA Salary by School 2026 — All Programs" },
              { href: "/mba-roi-marketing", label: "Marketing MBA ROI: Full Break-Even Analysis" },
              { href: "/mba-roi-calculator", label: "MBA ROI Calculator — Model Your Specific Numbers" },
              { href: "/average-mba-salary-after-5-years", label: "Average MBA Salary After 5 & 10 Years" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-slate-700/50 bg-slate-900/50 p-4 text-sm text-violet-300 hover:text-violet-200 hover:border-violet-500/40 transition-colors"
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
