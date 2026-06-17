/**
 * AI Displacement + Career Hedge Engine
 *
 * Translates published AI displacement probability by role/industry into
 * a personal dollar-denominated expected income loss, then models
 * the NPV of specific reskilling hedges against that loss.
 *
 * Sources:
 *   - Goldman Sachs "The Potentially Large Effects of AI on Economic Growth" (2023)
 *   - McKinsey "The Economic Potential of Generative AI" (2024)
 *   - WEF "Future of Jobs Report" (2025)
 *   - OpenAI/MIT "GPTs are GPTs" paper (2023)
 */

import { npvFromSeries, DISCOUNT_RATE } from "./mbaEngine"

export type AIRiskLevel = "low" | "medium" | "high" | "critical"

export type AIDisplacementProfile = {
  displacementProbability: number  // 0-1: probability of significant role disruption in 5yr
  partialAutomationFraction: number  // 0-1: fraction of tasks automatable NOW
  timelineYears: number  // years until ~50% of role tasks are automatable
  riskLevel: AIRiskLevel
}

export type HedgeOption = {
  id: string
  label: string
  cost: number  // USD
  durationMonths: number
  salaryUpliftPct: number  // % salary increase from acquiring this skill
  displacementReductionPct: number  // how much it reduces displacement probability
  category: "ai_tools" | "technical" | "leadership" | "pivot"
}

// AI displacement profiles by industry:role (sourced from GS/McKinsey/WEF)
export const AI_DISPLACEMENT_PROFILES: Record<string, AIDisplacementProfile> = {
  // Tech
  "tech:software_engineer":     { displacementProbability: 0.38, partialAutomationFraction: 0.45, timelineYears: 4, riskLevel: "medium" },
  "tech:product_manager":       { displacementProbability: 0.22, partialAutomationFraction: 0.30, timelineYears: 6, riskLevel: "low" },
  "tech:data_scientist":        { displacementProbability: 0.31, partialAutomationFraction: 0.50, timelineYears: 4, riskLevel: "medium" },
  "tech:qa_engineer":           { displacementProbability: 0.62, partialAutomationFraction: 0.65, timelineYears: 3, riskLevel: "high" },
  "tech:technical_writer":      { displacementProbability: 0.71, partialAutomationFraction: 0.72, timelineYears: 2, riskLevel: "critical" },
  // Finance
  "finance:financial_analyst":  { displacementProbability: 0.54, partialAutomationFraction: 0.58, timelineYears: 3, riskLevel: "high" },
  "finance:investment_banker":  { displacementProbability: 0.28, partialAutomationFraction: 0.35, timelineYears: 5, riskLevel: "medium" },
  "finance:accountant":         { displacementProbability: 0.67, partialAutomationFraction: 0.68, timelineYears: 3, riskLevel: "high" },
  "finance:actuary":            { displacementProbability: 0.44, partialAutomationFraction: 0.52, timelineYears: 4, riskLevel: "medium" },
  // Consulting
  "consulting:strategy":        { displacementProbability: 0.26, partialAutomationFraction: 0.28, timelineYears: 6, riskLevel: "low" },
  "consulting:operations":      { displacementProbability: 0.42, partialAutomationFraction: 0.48, timelineYears: 4, riskLevel: "medium" },
  "consulting:management":      { displacementProbability: 0.20, partialAutomationFraction: 0.25, timelineYears: 7, riskLevel: "low" },
  // Marketing
  "marketing:content_creator":  { displacementProbability: 0.74, partialAutomationFraction: 0.75, timelineYears: 2, riskLevel: "critical" },
  "marketing:marketing_manager":{ displacementProbability: 0.35, partialAutomationFraction: 0.42, timelineYears: 4, riskLevel: "medium" },
  "marketing:seo_specialist":   { displacementProbability: 0.69, partialAutomationFraction: 0.70, timelineYears: 2, riskLevel: "critical" },
  "marketing:data_analyst":     { displacementProbability: 0.48, partialAutomationFraction: 0.55, timelineYears: 3, riskLevel: "high" },
  // Operations / Admin
  "operations:project_manager": { displacementProbability: 0.32, partialAutomationFraction: 0.38, timelineYears: 5, riskLevel: "medium" },
  "operations:admin":           { displacementProbability: 0.76, partialAutomationFraction: 0.78, timelineYears: 2, riskLevel: "critical" },
  "operations:supply_chain":    { displacementProbability: 0.45, partialAutomationFraction: 0.50, timelineYears: 4, riskLevel: "medium" },
  // Legal
  "legal:paralegal":            { displacementProbability: 0.71, partialAutomationFraction: 0.72, timelineYears: 2, riskLevel: "critical" },
  "legal:lawyer":               { displacementProbability: 0.25, partialAutomationFraction: 0.32, timelineYears: 5, riskLevel: "low" },
  // Healthcare
  "healthcare:radiologist":     { displacementProbability: 0.50, partialAutomationFraction: 0.55, timelineYears: 4, riskLevel: "high" },
  "healthcare:nurse":           { displacementProbability: 0.10, partialAutomationFraction: 0.15, timelineYears: 8, riskLevel: "low" },
  "healthcare:medical_coder":   { displacementProbability: 0.72, partialAutomationFraction: 0.74, timelineYears: 2, riskLevel: "critical" },
  // Education
  "education:teacher":          { displacementProbability: 0.15, partialAutomationFraction: 0.20, timelineYears: 7, riskLevel: "low" },
  "education:curriculum":       { displacementProbability: 0.42, partialAutomationFraction: 0.48, timelineYears: 4, riskLevel: "medium" },
  // Customer Service
  "service:customer_service":   { displacementProbability: 0.82, partialAutomationFraction: 0.80, timelineYears: 1, riskLevel: "critical" },
  "service:sales_rep":          { displacementProbability: 0.38, partialAutomationFraction: 0.42, timelineYears: 4, riskLevel: "medium" },
}

