export type FaqItem = { q: string; a: string }

/**
 * Renders a FAQ as visible page content AND its FAQPage JSON-LD from the same
 * array, so the structured data can never describe content the user cannot see.
 *
 * Google's structured data policy requires marked-up content to be visible on
 * the page. Emitting FAQPage schema without a rendered FAQ is a spam-policy
 * violation, so schema and markup must share one source — this component.
 */
export default function FaqSection({
  items,
  heading = "Frequently Asked Questions",
  className = "",
}: {
  items: FaqItem[]
  heading?: string
  className?: string
}) {
  if (!items?.length) return null

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  }

  return (
    <section id="faq" className={`space-y-5 ${className}`}>
      <h2 className="text-2xl font-semibold tracking-tight text-white">{heading}</h2>
      <div className="space-y-4">
        {items.map((it) => (
          <div key={it.q} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
            <h3 className="text-white font-semibold text-sm">{it.q}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{it.a}</p>
          </div>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </section>
  )
}
