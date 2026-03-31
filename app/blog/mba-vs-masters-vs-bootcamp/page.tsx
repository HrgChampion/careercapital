import Link from "next/link"
import { pageAlternates, articleSchema, breadcrumbSchema } from "@/lib/seo"

const _articleSchema = articleSchema({
  title: "MBA vs. Master's vs. Bootcamp: ROI Comparison for 2026",
  description:
    "Three paths, three cost structures, three ROI profiles. We model the NPV of each so you can compare apples to apples before committing six figures.",
  url: "https://careerreturns.com/blog/mba-vs-masters-vs-bootcamp",
  datePublished: "2026-03-14",
  dateModified: "2026-03-14",
})

const _breadcrumbSchema = breadcrumbSchema([
  { name: "Blog", url: "https://careerreturns.com/blog" },
  { name: "MBA vs. Master's vs. Bootcamp", url: "https://careerreturns.com/blog/mba-vs-masters-vs-bootcamp" },
])

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Which has better ROI: an MBA or a Master's degree?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on the field. For general management, leadership, and career switching into consulting or finance, an MBA from a top program produces higher long-run ROI due to network access and salary premiums. For technical specializations (data science, engineering management, computer science), a specialized Master's degree often produces comparable or better ROI at lower cost. The key is whether your target role requires broad management credentialing (MBA) or deep technical depth (Master's).",
      },
    },
    {
      "@type": "Question",
      "name": "Is a coding bootcamp worth it compared to an MBA or Master's?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bootcamps have the best cost-to-salary-delta ratio for candidates making a career switch into software engineering. A $15k–$20k bootcamp producing a $50k–$80k salary increase has an extraordinarily high IRR (often 100%+) — but the salary ceiling is lower. Senior software engineering roles that pay $250k+ typically require a CS degree or equivalent experience, not bootcamp credentials. Bootcamps are optimal for the first career step into tech, not for reaching the top tier.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the average cost of a Master's degree vs. MBA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Master's degree at a top-25 US university costs $40,000–$100,000 in tuition (1–2 years). An MBA at an M7 program costs $145,000–$165,000 in tuition alone, or $385,000–$485,000 all-in with living expenses and opportunity cost. Specialized Master's programs (MS in Data Science, MS in Finance, MS in Computer Science) are typically 1 year and cost significantly less than a full-time MBA.",
      },
    },
    {
      "@type": "Question",
      "name": "Can a bootcamp replace an MBA for a career switch into product management?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For early-stage product management roles at startups and mid-size tech companies, bootcamp-style PM courses can be sufficient. For senior PM roles at FAANG companies or product leadership at growth-stage startups, an MBA from a T15+ program significantly improves access and salary trajectory. The MBA signals management breadth; bootcamp-style PM credentials signal technical curiosity. Many candidates combine both — but if budget is a constraint, PM bootcamps are a reasonable first step.",
      },
    },
  ],
}

export const metadata = {
  title: "MBA vs. Master's vs. Bootcamp: ROI Comparison 2026 | CareerReturns",
  description:
    "Three paths, three cost structures, three ROI profiles. We model the NPV of each so you can compare apples to apples before committing six figures.",
  alternates: pageAlternates("https://careerreturns.com/blog/mba-vs-masters-vs-bootcamp"),
  openGraph: {
    title: "MBA vs. Master's vs. Bootcamp: ROI Comparison for 2026",
    description: "NPV modeling of three education paths so you can compare apples to apples.",
    url: "https://careerreturns.com/blog/mba-vs-masters-vs-bootcamp",
    siteName: "CareerReturns",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MBA vs. Master's vs. Bootcamp ROI 2026",
    description: "NPV modeling of three education paths — apples to apples comparison.",
  },
}

