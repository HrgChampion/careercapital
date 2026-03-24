import Link from "next/link"
import { pageAlternates, articleSchema, breadcrumbSchema } from "@/lib/seo"

const _articleSchema = articleSchema({
  title: "MBA Salary 2026: Average, Starting & Median Pay by Industry [Full Data]",
  description: "$175K median at M7. $125K at top-25. Full MBA salary data by school tier, industry, specialization, and years of experience.",
  url: "https://careerreturns.com/mba-salary",
  datePublished: "2026-03-21",
  dateModified: "2026-03-24",
})
const _breadcrumbSchema = breadcrumbSchema([{ name: "MBA Salary 2026", url: "https://careerreturns.com/mba-salary" }])

export const metadata = {
  title: "MBA Salary 2026: Average, Starting & Median Pay by Industry [Full Data]",
  description:
    "$175K median at M7. $125K at top-25. See full MBA salary data by school tier, industry, specialization, and years of experience. Updated 2026 →",
  alternates: pageAlternates("https://careerreturns.com/mba-salary"),
  openGraph: {
    title: "MBA Salary 2026: Average, Starting & Median Pay by Industry [Full Data]",
    description:
      "$175K median at M7. $125K at top-25. See full MBA salary data by school tier, industry, specialization, and years of experience. Updated 2026.",
    url: "https://careerreturns.com/mba-salary",
    siteName: "CareerReturns",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MBA Salary 2026: Average, Starting & Median Pay by Industry",
    description:
      "$175K median M7. $125K Top-25. $105K Online. Full MBA salary data by school tier, industry, and years of experience. Updated 2026.",
  },
}

const faqItems = [
  {
    question: "What is the average MBA salary in 2026?",
    answer:
      "The average MBA salary in 2026 is approximately $130,000–$150,000 across all full-time MBA programs in the United States. The median at M7 programs (Harvard, Wharton, Booth, Kellogg, MIT Sloan, Columbia, Stanford) is $175,000–$215,000 for consulting and finance tracks. At Top-25 programs, the median is $115,000–$140,000. Online MBA graduates from ranked programs earn a median of $90,000–$110,000. These figures reflect base salary only and do not include signing bonuses, year-end bonuses, or equity grants.",
  },
  {
    question: "What is the starting salary after an MBA?",
    answer:
      "Starting salary after an MBA depends primarily on industry and school tier. M7 graduates entering investment banking earn $190,000–$200,000 base plus $75,000–$150,000 in year-end bonus. MBB consulting starts at $192,000 base plus a $26,000 performance bonus. Tech PM roles at FAANG companies start at $175,000 base plus $35,000 bonus and $60,000 in RSUs. General management and CPG roles start at $125,000–$140,000. Healthcare management starts at $140,000. The overall median starting salary across all tracks and school tiers is approximately $130,000–$150,000.",
  },
  {
    question: "What MBA salary can I expect by industry?",
    answer:
      "MBA salary varies significantly by industry. Investment banking: $265,000–$340,000 total compensation (base + bonus). MBB consulting: $218,000 total. Tech (PM/Strategy): $270,000 total including RSUs. Private equity: $250,000–$450,000 including carry. Venture capital: $180,000–$280,000. Healthcare management: $160,000. CPG/Retail: $150,000. Energy: $165,000. General management: $145,000. Nonprofit/Government: $95,000. Industry is the single largest driver of post-MBA compensation variance.",
  },
  {
    question: "What is a good MBA salary?",
    answer:
      "A good MBA salary depends on school tier and career path. For M7 graduates, a strong outcome is $200,000+ in Year 1 total compensation (MBB or IB). For T15 graduates, $160,000–$180,000 in Year 1 is a strong outcome. For T25 graduates, $130,000–$150,000 is solid. For online MBA graduates from top programs (Indiana Kelley, UNC), $110,000–$130,000 in Year 1 is a strong result. In all cases, the 5-year and 10-year trajectory matters as much as the Year 1 figure — consulting and finance salaries compound dramatically after Year 3.",
  },
  {
    question: "How much does an MBA increase your salary?",
    answer:
      "An MBA increases salary by 47–100% on average compared to pre-MBA compensation, depending on school tier, pre-MBA industry, and post-MBA career path. Career switchers (e.g., military to consulting, teaching to MBB) see the largest deltas — often $80,000–$130,000 per year more than their pre-MBA salary in Year 1. Lateral movers within an industry see a smaller delta but often gain access to higher-trajectory roles. Over a 20-year career, M7 MBA graduates in consulting, finance, or tech earn $2M–$5M more in cumulative income than comparable professionals without an MBA.",
  },
  {
    question: "What is the median MBA salary?",
    answer:
      "The median MBA salary in 2026 is approximately $135,000–$145,000 across all full-time MBA programs in the US. The median varies sharply by tier: M7 programs have a median of $175,000–$215,000. T15 programs: $140,000–$165,000. T25: $115,000–$140,000. Regional programs: $90,000–$115,000. Online MBA (top-tier): $90,000–$110,000. The median understates outcomes for the top quartile of M7 graduates who enter MBB consulting, investment banking, or private equity — where Year 1 total compensation regularly exceeds $250,000.",
  },
]

