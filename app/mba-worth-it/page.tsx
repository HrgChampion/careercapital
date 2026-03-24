import Link from "next/link"
import { pageAlternates, articleSchema, breadcrumbSchema } from "@/lib/seo"

const _articleSchema = articleSchema({
  title: "Is an MBA Worth It? 2026 ROI Data Across 12 Industries",
  description: "Is an MBA worth it financially in 2026? Full cost breakdown, IRR by school tier, ROI vs the stock market, and when the math reliably fails.",
  url: "https://careerreturns.com/mba-worth-it",
  datePublished: "2026-03-03",
  dateModified: "2026-03-24",
})
const _breadcrumbSchema = breadcrumbSchema([{ name: "Is an MBA Worth It?", url: "https://careerreturns.com/mba-worth-it" }])

export const metadata = {
  title: "Is an MBA Worth It? 2026 ROI Data Across 12 Industries",
  description:
    "Is an MBA worth it financially in 2026? Full cost breakdown, IRR by school tier, ROI vs the stock market, and when the math reliably fails. Calculate now →",
  alternates: pageAlternates("https://careerreturns.com/mba-worth-it"),
  openGraph: {
    title: "Is an MBA Worth It? 2026 ROI Data Across 12 Industries",
    description: "Is an MBA worth it financially in 2026? Full cost breakdown, IRR by school tier, ROI vs the stock market, and when the math reliably fails.",
    url: "https://careerreturns.com/mba-worth-it",
    siteName: "CareerReturns",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Is an MBA Worth It? 2026 ROI Data Across 12 Industries",
    description: "Full cost breakdown, IRR by school tier, ROI vs the stock market.",
  },
}

