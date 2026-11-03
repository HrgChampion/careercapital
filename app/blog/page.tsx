import Link from "next/link"
import { pageAlternates } from "@/lib/seo"

export const metadata = {
  title: "MBA ROI & Career Finance Blog — CareerReturns",
  description:
    "In-depth articles on MBA ROI, career finance, salary negotiation, and return-to-work strategies. Data-driven analysis from the CareerReturns team.",
  alternates: pageAlternates("https://careerreturns.com/blog"),
  openGraph: {
    title: "MBA ROI & Career Finance Blog — CareerReturns",
    description: "Data-driven articles on MBA ROI, career finance, salary negotiation, and return-to-work strategies.",
    url: "https://careerreturns.com/blog",
    siteName: "CareerReturns",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | CareerReturns",
    description: "In-depth articles on MBA ROI, career finance, and return-to-work strategies.",
  },
}

const articles = [
  {
    slug: "how-to-calculate-mba-roi",
    title: "How to Actually Calculate MBA ROI (NPV, IRR, Break-Even)",
    description:
      "Most MBA ROI calculators get the math wrong. This guide walks through the correct discounted cash flow framework — opportunity cost, loan amortization, and all.",
    date: "March 20, 2026",
    readTime: "14 min read",
    tag: "Finance 101",
    tagColor: "text-blue-400",
    tagBg: "bg-blue-400/10 border-blue-400/20",
  },
  {
    slug: "mba-salary-negotiation",
    title: "How to Negotiate Your Post-MBA Salary: A Data-Driven Playbook",
    description:
      "Post-MBA offers are negotiable more often than recruiters admit. Here is what the data says about leverage points, timing, and how to close a $20k–$40k gap.",
    date: "March 17, 2026",
    readTime: "11 min read",
    tag: "Salary",
    tagColor: "text-violet-400",
    tagBg: "bg-violet-400/10 border-violet-400/20",
  },
  {
    slug: "mba-vs-masters-vs-bootcamp",
    title: "MBA vs. Master's vs. Bootcamp: ROI Comparison for 2026",
    description:
      "Three paths, three cost structures, three ROI profiles. We model the NPV of each so you can compare apples to apples before committing six figures.",
    date: "March 14, 2026",
    readTime: "13 min read",
    tag: "Comparison",
    tagColor: "text-amber-400",
    tagBg: "bg-amber-400/10 border-amber-400/20",
  },
  {
    slug: "career-break-return-strategies",
    title: "6 Strategies for Returning to Work After a Career Break",
    description:
      "A career gap of 1–3 years costs the average professional $180k–$320k in cumulative earnings. These six strategies minimize the damage and accelerate your return.",
    date: "March 10, 2026",
    readTime: "10 min read",
    tag: "Career Return",
    tagColor: "text-rose-400",
    tagBg: "bg-rose-400/10 border-rose-400/20",
  },
  {
    slug: "women-mba-roi",
    title: "The Gender MBA ROI Gap: What the Data Actually Shows",
    description:
      "Women face a persistent salary gap pre-MBA and a different one post-MBA. We break down the numbers and what that means for ROI projections, school selection, and career path.",
    date: "March 7, 2026",
    readTime: "11 min read",
    tag: "Research",
    tagColor: "text-pink-400",
    tagBg: "bg-pink-400/10 border-pink-400/20",
  },
]

