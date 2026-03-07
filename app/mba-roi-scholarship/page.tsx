import Link from "next/link"

export const metadata = {
  title: "MBA Scholarship ROI (2026): How 50% Aid Flips IRR from 21% to 40% — and When to Take a Lower-Ranked School",
  description:
    "MBA scholarship ROI comparison. How a 50% merit scholarship changes break-even, NPV, and IRR. When to take a lower-ranked school with full aid over a top program at full cost — with real math.",
  alternates: { canonical: "https://careerreturns.com/mba-roi-scholarship" },
}

export default function MbaRoiScholarshipPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-yellow-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12 sm:space-y-20">

        <header className="space-y-5">
          <p className="text-xs font-medium text-yellow-400 uppercase tracking-widest">CareerReturns · MBA Scholarship ROI</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            MBA Scholarship ROI:<br />50% Aid vs. No Aid
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            A 50% merit scholarship at an M7 program saves $120,000–$130,000 in tuition, reduces break-even
            by 1.5–2 years, and adds $100,000–$120,000 to 10-year NPV. But the more important question is
            when accepting a lower-ranked school with full scholarship beats attending a top program at full cost.
          </p>
        </header>

        {/* The scholarship ROI fundamentals */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">How Scholarship Aid Changes the Fundamental ROI Math</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The{" "}
            <Link href="/mba-roi-calculator" className="text-yellow-400 hover:text-yellow-300 transition-colors underline underline-offset-2">MBA ROI calculation</Link>
            {" "}has three levers on the cost side: tuition, living expenses, and opportunity cost. Scholarship
            aid directly reduces tuition — the only lever that financial aid can move. A 50% tuition scholarship
            at a two-year M7 program saves $85,000–$130,000 on the tuition component alone. On the full
            economic cost basis (tuition + living + opportunity cost), this represents a 25–35% reduction.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Why does this matter so significantly? Because the{" "}
            <Link href="/mba-break-even" className="text-yellow-400 hover:text-yellow-300 transition-colors underline underline-offset-2">break-even calculation</Link>
            {" "}is linear: total economic cost divided by annual net gain equals years to break-even. A 25%
            reduction in total cost translates directly into a 25% reduction in break-even time. For a
            candidate who would otherwise break even in 6 years, a 50% scholarship produces a 4.5-year break-even.
            The IRR improvement is even more dramatic because the lower cost base amplifies the return on capital.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            The{" "}
            <Link href="/mba-salary-increase" className="text-yellow-400 hover:text-yellow-300 transition-colors underline underline-offset-2">post-MBA salary</Link>
            {" "}does not change with scholarship size. The same MBB offer, the same Goldman Sachs base, the same
            FAANG PM salary — regardless of how much you paid. This asymmetry — cost changes with scholarship,
            outcome stays constant — makes scholarship aid one of the highest-leverage variables in MBA ROI.
          </p>
        </section>

        {/* Scholarship impact table */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Scholarship Impact on Break-Even, IRR, and NPV</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The table below models the same M7 program at four scholarship levels, assuming a consulting-track
            candidate with pre-MBA salary of $85,000 targeting an MBB associate role at $205,000. Loan rate 6.5%,
            10-year repayment, 60% of remaining cost financed.
          </p>
          <div className="space-y-3">
            {[
              {
                aid: "No scholarship (full cost)",
                tuition: "$245,000",
                totalCost: "$415,000",
                loanAmt: "$147,000",
                loanPayment: "$19,800/yr",
                breakEven: "~4.5 years",
                irr: "21–24%",
                npv: "+$380,000",
                color: "text-slate-300",
                bar: 45,
              },
              {
                aid: "25% scholarship",
                tuition: "$183,750",
                totalCost: "$353,750",
                loanAmt: "$110,250",
                loanPayment: "$14,850/yr",
                breakEven: "~3.8 years",
                irr: "25–29%",
                npv: "+$441,000",
                color: "text-yellow-400",
                bar: 38,
              },
              {
                aid: "50% scholarship",
                tuition: "$122,500",
                totalCost: "$292,500",
                loanAmt: "$73,500",
                loanPayment: "$9,900/yr",
                breakEven: "~3.0 years",
                irr: "31–37%",
                npv: "+$502,000",
                color: "text-amber-400",
                bar: 30,
              },
              {
                aid: "Full scholarship (100%)",
                tuition: "$0",
                totalCost: "$170,000",
                loanAmt: "$0",
                loanPayment: "$0/yr",
                breakEven: "~1.5 years",
                irr: "55–70%+",
                npv: "+$614,000",
                color: "text-green-400",
                bar: 15,
              },
            ].map(({ aid, tuition, totalCost, loanAmt, loanPayment, breakEven, irr, npv, color, bar }) => (
              <div key={aid} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <p className="text-white font-semibold text-sm">{aid}</p>
                  <p className={`${color} font-semibold text-sm`}>{breakEven} break-even</p>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className={`h-2 rounded-full ${color === "text-green-400" ? "bg-green-500" : color === "text-amber-400" ? "bg-amber-500" : color === "text-yellow-400" ? "bg-yellow-500" : "bg-slate-500"}`}
                    style={{ width: `${bar}%` }} />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  <div><p className="text-slate-500 mb-0.5">Net tuition</p><p className="text-slate-300">{tuition}</p></div>
                  <div><p className="text-slate-500 mb-0.5">Total econ. cost</p><p className="text-slate-300">{totalCost}</p></div>
                  <div><p className="text-slate-500 mb-0.5">Loan balance</p><p className="text-slate-300">{loanAmt}</p></div>
                  <div><p className="text-slate-500 mb-0.5">Annual payment</p><p className="text-red-400">{loanPayment}</p></div>
                  <div><p className="text-slate-500 mb-0.5">IRR</p><p className={color}>{irr}</p></div>
                  <div><p className="text-slate-500 mb-0.5">10-yr NPV</p><p className={color}>{npv}</p></div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs">
            Total economic cost = net tuition + living expenses ($58k, 21 months) + books/health ($16k) + opportunity cost ($140k at $85k/yr).
            Loan: 60% of total cost, 6.5% rate, 10-year repayment. Post-MBA salary $205k (MBB associate).
          </p>
        </section>

        {/* Lower-ranked with scholarship vs. M7 at full cost */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">When to Take the Lower-Ranked School with Full Aid</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The most contentious ROI decision in MBA admissions: a Top 20 school with 50–100% scholarship
            versus an M7 at full cost. The answer depends on the magnitude of the salary outcome difference
            between the two programs — which is a function of your target career track.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            The core principle: if the salary difference between the two schools is smaller than the scholarship
            value divided by years of your career horizon, the lower-ranked school wins. At a 10-year horizon
            and a $120,000 scholarship, the lower-ranked school wins unless the M7 generates more than $12,000/year
            in additional salary — which is a realistic threshold for many career paths.
          </p>
          <div className="space-y-3">
            {[
              {
                scenario: "M7 at full cost vs. T15 at 50% scholarship, consulting target",
                m7Cost: "$415,000 total cost → MBB placement probability: ~12%",
                t15Cost: "$290,000 total cost (50% scholarship) → MBB probability: ~5%",
                m7Npv: "Expected-value NPV (12% × $380k + 88% × $100k): ~$134k",
                t15Npv: "Expected-value NPV (5% × $297k + 95% × $70k): ~$82k",
                verdict: "M7 wins on expected value in consulting when MBB probability differential is this large.",
                color: "text-yellow-400",
              },
              {
                scenario: "M7 at full cost vs. T15 at full scholarship, corporate strategy target",
                m7Cost: "$415,000 total cost → Corp strategy salary: $145k",
                t15Cost: "$170,000 total cost (full scholarship) → Corp strategy salary: $130k",
                m7Npv: "10-yr NPV at $145k: +$65,000 (barely positive)",
                t15Npv: "10-yr NPV at $130k, full scholarship: +$225,000",
                verdict: "T15 with full scholarship wins decisively. M7 at full cost for corporate strategy is nearly never justified financially.",
                color: "text-green-400",
              },
              {
                scenario: "M7 at full cost vs. T20 at 50% scholarship, tech PM target",
                m7Cost: "$415,000 total cost → FAANG PM: $195k base + equity",
                t15Cost: "$290,000 total cost → FAANG PM: $185k base + equity",
                m7Npv: "10-yr NPV difference: M7 adds ~$10k/yr salary → ~$74k NPV premium",
                t15Npv: "Scholarship saves $125k on cost → T20 NPV advantage: ~$51k ahead net",
                verdict: "T20 with 50% scholarship is marginally better for tech PM track. Full scholarship T20 wins decisively.",
                color: "text-teal-400",
              },
            ].map(({ scenario, m7Cost, t15Cost, m7Npv, t15Npv, verdict, color }) => (
              <div key={scenario} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
                <p className="text-white font-semibold text-sm">{scenario}</p>
                <div className="space-y-1 text-xs">
                  <p><span className="text-slate-500">M7: </span><span className="text-slate-300">{m7Cost}</span></p>
                  <p><span className="text-slate-500">T15/T20: </span><span className="text-slate-300">{t15Cost}</span></p>
                  <p><span className="text-slate-500">M7 NPV: </span><span className="text-slate-300">{m7Npv}</span></p>
                  <p><span className="text-slate-500">T15 NPV: </span><span className="text-slate-300">{t15Npv}</span></p>
                </div>
                <p className={`${color} text-xs font-semibold`}>→ {verdict}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Four financial scenarios */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Four Scholarship Scenarios: Full Financial Model</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Below are four distinct scholarship scenarios modeled to full break-even and NPV. Pre-MBA salary
            $85k in all cases. Use the{" "}
            <Link href="/mba-roi-calculator" className="text-yellow-400 hover:text-yellow-300 transition-colors underline underline-offset-2">MBA ROI calculator</Link>
            {" "}to model your specific numbers.
          </p>
          <div className="space-y-3">
            {[
              { id: "A", label: "M7 at full cost → MBB consulting", cost: "$415k", salary: "$205k", breakEven: "4.5 yrs", irr: "22%", npv: "+$380k", verdict: "Strong" },
              { id: "B", label: "M7 at 50% scholarship → MBB consulting", cost: "$292k", salary: "$205k", breakEven: "3.0 yrs", irr: "35%", npv: "+$502k", verdict: "Excellent" },
              { id: "C", label: "T15 at 50% scholarship → Big 4 consulting", cost: "$210k", salary: "$145k", breakEven: "4.5 yrs", irr: "22%", npv: "+$195k", verdict: "Strong" },
              { id: "D", label: "T15 at full scholarship → Corporate strategy", cost: "$170k", salary: "$135k", breakEven: "3.5 yrs", irr: "27%", npv: "+$200k", verdict: "Strong (scholarship-driven)" },
            ].map(({ id, label, cost, salary, breakEven, irr, npv, verdict }) => (
              <div key={id} className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-yellow-400 font-mono text-xs font-bold bg-yellow-400/10 px-2 py-0.5 rounded">{id}</span>
                  <p className="text-white font-medium text-sm">{label}</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <div><p className="text-slate-500 mb-0.5">Net cost</p><p className="text-slate-300">{cost}</p></div>
                  <div><p className="text-slate-500 mb-0.5">Post-MBA salary</p><p className="text-slate-300">{salary}</p></div>
                  <div><p className="text-slate-500 mb-0.5">Break-even</p><p className="text-green-400">{breakEven}</p></div>
                  <div><p className="text-slate-500 mb-0.5">IRR / NPV</p><p className="text-yellow-400">{irr} / {npv}</p></div>
                </div>
                <p className="text-slate-500 text-xs">Verdict: <span className="text-yellow-300">{verdict}</span></p>
              </div>
            ))}
          </div>
        </section>

        {/* Negotiation strategy */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Scholarship Negotiation: What Works and What Doesn&apos;t</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Approximately 25–35% of MBA candidates who actively negotiate their scholarship offer receive an
            improvement. This is one of the highest-ROI activities an admitted candidate can undertake — a
            successful negotiation of $20,000 in additional scholarship reduces the 10-year NPV gap by $20,000
            immediately, requiring zero additional work after graduation.
          </p>
          <div className="space-y-3">
            {[
              {
                tactic: "Competing offer leverage",
                works: true,
                detail: "The single most effective negotiation tool. Admissions offices respond to competing offers from peer programs. A Kellogg offer with scholarship can be used to negotiate at Booth; a Darden offer can be used with Fuqua. Be specific and transparent about the competing program and scholarship amount.",
              },
              {
                tactic: "Financial hardship documentation",
                works: true,
                detail: "Admissions committees have financial aid offices that respond to documented need. If your financial situation has changed since application (job loss, family obligation, market decline), request a financial aid reassessment. Provide specific documentation.",
              },
              {
                tactic: "Accomplishment updates / new achievements",
                works: true,
                detail: "A promotion, award, or publication received after your application can support a scholarship increase request framed as 'additional information that affects your assessment of my candidacy.' Frame it as new information, not as bargaining.",
              },
              {
                tactic: "General 'I need more money' request",
                works: false,
                detail: "Scholarship requests without a specific basis — competing offer, documented need, new achievement — are almost never successful. Admissions officers need a reason to increase aid that they can justify to the scholarship committee. Give them one.",
              },
              {
                tactic: "Requesting aid from no-aid programs",
                works: false,
                detail: "HBS does not offer merit scholarships (only need-based financial aid). Stanford GSB has limited merit aid. Do not negotiate for merit awards at programs where they are not offered — redirect energy to programs where merit aid pools exist.",
              },
            ].map(({ tactic, works, detail }) => (
              <div key={tactic} className={`bg-white/5 border rounded-xl p-5 space-y-2 ${works ? "border-white/10" : "border-red-900/20"}`}>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold ${works ? "text-green-400" : "text-red-400"}`}>{works ? "✓ Works" : "✗ Doesn't work"}</span>
                  <p className="text-white font-semibold text-sm">{tactic}</p>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            For candidates comparing scholarship awards across programs, the{" "}
            <Link href="/mba-roi-big4-vs-mbb" className="text-yellow-400 hover:text-yellow-300 transition-colors underline underline-offset-2">Big 4 vs MBB comparison</Link>
            {" "}and the{" "}
            <Link href="/mba-roi-insead-vs-wharton" className="text-yellow-400 hover:text-yellow-300 transition-colors underline underline-offset-2">INSEAD vs Wharton comparison</Link>
            {" "}provide concrete NPV frameworks for evaluating cost-outcome trade-offs across programs.
          </p>
        </section>

        {/* Full scholarship rare but transformative */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Full Scholarships: Rare, but Transformative for ROI</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Full merit scholarships at top MBA programs are awarded to approximately 3–8% of the class at most
            programs. They are not random — they reflect the most competitive academic profiles, leadership
            records, and occasionally diversity or employer sponsorship arrangements. For candidates who receive
            them, the financial case for the MBA becomes extraordinary.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
            <p className="text-xs font-medium text-yellow-400 uppercase tracking-widest">Full Scholarship Scenario: M7 → MBB (pre-MBA $85k)</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-slate-500 text-xs mb-1">Total cost</p>
                <p className="text-white font-semibold text-sm">~$170,000</p>
                <p className="text-slate-500 text-xs">(opp cost + living only)</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-slate-500 text-xs mb-1">Loan balance</p>
                <p className="text-green-400 font-semibold text-sm">$0</p>
                <p className="text-slate-500 text-xs">(no debt required)</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-slate-500 text-xs mb-1">Break-even</p>
                <p className="text-green-400 font-semibold text-sm">~1.4 years</p>
                <p className="text-slate-500 text-xs">from graduation</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-slate-500 text-xs mb-1">10-yr IRR</p>
                <p className="text-green-400 font-semibold text-sm">60–75%</p>
                <p className="text-slate-500 text-xs">exceptional return</p>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              A full scholarship at an M7 program targeting MBB represents one of the best risk-adjusted financial
              investments available. The only economic cost remaining is opportunity cost — which is unavoidable —
              and the annual cash flow from MBB immediately exceeds that foregone income within 18 months.
              10-year NPV exceeds $610,000.
            </p>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            For candidates who are unlikely to receive full scholarships and are concerned about debt, the{" "}
            <Link href="/mba-roi-100k-debt" className="text-yellow-400 hover:text-yellow-300 transition-colors underline underline-offset-2">$100k debt ROI guide</Link>
            {" "}models the loan payment math in detail and identifies which career tracks remain positive at each debt level.
          </p>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-white/5 border border-white/10 p-10 text-center space-y-5">
          <p className="text-xs font-medium text-yellow-400 uppercase tracking-widest">Model Your Scholarship Scenarios</p>
          <h2 className="text-2xl font-semibold tracking-tight">Compare ROI at Different Scholarship Levels</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Run the MBA ROI Calculator multiple times with different program costs — once at full tuition,
            once with your scholarship applied. The difference in NPV, IRR, and break-even is the precise
            financial value of your scholarship award.
          </p>
          <Link
            href="/mba-roi-calculator"
            className="inline-block bg-linear-to-r from-yellow-600 to-amber-600 hover:opacity-90 transition-all px-8 py-4 rounded-xl font-medium text-white text-base shadow-[0_0_40px_rgba(202,138,4,0.3)]"
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
            <Link href="/mba-roi-100k-debt" className="hover:text-slate-300 transition-colors">MBA $100k Debt</Link>
            {" · "}
            <Link href="/mba-roi-insead-vs-wharton" className="hover:text-slate-300 transition-colors">INSEAD vs Wharton</Link>
            {" · "}
            <Link href="/mba-roi-big4-vs-mbb" className="hover:text-slate-300 transition-colors">Big 4 vs MBB</Link>
            {" · "}
            <Link href="/mba-break-even" className="hover:text-slate-300 transition-colors">MBA Break-Even</Link>
            {" · "}
            <Link href="/mba-worth-it" className="hover:text-slate-300 transition-colors">Is MBA Worth It?</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
        </footer>

      </div>
    </main>
  )
}
