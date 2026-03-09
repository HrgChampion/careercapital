import Link from "next/link"

export const metadata = {
  title: "Contact | CareerReturns",
  description:
    "Get in touch with the CareerReturns team. Questions, feedback, or partnership inquiries — we'd love to hear from you.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-violet-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-10 sm:space-y-16">

        <header className="space-y-4">
          <p className="text-xs font-medium text-purple-400 uppercase tracking-widest">CareerReturns</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            Contact Us
          </h1>
          <p className="text-slate-400 text-base leading-relaxed">
            Have a question, spotted an error, or want to collaborate? We&apos;re a small team and read
            every message. Reach out and we&apos;ll get back to you as soon as we can.
          </p>
        </header>

        <section className="space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0 w-9 h-9 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="space-y-1">
                <p className="text-white font-semibold text-sm">Email</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  The fastest way to reach us. We typically respond within 1–2 business days.
                </p>
                <a
                  href="mailto:hgauba4@gmail.com"
                  className="inline-block mt-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                >
                  hgauba4@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">What to reach out about</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Data & Accuracy",
                desc: "Found an error in our salary data, ROI figures, or school statistics? Please let us know — we take accuracy seriously.",
              },
              {
                title: "Feature Requests",
                desc: "Have an idea for the MBA ROI Calculator or a new tool you'd like to see? We'd love your input.",
              },
              {
                title: "Partnerships & Media",
                desc: "Interested in collaborating, linking, or featuring CareerReturns in an article or publication? Get in touch.",
              },
              {
                title: "General Questions",
                desc: "Anything else — methodology questions, how the calculator works, or just feedback. We read everything.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-white font-semibold text-sm">{item.title}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">About CareerReturns</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            CareerReturns is an independent platform built to help professionals make data-driven
            decisions about graduate education. All tools are free to use. We are not affiliated with
            any MBA program, university, or financial institution.
          </p>
        </section>

        <footer className="border-t border-white/10 pt-8 text-center text-slate-500 text-xs space-y-2">
          <p>
            <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            {" · "}
            <Link href="/mba-roi-calculator" className="hover:text-slate-300 transition-colors">MBA ROI Calculator</Link>
            {" · "}
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            {" · "}
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
        </footer>

      </div>
    </main>
  )
}
