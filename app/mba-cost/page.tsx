import Link from "next/link"
import { pageAlternates, articleSchema, breadcrumbSchema } from "@/lib/seo"

const _articleSchema = articleSchema({
  title: "MBA Total Cost 2026: $22K–$492K True Economic Cost by School",
  description: "True MBA cost goes beyond tuition. M7 programs cost $460K–$492K total (tuition + living + lost income). Online MBAs from $22K. See full breakdown by school.",
  url: "https://careerreturns.com/mba-cost",
  datePublished: "2026-03-09",
  dateModified: "2026-03-24",
})
const _breadcrumbSchema = breadcrumbSchema([{ name: "MBA Cost 2026", url: "https://careerreturns.com/mba-cost" }])

export const metadata = {
  title: "MBA Total Cost 2026: $22K–$492K True Economic Cost by School",
  description:
    "True MBA cost goes beyond tuition. M7 programs cost $460K–$492K total (tuition + living + lost income). Online MBAs from $22K. See full breakdown by school.",
  alternates: pageAlternates("https://careerreturns.com/mba-cost"),
  openGraph: {
    title: "MBA Total Cost 2026: $22K–$492K True Economic Cost by School",
    description: "True MBA cost goes beyond tuition. M7 programs cost $460K–$492K total (tuition + living + lost income). Online MBAs from $22K. See full breakdown by school.",
    url: "https://careerreturns.com/mba-cost",
    siteName: "CareerReturns",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MBA Total Cost 2026: $22K–$492K True Economic Cost by School",
    description: "True MBA cost goes beyond tuition. M7 programs cost $460K–$492K total (tuition + living + lost income). Online MBAs from $22K. See full breakdown by school.",
  },
}

const tuitionTable = [
  { program: "Harvard Business School", tuition2yr: "$232,000", living: "$58,000", opportunityCost: "$170,000", loanInterest: "$32,000", total: "$492,000", type: "M7 Full-Time (2yr)" },
  { program: "Wharton (UPenn)", tuition2yr: "$228,000", living: "$58,000", opportunityCost: "$170,000", loanInterest: "$31,000", total: "$487,000", type: "M7 Full-Time (2yr)" },
  { program: "Booth (Chicago)", tuition2yr: "$220,000", living: "$56,000", opportunityCost: "$170,000", loanInterest: "$30,000", total: "$476,000", type: "M7 Full-Time (2yr)" },
  { program: "Kellogg (Northwestern)", tuition2yr: "$218,000", living: "$56,000", opportunityCost: "$170,000", loanInterest: "$29,000", total: "$473,000", type: "M7 Full-Time (2yr)" },
  { program: "Darden (Virginia)", tuition2yr: "$210,000", living: "$52,000", opportunityCost: "$170,000", loanInterest: "$28,000", total: "$460,000", type: "Top 10 Full-Time (2yr)" },
  { program: "Ross (Michigan)", tuition2yr: "$185,000", living: "$50,000", opportunityCost: "$170,000", loanInterest: "$25,000", total: "$430,000", type: "Top 10 Full-Time (2yr)" },
  { program: "INSEAD (1-year)", tuition2yr: "$115,000", living: "$35,000", opportunityCost: "$85,000", loanInterest: "$15,000", total: "$250,000", type: "1-Year European" },
  { program: "London Business School (1-year)", tuition2yr: "$110,000", living: "$40,000", opportunityCost: "$85,000", loanInterest: "$14,000", total: "$249,000", type: "1-Year European" },
  { program: "Top-Tier Online MBA (Indiana, UNC, USC)", tuition2yr: "$40,000–$80,000", living: "$0 (no relocation)", opportunityCost: "$0 (no career gap)", loanInterest: "$5,000–$10,000", total: "$45,000–$90,000", type: "Online (part-time)" },
  { program: "Mid-Tier Online MBA", tuition2yr: "$20,000–$40,000", living: "$0", opportunityCost: "$0", loanInterest: "$2,000–$5,000", total: "$22,000–$45,000", type: "Online (part-time)" },
]

