import { HeroSection, AboutMeSection, ProjectsSection, ContactSection } from "@/sections";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
