import Link from "next/link"
import { pageAlternates } from "@/lib/seo"

export const metadata = {
  title: "MBA ROI Calculator & Career Investment Tools (2026)",
  description:
    "Model your MBA return on investment with institutional-grade DCF analysis. NPV, IRR, and break-even calculator. Free tools for smarter career decisions.",
  alternates: pageAlternates("https://careerreturns.com"),
  openGraph: {
    title: "MBA ROI Calculator & Career Investment Tools (2026)",
    description: "Free MBA ROI calculator using DCF, NPV, and IRR analysis. Compare 12 industries, school tiers, and scenarios. Make data-driven career investment decisions.",
    url: "https://careerreturns.com",
    siteName: "CareerReturns",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@careerreturns",
    title: "MBA ROI Calculator & Career Investment Tools (2026)",
    description: "Free DCF-based MBA ROI calculator. NPV, IRR, and break-even analysis across 12 industries.",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is MBA ROI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MBA ROI (Return on Investment) is the financial return you earn from an MBA program relative to its total cost. It's calculated using NPV (Net Present Value) and IRR (Internal Rate of Return) to account for tuition, living expenses, opportunity cost, and post-MBA salary gains over a 10-year horizon."
      }
    },
    {
      "@type": "Question",
      "name": "How do I calculate MBA ROI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Calculate MBA ROI by subtracting total costs (tuition + opportunity cost + living expenses) from the discounted present value of future salary increases. Our free MBA ROI calculator uses institutional-grade DCF modeling to compute NPV, IRR, and break-even period automatically."
      }
    },
    {
      "@type": "Question",
      "name": "Is an MBA worth it financially in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An MBA is worth it financially when targeting high-delta industries: MBB consulting (IRR 22–40%), investment banking (21–38%), or PE/VC (23–41%). It typically fails financially when entering low-delta fields like nonprofit/government (IRR 4–14%) or taking on full debt for a non-target program."
      }
    },
    {
      "@type": "Question",
      "name": "What is the average MBA salary increase?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The average MBA salary increase ranges from $35k to $90k per year depending on industry. MBB consulting offers the largest delta ($80–90k/year), while general management offers a smaller lift ($35–50k/year). The 10-year cumulative NPV ranges from -$20k (nonprofit) to +$600k (military with GI Bill)."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to break even on an MBA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MBA break-even periods range from 2–13 years depending on industry and scholarship aid. MBB consulting breaks even in 4.2–4.7 years. Investment banking: 4.5–5 years. Technology: 6.1–7 years. Nonprofit/government can take 9–13 years or never break even with full debt."
      }
    }
  ]
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col relative overflow-hidden">

      {/* ── Background Glow ── */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-indigo-600/20 rounded-full blur-[140px]" />
      </div>

      {/* ── Hero ── */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-20 sm:py-32 max-w-5xl mx-auto w-full">
        <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-6">
          CareerReturns
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight bg-linear-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
          MBA ROI Calculator &amp;<br />Career Investment Tools
        </h1>

        <p className="mt-6 text-slate-400 text-lg leading-relaxed max-w-2xl">
          Use institutional-grade discounted cash flow (DCF) analysis to calculate your MBA return on investment.
          Model NPV, IRR, and break-even across 12 industries and every major school tier —
          so you make your career investment decision with the same rigor as a capital allocation decision.
        </p>

        <div className="mt-10 flex gap-4 flex-wrap justify-center">
          <Link
            href="/mba-roi-calculator"
            className="bg-linear-to-r from-indigo-600 to-violet-600 hover:opacity-90 transition-all px-8 py-4 rounded-xl font-medium text-white text-base shadow-[0_0_60px_rgba(99,102,241,0.35)]"
          >
            Launch MBA ROI Calculator →
          </Link>


        </div>
      </section>

      {/* ── Modeling Foundation ── */}
      <section className="max-w-5xl mx-auto w-full px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 sm:p-10 text-center space-y-6">

          <h2 className="text-2xl font-semibold tracking-tight">
            Built on Discounted Cash Flow Analysis
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto text-sm">
            Every projection is evaluated using full variable cash flow modeling —
            not simplified ROI shortcuts.
          </p>

        </div>
      </section>

      {/* ── Capability Grid ── */}
      <section className="max-w-5xl mx-auto w-full px-4 sm:px-6 pb-16 sm:pb-28">
        <div className="grid md:grid-cols-3 gap-6">

          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8 space-y-4 hover:bg-white/[0.07] transition-all">
            <div className="text-indigo-400 text-xl font-mono">Σ</div>
            <h3 className="font-semibold text-white">NPV Modeling</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Full discounted cash flow evaluation across variable income paths.
              Opportunity cost included.
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8 space-y-4 hover:bg-white/[0.07] transition-all">
            <div className="text-indigo-400 text-xl font-mono">%</div>
            <h3 className="font-semibold text-white">IRR Solver</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Annualized internal rate of return computed numerically
              across projected cash flow series.
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8 space-y-4 hover:bg-white/[0.07] transition-all">
            <div className="text-indigo-400 text-xl font-mono">$</div>
            <h3 className="font-semibold text-white">Loan Amortization</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              True monthly amortization modeling using annuity-based
              repayment structures.
            </p>
          </div>

        </div>
      </section>

      {/* ── MBA Guides ── */}
      <section className="max-w-5xl mx-auto w-full px-4 sm:px-6 pb-16">
        <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-6">MBA Guides</p>
        <div className="grid md:grid-cols-3 gap-5">

          <Link href="/mba-worth-it" className="group rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-7 space-y-3 hover:bg-white/8 hover:border-white/20 transition-all">
            <p className="font-semibold text-white group-hover:text-indigo-300 transition-colors">Is an MBA Worth It?</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Financial breakdown, ROI vs. the stock market, and the scenarios where the math reliably fails.
            </p>
            <p className="text-indigo-400 text-sm font-medium">Read guide →</p>
          </Link>

          <Link href="/mba-salary-increase" className="group rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-7 space-y-3 hover:bg-white/8 hover:border-white/20 transition-all">
            <p className="font-semibold text-white group-hover:text-indigo-300 transition-colors">MBA Salary Increase</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Pre- vs. post-MBA pay by industry. Consulting, banking, tech, and general management — with real figures.
            </p>
            <p className="text-indigo-400 text-sm font-medium">Read guide →</p>
          </Link>

          <Link href="/mba-break-even" className="group rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-7 space-y-3 hover:bg-white/8 hover:border-white/20 transition-all">
            <p className="font-semibold text-white group-hover:text-indigo-300 transition-colors">MBA Break-Even Period</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              The math behind payback timelines, what shifts them, and three scenarios with full calculations.
            </p>
            <p className="text-indigo-400 text-sm font-medium">Read guide →</p>
          </Link>

          <Link href="/post-mba-salary" className="group rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-7 space-y-3 hover:bg-white/8 hover:border-white/20 transition-all">
            <p className="font-semibold text-white group-hover:text-indigo-300 transition-colors">Post-MBA Salary 2026</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              First-year pay by industry, school tier breakdown, and 10-year salary growth curves across consulting, banking, and tech.
            </p>
            <p className="text-indigo-400 text-sm font-medium">Read guide →</p>
          </Link>

        </div>
      </section>

      {/* ── High-Intent ROI Guides ── */}
      <section className="max-w-5xl mx-auto w-full px-4 sm:px-6 pb-16 sm:pb-28">
        <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-6">MBA ROI by Employer, School & Scenario</p>
        <div className="grid md:grid-cols-3 gap-5">

          <Link href="/mba-roi-mckinsey" className="group rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-7 space-y-3 hover:bg-white/8 hover:border-white/20 transition-all">
            <p className="font-semibold text-white group-hover:text-indigo-300 transition-colors">MBA ROI: McKinsey</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Associate salary, break-even math, school placement rates, and when the McKinsey ROI case actually holds.
            </p>
            <p className="text-indigo-400 text-sm font-medium">Read guide →</p>
          </Link>

          <Link href="/mba-roi-goldman-sachs" className="group rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-7 space-y-3 hover:bg-white/8 hover:border-white/20 transition-all">
            <p className="font-semibold text-white group-hover:text-indigo-300 transition-colors">MBA ROI: Goldman Sachs</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              GS associate comp structure, year-end bonus math, conservative vs. realistic break-even, and GS vs. McKinsey ROI.
            </p>
            <p className="text-indigo-400 text-sm font-medium">Read guide →</p>
          </Link>

          <Link href="/mba-roi-big4-vs-mbb" className="group rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-7 space-y-3 hover:bg-white/8 hover:border-white/20 transition-all">
            <p className="font-semibold text-white group-hover:text-indigo-300 transition-colors">Big 4 vs MBB ROI</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              The $60k annual salary gap, break-even comparison, NPV side-by-side, and when Big 4 actually wins.
            </p>
            <p className="text-indigo-400 text-sm font-medium">Read guide →</p>
          </Link>

          <Link href="/mba-roi-100k-debt" className="group rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-7 space-y-3 hover:bg-white/8 hover:border-white/20 transition-all">
            <p className="font-semibold text-white group-hover:text-indigo-300 transition-colors">MBA ROI with $100k Debt</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Exact loan payment math at four debt levels, debt-to-income thresholds, and which career tracks survive full debt.
            </p>
            <p className="text-indigo-400 text-sm font-medium">Read guide →</p>
          </Link>

          <Link href="/mba-roi-recession" className="group rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-7 space-y-3 hover:bg-white/8 hover:border-white/20 transition-all">
            <p className="font-semibold text-white group-hover:text-indigo-300 transition-colors">MBA ROI in a Recession</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              2008 and 2020 hiring data, NPV model with salary delays, industries by resilience, and counter-cyclical strategy.
            </p>
            <p className="text-indigo-400 text-sm font-medium">Read guide →</p>
          </Link>

          <Link href="/mba-roi-insead-vs-wharton" className="group rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-7 space-y-3 hover:bg-white/8 hover:border-white/20 transition-all">
            <p className="font-semibold text-white group-hover:text-indigo-300 transition-colors">INSEAD vs Wharton ROI</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Full cost comparison ($224k vs $395k), salary outcomes, break-even head-to-head, and career track fit by program.
            </p>
            <p className="text-indigo-400 text-sm font-medium">Read guide →</p>
          </Link>

          <Link href="/mba-roi-engineers" className="group rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-7 space-y-3 hover:bg-white/8 hover:border-white/20 transition-all">
            <p className="font-semibold text-white group-hover:text-indigo-300 transition-colors">MBA ROI for Engineers</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              The compressed delta problem, SWE to PM math, four outcome scenarios, and when senior engineers should skip the MBA.
            </p>
            <p className="text-indigo-400 text-sm font-medium">Read guide →</p>
          </Link>

          <Link href="/mba-roi-healthcare" className="group rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-7 space-y-3 hover:bg-white/8 hover:border-white/20 transition-all">
            <p className="font-semibold text-white group-hover:text-indigo-300 transition-colors">MBA ROI: Healthcare</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Hospital management salary data, PSLF loan forgiveness strategy, and top MBA programs for healthcare careers.
            </p>
            <p className="text-indigo-400 text-sm font-medium">Read guide →</p>
          </Link>

          <Link href="/mba-roi-military" className="group rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-7 space-y-3 hover:bg-white/8 hover:border-white/20 transition-all">
            <p className="font-semibold text-white group-hover:text-indigo-300 transition-colors">MBA ROI: Military Veterans</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              GI Bill + Yellow Ribbon math, net cost after benefits, MBB veteran recruiting programs, and top programs for officers.
            </p>
            <p className="text-indigo-400 text-sm font-medium">Read guide →</p>
          </Link>

          <Link href="/mba-roi-scholarship" className="group rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-7 space-y-3 hover:bg-white/8 hover:border-white/20 transition-all">
            <p className="font-semibold text-white group-hover:text-indigo-300 transition-colors">MBA Scholarship ROI</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              50% vs 0% scholarship break-even table, when to take the lower-ranked school with full aid, and negotiation tactics.
            </p>
            <p className="text-indigo-400 text-sm font-medium">Read guide →</p>
          </Link>

        </div>
      </section>

      {/* ── Vision ── */}
      <section className="max-w-5xl mx-auto w-full px-4 sm:px-6 pb-16 sm:pb-28 border-t border-white/10 pt-14 sm:pt-20">
        <div className="max-w-2xl space-y-6">

          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">
            Roadmap
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            The Human Capital Modeling Platform
          </h2>

          <p className="text-slate-400 leading-relaxed">
            Today: MBA ROI modeling.<br />
            Next: Masters programs, bootcamps, career transitions,
            and long-term compensation forecasting.
          </p>

          <p className="text-slate-500 text-sm">
            Education is capital. Model it accordingly.
          </p>

        </div>
      </section>

      {/* ── FAQ Schema ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── FAQ Section ── */}
      <section className="max-w-3xl mx-auto w-full px-4 sm:px-6 pb-16 sm:pb-28">
        <h2 className="text-2xl font-semibold tracking-tight mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-2">
              <h3 className="font-semibold text-white">{item.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/10 py-8 text-center text-slate-500 text-xs space-y-2">
        <p>
          <Link href="/about" className="hover:text-slate-300 transition-colors">
            About
          </Link>
          {" · "}
          <Link href="/privacy" className="hover:text-slate-300 transition-colors">
            Privacy Policy
          </Link>
          {" · "}
          <Link href="/terms" className="hover:text-slate-300 transition-colors">
            Terms
          </Link>
          {" · "}
          <Link href="/contact" className="hover:text-slate-300 transition-colors">
            Contact
          </Link>
        </p>
        <p>Rational decisions. Compounding outcomes.</p>
          <p className="mt-1">Salary data sourced from GMAC surveys, school employment reports, Glassdoor, Levels.fyi, and publicly reported compensation figures. All ranges are estimates; individual outcomes vary.</p>
      </footer>

    </main>
  )
}
