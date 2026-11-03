import type { Metadata } from "next"
import SiteFooter from "@/components/SiteFooter"
import PayBreakdown, { PAY_PAGES_UPDATED } from "@/components/PayBreakdown"
import { articleSchema, breadcrumbSchema, pageAlternates } from "@/lib/seo"
import { calculatePaycheck, fromAnnual, usd } from "@/lib/paycheckEngine"
import { ANNUAL_SALARIES, salaryPath, shortSalary } from "@/lib/payRates"

export const dynamicParams = false

export function generateStaticParams() {
  return ANNUAL_SALARIES.map((amount) => ({ amount: String(amount) }))
}

function figures(amountParam: string) {
  const annual = Number(amountParam)
  const hourly = fromAnnual(annual, "hourly")
  const net = calculatePaycheck({ annualGross: annual, filingStatus: "single", stateCode: "TX" })
  return { annual, hourly, net }
}

export function generateMetadata({ params }: { params: { amount: string } }): Metadata {
  const { annual, hourly, net } = figures(params.amount)
  const url = `https://careerreturns.com/${salaryPath(annual)}`
  const title = `${usd(annual)} a Year Is How Much an Hour? ${usd(hourly, 2)} (2026)`
  const description = `${usd(annual)} a year is ${usd(hourly, 2)} an hour, ${usd(annual / 12)} a month and ${usd(annual / 26)} biweekly. After 2026 federal tax and FICA it comes to about ${usd(net.takeHome)} a year (${usd(net.takeHome / 12)}/month).`
  return {
    title,
    description,
    alternates: pageAlternates(url),
    openGraph: { title, description, url, siteName: "CareerReturns", type: "article" },
    twitter: { card: "summary_large_image", title, description },
  }
}

export default function SalaryToHourlyPage({ params }: { params: { amount: string } }) {
  const { annual, hourly, net } = figures(params.amount)
  const url = `https://careerreturns.com/${salaryPath(annual)}`
  const title = `${usd(annual)} a Year Is How Much an Hour?`

  const faqs = [
    {
      q: `How much is ${usd(annual)} a year per hour?`,
      a: `${usd(annual)} a year is ${usd(hourly, 2)} an hour, based on 2,080 working hours (40 hours a week, 52 weeks). If you work 50 weeks it is ${usd(annual / 2000, 2)} an hour.`,
    },
    {
      q: `How much is ${usd(annual)} a year per month after taxes?`,
      a: `${usd(annual)} a year is ${usd(annual / 12)} a month before tax. A single filer in a state with no income tax takes home about ${usd(net.takeHome / 12)} a month after 2026 federal income tax and FICA.`,
    },
    {
      q: `What is ${usd(annual)} a year biweekly?`,
      a: `${usd(annual)} paid biweekly is 26 paychecks of ${usd(annual / 26)} gross, or about ${usd(net.takeHome / 26)} each after federal tax and FICA.`,
    },
    {
      q: `How much tax do I pay on ${usd(annual)}?`,
      a: `A single filer pays about ${usd(net.federalTax)} in federal income tax, ${usd(net.socialSecurity)} in Social Security and ${usd(net.medicare)} in Medicare. That is ${usd(net.totalTax)} in total (${(net.effectiveRate * 100).toFixed(1)}% of gross) before state tax, and the top federal bracket reached is ${(net.marginalRate * 100).toFixed(0)}%.`,
    },
  ]

  const neighbors = [annual - 10000, annual - 5000, annual + 5000, annual + 10000, annual + 25000]
    .filter((a) => ANNUAL_SALARIES.includes(a))
    .map((a) => ({ href: `/${salaryPath(a)}`, label: `${shortSalary(a)} a year` }))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title,
              description: `${usd(annual)} a year is ${usd(hourly, 2)} an hour and about ${usd(net.takeHome)} a year after tax.`,
              url,
              datePublished: PAY_PAGES_UPDATED,
              dateModified: PAY_PAGES_UPDATED,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Salary Calculator", url: "https://careerreturns.com/salary-calculator" },
              { name: `${shortSalary(annual)} a year`, url },
            ])
          ),
        }}
      />
      <PayBreakdown
        annual={annual}
        hourly={hourly}
        h1={title}
        answer={`${usd(annual)} a year is ${usd(hourly, 2)} an hour, ${usd(annual / 12)} a month, ${usd(annual / 26)} every two weeks and ${usd(annual / 52)} a week, based on a 40-hour week.`}
        faqs={faqs}
        neighbors={neighbors}
        crumbLabel={`${shortSalary(annual)} a year`}
      />
      <SiteFooter />
    </>
  )
}
