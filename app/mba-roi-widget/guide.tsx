import ToolGuide from "@/components/ToolGuide"

export default function MbaRoiWidgetGuide() {
  return (
    <ToolGuide
      title="How the embeddable MBA ROI widget works"
      updated="2026-10-02"
      sections={[
        {
          heading: "What the widget computes",
          body: [
            "The widget is a compact version of the CareerReturns MBA ROI calculator, built to sit inside another site's article or program page. Visitors enter six inputs: current salary, expected post-MBA salary, total program cost, program length (one or two years), the share of cost financed by a loan, and the loan's interest rate. It returns four outputs: 10-year net present value, internal rate of return, break-even year, and an A–F investment grade with a risk level.",
            "It runs the same engine as the full calculator, so a number a reader sees on your site matches what they would get on careerreturns.com with the same inputs. The full version adds sensitivity analysis and a month-by-month amortization schedule. The widget leaves those out to stay small.",
          ],
        },
        {
          heading: "Embedding it, step by step",
          bullets: [
            "Copy the snippet above. It is a single iframe pointing at careerreturns.com/embed/mba-roi-calculator, plus a one-line attribution paragraph.",
            "WordPress: add a Custom HTML block and paste the snippet. Webflow: use an Embed element. Squarespace: use a Code block. Ghost: use an HTML card. On a hand-built page, paste it where the widget should appear.",
            "Keep width=\"100%\" so the widget fills its column. The inline max-width of 720px stops it stretching on wide layouts. A height of about 620–700px shows every input and result without an inner scrollbar. The snippet uses 660.",
            "Leave loading=\"lazy\" in place. The browser then fetches the widget only when a reader scrolls near it, so it does not compete with your page's main content for load time.",
            "Keep the attribution link below the iframe. It is the only condition of free use.",
          ],
        },
        {
          heading: "Technical notes for site owners",
          bullets: [
            "Framing: the embed route sends a frame-ancestors * content-security policy, so any domain may frame it. The rest of careerreturns.com allows same-origin framing only, which means you must use the /embed/ address, not the main calculator URL.",
            "Your own security policy: if your site sets a Content-Security-Policy with frame-src or child-src, add https://careerreturns.com to it, or the iframe will render blank.",
            "SEO: the embed page is marked noindex, so the widget's content does not compete with your article in search results. Your page keeps its own ranking signals, and the attribution link is an ordinary followed link.",
            "Privacy: the calculation runs in the visitor's browser inside the iframe. Inputs are not submitted to a server or shared with the host page.",
            "Theme: the widget uses a dark slate background with rounded corners. It reads best on dark sites or set inside a card on light ones.",
          ],
        },
        {
          heading: "The methodology",
          body: [
            "The engine treats the MBA as a capital investment. Year 0 carries the cash you pay upfront plus the salary you give up while studying. Each of the next ten years carries the salary increase minus any loan payment. The loan is amortized monthly over five years, and every flow is discounted at 6%.",
          ],
          formula: [
            "CF_0        = −( cost × (1 − loan share)  +  current salary × program years )",
            "CF_1 … CF_5  = (post-MBA salary − current salary) − 12 × monthly loan payment",
            "CF_6 … CF_10 = (post-MBA salary − current salary)",
            "",
            "Monthly payment = r × L ÷ (1 − (1 + r)^−60),   r = annual rate ÷ 12,  L = cost × loan share",
            "NPV = Σ CF_t ÷ 1.06^t;   IRR solves Σ CF_t ÷ (1 + IRR)^t = 0",
            "Break-even = first year cumulative cash flow ≥ 0, interpolated within the year",
          ].join("\n"),
          table: [
            ["Grade component", "Points", "Top band"],
            ["NPV", "30", "Above $100,000"],
            ["IRR", "25", "Above 18%"],
            ["Break-even", "20", "Under 4 years"],
            ["Loan payment ÷ post-MBA monthly pay", "15", "Under 20%"],
            ["NPV with a 10% smaller salary gain", "10", "Still positive"],
            ["Grade cutoffs", "A ≥ 85, B ≥ 70, C ≥ 55, D ≥ 40", "F below 40"],
          ],
        },
        {
          heading: "Worked example with the widget's defaults",
          body: [
            "The widget loads with a $90,000 current salary, a $140,000 post-MBA salary, a $120,000 two-year program, 80% loan financing and a 6% interest rate. That gives the following:",
          ],
          table: [
            ["Item", "Calculation", "Result"],
            ["Year 0 outflow", "$24,000 cash + $180,000 forgone salary", "−$204,000"],
            ["Loan", "$96,000 over 60 months at 6%", "$1,856/month ($22,271/year)"],
            ["Years 1–5", "$50,000 raise − $22,271", "$27,729/year"],
            ["Years 6–10", "Loan repaid", "$50,000/year"],
            ["10-year NPV", "Discounted at 6%", "$70,189"],
            ["IRR", "Rate where NPV = 0", "11.8%"],
            ["Break-even", "Cumulative cash flow turns positive in year 7", "6.3 years"],
            ["Grade", "25 + 15 + 10 + 15 + 10 points", "B (75), Moderate risk"],
          ],
        },
        {
          heading: "Helping your readers interpret results",
          bullets: [
            "A positive NPV means the degree beats leaving the same money invested at 6% over ten years. It does not mean the MBA pays off in year one. Break-even shows when the cumulative cash actually turns positive.",
            "IRR is easiest to explain as an investment's annual return. In the default case, 11.8% compares favorably with the 6% hurdle, but a cushion under 6 percentage points is why the risk level reads Moderate rather than Low.",
            "The post-MBA salary drives the result more than any other input. If your page covers a specific program, quote its published employment report next to the widget so readers enter a realistic number.",
            "Opportunity cost is often the biggest line. In the default case, $180,000 of forgone salary is larger than the $120,000 program cost, which is why one-year and part-time formats often score better.",
          ],
        },
        {
          heading: "Limitations worth stating on your page",
          bullets: [
            "Salaries are flat in nominal terms. There are no raises on either path, which tends to understate the gain when the post-MBA track grows faster.",
            "Taxes, scholarships, employer sponsorship, signing bonuses and living costs are not modeled separately. Net them into the cost or salary fields if they matter.",
            "The horizon is ten years and the loan term is fixed at five. Longer careers and longer repayment plans change the result.",
            "The grade is a summary convenience. Two programs with the same grade can have very different NPVs.",
          ],
        },
      ]}
      faqs={[
        {
          q: "Is the MBA ROI widget free to embed?",
          a: "Yes. There is no signup, API key or fee. The one condition is keeping the attribution link to CareerReturns that is included below the iframe in the snippet.",
        },
        {
          q: "Does the widget calculate the same numbers as the full MBA ROI calculator?",
          a: "Yes. Both run the same engine: a 10-year cash-flow model discounted at 6%, five-year monthly loan amortization, IRR, interpolated break-even and the same A–F grade. With the same inputs they produce the same NPV, IRR, break-even and grade. The full calculator adds sensitivity scenarios and an amortization schedule.",
        },
        {
          q: "Will embedding it slow down my page?",
          a: "The iframe uses loading=\"lazy\", so browsers do not fetch it until a reader scrolls near it. Your page's initial load is unaffected, and the widget loads independently of your own scripts and styles.",
        },
        {
          q: "Why does the widget appear blank on my site?",
          a: "The usual cause is the host page's own Content-Security-Policy. If it restricts frame-src or child-src, add https://careerreturns.com. Also check that the src points to the /embed/mba-roi-calculator address, because other careerreturns.com pages cannot be framed by external sites.",
        },
        {
          q: "Can I get a version with my program's defaults or a light theme?",
          a: "The public snippet always loads the standard defaults and dark theme. For a variant with preset school figures or a different look, use the contact link above.",
        },
      ]}
      sources={[
        "Engine: CareerReturns MBA ROI model (6% discount rate, 5-year loan term, 10-year horizon), the same code as the full MBA ROI calculator.",
        "Loan payment uses the standard amortization formula for a fixed-rate, fully amortizing loan with monthly payments.",
        "Salary inputs are supplied by the visitor. Business schools' published employment reports are the most reliable source for post-MBA salary figures.",
        "Limitations: flat nominal salaries, no taxes or scholarships, fixed 5-year repayment and a 10-year horizon.",
      ]}
      related={[
        { href: "/mba-break-even", label: "MBA break-even analysis" },
        { href: "/mba-cost", label: "True cost of an MBA" },
        { href: "/part-time-mba-roi", label: "Part-time MBA ROI" },
        { href: "/mba-worth-it", label: "Is an MBA worth it?" },
      ]}
    />
  )
}
