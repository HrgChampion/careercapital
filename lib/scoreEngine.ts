/**
 * Generic financial scoring engine
 * Decoupled from MBAResult so all calculators can produce A–F grades.
 */

import { DISCOUNT_RATE } from "./mbaEngine"

export type FinancialMetrics = {
  npv: number | null
  irr: number | null
  paybackPeriod: number
  /** monthly loan payment / monthly post-program income (0 if no loan) */
  debtToIncomeRatio: number
  /** NPV under conservative (−10%) scenario */
  conservativeNPV: number | null
}

export type ScoreResult = {
  score: number
  grade: string
  riskLevel: string
  riskFactors: string
  summary: string
}

export function scoreFinancials(metrics: FinancialMetrics): ScoreResult {
  const { npv, irr, paybackPeriod, debtToIncomeRatio, conservativeNPV } = metrics

  let score = 0

  // 1. NPV (30 pts)
  if ((npv ?? 0) > 100_000) score += 30
  else if ((npv ?? 0) > 50_000) score += 25
  else if ((npv ?? 0) > 0) score += 18
  else if ((npv ?? 0) > -50_000) score += 8

  // 2. IRR (25 pts)
  if (irr && irr > 0.18) score += 25
  else if (irr && irr > 0.12) score += 20
  else if (irr && irr > 0.08) score += 15
  else if (irr && irr > 0.06) score += 10

  // 3. Payback (20 pts)
  if (paybackPeriod < 4) score += 20
  else if (paybackPeriod < 6) score += 15
  else if (paybackPeriod < 8) score += 10
  else score += 3

  // 4. Debt burden (15 pts)
  if (debtToIncomeRatio < 0.2) score += 15
  else if (debtToIncomeRatio < 0.35) score += 10
  else if (debtToIncomeRatio < 0.5) score += 5

  // 5. Downside sensitivity (10 pts)
  if ((conservativeNPV ?? -Infinity) > 0) score += 10
  else if ((conservativeNPV ?? -Infinity) > -50_000) score += 5

  // Grade
  let grade = "F"
  if (score >= 85) grade = "A"
  else if (score >= 70) grade = "B"
  else if (score >= 55) grade = "C"
  else if (score >= 40) grade = "D"

  // Risk — 3-factor model
  const irrBuffer = irr !== null ? irr - DISCOUNT_RATE : -DISCOUNT_RATE
  const leverageRisk = debtToIncomeRatio > 0.35 ? 2 : debtToIncomeRatio > 0.2 ? 1 : 0
  const returnRisk = irrBuffer > 0.06 ? 0 : irrBuffer > 0 ? 1 : 2
  const paybackRisk = paybackPeriod < 5 ? 0 : paybackPeriod < 8 ? 1 : 2
  const riskScore = leverageRisk + returnRisk + paybackRisk

  let riskLevel = "High"
  if (riskScore <= 1) riskLevel = "Low"
  else if (riskScore <= 3) riskLevel = "Moderate"

  const elevated: string[] = []
  if (leverageRisk >= 1) elevated.push("leverage")
  if (returnRisk >= 1) elevated.push("IRR buffer")
  if (paybackRisk >= 1) elevated.push("payback duration")

  const riskFactors =
    elevated.length > 0
      ? `Risk factors: ${elevated.join(", ")}`
      : "Risk profile: well-balanced"

  return { score, grade, riskLevel, riskFactors, summary: gradeSummary(grade) }
}

function gradeSummary(grade: string): string {
  if (grade === "A") return "Strong financial investment with excellent long-term value creation."
  if (grade === "B") return "Financially viable with solid upside. Good if aligned with your career goals."
  if (grade === "C") return "Marginal financial return. Consider the non-financial benefits carefully."
  if (grade === "D") return "High financial risk. Returns are weak relative to total cost."
  return "Financially unattractive under current assumptions. Re-examine the inputs."
}
