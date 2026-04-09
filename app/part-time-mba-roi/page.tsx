import Link from "next/link"
import { pageAlternates, articleSchema, breadcrumbSchema } from "@/lib/seo"

const _articleSchema = articleSchema({
  title: "Part-Time MBA ROI 2026: The Format Most Financial Analyses Get Wrong",
  description:
    "Part-time MBA ROI 2026: how zero opportunity cost changes the math, break-even profiles, salary outcomes, accreditation guide, and when part-time loses to full-time.",
  url: "https://careerreturns.com/part-time-mba-roi",
  datePublished: "2026-04-09",
  dateModified: "2026-04-09",
})

const _breadcrumbSchema = breadcrumbSchema([
  { name: "MBA ROI Hub", url: "https://careerreturns.com/mba-roi" },
  { name: "Part-Time MBA ROI", url: "https://careerreturns.com/part-time-mba-roi" },
])

export const metadata = {
  title: "Part-Time MBA ROI 2026: The Format Most Financial Analyses Get Wrong",
  description:
    "Part-time MBA ROI 2026: zero opportunity cost, break-even profiles, salary outcomes, when it beats full-time, and which accredited programs matter most.",
  alternates: pageAlternates("https://careerreturns.com/part-time-mba-roi"),
  openGraph: {
    title: "Part-Time MBA ROI 2026: The Format Most Financial Analyses Get Wrong",
    description:
      "Part-time MBA ROI 2026: zero opportunity cost, break-even profiles, salary outcomes, when it beats full-time, and which accredited programs matter most.",
    url: "https://careerreturns.com/part-time-mba-roi",
    siteName: "CareerReturns",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@careerreturns",
    title: "Part-Time MBA ROI 2026: The Format Most Financial Analyses Get Wrong",
    description:
      "Part-time MBA ROI 2026: zero opportunity cost, break-even profiles, salary outcomes, and which programs actually matter.",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is a part-time MBA worth it financially?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A part-time MBA is financially worth it when three conditions are met: (1) you attend an AACSB-accredited program, (2) you have a specific promotion or role change tied to the credential — not just general upskilling, and (3) the tuition is $65,000 or under, or you receive employer reimbursement. Programs costing $80,000–$120,000 with no employer subsidy require a $30,000+ annual salary delta to generate IRR above 10%, which is achievable but requires deliberate career positioning.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a part-time MBA increase salary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The average salary increase after a part-time MBA is $18,000–$35,000 per year within 24 months of graduation. This is substantially lower than the $50,000–$100,000 delta from full-time M7 programs, but part-time tuition is also 70–80% lower. The important benchmark is ROI, not raw delta. A $25,000 annual gain on $55,000 in tuition with zero opportunity cost produces IRR of 20–25%, which is competitive with full-time MBA economics.",
      },
    },
    {
      "@type": "Question",
      name: "Do employers value a part-time MBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Employer recognition of part-time MBA credentials depends heavily on the program's accreditation and brand. AACSB-accredited programs from recognized schools (Booth, Kellogg, Haas, Stern, Ross, Kelley, Marshall) are generally well-regarded by employers for internal promotion purposes. For external lateral moves or career pivots into consulting or banking, part-time MBA credentials carry less weight than full-time programs because they do not participate in on-campus recruiting.",
      },
    },
    {
      "@type": "Question",
      name: "Does accreditation matter for a part-time MBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AACSB accreditation is essential for part-time MBA programs. Non-AACSB programs are frequently not recognized by HR systems, excluded from tuition reimbursement programs, and do not appear on employer-recognized school lists. Among accredited programs, there is significant variation in brand strength by region and industry. A part-time MBA from a non-AACSB program is unlikely to generate salary lift and should not be pursued as a career investment.",
      },
    },
    {
      "@type": "Question",
      name: "When should I choose part-time MBA over full-time MBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Choose part-time MBA over full-time when: (1) you want to advance within your current industry rather than switch careers, (2) you cannot afford or do not want to lose 2 years of salary, (3) your employer provides tuition assistance, or (4) you have family or financial obligations that make full-time enrollment impractical. Choose full-time over part-time when you need access to MBB consulting, investment banking, or big tech product management recruiting pipelines — these firms exclusively recruit from full-time programs.",
      },
    },
  ],
}

