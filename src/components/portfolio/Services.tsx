const services = [
  { title: "Responsive Website Design", desc: "Pixel-perfect sites that adapt fluidly to any screen and device.", featured: true },
  { title: "Landing Page Development", desc: "Conversion-focused landing pages that capture attention fast." },
  { title: "Personal Portfolio Websites", desc: "A unique, professional online presence to showcase your work." },
  { title: "Business Website Design", desc: "Clean, trustworthy websites that represent your brand identity." },
  { title: "UI Design Implementation", desc: "Translate Figma or sketches into clean, semantic HTML & CSS." },
  { title: "JavaScript Interactivity", desc: "Smooth interactions and dynamic behavior for delightful UX." },
  { title: "Website Redesign", desc: "Refresh outdated websites with a modern look and refined feel." },
  { title: "Basic Bug Fixing", desc: "Quick, reliable fixes for layout, style, and script issues." },
  { title: "Website Optimization", desc: "Improve speed, accessibility, and overall user experience." },
];

export function Services() {
  return (
    <section id="services" className="container mx-auto px-6 md:px-8 py-28 md:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-center gap-4 md:mb-24">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
            03 / Services
          </span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="mb-20 grid gap-8 md:grid-cols-12 md:items-end">
          <h2 className="font-display text-5xl font-light leading-[1.05] tracking-tight md:col-span-8 md:text-7xl">
            Services <em className="text-gradient">tailored</em> to your project.
          </h2>
          <p className="text-base text-muted-foreground md:col-span-4">
            From concept to launch — every offering is built with the same
            attention to detail.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative overflow-hidden bg-card p-8 transition-all duration-500 hover:bg-card/60 md:p-10"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "var(--gradient-glow)" }} />

              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    / {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-sm transition-all duration-500 group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    →
                  </span>
                </div>

                <h3 className="mt-12 font-display text-2xl font-light leading-tight md:text-3xl">
                  {s.title.split(" ").map((word, idx, arr) =>
                    idx === arr.length - 1 ? (
                      <em key={idx} className="text-gradient">{word}</em>
                    ) : (
                      <span key={idx}>{word} </span>
                    )
                  )}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
