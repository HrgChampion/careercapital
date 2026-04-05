import {
  type RoadmapInput,
  type RoadmapOutput,
  GAP_CONFIDENCE,
  GAP_LABELS,
  INDUSTRY_LABELS,
  TIMELINE_LABELS,
  estimateReturnWeeks,
  buildPhases,
} from "@/lib/roadmapData"

export type { RoadmapInput, RoadmapOutput } from "@/lib/roadmapData"

export function generateRoadmap(input: RoadmapInput): RoadmapOutput {
  const { gapDuration, lastIndustry, targetIndustry, reentryGoal, hoursPerWeek, timeline } = input

  const isStartup = reentryGoal === "startup"
  const isSwitching = isStartup || reentryGoal === "different" || lastIndustry !== targetIndustry
  const confidenceScore = GAP_CONFIDENCE[gapDuration]
  const estimatedReturnWeeks = estimateReturnWeeks(timeline, hoursPerWeek, gapDuration)

  const industryContext = isStartup
    ? `launching a startup in ${INDUSTRY_LABELS[targetIndustry]}`
    : isSwitching
      ? `from ${INDUSTRY_LABELS[lastIndustry]} into ${INDUSTRY_LABELS[targetIndustry]}`
      : `back into ${INDUSTRY_LABELS[targetIndustry]}`

  const headline = isStartup
    ? `Your ${TIMELINE_LABELS[timeline]} Startup Launch Plan`
    : isSwitching
      ? `Your ${TIMELINE_LABELS[timeline]} Career Transition Plan`
      : `Your ${TIMELINE_LABELS[timeline]} Career Return Plan`

  const subheadline = `${GAP_LABELS[gapDuration]} break · ${isStartup ? "Launching" : "Returning"} ${industryContext} · ${estimatedReturnWeeks}-week plan`

  const shareText = isStartup
    ? `I just built my personalized startup launch roadmap on CareerReturns — ${GAP_LABELS[gapDuration]} break, launching into ${INDUSTRY_LABELS[targetIndustry]}, ${estimatedReturnWeeks}-week plan. Find yours at careerreturns.com/career-return-roadmap`
    : `I just built my personalized career return roadmap on CareerReturns — ${GAP_LABELS[gapDuration]} break, targeting ${INDUSTRY_LABELS[targetIndustry]}, ${estimatedReturnWeeks}-week plan. Find yours at careerreturns.com/career-return-roadmap`

  const phases = buildPhases(input)

  return {
    headline,
    subheadline,
    confidenceScore,
    estimatedReturnWeeks,
    phases,
    shareText,
  }
}
