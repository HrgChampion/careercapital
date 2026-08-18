import fs from "fs"
import path from "path"

export const dynamic = "force-static"

const BASE = "https://careerreturns.com"

type SeedEntry = { lastmod: string; priority: string; changefreq: string }

// Per-route settings seeded from the legacy hand-maintained public/sitemap.xml
// (route key = path without leading/trailing slash; "" = homepage).
// Routes added under app/ later fall back to DEFAULTS automatically.
const SEED: Record<string, SeedEntry> = {
  "": { lastmod: "2026-06-21", priority: "1.0", changefreq: "monthly"  },
  "mba-roi-calculator": { lastmod: "2026-08-18", priority: "0.9", changefreq: "monthly"  },
  "career-return-roadmap": { lastmod: "2026-08-18", priority: "0.9", changefreq: "monthly"  },
  "career-gap-calculator": { lastmod: "2026-08-18", priority: "0.6", changefreq: "monthly"  },
  "returnship-roi-calculator": { lastmod: "2026-08-18", priority: "0.6", changefreq: "monthly"  },
  "reskilling-roi-calculator": { lastmod: "2026-08-18", priority: "0.6", changefreq: "monthly"  },
  "geographic-arbitrage-calculator": { lastmod: "2026-08-18", priority: "0.8", changefreq: "monthly"  },
  "ai-career-impact": { lastmod: "2026-08-18", priority: "0.8", changefreq: "monthly"  },
  "loyalty-tax-calculator": { lastmod: "2026-08-18", priority: "0.8", changefreq: "monthly"  },
  "rto-cost-calculator": { lastmod: "2026-08-18", priority: "0.8", changefreq: "monthly"  },
  "am-i-underpaid": { lastmod: "2026-08-18", priority: "0.8", changefreq: "monthly"  },
  "salary-benchmark-calculator": { lastmod: "2026-08-18", priority: "0.6", changefreq: "monthly"  },
  "education-comparison-calculator": { lastmod: "2026-08-18", priority: "0.6", changefreq: "monthly"  },
  "skills-gap-calculator": { lastmod: "2026-08-18", priority: "0.6", changefreq: "monthly"  },
  "lifetime-earnings-calculator": { lastmod: "2026-08-18", priority: "0.6", changefreq: "monthly"  },
  "mba-roi": { lastmod: "2026-08-18", priority: "0.9", changefreq: "monthly"  },
  "mba-worth-it": { lastmod: "2026-08-18", priority: "0.85", changefreq: "monthly"  },
  "mba-jobs-200k": { lastmod: "2026-07-08", priority: "0.8", changefreq: "monthly"  },
  "mba-break-even": { lastmod: "2026-06-21", priority: "0.85", changefreq: "monthly"  },
  "mba-cost": { lastmod: "2026-08-18", priority: "0.85", changefreq: "monthly"  },
  "mba-payback-period": { lastmod: "2026-08-18", priority: "0.80", changefreq: "monthly"  },
  "mba-salary-increase": { lastmod: "2026-06-21", priority: "0.85", changefreq: "monthly"  },
  "mba-vs-masters-roi": { lastmod: "2026-08-18", priority: "0.80", changefreq: "monthly"  },
  "average-mba-salary": { lastmod: "2026-08-18", priority: "0.85", changefreq: "monthly"  },
  "post-mba-salary": { lastmod: "2026-06-21", priority: "0.85", changefreq: "monthly"  },
  "mba-salary-analytics": { lastmod: "2026-08-18", priority: "0.85", changefreq: "monthly"  },
  "mba-investment-banking-salary": { lastmod: "2026-06-21", priority: "0.80", changefreq: "monthly"  },
  "mba-salary-by-school": { lastmod: "2026-06-21", priority: "0.85", changefreq: "monthly"  },
  "average-mba-salary-after-5-years": { lastmod: "2026-06-21", priority: "0.80", changefreq: "monthly"  },
  "mba-roi-consulting": { lastmod: "2026-08-18", priority: "0.80", changefreq: "monthly"  },
  "mba-roi-investment-banking": { lastmod: "2026-08-18", priority: "0.80", changefreq: "monthly"  },
  "mba-roi-tech": { lastmod: "2026-08-18", priority: "0.80", changefreq: "monthly"  },
  "mba-roi-healthcare": { lastmod: "2026-08-18", priority: "0.75", changefreq: "monthly"  },
  "mba-roi-engineers": { lastmod: "2026-08-18", priority: "0.80", changefreq: "monthly"  },
  "mba-roi-big4-vs-mbb": { lastmod: "2026-08-18", priority: "0.80", changefreq: "monthly"  },
  "mba-roi-military": { lastmod: "2026-06-21", priority: "0.75", changefreq: "monthly"  },
  "mba-roi-recession": { lastmod: "2026-08-18", priority: "0.75", changefreq: "monthly"  },
  "mba-roi-marketing": { lastmod: "2026-08-18", priority: "0.80", changefreq: "monthly"  },
  "mba-roi-mckinsey": { lastmod: "2026-06-21", priority: "0.80", changefreq: "monthly"  },
  "mba-roi-goldman-sachs": { lastmod: "2026-08-18", priority: "0.80", changefreq: "monthly"  },
  "mba-roi-insead-vs-wharton": { lastmod: "2026-06-21", priority: "0.80", changefreq: "monthly"  },
  "mba-roi-europe": { lastmod: "2026-08-18", priority: "0.75", changefreq: "monthly"  },
  "mba-roi-online-vs-full-time": { lastmod: "2026-08-18", priority: "0.75", changefreq: "monthly"  },
  "mba-roi-100k-debt": { lastmod: "2026-08-18", priority: "0.80", changefreq: "monthly"  },
  "mba-roi-scholarship": { lastmod: "2026-08-18", priority: "0.80", changefreq: "monthly"  },
  "mba-roi-report-2026": { lastmod: "2026-08-18", priority: "0.75", changefreq: "yearly"  },
  "returnship-programs-2026": { lastmod: "2026-08-18", priority: "0.90", changefreq: "monthly"  },
  "return-to-work-programs": { lastmod: "2026-08-18", priority: "0.85", changefreq: "monthly"  },
  "return-to-work-after-career-break": { lastmod: "2026-08-18", priority: "0.80", changefreq: "monthly"  },
  "rebuild-work-experience-after-career-break": { lastmod: "2026-08-18", priority: "0.75", changefreq: "monthly"  },
  "women-returning-to-work": { lastmod: "2026-08-18", priority: "0.75", changefreq: "monthly"  },
  "for-employers": { lastmod: "2026-08-18", priority: "0.80", changefreq: "monthly"  },
  "about": { lastmod: "2026-06-21", priority: "0.5", changefreq: "monthly"  },
  "contact": { lastmod: "2026-06-21", priority: "0.4", changefreq: "yearly"  },
  "privacy": { lastmod: "2026-06-21", priority: "0.3", changefreq: "yearly"  },
  "terms": { lastmod: "2026-06-21", priority: "0.3", changefreq: "yearly"  },
  "blog": { lastmod: "2026-07-08", priority: "0.90", changefreq: "monthly"  },
  "blog/is-mba-worth-it-2026": { lastmod: "2026-07-08", priority: "0.90", changefreq: "monthly"  },
  "blog/how-to-calculate-mba-roi": { lastmod: "2026-07-08", priority: "0.90", changefreq: "monthly"  },
  "blog/mba-salary-negotiation": { lastmod: "2026-08-18", priority: "0.90", changefreq: "monthly"  },
  "blog/mba-vs-masters-vs-bootcamp": { lastmod: "2026-07-08", priority: "0.90", changefreq: "monthly"  },
  "blog/career-break-return-strategies": { lastmod: "2026-07-08", priority: "0.90", changefreq: "monthly"  },
  "blog/women-mba-roi": { lastmod: "2026-07-08", priority: "0.90", changefreq: "monthly"  },
  "executive-mba-roi": { lastmod: "2026-08-18", priority: "0.90", changefreq: "monthly"  },
  "part-time-mba-roi": { lastmod: "2026-08-18", priority: "0.90", changefreq: "monthly"  },
  "mba-loan-repayment-calculator": { lastmod: "2026-08-18", priority: "0.90", changefreq: "monthly"  },
  "employer-sponsored-mba-roi": { lastmod: "2026-07-08", priority: "0.90", changefreq: "monthly"  },
  "mba-roi-career-changers": { lastmod: "2026-08-18", priority: "0.90", changefreq: "monthly"  },
  "mba-scholarships": { lastmod: "2026-07-08", priority: "0.85", changefreq: "monthly"  },
  "no-gmat-mba-roi": { lastmod: "2026-07-08", priority: "0.85", changefreq: "monthly"  },
  "free-mba-programs": { lastmod: "2026-08-18", priority: "0.85", changefreq: "monthly"  },
  "how-to-pay-for-mba": { lastmod: "2026-08-18", priority: "0.85", changefreq: "monthly"  },
  "marketing-mba-salary": { lastmod: "2026-08-18", priority: "0.85", changefreq: "monthly"  },
  "emba-salary-increase": { lastmod: "2026-08-18", priority: "0.85", changefreq: "monthly"  },
  "yellow-ribbon-mba-programs": { lastmod: "2026-08-18", priority: "0.82", changefreq: "monthly"  },
  "m7-mba-consulting-salary": { lastmod: "2026-08-18", priority: "0.85", changefreq: "monthly"  },
  "career-roi-score": { lastmod: "2026-06-21", priority: "0.90", changefreq: "monthly"  },
  "mba-myth-buster": { lastmod: "2026-06-21", priority: "0.85", changefreq: "monthly"  },
  "employer-scorecard": { lastmod: "2026-06-21", priority: "0.88", changefreq: "monthly"  },
  "career-compounder": { lastmod: "2026-06-21", priority: "0.85", changefreq: "monthly"  },
  "career-time-machine": { lastmod: "2026-06-21", priority: "0.85", changefreq: "monthly"  },
  "salary-negotiation-simulator": { lastmod: "2026-06-21", priority: "0.88", changefreq: "monthly"  },
  "skills-portfolio": { lastmod: "2026-06-21", priority: "0.85", changefreq: "monthly"  },
}

