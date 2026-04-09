import Link from "next/link"
import { pageAlternates } from "@/lib/seo"

export const metadata = {
  title: "No-GMAT MBA ROI 2026: Does Skipping the GMAT Hurt Your MBA Return?",
  description:
    "Do no-GMAT MBA programs deliver the same ROI as GMAT-required programs? Salary outcomes, employer perception, accreditation, and break-even data for GMAT-waiver MBA programs in 2026.",
  alternates: pageAlternates("https://careerreturns.com/no-gmat-mba-roi"),
  openGraph: {
    title: "No-GMAT MBA ROI 2026: Does Skipping the GMAT Hurt Your MBA Return?",
    description:
      "Do no-GMAT MBA programs deliver the same ROI as GMAT-required programs? Salary outcomes, employer perception, accreditation, and break-even data for GMAT-waiver MBA programs in 2026.",
    url: "https://careerreturns.com/no-gmat-mba-roi",
    siteName: "CareerReturns",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@careerreturns",
    title: "No-GMAT MBA ROI 2026: Does Waiving the GMAT Cost You Salary?",
    description:
      "GMAT waiver at Booth = same $175K+ salary as GMAT students. No-GMAT online program = different question. The distinction that matters for ROI.",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do no-GMAT MBAs have lower salary outcomes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends entirely on the program. A GMAT waiver at an M7 or T15 program produces the same salary outcomes as a GMAT-submitting student at that same program — employers don't see GMAT scores. A no-GMAT online or regional program has lower salary outcomes, but that's driven by program quality and employer recognition, not the absence of a GMAT score itself.",
      },
    },
    {
      "@type": "Question",
      name: "What is a GMAT waiver?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A GMAT waiver is permission from a specific MBA program to apply without submitting a GMAT score. Waivers are typically granted based on significant work experience (usually 5–10+ years), a graduate degree, a high GPA, or senior professional credentials. A waiver is not the same as a no-GMAT school — you are still admitted to the full program with identical outcomes.",
      },
    },
    {
      "@type": "Question",
      name: "Which top MBA programs offer GMAT waivers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most M7 and T15 programs offer experience-based GMAT waivers for senior professionals, though criteria vary. Kellogg, Booth, Wharton, and HBS 2+2 all grant waivers in specific circumstances. Part-time and executive MBA programs at top schools also commonly waive the GMAT for candidates with 8+ years of experience. Check each program's current waiver policy directly as criteria change annually.",
      },
    },
    {
      "@type": "Question",
      name: "Does GMAT score affect MBA ROI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GMAT score affects which programs you can access, which affects salary outcomes. Employers do not see GMAT scores and do not factor them into hiring decisions. However, a higher GMAT score unlocks access to higher-tier programs (which have better salary outcomes) and can also increase merit scholarship awards — both of which improve ROI. The GMAT score itself does not affect salary; it affects program access, which affects salary.",
      },
    },
    {
      "@type": "Question",
      name: "Is GRE the same as no-GMAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. GRE-accepting programs are not no-GMAT schools — they accept a different standardized test, not an absence of testing. All M7 programs and most T15 programs now accept GRE scores interchangeably with GMAT. Submitting a strong GRE score to Wharton is equally valid as submitting a GMAT score. A GMAT waiver is a separate category where no standardized test score is required.",
      },
    },
  ],
}