const schoolTierData = [
  {
    tier: "M7",
    schools: "HBS, Wharton, Booth, Kellogg, MIT Sloan, Columbia, Stanford",
    medianYear1: "$175,000–$215,000",
    consulting: "$200,000–$215,000",
    finance: "$185,000–$210,000",
    tech: "$185,000–$200,000",
    color: "text-violet-400",
  },
  {
    tier: "T15",
    schools: "Tuck, Duke, Yale, Michigan Ross, UCLA Anderson, NYU Stern",
    medianYear1: "$140,000–$165,000",
    consulting: "$165,000–$185,000",
    finance: "$165,000–$185,000",
    tech: "$160,000–$180,000",
    color: "text-cyan-400",
  },
  {
    tier: "T25",
    schools: "UNC Kenan-Flagler, Indiana Kelley, UT Austin, Georgetown",
    medianYear1: "$115,000–$140,000",
    consulting: "$130,000–$155,000",
    finance: "$120,000–$145,000",
    tech: "$125,000–$150,000",
    color: "text-emerald-400",
  },
  {
    tier: "Regional",
    schools: "Strong regional programs outside the national top 30",
    medianYear1: "$90,000–$115,000",
    consulting: "$95,000–$115,000",
    finance: "$90,000–$110,000",
    tech: "$95,000–$120,000",
    color: "text-slate-300",
  },
  {
    tier: "Online MBA",
    schools: "UNC, Indiana Kelley, USC, Carnegie Mellon (top online)",
    medianYear1: "$90,000–$110,000",
    consulting: "$90,000–$110,000",
    finance: "$85,000–$105,000",
    tech: "$95,000–$120,000",
    color: "text-slate-400",
  },
]

