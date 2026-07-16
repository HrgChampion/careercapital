import Link from "next/link"

const dataLinks = [
  { href: "/mba-roi-calculator", label: "MBA ROI Calculator" },
  { href: "/average-mba-salary-after-5-years", label: "Average MBA Salary After 5 Years" },
  { href: "/post-mba-salary", label: "Post-MBA Salary" },
  { href: "/mba-salary-by-school", label: "MBA Salary by School" },
  { href: "/mba-salary-increase", label: "MBA Salary Increase" },
  { href: "/mba-break-even", label: "MBA Break-Even" },
  { href: "/mba-jobs-200k", label: "$200K MBA Jobs" },
  { href: "/yellow-ribbon-mba-programs", label: "Yellow Ribbon MBA Programs" },
  { href: "/mba-worth-it", label: "Is an MBA Worth It?" },
]

const siteLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
]

export default function SiteFooter({ note }: { note?: string }) {
  return (
    <footer className="border-t border-white/10 py-8 px-4 text-center text-slate-500 text-xs space-y-3">
      <p className="max-w-3xl mx-auto leading-relaxed">
        {dataLinks.map((l, i) => (
          <span key={l.href}>
            {i > 0 && " · "}
            <Link href={l.href} className="hover:text-slate-300 transition-colors">
              {l.label}
            </Link>
          </span>
        ))}
      </p>
      <p>
        {siteLinks.map((l, i) => (
          <span key={l.href}>
            {i > 0 && " · "}
            <Link href={l.href} className="hover:text-slate-300 transition-colors">
              {l.label}
            </Link>
          </span>
        ))}
      </p>
      <p>Rational decisions. Compounding outcomes.</p>
      {note && <p className="mt-1 max-w-3xl mx-auto leading-relaxed">{note}</p>}
    </footer>
  )
}
