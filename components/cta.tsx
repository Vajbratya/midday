import Link from "next/link"
import type { ReactNode } from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

type Variant = "primary" | "secondary" | "ghost"
type Props = {
  href: string
  children: ReactNode
  variant?: Variant
  className?: string
  withArrow?: boolean
}

export function Cta({ href, children, variant = "primary", className, withArrow }: Props) {
  const base =
    "inline-flex h-10 items-center gap-2 px-4 text-[13px] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-foreground"
  const styles: Record<Variant, string> = {
    primary: "border border-foreground bg-foreground text-background hover:bg-foreground/90",
    secondary: "border border-border text-foreground hover:bg-accent",
    ghost: "text-foreground hover:text-foreground/80",
  }
  return (
    <Link href={href} className={cn(base, styles[variant], className)}>
      {children}
      {withArrow && <ArrowRight className="h-3.5 w-3.5" />}
    </Link>
  )
}
