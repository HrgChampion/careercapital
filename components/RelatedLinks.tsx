import Link from "next/link"

export type RelatedLink = {
  href: string
  label: string
  description?: string
}

export default function RelatedLinks({
  links,
  heading = "Related tools & data",
}: {
  links: RelatedLink[]
  heading?: string
}) {
  return (
    <section className="max-w-3xl mx-auto w-full px-4 sm:px-6 pb-16">
      <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-4">
        {heading}
      </p>
      <div className="grid sm:grid-cols-2 gap-3">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/8 hover:border-white/20 transition-all"
          >
            <span className="block font-medium text-white text-sm">{l.label} →</span>
            {l.description && (
              <span className="block text-slate-400 text-xs mt-1 leading-relaxed">
                {l.description}
              </span>
            )}
          </Link>
        ))}
      </div>
    </section>
  )
}
