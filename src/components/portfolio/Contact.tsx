export function Contact() {
  return (
    <section id="contact" className="container mx-auto px-6 md:px-8 py-28 md:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-center gap-4 md:mb-24">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
            04 / Contact
          </span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-card p-10 shadow-elegant md:p-20">
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-60 animate-float" style={{ background: "var(--gradient-glow)" }} />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full opacity-40 animate-float" style={{ background: "var(--gradient-glow)", animationDelay: "3s" }} />

          <div className="relative">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
              Let's work together
            </p>

            <h2 className="mt-6 font-display text-5xl font-light leading-[1] tracking-tight md:text-8xl">
              Have a project
              <br />
              <em className="text-gradient">in mind?</em>
            </h2>

            <p className="mt-8 max-w-xl text-lg text-muted-foreground md:text-xl">
              I'm currently available for freelance work and collaborations.
              Drop me an email — I read every message.
            </p>

            <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-center">
              <a
                href="mailto:tanzinakterlima316@gmail.com"
                className="group inline-flex items-center gap-4 rounded-full bg-foreground px-8 py-5 font-medium text-background transition-all hover:bg-primary"
              >
                <span>tanzinakterlima316@gmail.com</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-background/10 transition-transform group-hover:translate-x-1 group-hover:rotate-45">
                  →
                </span>
              </a>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Response within 24h
              </p>
            </div>
          </div>
        </div>

        <footer className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <p className="font-mono uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Tanzin Akter Lima
          </p>
          <p className="font-display text-sm italic">
            Designed & built with care.
          </p>
        </footer>
      </div>
    </section>
  );
}
