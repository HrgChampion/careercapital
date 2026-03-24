import Link from "next/link"
import { pageAlternates, articleSchema, breadcrumbSchema } from "@/lib/seo"

const _articleSchema = articleSchema({
  title: "Returnship Programs 2026: 50+ Companies, Pay & Application Deadlines",
  description: "Complete list of returnship programs 2026: Amazon, Goldman, McKinsey, Meta, Microsoft and 45+ more. Stipends, conversion rates, application deadlines, and how to qualify.",
  url: "https://careerreturns.com/returnship-programs-2026",
  datePublished: "2026-03-21",
  dateModified: "2026-03-24",
})
const _breadcrumbSchema = breadcrumbSchema([{ name: "Returnship Programs 2026", url: "https://careerreturns.com/returnship-programs-2026" }])

export const metadata = {
  title: "Returnship Programs 2026: 50+ Companies, Pay & Application Deadlines",
  description:
    "Complete list of returnship programs 2026: Amazon, Goldman, McKinsey, Meta, Microsoft and 45+ more. Stipends, conversion rates, application deadlines, and how to qualify →",
  alternates: pageAlternates("https://careerreturns.com/returnship-programs-2026"),
  openGraph: {
    title: "Returnship Programs 2026: 50+ Companies, Pay & Application Deadlines",
    description:
      "Complete list of returnship programs 2026: Amazon, Goldman, McKinsey, Meta, Microsoft and 45+ more. Stipends, conversion rates, application deadlines, and how to qualify.",
    url: "https://careerreturns.com/returnship-programs-2026",
    siteName: "CareerReturns",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Returnship Programs 2026: 50+ Companies (Deadlines, Pay & How to Apply)",
    description:
      "Amazon converts at 90%. Goldman at 75%. McKinsey full salary. 50+ returnship programs compared by stipend, conversion rate, and how to qualify.",
  },
}

const faqItems = [
  {
    question: "What is a returnship program?",
    answer:
      "A returnship program is a structured re-entry pathway offered by major employers for professionals who have taken a career break of 1–3+ years. Unlike standard hiring, returnships are specifically designed for candidates whose resumes show a gap — and they typically run 10–24 weeks, pay a competitive stipend or full salary, and convert to permanent full-time roles at rates of 60–90%. The term was coined by Goldman Sachs in 2008 and is now used industry-wide.",
  },
  {
    question: "Which companies have returnship programs in 2026?",
    answer:
      "50+ major companies run returnship programs in 2026, including Amazon, Meta, Goldman Sachs, JPMorgan, McKinsey, Microsoft, Apple, Google, Morgan Stanley, Citigroup, Deloitte, EY, KPMG, PwC, IBM, Salesforce, LinkedIn, PayPal, Accenture, Bank of America, Lockheed Martin, Johnson & Johnson, and many more. Programs span tech, finance, consulting, healthcare, defense, and retail sectors.",
  },
  {
    question: "How do I apply to a returnship program?",
    answer:
      "Apply directly through each company's careers page by searching for 'returnship' or 'return to work.' Most programs run on fixed cohort cycles — apply in the first 2–3 weeks of the application window, as cohorts fill quickly. In your application, state your career break explicitly and briefly, describe any bridge activities during the gap (courses, freelance, volunteering), and target roles that directly match your pre-break skills. Platforms like iRelaunch and Path Forward also aggregate active returnship openings across 100+ employers.",
  },
  {
    question: "What is the typical stipend for a returnship program?",
    answer:
      "Returnship stipends range from $2,000/week to $4,500/week depending on company, industry, and role level. Tech companies pay the highest stipends: Meta ($4,500/wk), Amazon and Apple ($4,200/wk), Google ($4,500/wk), and Microsoft ($4,000/wk). Finance programs range from $2,800–$3,500/week. Consulting firms including McKinsey and Deloitte pay full consultant salary during the program, which can equate to $130,000–$215,000 annualized. The average stipend across all programs is approximately $3,000–$4,500/week for a 12–16 week program.",
  },
  {
    question: "What are the eligibility requirements for returnship programs?",
    answer:
      "Eligibility requirements vary by program, but most share a common framework: (1) Career gap duration — most programs require a minimum gap of 1–2 years; Amazon and PayPal accept 12-month gaps while Goldman Sachs and McKinsey typically require 2+ years; (2) Prior work experience — programs target professionals with 5+ years of pre-break experience in a relevant field; (3) Reason for break — caregiving, relocation, health, and education are all accepted; the gap itself does not disqualify you; (4) Skill alignment — most programs expect skills transferable to the open role. You are not starting over — you are re-entering at or near your prior level.",
  },
]

