import ToolGuide from "@/components/ToolGuide"
import { evaluateOffer, type Offer } from "@/lib/jobOfferEngine"
import { usd } from "@/lib/paycheckEngine"

// Worked example rendered from the live engine so the guide can never disagree with the tool.
const SF: Offer = { name: "San Francisco", base: 150000, bonusPct: 10, signing: 0, equityPerYear: 0, matchPct: 4, raisePct: 3, location: "san_francisco", state: "CA", officeDays: 3, commutePerDay: 20 }
const AUS: Offer = { name: "Austin", base: 130000, bonusPct: 10, signing: 10000, equityPerYear: 0, matchPct: 5, raisePct: 3, location: "austin", state: "TX", officeDays: 0, commutePerDay: 0 }
const sf = evaluateOffer(SF, "single", 0)
const aus = evaluateOffer(AUS, "single", 0)

export default function JobOfferGuide() {
  return (
    <ToolGuide
      title="How to compare two job offers"
      updated="2026-11-03"
      sections={[
        {
          heading: "Why headline salary is the wrong comparison",
          body: [
            "Two offers with different salaries are rarely an apples-to-apples choice. The money reaches you through different tax systems and is spent in cities with very different prices. Part of it often comes as a bonus, equity or a one-off signing payment. An office mandate also quietly turns some of it into commuting cost. This calculator converts each offer into one number: spendable value in US-average dollars.",
            "It does that in four steps. It adds up year-one pay, estimates take-home pay with the same 2026 federal, FICA and state engine as our salary calculator, and adds the employer 401(k) match while subtracting commute cost. Finally it divides by the destination's cost-of-living index (100 = US average). The five-year figure then grows each offer at its expected raise and discounts future years at 6%, the same rate used across CareerReturns.",
          ],
          formula: [
            "Gross (yr t)   = base × (1+raise)^t × (1 + bonus%) + equity + signing (yr 1 only)",
            "Real value (t) = (take-home + your 401(k) + employer match − commute) ÷ COL index × 100",
            "5-year value   = Σ Real value(t) ÷ 1.06^t,   t = 1..5",
          ].join("\n"),
        },
        {
          heading: "Worked example: San Francisco vs Austin",
          body: [
            `Offer A pays $150,000 base in San Francisco with three office days a week. Offer B pays $130,000 base in Austin, fully remote, with a $10,000 signing bonus. On paper A is $20,000 a year better. After California tax, A takes home ${usd(sf.takeHomeYear1)} against B's ${usd(aus.takeHomeYear1)} (including the signing bonus), and A's commute costs a further ${usd(sf.commuteCost)}. Then the prices diverge: San Francisco's cost-of-living index is ${sf.colIndex} and Austin's is ${aus.colIndex}.`,
            `In US-average dollars, A's recurring value is ${usd(sf.realValueRecurring)} a year and B's is ${usd(aus.realValueRecurring)}. Over five years B is worth ${usd(aus.npv5 - sf.npv5)} more, despite the lower salary. The result reverses if you would live in San Francisco anyway or if A carries meaningful equity, and the calculator shows exactly where that tipping point is.`,
          ],
          table: [
            ["", "San Francisco (A)", "Austin (B)"],
            ["Year-1 gross", usd(sf.grossYear1), usd(aus.grossYear1)],
            ["Year-1 take-home", usd(sf.takeHomeYear1), usd(aus.takeHomeYear1)],
            ["Commute / yr", usd(sf.commuteCost), usd(aus.commuteCost)],
            ["Cost-of-living index", String(sf.colIndex), String(aus.colIndex)],
            ["Recurring real value / yr", usd(sf.realValueRecurring), usd(aus.realValueRecurring)],
            ["5-year value (NPV)", usd(sf.npv5), usd(aus.npv5)],
          ],
        },
        {
          heading: "What to check beyond the numbers",
          bullets: [
            "Equity: RSUs in a public company are close to cash. Private-company options are a lottery ticket, so enter them at a heavy discount or at zero.",
            "Bonus: enter the target, then ask what percentage of target the team actually paid in each of the last two years.",
            "Health insurance: employee premiums can differ by $2,000–$6,000 a year between employers. Subtract the difference from the cheaper offer's base if it is large.",
            "Trajectory: a role that builds scarce skills or a stronger brand can be worth more than a year-one gap. Use the expected-raise field to model a steeper path.",
            "Negotiation: the best moment to close a gap is before you sign. A competing offer is the strongest lever you will have.",
          ],
        },
      ]}
      faqs={[
        {
          q: "How do I compare two job offers with different salaries?",
          a: "Convert each offer to after-tax pay, add benefits with a cash value such as the 401(k) match, subtract costs the job imposes such as commuting, then adjust for the cost of living where you would live. Compare the results over several years rather than year one only, so a one-off signing bonus does not dominate.",
        },
        {
          q: "Is a higher salary in an expensive city worth it?",
          a: "Only if the salary premium is larger than the cost-of-living gap after tax. A city with an index 40% above average needs roughly 40% more take-home pay to match the same lifestyle, and higher-cost cities often also have higher state income tax.",
        },
        {
          q: "How should I value a signing bonus?",
          a: "As a one-time payment in year one, taxed as ordinary income and often subject to clawback if you leave within 12–24 months. The calculator includes it in year one only, so you can see whether it changes the long-run winner or only the first year.",
        },
        {
          q: "How much is a remote job worth compared with an office job?",
          a: "At least the commuting cost you avoid. Three office days at $20 a day is about $2,900 a year after holidays, before the value of commuting time. If remote work also lets you live in a cheaper city, the cost-of-living adjustment is usually far larger than the commute.",
        },
        {
          q: "Where does the cost-of-living index come from?",
          a: "It uses the city index from our geographic arbitrage calculator, where 100 is the US average. 'Elsewhere in the US' assumes an average-cost location and lets you choose the state for tax purposes.",
        },
      ]}
      sources={[
        "Tax: 2026 IRS brackets and standard deduction (Rev. Proc. 2025-32), SSA 2026 wage base, state flat rates per the Tax Foundation. See the salary calculator methodology.",
        "Cost of living: CareerReturns city index (100 = US average), shared with the geographic arbitrage calculator.",
        "Discount rate: 6% a year, consistent with every NPV on CareerReturns.",
        "Limitations: equity is valued at face value, bonuses at target, and health premiums, PTO and local taxes are not modelled. Treat the result as a decision aid, not financial advice.",
      ]}
      related={[
        { href: "/salary-calculator", label: "Salary & paycheck calculator" },
        { href: "/salary-negotiation-simulator", label: "Salary negotiation simulator" },
        { href: "/rto-cost-calculator", label: "Return-to-office cost calculator" },
        { href: "/geographic-arbitrage-calculator", label: "Geographic arbitrage calculator" },
        { href: "/am-i-underpaid", label: "Am I underpaid?" },
        { href: "/mba-roi-calculator", label: "MBA ROI calculator" },
      ]}
    />
  )
}
