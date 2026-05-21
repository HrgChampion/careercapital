import Link from "next/link"
import { pageAlternates, articleSchema, breadcrumbSchema } from "@/lib/seo"

const _articleSchema = articleSchema({
  title: "M7 MBA Consulting Salary 2026: MBB, Big 4 & Placement Data by School",
  description: "M7 MBA consulting salary 2026: McKinsey $232K, BCG $225K, Bain $227K total comp. Placement rates by school, Big 4 comparison & career progression to Partner.",
  url: "https://careerreturns.com/m7-mba-consulting-salary",
  datePublished: "2026-05-01",
  dateModified: "2026-05-21",
})
const _breadcrumbSchema = breadcrumbSchema([{ name: "M7 MBA Consulting Salary", url: "https://careerreturns.com/m7-mba-consulting-salary" }])

export const metadata = {
  title: "M7 MBA Consulting Salary 2026: McKinsey $232K · BCG $225K · Placement by School",
  description:
    "M7 MBA consulting salary 2026: McKinsey $192K base + $40K bonus = $232K. BCG $225K. Bain $227K. MBB placement rates by school (HBS 30%, Booth 40%). Big 4 comparison & Partner-track progression →",
  alternates: pageAlternates("https://careerreturns.com/m7-mba-consulting-salary"),
  openGraph: {
    title: "M7 MBA Consulting Salary 2026: McKinsey $232K · BCG $225K · Placement by School",
    description:
      "M7 MBA consulting salary: McKinsey $232K, BCG $225K, Bain $227K. Placement by school, Big 4 vs MBB comparison & Partner progression.",
    url: "https://careerreturns.com/m7-mba-consulting-salary",
    siteName: "CareerReturns",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "M7 MBA Consulting Salary 2026: McKinsey $232K, BCG $225K, Bain $227K",
    description: "MBB consulting salary for M7 MBAs. Placement rates by school, Y1–Partner progression & Big 4 comparison.",
  },
}

const mbbSalary = [
  { firm: "McKinsey & Company", base: "$192,000", bonus: "$35K–$40K", signing: "$5K–$10K", total: "$232K–$242K", tier: "MBB" },
  { firm: "Boston Consulting Group (BCG)", base: "$190,000", bonus: "$35K", signing: "$5K–$10K", total: "$225K–$235K", tier: "MBB" },
  { firm: "Bain & Company", base: "$192,000", bonus: "$35K", signing: "$5K–$10K", total: "$227K–$237K", tier: "MBB" },
  { firm: "Deloitte S&O", base: "$175,000", bonus: "$25K–$30K", signing: "$5K", total: "$200K–$210K", tier: "Big 4" },
  { firm: "Strategy& (PwC)", base: "$170,000", bonus: "$25K", signing: "$5K", total: "$195K–$200K", tier: "Big 4" },
  { firm: "EY-Parthenon", base: "$165,000", bonus: "$20K–$25K", signing: "$5K", total: "$185K–$195K", tier: "Big 4" },
  { firm: "Oliver Wyman", base: "$180,000", bonus: "$30K", signing: "$5K", total: "$210K–$215K", tier: "Boutique" },
  { firm: "A.T. Kearney / LEK", base: "$175,000", bonus: "$28K", signing: "$5K", total: "$203K–$208K", tier: "Boutique" },
]

const placementBySchool = [
  { school: "Booth (Chicago)", consultingPct: "35–40%", mbbPlacement: "Very Strong", mckinsey: "Top 3 feeder", bcgBain: "Top 5 feeder", note: "Highest consulting placement % among M7" },
  { school: "Kellogg (Northwestern)", consultingPct: "30–35%", mbbPlacement: "Very Strong", mckinsey: "Top 5 feeder", bcgBain: "Top 5 feeder", note: "Strong MBB + Big 4 pipeline" },
  { school: "HBS", consultingPct: "25–30%", mbbPlacement: "Strong", mckinsey: "#1 or #2 feeder (volume)", bcgBain: "Top 3 feeder", note: "Largest absolute MBB placement by headcount" },
  { school: "MIT Sloan", consultingPct: "25–30%", mbbPlacement: "Strong", mckinsey: "Top 5 feeder", bcgBain: "Top 5 feeder", note: "Analytical/tech consulting strength" },
  { school: "Wharton (UPenn)", consultingPct: "20–25%", mbbPlacement: "Strong", mckinsey: "Top 5 feeder", bcgBain: "Top 5 feeder", note: "Strongest IB pipeline dilutes consulting %" },
  { school: "Columbia Business School", consultingPct: "20–25%", mbbPlacement: "Good", mckinsey: "Target school", bcgBain: "Target school", note: "NYC advantage for strategy consulting roles" },
  { school: "Stanford GSB", consultingPct: "15–20%", mbbPlacement: "Good", mckinsey: "Target school", bcgBain: "Target school", note: "Lowest % — most grads go to tech, PE, startups" },
]

const careerProgression = [
  { level: "Associate / Consultant", years: "Year 1–2 post-MBA", comp: "$225K–$242K", note: "Entry level for MBA hires; project execution focus" },
  { level: "Engagement Manager / Project Leader", years: "Year 3–4", comp: "$300K–$400K", note: "Team lead; 50% promoted from Associate level" },
  { level: "Principal / Associate Principal", years: "Year 5–6", comp: "$450K–$600K", note: "Business development begins; client ownership" },
  { level: "Partner / Director", years: "Year 7+", comp: "$800K–$2M+", note: "Profit share + base; 10–20% of Principals promoted" },
]

