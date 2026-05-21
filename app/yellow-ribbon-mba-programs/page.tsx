import Link from "next/link"
import { pageAlternates, articleSchema, breadcrumbSchema } from "@/lib/seo"

const _articleSchema = articleSchema({
  title: "Yellow Ribbon MBA Programs 2026: Full List, GI Bill Benefits & ROI for Veterans",
  description: "Yellow Ribbon Program MBA list 2026. Veterans can attend top MBA programs at near-zero tuition cost using Post-9/11 GI Bill + Yellow Ribbon. Full program list, benefit calculations & ROI.",
  url: "https://careerreturns.com/yellow-ribbon-mba-programs",
  datePublished: "2026-05-01",
  dateModified: "2026-05-21",
})
const _breadcrumbSchema = breadcrumbSchema([{ name: "Yellow Ribbon MBA Programs", url: "https://careerreturns.com/yellow-ribbon-mba-programs" }])

export const metadata = {
  title: "Yellow Ribbon MBA Programs 2026: GI Bill Benefits, Full Program List & Veteran ROI",
  description:
    "Yellow Ribbon Program MBA 2026: veterans can attend top MBA programs at near-zero tuition using GI Bill + YRP. Full program list, benefit calculations ($150K–$200K savings), eligibility & ROI →",
  alternates: pageAlternates("https://careerreturns.com/yellow-ribbon-mba-programs"),
  openGraph: {
    title: "Yellow Ribbon MBA Programs 2026: GI Bill Benefits, Full Program List & Veteran ROI",
    description:
      "Yellow Ribbon Program MBA 2026: veterans save $150K–$200K on top MBA programs. Full program list, GI Bill + YRP calculations & eligibility.",
    url: "https://careerreturns.com/yellow-ribbon-mba-programs",
    siteName: "CareerReturns",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yellow Ribbon MBA Programs 2026: Save $150K–$200K with GI Bill",
    description: "Full list of Yellow Ribbon Program MBA schools. Veterans save $150K–$200K using Post-9/11 GI Bill + Yellow Ribbon. Eligibility, benefits & ROI.",
  },
}

const programs = [
  { school: "Georgetown McDonough", tier: "T25", yrpFunding: "Unlimited", annualTuition: "$82K", estimatedOOP: "$0–$5K/yr", giBillCovers: "Full coverage", note: "One of the best YRP deals — unlimited slots, near-full coverage" },
  { school: "Wharton (UPenn)", tier: "M7", yrpFunding: "Unlimited", annualTuition: "$90K", estimatedOOP: "$5K–$15K/yr", giBillCovers: "~90%", note: "M7 access with YRP — limited slots, apply early" },
  { school: "Vanderbilt Owen", tier: "T25", yrpFunding: "Unlimited", annualTuition: "$65K", estimatedOOP: "$0–$3K/yr", giBillCovers: "Full coverage", note: "Strong YRP participation; smaller program, strong alumni" },
  { school: "Tulane Freeman", tier: "T25", yrpFunding: "Unlimited", annualTuition: "$58K", estimatedOOP: "$0", giBillCovers: "Full coverage", note: "Full tuition coverage for eligible veterans" },
  { school: "American University Kogod", tier: "T25", yrpFunding: "Unlimited", annualTuition: "$55K", estimatedOOP: "$0", giBillCovers: "Full coverage", note: "DC location; strong government/policy MBA track" },
  { school: "Pepperdine Graziadio", tier: "Other", yrpFunding: "Unlimited", annualTuition: "$60K", estimatedOOP: "$0–$2K/yr", giBillCovers: "Full coverage", note: "Strong West Coast and entrepreneurship placement" },
  { school: "George Washington GWSB", tier: "T25", yrpFunding: "Unlimited", annualTuition: "$65K", estimatedOOP: "$0–$5K/yr", giBillCovers: "Near-full", note: "DC location; finance and government focus" },
  { school: "Babson Olin", tier: "Other", yrpFunding: "Unlimited", annualTuition: "$62K", estimatedOOP: "$0–$3K/yr", giBillCovers: "Full coverage", note: "#1-ranked entrepreneurship MBA program" },
]

const benefitCalc = [
  { benefit: "Post-9/11 GI Bill tuition cap (private, 2025–26)", amount: "$28,937/yr" },
  { benefit: "Yellow Ribbon school contribution (50% of gap)", amount: "Up to $20K–$30K/yr" },
  { benefit: "VA matching contribution (equals school amount)", amount: "Up to $20K–$30K/yr" },
  { benefit: "Monthly housing allowance (BAH at E-5 w/ dependents)", amount: "$1,500–$3,500/mo" },
  { benefit: "Annual book/supply stipend", amount: "$1,000/yr" },
  { benefit: "Total estimated 2-year value (Georgetown example)", amount: "$190K–$230K" },
]

export default function YellowRibbonMbaProgramsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-emerald-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12 sm:space-y-20">

        {/* Hero */}
        <section className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium tracking-wide uppercase">
            Veteran MBA Benefits · 2026 Guide
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
            Yellow Ribbon MBA Programs 2026: GI Bill Benefits, Full School List & Veteran ROI
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            The Yellow Ribbon Program (YRP) combined with the Post-9/11 GI Bill can cover <strong className="text-white">$150,000–$200,000+</strong> of an MBA&apos;s total cost for eligible veterans. This guide covers which MBA programs participate, how much you can save, eligibility requirements, and the ROI calculation.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-slate-400">
            <span>Updated May 2026</span>
            <span>·</span>
            <span>VA Yellow Ribbon Program + school data</span>
          </div>
        </section>

        {/* How it works */}
        <section className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-6 space-y-4">
          <h2 className="text-lg font-semibold text-emerald-300">How the Yellow Ribbon Program Works</h2>
          <ol className="space-y-2 text-sm text-slate-300 list-decimal list-inside">
            <li>Post-9/11 GI Bill covers tuition up to <strong className="text-white">$28,937/year</strong> at private schools (full coverage at public in-state programs).</li>
            <li>If your MBA tuition exceeds this cap, the school&apos;s YRP contribution covers 50% of the remaining gap.</li>
            <li>The VA matches the school&apos;s YRP contribution dollar-for-dollar — covering the other 50%.</li>
            <li>Result: tuition above the cap is fully covered as long as the school&apos;s YRP contribution is unlimited.</li>
            <li>Additionally: monthly housing allowance (BAH) + $1,000/year book stipend.</li>
          </ol>
        </section>

        {/* Benefit calculator */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">GI Bill + Yellow Ribbon: Full Benefit Breakdown</h2>
          <div className="space-y-2">
            {benefitCalc.map((row, i) => (
              <div key={i} className="flex items-center justify-between gap-4 py-3 border-b border-slate-800/60">
                <span className="text-sm text-slate-300">{row.benefit}</span>
                <span className="text-sm font-mono font-semibold text-emerald-400 whitespace-nowrap">{row.amount}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-400">
            Housing allowance is based on E-5 with dependents BAH at the school&apos;s zip code. Rates vary by location — $1,500/mo in rural areas to $3,500+/mo in NYC, DC, and Boston.
          </p>
        </section>

        {/* Program Table */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">MBA Programs with Yellow Ribbon Participation (2026)</h2>
          <p className="text-sm text-slate-400">
            Programs with <strong className="text-slate-300">unlimited</strong> YRP funding cover all eligible veterans with no slot cap. Programs with <strong className="text-slate-300">capped</strong> slots fill on a first-come-first-served basis — apply early.
          </p>
          <div className="space-y-3">
            {programs.map((p, i) => (
              <div key={i} className="rounded-lg border border-slate-700/50 bg-slate-900/50 p-4 space-y-2">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="font-semibold text-white">{p.school}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">{p.yrpFunding} slots</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-slate-700/50 text-slate-300 border border-slate-600/30">{p.tier}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-400">
                  <span>Tuition: <span className="text-slate-200">{p.annualTuition}/yr</span></span>
                  <span>Est. out-of-pocket: <span className="text-emerald-400">{p.estimatedOOP}</span></span>
                  <span>GI Bill covers: <span className="text-slate-200">{p.giBillCovers}</span></span>
                </div>
                <p className="text-xs text-slate-400">{p.note}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-400">
            Note: HBS, MIT Sloan, and some other M7 programs do not participate in YRP. Verify current participation directly with the VA&apos;s Yellow Ribbon Program database before applying — participation status and slot counts change annually.
          </p>
        </section>

        {/* ROI callout */}
        <section className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-6 space-y-3">
          <div className="text-amber-300 font-semibold text-sm uppercase tracking-wide">Veteran MBA ROI</div>
          <p className="text-slate-200 leading-relaxed text-sm">
            At $0 out-of-pocket tuition (full YRP coverage), the break-even on an MBA drops to under 2 years for almost any industry track. Even entering a corporate role at $120K post-MBA yields an IRR of 40%+ when the total investment is only the forgone income during enrollment. The Yellow Ribbon MBA is the <strong className="text-white">highest-ROI graduate degree available in the US market</strong> for eligible veterans.
          </p>
        </section>

        {/* Internal links */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold">Related MBA Financing & ROI</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: "/mba-roi-military", label: "Military MBA ROI — Full Analysis for Veterans" },
              { href: "/mba-roi-calculator", label: "MBA ROI Calculator — Model Your GI Bill Numbers" },
              { href: "/mba-roi-scholarship", label: "MBA Scholarship ROI — How Aid Changes the Math" },
              { href: "/how-to-pay-for-mba", label: "How to Pay for an MBA — All Financing Options" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-slate-700/50 bg-slate-900/50 p-4 text-sm text-emerald-300 hover:text-emerald-200 hover:border-emerald-500/40 transition-colors"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_breadcrumbSchema) }} />
      </div>
    </main>
  )
}
