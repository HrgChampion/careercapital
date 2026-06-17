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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which jobs are most at risk from AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "According to Goldman Sachs and McKinsey research, the roles with the highest AI displacement risk include: administrative assistants (76% task automation), customer service reps (82%), paralegal/legal assistants (71%), content writers (74%), and accountants (67%). Lower-risk roles include nurses (10%), lawyers (25%), and management consultants (20%), where judgment, empathy, and relationship skills are harder to automate.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best skill to learn to protect yourself from AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The highest-ROI hedge for most roles is AI tools proficiency — learning to use ChatGPT, Claude, and GitHub Copilot effectively often costs nothing and adds 8-12% salary uplift while reducing displacement risk by 20%+ within 1-2 months. For technical roles, Python and AWS certifications offer stronger long-term protection. The key principle: learn to direct AI, not compete with it.",
      },
    },
    {
      "@type": "Question",
      name: "How was the AI displacement risk data calculated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Displacement probabilities are derived from Goldman Sachs' 2023 report on AI's economic impact (300M jobs at risk globally), McKinsey's 2024 analysis of generative AI task automation, and the WEF Future of Jobs 2025 report. The methodology counts the fraction of job tasks that are automatable by current large language models and estimates the displacement probability based on what percentage of the role can be replaced end-to-end.",
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
