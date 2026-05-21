export default function EmbaSalaryIncreaseLayout({
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
        "name": "How much does an Executive MBA increase your salary?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "According to GMAC's 2025 Corporate Recruiters Survey, the median salary increase after an Executive MBA is 14–17% within 3 years of graduation. EMBA graduates earning $100K before enrollment report median salaries of $140K–$160K three years post-graduation. However, 40% of EMBA participants receive promotions during or within 1 year of completing the program, which accelerates the salary increase timeline. Top-tier EMBA programs (Wharton, Booth, Kellogg, Columbia) produce larger salary increases — median 20–28% — versus mid-tier programs (10–14%).",
        },
      },
      {
        "@type": "Question",
        "name": "What is the average EMBA salary increase by program?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "EMBA salary increase by program tier (2025–2026 data): Wharton Executive MBA: median +$35K–$55K within 2 years; Booth EMBA (Chicago): median +$30K–$50K; Kellogg EMBA: median +$28K–$45K; Columbia EMBA: median +$25K–$40K; INSEAD EMBA: median +$30K–$50K (global); UCLA Anderson EMBA: median +$20K–$35K; Indiana Kelley online EMBA: median +$15K–$25K. Salary increases are highest for participants who change employers or receive a promotion during the program.",
        },
      },
      {
        "@type": "Question",
        "name": "Is an Executive MBA worth it financially?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An Executive MBA is financially worth it for candidates earning $100K+ pre-enrollment who can leverage it for a promotion or employer change. At a top-tier EMBA program ($175K–$220K total cost), the break-even is typically 4–6 years. The IRR is 12–18% for programs that produce 20%+ salary increases. The key financial advantage over a full-time MBA: no income is foregone during enrollment (most EMBA students remain employed), which effectively reduces the total cost by $150K–$200K vs. the full-time opportunity cost. EMBA ROI is weakest for participants who stay in the same role at the same employer without a promotion or raise.",
        },
      },
      {
        "@type": "Question",
        "name": "What is the average pre-EMBA and post-EMBA salary?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Based on GMAC and program data: Average pre-EMBA salary at top-tier programs: $120K–$160K (most entrants are mid-career professionals with 10–15 years of experience). Average post-EMBA salary within 3 years: $155K–$210K. Top-quartile outcomes at Wharton, Booth, and Kellogg EMBA programs reach $200K–$300K within 5 years, particularly for participants who transition from functional roles into general management or C-suite tracks.",
        },
      },
      {
        "@type": "Question",
        "name": "How does an EMBA salary increase compare to a full-time MBA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Full-time MBA graduates see a larger immediate salary jump (65–75% for M7 programs entering consulting/banking) compared to EMBA graduates (14–17% median). However, EMBA graduates start from a higher base ($120K–$160K vs. $70K–$100K pre-MBA) and avoid the full opportunity cost of 2 years out of the workforce. On a 10-year cumulative earnings basis, the two formats are often comparable for equivalent program tiers. EMBA is better suited to established professionals seeking advancement within their current industry; full-time MBA is better for career switchers needing brand-name recruiting access to new industries.",
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
