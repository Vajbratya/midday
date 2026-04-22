import { PublicFeaturePage } from "@/components/public-feature-page";
import { featurePages } from "@/content/feature-pages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Manus + Laudos.AI",
  description:
    "Automatize fluxos e agentes com contexto institucional e técnico da Laudos.AI.",
  path: "/mcp/manus",
  og: {
    title: "Manus + Laudos.AI",
    description: "Automação e operação radiológica em cima da mesma infraestrutura.",
  },
});

export default function Page() {
  return <PublicFeaturePage content={featurePages.mcp} />;
}
