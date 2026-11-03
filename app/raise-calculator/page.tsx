import Link from "next/link"
import RaiseCalculator from "./Calculator"
import { calculateRaise } from "@/lib/raiseEngine"
import { usd } from "@/lib/paycheckEngine"

const SALARIES = [50000, 60000, 75000, 100000, 150000]
const RAISES = [3, 4, 5, 10]

export default function RaiseCalculatorPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-150 h-150 bg-violet-600/15 rounded-full blur-[120px] -z-10" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10">
        <header className="max-w-3xl space-y-4">
          <Link href="/" className="text-xs text-slate-500 hover:text-slate-300">← CareerReturns</Link>
          <p className="text-xs font-medium text-violet-400 uppercase tracking-widest">Free tool · 2026 tax year</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight bg-linear-to-r from-violet-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent">
            Raise Calculator
          </h1>
          <p className="text-slate-300 leading-relaxed">
            Enter your salary and a raise as a percentage or a new salary. See the new pay per hour, paycheck, month and year, how
            much you keep after 2026 taxes, whether it beats inflation, and what the raise is worth compounded over your career.
            Instant results, no signup.
          </p>
        </header>

        <section aria-label="Raise calculator">
          <RaiseCalculator />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">What a 3%, 4%, 5% or 10% raise is worth</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">
            Each cell shows the yearly gross increase and, beneath it, the after-tax increase for a single filer in a state with no
            income tax. Monthly take-home rises by one-twelfth of the after-tax figure.
          </p>
          <div className="rounded-2xl bg-white/5 border border-white/10 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-400">
                  <th className="text-left font-medium p-3">Salary</th>
                  {RAISES.map((p) => (
                    <th key={p} className="text-right font-medium p-3">{p}% raise</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {SALARIES.map((salary) => (
                  <tr key={salary}>
                    <td className="p-3 text-white">{usd(salary)}</td>
                    {RAISES.map((p) => {
                      const r = calculateRaise({ currentSalary: salary, raisePct: p, filingStatus: "single", stateCode: "TX", inflationPct: 3, growthPct: 3, years: 10 })
                      return (
                        <td key={p} className="p-3 text-right">
                          <span className="block text-slate-200">+{usd(r.grossIncrease)}</span>
                          <span className="block text-xs text-emerald-300">+{usd(r.netIncrease)} after tax</span>
                        </td>
                      )
                    })}
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
