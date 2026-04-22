import { PublicFeaturePage } from "@/components/public-feature-page";
import { featurePages } from "@/content/feature-pages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Gemini + Laudos.AI via MCP",
  description:
    "Use agentes e conectores com contexto operacional da Laudos.AI em cenários técnicos e institucionais.",
  path: "/mcp/gemini",
  og: {
    title: "Gemini + Laudos.AI",
    description: "MCP para agentes e copilotos conectados ao fluxo radiológico.",
  },
});

export default function Page() {
  return <PublicFeaturePage content={featurePages.mcp} />;
}
