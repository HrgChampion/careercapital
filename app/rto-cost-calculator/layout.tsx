import type { Metadata } from "next"
import { pageAlternates } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Return-to-Office Cost Calculator 2026 — What Does RTO Really Cost You?",
  description:
    "Amazon, JPMorgan, Google forced full RTO. Calculate your real annual cost: commute, lost remote premium, childcare, time — and see your 5-year financial impact. Share your RTO invoice on LinkedIn.",
  keywords: [
    "return to office cost calculator",
    "rto cost calculator",
    "return to office financial impact",
    "cost of commuting calculator",
    "rto salary impact",
    "remote work vs office salary",
    "amazon rto cost",
    "rto hidden costs",
    "cost of going back to office",
    "return to office pay cut calculator",
    "remote work premium calculator",
    "commute cost calculator 2026",
    "rto financial penalty",
    "work from office vs remote salary",
  ],
  alternates: pageAlternates("https://careerreturns.com/rto-cost-calculator"),
  openGraph: {
    title: "What Is Your RTO Mandate Really Costing You?",
    description:
      "Enter your commute, salary, and city. Get an itemized RTO invoice — commute, time, remote premium lost, childcare. Share the total on LinkedIn.",
    url: "https://careerreturns.com/rto-cost-calculator",
    type: "website",
    siteName: "CareerReturns",
  },
  twitter: {
    card: "summary_large_image",
    site: "@careerreturns",
    title: "Calculate Your RTO Tax — The Hidden Cost of Going Back to Office",
    description:
      "Amazon's 5-day RTO costs Seattle engineers $31K/year. What's yours? Free calculator with shareable invoice.",
  },
}

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Return-to-Office Cost Calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Calculate the full annual financial cost of a return-to-office mandate: commute, time cost, remote salary premium lost, childcare, meals. Get a shareable itemized invoice.",
  url: "https://careerreturns.com/rto-cost-calculator",
  featureList: [
    "Commute cost calculation (mileage, transit, parking)",
    "Time cost of commuting at your hourly rate",
    "Remote salary premium lost",
    "Childcare delta",
    "Meals and incidentals",
    "5-year NPV of total RTO cost",
    "Shareable RTO Invoice",
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
