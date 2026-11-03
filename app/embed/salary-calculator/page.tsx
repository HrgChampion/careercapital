import SalaryCalculator from "@/app/salary-calculator/Calculator"

export default function EmbedSalaryCalculator() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-4 sm:p-6">
      <div className="max-w-5xl mx-auto space-y-5">
        <header className="flex items-center justify-between gap-3">
          <h1 className="text-base font-semibold tracking-tight">Salary &amp; Paycheck Calculator</h1>
          <span className="text-[11px] text-slate-500 uppercase tracking-widest">2026 tax year</span>
        </header>
        <SalaryCalculator embedded />
      </div>
    </main>
  )
}
