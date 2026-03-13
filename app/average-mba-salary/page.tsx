import Link from "next/link"
import { pageAlternates } from "@/lib/seo"

export const metadata = {
  title: "Average Salary for an MBA 2026: MBA Average Salary by School & Industry",
  description:
    "What is the average salary for an MBA? MBA average salary in 2026 ranges from $85K at mid-tier online programs to $215K+ at M7 placements into MBB consulting. Earning an MBA from a top business school can increase your earning potential by 47–100%. Data by school tier, industry, and career stage.",
  alternates: pageAlternates("https://careerreturns.com/average-mba-salary"),
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
            Average Salary for an MBA (2026):<br />
            <span className="text-slate-400">MBA Average Salary by School & Experience</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            The average salary for an MBA graduate varies from $85,000 at mid-tier online programs to $215,000+
            at M7 business schools placed into MBB consulting. For most MBA students, earning an MBA degree
            raises earning potential by 47–100% depending on career path, school tier, and destination industry.
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


        {/* About This Data */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">About This MBA Average Salary Data</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The salary figures on this page represent the average starting salary for MBA graduates based on
            data from the Graduate Management Admission Council (GMAC) annual employment survey, school-published
            placement reports, Glassdoor aggregates, and Levels.fyi total compensation data. All figures
            reflect 2026 market conditions.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Base salary figures do not include signing bonuses, performance bonuses, or equity grants. Total
            compensation — including year-end bonuses in banking and RSU grants in tech — can exceed the base
            salary by 30–80% in high-paying tracks. Average starting salary for MBA graduates at full-time MBA
            programs is significantly higher than for online MBA programs, primarily because full time MBA
            students have access to on-campus structured recruiting pipelines that online MBA students do not.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            MBA graduates from Wharton School, Harvard Business School, and other M7 business schools command
            a material salary premium over T15 and T25 peers — particularly in management consulting and
            investment banking, where school tier directly determines recruiting access. For MBA students
            targeting general management, CPG, or healthcare career paths, the salary gap between M7 and T15
            programs narrows significantly. The higher salary for MBB-bound MBA graduates reflects both school
            tier and selective on-campus recruiting, not the MBA degree alone.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Salary for MBA graduates in technology has converged with finance tracks at M7 programs due to
            RSU appreciation at FAANG companies. However, this total compensation figure is more volatile
            than consulting base salary, which is why IRR comparisons between career paths should stress-test
            compensation assumptions. The MBA ROI calculator below models your personal numbers.
          </p>
        </section>

        {/* ── Related Guides ── */}
        <section className="border-t border-white/10 pt-10 mt-10">
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-5">Related Guides</p>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link href="/mba-roi-calculator" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">Σ</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">MBA ROI Calculator</p>
                <p className="text-slate-500 text-xs">Model your specific numbers →</p>
              </div>
            </Link>
            <Link href="/mba-roi-report-2026" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">↗</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">MBA ROI Report 2026</p>
                <p className="text-slate-500 text-xs">IRR data across 12 industries →</p>
              </div>
            </Link>
            <Link href="/mba-salary-increase" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">$</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">MBA Salary Increase Data</p>
                <p className="text-slate-500 text-xs">+47% avg — pre vs post MBA →</p>
              </div>
            </Link>
            <Link href="/mba-payback-period" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">⌛</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">MBA Payback Period</p>
                <p className="text-slate-500 text-xs">Break-even timelines by career track →</p>
              </div>
            </Link>
          </div>
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
          <p className="mt-1">Salary data sourced from GMAC surveys, school employment reports, Glassdoor, Levels.fyi, and publicly reported compensation figures. All ranges are estimates; individual outcomes vary.</p>
        </footer>

      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is the average MBA salary in 2026?", "acceptedAnswer": {"@type": "Answer", "text": "The median post-MBA salary at M7 programs is approximately $175K–$210K for consulting and finance tracks. Across all MBA programs, the median first-year post-MBA salary is approximately $130K–$150K. Online MBA graduates earn a median of $90K–$110K post-degree. The national average across all programs is approximately $115K–$125K."}}, {"@type": "Question", "name": "How does MBA salary vary by school tier?", "acceptedAnswer": {"@type": "Answer", "text": "M7 programs (Harvard, Wharton, Booth, Kellogg, MIT Sloan, Columbia, Stanford) produce median post-MBA salaries of $175K–$210K. T15 programs produce $130K–$160K. T25 produces $100K–$130K. Online MBA programs from ranked schools (Indiana Kelley, UNC, USC) produce $90K–$115K. The gap between M7 and T25 is approximately $60K–$80K in first-year salary."}}, {"@type": "Question", "name": "What is the MBA salary at 5 and 10 years post-graduation?", "acceptedAnswer": {"@type": "Answer", "text": "At year 5, M7 MBB alumni earn $250K–$400K (engagement manager / principal level). At year 10, those who reach senior leadership at MBB or transition to PE/VC earn $400K–$1M+. Tech product leaders at year 5–10 earn $250K–$500K total comp. The 10-year salary trajectory is heavily path-dependent and diverges significantly by industry after year 3."}}, {"@type": "Question", "name": "Do MBA salaries differ by industry?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Investment banking: $200K–$250K base + $75K–$150K bonus. MBB consulting: $190K–$215K base + $20K–$40K bonus. Tech: $160K–$220K base + RSUs. Healthcare management: $130K–$170K. General management / CPG: $110K–$140K. Nonprofit: $70K–$110K. Industry is the primary determinant of post-MBA salary, more than school tier within the top 20 programs."}}, {"@type": "Question", "name": "Does an MBA increase long-term earning potential?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, significantly. Over a 20-year career, M7 MBA graduates in consulting, finance, or tech earn $2M–$5M more in cumulative income than comparable professionals without an MBA degree. The long-term premium is highest for MBB partners, investment bankers, and PE professionals, where senior-level compensation differences are measured in hundreds of thousands annually."}}]}) }}
      />
    </main>
  )
}
