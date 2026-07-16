import { pageAlternates } from "@/lib/seo"
import SiteFooter from "@/components/SiteFooter"

export const metadata = {
  title: "Salary Negotiation Simulator: Practice a Raise, See the 10-Year Payoff",
  description:
    "Practice the negotiation before it matters. Every choice shows its 10-year NPV impact in real time — a single successful ask is often worth $100K+. Free simulator.",
  alternates: pageAlternates("https://careerreturns.com/salary-negotiation-simulator"),
  openGraph: {
    title: "Salary Negotiation Simulator: Practice a Raise, See the 10-Year Payoff",
    description:
      "Practice the conversation before it matters. Each choice shows the 10-year NPV impact in real time — because negotiating is just applied financial modeling.",
    url: "https://careerreturns.com/salary-negotiation-simulator",
    siteName: "CareerReturns",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salary Negotiation Simulator: See the 10-Year Payoff",
    description:
      "Practice a salary negotiation and watch the 10-year NPV impact of every choice in real time. Free.",
  },
}

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Salary Negotiation Simulator",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Free interactive simulator for practicing salary negotiation, showing the 10-year net present value impact of each negotiation choice in real time.",
  "url": "https://careerreturns.com/salary-negotiation-simulator",
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
