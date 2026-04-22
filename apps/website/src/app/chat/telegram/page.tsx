import { Icons } from "@midday/ui/icons";
import { ChatPlatformPage } from "@/components/chat-platform-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "CRIT no Telegram",
  description:
    "Receba achados criticos, confirme ciencia e acompanhe escalonamentos do CRIT sem sair do Telegram.",
  path: "/chat/telegram",
  og: {
    title: "CRIT no Telegram",
    description: "Comunicacao critica no Telegram",
  },
  keywords: [
    "telegram crit",
    "achado critico",
    "radiologia telegram",
    "comunicacao critica",
    "sla radiologia",
  ],
});

const config = {
  name: "Telegram",
  slug: "telegram",
  appId: "telegram",
  icon: <Icons.Telegram size={40} className="h-10 w-10" />,
  description:
    "Conecte o CRIT da Laudos.AI ao Telegram e acompanhe comunicacoes criticas no canal que a equipe ja usa no plantao.",
  steps: [
    {
      title: "Abrir Apps na Laudos.AI",
      description: "Entre em Apps e escolha Telegram.",
      href: "https://copilot.laudos.ai",
    },
    {
      title: "Conectar o canal",
      description:
        "Abra o bot, envie o codigo de conexao e autorize o canal para a sua equipe.",
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
  settingsPath: "Apps \u2192 Telegram \u2192 Configuracoes",
};

export default function Page() {
  return <ChatPlatformPage config={config} />;
}
