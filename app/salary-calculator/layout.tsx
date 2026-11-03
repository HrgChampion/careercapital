import type { Metadata } from "next"
import { breadcrumbSchema, pageAlternates } from "@/lib/seo"
import SiteFooter from "@/components/SiteFooter"
import Guide from "./guide"

const URL = "https://careerreturns.com/salary-calculator"

export const metadata: Metadata = {
  title: "Salary Calculator 2026: Hourly to Annual + Take-Home Pay (Free)",
  description:
    "Convert hourly, weekly, biweekly, monthly and annual pay, and see take-home pay after 2026 federal, FICA and state tax. Instant results, with no signup or email.",
  keywords: [
    "salary calculator",
    "calculate salary",
    "calculate my paycheck",
    "paycheck calculator",
    "wage calculator",
    "hourly to salary calculator",
    "salary to hourly calculator",
    "take home pay calculator",
    "calculate wage",
  ],
  alternates: pageAlternates(URL),
  openGraph: {
    title: "Salary & Paycheck Calculator 2026: Hourly to Annual + Take-Home",
    description:
      "Every pay period side by side, gross and after tax. Official 2026 IRS and SSA figures, all 50 states. Free, instant, no signup.",
    url: URL,
    siteName: "CareerReturns",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salary & Paycheck Calculator 2026",
    description: "Hourly ↔ annual conversion plus take-home pay after 2026 taxes. Free, instant, no signup.",
  },
}

const appSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Salary & Paycheck Calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Free salary calculator that converts pay between hourly, daily, weekly, biweekly, semi-monthly, monthly and annual, and estimates take-home pay after 2026 federal income tax, FICA and state tax.",
  url: URL,
  featureList: [
    "Hourly, daily, weekly, biweekly, semi-monthly, monthly and annual conversion",
    "2026 federal income tax brackets and standard deduction",
    "Social Security and Medicare, including the wage base and Additional Medicare Tax",
    "State income tax for all 50 states and DC",
    "Pre-tax 401(k) contributions",
    "Shareable result links",
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([{ name: "Salary Calculator", url: URL }])),
        }}
      />
      {children}
      <Guide />
      <SiteFooter />
    </>
  )
}
