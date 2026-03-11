type AlternatesResult = {
  canonical: string
  languages: Record<string, string>
}

/**
 * Returns the `alternates` object for Next.js metadata.
 *
 * Standard pages: en-US + x-default, both pointing to their own canonical.
 * International pages (isInternational: true): also adds en-GB and en-AU,
 *   signaling to Google that English-speaking audiences in those regions
 *   should receive this page (no separate translation exists).
 *
 * Usage:
 *   import { pageAlternates } from "@/lib/seo"
 *
 *   export const metadata = {
 *     alternates: pageAlternates("https://careerreturns.com/mba-roi"),
 *   }
 */
export function pageAlternates(
  canonicalUrl: string,
  isInternational: boolean = false
): AlternatesResult {
  const languages: Record<string, string> = {
    "en-US": canonicalUrl,
    "x-default": canonicalUrl,
  }

  if (isInternational) {
    languages["en-GB"] = canonicalUrl
    languages["en-AU"] = canonicalUrl
  }

  return { canonical: canonicalUrl, languages }
}
