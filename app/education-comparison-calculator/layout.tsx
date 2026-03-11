import type { Metadata } from "next"
import { pageAlternates } from "@/lib/seo"

export const metadata: Metadata = {
  title: "MBA vs Bootcamp vs Certificate Calculator (2026) — Which Wins Financially?",
  description:
    "Free side-by-side comparison: MBA ($160k all-in) vs coding bootcamp ($15k) vs Google certificate ($300). Real NPV, IRR, and break-even. Ranked by financial return — not prestige.",
  keywords: [
    "MBA vs bootcamp ROI",
    "MBA vs coding bootcamp calculator",
    "education ROI comparison",
    "MBA vs Masters ROI",
    "bootcamp vs degree ROI",
    "certificate vs degree ROI",
    "which education investment is worth it",
    "education program comparison calculator",
    "best education investment ROI",
    "masters vs MBA financial comparison",
  ],
  alternates: pageAlternates("https://careerreturns.com/education-comparison-calculator"),
  openGraph: {
    title: "MBA vs Bootcamp vs Certificate: Which Wins? [Free Calculator]",
    description:
      "Put a $160k MBA, $15k bootcamp, and $300 certificate on the same DCF framework. The answer surprises most people. Free side-by-side comparison — no email required.",
    url: "https://careerreturns.com/education-comparison-calculator",
    type: "website",
    siteName: "CareerReturns",
  },
  twitter: {
    card: "summary_large_image",
    site: "@careerreturns",
    title: "MBA vs Bootcamp vs Certificate — Which Wins on ROI?",
    description:
      "Same DCF framework. Same discount rate. The financial winner is rarely what you expect. Free calculator.",
  },
}

const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Education Program Comparison Calculator",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description":
    "Compare up to 4 education programs — MBA, Masters, bootcamp, certificate — on the same DCF model. NPV, IRR, break-even, and A-F grade for each. Preset bundles: MBA vs Bootcamp, MBA vs MS Data Science, Certificate vs Nothing.",
  "url": "https://careerreturns.com/education-comparison-calculator",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does an MBA have better ROI than a coding bootcamp?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A $15k coding bootcamp targeting a $95k SWE role typically produces a 10-year NPV of $180k–$240k with a 2-year break-even. A $150k MBA targeting a $165k consulting role produces a 10-year NPV of $180k–$280k with a 4-5 year break-even. The bootcamp wins on cost-efficiency and speed; the MBA wins on earnings ceiling for finance and consulting.",
      },
    },
    {
      "@type": "Question",
      "name": "Is an online Masters degree worth it compared to an MBA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An online MS Data Science ($22k, 1.5 years part-time) targeting $130k in tech typically produces a 10-year NPV of $220k–$320k. A full-time Top-20 MBA ($150k, 2 years) targeting $165k in consulting produces $180k–$280k. The online MS wins on cost and speed; the MBA wins on switching into finance and consulting.",
      },
    },
    {
      "@type": "Question",
      "name": "Is a Google certificate worth it compared to a degree?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Google Data Analytics Certificate ($300, 6 months part-time) produces a 10-year NPV of $80k–$120k and breaks even in under 3 months. Among reskilling investments, Google certificates have the highest ROI per dollar spent — though the absolute salary ceiling is lower than bootcamps or degrees.",
      },
    },
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  )
}
