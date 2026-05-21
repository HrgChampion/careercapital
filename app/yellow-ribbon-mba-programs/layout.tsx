export default function YellowRibbonMbaProgramsLayout({
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
        "name": "What is the Yellow Ribbon Program for MBA students?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Yellow Ribbon Program (YRP) is a federal initiative where participating universities voluntarily cover tuition costs that exceed the Post-9/11 GI Bill's maximum tuition cap. For MBA students, this means: if Post-9/11 GI Bill covers $28,937/year (the 2025–26 cap for private schools), and your MBA tuition is $75,000/year, the Yellow Ribbon Program covers 50% of the gap and VA matches it — potentially covering the remaining $46,063. Veterans must be: eligible for the 100% tier of Post-9/11 GI Bill (36 months of active duty service), enrolled in an accredited MBA program at a participating school, and not on active duty.",
        },
      },
      {
        "@type": "Question",
        "name": "Which MBA programs participate in the Yellow Ribbon Program?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Major MBA programs participating in the Yellow Ribbon Program in 2026 include: Wharton (UPenn), Georgetown McDonough, Vanderbilt Owen, Tulane Freeman, Babson Olin, American University Kogod, George Washington School of Business, Pepperdine Graziadio, and many others. Crucially, Harvard Business School and MIT Sloan do not participate. Booth, Kellogg, and Columbia have limited YRP participation. The best resource to verify current participation is the VA's official Yellow Ribbon Program database, updated annually.",
        },
      },
      {
        "@type": "Question",
        "name": "How much can veterans save on an MBA with the Yellow Ribbon Program?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A veteran attending a full-tuition Yellow Ribbon participating MBA program can save $150,000–$200,000 on total program cost. Example: Georgetown McDonough MBA costs approximately $80,000/year in tuition. Post-9/11 GI Bill covers ~$29K, Yellow Ribbon covers ~$25.5K, VA matches ~$25.5K — resulting in full tuition coverage. Combined with the $1,000+/month housing allowance from the GI Bill, the total value can exceed $200,000 for a 2-year program. This makes the Yellow Ribbon MBA the highest-ROI education financing available to veterans.",
        },
      },
      {
        "@type": "Question",
        "name": "Can I use the GI Bill for an MBA program?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The Post-9/11 GI Bill (Chapter 33) covers MBA programs at accredited universities. Benefits include: tuition up to $28,937/year at private schools (full coverage at public in-state programs), a monthly housing allowance (MHA) based on the E-5 with dependents BAH rate for the school's zip code (typically $1,500–$3,500/month in major cities), and a $1,000/year book stipend. Benefits last for 36 months of enrollment. You must use benefits within 15 years of your last qualifying active duty separation. The Montgomery GI Bill and Chapter 30 also apply but provide lower benefits.",
        },
      },
      {
        "@type": "Question",
        "name": "What is the ROI of an MBA for veterans using GI Bill and Yellow Ribbon?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Veterans using full Post-9/11 GI Bill + Yellow Ribbon benefits achieve some of the highest MBA ROI of any student segment. Total out-of-pocket cost can be near zero for tuition, with housing allowance offsetting living costs. At a $0 tuition cost, even a modest post-MBA salary increase generates an IRR of 40–60%+. The break-even is often under 2 years. For comparison, a civilian student paying sticker price at Wharton achieves a break-even of 5–7 years. Veterans should prioritize programs with maximum Yellow Ribbon funding (unlimited vs. capped participation slots) — these fill fast and require early application.",
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
