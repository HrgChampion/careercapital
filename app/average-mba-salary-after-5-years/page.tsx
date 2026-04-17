import Link from "next/link"
import { pageAlternates } from "@/lib/seo"

export const metadata = {
  title: "Average MBA Salary After 5 & 10 Years: Career Trajectory Data (2026)",
  description:
    "MBA salary after 5 years: $250K–$400K for MBB alumni, $230K–$350K for tech. After 10 years: $400K–$1M+. Full trajectory data by industry and school →",
  openGraph: {
    title: "Average MBA Salary After 5 & 10 Years: Career Trajectory Data (2026)",
    description:
      "MBA salary after 5 years: $250K–$400K for MBB alumni, $230K–$350K for tech. After 10 years: $400K–$1M+. Full trajectory data by industry and school →",
    url: "https://careerreturns.com/average-mba-salary-after-5-years",
    siteName: "CareerReturns",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: pageAlternates("https://careerreturns.com/average-mba-salary-after-5-years"),
}

const trajectoryData = [
  {
    track: "MBB Consulting",
    titles: ["Consultant/AM", "Engagement Mgr", "Principal", "Partner/Director"],
    y1: "$215K",
    y3: "$280K",
    y5: "$350K",
    y10: "$600K–$1.5M",
    color: "violet",
    note: "Comp includes base + performance bonus. Partner economics drive Y10 upside. Includes BCG, McKinsey, Bain.",
  },
  {
    track: "Investment Banking",
    titles: ["Associate", "VP", "Director/ED", "Managing Director"],
    y1: "$300K",
    y3: "$450K",
    y5: "$550K",
    y10: "$800K–$2M+",
    color: "blue",
    note: "Year 1 includes first full-year base + bonus. VP and above comp is highly deal-flow dependent. PE exits can compound further.",
  },
  {
    track: "Tech PM / Strategy",
    titles: ["PM / Sr. PM", "Group PM", "Director of PM", "VP Product"],
    y1: "$220K",
    y3: "$280K",
    y5: "$320K",
    y10: "$450K–$800K",
    color: "emerald",
    note: "Total comp including RSU vesting. FAANG roles at higher end. Equity appreciation is volatile — ranges can shift significantly by company and market.",
  },
  {
    track: "Corporate Strategy",
    titles: ["Sr. Analyst", "Manager", "Sr. Manager / Director", "VP Strategy"],
    y1: "$145K",
    y3: "$180K",
    y5: "$220K",
    y10: "$300K–$500K",
    color: "amber",
    note: "In-house strategy roles at Fortune 500 companies. Comp is more predictable but carries less upside than consulting or banking tracks.",
  },
  {
    track: "Healthcare",
    titles: ["Manager", "Sr. Manager", "Director", "VP / SVP"],
    y1: "$155K",
    y3: "$195K",
    y5: "$235K",
    y10: "$320K–$480K",
    color: "cyan",
    note: "Health systems, pharma strategy, and health consulting. BCG Health and Deloitte health practices on higher end. Biotech may include equity.",
  },
  {
    track: "General Management",
    titles: ["Manager / Director", "Sr. Director", "VP / SVP", "C-Suite"],
    y1: "$135K",
    y3: "$170K",
    y5: "$210K",
    y10: "$280K–$400K",
    color: "slate",
    note: "CPG brand management, operations, and rotational general management programs. Lower ceiling but broader accessibility from non-M7 programs.",
  },
  {
    track: "Entrepreneurship",
    titles: ["Founder / Operator", "Founder / CEO", "Founder / CEO", "Founder / Exit"],
    y1: "$90K",
    y3: "$130K",
    y5: "Variable",
    y10: "Variable",
    color: "orange",
    note: "Year 1–3 base salary is low for founders. Years 5 and 10 depend on venture outcomes. Successful exits can produce $1M–$50M+ but this is not the median outcome.",
  },
]

const colorMap: Record<string, string> = {
  violet: "text-violet-400",
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  amber: "text-amber-400",
  cyan: "text-cyan-400",
  slate: "text-slate-400",
  orange: "text-orange-400",
}

const bgColorMap: Record<string, string> = {
  violet: "bg-violet-500/10 border-violet-500/20",
  blue: "bg-blue-500/10 border-blue-500/20",
  emerald: "bg-emerald-500/10 border-emerald-500/20",
  amber: "bg-amber-500/10 border-amber-500/20",
  cyan: "bg-cyan-500/10 border-cyan-500/20",
  slate: "bg-slate-500/10 border-slate-500/20",
  orange: "bg-orange-500/10 border-orange-500/20",
}

const faqItems = [
  {
    question: "What is the average MBA salary after 5 years?",
    answer:
      "The average MBA salary after 5 years depends heavily on career track. MBB consulting alumni earn $250K–$400K total comp at year 5 (Engagement Manager to Principal level). Investment banking alumni earn $450K–$600K at the VP to Director level. Tech product managers earn $280K–$350K including equity. Corporate strategy roles average $200K–$235K. General management tracks average $185K–$220K. The 5-year figure is the point of widest divergence between career paths.",
  },
  {
    question: "What is the average Harvard MBA salary after 10 years?",
    answer:
      "The median Harvard MBA (HBS) alumni salary after 10 years is approximately $500K–$800K in total compensation, based on HBS career outcomes data and alumni surveys. The top quartile — those who have reached partnership at MBB, MD-level banking, or PE/VC with carry — earn $1M–$10M+ annually at year 10. Founders and entrepreneurs represent the highest variance: base pay may be modest while equity stakes carry much higher theoretical value. The median is pulled upward by finance and consulting tracks.",
  },
  {
    question: "How much do Wharton MBA graduates earn after 10 years?",
    answer:
      "Wharton MBA graduates earn $450K–$750K in median total compensation at year 10, reflecting the school's strong finance and consulting placement rates. Wharton's finance track — investment banking to PE — produces the highest long-term comp of any MBA program, with top-quartile alumni in PE/VC earning $1M–$5M+ annually by year 10 through carried interest distributions. Wharton's median is comparable to HBS; the difference lies in sectoral mix, with Wharton having proportionally more finance alumni.",
  },
  {
    question: "What is the average MBA salary after 5 years in the USA?",
    answer:
      "In the USA, the average MBA salary after 5 years across all program tiers is approximately $175K–$250K total compensation. M7 program alumni in consulting and finance average $280K–$400K. T15 alumni in strategy and management average $200K–$270K. Online MBA holders average $140K–$180K at year 5. Geography also matters: New York City and San Francisco roles pay a 15–25% premium over national averages for equivalent roles.",
  },
  {
    question: "How does MBA salary grow over time?",
    answer:
      "MBA salary growth follows a compounding trajectory that diverges sharply by industry. Consulting and banking salaries grow 15–25% annually in the first 4–5 years due to structured promotion tracks, then flatten or spike at partnership/MD inflection points. Tech salaries grow more linearly at 8–15% annually but are levered to equity value. General management grows at 5–10% annually with less variance. The biggest salary step changes occur at promotion milestones: Engagement Manager in consulting, VP in banking, and Director in tech — each typically doubling the total comp from the entry level.",
  },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
}

const datasetJsonLd = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "MBA Salary Trajectory by Career Track: Years 1, 3, 5, and 10 (2026)",
  description:
    "Post-MBA salary data across seven career tracks at Years 1, 3, 5, and 10 post-graduation, covering MBB consulting, investment banking, tech, corporate strategy, healthcare, general management, and entrepreneurship.",
  url: "https://careerreturns.com/average-mba-salary-after-5-years",
  creator: { "@type": "Organization", name: "CareerReturns", url: "https://careerreturns.com" },
  temporalCoverage: "2026",
  variableMeasured: ["Base salary", "Total compensation", "Bonus", "Equity"],
}

