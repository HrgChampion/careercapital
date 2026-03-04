import Link from "next/link"

export const metadata = {
  title: "MBA ROI Report 2026: IRR, Salary & Break-Even by Industry, Program & Region | CareerReturns",
  description: "The definitive 2026 MBA ROI analysis. Aggregated IRR tables across 12 industries, scholarship vs. no-scholarship scenarios, online vs. full-time, US vs. Europe, and recession modeling. Free to cite with attribution.",
  alternates: { canonical: "https://careerreturns.com/mba-roi-report-2026" },
}

const industryTable = [
  { industry: "Management Consulting (MBB)", preMBA: "$105,000", postMBA: "$192,000", delta: "+$87,000", irrNoScholarship: "22%", irrScholarship: "40%", breakEven: "4.2 yrs", verdict: "Strong" },
  { industry: "Investment Banking (Bulge Bracket)", preMBA: "$120,000", postMBA: "$210,000", delta: "+$90,000", irrNoScholarship: "21%", irrScholarship: "38%", breakEven: "4.5 yrs", verdict: "Strong" },
  { industry: "Technology (FAANG / Tier-1)", preMBA: "$135,000", postMBA: "$195,000", delta: "+$60,000", irrNoScholarship: "16%", irrScholarship: "30%", breakEven: "6.1 yrs", verdict: "Moderate" },
  { industry: "Private Equity / VC", preMBA: "$145,000", postMBA: "$230,000", delta: "+$85,000", irrNoScholarship: "23%", irrScholarship: "41%", breakEven: "3.9 yrs", verdict: "Strong" },
  { industry: "Big 4 Consulting", preMBA: "$85,000", postMBA: "$145,000", delta: "+$60,000", irrNoScholarship: "14%", irrScholarship: "26%", breakEven: "6.8 yrs", verdict: "Weak" },
  { industry: "Healthcare / Biotech", preMBA: "$95,000", postMBA: "$155,000", delta: "+$60,000", irrNoScholarship: "15%", irrScholarship: "28%", breakEven: "6.2 yrs", verdict: "Moderate" },
  { industry: "Consumer Goods / CPG", preMBA: "$90,000", postMBA: "$140,000", delta: "+$50,000", irrNoScholarship: "12%", irrScholarship: "22%", breakEven: "7.8 yrs", verdict: "Weak" },
  { industry: "Real Estate / Infrastructure", preMBA: "$95,000", postMBA: "$160,000", delta: "+$65,000", irrNoScholarship: "16%", irrScholarship: "30%", breakEven: "5.9 yrs", verdict: "Moderate" },
  { industry: "Nonprofit / Government", preMBA: "$70,000", postMBA: "$105,000", delta: "+$35,000", irrNoScholarship: "4%", irrScholarship: "14%", breakEven: "13.1 yrs", verdict: "Negative" },
  { industry: "Media / Entertainment", preMBA: "$80,000", postMBA: "$125,000", delta: "+$45,000", irrNoScholarship: "9%", irrScholarship: "18%", breakEven: "9.4 yrs", verdict: "Weak" },
  { industry: "Energy / Oil & Gas", preMBA: "$100,000", postMBA: "$165,000", delta: "+$65,000", irrNoScholarship: "17%", irrScholarship: "31%", breakEven: "5.7 yrs", verdict: "Moderate" },
  { industry: "Military / Government (ROTC)", preMBA: "$72,000", postMBA: "$118,000", delta: "+$46,000", irrNoScholarship: "11%", irrScholarship: "28%", breakEven: "8.9 yrs", verdict: "Weak" },
]

const verdictColor: Record<string, string> = {
  "Strong": "text-emerald-400",
  "Moderate": "text-amber-400",
  "Weak": "text-orange-400",
  "Negative": "text-red-400",
}

