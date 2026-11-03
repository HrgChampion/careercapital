import Link from "next/link"
import MythBusterQuiz from "./Quiz"
import { MYTHS } from "./myths"

export default function MBAMythBusterPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <MythBusterQuiz />

      {/* Server-rendered explanations so every myth is in the page HTML, not only the current quiz card */}
      <section id="myths-explained" className="max-w-2xl mx-auto px-4 pb-16 sm:pb-24 space-y-8">
        <div className="border-t border-white/10 pt-12 space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">The 10 MBA Myths, Explained</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Take the quiz first if you want to test yourself, because the answers are below. Each myth is checked
            against the salary, cost and ROI data used across CareerReturns.
          </p>
        </div>
        {MYTHS.map((m) => (
          <article key={m.id} className="space-y-3">
            <h3 className="text-lg font-semibold text-white leading-snug">
              Myth {m.id}: &ldquo;{m.myth}&rdquo;
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">{m.explanation}</p>
            <p className="text-xs text-slate-500">
              Source: {m.source}
              {m.relatedTool && (
                <>
                  {" · "}
                  <Link href={m.relatedTool.href} className="text-indigo-400 hover:underline">
                    {m.relatedTool.label}
                  </Link>
                </>
              )}
            </p>
          </article>
        ))}
      </section>
    </main>
  )
}
