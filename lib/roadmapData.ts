// ─── Types ───────────────────────────────────────────────────────────────────

export type GapDuration = "lt1" | "1to2" | "2to4" | "4plus"
export type Industry = "Tech" | "Finance" | "Consulting" | "Healthcare" | "Other"
export type ReentryGoal = "same" | "different" | "startup" | "unsure"
export type TopPriority = "skills" | "programs" | "network" | "interviews"
export type HoursPerWeek = "lt5" | "5to10" | "10to20" | "fulltime"
export type Timeline = "3mo" | "6mo" | "12mo" | "flexible"

export interface RoadmapInput {
  gapDuration: GapDuration
  lastIndustry: Industry
  targetIndustry: Industry
  reentryGoal: ReentryGoal
  topPriority: TopPriority
  hoursPerWeek: HoursPerWeek
  timeline: Timeline
}

export interface PhaseAction {
  task: string
  type: "tool" | "external" | "content"
  toolPath?: string     // internal link if type === "tool" or "content"
  toolLabel?: string
  timeEst: string       // e.g. "1 hr"
}

export interface Phase {
  number: number
  title: string
  subtitle: string
  weekRange: string
  accentColor: string
  borderColor: string
  bgColor: string
  dotColor: string
  actions: PhaseAction[]
  milestone: string
}

export interface RoadmapOutput {
  headline: string
  subheadline: string
  confidenceScore: number       // 1–100
  estimatedReturnWeeks: number
  phases: Phase[]
  shareText: string
}

// ─── Label maps (used in UI) ─────────────────────────────────────────────────

export const GAP_LABELS: Record<GapDuration, string> = {
  lt1: "Under 1 year",
  "1to2": "1–2 years",
  "2to4": "2–4 years",
  "4plus": "4+ years",
}

export const INDUSTRY_LABELS: Record<Industry, string> = {
  Tech: "Technology",
  Finance: "Finance / Banking",
  Consulting: "Consulting",
  Healthcare: "Healthcare",
  Other: "Other / Mixed",
}

export const GOAL_LABELS: Record<ReentryGoal, string> = {
  same: "Return to same type of company",
  different: "Switch to a different industry",
  startup: "Start something of my own",
  unsure: "I'm still figuring it out",
}

export const PRIORITY_LABELS: Record<TopPriority, string> = {
  skills: "Rebuilding / updating my skills",
  programs: "Finding the right returnship program",
  network: "Rebuilding my professional network",
  interviews: "Getting to interviews faster",
}

export const HOURS_LABELS: Record<HoursPerWeek, string> = {
  lt5: "Less than 5 hrs / week",
  "5to10": "5–10 hrs / week",
  "10to20": "10–20 hrs / week",
  fulltime: "Full time — I'm ready now",
}

export const TIMELINE_LABELS: Record<Timeline, string> = {
  "3mo": "3 months",
  "6mo": "6 months",
  "12mo": "12 months",
  flexible: "Whenever I'm ready",
}

// ─── Confidence scores by gap duration ───────────────────────────────────────

export const GAP_CONFIDENCE: Record<GapDuration, number> = {
  lt1: 88,
  "1to2": 79,
  "2to4": 68,
  "4plus": 54,
}

// ─── Estimated return weeks by timeline + hours/week ─────────────────────────

export function estimateReturnWeeks(
  timeline: Timeline,
  hours: HoursPerWeek,
  gap: GapDuration
): number {
  const base: Record<Timeline, number> = { "3mo": 12, "6mo": 24, "12mo": 48, flexible: 32 }
  const hoursMult: Record<HoursPerWeek, number> = { lt5: 1.4, "5to10": 1.1, "10to20": 1.0, fulltime: 0.7 }
  const gapMult: Record<GapDuration, number> = { lt1: 0.8, "1to2": 1.0, "2to4": 1.15, "4plus": 1.3 }
  return Math.round(base[timeline] * hoursMult[hours] * gapMult[gap])
}

