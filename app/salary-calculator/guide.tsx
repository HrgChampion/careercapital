import ToolGuide from "@/components/ToolGuide"
import { TAX_YEAR_2026 as T, calculatePaycheck, usd } from "@/lib/paycheckEngine"

// Worked example: $25/hr, 40 hrs × 52 wks, single filer, no state income tax.
const ex = calculatePaycheck({ annualGross: 52000, filingStatus: "single", stateCode: "TX" })
const ex100 = calculatePaycheck({ annualGross: 100000, filingStatus: "single", stateCode: "TX" })

export const SALARY_CALCULATOR_FAQS = [
  {
    q: "How do I calculate my annual salary from an hourly wage?",
    a: "Multiply your hourly rate by the hours you work per week, then by the weeks you work per year. At 40 hours a week for 52 weeks that is 2,080 hours, so $25 an hour is $25 × 2,080 = $52,000 a year. If you take two unpaid weeks off, use 50 weeks (2,000 hours) instead.",
  },
  {
    q: "How do I calculate my take-home paycheck?",
    a: `Start with gross pay and subtract pre-tax deductions such as a 401(k). Federal income tax is charged on what is left after the ${T.year} standard deduction (${usd(T.standardDeduction.single)} for single filers). Then subtract Social Security (6.2% up to ${usd(T.socialSecurityWageBase)}), Medicare (1.45%, plus 0.9% above ${usd(T.additionalMedicareThreshold.single)} for single filers) and any state income tax. Divide the result by your number of paychecks.`,
  },
  {
    q: "How much is $100,000 a year after taxes?",
    a: `For a single filer in a state with no income tax, $100,000 a year leaves about ${usd(ex100.takeHome)} after federal income tax (${usd(ex100.federalTax)}), Social Security (${usd(ex100.socialSecurity)}) and Medicare (${usd(ex100.medicare)}). That is roughly ${usd(ex100.takeHome / 12)} a month or ${usd(ex100.takeHome / 26)} per biweekly paycheck. State income tax lowers this further in most states.`,
  },
  {
    q: "What is the difference between biweekly and semi-monthly pay?",
    a: "Biweekly pay arrives every two weeks, which is 26 paychecks a year, and two months a year contain three paydays. Semi-monthly pay arrives twice a month, usually on the 15th and the last day, which is 24 paychecks. On the same salary each semi-monthly check is slightly larger, but the annual total is identical.",
  },
  {
    q: "Which states have no state income tax on wages?",
    a: "Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington and Wyoming do not tax wage income. Washington taxes some capital gains, and New Hampshire has fully repealed its tax on interest and dividends.",
  },
  {
    q: "How accurate is this paycheck calculator?",
    a: "Federal income tax, Social Security and Medicare use the official 2026 figures and are close to what an employer withholds for a single job with standard withholding. State tax is exact for flat-tax states and an editable estimate for states with graduated brackets. The calculator does not model local or city taxes, tax credits, itemized deductions, bonuses withheld at the supplemental rate, or health insurance premiums.",
  },
  {
    q: "Does a 401(k) contribution lower my taxes?",
    a: `Yes. A traditional 401(k) contribution comes out before federal and most state income tax, so it lowers your taxable income. It does not reduce Social Security or Medicare tax. The ${T.year} employee limit is ${usd(T.k401Limit)}, plus catch-up contributions if you are 50 or older.`,
  },
]

