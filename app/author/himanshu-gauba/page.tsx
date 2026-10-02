import Link from "next/link"
import { pageAlternates } from "@/lib/seo"
import SiteFooter from "@/components/SiteFooter"

const URL = "https://careerreturns.com/author/himanshu-gauba"

export const metadata = {
  title: "Himanshu Gauba — Founder & Author | CareerReturns",
  description:
    "Himanshu Gauba is the founder of CareerReturns and the author of its MBA ROI models, salary guides and career calculators.",
  alternates: pageAlternates(URL),
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: URL,
  mainEntity: {
    "@type": "Person",
    name: "Himanshu Gauba",
    url: URL,
    jobTitle: "Founder, CareerReturns",
    worksFor: { "@type": "Organization", name: "CareerReturns", url: "https://careerreturns.com" },
    knowsAbout: ["MBA return on investment", "Discounted cash flow analysis", "Graduate compensation", "Career finance"],
    sameAs: ["https://www.linkedin.com/in/himanshu-gauba/"],
  },
}

const articles: Array<{ href: string; label: string; group: string }> = [
  { group: "Research & data", href: "/mba-roi-report-2026", label: "MBA ROI Report 2026: 12 Industries Modeled" },
  { group: "Research & data", href: "/post-mba-salary", label: "Post-MBA Salary by Industry, City and Role" },
  { group: "Research & data", href: "/mba-salary-by-school", label: "MBA Salary by School" },
  { group: "Research & data", href: "/marketing-mba-salary", label: "Marketing MBA Salary" },
  { group: "Career tracks", href: "/mba-roi-mckinsey", label: "MBA ROI for McKinsey and MBB Consulting" },
  { group: "Career tracks", href: "/mba-roi-goldman-sachs", label: "MBA ROI for Goldman Sachs and Investment Banking" },
  { group: "Career tracks", href: "/mba-roi-tech", label: "MBA ROI for Tech and Product Management" },
  { group: "Career tracks", href: "/mba-roi-europe", label: "European MBA ROI: INSEAD, LBS and More" },
  { group: "Blog", href: "/blog/how-to-calculate-mba-roi", label: "How to Actually Calculate MBA ROI (NPV, IRR, Break-Even)" },
  { group: "Blog", href: "/blog/mba-salary-negotiation", label: "How to Negotiate Your Post-MBA Salary" },
  { group: "Blog", href: "/blog/mba-vs-masters-vs-bootcamp", label: "MBA vs. Master's vs. Bootcamp: ROI Comparison" },
  { group: "Blog", href: "/blog/women-mba-roi", label: "The Gender MBA ROI Gap: What the Data Shows" },
  { group: "Blog", href: "/blog/career-break-return-strategies", label: "6 Strategies for Returning to Work After a Career Break" },
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
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">How Himanshu works</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Every figure is traced to a published source or computed by the same model you can run yourself in the{" "}
            <Link href="/mba-roi-calculator" className="text-purple-400 underline underline-offset-2">MBA ROI Calculator</Link>.
            The standards he follows are set out in the{" "}
            <Link href="/editorial-policy" className="text-purple-400 underline underline-offset-2">editorial policy</Link>,
            and the model itself is documented in the{" "}
            <Link href="/about#methodology" className="text-purple-400 underline underline-offset-2">methodology</Link>.
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
      </div>
      <SiteFooter />
    </main>
  )
}
