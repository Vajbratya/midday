"use client";

import { useState } from "react";

const faqs = [
  {
    question: "A IA vai substituir o radiologista?",
    answer:
      "Não. A IA da Laudos.AI é aplicada à redação e estruturação do laudo, não ao diagnóstico. A decisão clínica e a assinatura continuam 100% com o médico.",
  },
  {
    question: "A transcrição por voz funciona bem com termos médicos?",
    answer:
      "Sim. O modelo foi pensado para radiologia e trabalha com vocabulário, estrutura e contexto do laudo em português.",
  },
  {
    question: "Preciso instalar algum software?",
    answer:
      "Não. Tudo funciona no navegador, em computador, tablet ou celular. O editor mobile está em rollout.",
  },
  {
    question: "Funciona para clínicas pequenas?",
    answer:
      "Sim. O ganho de produtividade individual costuma ser ainda mais visível em operações menores, sem perder o caminho para crescer.",
  },
  {
    question: "O que está incluso no Enterprise?",
    answer:
      "Integrações PACS/RIS, CRIT com SLA e auditoria, SSO/SAML, suporte dedicado, onboarding e customização institucional de máscaras, vocabulário e descritores.",
  },
  {
    question: "Meus dados e laudos ficam seguros?",
    answer:
      "A plataforma foi desenhada para ambientes sensíveis, com trilha de auditoria, controle de acesso e suporte a cenários enterprise.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-background py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1000px] mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-serif text-2xl sm:text-2xl text-foreground">
            Perguntas frequentes
          </h2>
          <p className="font-sans text-base text-muted-foreground max-w-2xl mx-auto">
            O que costuma aparecer antes da implantação ou do primeiro plantão.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="border border-border bg-background">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/40 transition-colors"
              >
                <span className="font-sans text-sm text-foreground pr-6">
                  {faq.question}
                </span>
                <span className="text-muted-foreground">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4">
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
