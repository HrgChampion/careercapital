import Link from "next/link"
import { pageAlternates } from "@/lib/seo"

export const metadata = {
  title: "How to Rebuild Work Experience After a Career Break (2026 ROI Data)",
  description:
    "6 proven paths to rebuild work experience after a career break — with ROI data. Freelance, bootcamp, returnship, consulting, volunteer, open source compared by cost, time, and salary recovery.",
  alternates: pageAlternates("https://careerreturns.com/rebuild-work-experience-after-career-break"),
  openGraph: {
    title: "How to Rebuild Work Experience After a Career Break (2026 ROI Data)",
    description:
      "Which bridge path has the best ROI? Freelance consulting, bootcamps, returnships, volunteer board roles — compared by time, cost, and 10-year salary recovery impact.",
    url: "https://careerreturns.com/rebuild-work-experience-after-career-break",
    siteName: "CareerReturns",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rebuild Work Experience After a Career Break: ROI Data (2026)",
    description: "Freelance vs. bootcamp vs. returnship vs. consulting project — which rebuilds your career fastest?",
  },
}

const paths = [
  {
    rank: "01",
    path: "Freelance / Independent Consulting",
    cost: "$0–$500",
    timeToSignal: "1–3 months",
    salaryRecoveryBoost: "High — eliminates employer risk signal",
    industries: "All — especially tech, finance, marketing, operations",
    verdictColor: "text-green-400",
    verdict: "Highest ROI",
    details: "Freelance or consulting projects directly address the employer concern: 'Can this person still do the work?' Even 1–2 projects completed during your gap, listed on your resume with client name, scope, and outcome, converts a passive gap into active experience. The signal is strong because it shows initiative and current capability simultaneously.",
    resumeAngle: "List as: 'Independent Consultant, [Your Specialty], [Date Range]. Delivered [project] for [client type], resulting in [outcome].' No need to name clients if confidential.",
  },
  {
    rank: "02",
    path: "Corporate Returnship Program",
    cost: "$0 (paid stipend of $2,500–$4,500/week)",
    timeToSignal: "10–18 weeks",
    salaryRecoveryBoost: "Very High — eliminates gap signal + raises salary floor",
    industries: "Tech, finance, consulting, defense, fintech",
    verdictColor: "text-green-400",
    verdict: "Best Full Recovery",
    details: "A returnship does not just rebuild work experience — it converts your gap into employment. You re-enter as a current employee negotiating from strength, not a candidate negotiating from a gap. The 75% average conversion rate means 3 in 4 returnship participants receive a full-time offer at salaries $20k–$60k above typical direct re-entry offers.",
    resumeAngle: "List as: 'Amazon Returnship Program, SDE II, [Date]. Full-time offer received.' This is the strongest possible gap signal correction.",
  },
  {
    rank: "03",
    path: "Bootcamp / Certificate Program",
    cost: "$5,000–$20,000",
    timeToSignal: "3–9 months",
    salaryRecoveryBoost: "High — if pivoting to higher-paying track. Moderate if staying in same track.",
    industries: "Technology, data science, product management, UX design",
    verdictColor: "text-emerald-400",
    verdict: "Strong ROI (tech/data pivots)",
    details: "A bootcamp has a specific use case: when your pre-break skills have depreciated or you are pivoting to a higher-paying technical role. A full-stack bootcamp costs $12,000–$17,000 and takes 12–24 weeks. If it enables a $30k salary increase, the break-even is under 1 year and 10-year NPV is $200k+. If you are returning to the same role where your skills are current, a bootcamp is not the right tool.",
    resumeAngle: "List prominently under Education + Skills. Include any capstone projects with GitHub links or deployed demos — this is the credential that converts.",
  },
  {
    rank: "04",
    path: "Volunteer Board / Nonprofit Leadership Role",
    cost: "$0",
    timeToSignal: "3–6 months",
    salaryRecoveryBoost: "Moderate — strong signal for leadership roles, weaker for technical roles",
    industries: "Management, operations, HR, marketing, finance, nonprofit",
    verdictColor: "text-amber-400",
    verdict: "Good for Leadership Track",
    details: "Serving as a board member, treasurer, marketing lead, or committee chair for a nonprofit demonstrates leadership, strategic thinking, and ongoing professional engagement. It is most effective for professionals targeting management or executive roles where judgment and stakeholder management are the core skills. It is less effective for technical individual contributor roles where hands-on execution matters more.",
    resumeAngle: "List as: 'Board Member / Treasurer, [Organization], [Date Range]. Led [initiative], managed [$X] budget, [specific outcome].' Treat it as a real job on your resume — because it is.",
  },
  {
    rank: "05",
    path: "Part-time Bridge Role (Contract or Temp)",
    cost: "$0 (generates income $25–$80/hr)",
    timeToSignal: "1–4 months",
    salaryRecoveryBoost: "Moderate — fills gap on resume, income helps but salary floor still lower",
    industries: "All industries with contract/temp markets",
    verdictColor: "text-amber-400",
    verdict: "Good Gap Filler",
    details: "Contract and temp roles in your target field fill the resume gap with paid employment and keep skills current. They are particularly effective in industries with active contract markets: technology (contract SDE, QA, data), finance (contract analyst, compliance), and healthcare (per-diem clinical). The limitation is that contract roles rarely lead to the salary level of a permanent role — they bridge the gap but do not accelerate past it.",
    resumeAngle: "List as: '[Role], Contract, [Company/Agency], [Date Range].' This is indistinguishable from permanent employment on a resume scan — it represents real work experience.",
  },
  {
    rank: "06",
    path: "Open Source / Public Portfolio Projects",
    cost: "$0–$200",
    timeToSignal: "1–6 months",
    salaryRecoveryBoost: "High for technical roles — low for non-technical roles",
    industries: "Software engineering, data science, machine learning, product design",
    verdictColor: "text-cyan-400",
    verdict: "Best for Technical Roles",
    details: "For software engineers and data scientists, a public GitHub profile with active contributions and completed projects is more persuasive than a resume explanation. An engineer who contributed to 3 open-source projects during a 2-year gap has demonstrably current skills. Pair this with 1–2 personal projects with real users or demonstrable results — deployed apps, datasets, or published models — and the technical gap signal is effectively neutralized.",
    resumeAngle: "Include a GitHub/portfolio URL in your resume header. List significant projects under a 'Projects' section with: '[Project Name], [Technology Stack], [Impact or Users].' Link to deployed version or demo.",
  },
]

