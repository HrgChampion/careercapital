import type { Metadata } from "next"
import { pageAlternates } from "@/lib/seo"

export const metadata: Metadata = {
  title: "MBA vs Bootcamp vs Master's ROI Calculator — Compare NPV Side-by-Side (Free)",
  description:
    "Which has higher NPV: $130K MBA, $15K bootcamp, or $50K Master's? Enter your salary and compare DCF-based ROI for up to 4 education paths simultaneously →",
  keywords: [
    "MBA vs bootcamp ROI",
    "MBA vs coding bootcamp calculator",
    "education ROI comparison",
    "MBA vs Masters ROI",
    "bootcamp vs degree ROI",
    "certificate vs degree ROI",
    "which education investment is worth it",
    "education program comparison calculator",
    "best education investment ROI",
    "masters vs MBA financial comparison",
  ],
  alternates: pageAlternates("https://careerreturns.com/education-comparison-calculator"),
  openGraph: {
    title: "MBA vs Bootcamp vs Certificate: Which Wins? [Free Calculator]",
    description:
      "Put a $160k MBA, $15k bootcamp, and $300 certificate on the same DCF framework. The answer surprises most people. Free side-by-side comparison — no email required.",
    url: "https://careerreturns.com/education-comparison-calculator",
    type: "website",
    siteName: "CareerReturns",
  },
  twitter: {
    card: "summary_large_image",
    site: "@careerreturns",
    title: "MBA vs Bootcamp vs Certificate — Which Wins on ROI?",
    description:
      "Same DCF framework. Same discount rate. The financial winner is rarely what you expect. Free calculator.",
  },
}

const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Education Program Comparison Calculator",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description":
    "Compare up to 4 education programs — MBA, Masters, bootcamp, certificate — on the same DCF model. NPV, IRR, break-even, and A-F grade for each. Preset bundles: MBA vs Bootcamp, MBA vs MS Data Science, Certificate vs Nothing.",
  "url": "https://careerreturns.com/education-comparison-calculator",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }} />
      {children}

    </>
  )
}
