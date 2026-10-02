import Link from "next/link"
import { pageAlternates } from "@/lib/seo"
import SiteFooter from "@/components/SiteFooter"

export const metadata = {
  title: "Editorial Policy & Corrections | CareerReturns",
  description:
    "How CareerReturns researches, models, reviews and updates its MBA ROI guides and calculators — sources, update schedule, AI use, corrections and advertising independence.",
  alternates: pageAlternates("https://careerreturns.com/editorial-policy"),
}

const sources = [
  ["School employment reports", "Each program's official annual employment report (median base, signing bonus, % employed, industry mix). These are the primary source for school-level salary figures."],
  ["GMAC surveys", "Corporate Recruiters Survey and Prospective Students Survey for market-wide starting salaries and hiring intent."],
  ["Program cost pages", "Tuition, fees and the school's own cost-of-attendance budget, taken from the admissions or financial-aid page for the current academic year."],
  ["U.S. Bureau of Labor Statistics", "Occupational wage data and wage growth used for pre-MBA baselines and non-MBA comparison paths."],
  ["Federal Student Aid / VA", "Loan interest rates, repayment plan rules, GI Bill caps and Yellow Ribbon rules."],
  ["Compensation aggregators", "Levels.fyi and Glassdoor, used only as a cross-check for tech and finance total compensation — never as the sole source."],
]

export default function EditorialPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12">
        <header className="space-y-4">
          <p className="text-xs font-medium text-purple-400 uppercase tracking-widest">CareerReturns</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">Editorial Policy</h1>
          <p className="text-slate-400 text-sm">Last updated: <span className="text-white">October 2, 2026</span></p>
          <p className="text-slate-400 text-base leading-relaxed">
            CareerReturns publishes financial models and guides that people use to make six-figure education
            and career decisions. That raises the bar for accuracy. This page explains where our numbers come
            from, how a guide is built and reviewed, how often it is refreshed, and what we do when we get
            something wrong.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Who writes and reviews the content</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Every guide and calculator is researched, modeled and reviewed by{" "}
            <Link href="/author/himanshu-gauba" className="text-purple-400 underline underline-offset-2">Himanshu Gauba</Link>,
            the founder of CareerReturns, who has a background in financial modeling and software engineering.
            Where a page carries a byline, that person is accountable for its accuracy. CareerReturns does not
            publish guest posts, sponsored articles or paid placements.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Where our data comes from</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            We prefer primary sources over secondary ones, and we state ranges rather than false precision when
            sources disagree.
          </p>
          <div className="space-y-3">
            {sources.map(([t, d]) => (
              <div key={t} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-1">
                <p className="text-white font-semibold text-sm">{t}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">How a guide is built</h2>
          <ol className="list-decimal pl-5 space-y-2 text-slate-400 text-sm leading-relaxed">
            <li>Define the decision the reader faces (for example, &ldquo;part-time vs full-time MBA for a $90K engineer&rdquo;).</li>
            <li>Collect current figures from the sources above and record the source year for each.</li>
            <li>Run the scenario through the same discounted cash flow engine that powers our calculators — 6% discount rate, 10-year horizon, loan amortization and opportunity cost included — so every number on a guide is reproducible in the tool.</li>
            <li>Write the explanation, including the assumptions and the cases where the conclusion flips.</li>
            <li>Check every figure against its source before publishing, and again at each scheduled review.</li>
          </ol>
          <p className="text-slate-400 text-sm leading-relaxed">
            The full model specification is described in our{" "}
            <Link href="/about#methodology" className="text-purple-400 underline underline-offset-2">methodology</Link>.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Update schedule</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Salary and cost pages are reviewed at least twice a year: once when schools publish employment
            reports (typically October–December) and once when new tuition figures are released (spring).
            Loan-rate and GI Bill pages are reviewed each July when federal rates reset. The &ldquo;Last updated&rdquo;
            date on a page changes only when its substance changes — not for cosmetic edits.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Use of AI tools</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            We use AI assistants for drafting help, code and proofreading. AI tools are never the source of a
            figure: every number is taken from a cited source or produced by our own calculation engine, and
            every page is reviewed by a person before it goes live.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Corrections</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            If you spot an error, please tell us through the{" "}
            <Link href="/contact" className="text-purple-400 underline underline-offset-2">contact page</Link>{" "}
            with the page URL and the figure in question. We verify reports against the source, usually within
            a week. Material corrections — anything that changes a conclusion — are noted on the page with the
            date of the change.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Advertising and independence</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            CareerReturns is free and is supported by display advertising served by Google. Advertisers have no
            influence over what we write, which schools or programs we cover, or what our calculators output. We
            are not affiliated with any business school, lender or employer. If we ever add affiliate links, they
            will be labeled on the page and disclosed in our{" "}
            <Link href="/disclaimer" className="text-purple-400 underline underline-offset-2">disclaimer</Link>.
          </p>
        </section>
      </div>
      <SiteFooter />
    </main>
  )
}
