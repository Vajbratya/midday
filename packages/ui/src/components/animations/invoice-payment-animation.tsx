"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface QueueCase {
  id: string;
  caseName: string;
  tat: string;
  deadline: string;
  modality: string;
  status: "recebido" | "concluído" | "crítico" | "revisão" | "template";
}

const initialCases: Omit<QueueCase, "status">[] = [
  {
    id: "1",
    caseName: "Hospital Norte · TC crânio",
    tat: "12 min",
    deadline: "08:10",
    modality: "TC",
  },
  {
    id: "2",
    caseName: "Clínica Atlas · RX tórax",
    tat: "4 min",
    deadline: "08:18",
    modality: "RX",
  },
  {
    id: "3",
    caseName: "Hospital Sul · RM joelho",
    tat: "19 min",
    deadline: "08:22",
    modality: "RM",
  },
  {
    id: "4",
    caseName: "Pronto Centro · TC abdome",
    tat: "16 min",
    deadline: "08:27",
    modality: "TC",
  },
  {
    id: "5",
    caseName: "Hospital Norte · US abdome",
    tat: "9 min",
    deadline: "08:31",
    modality: "US",
  },
  {
    id: "6",
    caseName: "Clínica Prisma · RX coluna",
    tat: "7 min",
    deadline: "08:35",
    modality: "RX",
  },
  {
    id: "7",
    caseName: "Hospital Sul · TC tórax",
    tat: "14 min",
    deadline: "08:40",
    modality: "TC",
  },
  {
    id: "8",
    caseName: "Instituto Alfa · RM crânio",
    tat: "22 min",
    deadline: "08:44",
    modality: "RM",
  },
  {
    id: "9",
    caseName: "Hospital Norte · RX mão",
    tat: "5 min",
    deadline: "08:49",
    modality: "RX",
  },
  {
    id: "10",
    caseName: "Pronto Centro · TC face",
    tat: "11 min",
    deadline: "08:53",
    modality: "TC",
  },
  {
    id: "11",
    caseName: "Clínica Atlas · US pélvica",
    tat: "13 min",
    deadline: "08:58",
    modality: "US",
  },
  {
    id: "12",
    caseName: "Hospital Sul · RM lombar",
    tat: "21 min",
    deadline: "09:02",
    modality: "RM",
  },
];

