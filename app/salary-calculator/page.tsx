import Link from "next/link"
import CopySnippet from "@/components/CopySnippet"
import SalaryCalculator from "./Calculator"
import { calculatePaycheck, toAnnual, usd } from "@/lib/paycheckEngine"
import { hourlyPath, salaryPath, shortSalary } from "@/lib/payRates"
import { SALARY_FACTS } from "@/lib/salaryFacts"

const TABLE_RATES = [15, 18, 20, 22, 25, 28, 30, 35, 40, 45, 50, 60, 75, 100]
const POPULAR_SALARIES = [40000, 50000, 60000, 75000, 85000, 100000, 120000, 150000]

const EMBED_SNIPPET = `<iframe
  src="https://careerreturns.com/embed/salary-calculator"
  width="100%" height="780" loading="lazy"
  style="border:0;border-radius:16px;max-width:1000px"
  title="Salary & Paycheck Calculator by CareerReturns">
</iframe>
<p style="font-size:13px;margin-top:6px">
  Powered by the <a href="https://careerreturns.com/salary-calculator">CareerReturns Salary Calculator</a>
</p>`

export default function SalaryCalculatorPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-150 h-150 bg-indigo-600/15 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10">
        <header className="max-w-3xl space-y-4">
          <Link href="/" className="text-xs text-slate-500 hover:text-slate-300">← CareerReturns</Link>
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">Free tool · 2026 tax year</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight bg-linear-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
            Salary &amp; Paycheck Calculator
          </h1>
          <p className="text-slate-300 leading-relaxed">
            Convert any pay rate between hourly, weekly, biweekly, monthly and annual, and see your estimated take-home pay
            after 2026 federal income tax, Social Security, Medicare and state tax. Results update instantly. There is no signup
            and no email, and you can copy a link to share or save any result.
          </p>
        </header>

        <section aria-label="Salary calculator">
          <SalaryCalculator />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">How much is $X an hour per year?</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">
            Annual pay assumes 40 hours a week for 52 weeks (2,080 hours). Take-home is an estimate for a single filer in a
            state with no income tax, using the 2026 standard deduction. Select any rate for the full breakdown.
          </p>
          <div className="rounded-2xl bg-white/5 border border-white/10 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-400">
                  <th className="text-left font-medium p-3">Hourly rate</th>
                  <th className="text-right font-medium p-3">Annual salary</th>
                  <th className="text-right font-medium p-3">Monthly</th>
                  <th className="text-right font-medium p-3">Est. take-home / yr</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {TABLE_RATES.map((rate) => {
                  const annual = toAnnual(rate, "hourly")
                  const net = calculatePaycheck({ annualGross: annual, filingStatus: "single", stateCode: "TX" }).takeHome
                  return (
                    <tr key={rate}>
                      <td className="p-3">
                        <Link href={`/${hourlyPath(rate)}`} className="text-indigo-300 hover:underline">${rate} an hour</Link>
                      </td>
                      <td className="p-3 text-right text-white">{usd(annual)}</td>
                      <td className="p-3 text-right text-slate-300">{usd(annual / 12)}</td>
                      <td className="p-3 text-right text-emerald-300">{usd(net)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-400">
            Going the other way?{" "}
            {POPULAR_SALARIES.map((amt, i) => (
              <span key={amt}>
                <Link href={`/${salaryPath(amt)}`} className="text-indigo-300 hover:underline">{shortSalary(amt)} a year hourly</Link>
                {i < POPULAR_SALARIES.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
        </section>

        <section className="space-y-3 max-w-3xl">
          <h2 className="text-xl font-semibold tracking-tight">Add this salary calculator to your website</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Free for HR blogs, job boards, career coaches and finance sites. Paste one iframe and it uses the same 2026 tax
            engine as this page. You don't need an account or an API key.
          </p>
          <CopySnippet code={EMBED_SNIPPET} />
        </section>

        <section className="rounded-2xl bg-linear-to-br from-violet-950/50 to-indigo-950/40 border border-violet-500/20 p-6 sm:p-8 space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Is your salary enough, and what would raise it?</h2>
          <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
            A paycheck calculator tells you what you take home today. The bigger question is where your pay goes next. The median
            M7 MBA applicant earns about {SALARY_FACTS.preMbaMedian.short} before business school, and the M7 median base after
            graduation is {SALARY_FACTS.m7MedianBase.short}. These tools put a dollar value on the next move.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { href: "/am-i-underpaid", label: "Am I Underpaid?", desc: "Your P25–P90 market range in 60 seconds" },
              { href: "/job-offer-comparison", label: "Job Offer Comparison", desc: "Two offers after tax and cost of living" },
              { href: "/mba-salary-increase", label: "MBA Salary Increase", desc: "How much an MBA raises pay at Y1, Y5 and Y10" },
              { href: "/mba-roi-calculator", label: "MBA ROI Calculator", desc: "NPV, IRR and break-even on your numbers" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-xl bg-white/5 border border-white/10 p-4 hover:border-violet-500/40">
                <span className="block text-sm font-medium text-white">{l.label} →</span>
                <span className="block text-xs text-slate-400 mt-1">{l.desc}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