export default function NoGmatMbaRoiPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-teal-600/15 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12 sm:space-y-20">

        <header className="space-y-5">
          <p className="text-xs font-medium text-teal-400 uppercase tracking-widest">CareerReturns · No-GMAT MBA ROI</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            No-GMAT MBA ROI 2026:<br />Does Waiving the GMAT Cost You Salary?
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Over <span className="text-white font-medium">200 accredited MBA programs</span> now offer
            GMAT waivers. The question is not whether you can skip the test — it is whether doing so
            hurts your salary outcomes and long-term career trajectory.
          </p>
        </header>

        {/* Section 1: What No-GMAT Actually Means */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">What "No-GMAT MBA" Actually Means</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            "No-GMAT MBA" is a label that covers three fundamentally different situations — each with
            different ROI implications. Conflating them leads to bad decisions in either direction.
          </p>
          <div className="space-y-3">
            {[
              {
                type: "Type 1: Experience-Based Waiver at a Top Program",
                verdict: "Same outcomes as GMAT students",
                verdictColor: "text-green-400",
                body: "Schools grant waivers to senior professionals with 5+ years of experience, graduate degrees, or other credentials that substitute for standardized test signal. You are admitted to the same full-time program, earn the same degree, attend the same classes, and access the same recruiting pipelines. Your GMAT waiver is invisible to employers. This is the most financially important category to understand: a waiver at Booth produces the same $175K–$210K outcome as a GMAT-submitting Booth student.",
              },
              {
                type: "Type 2: No-GMAT as Standard Policy (Open Enrollment or Online Programs)",
                verdict: "Outcomes vary by program quality",
                verdictColor: "text-amber-400",
                body: "Some programs — particularly online, regional, and open-enrollment MBAs — do not require the GMAT as standard policy for all applicants. These are not waivers; they simply don't use the test. Salary outcomes at these programs vary from $70K–$120K depending on program prestige and employer recognition. The lower salary outcomes are caused by program tier, not by absence of a GMAT score.",
              },
              {
                type: "Type 3: GRE Instead of GMAT",
                verdict: "Not a waiver — equally valued",
                verdictColor: "text-teal-400",
                body: "All M7 programs and most T15 programs accept GRE scores interchangeably with GMAT. Submitting a strong GRE to Wharton is not a GMAT waiver — it is submitting an accepted alternative test. Admissions outcomes and post-MBA salary outcomes are identical for GRE and GMAT submitters at the same program. If you score better on the GRE, use it.",
              },
            ].map(({ type, verdict, verdictColor, body }) => (
              <div key={type} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <h3 className="text-base font-semibold text-white leading-snug">{type}</h3>
                  <span className={`${verdictColor} text-xs font-semibold shrink-0`}>{verdict}</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl p-5">
            <p className="text-teal-200 text-sm leading-relaxed">
              <span className="font-semibold text-white">Critical distinction:</span> A GMAT waiver at
              a top program is not the same as a no-GMAT school. The former gives you access to the
              same outcomes as GMAT-submitting peers. The latter is a different program with different
              outcomes. Most ROI discussions conflate these two categories and reach wrong conclusions.
            </p>
          </div>
        </section>

        {/* Section 2: GMAT Waiver ROI */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">GMAT Waiver ROI: Does It Affect Salary?</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The short answer:{" "}
            <span className="text-white font-medium">
              no, at top programs. Yes, at lower-tier programs — but not for the reason you think.
            </span>
          </p>
          <div className="space-y-3">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
              <h3 className="text-base font-semibold text-white">At M7 and T15 Programs</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                GMAT waiver students who qualify on work experience have{" "}
                <span className="text-white font-medium">identical salary outcomes</span> to GMAT-submitting
                peers at the same program. Employers hiring from Kellogg, Booth, or Fuqua see the school
                name and the degree. They do not see — and do not ask about — GMAT scores. A McKinsey
                recruiter on campus at Kellogg is offering the same associate role to waiver students and
                740-GMAT students alike.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
              <h3 className="text-base font-semibold text-white">At No-GMAT Online and Regional Programs</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Salary outcome differences at these programs are real, but they are driven by{" "}
                <span className="text-white font-medium">program quality and employer recognition</span>,
                not the absence of a GMAT score. A no-GMAT online program from a non-AACSB school has weak
                outcomes because employers don&apos;t recognize it — not because applicants didn&apos;t
                take a test. An AACSB-accredited no-GMAT program like Kelley Online or UNC Kenan-Flagler
                Online produces $90K–$120K outcomes for the same reason any Kelley or UNC degree does:
                employer brand recognition.
              </p>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            For a full breakdown of online vs. full-time MBA salary outcomes and break-even comparison, see
            the{" "}
            <Link href="/mba-roi-online-vs-full-time" className="text-teal-400 hover:text-teal-300 transition-colors underline underline-offset-2">
              online vs. full-time MBA ROI guide
            </Link>.
          </p>
        </section>

        {/* Section 3: Programs by Tier */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">No-GMAT Programs by Tier: Salary Outcomes</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The key data point: your salary outcome is determined by which school you attend, not whether
            you submitted a GMAT score to get there.
          </p>
          <div className="space-y-3">
            {[
              {
                tier: "Top Programs Granting Experience-Based Waivers",
                examples: "Harvard HBS 2+2, Kellogg, Booth, Wharton (senior professionals)",
                salaryRange: "$175K–$210K",
                note: "Same salary outcomes as GMAT-submitting students. Employers see the school name, not the admission pathway. Waiver eligibility typically requires 7–10+ years of experience with demonstrated career progression.",
                color: "text-teal-400",
              },
              {
                tier: "AACSB-Accredited No-GMAT Online Programs",
                examples: "Indiana Kelley Online, UNC Kenan-Flagler Online, Syracuse iMBA",
                salaryRange: "$90K–$120K",
                note: "Accredited, employer-recognized programs. GMAT not required as standard policy. Outcomes reflect program quality and employer brand — not test score absence. Strong ROI relative to cost due to zero opportunity cost structure.",
                color: "text-teal-300",
              },
              {
                tier: "Regional No-GMAT Programs (AACSB accredited)",
                examples: "State university programs, regional business schools",
                salaryRange: "$70K–$100K",
                note: "Outcomes depend heavily on local employer recognition. Strong in their regions, weaker nationally. The GMAT is not what limits outcomes here — it is geographic employer density and program prestige.",
                color: "text-slate-300",
              },
              {
                tier: "Non-AACSB No-GMAT Programs",
                examples: "Various online providers, non-accredited programs",
                salaryRange: "Minimal to no salary lift",
                note: "Non-AACSB programs produce minimal employer recognition regardless of other factors. The absence of GMAT is not the issue — the absence of accreditation is. Avoid for ROI purposes.",
                color: "text-red-400",
              },
            ].map(({ tier, examples, salaryRange, note, color }) => (
              <div key={tier} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <h3 className="text-base font-semibold text-white leading-snug">{tier}</h3>
                  <span className={`${color} text-sm font-semibold shrink-0`}>{salaryRange}</span>
                </div>
                <p className="text-slate-500 text-xs italic">{examples}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <p className="text-teal-400 text-xs font-semibold mb-1">Key Insight</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              A GMAT waiver at Booth produces the same $175K–$210K salary outcome as a GMAT-submitting
              Booth student. A no-GMAT online program at a non-recognized school produces minimal salary
              lift regardless of any other factor. The school, not the test, drives outcomes.
            </p>
          </div>
        </section>

        {/* Section 4: AACSB Accreditation */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">The Real ROI Question: Is Your Program AACSB Accredited?</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            If you are evaluating a no-GMAT program, the GMAT waiver is irrelevant to ROI.
            The single most important quality signal employers actually care about is{" "}
            <span className="text-white font-medium">AACSB accreditation</span>.
          </p>
          <div className="space-y-3">
            {[
              {
                label: "AACSB-Accredited + Employer-Recognized",
                verdict: "Strong ROI possible",
                verdictColor: "text-green-400",
                body: "AACSB accreditation signals faculty quality, curriculum standards, and institutional accountability. Combined with employer recognition — which takes decades to build — it creates the conditions for real salary lift. Whether the program requires GMAT or not is secondary.",
              },
              {
                label: "AACSB-Accredited + Limited Employer Recognition",
                verdict: "Moderate ROI, regional strength",
                verdictColor: "text-amber-400",
                body: "Many AACSB-accredited regional programs have limited national employer relationships but strong local ones. ROI is solid for candidates targeting local employers but weak for those who want broad geographic or sector mobility.",
              },
              {
                label: "Non-AACSB + No-GMAT + Online",
                verdict: "Lowest ROI — avoid",
                verdictColor: "text-red-400",
                body: "This combination represents the weakest possible credential in the MBA market. Employers who screen by accreditation will filter this out. The investment rarely produces meaningful salary lift and can produce credential confusion with serious employers.",
              },
            ].map(({ label, verdict, verdictColor, body }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="text-base font-semibold text-white">{label}</h3>
                  <span className={`${verdictColor} text-xs font-semibold`}>{verdict}</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            AACSB accreditation is held by approximately 900 business schools globally and around 570 in
            the United States. You can verify any program at{" "}
            <span className="text-white font-medium">aacsb.edu/accreditation</span>. Do not enroll in
            an MBA program without confirming AACSB accreditation if salary outcomes matter to you.
          </p>
        </section>

        {/* Section 5: GMAT Prep ROI */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">GMAT Prep Cost vs. Skipping the GMAT: ROI Comparison</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            GMAT preparation has one of the highest IRRs of any pre-MBA investment — if it unlocks a
            higher program tier. The math is stark.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
              <p className="text-xs font-medium text-slate-400 uppercase tracking-widest">Cost of GMAT Prep</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Self-study (books + online)</span>
                  <span className="text-white">$500–$800</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Prep course (Kaplan, Manhattan)</span>
                  <span className="text-white">$1,200–$2,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Private tutoring</span>
                  <span className="text-white">$2,000–$5,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Time investment</span>
                  <span className="text-white">100–200 hours</span>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
              <p className="text-xs font-medium text-teal-400 uppercase tracking-widest">ROI of 50-Point Improvement</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">T25 salary outcome</span>
                  <span className="text-white">$115K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">T15 salary outcome</span>
                  <span className="text-white">$145K</span>
                </div>
                <div className="flex justify-between border-t border-white/10 pt-2">
                  <span className="text-white font-medium">Annual delta</span>
                  <span className="text-teal-400 font-semibold">+$30K/yr</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white font-medium">10-year delta</span>
                  <span className="text-teal-400 font-semibold">+$300K</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl p-5">
            <p className="text-teal-200 text-sm leading-relaxed">
              <span className="font-semibold text-white">The ROI math:</span> $2,000 in GMAT prep costs
              that produces a 50-point score improvement and unlocks a T15 program (vs T25) adds{" "}
              <span className="font-semibold text-white">$30K/year in salary</span> — approximately $300K
              over 10 years (undiscounted). The IRR of GMAT preparation is{" "}
              <span className="font-semibold text-white">astronomically high</span> when it unlocks a
              tier jump. This is one of the most underestimated ROI calculations in pre-MBA decision-making.
            </p>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Use the{" "}
            <Link href="/mba-roi-calculator" className="text-teal-400 hover:text-teal-300 transition-colors underline underline-offset-2">
              MBA ROI Calculator
            </Link>
            {" "}to model the difference between a T25 and T15 outcome for your target career track, then
            compare to your GMAT prep cost. The numbers almost always favor preparing.
          </p>
        </section>

        {/* Section 6: When to Waive vs. Study */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">When to Use a GMAT Waiver vs. Study for the GMAT</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            This is a binary decision with large financial consequences. The framework below covers
            most candidate situations.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-green-500/20 rounded-xl p-5 space-y-3">
              <p className="text-xs font-semibold text-green-400 uppercase tracking-widest mb-1">Use a Waiver If</p>
              <div className="space-y-2">
                {[
                  "You have 7+ years of strong, progressive professional experience",
                  "You're targeting a program where you clearly qualify on work experience alone",
                  "Your target employers don't recruit based on MBA program tier",
                  "You already have a graduate degree (JD, MD, PhD) that substitutes for testing",
                  "You're pursuing an Executive MBA where waivers are standard",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-green-400 text-xs mt-0.5 shrink-0">✓</span>
                    <p className="text-slate-400 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 border border-amber-500/20 rounded-xl p-5 space-y-3">
              <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-1">Study for the GMAT If</p>
              <div className="space-y-2">
                {[
                  "You're targeting M7 or competitive T15 programs",
                  "You need scholarship leverage — high GMAT scores increase merit award offers",
                  "You have fewer than 5 years of experience",
                  "Your undergraduate GPA was below 3.3",
                  "You're making a significant career switch that requires a top program's network",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-amber-400 text-xs mt-0.5 shrink-0">→</span>
                    <p className="text-slate-400 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
            <h3 className="text-base font-semibold text-white">The Scholarship Consideration</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              A strong GMAT score does more than unlock admissions — it unlocks merit scholarships.
              Programs use GMAT scores as a primary variable in merit aid decisions. A 740 vs 680 GMAT
              at the same T15 program can mean the difference between a $20K scholarship and a $60K
              scholarship. The 60-point score improvement cost $2K in prep; the scholarship difference
              is $40K. This calculation alone — independent of admissions tier — can justify preparing
              for the GMAT rather than seeking a waiver.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              For a full analysis of how scholarship amounts change program ROI, see the{" "}
              <Link href="/mba-scholarships" className="text-teal-400 hover:text-teal-300 transition-colors underline underline-offset-2">
                MBA Scholarships guide
              </Link>.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-white/5 border border-white/10 p-10 text-center space-y-5">
          <p className="text-xs font-medium text-teal-400 uppercase tracking-widest">Model Your MBA ROI</p>
          <h2 className="text-2xl font-semibold tracking-tight">Compare Waiver Program vs. GMAT Program ROI</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Run the calculator with the tuition and salary outcome of your target program — whether or
            not it required a GMAT. The ROI depends on the program, not the test.
          </p>
          <Link
            href="/mba-roi-calculator"
            className="inline-block bg-linear-to-r from-teal-600 to-cyan-600 hover:opacity-90 transition-all px-8 py-4 rounded-xl font-medium text-white text-base shadow-[0_0_40px_rgba(20,184,166,0.3)]"
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
          <p className="text-xs font-medium text-teal-400 uppercase tracking-widest mb-5">Related Guides</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: "/mba-roi-calculator", icon: "Σ", title: "MBA ROI Calculator", sub: "Model any program's break-even →" },
              { href: "/mba-roi-online-vs-full-time", icon: "↗", title: "Online vs. Full-Time MBA ROI", sub: "Opportunity cost math explained →" },
              { href: "/mba-scholarships", icon: "$", title: "MBA Scholarships 2026", sub: "Merit aid, fellowships & negotiation →" },
              { href: "/mba-cost", icon: "→", title: "MBA Cost Breakdown 2026", sub: "Full program cost by tier →" },
              { href: "/mba-roi", icon: "→", title: "MBA ROI Complete Guide", sub: "IRR, NPV & break-even by industry →" },
            ].map(({ href, icon, title, sub }) => (
              <Link
                key={href}
                href={href}
                className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all"
              >
                <div className="text-teal-400 font-mono text-lg">{icon}</div>
                <div>
                  <p className="text-white text-sm font-medium group-hover:text-teal-300 transition-colors">{title}</p>
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
            <Link href="/mba-roi-calculator" className="hover:text-slate-300 transition-colors">MBA ROI Calculator</Link>
            {" · "}
            <Link href="/mba-roi-online-vs-full-time" className="hover:text-slate-300 transition-colors">Online vs Full-Time MBA</Link>
            {" · "}
            <Link href="/mba-scholarships" className="hover:text-slate-300 transition-colors">MBA Scholarships</Link>
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
