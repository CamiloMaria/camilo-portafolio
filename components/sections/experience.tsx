"use client";

import { useMemo, type FC } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { experiences } from "@/lib/portfolio-data";
import { useResumeModal } from "@/hooks/use-resume-modal";
import {
  containerVariants,
  itemVariants,
  headerVariants,
} from "@/lib/animation-variants";

export const Experience: FC = () => {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const { openModal } = useResumeModal();

  const containerVars = useMemo(
    () => containerVariants(shouldReduceMotion, 0.15),
    [shouldReduceMotion]
  );
  const itemVars = useMemo(
    () => itemVariants(shouldReduceMotion, { direction: "x", distance: -20 }),
    [shouldReduceMotion]
  );
  const headerVars = useMemo(
    () => headerVariants(shouldReduceMotion),
    [shouldReduceMotion]
  );

  return (
    <section
      id="experience"
      className="min-h-dvh py-20 px-4 relative grid-pattern"
      aria-labelledby="experience-heading"
    >
      {/* Section header */}
      <div className="max-w-4xl mx-auto mb-16">
        <motion.div
          variants={headerVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="font-pixel text-xl text-neon-cyan tracking-widest">
            CONTINUE?
          </span>
          <h2
            id="experience-heading"
            className="font-pixel text-2xl md:text-3xl text-white mt-4"
          >
            MY JOURNEY
          </h2>
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-magenta via-neon-purple to-neon-cyan" />

          {experiences.map((exp, index) => {
            const isWork = exp.type === "work";
            const accentColor = isWork
              ? "var(--neon-magenta)"
              : "var(--neon-green)";

            return (
              <motion.div
                key={exp.id}
                variants={itemVars}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 z-10"
                  style={{
                    backgroundColor: accentColor,
                    boxShadow: `0 0 10px ${accentColor}`,
                  }}
                />

                {/* Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-[45%] ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div
                    className="relative p-5 bg-card-bg border transition-all duration-300 hover:scale-[1.03] hover:z-10"
                    style={{
                      borderColor: `color-mix(in srgb, ${accentColor} 40%, transparent)`,
                      boxShadow: `0 0 10px color-mix(in srgb, ${accentColor} 15%, transparent)`,
                    }}
                  >
                    {/* Type badge */}
                    <div className="absolute -top-3 right-4">
                      <span
                        className="font-pixel text-[10px] px-2 py-1 bg-background"
                        style={{
                          color: accentColor,
                          border: `1px solid ${accentColor}`,
                        }}
                      >
                        {isWork ? "WORK" : "EDUCATION"}
                      </span>
                    </div>

                    {/* Role */}
                    <h3 className="font-pixel text-xs text-white mb-1 pr-16">
                      {exp.role}
                    </h3>

                    {/* Company/School */}
                    <p
                      className="font-terminal text-base mb-1"
                      style={{ color: isWork ? "var(--neon-cyan)" : "var(--neon-green)" }}
                    >
                      {exp.company}
                    </p>

                    {/* Duration & Location */}
                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="font-terminal text-sm text-foreground-muted">
                        {exp.duration}
                      </span>
                      <span className="font-terminal text-sm text-foreground-muted">
                        {exp.location}
                      </span>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-1">
                      {exp.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="font-terminal text-sm text-foreground-muted flex items-start gap-2"
                        >
                          <span
                            className="mt-1.5 w-1.5 h-1.5 flex-shrink-0"
                            style={{ backgroundColor: accentColor }}
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View Full Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <button
            onClick={openModal}
            className="neon-button neon-button-purple font-futuristic text-sm px-8 py-3 bg-neon-purple/10 border-2 border-neon-purple text-neon-purple hover:bg-neon-purple/20 transition-all"
          >
            VIEW FULL HISTORY
          </button>
        </motion.div>
      </div>
    </section>
  );
};
