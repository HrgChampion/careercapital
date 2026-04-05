import type { Metadata } from "next"
import { pageAlternates } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Career Return Roadmap: Your Personalized 90-Day Plan (Free)",
  description:
    "Answer 6 questions. Get a personalized 90-day career return plan with weekly tasks, the right programs, and salary targets. Built for professionals returning after a career break.",
  keywords: [
    "career return roadmap",
    "career break return plan",
    "how to return to work after career break",
    "returnship roadmap",
    "career returner plan",
    "90 day career return plan",
    "returning to work plan",
    "career break re-entry guide",
    "career comeback plan",
    "return to work roadmap",
  ],
  alternates: pageAlternates("https://careerreturns.com/career-return-roadmap"),
  openGraph: {
    title: "Career Return Roadmap: Your Personalized 90-Day Plan",
    description:
      "6 questions. Personalized 90-day plan. Weekly tasks linked to free tools. Built for career returners who want a clear path, not vague advice.",
    url: "https://careerreturns.com/career-return-roadmap",
    type: "website",
    siteName: "CareerReturns",
  },
  twitter: {
    card: "summary_large_image",
    site: "@careerreturns",
    title: "Career Return Roadmap — Your Personalized 90-Day Plan",
    description:
      "6 questions. Personalized 90-day plan. Every action links to a free calculator. Takes 2 minutes.",
  },
}

const appSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Career Return Roadmap Generator",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description":
    "A personalized career return roadmap generator for professionals returning after a career break. Answer 6 questions to receive a 5-phase, 90-day action plan tailored to your gap length, industry, and availability.",
  "url": "https://careerreturns.com/career-return-roadmap",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does it take to return to work after a career break?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The average career returner takes 3–12 months to re-enter the workforce, depending on gap length, industry, and approach. Professionals with gaps under 2 years typically re-enter within 3–6 months with a focused strategy. Gaps of 2–4 years typically require 6–9 months. Gaps of 4+ years benefit most from structured programs like returnships, which provide a credentialed re-entry path in 10–24 weeks.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the best strategy for returning to work after a career break?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most effective career return strategies follow a 5-phase approach: (1) Baseline assessment — benchmark your current market salary to understand the gap; (2) Skills gap analysis — identify which skills have depreciated and quantify the cost; (3) Path selection — choose between direct re-entry, returnship program, or reskilling; (4) Active application — apply to returnship programs or direct roles with a return-focused narrative; (5) Offer negotiation — use salary benchmark data to negotiate at or above market, not below.",
      },
    },
    {
      "@type": "Question",
      "name": "Are returnship programs better than applying directly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Returnship programs are financially superior to direct re-entry for most gaps of 2+ years. Programs at Amazon (90% conversion), Goldman Sachs (75%), and McKinsey (80%) offer structured re-entry with higher success probability than cold applications. For gaps under 1 year, direct re-entry with a strong narrative often outperforms returnship on speed. The right path depends on your gap length, industry, and target company.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I explain a career break in an interview?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Frame your career break as a deliberate pause, not a failure. Use the PAR format: Problem (what prompted the break — caregiving, health, relocation, education), Action (what you did during the break — any bridge activities, courses, freelance work, volunteering), Return (what you've done to prepare for re-entry — specific steps, tools used, skills updated). Keep the explanation to 2–3 sentences and pivot immediately to your value proposition for the role.",
      },
    },
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  )
}
