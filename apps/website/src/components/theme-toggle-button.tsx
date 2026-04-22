"use client";

import { cn } from "@midday/ui/cn";
import { Icons } from "@midday/ui/icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ThemeToggleButtonProps {
  className?: string;
  iconClassName?: string;
  labelClassName?: string;
  showLabel?: boolean;
}

export function ThemeToggleButton({
  className,
  iconClassName,
  labelClassName,
  showLabel = true,
}: ThemeToggleButtonProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme !== "light" : true;
  const nextModeLabel = isDark ? "Modo claro" : "Modo escuro";

  return (
    <button
      type="button"
      data-theme-toggle
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "flex items-center gap-2 border border-border text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground",
        className,
      )}
      aria-label="Alternar tema"
    >
      {mounted ? (
        isDark ? (
          <Icons.LightMode className={cn("size-4", iconClassName)} />
        ) : (
          <Icons.DarkMode className={cn("size-4", iconClassName)} />
        )
      ) : (
        <div className={cn("size-4", iconClassName)} />
      )}

      {showLabel ? (
        <span className={cn("font-sans text-sm", labelClassName)}>
          {mounted ? nextModeLabel : "Alternar tema"}
        </span>
      ) : null}
    </button>
  );
}
