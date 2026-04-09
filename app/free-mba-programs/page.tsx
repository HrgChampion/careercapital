import Link from "next/link"
import { pageAlternates } from "@/lib/seo"

export const metadata = {
  title: "Free MBA Programs 2026: Fully-Funded, Fellowship & Zero-Tuition Options",
  description:
    "Complete guide to free and fully-funded MBA programs in 2026. See fellowships, assistantships, employer-sponsored programs, and near-zero-tuition options with salary outcome data.",
  alternates: pageAlternates("https://careerreturns.com/free-mba-programs"),
  openGraph: {
    title: "Free MBA Programs 2026: Fully-Funded, Fellowship & Zero-Tuition Options",
    description:
      "Complete guide to free and fully-funded MBA programs in 2026. See fellowships, assistantships, employer-sponsored programs, and near-zero-tuition options with salary outcome data.",
    url: "https://careerreturns.com/free-mba-programs",
    siteName: "CareerReturns",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@careerreturns",
    title: "Free MBA Programs 2026: Fully-Funded, Fellowship & Zero-Tuition Options",
    description:
      "Complete guide to free and fully-funded MBA programs in 2026. See fellowships, assistantships, employer-sponsored programs, and near-zero-tuition options with salary outcome data.",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are there actually free MBA programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — but a truly free MBA requires qualifying for one of five paths: full-merit scholarship from the school (rare, typically GMAT 760+ profiles), a research or teaching assistantship, employer full sponsorship (the most common path), military GI Bill + Yellow Ribbon, or a corporate fellowship from firms like McKinsey or Bain. Each path is real and achievable for the right candidate profile, but none is automatic.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Yellow Ribbon MBA program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Yellow Ribbon Program is a VA-school partnership where participating schools contribute additional tuition funds beyond the Post-9/11 GI Bill private school cap, matched dollar-for-dollar by the VA. For veterans with full GI Bill eligibility attending a 100% Yellow Ribbon school — including Wharton, Booth, Tuck, and Cornell — the net tuition cost is zero. Combined with the Monthly Housing Allowance, total annual benefit value can exceed $70,000–$100,000.",
      },
    },
    {
      "@type": "Question",
      name: "Do employers pay for MBA programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Full employer sponsorship programs exist at McKinsey, Bain, BCG, Goldman Sachs, Deloitte, and others. These programs pay 100% of tuition, maintain your salary during the program, and guarantee a return offer — in exchange for a 2–3 year post-MBA commitment. Partial tuition reimbursement is far more common: $5,250/yr is tax-free under IRS §127; amounts above that are taxable income. Many large companies in consulting, finance, pharma, and tech offer partial or full reimbursement.",
      },
    },
    {
      "@type": "Question",
      name: "What is an MBA assistantship?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Graduate Research Assistantship (GRA) or Teaching Assistantship (TA) is a school-funded arrangement where students work 15–20 hours per week on research or teaching in exchange for partial or full tuition coverage plus a modest stipend. Assistantships are more common at doctoral-granting business schools than at pure MBA programs. Schools with MBA-level assistantship programs include Georgia Tech Scheller, UT McCombs, Michigan Ross, Indiana Kelley, and Vanderbilt Owen.",
      },
    },
    {
      "@type": "Question",
      name: "How rare are full MBA scholarships?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Full-tuition merit scholarships at M7 programs are awarded to fewer than 3% of enrolled students. They are not impossible — but they require an exceptional combination of GMAT score (760+), meaningful work experience, leadership evidence, and a compelling application narrative. Need-based full awards at programs like Stanford GSB and Yale SOM are more accessible for candidates who qualify financially. Outside M7, full scholarships are more common: T15 and T25 programs use them competitively to attract strong candidates.",
      },
    },
  ],
}

