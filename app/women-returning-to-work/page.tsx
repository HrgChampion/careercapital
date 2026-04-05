import Link from "next/link"
import { pageAlternates } from "@/lib/seo"

export const metadata = {
  title: "Women Returning to Work: Programs, Salary Data & ROI (2026)",
  description:
    "Women returning to work after career breaks face a 15–22% salary penalty vs. 8–12% for men. See gender-specific data, top returnship programs for women, and the financial recovery strategy.",
  alternates: pageAlternates("https://careerreturns.com/women-returning-to-work"),
  openGraph: {
    title: "Women Returning to Work: Programs, Salary Data & ROI (2026)",
    description:
      "Women face a higher career break salary penalty than men. Here's the data, 10+ programs specifically for women returners, and the financial strategy to close the gap.",
    url: "https://careerreturns.com/women-returning-to-work",
    siteName: "CareerReturns",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Women Returning to Work: Salary Data, Programs & ROI (2026)",
    description: "15–22% salary penalty for women returners. Here are the programs and strategies that close it fastest.",
  },
}

const womenPrograms = [
  {
    program: "Path Forward",
    type: "Non-profit matching platform",
    companies: "100+ partners including Intuit, Etsy, NBCUniversal, Comcast, eBay, Reddit",
    duration: "12–16 weeks",
    industries: "Technology, finance, media, e-commerce",
    focus: "Women and all caregivers",
    verdictColor: "text-green-400",
    verdict: "Widest Access",
    note: "The largest women-focused returnship platform. Connects career returners with 100+ companies across industries. Free to apply — submit to multiple companies through one platform.",
  },
  {
    program: "Amazon Returnship",
    type: "Corporate program",
    companies: "Amazon",
    duration: "16 weeks",
    industries: "Technology, operations, finance, marketing",
    focus: "All career returners (women majority)",
    verdictColor: "text-green-400",
    verdict: "Highest Conversion (90%)",
    note: "90% conversion rate, $4,200/week stipend. Women make up the majority of participants. Broad role coverage including SDE, PM, finance, and supply chain. Gap requirement: 1+ year.",
  },
  {
    program: "Goldman Sachs Returnship",
    type: "Corporate program",
    companies: "Goldman Sachs",
    duration: "10 weeks",
    industries: "Investment banking, asset management, technology, compliance",
    focus: "Finance and technology professionals",
    verdictColor: "text-green-400",
    verdict: "Highest Post-Program Salary",
    note: "$200k–$250k post-program. Women and other career returners with finance or tech backgrounds. Gap requirement: 2+ years.",
  },
  {
    program: "Intuit Again",
    type: "Corporate program",
    companies: "Intuit",
    duration: "16 weeks",
    industries: "Technology, product, design, finance",
    focus: "Women and caregivers specifically",
    verdictColor: "text-emerald-400",
    verdict: "Women-Focused",
    note: "One of the most well-structured women-specific returnship programs. Strong mentoring, flexible schedules during program, and high conversion to full-time. Post-program salary: $120k–$160k TC.",
  },
  {
    program: "iRelaunch Programs",
    type: "Conference + job board",
    companies: "60+ partner companies",
    duration: "Varies",
    industries: "All industries",
    focus: "Women and all career returners",
    verdictColor: "text-emerald-400",
    verdict: "Best Resource Hub",
    note: "iRelaunch hosts career re-entry summits and connects returners with employer partners. Not a single program but a resource platform. Most useful for researching options and accessing multiple employers.",
  },
  {
    program: "JPMorgan ReEntry",
    type: "Corporate program",
    companies: "JPMorgan Chase",
    duration: "15 weeks",
    industries: "Banking, technology, operations, compliance",
    focus: "All career returners",
    verdictColor: "text-emerald-400",
    verdict: "Longest-Running",
    note: "One of the first major returnship programs, founded in 2013. Women are the majority of participants. Strong finance and tech role pipeline. Gap requirement: 2+ years.",
  },
  {
    program: "McKinsey Accelerate",
    type: "Corporate program",
    companies: "McKinsey & Company",
    duration: "6–12 months",
    industries: "Management consulting",
    focus: "Senior professionals with consulting backgrounds",
    verdictColor: "text-emerald-400",
    verdict: "Highest Long-term NPV",
    note: "Full consultant salary during program ($200k+). Women with pre-break consulting careers are a primary target demographic. Longest duration — strongest full integration into the firm.",
  },
  {
    program: "Reachire",
    type: "Return-to-work platform",
    companies: "Multiple employers",
    duration: "Varies",
    industries: "Multiple",
    focus: "Women career returners specifically",
    verdictColor: "text-amber-400",
    verdict: "Women-Specific Platform",
    note: "Platform specifically designed for women returners. Provides job matching, coaching, and employer connections. Smaller scale than Path Forward but more targeted.",
  },
]

