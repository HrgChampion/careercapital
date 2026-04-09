import Link from "next/link"
import { pageAlternates } from "@/lib/seo"

export const metadata = {
  title: "MBA Scholarships 2026: Merit Aid, Fellowships & How Aid Changes Your ROI",
  description:
    "Complete guide to MBA scholarships, fellowships, and merit aid in 2026. See which programs offer the most aid, how to negotiate, and how each dollar of scholarship changes your MBA ROI.",
  alternates: pageAlternates("https://careerreturns.com/mba-scholarships"),
  openGraph: {
    title: "MBA Scholarships 2026: Merit Aid, Fellowships & How Aid Changes Your ROI",
    description:
      "Complete guide to MBA scholarships, fellowships, and merit aid in 2026. See which programs offer the most aid, how to negotiate, and how each dollar of scholarship changes your MBA ROI.",
    url: "https://careerreturns.com/mba-scholarships",
    siteName: "CareerReturns",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@careerreturns",
    title: "MBA Scholarships 2026: Merit Aid, Fellowships & How Aid Changes Your ROI",
    description:
      "A $65K scholarship reduces MBA break-even from 7 years to 4. Full guide to merit aid, fellowships, and negotiation tactics.",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much MBA scholarship can I get?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At M7 programs, 25–40% of admits receive merit aid ranging from $40K to $80K total. At T15 programs, 40–55% of admits receive aid with a median of $30K–$60K. At T25 programs, 50–70% of admits receive aid averaging $20K–$45K. External fellowships such as Forté, Consortium, or Toigo can add another $10K–$50K on top of school merit aid.",
      },
    },
    {
      "@type": "Question",
      name: "Can I negotiate MBA scholarships?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Scholarship negotiation succeeds approximately 35–50% of the time at T15–T25 programs when you have a competing offer from a peer school in writing. The most effective approach is to request a scholarship review meeting (not email), name the competing program and specific award amount, and frame the conversation around yield rather than financial need.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Forté Fellowship?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Forté Fellowship is awarded to women pursuing MBAs at 50+ partner schools. Awards range from $10K to $50K per year and can be stacked on top of school merit aid. Forté also provides access to a professional network, leadership events, and corporate sponsors. Candidates apply directly through participating schools during the admissions process.",
      },
    },
    {
      "@type": "Question",
      name: "Do scholarships affect MBA prestige or employer perception?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Scholarships do not appear on your degree, transcript, or resume. Employers see only the school name and MBA credential. Scholarship recipients and full-pay students attend the same classes, access the same career services, and recruit through the same on-campus channels. There is zero employer perception difference.",
      },
    },
    {
      "@type": "Question",
      name: "When are MBA scholarships announced?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most schools announce scholarship awards with admissions decisions in Round 1 (October–December) and Round 2 (January–March). Scholarship amounts can sometimes be revised after April 15, when yield decisions are made and schools have more flexibility to offer additional aid to candidates still deciding. Following up in April–May after initial waitlist movement can produce additional awards.",
      },
    },
  ],
}

