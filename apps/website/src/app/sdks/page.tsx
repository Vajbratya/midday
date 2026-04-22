import { SDKs } from "@/components/sdks";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "SDKs",
  description:
    "SDKs tipados para integrar casos, laudos, CRIT e contexto operacional da Laudos.AI nas suas aplicacoes.",
  path: "/sdks",
  og: {
    title: "SDKs",
    description: "Client libraries tipadas para a API da Laudos.AI",
  },
});

export default function Page() {
  return <SDKs />;
}
