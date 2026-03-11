import type { Metadata } from "next"
import { pageAlternates } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Returnship ROI Calculator (2026) — Amazon, Goldman, McKinsey, Meta & More",
  description:
    "Is the Amazon Returnship worth it vs. applying directly? Free calculator: model NPV, conversion break-even %, and expected salary across 9 major returnship programs. Takes 60 seconds.",
  keywords: [
    "returnship ROI calculator",
    "Amazon returnship salary",
    "Amazon returnship worth it",
    "Goldman Sachs returnship ROI",
    "McKinsey returners program",
    "Meta returnship salary",
    "JPMorgan reentry program",
    "returnship vs direct re-entry",
    "returnship program comparison",
    "best returnship programs 2026",
    "returnship conversion rate",
    "returnship salary calculator",
  ],
  alternates: pageAlternates("https://careerreturns.com/returnship-roi-calculator"),
  openGraph: {
    title: "Amazon Returnship vs. Direct Re-Entry: Which Wins? [Free Calculator]",
    description:
      "The Amazon Returnship converts at 90%. Does that make it worth 16 weeks at $2,500/week? Free calculator finds the exact break-even point — for Amazon, Goldman, McKinsey, Meta, and 5 more.",
    url: "https://careerreturns.com/returnship-roi-calculator",
    type: "website",
    siteName: "CareerReturns",
  },
  twitter: {
    card: "summary_large_image",
    site: "@careerreturns",
    title: "Returnship ROI: Amazon vs Goldman vs McKinsey — Who Wins?",
    description:
      "9 programs. Real conversion data. Free break-even calculator tells you when the returnship beats applying directly.",
  },
}

const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Returnship ROI Analyzer",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description":
    "Compare returnship programs vs. direct re-entry vs. waiting using probability-weighted DCF analysis. Pre-loaded with data for Amazon, Goldman Sachs, McKinsey, Meta, JPMorgan, Deloitte, Microsoft, Apple.",
  "url": "https://careerreturns.com/returnship-roi-calculator",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is the Amazon Returnship worth it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Amazon Returnship (16 weeks, ~$2,500/week, ~90% conversion) converts to a $145,000+ full-time role. At a 90% conversion rate, its 10-year NPV is approximately $280k–$340k. The break-even conversion rate vs. direct re-entry is approximately 55% — well below Amazon's 90% historical rate. By this analysis, the Amazon Returnship is financially superior to direct re-entry for most career returners.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the Goldman Sachs Returnship salary?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Goldman Sachs Returnship participants earn approximately $3,500/week ($182k annualized) during the 15-week program. Full-time conversion salaries are $180,000–$250,000 base plus bonus. Historical conversion rate is approximately 85%. Total comp (base + bonus) for converted analysts typically reaches $250,000–$350,000 in Year 1.",
      },
    },
    {
      "@type": "Question",
      "name": "Which returnship programs have the highest conversion rates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Based on industry-reported and publicly available data: Amazon (~90%), Meta (~88%), Microsoft LEAP (~85%), Goldman Sachs (~85%), JPMorgan (~82%), McKinsey (~80%), Apple (~80%), Deloitte Encore (~78%). These are approximate figures based on program participant reports and employer disclosures — individual cohort results vary. Higher conversion rates are not always financially superior; post-conversion salary and growth matter equally.",
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
