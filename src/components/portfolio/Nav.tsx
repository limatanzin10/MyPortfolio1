import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About", num: "01" },
  { href: "#skills", label: "Skills", num: "02" },
  { href: "#services", label: "Services", num: "03" },
  { href: "#contact", label: "Contact", num: "04" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3" : "py-6"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6">
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-primary/5 font-display text-sm italic text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
            t
          </span>
          <span className="font-display text-sm tracking-tight">
            Tanzin <span className="italic text-muted-foreground">Lima</span>
          </span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group flex items-center gap-1.5 rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="font-mono text-[10px] text-primary/60 group-hover:text-primary">
                  {l.num}
                </span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:tanzinakterlima316@gmail.com"
          className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-2 text-xs font-medium transition-all hover:border-primary/50 hover:bg-primary/5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow" />
          Available
        </a>
      </nav>
    </header>
  );
}
