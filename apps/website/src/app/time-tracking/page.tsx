import { TimeTracking } from "@/components/time-tracking";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Produtividade e TAT",
  description:
    "Acompanhe tempo por caso, fila, radiologista e plantao para entender produtividade real e cumprir SLA.",
  path: "/time-tracking",
  og: {
    title: "Produtividade",
    description: "Tempo, volume e TAT com contexto",
  },
  keywords: [
    "tat radiologia",
    "produtividade radiologista",
    "tempo por caso",
    "fila de laudos",
    "sla radiologia",
  ],
});

export default function Page() {
  return <TimeTracking />;
}
