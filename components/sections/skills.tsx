"use client";

import { useMemo, type FC } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { skills, type SkillCategory } from "@/lib/portfolio-data";
import {
  containerVariants,
  itemVariants,
  headerVariants,
} from "@/lib/animation-variants";

const categoryConfig: Record<
  SkillCategory,
  { title: string; color: string; glowClass: string }
> = {
  frontend: {
    title: "FRONTEND",
    color: "var(--neon-cyan)",
    glowClass: "box-glow-cyan",
  },
  backend: {
    title: "BACKEND",
    color: "var(--neon-purple)",
    glowClass: "box-glow-purple",
  },
  tools: {
    title: "TOOLS",
    color: "var(--neon-green)",
    glowClass: "box-glow-green",
  },
};

export const Skills: FC = () => {
  const shouldReduceMotion = useReducedMotion() ?? false;

  const containerVars = useMemo(
    () => containerVariants(shouldReduceMotion, 0.1),
    [shouldReduceMotion]
  );
  const cardVars = useMemo(
    () => itemVariants(shouldReduceMotion),
    [shouldReduceMotion]
  );
  const headerVars = useMemo(
    () => headerVariants(shouldReduceMotion),
    [shouldReduceMotion]
  );

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
      className="min-h-dvh py-20 px-4 relative grid-pattern"
      aria-labelledby="skills-heading"
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
          <span className="font-pixel text-xl text-neon-magenta tracking-widest">
            HIGH SCORES
          </span>
          <h2
            id="skills-heading"
            className="font-pixel text-2xl md:text-3xl text-white mt-4"
          >
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
              variants={containerVars}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              {/* Category header */}
              <motion.div variants={cardVars} className="text-center mb-6">
                <h3
                  className="font-pixel text-sm md:text-base"
                  style={{
                    color: config.color,
                    textShadow: `0 0 10px ${config.color}`,
                  }}
                >
                  {config.title}
                </h3>
                <div
                  className="h-0.5 mt-2 mx-auto w-24"
                  style={{
                    background: config.color,
                    boxShadow: `0 0 10px ${config.color}`,
                  }}
                />
              </motion.div>

              {/* Skills cards */}
              <div className="space-y-4">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={cardVars}
                    className="group relative"
                  >
                    <div
                      className="relative p-4 bg-card-bg border border-transparent transition-all duration-300 hover:scale-[1.02]"
                      style={{
                        borderColor: `color-mix(in srgb, ${config.color} 30%, transparent)`,
                        boxShadow: `inset 0 0 20px color-mix(in srgb, ${config.color} 5%, transparent)`,
                      }}
                    >
                      {/* Skill name */}
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-terminal text-lg text-white">
                          {skill.name}
                        </span>
                        <span
                          className="font-terminal text-sm"
                          style={{ color: config.color }}
                        >
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress bar */}
                      <div className="h-2 bg-background relative overflow-hidden">
                        <motion.div
                          initial={
                            shouldReduceMotion
                              ? { width: `${skill.level}%` }
                              : { width: 0 }
                          }
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={
                            shouldReduceMotion
                              ? { duration: 0 }
                              : { duration: 1, delay: index * 0.1 }
                          }
                          className="h-full"
                          style={{
                            background: `repeating-linear-gradient(90deg, ${config.color} 0px, ${config.color} 8px, transparent 8px, transparent 12px)`,
                          }}
                        />
                      </div>
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
