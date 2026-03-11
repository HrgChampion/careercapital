import type { Metadata } from "next"
import { pageAlternates } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Skills Gap Cost Calculator (2026) — What Are Your Missing Skills Costing You?",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does not knowing Python affect your salary?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Going from no Python to intermediate proficiency is associated with a $14,000–$22,000 annual salary increase for data-adjacent roles (analyst, data scientist, product manager). In pure software engineering roles, the difference between no Python and intermediate Python is $18,000–$30,000/year in base salary. The Google IT Automation with Python Certificate ($300, 6 months) produces an estimated 10-year NPV of $100,000–$160,000.",
      },
    },
    {
      "@type": "Question",
      "name": "Is an AWS certification worth it in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The AWS Solutions Architect Associate certification ($800 total, 3 months at 10 hrs/week) is associated with a $20,000–$28,000 annual salary increase for cloud and infrastructure roles. At a 6% discount rate, this produces a 10-year NPV of $140,000–$200,000 — making it one of the highest-ROI professional certifications available. The AWS Cloud Practitioner (entry-level, $300 exam fee) produces a more modest $12,000–$18,000 annual impact.",
      },
    },
    {
      "@type": "Question",
      "name": "What skills have the highest ROI to learn in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "By ROI per month invested: (1) SQL via free tools — $10k+ annual impact, 1 month, near-zero cost; (2) Google Data Analytics Certificate — $10k annual impact, $300, 6 months; (3) AWS Cloud Practitioner — $12k annual impact, $300, 2 months; (4) AWS Solutions Architect — $20k annual impact, $800, 3 months; (5) Machine Learning Specialization (Coursera) — $18k annual impact, $400, 4 months. AI/ML and cloud skills consistently offer the highest absolute salary impacts.",
      },
    },
    {
      "@type": "Question",
      "name": "Is the PMP certification worth it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The PMP certification ($1,500, 4 months at 8 hrs/week) is associated with a $15,000–$20,000 annual salary increase for project management roles. This gives a 10-year NPV of $105,000–$140,000. The certification is particularly valuable for professionals managing $1M+ projects at enterprise companies, where PMP-holding PMs earn 20-25% more than non-certified counterparts.",
      },
    },
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