export default function MbaMastersBootcampPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(_articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(_breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-amber-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-10 sm:space-y-14">

        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-slate-300 transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-slate-400">MBA vs. Master&apos;s vs. Bootcamp</span>
        </nav>

        {/* Header */}
        <header className="space-y-5">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full border bg-amber-400/10 border-amber-400/20 text-amber-400">Comparison</span>
            <span className="text-slate-500 text-xs">March 14, 2026</span>
            <span className="text-slate-600 text-xs">·</span>
            <span className="text-slate-500 text-xs">13 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
            MBA vs. Master&apos;s vs. Bootcamp<br />
            <span className="text-slate-400">ROI Comparison for 2026</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Three education paths, three cost structures, three salary trajectories. If you are trying to
            decide between a full-time MBA, a specialized Master&apos;s degree, and an accelerated bootcamp or
            certification program, the decision often comes down to one number: the net present value of
            each option given your starting point and target destination.
          </p>
          {/* Author byline */}
          <div className="flex items-center gap-3 pt-2 border-t border-white/8">
            <div className="w-9 h-9 rounded-full bg-amber-600/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
              <span className="text-amber-400 text-sm font-semibold">HG</span>
            </div>
            <div>
              <p className="text-sm font-medium text-white">Himanshu Gauba</p>
              <p className="text-xs text-slate-500">Founder, CareerReturns · Financial modeling &amp; career finance</p>
            </div>
          </div>
        </header>

        {/* Summary comparison */}
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            { path: "Full-Time MBA (M7)", cost: "$385k–$485k", irr: "22–40%", horizon: "10–15 yr payback", color: "text-emerald-400", bg: "bg-emerald-400/8 border-emerald-400/20" },
            { path: "Specialized Master's", cost: "$40k–$100k", irr: "15–35%", horizon: "3–7 yr payback", color: "text-amber-400", bg: "bg-amber-400/8 border-amber-400/20" },
            { path: "Bootcamp / Certificate", cost: "$5k–$25k", irr: "80–200%+", horizon: "1–2 yr payback", color: "text-blue-400", bg: "bg-blue-400/8 border-blue-400/20" },
          ].map((item) => (
            <div key={item.path} className={`border rounded-xl p-4 ${item.bg} text-center space-y-2`}>
              <p className="text-white text-sm font-semibold">{item.path}</p>
              <p className={`${item.color} text-lg font-bold`}>{item.irr}</p>
              <p className="text-slate-500 text-xs">IRR</p>
              <p className="text-slate-400 text-xs">{item.cost} all-in</p>
              <p className="text-slate-500 text-xs">{item.horizon}</p>
            </div>
          ))}
        </div>
        <p className="text-slate-500 text-xs -mt-6">
          Note: Bootcamp IRR is high because the investment base is very small. Absolute dollar return (NPV) is much higher for an MBA in the right path.
        </p>

        {/* Section 1: The right question */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">The Right Question to Ask</h2>
          <p className="text-slate-400 leading-relaxed">
            The comparison between an MBA, a Master&apos;s degree, and a bootcamp is only meaningful when
            you have a specific destination in mind. The question is not &quot;which credential is best?&quot;
            — it is &quot;which credential opens the door I actually want to walk through?&quot;
          </p>
          <p className="text-slate-400 leading-relaxed">
            Each path optimizes for a different outcome. An MBA from an M7 program is the fastest
            path to MBB consulting and bulge bracket banking. A Master&apos;s in Computer Science or
            Data Science is the fastest path to senior technical roles at top tech companies. A coding
            bootcamp or PM certification is the fastest path to an entry-level tech role with the lowest
            upfront investment.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Choosing the wrong credential for your target destination creates two problems: it costs
            more than necessary, and it may not actually open the door you want. Many candidates
            earn an MBA hoping to break into tech product management, when a focused PM bootcamp
            combined with building a portfolio of side projects is cheaper and more effective for
            that specific goal.
          </p>
        </section>

        {/* Section 2: The MBA */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">The Full-Time MBA: When It Wins</h2>
          <p className="text-slate-400 leading-relaxed">
            The MBA is the most expensive and time-intensive option — and also the most powerful for
            certain paths. Its advantages are structural, not cosmetic:
          </p>
          <div className="space-y-3">
            {[
              {
                advantage: "Locked recruiting access for MBB and bulge bracket banking",
                detail: "McKinsey, Bain, BCG, Goldman Sachs, Morgan Stanley, and JPMorgan recruit almost exclusively from M7 and T10–15 programs. If you want these firms, the MBA is not optional — it is the credential.",
              },
              {
                advantage: "Network density and alumni access",
                detail: "An HBS or Wharton degree provides access to 50,000+ alumni in positions of decision-making authority. In industries like private equity, real estate, and venture capital, deals and opportunities flow through networks — and MBA program networks are exceptionally dense.",
              },
              {
                advantage: "Career switching at scale",
                detail: "The MBA is uniquely positioned for mid-career switchers. A software engineer switching to consulting, or a doctor switching to healthcare management, uses the MBA as a credential that resets their career track. Master&apos;s degrees and bootcamps do not provide this reset at scale.",
              },
              {
                advantage: "Leadership credentialing",
                detail: "For general management and C-suite trajectories at large corporations, the MBA signals leadership breadth. Many Fortune 500 companies still consider an MBA from a top program a prerequisite for VP+ roles in strategy, corporate development, and operations.",
              },
            ].map((item) => (
              <div key={item.advantage} className="bg-emerald-500/5 border border-emerald-500/15 rounded-xl p-5 space-y-2">
                <p className="font-semibold text-emerald-300 text-sm">{item.advantage}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-400 leading-relaxed">
            The MBA makes financial sense when the salary delta it enables is large and sustained. For
            consulting and banking paths from M7 programs, 10-year NPVs of $186k–$341k are achievable.
            For paths where the MBA does not materially change destination salary, the $385k–$485k
            all-in cost is difficult to justify.
          </p>
        </section>

        {/* Section 3: The Master's */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">The Specialized Master&apos;s Degree: The Underrated Option</h2>
          <p className="text-slate-400 leading-relaxed">
            Specialized Master&apos;s programs — MS in Data Science, MS in Computer Science, MS in Finance,
            MS in Analytics — are systematically underrated as an ROI vehicle. They cost 60–80% less
            than a full-time MBA, can often be completed in 12–18 months, and produce high salary outcomes
            in technical fields where depth is valued over breadth.
          </p>
          <div className="space-y-2">
            {[
              { program: "MS in Computer Science (T20 university)", cost: "$45–80k", postGradSalary: "$140–200k", breakEven: "2–3 years", irr: "25–45%" },
              { program: "MS in Data Science (T20 university)", cost: "$40–75k", postGradSalary: "$130–185k", breakEven: "2–4 years", irr: "20–38%" },
              { program: "MS in Finance (T25 university)", cost: "$50–90k", postGradSalary: "$110–165k", breakEven: "3–5 years", irr: "18–32%" },
              { program: "MS in Engineering Management (T30)", cost: "$35–65k", postGradSalary: "$120–175k", breakEven: "2–4 years", irr: "20–40%" },
            ].map((row) => (
              <div key={row.program} className="bg-white/3 border border-white/8 rounded-xl px-4 py-3">
                <div className="flex items-center justify-between mb-1.5">
                  <p className="text-white text-sm font-medium">{row.program}</p>
                  <p className="text-amber-400 font-semibold text-sm">{row.irr}</p>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400">
                  <span>Cost: {row.cost}</span>
                  <span>Post-grad salary: {row.postGradSalary}</span>
                  <span>Break-even: {row.breakEven}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-400 leading-relaxed">
            The Master&apos;s degree advantage is most pronounced for candidates targeting technical roles.
            A software engineer with a Master&apos;s in CS from Georgia Tech or UIUC earns $180k–$200k at
            a Tier-1 tech company — the same outcome as many MBA paths, at a fraction of the cost.
            The opportunity cost is also much lower: most MS programs are 12 months, not 24.
          </p>
        </section>

        {/* Section 4: The bootcamp */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">The Bootcamp / Certificate: The Fastest Payback</h2>
          <p className="text-slate-400 leading-relaxed">
            Bootcamps have the highest IRR of the three options — sometimes over 100% — because the
            investment base is tiny. A $15,000 coding bootcamp that produces a $55,000 salary increase
            pays back in less than a year. No MBA or Master&apos;s can match that math on a pure percentage basis.
          </p>
          <p className="text-slate-400 leading-relaxed">
            However, the absolute NPV is much smaller, and the ceiling is lower. Bootcamp graduates
            enter the job market as junior engineers or junior analysts. Without a degree, many senior
            roles and management tracks are effectively closed. The bootcamp is optimal for:
          </p>
          <div className="space-y-2">
            {[
              "Career switchers who want to enter a new field quickly and at low cost",
              "Candidates who already have a degree and need skills, not credentials",
              "People who want to validate interest in a new field before investing in a full degree",
              "Roles where skills testing matters more than credentials (many tech startups)",
            ].map((item) => (
              <div key={item} className="flex gap-3 items-start py-1.5">
                <span className="text-blue-400 mt-0.5 flex-shrink-0">→</span>
                <p className="text-slate-400 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Decision framework */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">The Decision Framework: Which Path Is Right for You</h2>
          <div className="space-y-3">
            {[
              {
                condition: "You want to work at MBB, Goldman Sachs, JPMorgan, or in private equity",
                answer: "Full-Time MBA (M7 or T10–15)",
                rationale: "These firms recruit through MBA programs. There is no alternative credential that provides equivalent access.",
                color: "border-emerald-500/30 bg-emerald-500/5",
                answerColor: "text-emerald-400",
              },
              {
                condition: "You want a senior technical role at a Tier-1 tech company",
                answer: "MS in CS / Data Science",
                rationale: "Technical depth matters more than management breadth. A Master&apos;s from a strong program produces equivalent compensation at 20–30% of the MBA cost.",
                color: "border-amber-500/30 bg-amber-500/5",
                answerColor: "text-amber-400",
              },
              {
                condition: "You want to switch into tech and are budget-constrained",
                answer: "Bootcamp + Portfolio",
                rationale: "For entry-level software engineering or data roles, bootcamps provide a credible first step. Supplement with a strong GitHub portfolio and 1–2 real projects.",
                color: "border-blue-500/30 bg-blue-500/5",
                answerColor: "text-blue-400",
              },
              {
                condition: "You want to switch industries (e.g., engineer to consulting, doctor to management)",
                answer: "Full-Time MBA",
                rationale: "The MBA is the most widely accepted mechanism for mid-career industry switching. A Master&apos;s or bootcamp in a different field signals competence in a new skill, but the MBA signals general management readiness.",
                color: "border-emerald-500/30 bg-emerald-500/5",
                answerColor: "text-emerald-400",
              },
            ].map((row) => (
              <div key={row.condition} className={`border ${row.color} rounded-xl p-5 space-y-2`}>
                <p className="text-slate-300 text-sm font-medium">If: {row.condition}</p>
                <p className={`font-semibold ${row.answerColor} text-sm`}>→ {row.answer}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{row.rationale}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-xl bg-amber-600/10 border border-amber-500/20 p-5 space-y-3">
          <p className="text-amber-300 font-semibold text-sm">Compare Education Options with the Calculator</p>
          <p className="text-slate-400 text-sm leading-relaxed">
            The Education Comparison Calculator models the NPV and IRR of up to 3 education paths
            side-by-side using your specific cost and salary inputs.
          </p>
          <Link
            href="/education-comparison-calculator"
            className="inline-block bg-amber-600 hover:bg-amber-500 transition-colors px-5 py-2.5 rounded-lg text-white text-sm font-medium"
          >
            Compare Education ROI →
          </Link>
        </section>

        {/* FAQ */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((item) => (
              <div key={item.name} className="border border-white/10 rounded-xl p-5 space-y-2">
                <p className="font-semibold text-white text-sm">{item.name}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: "/mba-vs-masters-roi", label: "MBA vs. Master's ROI Guide" },
              { href: "/education-comparison-calculator", label: "Education Comparison Calculator" },
              { href: "/reskilling-roi-calculator", label: "Reskilling ROI Calculator" },
              { href: "/blog/is-mba-worth-it-2026", label: "Is an MBA Worth It in 2026?" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="block text-sm text-amber-400 hover:text-amber-300 transition-colors py-2 px-3 rounded-lg border border-white/8 hover:border-white/15">
                {label} →
              </Link>
            ))}
          </div>
        </section>

      </div>

      <footer className="border-t border-white/10 py-8 text-center text-slate-500 text-xs space-y-2">
        <p>
          <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
          {" · "}
          <Link href="/blog" className="hover:text-slate-300 transition-colors">Blog</Link>
          {" · "}
          <Link href="/mba-roi-calculator" className="hover:text-slate-300 transition-colors">MBA ROI Calculator</Link>
          {" · "}
          <Link href="/about" className="hover:text-slate-300 transition-colors">About</Link>
        </p>
        <p>Salary data sourced from GMAC surveys, school employment reports, Glassdoor, Levels.fyi, and publicly reported compensation figures. All ranges are estimates; individual outcomes vary.</p>
      </footer>

    </main>
  )
}
