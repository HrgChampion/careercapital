import type { Metadata } from "next"
import { pageAlternates } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Reskilling ROI Calculator (2026) — Is a Bootcamp or Certificate Worth It?",
  description:
    "Free calculator: is a $15k bootcamp worth it vs. a $300 certificate? Get NPV, IRR, and break-even in 60 seconds. Compare 9 programs including coding bootcamps, AWS, PMP, and Google certs.",
  keywords: [
    "reskilling ROI calculator",
    "coding bootcamp worth it calculator",
    "is a bootcamp worth it",
    "bootcamp ROI 2026",
    "certificate vs bootcamp",
    "Google certificate worth it",
    "AWS certification salary ROI",
    "career change ROI calculator",
    "online certificate ROI",
    "upskilling calculator",
  ],
  alternates: pageAlternates("https://careerreturns.com/reskilling-roi-calculator"),
  openGraph: {
    title: "Is Your $15k Bootcamp Worth It? Calculate the Exact ROI",
    description:
      "Free DCF calculator: NPV, IRR, and break-even for any reskilling program. Most bootcamp grads break even in under 3 years — but some never do. Find out which category yours falls in.",
    url: "https://careerreturns.com/reskilling-roi-calculator",
    type: "website",
    siteName: "CareerReturns",
  },
  twitter: {
    card: "summary_large_image",
    site: "@careerreturns",
    title: "Is Your Bootcamp Worth It? Free ROI Calculator",
    description:
      "NPV, IRR, break-even for coding bootcamps, certs & Masters. 9 preset programs. Takes 60 seconds.",
  },
}

const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Reskilling ROI Calculator",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description":
    "Calculate the NPV, IRR, and break-even of coding bootcamps, Google certificates, AWS certifications, and part-time Masters degrees. Compare 9 preset programs with full DCF modeling.",
  "url": "https://careerreturns.com/reskilling-roi-calculator",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is a coding bootcamp worth it financially?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A $15,000 full-stack bootcamp targeting a $95k software engineer role has a 10-year NPV of approximately $180,000–$240,000 at a 6% discount rate, with a break-even period of 1.5–2.5 years. The ROI is substantially higher than most MBA programs on a cost-per-dollar-returned basis.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the ROI of a Google certificate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Google Data Analytics Certificate ($300, ~6 months) typically produces an annual salary impact of $10,000–$15,000, giving a 10-year NPV of $80,000–$120,000 at a 6% hurdle rate. It is one of the highest-ROI reskilling investments available.",
      },
    },
    {
      "@type": "Question",
      "name": "Bootcamp or part-time Masters — which has better ROI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bootcamps have shorter payback (12–18 months vs 3–5 years for an MS) and lower total investment. Part-time Masters produce larger long-term salary deltas for senior/management roles. If you need near-term income recovery, a bootcamp wins on NPV. If you're targeting senior technical or research roles, an MS may produce higher lifetime earnings.",
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
