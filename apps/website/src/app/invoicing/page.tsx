import { Invoicing } from "@/components/invoicing";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Editor Estruturado para Laudos",
  description:
    "Redija, revise e padronize laudos com templates, blocos e contexto clinico no mesmo editor.",
  path: "/invoicing",
  og: {
    title: "Editor",
    description: "Laudos estruturados, sem atrito",
  },
  keywords: [
    "editor de laudo",
    "template radiologia",
    "padronizacao de laudos",
    "ia para laudo",
    "editor medico",
  ],
});

export default function Page() {
  return <Invoicing />;
}
