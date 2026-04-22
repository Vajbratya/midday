import { PublicFeaturePage } from "@/components/public-feature-page";
import { featurePages } from "@/content/feature-pages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Automações para operação radiológica",
  description:
    "A mesma infraestrutura que organiza laudos e comunicação crítica pode sustentar rotinas, auditorias e automações para operações radiológicas mais previsíveis.",
  path: "/computer",
  og: {
    title: "Automações",
    description: "Rotinas e auditorias para a operação radiológica.",
  },
  keywords: [
    "automação radiologia",
    "agentes clinicos",
    "workflow enterprise",
    "operação radiológica",
  ],
});

export default function Page() {
  return <PublicFeaturePage content={featurePages.computer} />;
}
