export default function MbaRoiInseadVsWhartonLayout({
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
        "name": "Should I choose INSEAD or Wharton for my MBA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The choice depends on your target geography and career path. Choose INSEAD if you want an international career (Europe, Middle East, Asia), have high pre-MBA earnings that make the one-year format financially superior, or are cost-sensitive — INSEAD's $224K total cost versus Wharton's $395K creates a $171K direct saving plus up to $100K more in foregone income avoided. Choose Wharton if your target employers are US-headquartered, you want the strongest US alumni network, or you need access to on-campus recruiting at US MBB offices, US-focused PE firms, or Silicon Valley tech companies.",
        },
      },
      {
        "@type": "Question",
        "name": "What is the cost difference between INSEAD and Wharton?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "INSEAD's 2026 total MBA cost is approximately $224K (tuition plus living expenses for one year). Wharton's total cost over two years is approximately $395K. The direct cost gap is $171K. For candidates earning $100K+ pre-MBA, the opportunity cost of Wharton's second year adds another $100K–$150K in foregone income, making the total economic difference $271K–$321K in favor of INSEAD — before considering post-MBA salary outcomes.",
        },
      },
      {
        "@type": "Question",
        "name": "Which has better post-MBA salary: INSEAD or Wharton?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wharton graduates typically earn higher absolute post-MBA salaries in the US market — median base of $175K–$200K versus INSEAD's $155K–$175K. However, INSEAD's lower total cost means it often produces a higher IRR and faster break-even despite the lower absolute salary. For equivalent roles (MBB consulting, IB) in equivalent markets, compensation is nearly identical — the difference comes from market geography, not program prestige.",
        },
      },
      {
        "@type": "Question",
        "name": "Does INSEAD have a strong alumni network compared to Wharton?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "INSEAD has one of the largest and most geographically diverse MBA alumni networks in the world, with particular strength in Europe, Southeast Asia, and the Middle East. Wharton's alumni network is larger in absolute terms and significantly stronger in the United States. For US-based post-MBA careers, Wharton's network provides a structural advantage. For international careers — especially in London, Singapore, Dubai, Paris, or Hong Kong — INSEAD's network is as strong or stronger than any US program.",
        },
      },
      {
        "@type": "Question",
        "name": "Is INSEAD harder to get into than Wharton?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both programs are highly selective. Wharton's acceptance rate is approximately 12–15%. INSEAD's acceptance rate is approximately 25–30%, but the pool is self-selected and international — the effective competitive difficulty is comparable for strong candidates. INSEAD places greater emphasis on multilingual ability (requiring proficiency in a third language) and international professional experience. Wharton places greater emphasis on GMAT/GRE scores and US-style leadership narratives.",
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
