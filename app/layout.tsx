import '../styles/globals.css'

export const metadata = {
  title: "CareerCapital — Human Capital ROI Platform",
  description:
    "Professional-grade capital budgeting tools for evaluating MBA programs, graduate degrees, and career investments.",
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
      <body>{children}</body>
    </html>
  )
}
