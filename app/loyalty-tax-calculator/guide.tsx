import ToolGuide from "@/components/ToolGuide"

// Worked-example figures are the engine's own output (lib/loyaltyTaxEngine.ts) for
// the page defaults: $80,000 start, $95,000 now, 5 years, 3% raises, 5.5% market.
export default function LoyaltyTaxGuide() {
  return (
    <ToolGuide
      title="How the Loyalty Tax Calculator works"
      updated="2026-11-12"
      sections={[
        {
          heading: "What the calculator measures",
          body: [
            "The loyalty tax is the gap between what you are paid after years at one employer and what the market would pay someone in the same role today. It builds up quietly: internal raises are usually set as a percentage of your current pay, while the salary attached to an external offer tracks what the role is worth now. A one or two point difference a year looks small until it compounds.",
            "The calculator puts a dollar figure on that gap. It rebuilds your pay history from your starting salary and typical raise, rebuilds the path your pay would have taken at market growth, and adds up the difference year by year. It then estimates what moving to market rate now would be worth over the next five years. It is meant for anyone who has been in the same job for three years or more and wants a number to take into a raise conversation or a job search.",
          ],
        },
        {
          heading: "The five inputs",
          bullets: [
            "Starting salary: what you were paid when you joined. Both salary paths are rebuilt from this figure.",
            "Current salary: what you are paid today. It is used for the \"current annual tax\" and the switch-now estimate, so it captures promotions that the average raise misses.",
            "Years at the company: how many years to rebuild. Each year is one row in the table.",
            "Average annual raise: your typical internal raise. US merit budgets have mostly run between 3% and 4% in recent years.",
            "Market growth rate: how fast pay for your role grows if you move. The default of 5.5% assumes switchers out-earn stayers by about 2.5 points a year. Lower it if your field is quiet, raise it if your skills are in short supply.",
          ],
        },
        {
          heading: "The formulas",
          body: [
            "Both paths start from the same salary and compound at their own rate. The annual tax is the difference, floored at zero. The NPV figure discounts each year at 6%, with year 1 counted at full value. The switch-now figure projects five years forward from today's market rate and your current salary.",
          ],
          formula: [
            "Your salary, year t        Y_t  = Start × (1 + raise)^t",
            "Market salary, year t      M_t  = Start × (1 + market)^t",
            "Loyalty tax, year t        T_t  = max(0, M_t − Y_t)",
            "Total loyalty tax               = Σ T_t,            t = 1 … N",
            "Loyalty tax NPV                 = Σ T_t ÷ 1.06^(t−1)",
            "Current annual tax              = M_N − Current salary",
            "Switch-now 5-year NPV           = Σ max(0, M_N × (1 + market)^i − Current × (1 + raise)^i) ÷ 1.06^i,   i = 0 … 4",
          ].join("\n"),
        },
        {
          heading: "Worked example: five years, $80,000 to $95,000",
          body: [
            "The calculator opens on someone who joined at $80,000, has averaged 3% raises for five years and now earns $95,000, with the market growing at 5.5%. The rebuilt paths look like this:",
          ],
          table: [
            ["Year", "Your salary (3%)", "Market rate (5.5%)", "Loyalty tax", "Cumulative"],
            ["1", "$82,400", "$84,400", "$2,000", "$2,000"],
            ["2", "$84,872", "$89,042", "$4,170", "$6,170"],
            ["3", "$87,418", "$93,939", "$6,521", "$12,691"],
            ["4", "$90,041", "$99,106", "$9,065", "$21,756"],
            ["5", "$92,742", "$104,557", "$11,815", "$33,571"],
          ],
        },
        {
          heading: "Reading the example's results",
          bullets: [
            "Total loyalty tax: $33,571. That is the sum of the yearly gaps, the pay given up by staying instead of moving at market rate. Discounted at 6%, it is worth $28,708 today.",
            "Current annual tax: $9,557. That is the $104,557 market rate minus the $95,000 you actually earn. It is lower than year 5 in the table ($11,815) because your real salary is above the rebuilt 3% path, which means you probably had a promotion or an above-average raise along the way. The calculator credits that.",
            "Switch now: $69,012. If you moved to $104,557 today and both paths kept growing at their usual rates, the extra pay over the next five years would be worth $69,012 in today's money.",
            "The \"peak\" marker: the table highlights the year the gap grew the most. With a constant raise and a constant market rate, the gap widens every year, so the peak is always your most recent year. The practical reading is that each extra year of staying costs more than the one before.",
          ],
        },
        {
          heading: "How to use the number",
          bullets: [
            "Check the market rate before you quote it. Pull three or four current job postings or salary-survey figures for your title and location. If they cluster near the calculator's market rate, you have evidence. If they don't, change the market growth input until they do.",
            "Lead with the current annual tax, not the cumulative total. \"I'm about $9,500 below market for this role\" is a request your manager can act on. Five years of back pay is not.",
            "Ask for a market adjustment before you start looking. Many companies keep a separate pool for compression cases and only use it when someone brings data.",
            "If the answer is no, the switch-now figure tells you what a move is worth. Set it against what you would lose: unvested equity, a bonus due soon, retirement matching that hasn't vested, and the time it takes to rebuild trust and track record somewhere new.",
          ],
        },
        {
          heading: "Caveats",
          bullets: [
            "The model applies the same raise and the same market growth every year. Real careers have promotions, flat years and job-market cycles, so read the year-by-year figures as a smoothed estimate.",
            "Market growth is an input, not data the calculator looks up. The switcher premium has been large in tight labor markets, such as 2022, and narrow in slower ones. Your role and location matter more than any national average.",
            "It compares base salary only. Bonus, equity, retirement matching and benefits can narrow the gap or make it wider.",
            "Switching jobs has its own costs and risks: a new probation period, losing seniority in layoffs, and offers that don't come through. A switch-now value of $69,012 is the upside if it works, not a guaranteed result.",
            "If you choose a country other than the US, salaries display in local currency, but the default raise and market growth rates are still the US-based assumptions.",
          ],
        },
      ]}
      faqs={[
        {
          q: "What is a loyalty tax?",
          a: "The loyalty tax is the cumulative pay gap between staying with one employer and what you could earn by moving at market rate. It comes from the difference between internal raises, usually a few percent of your current pay, and external offers, which are set by what the role pays today. Over five years at 3% raises against 5.5% market growth, the gap on an $80,000 starting salary adds up to about $33,600.",
        },
        {
          q: "Is job hopping actually better for your salary?",
          a: "On average, yes. The Federal Reserve Bank of Atlanta's Wage Growth Tracker shows that people who change jobs have consistently had faster median wage growth than people who stay. The gap is widest when the labor market is tight and narrows when hiring slows. Separately, a study by Wharton's Matthew Bidwell found that external hires were paid around 18% more than internal staff promoted into similar roles. Moving still has costs: unvested equity, lost seniority and the risk that a new role doesn't work out.",
        },
        {
          q: "When is the best time to switch jobs?",
          a: "In this model the gap grows every year you stay, so there is no point at which waiting gets cheaper. In practice the right time is when you have a concrete offer at or above market rate and the cost of leaving is low: after a bonus pays out or an equity grant vests, and before the next annual review locks in another below-market raise.",
        },
        {
          q: "Should I use this number to ask for a raise?",
          a: "Yes, but use the current annual figure, not the cumulative one, and back it up with real market data. \"Postings for this role in our city pay $104,000 to $108,000, and I'm at $95,000\" is specific and easy to act on. A competing offer is still the strongest lever, so getting one before the conversation helps.",
        },
        {
          q: "Why is my current annual tax lower than the last row of the table?",
          a: "The table rebuilds your salary as if you received the same average raise every year. If your actual current salary is higher than that rebuilt figure, usually because of a promotion, the current annual tax uses your real salary and is smaller. That gives a more accurate picture of where you stand today.",
        },
      ]}
      sources={[
        "Federal Reserve Bank of Atlanta, Wage Growth Tracker: median wage growth for job switchers versus job stayers.",
        "Matthew Bidwell, \"Paying More to Get Less: The Effects of External Hiring versus Internal Mobility,\" Administrative Science Quarterly (2011): external hires paid roughly 18% more than internal promotions into similar jobs.",
        "Default raise (3%) and market growth (5.5%) are CareerReturns modeling assumptions, not survey results. Change them to match your field.",
        "Limitations: constant growth rates, base salary only, 6% discount rate, no modeling of the costs or risks of switching jobs.",
      ]}
      related={[
        { href: "/am-i-underpaid", label: "Am I Underpaid? salary audit" },
        { href: "/raise-calculator", label: "Raise calculator" },
        { href: "/job-offer-comparison", label: "Job offer comparison calculator" },
        { href: "/salary-negotiation-simulator", label: "Salary negotiation simulator" },
      ]}
    />
  )
}
