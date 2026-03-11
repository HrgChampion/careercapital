import type { Metadata } from "next"
import { pageAlternates } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Am I Underpaid After My Career Break? Free Salary Benchmark Calculator (2026)",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a career break affect your salary?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Research by Harvard economist Claudia Goldin and LinkedIn's Economic Graph estimates a salary penalty of 3–7% per year of career break, with the penalty declining over 2–4 years as performance proves out. A 2-year break typically results in a 6–14% salary discount vs. peers at re-entry. In fast-moving fields like tech, the penalty can be higher (7–10% per year) due to skills obsolescence.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the NPV of being underpaid by $15,000 per year?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Being underpaid by $15,000/year has a 10-year NPV of approximately $110,000 at a 6% discount rate (assuming 3% annual raise). Over a 20-year career, the compounded lifetime earnings gap reaches $330,000–$450,000 including the effect of salary-based bonuses, 401k matches, and future salary negotiations anchored to a lower base.",
      },
    },
    {
      "@type": "Question",
      "name": "Should I ask for a raise or switch jobs to recover salary after a career break?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Switching jobs typically produces a 15–25% salary increase vs. 5–10% for internal raises. However, job switches come with a 2–4 month search period (zero income delta) and the loss of institutional knowledge and tenure. The NPV crossover depends on your underpayment amount: if you're underpaid by more than $20,000/year, switching typically has higher NPV within 3–4 years.",
      },
    },
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
