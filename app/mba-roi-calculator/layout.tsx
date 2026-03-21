import { pageAlternates } from "@/lib/seo"

export const metadata = {
  title: "MBA ROI Calculator 2026: Free NPV, IRR & MBA Salary Calculator",
  description:
    "Free MBA ROI & salary calculator. Model NPV, IRR, break-even, and MBA cost vs return using full DCF analysis across 12 industries. Enter your numbers — results in 60 seconds →",
  alternates: pageAlternates("https://careerreturns.com/mba-roi-calculator"),
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is an MBA worth it financially?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on tuition, your pre- and post-MBA salary delta, how much you borrow, and your personal discount rate. This calculator models the MBA as a capital allocation decision — similar to the Bloomberg Businessweek MBA ROI calculator methodology, but using a full DCF model. A positive NPV means the MBA creates value at your assumed discount rate.",
      },
    },
    {
      "@type": "Question",
      name: "What is a good IRR for an MBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generally, an IRR above your cost of capital (typically 6–8%) indicates value creation. Elite programs with strong placement in finance, consulting, or tech frequently produce IRRs in the 12–20% range. IRR below 6% suggests the financial return alone does not justify the investment.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to break even on an MBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most programs break even between 4 and 8 years depending on post-MBA salary uplift, financing structure, and total program cost. This tool computes the exact break-even using an algorithmic cumulative cash flow model, accounting for loan repayment in the early post-graduation years.",
      },
    },
    {
      "@type": "Question",
      name: "What discount rate should I use for MBA ROI analysis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The model uses 6% as the default discount rate, which approximates a long-run risk-adjusted return on diversified equity investments. If you have high-yield student loan debt, using your loan interest rate as the discount rate is more conservative and appropriate.",
      },
    },
    {
      "@type": "Question",
      name: "Is an MBA better than investing in the stock market?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your MBA's IRR. If your modeled IRR exceeds the long-run equity return (~8%), the MBA generates more value than a passive index fund investment of the same principal. However, equity returns are diversified and liquid — an MBA is a concentrated, illiquid bet on a single career path.",
      },
    },
    {
      "@type": "Question",
      name: "How much does an MBA increase your salary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The average MBA salary increase ranges from $35K to $90K per year depending on industry. Entering MBB consulting post-MBA adds $80–105K annually. Investment banking adds $90–120K. Tech PM roles add $40–70K. General management adds $35–50K. Our MBA salary calculator lets you model the exact salary delta for your specific situation.",
      },
    },
    {
      "@type": "Question",
      name: "What is an MBA return on investment calculator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An MBA return on investment calculator computes the financial value created by an MBA using NPV (Net Present Value) and IRR (Internal Rate of Return). You enter your current salary, target post-MBA salary, total program cost, and loan details — and the calculator outputs NPV, IRR, break-even period, and a financial grade (A–F). This calculator uses institutional-grade DCF modeling, not simplified payback ratios.",
      },
    },
    {
      "@type": "Question",
      name: "How much does an MBA cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Total MBA cost including tuition, living expenses, and forgone income ranges from $200K–$500K+ depending on program. Top US M7 programs (Harvard, Wharton, Booth): $350K–$500K all-in. Top-25 programs: $200K–$350K. Regional programs: $80K–$180K. European programs (INSEAD, LBS): $180K–$280K. Online MBAs: $20K–$80K. This calculator factors in the full economic cost including opportunity cost.",
      },
    },
    {
      "@type": "Question",
      name: "Is an MBA worth it in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An MBA is worth it financially in 2026 when targeting high-delta industries: MBB consulting (IRR 22–40%), investment banking (21–38%), or PE/VC (23–41%). It typically fails financially when entering low-delta fields (nonprofit: IRR 4–14%) or taking on full debt for a non-target program. Use this free MBA value calculator to model your specific scenario.",
      },
    },
  ],
}

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "MBA ROI Calculator",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Free MBA ROI calculator using Net Present Value (NPV), Internal Rate of Return (IRR), and break-even analysis.",
  "url": "https://careerreturns.com/mba-roi-calculator",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      {children}
    </>
  )
}
