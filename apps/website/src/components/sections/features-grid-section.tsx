"use client";

import Link from "next/link";
import { MaterialIcon } from "../homepage/icon-mapping";

const items = [
  {
    href: "/assistant",
    title: "Copilot",
    subtitle: "Voz natural + IA",
    icon: "star",
  },
  {
    href: "/invoicing",
    title: "Editor",
    subtitle: "Laudo estruturado",
    icon: "description",
  },
  {
    href: "/file-storage",
    title: "Templates",
    subtitle: "Máscaras e descritores",
    icon: "folder",
  },
  {
    href: "/pre-accounting",
    title: "Integrações",
    subtitle: "PACS, RIS e API",
    icon: "link",
  },
  {
    href: "/insights",
    title: "Análises",
    subtitle: "Auditoria e operação",
    icon: "insights",
  },
  {
    href: "/chat",
    title: "CRIT",
    subtitle: "Achados críticos",
    icon: "send",
  },
  {
    href: "/customers",
    title: "Instituições",
    subtitle: "Equipes e governança",
    icon: "account_balance",
  },
  {
    href: "/mcp",
    title: "API e MCP",
    subtitle: "Stack técnico",
    icon: "widgets",
  },
];

export function FeaturesGridSection() {
  return (
    <section className="bg-background py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center space-y-4 mb-10 sm:mb-12">
          <h2 className="font-serif text-2xl sm:text-2xl text-foreground">
            Tudo o que a radiologia moderna precisa, no mesmo sistema
          </h2>
          <p className="hidden sm:block font-sans text-base text-muted-foreground leading-normal max-w-2xl mx-auto px-4">
            Copilot, editor, templates, comunicação crítica, integrações e
            governança institucional conectados na mesma infraestrutura.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center text-center border border-border bg-background p-5 hover:border-foreground/20 transition-colors"
            >
              <div className="bg-secondary border border-border w-[60px] h-[60px] flex items-center justify-center rounded-none mb-4">
                <MaterialIcon
                  name={item.icon}
                  className="text-muted-foreground"
                  size={24}
                />
              </div>
              <h3 className="font-sans text-sm text-foreground leading-[21px]">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-[21px]">
                {item.subtitle}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
