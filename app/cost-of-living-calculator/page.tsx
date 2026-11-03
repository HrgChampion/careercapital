import Link from "next/link"
import CostOfLivingCalculator from "./Calculator"
import { METROS, RPP_YEAR, metroLabel } from "@/lib/costOfLiving"
import { usd } from "@/lib/paycheckEngine"

const byPrice = [...METROS].sort((a, b) => b.rpp - a.rpp)

export default function CostOfLivingCalculatorPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-150 h-150 bg-sky-600/10 rounded-full blur-[120px] -z-10" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10">
        <header className="max-w-3xl space-y-4">
          <Link href="/" className="text-xs text-slate-500 hover:text-slate-300">← CareerReturns</Link>
          <p className="text-xs font-medium text-sky-400 uppercase tracking-widest">Free tool · official BEA price data</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight bg-linear-to-r from-sky-300 via-indigo-300 to-violet-300 bg-clip-text text-transparent">
            Cost of Living Calculator
          </h1>
          <p className="text-slate-300 leading-relaxed">
            How much do you need to earn in a new city to keep the same standard of living? This calculator compares {METROS.length}{" "}
            US metro areas using the U.S. Bureau of Economic Analysis&apos;s official price-level data, and it does what most
            cost-of-living calculators skip: it accounts for the difference in state and federal income tax. No signup.
          </p>
        </header>

        <section aria-label="Cost of living calculator">
          <CostOfLivingCalculator />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Cost of living by metro area, {RPP_YEAR}</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">
            Regional Price Parities compare the price of the same basket of goods, services and housing across metro areas. 100 is
            the US average, so 115 means prices are 15% higher than average and 90 means 10% lower. Housing drives most of the gap.
          </p>
          <div className="rounded-2xl bg-white/5 border border-white/10 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-400">
                  <th className="text-left font-medium p-3">#</th>
                  <th className="text-left font-medium p-3">Metro area</th>
                  <th className="text-right font-medium p-3">Price level</th>
                  <th className="text-right font-medium p-3">vs US average</th>
                  <th className="text-right font-medium p-3">What $100K here is worth at US-average prices</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {byPrice.map((m, i) => (
                  <tr key={m.id}>
                    <td className="p-3 text-slate-500">{i + 1}</td>
                    <td className="p-3">
                      <Link href={`/cost-of-living-calculator?from=${m.id}&to=${m.id === "austin" ? "new_york" : "austin"}`} className="text-white hover:text-indigo-300">
                        {metroLabel(m)}
                      </Link>
                    </td>
                    <td className="p-3 text-right text-slate-300">{m.rpp.toFixed(1)}</td>
                    <td className={`p-3 text-right ${m.rpp >= 100 ? "text-amber-300" : "text-emerald-300"}`}>
                      {m.rpp >= 100 ? "+" : "−"}{Math.abs(m.rpp - 100).toFixed(1)}%
                    </td>
                    <td className="p-3 text-right text-slate-300">{usd((100000 * 100) / m.rpp)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  )
}
