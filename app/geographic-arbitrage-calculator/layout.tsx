import type { Metadata } from "next"
import { pageAlternates } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Geographic Arbitrage Calculator 2026 — Remote Work Wealth Multiplier",
  description:
    "Earn a San Francisco salary, live in Lisbon. See your exact wealth multiplier, monthly surplus, and years to financial independence. Compare any two cities instantly.",
  keywords: [
    "geographic arbitrage calculator",
    "remote work cost of living calculator",
    "digital nomad salary calculator",
    "salary cost of living comparison",
    "remote work wealth calculator",
    "geographic arbitrage",
    "work remotely live abroad calculator",
    "cost of living salary calculator",
    "remote work purchasing power calculator",
    "fire calculator geographic arbitrage",
    "digital nomad financial independence calculator",
    "earn us salary live abroad",
    "remote salary purchasing power",
    "work from anywhere financial calculator",
  ],
  alternates: pageAlternates("https://careerreturns.com/geographic-arbitrage-calculator"),
  openGraph: {
    title: "What Is Your $180K SF Salary Worth in Lisbon? Calculate Your Wealth Multiplier.",
    description:
      "Earn a NYC salary, live in Medellín. See your exact purchasing power multiplier, monthly surplus, and FIRE timeline for any two cities. Free calculator.",
    url: "https://careerreturns.com/geographic-arbitrage-calculator",
    type: "website",
    siteName: "CareerReturns",
  },
  twitter: {
    card: "summary_large_image",
    site: "@careerreturns",
    title: "Geographic Arbitrage: What Is Your Remote Salary Really Worth Abroad?",
    description:
      "Moving from NYC to Lisbon gives you a 2.1× wealth multiplier — equivalent to earning $378K in New York. Calculate yours free.",
  },
}

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Geographic Arbitrage Calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Compare your purchasing power, monthly surplus, and FIRE timeline between any two cities. Calculates the wealth multiplier of earning a high-location salary while living in a lower cost-of-living location.",
  url: "https://careerreturns.com/geographic-arbitrage-calculator",
  featureList: [
    "27 cities across US, Europe, Asia, Americas",
    "Purchasing power multiplier calculation",
    "Monthly surplus comparison",
    "FIRE (financial independence) timeline",
    "5-year wealth accumulation projection",
    "Tax rate and cost of living data for 2026",
    "Shareable comparison card",
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is geographic arbitrage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Geographic arbitrage is the practice of earning income in a high-wage market (like San Francisco or New York) while living in a lower cost-of-living location (like Lisbon, Medellín, or Chiang Mai). Remote workers can maintain their salary while dramatically reducing their expenses, increasing their purchasing power and accelerating their path to financial independence.",
      },
    },
    {
      "@type": "Question",
      name: "How much can I save with geographic arbitrage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A $180,000 San Francisco salary translates to approximately $111,600 after federal and state taxes. In Lisbon, the same gross salary (taxed at Portugal's NHR regime at ~20%) yields $144,000 net, with a cost of living that is 58% lower. The result is a 2.1× wealth multiplier — a monthly surplus roughly 3× higher than in San Francisco, allowing financial independence years earlier.",
      },
    },
    {
      "@type": "Question",
      name: "What are the best cities for geographic arbitrage in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Top destinations for US remote workers in 2026 include Lisbon (Portugal), Medellín (Colombia), Chiang Mai (Thailand), Bali (Indonesia), Tallinn (Estonia), Prague (Czech Republic), and Mexico City. All offer low cost of living, digital nomad visas or residency programs, reliable internet, and strong expat communities. Dubai is notable for its 0% income tax.",
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
