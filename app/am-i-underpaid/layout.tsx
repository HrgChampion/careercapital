import type { Metadata } from "next"
import { pageAlternates } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Am I Underpaid? Free Salary Check Tool 2026 — Find Your Market Percentile",
  description:
    "Enter your role, industry, and experience. See your salary percentile instantly — and exactly how much you're leaving on the table per year (and over 5 years). Free, no signup.",
  keywords: [
    "am i underpaid",
    "am i underpaid calculator",
    "am i being underpaid",
    "salary check tool",
    "underpaid salary calculator",
    "how much am i underpaid",
    "salary percentile calculator",
    "market salary checker",
    "salary comparison tool 2026",
    "underpaid at work calculator",
    "salary audit tool",
    "fair salary calculator",
    "am i paid fairly",
    "salary benchmark tool",
  ],
  alternates: pageAlternates("https://careerreturns.com/am-i-underpaid"),
  openGraph: {
    title: "Am I Underpaid? Find Out in 60 Seconds",
    description:
      "See your exact salary percentile vs. the market. Get the dollar amount you're leaving on the table — per year and over 5 years. Share your results on LinkedIn.",
    url: "https://careerreturns.com/am-i-underpaid",
    type: "website",
    siteName: "CareerReturns",
  },
  twitter: {
    card: "summary_large_image",
    site: "@careerreturns",
    title: "Am I Underpaid? Check Your Salary Percentile Free.",
    description:
      "Instant salary audit: enter your role and see your market percentile, annual gap, and 5-year NPV of underpayment. No signup needed.",
  },
}

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Am I Underpaid? Salary Audit Tool",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Instant salary percentile check — enter your role, industry, experience, and location to see if you're underpaid vs. the market, by how much, and what your 5-year NPV of the gap is.",
  url: "https://careerreturns.com/am-i-underpaid",
  featureList: [
    "Instant salary percentile ranking",
    "Annual underpayment gap in dollars",
    "5-year NPV of salary gap",
    "Shareable salary audit card",
    "Market benchmarks by industry, role, experience, location",
    "12 industries covered",
    "7 countries supported",
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