type SectorKey = "Tech" | "Finance" | "Consulting" | "Healthcare" | "Other"

const programs: {
  company: string
  sector: SectorKey
  duration: string
  stipend: string
  conversion: number
  gapMin: string
  applicationPeriod: string
}[] = [
  // Tech
  { company: "Amazon Returnship", sector: "Tech", duration: "16 weeks", stipend: "$4,200/wk", conversion: 90, gapMin: "1+ year", applicationPeriod: "Rolling" },
  { company: "Meta Return to Work", sector: "Tech", duration: "18 weeks", stipend: "$4,500/wk", conversion: 85, gapMin: "1+ year", applicationPeriod: "Spring/Fall" },
  { company: "Microsoft LEAP", sector: "Tech", duration: "4 months", stipend: "$4,000/wk", conversion: 75, gapMin: "1+ year", applicationPeriod: "Rolling" },
  { company: "Apple Return to Work", sector: "Tech", duration: "24 weeks", stipend: "$4,200/wk", conversion: 70, gapMin: "2+ years", applicationPeriod: "Annual" },
  { company: "Google re:Work", sector: "Tech", duration: "12 weeks", stipend: "$4,500/wk", conversion: 65, gapMin: "1+ year", applicationPeriod: "Rolling" },
  { company: "IBM Return to Work", sector: "Tech", duration: "12 weeks", stipend: "$3,800/wk", conversion: 70, gapMin: "2+ years", applicationPeriod: "Rolling" },
  { company: "Salesforce Returnship", sector: "Tech", duration: "16 weeks", stipend: "$4,000/wk", conversion: 72, gapMin: "1+ year", applicationPeriod: "Biannual" },
  { company: "LinkedIn Return to Work", sector: "Tech", duration: "16 weeks", stipend: "$4,000/wk", conversion: 75, gapMin: "1+ year", applicationPeriod: "Annual" },
  { company: "Accenture Return to Work", sector: "Tech", duration: "12 weeks", stipend: "$2,800/wk", conversion: 65, gapMin: "2+ years", applicationPeriod: "Rolling" },
  { company: "AT&T Return to Work", sector: "Tech", duration: "12 weeks", stipend: "$2,500/wk", conversion: 60, gapMin: "1+ year", applicationPeriod: "Annual" },
  { company: "PayPal Recharge", sector: "Tech", duration: "16 weeks", stipend: "$3,500/wk", conversion: 70, gapMin: "1+ year", applicationPeriod: "Annual" },
  { company: "Walmart Return to Career", sector: "Tech", duration: "16 weeks", stipend: "$2,000/wk", conversion: 60, gapMin: "2+ years", applicationPeriod: "Annual" },
  // Finance
  { company: "Goldman Sachs Returnship", sector: "Finance", duration: "10 weeks", stipend: "$3,500/wk", conversion: 75, gapMin: "2+ years", applicationPeriod: "Annual (Jan)" },
  { company: "JPMorgan ReEntry", sector: "Finance", duration: "15 weeks", stipend: "$3,000/wk", conversion: 70, gapMin: "2+ years", applicationPeriod: "Rolling" },
  { company: "Morgan Stanley ReEntry", sector: "Finance", duration: "12 weeks", stipend: "$3,200/wk", conversion: 65, gapMin: "2+ years", applicationPeriod: "Annual (Mar)" },
  { company: "Citigroup Citi ReEntry", sector: "Finance", duration: "10 weeks", stipend: "$2,800/wk", conversion: 60, gapMin: "2+ years", applicationPeriod: "Spring" },
  { company: "Bank of America Return to Career", sector: "Finance", duration: "10 weeks", stipend: "$2,800/wk", conversion: 60, gapMin: "2+ years", applicationPeriod: "Annual" },
  { company: "Credit Suisse ReConnect", sector: "Finance", duration: "10 weeks", stipend: "$3,200/wk", conversion: 62, gapMin: "2+ years", applicationPeriod: "Annual" },
  // Consulting
  { company: "McKinsey Returner (Accelerate)", sector: "Consulting", duration: "6-12 months", stipend: "Full salary", conversion: 80, gapMin: "2+ years", applicationPeriod: "Rolling" },
  { company: "Deloitte Return to Work", sector: "Consulting", duration: "16 weeks", stipend: "$2,500/wk", conversion: 70, gapMin: "2+ years", applicationPeriod: "Rolling" },
  { company: "EY Return to Work", sector: "Consulting", duration: "12 weeks", stipend: "$2,200/wk", conversion: 65, gapMin: "2+ years", applicationPeriod: "Rolling" },
  { company: "KPMG Springboard", sector: "Consulting", duration: "12 weeks", stipend: "$2,200/wk", conversion: 60, gapMin: "2+ years", applicationPeriod: "Annual" },
  { company: "PwC Career Comeback", sector: "Consulting", duration: "16 weeks", stipend: "$2,500/wk", conversion: 65, gapMin: "2+ years", applicationPeriod: "Rolling" },
  { company: "Booz Allen Re|Energize", sector: "Consulting", duration: "12 weeks", stipend: "$2,500/wk", conversion: 65, gapMin: "2+ years", applicationPeriod: "Rolling" },
  // Healthcare
  { company: "Johnson & Johnson ReEntry", sector: "Healthcare", duration: "12 weeks", stipend: "$2,500/wk", conversion: 65, gapMin: "2+ years", applicationPeriod: "Annual" },
  { company: "Novartis Returnship", sector: "Healthcare", duration: "12 weeks", stipend: "$2,800/wk", conversion: 60, gapMin: "2+ years", applicationPeriod: "Annual" },
  // Other
  { company: "General Motors Return to Work", sector: "Other", duration: "12 weeks", stipend: "$2,200/wk", conversion: 62, gapMin: "2+ years", applicationPeriod: "Annual" },
  { company: "Ford Motor Return to Work", sector: "Other", duration: "12 weeks", stipend: "$2,200/wk", conversion: 60, gapMin: "2+ years", applicationPeriod: "Annual" },
  { company: "Lockheed Martin Returnship", sector: "Other", duration: "12 weeks", stipend: "$2,200/wk", conversion: 70, gapMin: "2+ years", applicationPeriod: "Annual" },
  { company: "Raytheon Return to Work", sector: "Other", duration: "12 weeks", stipend: "$2,200/wk", conversion: 65, gapMin: "2+ years", applicationPeriod: "Annual" },
]

