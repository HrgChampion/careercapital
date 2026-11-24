import Link from "next/link"
import { pageAlternates, articleSchema, breadcrumbSchema } from "@/lib/seo"

const _articleSchema = articleSchema({
  title: "MBA Loans After Grad PLUS: How the 2026 Federal Loan Caps Change MBA ROI",
  description:
    "Grad PLUS ended for new borrowers on July 1, 2026. What the $20,500 annual cap means for a $250K MBA budget, with the loan math, NPV impact and a financing plan.",
  url: "https://careerreturns.com/blog/mba-loans-2026-grad-plus-changes",
  datePublished: "2026-11-24",
  dateModified: "2026-11-24",
})

const _breadcrumbSchema = breadcrumbSchema([
  { name: "Blog", url: "https://careerreturns.com/blog" },
  { name: "MBA Loans After Grad PLUS", url: "https://careerreturns.com/blog/mba-loans-2026-grad-plus-changes" },
])

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I still get a Grad PLUS loan for an MBA in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not as a new borrower. The One Big Beautiful Bill Act, signed in July 2025, ends Grad PLUS lending for new borrowers from July 1, 2026. Students who were already enrolled in their program and had received a federal loan for it before that date may be able to keep borrowing under the old rules for a limited transition period of up to three academic years. Your school's financial aid office can confirm whether you qualify.",
      },
    },
    {
      "@type": "Question",
      "name": "How much can I borrow in federal loans for an MBA after July 1, 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Up to $20,500 a year in federal Direct Unsubsidized Loans, with a $100,000 aggregate limit for graduate study. For a two-year full-time MBA that is at most $41,000, against a typical M7 budget of about $250,000 for tuition, fees and living costs. Higher limits of $50,000 a year and $200,000 in aggregate apply only to professional degrees such as medicine and law; MBA programs are generally not in that category.",
      },
    },
    {
      "@type": "Question",
      "name": "Does the end of Grad PLUS make an MBA a worse investment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Usually only slightly, if you can get private credit at a reasonable rate. In our worked example, an M7 graduate moving from $85,000 to $175,000 who borrows $200,000 has a 10-year NPV of about $233,800 under the old all-federal rules. Replacing the $159,000 Grad PLUS portion with an 11% private loan lowers the NPV to about $225,700, and at 13% to about $217,600. The bigger change is access and protection: private loans require credit approval, often a cosigner, and do not offer income-driven repayment or Public Service Loan Forgiveness.",
      },
    },
    {
      "@type": "Question",
      "name": "Are private MBA loans eligible for income-driven repayment or PSLF?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Income-driven repayment and Public Service Loan Forgiveness apply only to federal Direct Loans. Private lenders set their own hardship policies, which are usually limited to short forbearance periods. If you plan to work in government or at a nonprofit after your MBA, keep as much of your borrowing federal as possible and budget the private portion as debt you will repay in full.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the monthly payment on $200,000 of MBA loans in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "On a 10-year schedule, $41,000 of federal Direct Unsubsidized Loans at 7.94% costs about $496 a month. The remaining $159,000 costs about $2,014 a month at a 9% private rate, $2,190 at 11%, or $2,374 at 13%. The total is roughly $2,510–$2,870 a month, compared with about $2,505 when the $159,000 could be borrowed as Grad PLUS at 8.94%.",
      },
    },
  ],
}

export const metadata = {
  title: "MBA Loans After Grad PLUS: 2026 Caps and Your ROI",
  description:
    "Grad PLUS ended for new borrowers on July 1, 2026. What the $20,500 cap means for a $250K MBA budget: loan math, NPV impact and a financing plan.",
  alternates: pageAlternates("https://careerreturns.com/blog/mba-loans-2026-grad-plus-changes"),
  openGraph: {
    title: "MBA Loans After Grad PLUS: How the 2026 Federal Loan Caps Change MBA ROI",
    description: "The $20,500 federal cap, private loan math, and what it does to MBA NPV, IRR and payback.",
    url: "https://careerreturns.com/blog/mba-loans-2026-grad-plus-changes",
    siteName: "CareerReturns",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MBA Loans After Grad PLUS: 2026 Caps and Your ROI",
    description: "What the end of Grad PLUS does to MBA financing, NPV and payback, with worked numbers.",
  },
}

