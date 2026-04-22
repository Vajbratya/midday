"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { productNav, companyNav } from "@/lib/nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Logo } from "@/components/logo"

export function Header() {
  const [open, setOpen] = React.useState(false)
  const [productOpen, setProductOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="container-page flex h-14 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" aria-label="Midday home" className="flex items-center gap-2">
            <Logo className="h-5 w-5" />
            <span className="text-[15px] font-medium tracking-tight">midday</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-[13px] text-muted-foreground">
            <div
              className="relative"
              onMouseEnter={() => setProductOpen(true)}
              onMouseLeave={() => setProductOpen(false)}
            >
              <button
                type="button"
                className="hover:text-foreground transition-colors"
                onClick={() => setProductOpen((v) => !v)}
                aria-expanded={productOpen}
              >
                Product
              </button>
              {productOpen && (
                <div className="absolute left-0 top-full pt-2">
                  <div className="w-[520px] border border-border bg-background shadow-sm">
                    <ul className="grid grid-cols-2">
                      {productNav.map((item) => (
                        <li key={item.href} className="border-b border-border md:odd:border-r">
                          <Link
                            href={item.href}
                            className="block p-4 hover:bg-accent transition-colors"
                          >
                            <div className="text-[13px] text-foreground">{item.label}</div>
                            {item.description && (
                              <div className="mt-1 text-[12px] text-muted-foreground leading-relaxed">
                                {item.description}
                              </div>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {companyNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="#"
            className="hidden md:inline-flex h-8 items-center px-3 text-[13px] text-muted-foreground hover:text-foreground transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="#"
            className="hidden md:inline-flex h-8 items-center border border-foreground bg-foreground px-3 text-[13px] text-background hover:bg-foreground/90 transition-colors"
          >
            Get started
          </Link>
          <ThemeToggle />
          <button
            type="button"
            aria-label="Open menu"
            className="md:hidden inline-flex h-8 w-8 items-center justify-center border border-border"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>

      {open && <MobileMenu onClose={() => setOpen(false)} />}
    </header>
  )
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-background md:hidden">
      <div className="container-page flex h-14 items-center justify-between border-b border-border">
        <Link href="/" className="flex items-center gap-2" onClick={onClose}>
          <Logo className="h-5 w-5" />
          <span className="text-[15px] font-medium">midday</span>
        </Link>
        <button
          type="button"
          aria-label="Close menu"
          className="inline-flex h-8 w-8 items-center justify-center border border-border"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <nav className="container-page py-6">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Product</div>
        <ul className="mt-3 divide-y divide-border border-y border-border">
          {productNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex items-center justify-between py-3 text-[14px]"
                onClick={onClose}
              >
                {item.label}
                <span className="text-muted-foreground">→</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Company</div>
        <ul className="mt-3 divide-y divide-border border-y border-border">
          {companyNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex items-center justify-between py-3 text-[14px]"
                onClick={onClose}
              >
                {item.label}
                <span className="text-muted-foreground">→</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex gap-2">
          <Link
            href="#"
            className="inline-flex h-10 flex-1 items-center justify-center border border-border text-[13px]"
            onClick={onClose}
          >
            Sign in
          </Link>
          <Link
            href="#"
            className="inline-flex h-10 flex-1 items-center justify-center border border-foreground bg-foreground text-[13px] text-background"
            onClick={onClose}
          >
            Get started
          </Link>
        </div>
      </nav>
    </div>
  )
}

export { cn }