export default function SalaryCalculatorGuide() {
  return (
    <ToolGuide
      title="How the salary and paycheck calculator works"
      updated="2026-11-03"
      sections={[
        {
          heading: "How to calculate your salary",
          body: [
            "Every pay figure, whether hourly, daily, weekly or monthly, is the same annual number divided by a different count of periods. The calculator first turns whatever you enter into an annual salary, then divides it back out into each period. That is why changing the 'per' selector keeps your annual pay the same instead of reinterpreting the number.",
            "Hourly and daily pay depend on your schedule, so both are editable. The default is 40 hours a week and 52 weeks a year. That is the standard 2,080-hour year that payroll departments and most salary converters use. Lower the weeks if you take unpaid time off, or raise the hours if you regularly work paid overtime at your base rate.",
          ],
          formula: [
            "Annual salary   = hourly rate × hours per week × weeks per year",
            "Monthly pay     = annual ÷ 12",
            "Biweekly pay    = annual ÷ (weeks per year ÷ 2)      → 26 checks at 52 weeks",
            "Semi-monthly    = annual ÷ 24",
            "Hourly rate     = annual ÷ (hours per week × weeks per year)",
          ].join("\n"),
        },
        {
          heading: "Hourly to annual salary formula: a worked example",
          body: [
            `Take $25 an hour, 40 hours a week, 52 weeks a year: $25 × 40 × 52 = $52,000 gross. A single filer subtracts the ${T.year} standard deduction of ${usd(T.standardDeduction.single)}, leaving ${usd(ex.federalTaxable)} of taxable income. The first $12,400 is taxed at 10% and the rest at 12%, for ${usd(ex.federalTax)} of federal income tax.`,
            `Social Security takes 6.2% (${usd(ex.socialSecurity)}) and Medicare 1.45% (${usd(ex.medicare)}). In a state with no income tax, take-home pay is ${usd(ex.takeHome)} a year, or about ${usd(ex.takeHome / 12)} a month. That is ${((ex.takeHome / 52000) * 100).toFixed(1)}% of gross.`,
          ],
          table: [
            ["Line", "Annual", "Per biweekly check"],
            ["Gross pay", usd(52000), usd(52000 / 26)],
            ["Federal income tax", `−${usd(ex.federalTax)}`, `−${usd(ex.federalTax / 26)}`],
            ["Social Security", `−${usd(ex.socialSecurity)}`, `−${usd(ex.socialSecurity / 26)}`],
            ["Medicare", `−${usd(ex.medicare)}`, `−${usd(ex.medicare / 26)}`],
            ["Take-home", usd(ex.takeHome), usd(ex.takeHome / 26)],
          ],
        },
        {
          heading: "How paycheck taxes are calculated",
          body: [
            "Federal income tax is progressive. Each slice of taxable income is taxed at its own bracket rate, so moving into a higher bracket only raises the tax on the dollars above the threshold. The calculator applies the seven 2026 brackets for your filing status after subtracting the standard deduction and any pre-tax 401(k) contribution.",
            "Payroll (FICA) taxes are flat. Social Security is 6.2% of wages up to the annual wage base, and nothing above it. Medicare is 1.45% of all wages, plus an Additional Medicare Tax of 0.9% above the threshold for your filing status. 401(k) deferrals reduce income tax but not FICA.",
            "State income tax works three ways. Nine states don't tax wages. Flat-tax states charge one rate, which the calculator applies exactly. States with graduated brackets start at a 5% placeholder that you should replace with your own effective rate. Your previous year's state return shows it: state tax divided by wages.",
          ],
          table: [
            [`${T.year} figure`, "Single", "Married filing jointly", "Head of household"],
            ["Standard deduction", usd(T.standardDeduction.single), usd(T.standardDeduction.married), usd(T.standardDeduction.head)],
            ["22% bracket starts", "$50,400", "$100,800", "$67,450"],
            ["24% bracket starts", "$105,700", "$211,400", "$105,700"],
            ["Additional Medicare threshold", usd(T.additionalMedicareThreshold.single), usd(T.additionalMedicareThreshold.married), usd(T.additionalMedicareThreshold.head)],
            ["Social Security wage base", usd(T.socialSecurityWageBase), usd(T.socialSecurityWageBase), usd(T.socialSecurityWageBase)],
          ],
        },
        {
          heading: "What this calculator does differently",
          bullets: [
            "It does the maths on the page. You never need a survey or an account to see a number.",
            "It converts in every direction: hourly, daily, weekly, biweekly, semi-monthly, monthly and annual, gross and net, side by side.",
            "It uses the official 2026 IRS and SSA figures and lists every source below.",
            "Results are shareable. The link in your address bar reproduces your exact inputs.",
            "It connects pay to career decisions. From here you can benchmark your salary, compare two job offers, or test whether an MBA would pay off.",
          ],
        },
      ]}
      faqs={SALARY_CALCULATOR_FAQS}
      sources={[
        "IRS, Rev. Proc. 2025-32 and IR-2025-103: 2026 tax brackets and standard deduction (published October 2025).",
        "Social Security Administration: 2026 contribution and benefit base of $184,500.",
        "IRS Notice 2025-67: 2026 401(k) elective deferral limit of $24,500.",
        "Internal Revenue Code §3101(b)(2): Additional Medicare Tax thresholds.",
        "Tax Foundation, State Individual Income Tax Rates 2026 and 2026 State Tax Changes: flat state rates.",
        "Limitations: no local or city income tax, credits, itemized deductions, supplemental bonus withholding, pre-tax insurance premiums or multiple jobs. Treat results as an estimate, not tax advice.",
      ]}
      related={[
        { href: "/am-i-underpaid", label: "Am I underpaid? Salary benchmark" },
        { href: "/job-offer-comparison", label: "Job offer comparison calculator" },
        { href: "/geographic-arbitrage-calculator", label: "Cost of living & geographic arbitrage" },
        { href: "/salary-negotiation-simulator", label: "Salary negotiation simulator" },
        { href: "/mba-salary-increase", label: "How much does an MBA increase salary?" },
        { href: "/mba-roi-calculator", label: "MBA ROI calculator" },
      ]}
    />
  )
}