const programFormats = [
  {
    format: "Evening / Weekend Programs",
    tuition: "$40K–$80K",
    duration: "2.5–3 years",
    schedule: "2–3 evenings/week + Saturday",
    notes: "Booth Evening/Weekend, Kellogg Evening, Haas Flex — flagship flexibility programs at top programs",
    color: "text-violet-400",
  },
  {
    format: "Flex / Modular Programs",
    tuition: "$45K–$75K",
    duration: "2–3 years",
    schedule: "Flexible pacing with periodic intensives",
    notes: "Designed for heavy travel schedules; complete courses in condensed weekend modules",
    color: "text-violet-400",
  },
  {
    format: "Online Part-Time (AACSB-Accredited)",
    tuition: "$25K–$60K",
    duration: "18–30 months",
    schedule: "Async + 1–2 annual residencies",
    notes: "UNC Kenan-Flagler, Indiana Kelley Direct, USC Marshall; asynchronous with live sessions",
    color: "text-sky-400",
  },
  {
    format: "Executive Part-Time (Blended)",
    tuition: "$80K–$120K",
    duration: "18–24 months",
    schedule: "Monthly weekend intensives + online",
    notes: "Targets directors/VPs; smaller cohorts; structured for senior schedules",
    color: "text-amber-400",
  },
]

