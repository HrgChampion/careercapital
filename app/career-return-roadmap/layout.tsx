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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      {children}

    </>
  )
}
