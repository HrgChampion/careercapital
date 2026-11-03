import type { Metadata } from "next"
import { breadcrumbSchema, pageAlternates } from "@/lib/seo"
import SiteFooter from "@/components/SiteFooter"
import Guide from "./guide"

const URL = "https://careerreturns.com/cost-of-living-calculator"

export const metadata: Metadata = {
  title: "Cost of Living Calculator 2026: Salary Needed in 57 US Metros (After Tax)",
  description:
    "How much do you need to earn in a new city? Compare 57 US metros with official BEA price data, and get the salary you need after state and federal tax. Free, no signup.",
  keywords: [
    "cost of living calculator",
    "cost of living comparison",
    "salary cost of living calculator",
    "cost of living by city",
    "how much do I need to earn in",
    "moving salary calculator",
  ],
  alternates: pageAlternates(URL),
  openGraph: {
    title: "Cost of Living Calculator: The Salary You Need After Tax",
    description: "57 US metros, official BEA price data, and a tax-aware salary answer. Free, instant, no signup.",
    url: URL,
    siteName: "CareerReturns",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cost of Living Calculator 2026",
    description: "Salary needed in 57 US metros, after state and federal tax. Official BEA data, free.",
  },
}

const appSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Cost of Living Calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Free cost of living calculator comparing 57 US metro areas with BEA Regional Price Parities, giving the salary needed to keep the same after-tax standard of living.",
  url: URL,
  featureList: [
    "57 US metro areas",
    "Official BEA Regional Price Parities (2024)",
    "Tax-aware equivalent salary",
    "Prices-only comparison",
    "Shareable result link",
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Cost of Living Calculator", url: URL }])) }}
      />
      {children}
      <Guide />
      <SiteFooter />
    </>
  )
}
