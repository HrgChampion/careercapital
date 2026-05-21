export default function ReturnshipPrograms2026Layout({
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
        "name": "What is the best returnship program in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best returnship program in 2026 depends on your goals: Amazon (best conversion rate: 90%, $4,200/week stipend, 16 weeks); Goldman Sachs (highest post-program salary: $200K–$250K base, 85% conversion, 10 weeks); McKinsey ReachBack (full consulting salary during program, ~80% conversion); Meta Returnship (88% conversion, 16 weeks); Microsoft LEAP (85% conversion, strong tech placements). For widest access across 100+ companies, Path Forward is the best platform. All programs require a minimum career gap of 1–2 years.",
        },
      },
      {
        "@type": "Question",
        "name": "What is the Amazon Returnship stipend and conversion rate in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Amazon Returnship pays approximately $4,200/week ($218,400 annualized) during the 16-week program. The historical conversion rate to full-time employment is approximately 90%, making it the highest conversion rate of any major corporate returnship program. Full-time roles after conversion start at $140,000–$175,000 base salary plus RSUs. The program is open to candidates with a minimum 1-year career gap and accepts applications in technology, operations, finance, marketing, and supply chain roles.",
        },
      },
      {
        "@type": "Question",
        "name": "How do I qualify for a returnship program?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most returnship programs require: (1) A career gap of at least 1–2 years (Goldman requires 2+ years; Amazon requires 1+ year; McKinsey requires 2+ years); (2) Prior professional experience at the equivalent level of the returnship role — most programs target mid-career professionals with 5–15 years of pre-gap experience; (3) No requirement to explain the reason for the gap — caregiving, health, relocation, and personal reasons are all accepted; (4) Residency or work authorization in the country of the program. Applications are typically open 3–6 months before the program start date.",
        },
      },
      {
        "@type": "Question",
        "name": "Is a returnship program worth it vs. applying directly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For most career returners, a returnship program is financially superior to applying directly. The key comparison: a returnship with 85%+ conversion rate and $3,500–$4,200/week stipend generates positive NPV vs. a direct job search that may take 6–12 months (opportunity cost: $50K–$100K in lost income). At Amazon's 90% conversion rate, the returnship break-even is approximately 55% — well below actual conversion rates. The exception: if you have a strong network that can generate a direct offer quickly, the 3–4 month returnship runway may cost more in time than it saves in salary negotiation.",
        },
      },
      {
        "@type": "Question",
        "name": "When do returnship programs open applications in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typical 2026 returnship program application windows: Amazon Returnship opens applications in January–February for spring programs and June–July for fall cohorts; Goldman Sachs Returnship opens in January for a June start; McKinsey ReachBack opens in February–March; Meta Returnship opens in Q1 and Q3; Microsoft LEAP opens in October–November for a January start. Deadlines move annually — check each company's careers page directly. Most programs run 10–16 weeks with programs starting in June or January.",
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