// ─── Phase builder ────────────────────────────────────────────────────────────

export function buildPhases(input: RoadmapInput): Phase[] {
  const { gapDuration, lastIndustry, targetIndustry, reentryGoal, topPriority, hoursPerWeek } = input

  const isStartup = reentryGoal === "startup"
  const isSwitching = isStartup || reentryGoal === "different" || lastIndustry !== targetIndustry
  const isLongGap = gapDuration === "2to4" || gapDuration === "4plus"
  const isSkillsFocused = topPriority === "skills"
  const isProgramFocused = topPriority === "programs" && !isStartup
  const isNetworkFocused = topPriority === "network"
  const isFastTrack = hoursPerWeek === "fulltime" || hoursPerWeek === "10to20"

  // ── Phase 1: Baseline ──────────────────────────────────────────────────────
  const phase1: Phase = {
    number: 1,
    title: isStartup ? "Know Your Starting Position" : "Know Your Numbers",
    subtitle: "Baseline Assessment",
    weekRange: "Week 1–2",
    accentColor: "text-amber-400",
    borderColor: "border-amber-400/30",
    bgColor: "bg-amber-400/5",
    dotColor: "bg-amber-400",
    milestone: isStartup
      ? "You have clarity on your financial runway, target market, and the specific problem you're solving."
      : "You know exactly how big your salary gap is and what recovery path is realistic.",
    actions: isStartup
      ? [
          {
            task: "Calculate how long your current savings can cover your living costs without income. This is your runway — it determines your launch timeline.",
            type: "external",
            timeEst: "30 min",
          },
          {
            task: "Run the Lifetime Earnings Modeler to compare your startup path vs returning to employment — model a 3-year scenario with reduced income during the build phase.",
            type: "tool",
            toolPath: "/lifetime-earnings-calculator",
            toolLabel: "Lifetime Earnings Modeler",
            timeEst: "20 min",
          },
          {
            task: "Write down in one sentence: the specific problem you're solving, for whom, and why you're the right person to solve it. If you can't write it in one sentence yet, that's the work.",
            type: "external",
            timeEst: "1 hr",
          },
        ]
      : [
          {
            task: "Run the Salary Benchmark Calculator to see your gap vs market for your role, industry, and gap length.",
            type: "tool",
            toolPath: "/salary-benchmark-calculator",
            toolLabel: "Salary Benchmark Calculator",
            timeEst: "15 min",
          },
          {
            task: `Research the median salary for your target role in ${INDUSTRY_LABELS[targetIndustry]} on LinkedIn Salary and Levels.fyi. Write down the number.`,
            type: "external",
            timeEst: "30 min",
          },
          {
            task: "Read the career break salary penalty data to understand what a realistic recovery timeline looks like for your gap length.",
            type: "content",
            toolPath: "/return-to-work-after-career-break",
            toolLabel: "Career Break Salary Guide",
            timeEst: "20 min",
          },
        ],
  }

  // ── Phase 2: Gap Analysis ──────────────────────────────────────────────────
  const phase2: Phase = isStartup
    ? {
        number: 2,
        title: "Validate the Idea",
        subtitle: "Market Validation",
        weekRange: isFastTrack ? "Week 2–3" : "Week 2–4",
        accentColor: "text-cyan-400",
        borderColor: "border-cyan-400/30",
        bgColor: "bg-cyan-400/5",
        dotColor: "bg-cyan-400",
        milestone: "You have spoken to 10 potential customers and can describe their problem in their own words.",
        actions: [
          {
            task: "Identify 10 people who have the problem you're solving. Email or DM them asking for a 20-minute call — not to pitch, but to understand their problem. Aim for 5 conversations this week.",
            type: "external",
            timeEst: "3 hrs",
          },
          {
            task: "Run the Reskilling ROI Calculator for any technical skills you need to build the MVP — knowing the ROI helps you decide whether to learn it or hire/partner for it.",
            type: "tool",
            toolPath: "/reskilling-roi-calculator",
            toolLabel: "Reskilling ROI Calculator",
            timeEst: "15 min",
          },
          {
            task: "After each customer call, write 3 sentences: (1) the exact problem they described, (2) what they're currently doing about it, (3) how much they'd pay to solve it. This is your market research.",
            type: "external",
            timeEst: "10 min/call",
          },
        ],
      }
    : {
        number: 2,
        title: isSkillsFocused ? "Map Your Skills Gap" : "Understand Your Gap",
        subtitle: "Gap Analysis",
        weekRange: isFastTrack ? "Week 2–3" : "Week 2–4",
        accentColor: "text-cyan-400",
        borderColor: "border-cyan-400/30",
        bgColor: "bg-cyan-400/5",
        dotColor: "bg-cyan-400",
        milestone: isSkillsFocused
          ? "You have a ranked list of skill gaps with a dollar cost attached to each one."
          : "You know exactly what's holding your re-entry back and have a plan to address it.",
        actions: [
          {
            task: "Run the Skills Gap Calculator across your top 5 target skills to see which gaps cost you the most in salary terms.",
            type: "tool",
            toolPath: "/skills-gap-calculator",
            toolLabel: "Skills Gap Calculator",
            timeEst: "20 min",
          },
          {
            task: "Identify 10 people in your target industry on LinkedIn. Send 5 personalised connection requests this week — focus on people who have made career transitions themselves.",
            type: "external",
            timeEst: "45 min",
          },
          isSwitching
            ? {
                task: `Compare education paths (MBA vs bootcamp vs certificate) for breaking into ${INDUSTRY_LABELS[targetIndustry]}.`,
                type: "tool" as const,
                toolPath: "/education-comparison-calculator",
                toolLabel: "Education Comparison Calculator",
                timeEst: "25 min",
              }
            : {
                task: "Review the rebuild work experience guide for the fastest credibility signals to add to your CV while job searching.",
                type: "content" as const,
                toolPath: "/rebuild-work-experience-after-career-break",
                toolLabel: "Rebuild Work Experience Guide",
                timeEst: "20 min",
              },
        ],
      }

  // ── Phase 3: Path Selection ────────────────────────────────────────────────
  const phase3: Phase = isStartup
    ? {
        number: 3,
        title: "Build Your MVP",
        subtitle: "First Version",
        weekRange: isFastTrack ? "Week 3–5" : "Week 3–6",
        accentColor: "text-violet-400",
        borderColor: "border-violet-400/30",
        bgColor: "bg-violet-400/5",
        dotColor: "bg-violet-400",
        milestone: "You have a working MVP that at least one real customer has used and given feedback on.",
        actions: [
          {
            task: "Define your MVP scope: what is the absolute minimum version that a customer could use to solve their problem? Cut everything else. Write it on a sticky note and keep it visible.",
            type: "external",
            timeEst: "2 hrs",
          },
          {
            task: "Ship something — even if imperfect — to your first 3 validation customers by end of this phase. A prototype, a landing page with a waitlist, or a manual service before you automate. Done beats perfect.",
            type: "external",
            timeEst: "Ongoing",
          },
          {
            task: "Compare the ROI of freelancing/consulting part-time to fund your startup vs. going all-in. Use the Career Gap Calculator to model the financial tradeoff.",
            type: "tool",
            toolPath: "/career-gap-calculator",
            toolLabel: "Career Gap Calculator",
            timeEst: "20 min",
          },
        ],
      }
    : {
        number: 3,
        title: isProgramFocused ? "Find Your Program" : "Choose Your Path",
        subtitle: "Path Selection",
        weekRange: isFastTrack ? "Week 3–5" : "Week 3–6",
        accentColor: "text-violet-400",
        borderColor: "border-violet-400/30",
        bgColor: "bg-violet-400/5",
        dotColor: "bg-violet-400",
        milestone: "You have committed to one primary re-entry path with a specific target role, company type, and application date.",
        actions: [
          isProgramFocused || isLongGap
            ? {
                task: "Browse the returnship programs directory, filtered to your target sector. Shortlist 3 programs whose gap requirement and sector match your profile.",
                type: "tool" as const,
                toolPath: "/returnship-programs-2026",
                toolLabel: "Returnship Programs Directory",
                timeEst: "30 min",
              }
            : {
                task: "Run the Career Gap Calculator comparing direct re-entry vs returnship vs reskilling for your specific numbers.",
                type: "tool" as const,
                toolPath: "/career-gap-calculator",
                toolLabel: "Career Gap Calculator",
                timeEst: "20 min",
              },
          {
            task: "Run the Returnship ROI Calculator with your shortlisted program to compare financial outcomes vs applying directly.",
            type: "tool",
            toolPath: "/returnship-roi-calculator",
            toolLabel: "Returnship ROI Calculator",
            timeEst: "15 min",
          },
          isNetworkFocused
            ? {
                task: "Schedule 2 informational interviews with people currently in your target role. Use LinkedIn to find warm intros through your existing connections.",
                type: "external" as const,
                timeEst: "1 hr",
              }
            : {
                task: "Update your LinkedIn headline to reflect your return journey — e.g. 'Returning [Role] | Ex-[Company] | Open to returnship & direct roles in [Industry]'. This alone generates inbound recruiter messages.",
                type: "external" as const,
                timeEst: "20 min",
              },
        ],
      }

  // ── Phase 4: Active Pursuit ────────────────────────────────────────────────
  const phase4NetworkAction: PhaseAction =
    lastIndustry === "Finance" || targetIndustry === "Finance"
      ? {
          task: "Research finance-specific returnship programs at Goldman Sachs, JPMorgan, and Morgan Stanley — these programs have dedicated application tracks with higher acceptance for career returners.",
          type: "content",
          toolPath: "/women-returning-to-work",
          toolLabel: "Finance Returnship Guide",
          timeEst: "25 min",
        }
      : {
          task: "Reach out to 3 former colleagues or managers. A warm referral into a returnship program increases conversion probability by ~35% vs cold applications.",
          type: "external",
          timeEst: "45 min",
        }

  const phase4: Phase = isStartup
    ? {
        number: 4,
        title: "Get Your First Customer",
        subtitle: "Early Traction",
        weekRange: isFastTrack ? "Week 5–8" : "Week 6–10",
        accentColor: "text-emerald-400",
        borderColor: "border-emerald-400/30",
        bgColor: "bg-emerald-400/5",
        dotColor: "bg-emerald-400",
        milestone: "You have at least 1 paying customer (or 10 active free users if pre-revenue). You have evidence the product works.",
        actions: [
          {
            task: "Define your target customer acquisition channel: inbound (content, SEO) or outbound (cold email, LinkedIn DMs). Focus on one channel only. Multi-channel at zero revenue is a distraction.",
            type: "external",
            timeEst: "1 hr",
          },
          {
            task: "Send 50 personalised outreach messages this week — not templates, actual messages that reference something specific about each recipient. Track your response rate. Anything above 15% is a signal.",
            type: "external",
            timeEst: "4 hrs",
          },
          {
            task: "Price your product higher than feels comfortable. Price anchoring at launch is nearly impossible to reverse. Run the Education Comparison Calculator to model the lifetime value of a paying customer vs a free user.",
            type: "tool",
            toolPath: "/education-comparison-calculator",
            toolLabel: "ROI Comparison Tool",
            timeEst: "15 min",
          },
        ],
      }
    : {
        number: 4,
        title: "Apply & Build Momentum",
        subtitle: "Active Pursuit",
        weekRange: isFastTrack ? "Week 5–8" : "Week 6–10",
        accentColor: "text-emerald-400",
        borderColor: "border-emerald-400/30",
        bgColor: "bg-emerald-400/5",
        dotColor: "bg-emerald-400",
        milestone: "You have submitted applications to at least 3 programs or 10 direct roles, and have at least 1 recruiter conversation booked.",
        actions: [
          {
            task: isLongGap
              ? "Apply to all 3 shortlisted returnship programs this week. Set calendar reminders for each program's application window — most close within 2 weeks of opening."
              : "Apply to 5 direct roles per week. Use the return-to-work programs directory to supplement with structured programs that accept shorter gaps.",
            type: "tool",
            toolPath: "/return-to-work-programs",
            toolLabel: "Return-to-Work Programs",
            timeEst: "3 hrs/wk",
          },
          phase4NetworkAction,
          isSwitching
            ? {
                task: "Complete one visible, portfolio-ready project in your target industry this phase. GitHub repo, a published article, or a pro bono project — something you can link in your application.",
                type: "external" as const,
                timeEst: "5–10 hrs",
              }
            : {
                task: "Run the Reskilling ROI Calculator to check if a short certificate course (4–8 weeks) would pay off given your timeline. If IRR > 30%, do it now.",
                type: "tool" as const,
                toolPath: "/reskilling-roi-calculator",
                toolLabel: "Reskilling ROI Calculator",
                timeEst: "15 min",
              },
        ],
      }

  // ── Phase 5: Offer & Negotiation / Scale ──────────────────────────────────
  const phase5: Phase = isStartup
    ? {
        number: 5,
        title: "Sustain & Scale",
        subtitle: "Growth",
        weekRange: isFastTrack ? "Week 8–12" : "Week 10–14",
        accentColor: "text-rose-400",
        borderColor: "border-rose-400/30",
        bgColor: "bg-rose-400/5",
        dotColor: "bg-rose-400",
        milestone: "You have a repeatable customer acquisition process, positive unit economics, and a clear view of what to build next.",
        actions: [
          {
            task: "Calculate your unit economics: what does it cost to acquire one customer, and what do they generate in revenue over 12 months? If LTV/CAC is below 3:1, fix the model before scaling.",
            type: "external",
            timeEst: "2 hrs",
          },
          {
            task: "Run the Lifetime Earnings Calculator comparing your startup trajectory (optimistic, base, pessimistic) against your employment baseline. This grounds your expectations in math, not hope.",
            type: "tool",
            toolPath: "/lifetime-earnings-calculator",
            toolLabel: "Lifetime Earnings Calculator",
            timeEst: "20 min",
          },
          {
            task: "Document what worked to get your first customers. Write it down in one page. This is your playbook — the first hire you make should be able to replicate it.",
            type: "external",
            timeEst: "1 hr",
          },
        ],
      }
    : {
        number: 5,
        title: "Negotiate Your Return",
        subtitle: "Offer & Negotiation",
        weekRange: isFastTrack ? "Week 8–12" : "Week 10–14",
        accentColor: "text-rose-400",
        borderColor: "border-rose-400/30",
        bgColor: "bg-rose-400/5",
        dotColor: "bg-rose-400",
        milestone: "You have an accepted offer at or above your target salary with a clear plan for your first 90 days.",
        actions: [
          {
            task: "Re-run the Salary Benchmark Calculator with the specific role and company you're negotiating with. Go into every negotiation knowing the market number.",
            type: "tool",
            toolPath: "/salary-benchmark-calculator",
            toolLabel: "Salary Benchmark Calculator",
            timeEst: "10 min",
          },
          {
            task: "Read the MBA salary negotiation playbook — the same leverage data applies to returnship conversion offers. Most returners leave $15K–$30K on the table by not negotiating.",
            type: "content",
            toolPath: "/blog/mba-salary-negotiation",
            toolLabel: "Salary Negotiation Guide",
            timeEst: "25 min",
          },
          {
            task: "After your first offer comes in, wait 24 hours before responding. Use that time to rerun your lifetime earnings calculator comparing the offer vs your pre-break trajectory.",
            type: "tool",
            toolPath: "/lifetime-earnings-calculator",
            toolLabel: "Lifetime Earnings Calculator",
            timeEst: "20 min",
          },
        ],
      }

  return [phase1, phase2, phase3, phase4, phase5]
}
