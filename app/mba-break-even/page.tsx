import Link from "next/link"

export const metadata = {
  title: "MBA Break-Even Period (With Real Scenarios & Math) | CareerCapital",
  description:
    "MBA break-even and payback period explained with real math. Three scenarios (M7 consulting, regional GM, online MBA), the factors that shift your timeline, and a free calculator.",
}

export default function MbaBreakEvenPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-indigo-600/15 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 py-20 space-y-20">

        {/* Header */}
        <header className="space-y-5">
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">CareerCapital</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            MBA Break-Even Period:<br />When Does It Pay Off?
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            How long until your MBA investment turns cash flow positive — and what determines that timeline.
          </p>
        </header>

        {/* What break-even means */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">What MBA Break-Even Actually Measures</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            MBA break-even — sometimes called the MBA payback period — is the point in time when your
            cumulative net financial benefit from the degree turns positive. In plain terms: the year when
            you have recovered every dollar you spent and every dollar of income you gave up to attend.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            It is a more intuitive metric than{" "}
            <Link href="/mba-roi-calculator" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">NPV</Link>
            {" "}for many people because it answers a concrete question:
            <span className="text-white font-medium"> how long before I am financially ahead compared to never having gone?</span>
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            The cumulative net cash flow starts deeply negative on day one of enrollment — you are spending
            money and forgoing income. It stays negative through the program. After graduation it begins
            climbing as your{" "}
            <Link href="/mba-salary-increase" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">salary uplift</Link>
            {" "}(minus loan payments) accumulates year over year. Break-even is where the cumulative curve crosses zero.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-3">Typical ranges</p>
            <div className="space-y-3">
              {[
                { tier: "M7 → Consulting or Finance", range: "4–6 years", color: "text-green-400" },
                { tier: "M7 → Tech (post-2022 market)", range: "5–8 years", color: "text-green-400" },
                { tier: "Top 20 → General Management", range: "7–10 years", color: "text-yellow-400" },
                { tier: "Online / Part-Time MBA", range: "2–4 years", color: "text-green-400" },
                { tier: "Non-target, full debt, modest uplift", range: "10+ years", color: "text-red-400" },
              ].map(({ tier, range, color }) => (
                <div key={tier} className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">{tier}</span>
                  <span className={`font-semibold ${color}`}>{range}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Break-even timeline bar chart */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-widest">Break-Even Timeline — Years After Graduation</p>
            <div className="space-y-3">
              {[
                { label: "Online / Part-Time MBA", years: "2–4 yrs", pct: 25, color: "bg-green-400" },
                { label: "M7 → Consulting / Finance", years: "4–6 yrs", pct: 42, color: "bg-emerald-400" },
                { label: "M7 → Tech (post-2022)", years: "5–8 yrs", pct: 54, color: "bg-yellow-400" },
                { label: "Top 20 → General Management", years: "7–10 yrs", pct: 71, color: "bg-orange-400" },
                { label: "Non-target, full debt", years: "10+ yrs", pct: 92, color: "bg-red-400" },
              ].map(({ label, years, pct, color }) => (
                <div key={label} className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">{label}</span>
                    <span className="text-white font-medium tabular-nums">{years}</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className={`h-2 rounded-full ${color}`} style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-slate-600 text-xs pt-1">Shorter bar = faster payback. Scale: 0–12 years. Bars represent midpoint of stated range.</p>
          </div>
        </section>

        {/* The math */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">The Break-Even Calculation: How It Works</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Most break-even estimates you will find online use a simple ratio: total cost divided by annual
            salary increase. It is fast and wrong. The ratio ignores three factors that materially shift
            the real break-even date.
          </p>

          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
              <p className="text-white font-semibold text-sm">1. Loan repayment reduces net annual benefit</p>
              <p className="text-slate-400 text-xs leading-relaxed">
                If you financed 80% of a $150,000 program at 6.5% over 10 years, your monthly payment is
                approximately $1,360 — or $16,300 per year. That amount must be subtracted from your annual
                salary delta to compute the actual net benefit each year. In the early years after graduation,
                loan payments can consume 30–50% of the salary uplift.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
              <p className="text-white font-semibold text-sm">2. Opportunity cost creates a larger initial hole</p>
              <p className="text-slate-400 text-xs leading-relaxed">
                The cumulative deficit at graduation is not just tuition — it includes two years of foregone
                income. Someone earning $90,000 pre-MBA who attends a two-year program accumulates a
                $180,000 opportunity cost on top of $150,000 in tuition and $80,000 in living expenses.
                The real starting deficit is $410,000, not $150,000.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
              <p className="text-white font-semibold text-sm">3. Interest is paid before principal</p>
              <p className="text-slate-400 text-xs leading-relaxed">
                In the early years of loan repayment, most of each monthly payment goes to interest rather
                than reducing the principal balance. This means the cumulative cash flow curve rises more
                slowly than the salary delta alone would suggest during years one through four.
              </p>
            </div>
          </div>

          <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5">
            <p className="text-indigo-200 text-sm leading-relaxed">
              <span className="font-semibold text-white">The right method:</span> Project net cash flow
              year by year — salary delta minus annual loan payment — for each year after graduation.
              Running sum from the initial outflow (tuition + living costs + opportunity cost). Break-even
              is the year the running sum turns positive, interpolated between years for precision. Our{" "}
              <Link href="/mba-roi-calculator" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">MBA ROI calculator</Link>
              {" "}does this automatically.
            </p>
          </div>
        </section>

        {/* Factors affecting timeline */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Factors That Shift the Break-Even Timeline</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Break-even is sensitive to a small number of variables. Understanding which ones matter most
            helps you identify where to focus in your own scenario.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                factor: "Salary delta",
                impact: "High",
                color: "text-red-400",
                description: "The single largest driver. A $50k/yr delta recovers cost twice as fast as a $25k/yr delta, all else equal.",
              },
              {
                factor: "Opportunity cost",
                impact: "High",
                color: "text-red-400",
                description: "Higher pre-MBA salary means a larger initial hole. Someone earning $120k pre-MBA starts from a much deeper deficit than someone earning $60k.",
              },
              {
                factor: "Total tuition",
                impact: "Medium",
                color: "text-yellow-400",
                description: "Important but often overstated. A $30k tuition reduction shortens break-even by roughly 8–12 months, not several years.",
              },
              {
                factor: "Loan percentage",
                impact: "Medium",
                color: "text-yellow-400",
                description: "Higher debt means higher annual payments and slower net benefit accumulation, particularly in years one through five.",
              },
              {
                factor: "Interest rate",
                impact: "Medium",
                color: "text-yellow-400",
                description: "At 6.5% vs. 4%, a $120k loan costs roughly $4,500 more per year in early payments — meaningful but not dominant.",
              },
              {
                factor: "Program format (full-time vs. part-time)",
                impact: "Very High",
                color: "text-red-400",
                description: "Part-time and online programs eliminate opportunity cost entirely. This can cut break-even from 6 years to 2 years for the same salary outcome.",
              },
            ].map(({ factor, impact, color, description }) => (
              <div key={factor} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-white font-semibold text-sm">{factor}</p>
                  <span className={`text-xs font-medium ${color}`}>Impact: {impact}</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Scenario examples */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Three Break-Even Scenarios with Full Math</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The following scenarios are modeled using the same methodology as our calculator: cumulative
            cash flows with loan amortization, starting from the total economic cost at program start.
          </p>

          {/* Scenario A */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-7 space-y-5">
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-green-400 uppercase tracking-widest bg-green-500/10 border border-green-500/20 rounded-lg px-3 py-1.5">Scenario A</span>
              <p className="text-white font-semibold">M7 Full-Time → Management Consulting (MBB)</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              <div className="space-y-1">
                <p className="text-slate-500 text-xs uppercase tracking-wide">Pre-MBA Salary</p>
                <p className="text-white font-medium">$90k/yr</p>
              </div>
              <div className="space-y-1">
                <p className="text-slate-500 text-xs uppercase tracking-wide">Post-MBA Salary</p>
                <p className="text-white font-medium">$200k/yr</p>
              </div>
              <div className="space-y-1">
                <p className="text-slate-500 text-xs uppercase tracking-wide">Total Cost</p>
                <p className="text-white font-medium">$160k tuition + $80k living + $180k opp. = $420k</p>
              </div>
              <div className="space-y-1">
                <p className="text-slate-500 text-xs uppercase tracking-wide">Loan</p>
                <p className="text-white font-medium">$128k at 6.5%, 10yr</p>
              </div>
            </div>
            <div className="border-t border-white/5 pt-4 space-y-2">
              <p className="text-slate-400 text-xs leading-relaxed">
                Annual salary delta: $110k. Annual loan payment: ~$17k. Net annual benefit: ~$93k.
                Initial deficit: $420k. At $93k net benefit per year, the cumulative deficit turns positive
                in approximately <span className="text-green-400 font-semibold">5.5 years</span> after graduation.
                IRR on this scenario is approximately 20–22%. NPV is strongly positive.
              </p>
            </div>
          </div>

          {/* Scenario B */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-7 space-y-5">
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-yellow-400 uppercase tracking-widest bg-yellow-500/10 border border-yellow-500/20 rounded-lg px-3 py-1.5">Scenario B</span>
              <p className="text-white font-semibold">Regional Top-30 → General Management</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              <div className="space-y-1">
                <p className="text-slate-500 text-xs uppercase tracking-wide">Pre-MBA Salary</p>
                <p className="text-white font-medium">$72k/yr</p>
              </div>
              <div className="space-y-1">
                <p className="text-slate-500 text-xs uppercase tracking-wide">Post-MBA Salary</p>
                <p className="text-white font-medium">$118k/yr</p>
              </div>
              <div className="space-y-1">
                <p className="text-slate-500 text-xs uppercase tracking-wide">Total Cost</p>
                <p className="text-white font-medium">$95k tuition + $60k living + $144k opp. = $299k</p>
              </div>
              <div className="space-y-1">
                <p className="text-slate-500 text-xs uppercase tracking-wide">Loan</p>
                <p className="text-white font-medium">$76k at 6.5%, 10yr</p>
              </div>
            </div>
            <div className="border-t border-white/5 pt-4 space-y-2">
              <p className="text-slate-400 text-xs leading-relaxed">
                Annual salary delta: $46k. Annual loan payment: ~$10k. Net annual benefit: ~$36k.
                Initial deficit: $299k. Break-even occurs at approximately
                <span className="text-yellow-400 font-semibold"> 8.3 years</span> after graduation.
                IRR is approximately 9–10% — marginal relative to a passive equity investment.
                If the school offers 30%+ scholarship aid, break-even improves to roughly 6 years.
              </p>
            </div>
          </div>

          {/* Scenario C */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-7 space-y-5">
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-blue-400 uppercase tracking-widest bg-blue-500/10 border border-blue-500/20 rounded-lg px-3 py-1.5">Scenario C</span>
              <p className="text-white font-semibold">Accredited Online Part-Time MBA (kept working)</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              <div className="space-y-1">
                <p className="text-slate-500 text-xs uppercase tracking-wide">Pre-MBA Salary</p>
                <p className="text-white font-medium">$82k/yr</p>
              </div>
              <div className="space-y-1">
                <p className="text-slate-500 text-xs uppercase tracking-wide">Post-MBA Salary</p>
                <p className="text-white font-medium">$108k/yr</p>
              </div>
              <div className="space-y-1">
                <p className="text-slate-500 text-xs uppercase tracking-wide">Total Cost</p>
                <p className="text-white font-medium">$48k tuition + $0 opp. = $48k</p>
              </div>
              <div className="space-y-1">
                <p className="text-slate-500 text-xs uppercase tracking-wide">Loan</p>
                <p className="text-white font-medium">$38k at 6.5%, 7yr</p>
              </div>
            </div>
            <div className="border-t border-white/5 pt-4 space-y-2">
              <p className="text-slate-400 text-xs leading-relaxed">
                Annual salary delta: $26k. Annual loan payment: ~$7k. Net annual benefit: ~$19k.
                Initial deficit: $48k. Break-even occurs at approximately
                <span className="text-green-400 font-semibold"> 2.5 years</span> after graduation —
                the strongest financial result of the three scenarios. Eliminating opportunity cost
                is more powerful than reducing tuition. IRR on this scenario often exceeds 30%.
              </p>
            </div>
          </div>

          <div className="bg-violet-500/10 border border-violet-500/20 rounded-xl p-5">
            <p className="text-violet-200 text-sm leading-relaxed">
              <span className="font-semibold text-white">Pattern:</span> The program format (full-time vs.
              part-time) matters more than the tuition difference between programs. Opportunity cost is the
              dominant variable in full-time scenarios. Controlling for it — by keeping your income stream
              intact — produces better break-even math than attending a cheaper full-time program.{" "}
              For a full analysis of whether the investment makes sense for your profile, see{" "}
              <Link href="/mba-worth-it" className="text-violet-300 hover:text-violet-200 transition-colors underline underline-offset-2">Is an MBA Worth It?</Link>
            </p>
          </div>
        </section>

        {/* CTA embed */}
        <section className="rounded-2xl bg-white/5 border border-white/10 p-10 text-center space-y-5">
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">Your Numbers</p>
          <h2 className="text-2xl font-semibold tracking-tight">Calculate Your Exact Break-Even Date</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            The scenarios above use illustrative figures. Your actual break-even depends on your specific
            salary, program cost, loan structure, and career outcome. The calculator models all variables
            together and shows your cumulative cash flow curve year by year.
          </p>
          <Link
            href="/mba-roi-calculator"
            className="inline-block bg-linear-to-r from-indigo-600 to-violet-600 hover:opacity-90 transition-all px-8 py-4 rounded-xl font-medium text-white text-base shadow-[0_0_40px_rgba(99,102,241,0.3)]"
          >
            Open MBA ROI Calculator →
          </Link>
          <p className="text-slate-500 text-xs">
            The calculator shows NPV, IRR, break-even year, and a comparison against investing the same capital in the market.
          </p>
        </section>

        {/* Footer nav */}
        <footer className="border-t border-white/10 pt-8 text-center text-slate-500 text-xs space-y-2">
          <p>
            <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            {" · "}
            <Link href="/mba-roi-calculator" className="hover:text-slate-300 transition-colors">MBA ROI Calculator</Link>
            {" · "}
            <Link href="/mba-worth-it" className="hover:text-slate-300 transition-colors">Is MBA Worth It?</Link>
            {" · "}
            <Link href="/mba-salary-increase" className="hover:text-slate-300 transition-colors">MBA Salary Increase</Link>
            {" · "}
            <Link href="/mba-roi-100k-debt" className="hover:text-slate-300 transition-colors">MBA $100k Debt ROI</Link>
            {" · "}
            <Link href="/mba-roi-scholarship" className="hover:text-slate-300 transition-colors">MBA Scholarship ROI</Link>
            {" · "}
            <Link href="/mba-roi-military" className="hover:text-slate-300 transition-colors">MBA ROI: Veterans</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
        </footer>

      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How long does it take to break even on an MBA?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "MBA break-even ranges from 4–6 years for M7 programs with consulting or finance placement, 7–10 years for regional top-30 programs targeting general management, and 2–4 years for online or part-time MBAs. The key variables are salary delta, opportunity cost, total tuition, and loan structure. A simple cost-to-salary ratio significantly underestimates true break-even because it ignores loan repayment drag in the early post-graduation years.",
                },
              },
              {
                "@type": "Question",
                name: "What is the MBA payback period for consulting?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For an M7 MBA graduate entering MBB consulting (McKinsey, Bain, BCG), the payback period is typically 4.5–6 years. With a pre-MBA salary of $85,000 and a post-MBA MBB base of $200,000 plus $40,000 signing bonus, the net annual benefit after loan payments is approximately $95,000–$115,000. Against a total economic cost of $400,000–$420,000, the break-even occurs in the mid-5-year range.",
                },
              },
              {
                "@type": "Question",
                name: "Does an online MBA break even faster than a full-time MBA?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, significantly. An online or part-time MBA eliminates opportunity cost entirely since you keep working during the program. For the same salary outcome, an online MBA with $48,000 in tuition breaks even in approximately 2–3 years. A full-time program with $155,000 in tuition plus $160,000 in foregone income (total $315,000) breaks even in 8–9 years with the same $30,000 salary delta. The format difference is more impactful than the tuition difference.",
                },
              },
              {
                "@type": "Question",
                name: "How does opportunity cost affect MBA break-even?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Opportunity cost is the single most underestimated factor in MBA break-even calculations. For a two-year full-time program, foregone salary equals two years of pre-MBA income — often $160,000–$220,000 for most applicants. This is typically larger than tuition itself. A correct break-even model must include opportunity cost, not just tuition, in the total outflow at program start.",
                },
              },
              {
                "@type": "Question",
                name: "What factors most affect how long an MBA takes to pay off?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The five factors that most affect MBA break-even are: (1) salary delta — the annual income increase from the degree; (2) program format — full-time eliminates opportunity cost; (3) opportunity cost — pre-MBA salary times program duration; (4) loan percentage and interest rate — higher debt extends break-even by reducing net annual benefit; (5) total tuition — important but typically less impactful than opportunity cost for mid-career candidates.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  )
}
