import type { Metadata } from "next"
import { pageAlternates } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Loyalty Tax Calculator 2026 — How Much Did Staying at Your Company Cost You?",
  description:
    "Job-switchers earn 50%+ more over a decade than loyal employees. Calculate your loyalty tax: the exact dollar amount your company tenure has cost you vs. switching to market rate.",
  keywords: [
    "loyalty tax calculator",
    "job hopping salary calculator",
    "cost of staying at same company",
    "loyalty tax",
    "should i job hop calculator",
    "job hopping vs staying salary",
    "salary compression calculator",
    "internal raise vs external raise",
    "cost of company loyalty",
    "job switching salary calculator",
    "job hopping raise calculator",
    "loyalty penalty salary",
    "how much does job hopping pay",
    "staying at same company salary loss",
  ],
  alternates: pageAlternates("https://careerreturns.com/loyalty-tax-calculator"),
  openGraph: {
    title: "Your 5-Year Loyalty Tax: $42,000. Calculate Yours.",
    description:
      "The average loyal employee is paid 18% less than a new hire doing the same job. Enter your tenure and see exactly what your company loyalty has cost you.",
    url: "https://careerreturns.com/loyalty-tax-calculator",
    type: "website",
    siteName: "CareerReturns",
  },
  twitter: {
    card: "summary_large_image",
    site: "@careerreturns",
    title: "How Much Has Your Company Loyalty Cost You? Calculate Your Loyalty Tax.",
    description:
      "Job-switchers earn 50%+ more over a decade. Enter your salary and tenure — see your personal loyalty tax in dollars. Free calculator.",
  },
}

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Loyalty Tax Calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Calculate the compounding salary gap between staying at one company vs. switching to market rate. Shows annual loyalty tax, cumulative total, NPV, and the optimal year you should have switched.",
  url: "https://careerreturns.com/loyalty-tax-calculator",
  featureList: [
    "Year-by-year loyalty tax breakdown",
    "Cumulative salary compression total",
    "NPV of historical underpayment",
    "Switch-now NPV gain",
    "Optimal switch year analysis",
    "Shareable loyalty tax statement",
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
