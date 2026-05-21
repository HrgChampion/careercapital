export default function M7MbaConsultingSalaryLayout({
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
        "name": "What is the average M7 MBA consulting salary at McKinsey, BCG, and Bain?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "M7 MBA graduates entering MBB consulting in 2026 earn: McKinsey — $192,000 base + $35,000–$40,000 performance bonus = $227,000–$232,000 total Year 1 comp; BCG — $190,000 base + $35,000 bonus = $225,000 total; Bain — $192,000 base + $35,000 bonus = $227,000 total. All three firms also pay a $5,000–$10,000 signing bonus. After 3 years (Project Leader / Engagement Manager): $250,000–$350,000 total comp. These figures apply to M7 programs (HBS, Wharton, Booth, Kellogg, MIT Sloan, Columbia, Stanford GSB).",
        },
      },
      {
        "@type": "Question",
        "name": "Which M7 program places the most MBAs into consulting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Harvard Business School places the largest absolute number of graduates into MBB consulting — approximately 25–30% of the HBS class enters consulting. Booth (Chicago) and Kellogg (Northwestern) also have consulting placement rates of 35–40%. MIT Sloan places approximately 25–30% into consulting with a strong analytical/tech consulting focus. Wharton historically places 20–25% into consulting and has its strongest pipeline in finance. Stanford GSB places approximately 15–20% into consulting — the lowest rate among M7 programs, due to the high proportion of graduates going into tech, PE, and entrepreneurship.",
        },
      },
      {
        "@type": "Question",
        "name": "What is the M7 MBA salary at Big 4 consulting (Deloitte, PwC, EY, KPMG)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "M7 MBA graduates at Big 4 consulting firms (Deloitte S&O, Strategy&/PwC, EY-Parthenon, KPMG Deal Advisory) earn $150,000–$175,000 base salary at Year 1, approximately 15–20% below MBB base salaries. Total Year 1 compensation including signing bonus and performance bonus is $170,000–$200,000. Big 4 strategy consulting offers faster promotion timelines to Manager (2 years vs. 3 at MBB) but lower total comp at equivalent career stages. The Big 4 ROI vs. MBA cost is positive but produces lower IRR (15–17%) than MBB destinations (22%).",
        },
      },
      {
        "@type": "Question",
        "name": "What is the M7 MBA consulting salary progression to Partner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "M7 MBA consulting career and salary progression (MBB): Year 1–2, Associate/Consultant: $225K–$232K total comp; Year 3–4, Engagement Manager/Project Leader: $300K–$400K; Year 5–6, Principal/Associate Principal: $450K–$600K; Year 7+, Partner/Director: $800K–$2M+ (base + profit share). Promotion rates: approximately 50% of Associates are promoted to EM; 30–40% of EMs reach Principal; 10–20% of Principals reach Partner. The partner track at MBB typically takes 8–12 years from MBA graduation. Many Associates exit to corporate roles (VP Strategy, GM) at the 3–5 year mark.",
        },
      },
      {
        "@type": "Question",
        "name": "Does McKinsey recruit from all M7 programs equally?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "McKinsey recruits from all M7 programs but with different volumes. By approximate hiring volume for the US: HBS and Wharton each contribute the largest cohorts (~50–100 hires/year each from the MBA class). Booth, Kellogg, Columbia, and MIT Sloan are strong secondary targets (~20–40 each). Stanford GSB places fewer graduates at McKinsey than its M7 peers because many GSB graduates prefer tech, PE, or entrepreneurship. For non-US offices (London, Singapore, Dubai), INSEAD and LBS have on-par placement with several M7 programs.",
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