const industryData = [
  {
    industry: "Investment Banking",
    base: "$190,000",
    bonus: "$75,000–$150,000",
    total: "$265,000–$340,000",
    note: "Bulge bracket & elite boutique. Year-end bonus varies with bank performance and deal flow.",
    accent: "text-violet-400",
  },
  {
    industry: "MBB Consulting",
    base: "$192,000",
    bonus: "$26,000",
    total: "$218,000",
    note: "McKinsey, BCG, Bain. Performance bonus fixed at associate level. Carried interest begins at principal.",
    accent: "text-violet-400",
  },
  {
    industry: "Tech (PM / Strategy)",
    base: "$175,000",
    bonus: "$35,000 + $60,000 RSU",
    total: "$270,000",
    note: "FAANG PM and strategy roles. RSU value is Year 1 vest at grant price; varies with stock performance.",
    accent: "text-cyan-400",
  },
  {
    industry: "Private Equity",
    base: "$150,000",
    bonus: "$100,000–$300,000 carry",
    total: "$250,000–$450,000",
    note: "Carry distributions increase sharply at VP and principal levels. Year 1 carry allocation is partial.",
    accent: "text-cyan-400",
  },
  {
    industry: "Venture Capital",
    base: "$130,000",
    bonus: "$50,000–$150,000 carry",
    total: "$180,000–$280,000",
    note: "Carry depends on fund size and partner split. Many MBA VC associates earn base-heavy comp in Year 1.",
    accent: "text-emerald-400",
  },
  {
    industry: "Healthcare Management",
    base: "$140,000",
    bonus: "$20,000",
    total: "$160,000",
    note: "Hospital systems and health consulting on different ends. BCG Health / Deloitte Health on higher end.",
    accent: "text-emerald-400",
  },
  {
    industry: "Energy",
    base: "$140,000",
    bonus: "$25,000",
    total: "$165,000",
    note: "Oil & gas, renewables, utilities. Houston-based roles. Bonus tied to commodity cycle performance.",
    accent: "text-emerald-400",
  },
  {
    industry: "General Management",
    base: "$125,000",
    bonus: "$20,000",
    total: "$145,000",
    note: "Broad corporate track. Includes rotational leadership programs at F500 companies.",
    accent: "text-slate-300",
  },
  {
    industry: "CPG / Retail",
    base: "$130,000",
    bonus: "$20,000",
    total: "$150,000",
    note: "P&G, Unilever, Nike brand management. Strong P&L track leads to GM roles within 5–7 years.",
    accent: "text-slate-300",
  },
  {
    industry: "Real Estate",
    base: "$120,000",
    bonus: "$30,000",
    total: "$150,000",
    note: "REPE, development, REIT management. Deal-flow experience matters more than school tier here.",
    accent: "text-slate-300",
  },
  {
    industry: "Nonprofit / Government",
    base: "$90,000",
    bonus: "$5,000",
    total: "$95,000",
    note: "PSLF eligibility may offset lower pay. Social impact roles at foundations and policy organizations.",
    accent: "text-slate-400",
  },
  {
    industry: "Entrepreneurship",
    base: "$80,000–$130,000",
    bonus: "Variable equity",
    total: "Highly variable",
    note: "Founder or early-stage startup roles. Equity upside not reflected in Year 1 base compensation.",
    accent: "text-amber-400",
  },
]

const trajectoryData = [
  {
    stage: "Year 1 (Post-MBA)",
    title: "Associate / Manager",
    mbb: "$212,000–$232,000",
    ib: "$265,000–$340,000",
    tech: "$185,000–$220,000",
    gm: "$125,000–$145,000",
    context: "Structured recruiting; fixed comp bands across most firms.",
  },
  {
    stage: "Year 3",
    title: "Senior Manager / Engagement Manager",
    mbb: "$280,000–$350,000",
    ib: "$350,000–$500,000",
    tech: "$230,000–$300,000",
    gm: "$150,000–$190,000",
    context: "First major divergence: partner-track decisions and PE/VC exit considerations.",
  },
  {
    stage: "Year 5",
    title: "Principal / Director / VP",
    mbb: "$400,000–$600,000",
    ib: "$450,000–$750,000",
    tech: "$280,000–$450,000",
    gm: "$180,000–$240,000",
    context: "Carry, RSU grants, and performance bonuses compound rapidly.",
  },
  {
    stage: "Year 10",
    title: "Partner / MD / SVP / C-Suite",
    mbb: "$700,000–$2,000,000+",
    ib: "$700,000–$2,000,000+",
    tech: "$350,000–$800,000",
    gm: "$220,000–$380,000",
    context: "Top of distribution driven by partnership economics, equity, and fund carry.",
  },
]

