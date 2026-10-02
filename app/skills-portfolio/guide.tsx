import ToolGuide from "@/components/ToolGuide"

export default function SkillsPortfolioGuide() {
  return (
    <ToolGuide
      title="How the Skills Portfolio Builder works"
      updated="2026-10-02"
      sections={[
        {
          heading: "What this tool answers",
          body: [
            "The Skills Portfolio Builder borrows a framework from investing. An investment portfolio is judged by what each holding is worth, how it is likely to perform, and whether the mix is balanced. Here, each holding is a professional skill. The tool asks three questions about each one: how good you are at it, how much employers want it, and whether that demand is rising. It then flags where you are underweight in skills the market values and overweight in skills it values less.",
            "It is designed for mid-career professionals planning their next year of learning, people returning to work after a break who want to decide what to refresh first, and anyone deciding between two courses or certifications. It is a structured self-assessment, not a market data feed. Every number comes from your own estimates, so the output is only as good as the honesty of the inputs.",
          ],
        },
        {
          heading: "The scoring formula",
          body: [
            "Each skill has four inputs: your level (0–10), market demand (0–10), annual growth in demand (%) and an annual value, which is the dollars a strong command of the skill adds to your pay. The skill score combines how well your ability lines up with demand (70% weight) and how fast demand is growing (30% weight).",
          ],
          formula: [
            "alignment = (level ÷ 10) × (demand ÷ 10)          range 0–1",
            "momentum  = min(1, growth% ÷ 30)                  capped at 30%/yr",
            "skill score = round( (0.7 × alignment + 0.3 × momentum) × 100 )",
            "",
            "market value of a skill = annual value × (level ÷ 10)",
            "portfolio score         = average of all skill scores",
            "annual value (total)    = Σ market value of each skill",
            "",
            "Underinvested flag: demand ≥ 7 and level ≤ 5",
            "Overweight flag:    demand ≤ 4 and level ≥ 7",
          ].join("\n"),
          bullets: [
            "Alignment is multiplicative, so a skill scores well only when you are strong at it and the market wants it. Mastery of a skill nobody is hiring for and high demand for a skill you lack both score low.",
            "Momentum treats any growth rate of 30% or more as the maximum. This stops one fast-rising skill from dominating the score.",
            "The annual value input affects only the dollar figure. It does not change any score, so a niche but lucrative skill will not rank higher just because you assign it a big number.",
            "Skill scores are color-coded: 60 and above is strong, 40–59 is middling, below 40 is weak.",
          ],
        },
        {
          heading: "Worked example with the default portfolio",
          body: [
            "The tool loads six example skills. With those inputs it reports a portfolio score of 43 out of 100, a market-adjusted annual value of $58K and six skills tracked. The individual scores, in the order the tool ranks them, are:",
          ],
          table: [
            ["Skill", "Level / Demand / Growth", "Score", "Market value"],
            ["AI / Prompt Engineering", "3 / 10 / 35%", "51", "$6K"],
            ["Executive Communication", "8 / 8 / 4%", "49", "$10K"],
            ["Python / Data Science", "5 / 9 / 12%", "44", "$9K"],
            ["Product Management", "6 / 8 / 8%", "42", "$13K"],
            ["Financial Modeling", "7 / 7 / 5%", "39", "$11K"],
            ["Business Strategy", "6 / 7 / 4%", "33", "$10K"],
          ],
        },
        {
          heading: "Reading the example",
          body: [
            "AI ranks first despite a level of only 3. Its 35% growth rate maxes out the momentum term, contributing the full 30 points, while its alignment adds just 21 (0.3 × 1.0 × 70). Executive Communication gets there the opposite way: strong alignment (0.64, or about 45 points) but little momentum (about 4 points). Same score, very different profiles. One is an early bet on a growing market, the other a mature holding.",
            "The tool flags AI and Python as underinvested, because both have demand of 7 or more and a level of 5 or less. Nothing is flagged as overweight, because no default skill has demand of 4 or less. The flags are the most actionable part of the output, and the arithmetic shows why. Raising Python from 5 to 8 lifts its score from 44 to 62. Raising AI from 3 to 6 lifts it from 51 to 72. By contrast, pushing Executive Communication from 8 to 10 only takes it from 49 to 60, because the momentum term stays small however good you get.",
            "The $58K annual value is the sum of each skill's annual value scaled by your level. It is not a salary estimate. It is a rough sense of how much of your pay the listed skills support, and its most useful property is that it rises as you level up the skills with the largest values.",
          ],
        },
        {
          heading: "How to interpret your portfolio score",
          bullets: [
            "Below 40: most of your skills are either weak relative to demand or in flat markets. Prioritize one or two underinvested skills rather than spreading effort thin.",
            "40–59: typical for a working professional. There are usually one or two clear upgrade opportunities in the underinvested list.",
            "60 and above: strong alignment with growing demand. The risk shifts to concentration. If most of your score comes from one category, such as Technical, a shift in that market affects all of it at once.",
            "Look at the spread, not just the average. A portfolio of skills scoring 70 and 20 averages the same as one of two skills scoring 45, but they call for very different plans.",
          ],
        },
        {
          heading: "How to set the inputs honestly",
          body: [
            "Level is the input most prone to bias. A practical anchor: 3 means you can follow along with someone else's work, 5 means you can do routine tasks independently, 7 means others ask you for help, and 9–10 means you could teach it or be hired primarily for it.",
            "For demand and growth, use outside evidence rather than instinct. Count how many job postings at your target level list the skill, and check whether that count is rising year over year. Occupational projections from the U.S. Bureau of Labor Statistics are a reasonable sanity check for broad fields, although they move far more slowly than the double-digit growth rates individual skills can show in hiring data.",
          ],
        },
        {
          heading: "Common mistakes and caveats",
          body: [
            "Do not treat the growth input as permanent. Fast-rising skills attract a wave of new learners, and the premium for basic proficiency can erode quickly. Revisit the inputs every six to twelve months.",
            "Skills are not independent assets. Python and AI tooling, or financial modeling and strategy, reinforce each other in practice, and the tool scores each in isolation. A combination of two complementary skills at level 7 is often worth more in the labor market than either at level 9. Finally, the scores say nothing about cost. For a dollar-based view of which gap to close first and what it costs, use the Skills Gap Calculator alongside this tool.",
          ],
        },
      ]}
      faqs={[
        {
          q: "Why does a skill I am expert in score lower than one I barely know?",
          a: "Because 30% of the score is momentum, meaning growth in demand. A skill with growth of 30% a year or more earns the full 30 momentum points regardless of your level, while a mature skill growing 4% a year earns only about 4. In the default portfolio, AI at level 3 scores 51 and Executive Communication at level 8 scores 49.",
        },
        {
          q: "Does the annual value I enter change the score?",
          a: "No. Annual value only feeds the market value figure (annual value × level ÷ 10) and the portfolio's total annual value. Scores depend solely on level, demand and growth rate.",
        },
        {
          q: "What makes a skill underinvested or overweight?",
          a: "A skill is flagged underinvested when market demand is 7 or higher and your level is 5 or lower. It is flagged overweight when demand is 4 or lower and your level is 7 or higher. Underinvested skills are listed in order of demand, highest first.",
        },
        {
          q: "How many skills should I track?",
          a: "Five to eight is usually enough to see patterns. Because the portfolio score is a simple average, adding many minor skills can drag it down without telling you anything new. Track the skills that actually appear in job descriptions for the role you want next.",
        },
        {
          q: "Where can I find objective demand data for a skill?",
          a: "Useful public sources include BLS occupational employment projections for broad fields, O*NET skill profiles for specific occupations, and the frequency of a skill in job postings at your target level. Treat any single source as directional rather than precise.",
        },
      ]}
      sources={[
        "Model: weighted score of 70% level-demand alignment and 30% demand momentum (capped at 30% annual growth), averaged across skills. Market value is annual value scaled by level.",
        "Suggested data for inputs: U.S. Bureau of Labor Statistics Employment Projections, O*NET OnLine skill and occupation profiles, and job-posting frequency at your target level.",
        "Limitations: all inputs are self-reported; default skills and values are illustrative examples, not market measurements; skills are scored independently with no complementarity; learning costs and time are not considered.",
      ]}
      related={[
        { href: "/skills-gap-calculator", label: "Skills Gap Calculator" },
        { href: "/reskilling-roi-calculator", label: "Reskilling ROI Calculator" },
        { href: "/career-roi-score", label: "Career ROI Score" },
        { href: "/ai-career-impact", label: "AI Career Impact" },
      ]}
    />
  )
}
