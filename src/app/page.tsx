import { HeroSection, AboutMeSection, ProjectsSection, ContactSection, TestimonialSection } from "@/sections";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      <TestimonialSection />
      <ContactSection />
    </main>
  );
}
