import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Privacidade",
  description:
    "Diretrizes gerais de privacidade, uso de dados e segurança para a plataforma Laudos.AI.",
  path: "/policy",
  og: {
    title: "Privacidade",
    description: "Como tratamos dados, acesso e segurança na Laudos.AI.",
  },
});

const sections = [
  {
    title: "Escopo",
    body: [
      "Esta página resume, em linguagem simples, como a Laudos.AI trata dados e acesso dentro da plataforma.",
      "Em cenários institucionais, regras adicionais podem existir conforme contrato, implantação e governança do cliente.",
    ],
  },
  {
    title: "Dados de conta e operação",
    body: [
      "A plataforma pode processar dados de autenticação, uso do produto, conteúdo do fluxo de laudo e eventos operacionais necessários para entregar o serviço.",
      "A coleta e o tratamento devem respeitar o contexto de uso, a implantação e as exigências legais aplicáveis.",
    ],
  },
  {
    title: "Segurança e acesso",
    body: [
      "A Laudos.AI foi desenhada para ambientes sensíveis, com trilha de auditoria, perfis de acesso e governança institucional quando necessário.",
      "Em cenários enterprise, recursos como SSO / SAML, auditoria e regras de acesso podem fazer parte da implantação.",
    ],
  },
  {
    title: "Comunicação crítica",
    body: [
      "Fluxos relacionados a achados críticos exigem especial cuidado com rastreabilidade e prova de ciência.",
      "O CRIT existe para reduzir improviso e trazer registro operacional a processos sensíveis.",
    ],
  },
  {
    title: "Contato",
    body: [
      "Para dúvidas de privacidade, implantação institucional ou governança, use a página de suporte.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-4 mb-12">
          <h1 className="font-serif text-3xl lg:text-4xl text-foreground">
            Privacidade
          </h1>
          <p className="font-sans text-sm text-muted-foreground">
            Última atualização: 22 de abril de 2026
          </p>
        </div>

        <div className="space-y-6">
          {sections.map((section) => (
            <section key={section.title} className="border border-border p-6">
              <h2 className="font-sans text-base text-foreground mb-4">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="font-sans text-sm text-muted-foreground leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
