import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TimeSavingsSection } from "@/components/sections/time-savings-section";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contexto, fundadores e visao do produto",
  description:
    "Conheca a visao por tras da Laudos.AI, construida por medicos para reduzir digitacao, busca manual e improviso na comunicacao critica.",
  path: "/testimonials",
  og: {
    title: "Visao e contexto",
    description: "Construido por quem lauda.",
  },
  keywords: [
    "fundadores laudos",
    "visao radiologia",
    "produto radiologico",
  ],
});

export default function Page() {
  return (
    <div className="min-h-screen pt-28">
      <div className="max-w-3xl mx-auto px-4 text-center mb-12">
        <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-4">
          Visao do produto
        </p>
        <h1 className="font-serif text-4xl lg:text-5xl text-foreground mb-4">
          Nao e IA para substituir medicos.
          <br />
          E IA para tirar peso das costas deles.
        </h1>
        <p className="font-sans text-base text-muted-foreground leading-relaxed">
          A Laudos.AI nasceu para reduzir digitacao repetitiva, busca manual e
          comunicacao sem sistema dentro da rotina radiologica.
        </p>
      </div>
      <TestimonialsSection />
      <TimeSavingsSection />
    </div>
  );
}
