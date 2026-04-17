import Link from "next/link"
import { pageAlternates, articleSchema, breadcrumbSchema } from "@/lib/seo"

const _articleSchema = articleSchema({
  title: "MBA Salary by School 2026: Full Rankings — Stanford $210K to Online $65K",
  description: "What do MBA grads really earn? Stanford $210K, HBS $205K, Wharton $200K, Booth $195K. Full salary rankings for M7, T15, T25 & online programs. 2026 data.",
  url: "https://careerreturns.com/mba-salary-by-school",
  datePublished: "2026-03-21",
  dateModified: "2026-04-17",
})
const _breadcrumbSchema = breadcrumbSchema([{ name: "MBA Salary by School 2026", url: "https://careerreturns.com/mba-salary-by-school" }])

export const metadata = {
  title: "MBA Salary by School 2026: Full Rankings — Stanford $210K to Online $65K",
  description:
    "What do MBA grads really earn? Stanford $210K, HBS $205K, Wharton $200K, Booth $195K. Full salary rankings for M7, T15, T25 & online programs. 2026 data.",
  openGraph: {
    title: "MBA Salary by School 2026: Full Rankings — Stanford $210K to Online $65K",
    description:
      "What do MBA grads really earn? Stanford $210K, HBS $205K, Wharton $200K, Booth $195K. Full salary rankings for M7, T15, T25 & online programs. 2026 data.",
    url: "https://careerreturns.com/mba-salary-by-school",
    siteName: "CareerReturns",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MBA Salary by School 2026: Full Rankings — Stanford $210K to Online $65K",
    description:
      "What do MBA grads really earn? Stanford $210K, HBS $205K, Wharton $200K, Booth $195K. Full salary rankings for M7, T15, T25 & online programs. 2026 data.",
  },
  alternates: pageAlternates("https://careerreturns.com/mba-salary-by-school"),
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the highest paying MBA school?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stanford GSB produces the highest median post-MBA salary at approximately $210K, driven by its strong tech and venture capital placement pipeline in the Bay Area. Harvard Business School and Wharton follow at $205K and $200K respectively. All three are M7 programs with on-campus MBB and bulge-bracket banking recruiting access that drives top-quartile outcomes above $250K.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Harvard MBA salary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The median post-MBA salary at Harvard Business School (HBS) is approximately $205K for the class of 2024–2026. The full salary range spans $175K–$250K+ depending on industry track. HBS MBB consulting placements start at $212K–$232K total compensation; investment banking placements start at $275K–$350K total comp. The Harvard MBA salary for general management tracks is $140K–$170K.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Wharton MBA salary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The median post-MBA salary at Wharton School of the University of Pennsylvania is approximately $200K. Wharton's finance and investment banking pipeline is among the strongest of any MBA program — IB placements at bulge bracket firms start at $275K–$350K total compensation. Wharton MBA salary for consulting (MBB) tracks is $212K–$232K. The full reported range for Wharton 2025 placement is $175K–$245K+.",
      },
    },
    {
      "@type": "Question",
      name: "Which MBA program has the best salary outcomes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On median salary alone, Stanford GSB ($210K) leads, followed by HBS ($205K) and Wharton ($200K). On 10-year ROI, Booth and Wharton are competitive with HBS due to lower tuition and strong consulting/finance pipelines. For tech-track salaries, Stanford and MIT Sloan produce the strongest outcomes. For investment banking, Wharton and Columbia's proximity to Wall Street gives them structural recruiting advantages.",
      },
    },
    {
      "@type": "Question",
      name: "What is the M7 MBA average salary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The M7 MBA average salary (median across all M7 programs: HBS, Wharton, Booth, Kellogg, MIT Sloan, Columbia, Stanford GSB) is approximately $185K–$210K for the first year post-graduation across all industry tracks. For consulting and banking tracks specifically, M7 median total compensation is $212K–$350K depending on industry. The average M7 MBA salary across all placed graduates is approximately $195K.",
      },
    },
  ],
}

const datasetSchema = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "MBA Salary by School 2026",
  description:
    "Post-MBA salary data for 25 business schools including M7, T15, T25, and top online programs — median salary, salary range, and class size",
  url: "https://careerreturns.com/mba-salary-by-school",
  creator: {
    "@type": "Organization",
    name: "CareerReturns",
    url: "https://careerreturns.com",
  },
  temporalCoverage: "2026",
  keywords: [
    "mba salary by school",
    "mba salaries by school",
    "m7 mba salary",
    "harvard mba salary",
    "wharton mba salary",
    "booth mba salary",
  ],
}

