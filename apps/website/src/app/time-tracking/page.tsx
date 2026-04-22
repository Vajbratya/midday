import { PublicFeaturePage } from "@/components/public-feature-page";
import { featurePages } from "@/content/feature-pages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Ditado por voz natural para laudos",
  description:
    "Dite os achados como faz normalmente. A IA organiza técnica, achados e impressão em um laudo estruturado pronto para revisar.",
  path: "/time-tracking",
  og: {
    title: "Voz natural",
    description: "Pare de ditar pontuação. Comece a laudar de verdade.",
  },
  keywords: [
    "ditado médico",
    "voz radiologia",
    "laudo por voz",
    "transcrição radiológica",
  ],
});

export default function Page() {
  return <PublicFeaturePage content={featurePages["time-tracking"]} />;
}
