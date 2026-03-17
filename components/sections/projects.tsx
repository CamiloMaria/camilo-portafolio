"use client";

import { useMemo, type FC } from "react";
import { motion, type Variants, useReducedMotion } from "framer-motion";
import { projects } from "@/lib/portfolio-data";

const containerVariants = (shouldReduceMotion: boolean): Variants => {
  if (shouldReduceMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };
  }
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
};

const cardVariants = (shouldReduceMotion: boolean): Variants => {
  if (shouldReduceMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };
  }
  return {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
};

const headerVariants = (shouldReduceMotion: boolean): Variants => {
  if (shouldReduceMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };
  }
  return {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };
};

const techIconMap: Record<string, { bg: string; text: string }> = {
  "Next.js": { bg: "#000000", text: "#ffffff" },
  React: { bg: "#61DAFB", text: "#000000" },
  TypeScript: { bg: "#3178C6", text: "#ffffff" },
  "Tailwind CSS": { bg: "#06B6D4", text: "#000000" },
  "Framer Motion": { bg: "#0055FF", text: "#ffffff" },
  Node: { bg: "#339933", text: "#ffffff" },
  PostgreSQL: { bg: "#336791", text: "#ffffff" },
  Stripe: { bg: "#635BFF", text: "#ffffff" },
  "D3.js": { bg: "#F9A03F", text: "#000000" },
  WebSocket: { bg: "#000000", text: "#ffffff" },
  Prisma: { bg: "#2D3748", text: "#ffffff" },
  NextAuth: { bg: "#000000", text: "#ffffff" },
  Figma: { bg: "#F24E1E", text: "#ffffff" },
  Testing: { bg: "#C21325", text: "#ffffff" },
  Git: { bg: "#F05032", text: "#ffffff" },
  Docker: { bg: "#2496ED", text: "#ffffff" },
  GraphQL: { bg: "#E10098", text: "#ffffff" },
};

const getTechColor = (tech: string): { bg: string; text: string } => {
  return techIconMap[tech] || { bg: "#4a4a5a", text: "#ffffff" };
};

export const Projects: FC = () => {
  const shouldReduceMotion = useReducedMotion() ?? false;

  const containerVars = useMemo(() => containerVariants(shouldReduceMotion), [shouldReduceMotion]);
  const cardVars = useMemo(() => cardVariants(shouldReduceMotion), [shouldReduceMotion]);
  const headerVars = useMemo(() => headerVariants(shouldReduceMotion), [shouldReduceMotion]);

  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4 relative grid-pattern"
      aria-labelledby="projects-heading"
    >
      {/* Section header */}
      <div className="max-w-6xl mx-auto mb-16">
        <motion.div
          variants={headerVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="font-[family-name:var(--font-pixel)] text-xl text-[#39ff14] tracking-widest">
            GAME LEVELS
          </span>
          <h2 id="projects-heading" className="font-[family-name:var(--font-pixel)] text-2xl md:text-3xl text-white mt-4">
            MY PROJECTS
          </h2>
        </motion.div>
      </div>

      {/* Projects grid */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => {
            const neonColors = ["#ff00ff", "#00ffff", "#bf00ff"];
            const borderColor = neonColors[index % neonColors.length];

            return (
              <motion.article
                key={project.title}
                variants={cardVars}
                className="group relative bg-[#151520] overflow-hidden"
                style={{
                  borderColor,
                  boxShadow: `0 0 5px ${borderColor}30`,
                }}
              >
                {/* Thumbnail placeholder */}
                <div className="aspect-video relative overflow-hidden bg-[#0a0a0f] flex items-center justify-center">
                  <span className="font-[family-name:var(--font-terminal)] text-4xl text-[#b0b0b0]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Info panel */}
                <div className="p-4">
                  <h3 className="font-[family-name:var(--font-pixel)] text-sm md:text-base text-[#00ffff] mb-3 group-hover:text-[#ff00ff] transition-colors">
                    {project.title}
                  </h3>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.techStack.slice(0, 5).map((tech) => {
                      const colors = getTechColor(tech);
                      return (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-[family-name:var(--font-terminal)] rounded"
                          style={{ backgroundColor: colors.bg, color: colors.text }}
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>

                  {/* Description */}
                  <p className="font-[family-name:var(--font-terminal)] text-base text-[#b0b0b0] mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-[family-name:var(--font-futuristic)] text-xs px-4 py-2 bg-[#ff00ff]/10 border border-[#ff00ff] text-[#ff00ff] hover:bg-[#ff00ff]/20 transition-colors"
                        aria-label={`View ${project.title} demo`}
                      >
                        PLAY
                      </a>
                    )}
                    {project.sourceUrl && (
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-[family-name:var(--font-futuristic)] text-xs px-4 py-2 bg-transparent border border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff]/10 transition-colors"
                        aria-label={`View ${project.title} source code`}
                      >
                        SOURCE
                      </a>
                    )}
                  </div>
                </div>

                {/* Decorative corners */}
                <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2" style={{ borderColor }} />
                <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2" style={{ borderColor }} />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2" style={{ borderColor }} />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2" style={{ borderColor }} />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
