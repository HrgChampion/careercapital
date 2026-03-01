export const metadata = {
  title: "MBA ROI Calculator – NPV, IRR & Break-Even Analysis",
  description:
    "Analyze whether an MBA is worth it using real capital budgeting methods. Calculate Net Present Value (NPV), Internal Rate of Return (IRR), loan amortization, and exact break-even period.",
  keywords: [
    "MBA ROI calculator",
    "is MBA worth it calculator",
    "MBA NPV calculator",
    "MBA break even analysis",
    "MBA IRR calculation",
    "MBA financial analysis",
  ],
  alternates: {
    canonical: "https://careerreturns.com/mba-roi-calculator",
  },
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
        text: "It depends on tuition, your pre- and post-MBA salary delta, how much you borrow, and your personal discount rate. This calculator models the MBA as a capital allocation decision. A positive NPV means the MBA creates value at your assumed discount rate.",
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
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
