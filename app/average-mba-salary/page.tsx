import Link from "next/link"

export const metadata = {
  title: "Average MBA Salary (2026): By School Tier, Industry & Years of Experience",
  description:
    "Average MBA salary data for 2026. Post-MBA median pay by school tier (M7, T15, online), by industry (consulting, banking, tech), and salary growth curves at years 1, 3, 5, and 10.",
  alternates: { canonical: "https://careerreturns.com/average-mba-salary" },
}

const salaryByTier = [
  { tier: "M7 (HBS, Wharton, Booth, Kellogg, Columbia, Sloan, Tuck)", median: "$175,000", top25: "$210,000+", consulting: "$200,000–$215,000", tech: "$185,000–$200,000", finance: "$185,000–$210,000" },
  { tier: "Top 10–15 (Haas, Fuqua, Darden, Yale SOM, Ross, Stern)", median: "$155,000", top25: "$185,000+", consulting: "$165,000–$185,000", tech: "$165,000–$185,000", finance: "$165,000–$185,000" },
  { tier: "Top 15–25 (Kelley, Mendoza, Smeal, Kenan-Flagler, etc.)", median: "$120,000", top25: "$145,000+", consulting: "$130,000–$155,000", tech: "$125,000–$150,000", finance: "$120,000–$145,000" },
  { tier: "Online MBA (Top-Tier: UNC, Indiana, USC, Carnegie Mellon)", median: "$105,000", top25: "$130,000+", consulting: "$125,000–$145,000", tech: "$115,000–$140,000", finance: "$110,000–$130,000" },
  { tier: "Online MBA (Mid-Tier)", median: "$85,000", top25: "$105,000+", consulting: "$90,000–$110,000", tech: "$90,000–$110,000", finance: "$85,000–$105,000" },
]

const salaryByIndustry = [
  { industry: "Management Consulting (MBB)", year1: "$200,000–$215,000", year3: "$250,000–$350,000", year5: "$320,000–$500,000", year10: "$500,000–$1.5M+", note: "Includes base + performance bonus" },
  { industry: "Investment Banking (Bulge Bracket)", year1: "$200,000–$220,000", year3: "$250,000–$350,000", year5: "$350,000–$600,000", year10: "$500,000–$2M+", note: "Includes base + year-end bonus" },
  { industry: "Private Equity / Venture Capital", year1: "$225,000–$280,000", year3: "$300,000–$500,000", year5: "$500,000–$1M+", year10: "$1M–$5M+ (carry)", note: "Carried interest drives long-term upside" },
  { industry: "Technology (FAANG PM / Strategy)", year1: "$185,000–$220,000", year3: "$250,000–$350,000", year5: "$300,000–$500,000", year10: "$400,000–$800,000", note: "Total comp including equity" },
  { industry: "Healthcare Management / Consulting", year1: "$140,000–$165,000", year3: "$165,000–$210,000", year5: "$190,000–$260,000", year10: "$250,000–$400,000", note: "Hospital admin on lower end; health consulting higher" },
  { industry: "Big 4 Advisory (Deloitte, PwC, EY, KPMG)", year1: "$130,000–$155,000", year3: "$160,000–$190,000", year5: "$195,000–$240,000", year10: "$280,000–$400,000", note: "Partner track accelerates significantly" },
  { industry: "Consumer Goods / CPG (Brand Management)", year1: "$120,000–$145,000", year3: "$145,000–$175,000", year5: "$175,000–$220,000", year10: "$220,000–$350,000", note: "Strong P&L track leads to GM roles" },
  { industry: "Nonprofit / Social Enterprise", year1: "$90,000–$115,000", year3: "$110,000–$135,000", year5: "$125,000–$155,000", year10: "$150,000–$220,000", note: "PSLF eligibility can offset lower pay" },
]

