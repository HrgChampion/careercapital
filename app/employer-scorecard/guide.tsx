import ToolGuide from "@/components/ToolGuide"

export default function EmployerScorecardGuide() {
  return (
    <ToolGuide
      title="How to read the Employer Scorecard"
      updated="2026-10-02"
      sections={[
        {
          heading: "What the scorecard is for",
          body: [
            "The Employer Scorecard is a comparison table for professionals returning to work after a career break. It covers twelve large US employers in tech, finance and consulting, and records five things for each: whether the company runs a structured returnship and how long it lasts, the share of returnship participants who convert to a permanent role, how close returners' pay gets to the market rate after two years, how quickly people are promoted, and whether the employer offers flexible work or visa sponsorship.",
            "Its purpose is to move the search beyond press releases. Many employers announce return-to-work initiatives; fewer publish what happens to participants afterward. The scorecard keeps the outcome measures, conversion and pay recovery, alongside the program details, so you can see whether a program is a genuine hiring pipeline or a short internship with uncertain prospects.",
          ],
        },
        {
          heading: "What each column measures",
          bullets: [
            "Conversion rate: the estimated percentage of returnship participants who receive and accept a permanent offer at the end of the program. Shown only for employers with a dedicated program. Green at 70% or above, yellow at 55–69%.",
            "Salary recovery: estimated pay for a returner after two years, expressed as a percentage of the market rate for the same role and level. Green at 95% or above, yellow at 88–94%, orange below 88%.",
            "Promotion speed: the typical time to first promotion after joining, as a qualitative band.",
            "Flex / Sponsor: whether flexible or hybrid work is broadly available, and whether the employer sponsors work visas for returnship hires.",
            "Score and grade: a 0–100 composite assigned by CareerReturns that summarizes the factors above. Exact weights are not published, and higher conversion and pay recovery broadly track higher scores. In the current data, 91 maps to A+, 85–88 to A, 83–84 to A−, 76–78 to B+, 70–74 to B, 69 to B− and 58 to C+.",
          ],
        },
        {
          heading: "How the summary figures are calculated",
          body: [
            "The three figures above the list update with each filter you apply. They are simple averages over whichever employers are currently shown.",
          ],
          formula: [
            "Programs shown        = count of shown employers with a returnship program",
            "Avg conversion rate   = round( Σ conversion ÷ count )   over employers WITH a program",
            "Avg salary recovery   = round( Σ recovery ÷ count )     over ALL shown employers",
            "",
            "Sort options: overall score, conversion rate, or salary recovery (highest first)",
          ].join("\n"),
          bullets: [
            "Employers without a program are excluded from the conversion average, so it is not dragged down by zeros.",
            "Salary recovery is averaged across every employer shown, including those without a program, because it describes pay outcomes for returners hired through any route.",
          ],
        },
        {
          heading: "Worked example: the default view",
          body: [
            "With no filters applied, the scorecard shows all twelve employers sorted by overall score. Eleven have a returnship program. Their average conversion rate is 70% (772 ÷ 11 = 70.2, rounded), and the average salary recovery across all twelve is 94% (1,133 ÷ 12 = 94.4, rounded). The top five by score are McKinsey (91), Amazon (88), Google (86), Goldman Sachs (85) and Microsoft (84). Apple ranks last at 58 because it has no dedicated program in this dataset.",
            "Filtering by industry shows how the sectors differ in this data:",
          ],
          table: [
            ["Filter", "Programs", "Avg conversion", "Avg salary recovery"],
            ["All", "11 of 12", "70%", "94%"],
            ["Tech", "4 of 5", "74%", "96%"],
            ["Finance", "4 of 4", "68%", "94%"],
            ["Consulting", "3 of 3", "69%", "93%"],
          ],
        },
        {
          heading: "Interpreting the numbers",
          body: [
            "Conversion rate is the single most important figure for a returner, because it is the probability that the program becomes a job. A program converting 80% of participants is very different from one converting 60%, even if both last twelve weeks and pay similarly while they run. If you can only verify one statistic before applying, verify this one, ideally by asking recent participants.",
            "Salary recovery matters for the long run. A returner who reaches 97% of market pay within two years has largely closed the gap. One stuck at 88% is carrying a discount that compounds through every later raise. On a $120,000 market salary, the difference between 97% and 88% is about $10,800 a year before any compounding.",
            "Use the grade as a shortlist filter rather than a verdict. An A-rated employer with no flexible work may suit you less than a B-rated one that offers it, if flexibility is a constraint. Sort by conversion rate or salary recovery to rank on the measure you care about most.",
          ],
        },
        {
          heading: "Using the scorecard in a job search",
          bullets: [
            "Shortlist three to five employers, then confirm on each company's careers page that the program is open this cycle. Returnship cohorts typically recruit once or twice a year, and application windows can be short.",
            "Ask the recruiter directly what share of the last cohort converted and at what level. A program that cannot answer is a yellow flag.",
            "Negotiate the conversion offer, not just the returnship stipend. Your post-conversion salary is the base for every future raise, which is where salary recovery is won or lost.",
            "If none of the listed employers fits, many mid-size firms hire returners without a formal program. Model the economics of any offer with the Returnship ROI Analyzer.",
          ],
        },
        {
          heading: "Limitations to keep in mind",
          body: [
            "The figures are estimates compiled from iRelaunch reporting, company career pages and CareerReturns research. Most employers do not publish audited conversion or pay-recovery statistics, so treat each number as approximate. Programs are renamed, paused and relaunched regularly, and program names and lengths here may not match the current cycle.",
            "The list is deliberately small and skewed toward large, well-known US employers in three sectors. Absence from the list does not mean an employer is unfriendly to returners. Finally, conversion rates depend on who applies: a highly selective program can post a high conversion rate partly because it admits candidates who were already likely to be hired.",
          ],
        },
      ]}
      faqs={[
        {
          q: "What is a returnship?",
          a: "A returnship is a paid, fixed-length program, typically lasting several weeks to a few months, for experienced professionals returning after an extended career break. Participants do real project work with training and mentoring, and strong performers may be offered a permanent role at the end. Goldman Sachs is widely credited with launching the first program under the name in 2008.",
        },
        {
          q: "Is a returnship better than applying directly for a job?",
          a: "Not always. A returnship lowers the barrier to entry, because the employer has explicitly set aside roles for people with gaps, and it provides structured re-onboarding. The trade-offs are a temporary contract and no guaranteed offer. If you have recent, relevant experience, applying directly for permanent roles in parallel is sensible.",
        },
        {
          q: "What does a salary recovery of 95% mean?",
          a: "It means that two years after joining, a returner is estimated to earn about 95% of the market rate for the same role and level. The remaining 5% is the residual pay penalty from the career gap. Because future raises are usually a percentage of current pay, closing that gap early is worth more than closing it later.",
        },
        {
          q: "How was each employer's overall score determined?",
          a: "Each score is a 0–100 composite assigned by CareerReturns that summarizes the columns shown: program availability, conversion rate, salary recovery, promotion speed, flexible work and visa sponsorship. Exact weights are not published. It is an editorial summary, not an independently audited rating, so sort by the individual columns when one factor matters most to you.",
        },
        {
          q: "How often should I check whether a program is still running?",
          a: "Before every application. Returnship programs commonly run in annual or semi-annual cohorts, and companies change program names, eligibility rules and timing from year to year. The employer's own careers page is the authoritative source.",
        },
      ]}
      sources={[
        "iRelaunch return-to-work program listings and reporting, company careers pages, and CareerReturns research, as noted on the scorecard.",
        "Conversion rate, salary recovery and promotion speed are estimates; most employers do not publish audited figures for these measures.",
        "Limitations: twelve large US employers only; scores are editorial composites; program availability, names and terms change between cohorts and should be verified directly before applying.",
      ]}
      related={[
        { href: "/returnship-roi-calculator", label: "Returnship ROI Analyzer" },
        { href: "/return-to-work-programs", label: "Return-to-Work Programs" },
        { href: "/career-gap-calculator", label: "Career Gap Calculator" },
        { href: "/career-return-roadmap", label: "Career Return Roadmap" },
      ]}
    />
  )
}
