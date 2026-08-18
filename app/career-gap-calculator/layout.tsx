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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }} />
      {children}

    </>
  )
}
