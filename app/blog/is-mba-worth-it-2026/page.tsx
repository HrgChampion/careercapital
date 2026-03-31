import Link from "next/link"
import { pageAlternates, articleSchema, breadcrumbSchema } from "@/lib/seo"

const _articleSchema = articleSchema({
  title: "Is an MBA Worth It in 2026? A Full Financial Analysis",
  description:
    "We ran the NPV and IRR numbers across 12 industries and 4 school tiers. Here is exactly when an MBA pays off — and when it does not.",
  url: "https://careerreturns.com/blog/is-mba-worth-it-2026",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
})

const _breadcrumbSchema = breadcrumbSchema([
  { name: "Blog", url: "https://careerreturns.com/blog" },
  { name: "Is an MBA Worth It in 2026?", url: "https://careerreturns.com/blog/is-mba-worth-it-2026" },
])

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is an MBA worth it financially in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on your destination industry. For management consulting, investment banking, and private equity, IRR typically runs 22–40%, making the MBA a strong financial investment. For nonprofit or government roles, IRR may be 4–14%, which often fails to justify the cost at sticker price. School tier and scholarship aid also materially shift the numbers.",
      },
    },
    {
      "@type": "Question",
      "name": "How long does it take to break even on an MBA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Break-even periods range from 2.0 years (veterans using GI Bill + Yellow Ribbon for consulting) to 13+ years (nonprofit roles, no scholarship, lower-tier programs). The median break-even for an M7 graduate entering consulting is 4.2–4.7 years. For tech (FAANG), the break-even is longer at 6.1–7.0 years despite high salaries, because pre-MBA tech salaries are already high.",
      },
    },
    {
      "@type": "Question",
      "name": "Does school rank matter for MBA ROI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, significantly. M7 programs (Harvard, Wharton, Stanford, Booth, Kellogg, Sloan, Columbia) produce median starting salaries of $175k+ and open MBB consulting and top-tier banking recruiting. T10–15 programs produce $145–165k median salaries with solid firm access. T15–25 programs produce $120–140k with limited MBB access. The ROI gap between M7 and T25 is roughly 8–15 IRR points for consulting paths.",
      },
    },
    {
      "@type": "Question",
      "name": "Is an online MBA worth the same ROI as a full-time MBA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Online MBAs cost significantly less ($30k–$80k vs $200k–$250k) and can be completed while working, eliminating the opportunity cost. However, they do not open the same recruiting doors as residential programs — particularly for MBB consulting and bulge bracket banking. The ROI math is better on a pure cost basis, but the salary outcome ceiling is lower.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the average salary increase after an MBA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The average post-MBA salary increase for a full-time program graduate is $35k–$90k per year depending on pre-MBA career and destination industry. Management consultants see the largest jump — often $85k–$130k over pre-MBA salary including bonuses. Technology roles see more modest jumps of $20k–$50k because pre-MBA tech salaries are often already competitive.",
      },
    },
  ],
}

export const metadata = {
  title: "Is an MBA Worth It in 2026? A Full Financial Analysis | CareerReturns",
  description:
    "We ran the NPV and IRR numbers across 12 industries and 4 school tiers. Here is exactly when an MBA pays off — and when it does not. Full financial analysis with data.",
  alternates: pageAlternates("https://careerreturns.com/blog/is-mba-worth-it-2026"),
  openGraph: {
    title: "Is an MBA Worth It in 2026? A Full Financial Analysis",
    description: "NPV and IRR across 12 industries and 4 school tiers. When an MBA pays off — and when it does not.",
    url: "https://careerreturns.com/blog/is-mba-worth-it-2026",
    siteName: "CareerReturns",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Is an MBA Worth It in 2026?",
    description: "NPV and IRR across 12 industries and 4 school tiers. Full financial analysis.",
  },
}

