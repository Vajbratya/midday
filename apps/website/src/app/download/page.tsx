import { Download } from "@/components/download";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Laudos.AI para Mac",
  description:
    "Baixe o app da Laudos.AI para Mac e acesse casos, laudos, anexos e contexto clinico com um atalho global.",
  path: "/download",
  og: {
    title: "Laudos.AI para Mac",
    description: "Seu contexto clinico, a um atalho de distancia",
  },
});

export default function Page() {
  return <Download />;
}
