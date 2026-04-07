import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/next'

export const metadata = {
  title: "CareerReturns — Human Capital ROI Platform",
  description:
    "Professional-grade capital budgeting tools for evaluating MBA programs, graduate degrees, and career investments.",
  verification: {
    google: "zDoWplbx5Khdq-waO3kN2Ko9CJeltvRwJyit1br6uF4",
  },
  metadataBase: new URL("https://careerreturns.com"),
  openGraph: {
    title: "CareerReturns — MBA ROI Calculator & Career Investment Tools",
    description: "Professional-grade DCF, NPV, and IRR analysis for MBA ROI decisions. Free calculator and 2026 data across 12 industries.",
    url: "https://careerreturns.com",
    siteName: "CareerReturns",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@careerreturns",
    title: "CareerReturns — MBA ROI Calculator & Career Investment Tools",
    description: "Free DCF-based MBA ROI calculator. NPV, IRR, and break-even analysis across 12 industries.",
  },
}

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CareerReturns",
  "url": "https://careerreturns.com",
  "description": "Professional-grade capital budgeting tools for MBA ROI and career investment decisions.",
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "CareerReturns",
  "url": "https://careerreturns.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://careerreturns.com/mba-roi-calculator",
    },
    "query-input": "required name=search_term_string",
  },
}

const siteNavSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://careerreturns.com" },
    { "@type": "ListItem", "position": 2, "name": "MBA ROI Calculator", "item": "https://careerreturns.com/mba-roi-calculator" },
    { "@type": "ListItem", "position": 3, "name": "MBA ROI Guide", "item": "https://careerreturns.com/mba-roi" },
    { "@type": "ListItem", "position": 4, "name": "Career Gap Calculator", "item": "https://careerreturns.com/career-gap-calculator" },
    { "@type": "ListItem", "position": 5, "name": "Returnship Programs 2026", "item": "https://careerreturns.com/returnship-programs-2026" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3531438820494924"
          crossOrigin="anonymous"
        />
        <script
          async
          type="application/javascript"
          src="https://news.google.com/swg/js/v1/swg-basic.js"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(self.SWG_BASIC = self.SWG_BASIC || []).push( basicSubscriptions => {
    basicSubscriptions.init({
      type: "NewsArticle",
      isPartOfType: ["Product"],
      isPartOfProductId: "CAow8o_GDA:openaccess",
      clientOptions: { theme: "light", lang: "en" },
    });
  });`,
          }}
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavSchema) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
