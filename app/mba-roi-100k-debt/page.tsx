import Link from "next/link"

export const metadata = {
  title: "MBA ROI with $100k Debt: Loan Math, Break-Even & Career Track Analysis (2025) | CareerReturns",
  description:
    "Is an MBA worth it with $100k in student loans? Exact loan payment math, break-even by debt level, debt-to-income risk thresholds, and which career tracks still produce positive ROI at full debt.",
  alternates: { canonical: "https://careerreturns.com/mba-roi-100k-debt" },
}

export default function MbaRoi100kDebtPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-red-600/12 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12 sm:space-y-20">

        <header className="space-y-5">
          <p className="text-xs font-medium text-red-400 uppercase tracking-widest">CareerReturns · MBA Debt Analysis</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            MBA ROI with $100k Debt:<br />The Loan Math That Matters
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Borrowing $100,000 to finance an MBA is one of the most common financial decisions in graduate education.
            The question is not whether you can afford the payments — it is whether the career outcome justifies the
            total economic cost including interest. Here is the complete analysis.
          </p>
        </header>

        {/* The actual loan math */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">The Exact Loan Payment Math at Four Debt Levels</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Most MBA applicants focus on total tuition cost and ignore the actual monthly cash flow impact of
            loan repayment. The{" "}
            <Link href="/mba-roi-calculator" className="text-red-400 hover:text-red-300 transition-colors underline underline-offset-2">MBA ROI calculator</Link>
            {" "}models this correctly — subtracting annual loan payments from salary delta to compute real net annual
            benefit. The table below shows the actual payment obligations at four common debt levels.
          </p>
          <div className="space-y-3">
            {[
              {
                debt: "$75,000",
                rate: "6.5%",
                term: "10 years",
                monthly: "$851/mo",
                annual: "$10,212/yr",
                totalInterest: "$27,120",
                totalRepaid: "$102,120",
                color: "text-green-400",
              },
              {
                debt: "$100,000",
                rate: "6.5%",
                term: "10 years",
                monthly: "$1,135/mo",
                annual: "$13,620/yr",
                totalInterest: "$36,200",
                totalRepaid: "$136,200",
                color: "text-yellow-400",
              },
              {
                debt: "$150,000",
                rate: "7.0%",
                term: "10 years",
                monthly: "$1,743/mo",
                annual: "$20,916/yr",
                totalInterest: "$59,160",
                totalRepaid: "$209,160",
                color: "text-orange-400",
              },
              {
                debt: "$200,000",
                rate: "7.0%",
                term: "10 years",
                monthly: "$2,324/mo",
                annual: "$27,888/yr",
                totalInterest: "$78,880",
                totalRepaid: "$278,880",
                color: "text-red-400",
              },
            ].map(({ debt, rate, term, monthly, annual, totalInterest, totalRepaid, color }) => (
              <div key={debt} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <p className="text-white font-semibold text-sm">{debt} loan at {rate} · {term}</p>
                  <p className={`${color} font-semibold text-sm`}>{monthly}</p>
                </div>
                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div><p className="text-slate-500 mb-0.5">Annual payment</p><p className={`${color} font-medium`}>{annual}</p></div>
                  <div><p className="text-slate-500 mb-0.5">Total interest</p><p className="text-slate-300">{totalInterest}</p></div>
                  <div><p className="text-slate-500 mb-0.5">Total repaid</p><p className="text-slate-300">{totalRepaid}</p></div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs">
            Uses standard annuity formula: PMT = rL / (1 − (1+r)^−n). Rates reflect 2024–2025 graduate PLUS loan rates
            (7.05–8.05%) and private lender refinancing rates (5.5–7.5%). The 6.5–7.0% range is conservative-realistic.
          </p>
        </section>

        {/* Net annual gain table */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Net Annual Benefit After Loan Payments by Career Track</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The salary delta alone does not tell the story. The relevant number is your net annual benefit:
            the salary delta minus annual loan payments. This is the actual cash flow improvement you receive
            each year during the repayment period, and the number that determines your real{" "}
            <Link href="/mba-break-even" className="text-red-400 hover:text-red-300 transition-colors underline underline-offset-2">break-even timeline</Link>.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5">
            <p className="text-xs font-medium text-red-400 uppercase tracking-widest">Pre-MBA Salary: $85,000 · Loan: $100k at 6.5% · Annual payment: $13,620</p>
            <div className="space-y-4">
              {[
                { track: "McKinsey / MBB Consulting", postMba: "$205,000", delta: "$120,000", netGain: "$106,380", breakEven: "~4.5 yrs", verdict: "Excellent", color: "text-green-400", barW: 90 },
                { track: "Goldman Sachs / Bulge Bracket IB (base)", postMba: "$185,000", delta: "$100,000", netGain: "$86,380", breakEven: "~5.5 yrs", verdict: "Strong", color: "text-blue-400", barW: 73 },
                { track: "FAANG Product Manager", postMba: "$195,000", delta: "$110,000", netGain: "$96,380", breakEven: "~5.0 yrs", verdict: "Strong", color: "text-sky-400", barW: 80 },
                { track: "Tier 2 Strategy Consulting", postMba: "$170,000", delta: "$85,000", netGain: "$71,380", breakEven: "~6.5 yrs", verdict: "Positive", color: "text-teal-400", barW: 60 },
                { track: "Big 4 Strategy Advisory", postMba: "$145,000", delta: "$60,000", netGain: "$46,380", breakEven: "~8.5 yrs", verdict: "Marginal", color: "text-yellow-400", barW: 40 },
                { track: "Corporate Strategy (F500)", postMba: "$130,000", delta: "$45,000", netGain: "$31,380", breakEven: ">10 yrs", verdict: "Questionable", color: "text-orange-400", barW: 26 },
              ].map(({ track, postMba, delta, netGain, breakEven, verdict, color, barW }) => (
                <div key={track} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <span className="text-slate-300 text-sm">{track} ({postMba})</span>
                    <span className={`${color} text-xs font-semibold`}>{verdict} · {breakEven}</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className={`h-2 rounded-full ${color === "text-green-400" ? "bg-green-500" : color === "text-blue-400" ? "bg-blue-500" : color === "text-sky-400" ? "bg-sky-500" : color === "text-teal-400" ? "bg-teal-500" : color === "text-yellow-400" ? "bg-yellow-500" : "bg-orange-500"}`}
                      style={{ width: `${barW}%` }} />
                  </div>
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Delta: {delta}/yr → Net: <span className={color}>{netGain}/yr</span></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Debt-to-income risk */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Debt-to-Income Risk Thresholds</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Financial planners and the Consumer Financial Protection Bureau (CFPB) generally recommend keeping
            total monthly debt payments below 20% of gross monthly income for sustainable finances. For student
            loans specifically, many planners suggest a 10–15% threshold. These thresholds determine whether your
            loan payment creates meaningful financial stress or is an affordable cost of career investment.
          </p>
          <div className="space-y-3">
            {[
              {
                scenario: "$100k debt, $13,620/yr payment, $205k GS base ($17,083/mo gross)",
                ratio: "6.6% of gross monthly income",
                assessment: "Low risk — well within comfort zone",
                color: "text-green-400",
                indicator: "●",
              },
              {
                scenario: "$100k debt, $13,620/yr payment, $145k Big 4 base ($12,083/mo gross)",
                ratio: "9.4% of gross monthly income",
                assessment: "Acceptable — manageable with discipline",
                color: "text-yellow-400",
                indicator: "●",
              },
              {
                scenario: "$150k debt, $20,916/yr payment, $145k Big 4 base ($12,083/mo gross)",
                ratio: "14.4% of gross monthly income",
                assessment: "Elevated — limits other financial goals",
                color: "text-orange-400",
                indicator: "●",
              },
              {
                scenario: "$200k debt, $27,888/yr payment, $130k Corp Strategy ($10,833/mo gross)",
                ratio: "21.4% of gross monthly income",
                assessment: "High risk — approaching CFPB warning zone",
                color: "text-red-400",
                indicator: "●",
              },
            ].map(({ scenario, ratio, assessment, color }) => (
              <div key={scenario} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-white text-sm">{scenario}</p>
                <p className={`${color} text-xs font-semibold`}>{ratio} · {assessment}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Debt level break-even shift */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">How Each $25k in Additional Debt Shifts Break-Even</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Every additional $25,000 in MBA debt — assuming 6.5% interest, 10-year repayment — adds approximately
            $3,400 per year in annual loan payments, and pushes break-even out by 4–6 months depending on your salary
            delta. This relationship is linear, which means the cost of marginal debt is predictable and modelable.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
            <p className="text-xs font-medium text-red-400 uppercase tracking-widest">Break-Even Shift: MBB Consulting Track ($120k/yr delta)</p>
            <div className="space-y-3">
              {[
                { debtLabel: "$0 debt", annual: "$0/yr", beShift: "Baseline", breakEven: "3.7 years", bar: 37 },
                { debtLabel: "$50k", annual: "$6,810/yr", beShift: "+3 months", breakEven: "4.0 years", bar: 40 },
                { debtLabel: "$100k", annual: "$13,620/yr", beShift: "+6 months", breakEven: "4.5 years", bar: 45 },
                { debtLabel: "$150k", annual: "$20,430/yr", beShift: "+9 months", breakEven: "5.1 years", bar: 51 },
                { debtLabel: "$175k", annual: "$23,835/yr", beShift: "+12 months", breakEven: "5.6 years", bar: 56 },
                { debtLabel: "$200k", annual: "$27,240/yr", beShift: "+15 months", breakEven: "6.2 years", bar: 62 },
              ].map(({ debtLabel, annual, beShift, breakEven, bar }) => (
                <div key={debtLabel} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300">{debtLabel} ({annual})</span>
                    <span className="text-slate-400">{breakEven} · {beShift}</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-1.5">
                    <div className="bg-red-500 h-1.5 rounded-full" style={{ width: `${bar}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Federal loan options */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Federal Loan Repayment Options That Affect ROI</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            For federally held loans (Direct Unsubsidized and Graduate PLUS), income-driven repayment (IDR) plans
            can reduce monthly payments in early career years and provide loan forgiveness pathways. These programs
            are not available for private loan refinancing — an important consideration when deciding whether to
            refinance federal debt after graduation.
          </p>
          <div className="space-y-3">
            {[
              {
                plan: "SAVE Plan (Saving on a Valuable Education)",
                payment: "5–10% of discretionary income",
                forgiveness: "10–20 year forgiveness (varies by balance)",
                best: "Best for: High debt relative to income (Big 4 track at full M7 cost)",
              },
              {
                plan: "PAYE (Pay As You Earn)",
                payment: "10% of discretionary income, capped",
                forgiveness: "20-year forgiveness",
                best: "Best for: Early career income variability, career transitions",
              },
              {
                plan: "IBR (Income-Based Repayment)",
                payment: "10–15% of discretionary income",
                forgiveness: "20–25 year forgiveness",
                best: "Best for: Legacy federal loans, older borrowers",
              },
              {
                plan: "PSLF (Public Service Loan Forgiveness)",
                payment: "IDR payments for 10 years",
                forgiveness: "Full forgiveness after 120 qualifying payments",
                best: "Best for: Healthcare, government, nonprofit sector (saves $50–$120k in interest)",
              },
            ].map(({ plan, payment, forgiveness, best }) => (
              <div key={plan} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-white font-semibold text-sm">{plan}</p>
                <p className="text-slate-400 text-xs">Payment: {payment}</p>
                <p className="text-slate-400 text-xs">Forgiveness: {forgiveness}</p>
                <p className="text-red-300 text-xs font-medium">{best}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            PSLF eligibility is particularly valuable for healthcare MBA graduates. See the{" "}
            <Link href="/mba-roi-healthcare" className="text-red-400 hover:text-red-300 transition-colors underline underline-offset-2">healthcare MBA ROI guide</Link>
            {" "}for a full analysis of PSLF strategy and its impact on NPV.
          </p>
        </section>

        {/* When debt destroys ROI */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">When $100k Debt Destroys MBA ROI</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Debt is not inherently bad for MBA ROI — it is bad when the salary outcome does not generate sufficient
            delta to service it and still produce meaningful NPV within a reasonable timeframe. The{" "}
            <Link href="/mba-worth-it" className="text-red-400 hover:text-red-300 transition-colors underline underline-offset-2">MBA worth-it analysis</Link>
            {" "}covers the broader framework; here are the specific debt-driven failure modes.
          </p>
          <div className="space-y-3">
            {[
              {
                title: "Same industry, lateral role, modest salary gain",
                body: "Taking an MBA to move from $95k to $115k in the same sector with $100k in debt produces an annual net gain of only $6,380 after loan payments — requiring 30+ years to recover total economic cost. This is a common outcome for candidates who attend MBA programs without a meaningful career pivot goal.",
              },
              {
                title: "Non-target program, full debt, weak placement",
                body: "Borrowing $100k+ for a program ranked outside the top 30, without strong regional employer relationships, and accepting a role at $110k base results in a break-even that exceeds the loan term. The NPV is negative at standard discount rates.",
              },
              {
                title: "High pre-MBA salary with small target delta",
                body: "An engineer earning $150k who pursues an MBA and joins corporate strategy at $165k has a delta of $15k/yr. After $13,620/yr loan payments, the net gain is $1,380/yr — effectively zero. The opportunity cost alone ($300k over 2 years) renders this scenario deeply negative.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white/5 border border-red-900/30 rounded-xl p-5 space-y-2">
                <p className="text-white font-semibold text-sm">{title}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            The{" "}
            <Link href="/mba-roi-big4-vs-mbb" className="text-red-400 hover:text-red-300 transition-colors underline underline-offset-2">Big 4 vs MBB comparison</Link>
            {" "}models several of these scenarios in detail with specific NPV and IRR figures.
          </p>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-white/5 border border-white/10 p-10 text-center space-y-5">
          <p className="text-xs font-medium text-red-400 uppercase tracking-widest">Model Your Debt Scenario</p>
          <h2 className="text-2xl font-semibold tracking-tight">Calculate Your MBA ROI at Any Debt Level</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Enter your actual debt amount, interest rate, and expected salary. The calculator runs full loan
            amortization, NPV, IRR, and break-even — with and without debt included.
          </p>
          <Link
            href="/mba-roi-calculator"
            className="inline-block bg-linear-to-r from-red-600 to-orange-600 hover:opacity-90 transition-all px-8 py-4 rounded-xl font-medium text-white text-base shadow-[0_0_40px_rgba(220,38,38,0.3)]"
          >
            Open MBA ROI Calculator →
          </Link>
        </section>

        <footer className="border-t border-white/10 pt-8 text-center text-slate-500 text-xs space-y-2">
          <p>
            <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            {" · "}
            <Link href="/mba-roi-calculator" className="hover:text-slate-300 transition-colors">MBA ROI Calculator</Link>
            {" · "}
            <Link href="/mba-roi-scholarship" className="hover:text-slate-300 transition-colors">MBA Scholarship ROI</Link>
            {" · "}
            <Link href="/mba-roi-big4-vs-mbb" className="hover:text-slate-300 transition-colors">Big 4 vs MBB</Link>
            {" · "}
            <Link href="/mba-break-even" className="hover:text-slate-300 transition-colors">MBA Break-Even</Link>
            {" · "}
            <Link href="/mba-worth-it" className="hover:text-slate-300 transition-colors">Is MBA Worth It?</Link>
            {" · "}
            <Link href="/mba-roi-healthcare" className="hover:text-slate-300 transition-colors">Healthcare MBA ROI</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
        </footer>

      </div>
    </main>
  )
}
