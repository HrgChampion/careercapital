export default function MbaRoiEuropeLayout({
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
        "name": "Is a European MBA worth it compared to a US MBA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For international career paths, European MBAs often produce a higher IRR than US programs due to the one-year format. INSEAD at $224K total cost breaks even in 4–5 years for consulting destinations, versus 5–7 years for Wharton at $395K. The one-year format eliminates roughly $120K in foregone income for mid-career candidates earning $100K+. However, US-based candidates targeting US employers face a network disadvantage with European programs — the US alumni network and on-campus recruiting pipelines for US firms strongly favor M7 programs.",
        },
      },
      {
        "@type": "Question",
        "name": "How much does INSEAD cost compared to Wharton?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "INSEAD's total MBA cost in 2026 is approximately $224K (tuition plus living expenses for one year). Wharton's total cost over two years is approximately $395K including tuition, fees, and living expenses. The $171K cost gap is further widened by Wharton's two-year opportunity cost — candidates earning $100K pre-MBA forfeit an additional $100K in income, making the total economic difference closer to $271K.",
        },
      },
      {
        "@type": "Question",
        "name": "Does INSEAD place into McKinsey, BCG, and Bain?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. INSEAD is a target school for McKinsey, BCG, and Bain in their European and global offices — particularly in London, Paris, Dubai, and Singapore. Approximately 25–30% of INSEAD graduates enter consulting. However, INSEAD is not a primary target school for MBB US offices, which recruit predominantly from HBS, Wharton, Booth, and Kellogg. Candidates seeking MBB roles in North America are better served by a US M7 program.",
        },
      },
      {
        "@type": "Question",
        "name": "What is the average post-MBA salary from INSEAD?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "INSEAD's median post-MBA base salary is approximately $155K–$175K USD, with significant variation by destination region. Graduates entering consulting in London or Paris typically earn £85K–£110K ($105K–$135K USD) base plus bonus. Those entering investment banking in London earn similar all-in compensation to US IB associates ($265K–$350K total comp). The salary figures are comparable to US T15 programs for equivalent roles, but the currency and geography distribution differs substantially.",
        },
      },
      {
        "@type": "Question",
        "name": "Which is better for an international career: European or US MBA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "European programs win on cost and speed for international careers. INSEAD, LBS, and Oxford Saïd produce better ROI for candidates targeting roles in Europe, the Middle East, or Asia — where European alumni networks are as strong or stronger than US M7 networks. US programs win for candidates targeting US domestic employers, US-headquartered multinationals, or Silicon Valley tech firms, where M7 alumni networks and on-campus recruiting pipelines create a structural advantage that European programs cannot replicate.",
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
