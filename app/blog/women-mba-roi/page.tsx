import Link from "next/link"
import { pageAlternates, articleSchema, breadcrumbSchema } from "@/lib/seo"

const _articleSchema = articleSchema({
  title: "The Gender MBA ROI Gap: What the Data Actually Shows",
  description:
    "Women face a persistent salary gap pre-MBA and a different one post-MBA. We break down the numbers and what that means for ROI projections, school selection, and career path.",
  url: "https://careerreturns.com/blog/women-mba-roi",
  datePublished: "2026-03-07",
  dateModified: "2026-03-07",
})

const _breadcrumbSchema = breadcrumbSchema([
  { name: "Blog", url: "https://careerreturns.com/blog" },
  { name: "The Gender MBA ROI Gap", url: "https://careerreturns.com/blog/women-mba-roi" },
])

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do women get lower ROI from an MBA than men?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The IRR of an MBA for women is actually higher than for men in most scenarios, despite the post-MBA salary gap. The reason is that women's lower pre-MBA salaries result in lower opportunity cost (foregone salary during school) and produce a larger salary delta (the percentage jump from pre-MBA to post-MBA is greater). The absolute NPV in dollar terms may be lower due to lower post-MBA salaries, but the IRR percentage is often comparable or higher.",
      },
    },
    {
      "@type": "Question",
      "name": "Which MBA programs have the best outcomes for women?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Programs with strong consulting and finance placement (where pay is standardized by class year regardless of gender) tend to have the smallest gender pay gaps post-graduation. Harvard, Wharton, Stanford, and Booth all report median starting salaries in the $175k–$200k range with minimal gender differentiation at the point of hire. The gap tends to emerge 3–7 years post-graduation when bonus discretion and negotiation dynamics diverge.",
      },
    },
    {
      "@type": "Question",
      "name": "Does an MBA reduce the gender pay gap?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At the point of hire, yes. Post-MBA starting salaries at structured employers (MBB, bulge bracket banks, large tech companies) are largely standardized by class year and show minimal gender gaps. However, GMAC data and independent research consistently show that the gender pay gap re-emerges within 5–7 years of graduation, driven by differences in bonus discretion, negotiation behavior, and career break incidence. The MBA provides a narrow window of parity at entry.",
      },
    },
    {
      "@type": "Question",
      "name": "Are there MBA scholarships specifically for women?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Most top MBA programs have women-specific fellowships, some worth $20,000–$80,000. Notable examples: Forté Foundation fellowships at over 50 partner schools, the Consortium for Graduate Study in Management (which includes gender equity programs), school-specific awards like the Forte Fellowship at Wharton, and the Robert Toigo Foundation for diverse candidates in finance. Applying for these should be part of every female candidate's scholarship strategy.",
      },
    },
  ],
}

export const metadata = {
  title: "The Gender MBA ROI Gap: What the Data Actually Shows | CareerReturns",
  description:
    "Women face a persistent salary gap pre-MBA and a different one post-MBA. We break down the numbers and what that means for ROI projections, school selection, and career path.",
  alternates: pageAlternates("https://careerreturns.com/blog/women-mba-roi"),
  openGraph: {
    title: "The Gender MBA ROI Gap: What the Data Actually Shows",
    description: "Pre-MBA salary gap, post-MBA outcomes, and what it means for women's ROI projections.",
    url: "https://careerreturns.com/blog/women-mba-roi",
    siteName: "CareerReturns",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Gender MBA ROI Gap: What the Data Shows",
    description: "Pre-MBA salary gap, post-MBA outcomes, and what it means for women's ROI projections.",
  },
}

