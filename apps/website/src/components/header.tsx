"use client";

import { track } from "@midday/events/client";
import { LogEvents } from "@midday/events/events";
import { cn } from "@midday/ui/cn";
import { Icons } from "@midday/ui/icons";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { HeaderIntegrationsPreview } from "./header-integrations-preview";
import { defaultTestimonials } from "./sections/testimonials-section";
import { ThemeToggleButton } from "./theme-toggle-button";

const headerTestimonials = defaultTestimonials;

interface HeaderProps {
  transparent?: boolean;
  hideMenuItems?: boolean;
}

// Feature pages to prefetch on hover
const FEATURE_ROUTES = [
  "/assistant",
  "/insights",
  "/transactions",
  "/inbox",
  "/time-tracking",
  "/invoicing",
  "/customers",
  "/file-storage",
  "/pre-accounting",
];

// App pages to prefetch on hover
const APP_ROUTES = [
  "/integrations",
  "/download",
  "/docs",
  "/agents",
  "/computer",
  "/mcp",
];

export function Header({
  transparent = false,
  hideMenuItems = false,
}: HeaderProps) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isAppsOpen, setIsAppsOpen] = useState(false);
  const [isMobileFeaturesOpen, setIsMobileFeaturesOpen] = useState(false);
  const [isMobileAppsOpen, setIsMobileAppsOpen] = useState(false);
  const [visibleIntegrations, setVisibleIntegrations] = useState<
    Array<{ id: number; key: string }>
  >([]);
  const [featuresDropdownHeight, setFeaturesDropdownHeight] = useState<
    number | null
  >(null);
  const featuresTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const appsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const integrationKeyCounterRef = useRef(0);
  const featuresListRef = useRef<HTMLDivElement>(null);
  const preAccountingRef = useRef<HTMLAnchorElement>(null);
  const appsListRef = useRef<HTMLDivElement>(null);
  const macAppRef = useRef<HTMLAnchorElement>(null);
  const integrationsAppRef = useRef<HTMLAnchorElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const featuresPrefetched = useRef(false);
  const appsPrefetched = useRef(false);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Prefetch feature pages on hover (only once)
  const prefetchFeatures = useCallback(() => {
    if (featuresPrefetched.current) return;
    featuresPrefetched.current = true;
    for (const route of FEATURE_ROUTES) {
      router.prefetch(route);
    }
  }, [router]);

  // Prefetch app pages on hover (only once)
  const prefetchApps = useCallback(() => {
    if (appsPrefetched.current) return;
    appsPrefetched.current = true;
    for (const route of APP_ROUTES) {
      router.prefetch(route);
    }
  }, [router]);

  // All non-ERP integrations
  const allIntegrations = [
    { src: "/images/gmail.svg", alt: "Gmail" },
    { src: "/images/slack.svg", alt: "Slack" },
    { src: "/images/stripe.svg", alt: "Stripe" },
    { src: "/images/gdrive.svg", alt: "Google Drive" },
    { src: "/images/outlook.svg", alt: "Outlook" },
    { src: "/images/whatsapp.svg", alt: "WhatsApp" },
    { src: "/images/dropbox.svg", alt: "Dropbox" },
  ];

  // Initialize with 4 random integrations
  useEffect(() => {
    if (isAppsOpen && visibleIntegrations.length === 0) {
      const shuffled = [...allIntegrations.keys()].sort(
        () => Math.random() - 0.5,
      );
      setVisibleIntegrations(
        shuffled.slice(0, 4).map((idx) => ({
          id: idx,
          key: `init-${integrationKeyCounterRef.current++}`,
        })),
      );
    }
  }, [isAppsOpen]);

  // Randomly fade in/out individual logos
  useEffect(() => {
    if (!isAppsOpen || visibleIntegrations.length === 0) return;

    const interval = setInterval(
      () => {
        setVisibleIntegrations((current) => {
          // Randomly decide to replace one logo (70% chance)
          if (Math.random() < 0.7 && current.length === 4) {
            const indexToReplace = Math.floor(Math.random() * 4);
            const availableIndices = allIntegrations
              .map((_, i) => i)
              .filter((i) => !current.some((item) => item.id === i));

            if (availableIndices.length > 0) {
              const newIndex =
                availableIndices[
                  Math.floor(Math.random() * availableIndices.length)
                ];
              const newVisible = [...current];
              newVisible[indexToReplace] = {
                id: newIndex ?? 0,
                key: `change-${integrationKeyCounterRef.current++}`,
              };
              return newVisible;
            }
          }
          return current;
        });
      },
      1500 + Math.random() * 1000,
    ); // Random interval between 1.5-2.5 seconds

    return () => clearInterval(interval);
  }, [isAppsOpen, visibleIntegrations.length]);

  // Match Pre-accounting container height to features list and store height for apps dropdown
  useEffect(() => {
    if (isFeaturesOpen && featuresListRef.current) {
      // Get the full dropdown height including padding
      const featuresDropdown = featuresListRef.current.closest(
        "[data-features-dropdown]",
      ) as HTMLElement;
      const featuresHeight = featuresDropdown
        ? featuresDropdown.offsetHeight
        : featuresListRef.current.offsetHeight;
      setFeaturesDropdownHeight(featuresHeight);
    }
  }, [isFeaturesOpen]);

  // Apps dropdown height matches Features dropdown (image containers are fixed at 442x277)

  useEffect(() => {
    return () => {
      if (featuresTimeoutRef.current) {
        clearTimeout(featuresTimeoutRef.current);
      }
      if (appsTimeoutRef.current) {
        clearTimeout(appsTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Dark Overlay */}
      <div
        className={`fixed left-0 right-0 bottom-0 z-40 transition-opacity duration-150 ${
          isFeaturesOpen || isAppsOpen
            ? "opacity-100 visible bg-black/40"
            : "opacity-0 invisible pointer-events-none"
        }`}
        style={{ top: "72px" }}
      />

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 w-full">
        <div
          ref={headerRef}
          className={cn(
            "relative py-3 xl:py-4 px-4 sm:px-4 md:px-4 lg:px-4 xl:px-6 2xl:px-8 flex items-center justify-between xl:gap-6",
            isMenuOpen && "border-b border-border",
            !transparent && "backdrop-blur-md bg-background-semi-transparent",
            !transparent &&
              (isFeaturesOpen || isAppsOpen) &&
              "xl:bg-background",
          )}
        >
          {/* Logo and Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 active:opacity-80 transition-opacity duration-200 touch-manipulation"
            onClick={() => setIsMenuOpen(false)}
            style={{ WebkitTapHighlightColor: "transparent" }}
            aria-label="sagittal.health by laudosai - Go to homepage"
          >
            <div className="w-6 h-6">
              <Icons.LogoSmall className="w-full h-full text-foreground" />
            </div>
            <span className="flex flex-col xl:hidden leading-none">
              <span className="font-sans text-sm text-foreground">
                sagittal.health
              </span>
              <span className="font-sans text-[9px] uppercase tracking-[0.24em] text-muted-foreground">
                by laudosai
              </span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          {!hideMenuItems && (
            <div className="hidden xl:flex items-center gap-6">
              {/* Features with Dropdown */}
              <div
                className="relative -mx-3 -my-2"
                onMouseEnter={() => {
                  if (featuresTimeoutRef.current) {
                    clearTimeout(featuresTimeoutRef.current);
                  }
                  prefetchFeatures();
                  // Rotate to next testimonial
                  setCurrentTestimonialIndex(
                    (prev) => (prev + 1) % headerTestimonials.length,
                  );
                  setIsFeaturesOpen(true);
                }}
                onMouseLeave={() => {
                  featuresTimeoutRef.current = setTimeout(() => {
                    setIsFeaturesOpen(false);
                  }, 200);
                }}
              >
                <button
                  type="button"
                  className="text-sm transition-colors text-muted-foreground hover:text-foreground px-3 py-2 flex items-center gap-1"
                >
                  Produto
                  <Icons.ArrowDropDown
                    className={`w-4 h-4 transition-transform duration-200 ${isFeaturesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {/* Invisible bridge to dropdown */}
                {isFeaturesOpen && (
                  <div
                    className="absolute left-0 right-0 h-4"
                    style={{ top: "100%" }}
                  />
                )}

                {/* Features Dropdown - Full Width */}
                {isFeaturesOpen && (
                  <div
                    data-features-dropdown
                    className="fixed left-0 right-0 bg-background border-t border-b border-border shadow-lg z-50 overflow-hidden opacity-0 animate-dropdown-fade"
                    style={{ top: "100%" }}
                  >
                    <div className="p-6 xl:p-8 2xl:p-10">
                      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start">
                        {/* Column 1 & 2 - Features List (2 columns) */}
                        <div
                          className="lg:col-span-2 xl:max-w-xl 2xl:max-w-xl"
                          ref={featuresListRef}
                        >
                          <div className="grid grid-cols-2 gap-x-4">
                            {/* Column 1 */}
                            <div>
                              {[
                                {
                                  href: "/invoicing",
                                  title: "Editor",
                                  desc: "Laudo estruturado com IA",
                                },
                                {
                                  href: "/transactions",
                                  title: "Fluxo",
                                  desc: "Casos e produção no mesmo lugar",
                                },
                                {
                                  href: "/inbox",
                                  title: "Contexto",
                                  desc: "Anexos e entradas conectadas",
                                },
                                {
                                  href: "/time-tracking",
                                  title: "Produtividade",
                                  desc: "Tempo clínico sem atrito",
                                },
                              ].map((item, index) => (
                                <div
                                  key={item.href}
                                  className="opacity-0 animate-dropdown-slide"
                                  style={{ animationDelay: `${index * 30}ms` }}
                                >
                                  <Link
                                    href={item.href}
                                    className="flex items-center py-3 group hover:bg-secondary transition-colors duration-200"
                                    onClick={() => setIsFeaturesOpen(false)}
                                  >
                                    <div className="flex flex-col pl-2">
                                      <span className="font-sans text-base text-foreground mb-1">
                                        {item.title}
                                      </span>
                                      <span className="font-sans text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                                        {item.desc}
                                      </span>
                                    </div>
                                  </Link>
                                </div>
                              ))}
                            </div>
                            {/* Column 2 */}
                            <div>
                              {[
                                {
                                  href: "/customers",
                                  title: "Instituições",
                                  desc: "Equipes e governança",
                                },
                                {
                                  href: "/file-storage",
                                  title: "Templates",
                                  desc: "Modelos e descritores",
                                },
                                {
                                  href: "/pre-accounting",
                                  title: "Integrações",
                                  desc: "PACS, RIS e API",
                                },
                                {
                                  href: "/assistant",
                                  title: "Copilot",
                                  desc: "Voz natural + IA",
                                },
                              ].map((item, index) => (
                                <div
                                  key={item.href}
                                  className="opacity-0 animate-dropdown-slide"
                                  style={{
                                    animationDelay: `${(index + 4) * 30}ms`,
                                  }}
                                >
                                  <Link
                                    href={item.href}
                                    className="flex items-center py-3 group hover:bg-secondary transition-colors duration-200"
                                    onClick={() => setIsFeaturesOpen(false)}
                                  >
                                    <div className="flex flex-col pl-2">
                                      <span className="font-sans text-base text-foreground mb-1">
                                        {item.title}
                                      </span>
                                      <span className="font-sans text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                                        {item.desc}
                                      </span>
                                    </div>
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Column 3 & 4 - Preview Cards */}
                        <div className="lg:col-span-2 flex items-start justify-end gap-4 flex-nowrap">
                          {/* Pre-accounting Preview */}
                          <Link
                            ref={preAccountingRef}
                            href="/pre-accounting"
                            onClick={() => setIsFeaturesOpen(false)}
                            className="w-full max-w-[320px] lg:w-[320px] lg:max-w-none xl:w-[350px] 2xl:w-[400px] h-[277px] border border-border overflow-hidden cursor-pointer hover:opacity-90 hover:border-foreground/20 hover:scale-[1.02] transition-all duration-200 flex flex-col flex-shrink-0"
                          >
                            <div className="h-[214px] flex items-center justify-center bg-background p-4">
                              <Image
                                src="/images/accounting-light.png"
                                alt="Pre-accounting"
                                width={112}
                                height={400}
                                className="h-auto w-auto max-h-[80px] object-contain dark:hidden"
                              />
                              <Image
                                src="/images/accounting-dark.png"
                                alt="Pre-accounting"
                                width={112}
                                height={400}
                                className="h-auto w-auto max-h-[80px] object-contain hidden dark:block"
                              />
                            </div>
                            <div className="bg-background border-t border-border p-2.5 flex items-center justify-between gap-4">
                              <div className="flex-1">
                                <span className="font-sans text-xs text-foreground block">
                                  Integrações
                                </span>
                                <span className="font-sans text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                                  PACS, RIS e APIs conectados ao mesmo fluxo.
                                </span>
                              </div>
                              <div className="flex items-center gap-1.5 flex-shrink-0">
                                <div className="w-6 h-6 border border-border flex items-center justify-center bg-background">
                                  <span className="font-sans text-[9px] text-muted-foreground">
                                    RIS
                                  </span>
                                </div>
                                <div className="w-6 h-6 border border-border flex items-center justify-center bg-background">
                                  <span className="font-sans text-[8px] text-muted-foreground">
                                    PACS
                                  </span>
                                </div>
                                <div className="w-6 h-6 border border-border flex items-center justify-center bg-background">
                                  <span className="font-sans text-[8px] text-muted-foreground">
                                    API
                                  </span>
                                </div>
                              </div>
                            </div>
                          </Link>

                          {/* Customer Stories Preview */}
                          <Link
                            href="/testimonials"
                            onClick={() => setIsFeaturesOpen(false)}
                            className="w-full max-w-[320px] lg:w-[320px] lg:max-w-none xl:w-[350px] 2xl:w-[400px] h-[277px] border border-border overflow-visible cursor-pointer hover:opacity-90 hover:border-foreground/20 hover:scale-[1.02] transition-all duration-200 flex flex-col flex-shrink-0"
                          >
                            <div className="flex-1 flex items-center justify-center bg-background p-4 relative overflow-visible">
                              <span className="absolute top-[89%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] xl:text-[22rem] 2xl:text-[24rem] text-muted-foreground opacity-10 pointer-events-none select-none z-0 whitespace-nowrap leading-none font-serif">
                                &rdquo;
                              </span>
                              {(() => {
                                const testimonial =
                                  headerTestimonials[currentTestimonialIndex];
                                if (!testimonial) return null;
                                const firstSentenceEnd =
                                  testimonial.content.match(/[.!?]\s/);
                                const firstSentence = firstSentenceEnd
                                  ? testimonial.content.substring(
                                      0,
                                      firstSentenceEnd.index! + 1,
                                    )
                                  : testimonial.content;
                                return (
                                  <div className="relative font-serif text-sm xl:text-base 2xl:text-lg leading-tight text-center px-2 line-clamp-3 w-full z-10">
                                    <span className="text-primary">
                                      &ldquo;{firstSentence}&rdquo;
                                    </span>
                                  </div>
                                );
                              })()}
                            </div>
                            <div className="bg-background border-t border-border p-2.5 flex items-center justify-between gap-4">
                              <div className="flex-1">
                                <span className="font-sans text-xs text-foreground block">
                                  Casos
                                </span>
                                <span className="font-sans text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                                  Veja como a equipe construiu o sagittal.health
                                </span>
                              </div>
                              {(() => {
                                const testimonial =
                                  headerTestimonials[currentTestimonialIndex];
                                if (!testimonial?.image) return null;
                                return (
                                  <div className="flex items-center gap-1.5 flex-shrink-0">
                                    <div className="w-6 h-6 flex items-center justify-center bg-background overflow-hidden">
                                      <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={24}
                                        height={24}
                                        className="w-full h-full object-cover opacity-70"
                                        style={{ filter: "grayscale(100%)" }}
                                      />
                                    </div>
                                  </div>
                                );
                              })()}
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/pricing"
                className="text-sm transition-colors text-muted-foreground hover:text-foreground"
              >
                Preços
              </Link>
              <Link
                href="/story"
                className="text-sm transition-colors text-muted-foreground hover:text-foreground"
              >
                Sobre
              </Link>
              <Link
                href="/download"
                className="text-sm transition-colors text-muted-foreground hover:text-foreground"
              >
                Mobile
              </Link>

              {/* Resources with Dropdown */}
              <div
                className="relative -mx-3 -my-2"
                onMouseEnter={() => {
                  if (appsTimeoutRef.current) {
                    clearTimeout(appsTimeoutRef.current);
                  }
                  prefetchApps();
                  setIsAppsOpen(true);
                }}
                onMouseLeave={() => {
                  appsTimeoutRef.current = setTimeout(() => {
                    setIsAppsOpen(false);
                  }, 200);
                }}
              >
                <button
                  type="button"
                  className="text-sm transition-colors text-muted-foreground hover:text-foreground px-3 py-2 flex items-center gap-1"
                >
                  Recursos
                  <Icons.ArrowDropDown
                    className={`w-4 h-4 transition-transform duration-200 ${isAppsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {/* Invisible bridge to dropdown */}
                {isAppsOpen && (
                  <div
                    className="absolute left-0 right-0 h-4"
                    style={{ top: "100%" }}
                  />
                )}

                {/* Resources Dropdown - Full Width */}
                {isAppsOpen && (
                  <div
                    className="fixed left-0 right-0 bg-background border-t border-b border-border shadow-lg z-50 overflow-hidden opacity-0 animate-dropdown-fade"
                    style={{
                      top: "100%",
                      height:
                        featuresDropdownHeight !== null
                          ? `${featuresDropdownHeight}px`
                          : "auto",
                    }}
                  >
                    <div className="p-6 xl:p-8 2xl:p-10 h-full">
                      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 xl:gap-6 items-start h-full">
                        {/* Column 1 & 2 - Apps List (2 columns) */}
                        <div
                          ref={appsListRef}
                          className="lg:col-span-2 lg:max-w-md xl:max-w-lg 2xl:max-w-xl"
                        >
                          <div className="grid grid-cols-2 gap-x-4">
                            {/* Column 1 */}
                            <div>
                              {[
                                {
                                  href: "/integrations",
                                  title: "Integrações",
                                  desc: "Conecte o stack que você já usa.",
                                  external: false,
                                },
                                {
                                  href: "/docs",
                                  title: "Documentação",
                                  desc: "Guia de uso da plataforma.",
                                  external: false,
                                },
                                {
                                  href: "/agents",
                                  title: "Agents",
                                  desc: "Automação e workflows técnicos.",
                                  external: false,
                                },
                                {
                                  href: "/mcp",
                                  title: "MCP",
                                  desc: "Conecte ChatGPT, Claude e outros.",
                                  external: false,
                                },
                              ].map((item, index) => (
                                <div
                                  key={item.href}
                                  className="opacity-0 animate-dropdown-slide"
                                  style={{ animationDelay: `${index * 30}ms` }}
                                >
                                  <Link
                                    href={item.href}
                                    className="flex items-center py-3 group hover:bg-secondary transition-colors duration-200"
                                    onClick={() => setIsAppsOpen(false)}
                                  >
                                    <div className="flex flex-col pl-2">
                                      <span className="font-sans text-base text-foreground mb-1">
                                        {item.title}
                                      </span>
                                      <span className="font-sans text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                                        {item.desc}
                                      </span>
                                    </div>
                                  </Link>
                                </div>
                              ))}
                            </div>
                            {/* Column 2 */}
                            <div>
                              {[
                                {
                                  href: "https://api.laudos.ai",
                                  title: "API",
                                  desc: "Acesso programático ao stack.",
                                  external: true,
                                },
                                {
                                  href: "/sdks",
                                  title: "SDKs",
                                  desc: "Typed SDKs to build faster.",
                                  external: false,
                                },
                                {
                                  href: "/chat",
                                  title: "CRIT",
                                  desc: "Achados críticos com SLA e auditoria.",
                                  external: false,
                                },
                                {
                                  href: "/computer",
                                  title: "Mobile",
                                  desc: "Editor mobile para laudar sem fricção.",
                                  external: false,
                                },
                              ].map((item, index) => (
                                <div
                                  key={`${item.href}-${item.title}`}
                                  className="opacity-0 animate-dropdown-slide"
                                  style={{
                                    animationDelay: `${(index + 2) * 30}ms`,
                                  }}
                                >
                                  {item.external ? (
                                    <a
                                      href={item.href}
                                      className="flex items-center py-3 group hover:bg-secondary transition-colors duration-200"
                                      onClick={() => setIsAppsOpen(false)}
                                    >
                                      <div className="flex flex-col pl-2">
                                        <span className="font-sans text-base text-foreground mb-1">
                                          {item.title}
                                        </span>
                                        <span className="font-sans text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                                          {item.desc}
                                        </span>
                                      </div>
                                    </a>
                                  ) : (
                                    <Link
                                      href={item.href}
                                      className="flex items-center py-3 group hover:bg-secondary transition-colors duration-200"
                                      onClick={() => setIsAppsOpen(false)}
                                    >
                                      <div className="flex flex-col pl-2">
                                        <span className="font-sans text-base text-foreground mb-1">
                                          {item.title}
                                        </span>
                                        <span className="font-sans text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                                          {item.desc}
                                        </span>
                                      </div>
                                    </Link>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Columns 3 & 4 - Image Previews Container */}
                        <div className="lg:col-span-2 flex items-start justify-end gap-4 flex-nowrap">
                          {/* Integrations Preview */}
                          <Link
                            ref={integrationsAppRef}
                            href="/integrations"
                            onClick={() => setIsAppsOpen(false)}
                            className="w-full max-w-[320px] lg:w-[320px] lg:max-w-none xl:w-[350px] 2xl:w-[400px] h-[277px] border border-border overflow-hidden cursor-pointer hover:opacity-90 hover:border-foreground/20 hover:scale-[1.02] transition-all duration-200 flex flex-col flex-shrink-0"
                          >
                            <div className="flex-1">
                              <HeaderIntegrationsPreview />
                            </div>
                            <div className="bg-background border-t border-border p-2.5 flex items-center justify-between gap-4">
                              <div className="flex-1">
                                <span className="font-sans text-xs text-foreground block">
                                  Integrações
                                </span>
                                <span className="font-sans text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                                  Conecte o stack que sua equipe já usa.
                                </span>
                              </div>
                              <div className="flex items-center gap-1.5 flex-shrink-0 relative h-6">
                                {visibleIntegrations.map((item) => (
                                  <div
                                    key={item.key}
                                    className="w-6 h-6 border border-border flex items-center justify-center bg-background transition-all duration-300"
                                  >
                                    <Image
                                      src={allIntegrations[item.id]?.src ?? ""}
                                      alt={allIntegrations[item.id]?.alt ?? ""}
                                      width={14}
                                      height={14}
                                      className="object-contain opacity-70"
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </Link>

                          {/* Mac App Preview */}
                          <Link
                            ref={macAppRef}
                            href="/download"
                            onClick={() => setIsAppsOpen(false)}
                            className="w-full max-w-[320px] lg:w-[320px] lg:max-w-none xl:w-[350px] 2xl:w-[400px] h-[277px] border border-border overflow-hidden cursor-pointer hover:opacity-90 hover:border-foreground/20 hover:scale-[1.02] transition-all duration-200 flex flex-col flex-shrink-0"
                          >
                            <div className="flex-1 flex items-center justify-center bg-background p-4">
                              <Image
                                src="/images/header-dock-light.png"
                                alt="Mac Dock"
                                width={1200}
                                height={300}
                                className="w-3/4 h-auto object-contain dark:hidden"
                              />
                              <Image
                                src="/images/header-dock-dark.png"
                                alt="Mac Dock"
                                width={1200}
                                height={300}
                                className="w-3/4 h-auto object-contain hidden dark:block"
                              />
                            </div>
                            <div className="bg-background border-t border-border p-2.5">
                              <span className="font-sans text-xs text-foreground block">
                                Mobile
                              </span>
                              <span className="font-sans text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                                Laude e revise de qualquer lugar.
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <ThemeToggleButton
                className="h-9 min-w-[122px] items-center justify-center bg-background/70 px-3 text-foreground backdrop-blur-sm"
                iconClassName="size-4 text-foreground"
                labelClassName="text-xs text-foreground xl:text-sm"
              />

              {/* Sign in */}
              <div className="border-l border-border pl-4">
                <Link
                  href="https://copilot.laudos.ai"
                  className="text-sm transition-colors text-primary hover:text-primary/80"
                  onClick={() =>
                    track({
                      event: LogEvents.CTA.name,
                      channel: LogEvents.CTA.channel,
                      label: "Entrar",
                      position: "header",
                    })
                  }
                >
                  Entrar
                </Link>
              </div>
            </div>
          )}

          {/* Mobile & Tablet Hamburger Menu */}
          <div className="xl:hidden flex items-center gap-2">
            <ThemeToggleButton
              showLabel={false}
              className="size-10 items-center justify-center bg-background/70 text-foreground backdrop-blur-sm"
              iconClassName="size-4 text-foreground"
            />
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative transition-colors flex items-center justify-end p-2 min-w-[44px] min-h-[44px] text-primary hover:text-primary/80 xl:active:text-primary focus:outline-none focus-visible:outline-none touch-manipulation"
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative size-5 flex flex-col justify-center items-center">
                <motion.span
                  className="absolute w-4 h-[1.5px] bg-current rounded-none"
                  animate={{
                    rotate: isMenuOpen ? 45 : 0,
                    y: isMenuOpen ? 0 : -4.5,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
                <motion.span
                  className="absolute w-4 h-[1.5px] bg-current rounded-none"
                  animate={{
                    opacity: isMenuOpen ? 0 : 1,
                    scaleX: isMenuOpen ? 0 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
                <motion.span
                  className="absolute w-4 h-[1.5px] bg-current rounded-none"
                  animate={{
                    rotate: isMenuOpen ? -45 : 0,
                    y: isMenuOpen ? 0 : 4.5,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile & Tablet Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 xl:hidden bg-background">
          <div className="pt-28 px-6">
            <div className="flex flex-col space-y-6 text-left">
              {/* Features Expandable Section */}
              <div className="flex flex-col">
                <button
                  type="button"
                  onClick={(e) => {
                    setIsMobileFeaturesOpen(!isMobileFeaturesOpen);
                    e.currentTarget.blur();
                  }}
                  onTouchEnd={(e) => {
                    e.currentTarget.blur();
                  }}
                  className="text-2xl font-sans transition-colors py-2 text-primary hover:text-primary xl:active:text-primary focus:outline-none focus-visible:outline-none touch-manipulation flex items-center justify-between"
                  style={{
                    WebkitTapHighlightColor: "transparent",
                  }}
                >
                  <span>Produto</span>
                  <Icons.ArrowDropDown
                    className={`w-6 h-6 transition-transform duration-200 ${
                      isMobileFeaturesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isMobileFeaturesOpen && (
                  <>
                    <div className="h-px w-full border-t border-border my-2" />
                    <div className="overflow-hidden opacity-0 animate-mobile-slide">
                      <div className="flex flex-col space-y-4 pt-2">
                        {[
                          { href: "/assistant", label: "Copilot" },
                          { href: "/invoicing", label: "Editor" },
                          { href: "/chat", label: "CRIT" },
                          { href: "/transactions", label: "Fluxo" },
                          { href: "/customers", label: "Instituições" },
                          { href: "/file-storage", label: "Templates" },
                          { href: "/pre-accounting", label: "Integrações" },
                          { href: "/insights", label: "Análises" },
                        ].map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsMobileFeaturesOpen(false);
                            }}
                            className="text-lg font-sans text-left text-muted-foreground hover:text-muted-foreground xl:active:text-muted-foreground focus:outline-none focus-visible:outline-none touch-manipulation transition-colors"
                            style={{ WebkitTapHighlightColor: "transparent" }}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
              <Link
                href="/pricing"
                onTouchEnd={(e) => {
                  const target = e.currentTarget;
                  if (target) {
                    target.blur();
                    setTimeout(() => {
                      if (target) {
                        target.blur();
                      }
                    }, 100);
                  }
                }}
                className="no-touch-active text-2xl font-sans transition-colors py-2 text-primary hover:text-primary xl:active:text-primary focus:outline-none focus-visible:outline-none touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                Preços
              </Link>
              <Link
                href="/story"
                onTouchEnd={(e) => {
                  const target = e.currentTarget;
                  if (target) {
                    target.blur();
                    setTimeout(() => {
                      if (target) {
                        target.blur();
                      }
                    }, 100);
                  }
                }}
                className="no-touch-active text-2xl font-sans transition-colors py-2 text-primary hover:text-primary xl:active:text-primary focus:outline-none focus-visible:outline-none touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                Sobre
              </Link>
              <Link
                href="/download"
                onTouchEnd={(e) => {
                  const target = e.currentTarget;
                  if (target) {
                    target.blur();
                    setTimeout(() => {
                      if (target) {
                        target.blur();
                      }
                    }, 100);
                  }
                }}
                className="no-touch-active text-2xl font-sans transition-colors py-2 text-primary hover:text-primary xl:active:text-primary focus:outline-none focus-visible:outline-none touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                Mobile
              </Link>

              {/* Resources Expandable Section */}
              <div className="flex flex-col">
                <button
                  type="button"
                  onClick={(e) => {
                    setIsMobileAppsOpen(!isMobileAppsOpen);
                    e.currentTarget.blur();
                  }}
                  onTouchEnd={(e) => {
                    e.currentTarget.blur();
                  }}
                  className="text-2xl font-sans transition-colors py-2 text-primary hover:text-primary xl:active:text-primary focus:outline-none focus-visible:outline-none touch-manipulation flex items-center justify-between"
                  style={{
                    WebkitTapHighlightColor: "transparent",
                  }}
                >
                  <span>Recursos</span>
                  <Icons.ArrowDropDown
                    className={`w-6 h-6 transition-transform duration-200 ${
                      isMobileAppsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isMobileAppsOpen && (
                  <>
                    <div className="h-px w-full border-t border-border my-2" />
                    <div className="overflow-hidden opacity-0 animate-mobile-slide">
                      <div className="flex flex-col space-y-4 pt-2">
                        <Link
                          href="/integrations"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsMobileAppsOpen(false);
                          }}
                          className="text-lg font-sans text-left text-muted-foreground hover:text-muted-foreground xl:active:text-muted-foreground focus:outline-none focus-visible:outline-none touch-manipulation transition-colors"
                          style={{ WebkitTapHighlightColor: "transparent" }}
                        >
                          Integrações
                        </Link>
                        <Link
                          href="/docs"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsMobileAppsOpen(false);
                          }}
                          className="text-lg font-sans text-left text-muted-foreground hover:text-muted-foreground xl:active:text-muted-foreground focus:outline-none focus-visible:outline-none touch-manipulation transition-colors"
                          style={{ WebkitTapHighlightColor: "transparent" }}
                        >
                          Documentação
                        </Link>
                        <Link
                          href="/agents"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsMobileAppsOpen(false);
                          }}
                          className="text-lg font-sans text-left text-muted-foreground hover:text-muted-foreground xl:active:text-muted-foreground focus:outline-none focus-visible:outline-none touch-manipulation transition-colors"
                          style={{ WebkitTapHighlightColor: "transparent" }}
                        >
                          Agents
                        </Link>
                        <Link
                          href="/computer"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsMobileAppsOpen(false);
                          }}
                          className="text-lg font-sans text-left text-muted-foreground hover:text-muted-foreground xl:active:text-muted-foreground focus:outline-none focus-visible:outline-none touch-manipulation transition-colors"
                          style={{ WebkitTapHighlightColor: "transparent" }}
                        >
                          Mobile
                        </Link>
                        <Link
                          href="/mcp"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsMobileAppsOpen(false);
                          }}
                          className="text-lg font-sans text-left text-muted-foreground hover:text-muted-foreground xl:active:text-muted-foreground focus:outline-none focus-visible:outline-none touch-manipulation transition-colors"
                          style={{ WebkitTapHighlightColor: "transparent" }}
                        >
                          MCP
                        </Link>
                        <a
                          href="https://api.laudos.ai"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsMobileAppsOpen(false);
                          }}
                          className="text-lg font-sans text-left text-muted-foreground hover:text-muted-foreground xl:active:text-muted-foreground focus:outline-none focus-visible:outline-none touch-manipulation transition-colors"
                          style={{ WebkitTapHighlightColor: "transparent" }}
                        >
                          API
                        </a>
                        <Link
                          href="/sdks"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsMobileAppsOpen(false);
                          }}
                          className="text-lg font-sans text-left text-muted-foreground hover:text-muted-foreground xl:active:text-muted-foreground focus:outline-none focus-visible:outline-none touch-manipulation transition-colors"
                          style={{ WebkitTapHighlightColor: "transparent" }}
                        >
                          SDKs
                        </Link>
                        <Link
                          href="/chat"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsMobileAppsOpen(false);
                          }}
                          className="text-lg font-sans text-left text-muted-foreground hover:text-muted-foreground xl:active:text-muted-foreground focus:outline-none focus-visible:outline-none touch-manipulation transition-colors"
                          style={{ WebkitTapHighlightColor: "transparent" }}
                        >
                          CRIT
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="border-t border-border pt-8 mt-8 flex flex-col items-start gap-4">
                <ThemeToggleButton className="px-3 py-2" />

                <Link
                  href="https://copilot.laudos.ai"
                  onTouchEnd={(e) => {
                    const target = e.currentTarget;
                    if (target) {
                      target.blur();
                      setTimeout(() => {
                        if (target) {
                          target.blur();
                        }
                      }, 100);
                    }
                  }}
                  className="text-2xl font-sans transition-colors py-2 text-primary hover:text-primary xl:active:text-primary focus:outline-none focus-visible:outline-none touch-manipulation"
                  onClick={() => {
                    setIsMenuOpen(false);
                    track({
                      event: LogEvents.CTA.name,
                      channel: LogEvents.CTA.channel,
                      label: "Entrar",
                      position: "header_mobile",
                    });
                  }}
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  Entrar
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
