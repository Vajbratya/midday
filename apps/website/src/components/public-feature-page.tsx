"use client";

import { Button } from "@midday/ui/button";
import Image from "next/image";
import Link from "next/link";
import type { FeaturePageContent } from "@/content/feature-pages";
import { HeroImage } from "./hero-image";
import { FeaturesGridSection } from "./sections/features-grid-section";
import { IntegrationsSection } from "./sections/integrations-section";
import { PricingSection } from "./sections/pricing-section";
import { TestimonialsSection } from "./sections/testimonials-section";
import { TimeSavingsSection } from "./sections/time-savings-section";

type PublicFeaturePageProps = {
  content: FeaturePageContent;
  showSharedSections?: boolean;
};

export function PublicFeaturePage({
  content,
  showSharedSections = true,
}: PublicFeaturePageProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-background relative overflow-visible lg:min-h-screen lg:overflow-hidden">
        <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none z-0">
          <Image
            src="/images/grid-light.svg"
            alt=""
            width={1728}
            height={1080}
            className="w-[1728px] h-screen object-cover opacity-100 dark:opacity-[12%] dark:hidden"
            loading="lazy"
          />
          <Image
            src="/images/grid-dark.svg"
            alt=""
            width={1728}
            height={1080}
            className="w-[1728px] h-screen object-cover opacity-[12%] hidden dark:block"
            loading="lazy"
          />
        </div>

        <div className="lg:hidden flex flex-col relative pt-32 pb-8 sm:pt-40 sm:pb-8 md:pt-48 overflow-hidden">
          <div
            className="absolute top-0 left-0 right-0 flex items-center justify-center pointer-events-none z-0"
            style={{ height: "600px" }}
          >
            <Image
              src="/images/grid-light.svg"
              alt=""
              width={1728}
              height={1080}
              className="w-full h-[600px] object-cover opacity-100 dark:opacity-[12%] dark:hidden"
              loading="lazy"
            />
            <Image
              src="/images/grid-dark.svg"
              alt=""
              width={1728}
              height={1080}
              className="w-full h-[600px] object-cover opacity-[12%] hidden dark:block"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col justify-start items-center space-y-6 z-20 px-3 sm:px-4">
            <div className="space-y-4 text-center max-w-3xl px-2 w-full">
              <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider">
                {content.eyebrow}
              </p>
              <h1 className="font-serif text-4xl sm:text-4xl md:text-5xl leading-tight text-foreground">
                {content.title}
              </h1>
              <p className="text-muted-foreground text-base leading-normal font-sans text-center mx-auto max-w-2xl">
                {content.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                <Button asChild className="btn-inverse h-11 px-6">
                  <a href="https://copilot.laudos.ai">Testar grátis</a>
                </Button>
                <Button asChild variant="outline" className="h-11 px-6">
                  <Link href="/pricing">Ver planos</Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-3">
                {content.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="border border-border bg-background/80 px-3 py-3 text-left"
                  >
                    <p className="font-sans text-[11px] uppercase tracking-wide text-muted-foreground">
                      {metric.label}
                    </p>
                    <p className="font-sans text-sm text-foreground mt-1">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center w-full">
              <div className="relative w-full max-w-6xl">
                <div
                  className="absolute bottom-0 left-0 right-0 h-[20%] z-10 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, hsl(var(--background)) 0%, hsl(var(--background)) 20%, hsla(var(--background), 0.8) 40%, hsla(var(--background), 0.5) 60%, hsla(var(--background), 0.2) 80%, transparent 100%)",
                  }}
                />
                <HeroImage
                  lightSrc={content.lightSrc}
                  darkSrc={content.darkSrc}
                  alt={content.alt}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex flex-col min-h-screen relative pt-40 overflow-hidden">
          <div className="flex-1 flex flex-col justify-start items-center space-y-12 z-20 px-4 pt-16">
            <div className="text-center space-y-8 2xl:space-y-12 3xl:space-y-12 w-full">
              <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider">
                {content.eyebrow}
              </p>
              <h1 className="font-serif text-7xl xl:text-8xl 2xl:text-[10rem] leading-tight text-center text-foreground max-w-6xl mx-auto">
                {content.title}
              </h1>
              <p className="text-muted-foreground text-base leading-normal max-w-2xl mx-auto font-sans text-center">
                {content.description}
              </p>
              <div className="flex items-center justify-center gap-3 pt-4">
                <Button asChild className="btn-inverse h-11 px-6">
                  <a href="https://copilot.laudos.ai">Testar grátis</a>
                </Button>
                <Button asChild variant="outline" className="h-11 px-6">
                  <Link href="/pricing">Ver planos</Link>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto pt-4">
                {content.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="border border-border bg-background/80 px-4 py-4 text-left"
                  >
                    <p className="font-sans text-[11px] uppercase tracking-wide text-muted-foreground">
                      {metric.label}
                    </p>
                    <p className="font-sans text-sm text-foreground mt-1">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center w-full">
              <div className="relative w-full max-w-6xl">
                <div
                  className="absolute bottom-0 left-0 right-0 h-[20%] z-10 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, hsl(var(--background)) 0%, hsl(var(--background)) 20%, hsla(var(--background), 0.8) 40%, hsla(var(--background), 0.5) 60%, hsla(var(--background), 0.2) 80%, transparent 100%)",
                  }}
                />
                <HeroImage
                  lightSrc={content.lightSrc}
                  darkSrc={content.darkSrc}
                  alt={content.alt}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-background py-12 sm:py-16 lg:pt-28 lg:pb-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-0">
          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {content.sections.map((section, index) => (
              <div
                key={section.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-stretch"
              >
                <div
                  className={`flex items-center ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="space-y-3 lg:space-y-5 text-center lg:text-left w-full">
                    <h2 className="font-sans text-2xl sm:text-2xl text-foreground">
                      {section.title}
                    </h2>
                    <p className="font-sans text-base text-muted-foreground leading-normal max-w-lg mx-auto lg:mx-0">
                      {section.description}
                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-2">
                      {section.bullets.map((bullet) => (
                        <div
                          key={bullet}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-background"
                        >
                          <span className="font-sans text-sm text-foreground">
                            {bullet}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className={`border border-border overflow-hidden relative bg-background ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div className="absolute inset-0 opacity-40 dark:opacity-20">
                    <Image
                      src="/images/grid-light.svg"
                      alt=""
                      fill
                      className="object-cover dark:hidden"
                    />
                    <Image
                      src="/images/grid-dark.svg"
                      alt=""
                      fill
                      className="object-cover hidden dark:block"
                    />
                  </div>
                  <div className="relative z-10 flex h-full min-h-[320px] items-center justify-center p-8 sm:p-10">
                    <div className="max-w-md text-center space-y-4">
                      <p className="font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        {content.eyebrow}
                      </p>
                      <h3 className="font-serif text-3xl text-foreground">
                        {section.title}
                      </h3>
                      <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showSharedSections && (
        <>
          <FeaturesGridSection />
          <TimeSavingsSection />
          <IntegrationsSection
            title={content.integrationsTitle}
            subtitle={content.integrationsSubtitle}
          />
          <TestimonialsSection />
          <PricingSection />
        </>
      )}
    </div>
  );
}
