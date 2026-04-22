export function Testimonial() {
  return (
    <section className="border-b border-border">
      <div className="container-page py-24 md:py-32">
        <blockquote className="max-w-3xl">
          <p className="text-balance text-2xl md:text-4xl font-medium tracking-tight leading-[1.15]">
            “Midday is the first finance tool that feels designed for people who actually
            care about their craft. It quietly does the boring parts — and makes the
            interesting parts visible.”
          </p>
          <footer className="mt-8 flex items-center gap-4 text-[13px]">
            <div className="h-9 w-9 border border-border bg-accent" aria-hidden />
            <div>
              <div className="text-foreground">Iris Hallgren</div>
              <div className="text-muted-foreground">Founder, North Studio</div>
            </div>
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
