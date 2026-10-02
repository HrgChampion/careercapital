import ToolGuide from "@/components/ToolGuide"

export default function CareerCompounderGuide() {
  return (
    <ToolGuide
      title="How the Career Compounder works"
      updated="2026-10-02"
      sections={[
        {
          heading: "What this tool answers",
          body: [
            "The Career Compounder answers one narrow question: if you change either the level of your salary today or the rate at which it grows, how much more will you have earned, in total, by the end of a chosen horizon? It compares two salary paths that start from the same base. The baseline path keeps your current salary and grows it at a steady rate. The changed path adds a one-time increase to the starting salary and, optionally, grows faster every year after that.",
            "It is built for people weighing decisions whose payoff is easy to understate because it arrives slowly: negotiating a job offer, asking for an off-cycle raise, switching employers, or investing in a credential that is expected to steepen your earnings curve rather than produce a single jump. The output is cumulative gross earnings, not net worth, so it is best read as the size of the prize that a decision puts on the table before tax, spending and investment returns.",
          ],
        },
        {
          heading: "The formula and its assumptions",
          body: [
            "The model runs a simple year-by-year loop. Year 1 pays the starting salary on each path with no growth applied. At the end of each year the baseline salary grows by the base rate g, and the changed salary grows by g plus the additional rate Δg. Cumulative earnings are a running sum of each year's salary.",
          ],
          formula: [
            "Baseline salary in year t:   S_b(t) = S0 × (1 + g)^(t−1)",
            "Changed salary in year t:    S_c(t) = (S0 + B) × (1 + g + Δg)^(t−1)",
            "",
            "Cumulative baseline:   E_b(N) = Σ_{t=1..N} S_b(t)",
            "Cumulative changed:    E_c(N) = Σ_{t=1..N} S_c(t)",
            "Total gain:            G(N)   = E_c(N) − E_b(N)",
            "",
            "S0 = current salary, B = one-time boost, g = base growth, Δg = extra growth, N = horizon (5–35 yrs)",
          ].join("\n"),
          bullets: [
            "All figures are nominal and pre-tax. There is no inflation adjustment and no discounting, so a dollar in year 20 counts the same as a dollar in year 1.",
            "Growth is smooth and uninterrupted. Real careers have flat years, layoffs, promotions and job changes that arrive in steps.",
            "Bonuses, equity and retirement matches are not modeled separately. If they scale with base salary, the true gap is somewhat larger than shown.",
            "The boost and the extra growth are applied from year 1. A credential that takes two years to complete would delay both, which this tool does not capture.",
          ],
        },
        {
          heading: "Worked example with the default inputs",
          body: [
            "The tool opens with a current salary of $80,000, a one-time boost of $8,000 (a 10% raise), base growth of 3% a year, extra growth of 1 percentage point a year, and a 20-year horizon. Those inputs produce the following milestones, which are exactly what the calculator displays:",
          ],
          table: [
            ["Year", "Baseline cumulative", "With change", "Gap"],
            ["5", "$425K", "$477K", "+$52K"],
            ["10", "$917K", "$1.06M", "+$139K"],
            ["15", "$1.49M", "$1.76M", "+$274K"],
            ["20", "$2.15M", "$2.62M", "+$471K"],
          ],
        },
        {
          heading: "Where the $471K comes from",
          body: [
            "It helps to split the result into its two levers. Running the same 20-year scenario with only the $8,000 boost and no extra growth gives a gain of about $215K. That figure is exactly 10% of the baseline total, because a 10% higher starting salary growing at the same 3% stays 10% higher every year. Running it with only the extra 1% growth and no boost gives about $233K. The two levers together produce $471K, which is roughly $23K more than the sum of the parts. That extra slice is the interaction: the faster growth rate is applied to a larger base.",
            "The annual salaries tell the same story. In year 20 the baseline salary is about $140,300, while the changed path pays about $185,400. The year-1 difference was $8,000; the year-20 difference is over $45,000. Most of the cumulative gap is earned in the second decade, which is why the 5-year milestone looks modest and the 20-year figure does not.",
            "Stretch the horizon to 35 years with the same inputs and the gain rises to about $1.64M on a baseline of roughly $4.84M. Horizon length matters as much as any other input, so set it to the number of working years you realistically have left rather than leaving the default in place.",
          ],
        },
        {
          heading: "How to interpret the result",
          body: [
            "A useful way to read the total gain is as a ratio to the baseline total. A one-time boost alone always produces a gain equal to B ÷ S0 of the baseline, regardless of horizon. Anything above that ratio is coming from the growth lever. In the default case the gain is about 22% of baseline earnings, roughly double what the 10% raise alone would deliver.",
            "As a rough guide: a gain under 5% of baseline is a small decision that should not drive major trade-offs. A gain of 10–25% is material and worth real effort, such as a structured negotiation or a job search. A gain above 25% over a long horizon usually depends on a sustained extra growth rate of 1.5 points or more, and that assumption deserves the most scrutiny before you rely on it.",
            "Be careful with the extra growth input. A 1-point premium sustained for 20 years is a strong claim. It is plausible for a move into a higher-paying occupation or a field with a steeper pay ladder, but less so for a lateral move between similar employers. If you cannot point to evidence that people on the new path see faster raises, test the result with the extra growth set to zero and treat that as your floor.",
          ],
        },
        {
          heading: "Practical ways to use it",
          bullets: [
            "Before a negotiation, enter the difference between the offer and your target as the boost, set extra growth to zero, and use the 10-year gap as a concrete measure of what a few minutes of negotiation is worth.",
            "When comparing a job switch, enter the pay difference as the boost. Add extra growth only if the new employer or role has a demonstrably faster promotion cadence.",
            "For training or a degree, compare the gain to the full cost, including any income you give up while studying. This tool does not subtract costs, so pair it with the MBA ROI or Reskilling ROI calculators for a net view.",
            "Run a pessimistic case: halve the boost and set extra growth to zero. If the decision still clears its cost under that case, it is robust.",
          ],
        },
        {
          heading: "Common mistakes and caveats",
          body: [
            "The most common mistake is to read the total gain as money in the bank. Cumulative gross salary is taxed, and much of it is spent. The share you save and invest is what builds wealth, although invested savings would add their own compounding on top of what is shown here.",
            "The second mistake is ignoring inflation. At a 3% base growth rate, the baseline path roughly matches long-run US inflation, so in real terms it is close to flat. The changed path is where real income growth happens. If you want a real-dollar view, set base growth to 0% and enter only the real premium as extra growth.",
            "Finally, the model assumes nothing goes wrong. A career break, a layoff or a move to part-time work interrupts compounding on both paths. Use the Career Gap Calculator if a break is part of your plan.",
          ],
        },
      ]}
      faqs={[
        {
          q: "Why is the total gain larger than the raise multiplied by the number of years?",
          a: "Because the raise is applied to a salary that keeps growing. With the default $8,000 boost and 3% growth, the boost alone is worth about $215K over 20 years rather than $160K (8,000 × 20), since each year's raise is calculated on a larger base. Adding 1 point of extra growth lifts the gap to about $471K.",
        },
        {
          q: "Does the Career Compounder adjust for inflation or taxes?",
          a: "No. All figures are nominal, pre-tax cumulative salary. To approximate a real-dollar view, set the base growth rate to zero and enter only the growth you expect above inflation as additional growth. For taxes, apply your approximate marginal rate to the gap, since extra income is taxed at the top of your bracket.",
        },
        {
          q: "What is a realistic base growth rate?",
          a: "Broad US wage growth has typically run in the range of about 3–5% a year in nominal terms in recent years, according to wage trackers such as the Atlanta Fed and BLS employment cost data. Individual paths vary widely: early-career workers and job switchers tend to see faster growth than people who stay in the same role for many years.",
        },
        {
          q: "Is a one-time raise or a higher growth rate worth more?",
          a: "It depends on the horizon. A one-time raise pays off immediately and its value scales linearly with the baseline. Extra growth starts small and builds. With the default inputs, the $8,000 boost and the 1-point growth premium are worth roughly the same over 20 years (about $215K versus $233K), but over longer horizons the growth premium pulls clearly ahead.",
        },
        {
          q: "Why does the year-1 bar show no growth?",
          a: "The model pays the starting salary in year 1 and applies growth at the end of each year. That matches how most raises work: you earn your current pay for a year before the next increase takes effect.",
        },
      ]}
      sources={[
        "Model: deterministic year-by-year compounding of two salary paths, as described in the formula above. No market data is used; every number comes from your inputs.",
        "Context for growth rates: U.S. Bureau of Labor Statistics Employment Cost Index and the Federal Reserve Bank of Atlanta Wage Growth Tracker.",
        "Limitations: nominal, pre-tax figures; no inflation, discounting, career interruptions, bonuses or equity; boost and extra growth assumed to start in year 1 and persist for the full horizon.",
      ]}
      related={[
        { href: "/lifetime-earnings-calculator", label: "Lifetime Earnings Calculator" },
        { href: "/salary-negotiation-simulator", label: "Salary Negotiation Simulator" },
        { href: "/loyalty-tax-calculator", label: "Loyalty Tax Calculator" },
        { href: "/mba-roi-calculator", label: "MBA ROI Calculator" },
      ]}
    />
  )
}
