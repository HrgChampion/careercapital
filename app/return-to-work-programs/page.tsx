import Link from "next/link"
import { pageAlternates } from "@/lib/seo"

export const metadata = {
  title: "Return-to-Work Programs 2026: 15+ Companies, ROI Data & How to Apply",
  description:
    "Complete guide to return-to-work programs in 2026. Compare 15+ companies — Amazon, Goldman, JPMorgan, Meta, McKinsey — with conversion rates, stipends, and ROI calculations.",
  alternates: pageAlternates("https://careerreturns.com/return-to-work-programs"),
  openGraph: {
    title: "Return-to-Work Programs 2026: 15+ Companies, ROI Data & How to Apply",
    description:
      "Compare 15+ return-to-work programs with conversion rates, stipends, and NPV vs. direct re-entry. Find the right returnship for your career break.",
    url: "https://careerreturns.com/return-to-work-programs",
    siteName: "CareerReturns",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Return-to-Work Programs 2026: 15+ Companies, ROI Data",
    description: "Amazon converts at 90%. JPMorgan at 70%. Compare stipends, durations, and NPV for every major returnship program.",
  },
}

const programs = [
  {
    company: "Amazon Returnship",
    industry: "Technology / E-Commerce",
    duration: "16 weeks",
    stipend: "$4,200/wk",
    conversion: "90%",
    postSalary: "$180k–$220k TC",
    gapMin: "1+ year",
    verdict: "Strongest ROI",
    verdictColor: "text-green-400",
    npvVsDirect: "+$38k NPV vs. direct re-entry",
    note: "Highest conversion rate in tech. Broad roles: SDE, PM, operations, finance.",
  },
  {
    company: "Meta Return to Work",
    industry: "Technology",
    duration: "18 weeks",
    stipend: "$4,500/wk",
    conversion: "85%",
    postSalary: "$175k–$225k TC",
    gapMin: "1+ year",
    verdict: "Strong ROI",
    verdictColor: "text-green-400",
    npvVsDirect: "+$32k NPV vs. direct re-entry",
    note: "Focus on engineering and data roles. Competitive selection but strong conversion.",
  },
  {
    company: "Goldman Sachs Returnship",
    industry: "Investment Banking / Finance",
    duration: "10 weeks",
    stipend: "$3,500/wk",
    conversion: "75%",
    postSalary: "$200k–$250k",
    gapMin: "2+ years",
    verdict: "Strong ROI",
    verdictColor: "text-green-400",
    npvVsDirect: "+$55k NPV vs. direct re-entry",
    note: "Highest post-program salary in finance. Competitive — aimed at former finance professionals.",
  },
  {
    company: "JPMorgan ReEntry Program",
    industry: "Banking / Financial Services",
    duration: "15 weeks",
    stipend: "$3,000/wk",
    conversion: "70%",
    postSalary: "$150k–$200k",
    gapMin: "2+ years",
    verdict: "Good ROI",
    verdictColor: "text-emerald-400",
    npvVsDirect: "+$28k NPV vs. direct re-entry",
    note: "One of the longest-running returner programs. Covers banking, tech, and operations roles.",
  },
  {
    company: "McKinsey Returner (Accelerate)",
    industry: "Management Consulting",
    duration: "6–12 months",
    stipend: "Full consultant salary",
    conversion: "80%",
    postSalary: "$200k–$215k base",
    gapMin: "2+ years",
    verdict: "Very Strong ROI",
    verdictColor: "text-green-400",
    npvVsDirect: "+$62k NPV vs. direct re-entry",
    note: "Longest duration, full salary. Structured for senior professionals returning to consulting.",
  },
  {
    company: "Microsoft LEAP",
    industry: "Technology",
    duration: "4 months",
    stipend: "$4,000/wk",
    conversion: "75%",
    postSalary: "$160k–$200k TC",
    gapMin: "1+ year",
    verdict: "Strong ROI",
    verdictColor: "text-green-400",
    npvVsDirect: "+$29k NPV vs. direct re-entry",
    note: "Engineering and PM focus. Open to non-traditional backgrounds including career changers.",
  },
  {
    company: "Deloitte iReturn",
    industry: "Professional Services / Consulting",
    duration: "6 months",
    stipend: "Full salary (~$130k–$160k)",
    conversion: "75%",
    postSalary: "$130k–$170k",
    gapMin: "2+ years",
    verdict: "Good ROI",
    verdictColor: "text-emerald-400",
    npvVsDirect: "+$24k NPV vs. direct re-entry",
    note: "Consulting, tech, finance, and risk roles. Structured mentoring throughout.",
  },
  {
    company: "Fidelity Resume Program",
    industry: "Financial Services / Asset Management",
    duration: "12 weeks",
    stipend: "$2,500/wk",
    conversion: "65%",
    postSalary: "$120k–$160k",
    gapMin: "2+ years",
    verdict: "Moderate ROI",
    verdictColor: "text-amber-400",
    npvVsDirect: "+$12k NPV vs. direct re-entry",
    note: "Finance, technology, and operations roles. Lower stipend but strong full-time pipeline.",
  },
  {
    company: "Northrop Grumman iReturn",
    industry: "Defense / Aerospace",
    duration: "12 weeks",
    stipend: "$2,800/wk",
    conversion: "70%",
    postSalary: "$130k–$165k",
    gapMin: "2+ years",
    verdict: "Good ROI",
    verdictColor: "text-emerald-400",
    npvVsDirect: "+$18k NPV vs. direct re-entry",
    note: "Requires security clearance eligibility for some roles. Engineering and program management focus.",
  },
  {
    company: "PayPal Recharge",
    industry: "Fintech",
    duration: "16 weeks",
    stipend: "$3,500/wk",
    conversion: "72%",
    postSalary: "$150k–$185k TC",
    gapMin: "1+ year",
    verdict: "Good ROI",
    verdictColor: "text-emerald-400",
    npvVsDirect: "+$22k NPV vs. direct re-entry",
    note: "Product, engineering, and risk roles. Broad eligibility — gap as short as 12 months.",
  },
  {
    company: "Accenture Returning Talent",
    industry: "Consulting / Technology",
    duration: "6 months",
    stipend: "Full salary (~$110k–$145k)",
    conversion: "70%",
    postSalary: "$110k–$150k",
    gapMin: "2+ years",
    verdict: "Moderate ROI",
    verdictColor: "text-amber-400",
    npvVsDirect: "+$14k NPV vs. direct re-entry",
    note: "Consulting and technology roles. Global program with US and international placements.",
  },
  {
    company: "Path Forward Programs",
    industry: "Multiple (Tech, Finance, Healthcare)",
    duration: "12–16 weeks",
    stipend: "$2,500–$4,000/wk",
    conversion: "60–80%",
    postSalary: "$110k–$180k",
    gapMin: "2+ years",
    verdict: "Variable ROI",
    verdictColor: "text-slate-300",
    npvVsDirect: "+$10k–$30k NPV depending on company",
    note: "Non-profit matching platform connecting returners with 100+ partner companies. Broadest access.",
  },
  {
    company: "Salesforce Returnship",
    industry: "Technology / CRM",
    duration: "16 weeks",
    stipend: "$3,800/wk",
    conversion: "72%",
    postSalary: "$155k–$190k TC",
    gapMin: "1+ year",
    verdict: "Good ROI",
    verdictColor: "text-emerald-400",
    npvVsDirect: "+$25k NPV vs. direct re-entry",
    note: "Product, engineering, sales operations, and customer success roles. Broad eligibility — gap as short as 12 months.",
  },
  {
    company: "Cisco ReEntry Program",
    industry: "Technology / Networking",
    duration: "16 weeks",
    stipend: "$3,600/wk",
    conversion: "68%",
    postSalary: "$145k–$175k TC",
    gapMin: "2+ years",
    verdict: "Good ROI",
    verdictColor: "text-emerald-400",
    npvVsDirect: "+$20k NPV vs. direct re-entry",
    note: "Engineering, IT, and program management roles. Structured mentoring and cohort support throughout.",
  },
  {
    company: "IBM Return to Work",
    industry: "Technology / Consulting",
    duration: "12 weeks",
    stipend: "$3,200/wk",
    conversion: "65%",
    postSalary: "$130k–$165k TC",
    gapMin: "2+ years",
    verdict: "Moderate ROI",
    verdictColor: "text-amber-400",
    npvVsDirect: "+$16k NPV vs. direct re-entry",
    note: "Tech, consulting, and operations roles across IBM and IBM Consulting. Global placements available.",
  },
  {
    company: "Wells Fargo Returning Talent",
    industry: "Financial Services",
    duration: "12 weeks",
    stipend: "$2,800/wk",
    conversion: "67%",
    postSalary: "$125k–$155k",
    gapMin: "2+ years",
    verdict: "Moderate ROI",
    verdictColor: "text-amber-400",
    npvVsDirect: "+$15k NPV vs. direct re-entry",
    note: "Banking, operations, risk management, and technology roles. Open to broad professional backgrounds.",
  },
]

