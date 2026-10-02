import ToolGuide from "@/components/ToolGuide"

export default function SkillsGapGuide() {
  return (
    <ToolGuide
      title="How the Skills Gap Calculator works"
      updated="2026-10-02"
      sections={[
        {
          heading: "What this calculator answers",
          body: [
            "The Skills Gap Calculator turns a self-assessment into a ranked, costed learning plan. You rate yourself from 0 (none) to 3 (advanced) on twelve skill areas and set a target level for each. For every skill where the target is above your current level, the tool estimates the annual pay you are leaving on the table, values that gap over ten years in today's dollars, picks a learning path to close it, and ranks the skills by how much salary impact each dollar and month of effort buys.",
            "It suits professionals planning a reskilling budget, career returners deciding what to refresh first, and managers sizing a training plan for a team. Its strength is prioritization: it is better at telling you which gap to close first than at telling you exactly what any single gap is worth.",
          ],
        },
        {
          heading: "The formulas",
          body: [
            "Each skill has a fixed maximum annual impact, the estimated pay difference between no proficiency and advanced proficiency. The impact ranges from $8,000 for Advanced Excel to $35,000 for Leadership. The gap cost is that maximum scaled by how many of the three levels you are missing. Ten-year values grow at 3% a year and are discounted at 6%.",
          ],
          formula: [
            "Annual gap cost:   I = MaxImpact × (target − current) ÷ 3",
            "",
            "10-yr NPV of gap:  Σ_{t=1..10}  I × 1.03^(t−1) ÷ 1.06^t",
            "",
            "Path choice (per skill, highest wins):",
            "  path score = (3 × path impact − path cost) ÷ (months + 0.1)",
            "",
            "Path NPV:          −cost + Σ_{t=1..10} path impact × 1.03^(t−1) ÷ 1.06^t",
            "Payback (months):  cost ÷ (path impact ÷ 12)",
            "",
            "Priority score:    I ÷ (path cost + 1,000 × months + 1) × 1,000",
            "Quick win:         path cost < $500 and I > $5,000",
          ].join("\n"),
          bullets: [
            "The priority score charges $1,000 for each month a path takes, so a short free course can outrank an expensive certificate with a bigger payoff.",
            "Total upskill months add the recommended paths end to end, which assumes you take them one after another rather than in parallel.",
            "Only skills with at least one learning path in the database enter the results. Leadership & Management and Azure / GCP currently have none, so a gap in either shows an estimated cost on its card but is left out of the totals and the plan.",
          ],
        },
        {
          heading: "Worked example",
          body: [
            "The calculator starts with every skill at 0 and no targets, so there is nothing to compute until you set a gap. Take a professional on the default $75,000 salary who sets four gaps: Python / Data Analysis from None to Intermediate (0→2), SQL from Basic to Advanced (1→3), AWS Cloud from None to Basic (0→1), and Leadership from Basic to Advanced (1→3). The calculator returns an annual salary cost of $31,000, a 10-year NPV of $257,883, a total upskill cost of $800 and a 6-month sequential timeline.",
            "The $31,000 is Python $14,667 (22,000 × 2/3) + SQL $8,000 (12,000 × 2/3) + AWS $8,333 (25,000 × 1/3). Leadership's $23,333 card estimate is not included, for the reason given above. The ranked plan is:",
          ],
          table: [
            ["Rank", "Skill (gap)", "Recommended path", "Cost / time", "Path NPV", "Payback"],
            ["1", "SQL ($8,000/yr)", "Mode Analytics SQL Tutorial", "Free · 1 mo", "$41,594", "Free"],
            ["2", "Python ($14,667/yr)", "Python for Everybody (audit)", "Free · 2 mo", "$66,550", "Free"],
            ["3", "AWS ($8,333/yr)", "AWS Solutions Architect Associate", "$800 · 3 mo", "$165,576", "0 mo"],
          ],
        },
        {
          heading: "Reading the example",
          body: [
            "SQL ranks first even though Python has the larger gap. Its path takes one month instead of two, and the $1,000-per-month time charge dominates when both courses are free. SQL and Python both appear as quick wins, because their paths cost under $500 and their gaps exceed $5,000 a year.",
            "The path NPV and the gap cost are separate numbers, and comparing them is informative. For Python, the free course is valued at $8,000 a year (an NPV of $66,550), while the gap is $14,667 a year. The recommended course closes roughly half the gap, and a second step would be needed for the rest. For AWS the reverse applies: the Solutions Architect path assumes a $20,000 annual impact, more than the $8,333 one-level gap. That reflects the certificate's full expected payoff rather than the narrow gap you entered, so read its $165,576 NPV as an upper bound.",
            "The \"0 mo\" payback for AWS is a rounding of about half a month: $800 divided by $20,000 ÷ 12 is 0.48 months. Any low-cost path with a meaningful salary effect pays back almost immediately on paper. In reality the binding constraint is the time and effort needed to pass the exam and then secure a role or raise that uses the skill.",
          ],
        },
        {
          heading: "How to use the results",
          bullets: [
            "Start at the top of the ranked plan and finish one path before starting the next. The timeline assumes sequential study, and splitting attention across several courses usually slows all of them.",
            "Treat quick wins as tests. A free one-month SQL course tells you cheaply whether you enjoy the work before you commit to a paid certificate in the same area.",
            "Target the level your next role actually requires. Setting every target to Advanced inflates the gap cost and the plan length without improving your odds.",
            "Convert skills into evidence. A portfolio project, a certification or a measurable result at work is what turns a closed gap into a higher offer.",
            "For a gap the calculator cannot plan for, such as Leadership, use the card estimate as a rough sense of scale and look for a stretch assignment or management training at work instead.",
          ],
        },
        {
          heading: "Caveats",
          body: [
            "The salary field does not change any output. Impacts are fixed dollar amounts per skill, not percentages of your pay, so a $40,000 earner and a $150,000 earner see the same figures. In practice, skill premiums tend to scale with seniority and vary by role, so adjust your expectations accordingly. The country selector changes the currency symbol only; the underlying estimates are US-dollar figures and are not converted.",
            "Gap costs are also additive, which overstates the total when skills overlap. Python and SQL both feed data-analyst pay, and an employer will not pay both premiums in full. Finally, the impacts describe the pay of people who have the skill and use it in their role. Learning a skill without moving into work that rewards it will not produce the modeled raise.",
          ],
        },
      ]}
      faqs={[
        {
          q: "Why are Leadership and Azure / GCP missing from my action plan?",
          a: "The plan only includes skills that have at least one learning path in the calculator's database, and those two skill areas currently have none. Their cards still show an estimated annual gap (for example, about $23,333 a year for a Basic-to-Advanced leadership gap), but they are excluded from the totals, the NPV and the ranking.",
        },
        {
          q: "Does my salary affect the results?",
          a: "No. Each skill's impact is a fixed dollar amount scaled by the number of levels in your gap, regardless of the salary you enter. Selecting a different country changes the currency symbol but does not convert or rescale the US-dollar estimates.",
        },
        {
          q: "How is the 10-year NPV calculated?",
          a: "The annual gap cost is grown at 3% a year for ten years, and each year is discounted at 6%. A gap of $8,000 a year therefore has a 10-year NPV of about $66,550. Path NPV uses the same method but subtracts the upfront cost of the course or exam.",
        },
        {
          q: "Why does the calculator recommend a free course over a well-known certificate?",
          a: "For each skill it picks the path with the highest value of (3 × annual impact − cost) ÷ (months + 0.1), which favors short, cheap paths. For Python, the free two-month course outscores the six-month Google certificate even though the certificate has a larger estimated impact. The certificate remains a reasonable second step once you finish the course.",
        },
        {
          q: "Can I add up the gap costs for all my skills?",
          a: "The calculator does, but treat the total as an upper bound. Related skills such as Python, SQL and data visualization often support the same role, so employers will not pay each premium in full. The ranking is more reliable than the grand total.",
        },
      ]}
      sources={[
        "Per-skill impact estimates are CareerReturns figures informed by public pay data, including BLS Occupational Employment and Wage Statistics, Levels.fyi, Glassdoor and LinkedIn Salary.",
        "Learning path costs and durations are approximate, are based on providers' published pricing at the time of curation, and change frequently. Verify them with the provider before enrolling.",
        "Model: linear scaling of a fixed per-skill impact by levels missing; 3% annual growth; 6% discount rate; 10-year horizon; sequential learning timeline.",
        "Limitations: impacts do not scale with your salary or location; overlapping skills are counted additively; skills without a curated path are excluded from the plan; the estimates assume the skill is put to use in your role.",
      ]}
      related={[
        { href: "/skills-portfolio", label: "Skills Portfolio Builder" },
        { href: "/reskilling-roi-calculator", label: "Reskilling ROI Calculator" },
        { href: "/ai-career-impact", label: "AI Career Impact" },
        { href: "/salary-benchmark-calculator", label: "Salary Benchmark Calculator" },
      ]}
    />
  )
}
