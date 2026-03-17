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
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-[#bf00ff]/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-[family-name:var(--font-terminal)] text-sm text-[#b0b0b0]">
            © 2026 CAMILO — BUILT WITH <span className="text-[#ff00ff]">♥</span> AND LOTS OF <span className="text-[#39ff14]">☕</span>
          </p>
          <p className="font-[family-name:var(--font-pixel)] text-[10px] text-[#bf00ff] mt-2">
            INSERT COIN TO CONTINUE
          </p>
        </div>
      </footer>
    </>
  );
}
