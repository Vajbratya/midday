import { PublicFeaturePage } from "@/components/public-feature-page";
import { featurePages } from "@/content/feature-pages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Integração PACS/RIS e API",
  description:
    "Integre a Laudos.AI a PACS, RIS e sistemas internos para reduzir retrabalho e encaixar o produto na infraestrutura que sua operação já usa.",
  path: "/pre-accounting",
  og: {
    title: "Integrações clínicas",
    description: "PACS, RIS, API e implantação enterprise sem retrabalho.",
  },
  keywords: [
    "pacs ris",
    "integração radiologia",
    "api laudos",
    "enterprise radiologia",
  ],
});

export default function Page() {
  return <PublicFeaturePage content={featurePages["pre-accounting"]} />;
}
