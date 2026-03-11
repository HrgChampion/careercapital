import type { Metadata } from "next"
import { pageAlternates } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Career Gap Recovery Calculator (2026) — Which Re-entry Path Earns You Most?",
  description:
    "A 2-year career break costs $170,000+ in foregone earnings. Free calculator: compare direct re-entry vs returnship vs reskilling to find which path recovers your salary fastest. DCF-based.",
  keywords: [
    "career gap recovery calculator",
    "career break earnings loss calculator",
    "returning to work salary calculator",
    "career break financial impact",
    "career returner salary recovery",
    "re-entry path comparison",
    "returnship vs direct re-entry",
    "career gap salary penalty calculator",
    "how much does a career break cost",
    "return to work financial planning",
  ],
  alternates: pageAlternates("https://careerreturns.com/career-gap-calculator"),
  openGraph: {
    title: "Your 2-Year Career Break Cost $170,000. Here's How to Get It Back.",
    description:
      "Free calculator: model which re-entry path — returnship, direct, or reskilling — recovers your lifetime earnings fastest. The only DCF-based career gap recovery tool available.",
    url: "https://careerreturns.com/career-gap-calculator",
    type: "website",
    siteName: "CareerReturns",
  },
  twitter: {
    card: "summary_large_image",
    site: "@careerreturns",
    title: "Career Gap Recovery Calculator — Which Path Gets You Back Fastest?",
    description:
      "A 2-year break costs $170k+. Model 3 re-entry paths with real DCF math. Free — takes 90 seconds.",
  },
}

const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Career Gap Recovery Calculator",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description":
    "Quantify the financial cost of a career break and compare 3 re-entry paths — direct re-entry, returnship, and reskilling — using probability-weighted DCF analysis to find which recovers earnings fastest.",
  "url": "https://careerreturns.com/career-gap-calculator",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a 2-year career break cost in earnings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A 2-year career break on a $90,000 salary costs approximately $187,000–$210,000 in foregone earnings (including missed raises). The NPV of this loss, discounted at 6%, is $155,000–$175,000. Long-term salary trajectory impact can add another $50,000–$100,000 over a decade.",
      },
    },
    {
      "@type": "Question",
      "name": "Is a returnship better than direct re-entry after a career break?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Returnships beat direct re-entry financially when their conversion rate exceeds approximately 55-65%. Amazon Returnship (90% conversion) and Goldman Sachs Returnship (85%) clear this threshold easily, making them financially superior to direct re-entry for most 2+ year gaps.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the salary penalty for a career break?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Research estimates a salary penalty of 3–7% per year of career break. A 2-year break typically results in a 6–14% discount vs. peers at re-entry. The penalty erodes over 2–4 years as performance proves out.",
      },
    },
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  )
}
