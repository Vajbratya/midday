"use client";

import Image from "next/image";
import Link from "next/link";

export interface Testimonial {
  name: string;
  title: string;
  company: string;
  country: string;
  content: string;
  fullContent: string;
  image?: string;
  video?: string;
  videoPoster?: string;
}

const founders: Testimonial[] = [
  {
    name: "Neurorradiologista",
    title: "Hospital terciário",
    company: "São Paulo",
    country: "Brasil",
    content:
      "O sagittal.health tirou horas do meu dia de laudo e ainda resolveu a parte que mais falhava: o pós-laudo com CRIT e rastreabilidade.",
    fullContent:
      "Contexto\nOperação com alto volume e necessidade de resposta rápida.\n\nImpacto\nMenos retrabalho na redação e comunicação crítica com prova de envio, leitura e ciência.",
  },
  {
    name: "Coordenação de radiologia",
    title: "Grupo multiunidade",
    company: "Sudeste",
    country: "Brasil",
    content:
      "Antes cada unidade trabalhava de um jeito. Hoje templates, fluxo e confirmação de achado crítico seguem o mesmo padrão.",
    fullContent:
      "Contexto\nEquipe distribuída entre unidades e plantões, com necessidade de padrão único.\n\nImpacto\nPadronização de laudos, governança por instituição e menos ruído operacional.",
  },
  {
    name: "Radiologista de plantão",
    title: "Operação de urgência",
    company: "Brasil",
    country: "Brasil",
    content:
      "O ganho não está só em escrever mais rápido. Está em encontrar contexto, fechar o caso e não perder o crítico no caminho.",
    fullContent:
      "Contexto\nPlantão com necessidade de resposta imediata e histórico acessível.\n\nImpacto\nMenos troca de tela, mais clareza do caso e SLA mais controlado.",
  },
  {
    name: "Gestão operacional",
    title: "Clínica especializada",
    company: "Brasil",
    country: "Brasil",
    content:
      "Hoje a equipe enxerga volume, uso, gargalo e risco sem depender de planilha paralela nem de auditoria improvisada.",
    fullContent:
      "Contexto\nCoordenação precisando acompanhar produção, limite de plano, achados críticos e velocidade por fila.\n\nImpacto\nMais clareza para redistribuir carga, justificar escala e agir antes do atraso virar problema.",
  },
];

export const defaultTestimonials = founders;

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
  title?: string;
  subtitle?: string;
}

export function TestimonialsSection({
  testimonials = founders,
  title = "Construído ao lado de quem lauda",
  subtitle = "Cada detalhe do sagittal.health nasce do fluxo real de radiologistas, coordenações e operações de alta demanda.",
}: TestimonialsSectionProps) {
  return (
    <section className="bg-background py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center space-y-4 mb-10 sm:mb-12">
          <h2 className="font-serif text-2xl sm:text-2xl text-foreground">
            {title}
          </h2>
          <p className="font-sans text-base text-muted-foreground leading-normal max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="flex items-center justify-center gap-1 pt-1 text-muted-foreground/70">
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index} className="text-sm">
                ★
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="border border-border bg-background p-6 lg:p-7"
            >
              <p className="mb-5 font-sans text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {testimonial.country}
              </p>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-secondary overflow-hidden flex items-center justify-center">
                  {testimonial.image ? (
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="font-sans text-sm text-foreground">
                      {testimonial.name.charAt(0)}
                    </span>
                  )}
                </div>
                <div>
                  <p className="font-sans text-sm text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                    {testimonial.title}
                    <br />
                    {testimonial.company}
                  </p>
                </div>
              </div>
              <blockquote className="font-sans text-base text-foreground leading-relaxed">
                "{testimonial.content}"
              </blockquote>
            </article>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/about"
            className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            Ver todos os casos
          </Link>
        </div>
      </div>
    </section>
  );
}
