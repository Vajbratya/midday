import { Chat } from "@/components/chat";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "CRIT em WhatsApp, Slack, Telegram e iMessage",
  description:
    "Comunique achados críticos pelos canais que a equipe já usa, com confirmação de ciência, histórico e trilha auditável.",
  path: "/chat",
  og: {
    title: "CRIT",
    description: "Comunique o crítico com prova jurídica e rastreabilidade.",
  },
  keywords: [
    "crit radiologia",
    "comunicação crítica",
    "whatsapp radiologia",
    "sla achados críticos",
    "telegram plantão",
    "slack radiologia",
  ],
});

export default function Page() {
  return <Chat />;
}
