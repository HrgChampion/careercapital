import type { Metadata } from "next"
import SiteFooter from "@/components/SiteFooter"
import PayBreakdown, { PAY_PAGES_UPDATED } from "@/components/PayBreakdown"
import { articleSchema, breadcrumbSchema, pageAlternates } from "@/lib/seo"
import { calculatePaycheck, toAnnual, usd } from "@/lib/paycheckEngine"
import { HOURLY_RATES, hourlyPath } from "@/lib/payRates"

export const dynamicParams = false

export function generateStaticParams() {
  return HOURLY_RATES.map((rate) => ({ rate: String(rate) }))
}

function figures(rateParam: string) {
  const rate = Number(rateParam)
  const annual = toAnnual(rate, "hourly")
  const net = calculatePaycheck({ annualGross: annual, filingStatus: "single", stateCode: "TX" })
  return { rate, annual, net }
}

export function generateMetadata({ params }: { params: { rate: string } }): Metadata {
  const { rate, annual, net } = figures(params.rate)
  const url = `https://careerreturns.com/${hourlyPath(rate)}`
  const title = `$${rate} an Hour Is How Much a Year? ${usd(annual)} (2026 After Tax)`
  const description = `$${rate} an hour is ${usd(annual)} a year, ${usd(annual / 12)} a month and ${usd(annual / 26)} biweekly before tax, and about ${usd(net.takeHome)} a year after 2026 federal tax and FICA. Full breakdown by pay period.`
  return {
    title,
    description,
    alternates: pageAlternates(url),
    openGraph: { title, description, url, siteName: "CareerReturns", type: "article" },
    twitter: { card: "summary_large_image", title, description },
  }
}

export default function HourlyToSalaryPage({ params }: { params: { rate: string } }) {
  const { rate, annual, net } = figures(params.rate)
  const url = `https://careerreturns.com/${hourlyPath(rate)}`
  const title = `$${rate} an Hour Is How Much a Year?`

  const faqs = [
    {
      q: `How much is $${rate} an hour per year?`,
      a: `$${rate} an hour is ${usd(annual)} a year at 40 hours a week for 52 weeks (2,080 hours). With two unpaid weeks off it is ${usd(rate * 2000)}.`,
    },
    {
      q: `How much is $${rate} an hour per month?`,
      a: `$${rate} an hour is ${usd(annual / 12)} a month before tax, and about ${usd(net.takeHome / 12)} a month after federal tax and FICA for a single filer in a state with no income tax.`,
    },
    {
      q: `How much is $${rate} an hour biweekly?`,
      a: `A full-time biweekly paycheck at $${rate} an hour is ${usd(annual / 26)} gross (80 hours), or roughly ${usd(net.takeHome / 26)} after federal tax and FICA.`,
    },
    {
      q: `What is $${rate} an hour after taxes?`,
      a: `After 2026 federal income tax (${usd(net.federalTax)}), Social Security (${usd(net.socialSecurity)}) and Medicare (${usd(net.medicare)}), $${rate} an hour leaves about ${usd(net.takeHome)} a year, or ${usd(net.takeHome / 2080, 2)} per hour worked. State income tax would reduce this in most states.`,
    },
  ]

  const neighbors = [rate - 5, rate - 2, rate - 1, rate + 1, rate + 2, rate + 5]
    .filter((r) => HOURLY_RATES.includes(r))
    .map((r) => ({ href: `/${hourlyPath(r)}`, label: `$${r} an hour` }))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title,
              description: `$${rate} an hour is ${usd(annual)} a year before tax and about ${usd(net.takeHome)} after tax.`,
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
              { name: `$${rate} an hour`, url },
            ])
          ),
        }}
      />
      <PayBreakdown
        annual={annual}
        hourly={rate}
        h1={title}
        answer={`$${rate} an hour is ${usd(annual)} a year, ${usd(annual / 12)} a month, ${usd(annual / 26)} every two weeks and ${usd(annual / 52)} a week, based on a 40-hour week.`}
        faqs={faqs}
        neighbors={neighbors}
        crumbLabel={`$${rate} an hour`}
      />
      <SiteFooter />
    </>
  )
}
