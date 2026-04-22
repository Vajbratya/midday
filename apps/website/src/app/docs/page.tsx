import Link from "next/link";
import { DocsHomeHero } from "@/components/docs/docs-home-hero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Documentação Laudos.AI",
  description:
    "Aprenda a usar o editor com IA, voz natural, templates institucionais, CRIT e integrações da Laudos.AI.",
  path: "/docs",
  og: {
    title: "Documentação",
    description: "Tudo o que você precisa para implantar e usar a Laudos.AI.",
  },
});

const popularGuides = [
  {
    title: "Introdução",
    href: "/docs/introducao",
    description: "O que a plataforma resolve",
  },
  {
    title: "Começar rápido",
    href: "/docs/comecar-rapido",
    description: "Primeiros passos no editor",
  },
  {
    title: "Voz natural",
    href: "/docs/voz-natural",
    description: "Como ditar do seu jeito",
  },
  {
    title: "Integração PACS/RIS",
    href: "/docs/integracao-pacs-ris",
    description: "Implantação no fluxo existente",
  },
  {
    title: "CRIT",
    href: "/docs/crit-achados",
    description: "Achados críticos com prova e SLA",
  },
  {
    title: "API e MCP",
    href: "/docs/api-mcp",
    description: "Integração programática",
  },
];

const sections = [
  {
    title: "Começar",
    links: [
      { title: "Introdução", href: "/docs/introducao" },
      { title: "Começar rápido", href: "/docs/comecar-rapido" },
      { title: "Voz natural", href: "/docs/voz-natural" },
      { title: "Editor com IA", href: "/docs/editor-com-ia" },
    ],
  },
  {
    title: "Produto",
    links: [
      { title: "Templates institucionais", href: "/docs/templates-institucionais" },
      { title: "Planos", href: "/docs/planos" },
      { title: "Segurança e LGPD", href: "/docs/seguranca-lgpd" },
    ],
  },
  {
    title: "Institucional",
    links: [
      { title: "Integração PACS/RIS", href: "/docs/integracao-pacs-ris" },
      { title: "CRIT", href: "/docs/crit-achados" },
      { title: "API e MCP", href: "/docs/api-mcp" },
    ],
  },
];

export default function DocsPage() {
  return (
    <div className="min-h-[calc(100vh-200px)] pb-32 md:pb-24">
      {/* Hero with centered chat */}
      <DocsHomeHero />

      {/* Popular guides */}
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
          Guias principais
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {popularGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group bg-background p-5 hover:bg-secondary/30 transition-colors"
            >
              <span className="block text-sm font-medium text-foreground mb-1">
                {guide.title}
              </span>
              <span className="block text-sm text-muted-foreground">
                {guide.description}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* All sections */}
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
          Navegar por tema
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-medium text-foreground mb-3">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
