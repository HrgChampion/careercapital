import { pageAlternates } from "@/lib/seo"

export const metadata = {
  title: "MBA Loan Repayment Calculator 2026: Payment & Payoff",
  description:
    "Free MBA loan repayment calculator. Enter loan amount, interest rate, and term to see monthly payment, total interest paid, payoff timeline, and salary-to-debt ratio. Takes 30 seconds →",
  alternates: pageAlternates("https://careerreturns.com/mba-loan-repayment-calculator"),
}

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "MBA Loan Repayment Calculator",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description":
    "Free MBA loan repayment calculator. Computes monthly payment, total interest, payoff timeline, and debt-to-income ratio for any MBA loan amount, interest rate, and term.",
  "url": "https://careerreturns.com/mba-loan-repayment-calculator",
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
