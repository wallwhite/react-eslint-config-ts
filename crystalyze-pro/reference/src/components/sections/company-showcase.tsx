import { siteConfig } from "@/lib/config";

export function CompanyShowcase() {
  const { companyShowcase } = siteConfig;
  return (
    <section
      id="company"
      className="flex flex-col items-center justify-center gap-8 py-16 w-full relative px-6"
    >
      <div className="text-center space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-secondary">
          {companyShowcase.headline}
        </p>
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-primary">
          {companyShowcase.subheading}
        </h2>
      </div>
      <div className="grid w-full max-w-7xl grid-cols-2 md:grid-cols-4 overflow-hidden border-y border-border items-center justify-center z-20">
        {companyShowcase.companyLogos.map((logo) => (
          <div
            key={logo.id}
            className="group w-full h-28 flex items-center justify-center relative p-4 before:absolute before:-left-1 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-[''] after:absolute after:-top-1 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-['']"
          >
            <div className="transition-all duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)] translate-y-0 group-hover:-translate-y-4 flex items-center justify-center w-full h-full">
              {logo.logo}
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-4 transition-all duration-300 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)]">
              <span className="text-sm font-medium text-secondary">
                {logo.name}
              </span>
            </div>
          </div>
        ))}
      </div>
      <p className="text-muted-foreground text-sm font-medium">
        <a href={companyShowcase.cta.href} className="underline underline-offset-4 hover:text-secondary">
          {companyShowcase.cta.label}
        </a>
      </p>
    </section>
  );
}
