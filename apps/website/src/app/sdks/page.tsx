import { PublicFeaturePage } from "@/components/public-feature-page";
import { featurePages } from "@/content/feature-pages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "API, SDKs e integrações técnicas",
  description:
    "A camada técnica da Laudos.AI permite integrações, conectores, automações e copilotos em cima do workflow radiológico.",
  path: "/sdks",
  og: {
    title: "API e SDKs",
    description: "Integração técnica com o workflow radiológico da Laudos.AI.",
  },
});

export default function Page() {
  return <PublicFeaturePage content={featurePages.mcp} />;
}
