import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Termos",
  description:
    "Diretrizes gerais de uso da plataforma Laudos.AI, planos e responsabilidades de uso.",
  path: "/terms",
  og: { title: "Termos", description: "Regras gerais de uso da Laudos.AI." },
});

const sections = [
  {
    title: "Uso da plataforma",
    body: [
      "A Laudos.AI oferece software para apoio ao fluxo radiológico, incluindo edição, estruturação de laudos, templates, integrações e comunicação crítica.",
      "O uso do produto não substitui julgamento clínico, responsabilidade médica ou validação final pelo profissional.",
    ],
  },
  {
    title: "Planos e cobrança",
    body: [
      "Planos podem ser cobrados de forma recorrente conforme a modalidade contratada.",
      "Recursos, limites e escopo de suporte variam de acordo com o plano escolhido e, em cenários enterprise, com o contrato firmado.",
    ],
  },
  {
    title: "Responsabilidade de uso",
    body: [
      "O médico e a instituição continuam responsáveis pelo conteúdo final do laudo, pela decisão clínica e pela adequação do fluxo à sua realidade assistencial.",
      "A plataforma existe para acelerar, organizar e dar governança ao processo, não para substituir validação profissional.",
    ],
  },
  {
    title: "Integrações e implantação",
    body: [
      "Integrações com PACS, RIS, API, SSO / SAML e conectores customizados dependem de escopo técnico e do plano contratado.",
      "Em operações institucionais, regras complementares podem ser definidas em contrato, onboarding e implantação.",
    ],
  },
  {
    title: "Contato",
    body: [
      "Dúvidas comerciais, suporte e implantação institucional podem ser tratadas pela página de suporte.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-4 mb-12">
          <h1 className="font-serif text-3xl lg:text-4xl text-foreground">
            Termos
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
