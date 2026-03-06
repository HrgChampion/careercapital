import Link from "next/link"

export const metadata = {
  title: "MBA ROI (2026): The Complete Guide — IRR, NPV & Break-Even by Industry",
  description:
    "The complete MBA ROI guide for 2026. IRR by destination industry, break-even periods, scholarship impact, online vs full-time, US vs Europe, and recession modeling. Free calculator included.",
  alternates: { canonical: "https://careerreturns.com/mba-roi" },
}

const roiTable = [
  { industry: "Management Consulting (MBB)", irr: "22–40%", breakEven: "4.2–4.7 yrs", npv10yr: "+$186k–$341k", verdict: "Strong", color: "text-emerald-400" },
  { industry: "Investment Banking (Bulge Bracket)", irr: "21–38%", breakEven: "4.5–5.0 yrs", npv10yr: "+$170k–$320k", verdict: "Strong", color: "text-emerald-400" },
  { industry: "Private Equity / Venture Capital", irr: "23–41%", breakEven: "3.9–4.4 yrs", npv10yr: "+$200k–$360k", verdict: "Strong", color: "text-emerald-400" },
  { industry: "Technology (FAANG / Tier-1)", irr: "16–30%", breakEven: "6.1–7.0 yrs", npv10yr: "+$98k–$253k", verdict: "Moderate", color: "text-amber-400" },
  { industry: "Energy / Oil & Gas", irr: "17–31%", breakEven: "5.7–6.5 yrs", npv10yr: "+$110k–$240k", verdict: "Moderate", color: "text-amber-400" },
  { industry: "Real Estate / Infrastructure", irr: "16–30%", breakEven: "5.9–6.8 yrs", npv10yr: "+$100k–$230k", verdict: "Moderate", color: "text-amber-400" },
  { industry: "Healthcare / Biotech Management", irr: "15–28%", breakEven: "6.2–7.2 yrs", npv10yr: "+$90k–$210k", verdict: "Moderate", color: "text-amber-400" },
  { industry: "Big 4 Consulting / Advisory", irr: "14–26%", breakEven: "6.8–8.0 yrs", npv10yr: "+$75k–$180k", verdict: "Weak", color: "text-orange-400" },
  { industry: "Consumer Goods / CPG", irr: "12–22%", breakEven: "7.8–9.2 yrs", npv10yr: "+$55k–$140k", verdict: "Weak", color: "text-orange-400" },
  { industry: "Media / Entertainment", irr: "9–18%", breakEven: "9.4–11.0 yrs", npv10yr: "+$30k–$90k", verdict: "Weak", color: "text-orange-400" },
  { industry: "Military / Government (with GI Bill)", irr: "28–55%", breakEven: "2.0–3.5 yrs", npv10yr: "+$350k–$600k", verdict: "Exceptional (veterans)", color: "text-blue-400" },
  { industry: "Nonprofit / Government (civilian)", irr: "4–14%", breakEven: "9.4–13.1 yrs", npv10yr: "–$20k to +$80k", verdict: "Negative at sticker", color: "text-red-400" },
]

