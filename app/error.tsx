"use client"

import Link from "next/link"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log to error reporting service if integrated in future
    console.error(error)
  }, [error])

  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden flex items-center justify-center">

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-160 bg-red-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center space-y-8">

        <div className="space-y-2">
          <p className="text-8xl font-semibold text-white/10 tracking-tighter select-none">500</p>
          <p className="text-xs font-medium text-red-400 uppercase tracking-widest -mt-4">Something went wrong</p>
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            An unexpected error occurred
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto">
            We encountered a problem rendering this page. This is usually temporary.
            Try refreshing, or return to a working page below.
          </p>
        </div>

        {error.digest && (
          <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 inline-block">
            <p className="text-slate-500 text-xs font-mono">Error ID: {error.digest}</p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="bg-white/10 hover:bg-white/15 transition-colors border border-white/10 px-6 py-3 rounded-xl text-white text-sm font-medium"
          >
            Try again
          </button>
          <Link
            href="/"
            className="bg-linear-to-r from-indigo-600 to-violet-600 hover:opacity-90 transition-all px-6 py-3 rounded-xl font-medium text-white text-sm shadow-[0_0_30px_rgba(99,102,241,0.2)]"
          >
            Back to Home
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 text-left pt-2">
          {[
            {
              href: "/mba-roi-calculator",
              label: "MBA ROI Calculator",
              desc: "Model NPV, IRR, and break-even for your MBA decision",
            },
            {
              href: "/mba-worth-it",
              label: "Is MBA Worth It?",
              desc: "Financial analysis by school tier and career track",
            },
          ].map(({ href, label, desc }) => (
            <Link
              key={href}
              href={href}
              className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-1 hover:bg-white/8 transition-colors group"
            >
              <p className="text-white text-sm font-semibold group-hover:text-purple-300 transition-colors">{label}</p>
              <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
            </Link>
          ))}
        </div>

      </div>
    </main>
  )
}
