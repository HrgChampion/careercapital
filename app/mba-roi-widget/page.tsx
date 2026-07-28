import Link from "next/link"
import { pageAlternates } from "@/lib/seo"
import CopySnippet from "@/components/CopySnippet"
import RelatedLinks from "@/components/RelatedLinks"
import SiteFooter from "@/components/SiteFooter"

export const metadata = {
  title: "Free Embeddable MBA ROI Calculator Widget (2026) — Add to Your Site",
  description:
    "Embed a free MBA ROI calculator on your website in 30 seconds. Full DCF model — NPV, IRR, break-even and investment grade. No signup, no branding fees, one line of HTML.",
  openGraph: {
    title: "Free Embeddable MBA ROI Calculator Widget — CareerReturns",
    description:
      "Add a DCF-based MBA ROI calculator (NPV, IRR, break-even) to your site with one line of HTML. Free for admissions consultants, universities and finance blogs.",
    url: "https://careerreturns.com/mba-roi-widget",
    siteName: "CareerReturns",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Embeddable MBA ROI Calculator Widget — CareerReturns",
    description: "Add a DCF-based MBA ROI calculator (NPV, IRR, break-even) to your site with one line of HTML.",
  },
  alternates: pageAlternates("https://careerreturns.com/mba-roi-widget"),
}

const EMBED_SNIPPET = `<iframe
  src="https://careerreturns.com/embed/mba-roi-calculator"
  width="100%" height="660" loading="lazy"
  style="border:0;border-radius:16px;max-width:720px"
  title="MBA ROI Calculator by CareerReturns">
</iframe>
<p style="font-size:13px;margin-top:6px">
  Powered by the <a href="https://careerreturns.com/mba-roi-calculator">CareerReturns MBA ROI Calculator</a>
</p>`

const audiences = [
  {
    who: "MBA admissions consultants",
    why: "Give prospective clients an instant, credible answer to \"is the MBA worth it for me?\" — on your own site, without building anything.",
  },
  {
    who: "University career & admissions pages",
    why: "Let applicants model NPV and break-even for your program with their own salary numbers instead of quoting a static average.",
  },
  {
    who: "Personal finance & education blogs",
    why: "Turn a static \"is an MBA worth it\" article into an interactive tool readers return to and share.",
  },
  {
    who: "Student loan & fintech sites",
    why: "The calculator models loan percentage, interest rate and full amortization — a natural fit next to loan comparison content.",
  },
]

const faqItems = [
  {
    question: "Is the MBA ROI calculator widget really free?",
    answer:
      "Yes. The widget is free to embed with no signup, API key, or branding fee. The only requirement is keeping the attribution link to CareerReturns below the iframe.",
  },
  {
    question: "What does the embedded calculator compute?",
    answer:
      "It runs the same discounted cash flow engine as the full CareerReturns calculator: 10-year Net Present Value at a 6% discount rate, Internal Rate of Return, break-even year with true 5-year loan amortization, and an A–F investment grade with a risk level.",
  },
  {
    question: "Will the widget slow my page down?",
    answer:
      "No. The iframe is lazy-loaded (loading=\"lazy\"), so it only loads when a visitor scrolls to it, and the embed page ships a minimal bundle with no images or fonts.",
  },
  {
    question: "Can I customize the width and height?",
    answer:
      "Yes. The widget is fully responsive — set the iframe width to 100% and it adapts from 320px phones to 720px containers. A height of 620–700px fits all content without internal scrolling.",
  },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
}

export default function MbaRoiWidgetPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-violet-600/12 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12 sm:space-y-16">

        {/* ── Hero ── */}
        <header className="space-y-5">
          <p className="text-xs font-medium text-violet-400 uppercase tracking-widest">CareerReturns · Free Widget</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            Embed the MBA ROI Calculator on Your Site
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Add a full DCF-based MBA ROI calculator — NPV, IRR, break-even and an A–F investment
            grade — to your website with one line of HTML. Free forever, no signup, loads lazily,
            works on any platform: WordPress, Webflow, Squarespace, Ghost, or plain HTML.
          </p>
        </header>

        {/* ── Live preview ── */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Live Preview</h2>
          <p className="text-slate-400 text-sm">This is the exact widget your visitors will see — try it:</p>
          <iframe
            src="/embed/mba-roi-calculator"
            width="100%"
            height={660}
            loading="lazy"
            style={{ border: 0, borderRadius: 16 }}
            title="MBA ROI Calculator by CareerReturns"
          />
        </section>

        {/* ── Embed code ── */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Add It in 30 Seconds</h2>
          <p className="text-slate-400 text-sm">
            Paste this snippet wherever your platform accepts HTML (a Custom HTML block in WordPress,
            an Embed element in Webflow/Squarespace):
          </p>
          <CopySnippet code={EMBED_SNIPPET} />
          <p className="text-slate-500 text-xs">
            Free to use with the attribution link included in the snippet. Questions or a custom
            variant (light theme, preset school defaults)? <Link href="/contact" className="text-violet-400 hover:text-violet-300">Contact us</Link>.
          </p>
        </section>

        {/* ── Who it's for ── */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Who Embeds This?</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {audiences.map(({ who, why }) => (
              <div key={who} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-white font-semibold text-sm">{who}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{why}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Why this calculator ── */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Why This Calculator and Not a Payback Table?</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Most MBA ROI tools online use a simple payback ratio: cost divided by salary increase.
            That ignores opportunity cost, loan interest, and the time value of money — and it
            overstates ROI for expensive programs. This widget runs a timing-correct discounted cash
            flow model: Year 0 captures out-of-pocket cost plus forgone income, Years 1–5 net out
            true amortized loan payments, and every flow is discounted at 6%. It is the same
            methodology used to evaluate any capital investment — applied to a degree.
          </p>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map(({ question, answer }) => (
              <div key={question} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-white font-semibold text-sm">{question}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{answer}</p>
              </div>
            ))}
          </div>
        </section>

        <RelatedLinks
          links={[
            { href: "/mba-roi-calculator", label: "MBA ROI calculator", description: "The full version: sensitivity analysis, amortization schedule, investment grade." },
            { href: "/mba-roi-report-2026", label: "MBA ROI Report 2026", description: "IRR by industry, payback by track — citable data for your articles." },
            { href: "/mba-loan-repayment-calculator", label: "MBA loan repayment calculator", description: "Monthly payment, total interest and payoff timeline." },
            { href: "/blog/how-to-calculate-mba-roi", label: "How to calculate MBA ROI", description: "The DCF methodology behind the widget, explained step by step." },
          ]}
        />

        <SiteFooter note="The embeddable MBA ROI calculator is free for editorial and educational use with attribution. The DCF engine assumes a 6% discount rate, 5-year loan term, and 10-year projection horizon." />

      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

    </main>
  )
}
