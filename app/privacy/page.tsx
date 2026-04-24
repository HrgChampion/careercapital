import Link from "next/link"
import { pageAlternates } from "@/lib/seo"

export const metadata = {
  title: "Privacy Policy | CareerReturns",
  description:
    "CareerReturns privacy policy. What data we collect, how we use it, and your rights as a visitor.",
  alternates: pageAlternates("https://careerreturns.com/privacy"),
  robots: { index: false, follow: true },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-violet-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-10 sm:space-y-16">

        <header className="space-y-4">
          <p className="text-xs font-medium text-purple-400 uppercase tracking-widest">CareerReturns</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-sm">
            Last updated: <span className="text-white">April 24, 2026</span>
          </p>
          <p className="text-slate-400 text-base leading-relaxed">
            CareerReturns (<strong className="text-white">careerreturns.com</strong>) is a free informational tool. We collect
            minimal data and do not sell or share your information with advertisers.
            This policy explains exactly what we do and do not do.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-xl font-semibold tracking-tight">1. What Data We Collect</h2>

          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
              <p className="text-white font-semibold text-sm">Analytics (Vercel Analytics)</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                We use <span className="text-white">Vercel Analytics</span>, a privacy-friendly analytics service that collects
                anonymous, aggregated pageview data — including pages visited, referrer URLs, country-level
                location (derived from IP address), and device type. Vercel Analytics does not set tracking
                cookies and does not store personally identifiable information. IP addresses are not stored.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
              <p className="text-white font-semibold text-sm">Calculator Inputs</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                All inputs entered into the MBA ROI Calculator (salary figures, tuition, loan details)
                are processed entirely in your browser. This data is <span className="text-white">never sent to our servers</span>,
                never stored, and never shared. When you close or refresh the page, the inputs are gone.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
              <p className="text-white font-semibold text-sm">No Accounts, No Email Collection</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                CareerReturns has no user registration, login system, or newsletter. We do not collect
                your name, email address, or any personally identifiable information. There are no
                contact forms that submit data to our servers.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">2. Cookies</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            CareerReturns does not set first-party cookies. Vercel Analytics operates without cookies
            by default. Google AdSense, however, may set third-party cookies on your browser to serve
            personalized advertisements. These cookies are set by Google, not by CareerReturns.
            You can disable personalized ads at{" "}
            <a href="https://www.aboutads.info/choices" className="text-purple-400 underline underline-offset-2" target="_blank" rel="noopener noreferrer">
              aboutads.info/choices
            </a>.
            If you block all cookies in your browser, the calculators and content on this site will
            continue to function normally; only ad personalization will be affected.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">3. Third-Party Services</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-slate-400 font-medium py-3 pr-6">Service</th>
                  <th className="text-left text-slate-400 font-medium py-3 pr-6">Purpose</th>
                  <th className="text-left text-slate-400 font-medium py-3">Data shared</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="text-white py-3 pr-6">Vercel Analytics</td>
                  <td className="text-slate-400 py-3 pr-6">Pageview analytics</td>
                  <td className="text-slate-400 py-3">Anonymous pageviews, device type</td>
                </tr>
                <tr>
                  <td className="text-white py-3 pr-6">Vercel (hosting)</td>
                  <td className="text-slate-400 py-3 pr-6">Website infrastructure</td>
                  <td className="text-slate-400 py-3">Standard server access logs</td>
                </tr>
                <tr>
                  <td className="text-white py-3 pr-6">Google AdSense</td>
                  <td className="text-slate-400 py-3 pr-6">Display advertising</td>
                  <td className="text-slate-400 py-3">Ad interaction data, browser cookies (third-party)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            We do not use Google Analytics, Facebook Pixel, or data broker integrations. We do not
            sell your information to third parties.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
            <p className="text-white font-semibold text-sm">Google AdSense (Advertising)</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              CareerReturns uses <span className="text-white">Google AdSense</span> to display advertisements.
              Google AdSense may set cookies and use web beacons to serve ads based on your prior visits to
              this site and other sites on the internet. Google&apos;s use of advertising cookies enables it
              and its partners to serve ads based on your visit to careerreturns.com and/or other sites on
              the internet. You may opt out of personalized advertising by visiting{" "}
              <a href="https://www.aboutads.info/choices" className="text-purple-400 underline underline-offset-2" target="_blank" rel="noopener noreferrer">
                aboutads.info/choices
              </a>{" "}or{" "}
              <a href="https://www.google.com/settings/ads" className="text-purple-400 underline underline-offset-2" target="_blank" rel="noopener noreferrer">
                Google Ads Settings
              </a>.
              For more information on how Google uses data when you visit sites that use Google services, see{" "}
              <a href="https://policies.google.com/technologies/partner-sites" className="text-purple-400 underline underline-offset-2" target="_blank" rel="noopener noreferrer">
                Google&apos;s privacy policy
              </a>.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">4. Data Retention</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Aggregated analytics data (pageview counts, traffic sources) is retained in Vercel&apos;s
            dashboard for up to 90 days. This data contains no personally identifiable information.
            No other data is retained.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">5. Your Rights</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Because we do not collect personally identifiable information, there is no personal data
            about you to access, correct, or delete. If you are a resident of the EU/EEA (under GDPR)
            or California (under CCPA) and have a privacy question, you can contact us using the
            information below. We will respond within 30 days.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">6. Children</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            CareerReturns is not directed at children under 13. We do not knowingly collect any
            information from users under 13 years of age.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">7. Changes to This Policy</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            We may update this policy if our data practices change. Material changes will be reflected
            in the &quot;Last updated&quot; date at the top of this page. Continued use of the site after
            any changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">8. Contact</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            For privacy-related questions, email us at{" "}
            <span className="text-purple-400">privacy@careerreturns.com</span>.
            We do not have a physical mailing address for public correspondence.
          </p>
        </section>

        <footer className="border-t border-white/10 pt-8 text-center text-slate-500 text-xs space-y-2">
          <p>
            <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            {" · "}
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            {" · "}
            <Link href="/mba-roi-calculator" className="hover:text-slate-300 transition-colors">MBA ROI Calculator</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
        </footer>

      </div>
    </main>
  )
}
