import Link from "next/link"
import FaqSection, { type FaqItem } from "@/components/FaqSection"
import ArticleMeta from "@/components/ArticleMeta"
import {
  PERIOD_LABELS,
  allPeriods,
  calculatePaycheck,
  usd,
  type PayPeriod,
} from "@/lib/paycheckEngine"
import { SALARY_FACTS } from "@/lib/salaryFacts"
import { PAY_PAGES_UPDATED } from "@/lib/payRates"

export { PAY_PAGES_UPDATED }

const PERIODS = Object.keys(PERIOD_LABELS) as PayPeriod[]

// Salary context bands, in our own data's terms (pre-/post-MBA medians).
function context(annual: number): string {
  if (annual < 50000)
    return "This is entry-level pay in most US metros. The fastest way to raise it is usually a credential or a move into a higher-paying function, not small raises. Our reskilling and salary benchmark tools show which moves pay back fastest."
  if (annual < 85000)
    return `This sits below the ${SALARY_FACTS.preMbaMedian.short} median pre-MBA salary of M7 applicants. People in this band who pursue a top MBA typically see the largest percentage jump, because the post-MBA base is set by the employer, not by your previous pay.`
  if (annual < 140000)
    return `This is in the range of the ${SALARY_FACTS.preMbaMedian.short} median pre-MBA salary at top programs. At this level an MBA's return depends heavily on the target industry, because consulting and banking pay ${SALARY_FACTS.m7MedianBase.short}+ base while many other paths pay less.`
  return `This is at or above the ${SALARY_FACTS.m7MedianBase.short} median base salary of M7 MBA graduates. At this level the opportunity cost of a full-time MBA is high, so part-time, executive or employer-sponsored programs often have a better ROI.`
}

