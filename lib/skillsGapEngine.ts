/**
 * Skills Gap Cost Quantifier Engine
 *
 * Translates a skills gap into a dollar-value salary impact and
 * returns a ranked list of upskilling paths sorted by ROI-per-month-invested.
 *
 * The hook: "Not knowing Python costs you $X/year. Here's how to fix it."
 */

import { npvFromSeries, DISCOUNT_RATE } from "./mbaEngine"

export const SKILLS_PROJECTION_YEARS = 10

export type SkillLevel = 0 | 1 | 2 | 3  // 0=none, 1=basic, 2=intermediate, 3=advanced

export type SkillCategory =
  | "python_data"       // Python, Pandas, NumPy, data analysis
  | "sql"               // SQL querying and database management
  | "cloud_aws"         // AWS cloud services and architecture
  | "cloud_azure_gcp"   // Azure or GCP
  | "ml_ai"             // Machine learning and AI fundamentals
  | "project_mgmt"      // Project management (Agile, PMP, Scrum)
  | "product_mgmt"      // Product management (roadmapping, PRDs)
  | "data_visualization"// Tableau, Power BI, visualization tools
  | "cybersecurity"     // Security fundamentals, certifications
  | "digital_marketing" // SEO, paid media, Google Analytics
  | "excel_advanced"    // Advanced Excel, financial modeling
  | "leadership"        // Management, executive presence

export type SkillAssessment = {
  skill: SkillCategory
  currentLevel: SkillLevel
  targetLevel: SkillLevel
}

export type UpskillPathType = "free" | "certificate" | "bootcamp" | "degree"

export type UpskillPath = {
  id: string
  skill: SkillCategory
  label: string
  provider: string
  pathType: UpskillPathType
  cost: number
  durationMonths: number
  learningHoursPerWeek: number
  /** Expected annual salary bump in current role after skill acquisition */
  annualSalaryImpact: number
  /** Additional annual salary impact in a role change scenario */
  roleChangeSalaryImpact: number
  url?: string
}

export type SkillGapItem = {
  skill: SkillCategory
  skillLabel: string
  currentLevel: SkillLevel
  targetLevel: SkillLevel
  annualSalaryImpact: number
  tenYearNPVCost: number
  recommendedPath: UpskillPath
  pathNPV: number | null
  paybackMonths: number
  /** Higher = higher priority (return per month invested) */
  priorityScore: number
}

export type SkillsGapResult = {
  totalAnnualSalaryCost: number
  totalNPVCostOfGap: number
  totalUpskillCost: number
  totalUpskillMonths: number
  prioritizedSkills: SkillGapItem[]
  topPrioritySkill: SkillGapItem | null
  quickWins: SkillGapItem[]  // free or low-cost, high-impact
}

// ─── Skill metadata ─────────────────────────────────────────────────────────────

export type SkillMeta = {
  id: SkillCategory
  label: string
  description: string
  /** Annual salary impact per level gap (e.g., not knowing at all vs advanced) */
  maxAnnualImpact: number
  icon: string
}

export const SKILL_META: SkillMeta[] = [
  {
    id: "python_data",
    label: "Python / Data Analysis",
    description: "Python, Pandas, NumPy — essential for data-driven roles",
    maxAnnualImpact: 22000,
    icon: "🐍",
  },
  {
    id: "sql",
    label: "SQL & Databases",
    description: "SQL querying, joins, and working with relational databases",
    maxAnnualImpact: 12000,
    icon: "🗄️",
  },
  {
    id: "cloud_aws",
    label: "AWS Cloud",
    description: "Amazon Web Services — cloud infrastructure and services",
    maxAnnualImpact: 25000,
    icon: "☁️",
  },
  {
    id: "cloud_azure_gcp",
    label: "Azure / GCP",
    description: "Microsoft Azure or Google Cloud Platform",
    maxAnnualImpact: 20000,
    icon: "🌐",
  },
  {
    id: "ml_ai",
    label: "Machine Learning & AI",
    description: "ML fundamentals, model building, LLM/AI tooling",
    maxAnnualImpact: 30000,
    icon: "🤖",
  },
  {
    id: "project_mgmt",
    label: "Project Management (PMP)",
    description: "Agile, Scrum, PMP certification — managing teams and timelines",
    maxAnnualImpact: 18000,
    icon: "📋",
  },
  {
    id: "product_mgmt",
    label: "Product Management",
    description: "Product strategy, roadmapping, PRDs, stakeholder management",
    maxAnnualImpact: 28000,
    icon: "🎯",
  },
  {
    id: "data_visualization",
    label: "Data Visualization",
    description: "Tableau, Power BI — building dashboards and BI reports",
    maxAnnualImpact: 10000,
    icon: "📊",
  },
  {
    id: "cybersecurity",
    label: "Cybersecurity",
    description: "Security fundamentals, CompTIA Security+, SOC analyst skills",
    maxAnnualImpact: 22000,
    icon: "🔐",
  },
  {
    id: "digital_marketing",
    label: "Digital Marketing",
    description: "SEO, Google Analytics 4, paid media, growth marketing",
    maxAnnualImpact: 10000,
    icon: "📱",
  },
  {
    id: "excel_advanced",
    label: "Advanced Excel / Financial Modeling",
    description: "VBA, financial models, pivot tables, data analysis",
    maxAnnualImpact: 8000,
    icon: "📈",
  },
  {
    id: "leadership",
    label: "Leadership & Management",
    description: "People management, executive communication, strategic thinking",
    maxAnnualImpact: 35000,
    icon: "🎖️",
  },
]

