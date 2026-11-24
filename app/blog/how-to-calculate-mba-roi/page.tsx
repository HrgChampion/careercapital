import Link from "next/link"
import { pageAlternates, articleSchema, breadcrumbSchema } from "@/lib/seo"

const _articleSchema = articleSchema({
  title: "How to Actually Calculate MBA ROI (NPV, IRR, Break-Even)",
  description:
    "Most MBA ROI calculators get the math wrong. This guide walks through the correct discounted cash flow framework — opportunity cost, loan amortization, and all.",
  url: "https://careerreturns.com/blog/how-to-calculate-mba-roi",
  datePublished: "2026-03-20",
  dateModified: "2026-11-24",
})

const _breadcrumbSchema = breadcrumbSchema([
  { name: "Blog", url: "https://careerreturns.com/blog" },
  { name: "How to Calculate MBA ROI", url: "https://careerreturns.com/blog/how-to-calculate-mba-roi" },
])

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What discount rate should I use for MBA ROI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A 6% real discount rate is a reasonable baseline for most MBA candidates. It approximates the long-run risk-adjusted return on a diversified equity portfolio, representing the opportunity cost of capital. Some analysts use 8–10% for a more conservative estimate. The higher the discount rate, the lower the NPV, making the MBA look less attractive in dollar terms even if the IRR remains strong.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the difference between MBA ROI and MBA IRR?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ROI (return on investment) is a simple ratio: total gain divided by total cost. It ignores the time value of money. IRR (internal rate of return) is the discount rate at which the net present value of all cash flows equals zero — it accounts for when cash flows occur. IRR is the superior metric for comparing MBA investments because a 30% IRR over 10 years is genuinely comparable across programs with different cost structures.",
      },
    },
    {
      "@type": "Question",
      "name": "Should I include taxes in my MBA ROI calculation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For a rigorous model, yes. The salary delta (post-MBA minus pre-MBA) is taxed at your marginal rate, not your average rate. Under 2026 federal brackets, a single filer moving from $85,000 to $175,000 (the M7 median base) sees take-home pay rise from about $68,600 to about $130,900 before any state tax, so the $90,000 pre-tax raise is worth roughly $62,300 after federal income tax and FICA, about 69% of the headline figure. Most of the raise lands in the 24% federal bracket, plus 7.65% FICA up to the $184,500 Social Security wage base. CareerReturns models use pre-tax figures by convention (consistent with how salary data is reported) and note this limitation explicitly.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I factor in loan interest in MBA ROI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Loan interest should be modeled as a cash outflow during the repayment period. For a $150k loan at 8.94% (the 2025–26 Grad PLUS rate) over 5 years, monthly payments are approximately $3,110 and total interest paid is about $36,600. The correct approach is to model monthly amortization — not simple interest — because the loan balance decreases each month as principal is paid down. Since July 1, 2026, new borrowers can no longer use Grad PLUS, so most full-time MBA budgets now combine up to $20,500 a year of federal Direct Unsubsidized Loans with private loans at credit-based rates. Use your blended rate, not a single federal rate.",
      },
    },
  ],
}

export const metadata = {
  title: "How to Calculate MBA ROI: NPV, IRR & Break-Even (2026)",
  description:
    "The correct MBA ROI math: opportunity cost, 2026 loan rules, NPV, IRR and break-even, with a worked example using Class of 2025 M7 salaries.",
  alternates: pageAlternates("https://careerreturns.com/blog/how-to-calculate-mba-roi"),
  openGraph: {
    title: "How to Actually Calculate MBA ROI (NPV, IRR, Break-Even)",
    description: "The correct DCF framework for MBA ROI — opportunity cost, loan amortization, NPV, and IRR explained.",
    url: "https://careerreturns.com/blog/how-to-calculate-mba-roi",
    siteName: "CareerReturns",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Calculate MBA ROI: NPV, IRR, Break-Even",
    description: "The correct discounted cash flow framework for MBA ROI analysis.",
  },
}

