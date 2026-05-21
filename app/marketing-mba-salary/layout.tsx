export default function MarketingMbaSalaryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the average marketing MBA salary?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The average post-MBA salary for marketing roles in 2026 is $130K–$155K for brand management, $125K–$145K for digital marketing, and $140K–$165K for product marketing. These figures are for M7 and T15 graduates. Total compensation (including bonus) is typically 15–25% above base. Senior marketing roles at 5 years post-MBA reach $180K–$280K. CMO-track executives with 10–15 years post-MBA experience earn $250K–$500K+.",
        },
      },
      {
        "@type": "Question",
        "name": "Is a marketing MBA worth it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A marketing MBA is worth it under specific conditions: (1) You want to enter brand management at P&G, Unilever, J&J, or similar CPG companies — these firms recruit almost exclusively from MBA programs for their brand manager pipeline; (2) You want to transition from a non-marketing background into product marketing at a tech company; (3) You want to accelerate to VP Marketing or CMO faster than the non-MBA path allows. The break-even is 5–8 years for marketing destinations at sticker price, which is longer than consulting (4.2 years) or banking (4.5 years). Marketing-focused MBAs are most financially justified with scholarship aid.",
        },
      },
      {
        "@type": "Question",
        "name": "Which MBA programs are best for marketing careers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Top MBA programs for marketing in 2026: Kellogg (Northwestern) is the undisputed leader — 25–30% of the class enters marketing, with the strongest CPG and brand management pipeline in the world. Wharton is strong for brand management and strategy. Booth and HBS place well into tech product marketing and strategy consulting with a marketing focus. For digital marketing and tech, Haas (Berkeley) and MIT Sloan produce strong outcomes. For CPG specifically, Kellogg > Ross (Michigan) > Fuqua (Duke) > McCombs (UT Austin).",
        },
      },
      {
        "@type": "Question",
        "name": "What is the salary for an MBA in digital marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MBA graduates entering digital marketing in 2026 earn $115K–$145K base salary at year 1, depending on company size and location. Tech companies (Google, Meta, Amazon) pay $130K–$155K base plus significant equity. CPG and traditional brands pay $110K–$135K. After 5 years, digital marketing managers with an MBA earn $180K–$250K total comp at tech companies. The digital marketing track at MBA programs has grown significantly — roles now include growth marketing, performance marketing, and marketing analytics, with the analytics-heavy roles commanding 15–20% premiums over brand-focused roles.",
        },
      },
      {
        "@type": "Question",
        "name": "How much does a marketing MBA salary increase vs. no MBA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An MBA from a T15 program increases marketing salaries by 40–70% vs. the non-MBA career path at year 5. Without an MBA, a marketing professional with 8–10 years of experience typically earns $90K–$130K as a Senior Manager. An equivalent MBA graduate at year 5 post-graduation earns $150K–$220K in a Director or VP Marketing role. The MBA accelerates career progression by approximately 3–5 years in the CPG and tech marketing tracks. The acceleration effect is largest in companies with formal MBA recruiting pipelines (P&G, Unilever, Google, Amazon).",
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
