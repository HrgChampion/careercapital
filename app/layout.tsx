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
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