export default function MbaLoansGradPlusChangesPage() {
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
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-emerald-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-10 sm:space-y-14">

        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-slate-300 transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-slate-400">MBA Loans After Grad PLUS</span>
        </nav>

        {/* Header */}
        <header className="space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full border bg-emerald-400/10 border-emerald-400/20 text-emerald-400">Financing</span>
            <span className="text-slate-500 text-xs">November 24, 2026</span>
            <span className="text-slate-600 text-xs">·</span>
            <span className="text-slate-500 text-xs">12 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
            MBA Loans After Grad PLUS<br />
            <span className="text-slate-400">How the 2026 Federal Loan Caps Change MBA ROI</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            For two decades, a US citizen admitted to a full-time MBA could borrow almost the whole cost of
            attendance from the federal government through Grad PLUS. That ended for new borrowers on July 1,
            2026. Federal borrowing for an MBA is now capped at $20,500 a year, which covers about one-sixth of
            a typical M7 budget. This post works through what that does to your financing, your monthly payment
            and your return on the degree, using the same model as our calculators.
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

        {/* Key insight */}
        <div className="bg-emerald-500/8 border border-emerald-500/20 rounded-xl p-5 space-y-2">
          <p className="text-emerald-300 font-semibold text-sm">The Short Version</p>
          <p className="text-slate-400 text-sm leading-relaxed">
            If you can borrow privately at 9–13%, losing Grad PLUS lowers the 10-year NPV of a median M7 MBA
            by roughly $0–$16,000, small next to the uncertainty in your post-MBA salary. The real change is
            who carries the risk. Private loans need credit approval, often a cosigner, and come without
            income-driven repayment or Public Service Loan Forgiveness. Scholarships, employer money and the
            program format you choose now matter more than the interest rate.
          </p>
        </div>

        {/* Section 1: What changed */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">What Changed on July 1, 2026</h2>
          <p className="text-slate-400 leading-relaxed">
            The One Big Beautiful Bill Act, signed in July 2025, rewrote federal graduate lending. The parts that
            matter for an MBA are below.
          </p>
          <div className="bg-slate-900 border border-white/10 rounded-xl overflow-x-auto">
            <table className="w-full text-sm min-w-120">
              <thead>
                <tr className="text-left text-slate-500 text-xs border-b border-white/10">
                  <th className="px-4 py-3 font-medium">Federal graduate lending</th>
                  <th className="px-4 py-3 font-medium">Before July 1, 2026</th>
                  <th className="px-4 py-3 font-medium">New borrowers from July 1, 2026</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {[
                  { item: "Grad PLUS", before: "Up to cost of attendance minus other aid", after: "Eliminated" },
                  { item: "Direct Unsubsidized, annual", before: "$20,500", after: "$20,500 (MBA); $50,000 for professional degrees" },
                  { item: "Direct Unsubsidized, aggregate", before: "$138,500 incl. undergraduate loans", after: "$100,000 graduate (MBA); $200,000 professional" },
                  { item: "2025–26 interest rate", before: "7.94% Unsubsidized · 8.94% Grad PLUS", after: "Set each year; 7.94% Unsubsidized for 2025–26" },
                  { item: "Repayment plans for new loans", before: "Standard plus several income-driven plans", after: "Standard plan or the new Repayment Assistance Plan" },
                ].map((row) => (
                  <tr key={row.item} className="border-b border-white/5 last:border-0 align-top">
                    <td className="px-4 py-3 text-white">{row.item}</td>
                    <td className="px-4 py-3">{row.before}</td>
                    <td className="px-4 py-3 text-emerald-300">{row.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-400 leading-relaxed">
            Three details are easy to miss. First, the $50,000/$200,000 professional-degree limits are aimed at
            programs such as medicine and law; an MBA is treated as an ordinary graduate degree, so the
            $20,500 cap applies. Second, students who were already enrolled and borrowing for their program
            before July 1, 2026 may keep the old limits for a transition period of up to three academic years.
            If you started an MBA in fall 2025, your second year is probably covered; if you start in fall 2026,
            you are in the first fully affected class, the Class of 2028. Third, the law also scales annual limits
            down for students enrolled less than full time, which matters for some part-time MBA schedules. Ask
            your financial aid office how your enrollment is classified.
          </p>
        </section>

        {/* Section 2: The funding gap */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">The Funding Gap on a $250,000 Budget</h2>
          <p className="text-slate-400 leading-relaxed">
            A two-year M7 program costs $160,000–$190,000 in tuition alone. With fees and living costs, a
            budget of about $250,000 is typical. Assume you cover $50,000 from savings and need to borrow
            $200,000:
          </p>
          <div className="bg-slate-900 border border-white/10 rounded-xl p-5 space-y-3 font-mono text-sm">
            <p className="text-slate-400">// Funding a $250,000 two-year budget</p>
            <div className="space-y-1 text-slate-300">
              <p><span className="text-emerald-400">Savings:</span> $50,000</p>
              <p><span className="text-emerald-400">Federal Direct Unsubsidized:</span> $20,500 × 2 years = $41,000</p>
              <p><span className="text-emerald-400">Gap to fill:</span> $250,000 − $50,000 − $41,000 = <span className="text-amber-400">$159,000</span></p>
              <p className="pt-2 text-slate-400">Before 2026: the $159,000 was Grad PLUS at 8.94% (4.228% fee)</p>
              <p className="text-slate-400">From 2026: scholarships, employer aid, more savings, or private loans</p>
            </div>
          </div>
          <p className="text-slate-400 leading-relaxed">
            Federal loans now cover $41,000 of $250,000, or 16% of the budget. Before July 2026, a student could
            borrow the full $200,000 from the government with no credit score requirement beyond the absence of
            an adverse credit history. Now, unless you have savings or aid, the $159,000 has to come from a
            private lender who will price it on your credit score, income history and, often, a cosigner.
          </p>
        </section>

        {/* Section 3: Loan math */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">The Loan Math: Monthly Payment and Total Interest</h2>
          <p className="text-slate-400 leading-relaxed">
            Every figure below uses the standard amortization formula, the same one used in our{" "}
            <Link href="/mba-loan-repayment-calculator" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">MBA Loan Repayment Calculator</Link>:
          </p>
          <div className="bg-slate-900 border border-white/10 rounded-xl p-5 space-y-2 font-mono text-sm text-slate-300">
            <p>Payment = P × r ÷ (1 − (1 + r)<sup>−n</sup>)</p>
            <p className="text-slate-400">P = principal · r = annual rate ÷ 12 · n = number of monthly payments</p>
            <p className="pt-2">Example: $159,000 at 11% over 10 years</p>
            <p>r = 0.11 ÷ 12 = 0.009167 · n = 120</p>
            <p>$159,000 × 0.009167 = $1,457.50</p>
            <p>(1.009167)<sup>−120</sup> = 0.3346 → 1 − 0.3346 = 0.6654</p>
            <p>$1,457.50 ÷ 0.6654 = <span className="text-emerald-400">$2,190 per month</span></p>
          </div>
          <p className="text-slate-400 leading-relaxed">
            Add the $41,000 federal loan at 7.94% ($496 a month) and you get the totals below on a 10-year schedule.
            Private rates are assumptions for illustration; your quote depends on your credit.
          </p>
          <div className="bg-slate-900 border border-white/10 rounded-xl overflow-x-auto">
            <table className="w-full text-sm min-w-120">
              <thead>
                <tr className="text-left text-slate-500 text-xs border-b border-white/10">
                  <th className="px-4 py-3 font-medium">$200,000 borrowed, 10-year term</th>
                  <th className="px-4 py-3 font-medium">Monthly payment</th>
                  <th className="px-4 py-3 font-medium">Total interest</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {[
                  { mix: "Old rules: $159k Grad PLUS at 8.94%", pay: "$2,505", int: "$100,600" },
                  { mix: "New rules: $159k private at 9%", pay: "$2,510", int: "$101,200" },
                  { mix: "New rules: $159k private at 11%", pay: "$2,686", int: "$122,400" },
                  { mix: "New rules: $159k private at 13%", pay: "$2,870", int: "$144,400" },
                ].map((row) => (
                  <tr key={row.mix} className="border-b border-white/5 last:border-0">
                    <td className="px-4 py-3 text-white">{row.mix}</td>
                    <td className="px-4 py-3 text-emerald-300">{row.pay}</td>
                    <td className="px-4 py-3">{row.int}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-400 leading-relaxed">
            Two things stand out. A borrower with strong credit who can get about 9% fixed is roughly where they
            would have been with Grad PLUS, and slightly ahead once you count the Grad PLUS origination fee of
            4.228%, about $6,700 on $159,000, which most private lenders do not charge. A borrower quoted 13%
            pays about $365 more per month and $43,800 more interest over ten years. The rule change hurts most
            the people with the thinnest credit files, not the people with the highest incomes.
          </p>
          <p className="text-slate-500 text-xs">
            Simplification: like our calculators, this treats the loans as starting at graduation. Unsubsidized
            federal loans and most private loans accrue interest while you are in school, which raises the balance
            you start repaying.
          </p>
        </section>

        {/* Section 4: ROI impact */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">What It Does to MBA ROI: A Worked Example</h2>
          <p className="text-slate-400 leading-relaxed">
            Now put the loan into the full return calculation. We use the{" "}
            <Link href="/mba-roi-calculator" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">MBA ROI Calculator</Link>{" "}
            model: all program-period costs at Year 0, a flat salary delta for 10 years, loans repaid over 5 years,
            and a 6% discount rate. The candidate earns the $85,000 median pre-MBA salary for M7 applicants and
            lands the $175,000 M7 median base salary for the Class of 2025.
          </p>
          <div className="bg-slate-900 border border-white/10 rounded-xl p-5 space-y-3 font-mono text-sm">
            <p className="text-slate-400">// Cash flows, $159k private at 11%</p>
            <div className="space-y-1 text-slate-300">
              <p><span className="text-blue-400">Year 0:</span> −$50,000 savings − $170,000 forgone salary = <span className="text-red-400">−$220,000</span></p>
              <p><span className="text-blue-400">Loan payments, 5-yr:</span> $41k at 7.94% → $9,962/yr; $159k at 11% → $41,484/yr; total <span className="text-red-400">$51,446/yr</span></p>
              <p><span className="text-blue-400">Years 1–5:</span> $90,000 delta − $51,446 = <span className="text-emerald-400">+$38,554/yr</span></p>
              <p><span className="text-blue-400">Years 6–10:</span> <span className="text-emerald-400">+$90,000/yr</span></p>
              <p className="pt-2 text-slate-400">NPV at 6% = −220,000 + Σ CF<sub>t</sub> ÷ 1.06<sup>t</sup> ≈ <span className="text-emerald-400">+$225,700</span></p>
            </div>
          </div>
          <div className="space-y-2">
            {[
              { scenario: "Old rules: all federal (Grad PLUS at 8.94%)", npv: "+$233,800", irr: "21.0%", payback: "5.2 yrs" },
              { scenario: "New rules: private at 9%", npv: "+$233,600", irr: "21.0%", payback: "5.2 yrs" },
              { scenario: "New rules: private at 11%", npv: "+$225,700", irr: "20.4%", payback: "5.3 yrs" },
              { scenario: "New rules: private at 13%", npv: "+$217,600", irr: "19.8%", payback: "5.4 yrs" },
              { scenario: "New rules: $50k scholarship, $109k private at 11%", npv: "+$280,600", irr: "24.7%", payback: "4.3 yrs" },
              { scenario: "New rules: gap paid from savings, no private loan", npv: "+$241,400", irr: "17.6%", payback: "4.7 yrs" },
            ].map((row) => (
              <div key={row.scenario} className="bg-white/3 border border-white/8 rounded-xl px-4 py-3">
                <p className="text-white text-sm font-medium mb-1.5">{row.scenario}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400">
                  <span>10-yr NPV: <span className="text-emerald-400 font-semibold">{row.npv}</span></span>
                  <span>IRR: {row.irr}</span>
                  <span>Payback: {row.payback}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-400 leading-relaxed">
            Going from Grad PLUS to an 11% private loan costs about $8,100 of NPV; at 13% the cost is about
            $16,300. Compare that with salary risk: in our{" "}
            <Link href="/blog/how-to-calculate-mba-roi" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">MBA ROI guide</Link>,
            landing a $150,000 job instead of $190,000 swings NPV by almost $300,000. A $50,000 scholarship is worth
            more than six times the whole rate change.
          </p>
          <p className="text-slate-400 leading-relaxed">
            The last row needs a word of explanation. Paying the gap from savings produces the highest NPV but a
            lower IRR. That is not a contradiction. NPV assumes your money would otherwise earn 6%, so avoiding an
            11% loan is a good trade. IRR falls because more of your own capital goes in at Year 0. If you have the
            savings, using them instead of borrowing at a rate well above 6% is the better choice; just keep an
            emergency fund, because an MBA with no cash buffer is a fragile position if recruiting goes badly.
          </p>
        </section>

        {/* Section 5: Affordability */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Can You Afford the Payment? An After-Tax Check</h2>
          <p className="text-slate-400 leading-relaxed">
            NPV says whether the degree pays. Cash flow says whether you can live while it does. On 2026 federal
            brackets, a single filer earning $175,000 takes home about $130,900 a year after federal income tax
            and FICA (Social Security applies up to the $184,500 wage base), or about $10,900 a month before state tax.
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { label: "10-year term at 11%", value: "$2,686/mo", note: "≈ 25% of federal take-home" },
              { label: "5-year term at 11%", value: "$4,287/mo", note: "≈ 39% of federal take-home" },
              { label: "Take-home at $175k", value: "$10,907/mo", note: "Before state and local tax" },
            ].map((item) => (
              <div key={item.label} className="bg-emerald-400/8 border border-emerald-400/20 rounded-xl p-4 text-center space-y-1">
                <p className="text-emerald-400 text-xl font-semibold">{item.value}</p>
                <p className="text-white text-sm font-medium">{item.label}</p>
                <p className="text-slate-500 text-xs">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-400 leading-relaxed">
            A 10-year schedule is manageable for most graduates at the median salary, even in a high-cost city. The
            aggressive 5-year payoff our ROI model assumes takes almost 40% of federal take-home pay, which is realistic
            mostly for graduates in consulting, banking or private equity with a bonus on top. Check the numbers for
            your state in the{" "}
            <Link href="/salary-calculator" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">salary and paycheck calculator</Link>.
          </p>
        </section>

        {/* Section 6: Risks */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">The Risks the Interest Rate Does Not Capture</h2>
          <div className="space-y-3">
            {[
              {
                risk: "Access",
                detail: "Grad PLUS required only the absence of an adverse credit history. Private lenders underwrite on credit score and income, and a student about to quit their job has little current income. Expect many borrowers, especially international students and those with short credit histories, to need a cosigner or a school-partnered lending program.",
              },
              {
                risk: "No income-driven safety net",
                detail: "New federal loans can be repaid on a standard plan or the new Repayment Assistance Plan, where payments are based on income. Private loans offer neither. If you graduate into a recession or a slow job search, private payments are due regardless of what you earn.",
              },
              {
                risk: "PSLF does not apply to private debt",
                detail: "Public Service Loan Forgiveness covers federal Direct Loans only. Nonprofit and government paths already had the weakest MBA returns in our data (IRR of 4–14%); with most of the budget now financed privately, the forgiveness that made some of those cases work is no longer available for that portion.",
              },
              {
                risk: "Variable rates",
                detail: "Some private loans carry variable rates that look cheaper today. On a 10-year balance of $159,000, each percentage point is worth roughly $90 a month. Fixed rates are usually the better choice when the payment matters to your budget.",
              },
            ].map((item) => (
              <div key={item.risk} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="font-semibold text-emerald-300 text-sm">{item.risk}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Plan */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">A Financing Plan for the Class of 2028</h2>
          <p className="text-slate-400 leading-relaxed">
            If you are applying for fall 2027 or starting in 2026, work through these in order. Each step reduces the
            amount you need from the most expensive and least protected source.
          </p>
          <div className="space-y-3">
            {[
              { n: "01", title: "Negotiate scholarships before you commit", body: "Ask each school to review its offer in light of competing ones. A $50,000 award was worth about $55,000 of NPV in our example, against $8,100 for the whole rate change.", href: "/mba-roi-scholarship", link: "How scholarships change MBA ROI" },
              { n: "02", title: "Take the full federal amount first", body: "Borrow the $20,500 a year in Direct Unsubsidized Loans before anything private. It has a fixed rate, a small fee, income-based repayment options and PSLF eligibility.", href: "/how-to-pay-for-mba", link: "How to pay for an MBA" },
              { n: "03", title: "Look for employer and military money", body: "Employer sponsorship, tuition reimbursement and the GI Bill with Yellow Ribbon can close much of the gap. Sponsorship usually comes with a commitment to return, so value it as a trade.", href: "/employer-sponsored-mba-roi", link: "Employer-sponsored MBA ROI" },
              { n: "04", title: "Shop private loans properly", body: "Get prequalified quotes from several lenders (most use a soft credit check), compare fixed APRs and fees, and ask your school about partner lenders. A two-point rate difference on $159,000 is worth about $8,000 of NPV in our model.", href: "/mba-loan-repayment-calculator", link: "Model payments by rate" },
              { n: "05", title: "Reconsider the format", body: "Part-time, executive and one-year programs need less borrowing and keep some or all of your salary. If you are not targeting consulting or banking recruiting, they may now be the better financial choice.", href: "/part-time-mba-roi", link: "Part-time MBA ROI" },
              { n: "06", title: "Plan to prepay with your signing bonus", body: "Paying down an 11% loan returns a guaranteed 11%. Use your signing bonus and early bonuses on the highest-rate balance first.", href: "/blog/mba-salary-negotiation", link: "Negotiating the post-MBA offer" },
            ].map((item) => (
              <div key={item.n} className="bg-white/5 border border-white/10 rounded-xl p-5 flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                  <span className="text-emerald-400 text-xs font-mono font-semibold">{item.n}</span>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-white text-sm">{item.title}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
                  <Link href={item.href} className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
                    {item.link} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-xl bg-emerald-600/10 border border-emerald-500/20 p-5 space-y-3">
          <p className="text-emerald-300 font-semibold text-sm">Run Your Own Financing Mix</p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Enter your budget, the share you will borrow and your blended rate (federal and private combined) to see
            your payment schedule, then carry the result into the ROI calculator for NPV, IRR and break-even.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/mba-loan-repayment-calculator"
              className="inline-block bg-emerald-600 hover:bg-emerald-500 transition-colors px-5 py-2.5 rounded-lg text-white text-sm font-medium"
            >
              MBA Loan Repayment Calculator →
            </Link>
            <Link
              href="/mba-roi-calculator"
              className="inline-block border border-emerald-500/40 hover:bg-emerald-500/10 transition-colors px-5 py-2.5 rounded-lg text-emerald-300 text-sm font-medium"
            >
              MBA ROI Calculator →
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
              { href: "/how-to-pay-for-mba", label: "How to Pay for an MBA" },
              { href: "/mba-roi-100k-debt", label: "MBA ROI with $100K Debt" },
              { href: "/mba-scholarships", label: "MBA Scholarships Guide" },
              { href: "/mba-worth-it", label: "Is an MBA Worth It in 2026?" },
              { href: "/blog/how-to-calculate-mba-roi", label: "How to Calculate MBA ROI" },
              { href: "/yellow-ribbon-mba-programs", label: "Yellow Ribbon MBA Programs" },
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
          <Link href="/mba-loan-repayment-calculator" className="hover:text-slate-300 transition-colors">MBA Loan Repayment Calculator</Link>
          {" · "}
          <Link href="/about" className="hover:text-slate-300 transition-colors">About</Link>
        </p>
        <p>Loan limits and repayment rules from the One Big Beautiful Bill Act (Pub. L. 119-21) and U.S. Department of Education guidance effective July 1, 2026; 2025–26 federal interest rates and origination fees from studentaid.gov. Salary inputs from Class of 2025 school employment reports and GMAC surveys. Tax figures use 2026 IRS brackets and the $184,500 Social Security wage base. Private loan rates are illustrative assumptions. This is not financial advice; confirm your eligibility with your school&apos;s financial aid office.</p>
      </footer>

    </main>
  )
}
