import Link from "next/link"

export const metadata = {
  title: "MBA Payback Period (2026): How Long Before Your MBA Pays for Itself?",
  description:
    "MBA payback period by career track in 2026. Consulting pays back in 4.2 years, banking 4.5 years, tech 6.1 years. Full calculation methodology, factors that compress or extend payback, and a free calculator.",
  alternates: { canonical: "https://careerreturns.com/mba-payback-period" },
}

const paybackByTrack = [
  { track: "MBB Consulting (M7, no scholarship)", years: 4.2, maxYears: 13, color: "bg-emerald-500", textColor: "text-emerald-400", irr: "22%", note: "Signing bonus alone covers ~2 yrs of loan payments" },
  { track: "Investment Banking BB (M7, no scholarship)", years: 4.5, maxYears: 13, color: "bg-blue-500", textColor: "text-blue-400", irr: "21%", note: "Stub-year bonus accelerates payback in year 1" },
  { track: "Private Equity (PE) Post-Banking", years: 3.9, maxYears: 13, color: "bg-violet-500", textColor: "text-violet-400", irr: "23%", note: "Fastest payback due to highest total comp floor" },
  { track: "MBB Consulting (50% scholarship)", years: 2.1, maxYears: 13, color: "bg-emerald-400", textColor: "text-emerald-300", irr: "40%", note: "Half-scholarship nearly halves payback period" },
  { track: "Tech (FAANG PM / Strategy, M7)", years: 6.1, maxYears: 13, color: "bg-cyan-500", textColor: "text-cyan-400", irr: "16%", note: "High pre-MBA tech salaries compress the delta" },
  { track: "Big 4 Advisory (T15 program)", years: 6.8, maxYears: 13, color: "bg-amber-500", textColor: "text-amber-400", irr: "14%", note: "Lower delta vs. MBB extends timeline significantly" },
  { track: "Consumer Goods / CPG (M7)", years: 7.8, maxYears: 13, color: "bg-orange-500", textColor: "text-orange-400", irr: "12%", note: "Marginal case at sticker price; scholarship required for strong ROI" },
  { track: "Healthcare Management (M7)", years: 6.2, maxYears: 13, color: "bg-teal-500", textColor: "text-teal-400", irr: "15%", note: "PSLF eligibility can eliminate loan payments entirely" },
  { track: "European 1-Year MBA (MBB)", years: 3.4, maxYears: 13, color: "bg-indigo-500", textColor: "text-indigo-400", irr: "30%", note: "1 yr shorter program removes ~$85k opportunity cost" },
  { track: "Top-Tier Online MBA (promotion path)", years: 2.8, maxYears: 13, color: "bg-sky-500", textColor: "text-sky-400", irr: "28%", note: "No opportunity cost + low tuition = fastest non-veteran payback" },
  { track: "Military Veteran → MBB (GI Bill + Yellow Ribbon)", years: 2.0, maxYears: 13, color: "bg-blue-400", textColor: "text-blue-300", irr: "40–55%", note: "GI Bill eliminates tuition; 2.0 yr payback is the dataset floor" },
  { track: "Nonprofit / Government (M7, no scholarship)", years: 13.1, maxYears: 13, color: "bg-red-500", textColor: "text-red-400", irr: "4%", note: "Negative NPV at sticker. PSLF is the only scenario that works." },
]

