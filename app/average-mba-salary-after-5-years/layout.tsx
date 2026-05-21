export default function AverageMbaSalaryAfter5YearsLayout({
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
        "name": "What is the average MBA salary after 5 years?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The average MBA salary after 5 years depends heavily on industry track. Management consulting (MBB): $250K–$400K total compensation (Engagement Manager / Principal level). Investment banking: $350K–$600K (Vice President level). Technology: $230K–$350K (Senior PM / Senior Engineer). Corporate / general management: $150K–$220K (Director level). Private equity: $400K–$700K. These figures are for M7 graduates — T15 graduates typically earn 10–20% less in equivalent roles. The single biggest variable at year 5 is whether you stayed in your initial industry or switched tracks.",
        },
      },
      {
        "@type": "Question",
        "name": "What is the average MBA salary after 10 years?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The average MBA salary after 10 years for M7 graduates: consulting $400K–$800K+ (Partner track), investment banking $800K–$2M+ (MD level), technology $300K–$600K+ (VP/Director level), private equity $700K–$2M+ (Partner/MD). HBS alumni surveys show a median total compensation of approximately $300K–$400K at the 10-year mark across all tracks combined. The top quartile of M7 graduates reaches $500K–$1M+ by year 10, primarily through consulting partnership, IB MD promotions, or startup equity.",
        },
      },
      {
        "@type": "Question",
        "name": "How much does an MBA increase your salary over 10 years?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A T15 MBA increases total 10-year earnings by $800K–$2M vs. the non-MBA counterfactual, depending on industry. The mechanism: the MBA accelerates career progression by 3–5 years versus non-MBA peers. A pre-MBA professional earning $100K typically reaches $150K without an MBA by year 5; an MBA graduate in consulting reaches $250K–$400K by the same year 5. The cumulative earnings delta over 10 years, net of MBA cost and opportunity cost, is approximately $600K–$1.5M for MBB/IB destinations and $200K–$500K for corporate tracks. This makes the MBA a positive-NPV investment for most M7 and T15 destinations.",
        },
      },
      {
        "@type": "Question",
        "name": "Which MBA program produces the highest salary after 5 years?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Stanford GSB produces the highest 5-year post-MBA salary outcomes, primarily due to its tech and venture capital placement pipeline — alumni at FAANG companies and high-growth startups with equity reach $400K–$800K+ by year 5. Harvard and Wharton follow closely for consulting and banking destinations. Booth produces the highest ROI (not absolute salary) at year 5 due to lower total cost. For pure 5-year compensation, the ranking is approximately: Stanford > Harvard/Wharton > Booth/MIT > Kellogg/Columbia for equivalent industry tracks.",
        },
      },
      {
        "@type": "Question",
        "name": "What is the average MBA salary increase after graduation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The median immediate post-MBA salary increase is 65–75% vs. pre-MBA compensation for full-time M7 program graduates. For candidates entering management consulting (MBB), the jump is from a typical pre-MBA salary of $90K–$110K to a post-MBA total comp of $212K–$232K — a 100–140% increase. Investment banking associates see a similar jump to $265K–$360K. Technology and corporate roles produce smaller immediate increases (30–60%) but often with significant equity upside that materializes at years 3–5.",
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
