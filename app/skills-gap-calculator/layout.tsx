import type { Metadata } from "next"
import { pageAlternates } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Skills Gap Calculator 2026 — What Missing Skills Cost You",
  description:
    "Not knowing Python costs $22,000/year. SQL: $12,000/year. AWS: $25,000/year. Free calculator: assess 12 skills, see the exact annual salary cost of each gap, and get a ranked ROI-based upskilling plan.",
  keywords: [
    "skills gap cost calculator",
    "how much does not knowing Python cost",
    "Python salary impact",
    "SQL skills salary increase",
    "AWS certification ROI calculator",
    "skills gap salary calculator 2026",
    "upskilling ROI calculator",
    "which skills to learn for salary increase",
    "career skills gap analysis",
    "skills salary value calculator",
    "best skills to learn for salary increase 2026",
    "machine learning salary impact",
    "data science skills value",
    "cybersecurity certification ROI",
    "PMP certification worth it",
  ],
  alternates: pageAlternates("https://careerreturns.com/skills-gap-calculator"),
  openGraph: {
    title: "Not Knowing Python Costs $22,000/Year. What's Your Skills Gap Costing You?",
    description:
      "Free calculator: assess 12 in-demand skills, see the annual salary cost of each gap, and get a ranked action plan (sorted by ROI per month invested). Includes 14 upskill paths — some free.",
    url: "https://careerreturns.com/skills-gap-calculator",
    type: "website",
    siteName: "CareerReturns",
  },
  twitter: {
    card: "summary_large_image",
    site: "@careerreturns",
    title: "Python Gap: $22k/yr. SQL Gap: $12k/yr. What's Yours Costing You?",
    description:
      "Assess 12 skills in 2 minutes. See the dollar cost of each gap + the cheapest path to close it. Free.",
  },
}

const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Skills Gap Cost Quantifier",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description":
    "Assess your current vs. target level across 12 in-demand skills (Python, SQL, AWS, AI/ML, PM, etc.) and calculate the annual salary cost of each gap. Generates a ranked upskilling action plan sorted by ROI per month invested, with 14 specific programs including free options.",
  "url": "https://careerreturns.com/skills-gap-calculator",
  "featureList": [
    "12 in-demand skills assessed",
    "4-level skill self-assessment",
    "Annual salary impact per skill gap",
    "10-year NPV of total skills gap",
    "14 curated upskill paths (some free)",
    "Ranked action plan by ROI/month",
    "Quick wins: free paths with high impact",
    "Payback period per learning path",
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }}
      />
      {children}

    </>
  )
}
