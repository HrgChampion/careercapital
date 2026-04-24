import Link from "next/link"
import { pageAlternates, articleSchema, breadcrumbSchema } from "@/lib/seo"

const _articleSchema = articleSchema({
  title: "MBA ROI 2026: IRR, NPV & Break-Even by Industry [Guide]",
  description: "MBA ROI in 2026: IRR by industry (4%–55%), break-even periods, scholarship impact, online vs full-time comparison, and US vs Europe data.",
  url: "https://careerreturns.com/mba-roi",
  datePublished: "2026-03-09",
  dateModified: "2026-03-24",
})
const _breadcrumbSchema = breadcrumbSchema([{ name: "MBA ROI Guide", url: "https://careerreturns.com/mba-roi" }])

export const metadata = {
  title: "MBA ROI 2026: IRR, NPV & Break-Even by Industry [Guide]",
  description:
    "MBA ROI in 2026: IRR by industry (4%–55%), break-even periods, scholarship impact, online vs full-time comparison, and US vs Europe data. See full guide →",
  alternates: pageAlternates("https://careerreturns.com/mba-roi"),
}

const roiTable = [
  { industry: "Management Consulting (MBB)", irr: "22–40%", breakEven: "4.2–4.7 yrs", npv10yr: "+$186k–$341k", verdict: "Strong", color: "text-emerald-400" },
  { industry: "Investment Banking (Bulge Bracket)", irr: "21–38%", breakEven: "4.5–5.0 yrs", npv10yr: "+$170k–$320k", verdict: "Strong", color: "text-emerald-400" },
  { industry: "Private Equity / Venture Capital", irr: "23–41%", breakEven: "3.9–4.4 yrs", npv10yr: "+$200k–$360k", verdict: "Strong", color: "text-emerald-400" },
  { industry: "Technology (FAANG / Tier-1)", irr: "16–30%", breakEven: "6.1–7.0 yrs", npv10yr: "+$98k–$253k", verdict: "Moderate", color: "text-amber-400" },
  { industry: "Energy / Oil & Gas", irr: "17–31%", breakEven: "5.7–6.5 yrs", npv10yr: "+$110k–$240k", verdict: "Moderate", color: "text-amber-400" },
  { industry: "Real Estate / Infrastructure", irr: "16–30%", breakEven: "5.9–6.8 yrs", npv10yr: "+$100k–$230k", verdict: "Moderate", color: "text-amber-400" },
  { industry: "Healthcare / Biotech Management", irr: "15–28%", breakEven: "6.2–7.2 yrs", npv10yr: "+$90k–$210k", verdict: "Moderate", color: "text-amber-400" },
  { industry: "Big 4 Consulting / Advisory", irr: "14–26%", breakEven: "6.8–8.0 yrs", npv10yr: "+$75k–$180k", verdict: "Weak", color: "text-orange-400" },
  { industry: "Consumer Goods / CPG", irr: "12–22%", breakEven: "7.8–9.2 yrs", npv10yr: "+$55k–$140k", verdict: "Weak", color: "text-orange-400" },
  { industry: "Media / Entertainment", irr: "9–18%", breakEven: "9.4–11.0 yrs", npv10yr: "+$30k–$90k", verdict: "Weak", color: "text-orange-400" },
  { industry: "Military / Government (with GI Bill)", irr: "28–55%", breakEven: "2.0–3.5 yrs", npv10yr: "+$350k–$600k", verdict: "Exceptional (veterans)", color: "text-blue-400" },
  { industry: "Nonprofit / Government (civilian)", irr: "4–14%", breakEven: "9.4–13.1 yrs", npv10yr: "–$20k to +$80k", verdict: "Negative at sticker", color: "text-red-400" },
]