export default function PayBreakdown({
  annual,
  hourly,
  h1,
  answer,
  faqs,
  neighbors,
  crumbLabel,
}: {
  annual: number
  hourly: number
  h1: string
  answer: string
  faqs: FaqItem[]
  neighbors: Array<{ href: string; label: string }>
  crumbLabel: string
}) {
  const gross = allPeriods(annual)
  const single = calculatePaycheck({ annualGross: annual, filingStatus: "single", stateCode: "TX" })
  const singleState = calculatePaycheck({ annualGross: annual, filingStatus: "single", stateCode: "CA", stateRate: 0.05 })
  const married = calculatePaycheck({ annualGross: annual, filingStatus: "married", stateCode: "TX" })
  const net = allPeriods(single.takeHome)
  const monthlyNet = single.takeHome / 12

  const schedules = [
    { label: "Full-time, 52 weeks (2,080 hrs)", hours: 40, weeks: 52 },
    { label: "Full-time, 2 weeks unpaid (2,000 hrs)", hours: 40, weeks: 50 },
    { label: "Part-time, 30 hrs/week", hours: 30, weeks: 52 },
    { label: "Part-time, 20 hrs/week", hours: 20, weeks: 52 },
    { label: "Overtime, 50 hrs/week at base rate", hours: 50, weeks: 52 },
  ]

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10">
        <header className="space-y-4">
          <nav className="text-xs text-slate-500 flex gap-1 flex-wrap">
            <Link href="/" className="hover:text-slate-300">CareerReturns</Link>
            <span>/</span>
            <Link href="/salary-calculator" className="hover:text-slate-300">Salary Calculator</Link>
            <span>/</span>
            <span className="text-slate-400">{crumbLabel}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">{h1}</h1>
          <div className="rounded-2xl bg-linear-to-br from-indigo-950/70 to-violet-950/60 border border-indigo-500/25 p-5 space-y-2">
            <p className="text-lg text-white leading-relaxed">{answer}</p>
            <p className="text-sm text-slate-300">
              After 2026 federal tax and FICA, that is about <strong className="text-emerald-300">{usd(single.takeHome)} a year</strong>{" "}
              ({usd(monthlyNet)} a month) for a single filer in a state with no income tax.
            </p>
          </div>
          <ArticleMeta updated={PAY_PAGES_UPDATED} />
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">Breakdown by pay period</h2>
          <div className="rounded-2xl bg-white/5 border border-white/10 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-400">
                  <th className="text-left font-medium p-3">Period</th>
                  <th className="text-right font-medium p-3">Gross</th>
                  <th className="text-right font-medium p-3">Take-home (est.)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {PERIODS.map((p) => (
                  <tr key={p}>
                    <td className="p-3">{PERIOD_LABELS[p]}</td>
                    <td className="p-3 text-right text-slate-300">{usd(gross[p], p === "hourly" ? 2 : 0)}</td>
                    <td className="p-3 text-right text-emerald-300">{usd(net[p], p === "hourly" ? 2 : 0)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500">Based on 40 hours a week, 52 weeks a year. Take-home assumes a single filer, standard deduction, no state income tax.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">{usd(annual)} a year after taxes</h2>
          <div className="rounded-2xl bg-white/5 border border-white/10 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-400">
                  <th className="text-left font-medium p-3">Scenario</th>
                  <th className="text-right font-medium p-3">Total tax</th>
                  <th className="text-right font-medium p-3">Take-home / yr</th>
                  <th className="text-right font-medium p-3">Per month</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { label: "Single, no state income tax (e.g. TX, FL)", r: single },
                  { label: "Single, 5% state income tax", r: singleState },
                  { label: "Married filing jointly, sole earner, no state tax", r: married },
                ].map(({ label, r }) => (
                  <tr key={label}>
                    <td className="p-3">{label}</td>
                    <td className="p-3 text-right text-slate-300">{usd(r.totalTax)} ({(r.effectiveRate * 100).toFixed(1)}%)</td>
                    <td className="p-3 text-right text-emerald-300">{usd(r.takeHome)}</td>
                    <td className="p-3 text-right text-slate-300">{usd(r.takeHome / 12)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            For the single filer, federal income tax is {usd(single.federalTax)}, Social Security is {usd(single.socialSecurity)}{" "}
            and Medicare is {usd(single.medicare)}. The top federal bracket reached is {(single.marginalRate * 100).toFixed(0)}%, but
            only the dollars above that threshold are taxed at that rate. Your exact figure depends on your state, deductions and
            401(k).{" "}
            <Link href={`/salary-calculator?pay=${annual}&per=annual`} className="text-indigo-300 hover:underline">
              Run your own numbers →
            </Link>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">At {usd(hourly, 2)} an hour on different schedules</h2>
          <div className="rounded-2xl bg-white/5 border border-white/10 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-400">
                  <th className="text-left font-medium p-3">Schedule</th>
                  <th className="text-right font-medium p-3">Annual gross</th>
                  <th className="text-right font-medium p-3">Monthly gross</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {schedules.map((s) => {
                  const a = hourly * s.hours * s.weeks
                  return (
                    <tr key={s.label}>
                      <td className="p-3">{s.label}</td>
                      <td className="p-3 text-right text-white">{usd(a)}</td>
                      <td className="p-3 text-right text-slate-300">{usd(a / 12)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500">Hourly employees covered by the FLSA earn 1.5× their rate for hours over 40 a week, so true overtime pay would be higher than the base-rate row.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">A monthly budget on this take-home</h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            The 50/30/20 rule splits take-home pay into needs, wants and savings. On {usd(monthlyNet)} a month that is:
          </p>
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Needs (50%)", v: monthlyNet * 0.5, hint: "rent, utilities, groceries" },
              { label: "Wants (30%)", v: monthlyNet * 0.3, hint: "dining, travel, hobbies" },
              { label: "Savings (20%)", v: monthlyNet * 0.2, hint: "emergency fund, investing" },
            ].map((b) => (
              <div key={b.label} className="rounded-xl bg-white/5 border border-white/10 p-4">
                <p className="text-xs text-slate-400">{b.label}</p>
                <p className="text-xl font-semibold mt-1">{usd(b.v)}</p>
                <p className="text-[11px] text-slate-500 mt-1">{b.hint}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            A common affordability guideline is rent at no more than 30% of gross monthly income. For you that is about{" "}
            {usd(gross.monthly * 0.3)} a month.
          </p>
        </section>

        <section className="rounded-2xl bg-linear-to-br from-violet-950/50 to-indigo-950/40 border border-violet-500/20 p-6 space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">Is {usd(annual)} a good salary?</h2>
          <p className="text-sm text-slate-300 leading-relaxed">{context(annual)}</p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/am-i-underpaid" className="text-indigo-300 hover:underline">Benchmark it for your role →</Link>
            <Link href="/job-offer-comparison" className="text-indigo-300 hover:underline">Compare two job offers →</Link>
            <Link href="/mba-salary-increase" className="text-indigo-300 hover:underline">What an MBA adds →</Link>
          </div>
        </section>

        <FaqSection items={faqs} />

        <section className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">Nearby amounts</h2>
          <div className="flex flex-wrap gap-2">
            {neighbors.map((n) => (
              <Link key={n.href} href={n.href} className="rounded-lg bg-white/5 border border-white/10 px-3 py-1.5 text-sm text-slate-300 hover:border-indigo-500/40">
                {n.label}
              </Link>
            ))}
          </div>
        </section>

        <p className="text-xs text-slate-500 leading-relaxed">
          Estimates use 2026 IRS brackets and standard deduction, the 2026 Social Security wage base of $184,500 and Medicare
          rates. They exclude local taxes, credits and pre-tax benefits other than a 401(k). See the{" "}
          <Link href="/salary-calculator" className="underline underline-offset-2">salary calculator methodology</Link> and our{" "}
          <Link href="/disclaimer" className="underline underline-offset-2">disclaimer</Link>.
        </p>
      </div>
    </main>
  )
}
