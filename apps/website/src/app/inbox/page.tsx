import { Inbox } from "@/components/inbox";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "CRIT para comunicação de achados críticos",
  description:
    "Comunique achados críticos com SLA, confirmação de ciência, trilha de auditoria e rastreabilidade institucional.",
  path: "/inbox",
  og: {
    title: "CRIT",
    description: "Achados críticos com prova jurídica e rastreabilidade.",
  },
  keywords: [
    "crit radiologia",
    "achados críticos",
    "comunicação crítica",
    "sla radiologia",
    "auditoria médica",
  ],
});

export default function Page() {
  return <Inbox />;
}
