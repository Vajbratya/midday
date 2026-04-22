import { PublicFeaturePage } from "@/components/public-feature-page";
import { featurePages } from "@/content/feature-pages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Instituicoes, equipes e governanca",
  description:
    "Padronize templates, perfis de acesso e governanca operacional para equipes, clinicas e hospitais no mesmo produto.",
  path: "/customers",
  og: {
    title: "Instituicoes",
    description: "Perfis, auditoria e padrao institucional em uma plataforma.",
  },
});

export default function Page() {
  return <PublicFeaturePage content={featurePages.customers} />;
}
