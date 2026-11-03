export type Myth = {
  id: number
  myth: string
  choices: string[]
  correctIndex: number
  reality: string
  source: string
  relatedTool?: { href: string; label: string }
  explanation: string
}

export const MYTHS: Myth[] = [
  {
    id: 1,
    myth: "An MBA from any accredited school pays off financially.",
    choices: ["True — all MBAs provide a salary boost", "False — program tier and target industry determine if it pays off", "It depends only on your major"],
    correctIndex: 1,
    reality: "Non-target school MBAs in low-delta industries (nonprofit, government) often have negative NPV after 10 years. Break-even can exceed 13 years — which means many people never recover costs before switching careers again.",
    source: "GMAC Employment Report 2024 + CareerReturns DCF model",
    relatedTool: { href: "/mba-roi-calculator", label: "Calculate your MBA NPV →" },
    explanation:
      "Accreditation tells you a program meets minimum academic standards. It says nothing about whether the degree will raise your pay enough to cover its cost. The full economic cost of a two-year MBA, meaning tuition, living costs and two years of forgone salary, runs $150,000–$300,000 at most full-time programs. To earn that back, the degree has to open a meaningfully higher-paying job. At M7 schools that place graduates into consulting, banking and tech, that usually happens, and IRRs of 18–40% are common. At programs outside the top 25, graduates moving into general management, nonprofit or government roles often see salary gains of $20,000–$40,000 a year, which can leave the 10-year NPV negative. Program tier and target industry decide the outcome, not accreditation.",
  },
  {
    id: 2,
    myth: "Taking an MBA at 35+ is too late — the ROI math doesn't work.",
    choices: ["True — payback period exceeds remaining career years", "False — career runway still produces positive NPV in high-delta fields", "Only true if you have debt"],
    correctIndex: 1,
    reality: "A 35-year-old entering MBB consulting has ~27 years of earning runway. At a $75K salary delta, the 10-year NPV is still $380K+. The math works — but margin for error is smaller, so school and industry selection becomes critical.",
    source: "CareerReturns MBA ROI Model, 2026 data",
    relatedTool: { href: "/mba-roi-calculator", label: "Run the numbers →" },
    explanation:
      "Age matters less than the number of earning years left and the size of the salary jump. A 35-year-old who graduates at 37 still has roughly 25–27 working years ahead, far longer than the 4–6 year break-even typical of MBB consulting and investment banking paths. What does change with age is the opportunity cost. A 35-year-old usually gives up a higher salary during the two years in school, and may have a mortgage or family costs that make the cash gap harder to carry. That makes the choice of school and industry more critical, and it is why many older candidates choose an executive or part-time MBA and keep earning. The numbers work in high-delta fields; in low-delta ones they rarely work at any age.",
  },
  {
    id: 3,
    myth: "The average MBA salary increase is about 20%.",
    choices: ["True — consistent across industries", "False — it varies from 15% to over 100% by industry", "False — it's actually negative in some fields"],
    correctIndex: 1,
    reality: "MBB consulting delivers about a $105K annual delta (often a 100%+ increase). General management delivers $35–50K (20–40%). Nonprofit can be under $15K. Industry selection drives more of your ROI than the school you attend.",
    source: "GMAC 2024, Glassdoor, Levels.fyi",
    relatedTool: { href: "/mba-salary-increase", label: "MBA salary by industry →" },
    explanation:
      "The average increase across all programs is 47–55%, from a pre-MBA median of about $85,000. That average hides a very wide spread. Graduates moving into MBB consulting typically see an annual delta of around $105,000, an increase of 100% or more, and investment banking is similar. General management and corporate strategy roles add $35,000–$50,000, or 20–40%. Nonprofit and government roles can add less than $15,000. Your own increase depends mostly on two things: the salary you give up and the industry you enter. A $75,000 marketing manager moving into consulting and a $155,000 engineer moving into product management face very different numbers, even at the same school. Use the increase for your target industry rather than a single headline figure.",
  },
  {
    id: 4,
    myth: "Career gaps of 2+ years make it impossible to get a good MBA job offer.",
    choices: ["True — recruiters screen out gaps", "False — gaps are recoverable with the right program and narrative", "Only true at M7 schools"],
    correctIndex: 1,
    reality: "Career returners enter MBAs specifically to re-launch. Schools like Wharton, Booth, and HBS all have dedicated career re-entry resources. A gap with a clear narrative (caregiving, health, entrepreneurship) rarely disqualifies — especially in tech, consulting, and healthcare.",
    source: "MBA Admissions data, 2024–2025",
    relatedTool: { href: "/career-gap-calculator", label: "Model gap recovery →" },
    explanation:
      "A career gap is a question to answer, not an automatic rejection. MBA programs regularly admit candidates who stepped away for caregiving, health, relocation or a business that did not work out. What admissions committees and recruiters look for is a clear, honest explanation and evidence that your skills are current: recent courses, freelance or volunteer work, or a strong test score. Once you are in the program, on-campus recruiting resets the conversation, because employers judge your internship and coursework more than your timeline before school. The real cost of a gap is financial. Months out of work lower your pre-MBA salary and savings, which changes how much you borrow and when you break even. The career gap calculator puts a figure on that cost.",
  },
  {
    id: 5,
    myth: "Online MBAs provide the same ROI as full-time residential programs.",
    choices: ["True — employers don't care about format anymore", "False — network and recruiting access differ significantly", "True only for tech companies"],
    correctIndex: 1,
    reality: "Online MBAs cost 40–60% less, but recruiting access to MBB, top IB, and top PE firms remains limited to on-campus programs. For general management and tech PM roles, online programs now deliver comparable outcomes at 40% of the cost.",
    source: "GMAC Online MBA Employment Report 2024",
    relatedTool: { href: "/mba-roi-online-vs-full-time", label: "Online vs full-time ROI →" },
    explanation:
      "Online MBAs have improved a lot, and for some careers they are the better financial choice. Because you keep working, you avoid two years of forgone salary, often $150,000–$200,000, and tuition at ranked online programs is typically 40–60% lower. For internal promotions, general management and many tech roles, ranked online programs now deliver strong outcomes at a fraction of the cost. The gap is in recruiting access. MBB consulting, bulge-bracket investment banking and most private equity firms still hire almost entirely through on-campus recruiting at full-time programs, and the summer internship that leads to those offers is hard to fit around a full-time job. If your goal is one of those careers, the full-time format usually justifies its extra cost. If not, online often wins on ROI.",
  },
  {
    id: 6,
    myth: "Paying for an MBA with full debt is always a bad financial decision.",
    choices: ["Always bad — never take full debt", "Sometimes good — depends on salary delta and career track", "Always fine — MBA always pays off"],
    correctIndex: 1,
    reality: "At $185K debt entering MBB consulting at a $192K base salary, break-even is ~4.5 years and 10-year NPV is $300K+. The debt is manageable. The same debt entering nonprofit with a $20K salary delta: never recovers. Debt is a tool — the career track is the variable.",
    source: "CareerReturns MBA ROI Model — $100K Debt scenario",
    relatedTool: { href: "/mba-roi-100k-debt", label: "MBA with $100K debt →" },
    explanation:
      "Debt is not good or bad on its own. What matters is whether the salary increase covers the repayments with room to spare. A graduate who borrows $185,000 and joins MBB consulting at a $192,000 base salary can typically break even in about 4.5 years, with a 10-year NPV above $300,000. The same loan taken to move into a nonprofit role with a $20,000 salary increase may never be recovered on a discounted basis. The loan terms matter too: interest rate, federal versus private lending, and the repayment plan all change the total cost, and some public-service employers make you eligible for loan forgiveness. Before borrowing, compare the monthly payment with your expected take-home pay, not just the headline salary.",
  },
  {
    id: 7,
    myth: "Engineers shouldn't get MBAs — they already earn too much for it to pay off.",
    choices: ["True — SWE salaries are too high to benefit", "False — the transition to PM or consulting unlocks significant delta", "Only true at FAANG companies"],
    correctIndex: 1,
    reality: "A senior SWE earning $180K who transitions to MBB post-MBA earns $192K base + a $20–40K bonus. The delta narrows, but the career optionality value — partner tracks, PE/VC access, board roles — often exceeds the financial model alone.",
    source: "CareerReturns MBA ROI for Engineers model",
    relatedTool: { href: "/mba-roi-tech", label: "MBA ROI for engineers →" },
    explanation:
      "High pre-MBA pay narrows the salary delta, but it does not make an MBA pointless for engineers. A senior software engineer earning $180,000 who moves into MBB consulting starts at about $192,000 base plus a $20,000–$40,000 bonus, so the first-year increase is modest, and two years of forgone engineering salary make the cost very high. On first-year pay alone, the numbers look weak. The case for engineers rests on where the degree leads after that: product leadership, strategy, partner-track consulting, venture capital or private equity, and general management roles that are hard to reach from an individual-contributor track. Those paths can compound faster than a senior engineering salary. Engineers should model a 10-year trajectory rather than the first-year delta, and consider part-time or executive formats that keep the salary.",
  },
  {
    id: 8,
    myth: "A scholarship that cuts MBA cost in half always makes a lower-ranked school the better choice.",
    choices: ["True — lower cost = better ROI automatically", "False — salary delta differences can outweigh cost savings", "True only if you have debt aversion"],
    correctIndex: 1,
    reality: "M7 with full debt vs. Top-25 with 50% scholarship: if the M7 unlocks MBB recruiting and the Top-25 doesn't, the NPV difference can be $200K+ over 10 years — far exceeding the $80K tuition discount. Model both scenarios before deciding.",
    source: "CareerReturns MBA Scholarship ROI model",
    relatedTool: { href: "/mba-roi-scholarship", label: "Scholarship ROI calculator →" },
    explanation:
      "A scholarship lowers the cost side of the equation, but MBA returns are driven mostly by the salary side. Suppose you are choosing between an M7 school with no scholarship and a top-25 school offering 50% off tuition, a saving of roughly $80,000. If the M7 gives you realistic access to MBB or investment banking recruiting and the top-25 school does not, the difference in post-MBA pay can be $50,000–$75,000 a year. Over 10 years that can add up to a $200,000+ difference in NPV, well above the tuition saving. The reverse is also true: if both schools recruit equally well for your target career, such as a regional corporate role, the scholarship usually wins. Model both offers with a realistic target salary for each school before deciding.",
  },
  {
    id: 9,
    myth: "Returnship programs are mostly symbolic — they rarely lead to permanent jobs.",
    choices: ["True — conversion rates are under 30%", "False — top programs have 70–85% conversion rates", "It depends on gender"],
    correctIndex: 1,
    reality: "Amazon, Goldman Sachs, and McKinsey returnship programs report 70–85% full-time conversion. The key signal: companies with dedicated returnship teams treat the program as recruiting, not PR. Programs without dedicated coordinators convert at <40%.",
    source: "iRelaunch 2024 Corporate Returnship Report",
    relatedTool: { href: "/returnship-roi-calculator", label: "Analyze a returnship program →" },
    explanation:
      "Returnships are structured, paid programs for professionals coming back after a career break, usually lasting a few months. The better programs are run as recruiting pipelines, not marketing exercises, and companies with dedicated returnship teams report full-time conversion rates of 70–85%. Programs without a dedicated coordinator, a clear role at the end or manager buy-in convert at much lower rates, often below 40%. When you evaluate a program, ask how many people from the last cohort received permanent offers, at what level and salary, and whether the role is tied to a real open position. A returnship that converts at a fair salary can shorten your return to work by months compared with applying cold, which makes it one of the most valuable options for returners.",
  },
  {
    id: 10,
    myth: "The MBA ROI calculation is simple: salary increase minus tuition.",
    choices: ["True — that's all you need", "False — you must discount future cash flows and include opportunity cost", "Close enough for decision-making"],
    correctIndex: 1,
    reality: "A naive calculation ignores: (1) opportunity cost of 2 years of lost income, (2) time value of money via DCF, (3) loan interest compounding, (4) tax treatment of tuition, (5) signing bonuses timing, and (6) career-stage salary growth differential. The correct method is NPV/IRR — which can shift the answer by $100K+.",
    source: "CareerReturns DCF Methodology",
    relatedTool: { href: "/mba-roi-calculator", label: "Use proper DCF calculator →" },
    explanation:
      "Subtracting tuition from the salary increase leaves out most of what makes an MBA expensive and most of what makes it valuable. A proper calculation includes the opportunity cost of two years without a salary, often the single largest cost; loan interest during and after school; taxes on the extra income; the timing of signing bonuses; and how your salary would have grown without the degree. It also discounts future earnings, because $100,000 in year 10 is worth much less than $100,000 today. Net present value (NPV) and internal rate of return (IRR) handle all of this. Done properly, the answer can differ from the simple version by $100,000 or more, and it sometimes turns a yes into a no. The MBA ROI calculator runs the full DCF model.",
  },
]