export default function M7MbaConsultingSalaryPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-sky-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12 sm:space-y-20">

        {/* Hero */}
        <section className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-medium tracking-wide uppercase">
            M7 MBA Consulting · 2026 Data
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
            M7 MBA Consulting Salary 2026: McKinsey $232K · BCG $225K · Placement by School
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Post-MBA MBB consulting associates earn <strong className="text-white">$225K–$242K total Year 1 compensation</strong> across McKinsey, BCG, and Bain. Booth places 35–40% of its class into consulting — the highest of any M7 program. Here is the full salary, firm-by-firm breakdown, placement rates by school, and Partner-track progression.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-slate-400">
            <span>Updated May 2026</span>
            <span>·</span>
            <span>Program employment reports + industry data</span>
          </div>
        </section>

        {/* MBB Salary Table */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">MBB & Consulting Firm Salary Comparison (2026)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-700/60">
                  <th className="text-left py-3 pr-4 text-slate-400 font-medium">Firm</th>
                  <th className="text-left py-3 pr-4 text-slate-400 font-medium">Base</th>
                  <th className="text-left py-3 pr-4 text-slate-400 font-medium">Bonus</th>
                  <th className="text-left py-3 pr-4 text-slate-400 font-medium">Total Y1 Comp</th>
                  <th className="text-left py-3 pr-4 text-slate-400 font-medium">Tier</th>
                </tr>
              </thead>
              <tbody>
                {mbbSalary.map((row, i) => (
                  <tr key={i} className={`border-b border-slate-800/60 hover:bg-white/2 ${row.tier === "MBB" ? "" : "opacity-80"}`}>
                    <td className="py-3 pr-4 font-medium text-white">{row.firm}</td>
                    <td className="py-3 pr-4 text-slate-300 font-mono">{row.base}</td>
                    <td className="py-3 pr-4 text-slate-300 font-mono text-xs">{row.bonus}</td>
                    <td className={`py-3 pr-4 font-mono font-semibold ${row.tier === "MBB" ? "text-emerald-400" : "text-sky-400"}`}>{row.total}</td>
                    <td className="py-3 pr-4">
                      <span className={`text-xs px-2 py-0.5 rounded-full border ${row.tier === "MBB" ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" : row.tier === "Big 4" ? "bg-sky-500/20 text-sky-300 border-sky-500/30" : "bg-slate-700/50 text-slate-300 border-slate-600/30"}`}>
                        {row.tier}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-400">
            All figures are Year 1 total compensation for post-MBA Associates/Consultants. Bonuses are performance-based and represent typical ranges — top performers earn at or above the high end.
          </p>
        </section>

        {/* Placement by School */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Consulting Placement by M7 Program</h2>
          <div className="space-y-3">
            {placementBySchool.map((p, i) => (
              <div key={i} className="rounded-lg border border-slate-700/50 bg-slate-900/50 p-4 space-y-2">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="font-semibold text-white">{p.school}</span>
                  <span className="text-sm font-mono text-emerald-400">{p.consultingPct} into consulting</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-1 text-xs text-slate-400">
                  <span>McKinsey: <span className="text-slate-200">{p.mckinsey}</span></span>
                  <span>BCG / Bain: <span className="text-slate-200">{p.bcgBain}</span></span>
                </div>
                <p className="text-xs text-slate-400">{p.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Career Progression */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">MBB Consulting Career Progression & Salary (Post-MBA)</h2>
          <div className="space-y-3">
            {careerProgression.map((row, i) => (
              <div key={i} className="flex items-start gap-4 py-4 border-b border-slate-800/60">
                <div className="w-8 h-8 rounded-full bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-300 font-bold text-sm flex-shrink-0">
                  {i + 1}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="font-semibold text-white">{row.level}</span>
                    <span className="font-mono text-emerald-400 text-sm">{row.comp}</span>
                  </div>
                  <div className="text-xs text-slate-400">{row.years} · {row.note}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ROI callout */}
        <section className="rounded-xl border border-sky-500/20 bg-sky-500/5 p-6 space-y-3">
          <div className="text-sky-300 font-semibold text-sm uppercase tracking-wide">MBB MBA ROI</div>
          <p className="text-slate-200 leading-relaxed text-sm">
            MBB consulting is the strongest ROI destination for an M7 MBA: break-even of <strong className="text-white">4.2 years</strong> at sticker price, IRR of <strong className="text-white">22%</strong>. With a 50% scholarship, IRR reaches 40% and break-even drops to 2.1 years. The consulting salary delta vs. a pre-MBA professional earner ($90K–$110K) of $115K–$132K/year in Year 1 creates the fastest payback of any MBA destination.
          </p>
        </section>

        {/* Internal links */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold">Related Data</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: "/mba-roi-mckinsey", label: "McKinsey MBA ROI — Full Financial Analysis" },
              { href: "/mba-roi-big4-vs-mbb", label: "Big 4 vs MBB ROI — Which Pays More?" },
              { href: "/mba-salary-by-school", label: "MBA Salary by School — Full Rankings 2026" },
              { href: "/mba-roi-report-2026", label: "MBA ROI Report 2026 — All Industries Compared" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-slate-700/50 bg-slate-900/50 p-4 text-sm text-sky-300 hover:text-sky-200 hover:border-sky-500/40 transition-colors"
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
