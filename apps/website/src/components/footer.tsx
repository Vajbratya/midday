"use client";

import { cn } from "@midday/ui/cn";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggleButton } from "./theme-toggle-button";

export function Footer() {
  return (
    <footer className="bg-background relative overflow-hidden">
      {/* Top Divider - Full Bleed */}
      <div className="h-px w-full border-t border-border" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-16 sm:pb-80">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-16">
          {/* Left Column - Links */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 md:grid-cols-5 sm:gap-x-8 sm:gap-y-12 lg:col-span-1">
            {/* Features Column */}
            <div className="space-y-3">
              <h3 className="font-sans text-sm text-foreground mb-4">
                Produto
              </h3>
              <div className="space-y-2.5">
                {[
                  { href: "/assistant", label: "Copilot" },
                  { href: "/invoicing", label: "Editor" },
                  { href: "/chat", label: "CRIT" },
                  { href: "/transactions", label: "Fluxo" },
                  { href: "/insights", label: "Análises" },
                  { href: "/customers", label: "Instituições" },
                  { href: "/file-storage", label: "Templates" },
                  { href: "/pre-accounting", label: "Integrações" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors block"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Product Column */}
            <div className="space-y-3">
              <h3 className="font-sans text-sm text-foreground mb-4">
                Plataforma
              </h3>
              <div className="space-y-2.5">
                {[
                  { href: "/pricing", label: "Preços" },
                  { href: "/download", label: "Mobile" },
                  { href: "/integrations", label: "Integrações" },
                  { href: "/docs", label: "Documentação" },
                  { href: "/testimonials", label: "Casos" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors block"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Company Column */}
            <div className="space-y-3">
              <h3 className="font-sans text-sm text-foreground mb-4">
                Empresa
              </h3>
              <div className="space-y-2.5">
                {[
                  { href: "/story", label: "História", external: false },
                  { href: "/updates", label: "Atualizações", external: false },
                  {
                    href: "https://www.linkedin.com/company/laudosai",
                    label: "LinkedIn",
                    external: true,
                  },
                  {
                    href: "https://copilot.laudos.ai",
                    label: "Entrar",
                    external: true,
                  },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors block"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Resources Column */}
            <div className="space-y-3">
              <h3 className="font-sans text-sm text-foreground mb-4">
                Recursos
              </h3>
              <div className="space-y-2.5">
                {[
                  { href: "/chat", label: "CRIT", external: false },
                  { href: "/docs", label: "Documentação", external: false },
                  { href: "/agents", label: "Agents", external: false },
                  { href: "/computer", label: "Mobile", external: false },
                  {
                    href: "https://status.laudos.ai",
                    label: "Status",
                    external: true,
                  },
                  {
                    href: "https://api.laudos.ai",
                    label: "API",
                    external: true,
                  },
                  { href: "/sdks", label: "SDKs", external: false },
                  { href: "/support", label: "Suporte", external: false },
                  {
                    href: "/policy",
                    label: "Privacidade",
                    external: false,
                  },
                  {
                    href: "/terms",
                    label: "Termos",
                    external: false,
                  },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors block"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Tagline & Compliance */}
          <div className="flex flex-col items-start lg:items-end gap-6 lg:gap-10">
            <p className="font-sans text-base sm:text-xl text-foreground text-left lg:text-right">
              Para tudo o que vem depois da imagem.
            </p>

            {/* Compliance Section */}
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center gap-2">
                <div className="w-9 h-9">
                  <Image
                    src="/images/gdpr.png"
                    alt="LGPD conforme"
                    width={36}
                    height={36}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center">
                  <p className="font-sans text-xs text-foreground">LGPD</p>
                  <p className="font-sans text-xs text-muted-foreground">
                    Conforme
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-9 h-9">
                  <Image
                    src="/images/soc2.png"
                    alt="Auditoria institucional"
                    width={36}
                    height={36}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center">
                  <p className="font-sans text-xs text-foreground">CRIT</p>
                  <p className="font-sans text-xs text-muted-foreground">
                    Auditável
                  </p>
                </div>
              </div>
            </div>

            {/* Theme Toggle */}
            <ThemeToggleButton className="px-3 py-1.5" />
          </div>
        </div>

        {/* Divider */}
        <div className="my-16">
          <div className="h-px w-full border-t border-border" />
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <Link
            href="https://status.laudos.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span className="font-sans text-sm text-muted-foreground">
              Status do sistema:
            </span>
            <span className="font-sans text-sm text-foreground">
              Operacional
            </span>
            <div className="relative flex items-center justify-center">
              <div className="w-2 h-2 bg-green-500 rounded-full relative z-10" />
              <div
                className="absolute w-2 h-2 bg-green-500 rounded-full"
                style={{
                  animation:
                    "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                  willChange: "transform, opacity, box-shadow",
                }}
              />
            </div>
          </Link>
          <p className="font-sans text-sm text-muted-foreground">
            © {new Date().getFullYear()} sagittal.health by laudosai. Todos os
            direitos reservados.
          </p>
        </div>
      </div>

      {/* Large Wordmark */}
      <div className="absolute bottom-0 left-0 sm:left-1/2 sm:transform sm:-translate-x-1/2 translate-y-[25%] sm:translate-y-[40%] bg-background overflow-hidden">
        <div className="flex flex-col items-start sm:items-center">
          <p className="mb-1 font-sans text-[10px] sm:text-xs uppercase tracking-[0.34em] text-muted-foreground">
            health by laudosai
          </p>
          <h1
            className={cn(
              "font-sans text-[118px] sm:text-[300px] leading-none select-none",
              "text-secondary",
              "[WebkitTextStroke:1px_hsl(var(--muted-foreground))]",
              "[textStroke:1px_hsl(var(--muted-foreground))]",
            )}
            style={{
              WebkitTextStroke: "1px hsl(var(--muted-foreground))",
              color: "hsl(var(--secondary))",
            }}
          >
            SAGITTAL
          </h1>
        </div>
      </div>
    </footer>
  );
}
