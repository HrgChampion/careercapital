import Link from "next/link"
import { pageAlternates } from "@/lib/seo"

export const metadata = {
  title: "MBA Investment Banking Salary 2026: Associate Pay at Goldman, JPM & MS",
  description:
    "Post-MBA investment banking associate salary 2026: $190K–$210K base + $75K–$150K bonus at Goldman Sachs, JPMorgan, Morgan Stanley. Full comp breakdown →",
  openGraph: {
    title: "MBA Investment Banking Salary 2026: Associate Pay at Goldman, JPM & MS",
    description:
      "Post-MBA IB associate pay at bulge bracket banks: $265K–$360K total comp Year 1. Base, bonus, stub year math. Is IB worth the MBA cost? Full data →",
    url: "https://careerreturns.com/mba-investment-banking-salary",
    siteName: "CareerReturns",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: pageAlternates("https://careerreturns.com/mba-investment-banking-salary"),
}

const bankSalaryData = [
  { bank: "Goldman Sachs", base: "$210K", bonus: "$150K", total: "$360K", tier: "Bulge Bracket" },
  { bank: "JPMorgan Chase", base: "$200K", bonus: "$120K", total: "$320K", tier: "Bulge Bracket" },
  { bank: "Morgan Stanley", base: "$200K", bonus: "$115K", total: "$315K", tier: "Bulge Bracket" },
  { bank: "Bank of America", base: "$195K", bonus: "$100K", total: "$295K", tier: "Bulge Bracket" },
  { bank: "Citigroup", base: "$195K", bonus: "$95K", total: "$290K", tier: "Bulge Bracket" },
  { bank: "Barclays", base: "$190K", bonus: "$90K", total: "$280K", tier: "Bulge Bracket" },
  { bank: "Deutsche Bank", base: "$185K", bonus: "$85K", total: "$270K", tier: "Bulge Bracket" },
  { bank: "Credit Suisse / UBS", base: "$190K", bonus: "$90K", total: "$280K", tier: "Bulge Bracket" },
  { bank: "Lazard / Evercore / PJT", base: "$205K", bonus: "$130K", total: "$335K", tier: "Elite Boutique" },
  { bank: "Boutique Banks", base: "$170K", bonus: "$70K", total: "$240K", tier: "Boutique" },
]

const careerProgression = [
  { stage: "Year 1–2", title: "Associate", comp: "$265K–$360K", notes: "Post-MBA entry; stub year in first partial year. Bonus guaranteed at most BBs." },
  { stage: "Year 3–4", title: "Vice President", comp: "$350K–$600K", notes: "Deal execution ownership. Bonus becomes fully discretionary and deal-flow dependent." },
  { stage: "Year 5–7", title: "Director / Executive Director", comp: "$500K–$900K", notes: "Client relationship accountability begins. Significant leverage from deal volume." },
  { stage: "Year 8+", title: "Managing Director", comp: "$800K–$2M+", notes: "Revenue responsibility. Carry, deal fees, and platform equity can push comp far beyond cash." },
]

const mbaTargeting = [
  {
    bank: "Goldman Sachs",
    targets: ["Harvard Business School", "Wharton", "Columbia Business School", "Booth"],
    note: "On-campus recruiting is heavily weighted toward HBS and Wharton. Columbia has a strong NYC proximity advantage.",
  },
  {
    bank: "JPMorgan Chase",
    targets: ["Harvard Business School", "Wharton", "Stern (strong local presence)"],
    note: "NYU Stern benefits from JPM's NYC headquarters. Wharton historically produces the largest class of JPM associates.",
  },
  {
    bank: "Morgan Stanley",
    targets: ["Harvard Business School", "Wharton", "Columbia Business School"],
    note: "Columbia's core finance recruiting pipeline feeds heavily into MS. HBS and Wharton account for the majority of associate-level hires.",
  },
]

const faqItems = [
  {
    question: "What is the MBA investment banking salary in 2026?",
    answer:
      "Post-MBA investment banking associates at bulge bracket banks earn $190K–$210K base salary in 2026, with year-end bonuses of $75K–$150K, for total Year 1 compensation of $265K–$360K. Goldman Sachs pays the highest total comp at approximately $360K Year 1 ($210K base + $150K bonus). Elite boutiques such as Evercore, Lazard, and PJT Partners pay $205K base + $130K bonus = ~$335K.",
  },
  {
    question: "How much do investment banking associates make after an MBA?",
    answer:
      "Investment banking associates with an MBA earn $190K–$210K in base salary at bulge bracket banks, plus a year-one bonus of $75K–$150K depending on the bank and year-end performance. Total first-year compensation ranges from $265K at smaller boutiques to $360K at Goldman Sachs. By Year 3–4 at the VP level, total comp rises to $350K–$600K.",
  },
  {
    question: "What is the bonus for MBA investment banking associates?",
    answer:
      "Year 1 bonuses for post-MBA IB associates range from $70K at boutique banks to $150K at Goldman Sachs. Most bulge bracket banks guarantee a first-year bonus for associates who start in the summer after MBA graduation, though the amount varies by firm performance and the associate's start date. The stub-year bonus — paid in the first partial calendar year — is typically 50–60% of a full-year bonus.",
  },
  {
    question: "Which banks pay the most for MBA associates?",
    answer:
      "Goldman Sachs pays the highest total compensation for MBA associates at approximately $360K Year 1 ($210K base + $150K bonus). Elite boutiques — Lazard, Evercore, PJT Partners, and Centerview — pay $335K–$350K Year 1. JPMorgan and Morgan Stanley pay $315K–$320K. Bank of America and Citigroup pay $290K–$295K. Boutique banks without named prestige pay $240K or less.",
  },
  {
    question: "Is investment banking worth doing an MBA for?",
    answer:
      "Investment banking is one of the strongest financial cases for an MBA. At an M7 MBA with $350K total economic cost, the Year 1 salary delta versus a pre-MBA salary of ~$90K is approximately $120K–$270K per year depending on bonus. Break-even is approximately 3.5–4.5 years when bonuses are included. The 10-year NPV ranges from $280K to $380K net of MBA cost. However, the ROI case assumes successful placement at a bulge bracket or elite boutique, which is concentrated at M7 programs.",
  },
  {
    question: "What is the 10-year salary trajectory in investment banking after an MBA?",
    answer:
      "Post-MBA investment banking salary trajectories: Year 1–2 Associate: $265K–$360K total comp. Year 3–4 VP: $350K–$600K. Year 5–7 Director/Executive Director: $500K–$900K. Year 8+ Managing Director: $800K–$2M+. Associates who exit to private equity after 2–4 years can access carry distributions that push 10-year total earnings well above the base banking trajectory. Approximately 30–50% of top MBA IB associates exit to PE within the first four years.",
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

export default function MbaInvestmentBankingSalaryPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-blue-600/15 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12 sm:space-y-20">

        {/* ── Hero ── */}
        <header className="space-y-5">
          <p className="text-xs font-medium text-blue-400 uppercase tracking-widest">CareerReturns · MBA Salary Data</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            MBA Investment Banking Salary 2026
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Post-MBA investment banking associates earn some of the highest starting compensation of any MBA
            career track. Here is the full 2026 breakdown by bank, bonus structure, stub year math, and
            10-year career trajectory.
          </p>

          {/* Quick answer box */}
          <div className="bg-blue-500/10 border border-blue-500/25 rounded-2xl p-6 space-y-3">
            <p className="text-xs font-medium text-blue-400 uppercase tracking-widest">Quick Answer — 2026</p>
            <p className="text-white text-xl font-semibold">
              $190K–$210K base &nbsp;|&nbsp; $75K–$150K bonus &nbsp;|&nbsp; $265K–$360K total comp Year 1
            </p>
            <p className="text-slate-400 text-sm">
              Goldman Sachs pays top-of-market at ~$360K Year 1. Elite boutiques (Evercore, Lazard, PJT) pay
              ~$335K. Bulge bracket median is approximately $295K–$320K.
            </p>
          </div>
        </header>

        {/* ── Salary by Bank Table ── */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">MBA Investment Banking Salary by Bank (2026)</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            All figures represent post-MBA associate Year 1 total cash compensation. Base salaries are fixed;
            bonus figures reflect the typical first-year range for associates who start in the summer following
            MBA graduation. Bonuses paid in the stub year (first partial calendar year) are typically 50–60%
            of the full-year figure shown.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 text-left">
                  <th className="pb-3 pr-4 font-medium">Bank</th>
                  <th className="pb-3 pr-4 font-medium">Tier</th>
                  <th className="pb-3 pr-4 font-medium">Base</th>
                  <th className="pb-3 pr-4 font-medium">Y1 Bonus</th>
                  <th className="pb-3 font-medium text-emerald-400">Total Y1</th>
                </tr>
              </thead>
              <tbody>
                {bankSalaryData.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02]">
                    <td className="py-3 pr-4 text-white font-medium">{row.bank}</td>
                    <td className="py-3 pr-4">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        row.tier === "Elite Boutique"
                          ? "bg-indigo-500/15 text-indigo-300"
                          : row.tier === "Boutique"
                          ? "bg-slate-500/20 text-slate-400"
                          : "bg-blue-500/15 text-blue-300"
                      }`}>{row.tier}</span>
                    </td>
                    <td className="py-3 pr-4 text-slate-300">{row.base}</td>
                    <td className="py-3 pr-4 text-slate-300">{row.bonus}</td>
                    <td className="py-3 text-emerald-400 font-semibold">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-xs">
            Source: Glassdoor, Wall Street Oasis, school employment reports, and industry comp surveys.
            Bonus figures are Year 1 full-year equivalents. Actual stub-year bonus varies by start date.
          </p>
        </section>

        {/* ── Stub Year Math ── */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Stub Year Math: Your First Partial Year</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Most MBA graduates start their investment banking associate role in late June or July. Banks pay
            bonuses in January for the prior calendar year. This means your first bonus — your &quot;stub year
            bonus&quot; — covers only 5–6 months of work, not a full year.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5">
            <p className="text-xs font-medium text-blue-400 uppercase tracking-widest">Stub Year Scenario: JPMorgan Associate</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
              <div className="space-y-3">
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Start Date</p>
                  <p className="text-white font-medium">July 1, 2026</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Base Salary (annualized)</p>
                  <p className="text-white font-medium">$200,000 / year</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Earned Through Dec 31</p>
                  <p className="text-white font-medium">~$100,000 (6 months)</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Full-Year Bonus (reference)</p>
                  <p className="text-white font-medium">$120,000</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Stub Bonus (Jan payout)</p>
                  <p className="text-white font-medium">~$60,000–$72,000</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Total Calendar Year Earnings</p>
                  <p className="text-emerald-400 font-semibold">~$160,000–$172,000</p>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 pt-4">
              <p className="text-slate-400 text-xs leading-relaxed">
                Your second year (Jan 2027 – Dec 2027) is the first full calendar year: $200K base + $120K
                full-year bonus = $320K. Financial planning should account for the compressed stub-year cash
                flow in Year 1, particularly for associates managing MBA loan repayment schedules.
              </p>
            </div>
          </div>
        </section>

        {/* ── 10-Year Career Progression ── */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">10-Year Career Progression: Investment Banking After an MBA</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Investment banking has one of the most structured promotion tracks in finance. The MBA associate
            path to Managing Director typically spans 8–12 years, with compensation growing dramatically at
            each level as deal responsibility and client relationships increase.
          </p>
          <div className="space-y-3">
            {careerProgression.map(({ stage, title, comp, notes }) => (
              <div key={stage} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div>
                    <p className="text-white font-semibold text-sm">{stage} — {title}</p>
                  </div>
                  <p className="text-emerald-400 font-semibold text-sm">{comp}</p>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{notes}</p>
              </div>
            ))}
          </div>
          <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5">
            <p className="text-indigo-200 text-sm leading-relaxed">
              <span className="font-semibold text-white">PE exit trajectory:</span> Associates who exit to
              private equity after 2–4 years (the &quot;2-and-out&quot; path) access carry distributions that can
              add $500K–$3M+ over a 10-year horizon at upper-middle-market and large-cap funds. This upside
              is not reflected in the IB promotion track above but is the primary reason the 10-year NPV of
              an IB MBA is often underestimated.
            </p>
          </div>
        </section>

        {/* ── MBA ROI Calculation ── */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">MBA ROI for Investment Banking: Is IB Worth the MBA Cost?</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Investment banking produces one of the clearest financial cases for an MBA — but the math depends
            heavily on your pre-MBA salary, school cost, and whether you successfully place at a bulge bracket
            or elite boutique. Here is the base-case scenario for an M7 MBA targeting IB.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5">
            <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">Base Case: M7 MBA → Bulge Bracket Associate</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
              <div className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">M7 MBA Total Economic Cost</p>
                    <p className="text-white font-medium">$350,000</p>
                    <p className="text-slate-500 text-xs mt-0.5">Tuition + living expenses + forgone income (2 yrs at ~$90K)</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Pre-MBA Salary</p>
                    <p className="text-white font-medium">~$90,000 / year</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Post-MBA Y1 Total Comp</p>
                    <p className="text-white font-medium">$320,000 (JPMorgan base case)</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Annual Salary Delta (base only)</p>
                  <p className="text-blue-400 font-semibold">+$110,000 / year</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Annual Cash Delta (base + bonus)</p>
                  <p className="text-blue-400 font-semibold">+$230,000 / year</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Break-Even Timeline</p>
                  <p className="text-emerald-400 font-semibold">~4.5 years (base only) / ~3.2 years (incl. bonus)</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">10-Year NPV (net of MBA cost)</p>
                  <p className="text-emerald-400 font-semibold">$280K–$380K</p>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 pt-4 space-y-2">
              <p className="text-slate-400 text-xs leading-relaxed">
                The NPV figure above uses a 10% discount rate applied to the base + bonus delta stream, net of
                the $350K total economic cost. It does not include the PE exit optionality, which — if realized
                — adds $500K–$3M+ in carried interest over the same horizon. Run your specific numbers in the{" "}
                <Link href="/mba-roi-calculator" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">
                  MBA ROI calculator
                </Link>.
              </p>
            </div>
          </div>

          {/* ROI caveat cards */}
          <div className="space-y-3">
            {[
              {
                title: "When the IB ROI case weakens",
                body: "The base case assumes successful BB placement — which is concentrated at M7 programs. Candidates from T15 programs face harder access, and boutique placements produce $240K Year 1 versus $295K–$360K at BBs. Pre-MBA IB analysts transitioning to associate roles also see a narrower salary delta.",
              },
              {
                title: "Hours are not priced into the model",
                body: "IB associates routinely work 80–100 hours per week. The financial model captures cash compensation but not the time cost of that schedule. Many associates leave banking within 2–3 years, often to roles with lower compensation and better lifestyle. The ROI model is strongest for candidates who plan to stay in banking or target PE exit.",
              },
              {
                title: "Bonus is not guaranteed",
                body: "While first-year bonuses have become structurally guaranteed at most major banks, the amounts are firm-performance-dependent. Model the midpoint of the bonus range in your base case, not the top end. Use the full range only as an upside scenario.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-white font-semibold text-sm">{title}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── MBA Programs That Place Into Top Banks ── */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Which MBA Programs Place Into Investment Banking?</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            On-campus IB recruiting is highly concentrated at a small number of programs. The schools below
            have formal on-campus recruiting relationships with the listed banks, resulting in structured
            interview processes and a meaningful percentage of the class entering IB each year.
          </p>
          <div className="space-y-4">
            {mbaTargeting.map(({ bank, targets, note }) => (
              <div key={bank} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
                <p className="text-white font-semibold text-sm">{bank}</p>
                <div className="flex flex-wrap gap-2">
                  {targets.map((school) => (
                    <span key={school} className="text-xs bg-blue-500/15 text-blue-300 border border-blue-500/20 px-2.5 py-1 rounded-full">
                      {school}
                    </span>
                  ))}
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <p className="text-slate-400 text-sm leading-relaxed">
              <span className="text-white font-medium">What about non-M7 programs?</span> Candidates from
              T15 programs — NYU Stern, Ross, Darden — can and do land BB associate roles, but the on-campus
              recruiting footprint is smaller and the competition is more concentrated on a handful of offers.
              Middle market banks (Jefferies, Baird, Houlihan Lokey, William Blair) recruit more broadly
              beyond M7 programs. The salary differential between BB and MM is approximately $40K–$80K Year 1.
            </p>
          </div>
        </section>

        {/* ── FAQ Section ── */}
        <section className="space-y-5">
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
          <p className="text-xs font-medium text-blue-400 uppercase tracking-widest">Model Your Numbers</p>
          <h2 className="text-2xl font-semibold tracking-tight">Calculate Your IB MBA ROI</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Enter your pre-MBA salary, target bank and comp range, total program cost, and loan structure to
            get your personal NPV, IRR, and break-even date.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/mba-roi-calculator"
              className="inline-block bg-linear-to-r from-blue-600 to-indigo-600 hover:opacity-90 transition-all px-8 py-4 rounded-xl font-medium text-white text-base shadow-[0_0_40px_rgba(37,99,235,0.3)]"
            >
              Open MBA ROI Calculator →
            </Link>
            <Link
              href="/salary-benchmark-calculator"
              className="inline-block bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all px-8 py-4 rounded-xl font-medium text-white text-base"
            >
              Salary Benchmark Calculator →
            </Link>
          </div>
        </section>

        {/* ── Related Guides ── */}
        <section className="border-t border-white/10 pt-10 mt-10">
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-5">Related Guides</p>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link href="/mba-roi-investment-banking" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">$</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">MBA ROI: Investment Banking</p>
                <p className="text-slate-500 text-xs">Break-even math & PE exit optionality →</p>
              </div>
            </Link>
            <Link href="/mba-roi-goldman-sachs" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">↗</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">MBA ROI: Goldman Sachs</p>
                <p className="text-slate-500 text-xs">GS associate pay & HBS placement →</p>
              </div>
            </Link>
            <Link href="/post-mba-salary" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-blue-400 font-mono text-lg">≈</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">Post-MBA Salary Guide</p>
                <p className="text-slate-500 text-xs">Full comp data by industry & city →</p>
              </div>
            </Link>
            <Link href="/mba-salary" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-blue-400 font-mono text-lg">Σ</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">Average MBA Salary</p>
                <p className="text-slate-500 text-xs">$175K M7 median — all tracks →</p>
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
            <Link href="/mba-roi-investment-banking" className="hover:text-slate-300 transition-colors">MBA ROI: Investment Banking</Link>
            {" · "}
            <Link href="/post-mba-salary" className="hover:text-slate-300 transition-colors">Post-MBA Salary</Link>
            {" · "}
            <Link href="/mba-salary" className="hover:text-slate-300 transition-colors">Average MBA Salary</Link>
            {" · "}
            <Link href="/mba-roi-goldman-sachs" className="hover:text-slate-300 transition-colors">MBA ROI: Goldman Sachs</Link>
            {" · "}
            <Link href="/salary-benchmark-calculator" className="hover:text-slate-300 transition-colors">Salary Benchmark Calculator</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
          <p className="mt-1">
            Salary data sourced from Glassdoor, Wall Street Oasis, GMAC Employment Report 2024, school-published
            placement reports, and industry compensation surveys. All figures are estimates; individual outcomes vary.
          </p>
        </footer>

      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

    </main>
  )
}
