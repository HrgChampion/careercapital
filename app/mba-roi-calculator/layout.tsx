import { pageAlternates } from "@/lib/seo"

export const metadata = {
  title: "MBA ROI Calculator: Is an MBA Worth It? (Free NPV & IRR)",
  description:
    "Enter your salary, tuition and loan. Get your MBA's NPV, IRR and break-even year in 60 seconds. Free DCF model, no sign-up.",
  alternates: pageAlternates("https://careerreturns.com/mba-roi-calculator"),
  openGraph: {
    title: "MBA ROI Calculator: Is an MBA Worth It? (Free NPV & IRR)",
    description:
      "Enter your salary, tuition and loan. Get your MBA's NPV, IRR and break-even year in 60 seconds. Free DCF model, no sign-up.",
    url: "https://careerreturns.com/mba-roi-calculator",
    siteName: "CareerReturns",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MBA ROI Calculator: Is an MBA Worth It? (Free NPV & IRR)",
    description:
      "Calculate MBA ROI in 60 seconds. Full DCF model: NPV, IRR, break-even payback. Free for all programs.",
  },
}

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "MBA ROI Calculator",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Free MBA ROI calculator using Net Present Value (NPV), Internal Rate of Return (IRR), and break-even analysis.",
  "url": "https://careerreturns.com/mba-roi-calculator",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      {children}
    </>
  )
}