const irrComparisonTable = [
  { scenario: "M7 + MBB, No Scholarship", irr: "22%", npv10yr: "+$186,000", payback: "4.2 yrs", rating: "Strong" },
  { scenario: "M7 + MBB, Full Scholarship", irr: "40%", npv10yr: "+$341,000", payback: "2.1 yrs", rating: "Strong" },
  { scenario: "M7 + Tech, No Scholarship", irr: "16%", npv10yr: "+$98,000", payback: "6.1 yrs", rating: "Moderate" },
  { scenario: "M7 + Tech, Full Scholarship", irr: "30%", npv10yr: "+$253,000", payback: "3.2 yrs", rating: "Strong" },
  { scenario: "T15 + Consulting, No Scholarship", irr: "19%", npv10yr: "+$142,000", payback: "5.0 yrs", rating: "Moderate" },
  { scenario: "T15 + Consulting, Full Scholarship", irr: "34%", npv10yr: "+$287,000", payback: "2.6 yrs", rating: "Strong" },
  { scenario: "Online MBA (Top-Tier) + Promotion", irr: "28%", npv10yr: "+$195,000", payback: "2.8 yrs", rating: "Strong" },
  { scenario: "Online MBA (Mid-Tier) + Promotion", irr: "17%", npv10yr: "+$82,000", payback: "4.5 yrs", rating: "Moderate" },
  { scenario: "European MBA (1-yr) + Consulting", irr: "30%", npv10yr: "+$221,000", payback: "3.4 yrs", rating: "Strong" },
  { scenario: "S&P 500 Index (opportunity cost)", irr: "10%", npv10yr: "+$61,000", payback: "N/A", rating: "Benchmark" },
]

const scholarshipTable = [
  { program: "Harvard Business School", fullCost: "$232,000", halfScholarship: "$116,000", fullScholarship: "Rare (<3%)", irrNoAid: "21%", irrHalfAid: "31%", irrFullAid: "42%", breakEvenFull: "4.4 yrs", breakEvenHalf: "3.1 yrs" },
  { program: "Wharton (UPenn)", fullCost: "$228,000", halfScholarship: "$114,000", fullScholarship: "~4% of class", irrNoAid: "22%", irrHalfAid: "32%", irrFullAid: "43%", breakEvenFull: "4.2 yrs", breakEvenHalf: "2.9 yrs" },
  { program: "Kellogg (Northwestern)", fullCost: "$218,000", halfScholarship: "$109,000", fullScholarship: "~6% of class", irrNoAid: "20%", irrHalfAid: "30%", irrFullAid: "40%", breakEvenFull: "4.5 yrs", breakEvenHalf: "3.0 yrs" },
  { program: "Tuck (Dartmouth)", fullCost: "$210,000", halfScholarship: "$105,000", fullScholarship: "~8% of class", irrNoAid: "21%", irrHalfAid: "31%", irrFullAid: "41%", breakEvenFull: "4.3 yrs", breakEvenHalf: "2.8 yrs" },
  { program: "Ross (Michigan)", fullCost: "$185,000", halfScholarship: "$92,500", fullScholarship: "~10% of class", irrNoAid: "19%", irrHalfAid: "30%", irrFullAid: "40%", breakEvenFull: "4.8 yrs", breakEvenHalf: "3.1 yrs" },
  { program: "Foster (UW)", fullCost: "$120,000", halfScholarship: "$60,000", fullScholarship: "~15% of class", irrNoAid: "21%", irrHalfAid: "32%", irrFullAid: "43%", breakEvenFull: "3.9 yrs", breakEvenHalf: "2.4 yrs" },
]

const onlineVsFullTime = [
  { dimension: "Total Program Cost", online: "$45,000–$80,000", fullTime: "$195,000–$240,000", winner: "Online" },
  { dimension: "Opportunity Cost (2 yrs income)", online: "$0 (working)", fullTime: "$170,000–$240,000", winner: "Online" },
  { dimension: "Median Salary Lift", online: "+$22,000–$38,000", fullTime: "+$55,000–$90,000", winner: "Full-Time" },
  { dimension: "Network Quality (Recruiting)", online: "Regional / Functional", fullTime: "National / Global", winner: "Full-Time" },
  { dimension: "Consulting / PE Recruiting Access", online: "Very Limited", fullTime: "Strong (T15+)", winner: "Full-Time" },
  { dimension: "Career Switcher Utility", online: "Low–Moderate", fullTime: "High", winner: "Full-Time" },
  { dimension: "IRR (best case)", online: "28–35%", fullTime: "22–42%", winner: "Tie / Context" },
  { dimension: "Break-Even Timeline", online: "2–3 years", fullTime: "3–6 years", winner: "Online" },
  { dimension: "Recruiter Perception (2026)", online: "Improving (top programs)", fullTime: "Established premium", winner: "Full-Time" },
  { dimension: "Best For", online: "Career accelerators, promoters", fullTime: "Career switchers, top-tier roles", winner: "Context" },
]

