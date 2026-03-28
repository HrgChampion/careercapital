export default function MbaRoiBig4VsMbbLayout({
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
        "name": "What is the salary difference between Big 4 and MBB consulting after an MBA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MBB associates (McKinsey, Bain, BCG) earn $192K–$212K base salary plus $35K–$60K performance bonus in 2026, for total year-one compensation of $212K–$232K. Big 4 advisory managers (Deloitte, PwC, EY, KPMG) earn $140K–$165K base plus $10K–$25K bonus, for total compensation of $150K–$185K. The annual gap is approximately $47K in total compensation — a difference that compounds meaningfully over a 10-year career.",
        },
      },
      {
        "@type": "Question",
        "name": "Is MBB worth it over Big 4 for MBA ROI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MBB produces significantly higher MBA ROI in pure financial terms — IRR of 22% versus 14% for Big 4, and break-even of 4.2 years versus 6.8 years, assuming a sticker-price M7 program. However, MBB is harder to convert (lower on-campus offer rates), has higher exit-offer risk, and the 60–80 hour work weeks affect the effective hourly rate advantage. On a risk-adjusted basis, a Big 4 offer from a low-cost or scholarshipped MBA program can produce comparable or superior financial outcomes to an MBB offer from a sticker-price M7.",
        },
      },
      {
        "@type": "Question",
        "name": "Which MBA programs place into MBB vs Big 4 consulting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MBB recruits exclusively on-campus at M7 programs (HBS, Wharton, Booth, Kellogg, Sloan, Tuck, Columbia) and select T15 programs (Ross, Fuqua, Darden, Stern). Big 4 advisory recruits from a broader set including T15, T25, and regional programs. Candidates from non-target schools can access Big 4 through direct applications, but MBB for non-targets is extremely rare without an MBA from a target school.",
        },
      },
      {
        "@type": "Question",
        "name": "What is the long-term career trajectory: Big 4 vs MBB after an MBA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MBB alumni have stronger access to corporate strategy, C-suite, and elite PE/VC roles post-consulting. The McKinsey, Bain, and BCG brand opens doors that Big 4 experience typically cannot. Big 4 alumni more commonly transition into industry finance, operations, accounting leadership, and government roles. For candidates targeting a CFO, COO, or corporate strategy VP path at a Fortune 500 company, either track is viable — but MBB alumni have a statistically higher frequency of reaching those roles faster.",
        },
      },
      {
        "@type": "Question",
        "name": "When does Big 4 beat MBB on MBA return on investment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Big 4 beats MBB on risk-adjusted ROI when: (1) the candidate attends a low-cost or heavily scholarshipped program that brings Big 4 break-even under 4 years; (2) the candidate has a high pre-MBA salary making MBB's incremental salary gain insufficient to justify the opportunity cost of rejection risk; (3) the candidate's target geography or industry makes Big 4 placement more certain than MBB conversion; or (4) work-life balance is a material career priority, since Big 4 hours (50–60/week) are substantially better than MBB (60–80/week) at equivalent seniority.",
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
