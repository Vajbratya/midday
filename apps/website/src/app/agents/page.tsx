import { GeistPixelLine } from "geist/font/pixel";
import { Agents } from "@/components/agents";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Agents para Radiologia",
  description:
    "CLI e MCP para agentes que consultam casos, disparam fluxos, consolidam producao e integram a operacao radiologica em qualquer ferramenta.",
  path: "/agents",
  og: { title: "Agents", description: "Agentes para tocar a operacao radiologica" },
  keywords: [
    "agent native cli",
    "infraestrutura para agentes clinicos",
    "MCP",
    "Laudos CLI",
    "operacao radiologica",
    "automacao clinica",
  ],
});

export default function Page() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            :root, .dark {
              --background: 225, 70%, 22% !important;
              --foreground: 0, 0%, 100% !important;
              --muted-foreground: 225, 60%, 75% !important;
              --border: 225, 50%, 35% !important;
              --primary: 0, 0%, 100% !important;
              --primary-foreground: 225, 70%, 22% !important;
              --muted: 225, 60%, 18% !important;
              --secondary: 225, 70%, 22% !important;
              --secondary-foreground: 0, 0%, 100% !important;
            }
            footer img,
            footer svg {
              filter: sepia(0.4) hue-rotate(180deg) saturate(1.5) brightness(0.9);
            }
            img[src*="accounting-"],
            img[src*="header-dock-"] {
              filter: sepia(0.6) hue-rotate(180deg) saturate(2) brightness(0.9);
            }
            footer [data-theme-toggle] {
              display: none;
            }
          `,
        }}
      />
      <Agents pixelFontClass={GeistPixelLine.className} />
    </>
  );
}