export default function HowToCalculateMbaRoiPage() {
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
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-blue-600/12 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-10 sm:space-y-14">

        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-slate-300 transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-slate-400">How to Calculate MBA ROI</span>
        </nav>

        {/* Header */}
        <header className="space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full border bg-blue-400/10 border-blue-400/20 text-blue-400">Finance 101</span>
            <span className="text-slate-500 text-xs">Published March 20, 2026</span>
            <span className="text-slate-600 text-xs">·</span>
            <span className="text-blue-400 text-xs">Updated November 24, 2026</span>
            <span className="text-slate-600 text-xs">·</span>
            <span className="text-slate-500 text-xs">14 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
            How to Actually Calculate MBA ROI<br />
            <span className="text-slate-400">(NPV, IRR, and Break-Even)</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Most MBA ROI calculators get the math wrong. They add up salary gains without discounting
            for time, ignore opportunity cost, or use simplified interest estimates. This guide walks
            through the correct framework — the same discounted cash flow model used in institutional
            finance.
          </p>
          {/* Author byline */}
          <div className="flex items-center gap-3 pt-2 border-t border-white/8">
            <div className="w-9 h-9 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
              <span className="text-blue-400 text-sm font-semibold">HG</span>
            </div>
            <div>
              <p className="text-sm font-medium text-white">Himanshu Gauba</p>
              <p className="text-xs text-slate-500">Founder, CareerReturns · Financial modeling &amp; career finance</p>
            </div>
          </div>
        </header>

        {/* Section 1: Why most calculators are wrong */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Why Most MBA ROI Calculations Are Wrong</h2>
          <p className="text-slate-400 leading-relaxed">
            Search &quot;MBA ROI calculator&quot; and you will find dozens of tools that do something like this:
            take the salary increase, multiply by 10 years, subtract the tuition cost, and call that
            the return on investment. This approach has at least four significant errors:
          </p>
          <div className="space-y-3">
            {[
              {
                number: "01",
                error: "Ignores opportunity cost",
                explanation: "During your 2-year MBA, you are not just paying tuition — you are also forgoing your pre-MBA salary. If you earned $85k before the program, that is $170k in foregone earnings that must be included in the total cost.",
              },
              {
                number: "02",
                error: "Does not discount future earnings",
                explanation: "A dollar earned in year 10 is worth less than a dollar earned today because of the time value of money. Adding up undiscounted earnings overstates the value of later-year salary gains.",
              },
              {
                number: "03",
                error: "Uses simplified loan interest",
                explanation: "Many calculators estimate loan costs as principal × interest rate × years. The correct method is monthly amortization — which accounts for the fact that the loan balance decreases each month as you pay down principal.",
              },
              {
                number: "04",
                error: "Models only sticker salary, not total compensation",
                explanation: "Post-MBA compensation at consulting and banking firms includes signing bonuses ($20k–$50k), performance bonuses (20–50% of base), and equity grants. Excluding these understates the true return in high-compensation paths.",
              },
            ].map((item) => (
              <div key={item.number} className="bg-white/5 border border-white/10 rounded-xl p-5 flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                  <span className="text-red-400 text-xs font-mono font-semibold">{item.number}</span>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-white text-sm">{item.error}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.explanation}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: The correct framework */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">The Correct Framework: Discounted Cash Flow Analysis</h2>
          <p className="text-slate-400 leading-relaxed">
            The right way to evaluate an MBA is the same framework used to evaluate any capital investment:
            discounted cash flow (DCF) analysis. The core idea is straightforward — map out every cash flow
            (positive and negative) over time, discount each one to present value, and sum them up to get
            net present value (NPV).
          </p>
          <div className="bg-slate-900 border border-white/10 rounded-xl p-5 space-y-3 font-mono text-sm">
            <p className="text-slate-400">// MBA cash flows: program period at Year 0, then 10 years after graduation</p>
            <div className="space-y-1 text-slate-300">
              <p><span className="text-blue-400">Year 0:</span> <span className="text-red-400">−$50,000</span> (cost not covered by loans: $250k budget − $200k borrowed)</p>
              <p><span className="text-blue-400">Year 0:</span> <span className="text-red-400">−$170,000</span> (opportunity cost — 2 years of foregone $85k salary)</p>
              <p><span className="text-blue-400">Year 1–5:</span> <span className="text-red-400">−$51,446/yr</span> (loan repayment, 5-year amortization: $41k federal at 7.94% + $159k private at 11%)</p>
              <p><span className="text-blue-400">Year 1–10:</span> <span className="text-emerald-400">+$90,000/yr</span> (salary delta: $175k post-MBA − $85k pre-MBA)</p>
              <p className="pt-2 text-slate-400">Result at 6%: NPV <span className="text-emerald-400">+$225,700</span> · IRR <span className="text-emerald-400">20.4%</span> · payback <span className="text-emerald-400">5.3 yrs</span></p>
            </div>
            <p className="text-slate-500 text-xs border-t border-white/8 pt-3">Example: Class of 2025 M7 medians (pre-MBA salary $85k, post-MBA base $175k), financed under the federal loan limits in force since July 1, 2026</p>
          </div>
          <p className="text-slate-400 leading-relaxed">
            Each year&apos;s net cash flow is discounted back to present value using the discount rate. The
            sum of all discounted cash flows is the NPV. A positive NPV means the MBA creates economic
            value; a negative NPV means it destroys value at that discount rate.
          </p>
        </section>

        {/* What changed in 2026 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">What Changed in 2026</h2>
          <p className="text-slate-400 leading-relaxed">
            The framework has not changed, but four of its inputs have. If you built an MBA model in early
            2026, update these before you rely on it:
          </p>
          <div className="space-y-3">
            {[
              {
                input: "Salary inputs: Class of 2025 data",
                change: "The M7 median base salary is $175,000 (Class of 2025 employment reports), with median first-year total compensation of $185,000–$210,000 once signing and performance bonuses are included. The median pre-MBA salary for M7 applicants is about $85,000, so the typical pre- to post-MBA jump is 47–55%.",
              },
              {
                input: "Financing: Grad PLUS is gone for new borrowers",
                change: "Under the One Big Beautiful Bill Act (July 2025), new borrowers can no longer take Grad PLUS loans from July 1, 2026, and federal Direct Unsubsidized borrowing for an MBA is capped at $20,500 a year ($100,000 aggregate). On a $250,000 two-year budget, at most $41,000 can now come from federal loans; the rest is savings, scholarships, employer aid or private loans priced on your credit.",
              },
              {
                input: "Taxes: 2026 brackets and wage base",
                change: "For a single filer, the 24% federal bracket now runs to $201,775 of taxable income and the Social Security wage base is $184,500. A raise from $85,000 to $175,000 adds about $62,300 of take-home pay, not $90,000. That gap is why we report pre-tax figures and flag the limitation rather than hide it.",
              },
              {
                input: "Loan rate: use a blended rate",
                change: "The 2025–26 federal rates were 7.94% for graduate Direct Unsubsidized Loans and 8.94% for Grad PLUS. With Grad PLUS closed to new borrowers, the right input is the weighted average of your federal and private rates. Our example assumes 11% on the private portion, a blended rate of about 10.4%.",
              },
            ].map((item) => (
              <div key={item.input} className="bg-blue-500/5 border border-blue-500/15 rounded-xl p-5 space-y-1.5">
                <p className="font-semibold text-blue-300 text-sm">{item.input}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{item.change}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-400 leading-relaxed">
            Net effect: moving from all-federal financing at 2025–26 rates to the post-2026 federal/private mix
            costs the median M7 graduate in the example above about $8,000 of NPV at an 11% private rate. The loan
            rules matter less to ROI than the salary you land, but they matter a lot to who can get financing at
            all. We cover this in detail in{" "}
            <Link href="/blog/mba-loans-2026-grad-plus-changes" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
              MBA Loans After Grad PLUS
            </Link>.
          </p>
        </section>

        {/* Section 3: NPV explained */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Net Present Value (NPV): What It Tells You</h2>
          <p className="text-slate-400 leading-relaxed">
            NPV is the most useful output for answering the question &quot;is this MBA worth it?&quot; in dollar terms.
            A 10-year NPV of +$200,000 means the MBA generates $200,000 of economic value over and above
            what you would have earned by not attending (and investing that capital at the discount rate).
          </p>
          <p className="text-slate-400 leading-relaxed">
            The 10-year horizon is deliberately conservative. MBA salary benefits typically persist for
            15–25 years, not just 10. By limiting the model to 10 years, we understate the total lifetime
            benefit — which makes the NPV a conservative lower bound, not an optimistic estimate.
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { label: "M7 → MBB Consulting", npv: "+$186k–$341k", irr: "22–40%", color: "text-emerald-400", bg: "bg-emerald-400/8" },
              { label: "M7 → Tech (FAANG)", npv: "+$98k–$253k", irr: "16–30%", color: "text-amber-400", bg: "bg-amber-400/8" },
              { label: "T20 → Nonprofit", npv: "−$20k to +$80k", irr: "4–14%", color: "text-red-400", bg: "bg-red-400/8" },
            ].map((item) => (
              <div key={item.label} className={`${item.bg} border border-white/10 rounded-xl p-4 space-y-2 text-center`}>
                <p className="text-white text-sm font-medium">{item.label}</p>
                <p className={`${item.color} font-semibold`}>{item.npv}</p>
                <p className="text-slate-400 text-xs">10-yr NPV</p>
                <p className={`${item.color} text-xs font-medium`}>IRR: {item.irr}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs">
            Ranges run from no scholarship to full scholarship. Source:{" "}
            <Link href="/mba-roi-report-2026" className="text-blue-400 hover:text-blue-300">CareerReturns MBA ROI Report 2026</Link>.
          </p>
        </section>

        {/* Section 4: IRR explained */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Internal Rate of Return (IRR): The Comparison Metric</h2>
          <p className="text-slate-400 leading-relaxed">
            While NPV tells you the dollar value, IRR tells you the annualized percentage return on your
            investment. IRR is the discount rate at which NPV equals zero — effectively the compound annual
            growth rate of the investment.
          </p>
          <p className="text-slate-400 leading-relaxed">
            IRR is particularly useful for comparing MBAs with different cost structures. An M7 program
            at sticker price with an MBB consulting outcome might have an IRR of 28%. A T12 program with
            a full scholarship and the same consulting outcome might have an IRR of 38%. The T12 scholarship
            scenario has lower upfront cost and the same post-MBA outcome — so it generates a higher
            annualized return despite leading to the same job.
          </p>
          <div className="bg-blue-500/8 border border-blue-500/20 rounded-xl p-5 space-y-3">
            <p className="text-blue-300 font-semibold text-sm">IRR Benchmarks for Context</p>
            <div className="space-y-2 text-sm">
              {[
                { benchmark: "S&P 500 long-run average", irr: "~10%", note: "Historical nominal return" },
                { benchmark: "Venture capital (top quartile)", irr: "25–35%", note: "Highly illiquid, high risk" },
                { benchmark: "MBA → MBB Consulting (M7)", irr: "22–40%", note: "Subject to execution risk" },
                { benchmark: "MBA → Tech (M7)", irr: "16–30%", note: "Depends on pre-MBA salary" },
                { benchmark: "MBA → Nonprofit (no PSLF)", irr: "4–14%", note: "Often NPV negative" },
              ].map((row) => (
                <div key={row.benchmark} className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-white">{row.benchmark}</p>
                    <p className="text-slate-500 text-xs">{row.note}</p>
                  </div>
                  <p className="text-blue-400 font-semibold flex-shrink-0">{row.irr}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-400 leading-relaxed">
            IRR is solved numerically because there is no closed-form solution for the equation that
            sets NPV to zero across an irregular cash flow series. CareerReturns uses the Newton-Raphson
            iterative method, which converges accurately within a few iterations for typical MBA cash flow
            profiles.
          </p>
        </section>

        {/* Section 5: Break-even */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Break-Even Period: When the MBA Pays for Itself</h2>
          <p className="text-slate-400 leading-relaxed">
            Break-even is the point at which the cumulative present-value benefit of the MBA (salary delta,
            discounted) equals the cumulative present-value cost (tuition, living expenses, opportunity cost,
            loan interest). It is the moment at which you have recovered every dollar you invested.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Break-even periods range widely by path:
          </p>
          <div className="space-y-2">
            {[
              { path: "Veterans (GI Bill + Yellow Ribbon) → Consulting", period: "2.0–3.5 years", note: "Dramatically reduced cost basis" },
              { path: "M7 → MBB Consulting (full scholarship)", period: "3.2–4.0 years" },
              { path: "M7 → MBB Consulting (sticker price)", period: "4.2–4.7 years" },
              { path: "M7 → Investment Banking (sticker)", period: "4.5–5.0 years" },
              { path: "M7 → Tech FAANG (sticker)", period: "6.1–7.0 years", note: "High pre-MBA salary compresses delta" },
              { path: "T15 → Big 4 Advisory (sticker)", period: "6.8–8.0 years" },
              { path: "Any Program → Nonprofit (no PSLF)", period: "9.4–13.1 years" },
            ].map((row) => (
              <div key={row.path} className="flex items-center justify-between gap-3 py-2.5 px-4 bg-white/3 border border-white/8 rounded-lg">
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm truncate">{row.path}</p>
                  {row.note && <p className="text-slate-500 text-xs mt-0.5">{row.note}</p>}
                </div>
                <p className="text-emerald-400 font-semibold text-sm flex-shrink-0">{row.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Worked example */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Worked Example: M7 Consulting Path</h2>
          <p className="text-slate-400 leading-relaxed">
            Let us walk through a concrete example with 2026 numbers. You are a 28-year-old product manager
            earning $95,000 per year. You are admitted to an M7 program with tuition and fees of $170,000
            over two years, plus about $85,000 of living costs. You plan to recruit for management consulting,
            where MBB firms offered Class of 2025 graduates a standard base of about $190,000–$192,000, so you
            model a $190,000 base plus a $30,000 signing bonus. You start in fall 2026, so the new federal loan
            limits apply.
          </p>
          <div className="bg-slate-900 border border-white/10 rounded-xl p-5 space-y-4">
            <p className="text-slate-300 font-semibold text-sm">Input Assumptions</p>
            <div className="grid sm:grid-cols-2 gap-2 text-sm">
              {[
                { label: "Pre-MBA salary", value: "$95,000/yr" },
                { label: "Tuition + fees (2 years)", value: "$170,000" },
                { label: "Living expenses (2 years)", value: "$85,000" },
                { label: "Federal Direct Unsubsidized", value: "$41,000 at 7.94%" },
                { label: "Private loan", value: "$159,000 at 10%" },
                { label: "Post-MBA base salary", value: "$190,000" },
                { label: "Signing bonus (Year 1)", value: "$30,000" },
                { label: "Performance bonus", value: "Excluded (upside)" },
                { label: "Projection horizon", value: "10 years" },
                { label: "Discount rate", value: "6.0%" },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between gap-3 py-1.5 border-b border-white/5">
                  <p className="text-slate-400">{row.label}</p>
                  <p className="text-white font-medium">{row.value}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 pt-4 grid sm:grid-cols-3 gap-3">
              <div className="text-center">
                <p className="text-emerald-400 text-xl font-semibold">+$270k</p>
                <p className="text-slate-500 text-xs mt-1">10-Year NPV</p>
              </div>
              <div className="text-center">
                <p className="text-emerald-400 text-xl font-semibold">22.9%</p>
                <p className="text-slate-500 text-xs mt-1">IRR</p>
              </div>
              <div className="text-center">
                <p className="text-emerald-400 text-xl font-semibold">4.8 yrs</p>
                <p className="text-slate-500 text-xs mt-1">Break-Even</p>
              </div>
            </div>
          </div>
          <p className="text-slate-400 leading-relaxed">
            Total all-in cost: $170k (tuition and fees) + $85k (living) + $190k (two years of foregone $95k salary) = $445k
            before interest. You borrow $200k and pay the other $55k from savings, so the Year 0 outflow is
            $55k + $190k = −$245k. The annual salary delta is $95k ($190k post-MBA base − $95k pre-MBA). Loan payments
            on a 5-year amortization total about $50,500 a year ($41k at 7.94% plus $159k at 10%), so Years 1–5 net
            about +$44,500 (plus the $30k signing bonus in Year 1) and Years 6–10 net +$95k. Discounting at 6% gives a
            10-year NPV of about +$270,000, an IRR of 22.9%, and payback 4.8 years after graduation.
          </p>
          <p className="text-slate-400 leading-relaxed">
            This is a strong result — but note how sensitive it is to the salary delta. If the post-MBA
            salary is $150k instead of $190k (a more modest outcome outside MBB), the delta falls to $55k, the
            NPV turns slightly negative (about −$25,000) and the IRR falls to roughly 4%. The financing change
            matters far less: had the same $200k been borrowed under the old rules ($159k as Grad PLUS at 8.94%),
            the NPV would be about $274,000 instead of $270,000. Run several salary scenarios; the performance
            bonus we left out is your margin of safety.
          </p>
        </section>

        {/* CTA */}
        <section className="rounded-xl bg-blue-600/10 border border-blue-500/20 p-5 space-y-3">
          <p className="text-blue-300 font-semibold text-sm">Run Your Own Numbers</p>
          <p className="text-slate-400 text-sm leading-relaxed">
            The MBA ROI Calculator uses the exact DCF framework described in this article. Enter your
            specific inputs and get NPV, IRR, and break-even analysis instantly.
          </p>
          <Link
            href="/mba-roi-calculator"
            className="inline-block bg-blue-600 hover:bg-blue-500 transition-colors px-5 py-2.5 rounded-lg text-white text-sm font-medium"
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
              { href: "/mba-roi", label: "MBA ROI by Industry — Full Guide" },
              { href: "/mba-break-even", label: "MBA Break-Even Analysis" },
              { href: "/mba-worth-it", label: "Is an MBA Worth It in 2026?" },
              { href: "/mba-roi-scholarship", label: "MBA ROI with Scholarship Aid" },
              { href: "/blog/mba-loans-2026-grad-plus-changes", label: "MBA Loans After Grad PLUS (2026)" },
              { href: "/mba-loan-repayment-calculator", label: "MBA Loan Repayment Calculator" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="block text-sm text-blue-400 hover:text-blue-300 transition-colors py-2 px-3 rounded-lg border border-white/8 hover:border-white/15">
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
        <p>Salary data sourced from GMAC surveys, Class of 2025 school employment reports, Glassdoor, Levels.fyi, and publicly reported compensation figures. Tax figures use 2026 IRS brackets and the $184,500 Social Security wage base; loan limits reflect U.S. Department of Education rules effective July 1, 2026. All ranges are estimates; individual outcomes vary.</p>
      </footer>

    </main>
  )
}
