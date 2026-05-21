export default function WomenReturningToWorkLayout({
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
        "name": "What is the salary penalty for women returning to work after a career break?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Women returning to work after a career break face a salary penalty of 15–22%, compared to 8–12% for men returning after equivalent breaks. The gap widens with the length of the break: a 1-year break results in approximately 8–10% penalty, while a 3-year break results in 18–25%. Industries with the steepest penalties include technology, investment banking, and management consulting. Returnship programs at companies like Amazon, Goldman Sachs, and McKinsey are specifically designed to reduce this penalty by providing structured re-entry at near-market compensation.",
        },
      },
      {
        "@type": "Question",
        "name": "What are the best returnship programs for women in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best returnship programs for women in 2026 include: Path Forward (100+ partner companies including Intuit, eBay, Reddit — widest access); Amazon Returnship (16 weeks, $4,200/week, 90% conversion rate); Goldman Sachs Returnship (10 weeks, $3,500/week, 85% conversion, $200K–$250K post-program salary); McKinsey ReachBack (full consulting salary during program); Microsoft LEAP (16 weeks, 85% conversion); Meta Returnship (16 weeks, 88% conversion). Women make up the majority of participants in all these programs. Most require a minimum 2-year career gap.",
        },
      },
      {
        "@type": "Question",
        "name": "How do women close the salary gap after returning to work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The fastest strategies to close the salary gap when returning to work after a career break: (1) Target returnship programs with high conversion rates — Amazon, Goldman, McKinsey convert 80–90% of participants at near-market salaries; (2) Update skills before applying — certifications in AI, data analytics, or cloud platforms reduce the employer's perceived 'skills gap' and directly counter the penalty; (3) Negotiate aggressively using market data — the salary penalty is partly psychological; candidates who cite current market benchmarks narrow the gap by 5–10%; (4) Target companies with formal return-to-work policies, which correlate with lower ongoing penalties vs. ad-hoc hiring; (5) Consider internal transfer if currently employed — the penalty is lower for internal moves than external hires.",
        },
      },
      {
        "@type": "Question",
        "name": "How long does it take for women to recover their pre-career-break salary?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For women who re-enter through structured returnship programs, salary recovery to pre-break levels typically takes 1–2 years. For women re-entering through direct job applications without a returnship, recovery takes 3–5 years on average, with some high-skill tracks (tech, finance) recovering faster. The key variable is not the industry but the re-entry mechanism: returnship programs compress the recovery timeline by providing structured performance evaluation and immediate credentialing, which bypasses the typical employer uncertainty that drives the initial penalty.",
        },
      },
      {
        "@type": "Question",
        "name": "Do returnship programs specifically help women?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Studies show returnship programs reduce the salary re-entry penalty for women from 15–22% to 3–8% on average. This is because returnships provide a formal performance track that allows employers to evaluate capability directly, rather than relying on resume gaps as a proxy for skill degradation. Women make up 70–85% of participants in most corporate returnship programs. Programs like Path Forward, iRelaunch, and corporate-specific returnships at Amazon, Goldman, and McKinsey were partly designed in response to data showing that women disproportionately leave the workforce for caregiving roles and face higher re-entry penalties.",
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
