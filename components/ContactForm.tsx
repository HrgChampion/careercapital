"use client"

import { useState } from "react"

const EMAIL = "hgauba4@gmail.com"
const TOPICS = ["Data correction", "Methodology question", "Feature request", "Partnership or media", "Other"]

/**
 * No backend: composes the message and hands it to the visitor's own mail app,
 * so nothing is stored or sent by CareerReturns (matches the privacy policy).
 */
export default function ContactForm() {
  const [name, setName] = useState("")
  const [topic, setTopic] = useState(TOPICS[0])
  const [message, setMessage] = useState("")

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`[CareerReturns] ${topic}`)
    const body = encodeURIComponent(`${message}\n\n— ${name || "A CareerReturns reader"}`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  const field = "w-full rounded-lg bg-slate-900 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-400"

  return (
    <form onSubmit={onSubmit} className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="space-y-1 block">
          <span className="text-slate-300 text-xs font-medium">Your name</span>
          <input className={field} value={name} onChange={(e) => setName(e.target.value)} placeholder="Optional" />
        </label>
        <label className="space-y-1 block">
          <span className="text-slate-300 text-xs font-medium">Topic</span>
          <select className={field} value={topic} onChange={(e) => setTopic(e.target.value)}>
            {TOPICS.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="space-y-1 block">
        <span className="text-slate-300 text-xs font-medium">Message</span>
        <textarea
          className={`${field} min-h-32`}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="If you're reporting a data error, include the page URL and the figure in question."
        />
      </label>
      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" className="rounded-lg bg-purple-500 hover:bg-purple-400 px-4 py-2 text-sm font-medium text-white transition-colors">
          Open in my email app
        </button>
        <span className="text-slate-500 text-xs">
          Opens your mail client addressed to {EMAIL}. Nothing is stored on our servers.
        </span>
      </div>
    </form>
  )
}
