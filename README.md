# CareerReturns — Human Capital ROI Platform

> Apply institutional-grade financial modeling to career and education decisions. NPV, IRR, and DCF — for your career.

---

## Overview

CareerReturns is a Next.js web platform that treats education and career transitions as capital investments. It provides seven interactive calculators backed by pure-TypeScript financial engines to answer questions like:

- Is this MBA worth the debt?
- How long will it take to recover from a career break?
- Which reskilling path — bootcamp, certificate, or degree — maximizes return?
- What is my skills gap costing me in lifetime earnings?

The platform supports seven countries (US, UK, Canada, Australia, India, Germany, Singapore) with localized salary benchmarks, loan rates, and program costs.

---

## Features

- **7 interactive calculators** — MBA ROI, career gap recovery, returnship evaluation, reskilling ROI, salary benchmarking, education comparison, lifetime earnings modeling
- **12 pure-TypeScript financial engines** — DCF, NPV, IRR, loan amortization, payback period, sensitivity analysis, and financial grading (A–F)
- **Multi-country support** — 7 locales with localized defaults, currency formatting, and salary benchmarks
- **45 SEO-optimized routes** — in-depth guides for MBA ROI by employer, industry, and demographic
- **2026 compensation data** — across 12 industries, 3 school tiers, and 7 geographies
- **Zero external dependencies** for financial calculations — all engines are self-contained TypeScript

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 13.4 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS 4 |
| Runtime | React 18 |
| Analytics | Vercel Analytics |
| Financial engines | Pure TypeScript (no external libs) |

---

## Project Structure

```
CareerReturns/
├── app/                    # 45 Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── mba-roi-calculator/ # MBA ROI 3-step wizard
│   ├── career-gap-calculator/
│   ├── returnship-roi-calculator/
│   ├── reskilling-roi-calculator/
│   ├── salary-benchmark-calculator/
│   ├── education-comparison-calculator/
│   ├── skills-gap-calculator/
│   ├── lifetime-earnings-calculator/
│   └── ...                 # 37 additional guide/content pages
├── lib/                    # Financial modeling engines
│   ├── mbaEngine.ts
│   ├── gapEngine.ts
│   ├── returnshipEngine.ts
│   ├── reskillingEngine.ts
│   ├── skillsGapEngine.ts
│   ├── trajectoryEngine.ts
│   ├── compensationEngine.ts
│   ├── compensationBenchmarks.ts
│   ├── comparisonEngine.ts
│   ├── scoreEngine.ts
│   ├── locale.ts
│   └── seo.ts
├── components/
│   └── CountrySelect.tsx   # Country/locale selector (7 countries)
├── public/                 # favicon.svg, robots.txt, sitemap.xml
└── styles/                 # Global Tailwind CSS
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Type-check

```bash
npm run typecheck
```

### Production build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## Calculators & Routes

| Route | Tool | Description |
|---|---|---|
| `/mba-roi-calculator` | MBA ROI Calculator | 3-step wizard: career inputs → costs → financing → NPV/IRR results |
| `/career-gap-calculator` | Career Gap Calculator | Model recovery timeline across 5 re-entry paths with probability weighting |
| `/returnship-roi-calculator` | Returnship ROI Calculator | Evaluate corporate returnship programs (Amazon, Goldman, McKinsey, Meta presets) |
| `/reskilling-roi-calculator` | Reskilling ROI Calculator | Bootcamp / certificate / degree ROI across 9 program presets |
| `/salary-benchmark-calculator` | Salary Benchmark Calculator | Market salary percentile lookup + negotiation NPV |
| `/education-comparison-calculator` | Education Comparison | Side-by-side DCF comparison of up to 4 programs |
| `/skills-gap-calculator` | Skills Gap Calculator | Quantify cost of skills gap across 12 categories + ranked upskilling action plan |
| `/lifetime-earnings-calculator` | Lifetime Earnings Calculator | 3-scenario career trajectory modeler to retirement |

---

## Financial Modeling Engines

All engines live in `lib/` and are pure TypeScript with no external dependencies. All use a 6% discount rate and 10-year post-graduation projection horizon by default.

| Module | Purpose |
|---|---|
| `mbaEngine.ts` | Core MBA ROI: NPV, IRR, loan amortization, payback period, sensitivity analysis |
| `scoreEngine.ts` | Financial grading (A–F) based on NPV, IRR, payback, debt ratio, and sensitivity |
| `comparisonEngine.ts` | Side-by-side DCF comparison of 2–4 programs |
| `gapEngine.ts` | Career gap recovery modeling with multiple re-entry paths and probability weights |
| `returnshipEngine.ts` | Returnship program evaluation with conversion rate modeling |
| `reskillingEngine.ts` | Reskilling program ROI with 9 preset programs |
| `skillsGapEngine.ts` | Skills gap cost quantifier across 12 skill categories + ranked upskilling paths |
| `trajectoryEngine.ts` | Lifetime earnings modeler: 3-scenario simulation to retirement |
| `compensationEngine.ts` | Salary benchmarking and market percentile calculation |
| `compensationBenchmarks.ts` | 2026 salary lookup tables: 12 industries × 3 school tiers × 7 geographies |
| `locale.ts` | Multi-country config (US, GB, CA, AU, IN, DE, SG) + currency formatting |
| `seo.ts` | Next.js SEO helpers: canonical URLs and i18n alternates |

### Core financial primitives

- **DCF** — Variable cash flow series discounted with true timing
- **NPV** — Net present value of future earnings delta
- **IRR** — Internal rate of return via bisection numerical solver
- **Loan amortization** — True monthly amortization using annuity formula
- **Payback period** — Algorithmic interpolation (not ratio-based)
- **Sensitivity analysis** — ±10% salary delta impact ranges
- **Scoring** — A–F grade + risk level based on 5 weighted factors

---

## Localization

Seven country presets are supported via `lib/locale.ts` and the `CountrySelect` component:

| Code | Country | Currency |
|---|---|---|
| US | United States | USD |
| GB | United Kingdom | GBP |
| CA | Canada | CAD |
| AU | Australia | AUD |
| IN | India | INR |
| DE | Germany | EUR |
| SG | Singapore | SGD |

Each country preset includes localized salary ranges, loan interest rates, program costs, and career gap penalty estimates. The browser locale is auto-detected via `navigator.language`.

---

## Contributing

1. Fork the repo and create a feature branch
2. Run `npm run typecheck` and `npm run lint` before committing — the project enforces strict TypeScript and zero ESLint warnings
3. Financial engine changes should preserve the existing function signatures in `lib/` so pages that consume them are not broken
4. New calculators follow the pattern: create `app/<route>/page.tsx`, add the corresponding engine in `lib/`, and register the route in `lib/seo.ts`
