"use client";

import { type FC } from "react";
import { motion, type Variants } from "framer-motion";
import { experiences } from "@/lib/portfolio-data";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const Experience: FC = () => {
  return (
    <section
      id="experience"
      className="min-h-screen py-20 px-4 relative grid-pattern"
    >
      {/* Section header */}
      <div className="max-w-4xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="font-[family-name:var(--font-pixel)] text-xl text-[#00ffff] tracking-widest">
            CONTINUE?
          </span>
          <h2 className="font-[family-name:var(--font-pixel)] text-2xl md:text-3xl text-white mt-4">
            MY JOURNEY
          </h2>
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ff00ff] via-[#bf00ff] to-[#00ffff]" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className={`relative flex items-center mb-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 z-10 ${
                  exp.type === "work" 
                    ? "bg-[#ff00ff] shadow-[0_0_10px_#ff00ff]" 
                    : "bg-[#39ff14] shadow-[0_0_10px_#39ff14]"
                }`}
              />

              {/* Card */}
              <div
                className={`
                  ml-12 md:ml-0 md:w-[45%] 
                  ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}
                `}
              >
                <div
                  className="
                    relative p-5 bg-[#151520] border-2 
                    transition-all duration-300 hover:scale-[1.02]
                  "
                  style={{
                    borderColor: exp.type === "work" ? "#ff00ff" : "#39ff14",
                    boxShadow: `0 0 10px ${exp.type === "work" ? "rgba(255, 0, 255, 0.2)" : "rgba(57, 255, 20, 0.2)"}`,
                  }}
                >
                  {/* Type badge */}
                  <div className="absolute -top-3 right-4">
                    <span
                      className="font-[family-name:var(--font-pixel)] text-[10px] px-2 py-1 bg-[#0a0a0f]"
                      style={{
                        color: exp.type === "work" ? "#ff00ff" : "#39ff14",
                        border: `1px solid ${exp.type === "work" ? "#ff00ff" : "#39ff14"}`,
                      }}
                    >
                      {exp.type === "work" ? "WORK" : "EDUCATION"}
                    </span>
                  </div>

                  {/* Role */}
                  <h3 className="font-[family-name:var(--font-pixel)] text-xs text-white mb-1 pr-16">
                    {exp.role}
                  </h3>

                  {/* Company/School */}
                  <p
                    className="font-[family-name:var(--font-terminal)] text-base mb-1"
                    style={{
                      color: exp.type === "work" ? "#00ffff" : "#39ff14",
                    }}
                  >
                    {exp.company}
                  </p>

                  {/* Duration & Location */}
                  <div className="flex flex-wrap gap-3 mb-3">
                    <span className="font-[family-name:var(--font-terminal)] text-sm text-[#b0b0b0]">
                      {exp.duration}
                    </span>
                    <span className="font-[family-name:var(--font-terminal)] text-sm text-[#b0b0b0]">
                      {exp.location}
                    </span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-1">
                    {exp.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="font-[family-name:var(--font-terminal)] text-sm text-[#b0b0b0] flex items-start gap-2"
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 flex-shrink-0"
                          style={{
                            backgroundColor: exp.type === "work" ? "#ff00ff" : "#39ff14",
                          }}
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Decorative corners */}
                  <div className="absolute top-2 left-2 w-2 h-2 border-l border-t" style={{ borderColor: exp.type === "work" ? "#ff00ff" : "#39ff14" }} />
                  <div className="absolute top-2 right-2 w-2 h-2 border-r border-t" style={{ borderColor: exp.type === "work" ? "#ff00ff" : "#39ff14" }} />
                  <div className="absolute bottom-2 left-2 w-2 h-2 border-l border-b" style={{ borderColor: exp.type === "work" ? "#ff00ff" : "#39ff14" }} />
                  <div className="absolute bottom-2 right-2 w-2 h-2 border-r border-b" style={{ borderColor: exp.type === "work" ? "#ff00ff" : "#39ff14" }} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View Full Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block neon-button neon-button-purple
              font-[family-name:var(--font-futuristic)] text-sm px-8 py-3
              bg-[#bf00ff]/10 border-2 border-[#bf00ff] text-[#bf00ff]
              hover:bg-[#bf00ff]/20 transition-all
            "
          >
            VIEW FULL HISTORY
          </a>
        </motion.div>
      </div>
    </section>
  );
};
