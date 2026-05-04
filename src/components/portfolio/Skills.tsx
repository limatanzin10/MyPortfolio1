const skills = [
  "HTML", "CSS", "JavaScript", "Responsive Design", "UI Design",
  "Git", "GitHub", "VS Code", "Landing Pages", "Website Design",
  "MS Word", "MS Excel", "Data Entry", "Website Editing",
];

export function Skills() {
  const row = [...skills, ...skills];

  return (
    <section id="skills" className="py-28 md:py-40">
      <div className="container mx-auto mb-20 px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex items-center gap-4 md:mb-24">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
              02 / Skills
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>

          <h2 className="max-w-3xl font-display text-5xl font-light leading-[1.05] md:text-7xl">
            A toolkit refined for{" "}
            <em className="text-gradient">modern</em> web work.
          </h2>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden border-y border-border bg-card/20 py-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />

        <div className="flex animate-marquee gap-3 whitespace-nowrap">
          {row.map((skill, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 rounded-full border border-border bg-card/40 px-6 py-3 font-display text-2xl italic text-foreground"
            >
              {skill}
              <span className="text-primary">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto mt-20 px-6 md:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {[
            { k: "Frontend", v: "HTML, CSS, JS" },
            { k: "Design", v: "Responsive UI" },
            { k: "Tooling", v: "Git, GitHub" },
            { k: "Productivity", v: "MS Office" },
          ].map((c) => (
            <div key={c.k} className="bg-card p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                {c.k}
              </p>
              <p className="mt-3 font-display text-xl italic">{c.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
