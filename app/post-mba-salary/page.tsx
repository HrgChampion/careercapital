import Link from "next/link"
import { pageAlternates } from "@/lib/seo"

export const metadata = {
  title: "What Is Salary After an MBA? Post-MBA Salary 2026 by Industry & School",
  description:
    "Post-MBA salary 2026: MBB $212K–$232K, investment banking $275K–$350K, tech $185K–$200K. MBA salary by city (NYC, SF, Boston), signing bonus by industry ($5K–$75K), and how pre-MBA background affects salary delta. Full data by school tier and career path.",
  alternates: pageAlternates("https://careerreturns.com/post-mba-salary"),
}

const salaryByIndustry = [
  { industry: "Management Consulting (MBB)", base: "$192,000", bonus: "$20,000–$40,000", total: "$212,000–$232,000", notes: "Performance bonus paid annually" },
  { industry: "Investment Banking (Bulge Bracket)", base: "$200,000", bonus: "$75,000–$150,000", total: "$275,000–$350,000", notes: "Year-end bonus highly variable" },
  { industry: "Tech (Product Management)", base: "$165,000", bonus: "$20,000–$35,000", total: "$185,000–$200,000", notes: "RSU grant adds $60K–$120K/yr" },
  { industry: "Big 4 Consulting (Strategy)", base: "$145,000", bonus: "$10,000–$20,000", total: "$155,000–$165,000", notes: "PwC Strategy&, Deloitte S&O" },
  { industry: "Healthcare Management", base: "$140,000", bonus: "$10,000–$25,000", total: "$150,000–$165,000", notes: "Hospital systems and health tech" },
  { industry: "General Management / CPG", base: "$120,000", bonus: "$15,000–$25,000", total: "$135,000–$145,000", notes: "Director/Manager level roles" },
  { industry: "Venture Capital / PE (Associates)", base: "$150,000", bonus: "$50,000–$200,000", total: "$200,000–$350,000", notes: "Carry and deal bonus included" },
  { industry: "Nonprofit / Government", base: "$85,000", bonus: "$0–$10,000", total: "$85,000–$95,000", notes: "PSLF eligible; total package higher" },
]

const salaryByTier = [
  { tier: "M7 Programs", programs: "HBS, Wharton, Booth, Kellogg, Sloan, Columbia, Stanford GSB", medianSalary: "$185,000–$210,000", consultingBanking: "$210,000–$250,000", tech: "$190,000–$220,000", general: "$140,000–$165,000" },
  { tier: "T15 Programs", programs: "Tuck, Fuqua, Ross, Anderson, Darden, Haas, Stern, Yale SOM", medianSalary: "$150,000–$175,000", consultingBanking: "$175,000–$200,000", tech: "$160,000–$185,000", general: "$120,000–$140,000" },
  { tier: "T25 Programs", programs: "Georgetown, Emory, UNC, USC, Wisconsin, Notre Dame", medianSalary: "$110,000–$140,000", consultingBanking: "$130,000–$160,000", tech: "$120,000–$150,000", general: "$95,000–$115,000" },
  { tier: "Online MBA (Ranked)", programs: "Kelley Direct, UNC Online, UT McCombs, USC Online", medianSalary: "$90,000–$115,000", consultingBanking: "N/A (no structured recruiting)", tech: "$110,000–$130,000", general: "$85,000–$105,000" },
]

const salaryGrowth = [
  { year: "Year 1 (Post-MBA)", mbb: "$212,000–$232,000", banking: "$275,000–$350,000", tech: "$185,000–$200,000", general: "$135,000–$145,000" },
  { year: "Year 3", mbb: "$250,000–$290,000", banking: "$350,000–$500,000", tech: "$210,000–$260,000", general: "$150,000–$175,000" },
  { year: "Year 5", mbb: "$300,000–$450,000", banking: "$400,000–$700,000", tech: "$250,000–$400,000", general: "$165,000–$210,000" },
  { year: "Year 7", mbb: "$400,000–$700,000", banking: "$500,000–$1,000,000+", tech: "$300,000–$600,000", general: "$180,000–$250,000" },
  { year: "Year 10", mbb: "$600,000–$2,000,000+", banking: "$700,000–$2,000,000+", tech: "$350,000–$800,000", general: "$200,000–$350,000" },
]

