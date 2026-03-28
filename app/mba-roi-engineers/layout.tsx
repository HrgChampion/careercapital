export default function MbaRoiEngineersLayout({
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
        "name": "Should a software engineer get an MBA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on your target role and pre-MBA compensation. Engineers earning $150K–$250K at FAANG or Tier-1 tech companies face a compressed salary delta — the post-MBA salary premium over their already-high baseline is smaller, which reduces IRR. An MBA is financially justified for engineers who want to switch into management consulting (MBB), investment banking, or general management leadership roles where the salary uplift is large. It is harder to justify for engineers who want to stay in tech as senior ICs or transition to PM — those moves often do not require an MBA and the financial case is weak at sticker price.",
        },
      },
      {
        "@type": "Question",
        "name": "What is the ROI of an MBA for software engineers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MBA ROI for engineers varies significantly by destination. For SWE→MBB consulting, IRR is 14–18% at sticker price — lower than non-tech candidates because the pre-MBA SWE salary is higher, compressing the delta. For SWE→investment banking, IRR is similar: 15–20%. For SWE→tech PM, IRR is often negative or below the 10% S&P 500 hurdle because the post-MBA PM salary is comparable to what a senior SWE would earn without an MBA. The only track where engineer MBA ROI clearly exceeds non-engineer ROI is PE/VC, where the technical background commands a premium.",
        },
      },
      {
        "@type": "Question",
        "name": "How does unvested equity (RSUs) affect MBA ROI for engineers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unvested RSUs are the single biggest wildcard in engineer MBA ROI calculations. Leaving $200K–$400K in unvested equity to attend business school is an immediate, certain loss — and it must be counted as part of the true opportunity cost. An engineer with $300K in unvested RSUs vesting over 3 years who leaves for a 2-year MBA is forfeiting roughly $200K in equity plus $150K–$200K in foregone salary, for a total opportunity cost of $350K–$400K. This easily doubles the effective MBA cost and can push break-even to 10+ years even for high-paying destinations.",
        },
      },
      {
        "@type": "Question",
        "name": "What MBA programs are best for engineers who want to switch careers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For engineers targeting management consulting (MBB): HBS, Wharton, Booth, Kellogg, Sloan, and Tuck are the strongest placement schools. For investment banking: Wharton, Columbia, Booth, and Stern. For tech strategy and corporate roles: Sloan (MIT) and Haas (Berkeley) have strong tech-industry alumni networks. For PE/VC: HBS and Wharton are the primary feeders. Engineers with strong quantitative profiles often do well at Booth and Sloan, which have cultures that value technical backgrounds.",
        },
      },
      {
        "@type": "Question",
        "name": "Can engineers get an MBA without losing their technical career track?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, but it requires deliberate targeting. Engineers who return to tech post-MBA typically join product management, business development, or corporate strategy functions — not IC engineering roles. The MBA fundamentally repositions you as a business-focused professional. Some candidates use part-time or executive MBA programs to avoid forfeiting equity and income while gaining the credential — this preserves the technical track and produces significantly better IRR because opportunity cost is eliminated. However, part-time programs do not provide access to MBB or bulge-bracket IB on-campus recruiting.",
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
