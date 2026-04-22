import { Cta } from "@/components/cta"

export function FinalCta() {
  return (
    <section className="relative border-b border-border">
      <div aria-hidden className="absolute inset-0 grid-bg opacity-40" />
      <div className="container-page relative py-24 md:py-32">
        <h2 className="max-w-3xl text-balance text-4xl md:text-5xl font-medium tracking-tight leading-tight">
          Put the financial side of your business on quiet mode.
        </h2>
        <p className="mt-5 max-w-xl text-muted-foreground leading-relaxed">
          Free while you&apos;re small. Simple pricing as you grow. Cancel any time.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Cta href="#" variant="primary" withArrow>Create free account</Cta>
          <Cta href="/pricing" variant="secondary">See pricing</Cta>
        </div>
      </div>
    </section>
  )
}
