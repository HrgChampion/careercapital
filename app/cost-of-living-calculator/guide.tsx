import ToolGuide from "@/components/ToolGuide"
import { RPP_SOURCE, equivalentSalary, metroById } from "@/lib/costOfLiving"
import { usd } from "@/lib/paycheckEngine"

// Worked examples rendered from the live engine.
const austin = metroById("austin")!
const sf = metroById("san_francisco")!
const ny = metroById("new_york")!
const toSf = equivalentSalary(100000, austin, sf, "single")
const nyToAustin = equivalentSalary(150000, ny, austin, "single")

export default function CostOfLivingGuide() {
  return (
    <ToolGuide
      title="How the cost of living calculator works"
      updated="2026-11-04"
      sections={[
        {
          heading: "Where the numbers come from",
          body: [
            "Price levels come from the U.S. Bureau of Economic Analysis Regional Price Parities (RPP), the federal government's official measure of how much prices differ between places. An RPP compares the cost of the same basket of goods, services and rent in each metro area against the national average of 100. The figures here are the all-items RPPs for 2024, the latest year BEA has published.",
            "BEA data is more conservative than many commercial cost-of-living indexes. Those often weight housing more heavily or use city-centre prices only, which is why they can show San Francisco at 160+ when BEA shows about 116. BEA measures the whole metro area and what residents actually spend, so it suits salary comparisons.",
          ],
        },
        {
          heading: "Why taxes change the answer",
          body: [
            "A simple calculator multiplies your salary by the ratio of the two price levels. That keeps your gross pay constant in real terms, but you spend take-home pay, not gross pay. Moving from a state with no income tax to one with a high state tax means you need a bigger raise than prices alone suggest. Moving the other way means you need less.",
            "This calculator works on take-home pay. It estimates your 2026 take-home in your current metro, adjusts it for the price difference, then solves for the gross salary that produces that take-home in the new metro after its federal and state taxes.",
          ],
          formula: [
            "Target take-home  = take-home(now) × RPP(new) ÷ RPP(now)",
            "Salary needed     = the gross G where take-home(G, new state) = target",
            "Prices only       = salary × RPP(new) ÷ RPP(now)",
          ].join("\n"),
        },
        {
          heading: "Worked examples",
          body: [
            `Austin to San Francisco on $100,000: prices are ${toSf.priceDiffPct.toFixed(1)}% higher, so a prices-only calculator says ${usd(toSf.priceOnly)}. Texas has no state income tax and California does, so the salary you actually need is ${usd(toSf.taxAware)}.`,
            `New York to Austin on $150,000: prices are ${Math.abs(nyToAustin.priceDiffPct).toFixed(1)}% lower, and you stop paying New York state tax. You can accept ${usd(nyToAustin.taxAware)} and keep the same lifestyle, compared with ${usd(nyToAustin.priceOnly)} on prices alone.`,
          ],
        },
      ]}
      faqs={[
        {
          q: "How do I calculate the cost of living difference between two cities?",
          a: "Divide the destination's price index by your current city's index and multiply by your salary. With BEA Regional Price Parities, moving from a metro at 98 to one at 115 means prices are about 17% higher. To be precise, apply the ratio to take-home pay and then work back to a gross salary using the new state's taxes, which is what this calculator does.",
        },
        {
          q: "What is the most expensive metro area in the US?",
          a: `Among the metros in this calculator, ${sf.name} has the highest 2024 price level at ${sf.rpp.toFixed(1)}, followed by Miami-Fort Lauderdale and Los Angeles. Among states, BEA ranks California, Hawaii and New Jersey highest.`,
        },
        {
          q: "How much do I need to earn in San Francisco?",
          a: `To match $100,000 in Austin you need about ${usd(toSf.taxAware)} in the San Francisco metro once California state tax is included, versus ${usd(toSf.priceOnly)} on prices alone. Use the calculator with your own salary and current city.`,
        },
        {
          q: "Is BEA cost of living data accurate?",
          a: "It is the official federal measure and covers the whole metro area, including rent, goods and services. It lags by about a year and averages across neighbourhoods, so a city-centre apartment can cost more than the metro average implies.",
        },
        {
          q: "How are state taxes estimated?",
          a: "With the same engine as our salary calculator: 2026 federal brackets and FICA, exact rates for no-tax and flat-tax states, and a 5% placeholder for states with graduated brackets. Multi-state metros are taxed as the principal city's state. Local income taxes, such as New York City's, are not included.",
        },
      ]}
      sources={[
        `${RPP_SOURCE}. All-items Regional Price Parities, US = 100.`,
        "Tax: 2026 IRS brackets and standard deduction (Rev. Proc. 2025-32), SSA 2026 wage base, state flat rates per the Tax Foundation.",
        "Limitations: metro averages, no local income taxes, and graduated-bracket states use a 5% placeholder rate. Treat results as estimates.",
      ]}
      related={[
        { href: "/job-offer-comparison", label: "Job offer comparison calculator" },
        { href: "/salary-calculator", label: "Salary & paycheck calculator" },
        { href: "/geographic-arbitrage-calculator", label: "Geographic arbitrage (international)" },
        { href: "/rto-cost-calculator", label: "Return-to-office cost calculator" },
        { href: "/raise-calculator", label: "Raise calculator" },
        { href: "/am-i-underpaid", label: "Am I underpaid?" },
      ]}
    />
  )
}
