import fs from "fs"
import path from "path"

export const dynamic = "force-static"

const BASE = "https://careerreturns.com"

type SeedEntry = { lastmod: string; priority: string; changefreq: string; langs: string[] }

// Per-route settings seeded from the legacy hand-maintained public/sitemap.xml
// (route key = path without leading/trailing slash; "" = homepage).
// Routes added under app/ later fall back to DEFAULTS automatically.
const SEED: Record<string, SeedEntry> = {
  "": { lastmod: "2026-06-21", priority: "1.0", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "mba-roi-calculator": { lastmod: "2026-06-21", priority: "0.9", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "career-return-roadmap": { lastmod: "2026-06-21", priority: "0.9", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "career-gap-calculator": { lastmod: "2026-06-21", priority: "0.6", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "returnship-roi-calculator": { lastmod: "2026-06-21", priority: "0.6", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "reskilling-roi-calculator": { lastmod: "2026-06-21", priority: "0.6", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "geographic-arbitrage-calculator": { lastmod: "2026-06-17", priority: "0.8", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "ai-career-impact": { lastmod: "2026-06-17", priority: "0.8", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "loyalty-tax-calculator": { lastmod: "2026-06-17", priority: "0.8", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "rto-cost-calculator": { lastmod: "2026-06-16", priority: "0.8", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "am-i-underpaid": { lastmod: "2026-06-16", priority: "0.8", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "salary-benchmark-calculator": { lastmod: "2026-06-21", priority: "0.6", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "education-comparison-calculator": { lastmod: "2026-06-21", priority: "0.6", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "skills-gap-calculator": { lastmod: "2026-06-21", priority: "0.6", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "lifetime-earnings-calculator": { lastmod: "2026-06-21", priority: "0.6", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "mba-roi": { lastmod: "2026-06-21", priority: "0.9", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "mba-worth-it": { lastmod: "2026-06-21", priority: "0.85", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "mba-jobs-200k": { lastmod: "2026-07-08", priority: "0.8", changefreq: "monthly", langs: ["en-US", "x-default"] },
  "mba-break-even": { lastmod: "2026-06-21", priority: "0.85", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "mba-cost": { lastmod: "2026-06-21", priority: "0.85", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "mba-payback-period": { lastmod: "2026-06-21", priority: "0.80", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "mba-salary-increase": { lastmod: "2026-06-21", priority: "0.85", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "mba-vs-masters-roi": { lastmod: "2026-07-08", priority: "0.80", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "average-mba-salary": { lastmod: "2026-06-21", priority: "0.85", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "post-mba-salary": { lastmod: "2026-06-21", priority: "0.85", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "mba-salary-analytics": { lastmod: "2026-07-08", priority: "0.85", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "mba-investment-banking-salary": { lastmod: "2026-06-21", priority: "0.80", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "mba-salary-by-school": { lastmod: "2026-06-21", priority: "0.85", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "average-mba-salary-after-5-years": { lastmod: "2026-06-21", priority: "0.80", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "mba-roi-consulting": { lastmod: "2026-06-21", priority: "0.80", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "mba-roi-investment-banking": { lastmod: "2026-06-21", priority: "0.80", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "mba-roi-tech": { lastmod: "2026-06-21", priority: "0.80", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "mba-roi-healthcare": { lastmod: "2026-06-21", priority: "0.75", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "mba-roi-engineers": { lastmod: "2026-06-21", priority: "0.80", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "mba-roi-big4-vs-mbb": { lastmod: "2026-06-21", priority: "0.80", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "mba-roi-military": { lastmod: "2026-06-21", priority: "0.75", changefreq: "monthly", langs: ["en-US", "x-default"] },
  "mba-roi-recession": { lastmod: "2026-06-21", priority: "0.75", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "mba-roi-marketing": { lastmod: "2026-06-21", priority: "0.80", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "mba-roi-mckinsey": { lastmod: "2026-06-21", priority: "0.80", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "mba-roi-goldman-sachs": { lastmod: "2026-06-21", priority: "0.80", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "mba-roi-insead-vs-wharton": { lastmod: "2026-06-21", priority: "0.80", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "mba-roi-europe": { lastmod: "2026-06-21", priority: "0.75", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "mba-roi-online-vs-full-time": { lastmod: "2026-07-08", priority: "0.75", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "mba-roi-100k-debt": { lastmod: "2026-06-21", priority: "0.80", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "mba-roi-scholarship": { lastmod: "2026-06-21", priority: "0.80", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "mba-roi-report-2026": { lastmod: "2026-06-21", priority: "0.75", changefreq: "yearly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "returnship-programs-2026": { lastmod: "2026-06-21", priority: "0.90", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "return-to-work-programs": { lastmod: "2026-06-21", priority: "0.85", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "return-to-work-after-career-break": { lastmod: "2026-06-21", priority: "0.80", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "rebuild-work-experience-after-career-break": { lastmod: "2026-06-21", priority: "0.75", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "women-returning-to-work": { lastmod: "2026-06-21", priority: "0.75", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "for-employers": { lastmod: "2026-07-08", priority: "0.80", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "about": { lastmod: "2026-06-21", priority: "0.5", changefreq: "monthly", langs: ["en-US", "x-default"] },
  "contact": { lastmod: "2026-06-21", priority: "0.4", changefreq: "yearly", langs: ["en-US", "x-default"] },
  "privacy": { lastmod: "2026-06-21", priority: "0.3", changefreq: "yearly", langs: ["en-US", "x-default"] },
  "terms": { lastmod: "2026-06-21", priority: "0.3", changefreq: "yearly", langs: ["en-US", "x-default"] },
  "blog": { lastmod: "2026-07-08", priority: "0.90", changefreq: "monthly", langs: ["en-US", "x-default"] },
  "blog/is-mba-worth-it-2026": { lastmod: "2026-07-08", priority: "0.90", changefreq: "monthly", langs: ["en-US", "x-default"] },
  "blog/how-to-calculate-mba-roi": { lastmod: "2026-07-08", priority: "0.90", changefreq: "monthly", langs: ["en-US", "x-default"] },
  "blog/mba-salary-negotiation": { lastmod: "2026-07-08", priority: "0.90", changefreq: "monthly", langs: ["en-US", "x-default"] },
  "blog/mba-vs-masters-vs-bootcamp": { lastmod: "2026-07-08", priority: "0.90", changefreq: "monthly", langs: ["en-US", "x-default"] },
  "blog/career-break-return-strategies": { lastmod: "2026-07-08", priority: "0.90", changefreq: "monthly", langs: ["en-US", "x-default"] },
  "blog/women-mba-roi": { lastmod: "2026-07-08", priority: "0.90", changefreq: "monthly", langs: ["en-US", "x-default"] },
  "executive-mba-roi": { lastmod: "2026-07-08", priority: "0.90", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "x-default"] },
  "part-time-mba-roi": { lastmod: "2026-07-08", priority: "0.90", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "x-default"] },
  "mba-loan-repayment-calculator": { lastmod: "2026-07-08", priority: "0.90", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "x-default"] },
  "employer-sponsored-mba-roi": { lastmod: "2026-07-08", priority: "0.90", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "x-default"] },
  "mba-roi-career-changers": { lastmod: "2026-07-08", priority: "0.90", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "x-default"] },
  "mba-scholarships": { lastmod: "2026-07-08", priority: "0.85", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "x-default"] },
  "no-gmat-mba-roi": { lastmod: "2026-07-08", priority: "0.85", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "x-default"] },
  "free-mba-programs": { lastmod: "2026-07-08", priority: "0.85", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "x-default"] },
  "how-to-pay-for-mba": { lastmod: "2026-07-08", priority: "0.85", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "x-default"] },
  "marketing-mba-salary": { lastmod: "2026-06-21", priority: "0.85", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "emba-salary-increase": { lastmod: "2026-06-21", priority: "0.85", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "yellow-ribbon-mba-programs": { lastmod: "2026-06-21", priority: "0.82", changefreq: "monthly", langs: ["en-US", "x-default"] },
  "m7-mba-consulting-salary": { lastmod: "2026-06-21", priority: "0.85", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "career-roi-score": { lastmod: "2026-06-21", priority: "0.90", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "mba-myth-buster": { lastmod: "2026-06-21", priority: "0.85", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "employer-scorecard": { lastmod: "2026-06-21", priority: "0.88", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "career-compounder": { lastmod: "2026-06-21", priority: "0.85", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "career-time-machine": { lastmod: "2026-06-21", priority: "0.85", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "salary-negotiation-simulator": { lastmod: "2026-06-21", priority: "0.88", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
  "skills-portfolio": { lastmod: "2026-06-21", priority: "0.85", changefreq: "monthly", langs: ["en-US", "en-GB", "en-AU", "en-CA", "x-default"] },
}

const DEFAULTS = { priority: "0.8", changefreq: "monthly", langs: ["en-US", "x-default"] }
// lastmod applied to routes not present in SEED (new pages).
const NEW_ROUTE_LASTMOD = "2026-07-16"

const EXCLUDED = new Set(["test"])

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
    const langs = seed?.langs ?? DEFAULTS.langs
    const alternates = langs
      .map((lang) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${url}"/>`)
      .join("\n")
    return [
      "  <url>",
      `    <loc>${url}</loc>`,
      `    <lastmod>${seed?.lastmod ?? NEW_ROUTE_LASTMOD}</lastmod>`,
      `    <changefreq>${seed?.changefreq ?? DEFAULTS.changefreq}</changefreq>`,
      `    <priority>${seed?.priority ?? DEFAULTS.priority}</priority>`,
      alternates,
      "  </url>",
    ].join("\n")
  })

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...entries,
    "</urlset>",
  ].join("\n")

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  })
}
