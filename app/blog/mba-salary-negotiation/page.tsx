import Link from "next/link"
import { pageAlternates, articleSchema, breadcrumbSchema } from "@/lib/seo"

const _articleSchema = articleSchema({
  title: "How to Negotiate Your Post-MBA Salary: A Data-Driven Playbook",
  description:
    "Post-MBA offers are negotiable more often than recruiters admit. Here is what the data says about leverage points, timing, and how to close a $20k–$40k gap.",
  url: "https://careerreturns.com/blog/mba-salary-negotiation",
  datePublished: "2026-03-17",
  dateModified: "2026-03-17",
})

const _breadcrumbSchema = breadcrumbSchema([
  { name: "Blog", url: "https://careerreturns.com/blog" },
  { name: "MBA Salary Negotiation", url: "https://careerreturns.com/blog/mba-salary-negotiation" },
])

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can you negotiate salary for MBA consulting offers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Base salary at MBB firms (McKinsey, Bain, BCG) is fixed by a standardized compensation grid and is not negotiable. However, signing bonuses and start date flexibility often are. At Tier 2 consulting firms (Oliver Wyman, LEK, A.T. Kearney), there is more flexibility on both base and signing. At boutique strategy firms, base negotiation is common. The key is knowing which lever is movable at each firm type.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the average signing bonus for MBA graduates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Average signing bonuses range from $20,000 at Big 4 consulting firms to $50,000+ at MBB and bulge bracket banks. Technology companies at FAANG level offer $30,000–$80,000 in signing bonuses. Signing bonuses are one of the most negotiable elements of a post-MBA offer because they do not affect the base salary budget for future years.",
      },
    },
    {
      "@type": "Question",
      "name": "When is the best time to negotiate a post-MBA offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Negotiate after receiving the written offer but before the acceptance deadline. This is your window of maximum leverage — the firm has invested in recruiting you and wants to close. Negotiating after accepting reduces leverage significantly. If you have competing offers, disclose them clearly and professionally; this is your strongest leverage point.",
      },
    },
    {
      "@type": "Question",
      "name": "How much can you increase a post-MBA offer through negotiation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At firms with flexible compensation structures (most tech companies, boutique finance, and consulting firms below MBB), candidates who negotiate effectively typically improve total first-year compensation by $15,000–$45,000. The gain usually comes from signing bonus increases ($10k–$20k), equity grant increases ($20k–$50k in RSUs), and occasionally base salary adjustments. Candidates who do not negotiate leave an average of $18,000–$25,000 on the table in the first year alone.",
      },
    },
  ],
}

export const metadata = {
  title: "How to Negotiate Your Post-MBA Salary: A Data-Driven Playbook | CareerReturns",
  description:
    "Post-MBA offers are negotiable more often than recruiters admit. Here is what the data says about leverage points, timing, and how to close a $20k–$40k gap.",
  alternates: pageAlternates("https://careerreturns.com/blog/mba-salary-negotiation"),
  openGraph: {
    title: "How to Negotiate Your Post-MBA Salary: A Data-Driven Playbook",
    description: "Leverage points, timing, and data-backed strategies to close a $20k–$40k salary gap.",
    url: "https://careerreturns.com/blog/mba-salary-negotiation",
    siteName: "CareerReturns",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Negotiate Your Post-MBA Salary",
    description: "Data-driven playbook to close a $20k–$40k post-MBA salary gap.",
  },
}

