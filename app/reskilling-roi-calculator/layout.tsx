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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }} />
      {children}

    </>
  )
}