const signingBonuses = [
  { industry: "Investment Banking (Bulge Bracket)", range: "$20,000–$50,000", avg: "$35,000", note: "Paid at start; sometimes deferred with clawback for departures < 1yr" },
  { industry: "Tech / FAANG PM", range: "$25,000–$75,000", avg: "$45,000", note: "Higher for engineering roles; often structured as sign-on RSU accelerator" },
  { industry: "Management Consulting (MBB)", range: "$5,000–$30,000", avg: "$15,000", note: "Lower than banking; core comp is base + performance bonus" },
  { industry: "Big 4 Consulting (Strategy)", range: "$5,000–$15,000", avg: "$8,000", note: "PwC Strategy&, Deloitte S&O; varies by office and practice" },
  { industry: "Healthcare Management", range: "$5,000–$15,000", avg: "$9,000", note: "Health systems and health consulting firms" },
  { industry: "General Management / CPG", range: "$5,000–$10,000", avg: "$6,000", note: "Lower base with more focus on annual performance bonus" },
]

const salaryByCity = [
  { city: "New York City", range: "$195,000–$235,000", driver: "IB and consulting hub; cost-of-living premium baked into comp", industries: "Banking, MBB, Finance" },
  { city: "San Francisco / Bay Area", range: "$195,000–$240,000", driver: "Tech equity premium; FAANG PM and startup roles pull comp up", industries: "Tech, VC, Consulting" },
  { city: "Boston", range: "$175,000–$215,000", driver: "MBB, biotech, fintech; MIT/HBS alumni density", industries: "Consulting, Biotech, Finance" },
  { city: "Chicago", range: "$165,000–$200,000", driver: "Consulting (McKinsey, BCG flagship offices), finance", industries: "Consulting, Finance, CPG" },
  { city: "Los Angeles", range: "$155,000–$190,000", driver: "Tech, media, entertainment strategy roles", industries: "Tech, Media, Healthcare" },
  { city: "Houston", range: "$155,000–$185,000", driver: "Energy sector (oil & gas strategy, PE)", industries: "Energy, Healthcare, Finance" },
  { city: "Non-metro / Remote", range: "$120,000–$155,000", driver: "Regional employers, remote roles; lower COL but compressed comp", industries: "General Mgmt, Healthcare, Tech" },
]

const backgroundDelta = [
  { background: "Engineering → MBB Consulting", preMba: "$110,000", postMba: "$212,000", delta: "+$102,000/yr", note: "Strong MBA case; technical background valued for ops/tech consulting practices" },
  { background: "Finance → Investment Banking", preMba: "$95,000", postMba: "$200,000", delta: "+$105,000/yr", note: "Highest delta for finance backgrounds; IB recruiting rewards prior exposure" },
  { background: "Teaching / Nonprofit → Consulting", preMba: "$60,000", postMba: "$185,000", delta: "+$125,000/yr", note: "Largest percentage uplift; career switchers see biggest first-year impact" },
  { background: "Military → General Management", preMba: "$75,000", postMba: "$145,000", delta: "+$70,000/yr", note: "MBA bridges civilian transition; leadership premium recognized by employers" },
  { background: "Healthcare → Health Consulting", preMba: "$90,000", postMba: "$155,000", delta: "+$65,000/yr", note: "Domain expertise valued; delta compressed by specialized path" },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the average post-MBA salary in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The median first-year post-MBA salary at M7 programs is $185,000–$210,000 across all industries. For MBB consulting placements, total compensation is $212,000–$232,000. For investment banking, total first-year compensation is $275,000–$350,000 including year-end bonus. Across all MBA programs (M7 through online), the national median post-MBA salary is approximately $130,000–$150,000.",
      },
    },
    {
      "@type": "Question",
      name: "How much does an MBA increase salary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The average post-MBA salary increase is 47–55% from pre-MBA to first post-MBA role. For M7 graduates entering consulting or finance, the increase exceeds 100% over a typical pre-MBA median of $85,000. The exact uplift depends on pre-MBA salary, target industry, and school tier.",
      },
    },
    {
      "@type": "Question",
      name: "Which post-MBA industry pays the highest salary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Investment banking (bulge bracket) pays the highest first-year post-MBA total compensation at $275,000–$350,000, driven by large year-end bonuses. MBB consulting pays $212,000–$232,000 in year 1 with more predictable salary growth. Tech product management pays $185,000–$220,000 in base plus RSUs that can add $60,000–$120,000 in additional annual value.",
      },
    },
    {
      "@type": "Question",
      name: "How does post-MBA salary grow over 10 years?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Post-MBA salary growth varies dramatically by industry. MBB consultants who reach principal/partner level earn $600,000–$2,000,000+ at year 10. Investment bankers earn $700,000–$2,000,000+ at year 10 including carry. Tech product leaders earn $350,000–$800,000 at year 10. General management earns $200,000–$350,000 at year 10. The divergence compounds significantly after year 3.",
      },
    },
    {
      "@type": "Question",
      name: "What is the post-MBA salary at M7 vs T15 programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "M7 MBA graduates earn a median first-year post-MBA salary of $185,000–$210,000, driven by higher consulting and banking placement rates. T15 programs produce medians of $150,000–$175,000. T25 programs produce $110,000–$140,000. The gap between M7 and T25 is approximately $60,000–$80,000 in first-year salary, which compounds significantly over a career.",
      },
    },
  ],
}