export default function MbaSalaryNegotiationPage() {
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
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-violet-600/12 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-10 sm:space-y-14">

        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-slate-300 transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-slate-400">MBA Salary Negotiation</span>
        </nav>

        {/* Header */}
        <header className="space-y-5">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full border bg-violet-400/10 border-violet-400/20 text-violet-400">Salary</span>
            <span className="text-slate-500 text-xs">March 17, 2026</span>
            <span className="text-slate-600 text-xs">·</span>
            <span className="text-slate-500 text-xs">11 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
            How to Negotiate Your Post-MBA Salary<br />
            <span className="text-slate-400">A Data-Driven Playbook</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            The average MBA graduate who does not negotiate their offer leaves $18,000–$25,000 on the
            table in year one alone. Compounded over a career, the difference between negotiating and
            accepting the first offer can exceed $200,000 in lifetime earnings. Yet many MBAs hesitate —
            fearing rejection or rescinded offers that, in practice, almost never happen.
          </p>
          {/* Author byline */}
          <div className="flex items-center gap-3 pt-2 border-t border-white/8">
            <div className="w-9 h-9 rounded-full bg-violet-600/20 border border-violet-500/30 flex items-center justify-center flex-shrink-0">
              <span className="text-violet-400 text-sm font-semibold">HG</span>
            </div>
            <div>
              <p className="text-sm font-medium text-white">Himanshu Gauba</p>
              <p className="text-xs text-slate-500">Founder, CareerReturns · Financial modeling &amp; career finance</p>
            </div>
          </div>
        </header>

        {/* Key insight */}
        <div className="bg-violet-500/8 border border-violet-500/20 rounded-xl p-5 space-y-2">
          <p className="text-violet-300 font-semibold text-sm">The Core Insight</p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Post-MBA compensation is negotiable in different ways depending on firm type. MBB base salaries
            are fixed — but signing bonuses, start dates, and equity are not. Tech firms have flexible
            equity and bonus pools. Finance firms often have discretionary signing bonuses. Knowing where
            the flexibility lives at your target firm is more valuable than generic negotiation tactics.
          </p>
        </div>

        {/* Section 1: What is negotiable where */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">What Is Actually Negotiable by Firm Type</h2>
          <p className="text-slate-400 leading-relaxed">
            The first step in any negotiation is understanding what is movable. Post-MBA compensation has
            four components — base salary, signing bonus, performance bonus, and equity — and each firm
            type handles them differently.
          </p>
          <div className="space-y-3">
            {[
              {
                firm: "MBB Consulting (McKinsey, Bain, BCG)",
                base: "Fixed — not negotiable",
                signing: "Partially negotiable ($5k–$15k flex)",
                bonus: "Fixed annual bonus cycle",
                equity: "N/A",
                tip: "Negotiate start date and office location, which can affect living cost and quality of life significantly.",
                borderColor: "border-emerald-500/30",
                bg: "bg-emerald-500/5",
              },
              {
                firm: "Bulge Bracket Banks (GS, MS, JPMorgan)",
                base: "Fixed by year/level",
                signing: "Negotiable ($10k–$30k)",
                bonus: "Discretionary — varies by desk",
                equity: "Negotiable at senior associate level",
                tip: "Signing bonus is the primary lever. Frame it around deferred compensation you are forfeiting from a prior employer.",
                borderColor: "border-blue-500/30",
                bg: "bg-blue-500/5",
              },
              {
                firm: "FAANG / Tier-1 Tech",
                base: "Some flexibility ($10k–$20k)",
                signing: "Negotiable ($20k–$50k)",
                bonus: "Target % fixed, often 15–20%",
                equity: "Highly negotiable (RSU grants)",
                tip: "Equity (RSUs) is where the real money is. Push hard on the grant amount — it can be doubled without affecting the base salary budget.",
                borderColor: "border-amber-500/30",
                bg: "bg-amber-500/5",
              },
              {
                firm: "Boutique Strategy / PE-backed",
                base: "Negotiable",
                signing: "Negotiable",
                bonus: "Deal-based, variable",
                equity: "Carry / profit share in some cases",
                tip: "More flexibility across the board. Come with a specific number and rationale, not a vague request.",
                borderColor: "border-violet-500/30",
                bg: "bg-violet-500/5",
              },
            ].map((row) => (
              <div key={row.firm} className={`${row.bg} border ${row.borderColor} rounded-xl p-5 space-y-3`}>
                <p className="font-semibold text-white text-sm">{row.firm}</p>
                <div className="grid sm:grid-cols-2 gap-2 text-xs">
                  <div><span className="text-slate-500">Base: </span><span className="text-slate-300">{row.base}</span></div>
                  <div><span className="text-slate-500">Signing: </span><span className="text-slate-300">{row.signing}</span></div>
                  <div><span className="text-slate-500">Bonus: </span><span className="text-slate-300">{row.bonus}</span></div>
                  <div><span className="text-slate-500">Equity: </span><span className="text-slate-300">{row.equity}</span></div>
                </div>
                <p className="text-slate-400 text-xs border-t border-white/8 pt-2">
                  <span className="text-violet-400 font-medium">Strategy: </span>{row.tip}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: The leverage framework */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">The Leverage Framework: What Gives You Power</h2>
          <p className="text-slate-400 leading-relaxed">
            Negotiation leverage comes from one source: alternatives. The more attractive your outside
            options, the more credible your negotiation. The mistake most candidates make is negotiating
            without stated leverage — which sounds like &quot;I was hoping for more&quot; rather than &quot;I have an
            offer from [Firm X] at $Y, and I am excited about your firm but need the packages to be
            closer.&quot;
          </p>
          <div className="space-y-3">
            {[
              {
                source: "Competing offer from a peer firm",
                impact: "Highest",
                how: "Disclose the competing firm and offer range (not the exact number, unless you want to). Frame it professionally — you are not threatening, you are informing.",
              },
              {
                source: "Market data and benchmarks",
                how: "Use GMAC survey data, Glassdoor, and Levels.fyi to anchor to market. A Wharton MBA entering MBB earns $190k–$215k base in 2026. If the offer is below this range, cite the range.",
                impact: "Medium",
              },
              {
                source: "Deferred compensation forfeiture",
                how: "If you are leaving a current employer and forfeiting unvested equity or a bonus, quantify this and ask for a signing bonus to offset it. Firms routinely accommodate this with documentation.",
                impact: "Medium",
              },
              {
                source: "Demonstrated enthusiasm for the firm",
                how: "Counterintuitively, expressing genuine interest in the firm (and making clear you would accept if the package were right) reduces their risk of losing you. Firms are more willing to flex when they believe the candidate will say yes.",
                impact: "Low-Medium",
              },
            ].map((row) => (
              <div key={row.source} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-white text-sm">{row.source}</p>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${row.impact === "Highest" ? "bg-emerald-400/10 text-emerald-400" : row.impact === "Medium" ? "bg-amber-400/10 text-amber-400" : "bg-slate-400/10 text-slate-400"}`}>
                    {row.impact} leverage
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{row.how}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: The negotiation script */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">What to Actually Say: The Script</h2>
          <p className="text-slate-400 leading-relaxed">
            Most candidates over-complicate the negotiation. A clear, professional, brief message is
            more effective than an elaborate case. Here is a template that works for the most common
            scenario — you have a competing offer and want to give the preferred firm a chance to match:
          </p>
          <div className="bg-slate-900 border border-white/10 rounded-xl p-5 space-y-3 text-sm">
            <p className="text-slate-500 text-xs">Example negotiation email</p>
            <div className="space-y-3 text-slate-300 leading-relaxed">
              <p>Hi [Recruiter name],</p>
              <p>
                Thank you for the offer to join [Firm] as an [Associate/Consultant/etc.]. I am very
                excited about the opportunity — the work on [specific practice/team] aligns closely
                with the direction I want to take my career, and the conversations I had during
                the process confirmed that this is the right environment for me.
              </p>
              <p>
                I want to be transparent with you: I have received an offer from [competing firm /
                &quot;another firm in the [consulting/banking/tech] space&quot;] with a total first-year
                compensation of approximately $[X]. I am strongly inclined to join [Firm], but I
                would like to understand whether there is any flexibility on [the signing bonus /
                the equity grant / the base] to bring the packages closer.
              </p>
              <p>
                I recognize that your base structure may be standardized. Even a [signing bonus /
                RSU] adjustment would go a long way toward making this decision straightforward.
                Would you be able to discuss?
              </p>
              <p>Best,<br />[Your name]</p>
            </div>
          </div>
          <p className="text-slate-400 leading-relaxed">
            This script works because it is specific (competing offer exists, approximate number cited),
            professional (not demanding, asking if flexibility exists), and gives the recruiter a clear
            ask (signing bonus or RSU adjustment). It also signals you prefer this firm, which reduces
            their concern that the negotiation is a ploy.
          </p>
        </section>

        {/* Section 4: ROI of negotiating */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">The ROI of Negotiating: A 10-Year View</h2>
          <p className="text-slate-400 leading-relaxed">
            The financial case for negotiating is compelling. Consider an MBA graduate who negotiates
            a $20,000 signing bonus increase and a $10,000 base salary increase at a consulting firm.
            Over 10 years, accounting for compounding salary increases (typical 8–12% per year in
            consulting) and investment of the additional savings:
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { label: "Year 1 gain", value: "$30,000", note: "$20k signing + $10k base" },
              { label: "5-year cumulative gain", value: "$72,000+", note: "Including compounded base increases" },
              { label: "10-year present value", value: "$140,000+", note: "At 6% discount rate" },
            ].map((item) => (
              <div key={item.label} className="bg-violet-400/8 border border-violet-400/20 rounded-xl p-4 text-center space-y-1">
                <p className="text-violet-400 text-xl font-semibold">{item.value}</p>
                <p className="text-white text-sm font-medium">{item.label}</p>
                <p className="text-slate-500 text-xs">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-400 leading-relaxed">
            The negotiation itself takes 15–30 minutes and one email. The expected value per minute
            spent negotiating is extraordinarily high. The fear of rejection is real but empirically
            unfounded — firms almost never rescind offers for candidates who negotiate professionally.
            Internally, recruiters often expect negotiation and have contingency headroom built in.
          </p>
        </section>

        {/* Section 5: Benchmark data */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Post-MBA Salary Benchmarks by Track (2026)</h2>
          <p className="text-slate-400 leading-relaxed">
            Use these benchmarks to assess whether your offer is at, above, or below market. If the offer
            is below the ranges below, you have a clear factual basis for negotiating upward.
          </p>
          <div className="space-y-2">
            {[
              { track: "MBB Consulting (Year 1)", base: "$190–215k", signing: "$30–50k", bonus: "$45–85k", total: "$265–350k" },
              { track: "Bulge Bracket Banking (Year 1)", base: "$175–200k", signing: "$30–50k", bonus: "$70–150k", total: "$275–400k" },
              { track: "Tech PM / Strategy (FAANG)", base: "$185–225k", signing: "$30–80k", equity: "$60–150k RSU/yr", total: "$275–455k" },
              { track: "Private Equity (Post-MBA)", base: "$175–250k", signing: "$20–40k", carry: "Varies", total: "$240–400k+" },
              { track: "Big 4 Consulting (Year 1)", base: "$130–160k", signing: "$10–25k", bonus: "$15–30k", total: "$155–215k" },
            ].map((row) => (
              <div key={row.track} className="bg-white/3 border border-white/8 rounded-xl px-4 py-3">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-white text-sm font-medium">{row.track}</p>
                  <p className="text-violet-400 font-semibold text-sm">{row.total}</p>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400">
                  <span>Base: {row.base}</span>
                  {row.signing && <span>Signing: {row.signing}</span>}
                  {row.bonus && <span>Bonus: {row.bonus}</span>}
                  {row.equity && <span>Equity: {row.equity}</span>}
                  {row.carry && <span>Carry: {row.carry}</span>}
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs">
            Sources: GMAC 2025 Corporate Recruiters Survey, publicly reported compensation figures (MBB, bulge bracket), Levels.fyi (tech), and recruiter data. All figures are US market, 2026.
          </p>
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
              { href: "/salary-negotiation-simulator", label: "Salary Negotiation Simulator" },
              { href: "/salary-benchmark-calculator", label: "Salary Benchmark Calculator" },
              { href: "/career-compounder", label: "Career Compounder — See the NPV of a Raise" },
              { href: "/mba-roi-consulting", label: "MBA ROI in Management Consulting" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="block text-sm text-violet-400 hover:text-violet-300 transition-colors py-2 px-3 rounded-lg border border-white/8 hover:border-white/15">
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
