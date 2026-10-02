"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/author/himanshu-gauba", label: "Author" },
  { href: "/editorial-policy", label: "Editorial Policy" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/contact", label: "Contact" },
]

/** Site-wide trust/legal links, rendered once from the root layout on every page. */
export default function LegalBar() {
  // Embeddable widgets are iframed on third-party sites; keep them chrome-free.
  if (usePathname()?.startsWith("/embed")) return null
  return (
    <nav aria-label="Site information" className="bg-slate-950 border-t border-white/10 py-5 px-4 text-center text-slate-500 text-xs">
      {links.map((l, i) => (
        <span key={l.href}>
          {i > 0 && " · "}
          <Link href={l.href} className="hover:text-slate-300 transition-colors">
            {l.label}
          </Link>
        </span>
      ))}
      <p className="mt-2">© {new Date().getFullYear()} CareerReturns · Independent and not affiliated with any school or lender.</p>
    </nav>
  )
}