const DEFAULTS = { priority: "0.8", changefreq: "monthly" }
// lastmod applied to routes not present in SEED (new pages).
const NEW_ROUTE_LASTMOD = "2026-07-16"

const EXCLUDED = new Set(["test", "embed"])

function collectRoutes(dir: string, prefix = ""): string[] {
  const routes: string[] = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue
    // Skip route groups, dynamic segments, private folders, and this sitemap route itself.
    if (/[\[\]()_.]/.test(entry.name)) continue
    const route = prefix ? `${prefix}/${entry.name}` : entry.name
    if (EXCLUDED.has(route)) continue
    const full = path.join(dir, entry.name)
    if (fs.existsSync(path.join(full, "page.tsx"))) routes.push(route)
    routes.push(...collectRoutes(full, route))
  }
  return routes
}

export async function GET() {
  const appDir = path.join(process.cwd(), "app")
  const routes = ["", ...collectRoutes(appDir).sort()]

  const entries = routes.map((route) => {
    const seed = SEED[route]
    const url = route ? `${BASE}/${route}` : `${BASE}/`
    return [
      "  <url>",
      `    <loc>${url}</loc>`,
      `    <lastmod>${seed?.lastmod ?? NEW_ROUTE_LASTMOD}</lastmod>`,
      `    <changefreq>${seed?.changefreq ?? DEFAULTS.changefreq}</changefreq>`,
      `    <priority>${seed?.priority ?? DEFAULTS.priority}</priority>`,
      "  </url>",
    ].join("\n")
  })

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries,
    "</urlset>",
  ].join("\n")

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  })
}
