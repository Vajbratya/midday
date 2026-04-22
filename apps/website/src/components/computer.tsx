"use client";

import { Button } from "@midday/ui/button";
import { cn } from "@midday/ui/cn";
import { Icons } from "@midday/ui/icons";
import Link from "next/link";
import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";

function InfraDiagram() {
  const d = (text: string) => (
    <span className="text-muted-foreground">{text}</span>
  );
  return (
    <>
      {
        "  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐\n"
      }
      {
        "  │  Dashboard   │  │     Chat     │  │     CLI      │  │     API      │\n"
      }
      {
        "  └──────┬───────┘  └──────┬───────┘  └───────┬──────┘  └───────┬──────┘\n"
      }
      {"         │                 │                  │                 │\n"}
      {"         └─────────────────┴──────────────────┴─────────────────┘\n"}
      {"                                    │\n"}
      {"                             describe / trigger\n"}
      {"                                    │\n"}
      {
        " ┌──────────────────────────────────┴──────────────────────────────────┐\n"
      }
      {" │"}
      {d(
        "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░",
      )}
      {"│\n"}
      {" │"}
      {d("░░░░░░░░░░░░░░░░░░░░░░░░░░░")}
      {"  Laudos.AI Computer  "}
      {d("░░░░░░░░░░░░░░░░░░░░░░░")}
      {"│\n"}
      {" │"}
      {d(
        "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░",
      )}
      {"│\n"}
      {" │"}
      {d("░░░░░░░░░░░░░░░░░░")}
      {"  gerar · agendar · executar  "}
      {d("░░░░░░░░░░░░░░░░░░")}
      {"│\n"}
      {" │"}
      {d(
        "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░",
      )}
      {"│\n"}
      {
        " └──────┬──────────────┬───────────────┬───────────────┬───────────────┘\n"
      }
      {"        │              │               │               │\n"}
      {"        ▼              ▼               ▼               ▼\n"}
      {"\n"}
      {
        "   ┌──────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐\n"
      }
      {
        "   │  100+    │  │    Agent     │  │ Notifications│  │   External   │\n"
      }
      {
        "   │  MCP     │  │    Memory    │  │              │  │  Connectors  │\n"
      }
      {
        "   │  Tools   │  │              │  │              │  │              │\n"
      }
      {
        "   └──────────┘  └──────────────┘  └──────────────┘  └──────────────┘\n"
      }
    </>
  );
}

function SectionDivider() {
  return (
    <div className="w-full py-1">
      <div
        className="h-4 w-full border-y border-border"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-60deg, hsla(var(--border), 0.4), hsla(var(--border), 0.4) 1px, transparent 1px, transparent 6px)",
        }}
      />
    </div>
  );
}

function CopyInstall() {
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText("npx @laudos-ai/cli@latest computer");
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <button
      type="button"
      onClick={copyCommand}
      className="flex border border-border p-2 px-4 text-sm w-full relative cursor-pointer hover:bg-[hsl(0,0%,12%)] transition-colors"
      style={{
        backgroundImage:
          "repeating-linear-gradient(-60deg, hsla(var(--border), 0.4), hsla(var(--border), 0.4) 1px, transparent 1px, transparent 6px)",
      }}
      >
        <span className="text-foreground truncate">
        $ npx @laudos-ai/cli@latest computer
      </span>

      <div className="flex items-center space-x-2 ml-auto">
        {copied ? (
          <Icons.Check size={14} className="text-foreground" />
        ) : (
          <Icons.Copy size={14} className="text-foreground" />
        )}
      </div>

      {copied && (
        <div className="absolute left-1/2 -translate-x-1/2 -top-7 text-xs text-foreground animate-in fade-in slide-in-from-bottom-1">
          Copiado
        </div>
      )}
    </button>
  );
}

const ORA_FRAMES = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];

type Phase =
  | "typing-1"
  | "spin-1"
  | "result-1"
  | "typing-2"
  | "spin-2"
  | "result-2"
  | "done";

const PHASES: Phase[] = [
  "typing-1",
  "spin-1",
  "result-1",
  "typing-2",
  "spin-2",
  "result-2",
  "done",
];

