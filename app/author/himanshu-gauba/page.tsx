import Link from "next/link"
import { pageAlternates } from "@/lib/seo"
import SiteFooter from "@/components/SiteFooter"
import FaqSection, { type FaqItem } from "@/components/FaqSection"
import { SALARY_FACTS } from "@/lib/salaryFacts"

const URL = "https://careerreturns.com/author/himanshu-gauba"
const UPDATED = "2026-11-24"

const DESCRIPTION =
  "Himanshu Gauba founded CareerReturns and builds its MBA ROI models, salary guides and career calculators. His methods, sources and work."

export const metadata = {
  title: "Himanshu Gauba, Founder of CareerReturns",
  description: DESCRIPTION,
  alternates: pageAlternates(URL),
  openGraph: {
    title: "Himanshu Gauba, Founder of CareerReturns",
    description: DESCRIPTION,
    url: URL,
    siteName: "CareerReturns",
    type: "profile",
  },
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: URL,
  dateModified: UPDATED,
  mainEntity: {
    "@type": "Person",
    "@id": `${URL}#person`,
    name: "Himanshu Gauba",
    url: URL,
    description: DESCRIPTION,
    jobTitle: "Founder, CareerReturns",
    worksFor: { "@type": "Organization", name: "CareerReturns", url: "https://careerreturns.com" },
    knowsAbout: [
      "MBA return on investment",
      "Discounted cash flow analysis",
      "Net present value and internal rate of return",
      "Graduate compensation",
      "Student loan repayment",
      "US payroll tax",
      "Returning to work after a career break",
      "Career finance",
    ],
    sameAs: ["https://www.linkedin.com/in/himanshu-gauba/"],
  },
}

const articles: Array<{ href: string; label: string; group: string }> = [
  { group: "Research & data", href: "/mba-roi-report-2026", label: "MBA ROI Report 2026: 12 Industries Modeled" },
  { group: "Research & data", href: "/post-mba-salary", label: "Post-MBA Salary by Industry, City and Role" },
  { group: "Research & data", href: "/mba-salary-by-school", label: "MBA Salary by School" },
  { group: "Research & data", href: "/marketing-mba-salary", label: "Marketing MBA Salary" },
  { group: "Research & data", href: "/mba-investment-banking-salary", label: "MBA Investment Banking Salary, Bank by Bank" },
  { group: "Career tracks", href: "/mba-roi-mckinsey", label: "MBA ROI for McKinsey and MBB Consulting" },
  { group: "Career tracks", href: "/mba-roi-goldman-sachs", label: "MBA ROI for Goldman Sachs and Investment Banking" },
  { group: "Career tracks", href: "/mba-roi-tech", label: "MBA ROI for Tech and Product Management" },
  { group: "Career tracks", href: "/mba-roi-europe", label: "European MBA ROI: INSEAD, LBS and More" },
  { group: "Career tracks", href: "/employer-sponsored-mba-roi", label: "Employer-Sponsored MBA ROI" },
  { group: "Calculators", href: "/mba-roi-calculator", label: "MBA ROI Calculator (NPV, IRR, break-even)" },
  { group: "Calculators", href: "/salary-calculator", label: "Salary and Paycheck Calculator (2026 tax)" },
  { group: "Calculators", href: "/career-gap-calculator", label: "Career Gap Calculator" },
  { group: "Calculators", href: "/loyalty-tax-calculator", label: "Loyalty Tax Calculator" },
  { group: "Calculators", href: "/education-comparison-calculator", label: "MBA vs Bootcamp vs Master's Calculator" },
  { group: "Blog", href: "/blog/mba-loans-2026-grad-plus-changes", label: "MBA Loans After Grad PLUS: How the 2026 Caps Change MBA ROI" },
  { group: "Blog", href: "/blog/how-to-calculate-mba-roi", label: "How to Actually Calculate MBA ROI (NPV, IRR, Break-Even)" },
  { group: "Blog", href: "/blog/mba-salary-negotiation", label: "How to Negotiate Your Post-MBA Salary" },
  { group: "Blog", href: "/blog/mba-vs-masters-vs-bootcamp", label: "MBA vs. Master's vs. Bootcamp: ROI Comparison" },
  { group: "Blog", href: "/blog/women-mba-roi", label: "The Gender MBA ROI Gap: What the Data Shows" },
  { group: "Blog", href: "/blog/career-break-return-strategies", label: "6 Strategies for Returning to Work After a Career Break" },
]

const focusAreas = [
  {
    title: "MBA return on investment",
    body: "Whether a full-time, part-time, executive or employer-sponsored MBA pays back, and how fast, once tuition, two years of lost salary and loan interest are counted.",
  },
  {
    title: "Post-MBA compensation",
    body: `Base, signing and performance bonus by school, industry and employer, anchored to figures such as the ${SALARY_FACTS.m7MedianBase.value} ${SALARY_FACTS.m7MedianBase.label.toLowerCase()} (${SALARY_FACTS.m7MedianBase.source}).`,
  },
  {
    title: "Education financing",
    body: "Federal and private loan costs, repayment plans, scholarships and the 2026 changes to federal graduate borrowing, modeled month by month rather than with simple interest.",
  },
  {
    title: "Pay and take-home",
    body: "Hourly, salary and paycheck conversions using 2026 IRS brackets, the standard deduction and FICA, so that salary comparisons are made on what people actually keep.",
  },
  {
    title: "Returning to work",
    body: "The earnings cost of a career break and the re-entry paths that recover it fastest: direct re-entry, returnships and reskilling.",
  },
]