export default function AverageMbaSalaryAfter5YearsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-violet-600/12 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12 sm:space-y-20">

        {/* ── Hero ── */}
        <header className="space-y-5">
          <p className="text-xs font-medium text-violet-400 uppercase tracking-widest">CareerReturns · MBA Salary Trajectory</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            Average MBA Salary After 5 &amp; 10 Years (2026)
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            The average post-MBA salary at graduation understates the full financial picture. By year 5,
            MBA alumni in high-trajectory careers earn 2–3x their starting pay. By year 10, top-quartile
            earners in consulting, banking, and PE have crossed $1M+ in annual comp. Here is the full
            trajectory data by industry track and school.
          </p>

          {/* Quick answer box */}
          <div className="bg-violet-500/10 border border-violet-500/25 rounded-2xl p-6 space-y-3">
            <p className="text-xs font-medium text-violet-400 uppercase tracking-widest">Quick Answer — MBB Consulting</p>
            <p className="text-white text-xl font-semibold">
              MBB consulting: $250K–$400K at year 5 &nbsp;|&nbsp; $500K–$1.5M at year 10
            </p>
            <p className="text-slate-400 text-sm">
              Investment banking alumni earn more in absolute terms at year 5–10 ($550K–$2M+), but carry
              higher lifestyle cost and less predictable promotion outcomes. Tech tracks average $320K–$800K
              depending on equity value.
            </p>
          </div>
        </header>

        {/* ── Jump Nav ── */}
        <nav className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-3">Jump to</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            <a href="#trajectory-table" className="text-sm text-violet-400 hover:text-violet-300 transition-colors">Salary Trajectory Table</a>
            <a href="#harvard-10-years" className="text-sm text-violet-400 hover:text-violet-300 transition-colors">Harvard MBA at 10 Years</a>
            <a href="#wharton-trajectory" className="text-sm text-violet-400 hover:text-violet-300 transition-colors">Wharton MBA Trajectory</a>
            <a href="#salary-drivers" className="text-sm text-violet-400 hover:text-violet-300 transition-colors">What Drives Salary Growth</a>
            <a href="#faq" className="text-sm text-violet-400 hover:text-violet-300 transition-colors">FAQ</a>
          </div>
        </nav>

        {/* ── Trajectory Table ── */}
        <section id="trajectory-table" className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">MBA Salary Trajectory: Years 1, 3, 5, and 10</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Salary figures below represent total cash compensation including base salary and annual bonus.
            Tech figures include estimated RSU vesting value. PE/VC carried interest is not included in the
            investment banking figures; those who exit to PE see meaningfully higher 10-year totals. All
            figures are 2026 estimates based on industry compensation surveys, school employment reports,
            and alumni data aggregates.
          </p>
          <div className="space-y-4">
            {trajectoryData.map(({ track, y1, y3, y5, y10, note, color }) => (
              <div key={track} className={`border rounded-xl p-5 space-y-4 ${bgColorMap[color]}`}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <p className={`font-semibold text-sm ${colorMap[color]}`}>{track}</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                  <div className="bg-black/20 rounded-lg p-3">
                    <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Year 1</p>
                    <p className="text-slate-300 font-semibold">{y1}</p>
                  </div>
                  <div className="bg-black/20 rounded-lg p-3">
                    <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Year 3</p>
                    <p className="text-slate-300 font-semibold">{y3}</p>
                  </div>
                  <div className="bg-black/20 rounded-lg p-3">
                    <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Year 5</p>
                    <p className={`font-semibold ${colorMap[color]}`}>{y5}</p>
                  </div>
                  <div className="bg-black/20 rounded-lg p-3">
                    <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Year 10</p>
                    <p className="text-emerald-400 font-semibold">{y10}</p>
                  </div>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs">
            Source: GMAC Employment Report, school career outcomes data (HBS, Wharton, Booth), Glassdoor,
            Levels.fyi, Wall Street Oasis, and CareerReturns industry surveys. Figures are total cash
            compensation medians; individual outcomes vary significantly by firm performance, promotion
            velocity, and geography.
          </p>
        </section>

        {/* ── Harvard MBA at 10 Years ── */}
        <section id="harvard-10-years" className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Harvard MBA Salary After 10 Years</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Harvard Business School (HBS) graduates have some of the highest median compensation trajectories
            of any MBA program, driven by the school&apos;s disproportionate placement into the highest-paying
            tracks — MBB consulting, bulge bracket investment banking, and PE/VC — and by a network effect
            that accelerates promotion velocity across industries.
          </p>
          <div className="space-y-3">
            {[
              {
                segment: "Median HBS graduate at year 10",
                comp: "$500K–$800K total comp",
                context: "Reflects the broad HBS class including those who entered lower-paying sectors like nonprofit, government, and corporate general management.",
              },
              {
                segment: "MBB partner track alumni",
                comp: "$700K–$1.5M+",
                context: "Partnership economics at BCG, McKinsey, and Bain drive significant upside. Partner comp includes base, performance bonus, and profit-sharing.",
              },
              {
                segment: "Investment banking MD alumni",
                comp: "$800K–$2M+",
                context: "Bulge bracket MDs at Goldman, JPM, and Morgan Stanley. Comp is deal-flow dependent and highly variable year to year.",
              },
              {
                segment: "PE / VC with carry",
                comp: "$1M–$10M+",
                context: "Carried interest distributions dominate total earnings for successful PE investors. HBS places approximately 15–18% of graduates into PE/VC annually.",
              },
              {
                segment: "Founders with successful exits",
                comp: "$1M–$50M+ (one-time)",
                context: "HBS produces a disproportionate share of successful founders. Startup equity outcomes vary enormously; this is not a predictable trajectory.",
              },
              {
                segment: "Corporate strategy / general management",
                comp: "$280K–$450K",
                context: "In-house strategy, COO tracks, and general management. Lower ceiling than finance tracks but more lifestyle optionality.",
              },
            ].map(({ segment, comp, context }) => (
              <div key={segment} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <p className="text-white font-semibold text-sm">{segment}</p>
                  <p className="text-emerald-400 font-semibold text-sm">{comp}</p>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{context}</p>
              </div>
            ))}
          </div>
          <div className="bg-violet-500/10 border border-violet-500/20 rounded-xl p-5">
            <p className="text-violet-200 text-sm leading-relaxed">
              <span className="font-semibold text-white">Source note:</span> HBS publishes annual employment
              reports with median starting salary data (Year 1), but does not publish 10-year alumni
              compensation data directly. The figures above are derived from HBS alumni surveys, GMAC
              longitudinal data, and CareerReturns industry research. They represent estimates, not
              published HBS data.
            </p>
          </div>
        </section>

        {/* ── Wharton Trajectory ── */}
        <section id="wharton-trajectory" className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Wharton MBA Salary Trajectory</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Wharton&apos;s MBA program has the highest percentage of graduates entering financial services
            of any M7 program — approximately 35–40% of the class enters investment banking, private equity,
            or asset management each year. This sectoral mix produces a salary distribution that skews
            higher than the M7 average, particularly at year 10 when PE/VC carry distributions begin.
          </p>
          <div className="space-y-3">
            {[
              { year: "Year 1", comp: "$200K–$240K", note: "Finance track median pulls above M7 average. IB associates account for a large share of the class entering at $300K+ total comp." },
              { year: "Year 3", comp: "$320K–$500K", note: "Finance alumni at VP level in banking ($400K–$600K) or engagement manager level in MBB ($270K–$320K). Tech PM track at $250K–$330K." },
              { year: "Year 5", comp: "$450K–$700K", note: "Finance-track alumni who stayed in banking are at Director/ED level. PE alumni at the associate-to-VP transition, with carry beginning to vest." },
              { year: "Year 10", comp: "$600K–$2M+ (median) / $1M–$10M+ (top quartile)", note: "Median includes all tracks. Top quartile driven by PE carry and IB MD comp. Entrepreneurship and nonprofit alumni pull median down." },
            ].map(({ year, comp, note }) => (
              <div key={year} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <p className="text-white font-semibold text-sm">{year}</p>
                  <p className="text-violet-400 font-semibold text-sm">{comp}</p>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── What Drives Salary Growth ── */}
        <section id="salary-drivers" className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">What Drives Post-MBA Salary Growth After Year 5?</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The year-5 to year-10 salary jump is where MBA comp trajectories diverge most dramatically.
            Three structural factors determine whether you land in the $300K or $1M+ range by year 10.
          </p>
          <div className="space-y-3">
            {[
              {
                driver: "Switching to PE / VC after banking or consulting",
                impact: "High — adds $300K–$2M+ in carry",
                body: "MBA alumni who move from IB or MBB into private equity between years 2–5 gain access to carried interest, which is the primary driver of $1M+ compensation at year 10. The MBA is necessary for IB access, which is the primary feeder for top PE firms. This is the highest-leverage career move in the post-MBA playbook.",
              },
              {
                driver: "Promotion velocity: reaching partner, MD, or VP-level",
                impact: "High — 2–3x comp step-up at promotion",
                body: "The single biggest salary step in consulting is making Partner; in banking, it is MD. Both involve revenue responsibility and partnership economics that double or triple total comp versus the level below. MBA alumni who reach these levels by year 8–10 drive the top of the salary distribution. Those who plateau at Principal or Director earn solid but not exceptional comp.",
              },
              {
                driver: "Geography and employer",
                impact: "Medium — 15–30% premium for top markets and firms",
                body: "New York City and San Francisco roles pay 15–25% above national medians for equivalent roles. Goldman Sachs, McKinsey, Google, and top PE funds pay above-market within their respective categories. Leaving a top-tier employer for a regional firm typically compresses salary even if the title increases. At year 10, employer tier is as important as industry in determining comp.",
              },
              {
                driver: "Industry pivot at year 3–5",
                impact: "Variable — high if pivoting to finance, negative if pivoting away",
                body: "MBA alumni who pivot from general management into financial services roles at year 3–5 (via PE operating roles, corporate development, or portfolio company CFO positions) can significantly accelerate their salary trajectory. Pivots in the opposite direction — from banking to nonprofit or government — produce the reverse effect.",
              },
            ].map(({ driver, impact, body }) => (
              <div key={driver} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <p className="text-white font-semibold text-sm">{driver}</p>
                  <span className="text-xs bg-violet-500/15 text-violet-300 border border-violet-500/20 px-2.5 py-1 rounded-full whitespace-nowrap">{impact}</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── USA Context ── */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Average MBA Salary After 5 Years in the USA: By School Tier</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The average MBA salary after 5 years in the USA varies substantially by program tier. M7
            programs with strong finance and consulting pipelines produce the highest 5-year totals.
            T25 programs in general management and regional roles produce meaningfully lower figures.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 text-left">
                  <th className="pb-3 pr-4 font-medium">School Tier</th>
                  <th className="pb-3 pr-4 font-medium">Year 1 Median</th>
                  <th className="pb-3 pr-4 font-medium">Year 5 Median</th>
                  <th className="pb-3 font-medium">Year 10 Range</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { tier: "M7 (HBS, Wharton, Booth, Kellogg, Columbia, Sloan, Tuck)", y1: "$185K–$215K", y5: "$310K–$500K", y10: "$450K–$1.5M+" },
                  { tier: "T10–T15 (Haas, Fuqua, Darden, Yale, Ross, Stern)", y1: "$155K–$175K", y5: "$240K–$380K", y10: "$320K–$700K" },
                  { tier: "T16–T25 (Kelley, Mendoza, Kenan-Flagler, etc.)", y1: "$115K–$140K", y5: "$175K–$260K", y10: "$220K–$400K" },
                  { tier: "Top Online MBA (UNC, Indiana, USC, Carnegie Mellon)", y1: "$100K–$120K", y5: "$155K–$220K", y10: "$195K–$310K" },
                  { tier: "Mid-Tier Online MBA", y1: "$80K–$100K", y5: "$125K–$175K", y10: "$155K–$240K" },
                ].map(({ tier, y1, y5, y10 }, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02]">
                    <td className="py-3 pr-4 text-white font-medium text-xs">{tier}</td>
                    <td className="py-3 pr-4 text-slate-300 text-xs">{y1}</td>
                    <td className="py-3 pr-4 text-violet-400 font-semibold text-xs">{y5}</td>
                    <td className="py-3 text-emerald-400 font-semibold text-xs">{y10}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-xs">
            Year 5 and Year 10 figures represent total cash compensation medians across all career tracks
            at each school tier. Finance and consulting alumni skew these figures up; nonprofit and
            government alumni pull them down. Source: GMAC, school employment reports, CareerReturns research.
          </p>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map(({ question, answer }) => (
              <div key={question} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-white font-semibold text-sm">{question}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="rounded-2xl bg-white/5 border border-white/10 p-10 text-center space-y-5">
          <p className="text-xs font-medium text-violet-400 uppercase tracking-widest">Model Your 10-Year Trajectory</p>
          <h2 className="text-2xl font-semibold tracking-tight">Calculate Your Lifetime MBA Earnings</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Enter your career track, school, and pre-MBA salary to model your personal 5-year and 10-year
            comp trajectory and the NPV of your MBA investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/mba-roi-calculator"
              className="inline-block bg-linear-to-r from-violet-600 to-purple-600 hover:opacity-90 transition-all px-8 py-4 rounded-xl font-medium text-white text-base shadow-[0_0_40px_rgba(124,58,237,0.3)]"
            >
              Open MBA ROI Calculator →
            </Link>
            <Link
              href="/lifetime-earnings-calculator"
              className="inline-block bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all px-8 py-4 rounded-xl font-medium text-white text-base"
            >
              Lifetime Earnings Calculator →
            </Link>
          </div>
        </section>

        {/* ── Related Guides ── */}
        <section className="border-t border-white/10 pt-10 mt-10">
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-5">Related Guides</p>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link href="/average-mba-salary" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-violet-400 font-mono text-lg">$</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">Average MBA Salary (Year 1)</p>
                <p className="text-slate-500 text-xs">$175K M7 median — all tracks →</p>
              </div>
            </Link>
            <Link href="/post-mba-salary" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-violet-400 font-mono text-lg">↗</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">Post-MBA Salary Guide</p>
                <p className="text-slate-500 text-xs">Full comp by school, city, and industry →</p>
              </div>
            </Link>
            <Link href="/mba-roi-calculator" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">Σ</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">MBA ROI Calculator</p>
                <p className="text-slate-500 text-xs">Model your NPV and break-even →</p>
              </div>
            </Link>
            <Link href="/average-mba-salary" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">≈</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">MBA Salary by School & Industry</p>
                <p className="text-slate-500 text-xs">Tier-by-tier comp breakdown →</p>
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
            <Link href="/average-mba-salary" className="hover:text-slate-300 transition-colors">Average MBA Salary</Link>
            {" · "}
            <Link href="/post-mba-salary" className="hover:text-slate-300 transition-colors">Post-MBA Salary</Link>
            {" · "}
            <Link href="/average-mba-salary" className="hover:text-slate-300 transition-colors">MBA Salary by Industry</Link>
            {" · "}
            <Link href="/lifetime-earnings-calculator" className="hover:text-slate-300 transition-colors">Lifetime Earnings Calculator</Link>
            {" · "}
            <Link href="/mba-worth-it" className="hover:text-slate-300 transition-colors">Is MBA Worth It?</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
          <p className="mt-1">
            Salary data sourced from GMAC Employment Report, Harvard Business School and Wharton career
            outcomes publications, Glassdoor, Levels.fyi, Wall Street Oasis, and CareerReturns industry
            research. All figures are estimates; individual outcomes vary significantly by career path,
            employer, and performance.
          </p>
        </footer>

      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetJsonLd) }}
      />

    </main>
  )
}