export default function MbaScholarshipsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-amber-600/15 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12 sm:space-y-20">

        <header className="space-y-5">
          <p className="text-xs font-medium text-amber-400 uppercase tracking-widest">CareerReturns · MBA Scholarships</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            MBA Scholarships 2026:<br />How Merit Aid Changes Your ROI
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            The average M7 scholarship recipient receives{" "}
            <span className="text-white font-medium">$30K–$80K in aid</span>. A $65K scholarship reduces
            break-even from 7 years to 4. This guide covers where aid comes from, how to maximize it,
            and how each scholarship dollar affects your NPV.
          </p>
        </header>

        {/* Section 1: How MBA Scholarship Aid Works */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">How MBA Scholarship Aid Works</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            MBA financial aid arrives through three distinct channels. Understanding which type you qualify
            for — and how they interact — determines how aggressively you should pursue each one before
            committing to a program.
          </p>
          <div className="space-y-3">
            {[
              {
                label: "1. Merit Scholarships",
                sub: "No repayment required. Most impactful on ROI.",
                body: "Awarded directly by the school based on GMAT/GRE scores, undergraduate GPA, work experience quality, and career achievement. Merit scholarships require zero repayment and reduce the total economic cost of the program dollar-for-dollar. Because the post-MBA salary outcome stays constant regardless of scholarship size, every dollar of merit aid flows directly to NPV improvement. This is the single highest-leverage financial variable in MBA ROI.",
                color: "text-amber-400",
              },
              {
                label: "2. Need-Based Grants",
                sub: "Rare at MBA level. Based on Expected Family Contribution (EFC).",
                body: "Need-based grants are uncommon at MBA programs but available at a select few including Wharton, HBS, and Booth. Eligibility is determined through a financial aid application that calculates your Expected Family Contribution. These grants do not require repayment and can be substantial — HBS awards need-based aid averaging $30K–$45K per year for eligible students. If you have a household income under $120K, it is worth applying even if you expect merit aid.",
                color: "text-amber-400",
              },
              {
                label: "3. External Fellowships",
                sub: "Stack on top of school merit aid. $10K–$50K additional.",
                body: "Corporate-funded and affinity-group fellowships are awarded independently of the school's aid budget and can be layered on top of existing merit scholarships. Programs like Forté (women), Consortium (underrepresented minorities), and Robert Toigo Foundation (finance careers) each add $10K–$50K in additional non-repayable aid. Critically, these fellowships have their own application processes — you must apply separately and often before or concurrent with your MBA applications.",
                color: "text-amber-400",
              },
            ].map(({ label, sub, body, color }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <h3 className="text-base font-semibold text-white">{label}</h3>
                <p className={`${color} text-xs font-medium`}>{sub}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: MBA Merit Scholarship Amounts by School Tier */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">MBA Merit Scholarship Amounts by School Tier</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Schools use merit scholarships strategically to hit yield goals — the percentage of admitted
            students who enroll. This means scholarship amounts are not purely a reflection of your
            credentials; they also reflect how much the school wants you relative to its yield target.
          </p>
          <div className="space-y-3">
            {[
              {
                tier: "M7 Programs",
                pctAdmits: "25–40% of admits receive merit aid",
                median: "$40K–$80K total award",
                notes:
                  "Wharton is known for the highest merit awards among M7 programs. Stanford GSB and HBS offer almost no merit aid — both operate need-based-only financial aid systems. Booth, Kellogg, and Columbia offer meaningful merit scholarships. MIT Sloan awards merit aid to select candidates.",
                color: "text-amber-400",
              },
              {
                tier: "T15 Programs",
                pctAdmits: "40–55% of admits receive merit aid",
                median: "$30K–$60K total award",
                notes:
                  "Tuck (Dartmouth), Fuqua (Duke), and Darden (UVA) are consistently among the most generous scholarship programs in this tier. These schools compete actively for candidates who also hold M7 admits, and scholarship leverage is highest here. T15 programs are where negotiation most frequently succeeds.",
                color: "text-amber-300",
              },
              {
                tier: "T25 Programs",
                pctAdmits: "50–70% of admits receive merit aid",
                median: "$20K–$45K total award",
                notes:
                  "T25 schools use scholarships most aggressively to recruit strong candidates who have T15 and M7 options. Full-tuition offers at T25 programs for top-quartile applicants are not uncommon. If you are a strong candidate choosing between T25 with substantial aid and T15 without aid, the NPV comparison deserves careful modeling.",
                color: "text-amber-200",
              },
            ].map(({ tier, pctAdmits, median, notes, color }) => (
              <div key={tier} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="text-base font-semibold text-white">{tier}</h3>
                  <span className={`${color} text-xs font-semibold`}>{median}</span>
                </div>
                <p className="text-amber-400/70 text-xs font-medium">{pctAdmits}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{notes}</p>
              </div>
            ))}
          </div>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5">
            <p className="text-amber-200 text-sm leading-relaxed">
              <span className="font-semibold text-white">Strategic note:</span> Schools use scholarships
              to hit yield rate goals. A school with a 50% yield target that has admitted 200 candidates
              and needs 100 enrollments will increase scholarship offers to borderline candidates in
              April–May. This is why following up after Round 2 decision deadlines can produce additional aid.
            </p>
          </div>
        </section>

        {/* Section 3: External Fellowships */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">External Fellowships and Grants</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            These fellowships operate independently of school merit aid and can be stacked on top of
            existing scholarships. Each has its own application process and deadline — most must be
            applied for during or before the MBA admissions cycle.
          </p>
          <div className="space-y-3">
            {[
              {
                name: "Forté Fellowship",
                target: "Women pursuing MBA",
                amount: "$10K–$50K per year",
                schools: "50+ partner schools",
                detail:
                  "One of the largest MBA fellowship programs for women. Awards are made through partner schools and can be combined with school merit aid. Forté Fellows also gain access to corporate sponsors, a career network, and leadership development programming throughout the MBA.",
              },
              {
                name: "Consortium for Graduate Study in Management",
                target: "Underrepresented minorities (Black, Hispanic, Native American)",
                amount: "Full tuition possible",
                schools: "20+ member schools",
                detail:
                  "Full-tuition fellowships at member programs including Michigan Ross, UVA Darden, Emory Goizueta, and others. One of the most financially significant fellowship programs available. Consortium admission is separate from regular admissions and requires an additional application.",
              },
              {
                name: "Robert Toigo Foundation",
                target: "Underrepresented minorities in finance careers",
                amount: "$5K–$20K + mentorship",
                schools: "All AACSB programs",
                detail:
                  "Toigo Fellows gain direct access to a network of senior finance executives across private equity, investment management, and banking. The mentorship and network value often exceeds the financial award for candidates targeting finance careers.",
              },
              {
                name: "SEO MBA Fellowship",
                target: "Underrepresented minorities targeting finance and business",
                amount: "$5K–$15K",
                schools: "Select partner programs",
                detail:
                  "Sponsors for Educational Opportunity (SEO) offers direct placement support and fellowship funding for candidates targeting investment banking and private equity. SEO's network access in finance recruiting is often the primary draw.",
              },
              {
                name: "Reaching Out MBA (ROMBA) Fellowship",
                target: "LGBTQ+ MBA candidates",
                amount: "$15K–$35K",
                schools: "30+ partner schools",
                detail:
                  "ROMBA Fellows receive direct funding and access to the Out for Undergrad and Reaching Out MBA professional networks. Awards are announced at the annual ROMBA Conference. Applications open in the spring.",
              },
              {
                name: "Howard University Scholars Program",
                target: "African American MBA candidates",
                amount: "Varies by school partnership",
                schools: "Select HBCUs and partner programs",
                detail:
                  "Provides funding and mentorship for Black MBA candidates. Programs vary by institution. Worth investigating alongside Consortium membership for candidates who qualify for both.",
              },
            ].map(({ name, target, amount, schools, detail }) => (
              <div key={name} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <h3 className="text-base font-semibold text-white">{name}</h3>
                  <span className="text-amber-400 text-xs font-semibold shrink-0">{amount}</span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-white/5 border border-white/10 rounded px-2 py-0.5 text-slate-400">{target}</span>
                  <span className="bg-white/5 border border-white/10 rounded px-2 py-0.5 text-slate-400">{schools}</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Most external fellowships are non-repayable and can be combined with school merit aid.
            A candidate who receives a $40K Forté Fellowship plus a $50K school merit award has effectively
            reduced total program cost by $90K — turning a marginal ROI case into a strong one.
          </p>
        </section>

        {/* Section 4: How to Negotiate */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">How to Negotiate Your MBA Scholarship</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Scholarship negotiation succeeds approximately{" "}
            <span className="text-white font-medium">35–50% of the time</span> at T15–T25 programs
            when done correctly. At M7 programs the success rate is lower but not zero. The key is
            giving the admissions committee a concrete, documentable reason to increase your award.
          </p>
          <div className="space-y-3">
            {[
              {
                step: "1",
                title: "Get competing offers in writing first",
                body: "Before initiating any scholarship discussion, ensure you have at least one competing offer from a peer program documented in an official admissions letter. Verbal references to other programs carry almost no weight. The written offer is your negotiating currency.",
              },
              {
                step: "2",
                title: "Request a scholarship review meeting — not an email",
                body: "Email requests for scholarship increases are easy to decline with a form response. A scheduled phone or video call with an admissions officer creates a real conversation where you can explain your situation, answer questions, and build rapport. Request a 15-minute call explicitly to discuss your financial decision.",
              },
              {
                step: "3",
                title: "Frame around yield, not financial need",
                body: 'The most effective framing is not "I can\'t afford your program" — it is "I am choosing between your program and [peer program] and would love to make [your school] work financially." Admissions officers understand yield management. You are offering them a chance to convert a candidate they want.',
              },
              {
                step: "4",
                title: "Provide the specific competing offer amount",
                body: "Name the competing program and the exact scholarship amount. Admissions officers need a number they can bring to the scholarship committee — vague references to better offers elsewhere rarely produce results. Specificity signals legitimacy and gives them something concrete to match or respond to.",
              },
              {
                step: "5",
                title: "Follow up in April–May after waitlist movement",
                body: "Schools have the most scholarship flexibility in April and May when yield decisions are made, waitlists are cleared, and unclaimed aid from declined admits becomes available. If your initial negotiation attempt in February–March was unsuccessful, a follow-up in late April can succeed when it would not have earlier.",
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 font-mono text-sm font-bold bg-amber-400/10 px-2 py-0.5 rounded shrink-0">
                    {step}
                  </span>
                  <h3 className="text-base font-semibold text-white leading-snug">{title}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed pl-9">{body}</p>
              </div>
            ))}
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <p className="text-amber-400 text-xs font-semibold mb-1">Data Point</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Scholarship negotiation succeeds most often when: (1) you have a competing written offer,
              (2) both programs are in a similar tier, and (3) you initiate the conversation within
              2–3 weeks of the admissions decision. Waiting until the deposit deadline to negotiate
              significantly reduces your leverage.
            </p>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            For a deeper framework on how scholarship amounts affect the full financial model, see the{" "}
            <Link href="/mba-roi-scholarship" className="text-amber-400 hover:text-amber-300 transition-colors underline underline-offset-2">
              MBA Scholarship ROI guide
            </Link>
            {" "}which models specific break-even scenarios at 25%, 50%, and 100% scholarship levels.
          </p>
        </section>

        {/* Section 5: ROI table */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">How Each Scholarship Dollar Changes Your ROI</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The table below models six scholarship scenarios at an M7 program for a consulting-track
            candidate. Pre-MBA salary: $85K. Post-MBA target: MBB associate at $205K. Total program
            cost at full tuition: ~$415K (tuition + living + opportunity cost). Loan: 60% of remaining
            cost at 6.5%.
          </p>
          <div className="space-y-3">
            {[
              { scholarship: "No scholarship", schAmt: "$0", breakEven: "4.5 yr", irr: "22%", highlight: false },
              { scholarship: "$20K scholarship", schAmt: "$20K", breakEven: "4.0 yr", irr: "24%", highlight: false },
              { scholarship: "$40K scholarship", schAmt: "$40K", breakEven: "3.6 yr", irr: "27%", highlight: false },
              { scholarship: "$65K scholarship", schAmt: "$65K", breakEven: "3.1 yr", irr: "31%", highlight: true },
              { scholarship: "$100K scholarship", schAmt: "$100K", breakEven: "2.5 yr", irr: "38%", highlight: false },
              { scholarship: "Full tuition ($160K+)", schAmt: "$160K+", breakEven: "1.8 yr", irr: "58%+", highlight: false },
            ].map(({ scholarship, schAmt, breakEven, irr, highlight }) => (
              <div
                key={scholarship}
                className={`bg-white/5 border rounded-xl p-4 ${highlight ? "border-amber-500/40 bg-amber-500/5" : "border-white/10"}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <p className={`text-sm font-semibold ${highlight ? "text-amber-300" : "text-white"}`}>{scholarship}</p>
                    <p className="text-slate-500 text-xs">Award: {schAmt}</p>
                  </div>
                  <div className="flex gap-6 text-sm">
                    <div>
                      <p className="text-slate-500 text-xs mb-0.5">Break-even</p>
                      <p className={`font-semibold ${highlight ? "text-amber-400" : "text-slate-300"}`}>{breakEven}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs mb-0.5">IRR</p>
                      <p className={`font-semibold ${highlight ? "text-amber-400" : "text-slate-300"}`}>{irr}</p>
                    </div>
                  </div>
                </div>
                {highlight && (
                  <p className="text-amber-400/80 text-xs mt-2">
                    ← This is the median M7 scholarship award range. A $65K award alone shifts break-even by 1.4 years.
                  </p>
                )}
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs">
            Assumptions: M7 two-year program. Pre-MBA salary $85K. Post-MBA salary $205K (MBB associate). Living + books $74K.
            Opportunity cost $140K. Loan: 60% of net cost, 6.5% rate, 10-year repayment. IRR calculated over 10-year horizon.
            All figures are estimates; individual outcomes vary.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Use the{" "}
            <Link href="/mba-roi-calculator" className="text-amber-400 hover:text-amber-300 transition-colors underline underline-offset-2">
              MBA ROI Calculator
            </Link>
            {" "}to model your specific scholarship scenario with your actual pre-MBA salary and target post-MBA outcome.
          </p>
        </section>

        {/* Section 6: Scholarship vs Lower-Ranked School */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Scholarship vs. Lower-Ranked School: The Decision Framework</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The most debated financial decision in MBA admissions:{" "}
            <span className="text-white font-medium">full scholarship at T15 vs. no scholarship at M7</span>.
            The correct answer depends almost entirely on your target career track and which employers you
            need access to.
          </p>
          <div className="space-y-3">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
              <h3 className="text-base font-semibold text-white">The Core Rule</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                If both programs place into your target sector and your target companies, take the
                scholarship. If only the M7 places into your target employer (McKinsey, Goldman Sachs,
                Google PM), the prestige premium is worth more than the scholarship in expected-value terms.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
              <h3 className="text-base font-semibold text-white">How to Quantify It</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                If an M7 adds <span className="text-white font-medium">$30K/year</span> in salary over
                the T15 outcome for your target role, that is approximately{" "}
                <span className="text-white font-medium">$300K over 10 years</span> (undiscounted).
                Compare that to the scholarship savings. If the T15 scholarship saves $120K and the
                M7 salary premium is $300K, the M7 wins on 10-year NPV by a wide margin.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                But if the salary differential is only $10K/year — common in corporate strategy,
                healthcare management, or nonprofit leadership roles — the scholarship saves more
                than the M7 earns. At $10K/year premium and $120K scholarship savings, the T15 wins.
              </p>
            </div>
            <div className="space-y-2">
              {[
                {
                  scenario: "MBB consulting target",
                  verdict: "M7 often wins",
                  body: "MBB placement probability at M7 (~12%) vs T15 (~4%) creates an expected-value premium that often exceeds the scholarship savings, especially when the MBB salary differential is $50K–$80K vs non-MBB consulting.",
                  color: "text-amber-400",
                },
                {
                  scenario: "Corporate strategy / general management",
                  verdict: "T15 scholarship almost always wins",
                  body: "M7 and T15 programs both place into corporate strategy roles at similar companies. The salary differential is $5K–$15K/year. A $120K scholarship savings almost always outweighs this. The M7 at full cost is rarely justified for corporate strategy.",
                  color: "text-green-400",
                },
                {
                  scenario: "Tech product management",
                  verdict: "Depends on target company tier",
                  body: "FAANG PM roles recruit from both M7 and T15. If your target is Google, Meta, or Apple PM, the M7 network access may be worth the premium. For mid-tier tech or post-MBA startup paths, T15 with scholarship wins decisively.",
                  color: "text-teal-400",
                },
                {
                  scenario: "Finance (IB, PE, HF)",
                  verdict: "M7 or specific T15 finance programs",
                  body: "Bulge-bracket banking and large PE funds recruit primarily from M7 programs plus a small set of finance-focused T15 programs (Fuqua, Stern, Darden). If BB banking is the target, verify whether the T15 has a direct recruiting pipeline before taking the scholarship over an M7.",
                  color: "text-amber-400",
                },
              ].map(({ scenario, verdict, body, color }) => (
                <div key={scenario} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="text-base font-semibold text-white">{scenario}</h3>
                    <span className={`${color} text-xs font-semibold`}>{verdict}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-white/5 border border-white/10 p-10 text-center space-y-5">
          <p className="text-xs font-medium text-amber-400 uppercase tracking-widest">Model Your Scholarship Scenarios</p>
          <h2 className="text-2xl font-semibold tracking-tight">See Exactly How Your Scholarship Changes ROI</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Run the MBA ROI Calculator twice — once at full tuition and once with your scholarship applied.
            The NPV difference is the precise financial value of your award. Takes two minutes.
          </p>
          <Link
            href="/mba-roi-calculator"
            className="inline-block bg-linear-to-r from-amber-600 to-yellow-600 hover:opacity-90 transition-all px-8 py-4 rounded-xl font-medium text-white text-base shadow-[0_0_40px_rgba(217,119,6,0.3)]"
          >
            Open MBA ROI Calculator →
          </Link>
        </section>

        {/* FAQ */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqSchema.mainEntity.map((q) => (
              <div key={q.name} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <h3 className="text-base font-semibold text-white">{q.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{q.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Guides */}
        <section className="border-t border-white/10 pt-10 mt-10">
          <p className="text-xs font-medium text-amber-400 uppercase tracking-widest mb-5">Related Guides</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: "/mba-roi-scholarship", icon: "Σ", title: "MBA Scholarship ROI", sub: "Break-even math at 25%, 50%, 100% aid →" },
              { href: "/mba-roi-calculator", icon: "Σ", title: "MBA ROI Calculator", sub: "Model your specific scholarship scenario →" },
              { href: "/mba-cost", icon: "$", title: "MBA Cost Breakdown 2026", sub: "Full program cost by school tier →" },
              { href: "/mba-roi", icon: "→", title: "MBA ROI Complete Guide", sub: "IRR, NPV & break-even by industry →" },
            ].map(({ href, icon, title, sub }) => (
              <Link
                key={href}
                href={href}
                className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all"
              >
                <div className="text-amber-400 font-mono text-lg">{icon}</div>
                <div>
                  <p className="text-white text-sm font-medium group-hover:text-amber-300 transition-colors">{title}</p>
                  <p className="text-slate-500 text-xs">{sub}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <footer className="border-t border-white/10 pt-8 text-center text-slate-500 text-xs space-y-2">
          <p>
            <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            {" · "}
            <Link href="/mba-roi-scholarship" className="hover:text-slate-300 transition-colors">MBA Scholarship ROI</Link>
            {" · "}
            <Link href="/mba-roi-calculator" className="hover:text-slate-300 transition-colors">MBA ROI Calculator</Link>
            {" · "}
            <Link href="/mba-cost" className="hover:text-slate-300 transition-colors">MBA Cost</Link>
            {" · "}
            <Link href="/mba-roi" className="hover:text-slate-300 transition-colors">MBA ROI</Link>
          </p>
          <p>Rational decisions. Compounding outcomes.</p>
          <p className="mt-1">Salary data sourced from GMAC surveys, school employment reports, Glassdoor, Levels.fyi, and publicly reported compensation figures. All ranges are estimates; individual outcomes vary.</p>
        </footer>

      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  )
}
