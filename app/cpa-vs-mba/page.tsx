import Link from "next/link"
import ArticleMeta from "@/components/ArticleMeta"
import FaqSection, { type FaqItem } from "@/components/FaqSection"
import RelatedLinks from "@/components/RelatedLinks"
import SiteFooter from "@/components/SiteFooter"
import { articleSchema, breadcrumbSchema, pageAlternates } from "@/lib/seo"
import { getBenchmark } from "@/lib/compensationBenchmarks"
import { DISCOUNT_RATE, calculateMBA, npvFromSeries } from "@/lib/mbaEngine"
import { usd } from "@/lib/paycheckEngine"
import { SALARY_FACTS } from "@/lib/salaryFacts"

const URL = "https://careerreturns.com/cpa-vs-mba"
const UPDATED = "2026-11-04"
const TITLE = "CPA vs MBA: Salary, Cost & ROI Compared (2026)"
const DESCRIPTION =
  "CPA vs MBA in 2026: cost, time, salary lift and 10-year NPV side by side. A CPA pays back in months, while an M7 MBA costs more but has a higher ceiling. When each wins, plus Canadian CPA pay."

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: pageAlternates(URL),
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, siteName: "CareerReturns", type: "article" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
}

// ── Model inputs (all figures sourced below) ─────────────────────────────────
// Mid-level accountant, tier-1 metro: benchmark median from lib/compensationBenchmarks.
const accountant = getBenchmark({ industry: "finance", role: "accountant", experience: "mid", location: "tier1", companySize: "enterprise" })!
const cpa = getBenchmark({ industry: "finance", role: "cpa", experience: "mid", location: "tier1", companySize: "enterprise" })!
const BASE_SALARY = accountant.p50
const CPA_LIFT = cpa.p50 - accountant.p50
const CPA_COST = 3500 // exam fees (~$1,150–$1,850) + a mid-priced review course
const M7_COST = 285000 // two years of tuition + living costs, see /mba-cost
const M7_POST = 175000 // SALARY_FACTS.m7MedianBase

// CPA: earned while working, so no lost income. The premium grows with salary at 3%/yr.
const cpaFlows = [-CPA_COST, ...Array.from({ length: 10 }, (_, t) => CPA_LIFT * Math.pow(1.03, t))]
const cpaNpv = npvFromSeries(cpaFlows, DISCOUNT_RATE)
const cpaPaybackMonths = Math.ceil((CPA_COST / CPA_LIFT) * 12)

const mba = calculateMBA({
  currentSalary: BASE_SALARY,
  postMbaSalary: M7_POST,
  mbaCost: M7_COST,
  programDuration: 2,
  loanPercentage: 0.8,
  interestRate: 0.08,
})

const comparison: string[][] = [
  ["", "CPA license", "Full-time M7 MBA"],
  ["Direct cost", `≈ ${usd(CPA_COST)}`, `≈ ${usd(M7_COST)} tuition + living`],
  ["Lost income", "$0 (study while working)", usd(mba.lostIncome)],
  ["Time", "12–18 months of part-time study", "2 years full-time"],
  ["Typical salary lift", `+${usd(CPA_LIFT)}/yr (~12%)`, `+${usd(M7_POST - BASE_SALARY)}/yr base`],
  ["Payback", `≈ ${cpaPaybackMonths} months`, `≈ ${mba.paybackPeriod.toFixed(1)} years`],
  ["10-year NPV at 6%", usd(cpaNpv), mba.npv !== null ? usd(mba.npv) : "n/a"],
  ["Ceiling", "Partner, controller, CFO track in finance", "MBB, IB, PE, tech leadership and general management"],
]

const faqs: FaqItem[] = [
  {
    q: "Is a CPA or an MBA better for salary?",
    a: `For an accountant, the CPA is the better near-term return: it costs about ${usd(CPA_COST)}, can be done while working, and adds roughly 5–15% to pay, so it pays back in about ${cpaPaybackMonths} months. A full-time M7 MBA raises the ceiling far more, with an M7 median base of ${SALARY_FACTS.m7MedianBase.short}, but it costs several hundred thousand dollars including lost salary and takes years to pay back.`,
  },
  {
    q: "How much more does a CPA earn than a regular accountant?",
    a: "Robert Half puts the CPA premium at 5–15% depending on role and experience, and the AICPA cites up to 15%. On the BLS median accountant salary of $83,680 (May 2025), that is roughly $4,000–$12,500 a year, and the gap widens at manager and controller level where licensure is often required.",
  },
  {
    q: "Should I get a CPA before an MBA?",
    a: "Often, yes. The CPA is cheap, quick and boosts the salary you would otherwise give up during an MBA. It also strengthens applications for finance-oriented MBA roles. The exception is someone certain they want to leave accounting for consulting or banking, for whom the MBA is the main credential and the CPA adds little.",
  },
  {
    q: "Do I still need 150 credit hours to become a CPA?",
    a: "Not in every state. In 2025 the AICPA and NASBA added a second pathway to the model licensing law: a bachelor's degree with an accounting concentration, two years of experience and passing the CPA Exam. Many states have adopted it, with effective dates from 2025 onwards, while the 150-hour route with one year of experience remains available. Check your state board.",
  },
  {
    q: "What does a CPA earn in Canada?",
    a: "CPA Canada's 2025 compensation study reports a median total compensation of about C$150,000 for Canadian CPAs, and C$154,000 for those with at least three years of post-designation experience. Alberta (C$169,000) and Ontario (C$163,000) were the highest-paying provinces.",
  },
  {
    q: "Is a CPA worth it if I want to move into consulting?",
    a: "It helps for finance-heavy consulting such as transaction advisory, restructuring or Big 4 advisory, where accounting credibility is valued. For strategy consulting at McKinsey, BCG or Bain, a top MBA is the standard entry route and the CPA is a secondary signal.",
  },
]

