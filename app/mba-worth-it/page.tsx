import Link from "next/link"
import { pageAlternates, articleSchema, breadcrumbSchema } from "@/lib/seo"
import RelatedLinks from "@/components/RelatedLinks"
import SiteFooter from "@/components/SiteFooter"
import FaqSection, { type FaqItem } from "../../components/FaqSection"
import ArticleMeta from "@/components/ArticleMeta"
import ScenarioExplorer from "./ScenarioExplorer"
import { PRESET_SCENARIOS, runMbaScenario, type MbaScenarioInput } from "@/lib/mbaScenarioModel"

const TITLE = "When an MBA Degree Is Worth It: A Data-Driven Look by Industry and School Tier"
const META_TITLE = "When an MBA Is Worth It: NPV, IRR & Break-Even by Industry"
const META_DESC =
  "Is an MBA worth it? Use NPV, IRR and payback to decide. M7 to MBB at $85k prior pay: ~33% IRR. Same path at $160k: never pays back in 10 years. Scenarios inside."

const _articleSchema = articleSchema({
  title: TITLE,
  description: META_DESC,
  url: "https://careerreturns.com/mba-worth-it",
  datePublished: "2026-03-03",
  dateModified: "2026-11-05",
})
const _breadcrumbSchema = breadcrumbSchema([{ name: "Is an MBA Worth It?", url: "https://careerreturns.com/mba-worth-it" }])

export const metadata = {
  title: META_TITLE,
  description: META_DESC,
  alternates: pageAlternates("https://careerreturns.com/mba-worth-it"),
  openGraph: {
    title: META_TITLE,
    description: META_DESC,
    url: "https://careerreturns.com/mba-worth-it",
    siteName: "CareerReturns",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESC,
  },
}

/* ── Scenario math, computed at build time from the same model as the interactive explorer ── */

function fmtMoney(n: number) {
  const sign = n < 0 ? "−" : ""
  const a = Math.abs(n)
  if (a >= 1_000_000) return `${sign}$${(a / 1_000_000).toFixed(2)}M`
  return `${sign}$${Math.round(a / 1000)}k`
}
function fmtPct(n: number | null) {
  return n === null ? "n/a" : `${(n * 100).toFixed(1)}%`
}
function fmtYears(n: number) {
  return isFinite(n) ? `${n.toFixed(1)} yrs` : "> 10 yrs"
}

const [TECH, CONSULT, HEALTH] = PRESET_SCENARIOS
const scenarioResults = PRESET_SCENARIOS.map((p) => ({ preset: p, result: runMbaScenario(p.input) }))

const variantRows: { base: string; change: string; input: MbaScenarioInput }[] = [
  { base: TECH.label, change: "Switch to a part-time MBA ($120k, keep working, $150k post-MBA)", input: { ...TECH.input, programYears: 3, keepsSalary: true, programCost: 120000, postSalary: 150000 } },
  { base: CONSULT.label, change: "Negotiate a $60k scholarship", input: { ...CONSULT.input, programCost: 210000 } },
  { base: CONSULT.label, change: "Choose a 1-year program (INSEAD/LBS-style, $150k)", input: { ...CONSULT.input, programYears: 1, programCost: 150000 } },
  { base: HEALTH.label, change: "Quit to attend full-time instead ($210k, 2 years)", input: { ...HEALTH.input, programYears: 2, keepsSalary: false, programCost: 210000, loanPct: 0.7 } },
]
const variantResults = variantRows.map((v) => ({ ...v, result: runMbaScenario(v.input) }))

const priorSalaryRows = [85000, 110000, 135000, 160000].map((pre) => ({
  pre,
  result: runMbaScenario({ ...CONSULT.input, age: 28, preSalary: pre }),
}))

const costRows = [
  { label: "Tuition + Fees", m7: "$155,000–$180,000", t1015: "$145,000–$170,000", t1525: "$100,000–$140,000", note: "Two-year total at 2025–26 rates, before scholarships" },
  { label: "Living Expenses", m7: "$90,000–$120,000", t1015: "$70,000–$95,000", t1525: "$55,000–$75,000", note: "$40k–$60k/yr depending on city" },
  { label: "Opportunity Cost (foregone salary)", m7: "$150,000–$200,000", t1015: "$120,000–$170,000", t1525: "$100,000–$150,000", note: "2 years × pre-MBA base salary" },
]

const industryRows = [
  { industry: "Management Consulting (MBB)", irr: "22–40%", breakEven: "4.2–4.7 yrs", verdict: "Strong", color: "text-emerald-400", bg: "bg-emerald-400/5" },
  { industry: "Investment Banking (Bulge Bracket)", irr: "21–38%", breakEven: "4.5–5.0 yrs", verdict: "Strong", color: "text-emerald-400", bg: "bg-emerald-400/5" },
  { industry: "Private Equity / Venture Capital", irr: "23–41%", breakEven: "3.9–4.4 yrs", verdict: "Strong", color: "text-emerald-400", bg: "bg-emerald-400/5" },
  { industry: "Technology (FAANG / Tier-1)", irr: "16–30%", breakEven: "6.1–7.0 yrs", verdict: "Moderate", color: "text-amber-400", bg: "bg-amber-400/5" },
  { industry: "Energy / Oil & Gas", irr: "17–31%", breakEven: "5.7–6.5 yrs", verdict: "Moderate", color: "text-amber-400", bg: "bg-amber-400/5" },
  { industry: "Healthcare / Biotech Management", irr: "15–28%", breakEven: "6.2–7.2 yrs", verdict: "Moderate", color: "text-amber-400", bg: "bg-amber-400/5" },
  { industry: "Big 4 Consulting / Advisory", irr: "14–26%", breakEven: "6.8–8.0 yrs", verdict: "Situational", color: "text-orange-400", bg: "bg-orange-400/5" },
  { industry: "Consumer Goods / CPG", irr: "12–22%", breakEven: "7.8–9.2 yrs", verdict: "Situational", color: "text-orange-400", bg: "bg-orange-400/5" },
  { industry: "Military / Government (GI Bill)", irr: "28–55%", breakEven: "2.0–3.5 yrs", verdict: "Exceptional", color: "text-blue-400", bg: "bg-blue-400/5" },
  { industry: "Nonprofit / Government (no subsidy)", irr: "4–14%", breakEven: "9.4–13.1 yrs", verdict: "Negative at sticker", color: "text-red-400", bg: "bg-red-400/5" },
]