const scholarshipTable = [
  { program: "Harvard Business School", fullCost: "$492,000", halfAid: "$376,000", fullAid: "$260,000", halfAidIRR: "31%", fullAidIRR: "42%", noAidIRR: "21%", aidAvail: "~30% receive some aid" },
  { program: "Wharton (UPenn)", fullCost: "$487,000", halfAid: "$373,000", fullAid: "$259,000", halfAidIRR: "32%", fullAidIRR: "43%", noAidIRR: "22%", aidAvail: "~40% receive merit aid" },
  { program: "Kellogg (Northwestern)", fullCost: "$473,000", halfAid: "$364,000", fullAid: "$255,000", halfAidIRR: "30%", fullAidIRR: "40%", noAidIRR: "20%", aidAvail: "~45% receive merit aid" },
  { program: "Darden (Virginia)", fullCost: "$460,000", halfAid: "$355,000", fullAid: "$250,000", halfAidIRR: "31%", fullAidIRR: "41%", noAidIRR: "21%", aidAvail: "~50% receive some aid" },
  { program: "Ross (Michigan)", fullCost: "$430,000", halfAid: "$338,000", fullAid: "$245,000", halfAidIRR: "30%", fullAidIRR: "40%", noAidIRR: "19%", aidAvail: "~55% receive merit aid" },
  { program: "Foster (UW)", fullCost: "$300,000", halfAid: "$240,000", fullAid: "$180,000", halfAidIRR: "32%", fullAidIRR: "43%", noAidIRR: "21%", aidAvail: "~60% receive some aid" },
]

