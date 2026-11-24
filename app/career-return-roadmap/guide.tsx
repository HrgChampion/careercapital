import ToolGuide from "@/components/ToolGuide"

// Timeline figures are the engine's own output (estimateReturnWeeks in
// lib/roadmapData.ts): base weeks by timeline × hours multiplier × gap multiplier.
export default function CareerReturnRoadmapGuide() {
  return (
    <ToolGuide
      title="How the Career Return Roadmap works"
      updated="2026-11-24"
      sections={[
        {
          heading: "What the roadmap gives you",
          body: [
            "Most return-to-work advice is a list of tips. The roadmap turns six answers about your situation into an ordered plan: five phases, each with a clear milestone, two to four concrete tasks, a time estimate for every task, and a link to the calculator or guide that does the heavy lifting. It also estimates how many weeks the plan should take at the hours you can give it, and how confident you can be in a return on that timeline.",
            "It is meant for anyone coming back after a break of a few months to several years, whether that means returning to the same kind of role, switching industries, or starting something of your own. Your answers are saved in your browser, so you can close the page and pick up where you left off.",
          ],
        },
        {
          heading: "The six questions and what they change",
          bullets: [
            "How long the break has been: sets your confidence score and stretches or shortens the timeline. Breaks of two years or more also shift the plan towards structured routes such as returnships.",
            "Last industry and target industry: if they differ, the plan treats you as a career switcher and adds an education-path comparison (MBA, bootcamp or certificate) and transferable-skills work.",
            "Re-entry goal: returning to the same kind of company, switching industry, starting a business, or still deciding. Choosing a startup swaps the job-search phases for validation, MVP and first-customer phases.",
            "Top priority: skills, programs, network or interviews. It decides which phase gets the deepest set of tasks, for example a ranked skills-gap list or a shortlist of returnship programs.",
            "Hours per week: 10–20 hours or full-time puts you on the fast track, which compresses the phase week ranges.",
            "Target timeline: three, six or twelve months, or flexible. This is the starting point for the week estimate.",
          ],
        },
        {
          heading: "The five phases",
          table: [
            ["Phase", "Standard pace", "Fast track", "Milestone"],
            ["1. Know your numbers", "Weeks 1–2", "Weeks 1–2", "You know your salary gap and a realistic recovery path"],
            ["2. Understand your gap", "Weeks 2–4", "Weeks 2–3", "A ranked list of skill gaps, or the main blocker to re-entry"],
            ["3. Choose your path", "Weeks 3–6", "Weeks 3–5", "Direct re-entry, returnship or reskilling, picked on the numbers"],
            ["4. Apply and build momentum", "Weeks 6–10", "Weeks 5–8", "Applications out, interviews booked, a return narrative that works"],
            ["5. Negotiate your return", "Weeks 10–14", "Weeks 8–12", "An offer at or above market, not a returner discount"],
          ],
          body: [
            "If you are starting a business, phases 2 to 5 become Validate the idea, Build your MVP, Get your first customer, and Sustain and scale, on the same week ranges.",
          ],
        },
        {
          heading: "How the timeline is estimated",
          body: [
            "The week estimate starts from your target timeline and adjusts for how much time you can commit and how long you have been away. Fewer hours stretch the plan; a longer break adds weeks for rebuilding skills and credibility. The result is a planning figure, not a promise, but it is useful for spotting a timeline that does not fit your hours.",
          ],
          formula: [
            "Base weeks       3 months = 12 · 6 months = 24 · 12 months = 48 · flexible = 32",
            "Hours factor     <5 hrs = 1.4 · 5–10 hrs = 1.1 · 10–20 hrs = 1.0 · full-time = 0.7",
            "Gap factor       <1 yr = 0.8 · 1–2 yrs = 1.0 · 2–4 yrs = 1.15 · 4+ yrs = 1.3",
            "Estimated weeks  = round(Base × Hours factor × Gap factor)",
          ].join("\n"),
        },
        {
          heading: "Example timelines",
          table: [
            ["Gap length", "3 months, full-time", "6 months, 10–20 hrs/wk", "12 months, under 5 hrs/wk", "Confidence"],
            ["Under 1 year", "7 weeks", "19 weeks", "54 weeks", "88%"],
            ["1–2 years", "8 weeks", "24 weeks", "67 weeks", "79%"],
            ["2–4 years", "10 weeks", "28 weeks", "77 weeks", "68%"],
            ["4+ years", "11 weeks", "31 weeks", "87 weeks", "54%"],
          ],
          body: [
            "Two patterns stand out. Hours matter more than ambition: someone with a four-year gap working on their return full-time can finish in about 11 weeks, while someone with a short gap and under five hours a week will take over a year. And the confidence score drops with gap length, which is why the plan leans on returnships and structured programs for longer breaks: they are designed to take the gap out of the hiring decision.",
          ],
        },
        {
          heading: "Getting the most from your plan",
          bullets: [
            "Do phase 1 properly. Knowing your market salary before you apply is what stops you accepting a returner discount in phase 5.",
            "Block the hours you said you had. If you chose 10–20 hours a week, put them in the calendar now; the estimate assumes you use them.",
            "Re-run the roadmap when something changes, such as a new target industry or more time available. It takes about two minutes.",
            "Put numbers on the path choice in phase 3 with the Career Gap Calculator, which compares direct re-entry, a returnship and reskilling on ten-year earnings.",
          ],
        },
      ]}
      faqs={[]}
      sources={[
        "Phases, tasks and week ranges come from the roadmap rules in the CareerReturns roadmap engine and are applied the same way for every user.",
        "Confidence scores are CareerReturns planning estimates by gap length, not survey results.",
        "Returnship program lengths of 10–24 weeks reflect typical published corporate programs; check each employer for current dates and terms.",
      ]}
      related={[
        { href: "/career-gap-calculator", label: "Career gap calculator" },
        { href: "/returnship-roi-calculator", label: "Returnship ROI calculator" },
        { href: "/return-to-work-programs", label: "Return-to-work programs" },
        { href: "/skills-gap-calculator", label: "Skills gap calculator" },
        { href: "/salary-benchmark-calculator", label: "Salary benchmark calculator" },
        { href: "/women-returning-to-work", label: "Women returning to work" },
      ]}
    />
  )
}
