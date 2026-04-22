"use client";

import Link from "next/link";
import { AppLogo } from "@/components/app-logo";
import { apps } from "@/data/apps";

interface IntegrationsSectionProps {
  title?: string;
  subtitle?: string;
}

function Pill({
  id,
  name,
  slug,
  logoUrl,
}: {
  id: string;
  name: string;
  slug: string;
  logoUrl?: string;
}) {
  return (
    <Link
      href={`/integrations/${slug}`}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-background whitespace-nowrap hover:border-foreground/20 transition-colors"
    >
      <div className="w-4 h-4 flex-shrink-0">
        <AppLogo appId={id} logoUrl={logoUrl} />
      </div>
      <span className="font-sans text-sm text-foreground">{name}</span>
    </Link>
  );
}

export function IntegrationsSection({
  title = "A Laudos.AI trabalha com o stack que a sua operação já usa",
  subtitle = "Integrações clínicas, colaborativas e técnicas para levar editor, templates, comunicação crítica e IA ao fluxo real.",
}: IntegrationsSectionProps) {
  const row1 = apps.slice(0, Math.ceil(apps.length / 2));
  const row2 = apps.slice(Math.ceil(apps.length / 2));

  return (
    <section className="bg-background py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center space-y-4 mb-10">
          <h2 className="font-serif text-2xl sm:text-2xl text-foreground">
            {title}
          </h2>
          <p className="hidden sm:block font-sans text-base text-muted-foreground leading-normal max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex flex-wrap justify-center gap-2">
            {row1.map((app) => (
              <Pill
                key={app.id}
                id={app.id}
                name={app.name}
                slug={app.slug}
                logoUrl={app.logoUrl}
              />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {row2.map((app) => (
              <Pill
                key={app.id}
                id={app.id}
                name={app.name}
                slug={app.slug}
                logoUrl={app.logoUrl}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/integrations"
            className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            Ver todas as integrações
          </Link>
        </div>
      </div>
    </section>
  );
}
