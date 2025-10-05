const partners = [
  { name: "QuantEdge", tagline: "Institutional analytics" },
  { name: "MomentumX", tagline: "High-frequency desk" },
  { name: "Nebula Capital", tagline: "Digital assets" },
  { name: "AlphaFlow", tagline: "Options research" },
  { name: "SignalForge", tagline: "Data infrastructure" },
  { name: "Northwind", tagline: "Macro insights" }
];

export const TrustedBy = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-10 py-16 w-full">
      <p className="text-muted-foreground font-medium">Trusted by fast-growing teams</p>
      <div className="grid w-full max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
        {partners.map(partner => (
          <div
            key={partner.name}
            className="flex h-24 items-center justify-center bg-background px-6 text-center transition hover:bg-accent/20"
          >
            <div className="flex flex-col items-center">
              <span className="text-sm font-semibold text-primary">
                {partner.name}
              </span>
              <span className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
                {partner.tagline}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