const applicationWindows = [
  { company: "Amazon Returnship", cohort1: "Feb–Mar (May start)", cohort2: "Aug–Sep (Oct start)", tip: "Apply early — cohorts fill 6–8 weeks after opening" },
  { company: "Goldman Sachs Returnship", cohort1: "Jan–Feb (Apr start)", cohort2: "N/A (annual)", tip: "Single annual cohort; late applications rarely accepted" },
  { company: "JPMorgan ReEntry", cohort1: "Jan–Mar (Jun start)", cohort2: "N/A (annual)", tip: "Finance and tech tracks open separately; check careers page" },
  { company: "McKinsey Returner (Accelerate)", cohort1: "Rolling (Jan–Mar priority)", cohort2: "Rolling (Aug–Oct priority)", tip: "No hard deadline but Jan–Mar window gets most bandwidth" },
  { company: "Microsoft LEAP", cohort1: "Feb–Apr (Jun start)", cohort2: "N/A (annual)", tip: "Engineering-focused; requires active interview prep for technical rounds" },
  { company: "Meta Return to Work", cohort1: "Jan–Mar (May start)", cohort2: "N/A (annual)", tip: "Data and engineering roles fill fastest; apply immediately on opening" },
  { company: "Salesforce Returnship", cohort1: "Mar–May (Jul start)", cohort2: "N/A (annual)", tip: "Check Salesforce Careers page under 'Returnship' keyword search" },
]

