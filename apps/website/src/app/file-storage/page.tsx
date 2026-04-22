import { FileStorage } from "@/components/file-storage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Arquivos e Contexto Clinico",
  description:
    "Centralize anexos, pedidos, PDFs e documentos de apoio ligados ao caso certo.",
  path: "/file-storage",
  og: {
    title: "Arquivos",
    description: "Tudo conectado ao contexto certo",
  },
  keywords: [
    "arquivos radiologia",
    "anexos clinicos",
    "documentos do caso",
    "contexto clinico",
    "gestao de anexos",
  ],
});

export default function Page() {
  return <FileStorage />;
}