export default function CpaVsMbaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({ title: TITLE, description: DESCRIPTION, url: URL, datePublished: UPDATED, dateModified: UPDATED, namedAuthor: true })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "CPA vs MBA", url: URL }])) }}
      />
      <main className="min-h-screen bg-slate-950 text-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10">
          <header className="space-y-4">
            <Link href="/" className="text-xs text-slate-500 hover:text-slate-300">← CareerReturns</Link>
            <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">Degree & credential ROI</p>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">CPA vs MBA: Salary, Cost &amp; ROI Compared</h1>
            <ArticleMeta updated={UPDATED} byline="author" />
            <div className="rounded-2xl bg-linear-to-br from-indigo-950/70 to-violet-950/60 border border-indigo-500/25 p-5">
              <p className="text-white leading-relaxed">
                <strong>Short answer:</strong> for an accountant, the CPA is the safer, faster first move. It costs about{" "}
                {usd(CPA_COST)}, takes about a year of study alongside work, adds roughly {usd(CPA_LIFT)} a year and pays back in about{" "}
                {cpaPaybackMonths} months, for a 10-year NPV of about {usd(cpaNpv)} on almost no money at risk. A full-time M7 MBA is a
                bigger bet with a bigger payoff. It moves base pay from about {usd(BASE_SALARY)} to {SALARY_FACTS.m7MedianBase.short} and
                {mba.npv !== null ? ` reaches a 10-year NPV of about ${usd(mba.npv)},` : ""} but costs {usd(M7_COST)} plus{" "}
                {usd(mba.lostIncome)} of lost salary and takes about {mba.paybackPeriod.toFixed(0)} years to pay back. That only holds if
                you use the MBA to leave accounting for higher-paying work.
              </p>
            </div>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">CPA vs MBA at a glance</h2>
            <div className="rounded-2xl bg-white/5 border border-white/10 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-slate-400">
                    {comparison[0].map((h, i) => (
                      <th key={i} className="text-left font-medium p-3">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {comparison.slice(1).map((row) => (
                    <tr key={row[0]}>
                      {row.map((c, i) => (
                        <td key={i} className={`p-3 ${i === 0 ? "text-white font-medium" : "text-slate-300"}`}>{c}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Both paths start from a mid-level accountant in a major metro earning {usd(BASE_SALARY)}. The CPA lift is the gap between our
              accountant and CPA benchmarks, grown 3% a year. The MBA uses our standard model: 80% loan-financed at 8%, two years of
              lost salary, and the M7 median base after graduation. NPVs are discounted at 6%.{" "}
              <Link href={`/mba-roi-calculator`} className="underline underline-offset-2">Run the MBA side with your own numbers →</Link>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Accountant and CPA salaries in 2026</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              The Bureau of Labor Statistics puts the median accountant and auditor salary at <strong className="text-white">$83,680</strong>{" "}
              (May 2025). The lowest 10% earn under $56,020 and the top 10% over $144,090. Pay varies by employer: the median is $93,290
              in finance and insurance against $81,490 in accounting and tax-preparation firms. Licensure moves you up that range. Robert
              Half's salary guide puts the CPA premium at 5–15%, and the AICPA cites up to 15%.
            </p>
            <div className="rounded-2xl bg-white/5 border border-white/10 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-slate-400">
                    <th className="text-left font-medium p-3">Level (major metro)</th>
                    <th className="text-right font-medium p-3">Accountant median</th>
                    <th className="text-right font-medium p-3">CPA median</th>
                    <th className="text-right font-medium p-3">CPA P90</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {(["junior", "mid", "senior"] as const).map((exp) => {
                    const a = getBenchmark({ industry: "finance", role: "accountant", experience: exp, location: "tier1", companySize: "enterprise" })!
                    const c = getBenchmark({ industry: "finance", role: "cpa", experience: exp, location: "tier1", companySize: "enterprise" })!
                    return (
                      <tr key={exp}>
                        <td className="p-3 text-white">{exp === "junior" ? "Staff (0–3 yrs)" : exp === "mid" ? "Senior (3–6 yrs)" : "Manager (6–10 yrs)"}</td>
                        <td className="p-3 text-right text-slate-300">{usd(a.p50)}</td>
                        <td className="p-3 text-right text-emerald-300">{usd(c.p50)}</td>
                        <td className="p-3 text-right text-slate-300">{usd(c.p90)}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-400">
              <Link href="/am-i-underpaid" className="text-indigo-300 hover:underline">Check your own accountant or CPA salary against these benchmarks →</Link>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight">What each path costs and how long it takes</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              <strong className="text-white">CPA.</strong> The four-section exam costs about $1,150–$1,850 in mandatory fees depending on
              your state. A review course adds $1,000–$6,000, so most candidates spend $2,000–$5,500 in total. Most people study
              part-time for 12–18 months while keeping their job, so there is no lost salary. The bigger hurdle used to be the
              150-credit-hour education rule. Since 2025, a second route (a bachelor's in accounting plus two years of experience) has
              been adopted in many states, so fewer candidates need a fifth year of school.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              <strong className="text-white">MBA.</strong> A full-time M7 program costs roughly $473,000–$492,000 all-in once you add two
              years of tuition, living costs and the salary you give up (see our{" "}
              <Link href="/mba-cost" className="text-indigo-300 hover:underline">MBA cost breakdown</Link>). Part-time and online MBAs cut
              the lost-income cost to near zero but deliver a smaller salary jump, as our{" "}
              <Link href="/part-time-mba-roi" className="text-indigo-300 hover:underline">part-time MBA ROI</Link> analysis shows.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight">When the CPA wins, and when the MBA wins</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm leading-relaxed">
              <li><strong className="text-white">Choose the CPA</strong> if you want to stay in accounting, audit, tax or corporate finance. It is required to sign audit opinions and for many controller roles, and it is close to a pure win financially.</li>
              <li><strong className="text-white">Choose the MBA</strong> if you want to leave accounting for strategy consulting, investment banking, private equity or general management. The CPA does not open those doors, and those industries pay {SALARY_FACTS.m7MedianBase.short}+ base out of a top program.</li>
              <li><strong className="text-white">Do both, in order,</strong> if you are aiming for CFO. Many finance leaders hold a CPA and an MBA. Earning the CPA first raises your pre-MBA salary, strengthens the application and keeps a fallback career if the MBA job search disappoints.</li>
              <li><strong className="text-white">Consider the employer route</strong> for either. Big 4 firms commonly reimburse CPA exam costs, and some employers sponsor part-time MBAs. See <Link href="/employer-sponsored-mba-roi" className="text-indigo-300 hover:underline">employer-sponsored MBA ROI</Link>.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight">Chartered Professional Accountant (CPA) in Canada</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              In Canada, CPA stands for Chartered Professional Accountant, a single designation that replaced the CA, CMA and CGA in
              2014. The route runs through the CPA Professional Education Program (PEP), which takes about two years part-time while
              working in a relevant role, followed by the Common Final Examination (CFE) and a practical experience requirement.
              CPA Canada's 2025 compensation study reports a median total compensation of about{" "}
              <strong className="text-white">C$150,000</strong>, rising to <strong className="text-white">C$154,000</strong> for CPAs with
              three or more years of post-designation experience. Alberta (C$169,000) and Ontario (C$163,000) lead the provinces.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              The ROI logic is the same as in the US: the designation is relatively cheap and earned while working, so it pays back
              quickly. A Canadian or US MBA then makes most sense as a pivot into consulting, banking or general management. See our{" "}
              <Link href="/mba-roi-europe" className="text-indigo-300 hover:underline">international MBA ROI</Link> comparison.
            </p>
          </section>

          <FaqSection items={faqs} />

          <section className="space-y-2">
            <h2 className="text-xl font-semibold tracking-tight">Sources</h2>
            <ul className="list-disc pl-5 space-y-1 text-slate-400 text-sm leading-relaxed">
              <li>U.S. Bureau of Labor Statistics, Occupational Outlook Handbook: Accountants and Auditors (OEWS, May 2025).</li>
              <li>Robert Half, Finance and Accounting Salary Guide 2026–2027 (role midpoints and the CPA premium).</li>
              <li>AICPA and NASBA, Uniform Accountancy Act amendments (2025): additional CPA licensure pathway.</li>
              <li>NASBA / state boards: CPA Exam section fees (2026).</li>
              <li>CPA Canada, Compensation Study 2025: National Report.</li>
              <li>CareerReturns MBA ROI model and M7 salary data ({SALARY_FACTS.m7MedianBase.source}).</li>
            </ul>
          </section>
        </article>
        <RelatedLinks
          links={[
            { href: "/mba-vs-masters-roi", label: "MBA vs Master's ROI", description: "MS Finance, MSCS and MFin against the MBA" },
            { href: "/mba-roi-calculator", label: "MBA ROI Calculator", description: "NPV, IRR and break-even on your own numbers" },
            { href: "/am-i-underpaid", label: "Am I Underpaid?", description: "Benchmark an accountant or CPA salary" },
            { href: "/salary-calculator", label: "Salary & Paycheck Calculator", description: "Take-home pay after 2026 taxes" },
          ]}
        />
      </main>
      <SiteFooter />
    </>
  )
}
