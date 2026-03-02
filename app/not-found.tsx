import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden flex items-center justify-center">

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-160 bg-violet-600/15 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-xl mx-auto px-6 py-20 text-center space-y-8">

        <div className="space-y-2">
          <p className="text-8xl font-semibold text-white/10 tracking-tighter select-none">404</p>
          <p className="text-xs font-medium text-purple-400 uppercase tracking-widest -mt-4">Page not found</p>
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            This page doesn&apos;t exist
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto">
            The URL you followed may be mistyped, outdated, or the page may have been moved.
            Here are some useful starting points.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 text-left">
          {[
            {
              href: "/mba-roi-calculator",
              label: "MBA ROI Calculator",
              desc: "Model your salary delta, NPV, and break-even date",
            },
            {
              href: "/mba-worth-it",
              label: "Is MBA Worth It?",
              desc: "Full financial analysis — not a motivational answer",
            },
            {
              href: "/mba-break-even",
              label: "MBA Break-Even",
              desc: "How long until the investment turns cash flow positive",
            },
            {
              href: "/mba-salary-increase",
              label: "MBA Salary Increase",
              desc: "Pre vs. post-MBA pay by industry and school tier",
            },
          ].map(({ href, label, desc }) => (
            <Link
              key={href}
              href={href}
              className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-1 hover:bg-white/8 transition-colors group"
            >
              <p className="text-white text-sm font-semibold group-hover:text-purple-300 transition-colors">{label}</p>
              <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="inline-block bg-linear-to-r from-indigo-600 to-violet-600 hover:opacity-90 transition-all px-8 py-3 rounded-xl font-medium text-white text-sm shadow-[0_0_30px_rgba(99,102,241,0.25)]"
        >
          ← Back to Home
        </Link>

      </div>
    </main>
  )
}
