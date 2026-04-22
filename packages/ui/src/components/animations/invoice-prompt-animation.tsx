"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MdOutlineOpenInNew } from "react-icons/md";

export function InvoicePromptAnimation({
  onComplete,
  shouldPlay = true,
}: {
  onComplete?: () => void;
  shouldPlay?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showUserMessage, setShowUserMessage] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [visibleSections, setVisibleSections] = useState<number[]>([]);

  const userPrompt =
    "Gerar laudo estruturado: TC de crânio sem contraste, sem hemorragia aguda, linha média centrada e sinusopatia maxilar leve.";

  useEffect(() => {
    if (!shouldPlay) return;

    const timers: NodeJS.Timeout[] = [];

    timers.push(setTimeout(() => setShowUserMessage(true), 0));
    timers.push(
      setTimeout(() => {
        setShowReport(true);
        [0, 1, 2, 3, 4].forEach((section, index) => {
          timers.push(
            setTimeout(() => {
              setVisibleSections((prev) => [...prev, section]);
            }, 200 + index * 160),
          );
        });
      }, 1000),
    );

    if (onComplete) {
      timers.push(setTimeout(() => onComplete(), 12000));
    }

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [shouldPlay, onComplete]);

  return (
    <div ref={containerRef} className="flex h-full w-full flex-col relative">
      <div className="flex-1 overflow-hidden px-2 py-2 md:px-3 md:py-3">
        <div className="flex h-full flex-col space-y-2 md:space-y-3">
          <div className="flex justify-end">
            <div
              className={`max-w-[85%] rounded-bl-[100px] rounded-tl-[100px] bg-secondary py-1 pl-1.5 pr-2 transition-opacity duration-75 md:max-w-xs ${
                showUserMessage ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-right text-[11px] text-foreground md:text-[12px]">
                {userPrompt}
              </p>
            </div>
          </div>

          <div className="flex-1 overflow-hidden">
            {showReport ? (
              <div className="mt-3">
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{
                    opacity: visibleSections.includes(0) ? 1 : 0,
                    y: visibleSections.includes(0) ? 0 : 6,
                  }}
                  transition={{ duration: 0.25 }}
                  className="mb-4"
                >
                  <h4 className="font-serif text-[16px] font-normal text-foreground md:text-[18px]">
                    Laudo
                  </h4>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{
                    opacity: visibleSections.includes(1) ? 1 : 0,
                    y: visibleSections.includes(1) ? 0 : 6,
                  }}
                  transition={{ duration: 0.25 }}
                  className="mb-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-0.5 md:gap-1">
                      <div className="text-[11px] text-muted-foreground md:text-[12px]">
                        Modalidade
                      </div>
                      <div className="text-[11px] text-foreground md:text-[12px]">
                        TC de crânio sem contraste
                      </div>
                      <div className="break-all text-[11px] text-muted-foreground md:text-[12px]">
                        Hospital Norte
                      </div>
                    </div>
                    <div className="flex flex-col gap-0.5 text-right md:gap-1">
                      <div className="text-[11px] text-muted-foreground md:text-[12px]">
                        Fluxo
                      </div>
                      <div className="text-[11px] text-foreground md:text-[12px]">
                        Rotina priorizada
                      </div>
                      <div className="break-all text-[11px] text-muted-foreground md:text-[12px]">
                        SLA de 20 min
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-1.5 md:mt-4 md:gap-2">
                    <div className="text-[11px] text-muted-foreground md:text-[12px]">
                      Caso
                    </div>
                    <div className="text-[11px] text-muted-foreground md:text-[12px]">
                      Recebido
                    </div>
                    <div className="text-right text-[11px] text-muted-foreground md:text-[12px]">
                      Prioridade
                    </div>
                    <div className="text-[11px] text-foreground md:text-[12px]">
                      CAS-4821
                    </div>
                    <div className="text-[11px] text-foreground md:text-[12px]">
                      08:42
                    </div>
                    <div className="text-right text-[11px] text-foreground md:text-[12px]">
                      Revisão final
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{
                    opacity: visibleSections.includes(2) ? 1 : 0,
                    y: visibleSections.includes(2) ? 0 : 6,
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="grid grid-cols-12 border-b border-border py-1.5 md:py-2">
                    <div className="col-span-3 text-[10px] text-muted-foreground md:text-[12px]">
                      Seção
                    </div>
                    <div className="col-span-2 text-right text-[10px] text-muted-foreground md:text-[12px]">
                      Status
                    </div>
                    <div className="col-span-2 text-right text-[10px] text-muted-foreground md:text-[12px]">
                      Origem
                    </div>
                    <div className="col-span-5 text-right text-[10px] text-muted-foreground md:text-[12px]">
                      Conteúdo
                    </div>
                  </div>

                  <div className="grid grid-cols-12 py-2 md:py-3">
                    <div className="col-span-3 text-[10px] text-foreground md:text-[12px]">
                      Técnica
                    </div>
                    <div className="col-span-2 text-right text-[10px] text-foreground md:text-[12px]">
                      OK
                    </div>
                    <div className="col-span-2 text-right text-[10px] text-foreground md:text-[12px]">
                      Template
                    </div>
                    <div className="col-span-5 text-right text-[10px] text-foreground md:text-[12px]">
                      TC sem contraste.
                    </div>
                  </div>

                  <div className="grid grid-cols-12 py-2 md:py-3">
                    <div className="col-span-3 text-[10px] text-foreground md:text-[12px]">
                      Achados
                    </div>
                    <div className="col-span-2 text-right text-[10px] text-foreground md:text-[12px]">
                      OK
                    </div>
                    <div className="col-span-2 text-right text-[10px] text-foreground md:text-[12px]">
                      Voz + IA
                    </div>
                    <div className="col-span-5 text-right text-[10px] text-foreground md:text-[12px]">
                      Sem hemorragia aguda.
                    </div>
                  </div>

                  <div className="grid grid-cols-12 border-b border-border py-2 md:py-3">
                    <div className="col-span-3 text-[10px] text-foreground md:text-[12px]">
                      Impressão
                    </div>
                    <div className="col-span-2 text-right text-[10px] text-foreground md:text-[12px]">
                      Revisar
                    </div>
                    <div className="col-span-2 text-right text-[10px] text-foreground md:text-[12px]">
                      Copilot
                    </div>
                    <div className="col-span-5 text-right text-[10px] text-foreground md:text-[12px]">
                      Sem evento intracraniano agudo.
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{
                    opacity: visibleSections.includes(3) ? 1 : 0,
                    y: visibleSections.includes(3) ? 0 : 6,
                  }}
                  transition={{ duration: 0.25 }}
                  className="mt-4"
                >
                  <div className="grid grid-cols-12 py-1.5 md:py-2">
                    <div className="col-span-7 md:col-span-8" />
                    <div className="col-span-2 text-right text-[10px] text-muted-foreground md:text-[12px]">
                      Consistência
                    </div>
                    <div className="col-span-3 text-right text-[10px] text-foreground md:col-span-2 md:text-[12px]">
                      98%
                    </div>
                  </div>
                  <div className="grid grid-cols-12 py-1.5 md:py-2">
                    <div className="col-span-7 md:col-span-8" />
                    <div className="col-span-2 text-right text-[10px] text-muted-foreground md:text-[12px]">
                      Checklist
                    </div>
                    <div className="col-span-3 text-right text-[10px] text-foreground md:col-span-2 md:text-[12px]">
                      Completo
                    </div>
                  </div>
                  <div className="grid grid-cols-12 border-t border-border py-1.5 md:py-2">
                    <div className="col-span-7 md:col-span-8" />
                    <div className="col-span-2 text-right text-[10px] text-muted-foreground md:text-[12px]">
                      CRIT
                    </div>
                    <div className="col-span-3 text-right text-[10px] text-foreground md:col-span-2 md:text-[12px]">
                      Não acionado
                    </div>
                  </div>
                </motion.div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="px-2 pb-2 pt-1 md:px-3 md:pb-3">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{
            opacity: visibleSections.includes(4) ? 1 : 0,
            y: visibleSections.includes(4) ? 0 : 6,
          }}
          transition={{ duration: 0.25 }}
          className="border-t border-border pt-2 md:pt-3"
        >
          <div className="py-0.5 md:py-1">
            <div className="text-[11px] text-muted-foreground md:text-[12px]">
              Contexto clínico
            </div>
            <div className="break-words text-[11px] text-foreground md:text-[12px]">
              Pedido: cefaleia intensa há 24h, sem trauma recente.
            </div>
            <div className="text-[11px] text-foreground md:text-[12px]">
              Referência: CAS-4821
            </div>
          </div>
          <div className="mt-1.5 flex items-end justify-between md:mt-2">
            <button
              type="button"
              className="flex items-center gap-1 text-[11px] leading-[15px] text-muted-foreground hover:text-foreground md:text-[12px] md:leading-[16px]"
            >
              <MdOutlineOpenInNew size={11} />
              <span>Abrir rascunho</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
