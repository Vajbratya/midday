import { Customers } from "@/components/customers";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Instituicoes, Equipes e Governanca",
  description:
    "Organize hospitais, clinicas, equipes e permissoes com visao clara por instituicao.",
  path: "/customers",
  og: {
    title: "Instituicoes",
    description: "Times, unidades e contexto em um so lugar",
  },
});

export default function Page() {
  return <Customers />;
}
