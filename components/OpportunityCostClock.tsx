"use client"

import { useState, useEffect } from "react"

const DAILY_COST = 55000 / 365  // median MBA opportunity cost per day

function formatCurrency(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(3)}M`
  if (n >= 1_000) return `$${n.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
  return `$${n.toFixed(2)}`
}

export default function OpportunityCostClock() {
  const [elapsed, setElapsed] = useState(0)   // seconds since mount
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const t = setInterval(() => {
      setElapsed(e => e + 1)
    }, 1000)
    const s = setTimeout(() => setStarted(true), 100)
    return () => { clearInterval(t); clearTimeout(s) }
  }, [])

  const cost = (DAILY_COST / 86400) * elapsed

  if (!started) return null

  return (
    <div className="mt-8 flex flex-col items-center gap-2">
      <p className="text-xs text-slate-500 uppercase tracking-widest">
        Since you opened this page, delaying your career decision has cost
      </p>
      <p className="text-3xl sm:text-4xl font-mono font-bold text-red-400 tabular-nums">
        {formatCurrency(cost)}
      </p>
      <p className="text-xs text-slate-600">
        Based on median $55K/year MBA opportunity cost · <a href="/mba-roi-calculator" className="text-indigo-400 hover:underline">personalize it →</a>
      </p>
    </div>
  )
}
