import { Assistant } from "@/components/assistant";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Copilot para Radiologia",
  description:
    "Use linguagem natural para gerar laudos, recuperar contexto, revisar casos e acionar o fluxo clinico sem trocar de tela.",
  path: "/assistant",
  og: {
    title: "Copilot",
    description: "Uma conversa para tocar o fluxo inteiro",
  },
  keywords: [
    "copilot radiologia",
    "ia para laudo",
    "assistente clinico",
    "contexto radiologico",
    "workflow de radiologia",
    "copilot medico",
    "ia para radiologistas",
  ],
});

export default function Page() {
  return <Assistant />;
}