// Available hedges — role-agnostic skills that reduce AI displacement risk
export const HEDGE_OPTIONS: HedgeOption[] = [
  { id: "ai_tools_general",  label: "AI Tools Proficiency (ChatGPT, Claude, Copilot)", cost: 0,    durationMonths: 1, salaryUpliftPct: 8,  displacementReductionPct: 22, category: "ai_tools" },
  { id: "python_basics",     label: "Python + Data Analysis (Coursera / DataCamp)",   cost: 400,  durationMonths: 3, salaryUpliftPct: 14, displacementReductionPct: 28, category: "technical" },
  { id: "prompt_engineering",label: "Prompt Engineering Certification",                cost: 300,  durationMonths: 1, salaryUpliftPct: 10, displacementReductionPct: 18, category: "ai_tools" },
  { id: "aws_cert",          label: "AWS Cloud Practitioner / Solutions Architect",   cost: 1200, durationMonths: 3, salaryUpliftPct: 18, displacementReductionPct: 32, category: "technical" },
  { id: "data_analytics",    label: "Google Data Analytics Professional Certificate", cost: 500,  durationMonths: 4, salaryUpliftPct: 12, displacementReductionPct: 24, category: "technical" },
  { id: "leadership",        label: "Executive Leadership / MBA Essentials",          cost: 3500, durationMonths: 6, salaryUpliftPct: 20, displacementReductionPct: 35, category: "leadership" },
  { id: "product_management",label: "Product Management Certification (AIPMM / PMI)", cost: 1500, durationMonths: 3, salaryUpliftPct: 15, displacementReductionPct: 30, category: "pivot" },
  { id: "sales_ai",          label: "AI-Augmented Sales Skills",                     cost: 600,  durationMonths: 2, salaryUpliftPct: 12, displacementReductionPct: 20, category: "ai_tools" },
]

export type AIImpactResult = {
  profile: AIDisplacementProfile
  riskLabel: string
  riskColor: string
  // Unhedged scenario
  expectedAnnualLoss: number
  fiveYearExpectedLoss: number
  fiveYearExpectedLossNPV: number
  // Per hedge: NPV of hedge benefit
  hedgeAnalysis: {
    hedge: HedgeOption
    salaryUplift: number
    displacementRiskAfter: number
    lossReductionNPV: number
    hedgeCost: number
    netNPV: number
    roiPct: number
  }[]
  bestHedge: string
}

