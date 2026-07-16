import { pageAlternates } from "@/lib/seo"
import SiteFooter from "@/components/SiteFooter"

export const metadata = {
  title: "Career ROI Score: Grade Your Career Financial Health in 60 Seconds",
  description:
    "Get a 300–850 composite score for your career financial health — like a credit score for your human capital. Scored across 5 dimensions. Free, updated July 2026.",
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
  "description": "Free tool that computes a 300–850 composite score for career financial health across salary trajectory, skills, and market positioning.",
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
      <SiteFooter />
    </>
  )
}
