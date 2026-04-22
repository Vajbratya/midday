import { IntegrationsGrid } from "@/components/integrations-grid";
import { apps } from "@/data/apps";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Integracoes da Laudos.AI",
  description:
    "Explore integracoes com PACS/RIS, canais de comunicacao, armazenamento, API e MCP para levar a Laudos.AI ao seu fluxo real.",
  path: "/integrations",
  og: {
    title: "Integracoes",
    description: "PACS, RIS, API, MCP, chat e storage no mesmo ecossistema.",
  },
});

export default function Page() {
  return <IntegrationsGrid apps={apps} activeCategory="all" />;
}