type Scenario = {
  label: string;
  cmd1: string;
  cmd2: string;
  spin1: string;
  spin2: string;
  done2: string;
  result1: React.ReactNode;
  result2Line: React.ReactNode;
};

const g = (text: string) => <span className="text-foreground">{text}</span>;

const SCENARIOS: Scenario[] = [
  {
    label: "Criar agente",
    cmd1: 'laudos computer create "varra os achados críticos às 7h"',
    cmd2: "laudos computer confirm",
    spin1: "Gerando agente...",
    spin2: "Publicando agente...",
    done2: "Publicando agente...",
    result1: (
      <div className="relative mt-3 border-[0.5px] border-foreground/20 text-foreground text-[12px]">
        <span className="absolute -top-[10px] left-3 bg-background px-1.5 text-[11px] tracking-wide text-foreground">
          Plano do agente
        </span>
        <div className="p-3 pt-2 space-y-0.5">
          <div>
            Nome: <span className="text-foreground">CRIT Morning Sweep</span>
          </div>
          <div>
            Agenda: <span className="text-foreground">Todos os dias às 7:00</span>
          </div>
          <div>
            O que faz:{" "}
            <span className="text-foreground">
              Revisa casos críticos, verifica pendências e propõe escalonamentos
            </span>
          </div>
          <div className="pt-1 text-[11px] text-muted-foreground">
            Rode `laudos computer confirm` para publicar.
          </div>
        </div>
      </div>
    ),
    result2Line: (
      <div className="mt-1 text-foreground text-[12px]">
        {g("✓")} Agente publicado. Primeira execução: 28 de abril às 7:00
      </div>
    ),
  },
  {
    label: "Briefing",
    cmd1: "laudos computer run briefing-semanal --wait",
    cmd2: "laudos computer memory briefing-semanal",
    spin1: "Executando briefing semanal...",
    spin2: "Buscando memória...",
    done2: "Buscando memória...",
    result1: (
      <div className="mt-2 text-foreground text-[12px] space-y-0.5">
        <div>{g("✓")} Execução concluída</div>
        <div> TAT médio: 18 min (-8% vs semana passada)</div>
        <div> Laudos concluídos: 482</div>
        <div> CRITs pendentes de ciência: 2</div>
        <div> Maior fila: TC de tórax</div>
        <div> Ação: revisar pendências do plantão noturno</div>
      </div>
    ),
    result2Line: (
      <div className="mt-1 text-foreground text-[12px] space-y-0.5">
        <div> [7 Abr] TAT em queda de 8% semana contra semana</div>
        <div> [31 Mar] Fechamento da operação com 3 alertas</div>
        <div> [24 Mar] Plantão noturno dentro do alvo</div>
      </div>
    ),
  },
  {
    label: "Escalonar CRIT",
    cmd1: "laudos computer proposals crit-escalation",
    cmd2: "laudos computer approve crit-escalation run_182",
    spin1: "Buscando propostas...",
    spin2: "Enviando escalonamentos...",
    done2: "Enviando escalonamentos...",
    result1: (
      <div className="relative mt-3 border-[0.5px] border-foreground/20 text-foreground text-[12px]">
        <span className="absolute -top-[10px] left-3 bg-background px-1.5 text-[11px] tracking-wide text-foreground">
          Aguardando sua aprovação
        </span>
        <table className="w-full mt-2 mb-1">
          <thead>
            <tr className="text-left border-b-[0.5px] border-foreground/20">
              <th className="font-normal pl-3 pr-2 pb-1 text-foreground">
                AÇÃO
              </th>
              <th className="font-normal pr-2 pb-1 text-foreground">CASO</th>
              <th className="font-normal pr-3 pb-1 text-right text-foreground">
                SLA
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="pl-3 pr-2 py-[3px]">Escalonar</td>
              <td className="pr-2 py-[3px]">Caso 4821 · TC crânio</td>
              <td className="pr-3 py-[3px] text-right">12 min</td>
            </tr>
            <tr>
              <td className="pl-3 pr-2 py-[3px]">Reavisar</td>
              <td className="pr-2 py-[3px]">Caso 4789 · RM encéfalo</td>
              <td className="pr-3 py-[3px] text-right">18 min</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    result2Line: (
      <div className="mt-1 text-foreground text-[12px]">
        {g("✓")} 2 ações disparadas. Casos críticos seguiram para escalonamento.
      </div>
    ),
  },
  {
    label: "Alerta de TAT",
    cmd1: "laudos computer run tat-detector --wait",
    cmd2: "laudos computer logs tat-detector",
    spin1: "Executando detector de TAT...",
    spin2: "Buscando histórico...",
    done2: "Buscando histórico...",
    result1: (
      <div className="mt-2 text-foreground text-[12px] space-y-0.5">
        <div>{g("⚠")} Anomalia detectada</div>
        <div> Fila TC tórax: +31% acima da média</div>
        <div> 2 casos críticos sem ciência em 15 min</div>
        <div> Plantão noite com acúmulo em RM</div>
        <div> Notificação enviada para a coordenação</div>
      </div>
    ),
    result2Line: (
      <div className="mt-1 text-foreground text-[12px] space-y-0.5">
        <div> [15 Abr] 3 filas fora do alvo (avisadas)</div>
        <div> [14 Abr] Sem anomalias. Tudo dentro do alvo.</div>
        <div> [13 Abr] Sem anomalias. Tudo dentro do alvo.</div>
        <div> [12 Abr] 1 gargalo crítico sinalizado</div>
      </div>
    ),
  },
];

function Terminal() {
  const [activeTab, setActiveTab] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing-1");
  const [typed1, setTyped1] = useState("");
  const [typed2, setTyped2] = useState("");
  const [frame, setFrame] = useState(0);
  const [cursorOn, setCursorOn] = useState(true);
  const termRef = useRef<HTMLDivElement>(null);

  const scenario = SCENARIOS[activeTab] as Scenario;

  const resetAnimation = useCallback(() => {
    setPhase("typing-1");
    setTyped1("");
    setTyped2("");
    setFrame(0);
  }, []);

  useEffect(() => {
    resetAnimation();
  }, [activeTab, resetAnimation]);

  const handleTabClick = (idx: number) => {
    setActiveTab(idx);
  };

  const past = (p: Phase) => PHASES.indexOf(phase) >= PHASES.indexOf(p);

  useEffect(() => {
    const id = setInterval(() => setCursorOn((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (phase !== "typing-1") return;
    let i = 0;
    const id = setInterval(() => {
      if (i <= scenario.cmd1.length) {
        setTyped1(scenario.cmd1.slice(0, i));
        i++;
      } else {
        clearInterval(id);
        setTimeout(() => setPhase("spin-1"), 300);
      }
    }, 40);
    return () => clearInterval(id);
  }, [phase, scenario.cmd1]);

  useEffect(() => {
    if (phase !== "spin-1" && phase !== "spin-2") return;
    const id = setInterval(
      () => setFrame((f) => (f + 1) % ORA_FRAMES.length),
      80,
    );
    const dur = phase === "spin-1" ? 2000 : 1400;
    const t = setTimeout(() => {
      clearInterval(id);
      setPhase(phase === "spin-1" ? "result-1" : "result-2");
    }, dur);
    return () => {
      clearInterval(id);
      clearTimeout(t);
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== "result-1") return;
    const t = setTimeout(() => setPhase("typing-2"), 1500);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "typing-2") return;
    let i = 0;
    const id = setInterval(() => {
      if (i <= scenario.cmd2.length) {
        setTyped2(scenario.cmd2.slice(0, i));
        i++;
      } else {
        clearInterval(id);
        setTimeout(() => setPhase("spin-2"), 300);
      }
    }, 40);
    return () => clearInterval(id);
  }, [phase, scenario.cmd2]);

  useEffect(() => {
    if (phase !== "result-2") return;
    const t = setTimeout(() => setPhase("done"), 800);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "done") return;
    const t = setTimeout(() => {
      setActiveTab((prev) => (prev + 1) % SCENARIOS.length);
    }, 2500);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    setTimeout(() => {
      termRef.current?.scrollTo({
        top: termRef.current.scrollHeight,
        behavior: "smooth",
      });
    }, 30);
  }, [phase, typed1, typed2, frame]);

  const cursor = (
    <span
      className={cn(
        "inline-block w-[7px] h-[15px] ml-px align-middle bg-foreground",
        cursorOn ? "opacity-100" : "opacity-0",
      )}
    />
  );

  const prompt = <span className="text-foreground">~ $ </span>;

  const spin = (text: string) => (
    <div className="text-foreground">
      {ORA_FRAMES[frame]} {text}
    </div>
  );

  return (
    <div className="max-w-3xl w-full font-mono">
      <div className="overflow-hidden border border-border">
        <div className="select-none flex items-center h-7 px-3 border-b border-border bg-[hsl(0,0%,10%)]">
          <div className="flex gap-[5px]">
            <span className="block w-2 h-2 rounded-full bg-[hsl(0,0%,25%)]" />
            <span className="block w-2 h-2 rounded-full bg-[hsl(0,0%,25%)]" />
            <span className="block w-2 h-2 rounded-full bg-[hsl(0,0%,25%)]" />
          </div>
          <span className="flex-1 text-center text-[10px] tracking-wide text-foreground -ml-10">
            laudos computer — zsh
          </span>
        </div>

        <div className="flex bg-muted/40">
          {SCENARIOS.map((s, i) => (
            <button
              key={s.label}
              type="button"
              onClick={() => handleTabClick(i)}
              className={cn(
                "relative flex-1 px-4 py-1.5 text-[11px] tracking-wide transition-colors border-b",
                i === activeTab
                  ? "bg-background text-foreground border-b-transparent"
                  : "text-[hsl(0,0%,55%)] hover:text-foreground border-b-border",
                i > 0 && "border-l border-l-border",
              )}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div
          ref={termRef}
          className="overflow-y-auto h-[380px] md:h-[460px] scroll-smooth p-5 bg-background text-[13px] leading-[1.7] text-foreground"
        >
          <div className="text-[hsl(0,0%,55%)] text-[10px] tracking-widest mb-5">
            laudos computer v0.1.0 · radiologia@laudos.ai
          </div>

          <div>
            {prompt}
            {typed1}
            {phase === "typing-1" && cursor}
          </div>

          {phase === "spin-1" && (
            <div className="mt-1">{spin(scenario.spin1)}</div>
          )}

          {past("result-1") && scenario.result1}

          {past("typing-2") && (
            <div className="mt-2">
              {prompt}
              {typed2}
              {phase === "typing-2" && cursor}
            </div>
          )}

          {phase === "spin-2" && (
            <div className="mt-1">{spin(scenario.spin2)}</div>
          )}

          {past("result-2") && (
            <div className="mt-1">{scenario.result2Line}</div>
          )}

          {phase === "done" && (
            <div className="mt-3">
              {prompt}
              {cursor}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    title: "Você descreve, ele monta",
    description:
      "Descreva a rotina em linguagem natural. O sistema monta o agente, mostra o plano e só publica quando fizer sentido.",
  },
  {
    title: "Agentes prontos",
    description:
      "CRIT Morning Sweep, Briefing semanal, Detector de TAT e outras rotinas já afinadas para a operação clínica.",
  },
  {
    title: "Roda no seu horário",
    description:
      "Toda terça às 9h. No fim do plantão. A cada hora. Configure uma vez e o agente cuida do restante.",
  },
  {
    title: "Aprende com o tempo",
    description:
      "Agentes lembram execuções anteriores. Tendências ficam mais nítidas. Quanto mais rodam, mais úteis ficam.",
  },
  {
    title: "Você continua no controle",
    description:
      "Os agentes propõem ações e você aprova. Nada acontece sem o seu aval. Feito para confiança.",
  },
  {
    title: "Acesso ao que importa",
    description:
      "Casos, laudos, anexos, instituições, filas e integrações. O agente trabalha com o contexto completo da operação.",
  },
  {
    title: "Thinks, not just executes",
    description:
      "Agents analyze your data, spot anomalies, compare trends, and make recommendations. Not just automation.",
  },
  {
    title: "Secure and isolated",
    description:
      "Every agent runs in its own sandbox with no access to your filesystem or network. Hard limits on what it can do.",
  },
  {
    title: "See everything it does",
    description:
      "Full trace of every step. What data it read, what it decided, what actions it took. Nothing is a black box.",
  },
  {
    title: "Conectado às suas ferramentas",
    description:
      "Poste no Slack, envie por email, atualize planilhas ou dispare fluxos onde a equipe já trabalha.",
  },
  {
    title: "Funciona em qualquer superfície",
    description:
      "Dashboard, iMessage, chat ou CLI. Crie agentes, aprove ações e acompanhe resultados de qualquer lugar.",
  },
  {
    title: "Pronto em segundos",
    description:
      "Um comando. Login no navegador. Sem arquivos de configuração. Seu primeiro agente entra no ar em menos de um minuto.",
  },
];

const catalogAgents = [
  {
    name: "CRIT Morning Sweep",
    schedule: "Todos os dias, 7 AM",
    description:
      "Passa pela fila crítica antes do plantão começar e marca o que precisa de ação imediata.",
    details: [
      "Revisa todos os casos críticos pendentes",
      "Sinaliza ciência em atraso e anexos faltando",
      "Propõe escalonamento quando o SLA já estourou",
    ],
  },
  {
    name: "Escalonamento CRIT",
    schedule: "Tuesdays 9 AM",
    description:
      "Encontra comunicações críticas sem resposta e propõe a próxima ação. Nada sai sem aprovação.",
    details: [
      "Prioriza por tempo de atraso e criticidade clínica",
      "Mantém histórico de escalonamento por caso",
      "Propõe os próximos avisos para você revisar",
    ],
  },
  {
    name: "Weekly Ops Briefing",
    schedule: "Mondays 8 AM",
    description:
      "Entrega uma leitura clara da operação toda segunda. TAT, volume, gargalos e o que merece atenção.",
    details: [
      "Resume TAT por modalidade e instituição",
      "Acompanha tendências de produtividade semana contra semana",
      "Lista ações como CRIT pendente e filas acima do alvo",
    ],
  },
  {
    name: "Detector de TAT",
    schedule: "A cada 60 min",
    description:
      "Vigia a operação no fundo e só chama quando o tempo começa a sair do normal.",
    details: [
      "Aprende o baseline por fila e turno",
      "Detecta picos, acúmulos e atrasos fora do padrão",
      "Fica completamente silencioso quando tudo está saudável",
    ],
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Descreva",
    description:
      "Descreva a rotina em linguagem natural ou escolha um agente pronto do catálogo.",
  },
  {
    step: "02",
    title: "Revise",
    description:
      "A Laudos.AI monta o agente e mostra o plano. Você confirma quando ficar certo.",
  },
  {
    step: "03",
    title: "Automatize",
    description:
      "Ele roda no seu horário, aprende a cada execução e fica mais útil com o tempo.",
  },
  {
    step: "04",
    title: "Controle",
    description:
      "Veja tudo o que foi feito. Aprove ações antes de acontecerem. Você continua no comando.",
  },
];

const PROMPTS = [
  "Varra os achados críticos todos os dias às 7h",
  "Me avise quando o TAT sair do alvo",
  "Me dê um briefing da operação toda segunda de manhã",
  "Escalone casos sem ciência depois de 15 minutos",
  "Poste meu resumo semanal no Slack",
];

function PromptShowcase() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [cursorOn, setCursorOn] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setCursorOn((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const prompt = PROMPTS[index] as string;
    let i = 0;
    setDisplayed("");
    const typeId = setInterval(() => {
      if (i <= prompt.length) {
        setDisplayed(prompt.slice(0, i));
        i++;
      } else {
        clearInterval(typeId);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % PROMPTS.length);
        }, 2500);
      }
    }, 50);
    return () => clearInterval(typeId);
  }, [index]);

  const cursor = (
    <span
      className={cn(
        "inline-block w-[7px] h-[15px] ml-px align-middle bg-foreground",
        cursorOn ? "opacity-100" : "opacity-0",
      )}
    />
  );

  return (
    <div className="max-w-2xl mx-auto">
      <div
        className="border border-border p-6 font-mono text-foreground text-base md:text-lg"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-60deg, hsla(var(--border), 0.4), hsla(var(--border), 0.4) 1px, transparent 1px, transparent 6px)",
        }}
      >
        <span className="text-muted-foreground">$ laudos computer create </span>
        &quot;{displayed}
        {cursor}&quot;
      </div>
      <p className="text-center mt-4 text-sm text-muted-foreground">
        Uma frase. Só isso.
      </p>
    </div>
  );
}

