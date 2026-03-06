import Link from "next/link"

export const metadata = {
  title: "INSEAD vs. Wharton MBA ROI (2026): Cost Gap, Salary Data & Which Actually Wins on Break-Even",
  description:
    "INSEAD vs Wharton MBA ROI head-to-head. Full cost comparison, post-MBA salary outcomes, break-even timeline, career track fit, and when the one-year MBA wins the financial case.",
  alternates: { canonical: "https://careerreturns.com/mba-roi-insead-vs-wharton" },
}

export default function MbaRoiInseadVsWhartonPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-purple-600/12 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 py-20 space-y-20">

        <header className="space-y-5">
          <p className="text-xs font-medium text-purple-400 uppercase tracking-widest">CareerReturns · MBA Program Comparisons</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            INSEAD vs. Wharton:<br />The ROI Case for Each
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            INSEAD and Wharton represent two fundamentally different ROI propositions — not just in geography,
            but in program duration, opportunity cost, and salary outcomes. Neither is universally better.
            Here is the complete financial comparison.
          </p>
        </header>

        {/* The fundamental structural difference */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">The Structural Difference That Drives the ROI Gap</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The core financial difference between INSEAD and Wharton is not prestige or brand — both are globally
            elite programs. It is duration. INSEAD is a ten-month program. Wharton is a twenty-one-month program.
            That eleven-month difference, when applied to a pre-MBA salary and converted to opportunity cost,
            represents $60,000–$100,000 in additional economic outflow before a single dollar of tuition is counted.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            The{" "}
            <Link href="/mba-roi-calculator" className="text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-2">MBA ROI calculator</Link>
            {" "}captures this through the opportunity cost input. For a candidate earning $85,000/year before the
            program, the opportunity cost is approximately $62,500 for INSEAD (10 months) versus $148,750 for Wharton
            (21 months). This $86,250 difference in foregone income is permanent — it is not recovered through salary.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            The tradeoff: Wharton's two-year structure provides deeper career switching support, more robust US
            employer recruiting access (particularly for investment banking and US-based MBB roles), and a summer
            internship that can be used to transition industries. INSEAD's ten-month structure is designed for
            candidates who know exactly what they want and have a clear path into a global role — particularly
            in European or Asia-Pacific markets.
          </p>
        </section>

        {/* Full cost comparison */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Full Economic Cost Comparison (2024–25)</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Total economic cost includes tuition, living expenses, and opportunity cost. Most MBA ROI comparisons
            focus only on tuition and miss the opportunity cost component — which represents a significant portion
            of the total outflow, particularly for Wharton's longer program. The{" "}
            <Link href="/mba-break-even" className="text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-2">break-even analysis</Link>
            {" "}depends on this complete picture.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <p className="text-purple-400 text-xs font-medium uppercase tracking-widest">INSEAD (Fontainebleau / Singapore)</p>
                <div className="space-y-2">
                  {[
                    { label: "Tuition (2024–25)", value: "€108,000 (~$115,000)" },
                    { label: "Living expenses (10 mo)", value: "~$28,000" },
                    { label: "Books, fees, travel", value: "~$10,000" },
                    { label: "Total direct cost", value: "~$153,000" },
                    { label: "Opportunity cost (10 mo, $85k salary)", value: "~$70,800" },
                    { label: "TOTAL ECONOMIC COST", value: "~$224,000", highlight: true },
                  ].map(({ label, value, highlight }) => (
                    <div key={label} className={`flex justify-between text-xs ${highlight ? "border-t border-white/10 pt-2 mt-2" : ""}`}>
                      <span className="text-slate-400">{label}</span>
                      <span className={highlight ? "text-purple-300 font-semibold" : "text-white"}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-violet-400 text-xs font-medium uppercase tracking-widest">Wharton (Philadelphia)</p>
                <div className="space-y-2">
                  {[
                    { label: "Tuition (2024–25, 2yr)", value: "$171,840" },
                    { label: "Living expenses (21 mo)", value: "~$58,000" },
                    { label: "Books, fees, health insurance", value: "~$16,000" },
                    { label: "Total direct cost", value: "~$245,840" },
                    { label: "Opportunity cost (21 mo, $85k salary)", value: "~$148,750" },
                    { label: "TOTAL ECONOMIC COST", value: "~$394,600", highlight: true },
                  ].map(({ label, value, highlight }) => (
                    <div key={label} className={`flex justify-between text-xs ${highlight ? "border-t border-white/10 pt-2 mt-2" : ""}`}>
                      <span className="text-slate-400">{label}</span>
                      <span className={highlight ? "text-violet-300 font-semibold" : "text-white"}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 pt-4">
              <p className="text-slate-400 text-xs leading-relaxed">
                Total economic cost gap: Wharton costs approximately <span className="text-violet-300 font-semibold">$170,600 more</span> than
                INSEAD on a full economic basis. For this gap to be rational, Wharton must generate approximately
                $170,600 in additional NPV over 10 years — which requires roughly $21,000 more per year in salary
                delta, discounted at 6%.
              </p>
            </div>
          </div>
        </section>

        {/* Salary outcomes */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Post-MBA Salary Outcomes: INSEAD vs. Wharton</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The{" "}
            <Link href="/mba-salary-increase" className="text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-2">MBA salary data</Link>
            {" "}for these two programs reflects fundamentally different geographic and industry distributions.
            Wharton's median is pulled up by US investment banking and US MBB placements, which produce
            higher base salaries in USD terms. INSEAD's median is distributed across European, Asian, and
            North American markets, with European consulting salaries meaningfully lower than US equivalents
            even when adjusted for purchasing power.
          </p>
          <div className="space-y-3">
            {[
              {
                program: "INSEAD (2024 Employment Report)",
                median: "$115,000 – $135,000 USD",
                consulting: "~30% of class → MBB EMEA ($140–180k USD equivalent)",
                finance: "~20% of class → IB/PE ($150–220k USD)",
                tech: "~15% → Tech/startup ($110–160k)",
                geo: "40% European, 25% Asian, 25% North American placement",
              },
              {
                program: "Wharton (2024 Employment Report)",
                median: "$175,000 – $200,000 USD",
                consulting: "~30% of class → MBB US ($200–215k base)",
                finance: "~30% of class → IB/PE ($175–190k base + bonus)",
                tech: "~15% → Tech/PM ($180–220k base)",
                geo: "75–80% US placement",
              },
            ].map(({ program, median, consulting, finance, tech, geo }) => (
              <div key={program} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
                <p className="text-white font-semibold text-sm">{program}</p>
                <p className="text-purple-300 text-sm font-semibold">Median base: {median}</p>
                <div className="space-y-1 text-xs text-slate-400">
                  <p>→ Consulting: {consulting}</p>
                  <p>→ Finance: {finance}</p>
                  <p>→ Tech: {tech}</p>
                  <p className="text-slate-500">Geography: {geo}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs">
            Source: INSEAD 2024 Career Statistics, Wharton 2024 MBA Employment Report. Wharton figures reflect
            US base salary. INSEAD figures converted from EUR at 1.07 rate and represent global median.
          </p>
        </section>

        {/* Break-even side by side */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Break-Even Timeline: Head-to-Head Comparison</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Break-even is the cleanest comparison metric because it controls for salary differences. Below,
            we compare three scenarios for each program: MBB consulting, investment banking, and corporate strategy.
          </p>
          <div className="space-y-5">
            {[
              {
                track: "MBB Consulting",
                insead: { salary: "$145–165k (EMEA MBB)", breakEven: "~3.0–4.0 years", irr: "22–28%", color: "text-green-400" },
                wharton: { salary: "$200–215k (US MBB)", breakEven: "~4.5–5.5 years", irr: "20–24%", color: "text-teal-400" },
                note: "INSEAD wins on break-even due to lower cost. Wharton wins on absolute salary.",
              },
              {
                track: "Investment Banking",
                insead: { salary: "$150–185k (EMEA IB)", breakEven: "~4.0–5.0 years", irr: "18–24%", color: "text-teal-400" },
                wharton: { salary: "$175–190k base + bonus (US IB)", breakEven: "~5.0–6.5 years", irr: "16–22%", color: "text-blue-400" },
                note: "INSEAD wins on break-even. Wharton wins on total compensation with US bonus.",
              },
              {
                track: "Corporate Strategy (F500)",
                insead: { salary: "$110–135k (global)", breakEven: "~4.5–6.0 years", irr: "14–18%", color: "text-yellow-400" },
                wharton: { salary: "$130–160k (US)", breakEven: "~7.0–9.0 years", irr: "10–13%", color: "text-orange-400" },
                note: "INSEAD significantly wins ROI for general management track due to lower cost base.",
              },
            ].map(({ track, insead, wharton, note }) => (
              <div key={track} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
                <p className="text-white font-semibold text-sm">{track}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-white/5 rounded-lg p-3 space-y-1">
                    <p className="text-purple-400 text-xs font-medium">INSEAD</p>
                    <p className="text-slate-300 text-xs">{insead.salary}</p>
                    <p className={`${insead.color} text-xs font-semibold`}>Break-even: {insead.breakEven}</p>
                    <p className="text-slate-500 text-xs">IRR: {insead.irr}</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 space-y-1">
                    <p className="text-violet-400 text-xs font-medium">Wharton</p>
                    <p className="text-slate-300 text-xs">{wharton.salary}</p>
                    <p className={`${wharton.color} text-xs font-semibold`}>Break-even: {wharton.breakEven}</p>
                    <p className="text-slate-500 text-xs">IRR: {wharton.irr}</p>
                  </div>
                </div>
                <p className="text-slate-400 text-xs">→ {note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Career track fit */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Career Track and Geographic Fit</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The program choice should be driven by where you want to work post-MBA, not just by brand rankings.
            INSEAD's alumni network and employer relationships are substantially stronger in EMEA and Asia-Pacific.
            Wharton's US employer relationships are unmatched for US IB and US MBB placement.
          </p>
          <div className="space-y-3">
            {[
              { goal: "US MBB consulting (McKinsey NY, Bain Boston, BCG Chicago)", program: "Wharton (or other M7)", reason: "INSEAD places into MBB but US office placement is less reliable. Wharton's on-campus recruiting directly reaches US offices." },
              { goal: "EMEA or global MBB (McKinsey Paris, BCG London, Bain Singapore)", program: "INSEAD", reason: "INSEAD is arguably the strongest feeder program for MBB European and Asian offices. Alumni network density in these offices is exceptional." },
              { goal: "US investment banking (Goldman, Morgan Stanley, JP Morgan)", program: "Wharton (or Columbia)", reason: "GS and MS recruit heavily on-campus at Wharton. INSEAD does not have the same IB placement into Wall Street as US M7 programs." },
              { goal: "Entrepreneurship or startup equity", program: "Either, or consider Oxford / LBS", reason: "INSEAD's global network provides wider early-stage deal flow. Wharton's Venture Lab and Philadelphia ecosystem is strong. Neither is dominant." },
              { goal: "Fast payback, clear career path, global role", program: "INSEAD", reason: "Lower cost, shorter duration, faster break-even. The financial case is strongest when the career path is clear and does not require the US summer internship." },
            ].map(({ goal, program, reason }) => (
              <div key={goal} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-slate-400 text-xs">Goal: <span className="text-white font-medium">{goal}</span></p>
                <p className="text-purple-300 text-xs font-semibold">→ {program}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* One-year vs two-year structural consideration */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">One-Year vs. Two-Year MBA: The Structural ROI Argument</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Beyond INSEAD specifically, the one-year vs. two-year MBA format is a financially significant choice.
            Other one-year programs worth considering: IESE (Barcelona), IMD (Lausanne), LBS MiF, and Oxford Saïd.
            See the{" "}
            <Link href="/mba-roi-europe" className="text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-2">European MBA ROI guide</Link>
            {" "}for a full comparison of EMEA programs.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
            <div className="space-y-3">
              {[
                { factor: "For candidates with clear career direction", verdict: "One-year MBA wins", detail: "The summer internship in two-year programs is valuable primarily for career switchers. Candidates who know their target industry and function gain nothing from the internship that a direct associate hire cannot provide." },
                { factor: "For career switchers into new industries", verdict: "Two-year MBA wins", detail: "The summer internship is a credentialing and networking mechanism for new industries. Breaking into IB without a prior finance background is significantly harder from a one-year program." },
                { factor: "For maximizing financial returns in 10 years", verdict: "One-year MBA (often)", detail: "INSEAD and other one-year programs deliver comparable 10-year NPV to M7 programs in most consulting and general management scenarios, with lower cost and faster break-even." },
                { factor: "For US career outcomes specifically", verdict: "Two-year US MBA wins", detail: "US employer relationships, on-campus recruiting, and OPT/work authorization considerations make the two-year US MBA essential for international candidates targeting US employment." },
              ].map(({ factor, verdict, detail }) => (
                <div key={factor} className="border-b border-white/10 pb-3 last:border-0 last:pb-0">
                  <p className="text-white text-xs font-semibold mb-0.5">{factor}</p>
                  <p className="text-purple-300 text-xs font-medium mb-1">→ {verdict}</p>
                  <p className="text-slate-500 text-xs leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-white/5 border border-white/10 p-10 text-center space-y-5">
          <p className="text-xs font-medium text-purple-400 uppercase tracking-widest">Model Both Programs</p>
          <h2 className="text-2xl font-semibold tracking-tight">Run the INSEAD vs. Wharton ROI Comparison Yourself</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Use the MBA ROI Calculator to input the actual costs and expected salaries for each program.
            Run the calculation twice — once for INSEAD parameters, once for Wharton — and compare NPV, IRR, and break-even.
          </p>
          <Link
            href="/mba-roi-calculator"
            className="inline-block bg-linear-to-r from-purple-600 to-violet-600 hover:opacity-90 transition-all px-8 py-4 rounded-xl font-medium text-white text-base shadow-[0_0_40px_rgba(147,51,234,0.3)]"
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
            <Link href="/mba-roi-europe" className="hover:text-slate-300 transition-colors">MBA ROI: Europe</Link>
            {" · "}
            <Link href="/mba-roi-consulting" className="hover:text-slate-300 transition-colors">MBA ROI: Consulting</Link>
            {" · "}
            <Link href="/mba-roi-scholarship" className="hover:text-slate-300 transition-colors">MBA Scholarship ROI</Link>
            {" · "}
            <Link href="/mba-break-even" className="hover:text-slate-300 transition-colors">MBA Break-Even</Link>
            {" · "}
            <Link href="/mba-salary-increase" className="hover:text-slate-300 transition-colors">MBA Salary Increase</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
        </footer>

      </div>
    </main>
  )
}
