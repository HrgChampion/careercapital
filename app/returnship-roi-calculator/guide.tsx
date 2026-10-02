import ToolGuide from "@/components/ToolGuide"

export default function ReturnshipRoiGuide() {
  return (
    <ToolGuide
      title="How the Returnship ROI Calculator works"
      updated="2026-10-02"
      sections={[
        {
          heading: "The decision this calculator models",
          body: [
            "A returnship is a paid, fixed-term program, usually around three to four months, for experienced professionals coming back after a career break. It typically ends with a chance of a permanent offer. The trade-off is real. A returnship gives structure, training and a warm path to an offer, but the stipend is often below full salary and conversion is not guaranteed. Applying directly can land a full salary sooner, or it can lead to a long search.",
            "The calculator puts three paths side by side over ten years: take the returnship, apply directly for a permanent role now, or wait another year and then apply directly. Each path's yearly earnings are weighted by the probability that it works, then discounted to today's dollars, so the paths can be compared on one number.",
          ],
        },
        {
          heading: "The cash-flow formula",
          body: [
            "Every path follows the same structure. First comes a transition period (the program, or the job search), rounded up to whole years. Then come expected earnings, which blend a success outcome with a fallback outcome. If the returnship does not convert, or the direct search fails, the model assumes you eventually work at 70% of your pre-break salary.",
          ],
          formula: [
            "Transition years  n = ceil(program weeks ÷ 52)   or   ceil(search months ÷ 12)",
            "",
            "Year t ≤ n :  CF_t = weekly stipend × 52           (returnship)",
            "              CF_t = 0                              (direct search)",
            "Year t > n :  CF_t = p × S × (1 + g)^(t − n)  +  (1 − p) × 0.70 × pre-break salary",
            "",
            "NPV = Σ CF_t ÷ 1.06^t,   t = 0 … 10   (CF_0 = 0)",
            "Wait a year: the direct-path cash flows shifted one year later",
          ].join("\n"),
          table: [
            ["Symbol", "Returnship path", "Direct re-entry path"],
            ["p (probability of success)", "Conversion probability", "Direct search success rate"],
            ["S (salary on success)", "Post-conversion salary", "Expected direct-hire salary"],
            ["g (annual growth)", "5% (fixed)", "4% (fixed)"],
            ["Transition income", "Weekly stipend × 52 per year", "$0"],
          ],
        },
        {
          heading: "Worked example: the Amazon preset with default inputs",
          body: [
            "The calculator opens with the Amazon Returnship preset: 16 weeks at $2,500 a week, a 90% conversion probability and a $145,000 post-conversion salary. The alternative is a direct search lasting four months with a 70% success rate and a $100,000 salary. The pre-break salary is $90,000, so the fallback salary is $63,000.",
            "Both transition periods round up to one year. Year 1 is $130,000 on the returnship path ($2,500 × 52) and $0 on the direct path. In year 2 the returnship path expects 0.9 × $145,000 × 1.05 + 0.1 × $63,000 = $143,325. The direct path expects 0.7 × $100,000 × 1.04 + 0.3 × $63,000 = $91,700.",
          ],
          table: [
            ["Year", "Returnship", "Direct re-entry", "Wait another year"],
            ["1", "$130,000", "$0", "$0"],
            ["2", "$143,325", "$91,700", "$0"],
            ["3", "$150,176", "$94,612", "$91,700"],
            ["4", "$157,370", "$97,640", "$94,612"],
            ["5", "$164,924", "$100,790", "$97,640"],
            ["6", "$172,855", "$104,066", "$100,790"],
            ["7", "$181,182", "$107,472", "$104,066"],
            ["8", "$189,927", "$111,015", "$107,472"],
            ["9", "$199,108", "$114,700", "$111,015"],
            ["10", "$208,748", "$118,532", "$114,700"],
            ["10-year NPV at 6%", "$1,220,114", "$662,275", "$562,347"],
            ["Grade", "B", "C", "C"],
          ],
        },
        {
          heading: "Reading the outputs",
          bullets: [
            "Recommendation: the path with the highest NPV. In the default case that is the returnship, ahead of direct re-entry by $557,839 and ahead of waiting by $657,767.",
            "Conversion break-even: the lowest conversion probability at which the returnship still beats direct re-entry. The page tests 40% to 100% in 5-point steps and interpolates. With the defaults, the returnship is already ahead at 40% ($834,991 vs. $662,275), so the card reads \"Always wins\".",
            "Yr 1 and Yr 5 expected: the probability-weighted pay in the first full year after the transition and in year 5. With the defaults, that is $143,325 and $164,924 for the returnship, and $91,700 and $100,790 for direct re-entry.",
            "Grades: an A–F score built from NPV, payback and downside. None of these paths has an upfront cost, so IRR is undefined (shown as —) and earns no points. That caps every path at a B. Use the NPV gap as the main signal and the grade only as a rough label.",
          ],
        },
        {
          heading: "What drives the result",
          body: [
            "In the default case, most of the gap comes from two assumptions: the returnship leads to a $145,000 salary instead of $100,000, and it succeeds 90% of the time instead of 70%. Change either and the picture moves quickly. To test whether the returnship is still worth it when the role pays the same as a direct hire, set both salaries equal and watch the break-even card.",
            "Waiting another year loses in almost every scenario. It inserts a full year of zero income and pushes every later raise back a year. With the defaults that costs $99,928 in present value, roughly a year of expected pay, before counting any further loss of skills or network from a longer gap.",
          ],
        },
        {
          heading: "Using the result",
          bullets: [
            "Ask the program for recent conversion figures for your function, not the company-wide number. Recruiters for established programs can often say how many of the last cohort received offers.",
            "Confirm whether the stipend is paid as salary with benefits or as a contractor rate. That affects your year-1 cash flow.",
            "Run a direct search in parallel until you accept a returnship. Applications are free, and a direct offer gives you a real number to put in the direct-path fields.",
            "Get the post-conversion salary band in writing where you can. The model is very sensitive to that single input.",
            "If a break has been long, use the direct-path success rate and salary fields to reflect it honestly. Those fields are where the gap's effect enters the model.",
          ],
        },
        {
          heading: "Model limitations",
          bullets: [
            "Rounding to whole years. A 16-week program and a 4-month search both count as one full year. On the returnship side, $130,000 in year 1 is close to a realistic mix of stipend plus 36 weeks of expected post-conversion pay (about $134,708). On the direct side, year 1 is $0 even though a successful search would leave about eight months of pay. Adding that (about $59,267, or $55,912 in present value) lifts direct re-entry to roughly $718,187, still well behind the returnship in the default case.",
            "The gap-duration field is shown for context but does not change the cash flows. Reflect a longer gap through a lower direct success rate or salary.",
            "Growth rates are fixed at 5% after conversion and 4% after a direct hire. The 70% fallback salary is a single assumption for every unsuccessful path.",
            "Program presets (weeks, weekly pay, conversion and salary) are approximate planning figures compiled from public descriptions and participant reports. Employers change terms, and some pause programs entirely, so check current details on the employer's careers page.",
            "Taxes, benefits, equity, childcare and commuting costs are not modeled.",
          ],
        },
      ]}
      faqs={[
        {
          q: "What conversion rate should I enter if the employer doesn't publish one?",
          a: "Ask the recruiter how many people in the most recent cohort received offers. If you cannot get a figure, run the model at a cautious value such as 60% and at an optimistic one such as 85%, then check whether the recommendation changes. If the returnship wins at both, the exact rate matters less than you might think.",
        },
        {
          q: "Why does 'Wait another year' almost always lose?",
          a: "It is the direct re-entry path delayed by twelve months, so it gives up a full year of expected earnings and pushes every later raise back. With the default inputs it is worth $562,347 against $662,275 for applying now, a cost of $99,928 in present value.",
        },
        {
          q: "Why is IRR blank?",
          a: "IRR needs at least one negative cash flow, such as tuition or an upfront cost, to solve. None of the three paths has one. Every year's expected income is zero or positive, so no meaningful IRR exists and the page shows a dash.",
        },
        {
          q: "Is a low stipend a reason to skip a returnship?",
          a: "Not on its own. The stipend affects only the transition year, while the post-conversion salary and conversion odds affect the next nine years. A program paying less during the program but converting reliably into a better-paid role usually comes out ahead on NPV.",
        },
        {
          q: "Where can I find current returnship programs?",
          a: "Large employers list returnships on their careers pages, often under names like \"returners\", \"reentry\" or \"relaunch\". Organizations such as iRelaunch and Path Forward maintain directories of partner employers. Our return-to-work programs page summarizes current options.",
        },
      ]}
      sources={[
        "Cash-flow structure, 70% fallback salary, fixed growth rates and the 6% discount rate are CareerReturns modeling assumptions.",
        "Program presets are approximate figures compiled from employer program descriptions and participant reports. Confirm current terms with each employer.",
        "Return-to-work program directories: iRelaunch and Path Forward publish lists of employers that run returner programs.",
        "Limitations: transition periods rounded to whole years, gap length not used in the cash flows, no taxes or benefits, and grades capped at B because IRR is undefined.",
      ]}
      related={[
        { href: "/return-to-work-programs", label: "Return-to-work programs directory" },
        { href: "/employer-scorecard", label: "Employer Return Scorecard" },
        { href: "/career-gap-calculator", label: "Career Gap Recovery Calculator" },
        { href: "/rebuild-work-experience-after-career-break", label: "Rebuilding experience after a career break" },
      ]}
    />
  )
}
