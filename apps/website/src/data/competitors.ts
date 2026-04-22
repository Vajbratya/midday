export interface FAQItem {
  question: string;
  answer: string;
}

export interface FeatureComparison {
  category: string;
  features: {
    name: string;
    midday: boolean | string;
    competitor: boolean | string;
  }[];
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  features: string[];
}

export interface Competitor {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  keyDifferences: {
    title: string;
    midday: string;
    competitor: string;
  }[];
  features: FeatureComparison[];
  pricing: {
    midday: PricingTier[];
    competitor: PricingTier[];
    competitorNote?: string;
  };
  switchingSteps: {
    title: string;
    description: string;
  }[];
  faq: FAQItem[];
  targetAudience: string[];
}

export const middayDifferentiators = [
  {
    title: "Voz natural",
    description: "Dite como pensa, sem falar pontuação",
  },
  {
    title: "IA aplicada ao laudo",
    description: "Estrutura, complementa e refina o texto",
  },
  {
    title: "Fluxo radiológico",
    description: "Copilot, editor, templates e CRIT",
  },
  {
    title: "Escala institucional",
    description: "PACS/RIS, SSO, auditoria e governança",
  },
];

export const middayPricing: PricingTier[] = [
  {
    name: "RadRes+",
    price: "R$49",
    period: "/mês",
    features: [
      "350 laudos por mês",
      "7 dias grátis",
      "IA generativa com diretrizes",
    ],
  },
  {
    name: "PRO",
    price: "R$219",
    period: "/mês",
    features: [
      "Até 2.000 laudos por mês",
      "Edição inteligente e completions",
      "Estruturação automática",
      "Fluxo completo de laudo",
    ],
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    period: "",
    features: [
      "Laudos ilimitados",
      "CRIT com SLA e auditoria",
      "Integrações PACS/RIS",
      "SSO/SAML e onboarding",
    ],
  },
];

