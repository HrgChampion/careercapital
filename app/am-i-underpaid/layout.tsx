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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I know if I am underpaid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Compare your salary to the p50 (median) for your exact role, industry, experience level, and location. If you're below the p50, you're earning less than half your peers in the same position. Below the p25 means you're in the bottom quarter. This tool does that comparison instantly using 2026 compensation benchmark data from BLS, Glassdoor, and Levels.fyi.",
      },
    },
    {
      "@type": "Question",
      name: "What is the average salary gap for underpaid workers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Research from the Economic Policy Institute and LinkedIn's Workforce Report shows the median underpaid worker earns approximately 12-18% below their market rate. For a $90,000 salary, that translates to $10,800–$16,200 per year left on the table. Over 5 years at a 6% discount rate, the NPV of that gap is $47,000–$70,000.",
      },
    },
    {
      "@type": "Question",
      name: "What should I do if I find out I'm underpaid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Three paths: (1) Ask for a raise now — prepare with market data and schedule a conversation with your manager. Internal raises typically yield 5-10%. (2) Get an outside offer — this is the most reliable way to get a 15-25% jump. Even using it as leverage in a counter-offer conversation works. (3) Switch jobs — job switchers earn an average of 17% more than those who stay, according to the Federal Reserve Bank of Atlanta's Wage Tracker.",
      },
    },
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
