import { BankCoverage } from "@/components/bank-coverage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Cobertura de modalidades e implantação",
  description:
    "Veja como a Laudos.AI cobre modalidades radiológicas e cenários de implantação para clínicas, grupos e hospitais.",
  path: "/bank-coverage",
  og: {
    title: "Cobertura de modalidades",
    description: "TC, RM, RX, USG, Doppler, mamografia e implantação institucional.",
  },
});

export default function CoveragePage() {
  return <BankCoverage />;
}