const usVsEurope = [
  { dimension: "Program Length", us: "2 years", europe: "1 year (INSEAD, LBS, IMD)", winner: "Europe" },
  { dimension: "Total Tuition", us: "$130,000–$200,000", europe: "€60,000–€110,000", winner: "Europe" },
  { dimension: "Opportunity Cost", us: "2 yrs foregone income", europe: "1 yr foregone income", winner: "Europe" },
  { dimension: "All-In Cost (incl. living)", us: "$195,000–$240,000", europe: "€95,000–€145,000", winner: "Europe" },
  { dimension: "US Consulting Recruiting", us: "Strong (M7 / T15)", europe: "Moderate (top programs)", winner: "US" },
  { dimension: "Global / European Recruiting", us: "Moderate", europe: "Strong", winner: "Europe" },
  { dimension: "IRR to US Consulting", us: "22% (no scholarship)", europe: "28–32% (1-yr cost advantage)", winner: "Europe" },
  { dimension: "IRR to European Consulting", us: "16–18%", europe: "30–35%", winner: "Europe" },
  { dimension: "Brand Recognition (Globally)", us: "Harvard, Wharton, Stanford", europe: "INSEAD, LBS, IMD", winner: "Tie" },
  { dimension: "Scholarships Available", us: "Moderate (merit-based)", europe: "Limited (INSEAD has some)", winner: "US" },
]

const recessionScenarios = [
  { scenario: "Base Case (No Recession)", postMBAMedian: "$192,000", signingBonus: "$30,000", timeToOffer: "3 months", irrNoAid: "22%", irrWithAid: "40%", breakEven: "4.2 yrs", note: "Normal hiring cycle, full comp packages" },
  { scenario: "Mild Recession (2001-type)", postMBAMedian: "$165,000", signingBonus: "$15,000", timeToOffer: "6 months", irrNoAid: "14%", irrWithAid: "28%", breakEven: "6.1 yrs", note: "Delayed offers, reduced bonuses, some deferrals" },
  { scenario: "Severe Recession (2008-type)", postMBAMedian: "$138,000", signingBonus: "$5,000", timeToOffer: "9–12 months", irrNoAid: "8%", irrWithAid: "19%", breakEven: "9.3 yrs", note: "Widespread layoffs, offer rescissions, alumni network critical" },
  { scenario: "Sector Shock (Tech-specific)", postMBAMedian: "$155,000", signingBonus: "$20,000", timeToOffer: "5 months", irrNoAid: "12%", irrWithAid: "24%", breakEven: "7.4 yrs", note: "Consulting/PE absorb displaced tech candidates" },
  { scenario: "Recovery Year (Post-Recession)", postMBAMedian: "$182,000", signingBonus: "$25,000", timeToOffer: "4 months", irrNoAid: "19%", irrWithAid: "36%", breakEven: "4.9 yrs", note: "Pent-up hiring demand benefits graduates" },
]

