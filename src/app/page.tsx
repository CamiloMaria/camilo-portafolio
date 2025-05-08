import { Hero, AboutMeSection, ProjectsSection, ContactSection } from "@/sections";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutMeSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
