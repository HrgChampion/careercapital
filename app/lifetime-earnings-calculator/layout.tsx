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