const principles = [
  "Price the whole decision. An MBA costs tuition plus the salary you give up while studying plus interest. Leaving out opportunity cost, as many calculators do, can understate the true cost by half.",
  "Use one model everywhere. Every guide is run through the same discounted cash flow engine as the calculators, with a 6% discount rate and a 10-year horizon, so any figure on the site can be reproduced by a reader.",
  "Show the assumptions. Each calculator page explains its inputs, formulas and a worked example, and says where the conclusion flips.",
  "Trace every number. Figures come from school employment reports, GMAC surveys, the IRS, the Social Security Administration, the Bureau of Labor Statistics and the Department of Education, with the source year recorded.",
  "Prefer the conservative case. When sources disagree, the lower salary or higher cost is used, and risk is modeled with probabilities rather than best-case outcomes.",
]

const faqs: FaqItem[] = [
  {
    q: "Who is Himanshu Gauba?",
    a: "Himanshu Gauba is the founder of CareerReturns. He designs the calculation engine behind the site's MBA ROI, salary and career calculators and writes or reviews every guide.",
  },
  {
    q: "Is CareerReturns affiliated with any business school or lender?",
    a: "No. CareerReturns is independent and is supported by display advertising. Advertisers have no say over what is written or what the calculators output.",
  },
  {
    q: "How can I report an error in an article?",
    a: "Use the contact page with the page URL and the figure in question. Reports are checked against the original source, usually within a week, and material corrections are noted on the page with the date of the change.",
  },
  {
    q: "Does Himanshu give personal financial or admissions advice?",
    a: "No. The guides and calculators are educational tools for comparing scenarios. For decisions about your own loans, taxes or applications, speak to a qualified adviser.",
  },
]

export default function AuthorPage() {
  const groups = Array.from(new Set(articles.map((a) => a.group)))
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12">
        <header className="space-y-4">
          <p className="text-xs font-medium text-purple-400 uppercase tracking-widest">Author</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">Himanshu Gauba</h1>
          <p className="text-slate-300">Founder, CareerReturns</p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Builds the models behind every CareerReturns calculator and writes or reviews every guide on MBA return on
            investment, post-MBA pay, education financing and returning to work.
          </p>
          <a
            href="https://www.linkedin.com/in/himanshu-gauba/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-purple-400 hover:text-purple-300 text-sm"
          >
            linkedin.com/in/himanshu-gauba →
          </a>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">About Himanshu</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Himanshu built CareerReturns after going through the MBA decision himself and finding that the
            available tools — rankings, salary surveys and ROI calculators that ignored opportunity cost — were
            not good enough for a decision that can cost $300,000 or more. With a background in financial
            modeling and software engineering, he applied the discounted cash flow methods used in corporate
            finance (NPV, IRR, payback period) to education and career choices.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            He designs the calculation engine behind every CareerReturns tool, researches the salary and cost
            data from school employment reports, GMAC and federal sources, and writes or reviews every guide on
            the site. His focus areas are MBA return on investment, post-MBA compensation, education financing
            and returning to work after a career break.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            The site started as a single MBA ROI calculator. It now covers more than 40 calculators and guides,
            from program-by-program MBA comparisons and bank-by-bank investment banking pay to hourly-wage
            conversions and career-break recovery plans. They share one engine, so a loan payment, a tax
            estimate or a break-even year is calculated the same way wherever it appears.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Areas of focus</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {focusAreas.map((f) => (
              <div key={f.title} className="rounded-xl bg-white/5 border border-white/10 p-4 space-y-1">
                <h3 className="text-sm font-medium text-white">{f.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">How Himanshu works</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm leading-relaxed">
            {principles.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <p className="text-slate-400 text-sm leading-relaxed">
            You can run the same model yourself in the{" "}
            <Link href="/mba-roi-calculator" className="text-purple-400 underline underline-offset-2">MBA ROI Calculator</Link>.
            The standards he follows are set out in the{" "}
            <Link href="/editorial-policy" className="text-purple-400 underline underline-offset-2">editorial policy</Link>,
            and the model itself is documented in the{" "}
            <Link href="/about#methodology" className="text-purple-400 underline underline-offset-2">methodology</Link>.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Review and update schedule</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Salary and cost pages are reviewed at least twice a year: when schools publish employment reports
            (typically October to December) and when new tuition figures are released in the spring. Loan-rate pages
            are reviewed each July when federal rates reset, and tax-based tools are updated when the IRS publishes
            the next year&apos;s brackets. A page&apos;s &ldquo;Last updated&rdquo; date changes only when its substance
            changes.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            AI assistants are used for drafting help, code and proofreading, never as the source of a figure. Every
            number comes from a cited source or the site&apos;s own calculation engine, and every page is reviewed by
            Himanshu before it goes live.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Independence and corrections</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            CareerReturns is not affiliated with any business school, lender or employer, and advertisers have no
            influence over what is covered or what the calculators show. If you find an error, send the page URL and
            the figure in question through the{" "}
            <Link href="/contact" className="text-purple-400 underline underline-offset-2">contact page</Link>.
            Material corrections are noted on the page with the date of the change.
          </p>
        </section>

        {groups.map((g) => (
          <section key={g} className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight">{g}</h2>
            <ul className="space-y-2">
              {articles
                .filter((a) => a.group === g)
                .map((a) => (
                  <li key={a.href}>
                    <Link href={a.href} className="text-slate-300 hover:text-white text-sm">
                      {a.label} →
                    </Link>
                  </li>
                ))}
            </ul>
          </section>
        ))}

        <FaqSection items={faqs} />
      </div>
      <SiteFooter />
    </main>
  )
}
