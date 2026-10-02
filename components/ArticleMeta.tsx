import Link from "next/link"

function fmt(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  })
}

/**
 * Visible byline + "Last updated" line for guide pages. Feed it the same dates
 * passed to articleSchema() so the visible date and the JSON-LD never disagree.
 */
export default function ArticleMeta({
  updated,
  byline = "reviewed",
}: {
  updated: string
  byline?: "author" | "reviewed"
}) {
  return (
    <div className="flex items-center gap-3 pt-1">
      <div className="w-7 h-7 rounded-full bg-violet-600/20 border border-violet-500/30 flex items-center justify-center shrink-0">
        <span className="text-violet-400 text-xs font-semibold">HG</span>
      </div>
      <p className="text-slate-500 text-xs leading-relaxed">
        {byline === "author" ? "By " : "Researched & reviewed by "}
        <Link href="/author/himanshu-gauba" className="text-white font-medium hover:text-violet-300">
          Himanshu Gauba
        </Link>
        {" · "}Last updated <time dateTime={updated}>{fmt(updated)}</time>
        {" · "}
        <Link href="/editorial-policy" className="hover:text-slate-300 underline underline-offset-2">
          How we research
        </Link>
      </p>
    </div>
  )
}
