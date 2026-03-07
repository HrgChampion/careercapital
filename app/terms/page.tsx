import Link from "next/link"

export const metadata = {
  title: "Terms of Service | CareerReturns",
  description:
    "CareerReturns terms of service. Calculator results are for educational purposes only and do not constitute financial advice.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-indigo-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-10 sm:space-y-16">

        <header className="space-y-4">
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">CareerReturns</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            Terms of Service
          </h1>
          <p className="text-slate-400 text-sm">
            Last updated: <span className="text-white">March 2, 2026</span>
          </p>
          <p className="text-slate-400 text-base leading-relaxed">
            By using <strong className="text-white">careerreturns.com</strong> (&quot;CareerReturns,&quot; &quot;the site,&quot;
            &quot;we,&quot; or &quot;us&quot;), you agree to these Terms of Service. If you do not agree,
            please stop using the site.
          </p>
        </header>

        {/* Important disclaimer box */}
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-6 space-y-3">
          <p className="text-amber-300 font-semibold text-sm uppercase tracking-wide">Important: Not Financial Advice</p>
          <p className="text-slate-300 text-sm leading-relaxed">
            All content on CareerReturns — including the MBA ROI Calculator, break-even analysis,
            salary data, and editorial articles — is provided for <span className="text-white font-medium">educational and
            informational purposes only</span>. Nothing on this site constitutes financial advice,
            investment advice, or a recommendation to attend or not attend any educational program.
            You should consult a qualified financial advisor before making any significant financial
            decision.
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">1. Use of the Site</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            CareerReturns grants you a limited, non-exclusive, non-transferable license to access and
            use the site for personal, non-commercial purposes. You may not:
          </p>
          <ul className="space-y-2 text-slate-400 text-sm leading-relaxed">
            {[
              "Scrape, copy, or systematically extract content or data from the site using automated tools",
              "Reproduce, republish, or redistribute site content (including calculator logic, salary data, or editorial articles) without written permission",
              "Use the site in any way that could damage, disable, or impair its operation",
              "Attempt to gain unauthorized access to any portion of the site or its infrastructure",
              "Use the site's content to build a competing product or service",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-indigo-400 mt-0.5 shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">2. Calculator Accuracy and Limitations</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The MBA ROI Calculator produces estimates based on the inputs you provide and mathematical
            models that simplify complex financial realities. These outputs:
          </p>
          <div className="space-y-3">
            {[
              { title: "Are not guaranteed to be accurate", body: "Salary projections, break-even timelines, NPV, and IRR figures are estimates. Actual outcomes depend on factors outside the calculator's scope including economic conditions, individual job performance, and specific employer practices." },
              { title: "Rely entirely on your inputs", body: "If your assumptions are wrong (salary figures, tuition, loan rate), the outputs will be wrong. Garbage in, garbage out. We provide suggested ranges from third-party sources as a reference, but we do not verify individual program costs or employer compensation data." },
              { title: "Do not account for non-financial factors", body: "Career trajectory, professional network, personal satisfaction, and credential signaling have real value that the calculator does not quantify. These terms do not prevent you from considering them in your decision." },
              { title: "Are not a substitute for professional advice", body: "Before committing $150,000–$400,000 to an educational investment, consult a certified financial planner, a tax professional, and ideally alumni from the programs you are considering." },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-white font-semibold text-sm">{title}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">3. Salary and Program Data</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Salary figures, tuition costs, and placement data referenced on the site are sourced from
            publicly available reports (GMAC, school employment reports, NACE, and other third-party
            sources) and are updated periodically. We do not guarantee the accuracy, completeness,
            or timeliness of this data. Compensation varies significantly by individual, employer,
            geography, and economic conditions. Historical data is not predictive of future outcomes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">4. Intellectual Property</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            All content on CareerReturns — including text, calculator logic, data visualizations,
            page designs, and site structure — is owned by CareerReturns and protected by applicable
            copyright and intellectual property laws. You may quote short excerpts (under 100 words)
            for non-commercial purposes provided you link back to the original page. All other use
            requires written permission.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">5. Disclaimer of Warranties</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The site is provided <span className="text-white font-medium">&quot;as is&quot; and &quot;as available&quot;</span> without
            warranty of any kind, express or implied. We do not warrant that the site will be
            uninterrupted, error-free, or free of viruses. We make no warranties about the accuracy,
            completeness, or reliability of any content. Your use of the site is at your own risk.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">6. Limitation of Liability</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            To the fullest extent permitted by applicable law, CareerReturns and its operators shall
            not be liable for any indirect, incidental, special, consequential, or punitive damages
            arising from your use of the site or reliance on any content or calculator output —
            including but not limited to financial losses, lost profits, or damage arising from
            educational or career decisions made using the site. Our total liability for any claim
            related to the site shall not exceed $0, as the site is provided free of charge.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">7. External Links</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The site may contain links to third-party websites (school websites, government data
            sources, research reports). These links are provided for convenience and reference only.
            We do not endorse, control, or accept responsibility for the content of external sites.
            Visiting external links is at your own risk.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">8. Changes to These Terms</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            We may update these Terms at any time. Changes take effect when posted to this page.
            The &quot;Last updated&quot; date at the top of this page indicates when the most recent
            revision was made. Continued use of the site after changes constitutes acceptance.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">9. Governing Law</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            These Terms are governed by the laws of the United States. Any disputes arising from
            use of the site shall be resolved in a court of competent jurisdiction in the United States.
            If any provision of these Terms is found unenforceable, the remaining provisions remain
            in full effect.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">10. Contact</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Questions about these Terms can be directed to{" "}
            <span className="text-indigo-400">legal@careerreturns.com</span>.
          </p>
        </section>

        <footer className="border-t border-white/10 pt-8 text-center text-slate-500 text-xs space-y-2">
          <p>
            <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            {" · "}
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            {" · "}
            <Link href="/mba-roi-calculator" className="hover:text-slate-300 transition-colors">MBA ROI Calculator</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
        </footer>

      </div>
    </main>
  )
}
