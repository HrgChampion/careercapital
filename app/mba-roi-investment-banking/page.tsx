import Link from "next/link"

export const metadata = {
  title: "MBA ROI for Investment Banking: Associate Pay & Break-Even (2026) | CareerCapital",
  description:
    "MBA ROI for investment banking. Bulge bracket associate compensation, PE exit math, break-even timeline, and when the banking track justifies M7 tuition.",
}

export default function MbaRoiInvestmentBankingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-indigo-600/15 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 py-20 space-y-20">

        <header className="space-y-5">
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">CareerCapital · MBA ROI by Career Track</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            MBA ROI for Investment Banking:<br />Associate Pay & the PE Exit Math
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Investment banking associate roles produce some of the highest first-year compensation of any
            MBA track. The ROI case is strong — but narrower than it appears at first.
          </p>
        </header>

        {/* IB associate compensation */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Investment Banking Associate Compensation</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Post-MBA associates at bulge-bracket banks start with base salaries between $200,000 and $250,000
            and guaranteed first-year bonuses ranging from $100,000 to $150,000 — putting total first-year
            compensation above $300,000 for strong performers at top firms. This is the highest starting
            compensation of any MBA career track in absolute terms.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            The{" "}
            <Link href="/mba-salary-increase" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">MBA salary delta</Link>
            {" "}for a banking-track candidate is enormous relative to most pre-MBA backgrounds. Someone
            transitioning from a $75,000 non-finance role to a $200,000 BB associate base has a $125,000
            annual delta — before bonuses. Even candidates coming from $100,000+ pre-MBA finance roles
            typically see a $100,000+ first-year delta when bonus is included.
          </p>
          <div className="space-y-3">
            {[
              { tier: "Bulge Bracket (GS, MS, JPM, BofA, Citi, Barclays, UBS)", base: "$200k – $225k", bonus: "$100k – $150k guaranteed Y1", note: "Highest total comp. Heaviest hours. Best PE placement." },
              { tier: "Elite Boutique (Evercore, Lazard, Centerview, PJT)", base: "$215k – $250k", bonus: "$120k – $175k", note: "Equal or higher comp vs. BBs. Smaller teams, deal-flow driven." },
              { tier: "Middle Market (Jefferies, Baird, William Blair, Houlihan Lokey)", base: "$165k – $190k", bonus: "$60k – $100k", note: "Broader school recruiting. Lower absolute comp but more accessible." },
              { tier: "Regional / Boutique", base: "$120k – $155k", bonus: "Performance-based", note: "Often recruits from non-M7 programs. ROI depends heavily on school cost." },
            ].map(({ tier, base, bonus, note }) => (
              <div key={tier} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <p className="text-white font-semibold text-sm">{tier}</p>
                  <p className="text-green-400 font-semibold text-sm">{base}</p>
                </div>
                <p className="text-slate-500 text-xs">{bonus} · {note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Break-even math */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Break-Even Math: Banking Track</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The{" "}
            <Link href="/mba-break-even" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">MBA break-even timeline</Link>
            {" "}for investment banking is comparable to MBB consulting — in the 4–6 year range for
            candidates with a meaningful pre-MBA to post-MBA salary jump.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5">
            <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">Scenario: M7 → Bulge Bracket Associate</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="space-y-3">
                <div><p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Pre-MBA Salary</p><p className="text-white font-medium">$80,000/yr</p></div>
                <div><p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Post-MBA Base + Bonus</p><p className="text-white font-medium">$200k base + $120k Y1 bonus</p></div>
                <div><p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Year 1 Cash Delta</p><p className="text-green-400 font-semibold">+$240,000</p></div>
              </div>
              <div className="space-y-3">
                <div><p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Total MBA Outflow</p><p className="text-white font-medium">$415,000</p></div>
                <div><p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Annual Loan Payment</p><p className="text-white font-medium">~$17,300</p></div>
                <div><p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Break-Even</p><p className="text-green-400 font-semibold">~3.5 years</p></div>
              </div>
            </div>
            <div className="border-t border-white/10 pt-4">
              <p className="text-slate-400 text-xs leading-relaxed">
                When year-one bonus is included in the cash flow model, break-even occurs remarkably fast.
                The $120,000 first-year bonus alone covers nearly 30% of the total MBA economic cost.
                Modeled on base salary only (excluding bonus), break-even extends to approximately 5.5 years
                — still among the strongest scenarios. Run your specific numbers in the{" "}
                <Link href="/mba-roi-calculator" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">MBA ROI calculator</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* PE exit: how carry changes the math */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Private Equity Exits: How Carry Changes the 10-Year Math</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            A significant portion of top MBA banking associates move to private equity after two to four
            years. This path — often called the "2-and-out" — fundamentally transforms the long-run return
            of the MBA investment.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            PE associates at upper-middle-market and large-cap funds receive carried interest allocations
            that vest over the fund life (typically 7–10 years). Associates with strong fund performance
            can receive carry payouts worth $500,000–$3,000,000+ over a 10-year career — economic value
            that no salary-based ROI model captures, but that is made possible by the BB associate role,
            which is in turn made possible by the M7 MBA.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Even excluding carry, VP-level PE compensation at mid-size funds runs $350,000–$600,000 in
            total cash. If the MBA is the gateway to this trajectory, the 10-year NPV of the investment
            is multiples of what a base-case model suggests.
          </p>
          <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5">
            <p className="text-indigo-200 text-sm leading-relaxed">
              <span className="font-semibold text-white">Important caveat:</span> PE exits are not
              guaranteed. Only 30–50% of IB associates who target PE successfully transition in a given
              year, and outcomes depend heavily on fund vintage, deal flow, and individual performance.
              Model the base case (staying in banking) when evaluating ROI; the PE scenario is upside,
              not the expected case.
            </p>
          </div>
        </section>

        {/* When banking ROI fails */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">When the Banking ROI Case Weakens</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            For the full picture on{" "}
            <Link href="/mba-worth-it" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">whether an MBA is worth it</Link>,
            {" "}the banking path has specific failure modes worth modeling before enrolling.
          </p>
          <div className="space-y-3">
            {[
              { title: "Pre-MBA banking experience reduces delta", body: "Experienced financial analysts transitioning from $120k+ analyst-level roles to $200k associate roles have a $80k base delta — not $120k+. The ROI math is weaker for experienced finance professionals than for career switchers." },
              { title: "Hours and burnout are not priced in", body: "IB associates routinely work 80–100 hours per week. The financial model captures salary; it does not capture the non-monetary cost of that schedule. Many associates leave banking within 2 years, often to roles with meaningfully lower compensation." },
              { title: "Non-M7 access is limited for BB roles", body: "Bulge bracket on-campus recruiting is concentrated at M7 programs. Candidates from lower-ranked programs can break in but face a harder path — and the base case should reflect realistic firm access, not aspirational targets." },
              { title: "Year-one bonus is not guaranteed", body: "Guaranteed first-year bonuses have become standard at major banks, but the amounts vary by firm performance and the candidate's start date. Do not model the maximum bonus figure as the base case." },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-white font-semibold text-sm">{title}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-white/5 border border-white/10 p-10 text-center space-y-5">
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">Model Your Numbers</p>
          <h2 className="text-2xl font-semibold tracking-tight">Calculate Your Banking Track MBA ROI</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Enter your pre-MBA salary, expected base (model bonus separately), total program cost, and
            loan structure to get your personal NPV, IRR, and break-even date.
          </p>
          <Link
            href="/mba-roi-calculator"
            className="inline-block bg-linear-to-r from-indigo-600 to-violet-600 hover:opacity-90 transition-all px-8 py-4 rounded-xl font-medium text-white text-base shadow-[0_0_40px_rgba(99,102,241,0.3)]"
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
            <Link href="/mba-worth-it" className="hover:text-slate-300 transition-colors">Is MBA Worth It?</Link>
            {" · "}
            <Link href="/mba-salary-increase" className="hover:text-slate-300 transition-colors">MBA Salary Increase</Link>
            {" · "}
            <Link href="/mba-break-even" className="hover:text-slate-300 transition-colors">MBA Break-Even</Link>
            {" · "}
            <Link href="/mba-roi-consulting" className="hover:text-slate-300 transition-colors">MBA ROI: Consulting</Link>
            {" · "}
            <Link href="/mba-roi-tech" className="hover:text-slate-300 transition-colors">MBA ROI: Tech</Link>
            {" · "}
            <Link href="/mba-roi-goldman-sachs" className="hover:text-slate-300 transition-colors">MBA ROI: Goldman Sachs</Link>
            {" · "}
            <Link href="/mba-roi-recession" className="hover:text-slate-300 transition-colors">MBA Recession ROI</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
        </footer>

      </div>
    </main>
  )
}