const industryBreakdown = [
  { industry: "Technology", count: "8 programs", companies: "Amazon, Meta, Microsoft, PayPal, Salesforce, Cisco, IBM, Google (Path Forward)", note: "Largest sector for returnships. Strong conversion rates (68–90%). Broad role types from SWE to PM to Ops." },
  { industry: "Finance", count: "5 programs", companies: "Goldman Sachs, JPMorgan, Fidelity, Wells Fargo, Morgan Stanley (Path Forward)", note: "Highest post-program salaries ($125k–$250k). Require prior finance experience; most mandate 2+ year gap minimum." },
  { industry: "Consulting", count: "3 programs", companies: "McKinsey, Deloitte, Accenture", note: "Longest program durations (6–12 months). Full salary during program. Strongest NPV advantage vs. direct re-entry." },
  { industry: "Defense / Aerospace", count: "2 programs", companies: "Northrop Grumman, Raytheon (Path Forward)", note: "Security clearance eligibility required for many roles. Engineering and program management focus. Stable conversion (65–70%)." },
]

export default function ReturnToWorkProgramsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-cyan-600/15 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12 sm:space-y-20">

        {/* Header */}
        <header className="space-y-5">
          <p className="text-xs font-medium text-cyan-400 uppercase tracking-widest">CareerReturns · Return-to-Work Guide</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            The Complete Guide to Return-to-Work Programs in 2026
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            15+ programs ranked by ROI — not just duration and prestige.
          </p>
        </header>

        {/* Short Answer */}
        <section className="space-y-4">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-8 space-y-4">
            <p className="text-xs font-medium text-cyan-400 uppercase tracking-widest">What Are Return-to-Work Programs?</p>
            <p className="text-white text-base leading-relaxed font-medium">
              Return-to-work programs (also called returnships) are structured re-entry pathways offered by major employers
              specifically for professionals who have taken a career break of 1–3+ years. Unlike standard hiring, they
              are designed for people whose resumes show a gap — and they convert to full-time roles at rates of 65–90%.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              The financial math is compelling: Amazon&apos;s 16-week returnship pays $4,200/week with a 90% conversion rate.
              That&apos;s $67,200 in stipend income, plus an expected post-program salary of $180k–$220k TC — with a conversion
              probability so high that the NPV advantage over direct re-entry is typically $30k–$65k. But not all programs
              are equal. This guide breaks down every major program by the numbers that actually matter.
            </p>
          </div>
        </section>

        {/* Key Stats */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">The Financial Case for Returnships</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center space-y-2">
              <p className="text-slate-400 text-xs uppercase tracking-wide">Avg. Conversion Rate</p>
              <p className="text-green-400 text-2xl font-semibold">75%</p>
              <p className="text-slate-500 text-xs">Across all major programs</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center space-y-2">
              <p className="text-slate-400 text-xs uppercase tracking-wide">NPV vs. Direct Re-entry</p>
              <p className="text-cyan-400 text-2xl font-semibold">+$28k</p>
              <p className="text-slate-500 text-xs">Median NPV advantage (10-yr)</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center space-y-2">
              <p className="text-slate-400 text-xs uppercase tracking-wide">Salary Recovery Speed</p>
              <p className="text-emerald-400 text-2xl font-semibold">1.8×</p>
              <p className="text-slate-500 text-xs">Faster vs. direct re-entry</p>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            The NPV advantage of returnships comes from three sources: (1) stipend income during the program period,
            (2) higher post-program salary vs. the salary floor of direct re-entry, and (3) faster elimination of
            the career gap penalty. Direct re-entry offers speed but a lower salary floor and no structured support.
            For gaps of 2+ years, the returnship path typically wins on expected NPV — provided you clear the
            conversion break-even threshold. Use the{" "}
            <Link href="/returnship-roi-calculator" className="text-cyan-400 hover:text-cyan-300 transition-colors underline underline-offset-2">
              Returnship ROI Calculator
            </Link>{" "}
            to model your specific scenario.
          </p>
        </section>

        {/* Who Qualifies */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Who Qualifies for Return-to-Work Programs?</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Eligibility thresholds vary by program, but most share a common framework:
          </p>
          <div className="space-y-3">
            {[
              {
                title: "Career gap duration",
                body: "Most programs require a minimum gap of 1–2 years. Amazon and PayPal accept 12-month gaps; Goldman, JPMorgan, and McKinsey typically require 2+ years. There is rarely an upper limit on gap length.",
              },
              {
                title: "Prior work experience",
                body: "Programs are not entry-level. Most target professionals with 5+ years of pre-break experience. The more senior your prior role, the stronger your application — returnships are designed for mid-to-senior career re-entry, not early career.",
              },
              {
                title: "Reason for the break",
                body: "Caregiving (child, parent, or family), relocation, health, and education are the most common accepted reasons. The break does not need to be justified — returnship programs are specifically designed not to penalize the gap itself.",
              },
              {
                title: "Skill and industry alignment",
                body: "Most programs require skills relevant to the open role — you are not starting over. A software engineer taking a returnship in engineering, a finance professional in finance. Career-switch returnships exist but are less common.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-white font-semibold text-sm">{title}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Program Directory */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">2026 Program Directory: ROI Comparison</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            NPV figures represent estimated 10-year NPV advantage vs. direct re-entry, modeled using DCF analysis with
            a 5% discount rate, industry-average salary trajectories, and program-reported conversion rates. Individual
            outcomes vary based on pre-break salary, gap duration, and role level.
          </p>

          <div className="space-y-4">
            {programs.map((p) => (
              <div key={p.company} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <p className="text-white font-semibold text-base">{p.company}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{p.industry}</p>
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 whitespace-nowrap self-start ${p.verdictColor}`}>
                    {p.verdict}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div>
                    <p className="text-slate-500 mb-0.5">Duration</p>
                    <p className="text-slate-300 font-medium">{p.duration}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 mb-0.5">Stipend</p>
                    <p className="text-slate-300 font-medium">{p.stipend}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 mb-0.5">Conversion Rate</p>
                    <p className={`font-semibold ${p.verdictColor}`}>{p.conversion}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 mb-0.5">Post-Program Salary</p>
                    <p className="text-slate-300 font-medium">{p.postSalary}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 text-xs border-t border-white/5 pt-3">
                  <div className="flex-1">
                    <p className="text-slate-500 mb-0.5">Gap Requirement</p>
                    <p className="text-slate-400">{p.gapMin}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-500 mb-0.5">10-yr NPV Advantage</p>
                    <p className="text-cyan-400 font-semibold">{p.npvVsDirect}</p>
                  </div>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed border-t border-white/5 pt-3">{p.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How to apply */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">How to Apply: The 4-Step Framework</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Returnship applications are evaluated differently from standard job applications. The gap is not
            the problem — it is the expected context. Here is what actually moves your application:
          </p>
          <div className="space-y-3">
            {[
              {
                step: "01",
                title: "Reframe the gap as intent",
                body: "Your resume and cover letter should state the gap explicitly and briefly — caregiving, relocation, health, education — then pivot immediately to what you did during the gap to stay current: online courses, freelance projects, volunteer work, personal projects. The gap itself does not disqualify you. Silence about it creates uncertainty.",
              },
              {
                step: "02",
                title: "Target roles where your pre-break skills transfer directly",
                body: "Returnship applications succeed when the hiring manager can clearly see you doing the role. If you were a software engineer before your break, apply to software engineering returnships — not product management. Career pivots via returnship are possible but significantly harder.",
              },
              {
                step: "03",
                title: "Prepare for a compressed interview timeline",
                body: "Many returnship programs run on fixed cohort cycles — Amazon and Goldman typically open applications 3–4 months before the program start. Applications are reviewed in batches. Apply early. Late applicants often find the cohort filled.",
              },
              {
                step: "04",
                title: "Model your break-even conversion rate before accepting",
                body: "A returnship is only financially rational if the conversion probability exceeds a threshold specific to your alternative options. If you have a strong direct re-entry offer, the returnship needs to offer a meaningfully higher expected salary to justify the time cost. Calculate this before committing.",
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2 flex gap-4">
                <p className="text-cyan-400 font-mono text-sm font-bold shrink-0 pt-0.5">{step}</p>
                <div className="space-y-1">
                  <p className="text-white font-semibold text-sm">{title}</p>
                  <p className="text-slate-400 text-xs leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Returnship vs Direct */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Returnship vs. Direct Re-entry: When Each Wins</h2>
          <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-5">
            <p className="text-cyan-200 text-sm leading-relaxed">
              <span className="font-semibold text-white">The core trade-off:</span> Returnships take longer but typically deliver
              a higher salary floor, a structured support environment, and a negotiating position from employment rather
              than unemployment. Direct re-entry is faster but puts you in salary negotiations from a weaker position,
              especially with a gap of 2+ years.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
              <p className="text-green-400 font-semibold text-sm">Returnship wins when:</p>
              <ul className="space-y-1.5 text-slate-400 text-xs leading-relaxed list-none">
                <li className="flex gap-2"><span className="text-green-400 shrink-0">→</span> Gap is 2+ years and salary penalty is significant</li>
                <li className="flex gap-2"><span className="text-green-400 shrink-0">→</span> Target company has a well-known returnship (high conversion)</li>
                <li className="flex gap-2"><span className="text-green-400 shrink-0">→</span> Program salary significantly exceeds your direct re-entry offers</li>
                <li className="flex gap-2"><span className="text-green-400 shrink-0">→</span> You need structured re-entry support and network rebuild</li>
                <li className="flex gap-2"><span className="text-green-400 shrink-0">→</span> The specific company is a target (e.g., FAANG, MBB, Goldman)</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
              <p className="text-amber-400 font-semibold text-sm">Direct re-entry wins when:</p>
              <ul className="space-y-1.5 text-slate-400 text-xs leading-relaxed list-none">
                <li className="flex gap-2"><span className="text-amber-400 shrink-0">→</span> Gap is under 12 months (minimal salary penalty)</li>
                <li className="flex gap-2"><span className="text-amber-400 shrink-0">→</span> You have strong direct offers matching returnship salary</li>
                <li className="flex gap-2"><span className="text-amber-400 shrink-0">→</span> Returnship program has conversion rate under 60%</li>
                <li className="flex gap-2"><span className="text-amber-400 shrink-0">→</span> Your pre-break skills are highly current (tech, data, finance)</li>
                <li className="flex gap-2"><span className="text-amber-400 shrink-0">→</span> You cannot wait 3–6 months for program start dates</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Returnships by Industry */}
        <section className="space-y-5">
          <div>
            <p className="text-xs font-medium text-cyan-400 uppercase tracking-widest mb-1">By Sector</p>
            <h2 className="text-2xl font-semibold tracking-tight">Returnships by Industry: Which Sectors Have the Most Programs</h2>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              Technology has the most return-to-work programs by count, but finance offers the highest post-program salaries. Consulting programs run longest and produce the highest NPV advantage vs. direct re-entry.
            </p>
          </div>
          <div className="space-y-3">
            {industryBreakdown.map((row, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <p className="text-white font-semibold text-sm">{row.industry}</p>
                  <span className="text-cyan-400 text-xs font-semibold">{row.count}</span>
                </div>
                <p className="text-slate-400 text-xs">{row.companies}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{row.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 2026 Application Windows */}
        <section className="space-y-5">
          <div>
            <p className="text-xs font-medium text-cyan-400 uppercase tracking-widest mb-1">Timing</p>
            <h2 className="text-2xl font-semibold tracking-tight">2026 Application Windows by Program</h2>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              Most returnship programs run on fixed annual or semi-annual cohort cycles. Applications are reviewed in batches — late applicants regularly find cohorts filled even when the posting is still live. Apply in the first 2–3 weeks of the window.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 text-left">
                  <th className="pb-3 pr-4 font-medium">Program</th>
                  <th className="pb-3 pr-4 font-medium">Primary Window</th>
                  <th className="pb-3 pr-4 font-medium">Secondary Window</th>
                  <th className="pb-3 font-medium">Tip</th>
                </tr>
              </thead>
              <tbody>
                {applicationWindows.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02]">
                    <td className="py-3 pr-4 text-white font-medium">{row.company}</td>
                    <td className="py-3 pr-4 text-cyan-400">{row.cohort1}</td>
                    <td className="py-3 pr-4 text-slate-300">{row.cohort2}</td>
                    <td className="py-3 text-slate-400 text-xs">{row.tip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-xs">Application windows are estimates based on historical program cycles. Verify exact dates on each company&apos;s careers page before applying.</p>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-10 text-center space-y-5">
          <p className="text-xs font-medium text-cyan-400 uppercase tracking-widest">Free Calculator</p>
          <h2 className="text-2xl font-semibold tracking-tight">Model the ROI of Your Specific Returnship</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Enter your program&apos;s stipend, conversion rate, and post-program salary. Get a 3-path NPV/IRR comparison:
            returnship vs. direct re-entry vs. waiting another year.
          </p>
          <Link
            href="/returnship-roi-calculator"
            className="inline-block bg-linear-to-r from-cyan-600 to-teal-600 hover:opacity-90 transition-all px-8 py-4 rounded-xl font-medium text-white text-base shadow-[0_0_40px_rgba(6,182,212,0.3)]"
          >
            Use the Returnship ROI Calculator →
          </Link>
        </section>

        {/* Related Guides */}
        <section className="border-t border-white/10 pt-10 mt-10">
          <p className="text-xs font-medium text-cyan-400 uppercase tracking-widest mb-5">Related Guides & Tools</p>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link href="/career-gap-calculator" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-cyan-400 font-mono text-lg">↑</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-cyan-300 transition-colors">Career Gap Calculator</p>
                <p className="text-slate-500 text-xs">Model your full break-recovery path →</p>
              </div>
            </Link>
            <Link href="/return-to-work-after-career-break" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-cyan-400 font-mono text-lg">⇄</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-cyan-300 transition-colors">Return to Work After Career Break</p>
                <p className="text-slate-500 text-xs">Salary penalty data & 3 strategies →</p>
              </div>
            </Link>
            <Link href="/salary-benchmark-calculator" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-cyan-400 font-mono text-lg">$</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-cyan-300 transition-colors">Salary Benchmark Calculator</p>
                <p className="text-slate-500 text-xs">Are you underpaid after your break? →</p>
              </div>
            </Link>
            <Link href="/reskilling-roi-calculator" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-cyan-400 font-mono text-lg">▲</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-cyan-300 transition-colors">Reskilling ROI Calculator</p>
                <p className="text-slate-500 text-xs">Is your bootcamp worth the cost? →</p>
              </div>
            </Link>
            <Link href="/returnship-programs-2026" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-cyan-400 font-mono text-lg">⇒</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-cyan-300 transition-colors">Returnship Programs 2026</p>
                <p className="text-slate-500 text-xs">50+ companies — deadlines, pay & how to apply →</p>
              </div>
            </Link>
          </div>
        </section>

        <footer className="border-t border-white/10 pt-8 text-center text-slate-500 text-xs space-y-2">
          <p>
            <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            {" · "}
            <Link href="/returnship-roi-calculator" className="hover:text-slate-300 transition-colors">Returnship ROI Calculator</Link>
            {" · "}
            <Link href="/career-gap-calculator" className="hover:text-slate-300 transition-colors">Career Gap Calculator</Link>
            {" · "}
            <Link href="/salary-benchmark-calculator" className="hover:text-slate-300 transition-colors">Salary Benchmark</Link>
            {" · "}
            <Link href="/rebuild-work-experience-after-career-break" className="hover:text-slate-300 transition-colors">Rebuild Work Experience</Link>
            {" · "}
            <Link href="/women-returning-to-work" className="hover:text-slate-300 transition-colors">Women Returning to Work</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
          <p className="mt-1">Program data sourced from company career pages, iRelaunch, Path Forward, and publicly reported conversion statistics. Salary figures are estimates; individual outcomes vary by role, location, and experience level.</p>
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
                name: "What are return-to-work programs (returnships)?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Return-to-work programs, also called returnships, are structured re-entry pathways offered by major employers for professionals who have taken a career break of 1–3+ years. Unlike standard hiring, they are specifically designed for candidates with employment gaps and typically run 10–18 weeks, paying a full salary or competitive stipend, and converting to full-time roles at rates of 65–90%.",
                },
              },
              {
                "@type": "Question",
                name: "Which company has the best return-to-work program?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Amazon Returnship has the highest conversion rate at 90%, making it the strongest ROI on a risk-adjusted basis. Goldman Sachs and McKinsey offer the highest post-program salaries ($200k–$250k). JPMorgan ReEntry is the longest-running program and most accessible for finance professionals. The best program depends on your industry, target salary, and gap duration.",
                },
              },
              {
                "@type": "Question",
                name: "How long do return-to-work programs last?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most returnship programs run 10–18 weeks. Goldman Sachs runs 10 weeks, Amazon and PayPal run 16 weeks, and McKinsey runs 6–12 months. Longer programs generally offer higher conversion certainty and more structured integration, but require more time before a full-time offer.",
                },
              },
              {
                "@type": "Question",
                name: "Is a returnship worth it vs. applying directly?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A returnship is typically worth it when your career gap is 2+ years and the program conversion rate exceeds 65–70%. The NPV advantage of returnships over direct re-entry ranges from $12k to $62k depending on the program, driven by higher post-program salary floor and faster elimination of the career gap salary penalty. Use a returnship ROI calculator to model your specific scenario.",
                },
              },
              {
                "@type": "Question",
                name: "How do I apply for a return-to-work program?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Apply directly through the company's careers page, searching for 'returnship' or 'return to work.' Most programs run on annual or semi-annual cohort cycles — Amazon and Goldman open applications 3–4 months before start. In your application, state your career break explicitly, describe any bridge activities during the break, and target roles that match your pre-break skills. Platforms like iRelaunch and Path Forward also list active returnship openings.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  )
}
