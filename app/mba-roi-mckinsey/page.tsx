import Link from "next/link"

export const metadata = {
  title: "MBA ROI for McKinsey (2026): $192K Salary, IRR & Break-Even",
  description:
    "MBA ROI for McKinsey: $192K associate salary, break-even math, school placement rates into MBB, and when the McKinsey financial case works. Calculate now →",
  alternates: { canonical: "https://careerreturns.com/mba-roi-mckinsey" },
}

export default function MbaRoiMcKinseyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-indigo-600/15 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12 sm:space-y-20">

        <header className="space-y-5">
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">CareerReturns · MBA ROI by Employer</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            MBA ROI for McKinsey:<br />When the Numbers Work
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            McKinsey produces the highest and most consistent MBA ROI of any single employer in the world.
            Here is the exact compensation data, the break-even math, and the conditions required for the case to hold.
          </p>
        </header>

        {/* Why McKinsey produces premium ROI */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Why McKinsey Produces the Strongest MBA ROI</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The{" "}
            <Link href="/mba-roi-calculator" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">MBA ROI calculation</Link>
            {" "}is structurally simple: annual salary delta divided by total economic cost, modeled over time with discounting.
            McKinsey maximizes that delta more reliably than any other employer for MBA graduates.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            A typical McKinsey-track MBA candidate earns $75,000–$95,000 before their program. Upon joining
            as a post-MBA associate, base salary starts at $195,000–$210,000, plus a $40,000–$50,000 signing bonus
            in year one, and a performance bonus of $45,000–$85,000 depending on firm and personal performance ratings.
            The total first-year compensation lands between $280,000 and $345,000 — generating an annual salary delta
            of $110,000–$160,000 against most pre-MBA baselines.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            That delta compounds further over years two through five. McKinsey engagement managers — typically promoted
            at year three to five — earn $250,000–$375,000 in base plus a performance bonus that equals 40–60% of base.
            Total compensation at the EM level ranges from $350,000 to $600,000. Partners at McKinsey earn $500,000 to
            $1,500,000+ in total compensation, with significant carried interest in the firm's investment vehicles. The
            MBA's financial return is dramatically strongest when modeled over a ten-year horizon that includes trajectory
            progression — not just first-year salary.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Beyond base trajectory, McKinsey exit opportunities amplify lifetime ROI further. Associates who leave after
            three to four years enter private equity, hedge funds, corporate strategy, and startup C-suite roles at compensation
            levels that non-MBA peers cannot access through alternative career paths. The MBA at McKinsey is not a single
            salary jump — it is a credential that permanently reshapes the ceiling of a career.
          </p>
        </section>

        {/* Compensation data */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">McKinsey MBA Compensation Breakdown (2025)</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            McKinsey standardizes base and signing compensation globally for post-MBA associates, with bonuses varying by
            performance tier. These figures represent US-based compensation. European and Asia-Pacific compensation
            is structurally similar but denominated in local currency, often with lower signing bonuses.
          </p>
          <div className="space-y-3">
            {[
              {
                level: "Post-MBA Associate (Year 1)",
                base: "$195,000 – $210,000",
                signing: "$40,000 – $50,000",
                bonus: "$45,000 – $85,000",
                total: "$280,000 – $345,000",
                color: "text-indigo-300",
              },
              {
                level: "Associate (Year 2–3)",
                base: "$210,000 – $230,000",
                signing: "—",
                bonus: "$55,000 – $100,000",
                total: "$265,000 – $330,000",
                color: "text-indigo-300",
              },
              {
                level: "Engagement Manager (Year 3–5)",
                base: "$250,000 – $375,000",
                signing: "—",
                bonus: "$100,000 – $225,000",
                total: "$350,000 – $600,000",
                color: "text-blue-300",
              },
              {
                level: "Associate Principal / Principal",
                base: "$375,000 – $550,000",
                signing: "—",
                bonus: "$150,000 – $400,000",
                total: "$525,000 – $950,000",
                color: "text-violet-300",
              },
              {
                level: "Partner / Director",
                base: "$500,000 – $900,000",
                signing: "—",
                bonus: "$250,000 – $600,000+",
                total: "$750,000 – $1,500,000+",
                color: "text-purple-300",
              },
            ].map(({ level, base, signing, bonus, total, color }) => (
              <div key={level} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <p className="text-white font-semibold text-sm">{level}</p>
                  <p className={`${color} font-semibold text-sm`}>{total}</p>
                </div>
                <p className="text-slate-500 text-xs">
                  Base: {base} · Signing: {signing} · Bonus: {bonus}
                </p>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs leading-relaxed">
            Source: Management Consulted, Glassdoor verified ranges, Wall Street Oasis 2024–2025 surveys.
            Figures reflect US domestic compensation. Bonuses vary by office performance and individual rating.
          </p>
        </section>

        {/* Break-even math */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Break-Even Model: M7 MBA → McKinsey Associate</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The{" "}
            <Link href="/mba-break-even" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">MBA break-even period</Link>
            {" "}for a McKinsey-track candidate is among the shortest of any career path — typically 4.5 to 6 years from
            graduation, depending on pre-MBA salary and loan structure. Here is the full model.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5">
            <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">Scenario: HBS / Wharton → McKinsey Associate (US)</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="space-y-3">
                <div><p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Pre-MBA Salary</p><p className="text-white font-medium">$85,000/yr</p></div>
                <div><p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Post-MBA Base</p><p className="text-white font-medium">$205,000/yr</p></div>
                <div><p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Annual Salary Delta</p><p className="text-green-400 font-semibold">+$120,000/yr</p></div>
                <div><p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Signing Bonus (Y1)</p><p className="text-green-400 font-medium">+$45,000</p></div>
              </div>
              <div className="space-y-3">
                <div><p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Tuition + Fees (2yr)</p><p className="text-white font-medium">$165,000</p></div>
                <div><p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Living Costs (2yr)</p><p className="text-white font-medium">$80,000</p></div>
                <div><p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Opportunity Cost</p><p className="text-white font-medium">$170,000</p></div>
                <div><p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Total Economic Outflow</p><p className="text-red-400 font-semibold">$415,000</p></div>
              </div>
            </div>
            <div className="border-t border-white/10 pt-4 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-slate-500 text-xs mb-1">Loan (60%)</p>
                  <p className="text-white font-semibold text-sm">$147k @ 6.5%</p>
                  <p className="text-slate-500 text-xs">~$19,800/yr (10yr)</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-slate-500 text-xs mb-1">Net Annual Gain</p>
                  <p className="text-green-400 font-semibold text-sm">~$100,200/yr</p>
                  <p className="text-slate-500 text-xs">After loan payment</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-slate-500 text-xs mb-1">Break-Even</p>
                  <p className="text-green-400 font-semibold text-sm">~4.5 years</p>
                  <p className="text-slate-500 text-xs">From graduation</p>
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                NPV at 6% discount rate: approximately <span className="text-green-400 font-semibold">+$380,000</span> over 10 years.
                IRR: approximately <span className="text-green-400 font-semibold">21–24%</span> — well above
                the 6% equity market hurdle rate. The signing bonus alone covers approximately 2.3 years of loan payments
                in the first month after joining, accelerating break-even by roughly 5–7 months.
              </p>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Run your own numbers with the{" "}
            <Link href="/mba-roi-calculator" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">MBA ROI Calculator</Link>
            {" "}using your actual pre-MBA salary, target McKinsey base, and loan structure. The calculator models full
            NPV, IRR, and a month-level break-even chart.
          </p>
        </section>

        {/* Break-even visualization */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Break-Even Timeline: McKinsey vs. Other Outcomes</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Not all post-MBA careers produce equal break-even timelines. The comparison below uses an M7 program at full
            economic cost ($415,000) with 60% loan financing, against a pre-MBA salary of $85,000.
          </p>
          <div className="space-y-4">
            {[
              { label: "McKinsey / Bain / BCG Associate", years: 4.5, maxYears: 10, color: "bg-green-500" },
              { label: "Goldman Sachs / JP Morgan Associate", years: 5.5, maxYears: 10, color: "bg-blue-500" },
              { label: "FAANG Product Manager", years: 6.0, maxYears: 10, color: "bg-sky-500" },
              { label: "Big 4 Strategy Consulting", years: 7.5, maxYears: 10, color: "bg-yellow-500" },
              { label: "Corporate Strategy / Fortune 500", years: 8.5, maxYears: 10, color: "bg-orange-500" },
            ].map(({ label, years, maxYears, color }) => (
              <div key={label} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">{label}</span>
                  <span className="text-slate-400">{years} years</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className={`${color} h-2 rounded-full`}
                    style={{ width: `${(years / maxYears) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs">Break-even measured from graduation date. Assumes 60% loan at 6.5%, 10-year repayment.</p>
        </section>

        {/* Which schools place into McKinsey */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Which MBA Programs Place into McKinsey</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The McKinsey ROI case is school-dependent. Recruiting concentration is steep — the majority of US
            McKinsey associate hires come from a narrow set of programs. Understanding placement rates before
            selecting a program is essential, because the ROI math above only holds if you receive and accept an offer.
          </p>
          <div className="space-y-3">
            {[
              {
                tier: "M7 Programs (HBS, Wharton, Booth, Kellogg, Columbia, Sloan, Tuck)",
                detail: "All three MBB firms recruit on-campus. McKinsey accepts 12–18% of the consulting-focused class at these programs. Historically 20–30% of each class pursues consulting, so your realistic McKinsey placement odds within an M7 program are approximately 5–10% of total enrolled students.",
              },
              {
                tier: "Top 10–15 (Haas, Fuqua, Darden, Ross, Stern, Yale SOM)",
                detail: "McKinsey recruits on-campus at most of these programs but with lower hiring volume. Offers are achievable but require stronger differentiation. Expect 3–7% of total students receiving McKinsey offers. Tier 2 strategy firms and Deloitte S&O are more reliable base-case targets.",
              },
              {
                tier: "Outside Top 15",
                detail: "On-campus McKinsey recruiting is largely absent. Off-cycle experienced-hire processes exist but are extremely competitive across a national applicant pool. The ROI case at non-target programs rests on Big 4 advisory or regional consulting, which produces a meaningfully smaller salary delta and longer break-even.",
              },
            ].map(({ tier, detail }) => (
              <div key={tier} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-white font-semibold text-sm">{tier}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            McKinsey recruiting for experienced hires (non-MBA) runs separately and represents a different ROI model.
            For MBA recruiting specifically, the M7 pathway is the highest-probability route to an associate offer.
            See the{" "}
            <Link href="/mba-roi-consulting" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">MBA ROI consulting guide</Link>
            {" "}for a full breakdown of MBB placement rates by school tier.
          </p>
        </section>

        {/* MBA salary increase context */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">How McKinsey Compares to the MBA Salary Landscape</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The{" "}
            <Link href="/mba-salary-increase" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">average MBA salary increase</Link>
            {" "}across all graduates is roughly 50–80% over pre-MBA compensation. McKinsey delivers 100–180% salary
            increases for most incoming associates compared to their pre-MBA base salary alone — before signing bonuses
            and performance bonuses are counted.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
            <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">Salary Delta Comparison: $85k Pre-MBA Baseline</p>
            <div className="space-y-3">
              {[
                { role: "McKinsey Associate", postMba: "$205k base", delta: "+$120k / +141%", bar: 95, color: "bg-indigo-500" },
                { role: "Goldman Sachs Associate", postMba: "$185k base", delta: "+$100k / +118%", bar: 80, color: "bg-blue-500" },
                { role: "FAANG Product Manager", postMba: "$195k base", delta: "+$110k / +129%", bar: 87, color: "bg-sky-500" },
                { role: "Big 4 Strategy Consulting", postMba: "$145k base", delta: "+$60k / +71%", bar: 50, color: "bg-yellow-500" },
                { role: "Corporate Strategy (F500)", postMba: "$135k base", delta: "+$50k / +59%", bar: 40, color: "bg-slate-500" },
              ].map(({ role, postMba, delta, bar, color }) => (
                <div key={role} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300">{role} ({postMba})</span>
                    <span className="text-green-400">{delta}</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-1.5">
                    <div className={`${color} h-1.5 rounded-full`} style={{ width: `${bar}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* When the ROI case fails */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">When the McKinsey ROI Case Fails</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The McKinsey ROI case is powerful but conditional. Outside specific scenarios, the math deteriorates
            rapidly. Understanding these failure modes before committing to a program is as important as understanding
            the upside. See the{" "}
            <Link href="/mba-worth-it" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">full MBA worth-it analysis</Link>
            {" "}for a broader risk framework.
          </p>
          <div className="space-y-3">
            {[
              {
                title: "You don't receive a McKinsey offer",
                body: "The most common failure mode. Attending an M7 program with a McKinsey goal and landing a Big 4 advisory role produces materially different NPV — roughly $180,000 lower over 10 years. Always model your realistic base case, not your aspirational target.",
              },
              {
                title: "High pre-MBA salary reduces the delta",
                body: "Senior consultants, software engineers at FAANG, or finance professionals earning $130,000+ before an MBA face a compressed salary delta when moving to McKinsey associate. An engineer at $160k total comp moving to a $205k McKinsey base is a far smaller financial improvement than a $75k pre-MBA candidate making the same move.",
              },
              {
                title: "Leaving McKinsey in year one or two",
                body: "The McKinsey compensation curve is back-loaded. Associates who leave before year three abandon the engagement manager promotion and the compounding comp trajectory that makes the 10-year ROI case strongest. Short tenures at McKinsey still provide career value, but materially weaken the financial model.",
              },
              {
                title: "Attending a non-target program with full debt",
                body: "A fully financed program outside the top 15 targeting a McKinsey offer — which is very unlikely to materialize through on-campus recruiting — typically produces a Big 4 outcome at best, generating an IRR of 8–12%. That is marginal when measured against a 6% equity market hurdle rate.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-white font-semibold text-sm">{title}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Debt impact */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Loan Structure and Its Impact on McKinsey ROI</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Even with McKinsey's compensation, the loan structure materially affects your actual financial return.
            At a McKinsey associate salary, servicing M7 debt is feasible — but understanding the exact numbers prevents
            surprises. The{" "}
            <Link href="/mba-roi-100k-debt" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">full debt scenario analysis</Link>
            {" "}covers loan payment math across four debt levels.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { debt: "$100k at 6.5%", monthly: "$1,135/mo", annual: "$13,620/yr", netGain: "~$106k/yr net" },
                { debt: "$150k at 6.5%", monthly: "$1,703/mo", annual: "$20,436/yr", netGain: "~$100k/yr net" },
                { debt: "$175k at 7%", monthly: "$2,033/mo", annual: "$24,396/yr", netGain: "~$96k/yr net" },
                { debt: "$200k at 7%", monthly: "$2,324/mo", annual: "$27,888/yr", netGain: "~$92k/yr net" },
              ].map(({ debt, monthly, annual, netGain }) => (
                <div key={debt} className="bg-white/5 rounded-lg p-4 space-y-2">
                  <p className="text-white font-medium text-sm">{debt}</p>
                  <p className="text-slate-400 text-xs">{monthly} · {annual}</p>
                  <p className="text-green-400 text-xs font-semibold">{netGain} vs. pre-MBA</p>
                </div>
              ))}
            </div>
            <p className="text-slate-500 text-xs">Net gain = $120k salary delta minus annual loan payment. All scenarios assume 10-year repayment.</p>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-white/5 border border-white/10 p-10 text-center space-y-5">
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">Model Your Numbers</p>
          <h2 className="text-2xl font-semibold tracking-tight">Calculate Your McKinsey Track MBA ROI</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Enter your pre-MBA salary, target McKinsey base, total program cost, and loan structure.
            Get NPV, IRR, and your personal break-even date.
          </p>
          <Link
            href="/mba-roi-calculator"
            className="inline-block bg-linear-to-r from-indigo-600 to-violet-600 hover:opacity-90 transition-all px-8 py-4 rounded-xl font-medium text-white text-base shadow-[0_0_40px_rgba(99,102,241,0.3)]"
          >
            Open MBA ROI Calculator →
          </Link>
        </section>


        {/* ── Related Guides ── */}
        <section className="border-t border-white/10 pt-10 mt-10">
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-5">Related Guides</p>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link href="/mba-roi-calculator" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">Σ</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">MBA ROI Calculator</p>
                <p className="text-slate-500 text-xs">Model your specific numbers →</p>
              </div>
            </Link>
            <Link href="/mba-roi-report-2026" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">↗</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">MBA ROI Report 2026</p>
                <p className="text-slate-500 text-xs">IRR data across 12 industries →</p>
              </div>
            </Link>
            <Link href="/mba-roi-consulting" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">→</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">MBA ROI: Consulting</p>
                <p className="text-slate-500 text-xs">MBB salary data & break-even →</p>
              </div>
            </Link>
            <Link href="/mba-roi-goldman-sachs" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">$</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">MBA ROI: Goldman Sachs</p>
                <p className="text-slate-500 text-xs">GS vs McKinsey ROI compared →</p>
              </div>
            </Link>
          </div>
        </section>

        <footer className="border-t border-white/10 pt-8 text-center text-slate-500 text-xs space-y-2">
          <p>
            <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            {" · "}
            <Link href="/mba-roi-calculator" className="hover:text-slate-300 transition-colors">MBA ROI Calculator</Link>
            {" · "}
            <Link href="/mba-roi-consulting" className="hover:text-slate-300 transition-colors">MBA ROI: Consulting</Link>
            {" · "}
            <Link href="/mba-roi-goldman-sachs" className="hover:text-slate-300 transition-colors">MBA ROI: Goldman Sachs</Link>
            {" · "}
            <Link href="/mba-roi-big4-vs-mbb" className="hover:text-slate-300 transition-colors">Big 4 vs MBB</Link>
            {" · "}
            <Link href="/mba-break-even" className="hover:text-slate-300 transition-colors">MBA Break-Even</Link>
            {" · "}
            <Link href="/mba-salary-increase" className="hover:text-slate-300 transition-colors">MBA Salary Increase</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
        </footer>

      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What does a McKinsey associate earn after an MBA?", "acceptedAnswer": {"@type": "Answer", "text": "McKinsey MBA associates earn a base salary of $192K in 2026. Total first-year compensation including performance bonus (10–20% of base) and a signing bonus of $30K is approximately $225K–$260K. Compensation increases approximately 15–20% per year for strong performers."}}, {"@type": "Question", "name": "Which MBA programs place into McKinsey?", "acceptedAnswer": {"@type": "Answer", "text": "McKinsey recruits primarily from Harvard Business School, Wharton, Booth, Kellogg, MIT Sloan, Columbia, and Stanford GSB. Approximately 10–15% of M7 classes receive McKinsey offers annually. Outside M7, placement rates drop to under 2% at most programs."}}, {"@type": "Question", "name": "How long to break even on an MBA targeting McKinsey?", "acceptedAnswer": {"@type": "Answer", "text": "Breaking even on an MBA targeting McKinsey takes approximately 4.2 years. At $192K base + $50K bonus against a total economic cost of $300K–$350K, the annual salary delta of $140K–$160K generates payback in the early post-MBA years."}}, {"@type": "Question", "name": "Is McKinsey worth an M7 MBA financially?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, McKinsey produces one of the strongest MBA financial cases. The 22% IRR for M7 programs with MBB placement significantly exceeds both the risk-free rate and long-run equity market returns (~8%). Candidates who receive McKinsey offers from M7 programs typically generate a positive net present value of $300K–$500K over 10 years."}}, {"@type": "Question", "name": "Is it better to target McKinsey or Goldman Sachs with an MBA?", "acceptedAnswer": {"@type": "Answer", "text": "Both tracks produce similar 10-year NPVs. Goldman Sachs pays slightly higher in years 1–3 due to banking bonuses. McKinsey offers faster promotion visibility, better exit opportunities in private equity and corporate strategy, and lower variance in total compensation. The choice depends more on career goals than pure financial optimization."}}]}) }}
      />
    </main>
  )
}
