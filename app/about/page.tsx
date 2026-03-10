import Link from "next/link"

export const metadata = {
  title: "About CareerReturns — MBA ROI Methodology & Data Sources",
  description:
    "CareerReturns builds institutional-grade financial models for MBA ROI decisions. Learn about our DCF methodology, data sources, and the team behind the tools.",
  alternates: {
    canonical: "https://careerreturns.com/about",
  },
  openGraph: {
    title: "About CareerReturns — MBA ROI Methodology & Data Sources",
    description: "Learn how CareerReturns models MBA ROI using discounted cash flow analysis, NPV, and IRR across 12 industries and all major school tiers.",
    url: "https://careerreturns.com/about",
    siteName: "CareerReturns",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About CareerReturns — MBA ROI Methodology & Data Sources",
    description: "DCF-based MBA ROI modeling. Learn our methodology and data sources.",
  },
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Himanshu Gauba",
  "url": "https://careerreturns.com/about",
  "jobTitle": "Founder",
  "worksFor": {
    "@type": "Organization",
    "name": "CareerReturns",
    "url": "https://careerreturns.com",
  },
  "knowsAbout": [
    "MBA Return on Investment",
    "Career Finance",
    "Discounted Cash Flow Analysis",
    "Net Present Value",
    "Internal Rate of Return",
    "MBA Programs",
    "Career Investment Decisions",
  ],
  "sameAs": [
    "https://careerreturns.com",
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About CareerReturns",
  "url": "https://careerreturns.com/about",
  "description": "CareerReturns builds institutional-grade financial models for MBA ROI decisions.",
  "author": {
    "@type": "Person",
    "name": "Himanshu Gauba",
  },
  "publisher": {
    "@type": "Organization",
    "name": "CareerReturns",
    "url": "https://careerreturns.com",
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-indigo-600/20 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-14">

        {/* Header */}
        <header className="space-y-5">
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">About</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            About CareerReturns
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            We build institutional-grade financial tools to help professionals evaluate MBA programs
            and career investments the way capital allocators evaluate projects — with rigorous
            discounted cash flow analysis, not gut instinct.
          </p>
        </header>

        {/* Mission */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Our Mission</h2>
          <p className="text-slate-400 leading-relaxed">
            An MBA from a top program costs $300,000–$400,000 when you factor in tuition, living
            expenses, and two years of foregone salary. Most prospective students make this decision
            based on prestige rankings, peer pressure, or vague career aspirations — not financial
            analysis.
          </p>
          <p className="text-slate-400 leading-relaxed">
            CareerReturns exists to change that. We model the MBA as what it really is: a capital
            allocation decision. Every projection uses full discounted cash flow methodology —
            the same framework used by investment banks and private equity firms to evaluate
            multi-million dollar investments.
          </p>
        </section>

        {/* Founder */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">The Team</h2>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8 space-y-4">
            <div className="space-y-1">
              <p className="font-semibold text-white text-lg">Himanshu Gauba</p>
              <p className="text-indigo-400 text-sm font-medium">Founder, CareerReturns</p>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              Himanshu built CareerReturns after going through the MBA decision process himself
              and finding that the tools available — rankings sites, ROI calculators that ignored
              opportunity cost, generic salary surveys — were inadequate for a $300k capital decision.
              He applied institutional financial modeling principles (NPV, IRR, DCF) to the problem
              and built the platform he wished had existed.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm">
              The models are built on the same discounted cash flow framework used in corporate
              finance and investment banking. The salary and cost data is drawn from GMAC Graduate
              Management Admission Council surveys, Bloomberg Businessweek MBA rankings, US News
              program cost data, and publicly reported recruiter compensation figures.
            </p>
          </div>
        </section>

        {/* Methodology */}
        <section className="space-y-6" id="methodology">
          <h2 className="text-2xl font-semibold tracking-tight">Our Methodology</h2>

          <div className="space-y-4">
            <p className="text-slate-400 leading-relaxed">
              Every calculation on CareerReturns uses a full discounted cash flow (DCF) model
              with the following parameters:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/5 border border-white/10 p-5 space-y-2">
                <p className="font-semibold text-white text-sm">Discount Rate</p>
                <p className="text-indigo-300 font-mono text-lg">6.0%</p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Approximates the long-run risk-adjusted return on diversified equity investments.
                  Reflects the opportunity cost of capital deployed toward an MBA.
                </p>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-5 space-y-2">
                <p className="font-semibold text-white text-sm">Projection Horizon</p>
                <p className="text-indigo-300 font-mono text-lg">10 Years</p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Post-graduation salary gains are modeled over 10 years. This is conservative —
                  the career benefit of an MBA typically extends well beyond this window.
                </p>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-5 space-y-2">
                <p className="font-semibold text-white text-sm">Loan Term</p>
                <p className="text-indigo-300 font-mono text-lg">5 Years</p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Standard graduate loan repayment modeled using true monthly amortization
                  with annuity-based repayment structures.
                </p>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-5 space-y-2">
                <p className="font-semibold text-white text-sm">IRR Solver</p>
                <p className="text-indigo-300 font-mono text-lg">Numerical</p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  IRR is solved numerically via iterative algorithm (Newton-Raphson method)
                  across the projected 10-year cash flow series.
                </p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-sm">
              Costs modeled include: tuition and program fees, two years of living expenses
              (estimated at $40k–$60k/year for US programs), and opportunity cost (foregone
              salary during the program). Post-MBA benefits modeled include: annual salary delta
              (post-MBA minus pre-MBA base), maintained across the projection horizon.
            </p>
          </div>
        </section>

        {/* Data Sources */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Data Sources</h2>
          <p className="text-slate-400 leading-relaxed text-sm">
            The salary and cost figures used across our guides are drawn from the following sources:
          </p>
          <ul className="space-y-3 text-slate-400 text-sm leading-relaxed list-none">
            <li className="flex gap-3 items-start">
              <span className="text-indigo-400 mt-0.5">→</span>
              <span><strong className="text-slate-300">GMAC (Graduate Management Admission Council)</strong> — Annual Corporate Recruiters Survey and Prospective Students Survey, which tracks pre-MBA salaries and post-MBA starting compensation by industry and region.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-indigo-400 mt-0.5">→</span>
              <span><strong className="text-slate-300">Bloomberg Businessweek MBA Rankings</strong> — Program cost data, alumni salary outcomes, and recruiter demand scores by school.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-indigo-400 mt-0.5">→</span>
              <span><strong className="text-slate-300">US News &amp; World Report Best Business Schools</strong> — Tuition, enrollment, and program statistics for US MBA programs.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-indigo-400 mt-0.5">→</span>
              <span><strong className="text-slate-300">Management Consulting and Investment Banking Recruiter Data</strong> — McKinsey, Bain, BCG, Goldman Sachs, and Morgan Stanley publicly reported associate compensation figures.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-indigo-400 mt-0.5">→</span>
              <span><strong className="text-slate-300">Levels.fyi and Glassdoor</strong> — Technology sector post-MBA compensation including base, bonus, and equity components.</span>
            </li>
          </ul>
        </section>

        {/* Limitations */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Important Limitations</h2>
          <div className="rounded-2xl bg-amber-500/5 border border-amber-500/20 p-6 space-y-3">
            <p className="text-slate-400 text-sm leading-relaxed">
              CareerReturns provides financial modeling tools for informational purposes only.
              The models use published averages and benchmarks — individual outcomes will vary
              based on prior experience, school placement rates, personal negotiation, economic
              conditions at graduation, and many other factors.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              This is not financial advice. The calculator is a framework for structured
              thinking — not a prediction. We recommend stress-testing multiple scenarios
              (optimistic, base, conservative) and consulting with a financial advisor before
              making any decision of this magnitude.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-indigo-600/10 border border-indigo-500/20 p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Start Your Analysis</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Use our free MBA ROI calculator to model your specific scenario with NPV, IRR,
            and break-even analysis.
          </p>
          <Link
            href="/mba-roi-calculator"
            className="inline-block bg-indigo-600 hover:bg-indigo-500 transition-colors px-6 py-3 rounded-xl font-medium text-white text-sm"
          >
            Launch MBA ROI Calculator →
          </Link>
        </section>

        {/* Contact */}
        <section className="space-y-2 text-sm text-slate-500">
          <p>Questions about our methodology or data?</p>
          <Link href="/contact" className="text-indigo-400 hover:text-indigo-300 transition-colors">
            Contact us →
          </Link>
        </section>

      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-slate-500 text-xs space-y-2">
        <p>
          <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
          {" · "}
          <Link href="/mba-roi" className="hover:text-slate-300 transition-colors">MBA ROI Guide</Link>
          {" · "}
          <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
          {" · "}
          <Link href="/contact" className="hover:text-slate-300 transition-colors">Contact</Link>
        </p>
        <p>Rational decisions. Compounding outcomes.</p>
      </footer>

    </main>
  )
}
