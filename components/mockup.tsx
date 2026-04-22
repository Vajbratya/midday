import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function Mockup({
  title,
  children,
  className,
}: {
  title?: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn("border border-border bg-card", className)}>
      <div className="flex h-9 items-center justify-between border-b border-border px-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-muted-foreground/40" aria-hidden />
          <span className="h-2 w-2 rounded-full bg-muted-foreground/40" aria-hidden />
          <span className="h-2 w-2 rounded-full bg-muted-foreground/40" aria-hidden />
        </div>
        {title && (
          <div className="text-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            {title}
          </div>
        )}
        <div className="w-12" />
      </div>
      <div className="p-4 md:p-6">{children}</div>
    </div>
  )
}