export default function PartTimeMbaRoiPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-violet-600/15 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12 sm:space-y-20">

        {/* ── Header ── */}
        <header className="space-y-5">
          <p className="text-xs font-medium text-violet-400 uppercase tracking-widest">CareerReturns · MBA ROI Hub</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            Part-Time MBA ROI 2026:<br />
            <span className="text-slate-400">The Format Most Financial Analyses Get Wrong</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Part-time MBA eliminates opportunity cost entirely. Unlike full-time, you keep earning
            while studying. That changes the ROI formula — and most online comparisons get it completely
            wrong by benchmarking part-time tuition against full-time tuition{" "}
            <span className="text-white font-medium">without accounting for 2–3 years of continued salary</span>.
          </p>
          <div className="flex items-center gap-3 pt-1 border-t border-white/8">
            <div className="w-7 h-7 rounded-full bg-violet-600/20 border border-violet-500/30 flex items-center justify-center flex-shrink-0">
              <span className="text-violet-400 text-xs font-semibold">HG</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-white font-medium">Himanshu Gauba</span>
              <span className="text-slate-600 text-xs">·</span>
              <span className="text-slate-500 text-xs">Updated April 9, 2026</span>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Tuition Range", value: "$25K–$80K" },
              { label: "Opportunity Cost", value: "$0" },
              { label: "Salary Delta", value: "$18K–$35K" },
              { label: "Break-Even Range", value: "2–4 yrs" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <p className="text-violet-400 font-semibold text-lg">{value}</p>
                <p className="text-slate-500 text-xs mt-1">{label}</p>
              </div>
            ))}
          </div>
        </header>

        {/* ── Section 1: Why Part-Time MBA ROI Is Underrated ── */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Why Part-Time MBA ROI Is Underrated</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Most online MBA comparison articles make the same structural error: they compare the tuition
            cost of a part-time program to the tuition cost of a full-time program. That comparison is
            numerically easy and analytically useless, because it omits the largest cost in the entire
            full-time MBA model — opportunity cost.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            A full-time MBA student who leaves a $90,000 job to attend a two-year program foregoes
            approximately{" "}
            <span className="text-white font-medium">$180,000 in gross salary</span> over 24 months —
            before accounting for benefits, employer 401(k) contributions, and career progression they
            would have received if they had stayed employed. For someone earning $110,000, that number
            is <span className="text-white font-medium">$220,000</span> in foregone income. For someone
            at $130,000, it is <span className="text-white font-medium">$260,000</span>.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            The part-time MBA student collects every dollar of that salary while enrolled. They receive
            their salary, their benefits, and often continue accruing equity, promotions, and experience
            credit during the exact same 2–3 year window. The economic comparison is not
            &ldquo;$55,000 part-time tuition vs. $225,000 full-time tuition.&rdquo; It is:
          </p>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-4">
            <p className="text-violet-400 font-semibold text-sm">True Economic Cost Comparison</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-white font-medium text-sm">Full-Time MBA (M7)</p>
                <div className="space-y-1 text-xs text-slate-400">
                  <div className="flex justify-between"><span>Tuition + fees</span><span className="text-slate-300">$200K–$240K</span></div>
                  <div className="flex justify-between"><span>Living expenses (no salary)</span><span className="text-slate-300">$40K–$60K</span></div>
                  <div className="flex justify-between"><span>Foregone salary (2 yrs, $90K base)</span><span className="text-slate-300">$180K</span></div>
                  <div className="flex justify-between border-t border-white/10 pt-1 mt-1"><span className="text-white font-medium">True economic outflow</span><span className="text-red-400 font-semibold">$420K–$480K</span></div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-white font-medium text-sm">Part-Time MBA (Evening Program)</p>
                <div className="space-y-1 text-xs text-slate-400">
                  <div className="flex justify-between"><span>Tuition + fees</span><span className="text-slate-300">$40K–$80K</span></div>
                  <div className="flex justify-between"><span>Living expenses (on salary)</span><span className="text-slate-300">Normal budget</span></div>
                  <div className="flex justify-between"><span>Foregone salary</span><span className="text-emerald-400">$0</span></div>
                  <div className="flex justify-between border-t border-white/10 pt-1 mt-1"><span className="text-white font-medium">True economic outflow</span><span className="text-violet-400 font-semibold">$40K–$80K</span></div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            When you frame the comparison correctly, part-time MBA economics are substantially stronger
            than most analyses suggest. The required salary delta to generate IRR above 15% at $55,000
            tuition is approximately <span className="text-white font-medium">$9,000–$12,000 per year</span>.
            That is a low bar — nearly any promotion from individual contributor to manager or manager to
            director will exceed it.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            The fundamental tradeoff is not cost — it is access. Part-time programs do not provide the
            recruiting pipelines that make full-time M7 programs worth $420,000–$480,000. If you need
            MBB, investment banking, or Silicon Valley product management access, part-time is the wrong
            vehicle. If you want to advance within your current industry, the economics are often superior.
          </p>
        </section>

        {/* ── Section 2: Part-Time MBA Cost by Format ── */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Part-Time MBA Cost by Format (2026)</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Part-time MBA programs come in several delivery formats, each with different cost structures,
            schedules, and target audiences. Total program cost (tuition, fees, and required materials,
            excluding living expenses) ranges from $25,000 to $120,000 depending on format, tier, and residency structure.
          </p>
          <div className="space-y-3">
            {programFormats.map(({ format, tuition, duration, schedule, notes, color }) => (
              <div key={format} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <p className="text-white font-medium text-sm">{format}</p>
                  <p className={`${color} font-semibold text-sm whitespace-nowrap`}>{tuition}</p>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div><p className="text-slate-500 mb-0.5">Duration</p><p className="text-slate-300">{duration}</p></div>
                  <div><p className="text-slate-500 mb-0.5">Schedule</p><p className="text-slate-300">{schedule}</p></div>
                </div>
                <p className="text-slate-500 text-xs">{notes}</p>
              </div>
            ))}
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
            <p className="text-violet-400 font-semibold text-sm">Cost Inputs That Affect True Program Cost</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Sticker tuition understates the true program investment for part-time students.
              Additional costs to factor into your model:
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><span className="text-white font-medium">Books and materials:</span> $1,500–$4,000 per year for case-method programs</li>
              <li><span className="text-white font-medium">Peer networking events:</span> $500–$2,000/yr (optional but professionally valuable)</li>
              <li><span className="text-white font-medium">Residency travel:</span> $1,000–$4,000 total for online programs with in-person residencies</li>
              <li><span className="text-white font-medium">Lost productivity:</span> Difficult to quantify but real — evening class weeks and exam periods reduce discretionary work hours</li>
              <li><span className="text-white font-medium">Employer tuition assistance:</span> Most large employers offer $5,250/yr tax-free under IRS 127; some offer $10,000–$30,000/yr as taxable income. Always exhaust employer assistance first.</li>
            </ul>
          </div>
        </section>

        {/* ── Section 3: Salary Impact ── */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Part-Time MBA Salary Impact: Realistic Expectations</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The most important calibration for part-time MBA candidates: the salary impact is categorically
            different from full-time MBA programs, and it should be. Full-time M7 programs with MBB/IB
            recruiting deliver $50,000–$100,000 annual salary deltas because they facilitate massive
            industry and function switches — from NGO analyst to McKinsey associate, from engineer to
            Goldman analyst. That is a complete career reinvention.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Part-time MBA primarily delivers{" "}
            <span className="text-white font-medium">in-place career advancement</span>: manager to director,
            director to senior director, individual contributor to people manager. The primary value is not
            an industry pivot — it is legitimizing a promotion that might take 3–4 years without the
            credential to 1–2 years with it. The average salary increase for part-time MBA graduates is
            <span className="text-white font-medium"> $18,000–$35,000 per year</span> within 24 months
            of graduation, according to GMAC and program-level employment reports.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            That range looks modest relative to full-time M7 outcomes. It is not, when properly benchmarked.
            The comparison should be: $25,000 annual delta on $55,000 in tuition (part-time) versus $70,000
            annual delta on $420,000–$480,000 in total cost (full-time targeting MBB). Part-time IRR is
            often <span className="text-white font-medium">25–35%</span>. Full-time MBB-track IRR is
            22–40%. They are in the same range — because the cost structure is radically different.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-4">
            <p className="text-violet-400 font-semibold text-sm">Salary Delta by Part-Time MBA Use Case</p>
            <div className="space-y-2">
              {[
                { useCase: "In-place promotion (individual contributor → manager)", delta: "+$18K–$28K/yr", notes: "Most common outcome; credential removes ceiling" },
                { useCase: "Manager → director via lateral or internal move", delta: "+$25K–$40K/yr", notes: "Higher delta; often requires 12–18 months post-grad" },
                { useCase: "Industry-adjacent pivot (e.g., ops → strategy)", delta: "+$20K–$35K/yr", notes: "Requires active networking; credential + network combo" },
                { useCase: "Entrepreneurship / startup founder", delta: "Highly variable", notes: "Credential and network matter; salary delta less relevant" },
                { useCase: "Credential-only (no specific promotion path)", delta: "+$10K–$18K/yr", notes: "Lowest ROI scenario; long break-even" },
              ].map(({ useCase, delta, notes }) => (
                <div key={useCase} className="bg-white/5 rounded-lg p-3 space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <p className="text-white text-xs font-medium">{useCase}</p>
                    <p className="text-violet-400 text-xs font-semibold whitespace-nowrap">{delta}</p>
                  </div>
                  <p className="text-slate-500 text-xs">{notes}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            One important nuance: part-time MBA candidates often experience{" "}
            <span className="text-white font-medium">salary growth during the program itself</span>.
            Because you remain employed, merit increases, inflation adjustments, and in-program promotions
            continue accruing. Some candidates receive a title change and salary bump 12 months into a
            30-month program — effectively front-loading part of the expected ROI before graduation.
          </p>
        </section>

        {/* ── Section 4: Break-Even Profiles ── */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Part-Time MBA Break-Even: Three Realistic Profiles</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Break-even period for a part-time MBA is generally shorter than most candidates expect —
            because the total capital outlay is so much lower than full-time alternatives. The three
            profiles below cover the core scenarios.
          </p>
          <div className="space-y-4">

            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold bg-violet-500/20 text-violet-400 px-2 py-0.5 rounded-full">Profile A</span>
                <p className="text-white font-medium text-sm">In-Place Promotion — Strong Outcome</p>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                <span className="text-white font-medium">Setup:</span> Manager at $95,000 enrolls in an
                AACSB evening program ($50,000 total tuition). Receives director promotion 18 months
                after graduation at $120,000 — a $25,000 annual delta. No employer subsidy.
              </p>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <p className="text-violet-400 font-semibold">22–28%</p>
                  <p className="text-slate-500 mt-0.5">IRR</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <p className="text-violet-400 font-semibold">~2 yrs</p>
                  <p className="text-slate-500 mt-0.5">Break-Even</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <p className="text-violet-400 font-semibold">Strong Yes</p>
                  <p className="text-slate-500 mt-0.5">Verdict</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                This is the prototypical high-ROI part-time scenario. Tuition is modest, the promotion
                is tied directly to the credential, and timing is favorable. At a 10% discount rate,
                10-year NPV exceeds +$100,000. IRR of 22–28% beats most full-time MBA scenarios at
                equivalent career trajectory.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold bg-violet-500/20 text-violet-400 px-2 py-0.5 rounded-full">Profile B</span>
                <p className="text-white font-medium text-sm">Industry-Adjacent Pivot with Active Networking</p>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                <span className="text-white font-medium">Setup:</span> Operations analyst at $88,000 uses
                part-time program ($65,000 tuition at a strong regional school) to pivot into strategy
                consulting. Leverages program alumni network to land a corporate strategy associate role
                at $123,000 — a $35,000 delta — 8 months after graduation.
              </p>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <p className="text-violet-400 font-semibold">25–32%</p>
                  <p className="text-slate-500 mt-0.5">IRR</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <p className="text-violet-400 font-semibold">~1.8 yrs</p>
                  <p className="text-slate-500 mt-0.5">Break-Even</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <p className="text-violet-400 font-semibold">Strong Yes</p>
                  <p className="text-slate-500 mt-0.5">Verdict</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                This outcome requires active career management — not passive credential attainment.
                The candidate networked into strategy roles through the alumni base, secured informational
                interviews during year 2 of the program, and accepted the offer before graduation.
                Industry-adjacent pivots are achievable through part-time MBA; complete industry
                reinvention is not. The distinction matters.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded-full">Profile C</span>
                <p className="text-white font-medium text-sm">Credential-Only Play — Marginal Outcome</p>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                <span className="text-white font-medium">Setup:</span> Senior analyst at $80,000 enrolls
                primarily for the credential ($55,000 tuition). No specific promotion tied to the degree.
                Receives a general merit-based raise of $15,000 over the 18 months following graduation —
                some of which would have occurred anyway.
              </p>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <p className="text-amber-400 font-semibold">10–14%</p>
                  <p className="text-slate-500 mt-0.5">IRR</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <p className="text-amber-400 font-semibold">~3.7 yrs</p>
                  <p className="text-slate-500 mt-0.5">Break-Even</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <p className="text-amber-400 font-semibold">Marginal</p>
                  <p className="text-slate-500 mt-0.5">Verdict</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                This scenario illustrates the &ldquo;credential-only&rdquo; trap. The program adds knowledge value,
                but the lack of a clear application for that knowledge limits the financial return.
                IRR of 10–14% barely clears equity benchmarks. The candidate would have been better
                served by either (a) waiting until a specific promotion opportunity was tied to the
                degree, or (b) investing the $55,000 in index funds. The lesson: part-time MBA ROI
                requires intentionality, not just enrollment.
              </p>
            </div>
          </div>
        </section>

        {/* ── Section 5: When Part-Time Loses to Full-Time ── */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">When Part-Time MBA Loses to Full-Time MBA</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The part-time MBA&apos;s structural cost advantage does not make it the right choice for every
            candidate. There are specific scenarios where only a full-time program delivers the outcome
            you need.
          </p>
          <div className="space-y-3">
            {[
              {
                title: "MBB Consulting Recruiting",
                detail: "McKinsey, BCG, and Bain recruit almost exclusively from full-time MBA programs. On-campus consulting recruiting — OCR — does not exist at part-time programs. Some candidates secure MBB interviews through direct applications or referrals post-graduation, but this is the exception, not the pathway. If MBB is the goal, part-time MBA is the wrong vehicle.",
              },
              {
                title: "Investment Banking (Bulge Bracket / Elite Boutique)",
                detail: "Investment banking associate roles at Goldman Sachs, JPMorgan, Morgan Stanley, and elite boutiques (Evercore, Lazard, Centerview) recruit from full-time MBA programs. Part-time candidates are generally not considered for associate-level IBD roles because they don't go through the same OCR pipeline. The part-time MBA does not unlock banking.",
              },
              {
                title: "Big Tech Product Management Roles (PM, Senior PM)",
                detail: "Google, Meta, Amazon, Apple, and Microsoft hire MBA product managers almost exclusively from full-time programs. These companies have established recruiting relationships with M7 schools' career offices. Part-time MBA candidates can transition into PM roles through internal mobility or direct applications, but without the same structural support.",
              },
              {
                title: "Complete Career Reinvention (Unrelated Industry Change)",
                detail: "If you want to move from healthcare to finance, from government to consulting, or from engineering to marketing at a top consumer brand, the recruiting infrastructure matters. Full-time programs provide that infrastructure. Part-time MBA facilitates adjacent pivots — not complete reinventions. The further your target industry from your current one, the weaker the part-time MBA value proposition.",
              },
              {
                title: "When Your Current Employer Will Only Promote Full-Time MBAs",
                detail: "Some companies — particularly older Fortune 500 organizations, major financial institutions, and traditional professional services firms — have informal or formal credentialing requirements that distinguish full-time from part-time MBAs. If your employer's senior leadership track specifically requires a full-time program, the part-time credential will not accelerate you on that track.",
              },
            ].map(({ title, detail }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-white font-medium text-sm">{title}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 6: Accreditation ── */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Accreditation Matters More in Part-Time MBA</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            For full-time MBA programs, the ranking and brand signal is usually sufficient for employers
            to assess quality. For part-time programs, accreditation is a binary gate. An unaccredited
            or non-AACSB part-time MBA is frequently rejected by HR systems, excluded from corporate
            tuition reimbursement lists, and does not generate salary recognition.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            <span className="text-white font-medium">AACSB accreditation</span> (Association to Advance
            Collegiate Schools of Business) covers fewer than 6% of business schools globally — approximately
            900 schools out of over 15,000 programs worldwide. It is the standard benchmark employers use.
            A part-time MBA from a non-AACSB school is, for most career purposes, worth what you paid for it.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-4">
            <p className="text-violet-400 font-semibold text-sm">Strong Part-Time MBA Programs (AACSB-Accredited, 2026)</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { school: "University of Chicago (Booth)", program: "Evening/Weekend MBA", notes: "Top brand; Chicago finance network" },
                { school: "Northwestern (Kellogg)", program: "Evening/Weekend MBA", notes: "Strong marketing and strategy focus" },
                { school: "UC Berkeley (Haas)", program: "Flex MBA", notes: "West Coast / tech industry network" },
                { school: "USC Marshall", program: "MBA for Professionals (IBEAR)", notes: "LA market; strong international cohort" },
                { school: "NYU Stern", program: "Part-Time MBA", notes: "Finance focus; strong NYC network" },
                { school: "Indiana Kelley", program: "Kelley Direct (Online)", notes: "Affordable online; AACSB accredited" },
                { school: "Georgia Tech", program: "MBA (evening/online)", notes: "Tech-oriented; strong STEM pipeline" },
                { school: "UNC Kenan-Flagler", program: "MBA@UNC (Online)", notes: "Well-regarded online program with residencies" },
              ].map(({ school, program, notes }) => (
                <div key={school} className="bg-white/5 rounded-lg p-3 space-y-1">
                  <p className="text-white text-xs font-medium">{school}</p>
                  <p className="text-violet-400 text-xs">{program}</p>
                  <p className="text-slate-500 text-xs">{notes}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-500 text-xs">
              Program availability and format evolve annually. Verify AACSB accreditation status and
              current tuition directly with each school. Tuition and delivery format reflect 2025–2026
              academic year data.
            </p>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Beyond AACSB, regional accreditation matters for employer recognition. Programs at schools
            with strong regional reputations — Ross at Michigan, Fuqua at Duke, Darden at Virginia —
            carry brand equity that national employers recognize, even if the program&apos;s recruiting
            infrastructure is less prominent than full-time counterparts. For candidates targeting
            careers in a specific geographic market, a strong regional part-time program frequently
            outperforms a lesser-known national online program.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            A practical test before enrolling:{" "}
            <span className="text-white font-medium">look up your target employer on LinkedIn and filter
            for employees who attended the program you are considering</span>. If you find 15–40 alumni
            at the company in roles similar to your target, the credential carries recognition value.
            If you find zero alumni, the credential may not carry the employer brand recognition you need.
          </p>
        </section>

        {/* ── CTA ── */}
        <section className="rounded-2xl bg-white/5 border border-white/10 p-10 text-center space-y-5">
          <p className="text-xs font-medium text-violet-400 uppercase tracking-widest">Model Your Numbers</p>
          <h2 className="text-2xl font-semibold tracking-tight">Calculate Your Part-Time MBA ROI</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Enter your current salary, program tuition, expected salary delta, and employer subsidy.
            Get NPV, IRR, and break-even year for your specific part-time MBA scenario in under 60 seconds.
          </p>
          <Link
            href="/mba-roi-calculator"
            className="inline-block bg-linear-to-r from-violet-600 to-purple-600 hover:opacity-90 transition-all px-8 py-4 rounded-xl font-medium text-white text-base shadow-[0_0_40px_rgba(124,58,237,0.3)]"
          >
            Open MBA ROI Calculator →
          </Link>
        </section>

        {/* ── Related Guides ── */}
        <section className="border-t border-white/10 pt-10">
          <p className="text-xs font-medium text-violet-400 uppercase tracking-widest mb-5">Related Guides</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: "/mba-roi-calculator", label: "MBA ROI Calculator", desc: "Model your specific part-time numbers →" },
              { href: "/executive-mba-roi", label: "Executive MBA ROI", desc: "EMBA vs part-time: which wins for you →" },
              { href: "/mba-roi-online-vs-full-time", label: "Online vs. Full-Time MBA ROI", desc: "When online programs win on IRR →" },
              { href: "/mba-roi-scholarship", label: "MBA Scholarship ROI", desc: "How aid transforms break-even math →" },
              { href: "/mba-roi", label: "MBA ROI: Full Guide", desc: "Complete ROI analysis across all tracks →" },
            ].map(({ href, label, desc }) => (
              <Link
                key={href}
                href={href}
                className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all"
              >
                <div className="text-violet-400 font-mono text-lg">→</div>
                <div>
                  <p className="text-white text-sm font-medium group-hover:text-violet-300 transition-colors">{label}</p>
                  <p className="text-slate-500 text-xs">{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <footer className="border-t border-white/10 pt-8 text-center text-slate-500 text-xs space-y-2">
          <p>
            <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            {" · "}
            <Link href="/mba-roi" className="hover:text-slate-300 transition-colors">MBA ROI</Link>
            {" · "}
            <Link href="/mba-roi-calculator" className="hover:text-slate-300 transition-colors">MBA ROI Calculator</Link>
            {" · "}
            <Link href="/executive-mba-roi" className="hover:text-slate-300 transition-colors">Executive MBA ROI</Link>
            {" · "}
            <Link href="/mba-roi-online-vs-full-time" className="hover:text-slate-300 transition-colors">Online vs Full-Time</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
          <p className="mt-1">Salary data sourced from GMAC surveys, school employment reports, Glassdoor, Levels.fyi, and publicly reported compensation figures. All ranges are estimates; individual outcomes vary.</p>
        </footer>

      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_breadcrumbSchema) }} />
    </main>
  )
}
