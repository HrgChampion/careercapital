import { pageAlternates } from "@/lib/seo"
import SiteFooter from "@/components/SiteFooter"

export const metadata = {
  title: "Career Compounder: How Small Raises Compound Into $1M+ (Free Tool)",
  description:
    "See how a 5% raise or faster growth rate compounds into life-changing wealth over 20 years. Free interactive career compounding visualizer. Updated July 2026.",
  alternates: pageAlternates("https://careerreturns.com/career-compounder"),
  openGraph: {
    title: "Career Compounder: How Small Raises Compound Into $1M+ (Free Tool)",
    description:
      "See how a small salary increase or faster growth rate compounds into life-changing wealth over 20 years. The math is counterintuitive — see it visualized.",
    url: "https://careerreturns.com/career-compounder",
    siteName: "CareerReturns",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Compounder: How Small Raises Compound Into $1M+",
    description:
      "Visualize how a small raise or faster growth rate compounds over 20 years. Free interactive tool.",
  },
}

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Career Compounder",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Free tool that visualizes how small salary increases and growth rates compound into large lifetime earnings differences over 20 years.",
  "url": "https://careerreturns.com/career-compounder",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      {children}
      <SiteFooter />
    </>
  )
}