// ─── Upskilling paths database ──────────────────────────────────────────────────

export const UPSKILL_PATHS: UpskillPath[] = [
  // Python / Data
  {
    id: "python_free",
    skill: "python_data",
    label: "Python for Everybody (Coursera Audit)",
    provider: "Coursera / University of Michigan",
    pathType: "free",
    cost: 0,
    durationMonths: 2,
    learningHoursPerWeek: 5,
    annualSalaryImpact: 8000,
    roleChangeSalaryImpact: 15000,
  },
  {
    id: "python_google_cert",
    skill: "python_data",
    label: "Google IT Automation with Python",
    provider: "Coursera / Google",
    pathType: "certificate",
    cost: 300,
    durationMonths: 6,
    learningHoursPerWeek: 5,
    annualSalaryImpact: 14000,
    roleChangeSalaryImpact: 20000,
  },
  // SQL
  {
    id: "sql_free",
    skill: "sql",
    label: "Mode Analytics SQL Tutorial (Free)",
    provider: "Mode Analytics",
    pathType: "free",
    cost: 0,
    durationMonths: 1,
    learningHoursPerWeek: 5,
    annualSalaryImpact: 5000,
    roleChangeSalaryImpact: 10000,
  },
  {
    id: "sql_google_cert",
    skill: "sql",
    label: "Google Data Analytics Certificate",
    provider: "Coursera / Google",
    pathType: "certificate",
    cost: 300,
    durationMonths: 6,
    learningHoursPerWeek: 5,
    annualSalaryImpact: 10000,
    roleChangeSalaryImpact: 15000,
  },
  // AWS
  {
    id: "aws_free",
    skill: "cloud_aws",
    label: "AWS Cloud Practitioner (Free prep materials)",
    provider: "AWS Training",
    pathType: "free",
    cost: 300, // exam fee only
    durationMonths: 2,
    learningHoursPerWeek: 8,
    annualSalaryImpact: 12000,
    roleChangeSalaryImpact: 18000,
  },
  {
    id: "aws_solutions_arch",
    skill: "cloud_aws",
    label: "AWS Solutions Architect Associate",
    provider: "AWS / A Cloud Guru",
    pathType: "certificate",
    cost: 800,
    durationMonths: 3,
    learningHoursPerWeek: 10,
    annualSalaryImpact: 20000,
    roleChangeSalaryImpact: 28000,
  },
  // ML / AI
  {
    id: "ml_fast_ai",
    skill: "ml_ai",
    label: "fast.ai Practical Deep Learning (Free)",
    provider: "fast.ai",
    pathType: "free",
    cost: 0,
    durationMonths: 3,
    learningHoursPerWeek: 8,
    annualSalaryImpact: 12000,
    roleChangeSalaryImpact: 22000,
  },
  {
    id: "ml_coursera",
    skill: "ml_ai",
    label: "Machine Learning Specialization",
    provider: "Coursera / Andrew Ng / DeepLearning.AI",
    pathType: "certificate",
    cost: 400,
    durationMonths: 4,
    learningHoursPerWeek: 8,
    annualSalaryImpact: 18000,
    roleChangeSalaryImpact: 28000,
  },
  // Project Management
  {
    id: "pmp_cert",
    skill: "project_mgmt",
    label: "PMP Certification",
    provider: "PMI",
    pathType: "certificate",
    cost: 1500,
    durationMonths: 4,
    learningHoursPerWeek: 8,
    annualSalaryImpact: 15000,
    roleChangeSalaryImpact: 20000,
  },
  {
    id: "scrum_master",
    skill: "project_mgmt",
    label: "Certified Scrum Master (CSM)",
    provider: "Scrum Alliance",
    pathType: "certificate",
    cost: 600,
    durationMonths: 1,
    learningHoursPerWeek: 15,
    annualSalaryImpact: 8000,
    roleChangeSalaryImpact: 12000,
  },
  // Product Management
  {
    id: "pm_course",
    skill: "product_mgmt",
    label: "Product Management Certificate",
    provider: "Reforge / Product School",
    pathType: "certificate",
    cost: 2000,
    durationMonths: 3,
    learningHoursPerWeek: 8,
    annualSalaryImpact: 18000,
    roleChangeSalaryImpact: 30000,
  },
  // Data Visualization
  {
    id: "tableau_free",
    skill: "data_visualization",
    label: "Tableau Public (Free) + Tableau Training",
    provider: "Tableau",
    pathType: "free",
    cost: 0,
    durationMonths: 2,
    learningHoursPerWeek: 5,
    annualSalaryImpact: 6000,
    roleChangeSalaryImpact: 10000,
  },
  // Cybersecurity
  {
    id: "security_plus",
    skill: "cybersecurity",
    label: "CompTIA Security+",
    provider: "CompTIA",
    pathType: "certificate",
    cost: 600,
    durationMonths: 3,
    learningHoursPerWeek: 10,
    annualSalaryImpact: 15000,
    roleChangeSalaryImpact: 22000,
  },
  // Digital Marketing
  {
    id: "google_marketing",
    skill: "digital_marketing",
    label: "Google Digital Marketing & E-commerce Certificate",
    provider: "Coursera / Google",
    pathType: "certificate",
    cost: 300,
    durationMonths: 6,
    learningHoursPerWeek: 5,
    annualSalaryImpact: 7000,
    roleChangeSalaryImpact: 12000,
  },
  // Excel
  {
    id: "excel_free",
    skill: "excel_advanced",
    label: "Excel Skills for Business (Free audit)",
    provider: "Coursera / Macquarie",
    pathType: "free",
    cost: 0,
    durationMonths: 2,
    learningHoursPerWeek: 4,
    annualSalaryImpact: 5000,
    roleChangeSalaryImpact: 8000,
  },
]

