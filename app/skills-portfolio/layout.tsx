import { pageAlternates } from "@/lib/seo"
import SiteFooter from "@/components/SiteFooter"

export const metadata = {
  title: "Skills Portfolio Builder: Value Your Skills Like Financial Assets",
  description:
    "Treat your skillset like an investment portfolio — each skill has a market value, demand, and growth trajectory. Find gaps, concentration risks, and best bets. Free tool.",
  alternates: pageAlternates("https://careerreturns.com/skills-portfolio"),
  openGraph: {
    title: "Skills Portfolio Builder: Value Your Skills Like Financial Assets",
    description:
      "Each skill has a current value, market demand, and growth trajectory. Find your gaps, concentration risks, and best bets.",
    url: "https://careerreturns.com/skills-portfolio",
    siteName: "CareerReturns",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skills Portfolio Builder: Value Your Skills Like Assets",
    description:
      "Map your skills like an investment portfolio — value, demand, growth, gaps, and concentration risk. Free.",
  },
}

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Skills Portfolio Builder",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Free tool that maps a professional skillset like an investment portfolio, scoring each skill on market value, demand, and growth trajectory.",
  "url": "https://careerreturns.com/skills-portfolio",
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
