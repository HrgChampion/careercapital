import Link from "next/link"
import { pageAlternates, articleSchema, breadcrumbSchema } from "@/lib/seo"
import RelatedLinks from "@/components/RelatedLinks"
import SiteFooter from "@/components/SiteFooter"
import FaqSection, { type FaqItem } from "../../components/FaqSection"
import ArticleMeta from "@/components/ArticleMeta"

const _articleSchema = articleSchema({
  title: "Is an MBA Worth It in 2026? IRR by School & Industry",
  description: "Is an MBA worth it financially in 2026? Full cost breakdown, IRR by school tier, ROI vs the stock market, and when the math reliably fails.",
  url: "https://careerreturns.com/mba-worth-it",
  datePublished: "2026-03-03",
  dateModified: "2026-10-02",
})
const _breadcrumbSchema = breadcrumbSchema([{ name: "Is an MBA Worth It?", url: "https://careerreturns.com/mba-worth-it" }])

export const metadata = {
  title: "Is an MBA Worth It in 2026? IRR by School & Industry",
  description:
    "An MBA is worth it when its IRR beats 10–12%. M7 to MBB/IB: 18–40%. Outside the T25: 2–6%. See your break-even and NPV by school and industry.",
  alternates: pageAlternates("https://careerreturns.com/mba-worth-it"),
  openGraph: {
    title: "Is an MBA Worth It in 2026? IRR by School & Industry",
    description: "An MBA is worth it when its IRR beats 10–12%. M7 to MBB/IB: 18–40%. Outside the T25: 2–6%. See your break-even and NPV by school and industry.",
    url: "https://careerreturns.com/mba-worth-it",
    siteName: "CareerReturns",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Is an MBA Worth It in 2026? IRR by School & Industry",
    description: "An MBA is worth it when its IRR beats 10–12%. M7 to MBB/IB: 18–40%. Outside the T25: 2–6%. See your break-even and NPV by school and industry.",
  },
}

const costRows = [
  { label: "Tuition + Fees", m7: "$145,000–$165,000", t1015: "$120,000–$145,000", t1525: "$90,000–$125,000", note: "Two-year total, excludes scholarships" },
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
            Is an MBA Worth It?
          </h1>
          <ArticleMeta updated="2026-10-02" />
          <p className="text-slate-400 text-lg leading-relaxed">
            An MBA is worth it financially when it produces an IRR above 10–12% — the long-run equity market benchmark. At M7 programs targeting MBB consulting or investment banking, IRRs range from <span className="text-white font-medium">18–40%</span>, making the degree one of the highest-returning investments available. At programs outside the top 25 targeting general management roles, IRRs of 2–6% rarely justify the full economic cost of $150,000–$300,000. Check your own numbers with the{" "}
            <Link href="/mba-roi-calculator" className="text-white underline underline-offset-2 hover:text-indigo-300">MBA ROI calculator</Link>, or see the line-by-line NPV, IRR and break-even math in our{" "}
            <Link href="/mba-roi" className="text-white underline underline-offset-2 hover:text-indigo-300">detailed MBA ROI analysis</Link>.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "IRR Range", value: "4–55%" },
              { label: "Break-Even Range", value: "2–13 yrs" },
              { label: "Industries Modeled", value: "12" },
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
              At M7 programs (Harvard, Wharton, Booth, Kellogg, Columbia, Sloan, Tuck) with strong consulting
              or finance placement, the numbers typically work. At programs outside the top 25 with modest
              salary uplifts, they often do not. The degree itself is not the variable. The combination of
              school tier, target industry, total cost, and financing structure is what determines the outcome.
              There is no universal answer — only your specific numbers modeled correctly.
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
                <p className="text-white font-semibold">$385k–$485k</p>
                <p className="text-slate-500 text-xs mt-0.5">M7 Programs</p>
              </div>
              <div className="text-center">
                <p className="text-white font-semibold">$310k–$410k</p>
                <p className="text-slate-500 text-xs mt-0.5">T10–15</p>
              </div>
              <div className="text-center">
                <p className="text-white font-semibold">$245k–$350k</p>
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
            programs carry the highest. For a program-by-program breakdown, see{" "}
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

        {/* CTA */}
        <section className="rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-10 text-center space-y-5">
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">Free Tool</p>
          <h2 className="text-2xl font-semibold tracking-tight">Model Your Specific MBA Decision</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            The industry and tier numbers above are benchmarks; your result depends on your own pre-MBA
            salary, school cost, scholarship aid, and post-MBA role. Enter them to get NPV, IRR, break-even
            year, and a side-by-side comparison against a passive equity investment.
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
            Use the MBA ROI Calculator →
          </Link>
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

        <SiteFooter note="Salary data sourced from GMAC surveys, school employment reports, Glassdoor, Levels.fyi, and publicly reported compensation figures. All ranges are estimates; individual outcomes vary." />

      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_breadcrumbSchema) }} />

    </main>
  )
}