const schools = [
  { name: "Harvard Business School", tier: "M7", median: "$205K", range: "$175K–$250K+", classSize: "900+" },
  { name: "Stanford GSB", tier: "M7", median: "$210K", range: "$180K–$275K+", classSize: "400+" },
  { name: "Wharton (UPenn)", tier: "M7", median: "$200K", range: "$175K–$245K+", classSize: "900+" },
  { name: "Booth (Chicago)", tier: "M7", median: "$195K", range: "$165K–$240K+", classSize: "600+" },
  { name: "Kellogg (Northwestern)", tier: "M7", median: "$185K", range: "$160K–$230K+", classSize: "500+" },
  { name: "MIT Sloan", tier: "M7", median: "$190K", range: "$165K–$235K+", classSize: "400+" },
  { name: "Columbia Business School", tier: "M7", median: "$185K", range: "$160K–$225K+", classSize: "750+" },
  { name: "Dartmouth Tuck", tier: "T15", median: "$175K", range: "$155K–$215K+", classSize: "300+" },
  { name: "Duke Fuqua", tier: "T15", median: "$165K", range: "$145K–$205K+", classSize: "450+" },
  { name: "Yale SOM", tier: "T15", median: "$160K", range: "$140K–$200K+", classSize: "350+" },
  { name: "Michigan Ross", tier: "T15", median: "$165K", range: "$145K–$205K+", classSize: "450+" },
  { name: "UCLA Anderson", tier: "T15", median: "$160K", range: "$135K–$200K+", classSize: "400+" },
  { name: "NYU Stern", tier: "T15", median: "$165K", range: "$145K–$210K+", classSize: "500+" },
  { name: "Cornell Johnson", tier: "T15", median: "$155K", range: "$135K–$195K+", classSize: "300+" },
  { name: "Georgetown McDonough", tier: "T25", median: "$145K", range: "$125K–$185K+", classSize: "350+" },
  { name: "UNC Kenan-Flagler", tier: "T25", median: "$135K", range: "$115K–$175K+", classSize: "350+" },
  { name: "Indiana Kelley", tier: "T25", median: "$130K", range: "$110K–$165K+", classSize: "350+" },
  { name: "UT Austin McCombs", tier: "T25", median: "$140K", range: "$120K–$175K+", classSize: "350+" },
  { name: "Emory Goizueta", tier: "T25", median: "$130K", range: "$110K–$165K+", classSize: "200+" },
  { name: "USC Marshall", tier: "T25", median: "$135K", range: "$115K–$170K+", classSize: "400+" },
  { name: "INSEAD", tier: "Global", median: "$155K (global)", range: "$130K–$200K+", classSize: "1,000+" },
  { name: "London Business School", tier: "Global", median: "$145K", range: "£95K–£175K+", classSize: "400+" },
  { name: "ISB (India)", tier: "Global", median: "₹28L median", range: "₹22L–₹45L+", classSize: "900+" },
  { name: "Indiana Kelley Online", tier: "Online", median: "$105K", range: "$85K–$130K+", classSize: "500+" },
  { name: "UNC Online MBA", tier: "Online", median: "$100K", range: "$80K–$125K+", classSize: "300+" },
]

const tierColors: Record<string, string> = {
  M7: "text-violet-400",
  T15: "text-indigo-400",
  T25: "text-sky-400",
  Global: "text-emerald-400",
  Online: "text-slate-400",
}

const tierBadgeColors: Record<string, string> = {
  M7: "bg-violet-500/20 text-violet-300 border-violet-500/30",
  T15: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
  T25: "bg-sky-500/20 text-sky-300 border-sky-500/30",
  Global: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  Online: "bg-slate-500/20 text-slate-300 border-slate-500/30",
}

