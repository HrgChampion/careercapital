export default function MbaRoiReport2026Layout({
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
        "name": "What is the average ROI of an MBA from a top program?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The average IRR for a T15 MBA graduate entering management consulting is 19–22% without scholarship aid and 34–40% with full scholarship aid, assuming a 10% hurdle rate and a 10-year analysis window. Private equity and investment banking destinations produce similar or slightly higher returns. Technology roles generate lower IRR (16–19%) due to smaller salary deltas relative to pre-MBA tech compensation. Nonprofit and government destinations often produce sub-10% IRR at sticker price, meaning the investment does not clear the S&P 500 opportunity cost hurdle.",
        },
      },
      {
        "@type": "Question",
        "name": "Is an MBA worth it without a scholarship in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on your destination industry. Without scholarship aid, an MBA is financially worth it (IRR above 10%) for candidates entering management consulting (MBB), investment banking, or private equity — where the post-MBA salary delta is large enough to clear the hurdle rate over a 10-year window. For candidates entering Big 4 consulting, consumer goods, media, or government roles, sticker-price programs often produce IRR below 10%, meaning the investment underperforms a passive S&P 500 index fund. Scholarship negotiation is the primary lever for improving the math in these tracks.",
        },
      },
      {
        "@type": "Question",
        "name": "How does an online MBA compare to a full-time MBA in return on investment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Top online MBA programs (Carnegie Mellon Tepper, Indiana Kelley, UT McCombs) now generate IRRs of 28–35% for candidates who remain employed during their studies — often exceeding full-time program IRRs because there is no two-year opportunity cost. However, online programs do not provide access to on-campus recruiting at MBB consulting firms, bulge-bracket investment banks, or competitive private equity — these pipelines remain exclusive to full-time programs at T15 institutions. The right choice depends on whether you need a career switch (full-time) or career acceleration within your existing industry (online).",
        },
      },
      {
        "@type": "Question",
        "name": "How long does it take to break even on an MBA investment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Break-even timelines range from 2.1 years (M7 program with full scholarship, MBB destination) to over 13 years (sticker-price program with nonprofit destination). The median break-even for a T15 graduate entering consulting without scholarship aid is approximately 4–5 years. European one-year programs typically break even 1–2 years faster than equivalent US two-year programs due to lower total cost and eliminated opportunity cost. Online MBA programs break even fastest of all formats, typically within 2–3 years, because no income is foregone during enrollment.",
        },
      },
      {
        "@type": "Question",
        "name": "How does a recession affect MBA salaries and return on investment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Recessions materially compress MBA ROI. A mild recession (2001-type) reduces post-MBA median compensation from a base-case $192,000 to approximately $165,000, drops IRR from 22% to 14% for sticker-price candidates, and extends break-even from 4.2 to 6.1 years. A severe recession (2008-type) can reduce IRR to 8% for sticker-price graduates — below the 10% S&P 500 hurdle — while taking 9+ years to break even. Scholarship recipients are substantially more insulated: a full-aid candidate facing a severe recession still generates approximately 19% IRR, well above the hurdle rate. This asymmetry is the strongest financial argument for aggressive scholarship negotiation before enrollment.",
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
