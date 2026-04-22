"use client";

import { Button } from "@midday/ui/button";
import Image from "next/image";
import Link from "next/link";
import { HeroImage } from "./hero-image";
import { FeaturesGridSection } from "./sections/features-grid-section";
import { IntegrationsSection } from "./sections/integrations-section";
import { PricingSection } from "./sections/pricing-section";
import { TestimonialsSection } from "./sections/testimonials-section";
import { TimeSavingsSection } from "./sections/time-savings-section";

const pillars = [
  {
    title: "Software de laudo radiológico por voz natural",
    description:
      "Selecione o exame, aperte um botão e fale os achados como pensa. A IA entende o contexto radiológico e monta o laudo estruturado automaticamente.",
  },
  {
    title: "Integração PACS/RIS e cobertura completa",
    description:
      "A plataforma funciona com TC, RM, RX, USG, Doppler e mamografia e se conecta à infraestrutura existente da clínica ou hospital.",
  },
  {
    title: "5 a 6 minutos economizados por laudo",
    description:
      "Para um plantonista com 50 laudos por dia, isso pode representar até 3 horas devolvidas para descansar, estudar ou simplesmente viver.",
  },
];

const modules = [
  {
    title: "Copilot",
    description:
      "Você dita ou digita. O sistema estrutura, aplica diretrizes e acelera a redação sem tomar a decisão clínica.",
    href: "/assistant",
  },
  {
    title: "LaudAI Search",
    description:
      "Busque achados, teorias e padrões em linguagem natural e receba respostas organizadas, prontas para apoiar o laudo.",
    href: "/mcp",
  },
  {
    title: "CRIT",
    description:
      "Detecta, notifica e registra a comunicação de achados críticos com SLA e prova jurídica. Disponível no Enterprise.",
    href: "/chat",
  },
];

export function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-background relative overflow-visible lg:min-h-screen lg:overflow-hidden">
        <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none z-0">
          <Image
            src="/images/grid-light.svg"
            alt=""
            width={1728}
            height={1080}
            className="w-[1728px] h-screen object-cover opacity-100 dark:opacity-[12%] dark:hidden"
            loading="lazy"
          />
          <Image
            src="/images/grid-dark.svg"
            alt=""
            width={1728}
            height={1080}
            className="w-[1728px] h-screen object-cover opacity-[12%] hidden dark:block"
            loading="lazy"
          />
        </div>

        <div className="relative z-10 pt-32 sm:pt-40 lg:pt-44 pb-12">
          <div className="max-w-[1400px] mx-auto px-4">
            <div className="text-center max-w-5xl mx-auto space-y-6">
              <p className="font-sans text-xs text-muted-foreground uppercase tracking-widest">
                novo editor Laudos.AI agora no celular
              </p>
              <h1 className="font-serif text-5xl md:text-7xl xl:text-[6.5rem] text-foreground leading-[1.05]">
                Sem ditar pontuação.
                <br />
                Fale como você pensa. Receba o laudo estruturado.
              </h1>
              <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Descreva os achados com naturalidade. A Laudos.AI organiza o
                conteúdo em um laudo claro, estruturado e pronto para revisar e
                assinar.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <Button asChild className="btn-inverse h-11 px-6">
                  <a href="https://copilot.laudos.ai">Testar grátis por 30 dias</a>
                </Button>
                <Button asChild variant="outline" className="h-11 px-6">
                  <Link href="/customers">Ver solução para equipes</Link>
                </Button>
              </div>
            </div>

            <div className="mt-12 max-w-6xl mx-auto">
              <HeroImage
                lightSrc="/images/invoicing-light.svg"
                darkSrc="/images/invoicing-dark.svg"
                alt="Editor da Laudos.AI"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="bg-background py-12 sm:py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="border border-border bg-background p-6 lg:p-7"
              >
                <h2 className="font-serif text-2xl text-foreground mb-4">
                  {pillar.title}
                </h2>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-12 sm:py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
              Para tudo o que vem depois da imagem
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground">
              Três módulos integrados na mesma infraestrutura.
            </h2>
            <p className="font-sans text-base text-muted-foreground leading-relaxed">
              Cada módulo resolve um ponto cego da radiologia moderna: redação,
              busca clínica e comunicação crítica.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {modules.map((module) => (
              <Link
                key={module.title}
                href={module.href}
                className="border border-border bg-secondary/20 p-6 hover:border-foreground/20 transition-colors"
              >
                <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  Modulo
                </p>
                <h3 className="font-serif text-3xl text-foreground mb-3">
                  {module.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                  {module.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FeaturesGridSection />
      <TimeSavingsSection />
      <IntegrationsSection
        title="Integrações clínicas, colaborativas e técnicas no mesmo stack"
        subtitle="PACS/RIS, email, chat, armazenamento, API e conectores para levar o fluxo da Laudos.AI para onde a sua operação já trabalha."
      />
      <TestimonialsSection />
      <PricingSection />
    </div>
  );
}
