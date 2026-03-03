import Link from "next/link"

export const metadata = {
  title: "European MBA ROI: INSEAD, LBS & Oxford vs. US Programs (2026) | CareerCapital",
  description:
    "MBA ROI for European programs. INSEAD vs LBS vs Oxford costs, one-year format advantages, post-MBA salary in Europe, and when to choose Europe over a US M7.",
}

export default function MbaRoiEuropePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-emerald-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 py-20 space-y-20">

        <header className="space-y-5">
          <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest">CareerCapital · MBA ROI by Program Region</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            European MBA ROI:<br />INSEAD, LBS & Oxford vs. US Programs
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            European MBA programs offer a structurally different ROI profile from US programs.
            The one-year format changes the break-even math — and not everyone does the comparison correctly.
          </p>
        </header>

        {/* US vs European: key structural differences */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">The Structural Difference: One Year vs. Two</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The most important ROI factor separating European programs from US two-year MBAs is not
            tuition — it is opportunity cost. INSEAD, LBS, Oxford, Cambridge Judge, and IMD are
            primarily one-year programs. This reduces foregone salary from two years of income to one,
            cutting the opportunity cost component of the total economic cost by approximately 50%.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            For a candidate earning $90,000 pre-MBA, this difference is $90,000 in additional economic
            cost for the US two-year format — before tuition is even considered. When you{" "}
            <Link href="/mba-roi-calculator" className="text-emerald-400 hover:text-emerald-300 transition-colors underline underline-offset-2">model the full MBA ROI</Link>
            {" "}including opportunity cost, European programs often break even 18–24 months earlier than
            equivalent US programs despite comparable tuition.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
            <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest">Structural comparison</p>
            <div className="space-y-3">
              {[
                { label: "Program duration", us: "2 years", eu: "1–1.3 years (most programs)" },
                { label: "Tuition range", us: "$130k – $165k", eu: "€70k – £100k (~$75k–$125k)" },
                { label: "Opportunity cost", us: "$160k – $220k", eu: "$80k – $110k" },
                { label: "Total economic cost", us: "$300k – $380k", eu: "$175k – $240k" },
                { label: "Typical break-even", us: "5–8 years", eu: "3–6 years" },
              ].map(({ label, us, eu }) => (
                <div key={label} className="grid grid-cols-3 gap-3 text-sm">
                  <span className="text-slate-400 text-xs">{label}</span>
                  <span className="text-slate-300 text-xs text-center">{us}</span>
                  <span className="text-emerald-300 text-xs text-center font-medium">{eu}</span>
                </div>
              ))}
              <div className="grid grid-cols-3 gap-3 text-xs text-slate-500 border-t border-white/5 pt-2">
                <span />
                <span className="text-center">US (M7)</span>
                <span className="text-center text-emerald-500">European Top Programs</span>
              </div>
            </div>
          </div>
        </section>

        {/* Tuition by program */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Tuition by European Program (2025–26)</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            European MBA tuition has risen significantly over the past decade but remains below M7 levels
            at most programs. The following figures are approximate tuition-only costs; add living expenses
            of €15,000–€30,000 for the program duration.
          </p>
          <div className="space-y-3">
            {[
              { school: "INSEAD (France/Singapore, 10 months)", tuition: "€95,000 (~$105k)", note: "Dual-campus flexibility. Global alumni network. Strong consulting and finance placement." },
              { school: "London Business School (15–21 months)", tuition: "£92,000 (~$115k)", note: "Flexible duration. Strong UK and European finance recruiting. City of London proximity." },
              { school: "Oxford Saïd Business School (1 year)", tuition: "£72,000 (~$90k)", note: "Oxford brand. Strong consultingplacement in UK/Europe. Smaller class size." },
              { school: "Cambridge Judge Business School (1 year)", tuition: "£64,000 (~$80k)", note: "Cambridge brand equivalent to Oxford. Smaller program, growing placement." },
              { school: "IMD (Switzerland, 11 months)", tuition: "CHF 95,000 (~$105k)", note: "Heavily experienced-hire focus. Strongest ROI for senior career transitions." },
              { school: "IE Business School / ESADE (Spain, 1 year)", tuition: "€68,000 – €79,000 (~$75k–$87k)", note: "Iberian and Latin American network. Growing global recognition." },
            ].map(({ school, tuition, note }) => (
              <div key={school} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <p className="text-white font-semibold text-sm">{school}</p>
                  <p className="text-emerald-400 font-semibold text-sm shrink-0">{tuition}</p>
                </div>
                <p className="text-slate-500 text-xs">{note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Post-MBA outcomes in Europe */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Post-MBA Salary Outcomes in Europe</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            European{" "}
            <Link href="/mba-salary-increase" className="text-emerald-400 hover:text-emerald-300 transition-colors underline underline-offset-2">MBA salary increases</Link>
            {" "}are strong in absolute terms but lower than US MBB or banking outcomes in dollar terms. The
            comparison changes significantly when adjusted for cost of living and when total economic
            cost (which is lower in Europe) is part of the calculation.
          </p>
          <div className="space-y-3">
            {[
              { role: "Consulting (MBB — London, Paris, Amsterdam)", salary: "£85k – £110k base (~$105k–$135k)", note: "INSEAD and LBS are both strong MBB feeders in Europe. Comparable in-market prestige to M7." },
              { role: "Investment Banking (City of London)", salary: "£95k – £130k base (~$115k–$160k)", note: "LBS has strongest IB placement in Europe. BB and EB both recruit heavily." },
              { role: "Tech (European offices of US firms)", salary: "€85k – €120k base (~$90k–$130k)", note: "Lower than US tech comp but adjusted for European COL and tax structures." },
              { role: "General Management / Corp Strategy", salary: "€70k – €95k base (~$75k–$105k)", note: "Broad sector outcomes. ROI depends heavily on program cost." },
            ].map(({ role, salary, note }) => (
              <div key={role} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <p className="text-white font-semibold text-sm">{role}</p>
                  <p className="text-emerald-400 font-semibold text-sm sm:text-right">{salary}</p>
                </div>
                <p className="text-slate-500 text-xs">{note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* When to choose Europe */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">When to Choose a European Program Over US M7</h2>
          <div className="space-y-3">
            {[
              { title: "You want to work in Europe or internationally", body: "INSEAD and LBS alumni networks are more geographically distributed than US M7 networks. If your post-MBA career is in London, Paris, Dubai, or Singapore, a European program can be as valuable as a US M7 — at materially lower total cost." },
              { title: "You are mid-career and opportunity cost is high", body: "For candidates earning $120k+ pre-MBA, the one-year European format saves $120,000 in foregone income. That difference alone can shift break-even from 7 years to under 5 — a decisive financial advantage." },
              { title: "You want global consulting or finance and have competitive credentials", body: "INSEAD, LBS, and Oxford Saïd place candidates into McKinsey, BCG, and Bain London and Paris offices, and into Goldman Sachs, JPMorgan, and Barclays IB. The programs are target schools for these firms in their respective markets." },
              { title: "You do not need the US network", body: "The primary disadvantage of European programs for US-based candidates is the alumni network. If your target employers are US-headquartered and recruit primarily from US campuses, a European program is at a structural disadvantage in those specific pipelines." },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-white font-semibold text-sm">{title}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            For a full break-even comparison between program formats, see the{" "}
            <Link href="/mba-break-even" className="text-emerald-400 hover:text-emerald-300 transition-colors underline underline-offset-2">MBA break-even period analysis</Link>
            {" "}with explicit scenario modeling.
          </p>
        </section>

        <section className="rounded-2xl bg-white/5 border border-white/10 p-10 text-center space-y-5">
          <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest">Model Your Numbers</p>
          <h2 className="text-2xl font-semibold tracking-tight">Compare European vs. US MBA ROI</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Run two scenarios in the calculator — one with European program cost and one-year opportunity
            cost, one with US M7 cost and two-year opportunity cost. The difference in NPV is often larger
            than expected.
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
            <Link href="/mba-break-even" className="hover:text-slate-300 transition-colors">MBA Break-Even</Link>
            {" · "}
            <Link href="/mba-roi-online-vs-full-time" className="hover:text-slate-300 transition-colors">Online vs. Full-Time MBA</Link>
            {" · "}
            <Link href="/mba-roi-consulting" className="hover:text-slate-300 transition-colors">MBA ROI: Consulting</Link>
            {" · "}
            <Link href="/mba-roi-insead-vs-wharton" className="hover:text-slate-300 transition-colors">INSEAD vs Wharton</Link>
            {" · "}
            <Link href="/mba-roi-scholarship" className="hover:text-slate-300 transition-colors">MBA Scholarship ROI</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
        </footer>

      </div>
    </main>
  )
}
