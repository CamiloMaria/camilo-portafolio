import AboutMe from "@/sections/about-me";
import Hero from "@/sections/hero";
import ProjectsSection from "@/sections/project";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutMe />
      <ProjectsSection />
    </main>
  );
}
