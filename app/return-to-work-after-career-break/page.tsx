import Link from "next/link"
import { pageAlternates } from "@/lib/seo"

export const metadata = {
  title: "Return to Work After Career Break: Salary Data, Penalties & Strategy (2026)",
  description:
    "How does a career break affect your career? Salary penalty data by industry and break duration, 3 re-entry strategies compared by NPV, and a step-by-step recovery framework.",
  alternates: pageAlternates("https://careerreturns.com/return-to-work-after-career-break"),
  openGraph: {
    title: "Return to Work After Career Break: Salary Data, Penalties & Strategy (2026)",
    description:
      "Career breaks cost 6–18% in salary penalty. Here's the data by industry, break duration, and the 3 re-entry strategies ranked by 10-year NPV.",
    url: "https://careerreturns.com/return-to-work-after-career-break",
    siteName: "CareerReturns",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Return to Work After Career Break: Salary Penalties & Strategy (2026)",
    description: "Salary penalty data by industry and break length. 3 re-entry paths compared by NPV and IRR.",
  },
}

const penaltyData = [
  {
    duration: "0–6 months",
    penalty: "2–4%",
    recoveryTime: "1–2 years",
    severity: "Low",
    color: "text-green-400",
    note: "Minimal impact. Most employers view this as between-jobs time. Recovery is fast in most industries.",
  },
  {
    duration: "6–12 months",
    penalty: "4–7%",
    recoveryTime: "2–3 years",
    severity: "Moderate",
    color: "text-emerald-400",
    note: "Noticeable but manageable. A clear narrative (caregiving, relocation, education) eliminates most of the penalty.",
  },
  {
    duration: "1–2 years",
    penalty: "6–10%",
    recoveryTime: "3–5 years",
    severity: "Significant",
    color: "text-amber-400",
    note: "Salary negotiation becomes harder. A returnship or reskilling credential can substantially offset this penalty.",
  },
  {
    duration: "2–3 years",
    penalty: "10–14%",
    recoveryTime: "4–6 years",
    severity: "High",
    color: "text-orange-400",
    note: "The gap is now a visible signal. Structured re-entry (returnship, reskilling, consulting project) is strongly recommended.",
  },
  {
    duration: "3+ years",
    penalty: "12–18%",
    recoveryTime: "5–8 years",
    severity: "Very High",
    color: "text-red-400",
    note: "Significant salary floor reduction at re-entry. Returnship programs or reskilling paths recover value faster than direct re-entry.",
  },
]

const industryData = [
  { industry: "Technology (Software)", returnDifficulty: "Moderate", salaryPenalty: "8–12%", recoveryPath: "Returnship or reskill", topPrograms: "Amazon, Meta, Microsoft" },
  { industry: "Investment Banking", returnDifficulty: "High", salaryPenalty: "12–18%", recoveryPath: "Returnship strongly recommended", topPrograms: "Goldman Sachs, JPMorgan" },
  { industry: "Management Consulting", returnDifficulty: "High", salaryPenalty: "10–15%", recoveryPath: "Returnship or MBA", topPrograms: "McKinsey, Deloitte" },
  { industry: "Healthcare", returnDifficulty: "Low–Moderate", salaryPenalty: "4–8%", recoveryPath: "Direct re-entry + cert update", topPrograms: "Hospital systems, Path Forward" },
  { industry: "Marketing / Brand", returnDifficulty: "Low", salaryPenalty: "5–9%", recoveryPath: "Portfolio + direct re-entry", topPrograms: "Path Forward partners" },
  { industry: "Finance / Accounting", returnDifficulty: "Moderate", salaryPenalty: "8–12%", recoveryPath: "Returnship or direct + CPA refresh", topPrograms: "Fidelity, JPMorgan, Deloitte" },
  { industry: "Engineering (Non-software)", returnDifficulty: "Moderate", salaryPenalty: "7–11%", recoveryPath: "Direct re-entry or returnship", topPrograms: "Northrop iReturn, Accenture" },
  { industry: "Human Resources / Operations", returnDifficulty: "Low", salaryPenalty: "4–7%", recoveryPath: "Direct re-entry", topPrograms: "Path Forward, Accenture" },
]

export default function ReturnToWorkAfterCareerBreakPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-emerald-600/15 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12 sm:space-y-20">

        {/* Header */}
        <header className="space-y-5">
          <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest">CareerReturns · Career Break Guide</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            Return to Work After a Career Break: The Financial Reality
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            The salary penalty is real. So is the recovery. Here&apos;s the data.
          </p>
        </header>

        {/* Jump to nav */}
        <nav className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-3">Jump to</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            <a href="#salary-penalty" className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">Salary Penalty Data</a>
            <a href="#industry-impact" className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">Industry Impact</a>
            <a href="#re-entry-paths" className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">3 Re-entry Strategies</a>
            <a href="#resume-framing" className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">Framing Your Gap</a>
          </div>
        </nav>

        {/* Short Answer */}
        <section className="space-y-4">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-8 space-y-4">
            <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest">Short Answer</p>
            <p className="text-white text-base leading-relaxed font-medium">
              A career break typically reduces re-entry salary by 6–18%, depending on gap duration and industry.
              That penalty is recoverable — but the recovery timeline ranges from 1 year to 8 years depending
              on which re-entry path you choose. The strategic decision of <em>how</em> you return matters far
              more than the fact that you left.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              A 2-year break in tech, handled through a returnship at Amazon, recovers salary parity in
              approximately 2.5 years. The same break handled through direct re-entry at a below-market offer
              takes 5–7 years. The difference in 10-year NPV between the two paths is often $40k–$80k.
              The path you choose at re-entry is one of the most financially consequential career decisions
              you will make.
            </p>
          </div>
        </section>

        {/* Salary Penalty by Duration */}
        <section id="salary-penalty" className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">The Salary Penalty: Data by Break Duration</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Career break salary penalties are well-documented in labor economics research. The penalty reflects
            two compounding effects: (1) skills depreciation during the break, and (2) employer risk-discounting
            of candidates with gaps. Both can be mitigated — but the mitigation strategy changes at different
            gap lengths.
          </p>
          <div className="space-y-3">
            {penaltyData.map((row) => (
              <div key={row.duration} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <p className="text-white font-semibold text-sm">{row.duration} break</p>
                  <div className="flex gap-3 text-xs">
                    <span className={`font-semibold ${row.color}`}>{row.penalty} salary penalty</span>
                    <span className="text-slate-500">·</span>
                    <span className="text-slate-400">{row.recoveryTime} recovery</span>
                  </div>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{row.note}</p>
              </div>
            ))}
          </div>
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-5">
            <p className="text-emerald-200 text-sm leading-relaxed">
              <span className="font-semibold text-white">Important context:</span> These penalties apply to{" "}
              <em>unaddressed</em> gaps — gaps where no bridge activity occurred and no narrative was built.
              Professionals who complete a returnship, reskilling program, or consulting project during their
              gap often eliminate the penalty entirely at re-entry.
            </p>
          </div>
        </section>

        {/* Salary penalty by industry */}
        <section id="industry-impact" className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">How Career Breaks Affect Different Industries</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The same career break affects industries differently. Technical fields with fast-moving skill sets
            (software, finance, consulting) carry higher penalties than relationship-driven or credential-stable
            fields (healthcare, HR, operations).
          </p>
          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <div className="grid grid-cols-4 gap-2 p-3 border-b border-white/10">
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wide">Industry</p>
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wide">Difficulty</p>
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wide">Salary Penalty</p>
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wide">Best Path</p>
            </div>
            {industryData.map((row, i) => (
              <div key={row.industry} className={`grid grid-cols-4 gap-2 p-3 text-xs ${i % 2 === 0 ? "" : "bg-white/[0.02]"}`}>
                <p className="text-slate-300 font-medium leading-tight">{row.industry}</p>
                <p className={`font-medium leading-tight ${
                  row.returnDifficulty === "High" ? "text-red-400" :
                  row.returnDifficulty === "Moderate" || row.returnDifficulty === "Low–Moderate" ? "text-amber-400" :
                  "text-green-400"
                }`}>{row.returnDifficulty}</p>
                <p className="text-slate-400 leading-tight">{row.salaryPenalty}</p>
                <p className="text-slate-500 leading-tight">{row.recoveryPath}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3 Pathways */}
        <section id="re-entry-paths" className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">3 Re-entry Strategies: NPV Comparison</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The re-entry decision is not binary. There are three distinct strategic paths, each with different
            risk, timeline, and NPV profiles. The right choice depends on your gap duration, industry, financial
            situation, and target company.
          </p>
          <div className="space-y-4">
            {[
              {
                path: "Path 1",
                title: "Direct Re-entry (Same Role, Same Industry)",
                irr: "Baseline",
                npv: "Baseline",
                breakeven: "Fastest (0–3 months)",
                color: "text-slate-300",
                borderColor: "border-white/10",
                pros: ["Fastest income restart", "No additional time investment", "Keeps career momentum"],
                cons: ["Lowest salary floor (gap penalty fully applied)", "Weakest negotiating position", "Higher risk of underselling your market value"],
                bestFor: "Gaps under 12 months. Strong direct referrals or networks. Industries with low technical depreciation.",
              },
              {
                path: "Path 2",
                title: "Corporate Returnship Program",
                irr: "+4–9% IRR vs. Path 1",
                npv: "+$20k–$62k 10-yr NPV",
                breakeven: "16–26 weeks",
                color: "text-emerald-400",
                borderColor: "border-emerald-500/30",
                pros: ["Higher salary floor post-conversion", "Structured support and mentoring", "Negotiating from employment, not unemployment", "Eliminates gap penalty signal"],
                cons: ["3–6 month delay to income", "Program acceptance not guaranteed", "Conversion not guaranteed (65–90% by program)"],
                bestFor: "Gaps of 1–3+ years. Target companies with known returnship programs. Professionals with strong pre-break credentials.",
              },
              {
                path: "Path 3",
                title: "Reskill + Career Pivot",
                irr: "+8–22% IRR vs. Path 1",
                npv: "+$35k–$120k 10-yr NPV",
                breakeven: "12–36 months",
                color: "text-cyan-400",
                borderColor: "border-cyan-500/30",
                pros: ["Highest ceiling for salary recovery", "Addresses skills depreciation directly", "Opens new, higher-paying career tracks"],
                cons: ["Longest time-to-income", "Program cost ($5k–$20k)", "Requires motivation and self-direction"],
                bestFor: "Gaps where industry pivot is desired. Existing skills in declining demand. High motivation to change career track.",
              },
            ].map(({ path, title, irr, npv, breakeven, color, borderColor, pros, cons, bestFor }) => (
              <div key={path} className={`bg-white/5 border ${borderColor} rounded-xl p-5 space-y-4`}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <p className="text-slate-500 text-xs font-medium uppercase tracking-wide mb-1">{path}</p>
                    <p className="text-white font-semibold text-base">{title}</p>
                  </div>
                  <div className="text-right space-y-1 shrink-0">
                    <p className={`text-xs font-semibold ${color}`}>{irr}</p>
                    <p className={`text-xs font-semibold ${color}`}>{npv}</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <p className="text-slate-500 mb-1.5 uppercase tracking-wide text-xs">Break-even</p>
                    <p className="text-slate-300">{breakeven}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 mb-1.5 uppercase tracking-wide text-xs">Advantages</p>
                    <ul className="space-y-0.5">
                      {pros.map((p) => <li key={p} className="text-emerald-400/80 flex gap-1"><span>+</span>{p}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="text-slate-500 mb-1.5 uppercase tracking-wide text-xs">Trade-offs</p>
                    <ul className="space-y-0.5">
                      {cons.map((c) => <li key={c} className="text-amber-400/80 flex gap-1"><span>–</span>{c}</li>)}
                    </ul>
                  </div>
                </div>
                <div className="border-t border-white/5 pt-3">
                  <p className="text-slate-500 text-xs"><span className="text-slate-400 font-medium">Best for: </span>{bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resume Framing */}
        <section id="resume-framing" className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Framing Your Gap: What Actually Works</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The biggest mistake career returners make is treating the gap as something to hide.
            Employers who run returnship programs — and increasingly, standard hiring managers — respond
            better to direct, brief acknowledgment followed by evidence of current capability than to
            resume formats designed to obscure the gap.
          </p>
          <div className="space-y-3">
            {[
              {
                title: "State it directly, keep it brief",
                body: "One sentence on your resume or in your cover letter: 'Career break, 2022–2024: primary caregiver for [family member].' Then stop. Do not over-explain. Move immediately to what you did to stay current and what you bring back.",
              },
              {
                title: "Lead with bridge activities",
                body: "Any activity during your gap that is professionally relevant — online courses, freelance projects, open-source contributions, volunteer board roles, consulting engagements — belongs on your resume in the gap period. It demonstrates ongoing engagement, not idleness.",
              },
              {
                title: "Target returnship-aware employers first",
                body: "Companies with active returnship programs have already built internal consensus that gap candidates are worth hiring. They are structurally easier to re-enter than companies with no returnship history. Use this to your advantage in prioritizing applications.",
              },
              {
                title: "Negotiate from your market rate, not your last salary",
                body: "Your last salary — especially if it predates a 2+ year gap — is almost certainly below current market rates due to inflation and salary growth in your industry. Use current market data (Levels.fyi, Glassdoor, industry surveys) as your anchor, not your pre-break compensation.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-white font-semibold text-sm">{title}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-10 text-center space-y-5">
          <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest">Free Calculator</p>
          <h2 className="text-2xl font-semibold tracking-tight">Model Your Career Gap Recovery</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Enter your pre-break salary, gap duration, and re-entry path. Get year-by-year recovery
            projections, NPV, and a graded comparison of all three paths.
          </p>
          <Link
            href="/career-gap-calculator"
            className="inline-block bg-linear-to-r from-emerald-600 to-teal-600 hover:opacity-90 transition-all px-8 py-4 rounded-xl font-medium text-white text-base shadow-[0_0_40px_rgba(16,185,129,0.3)]"
          >
            Use the Career Gap Calculator →
          </Link>
        </section>

        {/* Related */}
        <section className="border-t border-white/10 pt-10 mt-10">
          <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest mb-5">Related Guides & Tools</p>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link href="/return-to-work-programs" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-emerald-400 font-mono text-lg">⇄</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-emerald-300 transition-colors">Return-to-Work Programs Guide</p>
                <p className="text-slate-500 text-xs">15+ companies compared by ROI →</p>
              </div>
            </Link>
            <Link href="/returnship-roi-calculator" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-emerald-400 font-mono text-lg">Σ</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-emerald-300 transition-colors">Returnship ROI Calculator</p>
                <p className="text-slate-500 text-xs">Is a returnship better than direct apply? →</p>
              </div>
            </Link>
            <Link href="/reskilling-roi-calculator" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-emerald-400 font-mono text-lg">▲</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-emerald-300 transition-colors">Reskilling ROI Calculator</p>
                <p className="text-slate-500 text-xs">Is your bootcamp worth the cost? →</p>
              </div>
            </Link>
            <Link href="/salary-benchmark-calculator" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-emerald-400 font-mono text-lg">$</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-emerald-300 transition-colors">Salary Benchmark Calculator</p>
                <p className="text-slate-500 text-xs">Are you underpaid after your break? →</p>
              </div>
            </Link>
          </div>
        </section>

        <footer className="border-t border-white/10 pt-8 text-center text-slate-500 text-xs space-y-2">
          <p>
            <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            {" · "}
            <Link href="/career-gap-calculator" className="hover:text-slate-300 transition-colors">Career Gap Calculator</Link>
            {" · "}
            <Link href="/return-to-work-programs" className="hover:text-slate-300 transition-colors">Return-to-Work Programs</Link>
            {" · "}
            <Link href="/rebuild-work-experience-after-career-break" className="hover:text-slate-300 transition-colors">Rebuild Work Experience</Link>
            {" · "}
            <Link href="/women-returning-to-work" className="hover:text-slate-300 transition-colors">Women Returning to Work</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
          <p className="mt-1">Salary penalty data sourced from academic labor economics research, NBER studies on employment gaps, and GMAC/industry surveys. Figures represent estimates; individual outcomes vary by industry, role, and market conditions.</p>
        </footer>

      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How does a career break affect your career?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A career break typically reduces re-entry salary by 6–18% depending on gap duration and industry. Gaps under 12 months carry a 2–7% penalty with 1–3 year recovery. Gaps of 2–3 years carry a 10–14% penalty with 4–6 year recovery. The penalty reflects both skills depreciation and employer risk-discounting — both of which can be mitigated through returnship programs, reskilling, or bridge activities during the gap.",
                },
              },
              {
                "@type": "Question",
                name: "Can you return to your career after a long break?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Professionals return to careers after gaps of 5–10+ years through structured pathways including corporate returnship programs, reskilling bootcamps, and freelance/consulting bridge work. The longer the gap, the more structured the re-entry strategy needs to be. Returnship programs at companies like Amazon, Goldman Sachs, and JPMorgan are specifically designed for professionals with multi-year gaps.",
                },
              },
              {
                "@type": "Question",
                name: "What is the best way to return to work after a career break?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The best re-entry path depends on gap duration and industry. For gaps under 12 months: direct re-entry with strong network activation. For 1–2 year gaps: returnship program or targeted direct re-entry with bridge activities. For 2+ year gaps: returnship program or reskilling + career pivot. On a 10-year NPV basis, returnship programs outperform direct re-entry by $20k–$62k for most professional backgrounds, primarily because they eliminate the gap penalty and raise the salary floor.",
                },
              },
              {
                "@type": "Question",
                name: "How do you explain a career gap to employers?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "State the gap directly and briefly on your resume and in interviews — caregiving, relocation, health, or education — then pivot to any bridge activities (courses, freelance, volunteer work) and your current readiness. Do not over-explain or apologize. Employers who run returnship programs have built internal consensus that gap candidates are hirable; target these companies first.",
                },
              },
              {
                "@type": "Question",
                name: "How long does it take to recover salary after a career break?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Salary recovery after a career break takes 1–8 years depending on gap duration and re-entry path. Direct re-entry after a 2-year gap in tech typically takes 5–7 years to reach peer salary parity. The same gap handled through an Amazon or Meta returnship reduces recovery time to approximately 2–3 years. Reskilling to a higher-paying track can eliminate the penalty entirely within 1–3 years but requires upfront time and cost.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  )
}