export default function FreeMbaProgramsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-green-600/15 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12 sm:space-y-20">

        <header className="space-y-5">
          <p className="text-xs font-medium text-green-400 uppercase tracking-widest">CareerReturns · MBA Financing</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            Free MBA Programs 2026: Fully-Funded and Near-Zero-Tuition Options
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            A fully-funded MBA has near-infinite ROI — the cost side approaches zero, leaving only the upside. This guide covers every legitimate path to a free or near-free MBA and what salary outcomes these paths produce.
          </p>
        </header>

        {/* Section 1: How You Get a Free MBA */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">How You Get a Free MBA</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            There is no single "free MBA program" — there are five distinct mechanisms that can bring your personal out-of-pocket tuition cost to zero. Each path has different eligibility requirements, trade-offs, and post-MBA implications. Understanding which path fits your profile is the first step in the free MBA strategy.
          </p>
          <div className="space-y-3">
            {[
              {
                number: "01",
                path: "Full Merit Scholarship from the School",
                detail:
                  "Some programs award full-tuition merit scholarships to exceptional candidates. These are rare — fewer than 3% of M7 students receive them — but they exist. Typical profile: GMAT 760+, 5–8 years of high-quality work experience, top-tier undergraduate institution, and a differentiated application narrative. Outside M7, full scholarships are more common: T15 and T25 programs compete aggressively for strong candidates and use full awards to close enrollment.",
                note: "Best for: high-GMAT candidates applying to a range of programs.",
              },
              {
                number: "02",
                path: "Research / Teaching Assistantship",
                detail:
                  "Graduate Research Assistantships (GRAs) and Teaching Assistantships (TAs) are common at doctoral-granting business schools. In exchange for 15–20 hours of academic work per week, students receive tuition coverage and sometimes a modest living stipend ($1,500–$2,500/month). The trade-off is real: time committed to research cuts directly into on-campus recruiting bandwidth. Best suited for candidates not dependent on the formal MBA recruiting cycle — career switchers, founders, and those with pre-established networks.",
                note: "Best for: candidates not targeting on-campus employer recruiting.",
              },
              {
                number: "03",
                path: "Employer Full Sponsorship",
                detail:
                  "The most common real-world path to a free MBA. Your employer pays 100% of tuition; you maintain your salary in some cases (McKinsey Scholars, Bain pre-MBA) or take the opportunity cost but owe no tuition (reimbursement programs). Clawback clauses — typically 18–36 months — are standard. Consulting firms, investment banks, Big 4, and major pharma/tech companies all have formal sponsorship programs. See the section on corporate fellowship programs below.",
                note: "Best for: candidates already employed at firms with sponsorship programs.",
              },
              {
                number: "04",
                path: "Military GI Bill + Yellow Ribbon",
                detail:
                  "The Post-9/11 GI Bill (Chapter 33) plus the Yellow Ribbon Program can cover 100% of tuition at private schools — including M7 programs. Combined with the Monthly Housing Allowance (BAH stipend of $2,200–$4,200/month depending on school location), the total annual value easily exceeds $70,000–$100,000. For eligible veterans, this is the highest-certainty free MBA path available.",
                note: "Best for: veterans with 36+ months of active duty service.",
              },
              {
                number: "05",
                path: "Corporate Fellowship Programs",
                detail:
                  "Several top consulting and financial firms run formal pre-MBA fellowship programs: McKinsey Scholars, Bain pre-MBA sponsorship, Goldman Sachs MBA Fellowship. These pay 100% of tuition, maintain (or supplement) your salary, and guarantee a return offer. In exchange, you commit to 2–3 years post-MBA with the sponsor firm. These are highly selective programs — applying to a fellowship is not unlike applying to the firm itself.",
                note: "Best for: high performers at top firms with confirmed sponsorship tracks.",
              },
            ].map(({ number, path, detail, note }) => (
              <div key={number} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-mono text-xs font-bold mt-0.5 shrink-0">{number}</span>
                  <p className="text-white font-medium text-sm">{path}</p>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed pl-6">{detail}</p>
                <p className="text-green-400/70 text-xs pl-6">{note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Schools Known for Full Tuition Fellowships */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Schools Known for Full Tuition Fellowships</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Not all top MBA programs are equal when it comes to scholarship generosity. Some are merit-only, others are need-only, and a few offer both. Understanding each program's fellowship philosophy helps you target your applications strategically.
            See the{" "}
            <Link href="/mba-scholarships" className="text-green-400 hover:text-green-300 transition-colors underline underline-offset-2">MBA scholarships guide</Link>
            {" "}for full scholarship data across all T25 programs.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              {
                school: "MIT Sloan",
                fellowship: "Sloan Fellows Program",
                type: "Merit + Need",
                detail:
                  "The Sloan Fellows MBA is a 12-month full-time program for mid-career executives. Select full fellowships are available for exceptional candidates. The standard 2-year MBA program also offers merit aid, though full-tuition awards are rare — typically fewer than 10 students per class.",
                tag: "Full awards available; rare",
              },
              {
                school: "University of Chicago Booth",
                fellowship: "Booth Fellowship Program",
                type: "Merit",
                detail:
                  "Booth awards merit-based fellowships through a separate evaluation process. Full-tuition Booth Fellowships exist and are awarded to outstanding candidates — typically those who would otherwise choose a competing M7 program. Approximately 3–5% of the class receives full or near-full awards.",
                tag: "<5% of class",
              },
              {
                school: "Dartmouth Tuck",
                fellowship: "Tuck Scholarship Program",
                type: "Merit + Need",
                detail:
                  "Tuck has a strong merit scholarship pool. Full awards are available for top candidates and Tuck uses them to compete with peer M7 programs. Tuck also has strong veteran scholarship support stackable with Yellow Ribbon.",
                tag: "Strong merit pool; negotiable",
              },
              {
                school: "Yale SOM",
                fellowship: "Yale SOM Fellowships",
                type: "Need-Based",
                detail:
                  "Yale School of Management awards need-based fellowships that can cover 100% of tuition for qualifying students. Yale does not award merit aid in the traditional sense — awards are based on demonstrated financial need as determined by the standard graduate financial aid application.",
                tag: "Need-based; can be full",
              },
              {
                school: "Stanford GSB",
                fellowship: "Stanford Fellowship",
                type: "Need-Based Only",
                detail:
                  "Stanford GSB offers need-based aid only — no merit scholarships. For candidates with demonstrated financial need, awards can be substantial. However, Stanford's cost-of-attendance is among the highest in the nation, and full need-based coverage is rare. Knight-Hennessy Scholars (PhD-track) can receive full funding.",
                tag: "Need-based only; no merit",
              },
              {
                school: "Harvard HBS",
                fellowship: "HBS Fellowship",
                type: "Need-Based Only",
                detail:
                  "HBS provides need-based fellowships on a sliding scale. Knight-Hennessy Scholars at Harvard are PhD-track and receive full funding, but this is a separate program from the standard MBA. HBS has no merit scholarships — all awards are determined by financial need.",
                tag: "Need-based only; Knight-Hennessy for PhD-track",
              },
            ].map(({ school, fellowship, type, detail, tag }) => (
              <div key={school} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-white font-semibold text-sm">{school}</p>
                  <span className="text-green-400 text-xs font-medium shrink-0">{type}</span>
                </div>
                <p className="text-green-300 text-xs font-medium">{fellowship}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{detail}</p>
                <p className="text-slate-500 text-xs italic">{tag}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Full tuition merit awards at M7 programs are awarded to fewer than 3% of each class — but they exist and are real. The strategy is volume and positioning: apply to 2–3 peer schools to generate competing scholarship offers, then negotiate. A Booth fellowship offer can be used to negotiate aid at Kellogg or Tuck.
          </p>
        </section>

        {/* Section 3: Assistantship Programs */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Assistantship Programs: Tuition for Research Work</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Graduate Research Assistantships (GRAs) and Teaching Assistantships (TAs) are the academic funding model borrowed from PhD programs and applied at the MBA level. You trade 15–20 hours per week of academic labor — running research studies, grading, facilitating faculty projects — in exchange for partial or full tuition coverage.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Assistantships at the MBA level are less common than at the PhD level, but available at several programs. The programs most likely to offer MBA assistantships include:
          </p>
          <div className="space-y-3">
            {[
              {
                school: "Georgia Tech Scheller College of Business",
                detail: "Scheller offers Graduate Research Assistantships covering partial tuition. As part of Georgia Tech's research-intensive environment, MBA students can be placed with faculty on operations, supply chain, and technology management research projects. Competitive application required.",
              },
              {
                school: "University of Texas McCombs",
                detail: "McCombs offers GRA positions in several research centers. Awards typically cover partial tuition (40–70%) with a monthly stipend of $1,200–$1,800. Applications are competitive and typically require faculty sponsorship — reaching out to professors before admission improves odds.",
              },
              {
                school: "Michigan Ross School of Business",
                detail: "Ross selectively offers research assistant roles to incoming MBA students, particularly those with research backgrounds or quantitative skills. Awards are partial tuition coverage and are competitive within the program.",
              },
              {
                school: "Indiana Kelley School of Business",
                detail: "Kelley offers both TA and GRA roles with partial tuition waivers. The Kelley Direct online MBA also has assistantship opportunities. Strong for operations research and marketing analytics track students.",
              },
              {
                school: "Vanderbilt Owen Graduate School",
                detail: "Owen offers Teaching Assistantship positions covering partial tuition. Students assist faculty in finance and operations courses. The smaller class size creates more per-student opportunity for these positions.",
              },
            ].map(({ school, detail }) => (
              <div key={school} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-white font-medium text-sm">{school}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
          <div className="bg-white/5 border border-green-500/20 rounded-xl p-5 space-y-2">
            <p className="text-green-400 font-medium text-sm">The Core Trade-Off</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Assistantships are 15–20 hours per week of committed time. For MBA students targeting on-campus recruiting — consulting, banking, tech — this is a significant constraint. Recruiting prep, case interviews, and networking events happen during the same window as assistantship responsibilities. The assistantship path works best for candidates who are{" "}
              <span className="text-white font-medium">not dependent on MBA on-campus recruiting</span>: those entering entrepreneurship, career changers leveraging pre-existing networks, or those pursuing research and academic tracks.
            </p>
          </div>
        </section>

        {/* Section 4: GI Bill MBA */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">GI Bill MBA: The Best Free MBA Path</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            For eligible veterans, the Post-9/11 GI Bill + Yellow Ribbon Program is the highest-certainty, highest-value path to a free MBA. There is no competing application for a scholarship, no assistantship trade-off, and no employer commitment required. If you have the service time and a qualifying school, the benefit applies.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5">
            <p className="text-green-400 text-xs font-medium uppercase tracking-widest">Benefit Stack</p>
            <div className="space-y-3">
              {[
                {
                  label: "Post-9/11 GI Bill Chapter 33 — Tuition Coverage",
                  value: "100% at in-state public; up to $27,225/yr at private (2025 rate)",
                  color: "text-green-400",
                },
                {
                  label: "Yellow Ribbon Program — Gap Coverage at Private Schools",
                  value: "School + VA match the remaining tuition gap; full coverage at participating M7 schools",
                  color: "text-green-300",
                },
                {
                  label: "Monthly Housing Allowance (BAH at E-5 rate)",
                  value: "$2,200–$4,200/month depending on school zip code",
                  color: "text-emerald-400",
                },
                {
                  label: "Books & Supplies Stipend",
                  value: "Up to $1,000/year",
                  color: "text-teal-400",
                },
              ].map(({ label, value, color }) => (
                <div key={label} className="flex flex-col sm:flex-row sm:justify-between gap-1 text-xs border-b border-white/5 pb-3 last:border-0 last:pb-0">
                  <span className="text-slate-400 max-w-xs">{label}</span>
                  <span className={`${color} font-medium text-right`}>{value}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            The combined annual value at a top private school can exceed $60,000–$80,000. For high-cost-of-living schools (HBS in Cambridge, Wharton in Philadelphia, Booth in Chicago), the BAH alone offsets the majority of living expenses.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            <span className="text-white font-medium">Yellow Ribbon schools with full tuition coverage</span> include Wharton, Booth, Tuck, Cornell Johnson, Georgetown McDonough, and most other M7/T15 programs. Stanford GSB does not participate in Yellow Ribbon. Always verify participation directly with the school's financial aid office, as participation amounts can change annually.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            This is the highest-ROI MBA path for anyone with GI Bill eligibility. A veteran attending Wharton on full GI Bill + Yellow Ribbon benefits, entering MBB post-graduation, achieves a 10-year NPV exceeding $500,000 on a near-zero tuition investment. For the full veteran ROI analysis, see the{" "}
            <Link href="/mba-roi-military" className="text-green-400 hover:text-green-300 transition-colors underline underline-offset-2">MBA ROI for military veterans guide</Link>.
          </p>
        </section>

        {/* Section 5: Corporate Fellowship Programs */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Corporate Fellowship Programs: Paid MBA</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Several consulting and financial services firms run formal pre-MBA sponsorship programs that pay 100% of tuition, maintain your salary during the program, and guarantee a return offer upon graduation. These are among the most financially advantageous arrangements in graduate education — but they are selective and come with a binding post-MBA commitment.
          </p>
          <div className="space-y-3">
            {[
              {
                firm: "McKinsey & Company — McKinsey Scholars",
                sponsorship: "Full tuition sponsorship",
                salary: "Salary maintained during program",
                commitment: "2–3 year post-MBA return commitment",
                detail:
                  "McKinsey's pre-MBA sponsorship program selects high-performing analysts and associates for full-time MBA programs at M7 schools. Full tuition is covered. In many cases, salary is maintained or a living stipend is provided. The return offer is guaranteed — you're returning to McKinsey as an Engagement Manager (post-MBA Associate equivalent). This is effectively the highest-value corporate fellowship in consulting.",
              },
              {
                firm: "Bain & Company — Bain Pre-MBA Sponsorship",
                sponsorship: "Full tuition sponsorship",
                salary: "Stipend during program (firm-dependent)",
                commitment: "2–3 year post-MBA return commitment",
                detail:
                  "Bain offers pre-MBA sponsorship for select consultant-level employees. The program structure varies by cohort and is negotiated individually. Full tuition coverage is standard; salary maintenance depends on the specific arrangement. Candidates return as post-MBA Associates. Bain's strong culture of retention means sponsorship offers are real signals of long-term investment in the candidate.",
              },
              {
                firm: "Goldman Sachs — MBA Fellowship",
                sponsorship: "Partial to full tuition (up to $40K/yr)",
                salary: "Stipend during program",
                commitment: "2 year return commitment",
                detail:
                  "Goldman Sachs offers MBA fellowships to select employees pursuing full-time programs at target schools. Award amounts vary — some candidates receive full coverage, others partial. The program is most active for analysts in investment banking, securities, and investment management divisions. Return offers are at the Associate level.",
              },
              {
                firm: "Deloitte — Deloitte MBA Sponsorship",
                sponsorship: "Full tuition for select candidates",
                salary: "Maintains benefits during program",
                commitment: "2 year post-MBA commitment",
                detail:
                  "Deloitte's sponsorship is available to Senior Consultants and Managers on a partnership track. The program covers full tuition at approved programs. Deloitte also participates in the tax-free reimbursement model ($5,250/yr) for employees pursuing part-time or evening programs. Full sponsorship candidates return at the Manager or Senior Manager level.",
              },
            ].map(({ firm, sponsorship, salary, commitment, detail }) => (
              <div key={firm} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
                <p className="text-white font-semibold text-sm">{firm}</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <div>
                    <p className="text-slate-500 uppercase tracking-wider mb-1">Sponsorship</p>
                    <p className="text-green-400 font-medium">{sponsorship}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 uppercase tracking-wider mb-1">Salary</p>
                    <p className="text-slate-300">{salary}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 uppercase tracking-wider mb-1">Commitment</p>
                    <p className="text-slate-300">{commitment}</p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            The core trade-off in corporate fellowship programs: you exchange optionality for financial certainty. A sponsored McKinsey Scholars candidate saves $130,000–$160,000 in tuition but commits their post-MBA career to McKinsey for 2–3 years. For candidates who would choose McKinsey anyway, this is a pure financial win. For those uncertain about their post-MBA direction, it may constrain exploration. For deeper ROI analysis of employer-sponsored programs, see{" "}
            <Link href="/employer-sponsored-mba-roi" className="text-green-400 hover:text-green-300 transition-colors underline underline-offset-2">employer-sponsored MBA ROI</Link>.
          </p>
        </section>

        {/* Section 6: ROI of a Free MBA vs Self-Funded */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">ROI of a Free MBA vs Self-Funded</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The financial case for a free MBA is straightforward: when tuition equals zero and salary continues (in employer-sponsored models), the only personal cost is time and effort. The ROI is mathematically superior to any self-funded scenario — often by an order of magnitude.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6">
            <p className="text-green-400 text-xs font-medium uppercase tracking-widest">10-Year NPV Comparison: M7 → MBB Track</p>
            <div className="space-y-4">
              {[
                {
                  scenario: "Free MBA (Full Sponsorship / GI Bill)",
                  tuition: "$0",
                  opportunityCost: "$140,000 (2yr salary foregone)",
                  salaryDelta: "$125,000/yr above pre-MBA path",
                  npv: "$800,000–$1,200,000",
                  color: "text-green-400",
                  highlight: true,
                },
                {
                  scenario: "Partial Scholarship (50% tuition covered)",
                  tuition: "$80,000",
                  opportunityCost: "$140,000",
                  salaryDelta: "$125,000/yr",
                  npv: "$680,000–$1,080,000",
                  color: "text-emerald-400",
                  highlight: false,
                },
                {
                  scenario: "Self-Funded M7 (full loans)",
                  tuition: "$160,000+ (plus interest ~$48K)",
                  opportunityCost: "$140,000",
                  salaryDelta: "$125,000/yr",
                  npv: "$560,000–$960,000",
                  color: "text-slate-300",
                  highlight: false,
                },
              ].map(({ scenario, tuition, opportunityCost, salaryDelta, npv, color, highlight }) => (
                <div key={scenario} className={`rounded-xl p-4 space-y-2 ${highlight ? "bg-green-900/20 border border-green-500/20" : "bg-white/3 border border-white/5"}`}>
                  <p className={`font-semibold text-sm ${highlight ? "text-green-300" : "text-white"}`}>{scenario}</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    <div>
                      <p className="text-slate-500 mb-0.5">Tuition cost</p>
                      <p className="text-slate-300">{tuition}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 mb-0.5">Opportunity cost</p>
                      <p className="text-slate-300">{opportunityCost}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 mb-0.5">Annual salary delta</p>
                      <p className="text-slate-300">{salaryDelta}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 mb-0.5">10-yr NPV</p>
                      <p className={`font-bold ${color}`}>{npv}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-slate-500 text-xs">Assumes 6% discount rate; $80K pre-MBA salary; MBB post-MBA total comp $210K Year 1. NPV ranges reflect career progression variance.</p>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            The free MBA scenario produces <span className="text-white font-medium">10–20x the ROI of a self-funded MBA</span> on a personal investment basis — not because the degree produces more salary, but because the denominator (personal cash invested) is near zero. Even a free T25 MBA with a modest $20,000/year salary delta above the no-MBA path has an NPV of $200,000+ on zero tuition investment — more than most self-funded M7 MBAs after accounting for loan interest and payback drag.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            The{" "}
            <Link href="/mba-roi-calculator" className="text-green-400 hover:text-green-300 transition-colors underline underline-offset-2">MBA ROI calculator</Link>
            {" "}allows you to model any tuition input — set tuition to zero to see the free-MBA NPV for your specific school and career track combination.
          </p>
        </section>

        {/* Related Guides */}
        <section className="border-t border-white/10 pt-10 mt-10">
          <p className="text-xs font-medium text-green-400 uppercase tracking-widest mb-5">Related Guides</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: "/mba-roi-military", icon: "★", title: "MBA ROI for Veterans", sub: "GI Bill + Yellow Ribbon full analysis →" },
              { href: "/employer-sponsored-mba-roi", icon: "$", title: "Employer-Sponsored MBA ROI", sub: "Near-infinite IRR when tuition = $0 →" },
              { href: "/how-to-pay-for-mba", icon: "⊕", title: "How to Pay for an MBA", sub: "All 7 financing paths compared →" },
              { href: "/mba-cost", icon: "Σ", title: "MBA Cost Breakdown 2026", sub: "Net cost at M7, T15, online programs →" },
              { href: "/mba-roi-calculator", icon: "↗", title: "MBA ROI Calculator", sub: "Model your net cost and NPV →" },
              { href: "/mba-roi-scholarship", icon: "%", title: "MBA Scholarship ROI", sub: "How merit aid shifts break-even →" },
            ].map(({ href, icon, title, sub }) => (
              <Link
                key={href}
                href={href}
                className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all"
              >
                <div className="text-green-400 font-mono text-lg">{icon}</div>
                <div>
                  <p className="text-white text-sm font-medium group-hover:text-green-300 transition-colors">{title}</p>
                  <p className="text-slate-500 text-xs">{sub}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <footer className="border-t border-white/10 pt-8 text-center text-slate-500 text-xs space-y-2">
          <p>
            <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            {" · "}
            <Link href="/mba-roi-calculator" className="hover:text-slate-300 transition-colors">MBA ROI Calculator</Link>
            {" · "}
            <Link href="/employer-sponsored-mba-roi" className="hover:text-slate-300 transition-colors">Employer-Sponsored MBA</Link>
            {" · "}
            <Link href="/mba-roi-military" className="hover:text-slate-300 transition-colors">Veterans MBA ROI</Link>
            {" · "}
            <Link href="/how-to-pay-for-mba" className="hover:text-slate-300 transition-colors">How to Pay for an MBA</Link>
            {" · "}
            <Link href="/mba-cost" className="hover:text-slate-300 transition-colors">MBA Cost 2026</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
          <p className="mt-1">Salary data sourced from GMAC surveys, school employment reports, Glassdoor, Levels.fyi, and publicly reported compensation figures. All ranges are estimates; individual outcomes vary.</p>
        </footer>

      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  )
}
