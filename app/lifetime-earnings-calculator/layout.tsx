import type { Metadata } from "next"
import { pageAlternates } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Lifetime Earnings Calculator (2026) — Model Your Career to Retirement",
  description:
    "Free calculator: compare staying, pivoting, or taking a break across your full career to retirement. See total lifetime earnings, inflation-adjusted NPV, and peak salary year for each scenario.",
  keywords: [
    "lifetime earnings calculator",
    "career earnings trajectory calculator",
    "how much will I earn in my lifetime",
    "lifetime salary calculator 2026",
    "career break lifetime earnings impact",
    "career pivot lifetime earnings",
    "career scenario comparison calculator",
    "stay vs switch career calculator",
    "retirement earnings calculator",
    "career financial planning calculator",
    "total lifetime compensation calculator",
    "career break financial cost",
    "salary trajectory by career path",
    "lifetime income by career",
  ],
  alternates: pageAlternates("https://careerreturns.com/lifetime-earnings-calculator"),
  openGraph: {
    title: "Your Lifetime Earnings: Stay, Pivot, or Take a Break? [Free Calculator]",
    description:
      "Model every major career decision from today to retirement. See which path generates the most lifetime wealth — in nominal, inflation-adjusted, and NPV terms. Free scenario builder.",
    url: "https://careerreturns.com/lifetime-earnings-calculator",
    type: "website",
    siteName: "CareerReturns",
  },
  twitter: {
    card: "summary_large_image",
    site: "@careerreturns",
    title: "Stay, Pivot, or Take a Break? Model Your Lifetime Earnings.",
    description:
      "Build 3 career scenarios to retirement. See total lifetime earnings, real NPV, and peak salary. Free — no signup.",
  },
}

const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Lifetime Earnings Trajectory Calculator",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description":
    "Build up to 3 career scenarios with multiple phases (each with salary, growth rate, and optional break). Calculate nominal lifetime earnings, inflation-adjusted real earnings, NPV, peak earnings year, and break-even vs. baseline for each scenario.",
  "url": "https://careerreturns.com/lifetime-earnings-calculator",
  "featureList": [
    "Up to 3 scenarios with multiple career phases",
    "Full break (zero income) and part-time break modeling",
    "Nominal and inflation-adjusted lifetime earnings",
    "NPV at user-specified discount rate",
    "Peak earnings year and amount",
    "Break-even year vs. baseline",
    "Age-annotated visual chart",
    "Editable phase builder",
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does the average person earn in their lifetime?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The average college-educated professional in the US earns $2.0M–$3.5M in nominal lifetime earnings (career start to age 65). With a 4% annual growth rate starting at $70,000, lifetime earnings reach approximately $2.8M nominal. Inflation-adjusted (at 3% CPI), this is approximately $1.4M in today's dollars. Highly skilled roles (software engineering, finance, medicine) can reach $4M–$8M nominal.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the lifetime earnings cost of a 2-year career break?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A 2-year career break at $90,000/year costs $187,000 in direct foregone income. But the compounding effect of re-entering at 85% of pre-break salary and missing 2 years of promotions means the lifetime earnings gap (through retirement) typically reaches $350,000–$600,000 in nominal terms, depending on the re-entry salary and recovery trajectory.",
      },
    },
    {
      "@type": "Question",
      "name": "Does a career pivot increase or decrease lifetime earnings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A pivot with a 6-month reskilling break into a higher-growth field (e.g., tech or data science) typically breaks even vs. staying put within 2–4 years and exceeds the stay scenario's lifetime earnings within 5–8 years. The key variables are the salary premium in the new field and the growth rate differential. A 2% higher growth rate in the new career (e.g., 6% vs. 4%) compounds dramatically over a 25-year horizon.",
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
