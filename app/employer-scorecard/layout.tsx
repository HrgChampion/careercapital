import { pageAlternates } from "@/lib/seo"
import SiteFooter from "@/components/SiteFooter"
import Guide from "./guide"

export const metadata = {
  title: "Employer Rankings 2026: Return-to-Work Friendly Companies, Scored",
  description:
    "Compare 12 employers on returnship conversion rate, salary recovery, promotion speed and flexibility. A scorecard for professionals returning to work.",
  alternates: pageAlternates("https://careerreturns.com/employer-scorecard"),
  openGraph: {
    title: "Employer Rankings 2026: Return-to-Work Friendly Companies, Scored",
    description:
      "Employers scored on returnship conversion rate, salary recovery, promotion velocity, and program quality — not marketing.",
    url: "https://careerreturns.com/employer-scorecard",
    siteName: "CareerReturns",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Employer Rankings 2026: Return-to-Work Friendly Companies",
    description:
      "Employers scored on returnship conversion, salary recovery, and promotion velocity. Free rankings.",
  },
}

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Career Return Employer Scorecard",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Free rankings of return-to-work friendly employers, scored on returnship conversion rate, salary recovery, promotion velocity, and program quality.",
  "url": "https://careerreturns.com/employer-scorecard",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      {children}
      <Guide />
      <SiteFooter />
    </>
  )
}
