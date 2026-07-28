"use client"

import { useState } from "react"

export default function CopySnippet({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard unavailable — user can still select the text manually
    }
  }

  return (
    <div className="relative">
      <pre className="bg-black/40 border border-white/10 rounded-xl p-4 pr-24 text-xs text-slate-300 whitespace-pre-wrap break-all leading-relaxed overflow-x-auto">
        {code}
      </pre>
      <button
        type="button"
        onClick={copy}
        className={`absolute top-3 right-3 text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors ${
          copied
            ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-400"
            : "bg-violet-600 border-violet-500 text-white hover:opacity-90"
        }`}
      >
        {copied ? "Copied ✓" : "Copy code"}
      </button>
    </div>
  )
}