export function calculateSkillsGap(
  assessments: SkillAssessment[],
  currentSalary: number,
  discountRate: number = DISCOUNT_RATE,
): SkillsGapResult {
  const items: SkillGapItem[] = []

  for (const assessment of assessments) {
    if (assessment.targetLevel <= assessment.currentLevel) continue
    if (assessment.targetLevel === 0) continue

    const meta = SKILL_META.find(m => m.id === assessment.skill)
    if (!meta) continue

    const levelGap = assessment.targetLevel - assessment.currentLevel
    const annualSalaryImpact = meta.maxAnnualImpact * (levelGap / 3)

    // NPV cost of the gap over 10 years (discounted)
    const gapFlows = [0, ...Array.from({ length: SKILLS_PROJECTION_YEARS }, (_, i) =>
      -annualSalaryImpact * Math.pow(1.03, i)
    )]
    const tenYearNPVCost = Math.abs(npvFromSeries(gapFlows, discountRate))

    // Find best recommended path for this skill
    const paths = UPSKILL_PATHS.filter(p => p.skill === assessment.skill)
    if (paths.length === 0) continue

    // Score each path: (annualSalaryImpact - cost) / durationMonths
    const scoredPaths = paths.map(p => ({
      path: p,
      score: (p.annualSalaryImpact * 3 - p.cost) / (p.durationMonths + 0.1),
    })).sort((a, b) => b.score - a.score)

    const recommended = scoredPaths[0].path

    // Path NPV: -cost + sum(annualSalaryImpact / (1+r)^t for t=1..10)
    const pathFlows = [-recommended.cost, ...Array.from({ length: SKILLS_PROJECTION_YEARS }, (_, i) =>
      recommended.annualSalaryImpact * Math.pow(1.03, i)
    )]
    const pathNPV = (() => { try { return npvFromSeries(pathFlows, discountRate) } catch { return null } })()

    // Payback in months
    const monthlyImpact = recommended.annualSalaryImpact / 12
    const paybackMonths = monthlyImpact > 0 ? recommended.cost / monthlyImpact : Infinity

    const priorityScore = annualSalaryImpact / (recommended.cost + recommended.durationMonths * 1000 + 1) * 1000

    items.push({
      skill: assessment.skill,
      skillLabel: meta.label,
      currentLevel: assessment.currentLevel,
      targetLevel: assessment.targetLevel,
      annualSalaryImpact,
      tenYearNPVCost,
      recommendedPath: recommended,
      pathNPV,
      paybackMonths,
      priorityScore,
    })
  }

  // Sort by priority
  items.sort((a, b) => b.priorityScore - a.priorityScore)

  const totalAnnualSalaryCost = items.reduce((s, i) => s + i.annualSalaryImpact, 0)
  const totalNPVCostOfGap = items.reduce((s, i) => s + i.tenYearNPVCost, 0)
  const totalUpskillCost = items.reduce((s, i) => s + i.recommendedPath.cost, 0)
  const totalUpskillMonths = items.reduce((s, i) => s + i.recommendedPath.durationMonths, 0)

  const quickWins = items.filter(i =>
    i.recommendedPath.cost < 500 && i.annualSalaryImpact > 5000
  )

  return {
    totalAnnualSalaryCost,
    totalNPVCostOfGap,
    totalUpskillCost,
    totalUpskillMonths,
    prioritizedSkills: items,
    topPrioritySkill: items[0] ?? null,
    quickWins,
  }
}
