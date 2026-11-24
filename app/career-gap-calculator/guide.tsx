import ToolGuide from "@/components/ToolGuide"

// Worked-example figures are the engine's own output (lib/gapEngine.ts) for the
// page defaults: $85,000 pre-break salary, 2-year break, 4% peer growth, 6% discount
// rate and the three default re-entry paths from buildDefaultPaths().
export default function CareerGapGuide() {
  return (
    <ToolGuide
      title="How the Career Gap Calculator works"
      updated="2026-11-24"
      sections={[
        {
          heading: "What the calculator measures",
          body: [
            "A career break has two costs. The obvious one is the salary you do not earn while you are away. The less obvious one is that you usually come back below where you would have been: re-entry offers tend to be pegged to your old salary, or below it, while the colleagues who kept working have had two or three raises in the meantime. That second cost keeps compounding for years after you return.",
            "The calculator puts both costs in dollars and then asks a practical question: of the realistic ways back to work, which one closes the gap fastest? It compares three paths side by side, direct re-entry into your old role, a corporate returnship, and reskilling into a better-paid role, and ranks them by net present value against a peer who never took a break.",
            "It is built for anyone planning or already on a break of six months or more, whether for caregiving, health, relocation, study or a layoff that ran long. It works just as well before a break, as a way to price the decision, as it does when you are ready to return.",
          ],
        },
        {
          heading: "The inputs",
          bullets: [
            "Pre-break salary: your base pay in the last full year before the break. Every other figure is scaled from it.",
            "Break length: how many years you were, or expect to be, out of work. Fractions are allowed.",
            "Peer growth rate: how fast pay grows for someone in your role who keeps working. The 4% default is close to typical US merit raises plus occasional promotions.",
            "For each path: program cost, months from the end of the break to a job, any stipend during the transition, the re-entry salary, salary growth after you return, and the probability that the path leads to a job at that salary.",
          ],
        },
        {
          heading: "The default re-entry paths",
          table: [
            ["Path", "Re-entry salary", "Time to job", "Growth after", "Success rate", "Cost"],
            ["Direct re-entry, same role", "85% of old pay", "3 months", "4% a year", "75%", "$0"],
            ["Corporate returnship", "92% of old pay", "4 months (paid ~65%)", "5% a year", "80%", "$0"],
            ["Reskilling + career change", "112% of old pay", "6 months", "6% a year", "65%", "$10,000"],
          ],
          body: [
            "The defaults reflect common patterns rather than any one study. Direct applicants with a visible gap tend to accept a discount to get back in. Returnships pay a stipend during a structured 10–24 week program and convert a large share of participants into permanent roles at close to market pay. Reskilling costs money and time up front and carries more risk, but it can reset your salary to the market rate of a better-paid role instead of anchoring on your old one. Change any of these to match the offers or programs in front of you.",
          ],
        },
        {
          heading: "The formulas",
          body: [
            "The peer baseline grows your pre-break salary at the peer rate from the first year of the break. Each path earns nothing (or its stipend) during the break and transition, then its re-entry salary growing at the path's rate. To account for risk, post-return earnings are probability-weighted: if the path does not work out, the model assumes you return at 70% of your pre-break salary. NPV compares each path's earnings with the peer's, discounted at 6%.",
          ],
          formula: [
            "Peer salary, year t           P_t = Pre-break × (1 + peer growth)^t",
            "Break cost                        = Σ P_t over the break years",
            "Path salary after return      S_k = Re-entry × (1 + path growth)^(k−1)",
            "Risk-weighted salary          W_k = p × S_k + (1 − p) × 0.70 × Pre-break",
            "Gap vs peer, year t           G_t = W_t − P_t",
            "Path NPV vs peer                  = −Program cost + Σ G_t ÷ 1.06^t",
          ].join("\n"),
        },
        {
          heading: "Worked example: a two-year break from an $85,000 job",
          body: [
            "The calculator opens on someone earning $85,000 who takes a two-year break while peers' pay grows 4% a year. Those peers earn $88,400 in year one and $91,936 in year two, so the break itself costs $180,336 in salary, or $165,219 in today's money at a 6% discount rate.",
            "Over the following ten years the three paths compare like this, all measured against the peer who never stopped working:",
          ],
          table: [
            ["", "Direct re-entry", "Reskilling"],
            ["Risk-weighted salary, first year back", "$69,063", "$82,705"],
            ["Risk-weighted salary, tenth year back", "$92,001", "$125,370"],
            ["12-year earnings, break included", "$799,331", "$1,023,878"],
            ["Shortfall vs peer ($1,328,281)", "$528,950", "$304,404"],
          ],
        },
        {
          heading: "Reading the example's results",
          bullets: [
            "Reskilling ranks first even though it costs $10,000 and has the lowest success rate. A re-entry salary above your old pay, growing at 6% instead of 4%, outweighs the extra three months out of work within a few years.",
            "Direct re-entry is the fastest way back but the most expensive over a decade. Starting at 85% of your old pay and growing no faster than peers means the gap never closes, so the shortfall grows every year.",
            "The returnship lands between the two. Its stipend softens the transition and its 92% re-entry salary narrows the gap, but at 5% growth it does not overtake the reskilling path.",
            "No path fully catches up with the peer inside ten years at these settings. That is normal: the break years themselves are a sunk cost. The useful comparison is between paths, not between a path and never leaving.",
          ],
        },
        {
          heading: "How to use the result",
          bullets: [
            "Replace the defaults with real numbers as soon as you have them: an actual returnship stipend, a course price, or a recruiter's salary range. The ranking often flips on the re-entry salary alone.",
            "Test the success probability. If the reskilling path only wins at 65% or higher, ask whether your target field and network make that realistic.",
            "Use the shortfall figure in negotiations. Knowing that each $5,000 of starting salary compounds into tens of thousands over a decade makes it easier to push back on a 'returner discount'.",
            "If the gap is long or the target role is new, build a week-by-week plan with the Career Return Roadmap, then come back and re-run the numbers with what you learn.",
          ],
        },
      ]}
      faqs={[]}
      sources={[
        "Discount rate: 6% a year, consistent with every NPV on CareerReturns.",
        "Peer growth, re-entry discounts, growth rates and success probabilities are editable assumptions, not forecasts. Returnship conversion rates vary widely by employer and cohort.",
        "Failure case: returning at 70% of pre-break salary after an unsuccessful path is a simplifying assumption.",
        "Limitations: pre-tax salary only; excludes benefits, retirement matching, bonuses and the value of time spent on the break.",
      ]}
      related={[
        { href: "/career-return-roadmap", label: "Career return roadmap" },
        { href: "/returnship-roi-calculator", label: "Returnship ROI calculator" },
        { href: "/reskilling-roi-calculator", label: "Reskilling ROI calculator" },
        { href: "/return-to-work-programs", label: "Return-to-work programs" },
        { href: "/return-to-work-after-career-break", label: "Returning to work after a career break" },
        { href: "/salary-benchmark-calculator", label: "Salary benchmark calculator" },
      ]}
    />
  )
}
