import { HomePage } from "@/components/home-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Laudos.AI — Laudos radiológicos com IA e voz",
  description:
    "Pare de ditar pontuação. Fale como você pensa e receba o laudo estruturado com IA assistiva, editor completo e integração PACS/RIS.",
  path: "/",
  og: {
    title: "Laudos.AI",
    description: "Fale como você pensa. Receba o laudo estruturado.",
  },
});

export default function Page() {
  return <HomePage />;
}
