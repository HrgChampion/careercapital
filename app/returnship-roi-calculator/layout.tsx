import type { Metadata } from "next"
import { pageAlternates } from "@/lib/seo"
import ReturnshipRoiGuide from "./guide"

export const metadata: Metadata = {
  title: "Returnship ROI Calculator 2026 — Is a Returnship Worth It?",
  description:
    "Compare a returnship with applying directly or waiting a year: probability-weighted 10-year NPV, conversion break-even and presets for nine programs.",
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
      "Is a 16-week returnship worth it compared with applying directly? Free calculator finds the conversion break-even for Amazon, Goldman, McKinsey, Meta and more.",
    url: "https://careerreturns.com/returnship-roi-calculator",
    type: "website",
    siteName: "CareerReturns",
  },
  twitter: {
    card: "summary_large_image",
    site: "@careerreturns",
    title: "Returnship ROI: Amazon vs Goldman vs McKinsey — Who Wins?",
    description:
      "Nine program presets with approximate conversion rates. A free break-even calculator shows when a returnship beats applying directly.",
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
      <ReturnshipRoiGuide />
    </>
  )
}
