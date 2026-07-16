import { pageAlternates } from "@/lib/seo"
import SiteFooter from "@/components/SiteFooter"

export const metadata = {
  title: "MBA Myth Buster: 10 MBA ROI Beliefs vs. the 2026 Data",
  description:
    "10 common beliefs about MBA ROI, each tested against real salary and cost data. How many survive? Free interactive quiz, updated July 2026.",
  alternates: pageAlternates("https://careerreturns.com/mba-myth-buster"),
  openGraph: {
    title: "MBA Myth Buster: 10 MBA ROI Beliefs vs. the 2026 Data",
    description:
      "10 common beliefs about MBA ROI. How many are actually true? Each reveal is backed by real data.",
    url: "https://careerreturns.com/mba-myth-buster",
    siteName: "CareerReturns",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MBA Myth Buster: 10 MBA ROI Beliefs vs. the Data",
    description:
      "10 common MBA ROI beliefs tested against real salary and cost data. Free interactive quiz.",
  },
}

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "MBA Myth Buster",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Web",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Free interactive quiz that tests 10 common beliefs about MBA return on investment against real salary and cost data.",
  "url": "https://careerreturns.com/mba-myth-buster",
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
