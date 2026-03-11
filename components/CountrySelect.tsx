"use client"

import { COUNTRIES, COUNTRY_ORDER, type CountryCode } from "@/lib/locale"

export function CountrySelect({
  value,
  onChange,
}: {
  value: CountryCode
  onChange: (c: CountryCode) => void
}) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value as CountryCode)}
      className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white/70 focus:outline-none focus:border-indigo-500/50 transition-all cursor-pointer"
    >
      {COUNTRY_ORDER.map(code => (
        <option key={code} value={code} className="bg-slate-900 text-white">
          {COUNTRIES[code].flag}  {COUNTRIES[code].label}
        </option>
      ))}
    </select>
  )
}
