import { pageAlternates } from "@/lib/seo"
import SiteFooter from "@/components/SiteFooter"
import CareerRoiScoreGuide from "./guide"

export const metadata = {
  title: "Career ROI Score: Grade Your Career Financial Health in 60 Seconds",
  description:
    "A 300–850 score for career financial health, built from pay vs. market, career gaps, skills fit, years of runway and savings rate. See the formula.",
  alternates: pageAlternates("https://careerreturns.com/career-roi-score"),
  openGraph: {
    title: "Career ROI Score: Grade Your Career Financial Health in 60 Seconds",
    description:
      "Your single composite score for career financial health — like a credit score, but for your human capital. Scored 300–850 across 5 dimensions.",
    url: "https://careerreturns.com/career-roi-score",
    siteName: "CareerReturns",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Career ROI Score: Grade Your Career Financial Health",
    description:
      "A 300–850 score for your career financial health, across 5 dimensions. Free tool.",
  },
}

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Career ROI Score",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Free tool that computes a 300–850 composite score for career financial health from salary vs. market, career continuity, skills alignment, career runway and savings rate.",
  "url": "https://careerreturns.com/career-roi-score",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      {children}
      <CareerRoiScoreGuide />
      <SiteFooter />
    </>
  )
}
