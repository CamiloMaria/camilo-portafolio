"use client";

import { type FC } from "react";
import { motion, type Variants } from "framer-motion";
import { projects } from "@/lib/portfolio-data";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
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
  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4 relative grid-pattern"
    >
      {/* Section header */}
      <div className="max-w-6xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="font-[family-name:var(--font-pixel)] text-xl text-[#39ff14] tracking-widest">
            GAME LEVELS
          </span>
          <h2 className="font-[family-name:var(--font-pixel)] text-2xl md:text-3xl text-white mt-4">
            MY PROJECTS
          </h2>
        </motion.div>
      </div>

      {/* Projects grid */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative"
            >
              <div
                className="
                  relative p-6 bg-[#151520] border-2 border-[#bf00ff]/50 
                  transition-all duration-300 hover:border-[#ff00ff]
                  hover:box-glow-magenta
                "
                style={{
                  boxShadow: "0 0 10px rgba(191, 0, 255, 0.2)",
                }}
              >
                {/* Tech stack thumbnails */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 4).map((tech) => {
                    const colors = getTechColor(tech);
                    return (
                      <span
                        key={tech}
                        className="font-[family-name:var(--font-terminal)] text-xs px-2 py-1"
                        style={{
                          backgroundColor: colors.bg,
                          color: colors.text,
                        }}
                      >
                        {tech}
                      </span>
                    );
                  })}
                  {project.techStack.length > 4 && (
                    <span className="font-[family-name:var(--font-terminal)] text-xs px-2 py-1 bg-[#4a4a5a] text-white">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-pixel)] text-sm md:text-base text-[#00ffff] mb-3 group-hover:text-[#ff00ff] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-[family-name:var(--font-terminal)] text-base text-[#b0b0b0] mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Action buttons */}
                <div className="flex gap-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        neon-button neon-button-cyan font-[family-name:var(--font-futuristic)] 
                        text-xs px-4 py-2 bg-[#00ffff]/10 border border-[#00ffff] 
                        text-[#00ffff] hover:bg-[#00ffff]/20 transition-all
                      "
                    >
                      PLAY
                    </a>
                  )}
                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        neon-button neon-button-magenta font-[family-name:var(--font-futuristic)] 
                        text-xs px-4 py-2 bg-[#ff00ff]/10 border border-[#ff00ff] 
                        text-[#ff00ff] hover:bg-[#ff00ff]/20 transition-all
                      "
                    >
                      SOURCE
                    </a>
                  )}
                </div>

                {/* Decorative corners */}
                <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-[#bf00ff]/50 group-hover:border-[#ff00ff] transition-colors" />
                <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-[#bf00ff]/50 group-hover:border-[#ff00ff] transition-colors" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-[#bf00ff]/50 group-hover:border-[#ff00ff] transition-colors" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-[#bf00ff]/50 group-hover:border-[#ff00ff] transition-colors" />

                {/* Level number */}
                <div className="absolute -top-3 -left-3 font-[family-name:var(--font-pixel)] text-xs text-[#39ff14] bg-[#0a0a0f] px-2 py-1 border border-[#39ff14]">
                  LVL {project.id}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
