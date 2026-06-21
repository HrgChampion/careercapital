import Link from "next/link"
import { pageAlternates, articleSchema, breadcrumbSchema } from "@/lib/seo"

export const metadata = {
  title: "MBA Jobs That Pay $200K or More (2026): IB, PE, MBB & Tech Roles",
  description:
    "MBA jobs paying $200K+: investment banking $275K–$350K, MBB consulting $212K–$232K, private equity $300K–$500K, tech PM $200K–$280K. Full list by role, firm, and school tier. Updated June 2026.",
  alternates: pageAlternates("https://careerreturns.com/mba-jobs-200k"),
  openGraph: {
    title: "MBA Jobs That Pay $200K or More (2026): IB, PE, MBB & Tech Roles",
    description:
      "MBA jobs paying $200K+: investment banking $275K–$350K, MBB consulting $212K–$232K, private equity $300K–$500K, tech PM $200K–$280K. Full list by role, firm, and school tier.",
    url: "https://careerreturns.com/mba-jobs-200k",
    siteName: "CareerReturns",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MBA Jobs That Pay $200K or More (2026)",
    description: "IB $275K–$350K, MBB $232K, PE $300K–$500K, tech PM $200K–$280K. Full breakdown by role and firm.",
  },
}

const _articleSchema = articleSchema({
  title: "MBA Jobs That Pay $200K or More (2026): IB, PE, MBB & Tech Roles",
  description: "Complete guide to MBA jobs paying $200K or more in 2026, including investment banking, private equity, MBB consulting, and tech product management roles.",
  url: "https://careerreturns.com/mba-jobs-200k",
  datePublished: "2026-06-21",
  dateModified: "2026-06-21",
})

const _breadcrumbSchema = breadcrumbSchema([
  { name: "MBA Jobs That Pay $200K+", url: "https://careerreturns.com/mba-jobs-200k" },
])

const jobsData = [
  {
    category: "Investment Banking",
    roles: [
      { role: "IB Associate (Bulge Bracket)", firms: "Goldman Sachs, JPMorgan, Morgan Stanley", base: "$200K–$210K", bonus: "$75K–$150K", total: "$275K–$360K", school: "M7 preferred" },
      { role: "IB Associate (Elite Boutique)", firms: "Evercore, Lazard, Moelis", base: "$195K–$205K", bonus: "$70K–$130K", total: "$265K–$335K", school: "M7 / T15" },
      { role: "IB Associate (Middle Market)", firms: "Jefferies, RBC, Houlihan Lokey", base: "$185K–$195K", bonus: "$50K–$90K", total: "$235K–$285K", school: "T25+" },
    ],
    color: "blue",
  },
  {
    category: "Private Equity",
    roles: [
      { role: "PE Associate (Mega-Fund)", firms: "Blackstone, KKR, Apollo, Carlyle", base: "$200K–$225K", bonus: "$150K–$300K+", total: "$350K–$525K+", school: "M7 required" },
      { role: "PE Associate (Mid-Market)", firms: "TA Associates, General Atlantic", base: "$175K–$200K", bonus: "$75K–$150K", total: "$250K–$350K", school: "M7 / T15" },
    ],
    color: "violet",
  },
  {
    category: "MBB Consulting",
    roles: [
      { role: "Associate / Consultant (McKinsey)", firms: "McKinsey & Company", base: "$192K", bonus: "$20K–$37K + $30K signing", total: "$222K–$260K", school: "M7 preferred" },
      { role: "Associate Consultant (Bain)", firms: "Bain & Company", base: "$190K", bonus: "$19K–$36K + $30K signing", total: "$219K–$256K", school: "M7 preferred" },
      { role: "Consultant (BCG)", firms: "Boston Consulting Group", base: "$190K", bonus: "$19K–$36K + $30K signing", total: "$219K–$256K", school: "M7 preferred" },
    ],
    color: "indigo",
  },
  {
    category: "Tech (Product & Strategy)",
    roles: [
      { role: "Senior PM (FAANG)", firms: "Google, Meta, Apple, Amazon", base: "$180K–$220K", bonus: "$20K–$40K + RSU $60K–$150K/yr", total: "$260K–$410K total comp", school: "T15+ helpful" },
      { role: "Product Manager (FAANG)", firms: "Google, Meta, Microsoft", base: "$165K–$190K", bonus: "$20K–$35K + RSU $40K–$80K/yr", total: "$225K–$305K total comp", school: "T15+ helpful" },
      { role: "Strategy & Ops (Tech)", firms: "Stripe, Airbnb, Uber, LinkedIn", base: "$160K–$185K", bonus: "$20K–$35K + equity", total: "$200K–$260K total comp", school: "T25+" },
    ],
    color: "teal",
  },
  {
    category: "Hedge Funds & Asset Management",
    roles: [
      { role: "Investment Analyst (Hedge Fund)", firms: "Citadel, Millennium, Point72", base: "$200K–$250K", bonus: "$100K–$500K+", total: "$300K–$750K+", school: "M7 required" },
      { role: "Associate (Asset Management)", firms: "BlackRock, Vanguard, Fidelity", base: "$155K–$185K", bonus: "$40K–$90K", total: "$195K–$275K", school: "M7 / T15" },
    ],
    color: "amber",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What MBA jobs pay $200K or more?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MBA jobs paying $200K+ include: investment banking associates at bulge bracket firms ($275K–$360K total comp), MBB consulting associates ($222K–$260K), private equity associates at mega-funds ($350K–$525K+), FAANG product managers ($225K–$410K including equity), and hedge fund analysts ($300K–$750K+). Reaching $200K+ in year one requires an M7 or T15 MBA in most cases.",
      },
    },
    {
      "@type": "Question",
      name: "What is the highest-paying MBA career?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Private equity and hedge funds are the highest-paying MBA careers in terms of total compensation potential. Mega-fund PE associates can earn $350K–$525K+ in their first post-MBA year including bonuses. Investment banking at Goldman Sachs pays $360K in year one. Over a 10-year horizon, successful PE partners and hedge fund managers can earn $1M–$10M+ annually.",
      },
    },
    {
      "@type": "Question",
      name: "Do you need an M7 MBA to get a $200K+ job?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For investment banking (bulge bracket) and private equity, an M7 MBA is strongly preferred. MBB consulting firms (McKinsey, Bain, BCG) recruit primarily from M7 programs. FAANG tech roles are more accessible from T15-T25 programs. For general management roles, a $200K+ salary typically requires 5+ post-MBA years regardless of school tier.",
      },
    },
    {
      "@type": "Question",
      name: "How many MBA graduates earn $200K in their first year?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Approximately 30–40% of M7 MBA graduates earn $200K+ total compensation in their first post-MBA year, primarily those entering investment banking, MBB consulting, and FAANG tech roles. At T15 programs, this figure drops to 15–20%. At T25 and regional programs, under 5% of graduates reach $200K in their first year.",
      },
    },
    {
      "@type": "Question",
      name: "What MBA job has the best work-life balance at $200K+?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Among $200K+ MBA careers, MBB consulting and FAANG tech product management offer the best work-life balance. Consulting averages 55–65 hours/week with predictable travel patterns and structured career progression. FAANG PM roles average 45–55 hours/week with strong benefits and remote flexibility. Investment banking and private equity command the highest salaries but require 70–90+ hours/week.",
      },
    },
  ],
}