export function InvoicePaymentAnimation({
  onComplete,
  shouldPlay = true,
}: {
  onComplete?: () => void;
  shouldPlay?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showCards, setShowCards] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [queueCases, setQueueCases] = useState<QueueCase[]>(
    initialCases.map((item) => ({ ...item, status: "recebido" as const })),
  );
  const [showTatHealth, setShowTatHealth] = useState(false);
  const [visibleBars, setVisibleBars] = useState<number[]>([]);

  const [queueCount] = useState("18");
  const [criticalCount, setCriticalCount] = useState(1);
  const [completedCount, setCompletedCount] = useState(124);
  const tatBars = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    filled: index < 8,
  }));

  useEffect(() => {
    if (!shouldPlay) return;

    const timers: NodeJS.Timeout[] = [];

    timers.push(setTimeout(() => setShowCards(true), 0));
    timers.push(
      setTimeout(() => {
        setShowTatHealth(true);
        tatBars.forEach((_, index) => {
          timers.push(
            setTimeout(() => {
              setVisibleBars((prev) => [...prev, index]);
            }, 900 + index * 50),
          );
        });
      }, 700),
    );
    timers.push(setTimeout(() => setShowTable(true), 500));

    const criticalIndices = [2, 7];
    const reviewIndices = [1];
    const templateIndices = [4];
    let completedInCycle = 0;
    let criticalInCycle = 0;

    initialCases.forEach((item, index) => {
      timers.push(
        setTimeout(() => {
          const isCritical = criticalIndices.includes(index);
          const isReview = reviewIndices.includes(index);
          const isTemplate = templateIndices.includes(index);

          let nextStatus: QueueCase["status"];

          if (isCritical) {
            nextStatus = "crítico";
            criticalInCycle += 1;
          } else if (isReview) {
            nextStatus = "revisão";
          } else if (isTemplate) {
            nextStatus = "template";
          } else {
            nextStatus = "concluído";
            completedInCycle += 1;
          }

          setQueueCases((prev) =>
            prev.map((queueCase, queueIndex) =>
              queueIndex === index
                ? { ...queueCase, status: nextStatus }
                : queueCase,
            ),
          );

          if (index === initialCases.length - 1) {
            setCriticalCount((prev) => prev + criticalInCycle);
            setCompletedCount((prev) => prev + completedInCycle);
          }
        }, 2000 + index * 400),
      );
    });

    if (onComplete) {
      timers.push(setTimeout(() => onComplete(), 15000));
    }

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [shouldPlay, onComplete]);

  return (
    <div
      ref={containerRef}
      className="relative flex h-full w-full flex-col overflow-hidden"
    >
      <div className="relative z-10 border-b border-border px-2 pb-2 pt-3 md:px-3 md:pb-3 md:pt-4">
        <h3 className="text-[13px] text-foreground md:text-[14px]">
          Fila de laudos
        </h3>
      </div>

      <div className="relative z-10 flex min-h-0 flex-1 flex-col overflow-hidden">
        {showCards ? (
          <div className="grid grid-cols-2 gap-3 pb-4 pt-4 md:gap-4 md:pb-6 md:pt-6">
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="border border-border bg-background p-3 md:p-4"
            >
              <div className="mb-1 font-serif text-base text-foreground md:mb-1.5 md:text-lg">
                {queueCount}
              </div>
              <div className="mb-1 font-sans text-[10px] text-foreground md:mb-1.5 md:text-xs">
                Na fila
              </div>
              <div className="font-sans text-[9px] text-muted-foreground md:text-[10px]">
                Casos aguardando agora
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="border border-border bg-background p-3 md:p-4"
            >
              <div className="mb-1 font-serif text-base text-foreground md:mb-1.5 md:text-lg">
                {criticalCount}
              </div>
              <div className="mb-1 font-sans text-[10px] text-foreground md:mb-1.5 md:text-xs">
                CRIT
              </div>
              <div className="font-sans text-[9px] text-muted-foreground md:text-[10px]">
                Alertas ativos
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="border border-border bg-background p-3 md:p-4"
            >
              <div className="mb-1 font-serif text-base text-foreground md:mb-1.5 md:text-lg">
                {completedCount}
              </div>
              <div className="mb-1 font-sans text-[10px] text-foreground md:mb-1.5 md:text-xs">
                Concluídos
              </div>
              <div className="font-sans text-[9px] text-muted-foreground md:text-[10px]">
                Laudos liberados hoje
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="border border-border bg-background p-3 md:p-4"
            >
              <div className="mb-1.5 flex items-center justify-between md:mb-2">
                <div className="font-serif text-base text-foreground md:text-lg">
                  Bom
                </div>
                {showTatHealth ? (
                  <div className="flex items-end gap-1 md:gap-1">
                    {tatBars.map((bar, index) => (
                      <motion.div
                        key={bar.id}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: visibleBars.includes(index) ? "18px" : 0,
                          opacity: visibleBars.includes(index) ? 1 : 0,
                        }}
                        transition={{
                          duration: 0.2,
                          delay: index * 0.05,
                          ease: "easeOut",
                        }}
                        className={`w-[2px] md:w-[3px] ${
                          bar.filled ? "bg-foreground" : "bg-muted-foreground"
                        }`}
                        style={{ minHeight: "18px" }}
                      />
                    ))}
                  </div>
                ) : null}
              </div>
              <div className="mb-1.5 font-sans text-[10px] text-foreground md:mb-2 md:text-xs">
                Saúde do TAT
              </div>
              <div className="font-sans text-[9px] text-muted-foreground md:text-[10px]">
                Dentro do esperado
              </div>
            </motion.div>
          </div>
        ) : null}

        {showTable ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="flex-1 min-h-0 overflow-hidden border border-border bg-background"
          >
            <table
              className="w-full border-collapse"
              style={{ borderSpacing: 0 }}
            >
              <thead className="sticky top-0 z-10 border-b border-border bg-secondary">
                <tr className="h-[28px] md:h-[32px]">
                  <th className="w-[75px] border-r border-border px-1.5 text-left text-[10px] font-medium text-muted-foreground md:w-[70px] md:px-2 md:text-[11px]">
                    Prazo
                  </th>
                  <th className="w-[140px] border-r border-border px-1.5 text-left text-[10px] font-medium text-muted-foreground md:w-[170px] md:px-2 md:text-[11px]">
                    Caso
                  </th>
                  <th className="w-[90px] border-r border-border px-1.5 text-left text-[10px] font-medium text-muted-foreground md:w-[100px] md:px-2 md:text-[11px]">
                    TAT
                  </th>
                  <th className="hidden w-[90px] border-r border-border px-1.5 text-left text-[10px] font-medium text-muted-foreground md:table-cell md:w-[100px] md:px-2 md:text-[11px] lg:hidden">
                    Modalidade
                  </th>
                  <th className="w-[115px] px-1.5 text-left text-[10px] font-medium text-muted-foreground md:w-[110px] md:px-2 md:text-[11px]">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {queueCases.map((queueCase, index) => (
                  <motion.tr
                    key={queueCase.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: showTable ? 1 : 0,
                      y: showTable ? 0 : 10,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: 0.5 + index * 0.08,
                      ease: "easeOut",
                    }}
                    className="h-[28px] border-b border-border bg-background transition-colors hover:bg-secondary md:h-[32px]"
                  >
                    <td className="w-[75px] border-r border-border px-1.5 text-[10px] text-muted-foreground md:w-[70px] md:px-2 md:text-[11px]">
                      {queueCase.deadline}
                    </td>
                    <td className="w-[140px] border-r border-border px-1.5 text-[10px] text-foreground md:w-[170px] md:px-2 md:text-[11px]">
                      <div className="truncate" title={queueCase.caseName}>
                        {queueCase.caseName}
                      </div>
                    </td>
                    <td className="w-[90px] border-r border-border px-1.5 text-[10px] text-foreground md:w-[100px] md:px-2 md:text-[11px]">
                      {queueCase.tat}
                    </td>
                    <td className="hidden w-[90px] border-r border-border px-1.5 text-[10px] text-foreground md:table-cell md:w-[100px] md:px-2 md:text-[11px] lg:hidden">
                      {queueCase.modality}
                    </td>
                    <td className="w-[115px] px-1.5 md:w-[110px] md:px-2">
                      <div className="flex h-full items-center">
                        <AnimatePresence mode="wait">
                          {queueCase.status === "recebido" ? (
                            <motion.div
                              key="recebido"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.9 }}
                              transition={{ duration: 0.2 }}
                              className="inline-flex items-center rounded-full border border-border bg-secondary px-1.5 py-px"
                            >
                              <span className="font-sans text-[9px] text-foreground md:text-[10px]">
                                Recebido
                              </span>
                            </motion.div>
                          ) : queueCase.status === "crítico" ? (
                            <motion.div
                              key="crítico"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.9 }}
                              transition={{ duration: 0.2 }}
                              className="inline-flex items-center rounded-full border border-red-500/20 bg-red-500/10 px-1.5 py-px"
                            >
                              <span className="font-sans text-[9px] text-red-500 md:text-[10px]">
                                CRIT
                              </span>
                            </motion.div>
                          ) : queueCase.status === "revisão" ? (
                            <motion.div
                              key="revisão"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.9 }}
                              transition={{ duration: 0.2 }}
                              className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-1.5 py-px"
                            >
                              <span className="font-sans text-[9px] text-blue-500 md:text-[10px]">
                                Revisão
                              </span>
                            </motion.div>
                          ) : queueCase.status === "template" ? (
                            <motion.div
                              key="template"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.9 }}
                              transition={{ duration: 0.2 }}
                              className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-1.5 py-px"
                            >
                              <span className="font-sans text-[9px] text-orange-500 md:text-[10px]">
                                Template
                              </span>
                            </motion.div>
                          ) : (
                            <motion.div
                              key="concluído"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.9 }}
                              transition={{ duration: 0.2 }}
                              className="inline-flex items-center rounded-full border border-green-500/20 bg-green-500/10 px-1.5 py-px"
                            >
                              <span className="font-sans text-[9px] text-green-500 md:text-[10px]">
                                Concluído
                              </span>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        ) : null}
      </div>
    </div>
  );
}
