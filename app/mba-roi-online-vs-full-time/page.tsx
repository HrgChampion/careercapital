import Link from "next/link"
import { pageAlternates } from "@/lib/seo"

export const metadata = {
  title: "Online vs Full-Time MBA ROI (2026): Which Pays Back Faster?",
  description:
    "Online vs full-time MBA ROI compared side by side. Opportunity cost math, salary outcomes, break-even timelines, and when each format wins. See data →",
  alternates: pageAlternates("https://careerreturns.com/mba-roi-online-vs-full-time"),
}

export default function MbaRoiOnlineVsFullTimePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-indigo-600/15 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12 sm:space-y-20">

        <header className="space-y-5">
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">CareerReturns · MBA Format Comparison</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            Online MBA vs. Full-Time MBA:<br />Which Has Better ROI?
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Counterintuitively, online and part-time MBAs often produce stronger financial returns
            than full-time programs — not despite lower tuition, but because of eliminated opportunity cost.
          </p>
        </header>

        {/* The fundamental difference */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">The Fundamental Difference: Opportunity Cost</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Most comparisons between online and full-time MBAs focus on tuition. That is the wrong frame.
            Tuition is visible and easily compared. Opportunity cost is invisible and far more impactful.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            A full-time two-year MBA requires you to stop working. For someone earning $85,000 annually,
            that is $170,000 in foregone income before tuition is considered. For someone earning $120,000,
            it is $240,000. This is often the largest single cost of the MBA — not the tuition listed in
            the school's brochure. The{" "}
            <Link href="/mba-roi-calculator" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">MBA ROI calculator</Link>
            {" "}models this explicitly, which is why your starting deficit at graduation is often $300,000–$400,000, not $120,000.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            An online or part-time MBA eliminates this cost entirely. You keep working, keep earning,
            and acquire the credential over 2–3 years alongside your job. The total economic outflow
            is limited to tuition — and the{" "}
            <Link href="/mba-break-even" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">break-even period</Link>
            {" "}shrinks from 6–8 years to 2–3 years for the same salary outcome.
          </p>
        </section>

        {/* Side-by-side break-even */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Side-by-Side Break-Even Comparison</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The following comparison uses identical pre- and post-MBA salary assumptions ($80k → $110k,
            a realistic outcome for both formats in general management or operations) to isolate the
            format effect on ROI.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
              <p className="text-xs font-medium text-slate-400 uppercase tracking-widest">Full-Time MBA (Top 20)</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-slate-400">Tuition + living</span><span className="text-white">$155,000</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Opportunity cost</span><span className="text-white">$160,000</span></div>
                <div className="flex justify-between border-t border-white/10 pt-2"><span className="text-white font-medium">Total outflow</span><span className="text-red-400 font-semibold">$315,000</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Annual salary delta</span><span className="text-white">$30,000</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Annual loan payment</span><span className="text-white">−$11,000</span></div>
                <div className="flex justify-between border-t border-white/10 pt-2"><span className="text-white font-medium">Net annual benefit</span><span className="text-white font-semibold">$19,000</span></div>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                <p className="text-yellow-300 text-sm font-semibold">Break-even: ~8–9 years</p>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
              <p className="text-xs font-medium text-slate-400 uppercase tracking-widest">Online / Part-Time MBA</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-slate-400">Tuition + fees</span><span className="text-white">$48,000</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Opportunity cost</span><span className="text-green-400 font-medium">$0 (kept working)</span></div>
                <div className="flex justify-between border-t border-white/10 pt-2"><span className="text-white font-medium">Total outflow</span><span className="text-red-400 font-semibold">$48,000</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Annual salary delta</span><span className="text-white">$30,000</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Annual loan payment</span><span className="text-white">−$7,000</span></div>
                <div className="flex justify-between border-t border-white/10 pt-2"><span className="text-white font-medium">Net annual benefit</span><span className="text-white font-semibold">$23,000</span></div>
              </div>
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                <p className="text-green-400 text-sm font-semibold">Break-even: ~2 years</p>
              </div>
            </div>
          </div>
          <div className="bg-violet-500/10 border border-violet-500/20 rounded-xl p-5">
            <p className="text-violet-200 text-sm leading-relaxed">
              <span className="font-semibold text-white">Insight:</span> Identical salary outcomes.
              The online MBA breaks even roughly <span className="font-semibold text-white">6–7 years earlier</span>.
              The difference is not tuition ($107k gap) — it is the $160,000 opportunity cost that the
              full-time format imposes. Cutting tuition by 70% accounts for less than 35% of the total
              cost difference.
            </p>
          </div>
        </section>

        {/* Online MBA programs worth considering */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Online MBA Programs with Real Employer Recognition</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The online MBA market matured significantly after 2018. A small set of accredited programs
            now carry employer recognition comparable to their parent school's residential brand.
          </p>
          <div className="space-y-3">
            {[
              { school: "UNC Kenan-Flagler Online MBA", cost: "~$65,000", note: "AACSB accredited. Identical diploma to residential program. Strong nationwide employer recognition." },
              { school: "Indiana University Kelley Direct", cost: "~$62,000", note: "Consistently ranked top online MBA. Strong corporate recruiting relationships in Midwest and nationally." },
              { school: "Carnegie Mellon Tepper Online MBA", cost: "~$95,000", note: "Higher cost but strong tech and finance employer relationships. CMU brand carries in recruiting." },
              { school: "Arizona State University W. P. Carey Online", cost: "~$40,000", note: "Lowest cost of the major accredited online programs. Best ROI for candidates staying in current roles." },
              { school: "University of Illinois Gies iMBA", cost: "~$22,000", note: "Lowest cost fully accredited online MBA. Ideal for early-career credential building with minimal debt." },
            ].map(({ school, cost, note }) => (
              <div key={school} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <p className="text-white font-semibold text-sm">{school}</p>
                  <p className="text-indigo-300 font-semibold text-sm">{cost}</p>
                </div>
                <p className="text-slate-500 text-xs">{note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* When full-time still wins */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">When Full-Time Still Wins the ROI Argument</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The online MBA has stronger financial ROI in most generic scenarios. Full-time wins in
            specific conditions where the salary delta is large enough to absorb the opportunity cost.
          </p>
          <div className="space-y-3">
            {[
              { title: "You are targeting MBB consulting or bulge-bracket banking", body: "These firms recruit almost exclusively on full-time program campuses. An online MBA does not provide access to McKinsey, Bain, BCG, Goldman Sachs, or Morgan Stanley on-campus recruiting pipelines. If your goal is MBB or BB banking, the financial case for full-time is strong because the salary delta is enormous." },
              { title: "You need the career pivot that only a residential program enables", body: "Career switchers — particularly those moving into industries where they have no existing network — benefit from the two-year on-campus recruiting environment. The career services, case interview preparation, and network access are not replicable in an online format." },
              { title: "Low pre-MBA salary means low opportunity cost", body: "A candidate earning $55,000 pre-MBA loses only $110,000 in opportunity cost in a two-year program. Combined with scholarship aid at a top-20 program, the full-time financial case can be competitive with online alternatives." },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-white font-semibold text-sm">{title}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            For a full analysis of whether either format makes financial sense for your profile, read{" "}
            <Link href="/mba-worth-it" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">Is an MBA Worth It?</Link>
            {" "}and review the{" "}
            <Link href="/mba-salary-increase" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">MBA salary increase data by sector</Link>
            {" "}to set realistic post-MBA salary assumptions before modeling.
          </p>
        </section>

        <section className="rounded-2xl bg-white/5 border border-white/10 p-10 text-center space-y-5">
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">Run the Comparison</p>
          <h2 className="text-2xl font-semibold tracking-tight">Model Online vs. Full-Time ROI Side by Side</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Run the calculator twice — once with full-time cost and opportunity cost, once with online
            tuition only. The NPV difference will tell you exactly what the format choice is worth
            in present-value terms.
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
            <Link href="/mba-cost" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">$</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">MBA Cost Breakdown 2026</p>
                <p className="text-slate-500 text-xs">Full vs online program costs →</p>
              </div>
            </Link>
            <Link href="/mba-roi" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">→</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">MBA ROI Complete Guide</p>
                <p className="text-slate-500 text-xs">IRR, NPV & break-even by industry →</p>
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
            <Link href="/mba-worth-it" className="hover:text-slate-300 transition-colors">Is MBA Worth It?</Link>
            {" · "}
            <Link href="/mba-break-even" className="hover:text-slate-300 transition-colors">MBA Break-Even</Link>
            {" · "}
            <Link href="/mba-roi-europe" className="hover:text-slate-300 transition-colors">European MBA ROI</Link>
            {" · "}
            <Link href="/mba-roi-consulting" className="hover:text-slate-300 transition-colors">MBA ROI: Consulting</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
          <p className="mt-1">Salary data sourced from GMAC surveys, school employment reports, Glassdoor, Levels.fyi, and publicly reported compensation figures. All ranges are estimates; individual outcomes vary.</p>
        </footer>

      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is the ROI of an online MBA vs a full-time MBA?", "acceptedAnswer": {"@type": "Answer", "text": "Online MBAs have higher IRR in most scenarios due to dramatically lower total cost. A top online MBA (Kelley, UNC Kenan-Flagler, UT McCombs) costs $40K–$90K with zero opportunity cost. A full-time M7 MBA costs $280K–$360K plus $150K–$200K foregone salary. The online MBA produces IRR of 25–40%+ vs 18–24% for M7 full-time programs."}}, {"@type": "Question", "name": "Is an online MBA respected by employers?", "acceptedAnswer": {"@type": "Answer", "text": "Top-ranked online MBA programs from schools like Indiana Kelley, UNC, USC Marshall, and UT McCombs are respected by most employers. However, online MBAs are generally not used for first-time recruiting into MBB consulting or bulge bracket banking — those tracks require full-time on-campus program participation and structured recruiting."}}, {"@type": "Question", "name": "Can I get into consulting with an online MBA?", "acceptedAnswer": {"@type": "Answer", "text": "MBB consulting (McKinsey, Bain, BCG) does not recruit through online MBA programs. Big 4 advisory and boutique consulting firms do hire from ranked online programs. If MBB is your target, a full-time M7 program is required. If mid-market or specialized consulting is the goal, an online MBA from a top-10 ranked program is viable."}}, {"@type": "Question", "name": "What is the break-even period for an online MBA?", "acceptedAnswer": {"@type": "Answer", "text": "Top online MBA programs break even in 2–3 years due to their low cost. At $60K total cost and a $20K annual salary delta, break-even is 3 years. At a $40K salary delta, break-even is under 2 years. Online MBA ROI is typically high in percentage terms, even if nominal NPV is lower than M7 full-time programs due to smaller salary gains."}}, {"@type": "Question", "name": "Is a part-time or online MBA better than taking 2 years off for a full-time program?", "acceptedAnswer": {"@type": "Answer", "text": "For candidates who do not need career switching or do not require MBB/banking access, part-time or online programs are often financially superior. They eliminate opportunity cost, maintain current salary and career progression, and deliver the credential in 2–3 years of evenings/weekends. For career switchers or MBB targets, the full-time format is necessary."}}]}) }}
      />
    </main>
  )
}