const tierRows = [
  { tier: "M7 Programs", schools: "HBS, Wharton, Stanford GSB, Booth, Kellogg, Sloan, Columbia", medianSalary: "$175k+", mbbAccess: "Yes", bankingAccess: "Yes" },
  { tier: "T10–15 Programs", schools: "Tuck, Fuqua, Ross, Darden, Stern, Anderson, Haas, Yale SOM", medianSalary: "$145–165k", mbbAccess: "Limited", bankingAccess: "Yes" },
  { tier: "T15–25 Programs", schools: "McCombs, Mendoza, Olin, Smeal, Simon, Kelley, Foster", medianSalary: "$120–140k", mbbAccess: "Rare", bankingAccess: "Regional" },
  { tier: "Online MBAs", schools: "Indiana (online), UNC (online), USC Marshall (online)", medianSalary: "$95–115k", mbbAccess: "No", bankingAccess: "No" },
]

const faqItems: FaqItem[] = [
  { q: "Is an MBA worth it financially in 2026?", a: "An MBA is worth it financially when the post-MBA salary delta generates a positive net present value after accounting for tuition, living costs, foregone income, and loan repayment. It depends most on your destination industry: for management consulting, investment banking, and private equity, IRR typically runs 22–40%, making the MBA a strong financial investment. For nonprofit or government roles, IRR may be 4–14%, which often fails to justify the cost at sticker price. School tier, total cost, scholarship aid, and financing structure also materially shift the numbers." },
  { q: "Is MBA ROI higher than investing in the stock market?", a: "At M7 programs targeting management consulting or investment banking, MBA IRR typically ranges from 18–24%, significantly above the S&P 500's long-run 8–10% return. At regional programs with modest salary uplifts and significant debt, MBA IRR can fall below stock market returns. The comparison depends entirely on the school, sector, and financing structure." },
  { q: "How much does an MBA increase your salary?", a: "MBA salary increases range from 40% at regional programs targeting general management to over 110% at M7 programs placing into MBB consulting or investment banking. The median pre-MBA salary for full-time program applicants is approximately $85,000. Post-MBA M7 graduates entering consulting earn $190,000–$215,000 base salary, while finance roles start at $200,000–$250,000. In dollar terms, the average increase for a full-time graduate is $35k–$90k per year; consultants often see $85k–$130k over pre-MBA salary including bonuses, while technology roles see more modest jumps of $20k–$50k because pre-MBA tech salaries are often already competitive." },
  { q: "How long does it take to break even on an MBA?", a: "MBA break-even ranges from 4–6 years for M7 programs with consulting or finance placement, to 7–10 years for regional programs targeting general management, to 2–3 years for online or part-time programs. At the extremes, it runs from 2.0 years (veterans using GI Bill + Yellow Ribbon for consulting) to 13+ years (nonprofit roles, no scholarship, lower-tier programs). For tech (FAANG), break-even is 6.1–7.0 years despite high salaries, because pre-MBA tech salaries are already high. The calculation depends on total economic cost (tuition plus foregone income), salary delta, loan structure, and interest rate — not just tuition." },
  { q: "What is the ROI of an MBA from a top school?", a: "MBA ROI at top (M7) programs targeting high-compensation sectors produces an IRR of 18–24% for consulting placements and 15–22% for investment banking placements. These returns exceed the long-run equity market return and represent a strongly positive net present value over a 10-year projection horizon. ROI falls significantly at programs outside the top 20 or when targeting lower-salary sectors." },
  { q: "Does school rank matter for MBA ROI?", a: "Yes, significantly. M7 programs (Harvard, Wharton, Stanford, Booth, Kellogg, Sloan, Columbia) produce median starting salaries of $175k+ and open MBB consulting and top-tier banking recruiting. T10–15 programs produce $145–165k median salaries with solid firm access. T15–25 programs produce $120–140k with limited MBB access. The ROI gap between M7 and T25 is roughly 8–15 IRR points for consulting paths." },
  { q: "Is an online MBA worth the same ROI as a full-time MBA?", a: "No. Online MBAs cost significantly less ($30k–$80k vs $200k–$250k) and can be completed while working, eliminating the opportunity cost. However, they do not open the same recruiting doors as residential programs — particularly for MBB consulting and bulge bracket banking. The ROI math is better on a pure cost basis, but the salary outcome ceiling is lower." },
  { q: "How do I determine if an MBA is worth it using NPV, IRR and break-even?", a: "Build a cash flow series. Year 0 is everything you give up: tuition, living costs and the salary you forgo. Each year after graduation is your post-MBA salary minus what you would have earned anyway, minus loan payments. NPV discounts those flows at your cost of capital (CareerReturns uses 6%); a positive NPV means the MBA creates value. IRR is the discount rate at which NPV is zero; compare it with a 10–12% hurdle, roughly the long-run equity return. Payback is the year cumulative cash flow turns positive. An MBA is clearly worth it when all three agree: positive NPV, IRR above the hurdle, and payback within about 5–7 years." },
  { q: "Does work experience before an MBA change the ROI?", a: "Yes, sharply, because a higher pre-MBA salary raises your opportunity cost and shrinks your salary delta at the same time. In the CareerReturns model, an M7 full-time MBA leading to a $215k consulting role returns about a 33% IRR for someone earning $85k beforehand, about 20% at $110k, about 8% at $135k, and never pays back within 10 years at $160k. Experienced candidates usually get a better return from part-time, executive or 1-year programs that keep or shorten the income gap." },
  { q: "Is a part-time MBA worth it compared with full-time?", a: "Financially, usually yes, because you keep your salary. In our healthcare example, a registered nurse paying $75k for a part-time MBA and moving from $98k to $140k breaks even about one year after graduation. The same move made full-time ($210k plus two years of lost pay) does not break even within 10 years. The trade-off is access: part-time programs rarely feed MBB consulting or investment banking associate pipelines." },
  { q: "Can I still finance an MBA with federal loans in 2026?", a: "Partly. Under the 2025 budget reconciliation law, Grad PLUS loans closed to new borrowers on July 1, 2026. New graduate students can borrow Direct Unsubsidized Loans up to $20,500 per year and $100,000 in aggregate; students already borrowing in the same program before that date may be grandfathered. Most full-time MBA budgets above that cap now need scholarships, savings, employer sponsorship or private loans, so model your actual interest rate rather than the federal rate." },
]

