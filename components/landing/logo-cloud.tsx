const logos = [
  "Northwind",
  "Arcadia",
  "Helix",
  "Kestrel",
  "Meridian",
  "Obsidian",
  "Pinecone",
  "Solstice",
]

export function LogoCloud() {
  return (
    <section className="border-b border-border">
      <div className="container-page py-12 md:py-16">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          Trusted by teams that ship
        </div>
        <div className="mt-6 grid grid-cols-2 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
          {logos.map((name) => (
            <div
              key={name}
              className="text-mono text-[13px] text-foreground/60 tracking-tight"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
