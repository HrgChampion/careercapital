import ToolGuide from "@/components/ToolGuide"

export default function CareerTimeMachineGuide() {
  return (
    <ToolGuide
      title="How the Career Time Machine works"
      updated="2026-10-02"
      sections={[
        {
          heading: "What this tool answers",
          body: [
            "The Career Time Machine looks backward before it looks forward. You pick a decision you made, or declined to make, a few years ago: skipping an MBA, taking a career break, not retraining, accepting an offer without negotiating, or staying with one employer for a long time. The tool then estimates two things. First, how much more (or less) you would have earned since then if you had taken the other road. Second, how large the same difference could be over the next ten years if you act on it now.",
            "The point is not regret. Past earnings are a sunk cost and cannot be recovered. The value of the exercise is that it puts a dollar figure on a pattern that is still running. If a decision cost you a meaningful amount over the last three years, the same gap is likely to keep widening unless something changes, and the forward figure is the number that should inform what you do next.",
          ],
        },
        {
          heading: "Decision presets",
          body: [
            "Each preset loads a starting salary difference and an extra annual growth rate for the alternative path. These are illustrative starting points, not measured averages, and you should overwrite them with figures that reflect your own field and market. The base growth rate for both paths is fixed at 3% a year.",
          ],
          table: [
            ["Preset", "Annual salary difference", "Extra growth on alternative path"],
            ["Skipped an MBA", "$55,000", "+1.5%/yr"],
            ["Took a career break", "$15,000", "+0.5%/yr"],
            ["Skipped reskilling / bootcamp", "$25,000", "+0.8%/yr"],
            ["Failed to negotiate salary", "$12,000", "+0.3%/yr"],
            ["Stayed at same company too long", "$18,000", "+0.5%/yr"],
            ["Custom scenario", "$20,000", "+1.0%/yr"],
          ],
        },
        {
          heading: "The formula",
          body: [
            "The model first back-casts what your salary was when the decision was made, then runs both paths forward year by year. For the career-break preset the difference is entered as a positive number, which should be read as what the uninterrupted path would have paid you over and above what you actually earned.",
          ],
          formula: [
            "Inputs: C = current salary, D = annual salary difference,",
            "        Y = years since the decision, g = 3% base growth, Δg = extra growth",
            "",
            "Back-cast starting salary:   A(1) = C ÷ (1 + g)^Y",
            "Alternative starting salary: B(1) = A(1) + D",
            "Each later year:             A(t+1) = A(t) × (1 + g)",
            "                             B(t+1) = B(t) × (1 + g + Δg)",
            "",
            "Past divergence = Σ_{t=1..Y} [ B(t) − A(t) ]",
            "",
            "Forward opportunity = Σ_{t=1..10} [ B'(t) − A'(t) ],",
            "  restarting from A'(1) = C and B'(1) = C + D",
          ].join("\n"),
          bullets: [
            "The back-cast assumes your actual salary grew at the 3% base rate to reach today's figure, so the starting point is today's salary discounted by that rate for each elapsed year. It is not derived from your actual pay history, so if you know your salary at the time of the decision, compare the result against it.",
            "The forward card and the chart use the same compounding model, restarting both paths from your current salary today, so the forward card equals the widening of the gap across the future half of the chart (the chart's final gap also includes the past divergence).",
            "All figures are nominal, pre-tax and undiscounted.",
          ],
        },
        {
          heading: "Worked example with the default inputs",
          body: [
            "The tool opens on the MBA preset with a current salary of $85,000, a decision made 3 years ago, a $55,000 annual difference and 1.5 points of extra growth. The back-cast puts the starting salary at about $77,800 ($85,000 ÷ 1.03³), against $132,800 on the alternative path. Year by year, the gap between the two paths is $55,000 in the first year, about $58,640 in the second and about $62,480 in the third. The sum is roughly $176,100, which the tool displays as a past divergence of $176K.",
            "The forward opportunity card restarts both paths from today — $85,000 versus $140,000 — and compounds them at 3% versus 4.5% for ten years. The cumulative gap is about $746K, which the card shows as $746K. Note that it is more than ten times the starting $55,000 difference because the growth spread widens the gap every year.",
          ],
          table: [
            ["Preset (3 yrs ago, $85K today)", "Past divergence", "Forward card"],
            ["Skipped an MBA", "$176K", "$746K"],
            ["Stayed at same company too long", "$57K", "$234K"],
            ["Took a career break", "−$47K", "−$190K"],
            ["Skipped reskilling / bootcamp", "$80K", "$334K"],
            ["Failed to negotiate salary", "$38K", "$153K"],
          ],
        },
        {
          heading: "How to interpret the two numbers",
          body: [
            "Treat the past divergence as diagnostic. It tells you how expensive the status quo has been, and therefore how much the same status quo is likely to cost going forward. A past figure below about one year of your salary usually points to a decision that was reasonable at the time and is not worth agonizing over. A figure above one to two years of salary suggests the alternative path still deserves a serious look.",
            "Treat the forward figure as a budget ceiling. It is the most you could rationally spend, in tuition, lost income and effort, to switch onto the alternative path today and still break even over ten years. It is a ceiling because it assumes you capture the full salary difference immediately. In reality there is usually a ramp. MBA graduates, for example, give up one or two years of salary before the premium begins, so their net figure is far smaller than the gross one.",
            "Pay the most attention to the salary-difference input. Every output scales almost linearly with it, so a figure guessed from one anecdote will mislead you. Look for the difference in published compensation data for the specific role, level and city you would realistically be in.",
          ],
        },
        {
          heading: "Turning the result into a decision",
          bullets: [
            "If the forward figure is large, model the actual switch with the right tool: the MBA ROI Calculator for a degree, the Reskilling ROI Calculator for a certificate or bootcamp, the Career Gap Calculator for a return after time away.",
            "For the negotiation and loyalty presets, the cost of acting is low: one difficult conversation or one job search. Even a small forward figure usually justifies acting.",
            "For high-cost decisions such as an MBA, subtract the realistic cost of switching now, including forgone salary, from the forward figure. Act only if what remains is clearly positive under a conservative salary difference.",
            "Revisit the numbers once a year. A gap that was small three years ago may have widened, or the market premium may have shrunk.",
          ],
        },
        {
          heading: "Common mistakes and caveats",
          body: [
            "The biggest risk is selection bias in the alternative path. People who take a given path, such as an elite MBA, are not a random sample. Part of their salary premium reflects who they were before the decision, so the premium you would have earned may be smaller than the average reported for that path.",
            "The tool also ignores non-financial factors that may have driven the original choice: caregiving, health, location or job satisfaction. A decision that cost $50K but bought something you valued more was not necessarily a mistake. Finally, nothing here is discounted. Ten years of future salary differences are worth noticeably less in today's money, and you can see that effect in the NPV figures in our MBA ROI tools.",
          ],
        },
      ]}
      faqs={[
        {
          q: "Is the past divergence money I can get back?",
          a: "No. It is a sunk cost and should not drive the decision on its own. Its value is diagnostic: it shows how costly the current path has been, which is a reasonable guide to what the same path will cost going forward. The forward opportunity is the decision-relevant number.",
        },
        {
          q: "Where does the $55,000 MBA default come from?",
          a: "It is an illustrative figure in the range of the gap between MBA and bachelor's-level starting salaries reported in GMAC's Corporate Recruiters Survey, where US median MBA starting salaries have been reported at roughly $115,000–$125,000 against roughly $75,000–$80,000 for bachelor's hires in recent years. Your own gap depends on your pre-MBA salary, field and school, so replace the default with your own estimate.",
        },
        {
          q: "Why is the forward figure so much bigger than the past figure?",
          a: "It covers ten years instead of the number of years since the decision, and it includes growth on the alternative path. With the defaults, three years of past divergence is about $176K, while ten forward years compound to about $746K.",
        },
        {
          q: "How should I model a career break?",
          a: "Select the career break preset and enter the difference between what you would likely earn now without the break and what you earn, or expect to earn, on return. Research on career interruptions generally finds a wage penalty that tends to grow with the length of the break, though estimates vary widely by field and study. The Career Gap Calculator models recovery in more detail.",
        },
        {
          q: "Can I change the 3% base growth rate?",
          a: "Not in this tool. Both paths use a fixed 3% base growth rate, and only the extra growth on the alternative path is adjustable. The Career Compounder lets you set the base rate directly if you want to test different assumptions.",
        },
      ]}
      sources={[
        "Model: back-cast starting salary (current salary discounted at the 3% base rate for each elapsed year) and year-by-year compounding at a fixed 3% base rate plus your extra growth input.",
        "Context for MBA salary gaps: GMAC Corporate Recruiters Survey (annual). Context for wage growth: U.S. Bureau of Labor Statistics Employment Cost Index.",
        "Limitations: presets are illustrative, not measured averages; no taxes, inflation or discounting; the back-cast is approximate and can produce unrealistic starting salaries for large differences; selection effects and non-financial factors are ignored.",
      ]}
      related={[
        { href: "/career-compounder", label: "Career Compounder" },
        { href: "/mba-roi-calculator", label: "MBA ROI Calculator" },
        { href: "/reskilling-roi-calculator", label: "Reskilling ROI Calculator" },
        { href: "/career-gap-calculator", label: "Career Gap Calculator" },
      ]}
    />
  )
}
