import type { Metadata } from "next"
import { pageAlternates } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Salary Benchmark Calculator 2026 — Am I Underpaid?",
  description:
    "Career returners accept salaries 8–15% below market on average. Find your market percentile, calculate how much you're leaving on the table per year, and get the NPV of asking for a raise now vs. switching jobs.",
  keywords: [
    "am I underpaid calculator",
    "salary benchmark calculator 2026",
    "career break salary penalty",
    "career gap salary impact",
    "negotiation ROI calculator",
    "career returner underpaid",
    "how much am I underpaid",
    "salary after career break",
    "career gap salary discount",
    "salary negotiation calculator",
    "market salary comparison tool",
    "compensation recovery after break",
    "underpaid after maternity leave",
    "salary benchmark by industry 2026",
  ],
  alternates: pageAlternates("https://careerreturns.com/salary-benchmark-calculator"),
  openGraph: {
    title: "Career Returners Accept 8–15% Less Than Market. Are You One of Them?",
    description:
      "Free calculator: find your salary percentile, see how much you're leaving on the table per year (and over 10 years), then get the NPV of asking for a raise now vs. switching jobs.",
    url: "https://careerreturns.com/salary-benchmark-calculator",
    type: "website",
    siteName: "CareerReturns",
  },
  twitter: {
    card: "summary_large_image",
    site: "@careerreturns",
    title: "Are You Underpaid After Your Career Break? Find Out in 60 Seconds.",
    description:
      "Find your salary percentile, calculate the 10-year NPV of your underpayment, and get a negotiation action plan. Free.",
  },
}

const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Compensation Recovery Tracker",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description":
    "Compare your current salary against market benchmarks (p25/p50/p75/p90) by industry, role, experience, location, and company size. Calculate the 10-year NPV of any underpayment and model 3 negotiation scenarios.",
  "url": "https://careerreturns.com/salary-benchmark-calculator",
  "featureList": [
    "Market benchmarks by industry, role, experience, location",
    "Salary percentile ranking",
    "Annual and 10-year NPV of underpayment",
    "Career gap salary penalty estimate (4%/year)",
    "3 negotiation scenarios with NPV",
    "Ask now vs. wait vs. switch comparison",
    "6 industries covered",
    "4 location tiers",
    "3 company sizes",
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
