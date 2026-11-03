import type { Metadata } from "next"
import { breadcrumbSchema, pageAlternates } from "@/lib/seo"
import SiteFooter from "@/components/SiteFooter"
import Guide from "./guide"

const URL = "https://careerreturns.com/job-offer-comparison"

export const metadata: Metadata = {
  title: "Job Offer Comparison Calculator 2026: After Tax & Cost of Living",
  description:
    "Compare two job offers side by side after 2026 taxes, cost of living, commute, bonus, equity and 401(k) match, with a 5-year value. Free and instant, no signup.",
  keywords: [
    "job offer comparison calculator",
    "compare job offers",
    "salary comparison calculator",
    "job offer calculator",
    "compare salaries in different cities",
    "is a higher salary worth it",
  ],
  alternates: pageAlternates(URL),
  openGraph: {
    title: "Job Offer Comparison Calculator: Which Offer Is Really Worth More?",
    description:
      "Two offers, one number: after-tax, cost-of-living-adjusted value with commute, bonus, equity and 401(k) match. Free, no signup.",
    url: URL,
    siteName: "CareerReturns",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Job Offer Comparison Calculator",
    description: "Which offer is really worth more after tax, cost of living and commute? Free, instant, no signup.",
  },
}

const appSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Job Offer Comparison Calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Free calculator that compares two job offers after 2026 federal, FICA and state tax, cost of living, commute cost, bonus, equity and 401(k) match, with a five-year NPV.",
  url: URL,
  featureList: [
    "After-tax take-home for each offer",
    "Cost-of-living adjustment by city",
    "Commute and office-day cost",
    "Bonus, signing bonus, equity and 401(k) match",
    "Five-year discounted value",
    "Shareable comparison link",
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([{ name: "Job Offer Comparison", url: URL }])),
        }}
      />
      {children}
      <Guide />
      <SiteFooter />
    </>
  )
}