export function Computer() {
  return (
    <div className="font-mono relative mt-16">
      {/* Hero */}
      <div className="max-w-screen-xl mx-auto pt-16 pb-12 md:py-28 flex flex-col lg:flex-row gap-12 justify-between items-center">
        <div className="lg:max-w-[590px] space-y-8 w-full">
          <div>
            <span className="inline-block text-[10px] tracking-widest uppercase border border-border px-2 py-0.5 mb-6 text-muted-foreground">
              Private beta
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight font-sans">
              O sistema operacional da operação clínica.
            </h1>
            <p className="text-base leading-normal mt-4 md:mt-8 text-muted-foreground">
              Laudos.AI Computer coloca o pós-laudo em piloto assistido.
              Agentes que rodam no seu ritmo, aprendem com a rotina e cuidam do
              trabalho que sempre volta para a sua mesa.
            </p>
          </div>

          <div className="lg:max-w-[480px]">
            <CopyInstall />
          </div>

          <div className="flex items-center gap-4">
            <Button
              asChild
              className="h-11 px-6 text-sm font-mono hover:!bg-[hsl(0,0%,85%)]"
            >
              <Link href="https://copilot.laudos.ai">Começar</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="hidden md:inline-flex h-11 px-6 text-sm font-mono hover:!bg-[hsl(0,0%,15%)] hover:!text-foreground"
            >
              <Link href="https://api.laudos.ai">
                Ver documentação
              </Link>
            </Button>
          </div>
        </div>

        <Terminal />
      </div>

      <div className="space-y-16 max-w-screen-lg mx-auto">
        {/* Features */}
        <div className="mt-12">
          <h3 className="font-sans text-2xl text-foreground">O que você recebe</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
            {features.map((feature) => (
              <div
                className="border border-border p-1 -mt-[1px] -ml-[1px]"
                key={feature.title}
              >
                <div className="p-4">
                  <div className="space-y-4">
                    <h3 className="text-sm">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <SectionDivider />

        {/* Catalog agents */}
        <div>
          <h3 className="font-sans text-2xl text-foreground">
            Agentes prontos
          </h3>
          <p className="text-sm mt-2 text-muted-foreground">
            Ative com um clique. Já afinados para fluxos reais de radiologia.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-4">
            {catalogAgents.map((agent) => (
              <div
                className="border border-border p-1 -mt-[1px] -ml-[1px]"
                key={agent.name}
              >
                <div className="p-5">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-sans">{agent.name}</h3>
                      <span className="text-[10px] tracking-widest uppercase text-muted-foreground">
                        {agent.schedule}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {agent.description}
                    </p>
                    <ul className="space-y-1.5">
                      {agent.details.map((detail) => (
                        <li
                          key={detail}
                          className="text-sm text-muted-foreground"
                        >
                          ◇ {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <SectionDivider />

        {/* Como funciona */}
        <div>
          <h3 className="font-sans text-2xl text-foreground">Como funciona</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4">
            {howItWorks.map((item) => (
              <div
                className="border border-border p-1 -mt-[1px] -ml-[1px]"
                key={item.step}
              >
                <div className="p-5">
                  <div className="space-y-3">
                    <span
                      className="text-3xl font-sans"
                      style={{ color: "hsl(0, 0%, 30%)" }}
                    >
                      {item.step}
                    </span>
                    <h3 className="text-sm">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <SectionDivider />

        {/* Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4">
          <div className="border border-border p-1 -mt-[1px] -ml-[1px]">
            <div className="p-4 space-y-4">
              <h2 className="text-sm">Dashboard</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="text-sm">
                  ◇ &quot;Ative o escalonador de CRIT&quot;
                </li>
                <li className="text-sm">
                  ◇ &quot;Crie um agente para vigiar o TAT&quot;
                </li>
                <li className="text-sm">◇ Gerencie agentes pelo chat</li>
                <li className="text-sm">◇ Veja histórico e resultados</li>
              </ul>
            </div>
          </div>

          <div className="border border-border p-1 -mt-[1px] -ml-[1px]">
            <div className="p-4 space-y-4">
              <h2 className="text-sm">Chat</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="text-sm">
                  ◇ iMessage, WhatsApp, Slack, Telegram
                </li>
                <li className="text-sm">
                  ◇ Receba alertas e aprove em movimento
                </li>
                <li className="text-sm">◇ Veja resultados de qualquer chat</li>
                <li className="text-sm">◇ Sem app para instalar</li>
              </ul>
            </div>
          </div>

          <div className="border border-border p-1 -mt-[1px] -ml-[1px]">
            <div className="p-4 space-y-4">
              <h2 className="text-sm">CLI</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="text-sm">◇ Crie, execute e gerencie agentes</li>
                <li className="text-sm">◇ Aprove propostas pelo terminal</li>
                <li className="text-sm">◇ Inspecione memória e histórico</li>
                <li className="text-sm">◇ Faça login no navegador</li>
              </ul>
            </div>
          </div>

          <div className="border border-border p-1 -mt-[1px] -ml-[1px]">
            <div className="p-4 space-y-4">
              <h2 className="text-sm">API</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="text-sm">◇ Monte integrações próprias</li>
                <li className="text-sm">◇ Dispare execuções por código</li>
                <li className="text-sm">◇ Gerencie propostas e aprovações</li>
                <li className="text-sm">◇ Acesso completo à trilha</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="hidden md:flex justify-center mt-12">
          <Button
            asChild
            className="h-11 px-6 text-sm font-mono hover:!bg-[hsl(0,0%,85%)]"
          >
            <Link href="https://copilot.laudos.ai">Começar</Link>
          </Button>
        </div>

        <div className="hidden md:block">
          <SectionDivider />
        </div>

        {/* Infraestrutura */}
        <div className="hidden md:block text-center">
          <h2 className="font-sans text-2xl sm:text-3xl text-foreground">
            Como funciona
          </h2>
          <p className="text-base leading-normal mt-4 max-w-md mx-auto text-muted-foreground">
            Você descreve a rotina. A Laudos.AI monta o agente, roda no horário
            certo e devolve resultado com rastreabilidade.
          </p>

          <div className="hidden md:flex flex-col items-center justify-center mt-2">
            <pre
              className="p-4 text-sm leading-5 md:scale-[0.8] transform-gpu"
              style={{
                fontFamily: "monospace",
                whiteSpace: "pre",
                textAlign: "left",
              }}
            >
              <InfraDiagram />
            </pre>
          </div>
        </div>

        <SectionDivider />

        {/* Prompt showcase */}
        <div className="text-center">
          <h2 className="font-sans text-2xl sm:text-3xl text-foreground mb-8">
            O que o seu agente faria?
          </h2>
          <PromptShowcase />
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-screen-lg mx-auto mt-16 mb-24">
        <div className="bg-background border border-border p-8 lg:p-12 text-center relative before:absolute before:inset-0 before:bg-[repeating-linear-gradient(-60deg,hsla(var(--border),0.4),hsla(var(--border),0.4)_1px,transparent_1px,transparent_6px)] before:pointer-events-none">
          <div className="relative z-10">
            <h2 className="font-sans text-2xl sm:text-3xl text-foreground mb-4">
              Comece
            </h2>
            <p className="font-sans text-base mb-6 max-w-lg mx-auto text-muted-foreground">
              Descreva a rotina clínica que precisa ganhar escala. O restante
              vira plano, execução e trilha.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                className="h-11 px-6 text-sm font-mono hover:!bg-[hsl(0,0%,85%)]"
              >
                <Link href="https://copilot.laudos.ai">Começar</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 px-6 text-sm font-mono border-primary bg-background hover:!bg-[hsl(0,0%,15%)] hover:!text-foreground"
              >
                <Link href="https://api.laudos.ai">
                  Ver documentação
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