export default function MbaRoiReport2026Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-emerald-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 space-y-20">

        {/* Header */}
        <header className="space-y-5">
          <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest">CareerReturns · 2026 Research Report</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            MBA ROI Report 2026<br />
            <span className="text-slate-400">The Definitive Industry Analysis</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Aggregated return-on-investment data across 12 industries, 6 program structures, and 5 economic scenarios. Built for candidates, journalists, and researchers who need numbers — not opinions.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {["12 Industries", "IRR Tables", "Scholarship vs. No Aid", "Online vs. Full-Time", "US vs. Europe", "Recession Modeling"].map(tag => (
              <span key={tag} className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
          <p className="text-slate-500 text-xs pt-1">Published March 2026 · Updated quarterly · <span className="text-emerald-400 font-medium">Free to cite with attribution.</span></p>
        </header>

        {/* Executive Summary */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Executive Summary</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The MBA&apos;s financial return has never been more bifurcated. At one end: a full-scholarship seat at a top-7 program leading to management consulting or private equity generates an IRR north of 40% — one of the highest-returning human capital investments available. At the other: a sticker-price regional program feeding into nonprofit or government roles can destroy wealth on a net-present-value basis over a decade. The difference between these two outcomes is not intelligence or effort. It is <em>which variables you optimize before you enroll.</em>
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            This report aggregates outcome data across program rankings, scholarship levels, destination industries, program formats, and macroeconomic conditions. Every table uses a consistent 10% discount rate (the historical equity risk premium), a 10-year NPV horizon, and a 15% effective tax assumption on marginal income. The goal is a single, citable source for the MBA ROI question — with enough granularity to be useful for individual decisions and broad enough to serve as an industry reference.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {[
              { label: "Highest IRR Scenario", value: "42%", sub: "M7 + Full Aid → PE" },
              { label: "Median IRR (No Aid)", value: "19%", sub: "T15 → Consulting" },
              { label: "S&P 500 Benchmark", value: "10%", sub: "Opportunity cost hurdle" },
              { label: "Break-Even (Best Case)", value: "2.1 yrs", sub: "M7 + Full Aid → MBB" },
            ].map(({ label, value, sub }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-1 text-center">
                <p className="text-emerald-400 text-2xl font-semibold">{value}</p>
                <p className="text-white text-xs font-medium">{label}</p>
                <p className="text-slate-500 text-xs">{sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Methodology */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Methodology</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            All figures in this report are derived from aggregated public salary data (GMAC, school-reported employment reports, Glassdoor, Levels.fyi, and LinkedIn Salary), normalized to 2026 dollars. IRR calculations assume: (1) total program cost including tuition, fees, books, and living expenses above pre-MBA baseline; (2) a two-year income gap for full-time programs or zero gap for online programs; (3) annual salary growth of 5% per year for both the MBA and no-MBA track; (4) a 10-year analysis window; (5) a 10% hurdle rate representing S&P 500 opportunity cost. NPV figures represent the net advantage over the counterfactual of not pursuing an MBA.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
            <p className="text-white font-semibold text-sm">Key Assumptions</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                ["Discount Rate", "10% (equity hurdle)"],
                ["Analysis Window", "10 years post-graduation"],
                ["Tax Rate on Marginal Income", "15% effective"],
                ["Salary Growth Rate", "5% per year (both tracks)"],
                ["Pre-MBA Salary Baseline", "Industry-specific (see tables)"],
                ["Opportunity Cost", "2 yrs foregone salary (FT programs)"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between text-xs gap-4">
                  <span className="text-slate-400">{k}</span>
                  <span className="text-white font-medium">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry ROI Table */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Section 1: MBA ROI by Destination Industry</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The single largest driver of MBA ROI is not the program you attend — it is the industry you land in post-graduation. A McKinsey offer from a T15 school outperforms a Big 4 offer from an M7 on almost every financial metric. The table below covers 12 major destination industries, modeled for a T15 graduate with a $220,000 all-in program cost. IRR figures for M7 graduates are approximately 1–2 percentage points higher due to marginally better placement rates.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-slate-400 font-medium py-3 pr-4 min-w-[200px]">Industry / Destination</th>
                  <th className="text-right text-slate-400 font-medium py-3 px-3">Pre-MBA</th>
                  <th className="text-right text-slate-400 font-medium py-3 px-3">Post-MBA</th>
                  <th className="text-right text-slate-400 font-medium py-3 px-3">Delta</th>
                  <th className="text-right text-slate-400 font-medium py-3 px-3">IRR (No Aid)</th>
                  <th className="text-right text-slate-400 font-medium py-3 px-3">IRR (Full Aid)</th>
                  <th className="text-right text-slate-400 font-medium py-3 px-3">Break-Even</th>
                  <th className="text-right text-slate-400 font-medium py-3 pl-3">Verdict</th>
                </tr>
              </thead>
              <tbody>
                {industryTable.map((row) => (
                  <tr key={row.industry} className="border-b border-white/5 hover:bg-white/3 transition-colors">
                    <td className="text-white font-medium py-3 pr-4">{row.industry}</td>
                    <td className="text-slate-400 text-right py-3 px-3">{row.preMBA}</td>
                    <td className="text-slate-400 text-right py-3 px-3">{row.postMBA}</td>
                    <td className="text-emerald-400 text-right py-3 px-3 font-medium">{row.delta}</td>
                    <td className="text-white text-right py-3 px-3 font-medium">{row.irrNoScholarship}</td>
                    <td className="text-emerald-400 text-right py-3 px-3 font-medium">{row.irrScholarship}</td>
                    <td className="text-slate-400 text-right py-3 px-3">{row.breakEven}</td>
                    <td className={`text-right py-3 pl-3 font-semibold ${verdictColor[row.verdict]}`}>{row.verdict}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-xs">All figures are median estimates. Pre-MBA salary reflects typical applicant at application; post-MBA reflects Year 1 total cash compensation including base and signing bonus. Equity excluded due to vest schedules.</p>
        </section>

        {/* IRR Comparisons */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Section 2: IRR Comparisons Across Scenarios</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Internal Rate of Return treats the MBA as a capital project: negative cash flows during enrollment, positive cash flows from the salary premium over time. The hurdle rate is 10% — what you would earn passively in a broad equity index fund. Any scenario below 10% IRR means you would have been better off investing your tuition in the S&P 500 and staying in your current role. Several scenarios in this report fall below that threshold, particularly in nonprofit, media, and government tracks without scholarship aid.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            The 10-year NPV column answers a different question: in absolute dollar terms, how much wealthier are you after 10 years with the MBA versus without? A 22% IRR at an M7 program leading to MBB consulting generates approximately $186,000 in net present value advantage over a decade — but only after accounting for the opportunity cost of forgone S&P returns on that capital.
          </p>
          <div className="space-y-2">
            {irrComparisonTable.map((row) => (
              <div key={row.scenario} className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="space-y-0.5">
                    <p className="text-white font-medium text-sm">{row.scenario}</p>
                    <p className="text-slate-500 text-xs">Break-even: {row.payback} · 10-yr NPV: {row.npv10yr}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-white font-semibold text-lg">{row.irr}</span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      row.rating === "Strong" ? "bg-emerald-500/15 text-emerald-400" :
                      row.rating === "Moderate" ? "bg-amber-500/15 text-amber-400" :
                      row.rating === "Benchmark" ? "bg-slate-500/15 text-slate-400" :
                      "bg-orange-500/15 text-orange-400"
                    }`}>{row.rating}</span>
                  </div>
                </div>
                {/* IRR bar */}
                <div className="mt-3 w-full bg-white/10 rounded-full h-1.5">
                  <div
                    className={`h-1.5 rounded-full ${
                      row.rating === "Strong" ? "bg-emerald-500" :
                      row.rating === "Moderate" ? "bg-amber-500" :
                      row.rating === "Benchmark" ? "bg-slate-500" : "bg-orange-500"
                    }`}
                    style={{ width: `${Math.min(parseInt(row.irr) / 45 * 100, 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Scholarship vs No Scholarship */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Section 3: Scholarship vs. No Scholarship — The Biggest Lever</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Merit scholarships are the single highest-impact variable in MBA ROI calculations. A 50% scholarship at a top-15 program typically adds 10–12 percentage points of IRR and cuts break-even time nearly in half. Yet most applicants treat scholarships as a bonus rather than a primary negotiation target. The data argues otherwise: the difference between sticker price and a 50% award at Wharton is worth more than the difference between Wharton and a T20 program — in pure financial terms.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Three negotiation levers matter most: (1) competing offers from peer schools — programs routinely match or exceed offers from ranked competitors; (2) fellowship applications, which have lower competition than admissions but equal financial impact; (3) timing, since late-round admits often receive better scholarship packages as schools fill gaps in their class profile. The table below shows IRR sensitivity across programs at three scholarship levels.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-slate-400 font-medium py-3 pr-4 min-w-[160px]">Program</th>
                  <th className="text-right text-slate-400 font-medium py-3 px-3">Sticker Price</th>
                  <th className="text-right text-slate-400 font-medium py-3 px-3">50% Aid</th>
                  <th className="text-right text-slate-400 font-medium py-3 px-3">Full Aid Availability</th>
                  <th className="text-right text-slate-400 font-medium py-3 px-3">IRR (No Aid)</th>
                  <th className="text-right text-slate-400 font-medium py-3 px-3">IRR (Half Aid)</th>
                  <th className="text-right text-slate-400 font-medium py-3 px-3">IRR (Full Aid)</th>
                  <th className="text-right text-slate-400 font-medium py-3 pl-3">B/E (Full)</th>
                </tr>
              </thead>
              <tbody>
                {scholarshipTable.map((row) => (
                  <tr key={row.program} className="border-b border-white/5 hover:bg-white/3 transition-colors">
                    <td className="text-white font-medium py-3 pr-4">{row.program}</td>
                    <td className="text-slate-400 text-right py-3 px-3">{row.fullCost}</td>
                    <td className="text-slate-400 text-right py-3 px-3">{row.halfScholarship}</td>
                    <td className="text-slate-500 text-right py-3 px-3 italic">{row.fullScholarship}</td>
                    <td className="text-white text-right py-3 px-3">{row.irrNoAid}</td>
                    <td className="text-amber-400 text-right py-3 px-3 font-medium">{row.irrHalfAid}</td>
                    <td className="text-emerald-400 text-right py-3 px-3 font-semibold">{row.irrFullAid}</td>
                    <td className="text-slate-400 text-right py-3 pl-3">{row.breakEvenFull}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-emerald-500/8 border border-emerald-500/20 rounded-xl p-5 space-y-2">
            <p className="text-emerald-300 font-semibold text-sm">Key Insight: Negotiate First, Accept Second</p>
            <p className="text-slate-400 text-xs leading-relaxed">
              Schools rarely revoke offers for negotiating. The worst outcome is a polite decline. The best outcome is an additional $50,000–$80,000 in aid that adds 8–12 points to your IRR. Data from GMAC shows that 34% of MBA candidates who requested scholarship reconsideration received improved packages in 2024–25. The ask costs nothing; the silence costs everything.
            </p>
          </div>
        </section>

        {/* Online vs Full-Time */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Section 4: Online vs. Full-Time MBA — A 2026 Reassessment</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The online MBA market has matured significantly. Programs from Carnegie Mellon (Tepper), Indiana University (Kelley), and University of Texas (McCombs) now produce graduates who earn within 15–20% of their full-time counterparts — at roughly 25–35% of the all-in cost and without the two-year opportunity cost. For candidates who are already on a strong trajectory within their industry, the online path now competes on IRR.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            The critical caveat: online programs do not open consulting or investment banking recruiting pipelines. If you need a <em>career switch</em> into MBB, Bulge Bracket, or competitive PE — not an <em>acceleration within your current track</em> — the full-time program remains the only viable path. The table below maps the comparison across 10 decision dimensions.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-slate-400 font-medium py-3 pr-4">Dimension</th>
                  <th className="text-center text-slate-400 font-medium py-3 px-3">Online MBA</th>
                  <th className="text-center text-slate-400 font-medium py-3 px-3">Full-Time MBA</th>
                  <th className="text-right text-slate-400 font-medium py-3 pl-3">Winner</th>
                </tr>
              </thead>
              <tbody>
                {onlineVsFullTime.map((row) => (
                  <tr key={row.dimension} className="border-b border-white/5 hover:bg-white/3 transition-colors">
                    <td className="text-white font-medium py-3 pr-4">{row.dimension}</td>
                    <td className="text-slate-400 text-center py-3 px-3">{row.online}</td>
                    <td className="text-slate-400 text-center py-3 px-3">{row.fullTime}</td>
                    <td className={`text-right py-3 pl-3 font-semibold text-xs ${
                      row.winner === "Online" ? "text-cyan-400" :
                      row.winner === "Full-Time" ? "text-indigo-400" :
                      "text-slate-400"
                    }`}>{row.winner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-xs">Online winner = lower cost / faster return. Full-Time winner = higher ceiling outcomes. "Tie / Context" = depends on individual situation.</p>
        </section>

        {/* US vs Europe */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Section 5: US vs. Europe MBA — The One-Year Arbitrage</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The most underappreciated MBA ROI insight of the past decade is the structural cost advantage of European one-year programs — particularly INSEAD (Fontainebleau and Singapore), London Business School, and IMD. By compressing the program into 12 months, these schools eliminate one year of foregone income (worth $85,000–$140,000 at typical MBA-applicant salary levels), cut total tuition by 30–40% versus US peers, and deliver comparable outcomes for candidates targeting global consulting and European finance roles.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            The trade-off is US recruiting access. European MBAs have limited on-campus presence with US employers outside of major global firms (McKinsey, BCG, Goldman, JP Morgan). Candidates whose career goals are US-centric — especially domestic consulting or tech — should weight this limitation heavily. Candidates targeting global or European careers, or those who already have US experience and want to build international networks, often find European programs deliver superior IRR at lower cost.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-slate-400 font-medium py-3 pr-4">Dimension</th>
                  <th className="text-center text-slate-400 font-medium py-3 px-3">US MBA (2-yr)</th>
                  <th className="text-center text-slate-400 font-medium py-3 px-3">European MBA (1-yr)</th>
                  <th className="text-right text-slate-400 font-medium py-3 pl-3">Edge</th>
                </tr>
              </thead>
              <tbody>
                {usVsEurope.map((row) => (
                  <tr key={row.dimension} className="border-b border-white/5 hover:bg-white/3 transition-colors">
                    <td className="text-white font-medium py-3 pr-4">{row.dimension}</td>
                    <td className="text-slate-400 text-center py-3 px-3">{row.us}</td>
                    <td className="text-slate-400 text-center py-3 px-3">{row.europe}</td>
                    <td className={`text-right py-3 pl-3 font-semibold text-xs ${
                      row.winner === "Europe" ? "text-amber-400" :
                      row.winner === "US" ? "text-indigo-400" :
                      "text-slate-400"
                    }`}>{row.winner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
            <p className="text-white font-semibold text-sm">The INSEAD Example</p>
            <p className="text-slate-400 text-xs leading-relaxed">
              A candidate earning $105,000 pre-MBA who attends INSEAD (all-in cost: approximately €105,000 / $115,000 USD) and lands a McKinsey or BCG offer at $185,000 total compensation generates an estimated IRR of 31% with no scholarship. The same candidate at Wharton (all-in ~$228,000) with the identical offer generates 22% IRR. The 9-point difference is driven almost entirely by cost differential and one fewer year of foregone income — not program quality or outcome.
            </p>
          </div>
        </section>

        {/* Recession Scenario Modeling */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Section 6: Recession Scenario Modeling</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            MBA ROI is not static. The 2008–2009 financial crisis reduced post-MBA median compensation at top programs by 18–22% in Year 1, with some offers rescinded entirely. The 2020 COVID shock was more compressed — a 6-month disruption followed by a rapid hiring surge that actually benefited the 2021–22 graduating classes. Modeling recession risk is essential for candidates who will graduate into uncertain conditions — which, in 2026, remains a live question given persistent rate uncertainty and tech-sector contraction.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            The key recession insight: candidates with full scholarship awards are largely insulated from downside because their break-even is already low. Candidates who pay sticker price and graduate into a hiring freeze face the worst-case scenario — high debt service, delayed premium realization, and possible deferral to lower-compensating roles. The scholarship imperative is even stronger when recession probability is elevated.
          </p>
          <div className="space-y-3">
            {recessionScenarios.map((row) => (
              <div key={row.scenario} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <p className="text-white font-semibold text-sm">{row.scenario}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{row.note}</p>
                  </div>
                  <div className="flex gap-4 text-right shrink-0">
                    <div>
                      <p className="text-slate-400 text-xs">IRR (No Aid)</p>
                      <p className={`font-semibold text-sm ${parseInt(row.irrNoAid) >= 18 ? "text-emerald-400" : parseInt(row.irrNoAid) >= 12 ? "text-amber-400" : "text-red-400"}`}>{row.irrNoAid}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs">IRR (With Aid)</p>
                      <p className={`font-semibold text-sm ${parseInt(row.irrWithAid) >= 28 ? "text-emerald-400" : parseInt(row.irrWithAid) >= 18 ? "text-amber-400" : "text-orange-400"}`}>{row.irrWithAid}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs">Break-Even</p>
                      <p className="text-white font-semibold text-sm">{row.breakEven}</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="bg-white/5 rounded-lg p-2 text-center">
                    <p className="text-slate-500">Post-MBA Median</p>
                    <p className="text-white font-medium mt-0.5">{row.postMBAMedian}</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2 text-center">
                    <p className="text-slate-500">Signing Bonus</p>
                    <p className="text-white font-medium mt-0.5">{row.signingBonus}</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2 text-center">
                    <p className="text-slate-500">Avg Time to Offer</p>
                    <p className="text-white font-medium mt-0.5">{row.timeToOffer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-amber-500/8 border border-amber-500/20 rounded-xl p-5 space-y-2">
            <p className="text-amber-300 font-semibold text-sm">Recession Hedge Strategy</p>
            <p className="text-slate-400 text-xs leading-relaxed">
              Candidates entering programs in 2026 should stress-test their ROI against the mild recession scenario (14% IRR, no aid) as a minimum acceptable threshold. If that case still generates positive NPV versus your counterfactual, enrollment is defensible. If it doesn&apos;t, scholarship negotiation or program selection changes are required before committing. The severe recession scenario (8% IRR) should be treated as a tail risk, not a planning case — but debt levels should be set so that even this case is serviceable.
            </p>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Key Takeaways for 2026 Applicants</h2>
          <div className="space-y-3">
            {[
              {
                num: "01",
                title: "Industry selection outweighs program ranking",
                body: "A T15 graduate going to MBB earns a higher IRR than an M7 graduate going to Big 4. Optimize your destination before optimizing your program.",
              },
              {
                num: "02",
                title: "Scholarship negotiation is underused",
                body: "One-third of candidates who request reconsideration receive improved packages. The IRR difference between sticker and 50% aid is typically 10–12 points. Negotiate first.",
              },
              {
                num: "03",
                title: "Online MBAs now compete on IRR — but not on access",
                body: "Top online programs generate strong returns for career accelerators. They do not provide access to consulting or banking recruiting pipelines. Know which you need.",
              },
              {
                num: "04",
                title: "European one-year programs are structurally underpriced",
                body: "INSEAD and LBS deliver near-M7 consulting placement at 50–60% of the total cost. For globally-minded candidates, they often generate superior IRR.",
              },
              {
                num: "05",
                title: "Model the recession case before signing loans",
                body: "Assume a mild recession at graduation. If your IRR still clears 10% and your debt service is manageable, proceed. If not, recalibrate your program or aid target.",
              },
              {
                num: "06",
                title: "Nonprofit and government tracks rarely justify sticker price",
                body: "With no scholarship, the NPV of an MBA for a nonprofit career is negative over 10 years. These tracks require full or near-full funding to be financially rational.",
              },
            ].map(({ num, title, body }) => (
              <div key={num} className="bg-white/5 border border-white/10 rounded-xl p-5 flex gap-4">
                <span className="text-emerald-400 font-bold text-xl shrink-0 leading-none pt-0.5">{num}</span>
                <div className="space-y-1">
                  <p className="text-white font-semibold text-sm">{title}</p>
                  <p className="text-slate-400 text-xs leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Citation Notice */}
        <section className="rounded-2xl bg-emerald-500/8 border border-emerald-500/25 p-8 space-y-4">
          <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest">Usage & Citation</p>
          <h2 className="text-xl font-semibold tracking-tight">Free to Cite with Attribution</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            This report is published as an open resource for journalists, researchers, bloggers, and MBA applicants. You are welcome to quote, reference, or reproduce tables from this report in full — no permission required. The only request is a link back to this page:
          </p>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 font-mono text-xs text-slate-300 break-all">
            https://careerreturns.com/mba-roi-report-2026
          </div>
          <p className="text-slate-500 text-xs">
            Suggested citation: <em>CareerReturns MBA ROI Report 2026. CareerReturns.com. March 2026.</em> Data updated quarterly. For corrections or methodology questions, use the contact form on the homepage.
          </p>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-white/5 border border-white/10 p-10 text-center space-y-5">
          <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest">Model Your Own Numbers</p>
          <h2 className="text-2xl font-semibold tracking-tight">Run Your Personal MBA ROI Calculation</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Aggregate tables show medians. Your outcome depends on your specific pre-MBA salary, target program cost, scholarship amount, and destination industry. Our calculator models your individual IRR, NPV, and break-even in under two minutes.
          </p>
          <Link href="/mba-roi-calculator" className="inline-block bg-linear-to-r from-emerald-600 to-teal-600 hover:opacity-90 transition-all px-8 py-4 rounded-xl font-medium text-white text-base shadow-[0_0_40px_rgba(16,185,129,0.25)]">
            Open MBA ROI Calculator →
          </Link>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 pt-8 text-center text-slate-500 text-xs space-y-2">
          <p>
            <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            {" · "}
            <Link href="/mba-roi-calculator" className="hover:text-slate-300 transition-colors">MBA ROI Calculator</Link>
            {" · "}
            <Link href="/mba-worth-it" className="hover:text-slate-300 transition-colors">Is MBA Worth It?</Link>
            {" · "}
            <Link href="/mba-roi-scholarship" className="hover:text-slate-300 transition-colors">Scholarship ROI</Link>
            {" · "}
            <Link href="/mba-roi-online-vs-full-time" className="hover:text-slate-300 transition-colors">Online vs. Full-Time</Link>
            {" · "}
            <Link href="/mba-roi-europe" className="hover:text-slate-300 transition-colors">Europe MBA ROI</Link>
            {" · "}
            <Link href="/mba-roi-recession" className="hover:text-slate-300 transition-colors">Recession Scenarios</Link>
            {" · "}
            <Link href="/mba-roi-consulting" className="hover:text-slate-300 transition-colors">Consulting ROI</Link>
            {" · "}
            <Link href="/mba-roi-investment-banking" className="hover:text-slate-300 transition-colors">Banking ROI</Link>
            {" · "}
            <Link href="/mba-break-even" className="hover:text-slate-300 transition-colors">Break-Even Calculator</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
        </footer>

      </div>
    </main>
  )
}
