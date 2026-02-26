import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col relative overflow-hidden">

      {/* ── Background Glow ── */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-indigo-600/20 rounded-full blur-[140px]" />
      </div>

      {/* ── Hero ── */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-32 max-w-5xl mx-auto w-full">
        <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-6">
          CareerCapital
        </p>

        <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight leading-tight bg-linear-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
          Capital Allocation for<br />Career Decisions
        </h1>

        <p className="mt-6 text-slate-400 text-lg leading-relaxed max-w-2xl">
          Evaluate MBAs, graduate degrees, and career transitions using
          institutional-grade discounted cash flow modeling.
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
      <section className="max-w-5xl mx-auto w-full px-6 pb-24">
        <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-10 text-center space-y-6">

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
      <section className="max-w-5xl mx-auto w-full px-6 pb-28">
        <div className="grid md:grid-cols-3 gap-6">

          <div className="rounded-2xl bg-white/5 border border-white/10 p-8 space-y-4 hover:bg-white/[0.07] transition-all">
            <div className="text-indigo-400 text-xl font-mono">Σ</div>
            <h3 className="font-semibold text-white">NPV Modeling</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Full discounted cash flow evaluation across variable income paths.
              Opportunity cost included.
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-8 space-y-4 hover:bg-white/[0.07] transition-all">
            <div className="text-indigo-400 text-xl font-mono">%</div>
            <h3 className="font-semibold text-white">IRR Solver</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Annualized internal rate of return computed numerically
              across projected cash flow series.
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-8 space-y-4 hover:bg-white/[0.07] transition-all">
            <div className="text-indigo-400 text-xl font-mono">$</div>
            <h3 className="font-semibold text-white">Loan Amortization</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              True monthly amortization modeling using annuity-based
              repayment structures.
            </p>
          </div>

        </div>
      </section>

      {/* ── Vision ── */}
      <section className="max-w-5xl mx-auto w-full px-6 pb-28 border-t border-white/10 pt-20">
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

      {/* ── Footer ── */}
      <footer className="border-t border-white/10 py-8 text-center text-slate-500 text-xs space-y-2">
        <p>
          <Link href="/privacy" className="hover:text-slate-300 transition-colors">
            Privacy Policy
          </Link>
          {" · "}
          <Link href="/terms" className="hover:text-slate-300 transition-colors">
            Terms
          </Link>
          {" · "}
          <a
            href="mailto:hello@careercapital.io"
            className="hover:text-slate-300 transition-colors"
          >
            Contact
          </a>
        </p>
        <p>Rational decisions. Compounding outcomes.</p>
      </footer>

    </main>
  )
}