export default function MbaWorthItPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-indigo-600/20 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12 sm:space-y-20">

        {/* Header */}
        <header className="space-y-5">
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">CareerReturns</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            Is an MBA Worth It?
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            A financial answer — not a motivational one.
          </p>
        </header>

        {/* Direct answer — first 150 words */}
        <section className="space-y-4">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-8 space-y-4">
            <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">Short Answer</p>
            <p className="text-white text-base leading-relaxed font-medium">
              An MBA is worth it if your post-MBA salary delta — the annual income increase attributable to
              the degree — generates a positive{" "}
              <Link href="/mba-roi-calculator" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">net present value</Link>
              {" "}after accounting for tuition, living costs, two years of foregone income, and loan repayment.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              At M7 programs (Harvard, Wharton, Booth, Kellogg, Columbia, Sloan, Tuck) with strong consulting
              or finance placement, the numbers typically work. At programs outside the top 25 with modest
              salary uplifts, they often do not. The degree itself is not the variable. The combination of
              school tier, target industry, total cost, and financing structure is what determines the outcome.
              There is no universal answer — only your specific numbers modeled correctly.
            </p>
          </div>
        </section>

        {/* Financial breakdown */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">The Real Financial Cost of an MBA</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The most common mistake prospective MBA students make is anchoring on tuition. Tuition is the
            smallest part of the true cost. A full-time, two-year program has three major outflows:
          </p>

          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-white font-semibold text-sm">Tuition + Fees</p>
                <p className="text-purple-300 font-semibold">$130k – $165k</p>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                For M7 programs. Regional top-25 programs range from $85k to $125k. This is the number
                schools advertise. It is not the number that matters most.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-white font-semibold text-sm">Living Expenses (2 years)</p>
                <p className="text-purple-300 font-semibold">$60k – $100k</p>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Rent, food, health insurance, and other costs while enrolled. Varies heavily by city.
                Boston, New York, and San Francisco programs carry the highest living costs.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-white font-semibold text-sm">Opportunity Cost</p>
                <p className="text-purple-300 font-semibold">$150k – $220k</p>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Two years of foregone pre-MBA salary. Someone earning $90k leaves $180k on the table.
                This is the single largest cost in most scenarios and is almost always underweighted.
              </p>
            </div>
          </div>

          <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5">
            <p className="text-indigo-200 text-sm leading-relaxed">
              <span className="font-semibold text-white">Total economic cost at an M7 program:</span> typically
              $300,000 – $380,000 when all three outflows are included. This is the number your{" "}
              <Link href="/mba-salary-increase" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">post-MBA salary uplift</Link>
              {" "}has to justify — not just tuition.
            </p>
          </div>
        </section>

        {/* ROI vs stock market */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">MBA ROI vs. Investing in the Stock Market</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            A useful frame for evaluating MBA ROI is the opportunity cost of capital: if you invested the
            full program cost — tuition, fees, and the cash equivalent of your foregone salary — into a
            diversified equity index fund instead, how does the return compare?
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            The S&amp;P 500 has returned approximately 10% annually over the long run, or roughly 7–8%
            after inflation. An MBA investment is justified on purely financial grounds when its{" "}
            <Link href="/mba-roi-calculator" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">internal rate of return (IRR)</Link>
            {" "}exceeds that benchmark.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center space-y-2">
              <p className="text-slate-400 text-xs uppercase tracking-wide">M7 → Consulting / Finance</p>
              <p className="text-green-400 text-2xl font-semibold">18–24%</p>
              <p className="text-slate-500 text-xs">IRR. Beats the market decisively.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center space-y-2">
              <p className="text-slate-400 text-xs uppercase tracking-wide">Top 20 → General Mgmt</p>
              <p className="text-yellow-400 text-2xl font-semibold">8–12%</p>
              <p className="text-slate-500 text-xs">IRR. Marginal vs. index investing.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center space-y-2">
              <p className="text-slate-400 text-xs uppercase tracking-wide">Non-Target, Full Debt</p>
              <p className="text-red-400 text-2xl font-semibold">&lt;6%</p>
              <p className="text-slate-500 text-xs">IRR. Market investment likely wins.</p>
            </div>
          </div>

          {/* IRR comparison bar chart */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-widest">IRR by Path vs. S&amp;P 500 Baseline</p>
            <div className="space-y-3">
              {[
                { label: "M7 → Consulting / Finance", irr: "18–24%", pct: 88, color: "bg-green-400", dim: false },
                { label: "M7 → Tech (post-2022 market)", irr: "12–16%", pct: 58, color: "bg-emerald-400", dim: false },
                { label: "Top 20 → General Mgmt", irr: "8–12%", pct: 42, color: "bg-yellow-400", dim: false },
                { label: "S&P 500 long-run average", irr: "~10%", pct: 38, color: "bg-indigo-400", dim: true },
                { label: "Non-target, full debt", irr: "<6%", pct: 22, color: "bg-red-400", dim: false },
              ].map(({ label, irr, pct, color, dim }) => (
                <div key={label} className={`space-y-1.5 ${dim ? "opacity-50" : ""}`}>
                  <div className="flex justify-between items-center text-xs">
                    <span className={dim ? "text-slate-500 italic" : "text-slate-400"}>{label}</span>
                    <span className={`font-semibold tabular-nums ${dim ? "text-indigo-400" : "text-white"}`}>{irr}</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className={`h-2 rounded-full ${color}`} style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-slate-600 text-xs pt-1">Scale: 0–27% IRR. S&amp;P 500 row shown as benchmark reference.</p>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed">
            The MBA also has a meaningful advantage that IRR does not capture: it can unlock roles that are
            structurally inaccessible without the credential — specific consulting firms, banking associate
            programs, and executive development tracks that simply will not interview non-MBA candidates.
            If the role you want requires the degree, the comparison to equity investing is somewhat
            theoretical. If the role you want does not require the degree, the financial case must stand on
            its own. For exact payback timelines by school tier and sector, see the{" "}
            <Link href="/mba-break-even" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">MBA break-even analysis</Link>.
          </p>
        </section>

        {/* Risks */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Where the MBA Investment Goes Wrong</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Most post-MBA disappointment follows a predictable pattern. These are the scenarios where the
            financial case reliably fails:
          </p>

          <div className="space-y-3">
            {[
              {
                title: "Optimistic salary assumptions",
                body: "MBA salary surveys report medians, not individual outcomes. Median post-MBA salary at a given program tells you nothing about your outcome in your target function and geography. The range within any school is enormous.",
              },
              {
                title: "Ignoring opportunity cost",
                body: "Candidates who model only tuition routinely underestimate total cost by 50–60%. The two years of foregone income is real money — it compounds whether you count it or not.",
              },
              {
                title: "Non-target school with full debt",
                body: "Recruiter pipelines in high-paying sectors (consulting, banking) are heavily concentrated at M7 and select regional programs. A fully financed non-target degree typically produces an IRR below the cost of the debt used to fund it.",
              },
              {
                title: "Career trajectory that improves without the degree",
                body: "High-performing engineers, analysts, and operators are often on salary trajectories that will converge with MBA outcomes in 3–5 years anyway — without the disruption, cost, or two-year income gap.",
              },
              {
                title: "Economic downturns at graduation",
                body: "The MBA cohort that graduated in 2009 or 2020 faced recruiting environments that shredded modeled outcomes. The investment is illiquid and the return is sensitive to conditions outside your control.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-white font-semibold text-sm">{title}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-10 text-center space-y-5">
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">Free Tool</p>
          <h2 className="text-2xl font-semibold tracking-tight">Model Your Specific MBA Decision</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Enter your pre-MBA salary, expected post-MBA salary, total program cost, and financing details.
            Get NPV, IRR, break-even year, and a side-by-side comparison against a passive equity investment.
          </p>
          <Link
            href="/mba-roi-calculator"
            className="inline-block bg-linear-to-r from-indigo-600 to-violet-600 hover:opacity-90 transition-all px-8 py-4 rounded-xl font-medium text-white text-base shadow-[0_0_40px_rgba(99,102,241,0.3)]"
          >
            Use the MBA ROI Calculator →
          </Link>
        </section>

        {/* Footer nav */}

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
            <Link href="/mba-roi" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">→</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">MBA ROI Complete Guide</p>
                <p className="text-slate-500 text-xs">IRR, NPV & break-even by industry →</p>
              </div>
            </Link>
            <Link href="/mba-break-even" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">⌛</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">MBA Break-Even Period</p>
                <p className="text-slate-500 text-xs">Real math for all scenarios →</p>
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
            <Link href="/mba-break-even" className="hover:text-slate-300 transition-colors">MBA Break-Even</Link>
            {" · "}
            <Link href="/mba-roi-recession" className="hover:text-slate-300 transition-colors">MBA Recession ROI</Link>
            {" · "}
            <Link href="/mba-roi-engineers" className="hover:text-slate-300 transition-colors">MBA ROI: Engineers</Link>
            {" · "}
            <Link href="/mba-roi-scholarship" className="hover:text-slate-300 transition-colors">MBA Scholarship ROI</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
          <p className="mt-1">Salary data sourced from GMAC surveys, school employment reports, Glassdoor, Levels.fyi, and publicly reported compensation figures. All ranges are estimates; individual outcomes vary.</p>
        </footer>

      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is an MBA worth it financially in 2026?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "An MBA is worth it financially when the post-MBA salary delta generates a positive net present value after accounting for tuition, living costs, foregone income, and loan repayment. At M7 programs targeting consulting or finance, the numbers typically work. At programs outside the top 25 with modest salary uplifts, they often do not. School tier, target industry, total cost, and financing structure are the determining variables.",
                },
              },
              {
                "@type": "Question",
                name: "Is MBA ROI higher than investing in the stock market?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "At M7 programs targeting management consulting or investment banking, MBA IRR typically ranges from 18–24%, significantly above the S&P 500's long-run 8–10% return. At regional programs with modest salary uplifts and significant debt, MBA IRR can fall below stock market returns. The comparison depends entirely on the school, sector, and financing structure.",
                },
              },
              {
                "@type": "Question",
                name: "How much does an MBA increase your salary?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "MBA salary increases range from 40% at regional programs targeting general management to over 110% at M7 programs placing into MBB consulting or investment banking. The median pre-MBA salary for full-time program applicants is approximately $85,000. Post-MBA M7 graduates entering consulting earn $190,000–$215,000 base salary, while finance roles start at $200,000–$250,000.",
                },
              },
              {
                "@type": "Question",
                name: "How long does it take to break even on an MBA?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "MBA break-even ranges from 4–6 years for M7 programs with consulting or finance placement, to 7–10 years for regional programs targeting general management, to 2–3 years for online or part-time programs. The break-even calculation depends on total economic cost (tuition plus foregone income), salary delta, loan structure, and interest rate — not just tuition.",
                },
              },
              {
                "@type": "Question",
                name: "What is the ROI of an MBA from a top school?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "MBA ROI at top (M7) programs targeting high-compensation sectors produces an IRR of 18–24% for consulting placements and 15–22% for investment banking placements. These returns exceed the long-run equity market return and represent a strongly positive net present value over a 10-year projection horizon. ROI falls significantly at programs outside the top 20 or when targeting lower-salary sectors.",
                },
              },
            ],
          }),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_breadcrumbSchema) }} />
    </main>
  )
}
