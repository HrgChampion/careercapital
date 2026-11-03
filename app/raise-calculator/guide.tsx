import ToolGuide from "@/components/ToolGuide"
import { calculateRaise } from "@/lib/raiseEngine"
import { usd } from "@/lib/paycheckEngine"

// Worked example rendered from the live engine.
const ex = calculateRaise({ currentSalary: 80000, raisePct: 5, filingStatus: "single", stateCode: "TX", inflationPct: 3, growthPct: 3, years: 10 })
const low = calculateRaise({ currentSalary: 80000, raisePct: 2, filingStatus: "single", stateCode: "TX", inflationPct: 3, growthPct: 3, years: 10 })

export default function RaiseCalculatorGuide() {
  return (
    <ToolGuide
      title="How the raise calculator works"
      updated="2026-11-04"
      sections={[
        {
          heading: "How to calculate a raise",
          body: [
            "A raise percentage applies to your base salary: new salary = current salary × (1 + raise %). To go the other way, divide the new salary by the old one and subtract 1. Hourly, weekly and monthly figures divide the annual number by 2,080 hours, 52 weeks or 12 months.",
            "The take-home change runs both salaries through the same 2026 federal income tax, Social Security, Medicare and state tax engine as our salary calculator and subtracts one from the other. Raises are taxed at your marginal rate, the top bracket you are in, so you keep less of a raise than of your average dollar.",
          ],
          formula: [
            "New salary        = S × (1 + r)",
            "Raise %           = (New ÷ Old − 1) × 100",
            "Real raise %      = ((1 + r) ÷ (1 + inflation) − 1) × 100",
            "Gain in year t    = (New − Old) × (1 + g)^(t−1)      g = future raise rate",
            "Value today       = Σ Gain(t) ÷ 1.06^t",
          ].join("\n"),
        },
        {
          heading: "Worked example: a 5% raise on $80,000",
          body: [
            `A 5% raise takes $80,000 to ${usd(ex.newSalary)}, which is ${usd(ex.grossIncrease)} more a year or about ${usd(ex.grossIncrease / 26)} per biweekly paycheck. For a single filer in a state with no income tax, ${usd(ex.netIncrease)} of it reaches your bank account (${(ex.keepRate * 100).toFixed(0)}%), because the extra dollars are taxed at the 22% federal rate plus 7.65% FICA.`,
            `With 3% inflation the real raise is ${ex.realRaisePct.toFixed(1)}%. The long-run effect is the bigger story: because every future raise is a percentage of this new base, the raise adds ${usd(ex.cumulativeGain)} over 10 years (${usd(ex.npvGain)} in today's money). A 2% raise in the same year would be a real pay cut of ${Math.abs(low.realRaisePct).toFixed(1)}%.`,
          ],
        },
        {
          heading: "What counts as a good raise in 2026",
          bullets: [
            "Below inflation is a pay cut in real terms, even when the number goes up.",
            "A standard merit raise for meeting expectations at a large employer is typically around 3–4%.",
            "A promotion usually carries 10–15%. Changing employers commonly brings 10–20%, which is why job switchers tend to out-earn people who stay.",
            "If your raise leaves you below the market median for your role, benchmark it and negotiate with that data. A raise that only keeps pace with inflation does not fix an underpayment.",
          ],
        },
      ]}
      faqs={[
        {
          q: "How do I calculate a percentage raise?",
          a: "Multiply your current salary by 1 plus the raise as a decimal. A 4% raise on $70,000 is $70,000 × 1.04 = $72,800. To find the percentage from two salaries, divide the new by the old and subtract 1: $75,000 ÷ $70,000 − 1 = 7.1%.",
        },
        {
          q: "How much is a 5% raise per paycheck?",
          a: `On $80,000 a 5% raise is ${usd(ex.grossIncrease)} a year, which is ${usd(ex.grossIncrease / 26)} gross per biweekly paycheck or ${usd(ex.netIncrease / 26)} after federal tax and FICA for a single filer in a state without income tax.`,
        },
        {
          q: "Why is my raise smaller after taxes?",
          a: "The extra pay is taxed at your marginal rate, not your average rate. For most middle-income single filers that is 22% federal plus 7.65% Social Security and Medicare, plus any state tax, so roughly 65–70 cents of each raise dollar reaches your paycheck.",
        },
        {
          q: "Is a 3% raise good?",
          a: "It roughly matches typical merit budgets and recent inflation, so it keeps you level rather than ahead. Whether it is good depends on where your salary sits against the market. If you are below the median for your role, a 3% raise widens the gap over time.",
        },
        {
          q: "How much is a raise worth over my career?",
          a: "More than the first-year number suggests, because future raises are a percentage of the higher base. A raise of Δ dollars grows with every later raise, so over 10 years at 3% future raises it adds about 11.5 × Δ in total pay.",
        },
      ]}
      sources={[
        "Tax: 2026 IRS brackets and standard deduction (Rev. Proc. 2025-32), SSA 2026 wage base, state flat rates per the Tax Foundation. See the salary calculator methodology.",
        "Discount rate: 6% a year, consistent with every NPV on CareerReturns.",
        "Inflation and future raise rates are your inputs. The 3% defaults are placeholders, not forecasts.",
        "Limitations: no local taxes, credits, bonuses or benefits changes. Graduated-bracket states use a 5% placeholder rate.",
      ]}
      related={[
        { href: "/salary-calculator", label: "Salary & paycheck calculator" },
        { href: "/salary-negotiation-simulator", label: "Salary negotiation simulator" },
        { href: "/am-i-underpaid", label: "Am I underpaid?" },
        { href: "/career-compounder", label: "Career compounder" },
        { href: "/job-offer-comparison", label: "Job offer comparison" },
        { href: "/loyalty-tax-calculator", label: "Loyalty tax calculator" },
      ]}
    />
  )
}