const roiData = [
  { school: "Stanford GSB", median: "$210K", totalCost: "$230K", ratio: "0.91x", note: "Strong PE/VC equity upside improves long-run ROI" },
  { school: "Harvard Business School", median: "$205K", totalCost: "$230K", ratio: "0.89x", note: "MBB placement rate among the highest of any program" },
  { school: "Wharton", median: "$200K", totalCost: "$230K", ratio: "0.87x", note: "IB/PE pipeline; strong finance alumni network" },
  { school: "MIT Sloan", median: "$190K", totalCost: "$215K", ratio: "0.88x", note: "Tech/quant emphasis; strong RSU outcomes" },
  { school: "Booth (Chicago)", median: "$195K", totalCost: "$210K", ratio: "0.93x", note: "Highest ROI ratio among M7; lower tuition than HBS/Wharton" },
  { school: "Kellogg", median: "$185K", totalCost: "$210K", ratio: "0.88x", note: "CPG, marketing, and consulting tracks" },
  { school: "Columbia", median: "$185K", totalCost: "$215K", ratio: "0.86x", note: "NYC location drives IB and PE recruiting access" },
  { school: "Tuck (Dartmouth)", median: "$175K", totalCost: "$205K", ratio: "0.85x", note: "Smaller class; strong alumni density in consulting" },
  { school: "Fuqua (Duke)", median: "$165K", totalCost: "$185K", ratio: "0.89x", note: "Health sector and consulting track strength" },
  { school: "Kelley Online", median: "$105K", totalCost: "$55K", ratio: "1.91x", note: "Best cost-to-salary ratio; no opportunity cost" },
]

const careerTracks = [
  {
    track: "Investment Banking",
    topSchools: ["Wharton", "Columbia", "HBS", "Booth"],
    note: "Proximity to Wall Street and structured IB recruiting pipelines make Wharton and Columbia the top choices. All M7 programs offer bulge bracket on-campus recruiting.",
    color: "text-violet-400",
  },
  {
    track: "MBB Consulting",
    topSchools: ["HBS", "Wharton", "Booth", "Kellogg", "MIT Sloan"],
    note: "MBB recruits heavily from all M7 programs. HBS and Wharton produce the largest absolute number of McKinsey/BCG/Bain hires annually. Booth has the highest MBB offer rate as a share of class.",
    color: "text-indigo-400",
  },
  {
    track: "Tech / Product Management",
    topSchools: ["Stanford GSB", "MIT Sloan", "HBS", "Haas (Berkeley)"],
    note: "Stanford's Bay Area location and MIT's tech-industry ties produce the strongest FAANG product management pipelines. RSU-inclusive total compensation at these schools can exceed $300K.",
    color: "text-sky-400",
  },
  {
    track: "Private Equity / Venture Capital",
    topSchools: ["HBS", "Stanford GSB", "Wharton"],
    note: "PE and VC are the most brand-sensitive post-MBA tracks. HBS and Stanford dominate PE megafund placement; Wharton leads for IB-to-PE transitions.",
    color: "text-emerald-400",
  },
  {
    track: "General Management / CPG",
    topSchools: ["Kellogg", "Fuqua", "Darden", "Ross"],
    note: "Kellogg leads for CPG brand management (P&G, Unilever, J&J). Fuqua and Darden have strong GM program pipelines. T15 programs are competitive for these tracks.",
    color: "text-amber-400",
  },
  {
    track: "Healthcare Management",
    topSchools: ["Fuqua", "Yale SOM", "Kellogg", "Ross"],
    note: "Duke Fuqua and Yale SOM have dedicated health sector programs. Healthcare management salaries ($140K–$165K) are below finance/consulting but career trajectory is stable.",
    color: "text-rose-400",
  },
]

