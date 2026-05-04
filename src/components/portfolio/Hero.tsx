import { useEffect, useRef, useState } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      setMouse({
        x: (e.clientX - r.left) / r.width,
        y: (e.clientY - r.top) / r.height,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-36 pb-24 md:pt-40 md:pb-32"
    >
      {/* Layered gradient orbs that follow the cursor */}
      <div
        className="pointer-events-none absolute h-[50rem] w-[50rem] rounded-full opacity-70 blur-3xl transition-transform duration-700 ease-out"
        style={{
          background:
            "radial-gradient(circle, oklch(0.82 0.14 80 / 0.35), transparent 60%)",
          top: `${mouse.y * 30}%`,
          right: `${10 + (1 - mouse.x) * 20}%`,
          transform: "translate(50%, -30%)",
        }}
      />
      <div
        className="pointer-events-none absolute h-[40rem] w-[40rem] rounded-full opacity-50 blur-3xl animate-float"
        style={{
          background:
            "radial-gradient(circle, oklch(0.88 0.12 75 / 0.3), transparent 60%)",
          bottom: "-10%",
          left: `${mouse.x * 20}%`,
        }}
      />

      {/* Animated horizontal lines */}
      <div className="pointer-events-none absolute inset-x-0 top-1/3 flex flex-col gap-32 opacity-30">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-shimmer-line" />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-shimmer-line" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Eyebrow */}
          <div className="animate-fade-up flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="h-px w-10 bg-gradient-to-r from-primary to-transparent" />
            Portfolio — 2026 Edition
          </div>

          {/* Main headline */}
          <h1
            className="animate-fade-up mt-10 font-display font-light leading-[0.88] tracking-[-0.045em]"
            style={{ animationDelay: "0.15s" }}
          >
            <span className="block overflow-hidden">
              <span
                className="block bg-clip-text text-transparent text-[clamp(3rem,12vw,12rem)]"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, oklch(0.98 0.01 80) 0%, oklch(0.85 0.015 80) 40%, oklch(0.55 0.02 70) 100%)",
                }}
              >
                Tanzin Akter
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="block text-[clamp(3rem,12vw,12rem)]">
                <em
                  className="font-light italic bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(120deg, oklch(0.82 0.14 80) 0%, oklch(0.92 0.11 75) 50%, oklch(0.78 0.15 60) 100%)",
                    backgroundSize: "200% auto",
                    animation: "gradient-shift 8s ease infinite",
                  }}
                >
                  Lima.
                </em>
              </span>
            </span>
          </h1>

          {/* Role line */}
          <div
            className="animate-fade-up mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground"
            style={{ animationDelay: "0.25s" }}
          >
            <span className="text-foreground">Frontend Developer</span>
            <span className="h-px w-8 bg-border" />
            <span>Future Full Stack</span>
            <span className="h-px w-8 bg-border" />
            <span className="text-primary">Available 2026</span>
          </div>

          {/* Tagline */}
          <p
            className="animate-fade-up mt-12 max-w-2xl font-display text-2xl font-light leading-snug text-foreground md:text-4xl"
            style={{ animationDelay: "0.35s" }}
          >
            Building modern web experiences{" "}
            <em className="text-gradient">today</em>, becoming a full-stack
            developer <em className="text-gradient">tomorrow</em>.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-up mt-14 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.45s" }}
          >
            <a
              href="#services"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-5 text-sm font-medium text-background transition-all"
              style={{
                background:
                  "linear-gradient(120deg, oklch(0.98 0.01 80), oklch(0.82 0.14 80))",
                backgroundSize: "200% auto",
              }}
            >
              <span
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(120deg, oklch(0.82 0.14 80), oklch(0.92 0.11 75))",
                }}
              />
              <span className="relative z-10">Explore my work</span>
              <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-background/15 transition-all group-hover:translate-x-1 group-hover:rotate-45">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full border border-border bg-card/30 px-8 py-5 text-sm font-medium backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card/60"
            >
              Let's talk
              <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-primary">
                →
              </span>
            </a>
          </div>

          {/* Stats */}
          <div
            className="animate-fade-up mt-24 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border"
            style={{ animationDelay: "0.55s" }}
          >
            {[
              { k: "Focus", v: "Frontend" },
              { k: "Learning", v: "Backend" },
              { k: "Status", v: "Available" },
            ].map((s) => (
              <div
                key={s.k}
                className="group relative overflow-hidden bg-card/60 p-6 backdrop-blur-sm transition-colors hover:bg-card md:p-8"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {s.k}
                </p>
                <p className="mt-3 font-display text-2xl font-light italic md:text-3xl">
                  {s.v}
                </p>
                <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-primary to-transparent transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up" style={{ animationDelay: "0.8s" }}>
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Scroll
          </span>
          <span className="h-10 w-px bg-gradient-to-b from-primary to-transparent animate-scroll-line" />
        </div>
      </div>
    </section>
  );
}
