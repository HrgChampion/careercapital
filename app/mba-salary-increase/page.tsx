import Link from "next/link"

export const metadata = {
  title: "MBA Salary Increase (2026): Real Pre vs. Post-MBA Pay Data — $60K–$90K Deltas by Industry",
  description:
    "MBA salary increase data for 2026. Pre-MBA median by function, post-MBA by sector (consulting, banking, tech), salary delta modeling, and ROI implications.",
}

export default function MbaSalaryIncreasePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-violet-600/20 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12 sm:space-y-20">

        {/* Header */}
        <header className="space-y-5">
          <p className="text-xs font-medium text-purple-400 uppercase tracking-widest">CareerReturns</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            MBA Salary Increase:<br />What the Numbers Actually Show
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Pre-MBA vs. post-MBA compensation, broken down by industry and school tier.
            Not averages that flatter — numbers that help you model your specific outcome.
          </p>
        </header>

        {/* Pre-MBA median */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Pre-MBA Median Salary</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            According to GMAC&apos;s most recent applicant surveys, the median base salary for full-time
            MBA applicants in the US is approximately <span className="text-white font-medium">$80,000 – $95,000</span>,
            varying by pre-MBA function and geography. This is the baseline the degree must improve on.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { function: "Finance / Accounting", salary: "$85k – $100k", note: "Analysts, associates at mid-market firms" },
              { function: "Technology / Engineering", salary: "$100k – $145k", note: "SWE, product roles at tech companies" },
              { function: "Consulting (Non-MBB)", salary: "$75k – $95k", note: "Boutique and Big 4 consulting" },
              { function: "Healthcare / Non-profit", salary: "$65k – $80k", note: "Clinical, ops, and admin roles" },
              { function: "Marketing / Brand", salary: "$70k – $90k", note: "CPG, media, and agency roles" },
              { function: "Military / Government", salary: "$60k – $80k", note: "Officers transitioning to private sector" },
            ].map(({ function: fn, salary, note }) => (
              <div key={fn} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-1">
                <p className="text-white font-semibold text-sm">{fn}</p>
                <p className="text-purple-300 font-semibold">{salary}</p>
                <p className="text-slate-500 text-xs">{note}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            The critical figure for ROI modeling is not your absolute pre-MBA salary — it is the gap between
            what you earn now and what you will earn after graduation. Someone earning $145k in a senior
            engineering role faces a very different{" "}
            <Link href="/mba-worth-it" className="text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-2">ROI picture</Link>
            {" "}than someone earning $75k in a non-profit role, even if both attend the same program.
          </p>
        </section>

        {/* Post-MBA by sector */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Post-MBA Salary After Graduation: By Sector</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Post-MBA compensation varies enormously by sector. The figures below reflect M7 and top-20 program
            placements. Online and part-time MBA graduates typically see post-graduation base salaries in the
            $100k–$130k range, with the financial advantage coming from eliminated opportunity cost rather than
            salary level.
          </p>

          {/* Salary bar chart */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-widest">Post-MBA Base Salary vs. Pre-MBA Median — M7 Placements</p>
            <div className="space-y-3">
              {[
                { label: "Investment Banking", range: "$200k – $250k", pct: 90, color: "bg-green-400" },
                { label: "MBB Consulting", range: "$190k – $215k", pct: 82, color: "bg-emerald-400" },
                { label: "Tech (FAANG-tier)", range: "$175k – $220k", pct: 78, color: "bg-teal-400" },
                { label: "General Management", range: "$130k – $160k", pct: 56, color: "bg-yellow-400" },
                { label: "Healthcare / Gov't", range: "$90k – $125k", pct: 42, color: "bg-orange-400" },
                { label: "Pre-MBA Median", range: "~$85k – $95k", pct: 34, color: "bg-slate-500" },
              ].map(({ label, range, pct, color }) => (
                <div key={label} className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">{label}</span>
                    <span className="text-white font-medium tabular-nums">{range}</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className={`h-2 rounded-full ${color}`} style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-slate-600 text-xs pt-1">Scale: $0 – $250k. Bars represent midpoint of stated range.</p>
          </div>

          <div className="space-y-3">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                <div className="space-y-1">
                  <p className="text-white font-semibold">Management Consulting — MBB</p>
                  <p className="text-slate-400 text-xs">McKinsey, Bain, Boston Consulting Group</p>
                </div>
                <div className="sm:text-right">
                  <p className="text-green-400 text-xl font-semibold">$190k – $215k</p>
                  <p className="text-slate-500 text-xs">base salary</p>
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed border-t border-white/5 pt-3">
                Plus $30k–$50k signing bonuses and performance bonuses in year two onward. Total first-year
                compensation often exceeds $240k. Recruiting is heavily concentrated at M7; acceptance rates
                in on-campus rounds run below 15% even for enrolled students.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                <div className="space-y-1">
                  <p className="text-white font-semibold">Investment Banking — Bulge Bracket / Elite Boutique</p>
                  <p className="text-slate-400 text-xs">Goldman, Morgan Stanley, JPMorgan, Evercore, Lazard</p>
                </div>
                <div className="sm:text-right">
                  <p className="text-green-400 text-xl font-semibold">$200k – $250k</p>
                  <p className="text-slate-500 text-xs">base + guaranteed bonus</p>
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed border-t border-white/5 pt-3">
                Associate-level base at bulge-bracket banks starts at $200k with guaranteed year-one bonuses
                of $100k+. The trajectory is steep but the hours are extreme. Private equity exits in years
                3–5 can push total comp significantly higher.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                <div className="space-y-1">
                  <p className="text-white font-semibold">Technology — FAANG &amp; Tier-1 Firms</p>
                  <p className="text-slate-400 text-xs">Google, Meta, Apple, Amazon, Microsoft</p>
                </div>
                <div className="sm:text-right">
                  <p className="text-green-400 text-xl font-semibold">$175k – $220k</p>
                  <p className="text-slate-500 text-xs">base salary</p>
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed border-t border-white/5 pt-3">
                RSU grants typically worth $100k–$200k per year at major firms, vesting over 4 years. Total
                compensation for MBA product managers at senior FAANG levels commonly exceeds $350k. Campus
                recruiting pulled back significantly post-2022 and is more selective than it was in 2019–2021.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                <div className="space-y-1">
                  <p className="text-white font-semibold">General Management / Corporate Strategy</p>
                  <p className="text-slate-400 text-xs">Leadership programs, corp dev, strategy roles</p>
                </div>
                <div className="text-right">
                  <p className="text-yellow-400 text-xl font-semibold">$130k – $160k</p>
                  <p className="text-slate-500 text-xs">base salary</p>
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed border-t border-white/5 pt-3">
                Solid trajectory with good equity upside over time, but starting salaries are meaningfully
                lower than consulting or finance. The ROI case depends more heavily on long-run career
                trajectory than on immediate post-graduation compensation.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                <div className="space-y-1">
                  <p className="text-white font-semibold">Healthcare, Non-profit, Government</p>
                  <p className="text-slate-400 text-xs">Hospital administration, policy, social impact</p>
                </div>
                <div className="text-right">
                  <p className="text-slate-300 text-xl font-semibold">$90k – $125k</p>
                  <p className="text-slate-500 text-xs">base salary</p>
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed border-t border-white/5 pt-3">
                Meaningful career advancement but the financial ROI is the most challenging to justify,
                especially with full-price debt. Income-driven repayment and PSLF programs can materially
                improve the economics for this path if pursued strategically.
              </p>
            </div>
          </div>
        </section>

        {/* Salary delta framing */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">The Number That Actually Matters: Your Salary Delta</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Post-MBA salary figures are useful benchmarks. But for{" "}
            <Link href="/mba-roi-calculator" className="text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-2">ROI modeling</Link>
            , the variable that drives everything is the <span className="text-white font-medium">salary delta</span> — the annual income
            difference between what you earn with the degree and what you would have earned without it.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            This distinction matters because MBA ROI is not about how much you earn after graduation. It is
            about how much <em>more</em> you earn relative to your counterfactual. A $200k consulting salary
            from a $70k starting point is a $130k annual delta. A $200k tech role from a $155k senior
            engineering role is only a $45k delta — over a $300,000 total investment. Those two scenarios
            produce dramatically different NPVs, even though the post-MBA salary is identical.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
              <p className="text-slate-500 text-xs uppercase tracking-wide">Scenario: High Delta</p>
              <p className="text-white font-medium text-sm">$70k → $200k (MBB)</p>
              <p className="text-green-400 text-sm font-semibold">+$130k/yr delta</p>
              <p className="text-slate-400 text-xs">Strong positive NPV at any M7 program. IRR typically 18–24%.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
              <p className="text-slate-500 text-xs uppercase tracking-wide">Scenario: Low Delta</p>
              <p className="text-white font-medium text-sm">$155k → $200k (FAANG PM)</p>
              <p className="text-yellow-400 text-sm font-semibold">+$45k/yr delta</p>
              <p className="text-slate-400 text-xs">Marginal or negative NPV even at M7.{" "}
                <Link href="/mba-break-even" className="text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-2">Break-even</Link>
                {" "}extends beyond 10 years.</p>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            High-earning pre-MBA professionals — particularly in software engineering and quantitative
            finance — face the most challenging ROI math regardless of which program they attend. The
            salary delta is small relative to the full economic cost, and the degree rarely unlocks
            compensation that their trajectory would not have reached anyway.
          </p>
        </section>

        {/* How salary growth compounds */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">MBA Salary Growth After Graduation</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            First-year post-MBA salary is only one dimension of the financial picture. The more important
            variable for long-run ROI is how quickly compensation grows in the years after graduation —
            and whether the MBA unlocks a trajectory that compounds at a higher rate than the pre-MBA path.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Consulting and banking are the strongest examples. MBB associate salaries step up meaningfully
            at the engagement manager and principal levels (years 3–6), and partners at major firms earn
            $500k–$1M+. Banking associates who move to PE in years 2–4 access carry structures that can
            dwarf base compensation. These compounding trajectories are what justify the M7 sticker price
            in financial terms — not the first-year salary alone.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            For general management roles, salary growth is slower and more dependent on individual
            performance and company trajectory. The 10-year NPV of this path is harder to model with
            confidence, which is why the{" "}
            <Link href="/mba-roi-calculator" className="text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-2">MBA ROI calculator</Link>
            {" "}uses conservative and base-case projections side by side.
          </p>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-white/5 border border-white/10 p-10 text-center space-y-5">
          <p className="text-xs font-medium text-purple-400 uppercase tracking-widest">Personalized Modeling</p>
          <h2 className="text-2xl font-semibold tracking-tight">Calculate Your MBA Salary ROI</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Industry medians are a starting point. Your actual ROI depends on your specific salary delta,
            program cost, and financing structure. The calculator models all three together.
          </p>
          <Link
            href="/mba-roi-calculator"
            className="inline-block bg-linear-to-r from-indigo-600 to-violet-600 hover:opacity-90 transition-all px-8 py-4 rounded-xl font-medium text-white text-base shadow-[0_0_40px_rgba(99,102,241,0.3)]"
          >
            Open MBA ROI Calculator →
          </Link>
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
            <Link href="/mba-break-even" className="hover:text-slate-300 transition-colors">MBA Break-Even</Link>
            {" · "}
            <Link href="/mba-roi-mckinsey" className="hover:text-slate-300 transition-colors">MBA ROI: McKinsey</Link>
            {" · "}
            <Link href="/mba-roi-goldman-sachs" className="hover:text-slate-300 transition-colors">MBA ROI: Goldman Sachs</Link>
            {" · "}
            <Link href="/mba-roi-engineers" className="hover:text-slate-300 transition-colors">MBA ROI: Engineers</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
        </footer>

      </div>
    </main>
  )
}
