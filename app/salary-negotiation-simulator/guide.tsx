import ToolGuide from "@/components/ToolGuide"

export default function SalaryNegotiationGuide() {
  return (
    <ToolGuide
      title="How the Salary Negotiation Simulator works"
      updated="2026-10-02"
      sections={[
        {
          heading: "What the simulator is for",
          body: [
            "Most people negotiate a job offer once every few years. The conversation lasts minutes, but the number it sets becomes the base for every later raise, bonus percentage and retirement contribution. The simulator lets you rehearse that conversation against a scripted HR manager, and it puts a dollar value on each choice so you can see what a hesitant \"yes\" costs.",
            "It is for anyone holding, or about to receive, a written or verbal offer: new graduates, experienced hires, people returning to work and post-MBA candidates. You enter the base salary on the table. The script then sets every counteroffer and concession as a fixed percentage of that number, so the dialogue scales to any offer size.",
          ],
        },
        {
          heading: "How the price points are set",
          body: [
            "The script uses four amounts, each derived from your offer and, apart from the signing bonus, rounded to the nearest $1,000. You never choose these numbers. You choose when to use them, which is the part that matters in a real negotiation.",
          ],
          table: [
            ["Price point", "Rule", "On a $95,000 offer"],
            ["Your research-based anchor", "Offer × 1.12", "$106,000"],
            ["Your fallback target", "Offer × 1.07", "$102,000"],
            ["HR's first stretch / firm maximum", "Offer × 1.03", "$98,000"],
            ["One-time signing bonus", "Offer × 0.05 (not rounded)", "$4,750 (shown as $5K)"],
          ],
        },
        {
          heading: "The 10-year present-value formula",
          body: [
            "Each extra dollar of base salary is valued as a stream of equal payments at the end of each of the next ten years, discounted at 8% a year. The 8% is a typical long-run return on a diversified investment portfolio, so the result answers one question: how much money would you need today to replicate this raise?",
          ],
          formula: [
            "NPV = Δ × Σ (1 ÷ 1.08^t), for t = 1 … 10",
            "    = Δ × 6.7101",
            "",
            "Δ = final base salary − original offer (per year)",
          ].join("\n"),
          table: [
            ["Annual increase won", "10-year NPV at 8%"],
            ["$1,000", "$6,710"],
            ["$3,000", "$20,130"],
            ["$5,000", "$33,550"],
            ["$7,000", "$46,971"],
            ["$10,000", "$67,101"],
          ],
        },
        {
          heading: "Worked example: a $95,000 offer",
          body: [
            "With the default $95,000 offer, the pre-negotiation panel compares accepting with winning 7% more, which is $6,650 a year. At 8% over ten years that is $44,622 in present value, displayed as $45K. That is the money at stake in a conversation that usually takes under ten minutes.",
            "The branches play out as follows. The final salary in each row is the base the HR manager agrees to in the script.",
          ],
          table: [
            ["Your path through the script", "Final base", "Annual gain", "10-year NPV"],
            ["Accept immediately", "$95,000", "$0", "$0"],
            ["Counter at $106,000, accept HR's $98,000 stretch", "$98,000", "$3,000", "$20,130"],
            ["Ask for 48 hours, counter at $102,000, accept HR's $98,000 maximum", "$98,000", "$3,000", "$20,130"],
            ["Counter at $106,000, push for $102,000, wait for manager approval", "$102,000", "$7,000", "$46,971"],
            ["Counter, then pivot to a signing bonus", "$98,000 + $4,750 once", "$3,000", "$20,130 plus the bonus"],
          ],
        },
        {
          heading: "What the example teaches",
          bullets: [
            "Asking is worth more than any one tactic. Every branch that includes a counter ends at least $3,000 a year ahead. Only the accept-immediately branch ends at $0.",
            "A higher anchor makes room for the second ask. Opening at 112% lets HR come back at 103% and still leaves a credible 107% to push for, and that second ask is worth $26,841 more in present value than settling at the first stretch.",
            "Bonuses are not raises. A $4,750 signing bonus is paid once. A $4,750 base increase would be worth about $31,873 over ten years at the same 8% rate. Trade base for a bonus only when the employer's salary band is genuinely fixed.",
            "Waiting is not weakness. Saying you'll wait while HR asks the hiring manager is the only branch that reaches the $102,000 outcome.",
          ],
        },
        {
          heading: "Tactics to bring to the real conversation",
          bullets: [
            "Build your anchor from evidence. Use published pay ranges (a growing number of US states, including California, Colorado, New York and Washington, require them in job postings), Bureau of Labor Statistics occupational wage data and offers from peers at the same level. Then you can name the source when you state your number.",
            "State one number, not a range. A range invites the employer to pick its bottom.",
            "Get the offer in writing before negotiating details, and confirm the base, bonus target, equity, start date and review timing in the final letter.",
            "Negotiate the whole package in one pass. Raising new items after you have agreed on base comes across as moving the goalposts.",
            "Mention competing offers only if they exist. The simulator's delay branch has you cite competing offers; in real life an invented offer can get your offer withdrawn.",
            "Put a price on your walk-away point before the call. Knowing your best alternative (what negotiators call your BATNA) keeps you from accepting a number you will resent.",
          ],
        },
        {
          heading: "Limitations and common mistakes",
          bullets: [
            "The HR manager is scripted and cooperative. Real employers sometimes refuse to move, especially for standardized entry-level bands, union scales or government pay grades. Being turned down after a polite counter is rare, but it happens.",
            "The present-value math holds the increase flat for ten years. In reality, percentage raises apply to a higher base, so the gap grows. With 3% annual raises, a $7,000 starting difference is worth about $52,851 instead of $46,971. Treat the tool's figures as a floor.",
            "The model assumes you stay ten years. Most people change employers sooner, but a higher base usually carries into the next offer, because many employers still anchor on current pay where the law allows them to ask.",
            "Signing bonuses are shown in the conversation but are not added to the NPV tracker, which counts only recurring base salary.",
            "Taxes are ignored. All figures are pre-tax.",
          ],
        },
      ]}
      faqs={[
        {
          q: "How much should I counter above the offer?",
          a: "The simulator anchors 12% above the offer and expects to settle between 3% and 7% above it. That is a reasonable starting frame, but the right number depends on how far the offer sits from the market rate for your role. If the offer is already at the top of a published range, a smaller ask backed by evidence is more credible than a large one.",
        },
        {
          q: "Why does the simulator use an 8% discount rate?",
          a: "Eight percent is close to the long-run average nominal return many planners assume for a diversified stock-heavy portfolio. Discounting at that rate asks what lump sum, invested today, would match the raise. A lower rate, such as 5%, would make every raise look more valuable, so 8% is the more cautious choice.",
        },
        {
          q: "Is it risky to negotiate a job offer?",
          a: "For most professional roles, a polite, evidence-based counter carries little risk. Employers expect it, and offers are rarely withdrawn because of a reasonable request. The risk rises with ultimatums, invented competing offers, or repeated new demands after you have agreed on terms.",
        },
        {
          q: "Should I take a signing bonus instead of a higher salary?",
          a: "Only if base salary is genuinely capped. A one-time bonus equal to a year's raise is worth roughly one-seventh of that raise's 10-year present value at 8%. It also does not raise future percentage-based raises, bonuses or retirement matches.",
        },
        {
          q: "Can I use this for a raise at my current job?",
          a: "The NPV math applies directly: any recurring increase in base pay is valued the same way. The script, though, is written for a new offer. In an internal raise conversation, your leverage comes from documented results and market data rather than from an employer trying to close a hire.",
        },
      ]}
      sources={[
        "Script percentages (112%, 107%, 103% and a 5% signing bonus) and the 8% discount rate are CareerReturns modeling assumptions, not survey results.",
        "Market pay references: U.S. Bureau of Labor Statistics Occupational Employment and Wage Statistics (OEWS), and pay ranges published under state pay-transparency laws.",
        "Negotiation concepts: anchoring (Tversky and Kahneman's research on judgment under uncertainty) and BATNA (Fisher and Ury, Getting to Yes).",
        "Limitations: one scripted counterpart, flat nominal raise with no future increases, no taxes, equity or benefits, and a fixed 10-year horizon.",
      ]}
      related={[
        { href: "/blog/mba-salary-negotiation", label: "Post-MBA salary negotiation guide" },
        { href: "/salary-benchmark-calculator", label: "Salary Benchmark Calculator" },
        { href: "/am-i-underpaid", label: "Am I Underpaid? salary audit" },
        { href: "/career-compounder", label: "Career Compounder" },
      ]}
    />
  )
}