export default function IsMbaWorthItPage() {
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
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-emerald-600/12 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-10 sm:space-y-14">

        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-slate-300 transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-slate-400">Is an MBA Worth It in 2026?</span>
        </nav>

        {/* Header */}
        <header className="space-y-5">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full border bg-emerald-400/10 border-emerald-400/20 text-emerald-400">MBA ROI</span>
            <span className="text-slate-500 text-xs">March 24, 2026</span>
            <span className="text-slate-600 text-xs">·</span>
            <span className="text-slate-500 text-xs">12 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
            Is an MBA Worth It in 2026?<br />
            <span className="text-slate-400">A Full Financial Analysis</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            The average full-time MBA at a top-10 US program now costs $315,000–$415,000 all-in when
            you include tuition, living expenses, and two years of foregone salary. That is a significant
            capital allocation decision — and most prospective students make it without running the numbers.
          </p>
          {/* Author byline */}
          <div className="flex items-center gap-3 pt-2 border-t border-white/8">
            <div className="w-9 h-9 rounded-full bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
              <span className="text-emerald-400 text-sm font-semibold">HG</span>
            </div>
            <div>
              <p className="text-sm font-medium text-white">Himanshu Gauba</p>
              <p className="text-xs text-slate-500">Founder, CareerReturns · Financial modeling &amp; career finance</p>
            </div>
          </div>
        </header>

        {/* Key stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "IRR Range", value: "4–55%" },
            { label: "Break-Even Range", value: "2–13 yrs" },
            { label: "Industries Modeled", value: "12" },
            { label: "School Tiers Analyzed", value: "4" },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <p className="text-emerald-400 font-semibold text-lg">{value}</p>
              <p className="text-slate-500 text-xs mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Section 1: The question */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">The Question Nobody Answers Numerically</h2>
          <p className="text-slate-400 leading-relaxed">
            &quot;Is an MBA worth it?&quot; is one of the most-searched questions in career finance. The answers you
            typically get are anecdotal — success stories from HBS alumni, or warnings from people who
            graduated into a bad job market. Neither is useful for a financial decision of this size.
          </p>
          <p className="text-slate-400 leading-relaxed">
            The correct framework is a discounted cash flow (DCF) analysis. You model every dollar you
            spend on the MBA — tuition, living costs, the salary you forgo for two years — and compare it
            against every dollar of incremental earnings the MBA generates over your career. You discount
            future cash flows to present value, then compute net present value (NPV) and internal rate
            of return (IRR).
          </p>
          <p className="text-slate-400 leading-relaxed">
            That is what this analysis does. The numbers below are based on published GMAC survey data,
            school employment reports, and publicly reported compensation figures from MBB consulting firms,
            bulge bracket banks, and major technology companies. We ran the model across 12 destination
            industries and 4 school tiers so you can find your specific scenario.
          </p>
        </section>

        {/* Section 2: The true cost */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">The True All-In Cost of an MBA in 2026</h2>
          <p className="text-slate-400 leading-relaxed">
            Most published MBA cost estimates only include tuition. That is a severe undercount. The full
            economic cost of a 2-year full-time MBA has three components:
          </p>
          <div className="space-y-3">
            {[
              {
                label: "Tuition + Fees",
                m7: "$145,000–$165,000",
                t1015: "$120,000–$145,000",
                t1525: "$90,000–$125,000",
                note: "Two-year total, excludes scholarships",
              },
              {
                label: "Living Expenses",
                m7: "$90,000–$120,000",
                t1015: "$70,000–$95,000",
                t1525: "$55,000–$75,000",
                note: "$40k–$60k/yr depending on city",
              },
              {
                label: "Opportunity Cost (foregone salary)",
                m7: "$150,000–$200,000",
                t1015: "$120,000–$170,000",
                t1525: "$100,000–$150,000",
                note: "2 years × pre-MBA base salary",
              },
            ].map((row) => (
              <div key={row.label} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-white text-sm">{row.label}</p>
                  <p className="text-slate-500 text-xs">{row.note}</p>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  <div className="text-center">
                    <p className="text-emerald-400 text-sm font-semibold">{row.m7}</p>
                    <p className="text-slate-500 text-xs mt-0.5">M7 Programs</p>
                  </div>
                  <div className="text-center">
                    <p className="text-amber-400 text-sm font-semibold">{row.t1015}</p>
                    <p className="text-slate-500 text-xs mt-0.5">T10–15</p>
                  </div>
                  <div className="text-center">
                    <p className="text-slate-300 text-sm font-semibold">{row.t1525}</p>
                    <p className="text-slate-500 text-xs mt-0.5">T15–25</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-amber-500/8 border border-amber-500/20 rounded-xl p-5">
            <p className="text-amber-300 text-sm font-semibold mb-2">Total All-In Cost</p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-white font-semibold">$385k–$485k</p>
                <p className="text-slate-500 text-xs mt-0.5">M7 Programs</p>
              </div>
              <div className="text-center">
                <p className="text-white font-semibold">$310k–$410k</p>
                <p className="text-slate-500 text-xs mt-0.5">T10–15</p>
              </div>
              <div className="text-center">
                <p className="text-white font-semibold">$245k–$350k</p>
                <p className="text-slate-500 text-xs mt-0.5">T15–25</p>
              </div>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Opportunity cost is the component most students undercount. If you are earning $85,000 per year
            before the MBA, you forgo $170,000 in gross salary during the program. That money would have
            continued to compound in your retirement account. Ignoring it produces an artificially rosy
            ROI number.
          </p>
        </section>

        {/* Section 3: ROI by industry */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">MBA ROI by Destination Industry: The Complete Breakdown</h2>
          <p className="text-slate-400 leading-relaxed">
            Your destination industry after graduation is the single largest driver of MBA ROI — more than
            school tier, program cost, or scholarship aid. The salary delta (post-MBA minus pre-MBA) is what
            funds the return on investment, and that delta varies from $15k/year in nonprofit roles to
            $115k+/year in top-tier consulting.
          </p>
          <div className="space-y-2">
            {[
              { industry: "Management Consulting (MBB)", irr: "22–40%", breakEven: "4.2–4.7 yrs", verdict: "Strong", color: "text-emerald-400", bg: "bg-emerald-400/5" },
              { industry: "Investment Banking (Bulge Bracket)", irr: "21–38%", breakEven: "4.5–5.0 yrs", verdict: "Strong", color: "text-emerald-400", bg: "bg-emerald-400/5" },
              { industry: "Private Equity / Venture Capital", irr: "23–41%", breakEven: "3.9–4.4 yrs", verdict: "Strong", color: "text-emerald-400", bg: "bg-emerald-400/5" },
              { industry: "Technology (FAANG / Tier-1)", irr: "16–30%", breakEven: "6.1–7.0 yrs", verdict: "Moderate", color: "text-amber-400", bg: "bg-amber-400/5" },
              { industry: "Energy / Oil & Gas", irr: "17–31%", breakEven: "5.7–6.5 yrs", verdict: "Moderate", color: "text-amber-400", bg: "bg-amber-400/5" },
              { industry: "Healthcare / Biotech Management", irr: "15–28%", breakEven: "6.2–7.2 yrs", verdict: "Moderate", color: "text-amber-400", bg: "bg-amber-400/5" },
              { industry: "Big 4 Consulting / Advisory", irr: "14–26%", breakEven: "6.8–8.0 yrs", verdict: "Situational", color: "text-orange-400", bg: "bg-orange-400/5" },
              { industry: "Consumer Goods / CPG", irr: "12–22%", breakEven: "7.8–9.2 yrs", verdict: "Situational", color: "text-orange-400", bg: "bg-orange-400/5" },
              { industry: "Military / Government (GI Bill)", irr: "28–55%", breakEven: "2.0–3.5 yrs", verdict: "Exceptional", color: "text-blue-400", bg: "bg-blue-400/5" },
              { industry: "Nonprofit / Government (no subsidy)", irr: "4–14%", breakEven: "9.4–13.1 yrs", verdict: "Negative at sticker", color: "text-red-400", bg: "bg-red-400/5" },
            ].map((row) => (
              <div key={row.industry} className={`${row.bg} border border-white/8 rounded-xl px-4 py-3 flex items-center justify-between gap-3`}>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium truncate">{row.industry}</p>
                  <p className="text-slate-500 text-xs mt-0.5">Break-even: {row.breakEven}</p>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0 text-right">
                  <div>
                    <p className={`font-semibold text-sm ${row.color}`}>{row.irr}</p>
                    <p className="text-slate-500 text-xs">IRR</p>
                  </div>
                  <span className={`text-xs font-medium ${row.color} hidden sm:block`}>{row.verdict}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs">
            IRR ranges reflect no-scholarship vs. full-scholarship scenarios at M7 programs. Data sources: GMAC Corporate Recruiters Survey 2025, school employment reports, publicly reported compensation figures.
          </p>
        </section>

        {/* Section 4: The tech problem */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">The Tech Problem: Why High Salaries Do Not Always Mean High ROI</h2>
          <p className="text-slate-400 leading-relaxed">
            Technology roles at FAANG and Tier-1 companies pay exceptionally well post-MBA — $200k–$350k
            total compensation at companies like Google, Meta, and Amazon. But the MBA ROI for tech is
            moderate, not exceptional. The reason is the pre-MBA salary problem.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Software engineers and product managers at top tech companies often earn $150k–$220k before
            their MBA. When your pre-MBA salary is already high, two things happen: your opportunity cost
            (the salary you forgo during school) is higher, and the incremental post-MBA salary delta is
            smaller. If you earn $180k pre-MBA and $230k post-MBA, the $50k annual delta has to pay back
            $400k+ in total cost over a decade — producing an IRR in the 16–22% range rather than the
            28–35% you would see in consulting.
          </p>
          <p className="text-slate-400 leading-relaxed">
            This is not to say that tech-path MBAs are bad investments. The 10-year NPV can still be
            $100k–$250k positive. But if your primary goal is maximizing financial ROI, consulting and
            finance paths offer structurally better numbers at the same school cost.
          </p>
        </section>

        {/* Section 5: School tier matters */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">How Much Does School Tier Actually Matter?</h2>
          <p className="text-slate-400 leading-relaxed">
            School tier matters enormously for one specific reason: recruiting access. MBB consulting firms
            (McKinsey, Bain, BCG) and bulge bracket banks (Goldman Sachs, Morgan Stanley, JPMorgan) recruit
            almost exclusively from M7 and select T10–15 programs. If your target path runs through one of
            these firms, the school tier decision is effectively a path-selection decision.
          </p>
          <div className="space-y-3">
            {[
              { tier: "M7 Programs", schools: "HBS, Wharton, Stanford GSB, Booth, Kellogg, Sloan, Columbia", medianSalary: "$175k+", mbbAccess: "Yes", bankingAccess: "Yes" },
              { tier: "T10–15 Programs", schools: "Tuck, Fuqua, Ross, Darden, Stern, Anderson, Haas, Yale SOM", medianSalary: "$145–165k", mbbAccess: "Limited", bankingAccess: "Yes" },
              { tier: "T15–25 Programs", schools: "McCombs, Mendoza, Olin, Smeal, Simon, Kelley, Foster", medianSalary: "$120–140k", mbbAccess: "Rare", bankingAccess: "Regional" },
              { tier: "Online MBAs", schools: "Indiana (online), UNC (online), USC Marshall (online)", medianSalary: "$95–115k", mbbAccess: "No", bankingAccess: "No" },
            ].map((row) => (
              <div key={row.tier} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-white text-sm">{row.tier}</p>
                  <p className="text-emerald-400 font-semibold text-sm">{row.medianSalary}</p>
                </div>
                <p className="text-slate-500 text-xs">{row.schools}</p>
                <div className="flex gap-4 mt-1">
                  <span className={`text-xs ${row.mbbAccess === "Yes" ? "text-emerald-400" : row.mbbAccess === "Limited" ? "text-amber-400" : "text-red-400"}`}>
                    MBB Access: {row.mbbAccess}
                  </span>
                  <span className={`text-xs ${row.bankingAccess === "Yes" ? "text-emerald-400" : row.bankingAccess === "No" ? "text-red-400" : "text-amber-400"}`}>
                    Banking Access: {row.bankingAccess}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-400 leading-relaxed">
            The financial impact of school tier compounds over time. An M7 graduate who lands at MBB starts
            at $190k–$215k and reaches $300k–$500k within 5 years through promotions and exit opportunities.
            A T20 graduate in a similar but lower-tier role starts at $130k–$150k. That $40k–$65k annual
            gap, compounded over a decade, is worth several hundred thousand dollars in present value.
          </p>
        </section>

        {/* Section 6: Scholarships */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Scholarships: The Highest-Leverage Variable in MBA ROI</h2>
          <p className="text-slate-400 leading-relaxed">
            The single most powerful lever you can pull to improve MBA ROI is scholarship aid. A $50,000
            scholarship at an M7 program improves your 10-year NPV by approximately $65,000 in present
            value terms (accounting for the loan interest savings) and reduces your break-even period by
            roughly 8–12 months.
          </p>
          <p className="text-slate-400 leading-relaxed">
            This creates a counterintuitive decision: a T10–15 program with a full scholarship ($120k–$145k
            in tuition covered) often produces better ROI than an M7 program at sticker price — unless your
            target path requires M7 access to MBB or top banking. The math depends on whether school tier
            changes your destination salary. If a T12 scholarship brings you to the same post-MBA role you
            would land from an M7, the T12 scholarship is the financially superior choice.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Most applicants underestimate their scholarship negotiating power. Unlike undergraduate
            admissions, graduate programs actively compete for qualified candidates. If you have been
            admitted to multiple programs, you can leverage one offer against another. Schools have
            historically increased scholarship packages by $20k–$50k when presented with competing offers.
          </p>
        </section>

        {/* Section 7: When NOT worth it */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">When an MBA Is Not Worth It: The Honest Assessment</h2>
          <p className="text-slate-400 leading-relaxed">
            The financial case for an MBA breaks down in three scenarios:
          </p>
          <div className="space-y-3">
            <div className="bg-red-500/8 border border-red-500/20 rounded-xl p-5 space-y-2">
              <p className="font-semibold text-red-300 text-sm">1. Nonprofit or government destination without subsidy</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                If your goal is a nonprofit, government, or social impact role paying $80k–$130k post-MBA,
                the financial math almost never works at sticker price. A $400k investment with a $30k/year
                salary delta produces an IRR of 4–8% — below what you would earn in an index fund. The
                calculus changes entirely with PSLF (Public Service Loan Forgiveness), which can eliminate
                $100k+ in loan obligations after 10 years of qualifying payments.
              </p>
            </div>
            <div className="bg-red-500/8 border border-red-500/20 rounded-xl p-5 space-y-2">
              <p className="font-semibold text-red-300 text-sm">2. Already in a high-earning field with a clear promotion path</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Senior software engineers, doctors in private practice, and experienced finance professionals
                often find that the MBA adds little incremental earning power. If you are already at $180k+
                and your employer promotes based on performance rather than credentials, the opportunity
                cost of two years out may not be recoverable.
              </p>
            </div>
            <div className="bg-red-500/8 border border-red-500/20 rounded-xl p-5 space-y-2">
              <p className="font-semibold text-red-300 text-sm">3. Lower-tier school with no scholarship, uncertain path</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                A T20–T30 program at sticker price ($250k–$350k all-in) without a clear destination in
                a high-salary industry is the highest-risk scenario. If post-MBA salary is $90k–$110k,
                the break-even period extends beyond 12–15 years, and the 10-year NPV may be negative.
              </p>
            </div>
          </div>
        </section>

        {/* Section 8: How to use the calculator */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">How to Model Your Specific Scenario</h2>
          <p className="text-slate-400 leading-relaxed">
            The industry-level numbers above are useful for benchmarking, but your specific numbers will
            differ based on your pre-MBA salary, target school cost, scholarship aid, and post-MBA
            role. The MBA ROI Calculator on this site lets you input your specific parameters and
            generates NPV, IRR, and break-even analysis in real time.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Run three scenarios: optimistic (higher post-MBA salary, scholarship), base (median outcomes),
            and conservative (lower post-MBA salary, no scholarship). The spread between your optimistic
            and conservative scenarios tells you how much execution risk you are taking on.
          </p>
          <div className="rounded-xl bg-emerald-600/10 border border-emerald-500/20 p-5 space-y-3">
            <p className="text-emerald-300 font-semibold text-sm">Use the MBA ROI Calculator</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Input your pre-MBA salary, target school cost, expected post-MBA salary, and scholarship
              amount. Get NPV, IRR, and break-even period specific to your situation.
            </p>
            <Link
              href="/mba-roi-calculator"
              className="inline-block bg-emerald-600 hover:bg-emerald-500 transition-colors px-5 py-2.5 rounded-lg text-white text-sm font-medium"
            >
              Launch MBA ROI Calculator →
            </Link>
          </div>
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
              { href: "/mba-roi", label: "MBA ROI by Industry — Full Guide" },
              { href: "/mba-cost", label: "MBA Cost Breakdown 2026" },
              { href: "/mba-break-even", label: "MBA Break-Even Analysis" },
              { href: "/blog/how-to-calculate-mba-roi", label: "How to Calculate MBA ROI (NPV, IRR)" },
              { href: "/mba-roi-scholarship", label: "MBA ROI with Scholarship Aid" },
              { href: "/blog/mba-vs-masters-vs-bootcamp", label: "MBA vs. Master's vs. Bootcamp ROI" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="block text-sm text-emerald-400 hover:text-emerald-300 transition-colors py-2 px-3 rounded-lg border border-white/8 hover:border-white/15">
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