export default function MbaCostPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-amber-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12 sm:space-y-20">

        <header className="space-y-5">
          <p className="text-xs font-medium text-amber-400 uppercase tracking-widest">CareerReturns · MBA Cost Analysis</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            MBA Cost (2026):<br />
            <span className="text-slate-400">The True Economic Cost</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Published tuition figures represent roughly half the true cost of an MBA. The full economic
            cost — tuition, living expenses, opportunity cost, and loan interest — ranges from $45,000
            for an online program to $492,000+ for M7 full-time. Here is the complete breakdown.
          </p>
          <div className="flex items-center gap-3 pt-1 border-t border-white/8">
            <div className="w-7 h-7 rounded-full bg-amber-600/20 border border-amber-500/30 flex items-center justify-center shrink-0">
              <span className="text-amber-400 text-xs font-semibold">HG</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-white font-medium">Himanshu Gauba</span>
              <span className="text-slate-600 text-xs">·</span>
              <span className="text-slate-500 text-xs">Updated March 24, 2026</span>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "M7 Full Economic Cost", value: "$460–$492k" },
              { label: "European 1-Year", value: "$249–$250k" },
              { label: "Top Online MBA", value: "$45–$90k" },
              { label: "Opportunity Cost (2yr)", value: "$170k" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <p className="text-amber-400 font-semibold text-base">{value}</p>
                <p className="text-slate-500 text-xs mt-1">{label}</p>
              </div>
            ))}
          </div>
        </header>

        {/* What goes into total MBA cost */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">The 4 Components of True MBA Cost</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Most MBA candidates calculate only tuition when deciding if the degree is affordable. The
            financial analysis requires all four cost components below.
          </p>
          <div className="space-y-3">
            {[
              {
                component: "1. Tuition & Fees",
                amount: "$40,000–$232,000",
                notes: "The published sticker price. Ranges from $20k/yr (mid-tier online) to $116k/yr (HBS 2026 academic year). This is the most visible cost — but not the largest for most candidates.",
                color: "text-amber-400",
              },
              {
                component: "2. Living Expenses",
                amount: "$0–$58,000 (2yr)",
                notes: "Rent, food, transportation, health insurance for the program duration. Zero for online programs (already paying these). $25,000–$30,000/yr for urban full-time programs. Lower for European 1-year due to shorter program length.",
                color: "text-amber-300",
              },
              {
                component: "3. Opportunity Cost",
                amount: "$85,000–$170,000 (2yr)",
                notes: "The salary you forgo while in school. At $85,000 pre-MBA salary × 2 years = $170,000 forgone. This is typically the second-largest cost component after tuition. Zero for online programs where you keep your job.",
                color: "text-orange-400",
              },
              {
                component: "4. Loan Interest",
                amount: "$14,000–$32,000",
                notes: "Interest on $100,000–$150,000 in graduate student loans at 6.5–7.5% over 10 years adds $14,000–$32,000 in total interest cost on top of principal. Often excluded from published cost figures.",
                color: "text-red-400",
              },
            ].map(({ component, amount, notes, color }) => (
              <div key={component} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <p className="text-white font-semibold text-sm">{component}</p>
                  <p className={`${color} text-sm font-semibold`}>{amount}</p>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{notes}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Full cost by program */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Total MBA Cost by Program (2026): Tuition Through Loan Interest</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The table below shows all four cost components for 10 programs. &quot;Total&quot; is true economic cost —
            what you actually give up by attending. Opportunity cost assumes $85,000/yr pre-MBA salary.
          </p>
          <div className="space-y-3">
            {tuitionTable.map(({ program, tuition2yr, living, opportunityCost, loanInterest, total, type }) => (
              <div key={program} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <div>
                    <p className="text-white font-semibold text-sm">{program}</p>
                    <p className="text-slate-500 text-xs">{type}</p>
                  </div>
                  <p className="text-amber-400 font-semibold text-sm">Total: {total}</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <div><p className="text-slate-500 mb-0.5">Tuition</p><p className="text-slate-300">{tuition2yr}</p></div>
                  <div><p className="text-slate-500 mb-0.5">Living</p><p className="text-slate-300">{living}</p></div>
                  <div><p className="text-slate-500 mb-0.5">Opp. Cost</p><p className="text-slate-300">{opportunityCost}</p></div>
                  <div><p className="text-slate-500 mb-0.5">Loan Interest</p><p className="text-slate-300">{loanInterest}</p></div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs">Living expenses for online programs = $0 (no relocation; candidate remains employed). Opportunity cost for 1-year European = 12 months × $85k/yr. Loan interest calculated on 70% financing at 6.8%, 10-year repayment.</p>
        </section>

        {/* Scholarship impact */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">After-Scholarship Net Cost: How Aid Changes the Math at Top Programs</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Scholarship negotiation is the highest-leverage action in the MBA process. The table below shows
            how 50% and 100% scholarship aid shifts total cost — and the IRR impact on a consulting-track scenario.
          </p>
          <div className="space-y-3">
            {scholarshipTable.map(({ program, fullCost, halfAid, fullAid, halfAidIRR, fullAidIRR, noAidIRR, aidAvail }) => (
              <div key={program} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <p className="text-white font-semibold text-sm">{program}</p>
                  <p className="text-slate-500 text-xs">{aidAvail}</p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <p className="text-slate-500 mb-0.5">No Aid</p>
                    <p className="text-red-400">{fullCost}</p>
                    <p className="text-slate-500 mt-1">IRR: {noAidIRR}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 mb-0.5">50% Scholarship</p>
                    <p className="text-amber-400">{halfAid}</p>
                    <p className="text-slate-500 mt-1">IRR: {halfAidIRR}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 mb-0.5">Full Scholarship</p>
                    <p className="text-green-400">{fullAid}</p>
                    <p className="text-slate-500 mt-1">IRR: {fullAidIRR}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            For the full mechanics of how scholarship aid shifts IRR — and when to take a lower-ranked school
            with full aid over a top program at sticker price — see the{" "}
            <Link href="/mba-roi-scholarship" className="text-amber-400 hover:text-amber-300 transition-colors underline underline-offset-2">MBA scholarship ROI analysis</Link>.
          </p>
        </section>

        {/* Cost reduction strategies */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">How to Reduce Your True MBA Cost</h2>
          <div className="space-y-3">
            {[
              { strategy: "Negotiate scholarship aggressively", impact: "Save $20,000–$120,000. Schools expect negotiation. Come with competitive offers." },
              { strategy: "Consider a European 1-year program", impact: "Save $200,000–$240,000 vs. M7 full-time. INSEAD at $250k total vs. HBS at $492k total." },
              { strategy: "Target top-tier online if your goal is salary bump, not career switch", impact: "Save $400,000+ vs. M7. IRR can exceed 25% for the right candidate profile." },
              { strategy: "Apply for veterans benefits (GI Bill + Yellow Ribbon)", impact: "Eliminate $80,000–$120,000 in tuition entirely if eligible. See the military ROI guide." },
              { strategy: "Clear FAANG equity before applying", impact: "Avoid forfeiting $200,000–$400,000 in unvested RSUs. Time your application around vesting cliffs." },
            ].map(({ strategy, impact }) => (
              <div key={strategy} className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-4">
                <div className="text-amber-400 text-lg mt-0.5">→</div>
                <div>
                  <p className="text-white font-semibold text-sm">{strategy}</p>
                  <p className="text-slate-400 text-xs leading-relaxed mt-1">{impact}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-white/5 border border-white/10 p-10 text-center space-y-5">
          <p className="text-xs font-medium text-amber-400 uppercase tracking-widest">Model Your Total Cost</p>
          <h2 className="text-2xl font-semibold tracking-tight">Calculate ROI Against Your True Program Cost</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Enter your actual total program cost — tuition plus living minus any scholarship — along with
            pre and post-MBA salary. Get the NPV, IRR, and break-even that reflects your real economics.
          </p>
          <Link
            href="/mba-roi-calculator"
            className="inline-block bg-linear-to-r from-amber-600 to-orange-600 hover:opacity-90 transition-all px-8 py-4 rounded-xl font-medium text-white text-base shadow-[0_0_40px_rgba(217,119,6,0.3)]"
          >
            Open MBA ROI Calculator →
          </Link>
        </section>


        {/* ── Related Guides ── */}
        <section className="border-t border-white/10 pt-10 mt-10">
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-5">Related Guides</p>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link href="/mba-roi-calculator" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">Σ</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">MBA ROI Calculator</p>
                <p className="text-slate-500 text-xs">Model your specific numbers →</p>
              </div>
            </Link>
            <Link href="/mba-roi-report-2026" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">↗</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">MBA ROI Report 2026</p>
                <p className="text-slate-500 text-xs">IRR data across 12 industries →</p>
              </div>
            </Link>
            <Link href="/mba-roi-scholarship" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">%</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">MBA Scholarship ROI</p>
                <p className="text-slate-500 text-xs">How merit aid changes break-even →</p>
              </div>
            </Link>
            <Link href="/mba-roi-100k-debt" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">$</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">MBA ROI with $100K Debt</p>
                <p className="text-slate-500 text-xs">Debt-to-income thresholds →</p>
              </div>
            </Link>
          </div>
        </section>

        <footer className="border-t border-white/10 pt-8 text-center text-slate-500 text-xs space-y-2">
          <p>
            <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            {" · "}
            <Link href="/mba-roi-calculator" className="hover:text-slate-300 transition-colors">MBA ROI Calculator</Link>
            {" · "}
            <Link href="/mba-roi-scholarship" className="hover:text-slate-300 transition-colors">MBA Scholarship ROI</Link>
            {" · "}
            <Link href="/mba-roi" className="hover:text-slate-300 transition-colors">MBA ROI Guide</Link>
            {" · "}
            <Link href="/mba-roi-europe" className="hover:text-slate-300 transition-colors">European MBA ROI</Link>
            {" · "}
            <Link href="/mba-roi-online-vs-full-time" className="hover:text-slate-300 transition-colors">Online vs. Full-Time MBA</Link>
            {" · "}
            <Link href="/mba-worth-it" className="hover:text-slate-300 transition-colors">Is MBA Worth It?</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
          <p className="mt-1">Salary data sourced from GMAC surveys, school employment reports, Glassdoor, Levels.fyi, and publicly reported compensation figures. All ranges are estimates; individual outcomes vary.</p>
        </footer>

      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is the total cost of an MBA at a top school?", "acceptedAnswer": {"@type": "Answer", "text": "The total cost of a 2-year M7 MBA including tuition, fees, living expenses, and books is approximately $280K–$360K. Harvard Business School totals approximately $320K–$350K. Wharton and Booth are approximately $300K–$330K. These figures exclude opportunity cost (foregone salary), which adds another $180K–$250K for the full economic cost analysis."}}, {"@type": "Question", "name": "What is the real economic cost of an MBA including foregone salary?", "acceptedAnswer": {"@type": "Answer", "text": "The true economic cost of a full-time 2-year MBA includes: tuition ($160K–$190K), living expenses ($80K–$110K), and foregone salary net of taxes (approximately $100K–$160K for 2 years). Total economic cost for M7 programs is typically $340K–$460K. This is the correct figure for NPV and IRR analysis, not tuition alone."}}, {"@type": "Question", "name": "How does MBA cost vary between M7, T15, and online programs?", "acceptedAnswer": {"@type": "Answer", "text": "M7 programs cost $160K–$190K in tuition + $80K–$110K in living expenses = $240K–$300K out-of-pocket. T15 programs cost $100K–$130K in tuition + $70K–$90K living = $170K–$220K out-of-pocket. Online MBA programs cost $25K–$75K total for tuition, with zero living cost premium. The out-of-pocket gap between M7 and online programs is $200K–$250K."}}, {"@type": "Question", "name": "How much can scholarships reduce MBA cost?", "acceptedAnswer": {"@type": "Answer", "text": "Merit scholarships at M7 programs average $20K–$60K per year, reducing 2-year tuition by $40K–$120K. T15–T25 programs offer more generous merit aid, with full scholarships possible for top candidates. A 50% scholarship at Wharton saves approximately $90K in tuition, improving 10-year NPV by approximately $100K–$130K after tax adjustments."}}, {"@type": "Question", "name": "What is the cheapest way to get an MBA from a top school?", "acceptedAnswer": {"@type": "Answer", "text": "The lowest-cost path to an M7 MBA credential involves maximizing merit scholarships, applying in early rounds to maximize financial aid consideration, targeting Yellow Ribbon programs if eligible as a veteran, and selecting programs with the strongest scholarship budgets relative to peer rankings. INSEAD's 10-month format also reduces total cost by eliminating a second year of tuition and living expenses."}}]}) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_breadcrumbSchema) }} />
    </main>
  )
}
