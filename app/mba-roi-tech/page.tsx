import Link from "next/link"

export const metadata = {
  title: "MBA ROI in Tech: Product Management, FAANG Pay & 2026 Reality | CareerReturns",
  description:
    "Is an MBA worth it for tech in 2026? PM salaries, RSU comp, the post-2022 recruiting shift, and why high pre-MBA tech salaries make the ROI math hard.",
}

export default function MbaRoiTechPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-blue-600/15 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12 sm:space-y-20">

        <header className="space-y-5">
          <p className="text-xs font-medium text-blue-400 uppercase tracking-widest">CareerReturns · MBA ROI by Career Track</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            MBA ROI in Tech:<br />The 2026 Reality Check
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Tech was the most popular MBA career track from 2018–2022. The landscape shifted sharply
            after the 2022–2023 layoff cycle. Here is an honest look at what the numbers show now.
          </p>
        </header>

        {/* The changed landscape */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">What Changed After 2022</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Between 2018 and 2021, major tech companies aggressively recruited MBA product managers
            and strategy candidates on campus at M7 programs. Google, Meta, Amazon, Microsoft, and
            Apple had visible on-campus presences and hired dozens of MBAs per recruiting cycle.
            Post-MBA PM salaries at FAANG-tier firms routinely exceeded $200,000 in base, with RSU
            grants worth $150,000–$300,000 annually — total comp that made the{" "}
            <Link href="/mba-roi-calculator" className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-2">MBA ROI math</Link>
            {" "}extremely favorable.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            That recruiting environment does not exist in the same form today. Following mass layoffs
            at every major tech company between late 2022 and 2024, campus MBA recruiting at FAANG-tier
            firms contracted sharply. Headcount targets dropped, hiring timelines extended, and the
            MBA-to-PM pipeline became significantly more competitive. Many MBA candidates who would
            have received FAANG offers in 2021 are now targeting Series B–D companies or adjacent roles.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            This matters for ROI modeling because the expected post-MBA salary — the key input to any
            <Link href="/mba-break-even" className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-2"> break-even calculation</Link>
            {" "}— should reflect the current recruiting environment, not 2021 peak conditions.
          </p>
        </section>

        {/* Tech MBA compensation */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Tech MBA Compensation in 2026</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Compensation at major tech companies remains high in absolute terms. The issue for{" "}
            <Link href="/mba-salary-increase" className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-2">MBA salary increase</Link>
            {" "}modeling is not the post-MBA salary — it is the salary delta relative to where tech professionals start.
          </p>
          <div className="space-y-3">
            {[
              { role: "Senior PM — FAANG (Google, Meta, Apple)", base: "$195k – $230k", equity: "$150k – $300k/yr RSUs", note: "Total comp: $350k–$550k+. Competitive hiring; most MBAs enter at APM or PM level." },
              { role: "PM — Tier-2 Tech (Stripe, Airbnb, Uber, Lyft)", base: "$175k – $210k", equity: "$100k – $200k/yr RSUs", note: "Comparable comp. Often more MBA recruiting than FAANG post-2022." },
              { role: "Product Strategy / Corp Dev — Big Tech", base: "$160k – $185k", equity: "$80k – $150k/yr RSUs", note: "MBA recruiting more stable than PM. Less competitive, slightly lower base." },
              { role: "PM — Series B/C Startups", base: "$140k – $175k", equity: "Options (illiquid, high variance)", note: "Broader hiring. Comp is lower short-term; equity upside is speculative." },
            ].map(({ role, base, equity, note }) => (
              <div key={role} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <p className="text-white font-semibold text-sm">{role}</p>
                  <p className="text-blue-300 font-semibold text-sm shrink-0">{base}</p>
                </div>
                <p className="text-slate-500 text-xs">{equity} · {note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The core problem: high pre-MBA tech salaries */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">The Core Problem: Pre-MBA Tech Salaries</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The MBA ROI case in tech is structurally harder than consulting or banking because of where
            tech candidates typically start. A software engineer at a major tech company earns
            $150,000–$220,000 in total compensation before an MBA. A senior SWE at FAANG can earn
            $250,000–$400,000+.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            When that person transitions to a post-MBA PM role at $200,000 base plus $200,000 in RSUs
            ($400,000 total), the salary delta is <em>small or negative</em> on total compensation — and
            the ROI case collapses. Even at $500,000 total comp post-MBA, the opportunity cost of
            leaving a $350,000 pre-MBA role means the delta driving the return is only $150,000/year —
            half of what a career-switching consultant gets.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
              <p className="text-slate-500 text-xs uppercase tracking-wide">Career Switcher into Tech</p>
              <p className="text-white font-medium text-sm">$75k → $220k total comp</p>
              <p className="text-blue-400 text-sm font-semibold">+$145k delta</p>
              <p className="text-slate-400 text-xs">Strong positive NPV. MBA unlocks the tech sector entirely.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
              <p className="text-slate-500 text-xs uppercase tracking-wide">SWE Transitioning to PM</p>
              <p className="text-white font-medium text-sm">$280k TC → $380k TC</p>
              <p className="text-yellow-400 text-sm font-semibold">+$100k delta</p>
              <p className="text-slate-400 text-xs">Marginal ROI at best. Two-year income gap of $560k makes break-even extremely long.</p>
            </div>
          </div>
        </section>

        {/* When tech MBA makes sense */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">When a Tech MBA Makes Financial Sense</h2>
          <div className="space-y-3">
            {[
              { title: "You are switching from outside tech into a PM or strategy role", body: "If your pre-MBA career is in consulting, finance, non-profit, healthcare, or government, and your goal is a tech company PM role, the MBA is often the most direct path — and the delta justifies the cost." },
              { title: "You are targeting product strategy or corporate development, not PM", body: "Strategy and corp dev roles at tech companies recruit MBAs more consistently than PM roles post-2022. The comp is slightly lower, but recruiting access is meaningfully more reliable." },
              { title: "You are doing a part-time or online MBA while staying in your tech role", body: "If you can keep your current tech salary while completing an accredited program, the opportunity cost goes to zero and the ROI math improves dramatically. See the full comparison in our guide to MBA ROI: online vs. full-time." },
              { title: "You want to transition from individual contributor to general management", body: "Engineers targeting VP of Product or Director of Strategy — roles that require cross-functional credibility — sometimes find the MBA accelerates that transition in large orgs. This is a career trajectory argument, not a pure salary argument." },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-white font-semibold text-sm">{title}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            The tech MBA ROI case is strongest for career switchers. It is weakest for high-earning
            technical professionals making a lateral move. If you are in the latter category, read our
            analysis of{" "}
            <Link href="/mba-worth-it" className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-2">when an MBA is not worth it</Link>
            {" "}before modeling optimistic assumptions.
          </p>
        </section>

        <section className="rounded-2xl bg-white/5 border border-white/10 p-10 text-center space-y-5">
          <p className="text-xs font-medium text-blue-400 uppercase tracking-widest">Model Your Numbers</p>
          <h2 className="text-2xl font-semibold tracking-tight">Calculate Your Tech Track MBA ROI</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Use your actual pre-MBA total compensation (not just base) and your realistic expected post-MBA
            total comp. The salary delta is what drives everything.
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
            <Link href="/mba-roi-consulting" className="hover:text-slate-300 transition-colors">MBA ROI: Consulting</Link>
            {" · "}
            <Link href="/mba-roi-investment-banking" className="hover:text-slate-300 transition-colors">MBA ROI: Banking</Link>
            {" · "}
            <Link href="/mba-roi-online-vs-full-time" className="hover:text-slate-300 transition-colors">Online vs. Full-Time MBA</Link>
            {" · "}
            <Link href="/mba-roi-engineers" className="hover:text-slate-300 transition-colors">MBA ROI: Engineers</Link>
            {" · "}
            <Link href="/mba-roi-scholarship" className="hover:text-slate-300 transition-colors">MBA Scholarship ROI</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
        </footer>

      </div>
    </main>
  )
}
