"use client";

import { Button } from "@midday/ui/button";
import Link from "next/link";

const sections = [
  {
    title: "A imagem é só o começo",
    body: [
      "A tomografia, a ressonância e o RX entregam a imagem. O trabalho pesado começa depois: decisão clínica, digitação, comunicação e responsabilidade jurídica.",
      "Durante décadas, quase ninguém construiu software para essa parte do trabalho. A Laudos.AI foi criada exatamente para esse ponto do fluxo.",
    ],
  },
  {
    title: "O sistema não falha por falta de médicos",
    body: [
      "Falha por falta de ferramentas. Radiologistas passam grande parte do tempo digitando em sistemas feitos para outra década.",
      "Quando surge um achado crítico, a comunicação ainda acontece por telefone ou mensagens sem rastreabilidade, sem prova e sem proteção jurídica.",
    ],
  },
  {
    title: "Um sistema para o que realmente importa",
    body: [
      "Três módulos integrados na mesma infraestrutura: Copilot para redação, LaudAI Search para apoio contextual e CRIT para comunicação de achados críticos.",
      "Não é IA para substituir médicos. É IA para tirar peso das costas deles e devolver tempo ao raciocínio clínico.",
    ],
  },
];

const founders = [
  {
    name: "Natan",
    role: "Co-Founder, CEO/CTO",
    detail: "Radiologista, INRAD HCFMUSP",
  },
  {
    name: "Raquel Moreno",
    role: "Co-Founder, AI Lead",
    detail: "Neurorradiologista, ICESP",
  },
  {
    name: "Francisco Akira",
    role: "Co-Founder, Clinical Lead",
    detail: "Cardiologista, INCOR HCFMUSP",
  },
];

export function AboutPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-5 mb-16">
          <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
            Sobre Laudos.AI
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl text-foreground leading-tight">
            Para tudo o que vem depois da imagem.
          </h1>
          <p className="font-sans text-base text-muted-foreground leading-relaxed">
            A Laudos.AI constrói software para o momento mais crítico da
            radiologia: quando a imagem precisa virar decisão, laudo e
            comunicação segura.
          </p>
        </div>

        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.title} className="border border-border p-6 lg:p-8">
              <h2 className="font-serif text-2xl text-foreground mb-4">
                {section.title}
              </h2>
              <div className="space-y-4">
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

        <section className="mt-12 border border-border p-6 lg:p-8">
          <h2 className="font-serif text-2xl text-foreground mb-6">
            Construído por quem lauda
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {founders.map((founder) => (
              <div key={founder.name} className="border border-border p-5">
                <p className="font-sans text-base text-foreground">{founder.name}</p>
                <p className="font-sans text-sm text-muted-foreground mt-2">
                  {founder.role}
                </p>
                <p className="font-sans text-sm text-muted-foreground mt-1">
                  {founder.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12 text-center">
          <Button asChild className="btn-inverse h-11 px-6">
            <a href="https://copilot.laudos.ai">Conhecer o produto</a>
          </Button>
          <div className="mt-4">
            <Link
              href="/pricing"
              className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
            >
              Ver planos e implantação
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
