import type { ReactNode } from "react";
import { Suspense } from "react";
import { DocsChatProvider } from "@/components/docs/docs-chat-provider";

export const metadata = {
  title: "Documentação",
  description: "Aprenda a usar a Laudos.AI no fluxo radiológico",
};

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={children}>
      <DocsChatProvider>{children}</DocsChatProvider>
    </Suspense>
  );
}
