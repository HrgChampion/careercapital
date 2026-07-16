import { pageAlternates } from "@/lib/seo"
import SiteFooter from "@/components/SiteFooter"

export const metadata = {
  title: "Career Time Machine: What a Different Career Choice Was Worth",
  description:
    "Pick a past career decision and see the financial divergence between your actual path and the alternative — projected 10 years forward. Free tool, updated July 2026.",
  alternates: pageAlternates("https://careerreturns.com/career-time-machine"),
  openGraph: {
    title: "Career Time Machine: What a Different Career Choice Was Worth",
    description:
      "Select a past career decision and see the financial divergence between your actual trajectory and the alternative — from then to 10 years into the future.",
    url: "https://careerreturns.com/career-time-machine",
    siteName: "CareerReturns",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Time Machine: What a Different Choice Was Worth",
    description:
      "See the financial divergence between your actual career path and the road not taken. Free tool.",
  },
}

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Career Time Machine",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Free tool that models the financial divergence between a past career decision and its alternative, projected 10 years forward.",
  "url": "https://careerreturns.com/career-time-machine",
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
