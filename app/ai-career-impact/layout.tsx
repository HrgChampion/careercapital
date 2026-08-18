import type { Metadata } from "next"
import { pageAlternates } from "@/lib/seo"

export const metadata: Metadata = {
  title: "AI Career Impact Calculator 2026 — What Will AI Cost Your Salary?",
  description:
    "Calculate your personal AI displacement risk in dollars — not just a percentage. See your expected income loss by 2031 and the cheapest reskilling hedge that changes the outcome.",
  keywords: [
    "ai career impact calculator",
    "will ai take my job calculator",
    "ai job displacement calculator",
    "ai impact on salary",
    "ai job risk calculator",
    "ai displacement risk by job",
    "will ai replace my job",
    "ai proof your career",
    "ai career risk score",
    "how much will ai affect my salary",
    "ai reskilling roi calculator",
    "ai career hedge calculator",
    "protect job from ai calculator",
    "ai automation career impact",
  ],
  alternates: pageAlternates("https://careerreturns.com/ai-career-impact"),
  openGraph: {
    title: "What Will AI Cost Your Salary? Calculate Your Personal AI Displacement Risk.",
    description:
      "Not just a probability — a dollar figure. See your expected income loss by 2031 and the exact reskilling hedge that reduces it the most. Free calculator.",
    url: "https://careerreturns.com/ai-career-impact",
    type: "website",
    siteName: "CareerReturns",
  },
  twitter: {
    card: "summary_large_image",
    site: "@careerreturns",
    title: "AI Displacement Risk — In Dollars, Not Percentages",
    description:
      "Your role has a 52% AI displacement risk. Here's what that means in actual salary impact — and the cheapest hedge that changes the outcome.",
  },
}

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AI Career Impact Calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Translates AI displacement probability by role into a personal expected income loss over 5 years, then ranks reskilling hedges by NPV to find the cheapest way to reduce your AI risk.",
  url: "https://careerreturns.com/ai-career-impact",
  featureList: [
    "AI displacement risk by role and industry",
    "Expected salary loss in dollars (5-year horizon)",
    "8 reskilling hedges ranked by NPV",
    "Hedge ROI calculation",
    "Displacement probability before and after hedge",
    "Data from Goldman Sachs, McKinsey, WEF Future of Jobs 2025",
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