export function calculateAIImpact(
  currentSalary: number,
  industry: string,
  role: string,
  discountRate = DISCOUNT_RATE,
): AIImpactResult {
  const profileKey = `${industry}:${role}`
  const profile = AI_DISPLACEMENT_PROFILES[profileKey] ?? {
    displacementProbability: 0.35,
    partialAutomationFraction: 0.40,
    timelineYears: 4,
    riskLevel: "medium" as AIRiskLevel,
  }

  const riskLabels: Record<AIRiskLevel, { label: string; color: string }> = {
    low:      { label: "Low Risk",      color: "text-green-400" },
    medium:   { label: "Medium Risk",   color: "text-yellow-400" },
    high:     { label: "High Risk",     color: "text-orange-400" },
    critical: { label: "Critical Risk", color: "text-red-400" },
  }

  const { label: riskLabel, color: riskColor } = riskLabels[profile.riskLevel]

  // Expected annual loss = salary × P(displacement) × partial automation fraction
  // This models: probability-weighted salary impact of automation over 5 years
  const expectedAnnualLoss = currentSalary * profile.displacementProbability * profile.partialAutomationFraction

  // 5-year series: loss grows as automation matures (linear ramp to full displacement)
  const fiveYearSeries = Array.from({ length: 5 }, (_, i) => {
    const rampFactor = Math.min(1, (i + 1) / profile.timelineYears)
    return expectedAnnualLoss * rampFactor
  })
  const fiveYearExpectedLoss = fiveYearSeries.reduce((a, b) => a + b, 0)
  const fiveYearExpectedLossNPV = npvFromSeries(fiveYearSeries, discountRate)

  // Hedge analysis
  const hedgeAnalysis = HEDGE_OPTIONS.map(hedge => {
    const salaryUplift = currentSalary * (hedge.salaryUpliftPct / 100)
    const displacementRiskAfter = Math.max(0, profile.displacementProbability - hedge.displacementReductionPct / 100)

    // Loss reduction: difference between unhedged and hedged NPV
    const hedgedLossSeries = fiveYearSeries.map(loss => {
      const reductionFactor = hedge.displacementReductionPct / 100
      return loss * (1 - reductionFactor)
    })
    const hedgedLossNPV = npvFromSeries(hedgedLossSeries, discountRate)
    const lossReductionNPV = fiveYearExpectedLossNPV - hedgedLossNPV

    // Salary uplift NPV
    const upliftSeries = Array.from({ length: 5 }, () => salaryUplift)
    const upliftNPV = npvFromSeries(upliftSeries, discountRate)

    const totalBenefitNPV = lossReductionNPV + upliftNPV
    const netNPV = totalBenefitNPV - hedge.cost
    const roiPct = hedge.cost > 0 ? ((totalBenefitNPV - hedge.cost) / hedge.cost) * 100 : 999

    return {
      hedge,
      salaryUplift,
      displacementRiskAfter,
      lossReductionNPV,
      hedgeCost: hedge.cost,
      netNPV,
      roiPct,
    }
  }).sort((a, b) => b.netNPV - a.netNPV)

  return {
    profile,
    riskLabel,
    riskColor,
    expectedAnnualLoss,
    fiveYearExpectedLoss,
    fiveYearExpectedLossNPV,
    hedgeAnalysis,
    bestHedge: hedgeAnalysis[0]?.hedge.id ?? "",
  }
}

// Industry + role options for the UI
export const AI_IMPACT_ROLES: { industryId: string; industryLabel: string; roles: { id: string; label: string }[] }[] = [
  { industryId: "tech", industryLabel: "Technology", roles: [
    { id: "software_engineer", label: "Software Engineer" },
    { id: "product_manager",   label: "Product Manager" },
    { id: "data_scientist",    label: "Data Scientist" },
    { id: "qa_engineer",       label: "QA / Test Engineer" },
    { id: "technical_writer",  label: "Technical Writer" },
  ]},
  { industryId: "finance", industryLabel: "Finance", roles: [
    { id: "financial_analyst", label: "Financial Analyst" },
    { id: "investment_banker", label: "Investment Banker" },
    { id: "accountant",        label: "Accountant / Auditor" },
    { id: "actuary",           label: "Actuary" },
  ]},
  { industryId: "consulting", industryLabel: "Consulting", roles: [
    { id: "strategy",    label: "Strategy Consultant" },
    { id: "operations",  label: "Operations Consultant" },
    { id: "management",  label: "Management Consultant" },
  ]},
  { industryId: "marketing", industryLabel: "Marketing", roles: [
    { id: "content_creator",   label: "Content Creator / Writer" },
    { id: "marketing_manager", label: "Marketing Manager" },
    { id: "seo_specialist",    label: "SEO Specialist" },
    { id: "data_analyst",      label: "Marketing Analyst" },
  ]},
  { industryId: "operations", industryLabel: "Operations / Admin", roles: [
    { id: "project_manager", label: "Project Manager" },
    { id: "admin",           label: "Administrative / EA" },
    { id: "supply_chain",    label: "Supply Chain / Logistics" },
  ]},
  { industryId: "legal", industryLabel: "Legal", roles: [
    { id: "paralegal", label: "Paralegal / Legal Assistant" },
    { id: "lawyer",    label: "Lawyer / Attorney" },
  ]},
  { industryId: "healthcare", industryLabel: "Healthcare", roles: [
    { id: "radiologist",   label: "Radiologist / Imaging" },
    { id: "nurse",         label: "Nurse / Care Provider" },
    { id: "medical_coder", label: "Medical Coder / Biller" },
  ]},
  { industryId: "service", industryLabel: "Customer Service / Sales", roles: [
    { id: "customer_service", label: "Customer Service Rep" },
    { id: "sales_rep",        label: "Sales Representative" },
  ]},
]
