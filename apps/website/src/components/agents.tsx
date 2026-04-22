"use client";

import { Button } from "@midday/ui/button";
import { cn } from "@midday/ui/cn";
import { Icons } from "@midday/ui/icons";
import Link from "next/link";
import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";

const DOT_COLOR = "hsl(225, 60%, 55%)";

function InfraDiagram() {
  const d = (text: string) => <span style={{ color: DOT_COLOR }}>{text}</span>;
  return (
    <>
      {
        "                                                  ┌──────────────────┐\n"
      }
      {
        "                                                  │      Agents      │\n"
      }
      {
        "                                                  └────────┬─────────┘\n"
      }
      {"                                                           │\n"}
      {"                                                    MCP / CLI / API\n"}
      {"                                                           │\n"}
      {
        " ┌─────────────────────────────────────────────────────────┴─────────────────────────────────────────────────────────┐\n"
      }
      {" │"}
      {d(
        "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░",
      )}
      {"│\n"}
      {" │"}
      {d("░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░")}
      {"  Laudos.AI  "}
      {d("░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░")}
      {"│\n"}
      {" │"}
      {d(
        "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░",
      )}
      {"│\n"}
      {" │"}
      {d("░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░")}
      {"  A base da operação clínica  "}
      {d("░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░")}
      {"│\n"}
      {" │"}
      {d(
        "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░",
      )}
      {"│\n"}
      {
        " └──────┬────────────────┬───────────────┬───────────────┬──────────────┬──────────────┬─────────────┬───────────────┘\n"
      }
      {
        "        │                │               │               │              │              │             │\n"
      }
      {
        "        ▼                ▼               ▼               ▼              ▼              ▼             ▼\n"
      }
      {"\n"}
      {
        "   ┌──────────┐  ┌──────────────┐  ┌──────────┐  ┌──────────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐\n"
      }
      {
        "   │  Laudos  │  │    Fluxo     │  │   TAT    │  │ Instituições │  │ Briefings │  │  Canais  │  │ Integra  │\n"
      }
      {
        "   └──────────┘  └──────────────┘  └──────────┘  └──────────────┘  └──────────┘  └──────────┘  └──────────┘"
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
    navigator.clipboard.writeText("npx @laudos-ai/cli@latest");
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <button
      type="button"
      onClick={copyCommand}
      className="flex border border-border p-2 px-4 text-sm w-full relative cursor-pointer hover:bg-[hsl(225,70%,28%)] transition-colors"
      style={{
        backgroundImage:
          "repeating-linear-gradient(-60deg, hsla(var(--border), 0.4), hsla(var(--border), 0.4) 1px, transparent 1px, transparent 6px)",
      }}
      >
        <span className="text-foreground truncate">
        $ npx @laudos-ai/cli@latest
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
  result2Line: string;
};

const SCENARIOS: Scenario[] = [
  {
    label: "Laudo por fluxo",
    cmd1: 'laudos reports create --from-worklist "Plantão Noturno" --case 4821',
    cmd2: "laudos reports push case_4821",
    spin1: "Montando laudo a partir da fila...",
    spin2: "Enviando para o fluxo...",
    done2: "Enviando para o fluxo...",
    result1: (
      <div className="relative mt-3 border-[0.5px] border-primary text-foreground text-[12px]">
        <span className="absolute -top-[10px] left-3 bg-background px-1.5 text-[11px] tracking-wide text-foreground">
          LD-4821 criado a partir da fila
        </span>
        <table className="w-full mt-2 mb-1">
          <thead>
            <tr className="text-left border-b-[0.5px] border-primary">
              <th className="font-normal pl-3 pr-2 pb-1 text-foreground">
                ETAPA
              </th>
              <th className="font-normal pr-2 pb-1 text-right text-foreground">
                TEMPO
              </th>
              <th className="font-normal pr-2 pb-1 text-right text-foreground">
                FILA
              </th>
              <th className="font-normal pr-3 pb-1 text-right text-foreground">
                STATUS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="pl-3 pr-2 py-[3px]">Coleta de contexto</td>
              <td className="pr-2 py-[3px] text-right">2m</td>
              <td className="pr-2 py-[3px] text-right">TC crânio</td>
              <td className="pr-3 py-[3px] text-right">OK</td>
            </tr>
            <tr>
              <td className="pl-3 pr-2 py-[3px]">Estruturação</td>
              <td className="pr-2 py-[3px] text-right">1m</td>
              <td className="pr-2 py-[3px] text-right">TC crânio</td>
              <td className="pr-3 py-[3px] text-right">OK</td>
            </tr>
            <tr>
              <td className="pl-3 pr-2 py-[3px]">Revisão assistida</td>
              <td className="pr-2 py-[3px] text-right">45s</td>
              <td className="pr-2 py-[3px] text-right">TC crânio</td>
              <td className="pr-3 py-[3px] text-right">Pendente</td>
            </tr>
            <tr className="border-t-[0.5px] border-primary">
              <td className="pl-3 pr-2 py-[3px]">Total</td>
              <td className="pr-2 py-[3px] text-right">3m45s</td>
              <td className="pr-2 py-[3px]" />
              <td className="pr-3 py-[3px] text-right">Pronto</td>
            </tr>
          </tbody>
        </table>
        <div className="px-3 pb-2 text-[11px] text-foreground">
          Caso: 4821 · TC crânio
        </div>
      </div>
    ),
    result2Line: "  Laudo LD-4821 enviado para revisão final.",
  },
  {
    label: "Conectar anexos",
    cmd1: "laudos inbox list --unmatched",
    cmd2: "laudos inbox match --all --auto",
    spin1: "Buscando anexos sem caso...",
    spin2: "Conectando 3 anexos aos casos...",
    done2: "Conectando 3 anexos aos casos...",
    result1: (
      <div className="relative mt-3 border-[0.5px] border-primary text-foreground text-[12px]">
        <span className="absolute -top-[10px] left-3 bg-background px-1.5 text-[11px] tracking-wide text-foreground">
          Sem vínculo [3]
        </span>
        <table className="w-full mt-2 mb-1">
          <thead>
            <tr className="text-left border-b-[0.5px] border-primary">
              <th className="font-normal pl-3 pr-2 pb-1 text-foreground">ID</th>
              <th className="font-normal pr-2 pb-1 text-foreground">ARQUIVO</th>
              <th className="font-normal pr-2 pb-1 text-right text-foreground">
                FILA
              </th>
              <th className="font-normal pr-3 pb-1 text-foreground">
                SUGERIDO
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="pl-3 pr-2 py-[3px]">inb_0091</td>
              <td className="pr-2 py-[3px]">pedido-neuro.pdf</td>
              <td className="pr-2 py-[3px] text-right">TC</td>
              <td className="pr-3 py-[3px]">case_4821</td>
            </tr>
            <tr>
              <td className="pl-3 pr-2 py-[3px]">inb_0089</td>
              <td className="pr-2 py-[3px]">laudo-anterior.pdf</td>
              <td className="pr-2 py-[3px] text-right">RM</td>
              <td className="pr-3 py-[3px]">case_4789</td>
            </tr>
            <tr>
              <td className="pl-3 pr-2 py-[3px]">inb_0087</td>
              <td className="pr-2 py-[3px]">protocolo-uti.pdf</td>
              <td className="pr-2 py-[3px] text-right">UTI</td>
              <td className="pr-3 py-[3px]">case_4904</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    result2Line: "  3/3 anexos conectados. Contexto pronto para revisão.",
  },
  {
    label: "Exportar produção",
    cmd1: "laudos reports export --to csv --period 2026-W16",
    cmd2: "laudos export status job_4401",
    spin1: "Exportando 142 laudos para CSV...",
    spin2: "Checando status da exportação...",
    done2: "Checando status da exportação...",
    result1: (
      <div className="mt-2 text-foreground text-[12px] space-y-0.5">
        <div> Exportação iniciada</div>
        <div> Destino: CSV</div>
        <div> Período: 13 Abr - 19 Abr 2026</div>
        <div> Laudos: 142</div>
        <div> Job ID: job_4401</div>
      </div>
    ),
    result2Line: "  Exportação concluída. 142 laudos disponíveis para download.",
  },
  {
    label: "Briefing",
    cmd1: "laudos insights weekly-briefing",
    cmd2: "laudos insights tat-overview --period 2026-W16",
    spin1: "Gerando briefing semanal...",
    spin2: "Calculando visão de TAT...",
    done2: "Calculando visão de TAT...",
    result1: (
      <div className="relative mt-3 border-[0.5px] border-primary text-foreground text-[12px]">
        <span className="absolute -top-[10px] left-3 bg-background px-1.5 text-[11px] tracking-wide text-foreground">
          Weekly Briefing
        </span>
        <table className="w-full mt-2 mb-1">
          <thead>
            <tr className="text-left border-b-[0.5px] border-primary">
              <th className="font-normal pl-3 pr-2 pb-1 text-foreground">
                FILA
              </th>
              <th className="font-normal pr-2 pb-1 text-right text-foreground">
                VOLUME
              </th>
              <th className="font-normal pr-3 pb-1 text-right text-foreground">
                TAT
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="pl-3 pr-2 py-[3px]">TC</td>
              <td className="pr-2 py-[3px] text-right">214</td>
              <td className="pr-3 py-[3px] text-right">16 min</td>
            </tr>
            <tr>
              <td className="pl-3 pr-2 py-[3px]">RM</td>
              <td className="pr-2 py-[3px] text-right">97</td>
              <td className="pr-3 py-[3px] text-right">23 min</td>
            </tr>
            <tr>
              <td className="pl-3 pr-2 py-[3px]">USG</td>
              <td className="pr-2 py-[3px] text-right">171</td>
              <td className="pr-3 py-[3px] text-right">11 min</td>
            </tr>
          </tbody>
        </table>
        <div className="px-3 pb-2 text-[11px] text-foreground">
          Tendência: TAT -8% semana contra semana
        </div>
      </div>
    ),
    result2Line: "  Briefing gerado. Gargalo principal: RM encéfalo.",
  },
];

function Terminal({ pixelFontClass }: { pixelFontClass?: string }) {
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
    }, 2000);
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

  const done = (text: string) => <div className="text-foreground">{text}</div>;

  return (
    <div className="max-w-3xl w-full font-mono">
      <div className="overflow-hidden border border-border">
        <div className="select-none flex items-center h-7 px-3 border-b border-border bg-[hsl(225,70%,26%)]">
          <div className="flex gap-[5px]">
            <span className="block w-2 h-2 rounded-full bg-[hsl(225,50%,40%)]" />
            <span className="block w-2 h-2 rounded-full bg-[hsl(225,50%,40%)]" />
            <span className="block w-2 h-2 rounded-full bg-[hsl(225,50%,40%)]" />
          </div>
          <span className="flex-1 text-center text-[10px] tracking-wide text-foreground -ml-10">
            midday — zsh
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
                  : "text-[hsl(225,60%,75%)] hover:text-foreground border-b-border",
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
          <div>{prompt}npx @midday-ai/cli@latest</div>

          <div
            className={cn(
              "text-7xl sm:text-8xl text-foreground mt-3",
              pixelFontClass,
            )}
          >
            midday
          </div>
          <div className="text-[hsl(225,60%,75%)] text-[10px] tracking-widest mt-1.5 mb-5">
            v0.1.0 · radiologia@laudos.ai · Laudos.AI
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
            <>
              <div className="mt-1">{done(scenario.done2)}</div>
              <div className="mt-1">{scenario.result2Line}</div>
            </>
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
    title: "Automatize o pós-laudo",
    description:
      "Agentes fecham o que vem depois da imagem sem passos manuais: revisar filas, mover contexto e empurrar a operação para frente.",
  },
  {
    title: "Orquestre filas",
    description:
      "Deixe agentes agrupar, priorizar e reorganizar casos conforme a rotina muda. Sem limpeza manual no fim do turno.",
  },
  {
    title: "Monitore TAT automaticamente",
    description:
      "Agentes acompanham tempo por fila, plantão e modalidade sem depender de planilha paralela.",
  },
  {
    title: "Puxe briefings sob demanda",
    description:
      "TAT, produtividade, CRIT pendente, gargalos. Peça um briefing e receba resposta estruturada.",
  },
  {
    title: "Escalone o que é crítico",
    description:
      "Agentes revisam achados críticos sem ciência e propõem os próximos passos no tempo certo.",
  },
  {
    title: "Classifique a operação",
    description:
      "Novos casos entram já com fila, prioridade e contexto operacional quando isso puder ser inferido com segurança.",
  },
  {
    title: "Conecte anexos",
    description:
      "Pedidos, PDFs e histórico podem cair no caso certo sem busca manual e sem pasta solta.",
  },
  {
    title: "Feche o ciclo",
    description:
      "Rotinas de revisão, comunicação e auditoria podem rodar em série e deixar a pendência pronta para decisão.",
  },
  {
    title: "Monitore gargalos",
    description:
      "Receba alerta quando o TAT sair do alvo, quando uma fila travar ou quando o CRIT ficar sem resposta.",
  },
  {
    title: "Conecte ao seu stack",
    description:
      "Exporte produção, mova contexto para planilhas ou integre com os sistemas que a operação já usa.",
  },
  {
    title: "Works with any MCP client",
    description:
      "Cursor, Claude, Windsurf, Raycast, or your own agent. Same 80+ tools, same API surface, any client.",
  },
  {
    title: "Zero setup",
    description:
      "One npx command. OAuth via browser. No API keys, no config files. Your agent is operational in seconds.",
  },
];

const possibilities = [
  {
    agent: "Claude",
    title: "Pedir um briefing da operação",
    description:
      "Peça ao Claude um resumo de TAT, filas, CRIT pendente e tendências sem abrir dashboard ou planilha.",
  },
  {
    agent: "Cursor",
    title: "Consultar contexto sem sair da IDE",
    description:
      "Cursor pode puxar contexto de caso, templates e dados operacionais enquanto sua equipe integra sistemas ou automações.",
  },
  {
    agent: "OpenClaw",
    title: "Um operador 24/7",
    description:
      "OpenClaw vigia TAT, propõe escalonamentos e deixa o briefing pronto quando o time acorda.",
  },
  {
    agent: "Zapier",
    title: "Resumo semanal no automático",
    description:
      "Toda segunda, Zapier puxa o resumo da operação e entrega no Slack sem ninguém pedir.",
  },
  {
    agent: "Your agent",
    title: "Monte um fluxo sob medida",
    description:
      "Use a API ou o SDK para montar o agente exato que a sua operação precisa. Sua lógica, suas regras.",
  },
  {
    agent: "Any MCP client",
    title: "Um protocolo, qualquer ferramenta",
    description:
      "Qualquer app que fale MCP ganha acesso imediato às ferramentas da Laudos.AI. Sem integração sob medida para cada cliente.",
  },
  {
    agent: "Raycast",
    title: "Buscar um caso em um atalho",
    description:
      "Aperte um atalho, digite o número do caso e puxe contexto, anexos ou status antes mesmo de trocar de janela.",
  },
  {
    agent: "Manus",
    title: "Organizar enquanto você dorme",
    description:
      "Manus varre a operação, destaca anomalias e deixa tudo pronto para revisão quando você voltar para a tela.",
  },
  {
    agent: "Custom scripts",
    title: "Automatize com um cron job",
    description:
      "Um script curto que roda à noite, busca filas fora do alvo, aplica suas regras e devolve o resultado. Sem UI.",
  },
];

const THEME_COLOR = "hsl(225, 70%, 22%)";

export function Agents({ pixelFontClass }: { pixelFontClass?: string }) {
  useEffect(() => {
    const existing = document.querySelector('meta[name="theme-color"]');
    const prev = existing?.getAttribute("content") || "";
    if (existing) {
      existing.setAttribute("content", THEME_COLOR);
    } else {
      const meta = document.createElement("meta");
      meta.name = "theme-color";
      meta.content = THEME_COLOR;
      document.head.appendChild(meta);
    }
    return () => {
      const tag = document.querySelector('meta[name="theme-color"]');
      if (tag) {
        if (prev) {
          tag.setAttribute("content", prev);
        } else {
          tag.remove();
        }
      }
    };
  }, []);

  return (
    <div className="font-mono relative mt-16">
      <div className="max-w-screen-xl mx-auto pt-16 pb-12 md:py-28 flex flex-col lg:flex-row gap-12 justify-between items-center">
        <div className="lg:max-w-[590px] space-y-8 w-full">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight font-sans">
              Deixe agentes rodarem a operação.
            </h1>
            <p className="text-[hsl(225,60%,75%)] text-base leading-normal mt-4 md:mt-8">
              Um CLI. 80+ ferramentas. Seu agente pode varrer filas, acionar
              CRIT, consolidar produção e buscar contexto. Tudo o que acontece
              depois da imagem pode ganhar escala aqui.
            </p>
          </div>

          <div className="lg:max-w-[480px]">
            <CopyInstall />
          </div>

          <div className="flex items-center gap-4">
            <Button
              asChild
              className="h-11 px-6 text-sm font-mono hover:!bg-[hsl(225,50%,92%)]"
            >
              <Link href="https://copilot.laudos.ai">Começar</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="hidden md:inline-flex h-11 px-6 text-sm font-mono hover:!bg-[hsl(225,70%,28%)] hover:!text-foreground"
            >
              <Link href="https://api.laudos.ai">
                Ver documentação
              </Link>
            </Button>
          </div>
        </div>

        <Terminal pixelFontClass={pixelFontClass} />
      </div>

      <div className="space-y-16 max-w-screen-lg mx-auto">
        <div className="mt-12">
          <h3 className="font-sans text-2xl text-foreground">Recursos</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
            {features.map((feature) => (
              <div
                className="border border-border p-1 -mt-[1px] -ml-[1px]"
                key={feature.title}
              >
                <div className="p-4">
                  <div className="space-y-4">
                    <h3 className="text-sm">{feature.title}</h3>
                    <p className="text-[hsl(225,60%,75%)] text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <SectionDivider />

        <div>
          <h3 className="font-sans text-2xl text-foreground">Possibilidades</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
            {possibilities.map((item) => (
              <div
                className="border border-border p-1 -mt-[1px] -ml-[1px]"
                key={item.title}
              >
                <div className="p-4">
                  <div className="space-y-3">
                    <span className="text-xs text-[hsl(225,50%,60%)] uppercase tracking-widest">
                      {item.agent}
                    </span>
                    <h3 className="text-sm">{item.title}</h3>
                    <p className="text-[hsl(225,60%,75%)] text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <SectionDivider />

        <div className="grid grid-cols-1 md:grid-cols-3 mt-4">
          <div className="border border-border p-1 -mt-[1px] -ml-[1px]">
            <div className="p-4 space-y-4">
              <h2 className="text-sm">CLI</h2>
              <ul className="text-[hsl(225,60%,75%)] space-y-2">
                <li className="text-sm">
                  ◇ Casos, laudos, anexos e produtividade
                </li>
                <li className="text-sm">◇ Structured output for agents</li>
                <li className="text-sm">◇ OAuth login via browser</li>
                <li className="text-sm">◇ Workspace switching</li>
                <li className="text-sm">◇ Human-readable tables</li>
              </ul>
            </div>
          </div>

          <div className="border border-border p-1 -mt-[1px] -ml-[1px]">
            <div className="p-4 space-y-4">
              <h2 className="text-sm">MCP</h2>
              <ul className="text-[hsl(225,60%,75%)] space-y-2">
                <li className="text-sm">◇ 80+ ferramentas para operação clínica</li>
                <li className="text-sm">
                  ◇ Works with Cursor, Claude, Raycast, and more
                </li>
                <li className="text-sm">◇ Granular read/write permissions</li>
                <li className="text-sm">
                  ◇ Real-time data from your workspace
                </li>
                <li className="text-sm">◇ Same API surface as the CLI</li>
              </ul>
            </div>
          </div>

          <div className="border border-border p-1 -mt-[1px] -ml-[1px]">
            <div className="p-4 space-y-4">
              <h2 className="text-sm">Developer experience</h2>
              <ul className="text-[hsl(225,60%,75%)] space-y-2">
                <li className="text-sm">◇ Um único comando npx para começar</li>
                <li className="text-sm">◇ Sem arquivos de configuração</li>
                <li className="text-sm">◇ SDKs em TypeScript e Go</li>
                <li className="text-sm">◇ Acesso por API REST</li>
                <li className="text-sm">◇ Superfície pronta para agentes</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="hidden md:flex justify-center mt-12">
          <Button
            asChild
            className="h-11 px-6 text-sm font-mono hover:!bg-[hsl(225,50%,92%)]"
          >
            <Link href="https://copilot.laudos.ai">Começar</Link>
          </Button>
        </div>

        <div className="hidden md:block">
          <SectionDivider />
        </div>

        <div className="hidden md:block text-center">
          <h2 className="font-sans text-2xl sm:text-3xl text-foreground">
            Infrastructure
          </h2>
          <p className="text-[hsl(225,60%,75%)] text-base leading-normal mt-4 max-w-md mx-auto">
            Laudos.AI é a base. Agentes entram por MCP, CLI ou API. Cada ação
            volta para a operação com contexto e rastreabilidade.
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
      </div>

      <div className="max-w-screen-lg mx-auto mt-16 mb-24">
        <div className="bg-background border border-border p-8 lg:p-12 text-center relative before:absolute before:inset-0 before:bg-[repeating-linear-gradient(-60deg,hsla(var(--border),0.4),hsla(var(--border),0.4)_1px,transparent_1px,transparent_6px)] before:pointer-events-none">
          <div className="relative z-10">
            <h2 className="font-sans text-2xl sm:text-3xl text-foreground mb-4">
              Comece
            </h2>
            <p className="font-sans text-base text-[hsl(225,60%,75%)] mb-6 max-w-lg mx-auto">
              Um CLI. Um servidor MCP. A camada que faltava para agentes
              trabalharem no pós-laudo.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                className="h-11 px-6 text-sm font-mono hover:!bg-[hsl(225,50%,92%)]"
              >
                <Link href="https://copilot.laudos.ai">Começar</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 px-6 text-sm font-mono border-primary bg-background hover:!bg-[hsl(225,70%,45%)] hover:!text-foreground"
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
