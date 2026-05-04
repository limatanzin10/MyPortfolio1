import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Services } from "@/components/portfolio/Services";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Tanzin Akter Lima — Frontend Web Developer" },
      {
        name: "description",
        content:
          "Portfolio of Tanzin Akter Lima — Frontend Web Developer building modern, responsive websites and landing pages.",
      },
      { property: "og:title", content: "Tanzin Akter Lima — Frontend Web Developer" },
      {
        property: "og:description",
        content: "Building modern web experiences today, becoming a full-stack developer tomorrow.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Contact />
      </main>
    </div>
  );
}
