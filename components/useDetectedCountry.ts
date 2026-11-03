"use client"

import { useEffect, useState } from "react"
import { defaultCountry, type CountryCode } from "@/lib/locale"

/**
 * Country state that starts as "US" on both server and client, then switches to
 * the visitor's browser locale after hydration.
 *
 * Calling defaultCountry() inside useState's initializer runs it during static
 * rendering too. Node 21+ defines `navigator`, so the build machine's locale was
 * baked into the HTML and any visitor with a different locale hit a hydration
 * mismatch that made React discard and re-render the whole document.
 */
export function useDetectedCountry() {
  const [country, setCountry] = useState<CountryCode>("US")
  useEffect(() => {
    setCountry(defaultCountry())
  }, [])
  return [country, setCountry] as const
}
