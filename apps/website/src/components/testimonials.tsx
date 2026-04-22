"use client";

import Image from "next/image";
import type { Testimonial } from "./sections/testimonials-section";

const allTestimonials: Testimonial[] = [
  {
    name: "Neurorradiologista",
    title: "",
    company: "Hospital terciario",
    country: "Brasil",
    content:
      "Laudos.AI reduziu o tempo gasto com redacao e ainda fechou a parte que mais falhava: contexto e pos-laudo.",
    fullContent:
      "Contexto\nOperacao com alto volume, necessidade de resposta rapida e pouco tempo para ficar montando texto manualmente.\n\nImpacto\nMenos retrabalho na redacao e uma camada pos-laudo mais segura, com contexto acessivel e comunicacao critica rastreavel.\n\nDestaques\nCopilot, editor estruturado e CRIT no mesmo fluxo.",
  },
  {
    name: "Coordenacao de radiologia",
    title: "",
    company: "Grupo multiunidade",
    country: "Brasil",
    content:
      "Antes cada unidade tinha um jeito de laudar e de avisar o critico. Hoje a operacao segue um padrao unico.",
    fullContent:
      "Contexto\nEquipe distribuida entre unidades, escalas e perfis diferentes de instituicao.\n\nImpacto\nPadronizacao de templates, governanca por unidade e menos ruído entre laudo, anexo e comunicacao.\n\nDestaques\nInstituicoes, templates compartilhados e trilha de auditoria.",
  },
  {
    name: "Radiologista de plantao",
    title: "",
    company: "Pronto atendimento",
    country: "Brasil",
    content:
      "O ganho nao esta so em escrever mais rapido. Esta em encontrar o contexto certo e nao perder o critico no caminho.",
    fullContent:
      "Contexto\nPlantao com necessidade de resposta imediata, pouco tempo e muitas interrupcoes.\n\nImpacto\nMenos troca de tela, historico mais claro por caso e confirmacao de ciencia sem improviso.\n\nDestaques\nCRIT por canal, arquivos conectados e busca por contexto.",
  },
  {
    name: "Gestao operacional",
    title: "",
    company: "Clinica especializada",
    country: "Brasil",
    content:
      "A discussao deixou de ser subjetiva. Agora a equipe enxerga TAT, gargalo e carga por fila com clareza.",
    fullContent:
      "Contexto\nCoordenacao precisando entender volume, produtividade e pontos de atraso sem depender de planilha paralela.\n\nImpacto\nMais clareza para decidir escala, prioridade e distribuicao de carga.\n\nDestaques\nAnalises, filtros por equipe e briefing automatico.",
  },
];

function renderStructuredContent(content: string) {
  const sections = content.split("\n\n");
  const structured: { label: string; text: string }[] = [];

  for (let i = 0; i < sections.length; i++) {
    const section = sections[i]?.trim();
    if (!section) continue;

    const lines = section.split("\n");
    const firstLine = lines[0]?.trim();

    if (!firstLine) continue;

    if (
      firstLine.length < 30 &&
      /^[A-Z][a-z\s]+$/.test(firstLine) &&
      lines.length > 1
    ) {
      structured.push({
        label: firstLine,
        text: lines.slice(1).join("\n").trim(),
      });
    } else {
      if (structured.length > 0) {
        const lastSection = structured[structured.length - 1];
        if (lastSection) {
          lastSection.text = `${lastSection.text}\n\n${section}`;
        }
      } else {
        structured.push({ label: "", text: section });
      }
    }
  }

  return (
    <div className="flex flex-col gap-6">
      {structured.map((section) => (
        <div
          key={section.label || section.text.slice(0, 20)}
          className="flex flex-col gap-2"
        >
          {section.label && (
            <p className="font-sans text-sm font-medium text-foreground">
              {section.label}
            </p>
          )}
          <p className="font-sans text-sm text-muted-foreground leading-relaxed">
            {section.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-background pt-32 pb-24">
        <div className="max-w-[1400px] mx-auto mb-16 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">
              Casos de uso
            </h1>
            <p className="font-sans text-base text-muted-foreground leading-normal mb-8">
              Veja como equipes de radiologia usam Laudos.AI para laudo,
              contexto e comunicacao critica.
            </p>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto">
          <div className="h-px w-full border-t border-border" />
        </div>
      </div>

      {/* Testimonials List */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 pb-12 sm:pb-16 lg:pb-24">
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {allTestimonials.map((testimonial, index) => (
            <div
              key={`testimonial-${testimonial.name}-${index}`}
              className={
                index === 0
                  ? ""
                  : "border-t border-border pt-12 sm:pt-16 lg:pt-20"
              }
            >
              <div className="max-w-3xl mx-auto space-y-8 sm:space-y-10">
                {/* Quote Section */}
                <div className="space-y-6">
                  {/* Author Info */}
                  <div className="flex items-center gap-3">
                    {testimonial.image && (
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                        style={{ filter: "grayscale(100%)" }}
                      />
                    )}
                    <div className="flex flex-col gap-1">
                      <h2 className="font-sans text-base sm:text-lg font-medium text-foreground">
                        {testimonial.name}
                      </h2>
                      <p className="font-sans text-sm text-muted-foreground">
                        {testimonial.company}
                        {testimonial.country && (
                          <span className="text-muted-foreground/70">
                            {" "}
                            · {testimonial.country}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Big Quote */}
                  <blockquote className="font-sans text-lg sm:text-xl lg:text-2xl text-foreground leading-normal sm:leading-relaxed">
                    &quot;{testimonial.content}&quot;
                  </blockquote>
                </div>

                {/* Divider */}
                <div className="h-px w-full border-t border-border" />

                {/* Full Content */}
                <div className="space-y-6">
                  {renderStructuredContent(testimonial.fullContent)}
                </div>

                {/* Video if available */}
                {testimonial.video && (
                  <div className="w-full overflow-hidden bg-muted border border-border">
                    <video
                      className="w-full h-auto"
                      controls
                      playsInline
                      preload="metadata"
                      poster={testimonial.videoPoster}
                      style={{ filter: "grayscale(100%)" }}
                    >
                      <source src={testimonial.video} />
                      <track kind="captions" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