export default function RebuildWorkExperiencePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-violet-600/15 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12 sm:space-y-20">

        {/* Header */}
        <header className="space-y-5">
          <p className="text-xs font-medium text-violet-400 uppercase tracking-widest">CareerReturns · Work Experience Guide</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            How to Rebuild Work Experience After a Career Break
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            6 paths ranked by ROI — not just career advice.
          </p>
        </header>

        {/* Short Answer */}
        <section className="space-y-4">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-8 space-y-4">
            <p className="text-xs font-medium text-violet-400 uppercase tracking-widest">The Core Problem</p>
            <p className="text-white text-base leading-relaxed font-medium">
              Employers do not primarily penalize career breaks because of missing skills — they penalize them
              because of missing <em>evidence</em> of continued capability. The most effective bridge strategies
              address that evidence problem directly: they create recent, verifiable, professional work that
              answers the implicit question every hiring manager asks: &ldquo;Can this person still do the job?&rdquo;
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              The good news: the cost to create that evidence is low. A freelance project completed in 6 weeks,
              a returnship application submitted in October, or a public project deployed before your job search
              begins — any of these substantially reduces the 6–18% salary penalty that unaddressed career
              gaps carry. The question is which path has the best ROI for your specific situation.
            </p>
          </div>
        </section>

        {/* Why Experience > Skills */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Why Work Experience Gaps Hurt More Than Skill Gaps</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Hiring decisions are made under uncertainty. When a hiring manager evaluates a candidate with a 2-year
            gap, they face two distinct concerns:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
              <p className="text-amber-400 font-semibold text-sm">Skill depreciation (addressable)</p>
              <p className="text-slate-400 text-xs leading-relaxed">
                Technical skills do depreciate — new frameworks, updated processes, changed regulations. But this is
                addressable through targeted learning. A 2-week online course or a side project can credibly demonstrate
                currency. Most hiring managers understand this.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
              <p className="text-red-400 font-semibold text-sm">Uncertainty about motivation (harder to address)</p>
              <p className="text-slate-400 text-xs leading-relaxed">
                The deeper concern is not skills — it is: &ldquo;Did something happen that I should know about? Will this
                person last 12 months?&rdquo; Recent professional activity, even unpaid, directly counters this signal.
                It demonstrates initiative and engagement that a skills update alone cannot.
              </p>
            </div>
          </div>
          <div className="bg-violet-500/10 border border-violet-500/20 rounded-xl p-5">
            <p className="text-violet-200 text-sm leading-relaxed">
              <span className="font-semibold text-white">Key insight:</span> Bridge activities are most valuable when they are
              visible and verifiable. A freelance project with a named client, a public GitHub repository, a nonprofit
              board position with a real organization — these are evidence. A self-study course certificate is less
              compelling because it requires no external validation. Prioritize activities that produce artifacts someone
              else can observe.
            </p>
          </div>
        </section>

        {/* ROI Summary Table */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">6 Paths Compared: At a Glance</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <div className="grid grid-cols-5 gap-2 p-3 border-b border-white/10">
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wide col-span-2">Path</p>
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wide">Cost</p>
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wide">Time to Signal</p>
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wide">Recovery Impact</p>
            </div>
            {paths.map((p, i) => (
              <div key={p.path} className={`grid grid-cols-5 gap-2 p-3 text-xs ${i % 2 === 0 ? "" : "bg-white/[0.02]"}`}>
                <div className="col-span-2 flex items-center gap-2">
                  <span className={`font-semibold shrink-0 ${p.verdictColor}`}>{p.rank}</span>
                  <p className="text-slate-300 font-medium leading-tight">{p.path}</p>
                </div>
                <p className="text-slate-400 leading-tight">{p.cost}</p>
                <p className="text-slate-400 leading-tight">{p.timeToSignal}</p>
                <p className={`font-medium leading-tight ${p.verdictColor}`}>{p.verdict}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Path Breakdowns */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Detailed Path Analysis</h2>
          <div className="space-y-5">
            {paths.map(({ rank, path, cost, timeToSignal, salaryRecoveryBoost, industries, verdictColor, verdict, details, resumeAngle }) => (
              <div key={path} className="bg-white/5 border border-white/10 rounded-xl p-5 sm:p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div className="flex items-start gap-3">
                    <p className={`font-mono text-sm font-bold shrink-0 pt-0.5 ${verdictColor}`}>{rank}</p>
                    <p className="text-white font-semibold text-base">{path}</p>
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 whitespace-nowrap self-start ${verdictColor}`}>
                    {verdict}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs border-t border-white/5 pt-3">
                  <div>
                    <p className="text-slate-500 mb-0.5">Cost</p>
                    <p className="text-slate-300">{cost}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 mb-0.5">Time to Signal</p>
                    <p className="text-slate-300">{timeToSignal}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-slate-500 mb-0.5">Best Industries</p>
                    <p className="text-slate-400">{industries}</p>
                  </div>
                </div>
                <div className="border-t border-white/5 pt-3">
                  <p className="text-slate-500 text-xs mb-0.5">Recovery Impact</p>
                  <p className={`text-xs font-medium ${verdictColor}`}>{salaryRecoveryBoost}</p>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed border-t border-white/5 pt-3">{details}</p>
                <div className="bg-white/[0.03] rounded-lg p-3 border border-white/5">
                  <p className="text-slate-500 text-xs mb-1 font-medium uppercase tracking-wide">Resume Framing</p>
                  <p className="text-slate-400 text-xs leading-relaxed">{resumeAngle}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Combining Paths */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Combining Paths: The Highest-ROI Approach</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The most effective re-entry strategies combine multiple bridge activities. Each one addresses a
            different employer concern:
          </p>
          <div className="space-y-3">
            {[
              {
                combo: "Freelance project + Returnship application",
                why: "The freelance project demonstrates current capability and fills the gap immediately. The returnship application targets the highest-salary re-entry path. Even if the returnship is rejected, you re-enter with recent work experience and a much stronger negotiating position.",
                npv: "+$35k–$75k NPV vs. direct re-entry with no bridge",
              },
              {
                combo: "Bootcamp + Open source portfolio + Direct apply",
                why: "For technical career pivots, this is the highest-ceiling combination. The bootcamp provides the credential, the open source portfolio provides verifiable skill evidence, and direct applications target the new field. Typically takes 6–12 months but can result in a $30k–$50k salary increase to a new track.",
                npv: "+$60k–$120k NPV (10-yr) if pivot to higher-paying tech track succeeds",
              },
              {
                combo: "Volunteer board role + Contract work",
                why: "For management-track professionals, a volunteer board role demonstrates leadership continuity while contract work provides recent professional employment. Both are highly credible for non-technical management, HR, and operations roles where judgment and stakeholder skills are the primary evaluation criteria.",
                npv: "+$15k–$30k NPV vs. direct re-entry with no bridge",
              },
            ].map(({ combo, why, npv }) => (
              <div key={combo} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-white font-semibold text-sm">{combo}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{why}</p>
                <p className="text-violet-400 text-xs font-semibold">{npv}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTAs */}
        <section className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center space-y-4">
            <p className="text-xs font-medium text-violet-400 uppercase tracking-widest">Reskilling Calculator</p>
            <p className="text-white font-semibold">Is Your Bootcamp Worth the Cost?</p>
            <p className="text-slate-400 text-xs leading-relaxed">Get NPV, IRR, and break-even for any reskilling program.</p>
            <Link
              href="/reskilling-roi-calculator"
              className="inline-block bg-linear-to-r from-violet-600 to-purple-600 hover:opacity-90 transition-all px-6 py-3 rounded-xl font-medium text-white text-sm shadow-[0_0_30px_rgba(124,58,237,0.3)]"
            >
              Reskilling ROI Calculator →
            </Link>
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center space-y-4">
            <p className="text-xs font-medium text-violet-400 uppercase tracking-widest">Career Gap Calculator</p>
            <p className="text-white font-semibold">Model Your Full Recovery Path</p>
            <p className="text-slate-400 text-xs leading-relaxed">Year-by-year earnings recovery, NPV, and break-even vs. peer.</p>
            <Link
              href="/career-gap-calculator"
              className="inline-block bg-linear-to-r from-violet-600 to-cyan-600 hover:opacity-90 transition-all px-6 py-3 rounded-xl font-medium text-white text-sm shadow-[0_0_30px_rgba(124,58,237,0.2)]"
            >
              Career Gap Calculator →
            </Link>
          </div>
        </section>

        {/* Related */}
        <section className="border-t border-white/10 pt-10 mt-10">
          <p className="text-xs font-medium text-violet-400 uppercase tracking-widest mb-5">Related Guides & Tools</p>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link href="/return-to-work-programs" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-violet-400 font-mono text-lg">⇄</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-violet-300 transition-colors">Return-to-Work Programs</p>
                <p className="text-slate-500 text-xs">15+ companies with ROI data →</p>
              </div>
            </Link>
            <Link href="/return-to-work-after-career-break" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-violet-400 font-mono text-lg">↑</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-violet-300 transition-colors">Return to Work After Career Break</p>
                <p className="text-slate-500 text-xs">Salary penalty data & 3 strategies →</p>
              </div>
            </Link>
            <Link href="/skills-gap-calculator" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-violet-400 font-mono text-lg">!</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-violet-300 transition-colors">Skills Gap Calculator</p>
                <p className="text-slate-500 text-xs">What does your skills gap cost you? →</p>
              </div>
            </Link>
            <Link href="/women-returning-to-work" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-violet-400 font-mono text-lg">→</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-violet-300 transition-colors">Women Returning to Work</p>
                <p className="text-slate-500 text-xs">Gender-specific data & programs →</p>
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
            <Link href="/reskilling-roi-calculator" className="hover:text-slate-300 transition-colors">Reskilling ROI Calculator</Link>
            {" · "}
            <Link href="/return-to-work-programs" className="hover:text-slate-300 transition-colors">Return-to-Work Programs</Link>
            {" · "}
            <Link href="/skills-gap-calculator" className="hover:text-slate-300 transition-colors">Skills Gap Calculator</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
          <p className="mt-1">Data on bridge activity effectiveness sourced from iRelaunch research, SHRM hiring studies, and labor economics literature on career gap signaling. NPV estimates use 5% discount rate with industry-average salary trajectories.</p>
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
                name: "How do you rebuild work experience after a career break?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The 6 most effective ways to rebuild work experience after a career break are: (1) freelance or independent consulting projects, (2) corporate returnship programs, (3) bootcamp or certificate programs, (4) volunteer board or nonprofit leadership roles, (5) part-time contract or temp work, and (6) open-source or public portfolio projects. The best choice depends on your industry, target salary, and how much time you can invest before your job search.",
                },
              },
              {
                "@type": "Question",
                name: "What is the fastest way to rebuild work experience after a career break?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Freelance or consulting projects are the fastest way to rebuild verifiable work experience — they can be completed in 4–8 weeks and provide an employer-facing signal immediately. For technical roles, open source contributions or a deployed personal project can achieve similar effect in 4–10 weeks. Both cost near zero and can be listed on your resume as recent professional activity.",
                },
              },
              {
                "@type": "Question",
                name: "Is a bootcamp worth it for returning to work after a career break?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A bootcamp is worth it when you are pivoting to a higher-paying technical track — particularly software engineering, data science, or product management. At $12,000–$17,000 in cost, a bootcamp that enables a $25k–$35k salary increase breaks even in under 1 year with a 10-year NPV of $150k–$250k. If you are returning to the same role and your skills are reasonably current, a bootcamp is likely not the right investment — a freelance project or returnship would achieve the same signal at lower cost.",
                },
              },
              {
                "@type": "Question",
                name: "Do volunteer roles help when returning to work after a career break?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, particularly for management, operations, and leadership roles. Serving as a board member, treasurer, or committee chair for a nonprofit demonstrates leadership and strategic engagement. It is most effective when the role is substantive — managing a budget, leading a team, delivering a project — not just an advisory title. For technical individual contributor roles, hands-on technical work (freelance, open source) is more persuasive.",
                },
              },
              {
                "@type": "Question",
                name: "How do I explain work experience gaps on my resume?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The best approach is to fill the gap period with bridge activities and list them on your resume, then briefly note the career break reason in one line. State it directly — 'Career break, 2022–2024: primary caregiver' — then pivot to what you did during that period to stay current or contribute professionally. Do not leave unexplained blank years. Employers who run returnship programs are explicitly comfortable with gaps; target these companies first.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  )
}
