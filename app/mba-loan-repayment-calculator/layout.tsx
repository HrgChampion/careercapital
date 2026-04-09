import { pageAlternates } from "@/lib/seo"

export const metadata = {
  title: "MBA Loan Repayment Calculator 2026: Monthly Payment, Total Interest & Payoff Timeline",
  description:
    "Free MBA loan repayment calculator. Enter loan amount, interest rate, and term to see monthly payment, total interest paid, payoff timeline, and salary-to-debt ratio. Takes 30 seconds →",
  alternates: pageAlternates("https://careerreturns.com/mba-loan-repayment-calculator"),
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much are monthly MBA loan payments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Monthly MBA loan payments depend on your loan amount, interest rate, and repayment term. For a typical $120,000 MBA loan at 6.5% over 10 years, the monthly payment is approximately $1,362. Use this calculator to model your specific loan scenario — adjust the loan amount, rate, and term to see exact monthly payments instantly.",
      },
    },
    {
      "@type": "Question",
      name: "What is the total interest on a $150K MBA loan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A $150,000 MBA loan at 6.5% interest over 10 years accumulates approximately $55,000–$60,000 in total interest, bringing your total repayment to around $205,000–$210,000. Extending the term to 15 years reduces monthly payments but increases total interest to roughly $88,000. Use this MBA loan calculator to see exact interest totals for your specific loan.",
      },
    },
    {
      "@type": "Question",
      name: "How long to pay off MBA loans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most MBA borrowers choose 10-year standard repayment for federal loans. A 10-year term balances manageable monthly payments against minimizing total interest paid. Income-Driven Repayment (IDR) plans can extend terms to 20–25 years but significantly increase total interest. Private loan refinancing often offers 5–20 year terms. This calculator shows your exact payoff year for any term you select.",
      },
    },
    {
      "@type": "Question",
      name: "Should I refinance my MBA loans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Refinancing MBA loans makes sense when your credit score has improved post-graduation, your salary is established, and private rates are lower than your federal rate. However, refinancing federal loans into private loans permanently eliminates access to Income-Driven Repayment, Public Service Loan Forgiveness, and federal forbearance protections. Generally, refinance federal loans only if you have a stable high income and don't anticipate needing IDR or PSLF.",
      },
    },
    {
      "@type": "Question",
      name: "What salary do I need to afford MBA loan payments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A common benchmark is keeping your annual loan payments below 10–15% of gross income. For a $1,362/month payment ($16,344/year), you'd want a salary of at least $109,000–$163,000 to stay within that range. Most MBA graduates targeting consulting, finance, or tech roles earn $140,000–$200,000 post-graduation, which typically makes standard repayment manageable. Use the debt-to-income indicator in this calculator to check your specific ratio.",
      },
    },
  ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      {children}
    </>
  )
}
