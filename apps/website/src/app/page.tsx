import { StartPage } from "@/components/startpage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "sagittal.health by laudosai — Laudos radiológicos com IA e voz",
  description:
    "Pare de ditar pontuação. Fale como você pensa e receba o laudo estruturado com IA assistiva, editor completo e integração PACS/RIS.",
  path: "/",
  og: {
    title: "sagittal.health",
    description: "Fale como você pensa. Receba o laudo estruturado.",
  },
});

export default function Page() {
  return <StartPage />;
}
