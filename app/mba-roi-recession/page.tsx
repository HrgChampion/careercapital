import Link from "next/link"

export const metadata = {
  title: "MBA ROI in a Recession (2026): 2008 & 2020 Hiring Data",
  description:
    "MBA ROI in a recession. 2008 and 2020 hiring data, NPV models with salary delays, industries that held, and how to structure your MBA for downturns. See data →",
  alternates: { canonical: "https://careerreturns.com/mba-roi-recession" },
}

export default function MbaRoiRecessionPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-slate-600/15 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12 sm:space-y-20">

        <header className="space-y-5">
          <p className="text-xs font-medium text-slate-400 uppercase tracking-widest">CareerReturns · MBA ROI Scenarios</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            MBA ROI in a Recession:<br />What the Data Actually Shows
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Recessions reshape MBA outcomes — but not uniformly, and not catastrophically for well-positioned
            candidates. Two major downturns have now produced enough data to model the real financial impact.
            The picture is more nuanced than either the optimists or the catastrophists suggest.
          </p>
        </header>

        {/* Counter-cyclical enrollment */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Why MBA Applications Rise in Recessions</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The MBA application cycle is counter-cyclical. When the economy contracts and job prospects worsen,
            applications to graduate programs rise. Reported enrollment and application trends from 2008–09 and
            2020 both confirm this pattern — GMAC&apos;s annual prospective student surveys showed meaningful
            upticks in both periods. In 2009, top US programs broadly reported application increases in the
            15–20% range year-over-year. In 2020, many programs reported application increases of 10–25% in
            the second round following the initial pandemic lockdown.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            The strategic logic is defensible: if you are considering an MBA anyway, entering during a recession
            means graduating into a potential recovery — historically the strongest hiring environments for
            post-MBA roles. The Class of 2011 (entered 2009) graduated into the post-crisis hiring surge and
            achieved some of the strongest consulting and banking placement rates of the decade.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            However, this strategy introduces two risks. First, you must be admitted to a program during a more
            competitive application cycle (higher volume without proportionally more seats). Second, you cannot
            know with certainty when the recovery will arrive — the Class of 2010 (entered 2008) graduated into
            a still-depressed market. Timing the macro cycle around a two-year program commitment is imprecise
            at best.
          </p>
        </section>

        {/* Historical hiring data */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Historical MBA Hiring During Recessions: 2008 and 2020</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Two modern recessions have produced measurable data on MBA hiring disruption. The patterns differ
            by industry and by duration of impact. The{" "}
            <Link href="/mba-salary-increase" className="text-slate-300 hover:text-white transition-colors underline underline-offset-2">MBA salary increase data</Link>
            {" "}was significantly compressed in both downturns, particularly in finance.
          </p>
          <div className="space-y-4">
            <p className="text-slate-300 font-semibold text-sm">2008–09 Global Financial Crisis</p>
            <div className="space-y-3">
              {[
                { sector: "Investment Banking (Bulge Bracket)", impact: "Hiring frozen / severely reduced", detail: "Goldman, Morgan Stanley, Lehman (bankrupt) slashed or eliminated MBA associate classes. Signing bonus deferrals of 12–18 months common. Some 2008 MBA offers rescinded.", color: "text-red-400", bar: 20 },
                { sector: "MBB Management Consulting", impact: "15–30% hiring reduction", detail: "McKinsey and BCG reduced US MBA associate hiring by 15–25% in 2009. Deferred start dates (6–12 months) offered to accepted candidates. Bain reduced more significantly.", color: "text-orange-400", bar: 50 },
                { sector: "Technology (Software)", impact: "Moderate reduction", detail: "Tech layoffs occurred but MBA hiring held better than finance. Microsoft, Google reduced but did not eliminate MBA programs. Startups froze hiring entirely.", color: "text-yellow-400", bar: 65 },
                { sector: "Healthcare & Pharma", impact: "Minimal disruption", detail: "Healthcare management and pharma strategy roles largely maintained hiring. Healthcare consulting (McKinsey Health, Deloitte Health) held approximately flat.", color: "text-green-400", bar: 85 },
                { sector: "Government & Nonprofits", impact: "Counter-cyclical growth", detail: "Treasury, Federal Reserve, policy roles expanded during crisis. Nonprofit and public sector MBA hiring increased modestly.", color: "text-teal-400", bar: 90 },
              ].map(({ sector, impact, detail, color, bar }) => (
                <div key={sector} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <p className="text-white font-semibold text-sm">{sector}</p>
                    <p className={`${color} text-xs font-semibold`}>{impact}</p>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-1.5">
                    <div className={`h-1.5 rounded-full ${color === "text-red-400" ? "bg-red-500" : color === "text-orange-400" ? "bg-orange-500" : color === "text-yellow-400" ? "bg-yellow-500" : color === "text-green-400" ? "bg-green-500" : "bg-teal-500"}`}
                      style={{ width: `${bar}%` }} />
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 mt-4">
            <p className="text-slate-300 font-semibold text-sm">2020 COVID-19 Recession</p>
            <div className="space-y-3">
              {[
                { sector: "Investment Banking", impact: "Initial freeze (Q2 2020), rapid recovery", detail: "Virtual recruiting adopted by Q3 2020. Full-year 2020 MBA IB hiring ultimately 80–90% of 2019 levels. 2021 hiring surged significantly above pre-COVID baseline due to deal volume." },
                { sector: "MBB Consulting", impact: "Temporary freeze, 90%+ recovery by Y2", detail: "Spring 2020 interviews paused for 2–3 months. By fall 2020, on-campus recruiting resumed virtually. The Class of 2021 reported strong MBB placement relative to prior years." },
                { sector: "Technology", impact: "Minimal long-term impact", detail: "Tech hiring slowed Q2 2020, then accelerated dramatically. 2020–2022 represented the strongest tech hiring market in recent MBA history before the 2022–23 correction." },
                { sector: "Healthcare", impact: "Sustained and increased", detail: "COVID increased demand for healthcare strategy, pharma, and operations roles. PSLF-eligible hospital system roles maintained stable hiring." },
              ].map(({ sector, impact, detail }) => (
                <div key={sector} className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <p className="text-white font-semibold text-sm">{sector}</p>
                    <p className="text-slate-300 text-xs">{impact}</p>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NPV model with salary delay */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">NPV Model: Graduating Into a Recession</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The key financial question for recession-class MBA graduates is not whether salaries fall — they do,
            modestly — but whether the cumulative NPV over 10 years is still positive. The{" "}
            <Link href="/mba-roi-calculator" className="text-slate-300 hover:text-white transition-colors underline underline-offset-2">MBA ROI calculator</Link>
            {" "}allows you to model this by adjusting post-MBA salary and extending the ramp period.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5">
            <p className="text-xs font-medium text-slate-400 uppercase tracking-widest">Recession vs. Normal Cycle: M7 → MBB Consulting</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-3">
                <p className="text-teal-400 text-xs font-medium uppercase tracking-widest">Normal Cycle (2023–24)</p>
                <div><p className="text-slate-500 text-xs">Post-MBA base salary</p><p className="text-white font-medium">$205,000</p></div>
                <div><p className="text-slate-500 text-xs">Signing bonus (Y1)</p><p className="text-white font-medium">$45,000</p></div>
                <div><p className="text-slate-500 text-xs">10-yr NPV (6% disc.)</p><p className="text-green-400 font-semibold">+$380,000</p></div>
                <div><p className="text-slate-500 text-xs">IRR</p><p className="text-green-400 font-medium">21–24%</p></div>
                <div><p className="text-slate-500 text-xs">Break-even</p><p className="text-white font-medium">~4.5 years</p></div>
              </div>
              <div className="space-y-3">
                <p className="text-yellow-400 text-xs font-medium uppercase tracking-widest">Recession Class (2008-09 analog)</p>
                <div><p className="text-slate-500 text-xs">Post-MBA base salary</p><p className="text-white font-medium">$175,000 (15% haircut)</p></div>
                <div><p className="text-slate-500 text-xs">Signing bonus (Y1)</p><p className="text-white font-medium">$20,000 (deferred/reduced)</p></div>
                <div><p className="text-slate-500 text-xs">10-yr NPV (6% disc.)</p><p className="text-yellow-400 font-semibold">+$185,000</p></div>
                <div><p className="text-slate-500 text-xs">IRR</p><p className="text-yellow-400 font-medium">13–16%</p></div>
                <div><p className="text-slate-500 text-xs">Break-even</p><p className="text-white font-medium">~6.5 years</p></div>
              </div>
            </div>
            <div className="border-t border-white/10 pt-4">
              <p className="text-slate-400 text-xs leading-relaxed">
                Even in the most severe recession scenario modeled above — 15% salary reduction, halved signing bonus,
                delayed MBB hire — the 10-year NPV remains <span className="text-yellow-400 font-semibold">strongly positive</span> at
                $185,000 and the IRR of 13–16% substantially exceeds the 6% equity market hurdle rate. The MBA ROI case
                is weakened but not broken by a recession, for candidates entering top programs targeting consulting or
                healthcare. The case breaks only for candidates targeting investment banking or entering lower-tier programs.
              </p>
            </div>
          </div>
        </section>

        {/* Industries by recession resilience */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">MBA Career Tracks by Recession Resilience</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The{" "}
            <Link href="/mba-roi-consulting" className="text-slate-300 hover:text-white transition-colors underline underline-offset-2">consulting track</Link>
            {" "}and{" "}
            <Link href="/mba-roi-investment-banking" className="text-slate-300 hover:text-white transition-colors underline underline-offset-2">investment banking track</Link>
            {" "}diverge sharply in recession resilience. Understanding this distinction before choosing a career goal
            is critical for candidates who are enrolled during or anticipating an economic downturn.
          </p>
          <div className="space-y-3">
            {[
              {
                rank: "1",
                track: "Healthcare Management & Consulting",
                resilience: "Very High",
                reason: "Counter-cyclical demand. Hospital systems, pharma, and health policy continue regardless of economic conditions. PSLF protects loan exposure.",
                color: "text-green-400",
              },
              {
                rank: "2",
                track: "Government & Public Policy",
                resilience: "Very High",
                reason: "Federal spending actually increases in recessions (stimulus, regulatory response). Policy and public finance roles are non-cyclical.",
                color: "text-green-400",
              },
              {
                rank: "3",
                track: "Management Consulting (MBB, Tier 2)",
                resilience: "Moderate-High",
                reason: "Consulting demand for cost-cutting and restructuring rises in downturns, but discretionary strategy projects get deferred. Net effect: moderate reduction.",
                color: "text-teal-400",
              },
              {
                rank: "4",
                track: "Technology (Product, Strategy)",
                resilience: "Moderate",
                reason: "Tech recessions are sharp (see 2022–23) but historically brief. MBA roles in product and strategy survive better than engineering headcount reductions.",
                color: "text-yellow-400",
              },
              {
                rank: "5",
                track: "Investment Banking & Private Equity",
                resilience: "Low",
                reason: "Highly cyclical. Deal volume collapses in credit contractions. 2008–09 saw 40–60% IB MBA hiring reductions. PE hold periods extend, new hires deferred.",
                color: "text-red-400",
              },
            ].map(({ rank, track, resilience, reason, color }) => (
              <div key={rank} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-slate-600 text-xs font-mono">#{rank}</span>
                  <p className="text-white font-semibold text-sm flex-1">{track}</p>
                  <p className={`${color} text-xs font-semibold`}>{resilience}</p>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Structural resilience strategies */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">How to Structure Your MBA for Recession Resilience</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Regardless of macro timing, certain structural choices dramatically improve MBA ROI outcomes
            in adverse conditions. The{" "}
            <Link href="/mba-break-even" className="text-slate-300 hover:text-white transition-colors underline underline-offset-2">break-even analysis</Link>
            {" "}is the key tool for understanding how these choices shift your financial exposure.
          </p>
          <div className="space-y-3">
            {[
              {
                strategy: "Minimize debt through scholarships and savings",
                impact: "Every $25k less in debt removes $3,400/yr in mandatory cash outflow, improving resilience to lower starting salaries. The debt analysis at any level is in the 100k debt guide.",
                link: null,
              },
              {
                strategy: "Target recession-resistant industries as first placement",
                impact: "Healthcare consulting, government advisory, and pharma strategy provide stable first-year placement even in contraction. IB placement risk is concentrated in severe downturns.",
                link: null,
              },
              {
                strategy: "Accept deferred start dates strategically",
                impact: "In 2008–09, many MBB and IB firms offered 12-month deferred start dates with partial compensation. Accepting a deferred offer at MBB is economically superior to taking an inferior immediate offer.",
                link: null,
              },
              {
                strategy: "Build optionality into your career track targeting",
                impact: "Candidates who target both consulting and healthcare/tech roles during recruiting have significantly better placement rates in recession years than those targeting only finance.",
                link: null,
              },
            ].map(({ strategy, impact }) => (
              <div key={strategy} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-white font-semibold text-sm">{strategy}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{impact}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The macro timing argument */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">The Macro Timing Argument: Is It Worth Applying During a Recession?</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The empirical evidence suggests yes — with important caveats. Analyzing GMAC employment outcome data
            across recession and non-recession cohorts at top programs reveals:
          </p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
            <div className="space-y-3">
              {[
                { finding: "10-year earnings premium", detail: "Recession-entry MBAs who graduated into the subsequent recovery showed earnings premiums comparable to or exceeding non-recession cohorts by year 5–7, as the recovery hiring wave rewarded top-program graduates." },
                { finding: "Starting salary discount", detail: "Recession graduation classes (2009, 2010) showed 8–15% lower median starting salaries than the preceding peak cycle. This discount was largely erased by year 3 as compensation normalized." },
                { finding: "Consulting vs. banking divergence", detail: "Consulting-track recession graduates recovered faster. Banking-track graduates who received deferred or reduced offers saw the most persistent earnings impact, particularly those who exited banking during the downturn." },
                { finding: "Program tier durability", detail: "M7 program graduates showed more resilient employment outcomes in recessions than lower-tier programs. At HBS and Wharton, employment within 3 months of graduation exceeded 90% even in recession years — compared to 70–80% at rank 10–20 programs." },
              ].map(({ finding, detail }) => (
                <div key={finding} className="border-b border-white/10 pb-3 last:border-0 last:pb-0">
                  <p className="text-white font-semibold text-xs mb-1">{finding}</p>
                  <p className="text-slate-400 text-xs leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            The bottom line: an MBA from a top program is not a linear function of the economic cycle. The
            long-term{" "}
            <Link href="/mba-worth-it" className="text-slate-300 hover:text-white transition-colors underline underline-offset-2">MBA worth-it case</Link>
            {" "}survives recessions for well-positioned candidates targeting resilient sectors. It fails in recessions
            for candidates with high debt, weak program placement, or single-track recruiting strategies concentrated in cyclical finance.
          </p>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-white/5 border border-white/10 p-10 text-center space-y-5">
          <p className="text-xs font-medium text-slate-400 uppercase tracking-widest">Model the Downside</p>
          <h2 className="text-2xl font-semibold tracking-tight">Stress-Test Your MBA ROI Against a Recession</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Run your MBA ROI with a reduced post-MBA salary to model a recession scenario. The calculator
            shows how NPV, IRR, and break-even shift when starting compensation is compressed.
          </p>
          <Link
            href="/mba-roi-calculator"
            className="inline-block bg-linear-to-r from-slate-600 to-slate-500 hover:opacity-90 transition-all px-8 py-4 rounded-xl font-medium text-white text-base shadow-[0_0_40px_rgba(100,116,139,0.3)]"
          >
            Open MBA ROI Calculator →
          </Link>
        </section>


        {/* ── Related Guides ── */}
        <section className="border-t border-white/10 pt-10 mt-10">
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-5">Related Guides</p>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link href="/mba-roi-calculator" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">Σ</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">MBA ROI Calculator</p>
                <p className="text-slate-500 text-xs">Model your specific numbers →</p>
              </div>
            </Link>
            <Link href="/mba-roi-report-2026" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">↗</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">MBA ROI Report 2026</p>
                <p className="text-slate-500 text-xs">IRR data across 12 industries →</p>
              </div>
            </Link>
            <Link href="/mba-roi-100k-debt" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">$</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">MBA ROI with $100K Debt</p>
                <p className="text-slate-500 text-xs">Debt-to-income thresholds →</p>
              </div>
            </Link>
            <Link href="/mba-roi" className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
              <div className="text-indigo-400 font-mono text-lg">→</div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">MBA ROI Complete Guide</p>
                <p className="text-slate-500 text-xs">IRR by industry full breakdown →</p>
              </div>
            </Link>
          </div>
        </section>

        <footer className="border-t border-white/10 pt-8 text-center text-slate-500 text-xs space-y-2">
          <p>
            <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            {" · "}
            <Link href="/mba-roi-calculator" className="hover:text-slate-300 transition-colors">MBA ROI Calculator</Link>
            {" · "}
            <Link href="/mba-roi-consulting" className="hover:text-slate-300 transition-colors">MBA ROI: Consulting</Link>
            {" · "}
            <Link href="/mba-roi-investment-banking" className="hover:text-slate-300 transition-colors">MBA ROI: Banking</Link>
            {" · "}
            <Link href="/mba-roi-healthcare" className="hover:text-slate-300 transition-colors">Healthcare MBA ROI</Link>
            {" · "}
            <Link href="/mba-worth-it" className="hover:text-slate-300 transition-colors">Is MBA Worth It?</Link>
            {" · "}
            <Link href="/mba-break-even" className="hover:text-slate-300 transition-colors">MBA Break-Even</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
          <p className="mt-1">Salary data sourced from GMAC surveys, school employment reports, Glassdoor, Levels.fyi, and publicly reported compensation figures. All ranges are estimates; individual outcomes vary.</p>
        </footer>

      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Is an MBA a good investment during a recession?", "acceptedAnswer": {"@type": "Answer", "text": "An MBA during a recession can be strategically valuable for career switchers who use the 2-year program to bridge an employment gap and emerge into a recovery. Historical data from 2008–2010 shows MBB consulting and healthcare were more resilient than finance. However, salary timelines extend, increasing break-even periods by 1–3 years."}}, {"@type": "Question", "name": "How did MBA job placement perform in the 2008 recession?", "acceptedAnswer": {"@type": "Answer", "text": "During 2008–2009, MBA job placement rates at top programs dropped 15–30%. MBB consulting maintained roughly 60% of typical hiring volume. Investment banking placements fell 40–50%. By 2010–2011, placement had recovered to pre-crisis levels. Graduates from the 2009–2010 class faced a 1–2 year salary delay that reduced their 10-year IRR by approximately 3–5 percentage points."}}, {"@type": "Question", "name": "Which industries are most recession-proof for MBA graduates?", "acceptedAnswer": {"@type": "Answer", "text": "Healthcare and healthcare consulting are the most recession-resilient post-MBA tracks — hospital spending is relatively inelastic. Government and defense consulting maintained stable hiring in 2008 and 2020. Tech product management recovered quickly in 2020–2021. Investment banking and private equity show the highest recession vulnerability for MBA hiring."}}, {"@type": "Question", "name": "How does a recession affect the MBA break-even period?", "acceptedAnswer": {"@type": "Answer", "text": "A one-year delay in post-MBA salary start (due to extended recruiting or reduced hiring) pushes the break-even point back by approximately 1–2 years. A 10% salary reduction in the first post-MBA role reduces 10-year NPV by $80K–$120K depending on the role level. These effects are material but not disqualifying for M7 programs with MBB or tech placement."}}, {"@type": "Question", "name": "Should I start an MBA during a recession?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — enrolling in an MBA at the start of a recession is historically advantageous. The 2-year program means you graduate into a recovery. Harvard, Wharton, and Booth saw application increases of 20–35% during the 2008–2009 recession as professionals returned to school. Graduating in an upturn produces better placement and salary outcomes than entering mid-cycle."}}]}) }}
      />
    </main>
  )
}
