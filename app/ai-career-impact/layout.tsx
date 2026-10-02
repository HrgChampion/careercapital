import type { Metadata } from "next"
import { pageAlternates } from "@/lib/seo"
import AiCareerImpactGuide from "./guide"

export const metadata: Metadata = {
  title: "AI Career Impact Calculator 2026 — What Will AI Cost Your Salary?",
  description:
    "Estimate AI displacement risk for 26 roles in dollars: expected 5-year income loss, plus eight reskilling options ranked by net present value.",
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
      "Not just a probability: a dollar figure. See your expected 5-year income loss from AI and which reskilling option offsets it best. Free calculator.",
    url: "https://careerreturns.com/ai-career-impact",
    type: "website",
    siteName: "CareerReturns",
  },
  twitter: {
    card: "summary_large_image",
    site: "@careerreturns",
    title: "AI Displacement Risk — In Dollars, Not Percentages",
    description:
      "Turn your role's AI displacement risk into an expected salary impact, and see which reskilling hedge offsets it best.",
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
    "Role estimates informed by Goldman Sachs, McKinsey and WEF Future of Jobs 2025 research",
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
      <AiCareerImpactGuide />
    </>
  )
}
