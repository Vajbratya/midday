"use client";

import Link from "next/link";

const painPoints = [
  {
    label: "Ditado tradicional",
    time: "2 a 3 min por laudo",
    description:
      "Pontuação, estrutura e ajustes manuais roubam atenção da parte clínica.",
  },
  {
    label: "Busca manual",
    time: "30 a 45 min por plantão",
    description:
      "Pesquisar padrões, frases e referências fora do editor quebra o raciocínio.",
  },
  {
    label: "Comunicação crítica improvisada",
    time: "Risco constante",
    description:
      "WhatsApp, ligações e prints geram ruído, atraso e ausência de prova jurídica.",
  },
];

export function TimeSavingsSection() {
  return (
    <section className="bg-background py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-serif text-2xl sm:text-2xl text-foreground">
            Menos digitação. Mais raciocínio clínico.
          </h2>
          <p className="hidden sm:block font-sans text-base text-muted-foreground leading-normal max-w-2xl mx-auto">
            A Laudos.AI foi desenhada para devolver tempo no plantão e reduzir o
            custo operacional do que vem depois da imagem.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-4">
          {painPoints.map((item) => (
            <article
              key={item.label}
              className="border border-border bg-background p-5"
            >
              <p className="text-xs tracking-wide text-muted-foreground">
                {item.label}
              </p>
              <h3 className="mt-1 text-base sm:text-lg text-foreground">
                {item.time}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <Link
          href="/assistant"
          className="block border border-border bg-secondary p-6 lg:p-8 hover:border-foreground/20 transition-colors"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs tracking-wide text-muted-foreground">
                Impacto médio observado
              </p>
              <h3 className="mt-1 text-xl lg:text-2xl font-serif text-foreground">
                5 a 6 minutos economizados por laudo. Até 60% de redução no
                tempo total.
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Para um plantonista que faz 50 laudos por dia, isso representa
                cerca de 3 horas devolvidas para descansar, estudar ou
                simplesmente viver.
              </p>
            </div>
            <div className="text-4xl lg:text-6xl text-foreground">+3h</div>
          </div>
        </Link>
      </div>
    </section>
  );
}
