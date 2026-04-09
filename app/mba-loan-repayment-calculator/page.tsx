"use client"

import Link from "next/link"
import { useState, useMemo } from "react"

// ─── Constants ──────────────────────────────────────────────────────────────

const CURRENT_YEAR = 2026
const LOAN_TERMS = [5, 7, 10, 15, 20] as const
type LoanTerm = (typeof LOAN_TERMS)[number]

// ─── Calculation helpers ────────────────────────────────────────────────────

function calcMonthlyPayment(principal: number, annualRate: number, termYears: number): number {
  const r = annualRate / 100 / 12
  const n = termYears * 12
  if (r === 0) return principal / n
  return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
}

function fmt(n: number, decimals = 0): string {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}

function fmtUSD(n: number): string {
  return "$" + fmt(Math.round(n))
}

// ─── DTI color helpers ──────────────────────────────────────────────────────

function dtiColor(dti: number): string {
  if (dti < 10) return "text-green-400"
  if (dti < 15) return "text-yellow-400"
  return "text-red-400"
}

function dtiBarColor(dti: number): string {
  if (dti < 10) return "bg-green-400"
  if (dti < 15) return "bg-yellow-400"
  return "bg-red-400"
}

function dtiLabel(dti: number): string {
  if (dti < 10) return "Excellent"
  if (dti < 15) return "Manageable"
  if (dti < 20) return "Tight"
  return "High"
}

// ─── Main Component ─────────────────────────────────────────────────────────

