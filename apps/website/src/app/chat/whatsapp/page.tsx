import { Icons } from "@midday/ui/icons";
import { ChatPlatformPage } from "@/components/chat-platform-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "CRIT no WhatsApp",
  description:
    "Receba achados criticos, confirme ciencia e acompanhe escalonamentos do CRIT sem sair do WhatsApp.",
  path: "/chat/whatsapp",
  og: {
    title: "CRIT no WhatsApp",
    description: "Comunicacao critica no WhatsApp",
  },
  keywords: [
    "whatsapp crit",
    "achado critico",
    "radiologia whatsapp",
    "comunicacao critica",
    "sla radiologia",
  ],
});

const config = {
  name: "WhatsApp",
  slug: "whatsapp",
  appId: "whatsapp",
  icon: <Icons.WhatsApp size={40} className="h-10 w-10 text-[#25D366]" />,
  description:
    "Conecte o CRIT da Laudos.AI ao WhatsApp e acompanhe comunicacoes criticas no canal mais usado pela equipe no dia a dia.",
  steps: [
    {
      title: "Abrir Apps na Laudos.AI",
      description: "Entre em Apps e escolha WhatsApp.",
      href: "https://copilot.laudos.ai",
    },
    {
      title: "Conectar o canal",
      description:
        "Escaneie o QR code ou use o link de conexao para vincular o canal.",
    },
    {
      title: "Enviar a primeira mensagem",
      description:
        'Experimente responder "ciente" em um alerta ou pedir o historico do caso.',
    },
  ],
  notifications: [
    "Novo achado critico com SLA",
    "Leitura e confirmacao de ciencia",
    "Escalonamentos pendentes",
    "Mudanca de status do caso",
  ],
  capabilities: [
    "Receber alertas criticos no canal",
    "Confirmar ciencia com rastreabilidade",
    "Consultar historico e contexto do caso",
    "Compartilhar observacoes e anexos",
    "Acompanhar status em tempo real",
  ],
  settingsPath: "Apps \u2192 WhatsApp \u2192 Configuracoes",
};

export default function Page() {
  return <ChatPlatformPage config={config} />;
}
