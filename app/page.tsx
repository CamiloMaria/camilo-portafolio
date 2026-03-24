import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="relative">
        <Hero />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-neon-purple/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-terminal text-sm text-foreground-muted">
            &copy; 2026 CAMILO &mdash; BUILT WITH{" "}
            <span className="text-neon-magenta">&hearts;</span> AND LOTS OF{" "}
            <span className="text-neon-green">&#9749;</span>
          </p>
          <p className="font-pixel text-[10px] text-neon-purple mt-2">
            INSERT COIN TO CONTINUE
          </p>
        </div>
      </footer>
    </>
  );
}
