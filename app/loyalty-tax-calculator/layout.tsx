import type { Metadata } from "next"
import { pageAlternates } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Loyalty Tax Calculator 2026 — How Much Did Staying at Your Company Cost You?",
  description:
    "Job-switchers earn 50%+ more over a decade than loyal employees. Calculate your loyalty tax: the exact dollar amount your company tenure has cost you vs. switching to market rate.",
  keywords: [
    "loyalty tax calculator",
    "job hopping salary calculator",
    "cost of staying at same company",
    "loyalty tax",
    "should i job hop calculator",
    "job hopping vs staying salary",
    "salary compression calculator",
    "internal raise vs external raise",
    "cost of company loyalty",
    "job switching salary calculator",
    "job hopping raise calculator",
    "loyalty penalty salary",
    "how much does job hopping pay",
    "staying at same company salary loss",
  ],
  alternates: pageAlternates("https://careerreturns.com/loyalty-tax-calculator"),
  openGraph: {
    title: "Your 5-Year Loyalty Tax: $42,000. Calculate Yours.",
    description:
      "The average loyal employee is paid 18% less than a new hire doing the same job. Enter your tenure and see exactly what your company loyalty has cost you.",
    url: "https://careerreturns.com/loyalty-tax-calculator",
    type: "website",
    siteName: "CareerReturns",
  },
  twitter: {
    card: "summary_large_image",
    site: "@careerreturns",
    title: "How Much Has Your Company Loyalty Cost You? Calculate Your Loyalty Tax.",
    description:
      "Job-switchers earn 50%+ more over a decade. Enter your salary and tenure — see your personal loyalty tax in dollars. Free calculator.",
  },
}

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Loyalty Tax Calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Calculate the compounding salary gap between staying at one company vs. switching to market rate. Shows annual loyalty tax, cumulative total, NPV, and the optimal year you should have switched.",
  url: "https://careerreturns.com/loyalty-tax-calculator",
  featureList: [
    "Year-by-year loyalty tax breakdown",
    "Cumulative salary compression total",
    "NPV of historical underpayment",
    "Switch-now NPV gain",
    "Optimal switch year analysis",
    "Shareable loyalty tax statement",
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a loyalty tax?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The loyalty tax is the cumulative salary gap between what a long-tenured employee earns and what a new external hire in the same role earns. Research from ADP and the Atlanta Federal Reserve shows that external hires earn 18% more than internal promotions for the same role, and job-switchers see annual raises of 5-7% vs 2-3% for those who stay. Over a 5-year period, the compounded difference typically amounts to $30,000-$80,000.",
      },
    },
    {
      "@type": "Question",
      name: "Is job hopping actually better for your salary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, statistically. The Atlanta Fed Wage Tracker consistently shows job-switchers earning approximately 5% more annually than job-stayers over rolling 12-month periods. Over a 10-year career, this compounds to a 50-80% salary advantage. The trade-off is the loss of institutional knowledge, tenure-based benefits (vesting schedules, PTO accrual), and role stability.",
      },
    },
    {
      "@type": "Question",
      name: "When is the best time to switch jobs for maximum salary gain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The loyalty tax accelerates around Year 3-4 at most companies, when internal promotion rates flatten and external hiring budgets reset annually. The marginal tax tends to increase fastest in Years 2-5, then plateau. This calculator shows your year-by-year tax increment to identify the inflection point specific to your raise history.",
      },
    },
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
