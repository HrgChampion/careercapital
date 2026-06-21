---
name: run-careerreturns
description: Run, build, start, screenshot, smoke test, or drive the CareerReturns Next.js web app. Use this skill when asked to run the app, verify a feature, take a screenshot, or test the MBA ROI calculator.
---

CareerReturns is a Next.js 13 (App Router) web platform with 70+ pages of MBA ROI calculators and career investment tools. The agent path uses a Playwright driver (`driver.mjs`) against a local Next.js server. Screenshots land in `/tmp/careerreturns-screenshots/`.

## Prerequisites

```bash
# playwright must be installed (already in devDependencies after first run)
npm install   # installs playwright
npx playwright install chromium
```

## Build

```bash
npm run build   # produces .next/ — required before `npm start`
```

## Run (agent path)

Start the server in the background, then drive it with `driver.mjs`:

```bash
# Start server (built mode — fast, no watch overhead)
npm start &
echo $! > /tmp/careerreturns.pid

# Wait for it to be ready
timeout 20 bash -c 'until curl -sf http://localhost:3000 >/dev/null; do sleep 1; done'
```

Then use the driver:

```bash
# Full smoke test — homepage + calculator interaction + API check
node .claude/skills/run-careerreturns/driver.mjs smoke

# Screenshot any page
node .claude/skills/run-careerreturns/driver.mjs screenshot /mba-roi-calculator /tmp/my-shot.png
node .claude/skills/run-careerreturns/driver.mjs screenshot /career-gap-calculator

# Call the financial engine API directly
node .claude/skills/run-careerreturns/driver.mjs calc '{"currentSalary":90000,"postMbaSalary":140000,"mbaCost":120000,"programDuration":2,"loanPercentage":0.8,"interestRate":0.065}'
```

Screenshots from `smoke` are written to `/tmp/careerreturns-screenshots/`.

Stop the server when done:

```bash
kill $(cat /tmp/careerreturns.pid) 2>/dev/null || pkill -f 'next start'
```

## Direct invocation (financial engine)

For PRs that touch `lib/` (the TypeScript financial engines), bypass the server entirely:

```bash
node --input-type=module <<'EOF'
import { calculateMBA } from './lib/mbaEngine.js';
console.log(calculateMBA({
  currentSalary: 90000, postMbaSalary: 140000,
  mbaCost: 120000, programDuration: 2,
  loanPercentage: 0.8, interestRate: 0.065
}));
EOF
```

## Run (human path)

```bash
npm run dev   # dev server with HMR at http://localhost:3000 — opens no window; use browser manually
```

## Test

```bash
npm run typecheck   # TypeScript strict-mode check
npm run lint        # ESLint
```

## API reference

`POST /api/calc` with `MBAInput`:

| Field | Type | Example |
|---|---|---|
| `currentSalary` | number | 90000 |
| `postMbaSalary` | number | 140000 |
| `mbaCost` | number | 120000 |
| `programDuration` | 1 or 2 | 2 |
| `loanPercentage` | 0–1 | 0.8 |
| `interestRate` | annual decimal | 0.065 |

Returns NPV, IRR, payback period, cash flow series, and loan amortization.

## Gotchas

- **`chromium-cli` is not available** on this machine. The driver uses `playwright` directly via `node --input-type=module` or `driver.mjs`. `chromium-cli` examples from other skills won't work.
- **React controlled inputs.** `element.value = '…'` doesn't fire React's `onChange`. Always use `page.fill()` or `input.click({ clickCount: 3 })` + `input.fill(...)`.
- **Port 3000 must be free.** If you hit `EADDRINUSE`, run `pkill -f 'next start'` before relaunching.
- **`npm start` requires a prior `npm run build`.** Running `start` without a build fails with "Could not find a production build."
- **`playwright` must be in devDependencies.** It was added (`npm install --save-dev playwright`) and the Chromium headless shell was downloaded via `npx playwright install chromium`. On a fresh clone, re-run both before using the driver.

## Troubleshooting

| Symptom | Fix |
|---|---|
| `Cannot find package 'playwright'` | `npm install && npx playwright install chromium` |
| `EADDRINUSE :::3000` | `pkill -f 'next start'` then restart |
| `Error: Could not find a production build` | `npm run build` first |
| `/api/calc` returns 400 | Check all 6 required fields are present in the request body |
| Screenshot is blank/white | Server not fully ready — increase `waitForTimeout` or poll with `wait-for` |
