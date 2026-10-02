import Link from "next/link"
import FaqSection, { type FaqItem } from "@/components/FaqSection"
import ArticleMeta from "@/components/ArticleMeta"

export type ToolGuideSection = {
  heading: string
  /** Paragraphs of plain text. */
  body?: string[]
  /** Optional bullet list rendered after the paragraphs. */
  bullets?: string[]
  /** Optional table: first row is the header. */
  table?: string[][]
  /** Optional monospace formula block. */
  formula?: string
}

/**
 * Server-rendered explanatory guide that sits below an interactive tool, so the
 * page carries real methodology, a worked example and sources even before the
 * visitor touches an input. Rendered from each tool's layout.tsx after {children}.
 */
export default function ToolGuide({
  title,
  updated,
  sections,
  faqs,
  sources,
  related,
}: {
  title: string
  updated: string
  sections: ToolGuideSection[]
  faqs: FaqItem[]
  sources: string[]
  related: Array<{ href: string; label: string }>
}) {
  return (
    <article className="bg-slate-950 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-10 border-t border-white/10">
        <header className="space-y-2">
          <p className="text-xs font-medium text-purple-400 uppercase tracking-widest">Guide &amp; methodology</p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
          <ArticleMeta updated={updated} />
        </header>

        {sections.map((s) => (
          <section key={s.heading} className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight">{s.heading}</h2>
            {s.body?.map((p, i) => (
              <p key={i} className="text-slate-400 text-sm leading-relaxed">
                {p}
              </p>
            ))}
            {s.formula && (
              <pre className="overflow-x-auto rounded-xl bg-white/5 border border-white/10 p-4 text-xs text-slate-200">
                {s.formula}
              </pre>
            )}
            {s.bullets && (
              <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm leading-relaxed">
                {s.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}
            {s.table && (
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      {s.table[0].map((h) => (
                        <th key={h} className="text-left text-slate-400 font-medium py-2 pr-4">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {s.table.slice(1).map((row, i) => (
                      <tr key={i}>
                        {row.map((c, j) => (
                          <td key={j} className={`py-2 pr-4 ${j === 0 ? "text-white" : "text-slate-400"}`}>
                            {c}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        ))}

        <FaqSection items={faqs} />

        <section className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">Sources &amp; limitations</h2>
          <ul className="list-disc pl-5 space-y-1 text-slate-400 text-sm leading-relaxed">
            {sources.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
          <p className="text-slate-500 text-xs leading-relaxed">
            Results are educational estimates, not financial advice. See our{" "}
            <Link href="/editorial-policy" className="underline underline-offset-2 hover:text-slate-300">editorial policy</Link>{" "}
            and <Link href="/disclaimer" className="underline underline-offset-2 hover:text-slate-300">disclaimer</Link>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">Related tools &amp; guides</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="rounded-xl bg-white/5 border border-white/10 p-4 text-sm text-white hover:border-white/20"
              >
                {r.label} →
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  )
}
