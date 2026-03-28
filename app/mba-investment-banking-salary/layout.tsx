export default function MbaInvestmentBankingSalaryLayout({
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
        "name": "What is the average post-MBA investment banking salary in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Post-MBA investment banking associates at bulge bracket banks earn $190K–$210K base salary plus $75K–$150K year-end bonus in 2026, for total year-one compensation of $265K–$360K. Goldman Sachs leads at $360K all-in ($210K base + $150K bonus). Elite boutiques like Lazard, Evercore, and PJT pay $335K ($205K base + $130K bonus). Regional and boutique banks pay $170K–$185K base with proportionally smaller bonuses ($240K–$270K total).",
        },
      },
      {
        "@type": "Question",
        "name": "Is an MBA necessary to work in investment banking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An MBA is not required for investment banking, but it is the standard path to the Associate level for career changers. Analysts are typically hired directly from undergraduate programs. Candidates who did not start as analysts and want to enter IB at the Associate level almost always do so through an MBA program at a target school (HBS, Wharton, Booth, Columbia, Stern). Without an MBA, lateral Associate hires are rare and typically require prior finance experience at a related firm.",
        },
      },
      {
        "@type": "Question",
        "name": "What is the career progression and salary growth for an MBA in investment banking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Post-MBA IB career progression: Associate ($265K–$360K, Year 1–2), Vice President ($350K–$600K, Year 3–4), Director/Executive Director ($500K–$900K, Year 5–7), Managing Director ($800K–$2M+, Year 8+). Promotion timelines are relatively fixed at most banks — 2–3 years per level through VP, then increasingly performance-dependent. Bonus becomes fully discretionary and deal-volume dependent at the VP level and above.",
        },
      },
      {
        "@type": "Question",
        "name": "Does an MBA from investment banking give a positive return on investment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — investment banking is one of the strongest MBA ROI destinations. The post-MBA salary delta versus the pre-MBA baseline generates IRR of 21–23% without scholarship aid and 38–41% with full scholarship at M7 programs. Break-even for MBB and IB destinations is typically 4–5 years. However, the 80–100 hour weekly work schedule means the effective hourly rate advantage versus alternative careers narrows significantly. Candidates should factor work-life sustainability into the financial analysis.",
        },
      },
      {
        "@type": "Question",
        "name": "Which MBA programs place best into investment banking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The top MBA programs for investment banking placement in 2026 are Wharton, Columbia Business School, Harvard Business School, Booth, Stern, and Kellogg. Wharton and Columbia consistently place 30–40% of their classes into finance roles. Goldman Sachs, JPMorgan, Morgan Stanley, and elite boutiques recruit on-campus exclusively at these target schools. Regional bank placement is broader and accessible from T25 programs.",
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
