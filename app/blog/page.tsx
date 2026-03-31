import Link from "next/link"
import { pageAlternates } from "@/lib/seo"

export const metadata = {
  title: "Blog | MBA ROI, Career Finance & Return-to-Work Insights | CareerReturns",
  description:
    "In-depth articles on MBA ROI, career finance, salary negotiation, and return-to-work strategies. Data-driven analysis from the CareerReturns team.",
  alternates: pageAlternates("https://careerreturns.com/blog"),
  openGraph: {
    title: "Blog | MBA ROI, Career Finance & Return-to-Work Insights | CareerReturns",
    description: "Data-driven articles on MBA ROI, career finance, salary negotiation, and return-to-work strategies.",
    url: "https://careerreturns.com/blog",
    siteName: "CareerReturns",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | CareerReturns",
    description: "In-depth articles on MBA ROI, career finance, and return-to-work strategies.",
  },
}

const articles = [
  {
    slug: "is-mba-worth-it-2026",
    title: "Is an MBA Worth It in 2026? A Full Financial Analysis",
    description:
      "We ran the NPV and IRR numbers across 12 industries and 4 school tiers. Here is exactly when an MBA pays off — and when it does not.",
    date: "March 24, 2026",
    readTime: "12 min read",
    tag: "MBA ROI",
    tagColor: "text-emerald-400",
    tagBg: "bg-emerald-400/10 border-emerald-400/20",
  },
  {
    slug: "how-to-calculate-mba-roi",
    title: "How to Actually Calculate MBA ROI (NPV, IRR, Break-Even)",
    description:
      "Most MBA ROI calculators get the math wrong. This guide walks through the correct discounted cash flow framework — opportunity cost, loan amortization, and all.",
    date: "March 20, 2026",
    readTime: "14 min read",
    tag: "Finance 101",
    tagColor: "text-blue-400",
    tagBg: "bg-blue-400/10 border-blue-400/20",
  },
  {
    slug: "mba-salary-negotiation",
    title: "How to Negotiate Your Post-MBA Salary: A Data-Driven Playbook",
    description:
      "Post-MBA offers are negotiable more often than recruiters admit. Here is what the data says about leverage points, timing, and how to close a $20k–$40k gap.",
    date: "March 17, 2026",
    readTime: "11 min read",
    tag: "Salary",
    tagColor: "text-violet-400",
    tagBg: "bg-violet-400/10 border-violet-400/20",
  },
  {
    slug: "mba-vs-masters-vs-bootcamp",
    title: "MBA vs. Master's vs. Bootcamp: ROI Comparison for 2026",
    description:
      "Three paths, three cost structures, three ROI profiles. We model the NPV of each so you can compare apples to apples before committing six figures.",
    date: "March 14, 2026",
    readTime: "13 min read",
    tag: "Comparison",
    tagColor: "text-amber-400",
    tagBg: "bg-amber-400/10 border-amber-400/20",
  },
  {
    slug: "career-break-return-strategies",
    title: "6 Strategies for Returning to Work After a Career Break",
    description:
      "A career gap of 1–3 years costs the average professional $180k–$320k in cumulative earnings. These six strategies minimize the damage and accelerate your return.",
    date: "March 10, 2026",
    readTime: "10 min read",
    tag: "Career Return",
    tagColor: "text-rose-400",
    tagBg: "bg-rose-400/10 border-rose-400/20",
  },
  {
    slug: "women-mba-roi",
    title: "The Gender MBA ROI Gap: What the Data Actually Shows",
    description:
      "Women face a persistent salary gap pre-MBA and a different one post-MBA. We break down the numbers and what that means for ROI projections, school selection, and career path.",
    date: "March 7, 2026",
    readTime: "11 min read",
    tag: "Research",
    tagColor: "text-pink-400",
    tagBg: "bg-pink-400/10 border-pink-400/20",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-emerald-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12 sm:space-y-16">

        <header className="space-y-5">
          <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest">CareerReturns · Blog</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            Career Finance,<br />
            <span className="text-slate-400">Data-Driven.</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Long-form analysis on MBA ROI, career investment decisions, salary negotiation, and
            returning to work. Built on the same financial models that power our calculators.
          </p>
        </header>

        <section className="space-y-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="block group bg-white/3 hover:bg-white/6 border border-white/8 hover:border-white/15 rounded-2xl p-6 sm:p-7 transition-all duration-200"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${article.tagBg} ${article.tagColor}`}>
                    {article.tag}
                  </span>
                  <span className="text-slate-500 text-xs">{article.date}</span>
                  <span className="text-slate-600 text-xs">·</span>
                  <span className="text-slate-500 text-xs">{article.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold tracking-tight group-hover:text-emerald-300 transition-colors leading-snug">
                  {article.title}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {article.description}
                </p>
                <p className="text-emerald-400 text-sm font-medium group-hover:text-emerald-300 transition-colors">
                  Read article →
                </p>
              </div>
            </Link>
          ))}
        </section>

        <section className="rounded-2xl bg-white/3 border border-white/10 p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Use the Calculators</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Every insight in these articles is backed by the same financial models available in our free calculators.
            Run your own numbers alongside what you read.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/mba-roi-calculator" className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors">
              MBA ROI Calculator →
            </Link>
            <Link href="/career-gap-calculator" className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors">
              Career Gap Calculator →
            </Link>
            <Link href="/education-comparison-calculator" className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors">
              Education Comparison →
            </Link>
          </div>
        </section>

      </div>

      <footer className="border-t border-white/10 py-8 text-center text-slate-500 text-xs space-y-2">
        <p>
          <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
          {" · "}
          <Link href="/mba-roi" className="hover:text-slate-300 transition-colors">MBA ROI Guide</Link>
          {" · "}
          <Link href="/mba-roi-calculator" className="hover:text-slate-300 transition-colors">Calculator</Link>
          {" · "}
          <Link href="/about" className="hover:text-slate-300 transition-colors">About</Link>
        </p>
        <p>Rational decisions. Compounding outcomes.</p>
      </footer>

    </main>
  )
}
