import { Button } from "@midday/ui/button";
import type { Metadata } from "next";
import Link from "next/link";
import { baseUrl } from "@/app/sitemap";
import { competitors } from "@/data/competitors";

const year = new Date().getFullYear();
const title = `Compare a Laudos.AI com alternativas do fluxo radiológico (${year})`;
const description =
  "Compare a Laudos.AI com ditado tradicional, IA genérica, templates manuais e fluxos críticos improvisados. Voz natural, editor estruturado e operação radiológica completa.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "comparar laudos ai",
    "ditado radiologia",
    "ia genérica radiologia",
    "templates manuais radiologia",
    "achados críticos whatsapp",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    url: `${baseUrl}/compare`,
    images: [
      {
        url: `${baseUrl}/api/og/compare`,
        width: 1200,
        height: 630,
        alt: "Compare a Laudos.AI com alternativas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${baseUrl}/api/og/compare`],
  },
  alternates: {
    canonical: `${baseUrl}/compare`,
  },
};

export default function ComparePage() {
  return (
    <div className="min-h-screen pt-24 sm:pt-28 lg:pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">
            Compare a Laudos.AI com as alternativas reais do fluxo radiológico
          </h1>
          <p className="font-sans text-base text-muted-foreground max-w-2xl mx-auto">
            Compare voz natural, IA aplicada ao laudo, templates institucionais
            e CRIT com as abordagens que ainda dominam grande parte da rotina:
            ditado antigo, IA genérica, copiar e colar e comunicação sem
            rastreabilidade.
          </p>
        </div>

        {/* Competitors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {competitors.map((competitor) => (
            <Link
              key={competitor.id}
              href={`/compare/${competitor.slug}`}
              className="border border-border p-6 hover:border-foreground/20 transition-all duration-200"
            >
              <h2 className="font-sans text-lg text-foreground mb-2">
                Laudos.AI vs {competitor.name}
              </h2>
              <p className="font-sans text-sm text-muted-foreground mb-4 line-clamp-2">
                {competitor.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {competitor.keyDifferences.slice(0, 2).map((diff) => (
                  <span
                    key={diff.title}
                    className="font-sans text-xs text-muted-foreground bg-muted px-2 py-1"
                  >
                    {diff.midday}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-background border border-border p-8 lg:p-12 text-center relative before:absolute before:inset-0 before:bg-[repeating-linear-gradient(-60deg,rgba(219,219,219,0.4),rgba(219,219,219,0.4)_1px,transparent_1px,transparent_6px)] dark:before:bg-[repeating-linear-gradient(-60deg,rgba(44,44,44,0.4),rgba(44,44,44,0.4)_1px,transparent_1px,transparent_6px)] before:pointer-events-none">
          <div className="relative z-10">
            <h2 className="font-serif text-2xl text-foreground mb-4">
              Pronto para ver a diferença no plantão?
            </h2>
            <p className="font-sans text-base text-muted-foreground mb-6 max-w-xl mx-auto">
              Abra o editor, dite um exame e compare o fluxo na prática.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-inverse h-11 px-6">
                <a href="https://copilot.laudos.ai/">Testar grátis</a>
              </Button>
              <Button asChild variant="outline" className="h-11 px-6">
                <Link href="/pricing">Ver planos</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
