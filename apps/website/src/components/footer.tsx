"use client";

import Link from "next/link";

const columns = [
  {
    title: "Produto",
    links: [
      { href: "/assistant", label: "Copilot" },
      { href: "/invoicing", label: "Editor com IA" },
      { href: "/chat", label: "CRIT" },
      { href: "/download", label: "Editor mobile" },
    ],
  },
  {
    title: "Instituições",
    links: [
      { href: "/customers", label: "Equipes e governança" },
      { href: "/pre-accounting", label: "Integração PACS/RIS" },
      { href: "/insights", label: "Análises e auditoria" },
      { href: "/pricing", label: "Planos" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { href: "/integrations", label: "Integrações" },
      { href: "/docs", label: "Documentação" },
      { href: "/testimonials", label: "Casos e contexto" },
      { href: "/support", label: "Suporte" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/policy", label: "Privacidade" },
      { href: "/terms", label: "Termos" },
      { href: "https://status.laudos.ai", label: "Status", external: true },
      { href: "https://copilot.laudos.ai", label: "Entrar", external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-background relative overflow-hidden">
      <div className="h-px w-full border-t border-border" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-16 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_2fr] gap-16 lg:gap-20">
          <div className="space-y-6">
            <p className="font-serif text-3xl text-foreground max-w-md">
              Para tudo o que vem depois da imagem.
            </p>
            <p className="font-sans text-base text-muted-foreground max-w-md leading-relaxed">
              Software para o momento mais crítico da radiologia: quando a
              imagem precisa virar decisão, laudo e comunicação segura.
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>+55 41 3798-4321</span>
              <span>100% no navegador. Sem instalação obrigatória.</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {columns.map((column) => (
              <div key={column.title} className="space-y-4">
                <h3 className="font-sans text-sm text-foreground">
                  {column.title}
                </h3>
                <div className="space-y-2.5">
                  {column.links.map((item) =>
                    item.external ? (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors block"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors block"
                      >
                        {item.label}
                      </Link>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="my-12">
          <div className="h-px w-full border-t border-border" />
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-sans text-sm text-muted-foreground">
            Receba novidades sobre IA em radiologia e atualizações do produto.
          </p>
          <p className="font-sans text-sm text-muted-foreground">
            © {new Date().getFullYear()} LAUDOS.AI. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