const geoData = [
  { city: "New York City", premium: "+20–30%", industries: "Finance, Consulting, Tech", note: "Global finance hub; highest nominal salaries. Cost of living offsets much of the premium." },
  { city: "San Francisco / Bay Area", premium: "+25–40%", industries: "Tech, VC, PE", note: "Highest tech TC globally. RSU value inflates total comp; base salaries competitive with NYC." },
  { city: "Boston", premium: "+10–15%", industries: "Consulting, Biotech, Finance", note: "HBS and MIT Sloan feeder market. Strong MBB and healthcare consulting concentration." },
  { city: "Chicago", premium: "+5–10%", industries: "Finance, Consulting, CPG", note: "Booth's home market. Strong private equity and trading floor concentration." },
  { city: "Los Angeles", premium: "+5–15%", industries: "Tech, Media, PE", note: "Growing tech sector. Entertainment and media adds unique MBA-relevant roles." },
  { city: "Houston", premium: "Market rate", industries: "Energy, Finance", note: "Lower cost of living makes net salary attractive. Energy sector drives demand." },
  { city: "Non-coastal / Regional", premium: "–10–20%", industries: "General Management", note: "Regional MBA programs serve local markets well; lower nominal but competitive real wages." },
]

export default function MbaSalaryPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-violet-600/12 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12 sm:space-y-20">

        {/* Hero */}
        <header className="space-y-5">
          <p className="text-xs font-medium text-violet-400 uppercase tracking-widest">CareerReturns · MBA Salary Data 2026</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            MBA Salary 2026:<br />
            <span className="text-slate-400">Average, Starting & Median Pay by Industry</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Full MBA salary data by school tier, industry, specialization, geography, and years of experience.
            Not averages that obscure the numbers — the actual ranges that drive the MBA ROI decision.
          </p>

          {/* Quick answer box */}
          <div className="bg-white/5 border border-violet-500/20 rounded-2xl p-5 sm:p-6 space-y-3">
            <p className="text-xs font-medium text-violet-400 uppercase tracking-widest">2026 Median MBA Salary at a Glance</p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-violet-400 text-xl sm:text-2xl font-semibold">$175K</p>
                <p className="text-slate-500 text-xs mt-1">Median M7</p>
              </div>
              <div>
                <p className="text-cyan-400 text-xl sm:text-2xl font-semibold">$125K</p>
                <p className="text-slate-500 text-xs mt-1">Median Top-25</p>
              </div>
              <div>
                <p className="text-emerald-400 text-xl sm:text-2xl font-semibold">$105K</p>
                <p className="text-slate-500 text-xs mt-1">Median Online</p>
              </div>
            </div>
            <p className="text-slate-500 text-xs">Base salary only. Bonuses and equity excluded. M7 median includes all tracks — MBB/IB tracks are $200K+.</p>
          </div>
        </header>

        {/* Jump nav */}
        <nav className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-3">Jump to</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            <a href="#by-school-tier" className="text-sm text-violet-400 hover:text-violet-300 transition-colors">By School Tier</a>
            <a href="#by-industry" className="text-sm text-violet-400 hover:text-violet-300 transition-colors">By Industry</a>
            <a href="#trajectory" className="text-sm text-violet-400 hover:text-violet-300 transition-colors">Salary Trajectory</a>
            <a href="#geography" className="text-sm text-violet-400 hover:text-violet-300 transition-colors">By City</a>
            <a href="#faq" className="text-sm text-violet-400 hover:text-violet-300 transition-colors">FAQ</a>
          </div>
        </nav>

        {/* Salary by School Tier */}
        <section id="by-school-tier" className="space-y-5">
          <div>
            <p className="text-xs font-medium text-violet-400 uppercase tracking-widest mb-1">School Tier</p>
            <h2 className="text-2xl font-semibold tracking-tight">MBA Salary by School Tier (2026)</h2>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              School tier is a significant salary driver in consulting and finance, where on-campus recruiting
              pipelines determine access to the highest-paying roles. In technology and general management,
              the gap between tiers narrows — role and company matter more than MBA brand.
            </p>
          </div>
          <div className="space-y-4">
            {schoolTierData.map(({ tier, schools, medianYear1, consulting, finance, tech, color }) => (
              <div key={tier} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div>
                    <span className={`text-sm font-bold ${color}`}>{tier}</span>
                    <p className="text-slate-500 text-xs mt-0.5">{schools}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-semibold ${color}`}>{medianYear1}</p>
                    <p className="text-slate-500 text-xs">Median Year 1</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 text-xs border-t border-white/5 pt-3">
                  <div>
                    <p className="text-slate-500 mb-0.5">Consulting</p>
                    <p className="text-slate-300">{consulting}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 mb-0.5">Finance</p>
                    <p className="text-slate-300">{finance}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 mb-0.5">Technology</p>
                    <p className="text-slate-300">{tech}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs">
            Source: GMAC Employment Report 2025, school-published placement data, Glassdoor aggregates.
            Consulting figures reflect pre-bonus base. Finance includes IB, AM, and PE Year 1 median.
            Data reflects 2026 market conditions.
          </p>
        </section>

        {/* Salary by Industry */}
        <section id="by-industry" className="space-y-5">
          <div>
            <p className="text-xs font-medium text-violet-400 uppercase tracking-widest mb-1">Industry Breakdown</p>
            <h2 className="text-2xl font-semibold tracking-tight">MBA Salary by Industry: Base, Bonus & Total Comp</h2>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              Industry is the single largest determinant of post-MBA compensation. The gap between
              investment banking and nonprofit is $245,000+ in Year 1 total compensation. Within each
              industry, school tier and role level drive further variance.
            </p>
          </div>
          <div className="space-y-3">
            {industryData.map(({ industry, base, bonus, total, note, accent }) => (
              <div key={industry} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <p className="text-white font-semibold text-sm">{industry}</p>
                  <p className={`text-sm font-semibold ${accent}`}>{total} total</p>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <p className="text-slate-500 mb-0.5">Base Salary</p>
                    <p className="text-slate-300">{base}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 mb-0.5">Bonus / Carry / Equity</p>
                    <p className="text-slate-300">{bonus}</p>
                  </div>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed border-t border-white/5 pt-2">{note}</p>
              </div>
            ))}
          </div>
          <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4">
            <p className="text-cyan-200 text-sm leading-relaxed">
              <span className="font-semibold text-white">Key insight:</span> Industry choice — not school tier — accounts
              for roughly 50% of post-MBA compensation variance. Choosing investment banking over general management
              at the same school can mean $120,000–$200,000 more in Year 1 total compensation. Run the numbers
              in the{" "}
              <Link href="/mba-roi-calculator" className="text-cyan-400 hover:text-cyan-300 transition-colors underline underline-offset-2">
                MBA ROI Calculator
              </Link>{" "}
              using your specific target industry and school.
            </p>
          </div>
        </section>

        {/* Salary Trajectory */}
        <section id="trajectory" className="space-y-5">
          <div>
            <p className="text-xs font-medium text-violet-400 uppercase tracking-widest mb-1">Career Progression</p>
            <h2 className="text-2xl font-semibold tracking-tight">MBA Salary Trajectory: Years 1, 3, 5 & 10</h2>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              Starting salary understates the MBA&apos;s financial impact for high-trajectory careers. The widest
              divergence appears at Year 5–7, when partner-track and equity-vesting dynamics begin compounding
              compensation dramatically. The &quot;average MBA salary&quot; figure commonly cited in surveys reflects
              only Year 1–2.
            </p>
          </div>
          <div className="space-y-4">
            {trajectoryData.map(({ stage, title, mbb, ib, tech, gm, context }) => (
              <div key={stage} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
                <div>
                  <p className="text-white font-semibold text-sm">{stage}</p>
                  <p className="text-slate-500 text-xs mt-0.5">Typical title: {title}</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div>
                    <p className="text-slate-500 mb-0.5">MBB Consulting</p>
                    <p className="text-violet-300 font-medium">{mbb}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 mb-0.5">Investment Banking</p>
                    <p className="text-slate-300 font-medium">{ib}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 mb-0.5">Tech / PM</p>
                    <p className="text-slate-300 font-medium">{tech}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 mb-0.5">General Mgmt</p>
                    <p className="text-slate-300 font-medium">{gm}</p>
                  </div>
                </div>
                <p className="text-slate-500 text-xs border-t border-white/5 pt-2">{context}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs">
            Figures represent total compensation at each stage for professionals who remain on the stated career track.
            Carry and RSU values are estimates based on historical fund and company performance; individual outcomes vary.
          </p>
        </section>

        {/* Geographic Breakdown */}
        <section id="geography" className="space-y-5">
          <div>
            <p className="text-xs font-medium text-violet-400 uppercase tracking-widest mb-1">Geography</p>
            <h2 className="text-2xl font-semibold tracking-tight">MBA Salary by City: Geographic Salary Breakdown</h2>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              MBA salaries vary significantly by location — primarily because the highest-paying industries
              (finance, tech, consulting) concentrate in a small number of cities. Nominal salary premiums
              in New York and San Francisco are partially offset by cost of living.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 text-left">
                  <th className="pb-3 pr-4 font-medium">City</th>
                  <th className="pb-3 pr-4 font-medium">Premium vs. Avg</th>
                  <th className="pb-3 font-medium">Key Sectors</th>
                </tr>
              </thead>
              <tbody>
                {geoData.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02]">
                    <td className="py-3 pr-4">
                      <p className="text-white font-medium">{row.city}</p>
                      <p className="text-slate-500 text-xs mt-0.5 max-w-[180px]">{row.note}</p>
                    </td>
                    <td className="py-3 pr-4 text-violet-300 font-medium whitespace-nowrap">{row.premium}</td>
                    <td className="py-3 text-slate-400 text-xs">{row.industries}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* What drives salary */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">What Actually Drives Your Post-MBA Salary</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The average MBA salary number conceals more than it reveals. These four variables account for
            the majority of realized post-MBA compensation variance.
          </p>
          <div className="space-y-3">
            {[
              {
                factor: "Destination industry",
                weight: "~50% of variance",
                body: "MBB consulting pays $70,000–$90,000 more per year than general management at the same school tier. Industry choice alone can shift 10-year NPV by $200,000–$500,000. This is the decision with the highest financial leverage in the MBA process.",
              },
              {
                factor: "School tier and recruiting access",
                weight: "~25% of variance",
                body: "M7 programs provide on-campus MBB recruiting access. Outside M7, MBB offers become rare. The average salary difference between M7 and T15 for consulting-track graduates is $35,000–$50,000/yr. For tech and general management tracks, the gap narrows to $15,000–$25,000/yr.",
              },
              {
                factor: "Pre-MBA experience and career switch vs. lateral move",
                weight: "~20% of variance",
                body: "Career switchers (military → consulting, teaching → MBB) see larger salary deltas than lateral movers. The MBA ROI case is structurally stronger for switchers, because the pre-MBA baseline is lower and the post-MBA jump is larger. Lateral movers gain access to higher-trajectory roles but start from a higher baseline.",
              },
              {
                factor: "Scholarship and realized cost (affects ROI, not pay)",
                weight: "N/A — affects ROI",
                body: "Scholarship does not change post-MBA salary, but reduces program cost by $50,000–$120,000. This is the highest-leverage negotiation of the MBA process and has a direct impact on break-even period and NPV.",
              },
            ].map(({ factor, weight, body }) => (
              <div key={factor} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <p className="text-white font-semibold text-sm">{factor}</p>
                  <p className="text-violet-300 text-xs font-medium">{weight}</p>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="space-y-5">
          <div>
            <p className="text-xs font-medium text-violet-400 uppercase tracking-widest mb-1">FAQ</p>
            <h2 className="text-2xl font-semibold tracking-tight">MBA Salary 2026: Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqItems.map(({ question, answer }) => (
              <div key={question} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-white font-semibold text-sm">{question}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-10 text-center space-y-5">
          <p className="text-xs font-medium text-violet-400 uppercase tracking-widest">Free Calculators</p>
          <h2 className="text-2xl font-semibold tracking-tight">Model Your MBA Salary Delta</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Enter your current salary and target post-MBA salary to calculate NPV, IRR, and break-even period.
            See whether the delta justifies the investment at your specific program cost and scholarship level.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/mba-roi-calculator"
              className="inline-block bg-gradient-to-r from-violet-600 to-purple-600 hover:opacity-90 transition-all px-7 py-4 rounded-xl font-medium text-white text-base shadow-[0_0_40px_rgba(124,58,237,0.3)]"
            >
              MBA ROI Calculator →
            </Link>
            <Link
              href="/salary-benchmark-calculator"
              className="inline-block bg-white/5 border border-white/10 hover:bg-white/10 transition-all px-7 py-4 rounded-xl font-medium text-white text-base"
            >
              Salary Benchmark Calculator →
            </Link>
          </div>
        </section>

        {/* Related Guides */}
        <section className="border-t border-white/10 pt-10 mt-10">
          <p className="text-xs font-medium text-violet-400 uppercase tracking-widest mb-5">Related Guides & Data</p>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link href="/average-mba-salary" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-violet-400 font-mono text-lg">$</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-violet-300 transition-colors">Average MBA Salary</p>
                <p className="text-slate-500 text-xs">By school tier and experience →</p>
              </div>
            </Link>
            <Link href="/post-mba-salary" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-violet-400 font-mono text-lg">↗</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-violet-300 transition-colors">Post-MBA Salary</p>
                <p className="text-slate-500 text-xs">Year 1 through Year 10 data →</p>
              </div>
            </Link>
            <Link href="/mba-salary-increase" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-violet-400 font-mono text-lg">↑</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-violet-300 transition-colors">MBA Salary Increase</p>
                <p className="text-slate-500 text-xs">+47% avg pre vs. post MBA →</p>
              </div>
            </Link>
            <Link href="/mba-salary-by-school" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-violet-400 font-mono text-lg">≡</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-violet-300 transition-colors">MBA Salary by School</p>
                <p className="text-slate-500 text-xs">HBS, Wharton, Booth, Kellogg →</p>
              </div>
            </Link>
            <Link href="/mba-roi-calculator" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-violet-400 font-mono text-lg">Σ</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-violet-300 transition-colors">MBA ROI Calculator</p>
                <p className="text-slate-500 text-xs">NPV, IRR, break-even modeled →</p>
              </div>
            </Link>
            <Link href="/mba-roi-report-2026" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-violet-400 font-mono text-lg">↗</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-violet-300 transition-colors">MBA ROI Report 2026</p>
                <p className="text-slate-500 text-xs">IRR data across 12 industries →</p>
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
            <Link href="/mba-salary-increase" className="hover:text-slate-300 transition-colors">MBA Salary Increase</Link>
            {" · "}
            <Link href="/post-mba-salary" className="hover:text-slate-300 transition-colors">Post-MBA Salary</Link>
            {" · "}
            <Link href="/mba-worth-it" className="hover:text-slate-300 transition-colors">Is MBA Worth It?</Link>
            {" · "}
            <Link href="/mba-cost" className="hover:text-slate-300 transition-colors">MBA Cost</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
          <p className="mt-1">
            Salary data sourced from GMAC Employment Report 2025, school-published placement reports, Glassdoor,
            Levels.fyi, and publicly reported compensation figures. All ranges are estimates; individual outcomes vary
            by role, location, experience level, and firm performance.
          </p>
        </footer>

      </div>

      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map(({ question, answer }) => ({
              "@type": "Question",
              name: question,
              acceptedAnswer: {
                "@type": "Answer",
                text: answer,
              },
            })),
          }),
        }}
      />

      {/* Dataset JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dataset",
            name: "MBA Salary Data 2026",
            description:
              "MBA salary by school tier, industry, and years of experience — 2026 data",
            url: "https://careerreturns.com/mba-salary",
            creator: {
              "@type": "Organization",
              name: "CareerReturns",
            },
            temporalCoverage: "2026",
          }),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_breadcrumbSchema) }} />

    </main>
  )
}
