import Link from "next/link"

export const metadata = {
  title: "Is an MBA Worth It? The Financial Case, Examined | CareerCapital",
  description:
    "An honest, data-driven answer to whether an MBA is worth it in 2026. Financial breakdown, ROI vs. the stock market, real risks, and a free calculator.",
}

export default function MbaWorthItPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-indigo-600/20 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 py-20 space-y-20">

        {/* Header */}
        <header className="space-y-5">
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">CareerCapital</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            Is an MBA Worth It?
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            A financial answer — not a motivational one.
          </p>
        </header>

        {/* Direct answer — first 150 words */}
        <section className="space-y-4">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4">
            <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">Short Answer</p>
            <p className="text-white text-base leading-relaxed font-medium">
              An MBA is worth it if your post-MBA salary delta — the annual income increase attributable to
              the degree — generates a positive net present value after accounting for tuition, living costs,
              two years of foregone income, and loan repayment.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              At M7 programs (Harvard, Wharton, Booth, Kellogg, Columbia, Sloan, Tuck) with strong consulting
              or finance placement, the numbers typically work. At programs outside the top 25 with modest
              salary uplifts, they often do not. The degree itself is not the variable. The combination of
              school tier, target industry, total cost, and financing structure is what determines the outcome.
              There is no universal answer — only your specific numbers modeled correctly.
            </p>
          </div>
        </section>

        {/* Financial breakdown */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">The Real Financial Cost of an MBA</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The most common mistake prospective MBA students make is anchoring on tuition. Tuition is the
            smallest part of the true cost. A full-time, two-year program has three major outflows:
          </p>

          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-white font-semibold text-sm">Tuition + Fees</p>
                <p className="text-purple-300 font-semibold">$130k – $165k</p>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                For M7 programs. Regional top-25 programs range from $85k to $125k. This is the number
                schools advertise. It is not the number that matters most.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-white font-semibold text-sm">Living Expenses (2 years)</p>
                <p className="text-purple-300 font-semibold">$60k – $100k</p>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Rent, food, health insurance, and other costs while enrolled. Varies heavily by city.
                Boston, New York, and San Francisco programs carry the highest living costs.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-white font-semibold text-sm">Opportunity Cost</p>
                <p className="text-purple-300 font-semibold">$150k – $220k</p>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Two years of foregone pre-MBA salary. Someone earning $90k leaves $180k on the table.
                This is the single largest cost in most scenarios and is almost always underweighted.
              </p>
            </div>
          </div>

          <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5">
            <p className="text-indigo-200 text-sm leading-relaxed">
              <span className="font-semibold text-white">Total economic cost at an M7 program:</span> typically
              $300,000 – $380,000 when all three outflows are included. This is the number your post-MBA
              salary uplift has to justify — not just tuition.
            </p>
          </div>
        </section>

        {/* ROI vs stock market */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">MBA ROI vs. Investing in the Stock Market</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            A useful frame for evaluating MBA ROI is the opportunity cost of capital: if you invested the
            full program cost — tuition, fees, and the cash equivalent of your foregone salary — into a
            diversified equity index fund instead, how does the return compare?
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            The S&amp;P 500 has returned approximately 10% annually over the long run, or roughly 7–8%
            after inflation. An MBA investment is justified on purely financial grounds when its internal
            rate of return (IRR) exceeds that benchmark.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center space-y-2">
              <p className="text-slate-400 text-xs uppercase tracking-wide">M7 → Consulting / Finance</p>
              <p className="text-green-400 text-2xl font-semibold">18–24%</p>
              <p className="text-slate-500 text-xs">IRR. Beats the market decisively.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center space-y-2">
              <p className="text-slate-400 text-xs uppercase tracking-wide">Top 20 → General Mgmt</p>
              <p className="text-yellow-400 text-2xl font-semibold">8–12%</p>
              <p className="text-slate-500 text-xs">IRR. Marginal vs. index investing.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center space-y-2">
              <p className="text-slate-400 text-xs uppercase tracking-wide">Non-Target, Full Debt</p>
              <p className="text-red-400 text-2xl font-semibold">&lt;6%</p>
              <p className="text-slate-500 text-xs">IRR. Market investment likely wins.</p>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            The MBA also has a meaningful advantage that IRR does not capture: it can unlock roles that are
            structurally inaccessible without the credential — specific consulting firms, banking associate
            programs, and executive development tracks that simply will not interview non-MBA candidates.
            If the role you want requires the degree, the comparison to equity investing is somewhat
            theoretical. If the role you want does not require the degree, the financial case must stand on
            its own.
          </p>
        </section>

        {/* Risks */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Where the MBA Investment Goes Wrong</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Most post-MBA disappointment follows a predictable pattern. These are the scenarios where the
            financial case reliably fails:
          </p>

          <div className="space-y-3">
            {[
              {
                title: "Optimistic salary assumptions",
                body: "MBA salary surveys report medians, not individual outcomes. Median post-MBA salary at a given program tells you nothing about your outcome in your target function and geography. The range within any school is enormous.",
              },
              {
                title: "Ignoring opportunity cost",
                body: "Candidates who model only tuition routinely underestimate total cost by 50–60%. The two years of foregone income is real money — it compounds whether you count it or not.",
              },
              {
                title: "Non-target school with full debt",
                body: "Recruiter pipelines in high-paying sectors (consulting, banking) are heavily concentrated at M7 and select regional programs. A fully financed non-target degree typically produces an IRR below the cost of the debt used to fund it.",
              },
              {
                title: "Career trajectory that improves without the degree",
                body: "High-performing engineers, analysts, and operators are often on salary trajectories that will converge with MBA outcomes in 3–5 years anyway — without the disruption, cost, or two-year income gap.",
              },
              {
                title: "Economic downturns at graduation",
                body: "The MBA cohort that graduated in 2009 or 2020 faced recruiting environments that shredded modeled outcomes. The investment is illiquid and the return is sensitive to conditions outside your control.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-white font-semibold text-sm">{title}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-white/5 border border-white/10 p-10 text-center space-y-5">
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">Free Tool</p>
          <h2 className="text-2xl font-semibold tracking-tight">Model Your Specific MBA Decision</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Enter your pre-MBA salary, expected post-MBA salary, total program cost, and financing details.
            Get NPV, IRR, break-even year, and a side-by-side comparison against a passive equity investment.
          </p>
          <Link
            href="/mba-roi-calculator"
            className="inline-block bg-linear-to-r from-indigo-600 to-violet-600 hover:opacity-90 transition-all px-8 py-4 rounded-xl font-medium text-white text-base shadow-[0_0_40px_rgba(99,102,241,0.3)]"
          >
            Use the MBA ROI Calculator →
          </Link>
        </section>

        {/* Footer nav */}
        <footer className="border-t border-white/10 pt-8 text-center text-slate-500 text-xs space-y-2">
          <p>
            <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            {" · "}
            <Link href="/mba-roi-calculator" className="hover:text-slate-300 transition-colors">MBA ROI Calculator</Link>
            {" · "}
            <Link href="/mba-salary-increase" className="hover:text-slate-300 transition-colors">MBA Salary Increase</Link>
            {" · "}
            <Link href="/mba-break-even" className="hover:text-slate-300 transition-colors">MBA Break-Even</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
        </footer>

      </div>
    </main>
  )
}
