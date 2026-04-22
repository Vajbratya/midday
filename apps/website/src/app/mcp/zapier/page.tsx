import { PublicFeaturePage } from "@/components/public-feature-page";
import { featurePages } from "@/content/feature-pages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Zapier + Laudos.AI",
  description:
    "Use a API e os conectores da Laudos.AI para automatizar partes da operação sem desmontar o fluxo clínico.",
  path: "/mcp/zapier",
  og: {
    title: "Zapier + Laudos.AI",
    description: "Automações conectadas ao workflow radiológico.",
  },
});

export default function Page() {
  return <PublicFeaturePage content={featurePages.mcp} />;
}
