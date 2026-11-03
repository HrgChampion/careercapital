import type { Metadata } from "next"
import { breadcrumbSchema, pageAlternates } from "@/lib/seo"
import SiteFooter from "@/components/SiteFooter"
import Guide from "./guide"

const URL = "https://careerreturns.com/raise-calculator"

export const metadata: Metadata = {
  title: "Raise Calculator 2026: New Salary, After-Tax & Inflation (Free)",
  description:
    "Calculate any raise by percentage or new salary. See new pay per hour, paycheck and month, what you keep after 2026 taxes, the real raise after inflation, and its 10-year value. No signup.",
  keywords: [
    "raise calculator",
    "salary raise calculator",
    "percentage raise calculator",
    "pay raise calculator",
    "5 percent raise calculator",
    "raise after taxes",
    "how much is a 3% raise",
  ],
  alternates: pageAlternates(URL),
  openGraph: {
    title: "Raise Calculator 2026: What Is Your Raise Really Worth?",
    description: "New salary, after-tax change, real raise after inflation and 10-year compounded value. Free and instant.",
    url: URL,
    siteName: "CareerReturns",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raise Calculator 2026",
    description: "What your raise is worth after tax, after inflation and over 10 years. Free, no signup.",
  },
}

const appSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Raise Calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Free raise calculator: new salary by percentage or amount, per-period pay, after-tax change using 2026 federal, FICA and state tax, real raise after inflation, and long-run compounded value.",
  url: URL,
  featureList: [
    "Raise by percentage or new salary",
    "Hourly, weekly, biweekly, monthly and annual change",
    "After-tax change with 2026 tax figures",
    "Real raise after inflation",
    "Compounded value over 1–40 years",
    "Shareable result link",
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Raise Calculator", url: URL }])) }}
      />
      {children}
      <Guide />
      <SiteFooter />
    </>
  )
}
