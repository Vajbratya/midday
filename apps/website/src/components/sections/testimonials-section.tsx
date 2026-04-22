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
    name: "Natan",
    title: "Co-Founder, CEO/CTO",
    company: "INRAD HCFMUSP",
    country: "Brasil",
    content:
      "Construímos software para o momento mais crítico da radiologia: quando a imagem precisa virar decisão, laudo e comunicação segura.",
    fullContent:
      "Contexto\nA imagem é só o começo. Depois vêm decisão clínica, digitação, risco de erro e responsabilidade jurídica.\n\nO que estamos resolvendo\nA Laudos.AI fecha esse espaço com Copilot, editor, integrações e CRIT na mesma infraestrutura.",
  },
  {
    name: "Raquel Moreno",
    title: "Co-Founder, AI Lead",
    company: "ICESP",
    country: "Brasil",
    content:
      "Não é IA para substituir médicos. É IA para tirar peso das costas deles e devolver tempo ao raciocínio clínico.",
    fullContent:
      "Contexto\nDurante décadas, quase ninguém construiu software para a parte mais pesada do trabalho do radiologista.\n\nO que estamos resolvendo\nAplicamos IA onde ela gera ganho real: redação, estrutura, padronização e suporte ao fluxo.",
  },
  {
    name: "Francisco Akira",
    title: "Co-Founder, Clinical Lead",
    company: "INCOR HCFMUSP",
    country: "Brasil",
    content:
      "Quando surge um achado crítico, a comunicação não pode depender de improviso. Precisa existir fluxo, prova e rastreabilidade.",
    fullContent:
      "Contexto\nWhatsApp, ligações e prints não escalam em operações sensíveis.\n\nO que estamos resolvendo\nO CRIT registra ciência, fecha o ciclo e entrega auditoria completa com SLA documentado.",
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
  title = "Construído por quem lauda",
  subtitle = "Três médicos construindo o sistema que queriam ter nos seus plantões.",
}: TestimonialsSectionProps) {
  return (
    <section className="bg-background py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-serif text-2xl sm:text-2xl text-foreground">
            {title}
          </h2>
          <p className="font-sans text-base text-muted-foreground leading-normal max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="border border-border bg-background p-6 lg:p-7"
            >
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
                  <p className="font-sans text-xs text-muted-foreground">
                    {testimonial.title}
                  </p>
                </div>
              </div>
              <blockquote className="font-sans text-base text-foreground leading-relaxed mb-5">
                "{testimonial.content}"
              </blockquote>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>{testimonial.company}</p>
                <p>{testimonial.fullContent}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/about"
            className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            Conhecer a historia da Laudos.AI
            Conhecer a história da Laudos.AI
          </Link>
        </div>
      </div>
    </section>
  );
}