export default function MbaPaybackPeriodPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-sky-600/12 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 py-20 space-y-20">

        <header className="space-y-5">
          <p className="text-xs font-medium text-sky-400 uppercase tracking-widest">CareerReturns · MBA Payback Analysis</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            MBA Payback Period (2026):<br />
            <span className="text-slate-400">2.0 to 13.1 Years Depending on Career Track</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            The MBA payback period — the time it takes to recoup your full investment through higher earnings —
            ranges from 2.0 years for a GI Bill-eligible veteran joining MBB to 13.1 years for a nonprofit
            path at full sticker price. Here is the complete data by career track.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Fastest Payback", value: "2.0 yrs" },
              { label: "Consulting Track", value: "4.2 yrs" },
              { label: "Tech Track", value: "6.1 yrs" },
              { label: "Slowest Track", value: "13.1 yrs" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <p className="text-sky-400 font-semibold text-lg">{value}</p>
                <p className="text-slate-500 text-xs mt-1">{label}</p>
              </div>
            ))}
          </div>
        </header>

        {/* Formula */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">How MBA Payback Period Is Calculated</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The payback period measures when cumulative post-MBA earnings gain fully offsets the total
            economic cost of the degree. It differs from{" "}
            <Link href="/mba-break-even" className="text-sky-400 hover:text-sky-300 transition-colors underline underline-offset-2">break-even analysis</Link>
            {" "}in that it accounts for loan repayment cash flows, not just the earnings delta.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
            <p className="text-xs font-medium text-sky-400 uppercase tracking-widest">The Formula</p>
            <div className="space-y-3 text-sm">
              <div className="bg-white/5 rounded-lg p-4 font-mono text-xs text-slate-300">
                Payback Period = Total Economic Cost ÷ Annual Net Earnings Gain
              </div>
              <div className="space-y-2 text-xs text-slate-400">
                <p><span className="text-white">Total Economic Cost</span> = Tuition + Living + Opportunity Cost + Loan Interest</p>
                <p><span className="text-white">Annual Net Earnings Gain</span> = (Post-MBA Salary − Pre-MBA Salary) − Annual Loan Payments</p>
              </div>
            </div>
            <div className="border-t border-white/10 pt-4">
              <p className="text-xs font-medium text-sky-400 uppercase tracking-widest mb-2">Example: M7 → McKinsey</p>
              <div className="space-y-1 text-xs text-slate-400">
                <p>Total Economic Cost: $415,000 (tuition $245k + living $56k + opportunity cost $114k)</p>
                <p>Post-MBA Salary: $200,000 base + $40,000 signing bonus</p>
                <p>Pre-MBA Salary: $85,000</p>
                <p>Annual Delta: $115,000</p>
                <p>Annual Loan Payment: ~$17,300 (at $128k financed, 6.5%, 10yr)</p>
                <p>Net Annual Gain: $115,000 − $17,300 = <span className="text-sky-400">$97,700</span></p>
                <p>Payback Period: $415,000 ÷ $97,700 = <span className="text-emerald-400 font-semibold">4.25 years</span></p>
              </div>
            </div>
          </div>
        </section>

        {/* Bar chart by track */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">MBA Payback Period by Career Track (2026)</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            All scenarios below assume M7 full-time at full cost ($415,000 total) unless noted. IRR range
            reflects no-scholarship scenario. Bars scaled to 13 years (maximum in dataset).
          </p>
          <div className="space-y-4">
            {paybackByTrack.map(({ track, years, maxYears, color, textColor, irr, note }) => (
              <div key={track} className="space-y-1.5">
                <div className="flex justify-between items-baseline">
                  <span className="text-slate-300 text-xs font-medium">{track}</span>
                  <span className={`${textColor} text-xs font-semibold`}>{years} yrs · IRR {irr}</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className={`${color} h-2 rounded-full transition-all`}
                    style={{ width: `${(years / maxYears) * 100}%` }}
                  />
                </div>
                <p className="text-slate-500 text-xs">{note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What compresses vs extends payback */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">What Compresses vs. Extends Your Payback Period</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-3">
              <p className="text-emerald-400 text-sm font-semibold">Compresses Payback (shorter)</p>
              {[
                { factor: "Large signing bonus", detail: "$40k–$50k signing covers 2–3 years of loan payments immediately" },
                { factor: "Scholarship aid", detail: "50% scholarship reduces total cost by $115k — nearly 1 year of payback" },
                { factor: "GI Bill benefits (veterans)", detail: "Eliminates tuition entirely; MHA covers living" },
                { factor: "1-year program", detail: "Saves 1 year of opportunity cost (~$85k)" },
                { factor: "High career trajectory industry", detail: "MBB bonuses grow 50–100% in years 2–4" },
              ].map(({ factor, detail }) => (
                <div key={factor} className="bg-white/5 border border-emerald-900/20 rounded-xl p-4 space-y-1">
                  <p className="text-white text-xs font-semibold">{factor}</p>
                  <p className="text-slate-400 text-xs">{detail}</p>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              <p className="text-red-400 text-sm font-semibold">Extends Payback (longer)</p>
              {[
                { factor: "High pre-MBA salary", detail: "FAANG SWE at $300k: delta collapses to $10k–$40k. Payback exceeds 15 years" },
                { factor: "Lateral career move", detail: "Same industry, modest role upgrade: delta may be $20k–$40k" },
                { factor: "Low-paying target industry", detail: "Nonprofit at $105k vs $70k pre-MBA: 13+ year payback at M7 cost" },
                { factor: "Full debt load without scholarship", detail: "$130k loan at 7.5% adds $18,000/yr in payments for 10 years" },
                { factor: "Longer time to MBA promotion", detail: "Late promotions to EM or principal drag trajectory income" },
              ].map(({ factor, detail }) => (
                <div key={factor} className="bg-white/5 border border-red-900/20 rounded-xl p-4 space-y-1">
                  <p className="text-white text-xs font-semibold">{factor}</p>
                  <p className="text-slate-400 text-xs">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-white/5 border border-white/10 p-10 text-center space-y-5">
          <p className="text-xs font-medium text-sky-400 uppercase tracking-widest">Calculate Your Payback Period</p>
          <h2 className="text-2xl font-semibold tracking-tight">Get Your Personal MBA Payback Date</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Enter your pre-MBA salary, expected post-MBA role, total program cost, and loan details.
            The calculator returns your exact payback period, NPV, and IRR in under 60 seconds.
          </p>
          <Link
            href="/mba-roi-calculator"
            className="inline-block bg-linear-to-r from-sky-600 to-cyan-600 hover:opacity-90 transition-all px-8 py-4 rounded-xl font-medium text-white text-base shadow-[0_0_40px_rgba(14,165,233,0.3)]"
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
            <Link href="/mba-break-even" className="hover:text-slate-300 transition-colors">MBA Break-Even</Link>
            {" · "}
            <Link href="/mba-roi" className="hover:text-slate-300 transition-colors">MBA ROI Guide</Link>
            {" · "}
            <Link href="/mba-cost" className="hover:text-slate-300 transition-colors">MBA Cost</Link>
            {" · "}
            <Link href="/mba-roi-consulting" className="hover:text-slate-300 transition-colors">MBA ROI: Consulting</Link>
            {" · "}
            <Link href="/mba-worth-it" className="hover:text-slate-300 transition-colors">Is MBA Worth It?</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
        </footer>

      </div>
    </main>
  )
}
