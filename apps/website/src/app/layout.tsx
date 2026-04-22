import "@/styles/globals.css";
import { cn } from "@midday/ui/cn";
import "@midday/ui/globals.css";
import { Provider as Analytics } from "@midday/events/client";
import type { Metadata } from "next";
import { Hedvig_Letters_Sans, Hedvig_Letters_Serif } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import type { ReactElement } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { baseUrl } from "./sitemap";

const hedvigSans = Hedvig_Letters_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "optional",
  variable: "--font-hedvig-sans",
  preload: true,
  adjustFontFallback: true,
  fallback: ["system-ui", "arial"],
});

const hedvigSerif = Hedvig_Letters_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "optional",
  variable: "--font-hedvig-serif",
  preload: true,
  adjustFontFallback: true,
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "sagittal.health by laudosai — Laudos radiológicos com IA e voz natural",
    template: "%s | sagittal.health",
  },
  description:
    "Descreva os achados com naturalidade. O sagittal.health organiza o conteúdo em um laudo estruturado, pronto para revisar e assinar.",
  openGraph: {
    title: "sagittal.health by laudosai — Laudos radiológicos com IA e voz natural",
    description:
      "Pare de ditar pontuação. Comece a laudar de verdade com voz natural, IA assistiva e integração PACS/RIS.",
    url: baseUrl,
    siteName: "sagittal.health",
    locale: "pt_BR",
    type: "website",
    images: [{ url: `${baseUrl}/api/og`, width: 1200, height: 630 }],
  },
  twitter: {
    title: "sagittal.health by laudosai — Laudos radiológicos com IA e voz natural",
    description:
      "IA aplicada ao fluxo real da radiologia: voz natural, editor estruturado, CRIT e integração institucional.",
    images: [{ url: `${baseUrl}/api/og`, width: 1200, height: 630 }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)" },
    { media: "(prefers-color-scheme: dark)" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "sagittal.health by laudosai",
  url: baseUrl,
  logo: `${baseUrl}/favicon.ico`,
  sameAs: [
    `${baseUrl}/story`,
    `${baseUrl}/pricing`,
    `${baseUrl}/chat`,
  ],
  description:
    "Software para o momento mais crítico da radiologia: quando a imagem precisa virar decisão, laudo e comunicação segura.",
};

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body
        className={cn(
          `${hedvigSans.variable} ${hedvigSerif.variable} font-sans`,
          "bg-background overflow-x-hidden font-sans antialiased",
        )}
      >
        <NuqsAdapter>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey="laudos-website-theme"
            disableTransitionOnChange
          >
            <Header />
            <main className="container mx-auto px-4 overflow-hidden md:overflow-visible">
              {children}
            </main>
            <Footer />
            <Analytics />
          </ThemeProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
