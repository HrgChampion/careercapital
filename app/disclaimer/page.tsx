import Link from "next/link"
import { pageAlternates } from "@/lib/seo"
import SiteFooter from "@/components/SiteFooter"

export const metadata = {
  title: "Disclaimer | CareerReturns",
  description:
    "CareerReturns calculators and guides are educational estimates, not financial, legal or admissions advice. Read how to use our figures and how the site is funded.",
  alternates: pageAlternates("https://careerreturns.com/disclaimer"),
}

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12">
        <header className="space-y-4">
          <p className="text-xs font-medium text-purple-400 uppercase tracking-widest">CareerReturns</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">Disclaimer</h1>
          <p className="text-slate-400 text-sm">Last updated: <span className="text-white">October 21, 2026</span></p>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Educational estimates, not advice</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The calculators, scores and guides on CareerReturns are educational tools. They are not financial,
            investment, tax, legal or admissions advice, and they do not create an advisory relationship. Before
            borrowing for a degree, changing jobs or turning down an offer, consider speaking with a qualified
            financial adviser and the financial-aid office of the program you are considering.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">How to read our numbers</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm leading-relaxed">
            <li>Salary figures are medians or ranges from published sources. Half of graduates earn less than a median.</li>
            <li>Model outputs (NPV, IRR, break-even years, scores) depend entirely on the inputs and assumptions shown on each tool. Change an assumption and the answer changes.</li>
            <li>Past placement and pay data do not guarantee future outcomes. Hiring markets, bonuses and loan rates move.</li>
            <li>School, employer and program names are used for identification only; we are not affiliated with or endorsed by any of them.</li>
          </ul>
          <p className="text-slate-400 text-sm leading-relaxed">
            Our sources and review process are described in the{" "}
            <Link href="/editorial-policy" className="text-purple-400 underline underline-offset-2">editorial policy</Link>.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Advertising and affiliate disclosure</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            CareerReturns is free to use. It is funded by display advertising served by Google AdSense and by
            affiliate partnerships. Ads are selected by Google, not by us, and their appearance is not an
            endorsement.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Some pages contain affiliate links, for example to student-loan refinancing lenders, test-prep and
            online-course providers, resume and career-coaching services, and MBA admissions consultants. If you
            click one of these links and sign up or buy, we may earn a commission at no extra cost to you. In line
            with the U.S. Federal Trade Commission&apos;s Endorsement Guides, affiliate links are labeled where they
            appear, marked with <code className="text-slate-300">rel=&quot;sponsored&quot;</code>, and placed next to a
            short disclosure.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm leading-relaxed">
            <li>Commissions never change calculator results, scores, rankings or the salary and cost data we publish.</li>
            <li>We do not accept payment to recommend a school, lender or product in our editorial content.</li>
            <li>Rates, prices and offers on partner sites are set by those partners and can change; check the terms on their site before you apply.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Limitation of liability</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            We work hard to keep the information accurate and current, but we cannot guarantee that it is complete
            or error-free. You use the site at your own risk. The full terms are in our{" "}
            <Link href="/terms" className="text-purple-400 underline underline-offset-2">Terms of Service</Link>.
            Found a mistake? <Link href="/contact" className="text-purple-400 underline underline-offset-2">Tell us</Link>.
          </p>
        </section>
      </div>
      <SiteFooter />
    </main>
  )
}
