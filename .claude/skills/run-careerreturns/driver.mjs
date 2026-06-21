#!/usr/bin/env node
/**
 * CareerReturns Playwright driver
 *
 * Usage:
 *   node .claude/skills/run-careerreturns/driver.mjs [command] [args...]
 *
 * Commands:
 *   screenshot [url] [outfile]   — navigate to url (default: /) and screenshot
 *   calc <json>                  — POST to /api/calc with given JSON, print result
 *   smoke                        — full smoke test: homepage + calculator + API
 */

import { chromium } from 'playwright';
import { createServer } from 'http';
import { exec } from 'child_process';
import { writeFileSync } from 'fs';

const BASE = 'http://localhost:3000';
const SCREENSHOT_DIR = '/tmp/careerreturns-screenshots';

const [,, cmd = 'smoke', ...rest] = process.argv;

// ── helpers ──────────────────────────────────────────────────────────────────

async function waitForServer(url, timeoutMs = 15000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(url);
      if (res.ok || res.status < 500) return;
    } catch {}
    await new Promise(r => setTimeout(r, 500));
  }
  throw new Error(`Server not ready at ${url} after ${timeoutMs}ms`);
}

async function withBrowser(fn) {
  const browser = await chromium.launch({ args: ['--no-sandbox', '--disable-dev-shm-usage'] });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 900 });
  try {
    return await fn(page);
  } finally {
    await browser.close();
  }
}

// ── commands ─────────────────────────────────────────────────────────────────

async function cmdScreenshot([url = '/', outfile]) {
  const fullUrl = url.startsWith('http') ? url : `${BASE}${url}`;
  const dest = outfile ?? `${SCREENSHOT_DIR}/screenshot-${Date.now()}.png`;
  await withBrowser(async (page) => {
    await page.goto(fullUrl);
    await page.waitForTimeout(1500);
    await page.screenshot({ path: dest, fullPage: false });
    console.log(`Screenshot: ${dest}`);
  });
}

async function cmdCalc([jsonArg]) {
  const body = JSON.parse(jsonArg ?? '{}');
  const res = await fetch(`${BASE}/api/calc`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  console.log(JSON.stringify(data, null, 2));
}

async function cmdSmoke() {
  await waitForServer(BASE);

  // 1. Homepage renders
  await withBrowser(async (page) => {
    await page.goto(BASE);
    await page.waitForTimeout(1500);
    const title = await page.title();
    console.log(`Homepage title: ${title}`);
    await page.screenshot({ path: `${SCREENSHOT_DIR}/smoke-homepage.png` });

    // 2. MBA ROI Calculator renders and is interactive
    await page.goto(`${BASE}/mba-roi-calculator`);
    await page.waitForTimeout(1500);
    const input = await page.$('input[type="number"]');
    if (input) {
      await input.click({ clickCount: 3 });
      await input.fill('120000');
      await page.waitForTimeout(500);
      console.log('Calculator: salary input accepted');
    }
    await page.screenshot({ path: `${SCREENSHOT_DIR}/smoke-calculator.png` });
  });

  // 3. API returns valid DCF output
  const res = await fetch(`${BASE}/api/calc`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      currentSalary: 90000,
      postMbaSalary: 140000,
      mbaCost: 120000,
      programDuration: 2,
      loanPercentage: 0.8,
      interestRate: 0.065,
    }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`/api/calc failed: ${JSON.stringify(data)}`);
  console.log(`API /api/calc: NPV=${data.npv?.toFixed(0)}, IRR=${(data.irr * 100)?.toFixed(1)}%, payback=${data.paybackPeriod?.toFixed(1)}yr`);
  console.log('Smoke test PASSED');
}

// ── dispatch ──────────────────────────────────────────────────────────────────

import { mkdirSync } from 'fs';
mkdirSync(SCREENSHOT_DIR, { recursive: true });

switch (cmd) {
  case 'screenshot': await cmdScreenshot(rest); break;
  case 'calc':       await cmdCalc(rest); break;
  case 'smoke':      await cmdSmoke(); break;
  default:
    console.error(`Unknown command: ${cmd}`);
    console.error('Commands: screenshot [url] [outfile], calc <json>, smoke');
    process.exit(1);
}
