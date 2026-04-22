"use client";

import Link from "next/link";

const bullets = [
  "Integração com PACS/RIS e API para cenários institucionais",
  "SSO/SAML, perfis de acesso e governança enterprise",
  "Máscaras, vocabulário e descritores customizáveis por serviço",
  "CRIT com SLA, auditoria e prova jurídica para achados críticos",
  "Onboarding e suporte dedicados para implantação",
];

export function PreAccountingSection() {
  return (
    <section className="bg-background py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1000px] mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-serif text-2xl sm:text-2xl text-foreground">
            Pronto para instituições que não podem improvisar
          </h2>
          <p className="font-sans text-base text-muted-foreground leading-normal max-w-2xl mx-auto">
            O Enterprise do sagittal.health foi pensado para hospitais e
            operações de maior porte que precisam de padrão, auditoria e
            integração real.
          </p>
        </div>

        <div className="border border-border bg-secondary/20 p-6 lg:p-8 space-y-5">
          {bullets.map((bullet) => (
            <div key={bullet} className="flex items-start gap-3">
              <span className="mt-1 block w-1.5 h-1.5 bg-foreground" />
              <span className="font-sans text-sm text-foreground">{bullet}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/customers"
            className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            Ver como a plataforma escala para equipes e instituições
          </Link>
        </div>
      </div>
    </section>
  );
}