export default function MbaRoiPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-emerald-600/12 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 py-20 space-y-20">

        <header className="space-y-5">
          <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest">CareerReturns · MBA ROI Hub</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            MBA ROI (2026):<br />
            <span className="text-slate-400">The Complete Financial Analysis</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Return on investment for an MBA varies from 4% to 55% depending on industry, school tier,
            scholarship aid, and program type. This guide covers every variable with real data — so you can
            model your specific scenario before committing $200,000–$415,000.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "IRR Range", value: "4–55%" },
              { label: "Break-Even Range", value: "2–13 yrs" },
              { label: "Industries Covered", value: "12" },
              { label: "Salary Delta Range", value: "$35k–$90k/yr" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <p className="text-emerald-400 font-semibold text-lg">{value}</p>
                <p className="text-slate-500 text-xs mt-1">{label}</p>
              </div>
            ))}
          </div>
        </header>

        {/* ROI by industry */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">MBA ROI by Destination Industry (2026): All 12 Tracks</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Destination industry is the single largest driver of MBA ROI — more than school tier, program cost,
            or scholarship aid. The table below shows IRR, break-even, and 10-year NPV ranges for every major
            career track. Ranges reflect no-scholarship vs. full-scholarship scenarios.
          </p>
          <div className="space-y-2">
            {roiTable.map(({ industry, irr, breakEven, npv10yr, verdict, color }) => (
              <div key={industry} className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <p className="text-white font-semibold text-sm">{industry}</p>
                  <p className={`${color} text-xs font-semibold`}>{verdict}</p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div><p className="text-slate-500 mb-0.5">IRR</p><p className={color}>{irr}</p></div>
                  <div><p className="text-slate-500 mb-0.5">Break-Even</p><p className="text-slate-300">{breakEven}</p></div>
                  <div><p className="text-slate-500 mb-0.5">10-yr NPV</p><p className="text-slate-300">{npv10yr}</p></div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs">IRR and NPV modeled at 10% discount rate, 10-year horizon. IRR range = no scholarship to full scholarship scenarios.</p>
        </section>

        {/* The 4 variables */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">The 4 Variables That Determine Your MBA ROI</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            MBA ROI is not a single number. It is a function of four inputs — each with its own guide below.
          </p>
          <div className="space-y-3">
            {[
              {
                variable: "1. Destination Industry",
                impact: "Largest lever. Accounts for 60–70% of ROI variance.",
                delta: "Consulting: +$115k/yr delta. Nonprofit: +$35k/yr delta.",
                link: "/mba-roi-consulting",
                linkText: "See consulting ROI →",
                color: "text-emerald-400",
              },
              {
                variable: "2. Scholarship Aid",
                impact: "Second-largest lever. 50% scholarship raises IRR from ~21% to ~40%.",
                delta: "Cutting $115,000 from program cost saves ~$17,000/yr in loan payments.",
                link: "/mba-roi-scholarship",
                linkText: "See scholarship ROI →",
                color: "text-violet-400",
              },
              {
                variable: "3. Program Type",
                impact: "One-year European programs save 1 year of opportunity cost (~$80–120k).",
                delta: "Online MBA costs $20k–$80k vs $200k–$240k for M7 full-time.",
                link: "/mba-roi-online-vs-full-time",
                linkText: "See online vs full-time →",
                color: "text-amber-400",
              },
              {
                variable: "4. Pre-MBA Salary",
                impact: "Higher pre-MBA salary compresses the delta and worsens ROI.",
                delta: "FAANG engineer at $300k: MBA ROI can be negative. Non-FAANG at $110k: strong ROI.",
                link: "/mba-roi-engineers",
                linkText: "See engineer ROI →",
                color: "text-sky-400",
              },
            ].map(({ variable, impact, delta, link, linkText, color }) => (
              <div key={variable} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className={`${color} font-semibold text-sm`}>{variable}</p>
                <p className="text-slate-300 text-xs">{impact}</p>
                <p className="text-slate-400 text-xs">{delta}</p>
                <Link href={link} className={`${color} text-xs hover:opacity-80 transition-opacity underline underline-offset-2`}>{linkText}</Link>
              </div>
            ))}
          </div>
        </section>

        {/* Deep dives */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Deep-Dive Guides: MBA ROI by Scenario</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/mba-roi-consulting", label: "MBA ROI: MBB Consulting", desc: "The highest-ROI career track" },
              { href: "/mba-roi-investment-banking", label: "MBA ROI: Investment Banking", desc: "Bulge bracket pay & PE exits" },
              { href: "/mba-roi-tech", label: "MBA ROI: Tech / FAANG", desc: "Post-MBA PM & strategy roles" },
              { href: "/mba-roi-mckinsey", label: "MBA ROI: McKinsey", desc: "$192K associate salary math" },
              { href: "/mba-roi-goldman-sachs", label: "MBA ROI: Goldman Sachs", desc: "$210K+ banking pay model" },
              { href: "/mba-roi-engineers", label: "MBA ROI: Engineers", desc: "The compressed delta problem" },
              { href: "/mba-roi-healthcare", label: "MBA ROI: Healthcare", desc: "Management + PSLF strategy" },
              { href: "/mba-roi-military", label: "MBA ROI: Military Veterans", desc: "GI Bill + Yellow Ribbon math" },
              { href: "/mba-roi-scholarship", label: "MBA Scholarship ROI", desc: "How 50% aid flips IRR to 40%" },
              { href: "/mba-roi-recession", label: "MBA ROI in a Recession", desc: "2008 & 2020 historical data" },
              { href: "/mba-roi-europe", label: "European MBA ROI", desc: "INSEAD, LBS & 1-yr arbitrage" },
              { href: "/mba-roi-insead-vs-wharton", label: "INSEAD vs. Wharton", desc: "Head-to-head ROI comparison" },
              { href: "/mba-roi-online-vs-full-time", label: "Online vs. Full-Time MBA", desc: "When online wins on IRR" },
              { href: "/mba-roi-big4-vs-mbb", label: "Big 4 vs. MBB ROI", desc: "$47K salary gap explained" },
              { href: "/mba-roi-report-2026", label: "MBA ROI Report 2026", desc: "Full dataset: all 12 industries" },
            ].map(({ href, label, desc }) => (
              <Link
                key={href}
                href={href}
                className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/8 transition-colors space-y-1 block"
              >
                <p className="text-white font-medium text-sm">{label}</p>
                <p className="text-slate-500 text-xs">{desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-white/5 border border-white/10 p-10 text-center space-y-5">
          <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest">Model Your Numbers</p>
          <h2 className="text-2xl font-semibold tracking-tight">Calculate Your Personal MBA ROI</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Enter your pre-MBA salary, target post-MBA role, total program cost, and loan structure.
            Get NPV, IRR, and break-even date for your specific scenario in under 60 seconds.
          </p>
          <Link
            href="/mba-roi-calculator"
            className="inline-block bg-linear-to-r from-emerald-600 to-teal-600 hover:opacity-90 transition-all px-8 py-4 rounded-xl font-medium text-white text-base shadow-[0_0_40px_rgba(5,150,105,0.3)]"
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
            <Link href="/average-mba-salary" className="hover:text-slate-300 transition-colors">Average MBA Salary</Link>
            {" · "}
            <Link href="/mba-cost" className="hover:text-slate-300 transition-colors">MBA Cost</Link>
            {" · "}
            <Link href="/mba-payback-period" className="hover:text-slate-300 transition-colors">MBA Payback Period</Link>
            {" · "}
            <Link href="/mba-roi-report-2026" className="hover:text-slate-300 transition-colors">MBA ROI Report 2026</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
        </footer>

      </div>
    </main>
  )
}
