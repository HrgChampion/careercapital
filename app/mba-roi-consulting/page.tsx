import Link from "next/link"
import { pageAlternates } from "@/lib/seo"

export const metadata = {
  title: "MBA ROI: Consulting 2026 — $192K MBB Salary & Break-Even",
  description:
    "MBA ROI for consulting. MBB associate salary data, break-even math, which schools place into McKinsey, Bain, and BCG — and when the numbers work. See data →",
  alternates: pageAlternates("https://careerreturns.com/mba-roi-consulting"),
}

export default function MbaRoiConsultingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-violet-600/15 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12 sm:space-y-20">

        <header className="space-y-5">
          <p className="text-xs font-medium text-purple-400 uppercase tracking-widest">CareerReturns · MBA ROI by Career Track</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            MBA ROI for Consulting:<br />When MBB Makes the Math Work
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Management consulting — specifically McKinsey, Bain, and BCG — produces the strongest
            MBA ROI of any career track. Here is the exact math, and the conditions that make it true.
          </p>
          <div className="flex items-center gap-3 pt-1 border-t border-white/8">
            <div className="w-7 h-7 rounded-full bg-purple-600/20 border border-purple-500/30 flex items-center justify-center shrink-0">
              <span className="text-purple-400 text-xs font-semibold">HG</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-white font-medium">Himanshu Gauba</span>
              <span className="text-slate-600 text-xs">·</span>
              <span className="text-slate-500 text-xs">Updated March 24, 2026</span>
            </div>
          </div>
        </header>

        {/* Why consulting has the best ROI */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Why Consulting Has the Strongest MBA ROI</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The{" "}
            <Link href="/mba-roi-calculator" className="text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-2">MBA ROI calculation</Link>
            {" "}depends on one number above all others: the annual salary delta between your pre-MBA and
            post-MBA earnings. Management consulting — specifically the three firms known as MBB —
            produces the largest salary delta of any MBA career track for most candidates.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            A typical consulting-track MBA candidate earns $70,000–$95,000 before the program. Upon
            joining McKinsey, Bain, or BCG as a post-MBA associate, base salary starts at $190,000–$215,000,
            with a $30,000–$50,000 signing bonus and performance bonuses that grow significantly in years
            two through four. The annual salary delta is $100,000–$130,000 — large enough to recover even
            the full economic cost of an M7 program within five to six years.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Beyond starting compensation, consulting unlocks compounding career trajectories. MBB associates
            who reach the engagement manager level (typically years 3–5) earn $250,000–$350,000 in total
            compensation. Partners at major firms earn $500,000–$1,000,000+. And the exit opportunities
            from MBB — private equity, corporate strategy, startup C-suite roles — are among the most
            valuable in business. The MBA's financial return is strongest when modeled over a full 10-year
            horizon that includes this trajectory, not just the first-year salary.
          </p>
        </section>

        {/* Compensation by firm tier */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Consulting Compensation by Firm Tier</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Not all consulting roles produce equivalent{" "}
            <Link href="/mba-salary-increase" className="text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-2">MBA salary increases</Link>.
            {" "}The spread between MBB and second-tier consulting is significant enough to affect break-even
            by two to three years.
          </p>
          <div className="space-y-3">
            {[
              { tier: "MBB (McKinsey, Bain, BCG)", base: "$190k – $215k", bonus: "$30k – $50k signing", note: "Access concentrated at M7. Campus acceptance rates below 15% even for enrolled students." },
              { tier: "Tier 2 Strategy (LEK, OW, AT Kearney, Roland Berger)", base: "$165k – $185k", bonus: "$20k – $35k signing", note: "Broader school recruiting. Strong ROI with lower cost programs." },
              { tier: "Big 4 Advisory (Deloitte S&O, PwC Strategy&, KPMG, EY)", base: "$130k – $155k", bonus: "$15k – $25k", note: "Wide recruiting footprint. Best fit for regional or part-time MBA ROI." },
              { tier: "Boutique / Specialist Consulting", base: "$110k – $145k", bonus: "Varies", note: "Industry-specific expertise often matters more than MBA prestige here." },
            ].map(({ tier, base, bonus, note }) => (
              <div key={tier} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <p className="text-white font-semibold text-sm">{tier}</p>
                  <p className="text-purple-300 font-semibold text-sm">{base}</p>
                </div>
                <p className="text-slate-500 text-xs">{bonus} · {note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Break-even math */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Break-Even Math: MBB Consulting Track</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The{" "}
            <Link href="/mba-break-even" className="text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-2">MBA break-even calculation</Link>
            {" "}for a consulting-track candidate is among the most favorable of any MBA career path.
            Here is the full model:
          </p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5">
            <p className="text-xs font-medium text-purple-400 uppercase tracking-widest">Scenario: M7 → McKinsey Associate</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="space-y-3">
                <div><p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Pre-MBA Salary</p><p className="text-white font-medium">$85,000/yr</p></div>
                <div><p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Post-MBA Base</p><p className="text-white font-medium">$200,000/yr</p></div>
                <div><p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Annual Delta</p><p className="text-green-400 font-semibold">+$115,000/yr</p></div>
              </div>
              <div className="space-y-3">
                <div><p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Tuition + Living</p><p className="text-white font-medium">$245,000</p></div>
                <div><p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Opportunity Cost</p><p className="text-white font-medium">$170,000</p></div>
                <div><p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Total Outflow</p><p className="text-red-400 font-semibold">$415,000</p></div>
              </div>
            </div>
            <div className="border-t border-white/10 pt-4 space-y-2">
              <p className="text-slate-400 text-xs leading-relaxed">
                Loan: $128k at 6.5%, 10yr → ~$17,300/yr payment. Net annual benefit: $115k − $17k = $98k.
                At $98k net per year against a $415k starting deficit, cumulative cash flow turns positive
                in approximately <span className="text-green-400 font-semibold">4.7 years</span> after graduation.
                IRR: approximately <span className="text-green-400 font-semibold">21–23%</span>.
                NPV (at 6% discount rate): <span className="text-green-400 font-semibold">strongly positive</span>.
              </p>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            The signing bonus alone — $30,000–$50,000 — covers nearly two years of loan payments in the
            first month after joining. This accelerates break-even by roughly 6–8 months relative to
            the base model above.
          </p>
        </section>

        {/* Which schools place into MBB */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Which Schools Actually Place into MBB</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The consulting ROI case is heavily conditional on school tier. MBB recruiting is not evenly
            distributed. Understanding placement rates before selecting a program is essential — the ROI
            math above only holds if you actually land an MBB offer.
          </p>
          <div className="space-y-3">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
              <p className="text-white font-semibold text-sm">M7 Programs (HBS, Wharton, Booth, Kellogg, Columbia, Sloan, Tuck)</p>
              <p className="text-slate-400 text-xs leading-relaxed">
                15–30% of the consulting-focused class typically receives MBB offers. All three firms recruit
                on-campus at all seven schools. Acceptance rates in on-campus rounds are below 15% even for
                strong candidates. The M7 label is a necessary but not sufficient condition.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
              <p className="text-white font-semibold text-sm">Top 10–15 (Haas, Fuqua, Darden, Yale SOM, Ross, Stern)</p>
              <p className="text-slate-400 text-xs leading-relaxed">
                MBB recruiting is present but lighter. Offers are possible but require stronger
                differentiation. Tier 2 strategy firms and Big 4 advisory are more reliable targets
                from these programs. The ROI case works best when tier 2 placement is the realistic base case.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
              <p className="text-white font-semibold text-sm">Outside Top 15</p>
              <p className="text-slate-400 text-xs leading-relaxed">
                MBB on-campus recruiting is largely absent. Off-cycle and experienced hire processes exist
                but are highly competitive. The consulting ROI case at non-target programs rests almost
                entirely on Big 4 advisory or boutique placements — which produce a meaningfully smaller
                salary delta and longer{" "}
                <Link href="/mba-break-even" className="text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-2">break-even period</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* When consulting ROI fails */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">When the Consulting ROI Case Fails</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The consulting track produces strong MBA ROI in a specific set of conditions. Outside those
            conditions, the math deteriorates quickly.
          </p>
          <div className="space-y-3">
            {[
              { title: "You don't get an MBB offer", body: "Attending a top program with a consulting goal and landing a Big 4 role produces a materially different NPV than the MBB scenario. Model the realistic base case, not the best case." },
              { title: "High pre-MBA salary in consulting", body: "Senior consultants at Big 4 or tier-2 firms earning $120k+ before an MBA face a smaller delta when moving to MBB associate. The ROI case is weaker for lateral moves within consulting than for career switchers." },
              { title: "Leaving consulting quickly", body: "MBB association salaries step up significantly in years 2–4. Analysts who leave at year two for non-finance roles abandon the compounding salary trajectory that makes the financial case strongest." },
              { title: "Non-M7 with full debt", body: "A fully financed regional program targeting Big 4 advisory typically produces an IRR in the 8–10% range — marginal. Factor scholarship aid into any comparison." },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-white font-semibold text-sm">{title}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5-year comp trajectory */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">McKinsey, BCG & Bain: 5-Year Compensation Trajectory</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The financial case for consulting strengthens significantly when modeled beyond year one. MBB
            associates who stay on the partnership track see compensation roughly double within five years —
            a trajectory that compresses effective break-even and dramatically increases 10-year NPV.
          </p>
          <div className="space-y-3">
            {[
              { level: "Post-MBA Associate", timeline: "Year 0–2", base: "$195k–$210k", bonus: "$45k–$85k", total: "$240k–$295k", color: "text-slate-300" },
              { level: "Engagement Manager", timeline: "Year 2–4", base: "$250k–$280k", bonus: "$70k–$120k", total: "$320k–$400k", color: "text-purple-300" },
              { level: "Associate Principal / Project Leader", timeline: "Year 4–6", base: "$300k–$380k", bonus: "$100k–$180k", total: "$400k–$560k", color: "text-violet-300" },
              { level: "Principal / Associate Director", timeline: "Year 6–8", base: "$380k–$500k", bonus: "$140k–$250k", total: "$520k–$750k", color: "text-indigo-300" },
              { level: "Partner / Director", timeline: "Year 8+", base: "$500k–$800k", bonus: "$300k–$700k", total: "$800k–$1.5M+", color: "text-emerald-400" },
            ].map(({ level, timeline, base, bonus, total, color }) => (
              <div key={level} className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <p className="text-white font-semibold text-sm">{level}</p>
                  <p className={`${color} font-semibold text-sm`}>{total}</p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div><p className="text-slate-500 mb-0.5">Timeline</p><p className="text-slate-400">{timeline}</p></div>
                  <div><p className="text-slate-500 mb-0.5">Base</p><p className="text-slate-300">{base}</p></div>
                  <div><p className="text-slate-500 mb-0.5">Bonus</p><p className="text-slate-300">{bonus}</p></div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            A candidate who joins McKinsey at $240,000 total comp and reaches Partner by year 8 at $1M+ total
            compensation has a 10-year IRR that far exceeds the first-year break-even model. The consulting MBA
            ROI case is best understood as a <span className="text-purple-300">trajectory investment</span>,
            not a starting salary arbitrage. Only 15–20% of associates reach partner — but even MBB exits
            at the Engagement Manager level into PE, corporate strategy, or startups at $200,000–$350,000 base.
          </p>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-white/5 border border-white/10 p-10 text-center space-y-5">
          <p className="text-xs font-medium text-purple-400 uppercase tracking-widest">Model Your Numbers</p>
          <h2 className="text-2xl font-semibold tracking-tight">Calculate Your Consulting Track MBA ROI</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Enter your pre-MBA salary, expected MBB or consulting base, total program cost, and loan
            structure. Get NPV, IRR, and your personal break-even date.
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
            <Link href="/mba-roi-mckinsey" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">→</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">MBA ROI: McKinsey</p>
                <p className="text-slate-500 text-xs">MBB associate salary & placement →</p>
              </div>
            </Link>
            <Link href="/mba-roi-big4-vs-mbb" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">≈</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">Big 4 vs MBB ROI</p>
                <p className="text-slate-500 text-xs">When Big 4 actually wins →</p>
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
            <Link href="/mba-salary-increase" className="hover:text-slate-300 transition-colors">MBA Salary Increase</Link>
            {" · "}
            <Link href="/mba-break-even" className="hover:text-slate-300 transition-colors">MBA Break-Even</Link>
            {" · "}
            <Link href="/mba-roi-investment-banking" className="hover:text-slate-300 transition-colors">MBA ROI: Banking</Link>
            {" · "}
            <Link href="/mba-roi-tech" className="hover:text-slate-300 transition-colors">MBA ROI: Tech</Link>
            {" · "}
            <Link href="/mba-roi-mckinsey" className="hover:text-slate-300 transition-colors">MBA ROI: McKinsey</Link>
            {" · "}
            <Link href="/mba-roi-big4-vs-mbb" className="hover:text-slate-300 transition-colors">Big 4 vs MBB</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
          <p className="mt-1">Salary data sourced from GMAC surveys, school employment reports, Glassdoor, Levels.fyi, and publicly reported compensation figures. All ranges are estimates; individual outcomes vary.</p>
        </footer>

      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is the post-MBA salary at McKinsey, Bain, and BCG?", "acceptedAnswer": {"@type": "Answer", "text": "MBB (McKinsey, Bain, BCG) associate base salaries are $190K–$192K. Total first-year compensation including performance bonus and signing bonus is $230K–$250K. Salary increases approximately 15–20% per year at MBB for associates who perform above expectations."}}, {"@type": "Question", "name": "Which MBA programs place most into MBB consulting?", "acceptedAnswer": {"@type": "Answer", "text": "Harvard Business School, Wharton, Booth, Kellogg, MIT Sloan, and Columbia Business School place the most students into MBB. HBS and Wharton place 30–40% of their classes into consulting. Non-M7 schools have dramatically lower MBB placement rates — often below 5%."}}, {"@type": "Question", "name": "Is an MBA required to work at McKinsey or BCG?", "acceptedAnswer": {"@type": "Answer", "text": "An MBA is not required — MBB also recruits PhD holders, medical doctors, and experienced hires. However, the MBA associate track is the primary structured entry point for career switchers. Without an M7 MBA and strong case interview preparation, entry to MBB is extremely difficult for career changers."}}, {"@type": "Question", "name": "What is the MBA break-even period for consulting?", "acceptedAnswer": {"@type": "Answer", "text": "An MBA targeting MBB consulting breaks even in approximately 4.2 years. At $192K base + $50K bonus, the salary delta over a typical $90K pre-MBA salary is $152K per year. Against a total economic cost of $280K–$350K (tuition + foregone income), break-even occurs around year 4–5."}}, {"@type": "Question", "name": "Is an MBA for consulting worth it at Big 4 vs MBB?", "acceptedAnswer": {"@type": "Answer", "text": "The salary gap between MBB and Big 4 (Deloitte, PwC, EY, KPMG) is approximately $50K–$70K per year. An MBA ROI calculation targeting Big 4 produces a positive NPV at M7 tuition only with scholarship support. Without a scholarship, the Big 4 consulting track rarely justifies M7 economics on a pure financial basis."}}]}) }}
      />
    </main>
  )
}
