export type FeatureSection = {
  title: string;
  description: string;
  bullets: string[];
};

export type FeaturePageContent = {
  eyebrow: string;
  title: string;
  description: string;
  lightSrc: string;
  darkSrc: string;
  alt: string;
  metrics: Array<{ label: string; value: string }>;
  sections: FeatureSection[];
  integrationsTitle?: string;
  integrationsSubtitle?: string;
};

export const featurePages: Record<string, FeaturePageContent> = {
  assistant: {
    eyebrow: "Copilot",
    title: "Fale como você pensa. Receba o laudo estruturado.",
    description:
      "Descreva os achados com naturalidade. A Laudos.AI organiza o conteúdo em um laudo claro, estruturado e pronto para revisar e assinar.",
    lightSrc: "/images/assistant-light.svg",
    darkSrc: "/images/assistant-dark.svg",
    alt: "Copilot da Laudos.AI",
    metrics: [
      { label: "Tempo devolvido", value: "5 a 6 min por laudo" },
      { label: "Fluxo", value: "voz + IA + editor" },
      { label: "Contexto", value: "radiologia brasileira" },
    ],
    sections: [
      {
        title: "Laudo estruturado sem ditar pontuação",
        description:
          "O foco volta para a interpretação. A IA aplica estrutura, organiza seções e sugere refinamentos enquanto você dita ou escreve do seu jeito.",
        bullets: [
          "Ditado natural sem falar vírgula, ponto ou cabeçalho",
          "Padronização automática por modalidade e protocolo",
          "Conclusão mais consistente desde o primeiro uso",
        ],
      },
      {
        title: "IA assistiva que acelera, não decide",
        description:
          "A decisão clínica continua 100% com o médico. A plataforma reduz digitação repetitiva, busca manual e retrabalho no fechamento do laudo.",
        bullets: [
          "Sugestões contextuais durante a edição",
          "Complementação e refinamento de texto assistidos por IA",
          "Diretrizes e vocábulos alinhados ao seu padrão",
        ],
      },
      {
        title: "Pronto para revisar e assinar",
        description:
          "Da entrada por voz ao texto final, o sistema mantém o fluxo inteiro no mesmo editor para você revisar, ajustar e liberar sem troca de ferramenta.",
        bullets: [
          "Editor único para ditado, revisão e aprovação",
          "Máscaras pessoais e institucionais no mesmo fluxo",
          "Entrega mais rápida em computador, tablet e celular",
        ],
      },
    ],
    integrationsTitle: "IA aplicada ao laudo real",
    integrationsSubtitle:
      "Copilot, editor, integrações clínicas e automações conectados na mesma infraestrutura.",
  },
  insights: {
    eyebrow: "Análises",
    title: "Auditoria, volume e qualidade em uma vista só.",
    description:
      "Acompanhe uso, produtividade e consistência dos laudos com indicadores claros para profissionais, equipes e operações enterprise.",
    lightSrc: "/images/insights-light.svg",
    darkSrc: "/images/insights-dark.svg",
    alt: "Análises da Laudos.AI",
    metrics: [
      { label: "Visibilidade", value: "por usuário e instituição" },
      { label: "Auditoria", value: "trilha completa" },
      { label: "Enterprise", value: "relatórios operacionais" },
    ],
    sections: [
      {
        title: "Veja o que está acelerando o plantão",
        description:
          "Entenda onde a IA está reduzindo tempo, quais fluxos exigem ajuste e como o volume está distribuído entre equipes e turnos.",
        bullets: [
          "Painel com uso de créditos, laudos e adesão",
          "Comparação entre modalidades e perfis",
          "Alertas para gargalos antes de virarem atraso",
        ],
      },
      {
        title: "Auditoria pronta para operação crítica",
        description:
          "Toda ação relevante pode ser rastreada. Isso simplifica governança, revisões internas e acompanhamento institucional.",
        bullets: [
          "Histórico de edições e aprovações",
          "Relatórios de SLA e conformidade",
          "Base para auditoria clínica e jurídica",
        ],
      },
      {
        title: "Métricas que fazem sentido para radiologia",
        description:
          "Nada de dashboard genérico. Os indicadores foram pensados para o fluxo de produção do laudo, não para BI abstrato.",
        bullets: [
          "Tempo médio por laudo e por modalidade",
          "Acompanhamento de uso de templates e vocábulos",
          "Leitura institucional do desempenho sem exportação manual",
        ],
      },
    ],
  },
  transactions: {
    eyebrow: "Fluxo",
    title: "A fila de exames fica organizada do jeito que a operação precisa.",
    description:
      "Centralize estudos, prioridades e estado do trabalho com um fluxo mais claro entre aquisição, redação, revisão e entrega.",
    lightSrc: "/images/transactions-light.svg",
    darkSrc: "/images/transactions-dark.svg",
    alt: "Fluxo de exames",
    metrics: [
      { label: "Cobertura", value: "TC, RM, RX, USG e Doppler" },
      { label: "Padrão", value: "fila por prioridade" },
      { label: "Objetivo", value: "menos retrabalho" },
    ],
    sections: [
      {
        title: "Do exame ao laudo sem perder contexto",
        description:
          "A informação acompanha o estudo durante todo o fluxo para reduzir troca de tela, repetição e ruído operacional.",
        bullets: [
          "Identificação clara do que exige atenção imediata",
          "Contexto clínico mais acessível durante a redação",
          "Passagem mais limpa entre médico, equipe e auditoria",
        ],
      },
      {
        title: "Priorize o que muda conduta",
        description:
          "A operação consegue separar o que é rotina, o que é alto risco e o que precisa de ação imediata sem depender de gambiarra.",
        bullets: [
          "Etiquetas visuais para urgência e criticidade",
          "Filtros por setor, modalidade e instituição",
          "Fluxo desenhado para escala e não para improviso",
        ],
      },
      {
        title: "Menos cliques, mais leitura",
        description:
          "A plataforma foi pensada para tirar peso de interface e devolver foco para interpretação e decisão clínica.",
        bullets: [
          "Fluxo mais limpo para plantão de alto volume",
          "Informação certa no momento em que você precisa",
          "Organização consistente mesmo em operação distribuída",
        ],
      },
    ],
  },
  inbox: {
    eyebrow: "Entrada",
    title: "Voz, texto e documentos entram no mesmo fluxo.",
    description:
      "A Laudos.AI recebe o que vem do médico, da equipe e dos sistemas conectados e transforma isso em uma base organizada para produzir com menos fricção.",
    lightSrc: "/images/inbox-light.svg",
    darkSrc: "/images/inbox-dark.svg",
    alt: "Entrada de documentos e voz",
    metrics: [
      { label: "Entrada", value: "voz, texto e anexos" },
      { label: "Organização", value: "menos dispersão" },
      { label: "Resultado", value: "fluxo contínuo" },
    ],
    sections: [
      {
        title: "Tudo o que chega vira contexto acionável",
        description:
          "O sistema ajuda a manter ditados, referências, anexos e evidências no lugar certo para a equipe não precisar reconstruir o caso toda vez.",
        bullets: [
          "Documentos e anexos associados ao fluxo correto",
          "Centralização daquilo que antes ficava espalhado",
          "Menos dependência de caixa de entrada paralela",
        ],
      },
      {
        title: "Entrada pensada para operação clínica",
        description:
          "O que chega de fora precisa ser útil dentro do laudo. A plataforma organiza isso para acelerar revisão e comunicação.",
        bullets: [
          "Base mais limpa para o editor e a auditoria",
          "Apoio a revisão antes da assinatura",
          "Menos perda de informação relevante no caminho",
        ],
      },
      {
        title: "Mais confiança para trabalho em equipe",
        description:
          "Quando o fluxo de entrada é previsível, a operação inteira ganha velocidade e reduz dependências manuais.",
        bullets: [
          "Padrão único entre médico, secretaria e gestão",
          "Histórico mais rastreável",
          "Preparado para integrações enterprise",
        ],
      },
    ],
  },
  "time-tracking": {
    eyebrow: "Voz natural",
    title: "Pare de ditar pontuação. Comece a laudar de verdade.",
    description:
      "Você dita os achados como faz normalmente. A IA entende contexto radiológico e entrega um texto estruturado pronto para revisar.",
    lightSrc: "/images/time-tracking-light.svg",
    darkSrc: "/images/time-tracking-dark.svg",
    alt: "Ditado por voz natural",
    metrics: [
      { label: "Entrada", value: "voz livre" },
      { label: "Saída", value: "laudo estruturado" },
      { label: "Controle", value: "100% do médico" },
    ],
    sections: [
      {
        title: "Ditado natural sem decorar comando",
        description:
          "A experiência foi desenhada para o radiologista falar como pensa, sem adaptar linguagem ao software.",
        bullets: [
          "Sem verbalizar pontuação e cabeçalhos",
          "Melhor aderência a termos médicos do dia a dia",
          "Menos fadiga cognitiva ao longo do plantão",
        ],
      },
      {
        title: "Estrutura automática por contexto",
        description:
          "A IA transforma o ditado em técnica, achados e impressão com mais consistência entre modalidades e regiões anatômicas.",
        bullets: [
          "Organização automática da narrativa",
          "Aplicação de diretrizes e vocabulário do serviço",
          "Base melhor para revisão final",
        ],
      },
      {
        title: "Do microfone ao laudo final no mesmo fluxo",
        description:
          "Tudo acontece dentro do editor, sem depender de etapas externas ou aplicativos de transcrição genérica.",
        bullets: [
          "Ditado e edição integrados",
          "Compatibilidade com computador, tablet e celular",
          "Mais velocidade sem perder autonomia clínica",
        ],
      },
    ],
  },
  invoicing: {
    eyebrow: "Editor",
    title: "Editor de laudos com IA, voz e refinamento no mesmo lugar.",
    description:
      "Abra o editor, dite ou digite o exame e veja a IA estruturar, complementar e ajustar o texto sem quebrar o seu fluxo.",
    lightSrc: "/images/invoicing-light.svg",
    darkSrc: "/images/invoicing-dark.svg",
    alt: "Editor de laudos",
    metrics: [
      { label: "Fluxo", value: "ditar, revisar, assinar" },
      { label: "IA", value: "autocomplete e sugestões" },
      { label: "Uso", value: "individual e institucional" },
    ],
    sections: [
      {
        title: "Um editor pensado para radiologia",
        description:
          "Nada de gambiarra em editores genéricos. O fluxo é construído para laudo médico, com estrutura, padrão e velocidade.",
        bullets: [
          "Autocomplete e sugestões durante a escrita",
          "Padronização visual e textual do laudo",
          "Menos retrabalho entre rascunho e versão final",
        ],
      },
      {
        title: "Assistência real durante a edição",
        description:
          "A IA ajuda a completar, clarear e organizar o texto com base no contexto radiológico, sem invadir a decisão clínica.",
        bullets: [
          "Complementação contextual do texto",
          "Refino de linguagem e estrutura",
          "Melhor consistência entre laudos da mesma instituição",
        ],
      },
      {
        title: "Pronto para rotina individual ou enterprise",
        description:
          "O editor acomoda desde o radiologista que quer ganhar tempo no plantão até operações que exigem padrão institucional e auditoria.",
        bullets: [
          "Máscaras pessoais e da organização",
          "Controle de acesso por perfis",
          "Integração com PACS/RIS e trilha de auditoria",
        ],
      },
    ],
  },
  customers: {
    eyebrow: "Instituições",
    title: "Uma plataforma para médicos, equipes e hospitais trabalharem no mesmo padrão.",
    description:
      "A Laudos.AI foi desenhada para operação individual e institucional, com controle de acesso, padronização e visibilidade para quem gere a produção.",
    lightSrc: "/images/customers-light.svg",
    darkSrc: "/images/customers-dark.svg",
    alt: "Instituições e equipes",
    metrics: [
      { label: "Perfis", value: "individual, equipe, enterprise" },
      { label: "Governança", value: "SSO/SAML e auditoria" },
      { label: "Padrão", value: "templates e vocabulário" },
    ],
    sections: [
      {
        title: "Padrão institucional sem engessar o médico",
        description:
          "A instituição define diretrizes, máscaras e frases descritoras, enquanto cada profissional continua com autonomia no fluxo clínico.",
        bullets: [
          "Templates compartilhados por equipe",
          "Vocabulário e descritores customizáveis",
          "Mais consistência sem perder agilidade",
        ],
      },
      {
        title: "Gestão com visibilidade operacional",
        description:
          "Quem lidera a operação acompanha uso, volume e aderência sem montar planilha paralela nem extrair dado manualmente.",
        bullets: [
          "Relatórios institucionais e auditoria",
          "SLA e trilha de eventos para processos críticos",
          "Base mais robusta para escalabilidade",
        ],
      },
      {
        title: "Infraestrutura pronta para ambientes sensíveis",
        description:
          "Compliance, perfis de acesso e integrações clínicas foram pensados para ambientes hospitalares e operações de maior porte.",
        bullets: [
          "SSO/SAML e permissão por perfil",
          "Rastreabilidade para fluxos de alto risco",
          "Suporte dedicado e onboarding enterprise",
        ],
      },
    ],
  },
  "file-storage": {
    eyebrow: "Templates",
    title: "Máscaras, frases descritoras e vocábulos ficam organizados como parte do produto.",
    description:
      "Use templates pessoais ou institucionais para manter consistência, ganhar velocidade e reduzir repetição nos exames mais comuns.",
    lightSrc: "/images/file-storage-light.svg",
    darkSrc: "/images/file-storage-dark.svg",
    alt: "Templates e máscaras",
    metrics: [
      { label: "Padrão", value: "templates pessoais e institucionais" },
      { label: "Velocidade", value: "menos repetição" },
      { label: "Consistência", value: "mais previsibilidade" },
    ],
    sections: [
      {
        title: "Templates que acompanham o seu fluxo",
        description:
          "A plataforma ajuda a transformar padrões recorrentes em aceleradores reais de produção, sem virar texto engessado.",
        bullets: [
          "Modelos por modalidade e indicação clínica",
          "Uso combinado com voz e IA assistiva",
          "Mais velocidade em exames de alto volume",
        ],
      },
      {
        title: "Biblioteca compartilhada para equipes",
        description:
          "Instituições podem distribuir padrões e descritores para toda a equipe, mantendo alinhamento entre plantonistas e unidades.",
        bullets: [
          "Templates da organização com controle de acesso",
          "Atualização centralizada para o time inteiro",
          "Menos variação desnecessária entre laudos",
        ],
      },
      {
        title: "IA treinada para aproveitar seus padrões",
        description:
          "Quando templates e vocabulário estão no mesmo sistema, a IA consegue estruturar e complementar com mais consistência.",
        bullets: [
          "Melhor aderência ao jeito da sua instituição laudar",
          "Refino mais rápido no editor",
          "Base sólida para escalabilidade enterprise",
        ],
      },
    ],
  },
  "pre-accounting": {
    eyebrow: "PACS / RIS",
    title: "Integração nativa com a infraestrutura que sua operação já usa.",
    description:
      "A Laudos.AI se conecta ao fluxo clínico existente para o laudo circular com menos retrabalho e sem exigir mudança brusca de processo.",
    lightSrc: "/images/accounting-light.png",
    darkSrc: "/images/accounting-dark.png",
    alt: "Integrações PACS e RIS",
    metrics: [
      { label: "Integração", value: "API + PACS/RIS" },
      { label: "Objetivo", value: "zero retrabalho" },
      { label: "Cenário", value: "clínica e hospital" },
    ],
    sections: [
      {
        title: "Fluxo conectado do início ao fim",
        description:
          "A plataforma foi pensada para encaixar no ambiente atual da clínica ou hospital e não para criar mais uma ilha de software.",
        bullets: [
          "Integração com sistemas PACS/RIS",
          "Entrega mais fluida para a infraestrutura existente",
          "Menos cópia e cola entre telas e sistemas",
        ],
      },
      {
        title: "Pronta para operação enterprise",
        description:
          "O plano institucional contempla compliance, perfis de acesso, onboarding dedicado e adaptações ao contexto de cada serviço.",
        bullets: [
          "API para cenários mais customizados",
          "SSO/SAML e governança de acesso",
          "Suporte dedicado para implantação",
        ],
      },
      {
        title: "Software que trabalha junto com o seu stack",
        description:
          "O objetivo não é substituir tudo. É fechar os pontos cegos do fluxo de laudo dentro da estrutura que você já opera.",
        bullets: [
          "Melhor encaixe entre laudo, comunicação e auditoria",
          "Base mais confiável para equipes e escala",
          "Customização institucional de máscaras e vocábulos",
        ],
      },
    ],
  },
  download: {
    eyebrow: "Mobile",
    title: "No navegador, no tablet e agora também no celular.",
    description:
      "A experiência da Laudos.AI acompanha o radiologista onde o fluxo acontece, sem instalação obrigatória e com o editor pronto para uso em diferentes telas.",
    lightSrc: "/images/download-light.svg",
    darkSrc: "/images/download-dark.svg",
    alt: "Editor mobile da Laudos.AI",
    metrics: [
      { label: "Acesso", value: "100% no navegador" },
      { label: "Dispositivos", value: "desktop, tablet e celular" },
      { label: "Mobilidade", value: "editor mobile em rollout" },
    ],
    sections: [
      {
        title: "Mesmo fluxo em qualquer tela",
        description:
          "Você não precisa reaprender o produto para mudar de dispositivo. O editor e o copilot seguem o mesmo raciocínio do desktop ao mobile.",
        bullets: [
          "Uso rápido em contextos de plantão e retaguarda",
          "Sem depender de instalação local",
          "Acesso mais simples para rotinas distribuídas",
        ],
      },
      {
        title: "Mais flexibilidade para equipes e gestores",
        description:
          "A mobilidade facilita validação, acompanhamento e resposta mais rápida quando o fluxo exige ação fora da estação principal.",
        bullets: [
          "Consulta e acompanhamento em deslocamento",
          "Mais agilidade para times institucionais",
          "Interface adaptada para diferentes formatos",
        ],
      },
      {
        title: "Pronto para a radiologia que não para",
        description:
          "O produto foi desenhado para acompanhar o ritmo da operação real, não apenas o escritório idealizado.",
        bullets: [
          "Acesso simplificado por navegador",
          "Experiência consistente entre dispositivos",
          "Base sólida para o rollout do app mobile",
        ],
      },
    ],
  },
  chat: {
    eyebrow: "CRIT",
    title: "Achado crítico comunicado. Vida salva.",
    description:
      "O CRIT fecha o ciclo de comunicação de achados críticos com auditoria completa, prova jurídica e SLA documentado.",
    lightSrc: "/images/chat-light.svg",
    darkSrc: "/images/chat-dark.svg",
    alt: "Crit da Laudos.AI",
    metrics: [
      { label: "Tempo médio de ciência", value: "< 3 min" },
      { label: "Rastreabilidade", value: "100%" },
      { label: "Meta", value: "0 achados perdidos" },
    ],
    sections: [
      {
        title: "WhatsApp não é conformidade",
        description:
          "Quando a comunicação crítica depende de improviso, a operação fica exposta. O CRIT substitui esse risco por um fluxo auditável e seguro.",
        bullets: [
          "Registro de ciência com carimbo de tempo",
          "Escalação e notificação segura",
          "Conformidade e prova jurídica para a instituição",
        ],
      },
      {
        title: "Fila inteligente para quem precisa agir",
        description:
          "O médico assistente recebe o que importa primeiro, com priorização clara e sem expor dados sensíveis desnecessariamente.",
        bullets: [
          "Etiquetas de CRÍTICO e ALTO",
          "Filtros por setor, UTI, PS e ambulatório",
          "Resumo do achado com contexto acionável",
        ],
      },
      {
        title: "Do editor à auditoria no mesmo ciclo",
        description:
          "Editor marca o caso, CRIT notifica, o médico registra ciência e a auditoria fecha o ciclo com rastreabilidade total.",
        bullets: [
          "Fluxo institucional de ponta a ponta",
          "SLA documentado e acompanhável",
          "Base mais segura para operações de alto risco",
        ],
      },
    ],
  },
  computer: {
    eyebrow: "Automações",
    title: "Automações e agentes para a operação radiológica que quer escalar sem ruído.",
    description:
      "A mesma base que estrutura laudos e integra a operação também pode acionar rotinas, auditorias e fluxos repetitivos com menos trabalho manual.",
    lightSrc: "/images/computer-light.svg",
    darkSrc: "/images/computer-dark.svg",
    alt: "Automações da Laudos.AI",
    metrics: [
      { label: "Uso", value: "rotinas repetitivas" },
      { label: "Destino", value: "operação e auditoria" },
      { label: "Base", value: "dados do próprio fluxo" },
    ],
    sections: [
      {
        title: "Automatize o que não deveria depender de memória humana",
        description:
          "Escalas, auditorias, acompanhamento de SLA e verificações recorrentes podem sair do improviso e entrar em um fluxo reproduzível.",
        bullets: [
          "Menos planilha e menos checklist manual",
          "Rotinas operacionais mais previsíveis",
          "Mais tempo para a equipe focar no clínico",
        ],
      },
      {
        title: "Dados do fluxo real como matéria-prima",
        description:
          "Automação só funciona bem quando parte do que realmente acontece no produto. Por isso ela nasce dentro da mesma infraestrutura.",
        bullets: [
          "Sinais vindos de laudo, editor e comunicação crítica",
          "Mais contexto para acionar processos certos",
          "Menos integrações frágeis para manter",
        ],
      },
      {
        title: "Escala institucional com governança",
        description:
          "As automações podem apoiar gestão, auditoria e compliance sem abrir mão de rastreabilidade.",
        bullets: [
          "Base para operações enterprise mais seguras",
          "Rastreabilidade de eventos e ações",
          "Apoio a indicadores, SLA e supervisão",
        ],
      },
    ],
  },
  mcp: {
    eyebrow: "API e MCP",
    title: "Conecte a Laudos.AI ao seu stack técnico sem desmontar o fluxo clínico.",
    description:
      "API, integrações e MCP para levar editor, templates, laudos e operação para os sistemas e agentes que a sua equipe já usa.",
    lightSrc: "/images/mcp-light.svg",
    darkSrc: "/images/mcp-dark.svg",
    alt: "API e MCP da Laudos.AI",
    metrics: [
      { label: "Integração", value: "API + MCP" },
      { label: "Destino", value: "agentes e sistemas" },
      { label: "Foco", value: "workflow radiológico" },
    ],
    sections: [
      {
        title: "O produto não precisa ficar isolado",
        description:
          "Teams técnicos podem conectar a plataforma aos fluxos existentes para criar automações, análises e experiências próprias.",
        bullets: [
          "Acesso programático para cenários customizados",
          "Mais liberdade para integração com a operação local",
          "Infraestrutura coerente com uso institucional",
        ],
      },
      {
        title: "MCP para agentes e copilotos",
        description:
          "Quando fizer sentido, agentes podem consultar e acionar partes do workflow com contexto real, sem depender de integrações improvisadas.",
        bullets: [
          "Base para copilotos internos e fluxos automatizados",
          "Mais proximidade entre produto e stack técnico",
          "Acesso seguro com governança de permissão",
        ],
      },
      {
        title: "API pensada para cenários sensíveis",
        description:
          "Instituições e parceiros precisam integrar sem perder controle. A camada técnica acompanha essa exigência.",
        bullets: [
          "Compatibilidade com projetos enterprise",
          "Governança e rastreabilidade no uso",
          "Ponto de integração para PACS, RIS e sistemas internos",
        ],
      },
    ],
  },
  agents: {
    eyebrow: "Infraestrutura",
    title: "Uma base técnica para copilotos, automações e radiologia assistida por IA.",
    description:
      "A Laudos.AI não é só um editor. É uma infraestrutura para acelerar redação, busca, comunicação crítica e operação institucional em cima do mesmo contexto clínico.",
    lightSrc: "/images/assistant-light.svg",
    darkSrc: "/images/assistant-dark.svg",
    alt: "Infraestrutura de copilotos",
    metrics: [
      { label: "Módulos", value: "Copilot, Search e CRIT" },
      { label: "Stack", value: "produto + API + integrações" },
      { label: "Foco", value: "depois da imagem" },
    ],
    sections: [
      {
        title: "Copilot para o ponto mais caro do fluxo",
        description:
          "A IA entra onde o radiologista mais perde tempo: na redação, estrutura e revisão do laudo.",
        bullets: [
          "Ditado por voz natural",
          "Editor com sugestões e refinamento",
          "Padronização sem perder autonomia clínica",
        ],
      },
      {
        title: "Search e contexto aplicados ao laudo",
        description:
          "Busca de achados, teorias e padrões em linguagem natural para apoiar a escrita dentro do fluxo real de produção.",
        bullets: [
          "Busca pronta para uso clínico",
          "Respostas organizadas para alimentar o laudo",
          "Menos interrupção com pesquisa manual externa",
        ],
      },
      {
        title: "CRIT e operação com prova jurídica",
        description:
          "Quando o caso exige comunicação rápida, a plataforma fecha o ciclo com notificação, ciência e auditoria documentada.",
        bullets: [
          "Escalação institucional de achados críticos",
          "SLA e trilha de auditoria",
          "Menos risco operacional e jurídico",
        ],
      },
    ],
  },
};