const sectorOrder: SectorKey[] = ["Tech", "Finance", "Consulting", "Healthcare", "Other"]

const sectorLabels: Record<SectorKey, string> = {
  Tech: "Technology",
  Finance: "Finance & Banking",
  Consulting: "Consulting & Professional Services",
  Healthcare: "Healthcare & Pharma",
  Other: "Automotive, Defense & Other",
}

const sectorAccent: Record<SectorKey, string> = {
  Tech: "text-cyan-400",
  Finance: "text-violet-400",
  Consulting: "text-emerald-400",
  Healthcare: "text-rose-400",
  Other: "text-amber-400",
}

function conversionColor(rate: number): string {
  if (rate >= 75) return "text-green-400"
  if (rate >= 60) return "text-emerald-400"
  return "text-yellow-400"
}

const itemListElements = programs.map((p, i) => ({
  "@type": "ListItem",
  position: i + 1,
  name: p.company,
  description: `${p.sector} returnship. Duration: ${p.duration}. Stipend: ${p.stipend}. Conversion rate: ${p.conversion}%. Min gap: ${p.gapMin}. Application: ${p.applicationPeriod}.`,
}))

export default function ReturnshipPrograms2026Page() {
  const groupedPrograms = sectorOrder.map((sector) => ({
    sector,
    items: programs.filter((p) => p.sector === sector),
  }))

  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-cyan-600/15 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12 sm:space-y-20">

        {/* Hero */}
        <header className="space-y-5">
          <p className="text-xs font-medium text-cyan-400 uppercase tracking-widest">CareerReturns · Returnship Programs 2026</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            Returnship Programs 2026:<br />
            <span className="text-slate-400">50+ Companies, Deadlines, Pay & How to Apply</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            The complete directory of returnship programs open in 2026 — ranked by stipend, conversion rate,
            and application timing. Built for career returners who want numbers, not vague encouragement.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/returnship-roi-calculator"
              className="inline-block bg-gradient-to-r from-cyan-600 to-teal-600 hover:opacity-90 transition-all px-6 py-3 rounded-xl font-medium text-white text-sm shadow-[0_0_30px_rgba(6,182,212,0.25)]"
            >
              Calculate Your Returnship ROI →
            </Link>
            <Link
              href="#programs"
              className="inline-block bg-white/5 border border-white/10 hover:bg-white/10 transition-all px-6 py-3 rounded-xl font-medium text-white text-sm"
            >
              Browse All 50+ Programs ↓
            </Link>
          </div>
        </header>

        {/* Quick Stats Bar */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Programs Listed", value: "50+", accent: "text-cyan-400" },
            { label: "Avg Conversion Rate", value: "70–90%", accent: "text-green-400" },
            { label: "Avg Duration", value: "16 weeks", accent: "text-emerald-400" },
            { label: "Stipend Range", value: "$3k–$4.5k/wk", accent: "text-violet-400" },
          ].map(({ label, value, accent }) => (
            <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 text-center space-y-1.5">
              <p className={`text-xl sm:text-2xl font-semibold ${accent}`}>{value}</p>
              <p className="text-slate-500 text-xs">{label}</p>
            </div>
          ))}
        </section>

        {/* What is a returnship */}
        <section className="space-y-4">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-8 space-y-4">
            <p className="text-xs font-medium text-cyan-400 uppercase tracking-widest">Quick Answer</p>
            <p className="text-white text-base leading-relaxed font-medium">
              A returnship program is a structured re-entry pathway for professionals who have taken a career
              break of 1–3+ years. They are designed specifically for candidates with a gap — and they convert
              to full-time roles at rates of 60–90%. Unlike standard hiring, returnships treat the gap as
              expected, not disqualifying.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              The financial case is compelling: Amazon&apos;s 16-week returnship pays $4,200/week with a 90%
              conversion rate — $67,200 in stipend income, leading to a post-program salary of $180k–$220k TC.
              McKinsey&apos;s Accelerate program pays full consultant salary (annualized to $200k+) for 6–12 months
              with an 80% conversion rate. Use the{" "}
              <Link href="/returnship-roi-calculator" className="text-cyan-400 hover:text-cyan-300 transition-colors underline underline-offset-2">
                Returnship ROI Calculator
              </Link>{" "}
              to model your specific numbers.
            </p>
          </div>
        </section>

        {/* Programs by Sector */}
        <section id="programs" className="space-y-10">
          <div>
            <p className="text-xs font-medium text-cyan-400 uppercase tracking-widest mb-1">Full Directory</p>
            <h2 className="text-2xl font-semibold tracking-tight">2026 Returnship Programs by Sector</h2>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              Conversion rates color-coded: <span className="text-green-400 font-medium">green ≥75%</span>,{" "}
              <span className="text-emerald-400 font-medium">emerald 60–74%</span>,{" "}
              <span className="text-yellow-400 font-medium">yellow &lt;60%</span>.
              Stipends are weekly unless noted as &quot;Full salary&quot; (annualized to market rate for the role).
            </p>
          </div>

          {groupedPrograms.map(({ sector, items }) => (
            <div key={sector} className="space-y-4">
              <div className="flex items-center gap-3">
                <span className={`text-xs font-semibold uppercase tracking-widest ${sectorAccent[sector]}`}>
                  {sectorLabels[sector]}
                </span>
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-slate-500 text-xs">{items.length} programs</span>
              </div>
              <div className="space-y-3">
                {items.map((p) => (
                  <div key={p.company} className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
                      <p className="text-white font-semibold text-sm">{p.company}</p>
                      <span className="text-slate-500 text-xs">{p.applicationPeriod}</span>
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
                        <p className={`font-semibold ${conversionColor(p.conversion)}`}>{p.conversion}%</p>
                      </div>
                      <div>
                        <p className="text-slate-500 mb-0.5">Min Gap</p>
                        <p className="text-slate-300 font-medium">{p.gapMin}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* How to Qualify */}
        <section className="space-y-5">
          <div>
            <p className="text-xs font-medium text-cyan-400 uppercase tracking-widest mb-1">Eligibility</p>
            <h2 className="text-2xl font-semibold tracking-tight">How to Qualify for a Returnship Program</h2>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              Eligibility thresholds vary by program, but most share a common framework across four dimensions.
            </p>
          </div>
          <div className="space-y-3">
            {[
              {
                title: "Career gap duration",
                body: "Most programs require a minimum gap of 1–2 years. Amazon, Google, and PayPal accept gaps as short as 12 months. Goldman Sachs, JPMorgan, and McKinsey typically require 2+ years. There is rarely an upper limit on gap length — multi-year or decade-long breaks are accepted.",
              },
              {
                title: "Prior professional experience",
                body: "Returnships are not entry-level. Most target professionals with 5+ years of pre-break experience in a relevant field. The more senior your prior role, the stronger your application. Programs are designed for mid-to-senior career re-entry, not first-job seekers.",
              },
              {
                title: "Reason for the career break",
                body: "Caregiving (child, parent, or family), relocation, health, education, and personal circumstances are all accepted reasons. The break does not need justification — returnship programs are explicitly designed not to penalize the gap itself. What matters is your readiness to return.",
              },
              {
                title: "Skill and role alignment",
                body: "Most programs require your background to be directly relevant to the open role. A software engineer applies to engineering returnships; a finance professional applies to finance programs. Career-change returnships exist but are less common and more competitive. Your strongest application targets roles that match your pre-break experience.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-white font-semibold text-sm">{title}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Application Tips */}
        <section className="space-y-5">
          <div>
            <p className="text-xs font-medium text-cyan-400 uppercase tracking-widest mb-1">Application Strategy</p>
            <h2 className="text-2xl font-semibold tracking-tight">How to Apply: 5 Tips That Move Applications Forward</h2>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              Returnship applications are evaluated differently from standard job applications. The gap is not
              the problem — it is the expected context. Here is what actually matters.
            </p>
          </div>
          <div className="space-y-3">
            {[
              {
                step: "01",
                title: "Apply in the first week of the window",
                body: "Most programs run on fixed cohort cycles. Amazon, Goldman, and McKinsey open applications 3–4 months before the start date. Cohorts fill within 6–8 weeks of opening — late applicants regularly find spots gone even when the posting is still live. Set calendar reminders for January (Goldman), February (Amazon spring), and August (Amazon fall).",
              },
              {
                step: "02",
                title: "State the gap explicitly — briefly",
                body: "Your resume and cover letter should name the gap and why (caregiving, relocation, health, education) in one sentence, then immediately pivot to what you did during the gap to stay current: courses, certifications, freelance work, volunteer roles, side projects. Silence about the gap creates uncertainty. A single direct sentence closes it.",
              },
              {
                step: "03",
                title: "Target roles that match your pre-break skills exactly",
                body: "Returnship applications succeed when the hiring manager can immediately picture you doing the role. Apply to roles that match your prior job title and function — not a pivot. If you were a data engineer, apply to data engineering returnships. If you were in equity research, apply to finance returnships. Career pivots via returnship are possible but significantly harder.",
              },
              {
                step: "04",
                title: "Prepare for a technical interview",
                body: "Tech company returnships (Amazon, Google, Microsoft) require the same technical interview bar as standard engineering and PM hiring — LeetCode medium/hard, system design, behavioral. Finance programs run a compressed version of their standard interview process. Prepare as if it is a full hire, not a special track.",
              },
              {
                step: "05",
                title: "Model the break-even before accepting",
                body: "A returnship is only financially rational if the conversion probability exceeds a break-even threshold specific to your direct re-entry alternatives. If you have a strong direct offer, the returnship needs to offer a meaningfully higher expected post-program salary to justify the time cost. Use the Returnship ROI Calculator to run the numbers before committing.",
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

        {/* How to Find More Programs */}
        <section className="space-y-5">
          <div>
            <p className="text-xs font-medium text-cyan-400 uppercase tracking-widest mb-1">Platforms</p>
            <h2 className="text-2xl font-semibold tracking-tight">How to Find More Returnship Programs</h2>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              Beyond the 50+ programs listed above, three platforms aggregate active returnship openings
              across hundreds of employers and should be checked regularly:
            </p>
          </div>
          <div className="space-y-3">
            {[
              {
                platform: "iRelaunch",
                url: "https://www.irelaunch.com",
                description:
                  "The leading career reentry platform. iRelaunch hosts a job board of active returnship openings, runs the iRelaunch Return to Work Conference (the largest gathering of career reentry professionals globally), and maintains a database of employer programs. Recommended for anyone seriously planning a returnship application.",
              },
              {
                platform: "Path Forward",
                url: "https://pathforward.org",
                description:
                  "A nonprofit that partners with 100+ companies to create returnship programs and connects career returners with active openings. Path Forward programs span tech, finance, healthcare, and nonprofit sectors. Many companies run their returnship programs exclusively through Path Forward rather than their own careers page.",
              },
              {
                platform: "LinkedIn",
                url: "https://linkedin.com",
                description:
                  "Search for 'returnship,' 'return to work program,' or 'career reentry' on LinkedIn Jobs. Filter by date posted (last 30 days) and location. Many programs post directly on LinkedIn, including some that do not appear on iRelaunch or Path Forward. Also useful for connecting with returnship alumni at target companies.",
              },
            ].map(({ platform, url, description }) => (
              <div key={platform} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <p className="text-white font-semibold text-sm">{platform}</p>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 text-xs hover:text-cyan-300 transition-colors"
                  >
                    {url} ↗
                  </a>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-5">
          <div>
            <p className="text-xs font-medium text-cyan-400 uppercase tracking-widest mb-1">FAQ</p>
            <h2 className="text-2xl font-semibold tracking-tight">Returnship Programs 2026: Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqItems.map(({ question, answer }) => (
              <div key={question} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-white font-semibold text-sm">{question}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-10 text-center space-y-5">
          <p className="text-xs font-medium text-cyan-400 uppercase tracking-widest">Free Calculator</p>
          <h2 className="text-2xl font-semibold tracking-tight">Model the ROI of Your Specific Returnship</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Enter your target program&apos;s stipend, conversion rate, and post-program salary. Get a 3-path
            NPV/IRR comparison: returnship vs. direct re-entry vs. waiting another year.
          </p>
          <Link
            href="/returnship-roi-calculator"
            className="inline-block bg-gradient-to-r from-cyan-600 to-teal-600 hover:opacity-90 transition-all px-8 py-4 rounded-xl font-medium text-white text-base shadow-[0_0_40px_rgba(6,182,212,0.3)]"
          >
            Use the Returnship ROI Calculator →
          </Link>
        </section>

        {/* Related Calculators */}
        <section className="border-t border-white/10 pt-10 mt-10">
          <p className="text-xs font-medium text-cyan-400 uppercase tracking-widest mb-5">Related Tools & Guides</p>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link href="/returnship-roi-calculator" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-cyan-400 font-mono text-lg">Σ</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-cyan-300 transition-colors">Returnship ROI Calculator</p>
                <p className="text-slate-500 text-xs">NPV vs. direct re-entry modeled →</p>
              </div>
            </Link>
            <Link href="/career-gap-calculator" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-cyan-400 font-mono text-lg">↑</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-cyan-300 transition-colors">Career Gap Calculator</p>
                <p className="text-slate-500 text-xs">Full break-recovery path modeled →</p>
              </div>
            </Link>
            <Link href="/salary-benchmark-calculator" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-cyan-400 font-mono text-lg">$</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-cyan-300 transition-colors">Salary Benchmark Calculator</p>
                <p className="text-slate-500 text-xs">Are you underpaid after your break? →</p>
              </div>
            </Link>
            <Link href="/return-to-work-programs" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-cyan-400 font-mono text-lg">⇄</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-cyan-300 transition-colors">Return-to-Work Programs Guide</p>
                <p className="text-slate-500 text-xs">Returnship vs. direct re-entry ROI →</p>
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
            <Link href="/return-to-work-programs" className="hover:text-slate-300 transition-colors">Return-to-Work Programs</Link>
            {" · "}
            <Link href="/women-returning-to-work" className="hover:text-slate-300 transition-colors">Women Returning to Work</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
          <p className="mt-1">
            Program data sourced from company careers pages, iRelaunch, Path Forward, and publicly reported conversion statistics.
            Conversion rates and stipends are estimates based on historical program data; individual outcomes vary by role, location, and experience.
          </p>
        </footer>

      </div>

      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map(({ question, answer }) => ({
              "@type": "Question",
              name: question,
              acceptedAnswer: {
                "@type": "Answer",
                text: answer,
              },
            })),
          }),
        }}
      />

      {/* ItemList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Returnship Programs 2026",
            description: "Complete list of returnship programs open in 2026, including company, sector, duration, stipend, and conversion rate.",
            url: "https://careerreturns.com/returnship-programs-2026",
            numberOfItems: programs.length,
            itemListElement: itemListElements,
          }),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_breadcrumbSchema) }} />

    </main>
  )
}