export default function MbaJobs200kPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-indigo-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12 sm:space-y-16">

        <header className="space-y-5">
          <div className="flex items-center gap-4 flex-wrap">
            <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">CareerReturns · MBA Career Outcomes</p>
            <p className="text-xs text-slate-500">Updated <time dateTime="2026-06-21">June 2026</time> · CareerReturns Research Team</p>
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            MBA Jobs That Pay<br />
            <span className="text-indigo-400">$200K or More (2026)</span>
          </h1>
          <p className="text-slate-400 leading-relaxed">
            A first-year post-MBA salary of $200K+ is achievable — but only in specific roles, at specific firms,
            from specific programs. Here is every MBA career path that crosses $200K in year one, with exact comp data
            for 2026.
          </p>
          <div className="flex flex-wrap gap-3 text-xs">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">IB: $275K–$360K</span>
            <span className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">PE: $350K–$525K+</span>
            <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">MBB: $222K–$260K</span>
            <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20">FAANG: $225K–$410K</span>
          </div>
        </header>

        {/* Job tables by category */}
        {jobsData.map((category) => (
          <section key={category.category} className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">{category.category}</h2>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left px-4 py-3 text-slate-400 font-medium">Role</th>
                    <th className="text-left px-4 py-3 text-slate-400 font-medium hidden sm:table-cell">Firms</th>
                    <th className="text-left px-4 py-3 text-slate-400 font-medium">Base</th>
                    <th className="text-left px-4 py-3 text-slate-400 font-medium hidden md:table-cell">Bonus</th>
                    <th className="text-left px-4 py-3 text-slate-400 font-medium">Total Comp</th>
                  </tr>
                </thead>
                <tbody>
                  {category.roles.map((row, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 text-white font-medium">
                        {row.role}
                        <p className="text-slate-500 text-xs font-normal mt-0.5">{row.school}</p>
                      </td>
                      <td className="px-4 py-3 text-slate-400 hidden sm:table-cell">{row.firms}</td>
                      <td className="px-4 py-3 text-slate-300">{row.base}</td>
                      <td className="px-4 py-3 text-slate-400 hidden md:table-cell">{row.bonus}</td>
                      <td className="px-4 py-3 text-green-400 font-semibold">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}

        {/* Which programs get you there */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Which MBA Programs Get You to $200K+?</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The path to a $200K+ first-year salary is largely determined by two factors: program tier and target
            industry. For investment banking and private equity, on-campus recruiting at bulge bracket firms is
            concentrated at M7 programs. MBB consulting firms recruit primarily from M7 but have expanded to select
            T15 programs. FAANG and tech roles are more accessible across T15–T25 programs.
          </p>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="text-left px-4 py-3 text-slate-400 font-medium">Program Tier</th>
                  <th className="text-left px-4 py-3 text-slate-400 font-medium">% Earning $200K+ (Year 1)</th>
                  <th className="text-left px-4 py-3 text-slate-400 font-medium">Primary Paths</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { tier: "M7 (HBS, Wharton, Booth, etc.)", pct: "35–45%", paths: "IB, PE, MBB, FAANG" },
                  { tier: "T15 (Tuck, Fuqua, Ross, etc.)", pct: "15–20%", paths: "MBB (select offices), IB, Tech" },
                  { tier: "T25 (Owen, Mendoza, etc.)", pct: "5–10%", paths: "Tech PM, Regional IB" },
                  { tier: "Online / Part-Time MBA", pct: "<2%", paths: "Promotion within current employer" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 text-white font-medium">{row.tier}</td>
                    <td className="px-4 py-3 text-green-400 font-semibold">{row.pct}</td>
                    <td className="px-4 py-3 text-slate-400">{row.paths}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* The tradeoff: comp vs. hours */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">$200K+ Comes With a Trade-Off: Hours vs. Pay</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { role: "Investment Banking", comp: "$275K–$360K", hours: "70–90 hrs/week", wlb: "Low", note: "Highest absolute pay, lowest flexibility" },
              { role: "Private Equity", comp: "$350K–$525K+", hours: "65–80 hrs/week", wlb: "Low–Moderate", note: "Best long-term upside via carry" },
              { role: "MBB Consulting", comp: "$222K–$260K", hours: "55–65 hrs/week", wlb: "Moderate", note: "Best structured exit options" },
              { role: "FAANG Tech PM", comp: "$225K–$410K", hours: "45–55 hrs/week", wlb: "High", note: "Best work-life balance at $200K+" },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
                <p className="text-white font-semibold text-sm">{item.role}</p>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Total Comp</span>
                    <span className="text-green-400 font-medium">{item.comp}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Weekly Hours</span>
                    <span className="text-slate-300">{item.hours}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Work-Life Balance</span>
                    <span className="text-slate-300">{item.wlb}</span>
                  </div>
                </div>
                <p className="text-slate-500 text-xs">{item.note}</p>
              </div>
            ))}
          </div>
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
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">Model Your Numbers</p>
          <h2 className="text-2xl font-semibold tracking-tight">Calculate If Your Target MBA Gets You to $200K+</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Enter your current salary, target program, and destination industry. The MBA ROI Calculator computes NPV,
            IRR, and break-even — so you know if the investment is worth it before you apply.
          </p>
          <Link
            href="/mba-roi-calculator"
            className="inline-block bg-linear-to-r from-indigo-600 to-violet-600 hover:opacity-90 transition-all px-8 py-4 rounded-xl font-medium text-white text-base shadow-[0_0_40px_rgba(99,102,241,0.3)]"
          >
            Open MBA ROI Calculator →
          </Link>
        </section>

        {/* Related Guides */}
        <section className="border-t border-white/10 pt-10 mt-10">
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-5">Related Guides</p>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link href="/mba-investment-banking-salary" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/8 hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">$</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">MBA IB Salary 2026</p>
                <p className="text-slate-500 text-xs">Goldman $360K · JPM $320K · MS $315K →</p>
              </div>
            </Link>
            <Link href="/post-mba-salary" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/8 hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">≈</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">Post-MBA Salary Guide</p>
                <p className="text-slate-500 text-xs">All industries + cities + school tiers →</p>
              </div>
            </Link>
            <Link href="/mba-roi-mckinsey" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/8 hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">↗</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">McKinsey MBA ROI</p>
                <p className="text-slate-500 text-xs">IRR, break-even & placement data →</p>
              </div>
            </Link>
            <Link href="/mba-salary-by-school" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/8 hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">↓</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">MBA Salary by School</p>
                <p className="text-slate-500 text-xs">Stanford $210K → Online $65K →</p>
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
            <Link href="/post-mba-salary" className="hover:text-slate-300 transition-colors">Post-MBA Salary</Link>
            {" · "}
            <Link href="/mba-investment-banking-salary" className="hover:text-slate-300 transition-colors">IB Salary</Link>
            {" · "}
            <Link href="/mba-salary-by-school" className="hover:text-slate-300 transition-colors">Salary by School</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
          <p className="mt-1">Salary data sourced from GMAC Employment Report, school placement reports, Glassdoor, Levels.fyi, Wall Street Oasis, and industry compensation surveys. All figures are estimates; individual outcomes vary.</p>
        </footer>

      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_breadcrumbSchema) }} />

    </main>
  )
}
