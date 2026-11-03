import Link from "next/link"
import JobOfferCalculator from "./Calculator"

export default function JobOfferComparisonPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-150 h-150 bg-emerald-600/10 rounded-full blur-[120px] -z-10" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-8">
        <header className="max-w-3xl space-y-4">
          <Link href="/" className="text-xs text-slate-500 hover:text-slate-300">← CareerReturns</Link>
          <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest">Free tool · 2026 tax year</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight bg-linear-to-r from-emerald-300 via-teal-300 to-indigo-300 bg-clip-text text-transparent">
            Job Offer Comparison Calculator
          </h1>
          <p className="text-slate-300 leading-relaxed">
            A higher salary is not always the better offer. Enter two offers and see what each is really worth after 2026 taxes,
            the cost of living where you would live, your commute, bonus, equity and 401(k) match, plus a five-year value that
            treats a one-off signing bonus for what it is. There is no signup, and the link in your address bar saves the comparison.
          </p>
        </header>
        <JobOfferCalculator />
      </div>
    </main>
  )
}
