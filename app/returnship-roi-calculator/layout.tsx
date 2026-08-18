import type { Metadata } from "next"
import { pageAlternates } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Returnship ROI Calculator 2026 — Is a Returnship Worth It?",
  description:
    "Amazon returnship pays $4,200/wk and converts 90% of participants. Goldman pays $3,500/wk at 85%. Free calculator compares NPV, break-even & expected salary across 9 programs vs. applying directly. 60 seconds.",
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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }} />
      {children}

    </>
  )
}