export default function MbaWorthItPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-indigo-600/20 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12 sm:space-y-20">

        {/* Header */}
        <header className="space-y-5">
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">CareerReturns</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            When an MBA Degree Is Worth It: A Data-Driven Look by Industry and School Tier
          </h1>
          <ArticleMeta updated="2026-11-05" />
          <p className="text-slate-400 text-lg leading-relaxed">
            An MBA is worth it financially when it produces an IRR above 10–12% — the long-run equity market benchmark. At M7 programs targeting MBB consulting or investment banking, IRRs range from <span className="text-white font-medium">18–40%</span>, making the degree one of the highest-returning investments available. At programs outside the top 25 targeting general management roles, IRRs of 2–6% rarely justify the full economic cost of $150,000–$300,000. Check your own numbers with the{" "}
            <Link href="/mba-roi-calculator" className="text-white underline underline-offset-2 hover:text-indigo-300">MBA ROI calculator</Link>, or see the line-by-line NPV, IRR and break-even math in our{" "}
            <Link href="/mba-roi" className="text-white underline underline-offset-2 hover:text-indigo-300">detailed MBA ROI analysis</Link>.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "IRR Range", value: "4–55%" },
              { label: "Break-Even Range", value: "2–13 yrs" },
              { label: "Industries Modeled", value: "10" },
              { label: "School Tiers Analyzed", value: "4" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <p className="text-indigo-300 font-semibold text-lg">{value}</p>
                <p className="text-slate-500 text-xs mt-1">{label}</p>
              </div>
            ))}
          </div>
        </header>

        {/* Direct answer */}
        <section className="space-y-4">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-8 space-y-4">
            <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">Short Answer</p>
            <p className="text-white text-base leading-relaxed font-medium">
              An MBA is worth it if your post-MBA salary delta — the annual income increase attributable to
              the degree — generates a positive{" "}
              <Link href="/mba-roi-calculator" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">net present value</Link>
              {" "}after accounting for tuition, living costs, two years of foregone income, and loan repayment.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              At M7 programs (Harvard, Wharton, Stanford, Booth, Kellogg, Columbia, Sloan) with strong consulting
              or finance placement, the numbers typically work. At programs outside the top 25 with modest
              salary uplifts, they often do not. The degree itself is not the variable. Five things decide the
              outcome: target industry, school tier, your pre-MBA salary, total cost after aid, and how you
              finance it. There is no universal answer, only your own numbers modeled correctly.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              For scale: US employers in GMAC&apos;s 2025 Corporate Recruiters Survey projected a median MBA
              starting salary of <span className="text-white">$125,000</span>, and MBB consulting firms pay
              newly hired MBAs about <span className="text-white">$190,000–$192,000</span> base plus a signing
              bonus of up to $30,000. The gap between those two numbers is why industry matters more than the
              degree itself.
            </p>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Most answers to this question are anecdotal — success stories from HBS alumni, or warnings from
            people who graduated into a bad job market. Neither is useful for a decision of this size. The
            correct framework is a discounted cash flow (DCF) analysis: model every dollar you spend on the
            MBA (tuition, living costs, the salary you forgo), compare it against every dollar of incremental
            earnings the degree generates, discount future cash flows to present value, and compute NPV and
            IRR. This guide does that across 12 destination industries and 4 school tiers, using published
            GMAC survey data, school employment reports, and publicly reported compensation figures from MBB
            consulting firms, bulge bracket banks, and major technology companies.
          </p>
        </section>

        {/* Framework */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">How to Determine If an MBA Is Worth It Using NPV, IRR, and Break-Even Modeling</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Treat the MBA like any other capital investment: a large cash outflow now, in exchange for a
            stream of higher earnings later. Three numbers summarize that trade, and each answers a
            different question. You need all three, because they can disagree.
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              {
                metric: "NPV",
                question: "Does it create value?",
                body: "The sum of every future cash flow discounted back to today, minus what you put in. Positive NPV means the MBA beats leaving your money (and time) where it was. CareerReturns discounts at 6%, roughly the after-tax return on a balanced portfolio.",
              },
              {
                metric: "IRR",
                question: "How hard does each dollar work?",
                body: "The discount rate at which NPV is exactly zero. It lets you compare an MBA with any other use of capital. Use 10–12% (the long-run S&P 500 return) as the hurdle; below that, an index fund was the better financial bet.",
              },
              {
                metric: "Payback",
                question: "How long is my money at risk?",
                body: "The year cumulative cash flow turns positive. It ignores the time value of money, but it captures risk: the longer the payback, the more a recession, layoff or career change can derail the return. Under 5 years is strong; over 8 is fragile.",
              },
            ].map(({ metric, question, body }) => (
              <div key={metric} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-indigo-300 font-semibold text-lg">{metric}</p>
                <p className="text-white text-sm font-medium">{question}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
            <p className="text-white text-sm font-semibold">The four-step model</p>
            <ol className="space-y-2 text-slate-400 text-sm leading-relaxed list-decimal list-inside">
              <li><span className="text-white">Year 0 outflow.</span> Tuition, fees and living costs you pay yourself, plus the salary you give up while in school. For a full-time program the lost salary is usually the biggest line.</li>
              <li><span className="text-white">Annual inflows.</span> Post-MBA salary minus what you would have earned without the degree, minus loan payments while the loan is outstanding.</li>
              <li><span className="text-white">Discount and solve.</span> Discount the inflows to get NPV, solve for the rate that zeroes NPV to get IRR, and find the year the running total crosses zero for payback.</li>
              <li><span className="text-white">Stress-test.</span> Re-run with a 10–20% lower post-MBA salary and a later start date. If the verdict flips, the MBA is a bet on things going right, not a sound investment.</li>
            </ol>
          </div>
          <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5">
            <p className="text-indigo-200 text-sm leading-relaxed">
              <span className="font-semibold text-white">Decision rule.</span> An MBA is clearly worth it when
              NPV is positive, IRR clears 10–12%, and payback is within about 5–7 years, and all three still
              hold in the stress test. If only the lifetime view (30+ years) is positive, the decision rests on
              your belief that the degree permanently changes your earnings path. That is a reasonable belief
              for some careers and wishful thinking for others. The scenarios below show both views.
            </p>
          </div>
        </section>

        {/* What Is an MBA? */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">What Is an MBA?</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            An MBA (Master of Business Administration) is a graduate-level degree covering finance, strategy,
            operations, marketing, and leadership. It is a professional credential designed to qualify
            graduates for senior management and executive roles — not primarily an academic degree. The MBA
            meaning in a career context is straightforward: it signals business fluency, executive readiness,
            and access to alumni networks that control hiring at top firms.
          </p>
          <div className="space-y-3">
            {[
              {
                type: "Full-Time MBA (2-year)",
                desc: "The traditional format. Students leave work for 2 years for coursework, internships, and on-campus recruiting. Required for access to MBB consulting and bulge-bracket banking pipelines. Highest total cost due to opportunity cost.",
              },
              {
                type: "Part-Time / Online MBA (2–3 years)",
                desc: "Completed alongside full-time employment. Eliminates opportunity cost — typically the largest expense in a full-time program. Best financial ROI for candidates seeking a salary uplift without a career break.",
              },
              {
                type: "Executive MBA (EMBA)",
                desc: "Designed for candidates with 10+ years of experience. Completed on weekends over 18–24 months. Employers often sponsor EMBA tuition fully, making it the most common path to a zero out-of-pocket MBA.",
              },
              {
                type: "1-Year MBA (European format)",
                desc: "Primarily INSEAD, LBS, and HEC Paris. Reduces opportunity cost by 50% vs. 2-year programs while delivering comparable outcomes for international careers. Total cost typically $220K–$250K vs. $460K–$492K for M7 full-time.",
              },
            ].map(({ type, desc }) => (
              <div key={type} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-1">
                <p className="text-white font-semibold text-sm">{type}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            The salary premium from an MBA is real but varies sharply by industry. The MBA meaning
            in financial terms is a salary delta: the annual income increase attributable to the degree.
            In consulting (MBB), that delta runs $40K–$60K annually. In finance, $35K–$55K. In
            technology product management, $25K–$40K. In general management at regional companies,
            $10K–$20K — often too low to justify M7 full-time costs.
          </p>
        </section>

        {/* Financial breakdown */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">The True All-In Cost of an MBA in 2026</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The most common mistake prospective MBA students make is anchoring on tuition — the number
            schools advertise, and not the number that matters most. A full-time, two-year program has
            three major outflows, and they scale with school tier:
          </p>

          <div className="space-y-3">
            {costRows.map((row) => (
              <div key={row.label} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold text-white text-sm">{row.label}</p>
                  <p className="text-slate-500 text-xs text-right">{row.note}</p>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  <div className="text-center">
                    <p className="text-purple-300 text-sm font-semibold">{row.m7}</p>
                    <p className="text-slate-500 text-xs mt-0.5">M7 Programs</p>
                  </div>
                  <div className="text-center">
                    <p className="text-purple-300 text-sm font-semibold">{row.t1015}</p>
                    <p className="text-slate-500 text-xs mt-0.5">T10–15</p>
                  </div>
                  <div className="text-center">
                    <p className="text-purple-300 text-sm font-semibold">{row.t1525}</p>
                    <p className="text-slate-500 text-xs mt-0.5">T15–25</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5 space-y-3">
            <p className="text-indigo-200 text-sm font-semibold">Total all-in cost</p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-white font-semibold">$395k–$500k</p>
                <p className="text-slate-500 text-xs mt-0.5">M7 Programs</p>
              </div>
              <div className="text-center">
                <p className="text-white font-semibold">$335k–$435k</p>
                <p className="text-slate-500 text-xs mt-0.5">T10–15</p>
              </div>
              <div className="text-center">
                <p className="text-white font-semibold">$255k–$365k</p>
                <p className="text-slate-500 text-xs mt-0.5">T15–25</p>
              </div>
            </div>
            <p className="text-indigo-200 text-sm leading-relaxed">
              This is the number your{" "}
              <Link href="/mba-salary-increase" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">post-MBA salary uplift</Link>
              {" "}has to justify — not just tuition.
            </p>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed">
            Opportunity cost is the component most students undercount, and in most scenarios it is the
            single largest cost. If you are earning $85,000 per year before the MBA, you forgo $170,000 in
            gross salary during the program — money that would have continued to compound in your
            retirement account. Living costs vary heavily by city: Boston, New York, and San Francisco
            programs carry the highest. For reference, HBS lists 2025–26 tuition at $78,700, and Wharton&apos;s
            published first-year budget is about $132,000 including living costs. For a program-by-program breakdown, see{" "}
            <Link href="/mba-cost" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">MBA cost in 2026</Link>.
          </p>
        </section>

        {/* ROI by industry */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">MBA ROI by Destination Industry</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Your destination industry after graduation is the single largest driver of MBA ROI — more than
            school tier, program cost, or scholarship aid. The salary delta (post-MBA minus pre-MBA) is what
            funds the return on investment, and that delta varies from $15k/year in nonprofit roles to
            $115k+/year in top-tier consulting.
          </p>
          <div className="space-y-2">
            {industryRows.map((row) => (
              <div key={row.industry} className={`${row.bg} border border-white/10 rounded-xl px-4 py-3 flex items-center justify-between gap-3`}>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium">{row.industry}</p>
                  <p className="text-slate-500 text-xs mt-0.5">Break-even: {row.breakEven}</p>
                </div>
                <div className="flex items-center gap-4 shrink-0 text-right">
                  <div>
                    <p className={`font-semibold text-sm tabular-nums ${row.color}`}>{row.irr}</p>
                    <p className="text-slate-500 text-xs">IRR</p>
                  </div>
                  <span className={`text-xs font-medium ${row.color} hidden sm:block w-28`}>{row.verdict}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs">
            IRR ranges reflect no-scholarship vs. full-scholarship scenarios at M7 programs. Data sources: GMAC Corporate Recruiters Survey 2025, school employment reports, publicly reported compensation figures. Break-even math for each track is worked through in the{" "}
            <Link href="/mba-break-even" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">MBA break-even analysis</Link>.
          </p>
        </section>

        {/* The tech problem */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">The Tech Problem: Why High Salaries Do Not Always Mean High ROI</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Technology roles at FAANG and Tier-1 companies pay exceptionally well post-MBA — $200k–$350k
            total compensation at companies like Google, Meta, and Amazon. But the MBA ROI for tech is
            moderate, not exceptional. The reason is the pre-MBA salary problem.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Software engineers and product managers at top tech companies often earn $150k–$220k before
            their MBA. When your pre-MBA salary is already high, two things happen: your opportunity cost
            (the salary you forgo during school) is higher, and the incremental post-MBA salary delta is
            smaller. If you earn $180k pre-MBA and $230k post-MBA, the $50k annual delta has to pay back
            $400k+ in total cost over a decade — producing an IRR in the 16–22% range rather than the
            28–35% you would see in consulting.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            This is not to say that tech-path MBAs are bad investments. The 10-year NPV can still be
            $100k–$250k positive. But if your primary goal is maximizing financial ROI, consulting and
            finance paths offer structurally better numbers at the same school cost. More detail is in{" "}
            <Link href="/mba-roi-tech" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">MBA ROI for tech</Link>.
          </p>
        </section>

        {/* School tier */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">How Much Does School Tier Actually Matter?</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            School tier matters enormously for one specific reason: recruiting access. MBB consulting firms
            (McKinsey, Bain, BCG) and bulge bracket banks (Goldman Sachs, Morgan Stanley, JPMorgan) recruit
            almost exclusively from M7 and select T10–15 programs. If your target path runs through one of
            these firms, the school tier decision is effectively a path-selection decision.
          </p>
          <div className="space-y-3">
            {tierRows.map((row) => (
              <div key={row.tier} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold text-white text-sm">{row.tier}</p>
                  <p className="text-purple-300 font-semibold text-sm">{row.medianSalary} <span className="text-slate-500 text-xs font-normal">median</span></p>
                </div>
                <p className="text-slate-500 text-xs">{row.schools}</p>
                <div className="flex gap-4 mt-1">
                  <span className={`text-xs ${row.mbbAccess === "Yes" ? "text-emerald-400" : row.mbbAccess === "Limited" ? "text-amber-400" : "text-red-400"}`}>
                    MBB Access: {row.mbbAccess}
                  </span>
                  <span className={`text-xs ${row.bankingAccess === "Yes" ? "text-emerald-400" : row.bankingAccess === "No" ? "text-red-400" : "text-amber-400"}`}>
                    Banking Access: {row.bankingAccess}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            The financial impact of school tier compounds over time. An M7 graduate who lands at MBB starts
            at $190k–$215k and reaches $300k–$500k within 5 years through promotions and exit opportunities.
            A T20 graduate in a similar but lower-tier role starts at $130k–$150k. That $40k–$65k annual
            gap, compounded over a decade, is worth several hundred thousand dollars in present value.
            School-level salary data is in{" "}
            <Link href="/mba-salary-by-school" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">MBA salary by school</Link>.
          </p>
        </section>

        {/* Prior experience */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Prior Experience: The Variable Most ROI Estimates Ignore</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Published school ROI figures assume a typical student. But your pre-MBA salary works against you
            twice: it raises the income you give up while in school, and it shrinks the raise the degree
            delivers. Hold everything else constant (M7 full-time, $270k tuition and living costs, 60%
            financed at 8%, a $215k consulting job afterward) and change only what you earned before:
          </p>
          <div className="space-y-2">
            {priorSalaryRows.map(({ pre, result }) => {
              const good = (result.irr10 ?? -1) >= 0.12
              const ok = (result.irr10 ?? -1) >= 0.06
              const color = good ? "text-emerald-400" : ok ? "text-amber-400" : "text-red-400"
              return (
                <div key={pre} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 grid grid-cols-4 gap-2 items-center text-xs sm:text-sm">
                  <div>
                    <p className="text-white font-medium tabular-nums">{fmtMoney(pre)}</p>
                    <p className="text-slate-500 text-[11px]">Pre-MBA salary</p>
                  </div>
                  <div>
                    <p className={`font-semibold tabular-nums ${color}`}>{fmtPct(result.irr10)}</p>
                    <p className="text-slate-500 text-[11px]">IRR</p>
                  </div>
                  <div>
                    <p className="text-white tabular-nums">{fmtMoney(result.npv10)}</p>
                    <p className="text-slate-500 text-[11px]">10-yr NPV</p>
                  </div>
                  <div>
                    <p className="text-white tabular-nums">{fmtYears(result.payback)}</p>
                    <p className="text-slate-500 text-[11px]">Payback</p>
                  </div>
                </div>
              )
            })}
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            The same school and the same job swing from one of the best investments you could make to one
            that never pays back within a decade. This is why the full-time MBA works best for people about
            3–6 years into their careers, and why experienced candidates should look hard at 1-year,
            executive and part-time formats that cut or remove the income gap. Our{" "}
            <Link href="/mba-roi-career-changers" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">MBA ROI for career changers</Link>
            {" "}guide covers pivots in more depth.
          </p>
        </section>

        {/* Scenarios */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Three Sample Scenarios: Break-Even and Lifetime Earnings</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Benchmarks only go so far. Here are three representative profiles run through the same engine
            as the MBA ROI Calculator, with two views of each. The <span className="text-white">10-year DCF</span>
            {" "}holds the salary delta flat and is deliberately conservative. The{" "}
            <span className="text-white">lifetime view</span> lets both career paths compound until age 65.
          </p>

          <div className="space-y-3">
            {scenarioResults.map(({ preset, result }) => (
              <div key={preset.id} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
                <div className="space-y-1">
                  <p className="text-white font-semibold text-sm">{preset.label}</p>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {preset.persona}. {fmtMoney(preset.input.preSalary)} → {fmtMoney(preset.input.postSalary)};{" "}
                    {fmtMoney(preset.input.programCost)} tuition and living costs,{" "}
                    {preset.input.keepsSalary ? "salary kept during the program" : `${fmtMoney(result.lostIncome)} in lost salary`}.
                  </p>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-center">
                  {[
                    { v: fmtMoney(result.totalEconomicCost), l: "All-in cost" },
                    { v: fmtMoney(result.npv10), l: "10-yr NPV", c: result.npv10 >= 0 ? "text-emerald-400" : "text-red-400" },
                    { v: fmtPct(result.irr10), l: "IRR" },
                    { v: fmtYears(result.payback), l: "Payback" },
                    { v: fmtMoney(result.lifetimeGainPV), l: "Lifetime gain (today's $)" },
                    { v: result.crossoverAge ? `Age ${result.crossoverAge}` : "Never", l: "Lifetime break-even" },
                  ].map(({ v, l, c }) => (
                    <div key={l} className="bg-slate-900/60 rounded-lg p-2">
                      <p className={`text-sm font-semibold tabular-nums ${c ?? "text-purple-300"}`}>{v}</p>
                      <p className="text-slate-500 text-[10px] mt-0.5 leading-tight">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
              <p className="text-white font-semibold text-sm">What the early-career tech case shows</p>
              <p className="text-slate-400 text-xs leading-relaxed">
                A $55k raise is not enough to recover nearly $500k of cost within ten years, so the 10-year NPV
                is negative and the IRR sits far below the market. Over a full career it looks very different,
                because a roughly 48% higher salary compounds for almost four decades. The honest verdict:
                this MBA only pays if the PM role genuinely puts you on a higher long-term path than staying
                in analytics. Without that, a part-time program or an internal transfer gets most of the gain
                for a fraction of the cost (see the table below). Tech-specific data is in{" "}
                <Link href="/mba-roi-tech" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">MBA ROI for tech</Link>.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
              <p className="text-white font-semibold text-sm">What the mid-career consulting pivot shows</p>
              <p className="text-slate-400 text-xs leading-relaxed">
                An $80k raise into MBB is large, but $270k of foregone salary on top of tuition pushes the IRR
                below the market hurdle. The pivot is positive over a lifetime and roughly break-even over a
                decade, which makes it a career bet more than a financial one. Two levers change that: a
                scholarship, or a 1-year program that halves the income gap. Also note that MBB recruits MBAs
                across a range of experience, but candidates with nine or more years face a narrower path, so
                confirm your target firms hire at your level before modeling the outcome. Firm-level pay is
                in{" "}
                <Link href="/mba-roi-mckinsey" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">MBA ROI for McKinsey</Link>.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
              <p className="text-white font-semibold text-sm">What the healthcare professional case shows</p>
              <p className="text-slate-400 text-xs leading-relaxed">
                Clinical leaders moving into administration are often the strongest MBA case, because they can
                study part-time and keep earning. BLS puts the May 2024 median pay for medical and health
                services managers at $117,960, with director-level roles well above that. Keeping the salary
                turns a modest $42k raise into a payback of about a year after graduation. Many hospital
                systems also offer tuition assistance, which improves the numbers further. Quit to do the same
                degree full-time and the return disappears. More detail is in{" "}
                <Link href="/mba-roi-healthcare" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">MBA ROI for healthcare</Link>.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-widest">What changes the verdict</p>
            {variantResults.map(({ base, change, result }) => (
              <div key={change} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-white text-sm">{change}</p>
                  <p className="text-slate-500 text-xs">{base}</p>
                </div>
                <div className="flex gap-4 shrink-0 text-right">
                  <div>
                    <p className={`text-sm font-semibold tabular-nums ${result.npv10 >= 0 ? "text-emerald-400" : "text-red-400"}`}>{fmtMoney(result.npv10)}</p>
                    <p className="text-slate-500 text-[11px]">NPV</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold tabular-nums text-white">{fmtPct(result.irr10)}</p>
                    <p className="text-slate-500 text-[11px]">IRR</p>
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-sm font-semibold tabular-nums text-white">{fmtYears(result.payback)}</p>
                    <p className="text-slate-500 text-[11px]">Payback</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <ScenarioExplorer />

          <p className="text-slate-500 text-xs leading-relaxed">
            Assumptions: pre-tax salaries; 6% discount rate; loans repaid over 5 years; the 10-year DCF holds the
            salary delta flat; the lifetime view uses a 3–4% annual raise on both paths (+0.5 points on the
            consulting track). Signing bonuses, employer tuition assistance and taxes are excluded. Profiles
            are illustrative composites, not individual clients.
          </p>
        </section>

        {/* Scholarships */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Scholarships: The Highest-Leverage Variable You Control</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Industry drives the size of the return; scholarship aid is the most powerful lever you can pull
            on the cost side. A $50,000 scholarship at an M7 program improves your 10-year NPV by
            approximately $65,000 in present value terms (accounting for the loan interest savings) and
            reduces your break-even period by roughly 8–12 months.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            This creates a counterintuitive decision: a T10–15 program with a full scholarship ($120k–$145k
            in tuition covered) often produces better ROI than an M7 program at sticker price — unless your
            target path requires M7 access to MBB or top banking. The math depends on whether school tier
            changes your destination salary. If a T12 scholarship brings you to the same post-MBA role you
            would land from an M7, the T12 scholarship is the financially superior choice.
          </p>
          <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5">
            <p className="text-indigo-200 text-sm leading-relaxed">
              <span className="font-semibold text-white">Negotiate.</span> Most applicants underestimate their
              scholarship negotiating power. Graduate programs actively compete for qualified candidates, and
              if you have been admitted to multiple programs you can leverage one offer against another.
              Schools have historically increased scholarship packages by $20k–$50k when presented with
              competing offers. See{" "}
              <Link href="/mba-roi-scholarship" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">MBA ROI with scholarship aid</Link>.
            </p>
          </div>
          <div className="bg-amber-500/8 border border-amber-500/20 rounded-xl p-5 space-y-2">
            <p className="text-amber-300 text-sm font-semibold">2026 change: Grad PLUS loans are gone for new borrowers</p>
            <p className="text-slate-400 text-xs leading-relaxed">
              Since July 1, 2026, new graduate students can no longer take out Grad PLUS loans, which used to
              cover up to the full cost of attendance. Federal borrowing for most graduate programs is now capped
              at $20,500 a year and $100,000 in aggregate through Direct Unsubsidized Loans. Students who were
              already borrowing in the same program before that date may be grandfathered. Check with your
              school whether its MBA counts as a graduate or a professional program. For a $250k+ full-time
              budget, the gap has to come from scholarships, savings, employer sponsorship or private loans,
              whose rates depend on credit. That makes scholarship negotiation more valuable than before, and
              it means you should model your actual blended loan rate, not the federal rate. Options are
              covered in{" "}
              <Link href="/how-to-pay-for-mba" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">how to pay for an MBA</Link>
              {" "}and the{" "}
              <Link href="/mba-loan-repayment-calculator" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">MBA loan repayment calculator</Link>.
            </p>
          </div>
        </section>

        {/* ROI vs stock market */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">MBA ROI vs. Investing in the Stock Market</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            A useful frame for evaluating MBA ROI is the opportunity cost of capital: if you invested the
            full program cost — tuition, fees, and the cash equivalent of your foregone salary — into a
            diversified equity index fund instead, how does the return compare?
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            The S&amp;P 500 has returned approximately 10% annually over the long run, or roughly 7–8%
            after inflation. An MBA investment is justified on purely financial grounds when its{" "}
            <Link href="/mba-roi-calculator" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">internal rate of return (IRR)</Link>
            {" "}exceeds that benchmark.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center space-y-2">
              <p className="text-slate-400 text-xs uppercase tracking-wide">M7 → Consulting / Finance</p>
              <p className="text-green-400 text-2xl font-semibold">18–24%</p>
              <p className="text-slate-500 text-xs">IRR. Beats the market decisively.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center space-y-2">
              <p className="text-slate-400 text-xs uppercase tracking-wide">Top 20 → General Mgmt</p>
              <p className="text-yellow-400 text-2xl font-semibold">8–12%</p>
              <p className="text-slate-500 text-xs">IRR. Marginal vs. index investing.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center space-y-2">
              <p className="text-slate-400 text-xs uppercase tracking-wide">Non-Target, Full Debt</p>
              <p className="text-red-400 text-2xl font-semibold">&lt;6%</p>
              <p className="text-slate-500 text-xs">IRR. Market investment likely wins.</p>
            </div>
          </div>

          {/* IRR comparison bar chart */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-widest">IRR by Path vs. S&amp;P 500 Baseline</p>
            <div className="space-y-3">
              {[
                { label: "M7 → Consulting / Finance", irr: "18–24%", pct: 88, color: "bg-green-400", dim: false },
                { label: "M7 → Tech (post-2022 market)", irr: "12–16%", pct: 58, color: "bg-emerald-400", dim: false },
                { label: "Top 20 → General Mgmt", irr: "8–12%", pct: 42, color: "bg-yellow-400", dim: false },
                { label: "S&P 500 long-run average", irr: "~10%", pct: 38, color: "bg-indigo-400", dim: true },
                { label: "Non-target, full debt", irr: "<6%", pct: 22, color: "bg-red-400", dim: false },
              ].map(({ label, irr, pct, color, dim }) => (
                <div key={label} className={`space-y-1.5 ${dim ? "opacity-50" : ""}`}>
                  <div className="flex justify-between items-center text-xs">
                    <span className={dim ? "text-slate-500 italic" : "text-slate-400"}>{label}</span>
                    <span className={`font-semibold tabular-nums ${dim ? "text-indigo-400" : "text-white"}`}>{irr}</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className={`h-2 rounded-full ${color}`} style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-slate-600 text-xs pt-1">Scale: 0–27% IRR. S&amp;P 500 row shown as benchmark reference. The industry ranges earlier on this page span no-scholarship to full-scholarship scenarios, which is why their upper ends run higher.</p>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed">
            The MBA also has a meaningful advantage that IRR does not capture: it can unlock roles that are
            structurally inaccessible without the credential — specific consulting firms, banking associate
            programs, and executive development tracks that simply will not interview non-MBA candidates.
            If the role you want requires the degree, the comparison to equity investing is somewhat
            theoretical. If the role you want does not require the degree, the financial case must stand on
            its own.
          </p>
        </section>

        {/* When not worth it */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">When an MBA Is Not Worth It</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Most post-MBA disappointment follows a predictable pattern. The financial case breaks down
            structurally in three scenarios:
          </p>

          <div className="space-y-3">
            <div className="bg-red-500/8 border border-red-500/20 rounded-xl p-5 space-y-2">
              <p className="font-semibold text-red-300 text-sm">1. Nonprofit or government destination without subsidy</p>
              <p className="text-slate-400 text-xs leading-relaxed">
                If your goal is a nonprofit, government, or social impact role paying $80k–$130k post-MBA,
                the financial math almost never works at sticker price. A $400k investment with a $30k/year
                salary delta produces an IRR of 4–8% — below what you would earn in an index fund. The
                calculus changes entirely with PSLF (Public Service Loan Forgiveness), which can eliminate
                $100k+ in loan obligations after 10 years of qualifying payments.
              </p>
            </div>
            <div className="bg-red-500/8 border border-red-500/20 rounded-xl p-5 space-y-2">
              <p className="font-semibold text-red-300 text-sm">2. Already in a high-earning field with a clear promotion path</p>
              <p className="text-slate-400 text-xs leading-relaxed">
                Senior software engineers, doctors in private practice, and experienced finance professionals
                often find that the MBA adds little incremental earning power. If you are already at $180k+
                and your employer promotes based on performance rather than credentials, the opportunity
                cost of two years out may not be recoverable. High-performing engineers, analysts, and
                operators are often on salary trajectories that will converge with MBA outcomes in 3–5
                years anyway — without the disruption, cost, or two-year income gap.
              </p>
            </div>
            <div className="bg-red-500/8 border border-red-500/20 rounded-xl p-5 space-y-2">
              <p className="font-semibold text-red-300 text-sm">3. Lower-tier or non-target school, full debt, uncertain path</p>
              <p className="text-slate-400 text-xs leading-relaxed">
                A T20–T30 program at sticker price ($250k–$350k all-in) without a clear destination in
                a high-salary industry is the highest-risk scenario. Recruiter pipelines in high-paying
                sectors are heavily concentrated at M7 and select regional programs, so a fully financed
                non-target degree typically produces an IRR below the cost of the debt used to fund it. If
                post-MBA salary is $90k–$110k, the break-even period extends beyond 12–15 years, and the
                10-year NPV may be negative.
              </p>
            </div>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed">
            Three modeling errors make otherwise reasonable cases look better than they are:
          </p>
          <div className="space-y-3">
            {[
              {
                title: "Optimistic salary assumptions",
                body: "MBA salary surveys report medians, not individual outcomes. Median post-MBA salary at a given program tells you nothing about your outcome in your target function and geography. The range within any school is enormous.",
              },
              {
                title: "Ignoring opportunity cost",
                body: "Candidates who model only tuition routinely underestimate total cost by 50–60%. The two years of foregone income is real money — it compounds whether you count it or not.",
              },
              {
                title: "Assuming a normal recruiting market at graduation",
                body: "The MBA cohort that graduated in 2009 or 2020 faced recruiting environments that shredded modeled outcomes. The investment is illiquid and the return is sensitive to conditions outside your control.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-white font-semibold text-sm">{title}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Alternatives */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Alternatives: When Another Investment Makes More Sense</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The right comparison is not &ldquo;MBA vs. nothing.&rdquo; It is the MBA against the cheapest
            path to the same outcome. Run the alternative through the same NPV and payback test before you
            commit six figures.
          </p>
          <div className="space-y-3">
            {[
              {
                title: "Part-time, online or executive MBA",
                when: "You want the credential and a raise in your current industry or employer.",
                body: "No income gap, often employer-funded, and break-even is commonly 1–3 years after graduation. The cost is weaker access to MBB and investment banking recruiting.",
                href: "/part-time-mba-roi",
                link: "Part-time MBA ROI",
              },
              {
                title: "Employer sponsorship",
                when: "Your company has a tuition program and a path to promotion.",
                body: "Sponsorship can push your out-of-pocket cost close to zero, at the price of a stay-or-repay clause, usually 1–3 years. Read the clawback terms before you model the upside.",
                href: "/employer-sponsored-mba-roi",
                link: "Employer-sponsored MBA ROI",
              },
              {
                title: "Targeted reskilling",
                when: "The job you want screens for skills, not a degree: data, product, cloud, analytics.",
                body: "A $2k–$20k certificate or bootcamp with a few months of reduced income can deliver a comparable salary step with a payback measured in months. The ceiling is lower and the signal weaker for general management roles.",
                href: "/reskilling-roi-calculator",
                link: "Reskilling ROI Calculator",
              },
              {
                title: "Returnships",
                when: "You are re-entering the workforce after a career break.",
                body: "Paid 8–16 week return-to-work programs at large employers convert to full-time roles without new tuition debt. For returners, they often beat an MBA on both cost and time to re-employment.",
                href: "/returnship-roi-calculator",
                link: "Returnship ROI Calculator",
              },
              {
                title: "Stay, negotiate and compound",
                when: "You are already on a fast track in a well-paid field.",
                body: "Two years of raises, a promotion and an invested $100k+ of tuition is a real alternative, not a default. If your no-MBA path would reach the same salary within 3–5 years, the degree's IRR collapses.",
                href: "/career-compounder",
                link: "Career Compounder",
              },
            ].map(({ title, when, body, href, link }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-1.5">
                <p className="text-white font-semibold text-sm">{title}</p>
                <p className="text-indigo-300 text-xs">Best when: {when}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{body}</p>
                <Link href={href} className="inline-block text-indigo-400 hover:text-indigo-300 text-xs underline underline-offset-2">{link} →</Link>
              </div>
            ))}
          </div>
        </section>

        {/* Next steps */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Practical Next Steps Before You Apply or Accept</h2>
          <ol className="space-y-3">
            {[
              {
                title: "Name the destination job first",
                body: "Pick the specific role, industry and city you want after the MBA, then pull its salary from the employment reports of the schools you are considering. The school's overall median is the wrong input.",
              },
              {
                title: "Choose the school that gets you there at the lowest cost",
                body: "If your target employers recruit at a T15 school as heavily as at an M7, the cheaper or better-funded admit usually wins. Pay up for tier only when it changes which firms will interview you.",
              },
              {
                title: "Negotiate the scholarship",
                body: "Send each school competing offers and ask for a review, politely and in writing, before the deposit deadline. With Grad PLUS gone, every dollar of grant aid also lowers the private-loan rate risk.",
              },
              {
                title: "Pick the format that fits your prior salary",
                body: "Under about $110k pre-MBA with a pivot in mind: full-time is usually justified. Above about $135k, or staying in your industry: test 1-year, part-time and executive formats before a 2-year program.",
              },
              {
                title: "Stress-test, then decide",
                body: "Re-run your case with a 15% lower post-MBA salary and a six-month delay in your start date. If NPV stays positive and payback stays under about 7 years, you have a robust investment.",
              },
              {
                title: "Plan the negotiation on the other side",
                body: "Signing bonuses, relocation and tuition reimbursement from your post-MBA employer are negotiable and go straight into your Year 1 cash flow.",
                href: "/blog/mba-salary-negotiation",
                link: "MBA salary negotiation guide",
              },
            ].map(({ title, body, href, link }, i) => (
              <li key={title} className="bg-white/5 border border-white/10 rounded-xl p-5 flex gap-4">
                <span className="text-indigo-300 font-semibold tabular-nums">{i + 1}</span>
                <div className="space-y-1">
                  <p className="text-white font-semibold text-sm">{title}</p>
                  <p className="text-slate-400 text-xs leading-relaxed">{body}</p>
                  {href && (
                    <Link href={href} className="inline-block text-indigo-400 hover:text-indigo-300 text-xs underline underline-offset-2">{link} →</Link>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-10 text-center space-y-5">
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">Free Tool</p>
          <h2 className="text-2xl font-semibold tracking-tight">Run Your Personalized MBA DCF</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            The industry, tier and scenario numbers above are benchmarks. Your result depends on your own pre-MBA
            salary, school cost, scholarship aid, loan rate and post-MBA role. Enter them to get NPV, IRR, break-even
            year, a loan amortization schedule and a side-by-side comparison against a passive equity investment.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Run three scenarios: optimistic (higher post-MBA salary, scholarship), base (median outcomes),
            and conservative (lower post-MBA salary, no scholarship). The spread between optimistic and
            conservative tells you how much execution risk you are taking on.
          </p>
          <Link
            href="/mba-roi-calculator"
            className="inline-block bg-linear-to-r from-indigo-600 to-violet-600 hover:opacity-90 transition-all px-8 py-4 rounded-xl font-medium text-white text-base shadow-[0_0_40px_rgba(99,102,241,0.3)]"
          >
            Run My MBA DCF →
          </Link>
          <p className="text-slate-500 text-xs">
            Want to see the 30-year picture? Model career phases and breaks in the{" "}
            <Link href="/lifetime-earnings-calculator" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">Lifetime Earnings Calculator</Link>.
          </p>
        </section>

        {/* ── Related Guides ── */}
        <section className="border-t border-white/10 pt-10 mt-10">
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-5">Related Guides</p>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link href="/mba-roi-calculator" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/8 hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">Σ</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">MBA ROI Calculator</p>
                <p className="text-slate-500 text-xs">Model your specific numbers →</p>
              </div>
            </Link>
            <Link href="/mba-roi-report-2026" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/8 hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">↗</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">MBA ROI Report 2026</p>
                <p className="text-slate-500 text-xs">IRR data across 12 industries →</p>
              </div>
            </Link>
            <Link href="/mba-roi" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/8 hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">→</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">MBA ROI Complete Guide</p>
                <p className="text-slate-500 text-xs">IRR, NPV & break-even by industry →</p>
              </div>
            </Link>
            <Link href="/mba-break-even" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/8 hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">⌛</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">MBA Break-Even Period</p>
                <p className="text-slate-500 text-xs">Real math for all scenarios →</p>
              </div>
            </Link>
            <Link href="/mba-myth-buster" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/8 hover:border-white/20 transition-all">
              <div className="text-violet-400 font-mono text-lg">?</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-violet-300 transition-colors">MBA Myth Buster Quiz</p>
                <p className="text-slate-500 text-xs">10 beliefs tested against real data →</p>
              </div>
            </Link>
            <Link href="/career-compounder" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/8 hover:border-white/20 transition-all">
              <div className="text-emerald-400 font-mono text-lg">∞</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-emerald-300 transition-colors">Career Compounder</p>
                <p className="text-slate-500 text-xs">See how the salary boost compounds →</p>
              </div>
            </Link>
          </div>
        </section>

        <RelatedLinks
          links={[
            { href: "/mba-salary-increase", label: "Does an MBA increase salary?", description: "+47% average increase — full 2026 data by role and sector." },
            { href: "/mba-cost", label: "MBA cost breakdown", description: "Tuition, living costs and opportunity cost by program." },
            { href: "/blog/how-to-calculate-mba-roi", label: "How to calculate MBA ROI", description: "NPV and IRR, step by step." },
            { href: "/blog/mba-vs-masters-vs-bootcamp", label: "MBA vs. master's vs. bootcamp", description: "ROI of the alternatives compared." },
          ]}
        />

        <FaqSection items={faqItems} />

        <SiteFooter note="Sources: GMAC Corporate Recruiters Survey 2025, school employment reports and 2025–26 cost-of-attendance budgets, publicly reported MBB and banking compensation, BLS Occupational Employment and Wage Statistics (May 2024), U.S. Department of Education loan limits effective July 1, 2026, Glassdoor and Levels.fyi. Scenario profiles are illustrative composites. All ranges are estimates; individual outcomes vary." />

      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_breadcrumbSchema) }} />

    </main>
  )
}
