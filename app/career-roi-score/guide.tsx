import ToolGuide from "@/components/ToolGuide"

export default function CareerRoiScoreGuide() {
  return (
    <ToolGuide
      title="How the Career ROI Score works"
      updated="2026-10-02"
      sections={[
        {
          heading: "What the score answers, and who it is for",
          body: [
            "The Career ROI Score compresses five things that drive long-run earnings into one number on a 300–850 scale. The range copies the familiar FICO credit-score range on purpose, because people already read that scale intuitively. The score itself has nothing to do with credit. It is a quick self-check: given what you earn, how continuous your work history is, how well your skills fit the role you want, how long you have left to work, and how much you save, how well positioned is your human capital?",
            "It suits people at a decision point: weighing a job change, coming back after a break, deciding whether to retrain, or just checking whether one weak area is dragging down an otherwise healthy career. It is not a hiring score, and no employer or lender sees it. Everything runs in your browser from the seven numbers you enter.",
          ],
        },
        {
          heading: "The exact formula and weights",
          body: [
            "Each dimension earns points up to a fixed cap. The caps add up to 850 raw points, and the total is then mapped linearly onto 300–850. All five components are rounded to whole points before they are added.",
          ],
          formula: [
            "Salary position  = round( min(200, 154 × min(current ÷ market, 1.3)) )",
            "Continuity       = round( max(0, 150 − 20 × gap years) )",
            "Skills alignment = round( 200 × min(current skills ÷ target skills, 1) )",
            "Career runway    = round( min(150, 4.5 × years to retirement) )",
            "Saving habit     = round( min(150, 500 × savings rate) )",
            "",
            "raw   = sum of the five components         (0 to 850)",
            "score = round( 300 + raw ÷ 850 × 550 )      (300 to 850)",
          ].join("\n"),
          table: [
            ["Dimension", "Max points", "Share of raw total", "Where it maxes out"],
            ["Salary vs. market rate", "200", "23.5%", "Earning about 130% of market (154 points at exactly 100%)"],
            ["Career continuity", "150", "17.6%", "No gaps; reaches zero at 7.5 gap years"],
            ["Skills alignment", "200", "23.5%", "Current skills at or above what the target role needs"],
            ["Career runway", "150", "17.6%", "About 33 or more years to retirement"],
            ["Saving habit", "150", "17.6%", "Saving 30% or more of income"],
          ],
        },
        {
          heading: "Worked example with the default inputs",
          body: [
            "The tool opens with a salary of $85,000 against a market rate of $95,000, no career gap, skills rated 6 out of 10 against a target role needing 10, 25 years to retirement and a 15% savings rate. Here is the arithmetic the page runs:",
          ],
          table: [
            ["Dimension", "Calculation", "Points"],
            ["Salary vs. market", "85,000 ÷ 95,000 = 0.895; × 154 = 137.8", "138 / 200"],
            ["Career continuity", "150 − 20 × 0", "150 / 150"],
            ["Skills alignment", "6 ÷ 10 = 0.60; × 200", "120 / 200"],
            ["Career runway", "25 × 4.5 = 112.5", "113 / 150"],
            ["Saving habit", "0.15 × 500", "75 / 150"],
            ["Raw total", "138 + 150 + 120 + 113 + 75", "596 / 850"],
            ["Score", "300 + 596 ÷ 850 × 550 = 685.6", "686 (B+)"],
          ],
        },
        {
          heading: "What a change in each input is worth",
          body: [
            "Because 550 score points are spread over 850 raw points, every raw point is worth about 0.65 points on the final scale. That makes the levers easy to compare. Starting from the default profile above:",
          ],
          bullets: [
            "Closing the pay gap (raising $85,000 to the $95,000 market rate) adds 16 raw points and moves the score from 686 to 696. Each percentage point of market rate is worth about one score point, up to the 130% cap.",
            "Each year of career gap costs 20 raw points, about 13 score points. A two-year gap would take the default profile to 660, right at the B+ cutoff. Two and a half years would drop it to 653, a B.",
            "Each skills point, when the target is 10, is worth 20 raw points. Moving from 6 to 8 lifts the score to 712.",
            "Raising the savings rate from 15% to 20% adds 25 raw points and gives 702. Saving beyond 30% adds nothing.",
            "Runway moves about 2.9 score points per year, but you cannot change it by choice. It reflects how much time is left for any improvement to compound.",
          ],
        },
        {
          heading: "How to read the grade bands",
          body: [
            "The grade comes from fixed cutoffs, not from ranking you against other users. A 686 does not mean you beat any given share of the population. It means your inputs produced 596 of the 850 available raw points. The table shows the raw points needed for each band, which tells you how far you are from the next one.",
          ],
          table: [
            ["Score", "Grade", "Raw points needed", "Plain-English reading"],
            ["780–850", "A+", "742+", "Strong on nearly every dimension"],
            ["720–779", "A", "649+", "No weak area; small gains left"],
            ["660–719", "B+", "556+", "Healthy, with one or two areas to tune"],
            ["600–659", "B", "463+", "Solid base; a specific gap is costing you"],
            ["540–599", "C+", "371+", "Several dimensions below their potential"],
            ["480–539", "C", "278+", "Multiple areas need deliberate work"],
            ["400–479", "D", "154+", "Significant risk to long-run earnings"],
            ["300–399", "F", "under 154", "Start with the lowest-scoring dimension"],
          ],
        },
        {
          heading: "Turning the score into next steps",
          body: [
            "The breakdown matters more than the headline number. On the results screen, any bar well short of its maximum is where to start. The page shows a targeted suggestion when salary scores under 70% of its cap (below 140), continuity under 80% (below 120), skills under 70% (below 140), runway under 100, or saving under 80.",
          ],
          bullets: [
            "Salary below market: before you negotiate, pin down a defensible market number with the salary benchmark tool, using the same title, level and location. A vague market figure makes this dimension meaningless.",
            "Gap years: you cannot undo them, but you can shorten the earnings recovery. Model re-entry options with the career gap calculator rather than waiting for the gap to fade on its own.",
            "Skills: rate yourself against a real job posting for the target role, not your general sense of competence. Then price the missing skills with the skills gap calculator.",
            "Saving: this is the one dimension most people can change within a month. Retirement-planning firms commonly suggest saving roughly 15% of pre-tax income, employer match included. That earns 75 of 150 points here, so the model rewards going further.",
          ],
        },
        {
          heading: "Common mistakes and caveats",
          bullets: [
            "Self-rated skills drive 23.5% of the raw total. Choosing a low target, or rating yourself generously, inflates the score without changing anything real. Use the same honest scale each time you retake it.",
            "The market-rate field is only as good as your source. Compare against the median for your exact role, level and city. A national all-industry average will mislead you.",
            "Career runway rewards youth mechanically: someone with 10 years left gets 45 of 150 points however well they are doing. Compare your score with your own past results, not with someone at a different life stage.",
            "Savings rate means the share of gross income you save, entered as a percentage. The slider stops at 50%, and anything above 30% scores the same.",
            "The model ignores debt, assets, industry risk, equity compensation and job security. Two people with the same score can have very different finances.",
          ],
        },
      ]}
      faqs={[
        {
          q: "Is the Career ROI Score related to my credit score?",
          a: "No. It borrows only the 300–850 range so the number feels familiar. It uses no credit data, nothing is reported to any bureau, and the inputs never leave your browser.",
        },
        {
          q: "Why does earning more than the market rate stop helping?",
          a: "The salary ratio is capped at 1.3, and 154 points per unit of ratio reaches the 200-point maximum at about 130% of market. Beyond that, pay above market usually reflects a specific employer or negotiating position rather than durable market value, so the score does not reward it further.",
        },
        {
          q: "How much does a career break lower the score?",
          a: "Each gap year removes 20 of the 150 continuity points, about 13 points on the final 300–850 scale. Half-year steps are allowed, and continuity bottoms out at zero after 7.5 years. With the other default inputs, a two-year gap takes the score from 686 to 660.",
        },
        {
          q: "What score should I aim for?",
          a: "Aim for higher than your own last result rather than a fixed target. A useful near-term goal is to get every dimension above roughly 70% of its maximum. With strong runway and continuity, that usually puts you in the B+ to A range (660 or higher).",
        },
        {
          q: "How often is it worth recalculating?",
          a: "After any change to an input: a raise, a new job, a market-rate update, a finished course or a change in savings. Retaking it monthly without changing anything only measures rounding.",
        },
      ]}
      sources={[
        "Scoring formula, weights and grade cutoffs: the CareerReturns model as implemented in this page's code. They are design choices, not statistically fitted to outcome data.",
        "The 300–850 range mirrors the publicly documented FICO score range. No credit methodology is used.",
        "The market salary input is yours. Public references include the U.S. Bureau of Labor Statistics Occupational Employment and Wage Statistics (OEWS) program and employer pay ranges published under state pay-transparency laws.",
        "Limitations: self-reported inputs, no adjustment for industry, location, debt or assets, and grade bands are fixed thresholds rather than population percentiles.",
      ]}
      related={[
        { href: "/salary-benchmark-calculator", label: "Salary Benchmark Calculator" },
        { href: "/career-gap-calculator", label: "Career Gap Recovery Calculator" },
        { href: "/skills-gap-calculator", label: "Skills Gap Calculator" },
        { href: "/lifetime-earnings-calculator", label: "Lifetime Earnings Modeler" },
      ]}
    />
  )
}
