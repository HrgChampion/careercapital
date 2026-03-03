import Link from "next/link"

export const metadata = {
  title: "MBA ROI for Military Veterans: GI Bill, Yellow Ribbon & Career Outcomes (2025) | CareerReturns",
  description:
    "MBA ROI for veterans. GI Bill Yellow Ribbon program math, MBB veteran recruiting data, net cost after benefits, post-MBA salary outcomes, and the top MBA programs for military officers.",
  alternates: { canonical: "https://careerreturns.com/mba-roi-military" },
}

export default function MbaRoiMilitaryPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-blue-600/12 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 py-20 space-y-20">

        <header className="space-y-5">
          <p className="text-xs font-medium text-blue-400 uppercase tracking-widest">CareerReturns · MBA ROI by Background</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            MBA ROI for Military Veterans:<br />The GI Bill Advantage
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Military veterans have access to educational benefits that fundamentally alter the MBA ROI calculation.
            The GI Bill Yellow Ribbon Program can eliminate $80,000–$120,000 in tuition — transforming the
            financial case for top programs that would otherwise be marginal.
          </p>
        </header>

        {/* The veteran MBA landscape */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Why Veterans Face a Structurally Different ROI Calculation</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The{" "}
            <Link href="/mba-roi-calculator" className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-2">MBA ROI calculation</Link>
            {" "}for veterans differs from civilian candidates in three structural ways: benefit eligibility
            that reduces net cost, leadership premia in specific post-MBA employers, and recruiting pipelines
            that specifically target military officers.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            The Post-9/11 GI Bill, combined with the Yellow Ribbon Program at participating schools, can fund
            full tuition at any participating institution — including Harvard Business School, Wharton, Booth,
            and Kellogg. For veterans who have completed the required service period and attended a school with
            100% Yellow Ribbon participation, the tuition component of MBA cost drops to zero. Only living
            expenses, books, and opportunity cost remain.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            This dramatically changes the break-even math. An M7 program that costs a civilian candidate
            $415,000 in total economic cost might cost a fully GI Bill-eligible veteran only $200,000–$250,000
            — reducing break-even by 1.5–2.5 years and adding $120,000–$160,000 directly to 10-year NPV.
            The{" "}
            <Link href="/mba-roi-scholarship" className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-2">scholarship ROI analysis</Link>
            {" "}covers the financial mechanics of cost reduction in detail.
          </p>
        </section>

        {/* GI Bill Yellow Ribbon explained */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">GI Bill + Yellow Ribbon: The Full Benefit Stack</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Understanding exactly what the Post-9/11 GI Bill and Yellow Ribbon Program cover — and do not cover — is
            essential for accurate ROI modeling. The benefit structure is more generous than most veterans realize.
          </p>
          <div className="space-y-3">
            {[
              {
                benefit: "Post-9/11 GI Bill (Chapter 33) — Tuition & Fees",
                description: "Pays tuition and fees directly to the school up to the maximum private school rate: $28,937.09/yr (2024–25 academic year). For schools where tuition exceeds this cap, Yellow Ribbon bridges the gap.",
                note: "Requirement: 36+ months of active duty service for 100% eligibility. 90%+ of qualifying veterans use 100% tier.",
                color: "text-blue-300",
              },
              {
                benefit: "Yellow Ribbon Program — Tuition Gap Coverage",
                description: "Participating schools contribute additional tuition funding beyond the GI Bill cap, matched dollar-for-dollar by the VA. With 100% Yellow Ribbon participation, full tuition at any school — including M7 programs — is covered. No out-of-pocket tuition.",
                note: "Participation and dollar amounts are set by each school annually. Most M7 programs offer unlimited Yellow Ribbon matching for unlimited students.",
                color: "text-indigo-300",
              },
              {
                benefit: "Monthly Housing Allowance (MHA)",
                description: "Monthly stipend based on the E-5 with dependent Basic Allowance for Housing (BAH) rate for the school's zip code. For urban schools: $2,200–$3,500/month. This directly offsets living expenses.",
                note: "For HBS (Cambridge, MA zip): ~$2,800/month. For Wharton (Philadelphia): ~$2,400/month. For Booth (Chicago): ~$2,100/month.",
                color: "text-sky-300",
              },
              {
                benefit: "Books & Supplies Stipend",
                description: "Up to $1,000/year for books and course materials. Applied automatically to tuition account.",
                note: "Minor benefit but part of the full stack.",
                color: "text-teal-300",
              },
            ].map(({ benefit, description, note, color }) => (
              <div key={benefit} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className={`${color} font-semibold text-sm`}>{benefit}</p>
                <p className="text-slate-300 text-xs leading-relaxed">{description}</p>
                <p className="text-slate-500 text-xs">{note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Net cost after benefits */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Net Cost After Benefits: Veteran vs. Civilian at the Same School</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The comparison below shows how GI Bill + Yellow Ribbon reshapes total economic cost for a veteran
            at a two-year M7 program. Pre-MBA salary assumed at $80,000 (equivalent civilian value of O-4 compensation).
          </p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">Civilian MBA Candidate (Wharton)</p>
                {[
                  { label: "Tuition (2yr)", value: "$171,840", negative: true },
                  { label: "Living expenses (21 mo)", value: "$58,000", negative: true },
                  { label: "Books, fees, health insurance", value: "$16,000", negative: true },
                  { label: "Opportunity cost (21 mo)", value: "$140,000", negative: true },
                  { label: "Total economic outflow", value: "$385,840", negative: true, bold: true },
                ].map(({ label, value, negative, bold }) => (
                  <div key={label} className={`flex justify-between text-xs ${bold ? "border-t border-white/10 pt-2" : ""}`}>
                    <span className="text-slate-400">{label}</span>
                    <span className={`${negative ? "text-red-400" : "text-green-400"} ${bold ? "font-bold" : ""}`}>{value}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <p className="text-blue-400 text-xs font-medium uppercase tracking-widest">Veteran Candidate (100% GI Bill + Yellow Ribbon)</p>
                {[
                  { label: "Tuition (covered by GI Bill + YR)", value: "$0", negative: false },
                  { label: "Living (offset by MHA at ~$2,400/mo)", value: "$8,400 net", negative: true, note: "($58k - $50.4k MHA)" },
                  { label: "Books, fees, health insurance", value: "$15,000", negative: true },
                  { label: "Opportunity cost (21 mo)", value: "$140,000", negative: true },
                  { label: "Total economic outflow", value: "$163,400", negative: true, bold: true },
                ].map(({ label, value, negative, bold }) => (
                  <div key={label} className={`flex justify-between text-xs ${bold ? "border-t border-white/10 pt-2" : ""}`}>
                    <span className="text-slate-400">{label}</span>
                    <span className={`${negative ? (bold ? "text-blue-400 font-bold" : "text-slate-300") : "text-green-400"}`}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-white/10 pt-4">
              <p className="text-slate-400 text-xs leading-relaxed">
                GI Bill + Yellow Ribbon benefit: <span className="text-blue-400 font-semibold">$222,440 reduction</span> in total economic cost.
                At a MBB post-MBA salary of $205,000 base (delta of $125,000/yr over $80k pre-MBA), a veteran's
                break-even falls to approximately <span className="text-green-400 font-semibold">2.0–2.5 years</span> — among the
                fastest payback periods of any MBA scenario. 10-year NPV exceeds <span className="text-green-400 font-semibold">$500,000</span> in this model.
              </p>
            </div>
          </div>
        </section>

        {/* MBB veteran recruiting */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">MBB Veteran Recruiting: What the Data Shows</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            McKinsey, BCG, and Bain actively recruit military veterans through dedicated hiring programs,
            veteran affinity networks, and in some cases, modified recruiting timelines. Understanding
            these programs is important for veterans targeting the{" "}
            <Link href="/mba-roi-mckinsey" className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-2">McKinsey ROI case</Link>
            {" "}or the{" "}
            <Link href="/mba-roi-consulting" className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-2">broader consulting track</Link>.
          </p>
          <div className="space-y-3">
            {[
              {
                firm: "McKinsey & Company",
                program: "McKinsey Veterans Initiative",
                detail: "McKinsey has a dedicated veterans recruiting team and partners with programs like Student Veterans of America. Military officers (O-4 and above) with strong post-MBA credentials are actively recruited. Leadership experience as a military officer is explicitly valued in McKinsey's problem-solving and people-leadership assessment.",
              },
              {
                firm: "Boston Consulting Group (BCG)",
                program: "BCG VETS Network",
                detail: "BCG has a formal veterans network with recruiting events at target programs. Military-to-consulting training programs exist for non-MBA veterans; for post-MBA hires, the standard recruiting process applies but with active veteran affinity support.",
              },
              {
                firm: "Bain & Company",
                program: "Bain Veterans Initiative",
                detail: "Bain partners with veteran MBA associations at target programs. Military leadership experience is a differentiating factor in the Bain interview process, where structured leadership stories from military service are directly transferable to case interview competency demonstrations.",
              },
              {
                firm: "Defense Contracting (Booz Allen, L3Harris, SAIC)",
                program: "Direct veteran hiring programs",
                detail: "Defense contractors actively prefer veterans with clearances and service backgrounds. Post-MBA salaries at top defense consulting firms range from $120,000–$175,000 — lower than MBB but with faster advancement and security clearance premium over the 10-year career horizon.",
              },
            ].map(({ firm, program, detail }) => (
              <div key={firm} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-white font-semibold text-sm">{firm}</p>
                <p className="text-blue-300 text-xs font-medium">{program}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Career track comparison */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Post-MBA Career Tracks for Veterans: Salary and ROI</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Veterans enter the post-MBA job market with distinct advantages — leadership credibility, clearances,
            operational scale — and specific gaps relative to civilian MBAs (financial modeling, industry networks).
            Career track targeting should account for both. The{" "}
            <Link href="/mba-salary-increase" className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-2">MBA salary data</Link>
            {" "}provides context on median outcomes across industries.
          </p>
          <div className="space-y-3">
            {[
              { track: "MBB Consulting", salary: "$200,000–$215,000 base", advantage: "Leadership/ops experience valued. Veterans competitive via affinity programs.", breakEven: "~2.0–2.5 yrs (with GI Bill)", irr: "40–55%", verdict: "Exceptional" },
              { track: "Defense Consulting / Booz Allen / SAIC", salary: "$130,000–$175,000", advantage: "Security clearance premium. Direct military experience advantage.", breakEven: "~3.5–5.0 yrs (with GI Bill)", irr: "25–35%", verdict: "Very Strong" },
              { track: "Corporate Strategy / General Management", salary: "$130,000–$165,000", advantage: "Operational leadership experience translates well.", breakEven: "~4.0–6.0 yrs (with GI Bill)", irr: "18–28%", verdict: "Strong" },
              { track: "Investment Banking", salary: "$175,000–$190,000 base", advantage: "Less inherent advantage vs. civilian finance backgrounds.", breakEven: "~3.5–5.0 yrs (with GI Bill)", irr: "22–32%", verdict: "Strong (GI Bill helps significantly)" },
              { track: "Federal Government (SES / Policy)", salary: "$100,000–$145,000", advantage: "Veterans preference points (5pt or 10pt). GS-13/14 entry typical.", breakEven: "~5.0–8.0 yrs (with GI Bill + PSLF)", irr: "12–18%", verdict: "Positive with PSLF" },
            ].map(({ track, salary, advantage, breakEven, irr, verdict }) => (
              <div key={track} className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <p className="text-white font-semibold text-sm">{track}</p>
                  <p className="text-blue-300 text-xs font-semibold">{verdict}</p>
                </div>
                <p className="text-slate-300 text-xs">{salary}</p>
                <p className="text-slate-400 text-xs">{advantage}</p>
                <div className="flex gap-4 text-xs text-slate-500">
                  <span>Break-even (with GI Bill): <span className="text-green-400">{breakEven}</span></span>
                  <span>IRR: <span className="text-blue-300">{irr}</span></span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Top schools for veterans */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Top MBA Programs for Military Veterans (2025)</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            All M7 programs participate in the Yellow Ribbon Program with unlimited matching, making the
            tuition cost zero for eligible veterans. Beyond eligibility, these programs have the strongest
            veteran support infrastructure and recruiting pipelines.
          </p>
          <div className="space-y-3">
            {[
              { school: "Harvard Business School", veteran: "HBS Armed Forces Alumni", note: "One of the largest veteran populations at any MBA program. Yellow Ribbon: full tuition unlimited students. Dedicated veteran case competition and recruiting events." },
              { school: "Kellogg (Northwestern)", veteran: "Kellogg Veterans Association", note: "Consistently ranked #1 by Student Veterans of America. Strong defense consulting and corporate strategy placement. Yellow Ribbon unlimited." },
              { school: "Darden (Virginia)", veteran: "Darden Veterans Association", note: "~15% of class is veterans — among the highest proportions in M7/near-M7. Military culture aligns with Darden's case method and team-based learning." },
              { school: "Booth (Chicago)", veteran: "Booth Veterans Group", note: "Strong quant and finance placement for veterans with analytical military backgrounds. Yellow Ribbon unlimited." },
              { school: "Fuqua (Duke)", veteran: "Fuqua Veterans Club", note: "High veteran enrollment percentage. Strong consulting and nonprofit placement. Regional network in government and defense sectors." },
            ].map(({ school, veteran, note }) => (
              <div key={school} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-1">
                <p className="text-white font-semibold text-sm">{school}</p>
                <p className="text-blue-300 text-xs font-medium">{veteran}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            For veterans considering healthcare careers, combining Yellow Ribbon with PSLF produces one of
            the strongest risk-adjusted ROI profiles of any MBA candidate profile. See the{" "}
            <Link href="/mba-roi-healthcare" className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-2">healthcare MBA ROI guide</Link>
            {" "}for the full PSLF analysis.
          </p>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-white/5 border border-white/10 p-10 text-center space-y-5">
          <p className="text-xs font-medium text-blue-400 uppercase tracking-widest">Model Your Veteran MBA ROI</p>
          <h2 className="text-2xl font-semibold tracking-tight">Calculate Your Net Cost After GI Bill Benefits</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Use the MBA ROI Calculator with your reduced net cost after GI Bill and Yellow Ribbon benefits.
            Enter your post-benefit program cost, pre-MBA equivalent salary, and target employer. Your
            break-even will likely be the fastest scenario in our dataset.
          </p>
          <Link
            href="/mba-roi-calculator"
            className="inline-block bg-linear-to-r from-blue-600 to-indigo-600 hover:opacity-90 transition-all px-8 py-4 rounded-xl font-medium text-white text-base shadow-[0_0_40px_rgba(37,99,235,0.3)]"
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
            <Link href="/mba-roi-mckinsey" className="hover:text-slate-300 transition-colors">MBA ROI: McKinsey</Link>
            {" · "}
            <Link href="/mba-roi-consulting" className="hover:text-slate-300 transition-colors">MBA ROI: Consulting</Link>
            {" · "}
            <Link href="/mba-roi-scholarship" className="hover:text-slate-300 transition-colors">MBA Scholarship ROI</Link>
            {" · "}
            <Link href="/mba-roi-healthcare" className="hover:text-slate-300 transition-colors">Healthcare MBA ROI</Link>
            {" · "}
            <Link href="/mba-break-even" className="hover:text-slate-300 transition-colors">MBA Break-Even</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
        </footer>

      </div>
    </main>
  )
}