export default function AverageMbaSalaryPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-violet-600/12 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12 sm:space-y-20">

        <header className="space-y-5">
          <p className="text-xs font-medium text-violet-400 uppercase tracking-widest">CareerReturns · MBA Salary Data</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            Average MBA Salary (2026):<br />
            <span className="text-slate-400">By School, Industry & Experience</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Post-MBA salary varies from $85,000 at mid-tier online programs to $215,000+ at M7 programs
            placed into MBB consulting. The right comparison depends on your school tier, target industry,
            and where you are in your post-MBA career.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "M7 Median Salary", value: "$175k" },
              { label: "MBB Starting Pay", value: "$200–215k" },
              { label: "Top Online MBA", value: "$105k" },
              { label: "10-yr Partner Pay", value: "$800k–1.5M+" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <p className="text-violet-400 font-semibold text-base">{value}</p>
                <p className="text-slate-500 text-xs mt-1">{label}</p>
              </div>
            ))}
          </div>
        </header>

        {/* Salary by school tier */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Average Post-MBA Salary by School Tier (2026)</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            School tier is a significant salary driver in consulting and finance — less so in technology,
            where role and company matter more than MBA brand. The table below shows median starting salary
            and top-quartile outcomes by program tier.
          </p>
          <div className="space-y-3">
            {salaryByTier.map(({ tier, median, top25, consulting, tech, finance }) => (
              <div key={tier} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <p className="text-white font-semibold text-sm">{tier}</p>
                  <div className="flex gap-3 text-xs">
                    <span className="text-violet-400 font-semibold">Median: {median}</span>
                    <span className="text-slate-400">Top 25%: {top25}</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div><p className="text-slate-500 mb-0.5">Consulting</p><p className="text-slate-300">{consulting}</p></div>
                  <div><p className="text-slate-500 mb-0.5">Technology</p><p className="text-slate-300">{tech}</p></div>
                  <div><p className="text-slate-500 mb-0.5">Finance</p><p className="text-slate-300">{finance}</p></div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs">Source: GMAC Employment Report 2024, school-published placement data, Glassdoor aggregates. Consulting = offer before graduation. Finance includes IB, AM, PE recruiting.</p>
        </section>

        {/* Salary by industry over time */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">MBA Salary Growth by Industry: Years 1, 3, 5 & 10</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Starting salary understates the MBA&apos;s financial impact for high-trajectory careers. The gap between
            Year 1 and Year 10 compensation varies dramatically by industry — consulting and finance compound
            fastest, while general management grows more linearly.
          </p>
          <div className="space-y-3">
            {salaryByIndustry.map(({ industry, year1, year3, year5, year10, note }) => (
              <div key={industry} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
                <p className="text-white font-semibold text-sm">{industry}</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <div><p className="text-slate-500 mb-0.5">Year 1</p><p className="text-violet-300">{year1}</p></div>
                  <div><p className="text-slate-500 mb-0.5">Year 3</p><p className="text-slate-300">{year3}</p></div>
                  <div><p className="text-slate-500 mb-0.5">Year 5</p><p className="text-slate-300">{year5}</p></div>
                  <div><p className="text-slate-500 mb-0.5">Year 10</p><p className="text-emerald-400">{year10}</p></div>
                </div>
                <p className="text-slate-500 text-xs">{note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What actually drives salary */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">What Actually Drives Your Post-MBA Salary</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The average MBA salary number obscures more than it reveals. These four variables account for
            most of the variance in realized post-MBA compensation.
          </p>
          <div className="space-y-3">
            {[
              { factor: "Destination industry", impact: "Highest impact. MBB consulting pays $70,000–$90,000 more per year than general management at the same school tier. Industry choice alone can shift 10-year NPV by $200,000+.", weight: "~50% of variance" },
              { factor: "School tier and MBB access", impact: "M7 programs provide on-campus MBB recruiting access. Outside M7, MBB offers become rare — the average salary difference between M7 and T15 for consulting-track graduates is $35,000–$50,000/yr.", weight: "~25% of variance" },
              { factor: "Scholarship negotiation (affects realized ROI, not pay)", impact: "Scholarship does not change your post-MBA salary but reduces cost by $50,000–$120,000. This is the highest-leverage negotiation of the MBA process.", weight: "N/A — affects ROI" },
              { factor: "Pre-MBA experience and lateral vs. career switch", impact: "Career switchers (teaching → consulting, military → MBB) typically see larger salary deltas than lateral movers within an industry. The MBA ROI case is structurally stronger for switchers.", weight: "~25% of variance" },
            ].map(({ factor, impact, weight }) => (
              <div key={factor} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <p className="text-white font-semibold text-sm">{factor}</p>
                  <p className="text-violet-300 text-xs font-medium">{weight}</p>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{impact}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-white/5 border border-white/10 p-10 text-center space-y-5">
          <p className="text-xs font-medium text-violet-400 uppercase tracking-widest">Model Your Salary Delta</p>
          <h2 className="text-2xl font-semibold tracking-tight">Calculate the ROI Behind Your Target Salary</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Enter your current salary and target post-MBA salary to calculate NPV, IRR, and break-even period.
            The calculator shows whether the delta justifies the investment at your program cost.
          </p>
          <Link
            href="/mba-roi-calculator"
            className="inline-block bg-linear-to-r from-violet-600 to-purple-600 hover:opacity-90 transition-all px-8 py-4 rounded-xl font-medium text-white text-base shadow-[0_0_40px_rgba(124,58,237,0.3)]"
          >
            Open MBA ROI Calculator →
          </Link>
        </section>

        <footer className="border-t border-white/10 pt-8 text-center text-slate-500 text-xs space-y-2">
          <p>
            <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            {" · "}
            <Link href="/mba-roi-calculator" className="hover:text-slate-300 transition-colors">MBA ROI Calculator</Link>
            {" · "}
            <Link href="/mba-salary-increase" className="hover:text-slate-300 transition-colors">MBA Salary Increase</Link>
            {" · "}
            <Link href="/mba-roi" className="hover:text-slate-300 transition-colors">MBA ROI Guide</Link>
            {" · "}
            <Link href="/mba-cost" className="hover:text-slate-300 transition-colors">MBA Cost</Link>
            {" · "}
            <Link href="/mba-roi-consulting" className="hover:text-slate-300 transition-colors">MBA ROI: Consulting</Link>
            {" · "}
            <Link href="/mba-worth-it" className="hover:text-slate-300 transition-colors">Is MBA Worth It?</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
        </footer>

      </div>
    </main>
  )
}
