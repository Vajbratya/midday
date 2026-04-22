"use client";

import { Button } from "@midday/ui/button";

const plans = [
  {
    name: "RadRes+",
    tag: "Residentes",
    price: "R$49",
    period: "/mes",
    summary: "Exclusivo para residentes verificados. 7 dias grátis e até 350 laudos por mês.",
    features: [
      "350 laudos por mês",
      "7 dias grátis para testar",
      "IA generativa com diretrizes",
    ],
    href: "https://copilot.laudos.ai",
  },
  {
    name: "PRO",
    tag: "Mais popular",
    price: "R$219",
    period: "/mes",
    summary: "Uso individual com IA assistiva para edição, complementação e suporte clínico.",
    features: [
      "Até 2.000 laudos por mês",
      "Edição inteligente e completions",
      "Estruturação automática por diretrizes",
      "Exportação e fluxo completo de laudo",
    ],
    href: "https://copilot.laudos.ai",
    featured: true,
  },
  {
    name: "Enterprise",
    tag: "Instituicoes",
    price: "Sob consulta",
    period: "",
    summary: "Compliance, integrações PACS/RIS, CRIT com SLA e padrão institucional.",
    features: [
      "Laudos ilimitados",
      "CRIT customizável por instituição",
      "SSO/SAML e perfis de acesso",
      "API, onboarding e suporte dedicado",
    ],
    href: "/support",
  },
];

export function PricingSection() {
  return (
    <section className="bg-background py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-serif text-2xl sm:text-2xl text-foreground">
            Escolha o plano certo e ganhe velocidade no laudo
          </h2>
          <p className="hidden sm:block font-sans text-base text-muted-foreground leading-normal max-w-2xl mx-auto">
            Do residente ao hospital, a plataforma cresce sem mudar a lógica do
            fluxo clínico.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`border p-6 lg:p-7 ${
                plan.featured
                  ? "border-foreground bg-secondary/20"
                  : "border-border bg-background"
              }`}
            >
              <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-3">
                {plan.tag}
              </p>
              <h3 className="font-serif text-3xl text-foreground">{plan.name}</h3>
              <div className="mt-4 flex items-end gap-2">
                <span className="font-sans text-4xl text-foreground">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="font-sans text-sm text-muted-foreground mb-1">
                    {plan.period}
                  </span>
                )}
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {plan.summary}
              </p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-foreground"
                  >
                    <span className="mt-1 block w-1.5 h-1.5 bg-foreground" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={`w-full mt-8 ${plan.featured ? "btn-inverse" : ""}`}
                variant={plan.featured ? "default" : "outline"}
              >
                <a href={plan.href}>
                  {plan.name === "Enterprise"
                    ? "Falar com vendas"
                    : "Começar teste"}
                </a>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
