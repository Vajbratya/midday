"use client";

import { Icons } from "@midday/ui/icons";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/assistant", label: "Copilot" },
  { href: "/invoicing", label: "Editor" },
  { href: "/chat", label: "CRIT" },
  { href: "/integrations", label: "Integrações" },
  { href: "/pricing", label: "Preços" },
  { href: "/about", label: "Sobre" },
  { href: "/docs", label: "Docs" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-md">
        <div className="relative py-3 xl:py-4 px-4 sm:px-4 md:px-4 lg:px-4 xl:px-6 2xl:px-8 flex items-center justify-between xl:gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            aria-label="Laudos.AI - ir para a página inicial"
          >
            <div className="w-6 h-6">
              <Icons.LogoSmall className="w-full h-full text-foreground" />
            </div>
            <span className="font-sans text-base text-foreground">laudos.ai</span>
          </Link>

          <div className="hidden xl:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm transition-colors text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden xl:flex items-center gap-3">
            <a
              href="https://copilot.laudos.ai"
              className="text-sm transition-colors text-muted-foreground hover:text-foreground"
            >
              Entrar
            </a>
            <a
              href="https://copilot.laudos.ai"
              className="inline-flex items-center justify-center px-4 py-2 bg-foreground text-background text-sm font-sans hover:opacity-90 transition-opacity"
            >
              Testar grátis
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="xl:hidden w-10 h-10 border border-border flex items-center justify-center text-foreground"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? (
              <Icons.Close className="w-5 h-5" />
            ) : (
              <div className="flex flex-col gap-1.5">
                <span className="block w-4 h-px bg-current" />
                <span className="block w-4 h-px bg-current" />
                <span className="block w-4 h-px bg-current" />
              </div>
            )}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-20 xl:hidden">
          <div className="px-4 pb-8 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border border-border px-4 py-4 text-foreground text-base"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://copilot.laudos.ai"
              className="border border-border px-4 py-4 text-foreground text-base"
            >
              Entrar
            </a>
            <a
              href="https://copilot.laudos.ai"
              className="px-4 py-4 bg-foreground text-background text-base text-center"
            >
              Testar grátis
            </a>
          </div>
        </div>
      )}
    </>
  );
}
