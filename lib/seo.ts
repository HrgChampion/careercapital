type AlternatesResult = {
  canonical: string
  languages: Record<string, string>
}

type ArticleSchemaOptions = {
  title: string
  description: string
  url: string
  /** ISO date string, e.g. "2026-03-24" */
  datePublished: string
  /** ISO date string — defaults to datePublished */
  dateModified?: string
}

/**
 * Returns a Schema.org Article JSON-LD object for guide/content pages.
 * Attach it to a <script type="application/ld+json"> in the page.
 */
export function articleSchema(opts: ArticleSchemaOptions): object {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": opts.title,
    "description": opts.description,
    "url": opts.url,
    "datePublished": opts.datePublished,
    "dateModified": opts.dateModified ?? opts.datePublished,
    "author": {
      "@type": "Organization",
      "name": "CareerReturns",
      "url": "https://careerreturns.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": "CareerReturns",
      "url": "https://careerreturns.com",
    },
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "name": "CareerReturns",
      "url": "https://careerreturns.com",
    },
  }
}

/**
 * Returns a Schema.org BreadcrumbList JSON-LD object.
 * Items: [{ name, url }] — first item is always the homepage.
 */
export function breadcrumbSchema(
  items: Array<{ name: string; url: string }>
): object {
  const allItems = [
    { name: "Home", url: "https://careerreturns.com" },
    ...items,
  ]
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": allItems.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": item.url,
    })),
  }
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
    languages["en-CA"] = canonicalUrl
  }

  return { canonical: canonicalUrl, languages }
}
