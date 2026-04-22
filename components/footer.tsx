import Link from "next/link"
import { productNav, companyNav } from "@/lib/nav"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-page grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-5 w-5" />
            <span className="text-[15px] font-medium tracking-tight">midday</span>
          </Link>
          <p className="mt-4 text-[13px] text-muted-foreground leading-relaxed max-w-xs">
            The financial operating system for freelancers, consultants, and small teams.
          </p>
        </div>

        <FooterColumn title="Product" items={productNav.slice(0, 6)} />
        <FooterColumn title="Company" items={companyNav} />
        <FooterColumn
          title="Resources"
          items={[
            { label: "Bank coverage", href: "/bank-coverage" },
            { label: "File storage", href: "/file-storage" },
            { label: "Pre-accounting", href: "/pre-accounting" },
            { label: "Support", href: "#" },
            { label: "Status", href: "#" },
          ]}
        />
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col items-start justify-between gap-4 py-6 md:flex-row md:items-center">
          <p className="text-[12px] text-muted-foreground">
            © {new Date().getFullYear()} Midday Labs AB. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[12px] text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  items,
}: {
  title: string
  items: { label: string; href: string }[]
}) {
  return (
    <div>
      <h3 className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-[13px] text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
