export function About() {
  return (
    <section id="about" className="container mx-auto px-6 md:px-8 py-28 md:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-center gap-4 md:mb-24">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
            01 / About
          </span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <h2 className="font-display text-5xl font-light leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Crafting{" "}
              <em className="text-gradient">considered</em>
              <br />
              digital interfaces.
            </h2>
          </div>

          <div className="md:col-span-7 md:pl-4 lg:pl-12">
            <p className="font-display text-2xl font-light italic leading-relaxed text-foreground md:text-3xl">
              "Building modern, responsive, and user-friendly websites — with care for every pixel and every interaction."
            </p>

            <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                I am a passionate Frontend Web Developer with a strong interest
                in building modern, responsive, and user-friendly websites. My
                approach blends design intuition with engineering rigor.
              </p>
              <p>
                Currently, I am learning backend development to become a
                full-stack developer in the future — expanding my craft from
                interfaces to systems.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
              {[
                { k: "Year", v: "2026" },
                { k: "Role", v: "Frontend" },
                { k: "Stack", v: "JS / CSS" },
                { k: "Mode", v: "Remote" },
              ].map((s) => (
                <div key={s.k} className="bg-card p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {s.k}
                  </p>
                  <p className="mt-2 font-display text-lg italic">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