// Evergreen guides, grouped by topic. Descriptions reuse figures already on each
// guide so the hub never contradicts the page it links to.
const guideGroups = [
  {
    id: "mba-worth-it",
    title: "Is an MBA Worth It?",
    intro:
      "Start here if you are still deciding whether to do an MBA at all. These guides weigh the full economic cost of the degree, including tuition, living costs and two years of forgone salary, against the extra pay it unlocks, and express the result as an IRR, NPV and break-even year. The short answer is that it depends on the school and the career you target: M7 graduates going into consulting or banking typically see IRRs of 18–40%, while programs outside the top 25 aimed at general management often return 2–6%. Read the plain-language verdict first, then the detailed analysis.",
    guides: [
      { href: "/mba-worth-it", label: "Is an MBA worth it in 2026?", desc: "IRR by school and industry: 18–40% at M7 into MBB/IB, 2–6% outside the T25." },
      { href: "/mba-roi", label: "MBA ROI: the complete financial analysis", desc: "IRR, NPV and break-even by industry, from 4% to 55%." },
      { href: "/mba-roi-report-2026", label: "MBA ROI Report 2026", desc: "Which programs pay back in under 4 years, with the full data set." },
      { href: "/mba-break-even", label: "MBA break-even period", desc: "How long it takes to earn back the degree: MBB 4.2–4.7 years, banking 4.5–5, tech 6–7." },
      { href: "/mba-cost", label: "True cost of an MBA", desc: "Economic cost by school, from $22K to $492K, including forgone salary." },
      { href: "/mba-roi-career-changers", label: "MBA ROI for career changers", desc: "Whether the pivot pays, by starting field and target role." },
      { href: "/mba-roi-recession", label: "MBA ROI in a recession", desc: "What 2008 and 2020 hiring data says about graduating into a downturn." },
      { href: "/mba-vs-masters-roi", label: "MBA vs. master's degree ROI", desc: "MS Finance, MSCS and MFin compared with the MBA on cost and pay." },
      { href: "/mba-myth-buster", label: "MBA Myth Buster", desc: "10 common MBA ROI beliefs tested against the data." },
    ],
  },
  {
    id: "mba-salary",
    title: "MBA Salary Data",
    intro:
      "What MBA graduates actually earn, broken down by school, industry and years since graduation. Two figures anchor all of these pages: the M7 median base salary of $175,000, and M7 first-year total compensation (base plus signing and performance bonus) of $185,000–$210,000. Use the school-tier pages if you are choosing where to apply, the industry pages if you are choosing a career, and the 5- and 10-year data if you want to see where pay goes after the first job. That long-run trajectory matters more to ROI than the starting salary.",
    guides: [
      { href: "/average-mba-salary", label: "Average MBA salary 2026", desc: "$175K median base at M7, $105K at top online programs, by school tier." },
      { href: "/post-mba-salary", label: "Post-MBA salary by industry", desc: "M7 median $185K–$210K total comp; investment banking up to $350K." },
      { href: "/average-mba-salary-after-5-years", label: "MBA salary after 5 and 10 years", desc: "$310K–$500K at M7 after 5 years, plus 10-year pay for Wharton and HBS." },
      { href: "/mba-salary-increase", label: "How much does an MBA increase your salary?", desc: "+47–55% on average from ~$85K pre-MBA, with Year 1, 5 and 10 increases." },
      { href: "/mba-salary-by-school", label: "MBA salary by school", desc: "School-by-school rankings: Stanford $210K, HBS $205K, Wharton $200K." },
      { href: "/mba-jobs-200k", label: "MBA jobs that pay $200K+", desc: "IB, PE, MBB and tech roles that clear $200K, by firm." },
      { href: "/m7-mba-consulting-salary", label: "M7 MBA consulting salary", desc: "MBB and Big 4 pay and placement data by M7 school." },
      { href: "/mba-investment-banking-salary", label: "MBA investment banking salary", desc: "Bank-by-bank associate pay: Goldman $360K, JPMorgan $320K." },
      { href: "/marketing-mba-salary", label: "Marketing MBA salary", desc: "Brand management $130K–$155K and the path to CMO." },
      { href: "/emba-salary-increase", label: "EMBA salary increase", desc: "How much an executive MBA raises pay for mid-career professionals." },
    ],
  },
  {
    id: "mba-roi-by-industry",
    title: "MBA ROI by Industry and Employer",
    intro:
      "Industry is the biggest single driver of MBA returns, often more than the school you attend. These guides run the same NPV and break-even model for specific destinations: McKinsey and the other MBB firms, Goldman Sachs and bulge-bracket banking, big tech product management, and healthcare. Each one shows typical first-year pay, how quickly it grows, and how long it takes to earn back the degree. The Europe guide compares one-year programs such as INSEAD with two-year US programs such as Wharton, where the shorter format changes the cost side substantially.",
    guides: [
      { href: "/mba-roi-mckinsey", label: "MBA ROI for McKinsey", desc: "$192K base salary, IRR and break-even for an MBA into McKinsey." },
      { href: "/mba-roi-goldman-sachs", label: "Goldman Sachs MBA salary and ROI", desc: "$200K base + $150K bonus: the Goldman associate case." },
      { href: "/mba-roi-tech", label: "MBA ROI in tech", desc: "FAANG PM salary, equity and break-even." },
      { href: "/mba-roi-healthcare", label: "Healthcare MBA salary and ROI", desc: "$85K–$210K by role, plus PSLF and break-even math." },
      { href: "/mba-roi-europe", label: "INSEAD vs Wharton: UK/EU vs US MBA ROI", desc: "One-year vs two-year programs compared on cost and payback." },
    ],
  },
  {
    id: "mba-formats",
    title: "Executive, Part-Time and Online MBAs",
    intro:
      "A full-time MBA's largest cost is usually the salary you give up while studying, so formats that let you keep working change the numbers sharply. These guides cover executive, part-time and online programs, MBAs your employer pays for, and programs that waive the GMAT. They also cover the trade-off: you keep your income, but you usually lose access to the on-campus recruiting that leads to consulting and banking offers. If you plan to stay in your field or move up at your current employer, one of these formats is often the better financial choice.",
    guides: [
      { href: "/executive-mba-roi", label: "Executive MBA ROI", desc: "When EMBA math works, and when it doesn't." },
      { href: "/part-time-mba-roi", label: "Part-time MBA ROI", desc: "Why keeping your salary changes the ROI more than most analyses assume." },
      { href: "/mba-roi-online-vs-full-time", label: "Online vs. full-time MBA ROI", desc: "Which online MBA programs pay back fastest." },
      { href: "/employer-sponsored-mba-roi", label: "Employer-sponsored MBA ROI", desc: "The return on your own money when your employer covers tuition." },
      { href: "/no-gmat-mba-roi", label: "No-GMAT MBA ROI", desc: "Whether skipping the GMAT hurts your MBA return." },
    ],
  },
  {
    id: "paying-for-mba",
    title: "Paying for an MBA",
    intro:
      "How you finance the degree can move its NPV by $100,000 or more without changing the school or the job you get afterwards. These guides compare federal and private loans, scholarships and fellowships, employer aid, and benefits for veterans such as the GI Bill and Yellow Ribbon program. They show how much each option saves and how it shifts your break-even year. If you already have an offer, the scholarship ROI and $100K-debt guides show how to compare two financial-aid packages on equal terms.",
    guides: [
      { href: "/how-to-pay-for-mba", label: "How to pay for an MBA", desc: "Loans, scholarships, employer aid and the GI Bill compared." },
      { href: "/mba-scholarships", label: "MBA scholarships", desc: "Merit aid and fellowships, and how aid changes your ROI." },
      { href: "/mba-roi-scholarship", label: "MBA scholarship ROI", desc: "How 50% aid cuts break-even from 8 years to 4." },
      { href: "/mba-roi-100k-debt", label: "MBA ROI with $100K debt", desc: "Loan math and career tracks for a six-figure MBA loan." },
      { href: "/free-mba-programs", label: "Free MBA programs", desc: "Fully funded, fellowship and zero-tuition options." },
      { href: "/mba-roi-military", label: "MBA ROI for veterans", desc: "GI Bill, Yellow Ribbon and MBB outcomes for veterans." },
      { href: "/yellow-ribbon-mba-programs", label: "Yellow Ribbon MBA programs", desc: "Full list of schools, GI Bill benefits and ROI for veterans." },
    ],
  },
  {
    id: "returning-to-work",
    title: "Returning to Work After a Career Break",
    intro:
      "A career break of one to three years can cost $180,000–$320,000 in cumulative earnings, mostly because people return at a lower salary than they left. These guides cover how to shrink that cost: which companies run structured returnship programs and how often they convert to permanent jobs, how to rebuild recent experience before you apply, and what is specific to women returning after caregiving. Each guide links to a calculator, so you can put a figure on your own gap and compare re-entry routes.",
    guides: [
      { href: "/return-to-work-after-career-break", label: "Return to work after a career break", desc: "Salary and strategy data for coming back after time out." },
      { href: "/return-to-work-programs", label: "Return-to-work programs", desc: "15+ company programs, with ROI data and how to apply." },
      { href: "/women-returning-to-work", label: "Women returning to work", desc: "Programs and the pay gap for women coming back to work." },
      { href: "/rebuild-work-experience-after-career-break", label: "Rebuild work experience after a break", desc: "Ways to rebuild recent experience, with ROI data." },
      { href: "/employer-scorecard", label: "Return-to-work friendly employers", desc: "Companies scored on how well they support returners." },
    ],
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-emerald-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12 sm:space-y-16">

        <header className="space-y-5">
          <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest">CareerReturns · Blog</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            Career Finance,<br />
            <span className="text-slate-400">Data-Driven.</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Long-form posts plus 40+ in-depth guides on MBA ROI, MBA salaries, paying for a degree and
            returning to work. Built on the same financial models that power our calculators.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            The blog is for people weighing a large career investment: whether to do an MBA and where,
            how to negotiate the offer that follows, and how to come back after a career break without
            taking an unnecessary pay cut. Each post works through the numbers — cost, opportunity cost,
            salary delta, NPV and IRR — and says where the data is thin or the answer depends on your
            situation. Posts are written by{" "}
            <Link href="/author/himanshu-gauba" className="text-emerald-400 hover:text-emerald-300 transition-colors underline underline-offset-2">Himanshu Gauba</Link>,
            founder of CareerReturns. Sources and methods are described in our{" "}
            <Link href="/editorial-policy" className="text-emerald-400 hover:text-emerald-300 transition-colors underline underline-offset-2">editorial policy</Link>.
          </p>
        </header>

        <section className="rounded-2xl bg-emerald-500/5 border border-emerald-500/20 p-6 sm:p-7 space-y-4">
          <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest">Start here</p>
          <p className="text-slate-400 text-sm leading-relaxed">
            New to the site? These three pages cover the core MBA decision before you get into the posts below.
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { href: "/mba-worth-it", label: "Is an MBA Worth It?", desc: "Cost, ROI by industry and school tier, and when it does not pay off." },
              { href: "/mba-roi-calculator", label: "MBA ROI Calculator", desc: "Run NPV, IRR and break-even on your own numbers." },
              { href: "/mba-roi", label: "MBA ROI Guide", desc: "How MBA ROI is measured, with data by industry." },
            ].map(({ href, label, desc }) => (
              <Link key={href} href={href} className="group rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/8 hover:border-white/20 transition-all space-y-1">
                <p className="text-white text-sm font-medium group-hover:text-emerald-300 transition-colors">{label} →</p>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <nav className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-3">Jump to</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            <a href="#latest-posts" className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">Latest Posts</a>
            {guideGroups.map((g) => (
              <a key={g.id} href={`#${g.id}`} className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">{g.title}</a>
            ))}
          </div>
        </nav>

        <section id="latest-posts" className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Latest Posts</h2>
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="block group bg-white/3 hover:bg-white/6 border border-white/8 hover:border-white/15 rounded-2xl p-6 sm:p-7 transition-all duration-200"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${article.tagBg} ${article.tagColor}`}>
                    {article.tag}
                  </span>
                  <span className="text-slate-500 text-xs">{article.date}</span>
                  <span className="text-slate-600 text-xs">·</span>
                  <span className="text-slate-500 text-xs">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold tracking-tight group-hover:text-emerald-300 transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {article.description}
                </p>
                <p className="text-emerald-400 text-sm font-medium group-hover:text-emerald-300 transition-colors">
                  Read article →
                </p>
              </div>
            </Link>
          ))}
        </section>

        {guideGroups.map((group) => (
          <section key={group.id} id={group.id} className="space-y-5 scroll-mt-6">
            <h2 className="text-2xl font-semibold tracking-tight">{group.title}</h2>
            <p className="text-slate-400 text-sm leading-relaxed">{group.intro}</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {group.guides.map(({ href, label, desc }) => (
                <Link key={href} href={href} className="group rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/8 hover:border-white/20 transition-all space-y-1">
                  <h3 className="text-white text-sm font-medium group-hover:text-emerald-300 transition-colors">{label} →</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <section className="rounded-2xl bg-white/3 border border-white/10 p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Use the Calculators</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Every insight in these articles is backed by the same financial models available in our free calculators.
            Run your own numbers alongside what you read.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/mba-roi-calculator" className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors">
              MBA ROI Calculator →
            </Link>
            <Link href="/career-gap-calculator" className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors">
              Career Gap Calculator →
            </Link>
            <Link href="/education-comparison-calculator" className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors">
              Education Comparison →
            </Link>
            <Link href="/mba-loan-repayment-calculator" className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors">
              MBA Loan Repayment Calculator →
            </Link>
            <Link href="/returnship-roi-calculator" className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors">
              Returnship ROI Calculator →
            </Link>
          </div>
        </section>

      </div>

      <footer className="border-t border-white/10 py-8 text-center text-slate-500 text-xs space-y-2">
        <p>
          <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
          {" · "}
          <Link href="/mba-roi" className="hover:text-slate-300 transition-colors">MBA ROI Guide</Link>
          {" · "}
          <Link href="/mba-roi-calculator" className="hover:text-slate-300 transition-colors">Calculator</Link>
          {" · "}
          <Link href="/about" className="hover:text-slate-300 transition-colors">About</Link>
        </p>
        <p>Rational decisions. Compounding outcomes.</p>
      </footer>

    </main>
  )
}