export const competitors: Competitor[] = [
  {
    id: "traditional-dictation",
    slug: "ditado-tradicional",
    name: "Ditado Tradicional",
    tagline: "Por que equipes trocam o ditado antigo pela Laudos.AI",
    description:
      "Comparando com ditado tradicional, a Laudos.AI elimina pontuação manual, estrutura o texto automaticamente e reduz tempo por laudo sem tirar o médico do controle.",
    keyDifferences: [
      {
        title: "Entrada por voz",
        midday: "Voz natural sem ditar pontuação",
        competitor: "Fala adaptada ao software",
      },
      {
        title: "Saída",
        midday: "Laudo estruturado pronto para revisar",
        competitor: "Texto bruto com pós-edição",
      },
      {
        title: "Consistência",
        midday: "Diretrizes e padronização",
        competitor: "Depende do esforço individual",
      },
      {
        title: "Velocidade",
        midday: "5 a 6 min economizados por laudo",
        competitor: "Gargalo continua na digitação",
      },
    ],
    features: [
      {
        category: "Fluxo",
        features: [
          { name: "Voz natural", midday: true, competitor: false },
          { name: "Estruturação automática", midday: true, competitor: false },
          { name: "Editor integrado", midday: true, competitor: "Parcial" },
          { name: "Templates institucionais", midday: true, competitor: false },
        ],
      },
      {
        category: "Operação",
        features: [
          { name: "Padronização de linguagem", midday: true, competitor: false },
          { name: "Auditoria", midday: true, competitor: false },
          { name: "CRIT para achados críticos", midday: true, competitor: false },
        ],
      },
    ],
    pricing: {
      midday: middayPricing,
      competitor: [
        {
          name: "Fluxo manual",
          price: "Horas perdidas",
          period: "",
          features: [
            "Pontuação manual",
            "Pós-edição extensa",
            "Sem governança institucional",
          ],
        },
      ],
      competitorNote: "O custo real aparece em tempo perdido e inconsistência",
    },
    switchingSteps: [
      {
        title: "Escolha um exame piloto",
        description:
          "Comece por uma modalidade de alto volume para sentir o ganho de tempo com voz natural.",
      },
      {
        title: "Suba seus templates",
        description:
          "Traga máscaras e descritores usados hoje para manter aderência ao padrão da equipe.",
      },
      {
        title: "Ajuste o vocabulário institucional",
        description:
          "Refine termos, frases descritoras e diretrizes para encaixar a plataforma no serviço.",
      },
      {
        title: "Expanda para a rotina",
        description:
          "Depois do piloto, avance modalidade por modalidade com a mesma lógica de fluxo.",
      },
    ],
    faq: [
      {
        question: "Perco controle do que estou laçando?",
        answer:
          "Não. A IA estrutura e acelera o texto, mas a decisão clínica e a assinatura continuam totalmente com o médico.",
      },
      {
        question: "Funciona melhor do que ditar pontuação?",
        answer:
          "Sim. O ganho está justamente em não precisar adaptar sua fala ao software. Você fala o achado; a plataforma organiza o laudo.",
      },
    ],
    targetAudience: [
      "Radiologistas cansados de ditar vírgula e ponto",
      "Serviços que querem reduzir tempo por laudo",
      "Equipes que precisam padronizar escrita sem travar o médico",
    ],
  },
  {
    id: "generic-ai",
    slug: "ia-generica",
    name: "IA Genérica",
    tagline: "Por que IA genérica não resolve o fluxo radiológico",
    description:
      "Ferramentas genéricas ajudam a reescrever texto, mas não entendem a estrutura do laudo, o contexto radiológico brasileiro nem a necessidade de fluxo institucional.",
    keyDifferences: [
      {
        title: "Treinamento",
        midday: "Focada em radiologia",
        competitor: "Uso geral",
      },
      {
        title: "Fluxo",
        midday: "Editor, templates e governança",
        competitor: "Prompt solto",
      },
      {
        title: "Risco",
        midday: "Padronização e controle",
        competitor: "Saída inconsistente",
      },
      {
        title: "Operação",
        midday: "Pronta para clínica e hospital",
        competitor: "Sem camada institucional",
      },
    ],
    features: [
      {
        category: "Assistência",
        features: [
          { name: "Estrutura de laudo", midday: true, competitor: "Manual" },
          { name: "Templates institucionais", midday: true, competitor: false },
          { name: "Diretrizes por modalidade", midday: true, competitor: false },
          { name: "Voz natural", midday: true, competitor: false },
        ],
      },
      {
        category: "Institucional",
        features: [
          { name: "SSO / SAML", midday: true, competitor: false },
          { name: "CRIT", midday: true, competitor: false },
          { name: "Auditoria", midday: true, competitor: false },
          { name: "Integração PACS/RIS", midday: true, competitor: false },
        ],
      },
    ],
    pricing: {
      midday: middayPricing,
      competitor: [
        {
          name: "Ferramenta genérica",
          price: "Variável",
          period: "",
          features: [
            "Prompt manual",
            "Sem fluxo clínico",
            "Sem padronização institucional",
          ],
        },
      ],
    },
    switchingSteps: [
      {
        title: "Mapeie onde a IA genérica falha hoje",
        description:
          "Identifique os pontos em que a saída fica inconsistente ou exige retrabalho clínico.",
      },
      {
        title: "Migrar para o editor da Laudos.AI",
        description:
          "Leve ditado, templates e refinamento para o mesmo produto, sem depender de prompt externo.",
      },
      {
        title: "Configurar padrões institucionais",
        description:
          "Defina máscaras e descritores para reduzir variabilidade entre médicos e unidades.",
      },
    ],
    faq: [
      {
        question: "Por que não usar um modelo genérico?",
        answer:
          "Porque o gargalo não é só gerar texto. É garantir estrutura, consistência, contexto radiológico e encaixe no fluxo real da operação.",
      },
      {
        question: "A Laudos.AI também usa IA?",
        answer:
          "Sim, mas aplicada ao laudo e à operação radiológica, não como uma caixa genérica de prompts.",
      },
    ],
    targetAudience: [
      "Equipes frustradas com prompts instáveis",
      "Serviços que precisam padronização institucional",
      "Operações que não podem depender de IA sem governança",
    ],
  },
  {
    id: "manual-templates",
    slug: "templates-manuais",
    name: "Templates Manuais",
    tagline: "Quando copiar e colar já não escala mais",
    description:
      "Templates ajudam no começo, mas sem IA assistiva, voz natural e contexto institucional viram só mais uma camada de retrabalho.",
    keyDifferences: [
      {
        title: "Uso de template",
        midday: "Template + IA + voz",
        competitor: "Texto fixo manual",
      },
      {
        title: "Ajuste ao contexto",
        midday: "Sugestões e refinamento em tempo real",
        competitor: "Edição toda na mão",
      },
      {
        title: "Padronização",
        midday: "Centralizada por equipe",
        competitor: "Arquivos espalhados",
      },
      {
        title: "Escala",
        midday: "Pronta para operação enterprise",
        competitor: "Dificulta governança",
      },
    ],
    features: [
      {
        category: "Template",
        features: [
          { name: "Máscaras institucionais", midday: true, competitor: "Parcial" },
          { name: "Frases descritoras", midday: true, competitor: "Parcial" },
          { name: "Autocomplete", midday: true, competitor: false },
          { name: "Edição assistida por IA", midday: true, competitor: false },
        ],
      },
    ],
    pricing: {
      midday: middayPricing,
      competitor: [
        {
          name: "Fluxo manual",
          price: "Custo oculto",
          period: "",
          features: [
            "Copiar e colar",
            "Versões desencontradas",
            "Sem trilha de auditoria",
          ],
        },
      ],
    },
    switchingSteps: [
      {
        title: "Reunir os modelos espalhados",
        description:
          "Mapeie as máscaras existentes e elimine variações redundantes.",
      },
      {
        title: "Publicar templates institucionais",
        description:
          "Centralize o padrão dentro da plataforma para toda a equipe.",
      },
      {
        title: "Acoplar voz e IA",
        description:
          "Deixe o template virar um acelerador real de produção, não só um bloco de texto.",
      },
    ],
    faq: [
      {
        question: "Template sozinho já não resolve?",
        answer:
          "Ajuda, mas continua exigindo digitação, edição manual e governança paralela. O ganho real aparece quando template, voz e IA trabalham juntos.",
      },
    ],
    targetAudience: [
      "Serviços com muitas versões de máscara",
      "Equipes que vivem de copiar e colar",
      "Operações que querem padronização sem perder velocidade",
    ],
  },
  {
    id: "critical-findings-whatsapp",
    slug: "whatsapp-criticos",
    name: "WhatsApp para Críticos",
    tagline: "Por que o fluxo crítico precisa sair do improviso",
    description:
      "WhatsApp pode ajudar na conversa, mas não substitui um fluxo de comunicação crítica com registro de ciência, SLA e prova jurídica.",
    keyDifferences: [
      {
        title: "Rastreabilidade",
        midday: "Registro completo de ciência",
        competitor: "Print e boa vontade",
      },
      {
        title: "Privacidade",
        midday: "Fluxo pensado para operação sensível",
        competitor: "Risco de exposição",
      },
      {
        title: "SLA",
        midday: "Mensurável e auditável",
        competitor: "Impossível provar",
      },
      {
        title: "Escala institucional",
        midday: "Fila, alerta e auditoria",
        competitor: "Grupo silenciado e improviso",
      },
    ],
    features: [
      {
        category: "Comunicação crítica",
        features: [
          { name: "Registro de ciência", midday: true, competitor: false },
          { name: "Escalação", midday: true, competitor: false },
          { name: "Auditoria", midday: true, competitor: false },
          { name: "Conformidade institucional", midday: true, competitor: false },
        ],
      },
    ],
    pricing: {
      midday: middayPricing,
      competitor: [
        {
          name: "Improviso",
          price: "Risco jurídico",
          period: "",
          features: [
            "Sem SLA",
            "Sem prova jurídica",
            "Sem rastreabilidade real",
          ],
        },
      ],
    },
    switchingSteps: [
      {
        title: "Mapear o fluxo crítico atual",
        description:
          "Entenda como o caso é comunicado hoje e onde a operação perde rastreabilidade.",
      },
      {
        title: "Definir regras e setores no CRIT",
        description:
          "Configure níveis, filas e grupos assistenciais conforme a rotina da instituição.",
      },
      {
        title: "Treinar e ativar a prova de ciência",
        description:
          "Feche o ciclo com notificação segura e registro documentado do recebimento.",
      },
    ],
    faq: [
      {
        question: "O CRIT substitui o telefone?",
        answer:
          "Ele organiza e documenta o fluxo crítico. A instituição define quando o telefone continua necessário, mas agora com rastreabilidade do processo.",
      },
    ],
    targetAudience: [
      "Hospitais com achados críticos recorrentes",
      "Serviços que dependem de WhatsApp para escalar",
      "Operações que precisam prova jurídica e SLA",
    ],
  },
];

export function getCompetitorBySlug(slug: string) {
  return competitors.find((competitor) => competitor.slug === slug);
}

export function getAllCompetitorSlugs() {
  return competitors.map((competitor) => competitor.slug);
}
