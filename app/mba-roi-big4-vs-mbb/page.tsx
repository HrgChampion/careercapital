import Link from "next/link"
import { pageAlternates } from "@/lib/seo"

export const metadata = {
  title: "Big 4 vs MBB MBA ROI (2026): $47K Salary Gap & Break-Even",
  description:
    "Big 4 vs MBB MBA ROI. Deloitte vs McKinsey salary, break-even difference, NPV side-by-side, and when Big 4 outperforms MBB on financial returns. See data →",
  alternates: pageAlternates("https://careerreturns.com/mba-roi-big4-vs-mbb"),
}

export default function MbaRoiBig4VsMbbPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-teal-600/12 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12 sm:space-y-20">

        <header className="space-y-5">
          <p className="text-xs font-medium text-teal-400 uppercase tracking-widest">CareerReturns · MBA ROI Comparisons</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            Big 4 vs MBB Consulting:<br />The MBA ROI Gap
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            MBB — McKinsey, Bain, BCG — and Big 4 advisory — Deloitte, PwC, EY, KPMG — represent the two dominant
            consulting tracks for MBA graduates. The salary gap between them is large enough to shift break-even by
            two to three years. Here is the full analysis.
          </p>
        </header>

        {/* The salary gap */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">The Core Salary Gap Between MBB and Big 4</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The{" "}
            <Link href="/mba-salary-increase" className="text-teal-400 hover:text-teal-300 transition-colors underline underline-offset-2">MBA salary increase</Link>
            {" "}varies dramatically by consulting tier. The primary driver of MBA ROI in consulting is the salary delta —
            the annual difference between your pre-MBA and post-MBA compensation. MBB produces a materially larger
            delta than Big 4 advisory, which creates compounding differences in NPV over a ten-year horizon.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            A candidate earning $80,000 before an MBA who joins McKinsey at $205,000 base has an annual salary delta
            of $125,000. The same candidate joining Deloitte Strategy & Operations at $145,000 base has a delta of
            $65,000 — a difference of $60,000 per year. Over ten years (discounted at 6%), that $60,000 annual
            difference represents approximately $440,000 in NPV. That is the fundamental financial case for
            pursuing MBB over Big 4.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            The counterargument — and it is legitimate — is access. MBB offers are concentrated at a small number
            of programs, and acceptance rates are highly competitive even at target schools. A candidate at a
            non-M7 program with a 50% scholarship pursuing Big 4 consulting may achieve better risk-adjusted
            ROI than the same candidate at an M7 at full cost targeting MBB but landing Big 4.
            See the{" "}
            <Link href="/mba-roi-scholarship" className="text-teal-400 hover:text-teal-300 transition-colors underline underline-offset-2">scholarship ROI analysis</Link>
            {" "}for that comparison.
          </p>
        </section>

        {/* Compensation comparison */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Compensation Comparison: MBB vs. Big 4 (2025)</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Post-MBA associate compensation in consulting falls into clearly distinguishable tiers. The comparison
            below reflects US-based compensation across the four major consulting tiers for MBA graduates.
          </p>
          <div className="space-y-3">
            {[
              {
                tier: "MBB (McKinsey, Bain, BCG)",
                base: "$190,000 – $215,000",
                signing: "$35,000 – $50,000",
                bonus: "$45,000 – $85,000",
                totalY1: "$270,000 – $350,000",
                color: "text-green-400",
                bar: 95,
                barColor: "bg-green-500",
              },
              {
                tier: "Tier 2 Strategy (LEK, OW, AT Kearney, Roland Berger, Strategy&)",
                base: "$160,000 – $185,000",
                signing: "$20,000 – $35,000",
                bonus: "$25,000 – $55,000",
                totalY1: "$205,000 – $275,000",
                color: "text-teal-400",
                bar: 72,
                barColor: "bg-teal-500",
              },
              {
                tier: "Big 4 Strategy (Deloitte S&O, PwC Strategy&, EY-P, KPMG)",
                base: "$130,000 – $155,000",
                signing: "$15,000 – $25,000",
                bonus: "$15,000 – $35,000",
                totalY1: "$160,000 – $215,000",
                color: "text-yellow-400",
                bar: 52,
                barColor: "bg-yellow-500",
              },
              {
                tier: "Big 4 Advisory / General Consulting",
                base: "$110,000 – $135,000",
                signing: "$10,000 – $20,000",
                bonus: "$10,000 – $25,000",
                totalY1: "$130,000 – $180,000",
                color: "text-orange-400",
                bar: 38,
                barColor: "bg-orange-500",
              },
            ].map(({ tier, base, signing, bonus, totalY1, color, bar, barColor }) => (
              <div key={tier} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <p className="text-white font-semibold text-sm">{tier}</p>
                  <p className={`${color} font-semibold text-sm`}>{totalY1} total Y1</p>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5">
                  <div className={`${barColor} h-1.5 rounded-full`} style={{ width: `${bar}%` }} />
                </div>
                <p className="text-slate-500 text-xs">Base: {base} · Signing: {signing} · Bonus: {bonus}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs">
            Source: Management Consulted 2024–2025, Glassdoor verified ranges, LinkedIn Salary. Figures reflect US domestic.
          </p>
        </section>

        {/* Break-even comparison */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Break-Even Timeline: MBB vs. Big 4 Side by Side</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The{" "}
            <Link href="/mba-break-even" className="text-teal-400 hover:text-teal-300 transition-colors underline underline-offset-2">break-even period</Link>
            {" "}for MBB is consistently 2–3 years shorter than Big 4 for candidates attending the same program at the same cost.
            Below is the direct comparison using an M7 program at full economic cost ($415,000) with 60% loan financing.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5">
            <p className="text-xs font-medium text-teal-400 uppercase tracking-widest">Assumptions: Pre-MBA $85k · M7 Total Cost $415k · 60% Loan @ 6.5% · 10yr repayment</p>
            <div className="space-y-4">
              {[
                {
                  label: "MBB Associate ($205k base)",
                  salary: "$205,000",
                  delta: "$120,000/yr",
                  netGain: "$100,200/yr",
                  breakEven: "~4.5 years",
                  irr: "21–24%",
                  npv: "+$380,000",
                  beYears: 4.5,
                  color: "text-green-400",
                  barColor: "bg-green-500",
                },
                {
                  label: "Tier 2 Strategy ($170k base)",
                  salary: "$170,000",
                  delta: "$85,000/yr",
                  netGain: "$65,200/yr",
                  breakEven: "~6.0 years",
                  irr: "14–17%",
                  npv: "+$195,000",
                  beYears: 6.0,
                  color: "text-teal-400",
                  barColor: "bg-teal-500",
                },
                {
                  label: "Big 4 Strategy ($145k base)",
                  salary: "$145,000",
                  delta: "$60,000/yr",
                  netGain: "$40,200/yr",
                  breakEven: "~7.5 years",
                  irr: "10–13%",
                  npv: "+$65,000",
                  beYears: 7.5,
                  color: "text-yellow-400",
                  barColor: "bg-yellow-500",
                },
                {
                  label: "Big 4 Advisory ($125k base)",
                  salary: "$125,000",
                  delta: "$40,000/yr",
                  netGain: "$20,200/yr",
                  breakEven: "~9.5+ years",
                  irr: "7–9%",
                  npv: "~$0 – +$30,000",
                  beYears: 9.5,
                  color: "text-orange-400",
                  barColor: "bg-orange-500",
                },
              ].map(({ label, delta, netGain, breakEven, irr, npv, beYears, color, barColor }) => (
                <div key={label} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 text-sm">
                    <span className="text-slate-300 font-medium">{label}</span>
                    <span className={`${color} text-xs font-semibold`}>{breakEven} break-even</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className={`${barColor} h-2 rounded-full`} style={{ width: `${(beYears / 10) * 100}%` }} />
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs text-slate-500">
                    <span>Delta: <span className="text-slate-400">{delta}</span></span>
                    <span>Net/yr: <span className="text-slate-400">{netGain}</span></span>
                    <span>IRR: <span className={color}>{irr}</span></span>
                  </div>
                  <p className="text-xs text-slate-500">10-yr NPV: <span className={color}>{npv}</span></p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NPV side-by-side */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">NPV and IRR: The Full Financial Picture</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The{" "}
            <Link href="/mba-roi-calculator" className="text-teal-400 hover:text-teal-300 transition-colors underline underline-offset-2">MBA ROI calculator</Link>
            {" "}computes NPV at a 6% discount rate — the approximate long-run real equity market return. Any MBA that
            generates an IRR below 6% destroys value relative to simply investing the tuition capital. The Big 4
            advisory scenario at a full-cost M7 program is uncomfortably close to this threshold.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-3">
                <p className="text-teal-400 text-xs font-medium uppercase tracking-widest">MBB Outcome</p>
                <div><p className="text-slate-500 text-xs">10-Year NPV (6% disc.)</p><p className="text-green-400 font-semibold text-lg">+$380,000</p></div>
                <div><p className="text-slate-500 text-xs">IRR</p><p className="text-green-400 font-semibold">21–24%</p></div>
                <div><p className="text-slate-500 text-xs">Break-even from graduation</p><p className="text-white font-medium">~4.5 years</p></div>
                <div><p className="text-slate-500 text-xs">Verdict</p><p className="text-green-400 text-xs">Strongly positive — excellent investment</p></div>
              </div>
              <div className="space-y-3">
                <p className="text-orange-400 text-xs font-medium uppercase tracking-widest">Big 4 Advisory Outcome</p>
                <div><p className="text-slate-500 text-xs">10-Year NPV (6% disc.)</p><p className="text-yellow-400 font-semibold text-lg">~$30,000</p></div>
                <div><p className="text-slate-500 text-xs">IRR</p><p className="text-yellow-400 font-semibold">7–9%</p></div>
                <div><p className="text-slate-500 text-xs">Break-even from graduation</p><p className="text-white font-medium">~9.5 years</p></div>
                <div><p className="text-slate-500 text-xs">Verdict</p><p className="text-yellow-400 text-xs">Marginal — only justifiable with scholarship or low-cost program</p></div>
              </div>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            These figures assume the same program cost. If the Big 4 candidate attends a lower-cost regional program
            or receives significant scholarship aid, the NPV improves substantially. The ROI gap narrows when the
            cost differential is factored in.
          </p>
        </section>

        {/* When Big 4 wins */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">When Big 4 Beats MBB on MBA ROI</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The MBB narrative dominates MBA ROI discussions, but there are specific scenarios where Big 4
            advisory produces a stronger risk-adjusted return than pursuing MBB at high cost with low probability.
          </p>
          <div className="space-y-3">
            {[
              {
                title: "Low-cost program with near-certain Big 4 placement",
                body: "A candidate at a ranked regional program (rank 15–30) with a 50% scholarship and high probability of Big 4 placement can achieve a 12–16% IRR — which is meaningfully better than the risk-adjusted IRR of an M7 at full cost targeting MBB with a 10% success probability.",
              },
              {
                title: "Part-time or Executive MBA targeting Big 4",
                body: "Part-time MBA programs, particularly at Ross, Booth, and Kellogg, feed into Big 4 advisory roles while eliminating the opportunity cost component. With tuition at $120,000–$160,000 and near-zero lost income, Big 4 advisory ROI from a part-time MBA can reach 18–22% IRR.",
              },
              {
                title: "Geographic flexibility with regional Big 4 offices",
                body: "Big 4 advisory hires from a wider range of programs and offers positions in non-coastal cities where cost of living is substantially lower. A Big 4 $145,000 salary in Dallas produces meaningfully higher purchasing power than a McKinsey $205,000 salary in New York City.",
              },
              {
                title: "Industry-specific Big 4 boutiques",
                body: "Big 4 advisory divisions in specific industries — healthcare (Deloitte's health practice), government (PwC public sector), financial services — provide deep expertise tracks that MBB generalist paths do not. For candidates with strong domain expertise, Big 4 specialist roles often offer faster advancement.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-white font-semibold text-sm">{title}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* School tier alignment */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Matching School Tier to Realistic Consulting Outcomes</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The highest-ROI strategy is to choose a program whose cost aligns with the compensation you can
            realistically expect to achieve. Paying M7 tuition for Big 4 advisory outcomes — a common scenario —
            destroys value. The{" "}
            <Link href="/mba-roi-consulting" className="text-teal-400 hover:text-teal-300 transition-colors underline underline-offset-2">MBA ROI consulting guide</Link>
            {" "}covers school-tier and placement probability in depth.
          </p>
          <div className="space-y-3">
            {[
              { school: "M7 + Top European (INSEAD)", realistic: "MBB or Tier 2 Strategy", cost: "$170,000–$250,000 tuition", note: "ROI holds for MBB outcome; tight for Big 4 at full cost" },
              { school: "Top 10–15 (Haas, Fuqua, Ross, Darden)", realistic: "Tier 2 Strategy or Big 4 Strategy", cost: "$120,000–$160,000 tuition", note: "ROI positive for Tier 2+ at these costs" },
              { school: "Ranked 15–30 (with 30–50% scholarship)", realistic: "Big 4 Strategy or advisory", cost: "$60,000–$100,000 net tuition", note: "Big 4 ROI is strong at reduced cost basis" },
              { school: "Part-time / Executive MBA", realistic: "Big 4 advisory, internal promotion", cost: "$80,000–$150,000 tuition (no opp cost)", note: "Best ROI profile for Big 4 targeting" },
            ].map(({ school, realistic, cost, note }) => (
              <div key={school} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-1">
                <p className="text-white font-semibold text-sm">{school}</p>
                <p className="text-teal-400 text-xs">Realistic outcome: {realistic}</p>
                <p className="text-slate-500 text-xs">{cost} · {note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-white/5 border border-white/10 p-10 text-center space-y-5">
          <p className="text-xs font-medium text-teal-400 uppercase tracking-widest">Model Your Numbers</p>
          <h2 className="text-2xl font-semibold tracking-tight">Calculate Big 4 vs MBB ROI for Your Situation</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Enter your actual pre-MBA salary, target consulting firm base, program cost, and loan structure.
            The calculator runs NPV, IRR, and break-even for any consulting scenario.
          </p>
          <Link
            href="/mba-roi-calculator"
            className="inline-block bg-linear-to-r from-teal-600 to-cyan-600 hover:opacity-90 transition-all px-8 py-4 rounded-xl font-medium text-white text-base shadow-[0_0_40px_rgba(20,184,166,0.3)]"
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
                <p className="text-slate-500 text-xs">MBB associate salary data →</p>
              </div>
            </Link>
            <Link href="/mba-roi-mckinsey" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">→</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">MBA ROI: McKinsey</p>
                <p className="text-slate-500 text-xs">McKinsey break-even & placement →</p>
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
            <Link href="/mba-roi-mckinsey" className="hover:text-slate-300 transition-colors">MBA ROI: McKinsey</Link>
            {" · "}
            <Link href="/mba-roi-scholarship" className="hover:text-slate-300 transition-colors">MBA Scholarship ROI</Link>
            {" · "}
            <Link href="/mba-break-even" className="hover:text-slate-300 transition-colors">MBA Break-Even</Link>
            {" · "}
            <Link href="/mba-salary-increase" className="hover:text-slate-300 transition-colors">MBA Salary Increase</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
          <p className="mt-1">Salary data sourced from GMAC surveys, school employment reports, Glassdoor, Levels.fyi, and publicly reported compensation figures. All ranges are estimates; individual outcomes vary.</p>
        </footer>

      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is the salary difference between Big 4 and MBB consulting after an MBA?", "acceptedAnswer": {"@type": "Answer", "text": "MBB (McKinsey, Bain, BCG) post-MBA associates earn $190K–$215K base salary plus a performance bonus of $20K–$40K. Big 4 strategy consulting (Deloitte S&O, PwC Strategy&, EY-Parthenon, KPMG Strategy) post-MBA associates earn $130K–$160K base. The annual salary gap is approximately $50K–$70K, compounding significantly over 5–10 years."}}, {"@type": "Question", "name": "Is Big 4 consulting worth an MBA financially?", "acceptedAnswer": {"@type": "Answer", "text": "At M7 tuition levels ($160K+), Big 4 consulting produces marginal or negative NPV without scholarship support. The $130K–$160K post-MBA salary at Big 4 generates a salary delta too small to justify $280K–$350K total economic cost. T25 program costs of $100K–$150K total produce better ROI for Big 4 targeting."}}, {"@type": "Question", "name": "How does Big 4 vs MBB affect long-term career earnings?", "acceptedAnswer": {"@type": "Answer", "text": "MBB associates who reach engagement manager/principal earn $250K–$400K at years 4–6. Partner track at MBB produces $600K–$2M+. Big 4 managers at years 4–6 earn $150K–$200K; partnership track is longer and less compensated. The lifetime earnings gap between MBB and Big 4 for top performers is $1M–$3M+ over a 20-year career."}}, {"@type": "Question", "name": "Can I get into MBB without a top MBA?", "acceptedAnswer": {"@type": "Answer", "text": "MBB recruits primarily from M7 programs. Getting into McKinsey, Bain, or BCG without an M7 MBA requires either exceptional undergraduate credentials from a target school, a PhD from a top program, or a specialized expert hire track. The MBA associate pathway from M7 is the most reliable and well-structured route for career changers."}}, {"@type": "Question", "name": "What is the break-even comparison between Big 4 and MBB paths?", "acceptedAnswer": {"@type": "Answer", "text": "At M7 tuition, MBB path breaks even in 4–5 years at $192K salary. Big 4 path at $145K salary breaks even in 8–10 years from the same program — if the break-even is positive at all. The implication: targeting Big 4 from a full-price M7 program is rarely financially rational unless supported by a significant scholarship."}}]}) }}
      />
    </main>
  )
}