export default function MbaRoiPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-emerald-600/12 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12 sm:space-y-20">

        <header className="space-y-5">
          <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest">CareerReturns · MBA ROI Hub</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            MBA ROI (2026):<br />
            <span className="text-slate-400">The Complete Financial Analysis</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Return on investment for an MBA varies from 4% to 55% depending on industry, school tier,
            scholarship aid, and program type. This guide covers every variable with real data — so you can
            model your specific scenario before committing $200,000–$415,000.
          </p>
          <div className="flex items-center gap-3 pt-1 border-t border-white/8">
            <div className="w-7 h-7 rounded-full bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
              <span className="text-emerald-400 text-xs font-semibold">HG</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-white font-medium">Himanshu Gauba</span>
              <span className="text-slate-600 text-xs">·</span>
              <span className="text-slate-500 text-xs">Updated March 24, 2026</span>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "IRR Range", value: "4–55%" },
              { label: "Break-Even Range", value: "2–13 yrs" },
              { label: "Industries Covered", value: "12" },
              { label: "Salary Delta Range", value: "$35k–$90k/yr" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <p className="text-emerald-400 font-semibold text-lg">{value}</p>
                <p className="text-slate-500 text-xs mt-1">{label}</p>
              </div>
            ))}
          </div>
        </header>

        {/* ROI by industry */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">MBA ROI by Destination Industry (2026): All 12 Tracks</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Destination industry is the single largest driver of MBA ROI — more than school tier, program cost,
            or scholarship aid. The table below shows IRR, break-even, and 10-year NPV ranges for every major
            career track. Ranges reflect no-scholarship vs. full-scholarship scenarios.
          </p>
          <div className="space-y-2">
            {roiTable.map(({ industry, irr, breakEven, npv10yr, verdict, color }) => (
              <div key={industry} className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <p className="text-white font-semibold text-sm">{industry}</p>
                  <p className={`${color} text-xs font-semibold`}>{verdict}</p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div><p className="text-slate-500 mb-0.5">IRR</p><p className={color}>{irr}</p></div>
                  <div><p className="text-slate-500 mb-0.5">Break-Even</p><p className="text-slate-300">{breakEven}</p></div>
                  <div><p className="text-slate-500 mb-0.5">10-yr NPV</p><p className="text-slate-300">{npv10yr}</p></div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs">IRR and NPV modeled at 10% discount rate, 10-year horizon. IRR range = no scholarship to full scholarship scenarios.</p>
        </section>

        {/* The 4 variables */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">The 4 Variables That Determine Your MBA ROI</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            MBA ROI is not a single number. It is a function of four inputs — each with its own guide below.
          </p>
          <div className="space-y-3">
            {[
              {
                variable: "1. Destination Industry",
                impact: "Largest lever. Accounts for 60–70% of ROI variance.",
                delta: "Consulting: +$115k/yr delta. Nonprofit: +$35k/yr delta.",
                link: "/mba-roi-consulting",
                linkText: "See consulting ROI →",
                color: "text-emerald-400",
              },
              {
                variable: "2. Scholarship Aid",
                impact: "Second-largest lever. 50% scholarship raises IRR from ~21% to ~40%.",
                delta: "Cutting $115,000 from program cost saves ~$17,000/yr in loan payments.",
                link: "/mba-roi-scholarship",
                linkText: "See scholarship ROI →",
                color: "text-violet-400",
              },
              {
                variable: "3. Program Type",
                impact: "One-year European programs save 1 year of opportunity cost (~$80–120k).",
                delta: "Online MBA costs $20k–$80k vs $200k–$240k for M7 full-time.",
                link: "/mba-roi-online-vs-full-time",
                linkText: "See online vs full-time →",
                color: "text-amber-400",
              },
              {
                variable: "4. Pre-MBA Salary",
                impact: "Higher pre-MBA salary compresses the delta and worsens ROI.",
                delta: "FAANG engineer at $300k: MBA ROI can be negative. Non-FAANG at $110k: strong ROI.",
                link: "/mba-roi-engineers",
                linkText: "See engineer ROI →",
                color: "text-sky-400",
              },
            ].map(({ variable, impact, delta, link, linkText, color }) => (
              <div key={variable} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className={`${color} font-semibold text-sm`}>{variable}</p>
                <p className="text-slate-300 text-xs">{impact}</p>
                <p className="text-slate-400 text-xs">{delta}</p>
                <Link href={link} className={`${color} text-xs hover:opacity-80 transition-opacity underline underline-offset-2`}>{linkText}</Link>
              </div>
            ))}
          </div>
        </section>

        {/* Deep dives */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Deep-Dive Guides: MBA ROI by Scenario</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/mba-roi-consulting", label: "MBA ROI: MBB Consulting", desc: "The highest-ROI career track" },
              { href: "/mba-roi-investment-banking", label: "MBA ROI: Investment Banking", desc: "Bulge bracket pay & PE exits" },
              { href: "/mba-roi-tech", label: "MBA ROI: Tech / FAANG", desc: "Post-MBA PM & strategy roles" },
              { href: "/mba-roi-mckinsey", label: "MBA ROI: McKinsey", desc: "$192K associate salary math" },
              { href: "/mba-roi-goldman-sachs", label: "MBA ROI: Goldman Sachs", desc: "$210K+ banking pay model" },
              { href: "/mba-roi-engineers", label: "MBA ROI: Engineers", desc: "The compressed delta problem" },
              { href: "/mba-roi-healthcare", label: "MBA ROI: Healthcare", desc: "Management + PSLF strategy" },
              { href: "/mba-roi-military", label: "MBA ROI: Military Veterans", desc: "GI Bill + Yellow Ribbon math" },
              { href: "/mba-roi-scholarship", label: "MBA Scholarship ROI", desc: "How 50% aid flips IRR to 40%" },
              { href: "/mba-roi-recession", label: "MBA ROI in a Recession", desc: "2008 & 2020 historical data" },
              { href: "/mba-roi-europe", label: "European MBA ROI", desc: "INSEAD, LBS & 1-yr arbitrage" },
              { href: "/mba-roi-insead-vs-wharton", label: "INSEAD vs. Wharton", desc: "Head-to-head ROI comparison" },
              { href: "/mba-roi-online-vs-full-time", label: "Online vs. Full-Time MBA", desc: "When online wins on IRR" },
              { href: "/mba-roi-big4-vs-mbb", label: "Big 4 vs. MBB ROI", desc: "$47K salary gap explained" },
              { href: "/mba-vs-masters-roi", label: "MBA vs. Master's ROI", desc: "MS Finance, MSCS & MFin vs MBA" },
              { href: "/mba-roi-report-2026", label: "MBA ROI Report 2026", desc: "Full dataset: all 12 industries" },
              { href: "/mba-roi-career-changers", label: "MBA ROI: Career Changers", desc: "Highest-variance return in grad ed" },
              { href: "/no-gmat-mba-roi", label: "No-GMAT MBA ROI", desc: "Does skipping the GMAT hurt returns?" },
            ].map(({ href, label, desc }) => (
              <Link
                key={href}
                href={href}
                className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/8 transition-colors space-y-1 block"
              >
                <p className="text-white font-medium text-sm">{label}</p>
                <p className="text-slate-500 text-xs">{desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── How MBA ROI is Calculated ─────────────────────────────────────── */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">How MBA ROI Is Actually Calculated</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Most MBA ROI comparisons use a simple payback period: divide total program cost by the annual
            salary increase. This is wrong in a way that systematically understates the cost of low-IRR programs
            and overstates the benefit of high-cost ones. The correct framework is Discounted Cash Flow (DCF)
            analysis — the same methodology used to value businesses and capital projects.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            A proper MBA ROI model treats all program costs as negative cash flows: tuition, living expenses
            above your baseline, and foregone pre-MBA salary during enrollment. These outflows occur in years
            0 and 1 for a two-year program. Post-graduation, positive cash flows enter the model as the
            marginal salary delta — the difference between your actual post-MBA compensation and what you
            would have earned without the degree, net of loan repayments and any incremental taxes. The
            Internal Rate of Return (IRR) is the discount rate that makes the net present value of all these
            cash flows equal to zero. A higher IRR means the investment returns money faster and with
            more cushion above the cost of capital.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            At CareerReturns, we model MBA ROI using a 6% discount rate (approximately the long-run real
            cost of debt for graduate student borrowers), a 10-year projection horizon, and a 5-year standard
            amortization for federal graduate PLUS loans at prevailing fixed rates. The salary delta is the
            industry-specific post-MBA median minus the pre-MBA median for the same experience band, sourced
            from GMAC employer surveys, school employment reports, Glassdoor, and Levels.fyi. We use
            Newton-Raphson iteration to solve for the exact IRR rather than approximating it — the difference
            matters at the margins where programs are borderline viable.
          </p>
        </section>

        {/* ── School Tier Impact ────────────────────────────────────────────── */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">School Tier: How Much Does It Change ROI?</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            School tier matters significantly for consulting and banking placements and almost not at all for
            general management, healthcare, and government roles. The mechanism is specific: MBB consulting
            firms (McKinsey, Bain, BCG) and bulge-bracket banks conduct on-campus recruiting almost exclusively
            at M7 programs (Harvard, Wharton, Booth, Kellogg, Columbia, Sloan, Stern) and a handful of T15
            programs. If MBB or banking is your target, a T25 program produces a materially lower probability
            of entry into those roles, which collapses expected ROI even if the sticker price is lower.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            For tech product management and strategy roles, school tier matters less at the top — a T15 program
            with strong tech recruiter relationships can produce outcomes within 10–15% of an M7 placement in
            total compensation. For roles in healthcare management, CPG brand management, and regional general
            management, a T25 or even a strong regional program can produce positive ROI if the program cost
            is proportionally lower and the target employer is not screen-filtering by school rank.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            The scholarship variable dominates school tier for non-consulting, non-banking tracks. A 50%
            scholarship at a T15 program produces higher IRR than full-price attendance at an M7, because
            the salary delta between T10 and T15 outcomes in tech, healthcare, and CPG is smaller than the
            $80,000–$120,000 cost difference a scholarship offsets. For consulting and banking, the placement
            probability difference between M7 and T15 can be large enough that full-price M7 still wins on
            expected IRR — but not universally.
          </p>
        </section>

        {/* ── Recession Data ────────────────────────────────────────────────── */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">MBA ROI Through Recessions: 2008 and 2020 Data</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The 2008 financial crisis is the most relevant historical stress test for MBA ROI, because it hit
            the two highest-ROI industries — consulting and investment banking — disproportionately hard.
            Bulge-bracket banks rescinded offers, deferred start dates, and eliminated entire analyst and
            associate classes in 2008–2009. MBA graduates who enrolled in 2006 and 2007 anticipating banking
            placements experienced break-even periods 2–3 years longer than the pre-crisis model predicted,
            because their first 1–2 post-MBA years produced lower compensation than projected.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Consulting held up better than banking in 2008–2009. McKinsey, Bain, and BCG reduced hiring
            volumes but did not rescind as many offers, and post-crisis recovery was faster — MBB salaries
            returned to trend by 2011–2012. The 2008 data suggest that consulting ROI is more recession-resistant
            than banking ROI, even though both are cyclical relative to healthcare or government.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            The 2020 COVID recession had a different pattern. The disruption was short and concentrated in
            hospitality, travel, and physical retail — industries with low MBA placement rates. Tech, consulting,
            and healthcare management were relatively insulated. MBA programs that graduated students in 2020
            reported only modestly lower placement rates, and by 2021 compensation had surpassed pre-pandemic
            levels in most high-ROI sectors due to talent competition. If you are modeling MBA ROI in 2026,
            the 2020 recession is a weak stress test for M7 programs but a relevant one for programs with
            strong hospitality, travel, or retail concentrations.
          </p>
        </section>

        {/* ── When MBA ROI Is Negative ──────────────────────────────────────── */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">When MBA ROI Is Negative or Near-Zero</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The table above shows a wide spread: from 55% IRR for veterans using full GI Bill benefits
            entering consulting, to negative NPV for civilian government workers at full sticker price.
            Understanding the specific conditions that produce near-zero or negative ROI is as important
            as knowing which tracks generate the highest returns.
          </p>
          <div className="space-y-3">
            {[
              {
                label: "High pre-MBA salary with small post-MBA delta",
                text: "A FAANG software engineer at $280,000–$320,000 total compensation who enters an MBA and returns to tech as a product manager at $230,000–$270,000 TC has a negative salary delta — the MBA reduced income. This is common for senior engineers who underestimate their pre-MBA market position.",
                color: "text-red-400"
              },
              {
                label: "Full-price attendance at a non-target program",
                text: "A $120,000–$150,000 regional MBA at full cost with a $15,000–$25,000 salary delta produces an IRR of 2–5%, which does not clear the cost of student debt. The math only works with significant scholarship aid or a very large salary delta.",
                color: "text-orange-400"
              },
              {
                label: "Targeting nonprofit or government without PSLF",
                text: "Post-MBA salaries in nonprofit management and civilian government average $75,000–$95,000 — often $10,000–$30,000 below the pre-MBA salary of candidates from finance or consulting. Without Public Service Loan Forgiveness after 10 years of qualifying payments, this track produces negative NPV at most program prices.",
                color: "text-orange-400"
              },
              {
                label: "Two-year program when a one-year equivalent exists",
                text: "For candidates with international backgrounds or specific finance or strategy targets, European one-year programs (INSEAD, LBS, IMD) save one full year of foregone salary — often $100,000–$150,000 in opportunity cost. Choosing a US two-year program in this situation adds cost without a proportional salary delta.",
                color: "text-amber-400"
              },
            ].map(({ label, text, color }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className={`${color} font-semibold text-sm`}>{label}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-white/5 border border-white/10 p-10 text-center space-y-5">
          <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest">Model Your Numbers</p>
          <h2 className="text-2xl font-semibold tracking-tight">Calculate Your Personal MBA ROI</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Enter your pre-MBA salary, target post-MBA role, total program cost, and loan structure.
            Get NPV, IRR, and break-even date for your specific scenario in under 60 seconds.
          </p>
          <Link
            href="/mba-roi-calculator"
            className="inline-block bg-linear-to-r from-emerald-600 to-teal-600 hover:opacity-90 transition-all px-8 py-4 rounded-xl font-medium text-white text-base shadow-[0_0_40px_rgba(5,150,105,0.3)]"
          >
            Open MBA ROI Calculator →
          </Link>
        </section>


        {/* ── Related Guides ── */}
        <section className="border-t border-white/10 pt-10 mt-10">
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-5">Related Guides</p>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link href="/mba-roi-calculator" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/8 hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">Σ</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">MBA ROI Calculator</p>
                <p className="text-slate-500 text-xs">Model your specific numbers →</p>
              </div>
            </Link>
            <Link href="/mba-roi-report-2026" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/8 hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">↗</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">MBA ROI Report 2026</p>
                <p className="text-slate-500 text-xs">IRR data across 12 industries →</p>
              </div>
            </Link>
            <Link href="/mba-worth-it" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/8 hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">?</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">Is an MBA Worth It?</p>
                <p className="text-slate-500 text-xs">Full financial breakdown 2026 →</p>
              </div>
            </Link>
            <Link href="/mba-break-even" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/8 hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">⌛</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">MBA Break-Even Period</p>
                <p className="text-slate-500 text-xs">Real math for all career tracks →</p>
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
            <Link href="/mba-worth-it" className="hover:text-slate-300 transition-colors">Is MBA Worth It?</Link>
            {" · "}
            <Link href="/average-mba-salary" className="hover:text-slate-300 transition-colors">Average MBA Salary</Link>
            {" · "}
            <Link href="/mba-cost" className="hover:text-slate-300 transition-colors">MBA Cost</Link>
            {" · "}
            <Link href="/mba-payback-period" className="hover:text-slate-300 transition-colors">MBA Payback Period</Link>
            {" · "}
            <Link href="/mba-roi-report-2026" className="hover:text-slate-300 transition-colors">MBA ROI Report 2026</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
          <p className="mt-1">Salary data sourced from GMAC surveys, school employment reports, Glassdoor, Levels.fyi, and publicly reported compensation figures. All ranges are estimates; individual outcomes vary.</p>
        </footer>

      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is a good MBA ROI?", "acceptedAnswer": {"@type": "Answer", "text": "A good MBA ROI is an Internal Rate of Return (IRR) exceeding 10–12%, which represents returns above long-run equity market benchmarks. M7 programs targeting MBB consulting or investment banking typically produce IRRs of 18–24%. IRR below 6% — approximately the long-run risk-free rate — indicates the MBA does not pass a basic financial hurdle."}}, {"@type": "Question", "name": "How is MBA ROI calculated?", "acceptedAnswer": {"@type": "Answer", "text": "MBA ROI is properly calculated using Discounted Cash Flow analysis: model all costs as negative cash flows (tuition, living expenses, foregone salary) and all benefits as positive cash flows (post-MBA salary delta net of taxes and loan payments). IRR is the discount rate that sets NPV to zero. Break-even is the year cumulative cash flow crosses zero."}}, {"@type": "Question", "name": "Is MBA ROI higher in consulting or banking?", "acceptedAnswer": {"@type": "Answer", "text": "Consulting (MBB) and banking (bulge bracket) produce comparable MBA IRRs of 18–24% from M7 programs. Consulting produces faster break-even (4.2 vs 4.5 years) due to more predictable salary structure. Banking produces higher year 1–3 total compensation due to larger bonuses. Over 10 years, the NPVs are similar, diverging based on individual performance trajectories."}}, {"@type": "Question", "name": "Is MBA ROI positive for all programs?", "acceptedAnswer": {"@type": "Answer", "text": "No. MBA ROI is negative or marginally positive for many programs outside the top 25, particularly when targeting sectors with modest post-MBA salary premiums. Regional programs targeting local general management roles at $90K–$110K post-MBA produce IRRs of 2–6%, which do not clear a basic financial hurdle. School tier, industry target, and financing structure are determinative."}}, {"@type": "Question", "name": "How does an MBA compare to just investing the money in the stock market?", "acceptedAnswer": {"@type": "Answer", "text": "At M7 programs with MBB/banking placement, the MBA IRR of 18–24% significantly outperforms the S&P 500's long-run 8–10% return. However, equity investment is diversified and liquid; an MBA is a concentrated, illiquid bet on a single career path. At programs producing IRR below 8–10%, passive index investing would generate higher risk-adjusted returns."}}]}) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_breadcrumbSchema) }} />
    </main>
  )
}