export default function MbaSalaryBySchoolPage() {
  const m7Schools = schools.filter((s) => s.tier === "M7")
  const t15Schools = schools.filter((s) => s.tier === "T15")
  const t25Schools = schools.filter((s) => s.tier === "T25")
  const globalSchools = schools.filter((s) => s.tier === "Global")
  const onlineSchools = schools.filter((s) => s.tier === "Online")

  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-violet-600/12 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12 sm:space-y-20">

        {/* Hero */}
        <header className="space-y-5">
          <p className="text-xs font-medium text-violet-400 uppercase tracking-widest">CareerReturns · MBA Salary Data</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            MBA Salary by School 2026
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Median post-MBA salary, full range, and class size for 25 business schools — M7, T15, T25,
            top global programs, and ranked online MBAs. Data reflects 2026 placement outcomes.
          </p>

          {/* Quick answer */}
          <div className="bg-white/5 border border-violet-500/30 rounded-xl p-5 space-y-2">
            <p className="text-xs font-medium text-violet-400 uppercase tracking-widest">Quick Answer</p>
            <p className="text-white font-semibold text-base">
              M7 median: $175K–$210K &nbsp;|&nbsp; T15: $140K–$165K &nbsp;|&nbsp; T25: $115K–$140K
            </p>
            <p className="text-slate-400 text-sm">
              Stanford GSB leads at $210K median; Booth offers the best M7 salary-to-cost ratio at 0.93x.
              Online ranked programs (Kelley, UNC) deliver $100K–$105K with significantly lower total cost.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "HBS Median", value: "$205K" },
              { label: "Wharton Median", value: "$200K" },
              { label: "M7 Range", value: "$185–210K" },
              { label: "Top Online", value: "$100–105K" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <p className="text-violet-400 font-semibold text-base">{value}</p>
                <p className="text-slate-500 text-xs mt-1">{label}</p>
              </div>
            ))}
          </div>
        </header>

        {/* Jump nav */}
        <nav className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-3">Jump to</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            <a href="#m7-salaries" className="text-sm text-violet-400 hover:text-violet-300 transition-colors">M7 Salaries</a>
            <a href="#t15-salaries" className="text-sm text-violet-400 hover:text-violet-300 transition-colors">T15 Salaries</a>
            <a href="#t25-salaries" className="text-sm text-violet-400 hover:text-violet-300 transition-colors">T25 Salaries</a>
            <a href="#global-online" className="text-sm text-violet-400 hover:text-violet-300 transition-colors">Global & Online</a>
            <a href="#tier-comparison" className="text-sm text-violet-400 hover:text-violet-300 transition-colors">Tier Comparison</a>
            <a href="#roi-by-school" className="text-sm text-violet-400 hover:text-violet-300 transition-colors">ROI by School</a>
            <a href="#career-tracks" className="text-sm text-violet-400 hover:text-violet-300 transition-colors">Career Tracks</a>
            <a href="#faq" className="text-sm text-violet-400 hover:text-violet-300 transition-colors">FAQ</a>
          </div>
        </nav>

        {/* Full school salary table */}
        <section className="space-y-10">

          {/* M7 */}
          <div id="m7-salaries" className="space-y-4">
            <div>
              <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full border bg-violet-500/20 text-violet-300 border-violet-500/30 mb-2">M7</span>
              <h2 className="text-2xl font-semibold tracking-tight">M7 MBA Salary by School</h2>
              <p className="text-slate-400 text-sm mt-1">
                M7 programs provide on-campus recruiting access to MBB consulting, bulge-bracket banking, and
                top-tier tech firms. Salary range reflects all placed graduates; top-quartile outcomes are
                driven by finance and consulting placements.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-slate-400 text-left">
                    <th className="pb-3 pr-4 font-medium">School</th>
                    <th className="pb-3 pr-4 font-medium">Median Salary</th>
                    <th className="pb-3 pr-4 font-medium">Salary Range</th>
                    <th className="pb-3 font-medium">Class Size</th>
                  </tr>
                </thead>
                <tbody>
                  {m7Schools.map((school) => (
                    <tr key={school.name} className="border-b border-white/5 hover:bg-white/[0.02]">
                      <td className="py-3 pr-4 text-white font-medium">{school.name}</td>
                      <td className={`py-3 pr-4 font-semibold ${tierColors[school.tier]}`}>{school.median}</td>
                      <td className="py-3 pr-4 text-slate-300 text-xs">{school.range}</td>
                      <td className="py-3 text-slate-400 text-xs">{school.classSize}/yr</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* T15 */}
          <div id="t15-salaries" className="space-y-4">
            <div>
              <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full border bg-indigo-500/20 text-indigo-300 border-indigo-500/30 mb-2">T15</span>
              <h2 className="text-2xl font-semibold tracking-tight">Top 15 MBA Salary by School</h2>
              <p className="text-slate-400 text-sm mt-1">
                T15 programs provide access to Tier 2 consulting (Big 4 Strategy, regional MBB offices),
                regional finance, and general management pipelines. Salary premiums over T25 are most
                pronounced for consulting and finance tracks.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-slate-400 text-left">
                    <th className="pb-3 pr-4 font-medium">School</th>
                    <th className="pb-3 pr-4 font-medium">Median Salary</th>
                    <th className="pb-3 pr-4 font-medium">Salary Range</th>
                    <th className="pb-3 font-medium">Class Size</th>
                  </tr>
                </thead>
                <tbody>
                  {t15Schools.map((school) => (
                    <tr key={school.name} className="border-b border-white/5 hover:bg-white/[0.02]">
                      <td className="py-3 pr-4 text-white font-medium">{school.name}</td>
                      <td className={`py-3 pr-4 font-semibold ${tierColors[school.tier]}`}>{school.median}</td>
                      <td className="py-3 pr-4 text-slate-300 text-xs">{school.range}</td>
                      <td className="py-3 text-slate-400 text-xs">{school.classSize}/yr</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* T25 */}
          <div id="t25-salaries" className="space-y-4">
            <div>
              <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full border bg-sky-500/20 text-sky-300 border-sky-500/30 mb-2">T25</span>
              <h2 className="text-2xl font-semibold tracking-tight">Top 25 MBA Salary by School</h2>
              <p className="text-slate-400 text-sm mt-1">
                T25 programs deliver strong regional outcomes, particularly for general management, healthcare,
                and mid-market consulting. The salary gap vs. T15 narrows for non-MBB tracks.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-slate-400 text-left">
                    <th className="pb-3 pr-4 font-medium">School</th>
                    <th className="pb-3 pr-4 font-medium">Median Salary</th>
                    <th className="pb-3 pr-4 font-medium">Salary Range</th>
                    <th className="pb-3 font-medium">Class Size</th>
                  </tr>
                </thead>
                <tbody>
                  {t25Schools.map((school) => (
                    <tr key={school.name} className="border-b border-white/5 hover:bg-white/[0.02]">
                      <td className="py-3 pr-4 text-white font-medium">{school.name}</td>
                      <td className={`py-3 pr-4 font-semibold ${tierColors[school.tier]}`}>{school.median}</td>
                      <td className="py-3 pr-4 text-slate-300 text-xs">{school.range}</td>
                      <td className="py-3 text-slate-400 text-xs">{school.classSize}/yr</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Global & Online */}
          <div id="global-online" className="space-y-4">
            <div>
              <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full border bg-emerald-500/20 text-emerald-300 border-emerald-500/30 mb-2">Global & Online</span>
              <h2 className="text-2xl font-semibold tracking-tight">Global & Online MBA Salary by School</h2>
              <p className="text-slate-400 text-sm mt-1">
                Global programs (INSEAD, LBS, ISB) vary significantly by currency and placement market.
                Online ranked programs deliver $100K–$105K medians with dramatically lower total program cost.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-slate-400 text-left">
                    <th className="pb-3 pr-4 font-medium">School</th>
                    <th className="pb-3 pr-4 font-medium">Tier</th>
                    <th className="pb-3 pr-4 font-medium">Median Salary</th>
                    <th className="pb-3 font-medium">Salary Range</th>
                  </tr>
                </thead>
                <tbody>
                  {[...globalSchools, ...onlineSchools].map((school) => (
                    <tr key={school.name} className="border-b border-white/5 hover:bg-white/[0.02]">
                      <td className="py-3 pr-4 text-white font-medium">{school.name}</td>
                      <td className="py-3 pr-4">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${tierBadgeColors[school.tier]}`}>
                          {school.tier}
                        </span>
                      </td>
                      <td className={`py-3 pr-4 font-semibold ${tierColors[school.tier]}`}>{school.median}</td>
                      <td className="py-3 text-slate-300 text-xs">{school.range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Tier comparison */}
        <section id="tier-comparison" className="space-y-5">
          <div>
            <p className="text-xs font-medium text-violet-400 uppercase tracking-widest mb-1">Tier Comparison</p>
            <h2 className="text-2xl font-semibold tracking-tight">MBA Salary by School Tier: Side-by-Side</h2>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              The salary gap between tiers is largest for consulting and finance tracks, where school brand
              directly controls recruiting access. For tech, healthcare, and general management, the gap
              between M7 and T15 narrows considerably.
            </p>
          </div>
          <div className="space-y-3">
            {[
              { tier: "M7", label: "M7 Programs", median: "$185K–$210K", consulting: "$212K–$232K", tech: "$185K–$220K", finance: "$200K–$350K", general: "$140K–$165K", badge: "bg-violet-500/20 text-violet-300 border-violet-500/30" },
              { tier: "T15", label: "T15 Programs", median: "$150K–$175K", consulting: "$165K–$185K", tech: "$160K–$185K", finance: "$175K–$200K", general: "$120K–$140K", badge: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30" },
              { tier: "T25", label: "T25 Programs", median: "$110K–$140K", consulting: "$130K–$155K", tech: "$120K–$150K", finance: "$130K–$160K", general: "$95K–$115K", badge: "bg-sky-500/20 text-sky-300 border-sky-500/30" },
              { tier: "Online", label: "Ranked Online MBA", median: "$90K–$115K", consulting: "Limited access", tech: "$110K–$130K", finance: "N/A", general: "$85K–$105K", badge: "bg-slate-500/20 text-slate-300 border-slate-500/30" },
            ].map((row) => (
              <div key={row.tier} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${row.badge}`}>{row.tier}</span>
                    <p className="text-white font-semibold text-sm">{row.label}</p>
                  </div>
                  <p className="text-violet-400 font-semibold text-sm">Median: {row.median}</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs border-t border-white/5 pt-3">
                  <div><p className="text-slate-500 mb-0.5">Consulting</p><p className="text-slate-300">{row.consulting}</p></div>
                  <div><p className="text-slate-500 mb-0.5">Technology</p><p className="text-slate-300">{row.tech}</p></div>
                  <div><p className="text-slate-500 mb-0.5">Finance</p><p className="text-slate-300">{row.finance}</p></div>
                  <div><p className="text-slate-500 mb-0.5">General Mgmt</p><p className="text-slate-300">{row.general}</p></div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs">
            Source: GMAC Employment Report 2024, school-published placement reports, Glassdoor aggregates. Finance includes IB total compensation (base + bonus). Consulting reflects MBB total comp.
          </p>
        </section>

        {/* ROI by school */}
        <section id="roi-by-school" className="space-y-5">
          <div>
            <p className="text-xs font-medium text-violet-400 uppercase tracking-widest mb-1">Return on Investment</p>
            <h2 className="text-2xl font-semibold tracking-tight">MBA Salary vs. Total Cost: ROI by School</h2>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              The salary-to-cost ratio (median first-year salary divided by total program cost) is a blunt
              but useful first filter. It does not account for salary growth, signing bonuses, or opportunity
              cost — but it quickly separates programs where the sticker price is defensible from those
              where it requires a high-salary track to justify.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 text-left">
                  <th className="pb-3 pr-4 font-medium">School</th>
                  <th className="pb-3 pr-4 font-medium">Median Salary</th>
                  <th className="pb-3 pr-4 font-medium">Total Cost</th>
                  <th className="pb-3 pr-4 font-medium">Salary / Cost</th>
                  <th className="pb-3 font-medium">Note</th>
                </tr>
              </thead>
              <tbody>
                {roiData.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02]">
                    <td className="py-3 pr-4 text-white font-medium">{row.school}</td>
                    <td className="py-3 pr-4 text-violet-400 font-semibold">{row.median}</td>
                    <td className="py-3 pr-4 text-slate-300">{row.totalCost}</td>
                    <td className={`py-3 pr-4 font-semibold ${parseFloat(row.ratio) >= 0.9 ? "text-emerald-400" : "text-slate-300"}`}>{row.ratio}</td>
                    <td className="py-3 text-slate-500 text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-xs">
            Total cost = 2-year tuition + estimated living expenses. Online MBA cost reflects full program cost (no opportunity cost). Ratio above 0.90x indicates strong first-year salary relative to investment; online programs are structurally advantaged on this metric.
          </p>
          <p className="text-slate-400 text-sm">
            For a full NPV and IRR model of your specific school and career track, use the{" "}
            <Link href="/mba-roi-calculator" className="text-violet-400 hover:text-violet-300 transition-colors">MBA ROI Calculator →</Link>
          </p>
        </section>

        {/* Career tracks */}
        <section id="career-tracks" className="space-y-5">
          <div>
            <p className="text-xs font-medium text-violet-400 uppercase tracking-widest mb-1">Career Tracks</p>
            <h2 className="text-2xl font-semibold tracking-tight">Top MBA Schools for Specific Career Tracks</h2>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              School tier matters more for some career paths than others. MBB consulting and bulge-bracket
              banking are the most brand-sensitive tracks; general management and healthcare are more
              accessible from T15 programs. The best school for your MBA salary depends heavily on
              your target industry.
            </p>
          </div>
          <div className="space-y-4">
            {careerTracks.map((track) => (
              <div key={track.track} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
                <p className={`font-semibold text-sm ${track.color}`}>{track.track}</p>
                <div className="flex flex-wrap gap-2">
                  {track.topSchools.map((school) => (
                    <span key={school} className="text-xs bg-white/10 border border-white/10 rounded-full px-2.5 py-1 text-slate-300">
                      {school}
                    </span>
                  ))}
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{track.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Harvard 10-year note */}
        <section className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Harvard MBA Salary After 10 Years</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The Harvard MBA salary after 10 years diverges dramatically by career path. HBS alumni in MBB
            consulting who reach principal or partner level earn $600K–$2M+. Investment banking alumni at
            the Director/MD level earn $700K–$2M+ including carry. Tech product leaders at senior FAANG
            levels earn $400K–$800K total compensation. General management and nonprofit tracks earn
            $200K–$350K at the 10-year mark.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            The Harvard MBA 10-year salary is most useful as a distribution rather than a single number.
            The median HBS alum 10 years post-graduation earns approximately $300K–$400K — but the top
            quartile significantly exceeds this through equity participation, carry, and senior leadership
            compensation at FAANG and PE firms.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-white font-semibold text-sm">{item.name}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-white/5 border border-white/10 p-10 text-center space-y-5">
          <p className="text-xs font-medium text-violet-400 uppercase tracking-widest">Model Your Numbers</p>
          <h2 className="text-2xl font-semibold tracking-tight">Calculate ROI for Your Target School</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Enter your current salary, target school, and career track to calculate NPV, IRR, and break-even
            period. Compare multiple programs side by side.
          </p>
          <Link
            href="/mba-roi-calculator"
            className="inline-block bg-linear-to-r from-violet-600 to-purple-600 hover:opacity-90 transition-all px-8 py-4 rounded-xl font-medium text-white text-base shadow-[0_0_40px_rgba(124,58,237,0.3)]"
          >
            Open MBA ROI Calculator →
          </Link>
        </section>

        {/* Related links */}
        <section className="border-t border-white/10 pt-10 mt-10">
          <p className="text-xs font-medium text-violet-400 uppercase tracking-widest mb-5">Related Guides</p>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link href="/average-mba-salary" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-violet-400 font-mono text-lg">$</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-violet-300 transition-colors">Average MBA Salary 2026</p>
                <p className="text-slate-500 text-xs">By school tier, industry & experience →</p>
              </div>
            </Link>
            <Link href="/average-mba-salary" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-violet-400 font-mono text-lg">↗</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-violet-300 transition-colors">MBA Salary Guide</p>
                <p className="text-slate-500 text-xs">Full salary breakdown →</p>
              </div>
            </Link>
            <Link href="/post-mba-salary" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-violet-400 font-mono text-lg">→</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-violet-300 transition-colors">Post-MBA Salary Data</p>
                <p className="text-slate-500 text-xs">First-year pay by industry →</p>
              </div>
            </Link>
            <Link href="/mba-roi-calculator" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-violet-400 font-mono text-lg">Σ</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-violet-300 transition-colors">MBA ROI Calculator</p>
                <p className="text-slate-500 text-xs">Model your specific numbers →</p>
              </div>
            </Link>
          </div>
        </section>

        <footer className="border-t border-white/10 pt-8 text-center text-slate-500 text-xs space-y-2">
          <p>
            <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            {" · "}
            <Link href="/average-mba-salary" className="hover:text-slate-300 transition-colors">Average MBA Salary</Link>
            {" · "}
            <Link href="/average-mba-salary" className="hover:text-slate-300 transition-colors">MBA Salary</Link>
            {" · "}
            <Link href="/post-mba-salary" className="hover:text-slate-300 transition-colors">Post-MBA Salary</Link>
            {" · "}
            <Link href="/mba-roi-calculator" className="hover:text-slate-300 transition-colors">MBA ROI Calculator</Link>
            {" · "}
            <Link href="/mba-worth-it" className="hover:text-slate-300 transition-colors">Is MBA Worth It?</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
          <p className="mt-1">Salary data sourced from GMAC surveys, school employment reports, Glassdoor, and publicly reported compensation figures. All ranges are estimates; individual outcomes vary.</p>
        </footer>

      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(_articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(_breadcrumbSchema) }}
      />
    </main>
  )
}