const salaryData = [
  { industry: "Technology (Software)", womenPenalty: "15–20%", menPenalty: "8–12%", gap: "~7%", recoveryPath: "Returnship or reskilling" },
  { industry: "Investment Banking", womenPenalty: "18–24%", menPenalty: "12–16%", gap: "~8%", recoveryPath: "Goldman / JPMorgan returnship" },
  { industry: "Management Consulting", womenPenalty: "16–21%", menPenalty: "10–14%", gap: "~7%", recoveryPath: "McKinsey Accelerate / Deloitte iReturn" },
  { industry: "Healthcare", womenPenalty: "8–12%", menPenalty: "4–8%", gap: "~4%", recoveryPath: "Direct re-entry + credential refresh" },
  { industry: "Marketing / Brand", womenPenalty: "10–14%", menPenalty: "5–9%", gap: "~5%", recoveryPath: "Portfolio rebuild + direct re-entry" },
  { industry: "Finance / Accounting", womenPenalty: "12–17%", menPenalty: "8–12%", gap: "~5%", recoveryPath: "Fidelity / JPMorgan returnship" },
]

export default function WomenReturningToWorkPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-rose-600/15 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12 sm:space-y-20">

        {/* Header */}
        <header className="space-y-5">
          <p className="text-xs font-medium text-rose-400 uppercase tracking-widest">CareerReturns · Women Returners Guide</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            Women Returning to Work: Programs, Salary Data, and ROI
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            The gender gap in career break penalties is real — and closeable.
          </p>

          {/* Roadmap CTA */}
          <div className="flex items-center gap-4 bg-rose-500/8 border border-rose-500/20 rounded-xl px-5 py-4">
            <div className="shrink-0 w-9 h-9 rounded-xl bg-rose-500/15 border border-rose-500/25 flex items-center justify-center">
              <span className="text-rose-400 text-base">🗺</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium">Get a personalized 90-day return roadmap</p>
              <p className="text-slate-500 text-xs mt-0.5">Answer 6 questions. Get weekly tasks, the right programs for your background, and salary targets at every phase.</p>
            </div>
            <Link
              href="/career-return-roadmap"
              className="shrink-0 text-rose-400 text-sm font-medium hover:text-rose-300 transition-colors whitespace-nowrap"
            >
              Build My Plan →
            </Link>
          </div>
        </header>

        {/* Short Answer */}
        <section className="space-y-4">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-8 space-y-4">
            <p className="text-xs font-medium text-rose-400 uppercase tracking-widest">The Data</p>
            <p className="text-white text-base leading-relaxed font-medium">
              Women returning from career breaks face a salary penalty of 15–22% — approximately 7 percentage
              points higher than the 8–12% penalty experienced by men returning from equivalent breaks. The
              gap reflects compounding disadvantages: a pre-existing gender pay gap that amplifies the break
              penalty, and bias in re-entry hiring that is statistically documented across industries.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              The financial recovery path is the same as for any career returner — but women face a steeper
              starting point and a longer baseline recovery timeline. The good news: structured re-entry programs
              close the gap faster than direct re-entry in every major industry, and there are now 100+ employers
              with dedicated programs specifically recruiting women career returners.
            </p>
          </div>
        </section>

        {/* Key Stats */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">The Numbers: Women vs. Men Career Break Penalties</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center space-y-2">
              <p className="text-slate-400 text-xs uppercase tracking-wide">Women&apos;s Salary Penalty (avg)</p>
              <p className="text-rose-400 text-2xl font-semibold">15–22%</p>
              <p className="text-slate-500 text-xs">At re-entry after 2+ year break</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center space-y-2">
              <p className="text-slate-400 text-xs uppercase tracking-wide">Men&apos;s Salary Penalty (avg)</p>
              <p className="text-amber-400 text-2xl font-semibold">8–12%</p>
              <p className="text-slate-500 text-xs">At re-entry after 2+ year break</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center space-y-2">
              <p className="text-slate-400 text-xs uppercase tracking-wide">Returnship Gap Reduction</p>
              <p className="text-green-400 text-2xl font-semibold">60–80%</p>
              <p className="text-slate-500 text-xs">Of penalty eliminated via structured program</p>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            The 10-year financial consequence of a 15% salary penalty vs. a 10% penalty compounds significantly.
            For a $100k pre-break salary, the difference in underpayment at re-entry is $5,000/year. Over 10 years
            with compounding salary growth, the NPV of that gap is approximately $55,000–$70,000 — the equivalent
            of refusing a moderate raise every year for a decade.
          </p>
        </section>

        {/* Salary data by industry */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Salary Penalty by Industry: Women vs. Men</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <div className="grid grid-cols-4 gap-2 p-3 border-b border-white/10">
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wide">Industry</p>
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wide">Women</p>
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wide">Men</p>
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wide">Best Path</p>
            </div>
            {salaryData.map((row, i) => (
              <div key={row.industry} className={`grid grid-cols-4 gap-2 p-3 text-xs ${i % 2 === 0 ? "" : "bg-white/[0.02]"}`}>
                <p className="text-slate-300 font-medium leading-tight">{row.industry}</p>
                <p className="text-rose-400 font-medium leading-tight">{row.womenPenalty}</p>
                <p className="text-amber-400/80 leading-tight">{row.menPenalty}</p>
                <p className="text-slate-500 leading-tight">{row.recoveryPath}</p>
              </div>
            ))}
          </div>
          <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-5">
            <p className="text-rose-200 text-sm leading-relaxed">
              <span className="font-semibold text-white">Why the gap exists:</span> Women&apos;s career breaks
              more often follow caregiving (maternity leave, elder care, family relocation) — scenarios that
              hiring managers statistically penalize more than career breaks taken for education or personal
              development. The penalty reflects bias, not productivity. Structured returnship programs, by their
              design, remove this variable from the hiring equation.
            </p>
          </div>
        </section>

        {/* Maternity vs. longer gap */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Maternity Leave vs. Longer Caregiving Break: Different Strategies</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Not all career breaks are equal. The strategy and programs available differ significantly by break type:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
              <p className="text-rose-400 font-semibold text-sm">Maternity / Parental Leave (3–12 months)</p>
              <ul className="space-y-2 text-xs text-slate-400 leading-relaxed">
                <li className="flex gap-2"><span className="text-rose-400 shrink-0">→</span> Most employers legally required to restore your role (check local law)</li>
                <li className="flex gap-2"><span className="text-rose-400 shrink-0">→</span> Re-entry to same employer avoids the gap penalty entirely</li>
                <li className="flex gap-2"><span className="text-rose-400 shrink-0">→</span> If changing employers: frame as parental leave, not career gap</li>
                <li className="flex gap-2"><span className="text-rose-400 shrink-0">→</span> Short breaks (under 6 months) rarely trigger returnship-level salary penalty</li>
                <li className="flex gap-2"><span className="text-rose-400 shrink-0">→</span> Best strategy: return to same employer first, renegotiate after 6–12 months</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
              <p className="text-rose-400 font-semibold text-sm">Extended Caregiving / Family Break (1–5+ years)</p>
              <ul className="space-y-2 text-xs text-slate-400 leading-relaxed">
                <li className="flex gap-2"><span className="text-rose-400 shrink-0">→</span> 15–22% salary penalty at direct re-entry is standard</li>
                <li className="flex gap-2"><span className="text-rose-400 shrink-0">→</span> Returnship programs eliminate most or all of this penalty</li>
                <li className="flex gap-2"><span className="text-rose-400 shrink-0">→</span> Path Forward, iRelaunch, and Amazon offer the widest access</li>
                <li className="flex gap-2"><span className="text-rose-400 shrink-0">→</span> Bridge activities (freelance, volunteer, online courses) accelerate recovery</li>
                <li className="flex gap-2"><span className="text-rose-400 shrink-0">→</span> Negotiate from market data — not pre-break salary (now 2–5 years outdated)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Programs Specifically Recruiting Women Returners</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The following programs either target women specifically or have women as the majority of their
            participant base. Each is reviewed with financial data — not just descriptions.
          </p>
          <div className="space-y-4">
            {womenPrograms.map((p) => (
              <div key={p.program} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <p className="text-white font-semibold text-base">{p.program}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{p.type} · {p.industries}</p>
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 whitespace-nowrap self-start ${p.verdictColor}`}>
                    {p.verdict}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <p className="text-slate-500 mb-0.5">Duration</p>
                    <p className="text-slate-300">{p.duration}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 mb-0.5">Employer(s)</p>
                    <p className="text-slate-400 leading-tight">{p.companies.length > 40 ? p.companies.substring(0, 40) + "…" : p.companies}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 mb-0.5">Focus</p>
                    <p className="text-slate-400">{p.focus}</p>
                  </div>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed border-t border-white/5 pt-3">{p.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Negotiation */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Negotiation Strategy: Closing the Salary Gap at Re-entry</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The most financially impactful action women returners can take is to negotiate aggressively at re-entry —
            not accept the first offer, which typically reflects the full break penalty plus residual gender pay gap.
            The tools for doing this:
          </p>
          <div className="space-y-3">
            {[
              {
                title: "Anchor to market rate, not your last salary",
                body: "Your pre-break salary is typically 2–5 years old and does not reflect market appreciation. In software, market salaries have increased 30–40% since 2019. In finance and consulting, 25–35%. Use current data from Levels.fyi, Glassdoor, Payscale, and your target company's Glassdoor reviews as your salary anchor — not your previous paycheck.",
              },
              {
                title: "Apply to returnship programs before direct applications",
                body: "Returnship program offers represent the employer's best estimate of your market value — made from a position of wanting to hire you. A returnship conversion offer is almost always higher than a cold direct re-entry offer, because the company has invested 10–18 weeks in demonstrating your value internally. Use this offer as a floor for direct negotiations if you apply to other companies simultaneously.",
              },
              {
                title: "Quantify your break-period activity",
                body: "Every professional activity during your break has a financial value: a freelance project, a board role, a course completion. These demonstrate that your skills have not depreciated and that you have been professionally engaged. In negotiation, these can be cited as reasons why the market rate applies to you — not a discounted 'returner rate.'",
              },
              {
                title: "Use the salary benchmark calculator",
                body: "Know your exact percentile position before any negotiation. If current salary offers are putting you at the 30th percentile for your role, industry, and location, you have a specific, data-backed case for asking for more. Vague requests to 'do better' are less effective than 'I am currently at the 30th percentile for this role in this market; I am targeting the 65th.'",
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-white font-semibold text-sm">{title}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Industries most welcoming */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Industries Most Welcoming to Women Returners</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { industry: "Technology", note: "Largest number of returnship programs. Amazon, Meta, Microsoft, Google, PayPal — all with active programs. Software, PM, design, and data roles widely available.", color: "text-green-400" },
              { industry: "Financial Services", note: "Goldman Sachs, JPMorgan, Fidelity, and Morgan Stanley all have structured programs. Finance, compliance, and technology roles.", color: "text-green-400" },
              { industry: "Consulting", note: "McKinsey, Deloitte, Accenture, and BCG have returnship or returner-friendly hiring programs. Post-MBA-level re-entry is achievable.", color: "text-emerald-400" },
              { industry: "Healthcare", note: "Strong credential stability — clinical and healthcare management skills do not depreciate as fast. Direct re-entry is more viable here than in technical fields.", color: "text-emerald-400" },
              { industry: "Consumer Goods / Retail", note: "Path Forward has CPG and retail partners. Marketing, operations, and HR functions are particularly accessible.", color: "text-amber-400" },
              { industry: "Media / Entertainment", note: "NBCUniversal, Comcast, and media companies participate in Path Forward. Content, production, and business roles available.", color: "text-amber-400" },
            ].map(({ industry, note, color }) => (
              <div key={industry} className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-1.5">
                <p className={`font-semibold text-sm ${color}`}>{industry}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTAs */}
        <section className="rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-10 text-center space-y-5">
          <p className="text-xs font-medium text-rose-400 uppercase tracking-widest">Free Tools</p>
          <h2 className="text-2xl font-semibold tracking-tight">Know Your Numbers Before You Negotiate</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Use the Salary Benchmark Calculator to find your exact market percentile — then use the Career
            Gap Calculator to model your full salary recovery trajectory.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/salary-benchmark-calculator"
              className="inline-block bg-linear-to-r from-rose-600 to-pink-600 hover:opacity-90 transition-all px-6 py-3 rounded-xl font-medium text-white text-sm shadow-[0_0_30px_rgba(244,63,94,0.3)]"
            >
              Salary Benchmark Calculator →
            </Link>
            <Link
              href="/career-gap-calculator"
              className="inline-block bg-white/10 border border-white/20 hover:bg-white/[0.15] transition-all px-6 py-3 rounded-xl font-medium text-white text-sm"
            >
              Career Gap Calculator →
            </Link>
          </div>
        </section>

        {/* Related */}
        <section className="border-t border-white/10 pt-10 mt-10">
          <p className="text-xs font-medium text-rose-400 uppercase tracking-widest mb-5">Related Guides & Tools</p>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link href="/return-to-work-programs" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-rose-400 font-mono text-lg">⇄</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-rose-300 transition-colors">Return-to-Work Programs Guide</p>
                <p className="text-slate-500 text-xs">15+ programs with ROI data →</p>
              </div>
            </Link>
            <Link href="/returnship-roi-calculator" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-rose-400 font-mono text-lg">Σ</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-rose-300 transition-colors">Returnship ROI Calculator</p>
                <p className="text-slate-500 text-xs">Compare programs by expected NPV →</p>
              </div>
            </Link>
            <Link href="/return-to-work-after-career-break" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-rose-400 font-mono text-lg">↑</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-rose-300 transition-colors">Return to Work After Career Break</p>
                <p className="text-slate-500 text-xs">Salary penalty data & 3 strategies →</p>
              </div>
            </Link>
            <Link href="/rebuild-work-experience-after-career-break" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-rose-400 font-mono text-lg">▲</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-rose-300 transition-colors">Rebuild Work Experience</p>
                <p className="text-slate-500 text-xs">6 paths compared by ROI →</p>
              </div>
            </Link>
          </div>
        </section>

        <footer className="border-t border-white/10 pt-8 text-center text-slate-500 text-xs space-y-2">
          <p>
            <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            {" · "}
            <Link href="/salary-benchmark-calculator" className="hover:text-slate-300 transition-colors">Salary Benchmark Calculator</Link>
            {" · "}
            <Link href="/career-gap-calculator" className="hover:text-slate-300 transition-colors">Career Gap Calculator</Link>
            {" · "}
            <Link href="/return-to-work-programs" className="hover:text-slate-300 transition-colors">Return-to-Work Programs</Link>
            {" · "}
            <Link href="/returnship-roi-calculator" className="hover:text-slate-300 transition-colors">Returnship ROI Calculator</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
          <p className="mt-1">Gender-specific salary penalty data sourced from NBER research on motherhood wage penalty, LinkedIn Economic Graph, and iRelaunch career returner surveys. Program data from company career pages and Path Forward. Figures are estimates; individual outcomes vary.</p>
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
                name: "What salary penalty do women face when returning to work after a career break?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Women returning from career breaks face a salary penalty of 15–22% at re-entry, compared to 8–12% for men returning from equivalent breaks. The difference reflects compounding effects of the gender pay gap and bias against caregiving-motivated breaks, which are more common among women. Structured returnship programs eliminate 60–80% of this penalty by removing the gap signal from the hiring equation.",
                },
              },
              {
                "@type": "Question",
                name: "What are the best return-to-work programs for women?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The best return-to-work programs for women include: Path Forward (100+ partner companies, widest access), Amazon Returnship (90% conversion, $4,200/week), Goldman Sachs Returnship (highest post-program salary at $200k–$250k), Intuit Again (women-focused, flexible structure), JPMorgan ReEntry (longest-running program), McKinsey Accelerate (highest long-term NPV for consulting professionals), and iRelaunch (resource hub connecting to 60+ employer partners).",
                },
              },
              {
                "@type": "Question",
                name: "How do I return to work after a long career break as a woman?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The most financially effective strategy for women returning after a long career break is: (1) Apply to returnship programs through Path Forward, iRelaunch, or directly with target companies — these eliminate the salary penalty and provide structured re-entry. (2) Conduct bridge activities before your job search: freelance projects, online courses, volunteer leadership roles. (3) Negotiate from current market data, not your pre-break salary. (4) Use a salary benchmark calculator to know your market percentile before any salary discussion.",
                },
              },
              {
                "@type": "Question",
                name: "How does maternity leave affect your career long-term?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Standard maternity leave (12–16 weeks) carries minimal career impact when returning to the same employer. The salary penalty research applies primarily to extended breaks of 1+ years. The 'motherhood penalty' in salary is statistically significant — women with children earn 5–8% less than childless women in equivalent roles — but is separate from the career break penalty. A structured return to the same employer, followed by renegotiation after 6–12 months with market data, is the most effective financial strategy after standard maternity leave.",
                },
              },
              {
                "@type": "Question",
                name: "Which industries are most welcoming to women returning to work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Technology has the most structured programs for women returners — Amazon, Meta, Microsoft, Google, and PayPal all have active returnship programs. Financial services (Goldman Sachs, JPMorgan, Fidelity) have well-funded programs with high post-program salaries. Consulting (McKinsey, Deloitte, Accenture) and healthcare also have strong re-entry pipelines. Path Forward provides access to consumer goods, media, and retail companies through a single application platform.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  )
}