const datasetSchema = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "Post-MBA Salary Data 2026",
  description: "First-year post-MBA salary data by industry and school tier",
  url: "https://careerreturns.com/post-mba-salary",
  creator: { "@type": "Organization", name: "CareerReturns", url: "https://careerreturns.com" },
  temporalCoverage: "2026",
  keywords: ["post mba salary", "mba starting salary", "first year mba salary"],
}

export default function PostMbaSalaryPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-indigo-600/20 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12 sm:space-y-20">

        {/* Header */}
        <header className="space-y-5">
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">CareerReturns · Post-MBA Salary Data</p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
            What Is Salary After an MBA?<br />
            <span className="text-slate-400">2026 Data by Industry &amp; School</span>
          </h1>
          <p className="text-slate-400 leading-relaxed">
            Salary after an MBA degree ranges from $85,000 in nonprofit roles to $350,000+ in investment banking.
            First-year pay by industry and school tier, 10-year salary growth curves, and how post-MBA
            compensation compares to pre-MBA earnings. All figures reflect 2026 market data.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
              <p className="text-2xl font-semibold text-indigo-400">$150K+</p>
              <p className="text-slate-400 text-xs mt-1">Median first-year</p>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
              <p className="text-2xl font-semibold text-indigo-400">+47%</p>
              <p className="text-slate-400 text-xs mt-1">Avg salary increase</p>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
              <p className="text-2xl font-semibold text-indigo-400">$350K</p>
              <p className="text-slate-400 text-xs mt-1">IB year-1 total comp</p>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
              <p className="text-2xl font-semibold text-indigo-400">$232K</p>
              <p className="text-slate-400 text-xs mt-1">MBB year-1 total comp</p>
            </div>
          </div>
        </header>

        {/* Jump to nav */}
        <nav className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-3">Jump to</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            <a href="#salary-by-industry" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">By Industry</a>
            <a href="#signing-bonus" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">Signing Bonuses</a>
            <a href="#salary-by-tier" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">By School Tier</a>
            <a href="#salary-by-city" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">By City</a>
            <a href="#salary-growth" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">Salary Growth</a>
            <a href="#pre-vs-post" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">Pre vs. Post-MBA</a>
          </div>
        </nav>

        {/* Salary by Industry */}
        <section id="salary-by-industry" className="space-y-5">
          <div>
            <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-1">Industry Data</p>
            <h2 className="text-2xl font-semibold tracking-tight">Post-MBA Salary by Industry</h2>
            <p className="text-slate-400 text-sm mt-2">Base salary, bonus range, and total first-year compensation across the major post-MBA career tracks.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 text-left">
                  <th className="pb-3 pr-4 font-medium">Industry</th>
                  <th className="pb-3 pr-4 font-medium">Base</th>
                  <th className="pb-3 pr-4 font-medium">Bonus</th>
                  <th className="pb-3 font-medium">Total Comp</th>
                </tr>
              </thead>
              <tbody>
                {salaryByIndustry.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02]">
                    <td className="py-3 pr-4">
                      <p className="text-white font-medium">{row.industry}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{row.notes}</p>
                    </td>
                    <td className="py-3 pr-4 text-slate-300">{row.base}</td>
                    <td className="py-3 pr-4 text-slate-300">{row.bonus}</td>
                    <td className="py-3 text-indigo-400 font-medium">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Signing Bonuses */}
        <section id="signing-bonus" className="space-y-5">
          <div>
            <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-1">Signing Bonuses</p>
            <h2 className="text-2xl font-semibold tracking-tight">Post-MBA Signing Bonus by Industry</h2>
            <p className="text-slate-400 text-sm mt-2">Signing bonuses are paid at offer acceptance and reduce your effective break-even period. They are excluded from base salary figures above but meaningfully shift year-one total compensation.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 text-left">
                  <th className="pb-3 pr-4 font-medium">Industry</th>
                  <th className="pb-3 pr-4 font-medium">Range</th>
                  <th className="pb-3 pr-4 font-medium">Avg</th>
                  <th className="pb-3 font-medium">Notes</th>
                </tr>
              </thead>
              <tbody>
                {signingBonuses.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02]">
                    <td className="py-3 pr-4 text-white font-medium">{row.industry}</td>
                    <td className="py-3 pr-4 text-slate-300">{row.range}</td>
                    <td className="py-3 pr-4 text-indigo-400 font-medium">{row.avg}</td>
                    <td className="py-3 text-slate-500 text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Salary by School Tier */}
        <section id="salary-by-tier" className="space-y-5">
          <div>
            <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-1">School Tier</p>
            <h2 className="text-2xl font-semibold tracking-tight">Post-MBA Salary by School Tier</h2>
            <p className="text-slate-400 text-sm mt-2">The school tier effect on first-year post-MBA salary is significant — the M7 to T25 gap averages $60K–$80K in year one.</p>
          </div>
          <div className="space-y-3">
            {salaryByTier.map((row, i) => (
              <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6 space-y-3">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <p className="font-semibold text-white">{row.tier}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{row.programs}</p>
                  </div>
                  <p className="text-indigo-400 font-semibold text-lg shrink-0">{row.medianSalary}</p>
                </div>
                <div className="grid grid-cols-3 gap-3 text-sm pt-1 border-t border-white/10">
                  <div>
                    <p className="text-slate-500 text-xs">Consulting / Banking</p>
                    <p className="text-slate-300 mt-0.5">{row.consultingBanking}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs">Tech / Product</p>
                    <p className="text-slate-300 mt-0.5">{row.tech}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs">General Mgmt</p>
                    <p className="text-slate-300 mt-0.5">{row.general}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Salary by City */}
        <section id="salary-by-city" className="space-y-5">
          <div>
            <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-1">By Metro Area</p>
            <h2 className="text-2xl font-semibold tracking-tight">Post-MBA Salary by City</h2>
            <p className="text-slate-400 text-sm mt-2">Geographic location is the third-largest driver of post-MBA salary after industry and school tier. NYC and SF carry the highest absolute compensation; cost-of-living adjustments shift the real-return picture significantly.</p>
          </div>
          <div className="space-y-3">
            {salaryByCity.map((row, i) => (
              <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-2">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <p className="font-semibold text-white">{row.city}</p>
                  <p className="text-indigo-400 font-semibold shrink-0">{row.range}</p>
                </div>
                <p className="text-slate-400 text-xs">{row.driver}</p>
                <p className="text-slate-500 text-xs">Top industries: {row.industries}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 10-Year Salary Growth */}
        <section id="salary-growth" className="space-y-5">
          <div>
            <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-1">10-Year Trajectory</p>
            <h2 className="text-2xl font-semibold tracking-tight">Post-MBA Salary Growth by Year</h2>
            <p className="text-slate-400 text-sm mt-2">Salary trajectories diverge sharply after year 3. Industry is the primary determinant of 10-year earning power.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 text-left">
                  <th className="pb-3 pr-4 font-medium">Period</th>
                  <th className="pb-3 pr-4 font-medium">MBB Consulting</th>
                  <th className="pb-3 pr-4 font-medium">Investment Banking</th>
                  <th className="pb-3 pr-4 font-medium">Tech / PM</th>
                  <th className="pb-3 font-medium">General Mgmt</th>
                </tr>
              </thead>
              <tbody>
                {salaryGrowth.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02]">
                    <td className="py-3 pr-4 text-white font-medium">{row.year}</td>
                    <td className="py-3 pr-4 text-slate-300">{row.mbb}</td>
                    <td className="py-3 pr-4 text-slate-300">{row.banking}</td>
                    <td className="py-3 pr-4 text-slate-300">{row.tech}</td>
                    <td className="py-3 text-slate-300">{row.general}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-xs">
            MBB year 5–10 figures reflect principal/partner trajectory. Banking figures include carry and deal bonuses. Tech figures include RSU grants at market value.
          </p>
        </section>

        {/* Pre vs Post-MBA Delta */}
        <section id="pre-vs-post" className="space-y-5">
          <div>
            <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-1">Salary Delta</p>
            <h2 className="text-2xl font-semibold tracking-tight">How Post-MBA Pay Compares to Pre-MBA</h2>
            <p className="text-slate-400 text-sm mt-2">The salary delta — the difference between post-MBA and pre-MBA compensation — is the primary input in any MBA ROI calculation.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-3">
              <p className="text-indigo-400 font-mono text-lg">$85K</p>
              <p className="font-semibold text-white">Median Pre-MBA</p>
              <p className="text-slate-400 text-sm leading-relaxed">The median pre-MBA salary for full-time MBA applicants across M7 programs. Engineers typically start higher ($120K–$160K), humanities backgrounds lower ($60K–$80K).</p>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-3">
              <p className="text-indigo-400 font-mono text-lg">$190K</p>
              <p className="font-semibold text-white">M7 Post-MBA Median</p>
              <p className="text-slate-400 text-sm leading-relaxed">The median first-year post-MBA salary across M7 programs, inclusive of all tracks. Consulting and banking placements pull this figure above $200K; general management placements pull it below $150K.</p>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-3">
              <p className="text-indigo-400 font-mono text-lg">+$105K</p>
              <p className="font-semibold text-white">Avg Salary Delta</p>
              <p className="text-slate-400 text-sm leading-relaxed">The average gross salary delta at M7 programs. This $105K annual uplift, discounted over 10 years, is the primary source of positive MBA NPV. Smaller deltas at T25 or online programs compress ROI significantly.</p>
            </div>
          </div>
          <p className="text-slate-400 text-sm">
            For a detailed salary increase breakdown by sector and function, see the{" "}
            <Link href="/mba-salary-increase" className="text-indigo-400 hover:text-indigo-300 transition-colors">MBA Salary Increase guide →</Link>
          </p>
        </section>

        {/* Pre-MBA Background Delta */}
        <section className="space-y-5">
          <div>
            <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-1">Background Impact</p>
            <h2 className="text-2xl font-semibold tracking-tight">How Pre-MBA Background Affects Post-MBA Salary</h2>
            <p className="text-slate-400 text-sm mt-2">The salary delta — the gap between pre-MBA and post-MBA pay — varies significantly by career background. Career switchers from lower-paying fields see the largest absolute gains; engineers and finance professionals often see smaller deltas due to high pre-MBA compensation.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 text-left">
                  <th className="pb-3 pr-4 font-medium">Career Path</th>
                  <th className="pb-3 pr-4 font-medium">Pre-MBA</th>
                  <th className="pb-3 pr-4 font-medium">Post-MBA</th>
                  <th className="pb-3 font-medium">Annual Delta</th>
                </tr>
              </thead>
              <tbody>
                {backgroundDelta.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02]">
                    <td className="py-3 pr-4">
                      <p className="text-white font-medium">{row.background}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{row.note}</p>
                    </td>
                    <td className="py-3 pr-4 text-slate-300">{row.preMba}</td>
                    <td className="py-3 pr-4 text-slate-300">{row.postMba}</td>
                    <td className="py-3 text-indigo-400 font-semibold">{row.delta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-10 text-center space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Model Your Post-MBA Salary</h2>
          <p className="text-slate-400 max-w-lg mx-auto text-sm leading-relaxed">
            Enter your pre-MBA salary, target post-MBA role, and loan structure to compute your personal NPV, IRR, and break-even period.
          </p>
          <Link
            href="/mba-roi-calculator"
            className="inline-block bg-linear-to-r from-indigo-600 to-violet-600 hover:opacity-90 transition-all px-8 py-4 rounded-xl font-medium text-white text-base shadow-[0_0_60px_rgba(99,102,241,0.35)]"
          >
            Calculate Your MBA ROI →
          </Link>
        </section>

        {/* ── MBA Salary by Function ── */}
        <section className="border-t border-white/10 pt-10 mt-10">
          <h2 className="text-xl font-semibold tracking-tight mb-6">Post-MBA Salary by Job Function</h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-3xl">
            Industry is the primary salary driver, but <span className="text-white font-medium">job function within an industry</span> creates
            meaningful variation. Two MBA graduates at the same firm in different functions can see $40k–$80k
            differences in total first-year compensation.
          </p>
          <div className="space-y-3 max-w-3xl">
            {[
              { fn: "Strategy / Corporate Development", base: "$145k – $180k", note: "Competitive with consulting; typically in-house M&A and planning teams at large corporates." },
              { fn: "Finance / FP&A", base: "$120k – $155k", note: "Broad range depending on company size. PE-backed companies skew higher with carry exposure." },
              { fn: "Product Management", base: "$155k – $200k", note: "Tech-sector function. RSU grants add significantly to total comp at FAANG-tier companies." },
              { fn: "Operations / Supply Chain", base: "$110k – $145k", note: "Strong at CPG, manufacturing, and logistics firms. Amazon and operations-heavy tech firms pay more." },
              { fn: "Marketing / Brand Management", base: "$100k – $135k", note: "CPG (P&G, Unilever) and consumer tech. Lower base but strong long-term brand leadership track." },
              { fn: "General Management / Rotational", base: "$115k – $150k", note: "Leadership development programs at major corporates. Trade-off: breadth over immediate salary." },
            ].map(({ fn, base, note }) => (
              <div key={fn} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 bg-white/5 border border-white/10 rounded-xl px-5 py-4">
                <div className="sm:w-64 shrink-0">
                  <p className="text-white text-sm font-medium">{fn}</p>
                  <p className="text-indigo-300 font-semibold text-sm mt-0.5">{base} base</p>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Post-MBA Salary Negotiation ── */}
        <section className="border-t border-white/10 pt-10 mt-10">
          <h2 className="text-xl font-semibold tracking-tight mb-6">Post-MBA Salary Negotiation: What Actually Works</h2>
          <div className="space-y-5 max-w-3xl">
            <p className="text-slate-400 text-sm leading-relaxed">
              Post-MBA offers at structured on-campus recruiting programs (consulting, investment banking) have almost
              no base salary negotiation — firms use locked band structures and will not deviate. But <span className="text-white font-medium">signing bonuses,
              start dates, relocation packages, and RSU cliff timing</span> are negotiable in most roles. Here is what
              to focus on by sector.
            </p>
            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-white font-semibold text-sm">Consulting (MBB / Big 4)</p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Base salary is non-negotiable at MBB — all associates at the same office start at the same number.
                  The only lever is <span className="text-white">office location</span> (New York pays more than Chicago). Signing bonus timing
                  and relocation allowances can sometimes be adjusted. Do not waste negotiating capital trying to
                  move base salary at McKinsey, Bain, or BCG.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-white font-semibold text-sm">Investment Banking</p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Bulge-bracket associate base salaries are fixed by class year. Signing bonuses at elite boutiques
                  (Lazard, Evercore, Moelis) have more flexibility — especially if you have a competing offer from
                  another firm. <span className="text-white">Competing offers are the only effective negotiating leverage</span> in
                  structured banking recruiting.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-white font-semibold text-sm">Tech / Product Management</p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  The most negotiable sector post-MBA. Base, signing bonus, RSU grant size, and RSU cliff timing are
                  all on the table. Use <span className="text-white">Levels.fyi data</span> to benchmark total comp by level, not just base
                  salary. A 10% increase in RSU grant at a FAANG company is worth $10k–$20k/year for four years —
                  a better ROI than negotiating base by $5k.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-white font-semibold text-sm">General / Corporate Roles</p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  The highest negotiating flexibility. Use competing MBA offers, referencing the median salary for
                  your target role from GMAC data or this page. Focus on <span className="text-white">title, level, and
                  performance review timing</span> alongside base — a title bump of one level can be worth more than
                  a $10k base increase over a 3-year horizon.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Online vs Full-Time MBA Salary ── */}
        <section className="border-t border-white/10 pt-10 mt-10">
          <h2 className="text-xl font-semibold tracking-tight mb-6">Online MBA vs. Full-Time MBA: Salary Comparison</h2>
          <div className="space-y-5 max-w-3xl">
            <p className="text-slate-400 text-sm leading-relaxed">
              The salary gap between online and full-time MBA graduates has narrowed significantly since 2020, as
              accredited online programs from ranked schools (Indiana Kelley, UNC Kenan-Flagler, Carnegie Mellon
              Tepper, USC Marshall) have gained employer recognition. Here is how the outcomes differ:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
                <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">Full-Time MBA (M7 / T15)</p>
                <p className="text-white font-semibold text-lg">$155k – $215k</p>
                <ul className="text-slate-400 text-xs space-y-1 leading-relaxed">
                  <li>• Access to structured on-campus recruiting</li>
                  <li>• MBB / IB pipelines almost exclusively here</li>
                  <li>• High opportunity cost (2 years forgone salary)</li>
                  <li>• Career pivot potential: highest</li>
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
                <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">Online / Part-Time MBA (Ranked)</p>
                <p className="text-white font-semibold text-lg">$90k – $130k</p>
                <ul className="text-slate-400 text-xs space-y-1 leading-relaxed">
                  <li>• No opportunity cost — continue working</li>
                  <li>• Best for in-place promotions and credential</li>
                  <li>• Limited access to MBB / IB recruiting</li>
                  <li>• Career pivot potential: moderate</li>
                </ul>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              The salary difference is real, but the ROI comparison favors online MBAs for professionals who are
              not targeting consulting or banking. Eliminating two years of forgone salary ($160k–$200k for most
              applicants) often outweighs the $30k–$50k first-year salary gap. Use the{" "}
              <a href="/mba-roi-calculator" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">MBA ROI calculator</a>{" "}
              to model both formats with your specific numbers.
            </p>
          </div>
        </section>

        {/* Related Guides */}
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
            <Link href="/mba-salary-increase" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">$</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">MBA Salary Increase Data</p>
                <p className="text-slate-500 text-xs">+47% avg — pre vs post MBA →</p>
              </div>
            </Link>
            <Link href="/average-mba-salary" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">$</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">Average MBA Salary 2026</p>
                <p className="text-slate-500 text-xs">Pay by school tier and industry →</p>
              </div>
            </Link>
            <Link href="/mba-roi-report-2026" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">↗</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">MBA ROI Report 2026</p>
                <p className="text-slate-500 text-xs">IRR data across 12 industries →</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Context & Methodology */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Understanding Salary After an MBA Degree</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Salary after an MBA is determined primarily by three factors: destination industry, business school
            tier, and pre-MBA background. Candidates with a bachelor&apos;s degree in engineering or finance
            entering tech or banking often see the largest absolute salary after MBA, but the percentage
            uplift is frequently higher for candidates switching career paths from lower-paying fields. The
            average starting salary for MBA graduates varies significantly by these factors — the national
            average masks a wide distribution.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            The Graduate Management Admission Council (GMAC) annual corporate recruiters survey consistently
            shows that MBA degree holders command a higher salary than candidates with only a bachelor&apos;s
            degree in management roles — with the premium widest in consulting, finance, and general
            management. Salary for MBA graduates in the highest-paying jobs (MBB partner, PE principal,
            FAANG senior PM) can reach $500K–$2M+ at the 10-year mark, but these are tail outcomes.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            For most MBA students, the realistic question is whether the salary delta — the difference between
            what you would earn without the degree vs. with it — is large enough to boost your salary
            sufficiently to justify the tuition cost and two years of forgone income. The MBA ROI calculator
            models this delta precisely. Career advancement into senior roles (VP, Director, Partner) is the
            long-term mechanism through which the MBA delivers higher salary and earning potential; the first-year
            salary is just the starting point.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Signing bonuses (typically $5,000–$30,000 for MBA roles in consulting and banking) are excluded
            from base salary figures above but meaningfully reduce payback period in the first year. For a
            full return on investment analysis including loan repayment, forgone income, and salary growth
            over time, use the MBA ROI calculator below.
          </p>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 pt-8 text-center text-slate-500 text-xs space-y-2">
          <p>
            <Link href="/mba-roi-calculator" className="hover:text-slate-300 transition-colors">MBA ROI Calculator</Link>
            {" · "}
            <Link href="/mba-roi-report-2026" className="hover:text-slate-300 transition-colors">2026 Report</Link>
            {" · "}
            <Link href="/mba-salary-increase" className="hover:text-slate-300 transition-colors">Salary Increase Guide</Link>
            {" · "}
            <Link href="/average-mba-salary" className="hover:text-slate-300 transition-colors">Average MBA Salary</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
          <p className="mt-1">Salary data sourced from GMAC surveys, school employment reports, Glassdoor, Levels.fyi, and publicly reported compensation figures. All ranges are estimates; individual outcomes vary.</p>
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
    </main>
  )
}