export default function MBALoanRepaymentCalculator() {
  const [loanAmount, setLoanAmount] = useState(120000)
  const [loanAmountInput, setLoanAmountInput] = useState("120000")
  const [interestRate, setInterestRate] = useState(6.5)
  const [loanTerm, setLoanTerm] = useState<LoanTerm>(10)
  const [annualSalary, setAnnualSalary] = useState(140000)
  const [annualSalaryInput, setAnnualSalaryInput] = useState("140000")

  // ─── Live calculations ────────────────────────────────────────────────────

  const results = useMemo(() => {
    const monthly = calcMonthlyPayment(loanAmount, interestRate, loanTerm)
    const n = loanTerm * 12
    const totalPaid = monthly * n
    const totalInterest = totalPaid - loanAmount
    const payoffYear = CURRENT_YEAR + loanTerm
    const dti = annualSalary > 0 ? (monthly * 12) / annualSalary * 100 : 0
    const monthlyNet = annualSalary / 12 - monthly
    const monthsToPayOff = monthlyNet > 0 ? loanAmount / monthlyNet : Infinity
    const yearsToPayOff = monthsToPayOff / 12
    const interestPct = loanAmount > 0 ? (totalInterest / loanAmount) * 100 : 0
    const principalPct = loanAmount > 0 ? (loanAmount / totalPaid) * 100 : 0
    return {
      monthly,
      totalPaid,
      totalInterest,
      payoffYear,
      dti,
      monthsToPayOff,
      yearsToPayOff,
      interestPct,
      principalPct,
    }
  }, [loanAmount, interestRate, loanTerm, annualSalary])

  // ─── Input handlers ───────────────────────────────────────────────────────

  function handleLoanAmountInput(val: string) {
    setLoanAmountInput(val)
    const n = parseFloat(val.replace(/,/g, ""))
    if (isFinite(n) && n >= 0) setLoanAmount(Math.min(Math.max(n, 0), 250000))
  }

  function handleSalaryInput(val: string) {
    setAnnualSalaryInput(val)
    const n = parseFloat(val.replace(/,/g, ""))
    if (isFinite(n) && n >= 0) setAnnualSalary(Math.min(Math.max(n, 0), 500000))
  }

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">

        {/* ── Page Header ─────────────────────────────────────────────────── */}
        <div className="mb-8 sm:mb-14">
          <p className="text-xs font-medium text-purple-400 uppercase tracking-widest mb-3">
            Loan Repayment Simulator
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
            MBA Loan Repayment Calculator — Monthly Payment, Total Interest &amp; Payoff Timeline
          </h1>
          <p className="mt-4 text-slate-400 text-lg leading-relaxed max-w-2xl">
            Enter your MBA loan amount, interest rate, and repayment term to instantly see your
            monthly payment, total interest paid, payoff year, and debt-to-income ratio against
            your post-MBA salary. Takes 30 seconds.
          </p>
        </div>

        {/* ── Calculator Grid ──────────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-6 mb-16">

          {/* ── Inputs Panel ─────────────────────────────────────────────── */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8 space-y-8">

            {/* Loan Amount */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium text-slate-300">Loan Amount</label>
                <div className="flex items-center gap-1">
                  <span className="text-slate-400 text-sm">$</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={loanAmountInput}
                    onChange={e => handleLoanAmountInput(e.target.value)}
                    onBlur={() => setLoanAmountInput(fmt(loanAmount))}
                    className="w-28 bg-white/10 border border-white/15 rounded-lg px-3 py-1.5 text-right text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/60"
                  />
                </div>
              </div>
              <input
                type="range"
                min={10000}
                max={250000}
                step={1000}
                value={loanAmount}
                onChange={e => {
                  const v = Number(e.target.value)
                  setLoanAmount(v)
                  setLoanAmountInput(fmt(v))
                }}
                className="w-full accent-purple-500 cursor-pointer"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>$10K</span>
                <span>$250K</span>
              </div>
            </div>

            {/* Annual Interest Rate */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium text-slate-300">Annual Interest Rate</label>
                <span className="text-purple-300 font-semibold text-sm">{interestRate.toFixed(1)}%</span>
              </div>
              <input
                type="range"
                min={3}
                max={12}
                step={0.1}
                value={interestRate}
                onChange={e => setInterestRate(Number(e.target.value))}
                className="w-full accent-purple-500 cursor-pointer"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>3%</span>
                <span className="text-slate-400">Federal 2025–26: 6.54%</span>
                <span>12%</span>
              </div>
            </div>

            {/* Loan Term */}
            <div>
              <label className="text-sm font-medium text-slate-300 block mb-3">Repayment Term</label>
              <div className="flex gap-2 flex-wrap">
                {LOAN_TERMS.map(t => (
                  <button
                    key={t}
                    onClick={() => setLoanTerm(t)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      loanTerm === t
                        ? "bg-purple-600 text-white shadow-lg shadow-purple-500/20"
                        : "bg-white/10 text-slate-300 hover:bg-white/15"
                    }`}
                  >
                    {t} yr
                  </button>
                ))}
              </div>
            </div>

            {/* Post-MBA Annual Salary */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium text-slate-300">
                  Post-MBA Annual Salary
                  <span className="ml-2 text-xs text-slate-500 font-normal">(for DTI)</span>
                </label>
                <div className="flex items-center gap-1">
                  <span className="text-slate-400 text-sm">$</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={annualSalaryInput}
                    onChange={e => handleSalaryInput(e.target.value)}
                    onBlur={() => setAnnualSalaryInput(fmt(annualSalary))}
                    className="w-28 bg-white/10 border border-white/15 rounded-lg px-3 py-1.5 text-right text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/60"
                  />
                </div>
              </div>
              <input
                type="range"
                min={50000}
                max={500000}
                step={5000}
                value={annualSalary}
                onChange={e => {
                  const v = Number(e.target.value)
                  setAnnualSalary(v)
                  setAnnualSalaryInput(fmt(v))
                }}
                className="w-full accent-purple-500 cursor-pointer"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>$50K</span>
                <span>$500K</span>
              </div>
            </div>
          </div>

          {/* ── Results Panel ─────────────────────────────────────────────── */}
          <div className="space-y-4">

            {/* Monthly Payment — hero card */}
            <div className="bg-purple-600/20 border border-purple-500/30 rounded-xl p-6 text-center">
              <p className="text-xs font-medium text-purple-300 uppercase tracking-widest mb-2">
                Monthly Payment
              </p>
              <p className="text-5xl font-bold text-white tracking-tight">
                {fmtUSD(results.monthly)}
              </p>
              <p className="text-slate-400 text-sm mt-2">
                {loanTerm * 12} payments · payoff {results.payoffYear}
              </p>
            </div>

            {/* Total Interest + Total Paid */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-slate-400">Total Interest Paid</span>
                <span className="text-xl font-semibold text-orange-400">
                  {fmtUSD(results.totalInterest)}
                </span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-slate-400">Total Amount Paid</span>
                <span className="text-xl font-semibold text-white">
                  {fmtUSD(results.totalPaid)}
                </span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-slate-400">Interest as % of Principal</span>
                <span className="text-base font-medium text-slate-300">
                  {results.interestPct.toFixed(1)}%
                </span>
              </div>

              {/* Principal vs Interest progress bar */}
              <div>
                <div className="flex justify-between text-xs text-slate-500 mb-1.5">
                  <span>Principal {results.principalPct.toFixed(0)}%</span>
                  <span>Interest {(100 - results.principalPct).toFixed(0)}%</span>
                </div>
                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden flex">
                  <div
                    className="bg-purple-500 h-full transition-all duration-300"
                    style={{ width: `${results.principalPct}%` }}
                  />
                  <div
                    className="bg-orange-400 h-full transition-all duration-300"
                    style={{ width: `${100 - results.principalPct}%` }}
                  />
                </div>
                <div className="flex gap-4 mt-2 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <span className="inline-block w-2 h-2 rounded-full bg-purple-500" />
                    Principal
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="inline-block w-2 h-2 rounded-full bg-orange-400" />
                    Interest
                  </span>
                </div>
              </div>
            </div>

            {/* DTI Card */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-slate-400">Debt-to-Income Ratio</span>
                <span className={`text-xl font-semibold ${dtiColor(results.dti)}`}>
                  {results.dti.toFixed(1)}%
                  <span className="text-sm font-normal ml-1.5">{dtiLabel(results.dti)}</span>
                </span>
              </div>
              {/* DTI bar */}
              <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${dtiBarColor(results.dti)}`}
                  style={{ width: `${Math.min(results.dti * 2.5, 100)}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-slate-500">
                <span className="text-green-400">Excellent &lt;10%</span>
                <span className="text-yellow-400">10–15%</span>
                <span className="text-red-400">High &gt;15%</span>
              </div>
              <p className="text-xs text-slate-500 pt-1">
                Annual loan cost: {fmtUSD(results.monthly * 12)} of {fmtUSD(annualSalary)} salary
              </p>
            </div>

            {/* Break-even / payoff on net income */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <p className="text-sm text-slate-400 mb-1">Net payoff savings timeline</p>
              {results.monthsToPayOff === Infinity || results.monthsToPayOff < 0 ? (
                <p className="text-sm text-red-400">
                  Monthly payment exceeds monthly salary — adjust inputs
                </p>
              ) : (
                <>
                  <p className="text-base font-medium text-white">
                    {results.yearsToPayOff < 1
                      ? `${Math.ceil(results.monthsToPayOff)} months`
                      : `${results.yearsToPayOff.toFixed(1)} years`}
                    {" "}to pay off with remaining salary
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {fmtUSD(annualSalary / 12 - results.monthly)}/mo left after payments · saving full remainder
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* ── SEO Content Sections ──────────────────────────────────────── */}

        {/* Section 1 — How to read results */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-6">How to Read Your MBA Loan Results</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <h3 className="font-semibold text-purple-300 mb-2">Monthly Payment</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Your fixed monthly payment using the standard amortization formula. This amount never
                changes for the life of a fixed-rate loan. Budget this as a non-negotiable line item
                before accepting any MBA offer — it starts 6 months after graduation.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <h3 className="font-semibold text-orange-300 mb-2">Total Interest Paid</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                The extra cost of borrowing beyond your principal. A $120K loan at 6.5% over 10 years
                adds ~$44K in interest — 37% on top of what you borrowed. Shortening the term or
                making extra principal payments is the fastest way to cut this number.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <h3 className="font-semibold text-green-300 mb-2">Debt-to-Income Ratio</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Annual loan payments divided by gross annual salary. Lenders and financial advisors
                treat &lt;10% as excellent, 10–15% as manageable, and &gt;15% as tight. If your DTI
                is above 15%, consider income-driven repayment or targeting a higher salary track.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 — Average MBA loan amounts by tier */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-2">Average MBA Loan Amounts by Program Tier</h2>
          <p className="text-slate-400 text-sm mb-6 max-w-2xl">
            These are typical borrowed amounts (tuition + living expenses minus scholarships),
            not total program cost. Use these as starting points for this calculator.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-left">
                  <th className="pb-3 pr-6 font-medium text-slate-300">Program Tier</th>
                  <th className="pb-3 pr-6 font-medium text-slate-300">Examples</th>
                  <th className="pb-3 pr-6 font-medium text-slate-300">Typical Loan Range</th>
                  <th className="pb-3 font-medium text-slate-300">Avg. Monthly (10yr, 6.5%)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="py-3 pr-6 text-purple-300 font-medium">M7</td>
                  <td className="py-3 pr-6 text-slate-400">HBS, Wharton, Booth, Kellogg, Sloan, Columbia, Tuck</td>
                  <td className="py-3 pr-6 text-slate-300">$80K – $160K</td>
                  <td className="py-3 text-slate-300">$908 – $1,816/mo</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-blue-300 font-medium">T15</td>
                  <td className="py-3 pr-6 text-slate-400">Darden, Fuqua, Ross, Stern, Anderson, Haas</td>
                  <td className="py-3 pr-6 text-slate-300">$60K – $120K</td>
                  <td className="py-3 text-slate-300">$681 – $1,362/mo</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-green-300 font-medium">T25</td>
                  <td className="py-3 pr-6 text-slate-400">McCombs, Mendoza, Kelley, Smeal, Broad</td>
                  <td className="py-3 pr-6 text-slate-300">$40K – $90K</td>
                  <td className="py-3 text-slate-300">$454 – $1,021/mo</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-yellow-300 font-medium">Online MBA</td>
                  <td className="py-3 pr-6 text-slate-400">UNC Online, Indiana Online, USC Online</td>
                  <td className="py-3 pr-6 text-slate-300">$15K – $45K</td>
                  <td className="py-3 text-slate-300">$170 – $510/mo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3 — Interest rate guide */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-2">MBA Loan Interest Rate Guide (2025–2026)</h2>
          <p className="text-slate-400 text-sm mb-6 max-w-2xl">
            The rate you enter has the largest impact on total interest paid after loan amount. Here
            are current benchmarks to calibrate your inputs.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <h3 className="font-semibold text-white mb-3">Federal Graduate PLUS Loans</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex justify-between">
                  <span>2025–26 fixed rate</span>
                  <span className="text-purple-300 font-medium">6.54%</span>
                </li>
                <li className="flex justify-between">
                  <span>Origination fee</span>
                  <span className="text-slate-300">4.228%</span>
                </li>
                <li className="flex justify-between">
                  <span>Annual limit</span>
                  <span className="text-slate-300">COA minus other aid</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500 mt-3">
                Federal rates are set by Congress each July based on the 10-year Treasury note.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <h3 className="font-semibold text-white mb-3">Private Lenders</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex justify-between">
                  <span>Fixed rate range</span>
                  <span className="text-slate-300">5.0% – 12%</span>
                </li>
                <li className="flex justify-between">
                  <span>Variable rate range</span>
                  <span className="text-slate-300">4.5% – 10%</span>
                </li>
                <li className="flex justify-between">
                  <span>Best credit scores</span>
                  <span className="text-green-300 font-medium">4.5% – 6.5%</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500 mt-3">
                Variable rates can rise — use the higher end of the range for stress-testing.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <h3 className="font-semibold text-white mb-3">Refinancing</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex justify-between">
                  <span>Typical refinance range</span>
                  <span className="text-slate-300">4% – 8%</span>
                </li>
                <li className="flex justify-between">
                  <span>Best-case (excellent credit)</span>
                  <span className="text-green-300 font-medium">4.0% – 5.5%</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500 mt-3">
                Refinancing federal loans removes IDR and PSLF protections permanently.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <h3 className="font-semibold text-white mb-3">Fixed vs. Variable</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Choose <span className="text-white font-medium">fixed</span> when rates are low
                historically or your risk tolerance is low. Choose{" "}
                <span className="text-white font-medium">variable</span> when you plan to repay
                aggressively in 3–5 years and can absorb rate increases. Most MBA borrowers with
                10-year terms prefer fixed for predictability.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 — When to refinance */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-2">When to Refinance MBA Loans</h2>
          <p className="text-slate-400 text-sm mb-6 max-w-2xl">
            Refinancing can save tens of thousands in interest — but federal refinancing into private
            loans is a one-way door. Evaluate carefully.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-green-950/40 border border-green-500/20 rounded-xl p-5">
              <h3 className="font-semibold text-green-300 mb-3">Refinancing makes sense when:</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex gap-2">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span>Your credit score improved significantly post-graduation (740+)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span>You have stable, high income and don&apos;t anticipate job gaps</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span>Market rates dropped 1%+ below your current rate</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span>You have private loans (no federal protections to lose)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span>You plan to pay off in full within 5–7 years</span>
                </li>
              </ul>
            </div>
            <div className="bg-red-950/30 border border-red-500/20 rounded-xl p-5">
              <h3 className="font-semibold text-red-300 mb-3">Risks to consider:</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>You permanently lose Income-Driven Repayment (IBR, PAYE, SAVE) eligibility</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>Public Service Loan Forgiveness (PSLF) is eliminated</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>Federal forbearance and deferment options disappear</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>Variable-rate refinancing can backfire in rising rate environments</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>Career pivots to nonprofit/government become more expensive</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5 — DTI and mortgage */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-2">DTI After MBA: What It Means for Your Mortgage</h2>
          <p className="text-slate-400 text-sm mb-6 max-w-2xl">
            Your MBA loans don&apos;t just affect monthly cash flow — they affect your ability to
            qualify for a mortgage 3–5 years post-graduation.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-white mb-3">How lenders calculate your DTI</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-3">
                  Mortgage lenders use your <span className="text-white">back-end DTI</span> —
                  all monthly debt payments (student loans + proposed mortgage + car + credit cards)
                  divided by gross monthly income. Most conventional loans require back-end DTI
                  below <span className="text-yellow-300 font-medium">43%</span>.
                </p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  FHA loans allow up to 57% back-end DTI with compensating factors, but you&apos;ll
                  pay higher rates. Aim for under 36% for best mortgage pricing.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-3">Example: $120K loan at $1,362/mo</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-3">
                  If you earn $160,000/year (~$13,333/mo), your student loan DTI is already 10.2%.
                  A mortgage payment of $3,500/mo adds 26.3% — total back-end DTI: 36.5%. That&apos;s
                  within conventional guidelines but leaves little buffer for car payments or credit card debt.
                </p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  <span className="text-white font-medium">Strategy:</span> Aggressively pay down principal
                  or refinance to a lower rate in years 2–3 post-graduation before applying for a mortgage.
                  Each $200/mo reduction in student loan payment adds ~$45K in mortgage buying power.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Footer Nav ───────────────────────────────────────────────────── */}
        <nav className="pt-8 border-t border-white/10">
          <p className="text-xs text-slate-500 uppercase tracking-widest mb-4 font-medium">
            Related Tools & Guides
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/" className="text-slate-400 hover:text-purple-300 transition-colors">
              Home
            </Link>
            <Link href="/mba-roi-calculator" className="text-slate-400 hover:text-purple-300 transition-colors">
              MBA ROI Calculator
            </Link>
            <Link href="/mba-cost" className="text-slate-400 hover:text-purple-300 transition-colors">
              MBA Cost
            </Link>
            <Link href="/post-mba-salary" className="text-slate-400 hover:text-purple-300 transition-colors">
              Post-MBA Salary
            </Link>
            <Link href="/how-to-pay-for-mba" className="text-slate-400 hover:text-purple-300 transition-colors">
              How to Pay for MBA
            </Link>
            <Link href="/mba-break-even" className="text-slate-400 hover:text-purple-300 transition-colors">
              MBA Break-Even
            </Link>
          </div>
        </nav>

      </div>
    </main>
  )
}
