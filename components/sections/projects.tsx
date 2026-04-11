"use client";

import { useMemo, type FC } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/lib/portfolio-data";
import {
  containerVariants,
  itemVariants,
  headerVariants,
} from "@/lib/animation-variants";

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
  NestJS: { bg: "#E0234E", text: "#ffffff" },
  Redis: { bg: "#DC382D", text: "#ffffff" },
  BullMQ: { bg: "#E84D3D", text: "#ffffff" },
  "Socket.io": { bg: "#010101", text: "#ffffff" },
  Figma: { bg: "#F24E1E", text: "#ffffff" },
  Testing: { bg: "#C21325", text: "#ffffff" },
  Git: { bg: "#F05032", text: "#ffffff" },
  Docker: { bg: "#2496ED", text: "#ffffff" },
  GraphQL: { bg: "#E10098", text: "#ffffff" },
};

const getTechColor = (tech: string): { bg: string; text: string } => {
  return techIconMap[tech] || { bg: "#4a4a5a", text: "#ffffff" };
};

// Unique gradient per project for visual variety
const projectGradients = [
  "linear-gradient(135deg, rgba(255,0,255,0.15) 0%, rgba(0,255,255,0.08) 100%)",
  "linear-gradient(135deg, rgba(0,255,255,0.15) 0%, rgba(191,0,255,0.08) 100%)",
  "linear-gradient(135deg, rgba(191,0,255,0.15) 0%, rgba(57,255,20,0.08) 100%)",
  "linear-gradient(135deg, rgba(57,255,20,0.12) 0%, rgba(255,0,255,0.08) 100%)",
  "linear-gradient(135deg, rgba(0,255,255,0.12) 0%, rgba(255,0,255,0.08) 100%)",
  "linear-gradient(135deg, rgba(255,0,255,0.12) 0%, rgba(57,255,20,0.08) 100%)",
];

const neonColors = ["#ff00ff", "#00ffff", "#bf00ff"];

export const Projects: FC = () => {
  const shouldReduceMotion = useReducedMotion() ?? false;

  const containerVars = useMemo(
    () => containerVariants(shouldReduceMotion, 0.15),
    [shouldReduceMotion]
  );
  const cardVars = useMemo(
    () => itemVariants(shouldReduceMotion, { distance: 30 }),
    [shouldReduceMotion]
  );
  const headerVars = useMemo(
    () => headerVariants(shouldReduceMotion),
    [shouldReduceMotion]
  );

  return (
    <section
      id="projects"
      className="min-h-dvh py-20 px-4 relative grid-pattern"
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
          <span className="font-pixel text-xl text-neon-green tracking-widest">
            GAME LEVELS
          </span>
          <h2
            id="projects-heading"
            className="font-pixel text-2xl md:text-3xl text-white mt-4"
          >
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
            const borderColor = neonColors[index % neonColors.length];
            const gradient =
              projectGradients[index % projectGradients.length];

            return (
              <motion.article
                key={project.title}
                variants={cardVars}
                className="group relative bg-card-bg overflow-hidden transition-all duration-300 hover:translate-y-[-2px]"
                style={{
                  borderColor,
                  boxShadow: `0 0 5px ${borderColor}30`,
                }}
              >
                {/* Thumbnail with project image or generative gradient */}
                <div
                  className="aspect-video relative overflow-hidden flex items-center justify-center"
                  style={project.image ? undefined : { background: gradient }}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <>
                      {/* Grid lines inside thumbnail */}
                      <div
                        className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage: `
                            linear-gradient(${borderColor}15 1px, transparent 1px),
                            linear-gradient(90deg, ${borderColor}15 1px, transparent 1px)
                          `,
                          backgroundSize: "30px 30px",
                        }}
                      />
                      <span
                        className="font-pixel text-4xl opacity-30 relative z-10"
                        style={{ color: borderColor }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </>
                  )}
                </div>

                {/* Info panel */}
                <div className="p-5">
                  <h3 className="font-pixel text-sm md:text-base text-neon-cyan mb-3 group-hover:text-neon-magenta transition-colors">
                    {project.title}
                  </h3>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.techStack.slice(0, 5).map((tech) => {
                      const colors = getTechColor(tech);
                      return (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-terminal rounded"
                          style={{
                            backgroundColor: colors.bg,
                            color: colors.text,
                          }}
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>

                  {/* Description */}
                  <p className="font-terminal text-base text-foreground-muted mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="neon-button font-futuristic text-xs px-4 py-2 bg-neon-magenta/10 border border-neon-magenta text-neon-magenta hover:bg-neon-magenta/20 transition-colors"
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
                        className="neon-button font-futuristic text-xs px-4 py-2 bg-transparent border border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 transition-colors"
                        aria-label={`View ${project.title} source code`}
                      >
                        SOURCE
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
