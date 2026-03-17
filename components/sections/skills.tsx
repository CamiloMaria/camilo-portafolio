"use client";

import { type FC } from "react";
import { motion, type Variants } from "framer-motion";
import { skills, type SkillCategory } from "@/lib/portfolio-data";

const categoryConfig: Record<SkillCategory, { title: string; color: string; borderColor: string; glowClass: string }> = {
  frontend: {
    title: "FRONTEND",
    color: "#00ffff",
    borderColor: "#00ffff",
    glowClass: "box-glow-cyan",
  },
  backend: {
    title: "BACKEND",
    color: "#bf00ff",
    borderColor: "#bf00ff",
    glowClass: "box-glow-purple",
  },
  tools: {
    title: "TOOLS",
    color: "#39ff14",
    borderColor: "#39ff14",
    glowClass: "box-glow-green",
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export const Skills: FC = () => {
  const groupedSkills = skills.reduce<Record<SkillCategory, typeof skills>>(
    (acc, skill) => {
      acc[skill.category].push(skill);
      return acc;
    },
    { frontend: [], backend: [], tools: [] }
  );

  const categories: SkillCategory[] = ["frontend", "backend", "tools"];

  return (
    <section
      id="skills"
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
          <span className="font-[family-name:var(--font-pixel)] text-xl text-[#ff00ff] tracking-widest">
            HIGH SCORES
          </span>
          <h2 className="font-[family-name:var(--font-pixel)] text-2xl md:text-3xl text-white mt-4">
            MY SKILLS
          </h2>
        </motion.div>
      </div>

      {/* Skills grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => {
          const config = categoryConfig[category];
          const categorySkills = groupedSkills[category];

          return (
            <motion.div
              key={category}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              {/* Category header */}
              <motion.div
                variants={cardVariants}
                className="text-center mb-6"
              >
                <h3
                  className="font-[family-name:var(--font-pixel)] text-sm md:text-base"
                  style={{ color: config.color, textShadow: `0 0 10px ${config.color}` }}
                >
                  {config.title}
                </h3>
                <div
                  className="h-0.5 mt-2 mx-auto w-24"
                  style={{ background: config.color, boxShadow: `0 0 10px ${config.color}` }}
                />
              </motion.div>

              {/* Skills cards */}
              <div className="space-y-4">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={cardVariants}
                    className="group relative"
                  >
                    <div
                      className={`
                        relative p-4 bg-[#151520] border-2 transition-all duration-300
                        hover:transform hover:scale-[1.02]
                        ${config.glowClass}
                      `}
                      style={{
                        borderColor: config.borderColor,
                        boxShadow: `0 0 5px ${config.borderColor}30, inset 0 0 20px ${config.borderColor}10`,
                      }}
                    >
                      {/* Skill name */}
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-[family-name:var(--font-terminal)] text-lg text-white">
                          {skill.name}
                        </span>
                        <span
                          className="font-[family-name:var(--font-terminal)] text-sm"
                          style={{ color: config.color }}
                        >
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress bar */}
                      <div className="h-2 bg-[#0a0a0f] relative overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="h-full pixel-progress"
                          style={{
                            background: `repeating-linear-gradient(90deg, ${config.color} 0px, ${config.color} 8px, transparent 8px, transparent 12px)`,
                          }}
                        />
                      </div>

                      {/* Decorative corners */}
                      <div className="absolute top-1 left-1 w-2 h-2 border-l border-t" style={{ borderColor: config.color }} />
                      <div className="absolute top-1 right-1 w-2 h-2 border-r border-t" style={{ borderColor: config.color }} />
                      <div className="absolute bottom-1 left-1 w-2 h-2 border-l border-b" style={{ borderColor: config.color }} />
                      <div className="absolute bottom-1 right-1 w-2 h-2 border-r border-b" style={{ borderColor: config.color }} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
