"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AccountNode {
  id: number;
  x: number;
  y: number;
  label: string;
  chip: string;
}

interface FlowEntry {
  id: number;
  description: string;
  date: string;
  category: string;
  categoryColor: string;
  turnaround: string;
  turnaroundTone: "default" | "good" | "critical";
}

export function TransactionFlowAnimation({
  onComplete,
  shouldPlay = true,
}: {
  onComplete?: () => void;
  shouldPlay?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showAccounts, setShowAccounts] = useState(false);
  const [showArrows, setShowArrows] = useState(false);
  const [showTransactions, setShowTransactions] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const topY = isMobile ? 60 : 80;
  const nodeSpacing = 90;
  const viewBoxWidth = 500;
  const totalNodesWidth = nodeSpacing * 3;
  const startX = (viewBoxWidth - totalNodesWidth) / 2;

  const accountNodes: AccountNode[] = [
    {
      id: 1,
      x: startX,
      y: topY,
      label: "Origem",
      chip: "PACS",
    },
    {
      id: 2,
      x: startX + nodeSpacing,
      y: topY,
      label: "Contexto",
      chip: "RIS",
    },
    {
      id: 3,
      x: startX + nodeSpacing * 2,
      y: topY,
      label: "Estrutura",
      chip: "IA",
    },
    {
      id: 4,
      x: startX + nodeSpacing * 3,
      y: topY,
      label: "Saída",
      chip: "CRIT",
    },
  ];

  const turnaroundToneClass = (
    tone: FlowEntry["turnaroundTone"],
  ): string => {
    if (tone === "good") return "text-[#4CAF50]";
    if (tone === "critical") return "text-[#F97316]";
    return "text-foreground";
  };

  const transactions: FlowEntry[] = [
    {
      id: 1,
      description: "TC abdome total",
      date: "22 abr",
      category: "Abdome",
      categoryColor: "#3B82F6",
      turnaround: "07 min",
      turnaroundTone: "good",
    },
    {
      id: 2,
      description: "RM encéfalo",
      date: "22 abr",
      category: "Neuro",
      categoryColor: "#8B5CF6",
      turnaround: "16 min",
      turnaroundTone: "default",
    },
    {
      id: 3,
      description: "RX tórax PA",
      date: "22 abr",
      category: "Tórax",
      categoryColor: "#22C55E",
      turnaround: "03 min",
      turnaroundTone: "good",
    },
    {
      id: 4,
      description: "US abdome total",
      date: "21 abr",
      category: "Ultrassom",
      categoryColor: "#EAB308",
      turnaround: "11 min",
      turnaroundTone: "default",
    },
    {
      id: 5,
      description: "TC crânio trauma",
      date: "21 abr",
      category: "Urgência",
      categoryColor: "#F97316",
      turnaround: "CRIT",
      turnaroundTone: "critical",
    },
    {
      id: 6,
      description: "AngioTC pulmonar",
      date: "21 abr",
      category: "Vascular",
      categoryColor: "#06B6D4",
      turnaround: "14 min",
      turnaroundTone: "default",
    },
    {
      id: 7,
      description: "Mamografia rastreio",
      date: "20 abr",
      category: "Mama",
      categoryColor: "#EC4899",
      turnaround: "08 min",
      turnaroundTone: "good",
    },
    {
      id: 8,
      description: "TC seios da face",
      date: "20 abr",
      category: "Otorrino",
      categoryColor: "#6366F1",
      turnaround: "09 min",
      turnaroundTone: "good",
    },
    {
      id: 9,
      description: "RX coluna lombar",
      date: "20 abr",
      category: "Ortopedia",
      categoryColor: "#14B8A6",
      turnaround: "12 min",
      turnaroundTone: "default",
    },
    {
      id: 10,
      description: "RM joelho direito",
      date: "19 abr",
      category: "Músculo-esquelético",
      categoryColor: "#A855F7",
      turnaround: "18 min",
      turnaroundTone: "default",
    },
    {
      id: 11,
      description: "TC tórax alta resolução",
      date: "19 abr",
      category: "Pneumo",
      categoryColor: "#10B981",
      turnaround: "10 min",
      turnaroundTone: "good",
    },
  ];

  const transactionListTopY = isMobile ? 180 : 200;
  const viewBoxHeight = isMobile ? 180 : 200;

  const arrowPaths = [
    {
      id: 1,
      from: { x: accountNodes[0]?.x ?? 0, y: (accountNodes[0]?.y ?? 0) + 18 },
      to: { x: accountNodes[0]?.x ?? 0, y: transactionListTopY },
    },
    {
      id: 2,
      from: { x: accountNodes[1]?.x ?? 0, y: (accountNodes[1]?.y ?? 0) + 18 },
      to: { x: accountNodes[1]?.x ?? 0, y: transactionListTopY },
    },
    {
      id: 3,
      from: { x: accountNodes[2]?.x ?? 0, y: (accountNodes[2]?.y ?? 0) + 18 },
      to: { x: accountNodes[2]?.x ?? 0, y: transactionListTopY },
    },
    {
      id: 4,
      from: { x: accountNodes[3]?.x ?? 0, y: (accountNodes[3]?.y ?? 0) + 18 },
      to: { x: accountNodes[3]?.x ?? 0, y: transactionListTopY },
    },
  ] as const;

  useEffect(() => {
    if (!shouldPlay) return;

    const accountsTimer = setTimeout(() => setShowAccounts(true), 0);
    const arrowsTimer = setTimeout(() => setShowArrows(true), 500);
    const transactionsTimer = setTimeout(() => setShowTransactions(true), 900);

    const doneTimer = onComplete
      ? setTimeout(() => {
          onComplete();
        }, 10000)
      : undefined;

    return () => {
      clearTimeout(accountsTimer);
      clearTimeout(arrowsTimer);
      clearTimeout(transactionsTimer);
      if (doneTimer) clearTimeout(doneTimer);
    };
  }, [shouldPlay, onComplete]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex flex-col relative overflow-hidden"
    >
      {/* Header */}
      <div className="px-2 md:px-3 pt-2 md:pt-3 pb-1.5 md:pb-2 border-b border-border relative z-10">
        <h3 className="text-[13px] md:text-[14px] text-foreground">
          Fluxo clínico
        </h3>
      </div>

      {/* Main content area */}
      <div className="flex-1 relative overflow-hidden flex flex-col z-10">
        {/* SVG for account nodes and arrows */}
        <div className="flex-shrink-0 h-[140px] md:h-[200px] relative overflow-hidden">
          <svg
            className="w-full h-full"
            viewBox={`0 0 500 ${viewBoxHeight}`}
            preserveAspectRatio="xMidYMin meet"
            style={{ display: "block" }}
          >
            {accountNodes.map((node, _index) => (
              <g key={node.id}>
                <rect
                  x={node.x - 18}
                  y={node.y - 18}
                  width={36}
                  height={36}
                  rx={0}
                  fill="hsl(var(--secondary))"
                  stroke="hsl(var(--border))"
                  strokeWidth={1}
                  opacity={showAccounts ? 1 : 0}
                />
                <foreignObject
                  x={node.x - 18}
                  y={node.y - 18}
                  width={36}
                  height={36}
                  style={{ overflow: "visible" }}
                >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    >
                      <div
                        style={{
                          color: "hsl(var(--foreground))",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          opacity: showAccounts ? 1 : 0,
                          fontSize: "8px",
                          fontWeight: 600,
                          letterSpacing: "0.08em",
                        }}
                      >
                        {node.chip}
                      </div>
                    </div>
                  </foreignObject>
                <text
                  x={node.x}
                  y={node.y - 25}
                  textAnchor="middle"
                  fontSize="9"
                  fill="hsl(var(--muted-foreground))"
                  opacity={showAccounts ? 1 : 0}
                  className="hidden md:block"
                >
                  {node.label}
                </text>
              </g>
            ))}

            {arrowPaths.map((arrow, index) => {
              const pathId = `arrow-${arrow.id}`;
              const pathD = `M ${arrow.from.x} ${arrow.from.y} L ${arrow.to.x} ${arrow.to.y}`;
              const dashLength = 4;
              const gapLength = 3;
              const totalDashLength = dashLength + gapLength;

              return (
                <motion.path
                  key={pathId}
                  d={pathD}
                  stroke="hsl(var(--border))"
                  strokeWidth={1}
                  fill="none"
                  strokeDasharray={`${dashLength} ${gapLength}`}
                  initial={{ opacity: 0, strokeDashoffset: 0 }}
                  animate={{
                    opacity: showArrows ? 1 : 0,
                    strokeDashoffset: showArrows ? [0, -totalDashLength] : 0,
                  }}
                  transition={{
                    opacity: { duration: 0.3, delay: index * 0.15 },
                    strokeDashoffset: {
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                      delay: index * 0.15 + 0.3,
                    },
                  }}
                />
              );
            })}
          </svg>
        </div>

        {/* Transaction list */}
        <div className="flex-1 min-h-0 overflow-hidden border border-border bg-background">
          <table
            className="w-full border-collapse"
            style={{ borderSpacing: 0 }}
          >
            <thead className="sticky top-0 z-10 bg-secondary border-b border-border">
              <tr className="h-[28px] md:h-[32px]">
                <th className="w-[60px] md:w-[70px] px-1.5 md:px-2 text-left text-[10px] md:text-[11px] font-medium text-muted-foreground border-r border-border">
                  Data
                </th>
                <th className="w-[140px] md:w-[160px] px-1.5 md:px-2 text-left text-[10px] md:text-[11px] font-medium text-muted-foreground border-r border-border">
                  Caso
                </th>
                <th className="w-[90px] md:w-[100px] px-1.5 md:px-2 text-left text-[10px] md:text-[11px] font-medium text-muted-foreground border-r border-border">
                  TAT
                </th>
                <th className="w-[110px] md:w-[120px] px-1.5 md:px-2 text-left text-[10px] md:text-[11px] font-medium text-muted-foreground">
                  Fila
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <motion.tr
                  key={transaction.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: showTransactions ? 1 : 0,
                    y: showTransactions ? 0 : 10,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  className="h-[28px] md:h-[32px] border-b border-border bg-background hover:bg-secondary transition-colors"
                >
                  <td className="w-[60px] md:w-[70px] px-1.5 md:px-2 text-[10px] md:text-[11px] text-muted-foreground border-r border-border">
                    {transaction.date}
                  </td>
                  <td
                    className="w-[140px] md:w-[160px] px-1.5 md:px-2 text-[10px] md:text-[11px] border-r border-border text-foreground"
                  >
                    <div className="truncate" title={transaction.description}>
                      {transaction.description}
                    </div>
                  </td>
                  <td
                    className={`w-[90px] md:w-[100px] px-1.5 md:px-2 text-[10px] md:text-[11px] border-r border-border ${turnaroundToneClass(
                      transaction.turnaroundTone,
                    )}`}
                  >
                    {transaction.turnaround}
                  </td>
                  <td className="w-[110px] md:w-[120px] px-1.5 md:px-2">
                    <div className="flex items-center gap-1 md:gap-1.5">
                      <div
                        className="w-2 h-2 md:w-2.5 md:h-2.5 flex-shrink-0"
                        style={{ backgroundColor: transaction.categoryColor }}
                      />
                      <span className="text-[10px] md:text-[11px] text-foreground truncate">
                        {transaction.category}
                      </span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
