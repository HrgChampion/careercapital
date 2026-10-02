import ToolGuide from "@/components/ToolGuide"

export default function AiCareerImpactGuide() {
  return (
    <ToolGuide
      title="How the AI Career Impact Calculator works"
      updated="2026-10-02"
      sections={[
        {
          heading: "What the calculator answers",
          body: [
            "Headlines about AI and jobs usually stop at a percentage of tasks or a count of jobs exposed. This calculator turns a role-level exposure estimate into two numbers you can plan around: the income you might expect to lose over the next five years if you change nothing, and the net value of eight common reskilling moves that could offset it.",
            "It is built for working professionals deciding where to spend limited learning time and money: an analyst wondering whether a cloud certification beats a leadership course, or a writer weighing a pivot. It covers 26 roles across eight industry groups. Results update instantly as you change salary, industry or role.",
          ],
        },
        {
          heading: "The three role parameters",
          body: [
            "Each role carries three parameters in the model. Displacement probability (P) is the estimated chance the role is significantly disrupted within five years. Task automation (A) is the share of the role's current tasks that today's AI tools can largely perform. Timeline (T) is the number of years until roughly half the role's tasks are automatable. The risk label is assigned with each role's data. In practice, Low covers probabilities up to 26%, Medium 28–45%, High 48–67% and Critical 69% and above.",
            "These parameters are CareerReturns estimates informed by published research (see sources). They are not figures any of those reports publishes for these exact job titles. The last column shows the full annual loss the formula below produces for someone earning $100,000, before the timeline ramp is applied.",
          ],
          table: [
            ["Role", "Industry", "P", "A", "T", "Risk", "Full annual loss per $100K"],
            ["Software Engineer", "Technology", "38%", "45%", "4 yr", "Medium", "$17,100"],
            ["Product Manager", "Technology", "22%", "30%", "6 yr", "Low", "$6,600"],
            ["Data Scientist", "Technology", "31%", "50%", "4 yr", "Medium", "$15,500"],
            ["QA / Test Engineer", "Technology", "62%", "65%", "3 yr", "High", "$40,300"],
            ["Technical Writer", "Technology", "71%", "72%", "2 yr", "Critical", "$51,120"],
            ["Financial Analyst", "Finance", "54%", "58%", "3 yr", "High", "$31,320"],
            ["Investment Banker", "Finance", "28%", "35%", "5 yr", "Medium", "$9,800"],
            ["Accountant / Auditor", "Finance", "67%", "68%", "3 yr", "High", "$45,560"],
            ["Actuary", "Finance", "44%", "52%", "4 yr", "Medium", "$22,880"],
            ["Strategy Consultant", "Consulting", "26%", "28%", "6 yr", "Low", "$7,280"],
            ["Operations Consultant", "Consulting", "42%", "48%", "4 yr", "Medium", "$20,160"],
            ["Management Consultant", "Consulting", "20%", "25%", "7 yr", "Low", "$5,000"],
            ["Content Creator / Writer", "Marketing", "74%", "75%", "2 yr", "Critical", "$55,500"],
            ["Marketing Manager", "Marketing", "35%", "42%", "4 yr", "Medium", "$14,700"],
            ["SEO Specialist", "Marketing", "69%", "70%", "2 yr", "Critical", "$48,300"],
            ["Marketing Analyst", "Marketing", "48%", "55%", "3 yr", "High", "$26,400"],
            ["Project Manager", "Operations / Admin", "32%", "38%", "5 yr", "Medium", "$12,160"],
            ["Administrative / EA", "Operations / Admin", "76%", "78%", "2 yr", "Critical", "$59,280"],
            ["Supply Chain / Logistics", "Operations / Admin", "45%", "50%", "4 yr", "Medium", "$22,500"],
            ["Paralegal / Legal Assistant", "Legal", "71%", "72%", "2 yr", "Critical", "$51,120"],
            ["Lawyer / Attorney", "Legal", "25%", "32%", "5 yr", "Low", "$8,000"],
            ["Radiologist / Imaging", "Healthcare", "50%", "55%", "4 yr", "High", "$27,500"],
            ["Nurse / Care Provider", "Healthcare", "10%", "15%", "8 yr", "Low", "$1,500"],
            ["Medical Coder / Biller", "Healthcare", "72%", "74%", "2 yr", "Critical", "$53,280"],
            ["Customer Service Rep", "Customer Service / Sales", "82%", "80%", "1 yr", "Critical", "$65,600"],
            ["Sales Representative", "Customer Service / Sales", "38%", "42%", "4 yr", "Medium", "$15,960"],
          ],
        },
        {
          heading: "The expected-loss formula",
          body: [
            "The annual expected loss multiplies your salary by both the probability of disruption and the share of tasks exposed. The loss then ramps up linearly until the role's timeline is reached, so a role with a two-year timeline hits its full loss in year 2, while a nurse's eight-year timeline means only five-eighths of the full loss by year 5. The five yearly losses are discounted at 6%, with the first year counted at full value.",
          ],
          formula: [
            "Full annual loss  L     = Salary × P × A",
            "Loss in year t    L_t   = L × min(1, t ÷ T),            t = 1 … 5",
            "5-year loss NPV         = Σ L_t ÷ 1.06^(t−1)",
          ].join("\n"),
        },
        {
          heading: "How the eight hedges are valued",
          body: [
            "Each hedge has an assumed cost, duration, salary uplift (u) and risk reduction (d). The net value adds two benefits and subtracts the cost: the share of the expected loss the hedge avoids, plus five years of higher pay. The displayed \"risk after\" subtracts d from P in percentage points, with a floor of zero. The loss calculation scales the loss down by d proportionally.",
          ],
          formula: [
            "Loss avoided   = d × (5-year loss NPV)",
            "Uplift NPV     = Salary × u × Σ 1 ÷ 1.06^(t−1),  t = 1 … 5   (factor 4.4651)",
            "Net NPV        = Loss avoided + Uplift NPV − Cost",
            "Risk after     = max(0, P − d)",
          ].join("\n"),
          table: [
            ["Hedge", "Cost (USD)", "Months", "Salary uplift u", "Risk reduction d"],
            ["AI tools proficiency (ChatGPT, Claude, Copilot)", "$0", "1", "8%", "22 pts"],
            ["Prompt engineering certification", "$300", "1", "10%", "18 pts"],
            ["Python + data analysis", "$400", "3", "14%", "28 pts"],
            ["Google Data Analytics certificate", "$500", "4", "12%", "24 pts"],
            ["AI-augmented sales skills", "$600", "2", "12%", "20 pts"],
            ["AWS Cloud Practitioner / Solutions Architect", "$1,200", "3", "18%", "32 pts"],
            ["Product management certification", "$1,500", "3", "15%", "30 pts"],
            ["Executive leadership / MBA essentials", "$3,500", "6", "20%", "35 pts"],
          ],
        },
        {
          heading: "Worked example: software engineer on $95,000",
          body: [
            "The calculator opens on Software Engineer in Technology with a $95,000 salary. The role's parameters are P = 38%, A = 45% and T = 4 years, a Medium-risk profile.",
            "The full annual loss is $95,000 × 0.38 × 0.45 = $16,245. Ramped over the four-year timeline, the yearly losses are $4,061, $8,123, $12,184, $16,245 and $16,245, which sum to $56,858. Discounted at 6%, that is the $49,075 \"5-year NPV loss\" the results card shows.",
            "The hedges then rank as shown below. Take the top one as an example: the leadership course avoids 35% of the $49,075 (worth $17,176) and adds $19,000 a year in assumed uplift (worth $84,837 over five years). After its $3,500 cost, that leaves $98,513.",
          ],
          table: [
            ["Rank", "Hedge", "Risk after", "Loss avoided", "Net NPV"],
            ["1", "Executive leadership / MBA essentials", "38% → 3%", "$17,176", "$98,513"],
            ["2", "AWS certification", "38% → 6%", "$15,704", "$90,857"],
            ["3", "Product management certification", "38% → 8%", "$14,722", "$76,850"],
            ["4", "Python + data analysis", "38% → 10%", "$13,741", "$72,727"],
            ["5", "Google Data Analytics certificate", "38% → 14%", "$11,778", "$62,180"],
            ["6", "AI-augmented sales skills", "38% → 18%", "$9,815", "$60,117"],
            ["7", "Prompt engineering certification", "38% → 20%", "$8,833", "$50,952"],
            ["8", "AI tools proficiency", "38% → 16%", "$10,796", "$44,731"],
          ],
        },
        {
          heading: "How to interpret the results",
          bullets: [
            "The expected loss is a probability-weighted average, not a forecast. Nobody loses exactly $16,245 a year. Some people in a role are displaced or see pay stall, and many see no change. The figure is what the risk costs on average, which makes it comparable with the cost of a hedge.",
            "Salary uplift drives the ranking. In the example, uplift accounts for $84,837 of the leadership hedge's value against $17,176 from avoided loss. Ranking hedges is mostly a bet on which credential actually raises your pay, so check that against real job postings in your field.",
            "Free hedges show an infinite ROI because there is no cost to divide by. Rank by net NPV, not ROI. The page already sorts that way.",
            "For roles with timelines longer than five years (product manager, strategy and management consultant, nurse), the loss never reaches its full annual value inside the window, so the 5-year figure understates the longer-run exposure.",
          ],
        },
        {
          heading: "Practical next steps",
          bullets: [
            "List your actual weekly tasks and mark which ones current AI tools can already draft, summarize or check. If your share is well above or below the role's A value, adjust your reading of the result.",
            "Start with the free hedge regardless of rank. Getting fluent with AI tools in your own workflow costs nothing and makes every other hedge easier to learn.",
            "Before paying for a credential, search job postings for your target role and count how often it is required or preferred. Treat the model's uplift assumption as an upper bound until postings back it up.",
            "Run the hedge you choose through the reskilling ROI calculator with your own cost, time off and expected raise.",
          ],
        },
        {
          heading: "Caveats",
          bullets: [
            "Hedge costs are fixed US-dollar amounts. If you switch the country selector, salaries and outputs display in local currency, but the hedge costs are not converted.",
            "Uplift is assumed to start in year 1 and run for all five years, even for six-month programs. Real raises often lag completion.",
            "Risk reductions are model assumptions. No study measures how much a specific certificate lowers an individual's displacement odds.",
            "The model treats loss as lost salary. It does not capture the opposite case, where AI makes a role more productive and better paid.",
          ],
        },
      ]}
      faqs={[
        {
          q: "Does a 38% displacement probability mean a 38% chance I lose my job?",
          a: "No. In this model it is the estimated probability that the role is significantly disrupted within five years. That can mean fewer openings, slower pay growth or a changed job, not only layoffs. The financial impact is further scaled by the share of tasks exposed, which is why a 38% probability produces an expected loss of about 17% of salary rather than 38%.",
        },
        {
          q: "Why doesn't the free AI-tools hedge rank first?",
          a: "Ranking is by net five-year value, and the free hedge assumes the smallest salary uplift (8%). For a $95,000 software engineer, the leadership course's assumed 20% uplift outweighs its $3,500 cost many times over. Whether that uplift materializes for you is the key question, so treat the ranking as a hypothesis to check.",
        },
        {
          q: "Where do the role-level risk numbers come from?",
          a: "They are CareerReturns estimates informed by public research: Eloundou and colleagues' 2023 \"GPTs are GPTs\" paper on task exposure, Goldman Sachs economists' 2023 estimate that roughly 300 million full-time jobs worldwide are exposed to automation, McKinsey's 2023 work on generative AI's economic potential, and the World Economic Forum's Future of Jobs Report 2025. None of these publishes the exact percentages used here for each job title.",
        },
        {
          q: "Why is the first year not discounted?",
          a: "The engine counts year 1 at full value and discounts later years at 6% per year. That treats the first year's loss and uplift as happening now, which slightly raises every figure compared with end-of-year discounting. It applies equally to losses and hedges, so the ranking is unaffected.",
        },
        {
          q: "Is my role safe if it shows Low risk?",
          a: "Low risk means relatively little of the role's current task mix is exposed, not that it is immune. Roles built on judgment, physical care or client relationships score lower, but even those roles are adopting AI tools, and people who use them well tend to be the ones promoted.",
        },
      ]}
      sources={[
        "Eloundou, Manning, Mishkin and Rock, \"GPTs are GPTs: An Early Look at the Labor Market Impact Potential of Large Language Models\" (2023): task-level exposure framework.",
        "Goldman Sachs Global Investment Research, \"The Potentially Large Effects of Artificial Intelligence on Economic Growth\" (2023): about 300 million full-time jobs exposed globally.",
        "McKinsey Global Institute, \"The economic potential of generative AI\" (2023), and World Economic Forum, Future of Jobs Report 2025.",
        "Role parameters, hedge costs, uplifts and risk reductions are CareerReturns modeling assumptions informed by the sources above, not values those sources report.",
        "Limitations: five-year horizon, linear ramp, 6% discount rate, US-dollar hedge costs and no modeling of AI-driven wage gains.",
      ]}
      related={[
        { href: "/reskilling-roi-calculator", label: "Reskilling ROI Calculator" },
        { href: "/skills-gap-calculator", label: "Skills Gap Calculator" },
        { href: "/am-i-underpaid", label: "Am I Underpaid? salary audit" },
        { href: "/career-roi-score", label: "Career ROI Score" },
      ]}
    />
  )
}