export default function WomenMbaRoiPage() {
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
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-pink-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-10 sm:space-y-14">

        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-slate-300 transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-slate-400">The Gender MBA ROI Gap</span>
        </nav>

        {/* Header */}
        <header className="space-y-5">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full border bg-pink-400/10 border-pink-400/20 text-pink-400">Research</span>
            <span className="text-slate-500 text-xs">March 7, 2026</span>
            <span className="text-slate-600 text-xs">·</span>
            <span className="text-slate-500 text-xs">11 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
            The Gender MBA ROI Gap<br />
            <span className="text-slate-400">What the Data Actually Shows</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Women entering MBA programs face a well-documented pre-MBA salary gap — and a different,
            more complex gap after graduation. Understanding both is essential for accurately modeling
            MBA ROI as a woman, and for making strategic decisions about school selection, career path,
            and negotiation.
          </p>
          {/* Author byline */}
          <div className="flex items-center gap-3 pt-2 border-t border-white/8">
            <div className="w-9 h-9 rounded-full bg-pink-600/20 border border-pink-500/30 flex items-center justify-center flex-shrink-0">
              <span className="text-pink-400 text-sm font-semibold">HG</span>
            </div>
            <div>
              <p className="text-sm font-medium text-white">Himanshu Gauba</p>
              <p className="text-xs text-slate-500">Founder, CareerReturns · Financial modeling &amp; career finance</p>
            </div>
          </div>
        </header>

        {/* The counterintuitive finding */}
        <div className="bg-pink-500/8 border border-pink-500/20 rounded-xl p-5 space-y-2">
          <p className="text-pink-300 font-semibold text-sm">The Counterintuitive Finding</p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Despite a persistent post-MBA salary gap, women&apos;s IRR from an MBA is often <em className="text-white">higher</em> than men&apos;s —
            because lower pre-MBA salaries mean lower opportunity cost and a larger percentage salary jump.
            The absolute NPV in dollars may be lower, but the annualized return on investment often is not.
          </p>
        </div>

        {/* Section 1: Pre-MBA gap */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">The Pre-MBA Gender Gap: The Starting Point</h2>
          <p className="text-slate-400 leading-relaxed">
            The gender salary gap entering an MBA program is smaller than in the general workforce, but it
            is real. GMAC data consistently shows that the median pre-MBA salary for women is approximately
            8–14% lower than for men across most industries and experience levels. At the individual level,
            this gap varies significantly by field.
          </p>
          <div className="space-y-2">
            {[
              { industry: "Technology", menPreMBA: "$115k", womenPreMBA: "$105k", gap: "–8.7%" },
              { industry: "Finance / Banking", menPreMBA: "$110k", womenPreMBA: "$95k", gap: "–13.6%" },
              { industry: "Consulting", menPreMBA: "$95k", womenPreMBA: "$88k", gap: "–7.4%" },
              { industry: "Healthcare / Pharma", menPreMBA: "$90k", womenPreMBA: "$80k", gap: "–11.1%" },
              { industry: "Consumer Goods / CPG", menPreMBA: "$80k", womenPreMBA: "$72k", gap: "–10.0%" },
            ].map((row) => (
              <div key={row.industry} className="bg-white/3 border border-white/8 rounded-xl px-4 py-3 flex items-center justify-between gap-3">
                <p className="text-white text-sm">{row.industry}</p>
                <div className="flex items-center gap-4 text-right flex-shrink-0">
                  <div>
                    <p className="text-slate-300 text-sm font-medium">{row.menPreMBA}</p>
                    <p className="text-slate-500 text-xs">Men</p>
                  </div>
                  <div>
                    <p className="text-pink-300 text-sm font-medium">{row.womenPreMBA}</p>
                    <p className="text-slate-500 text-xs">Women</p>
                  </div>
                  <div>
                    <p className="text-red-400 text-sm font-semibold">{row.gap}</p>
                    <p className="text-slate-500 text-xs">Gap</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs">
            Source: GMAC Prospective Students Survey 2025, median reported pre-MBA salaries by gender and industry. US market.
          </p>
          <p className="text-slate-400 leading-relaxed">
            This pre-MBA gap matters for MBA ROI in a specific way: it lowers opportunity cost. If a man
            earns $115k and a woman earns $105k before the MBA, the man forfeits $230k in opportunity
            cost over two years while the woman forfeits $210k. That $20k difference improves the
            woman&apos;s NPV calculation at the input stage — before we even consider what happens after graduation.
          </p>
        </section>

        {/* Section 2: Post-MBA gap */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">The Post-MBA Gap: When Parity Occurs and When It Does Not</h2>
          <p className="text-slate-400 leading-relaxed">
            At the point of hire — the starting salary in the first post-MBA role — gender gaps are
            smallest at structured employers. MBB consulting firms, bulge bracket banks, and major tech
            companies use standardized compensation grids that do not vary by gender. An M7 graduate
            entering McKinsey in 2026 earns $190,000–$215,000 base salary whether male or female.
          </p>
          <p className="text-slate-400 leading-relaxed">
            The gap re-emerges within 3–7 years of graduation. GMAC&apos;s longitudinal data and independent
            research (including Harvard Business School&apos;s own alumni surveys) consistently find that
            10 years post-MBA, women&apos;s total compensation is 30–40% lower than men&apos;s with equivalent
            qualifications. The causes are complex and include:
          </p>
          <div className="space-y-3">
            {[
              {
                cause: "Bonus discretion",
                detail: "At most financial services firms, the base salary is standardized but the performance bonus is discretionary. Research shows that women receive systematically lower discretionary bonus awards even at equivalent performance ratings.",
              },
              {
                cause: "Negotiation divergence",
                detail: "Studies show that women negotiate less frequently than men (roughly 57% vs. 73% who negotiate their first offer post-MBA), and are penalized more often when they do. This creates a widening gap from the first offer onward.",
              },
              {
                cause: "Career break incidence",
                detail: "Women are significantly more likely to take career breaks for caregiving. Each break produces the foregone earnings, re-entry salary discount, and promotion delay described in our career break analysis — and these costs compound over a career.",
              },
              {
                cause: "Industry and firm drift",
                detail: "Women are more likely to move into lower-paying functions (HR, marketing) and away from higher-paying functions (deal teams, trading, product) as their careers progress. Whether this reflects preference or structural barriers is debated — the financial impact is material either way.",
              },
            ].map((item) => (
              <div key={item.cause} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="font-semibold text-pink-300 text-sm">{item.cause}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: IRR comparison */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">The IRR Math: Why Women&apos;s MBA ROI Is Often Higher</h2>
          <p className="text-slate-400 leading-relaxed">
            The counterintuitive finding in the data is that despite lower post-MBA salaries, women&apos;s
            MBA IRR often exceeds men&apos;s. Here is the math for an M7 consulting path:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-blue-500/8 border border-blue-500/20 rounded-xl p-5 space-y-3">
              <p className="text-blue-300 font-semibold text-sm">Male MBA Candidate</p>
              <div className="space-y-1.5 text-sm">
                {[
                  { label: "Pre-MBA salary", value: "$115k" },
                  { label: "Opportunity cost (2 yrs)", value: "$230k" },
                  { label: "Post-MBA base", value: "$210k" },
                  { label: "Salary delta", value: "$95k/yr" },
                  { label: "IRR (10-yr)", value: "27%" },
                  { label: "10-yr NPV", value: "+$264k" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between">
                    <p className="text-slate-400">{row.label}</p>
                    <p className="text-white font-medium">{row.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-pink-500/8 border border-pink-500/20 rounded-xl p-5 space-y-3">
              <p className="text-pink-300 font-semibold text-sm">Female MBA Candidate</p>
              <div className="space-y-1.5 text-sm">
                {[
                  { label: "Pre-MBA salary", value: "$103k" },
                  { label: "Opportunity cost (2 yrs)", value: "$206k" },
                  { label: "Post-MBA base", value: "$200k" },
                  { label: "Salary delta", value: "$97k/yr" },
                  { label: "IRR (10-yr)", value: "29%" },
                  { label: "10-yr NPV", value: "+$248k" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between">
                    <p className="text-slate-400">{row.label}</p>
                    <p className="text-white font-medium">{row.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-slate-400 leading-relaxed">
            The female candidate&apos;s IRR (29%) exceeds the male candidate&apos;s (27%) because the lower pre-MBA
            salary produces a lower opportunity cost and a higher percentage salary delta. The absolute NPV
            is lower ($248k vs. $264k) because the post-MBA salary is lower — but the percentage return on
            the investment is actually better. This is a feature of the math, not a consolation prize.
          </p>
        </section>

        {/* Section 4: Strategy implications */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">What This Means for School Selection and Career Path</h2>
          <p className="text-slate-400 leading-relaxed">
            Understanding the gender MBA ROI profile has specific implications for strategic decisions:
          </p>
          <div className="space-y-4">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">1. Target structured-pay employers first</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                The gender pay gap at entry is smallest at MBB consulting firms and bulge bracket banks,
                where compensation grids are standardized by class year. Women who prioritize these
                employers post-MBA benefit from the parity window at entry — and from the exit
                opportunities these roles create. Roles with discretionary bonus pools (general management,
                sales, private banking) show gender gaps earlier and more steeply.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">2. Apply for women-specific scholarships aggressively</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Women-specific MBA scholarships are underutilized because many candidates do not know
                they exist or underestimate their own eligibility. The Forté Foundation has partner
                programs at 50+ MBA schools offering fellowships of $10,000–$80,000. Every qualified
                woman should apply. Each dollar of scholarship improves NPV and reduces the cost
                basis of the investment.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">3. Negotiate every offer, always</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                The research on female MBA graduates negotiating is stark: women who negotiate
                their first offer close a material portion of the lifetime earnings gap relative
                to those who do not. Given that the starting salary anchors every future negotiation,
                this is the highest-leverage action available at the point of hire. See our salary
                negotiation guide for specific tactics.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">4. Model multiple scenarios including career break scenarios</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Women who are planning for eventual caregiving responsibilities should model two scenarios:
                a straight-line career with no breaks, and a scenario including a 1–2 year break 5–8 years
                post-MBA. The gap in these two scenarios can be $200,000+ in 10-year cumulative earnings.
                This modeling is not pessimistic — it is preparation. Knowing the financial stakes of
                the break decision is information that enables better planning, not a predetermined outcome.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-xl bg-pink-600/10 border border-pink-500/20 p-5 space-y-3">
          <p className="text-pink-300 font-semibold text-sm">Model Your Specific MBA ROI</p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Run your own numbers — including your pre-MBA salary, target school cost, and expected
            post-MBA salary — to see your NPV, IRR, and break-even period.
          </p>
          <Link
            href="/mba-roi-calculator"
            className="inline-block bg-pink-600 hover:bg-pink-500 transition-colors px-5 py-2.5 rounded-lg text-white text-sm font-medium"
          >
            Launch MBA ROI Calculator →
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
              { href: "/women-returning-to-work", label: "Women Returning to Work Guide" },
              { href: "/mba-roi", label: "MBA ROI by Industry — Full Guide" },
              { href: "/blog/mba-salary-negotiation", label: "MBA Salary Negotiation Playbook" },
              { href: "/blog/career-break-return-strategies", label: "6 Career Break Return Strategies" },
              { href: "/mba-roi-scholarship", label: "MBA Scholarship ROI Impact" },
              { href: "/career-gap-calculator", label: "Career Gap Calculator" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="block text-sm text-pink-400 hover:text-pink-300 transition-colors py-2 px-3 rounded-lg border border-white/8 hover:border-white/15">
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
        <p>Salary data sourced from GMAC surveys, HBS alumni research, school employment reports, and publicly reported compensation figures. All ranges are estimates; individual outcomes vary.</p>
      </footer>

    </main>
  )
}
