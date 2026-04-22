import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function Section({
  children,
  className,
  as: As = "section",
}: {
  children: ReactNode
  className?: string
  as?: "section" | "div" | "main" | "article"
}) {
  return (
    <As className={cn("border-b border-border", className)}>
      <div className="container-page py-20 md:py-28">{children}</div>
    </As>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 border border-border px-2.5 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
      <span className="h-1.5 w-1.5 bg-foreground/60" aria-hidden />
      {children}
    </div>
  )
}

export function PageHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h1 className="mt-5 text-balance text-4xl md:text-6xl font-medium tracking-tight leading-[1.02]">
        {title}
      </h1>
      {description && (
        <p className="mt-6 max-w-2xl text-pretty text-[15px] md:text-[17px] text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 text-balance text-3xl md:text-4xl font-medium tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-[14px] md:text-[15px] text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
