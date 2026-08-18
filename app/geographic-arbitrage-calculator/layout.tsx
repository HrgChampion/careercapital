import type { Metadata } from "next"
import { pageAlternates } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Geographic Arbitrage Calculator 2026 — Remote Work Wealth Multiplier",
  description:
    "Earn a San Francisco salary, live in Lisbon. See your exact wealth multiplier, monthly surplus, and years to financial independence. Compare any two cities instantly.",
  keywords: [
    "geographic arbitrage calculator",
    "remote work cost of living calculator",
    "digital nomad salary calculator",
    "salary cost of living comparison",
    "remote work wealth calculator",
    "geographic arbitrage",
    "work remotely live abroad calculator",
    "cost of living salary calculator",
    "remote work purchasing power calculator",
    "fire calculator geographic arbitrage",
    "digital nomad financial independence calculator",
    "earn us salary live abroad",
    "remote salary purchasing power",
    "work from anywhere financial calculator",
  ],
  alternates: pageAlternates("https://careerreturns.com/geographic-arbitrage-calculator"),
  openGraph: {
    title: "What Is Your $180K SF Salary Worth in Lisbon? Calculate Your Wealth Multiplier.",
    description:
      "Earn a NYC salary, live in Medellín. See your exact purchasing power multiplier, monthly surplus, and FIRE timeline for any two cities. Free calculator.",
    url: "https://careerreturns.com/geographic-arbitrage-calculator",
    type: "website",
    siteName: "CareerReturns",
  },
  twitter: {
    card: "summary_large_image",
    site: "@careerreturns",
    title: "Geographic Arbitrage: What Is Your Remote Salary Really Worth Abroad?",
    description:
      "Moving from NYC to Lisbon gives you a 2.1× wealth multiplier — equivalent to earning $378K in New York. Calculate yours free.",
  },
}

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Geographic Arbitrage Calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Compare your purchasing power, monthly surplus, and FIRE timeline between any two cities. Calculates the wealth multiplier of earning a high-location salary while living in a lower cost-of-living location.",
  url: "https://careerreturns.com/geographic-arbitrage-calculator",
  featureList: [
    "27 cities across US, Europe, Asia, Americas",
    "Purchasing power multiplier calculation",
    "Monthly surplus comparison",
    "FIRE (financial independence) timeline",
    "5-year wealth accumulation projection",
    "Tax rate and cost of living data for 2026",
    "Shareable comparison card",
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />
      {children}

    </>
  )
}
