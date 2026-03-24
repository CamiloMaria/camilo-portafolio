"use client";

import { useMemo, useState, type FC } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { experiences } from "@/lib/portfolio-data";
import { useResumeModal } from "@/hooks/use-resume-modal";
import {
  containerVariants,
  itemVariants,
  headerVariants,
} from "@/lib/animation-variants";

// Derive XP from highlights count + duration weight
function questXP(highlights: string[], duration: string): number {
  const months = parseDurationMonths(duration);
  return highlights.length * 120 + months * 45;
}

function parseDurationMonths(duration: string): number {
  const months: Record<string, number> = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
  };
  const parts = duration.match(/(\w{3})\s+(\d{4})\s*-\s*(\w{3})\s+(\d{4})/);
  if (!parts) return 6;
  const [, sm, sy, em, ey] = parts;
  return (parseInt(ey) - parseInt(sy)) * 12 + ((months[em] ?? 0) - (months[sm] ?? 0)) + 1;
}

function questRank(xp: number): { label: string; color: string } {
  if (xp >= 1000) return { label: "LEGENDARY", color: "var(--neon-magenta)" };
  if (xp >= 600) return { label: "EPIC", color: "var(--neon-purple)" };
  if (xp >= 350) return { label: "RARE", color: "var(--neon-cyan)" };
  return { label: "COMMON", color: "var(--neon-green)" };
}

export const Experience: FC = () => {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const { openModal } = useResumeModal();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const containerVars = useMemo(
    () => containerVariants(shouldReduceMotion, 0.12),
    [shouldReduceMotion]
  );
  const itemVars = useMemo(
    () => itemVariants(shouldReduceMotion, { distance: 25 }),
    [shouldReduceMotion]
  );
  const headerVars = useMemo(
    () => headerVariants(shouldReduceMotion),
    [shouldReduceMotion]
  );

  const totalXP = experiences.reduce(
    (sum, exp) => sum + questXP(exp.highlights, exp.duration),
    0
  );

  return (
    <section
      id="experience"
      className="min-h-dvh py-20 px-4 relative grid-pattern"
      aria-labelledby="experience-heading"
    >
      {/* Section header */}
      <div className="max-w-3xl mx-auto mb-12">
        <motion.div
          variants={headerVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="font-pixel text-xl text-neon-cyan tracking-widest">
            QUEST LOG
          </span>
          <h2
            id="experience-heading"
            className="font-pixel text-2xl md:text-3xl text-white mt-4"
          >
            MY JOURNEY
          </h2>

          {/* XP Summary bar */}
          <div className="mt-6 max-w-xs mx-auto">
            <div className="flex items-center justify-between mb-1">
              <span className="font-terminal text-sm text-foreground-muted">
                TOTAL XP
              </span>
              <span className="font-terminal text-sm text-neon-cyan">
                {totalXP.toLocaleString()} XP
              </span>
            </div>
            <div className="h-2 bg-background border border-neon-cyan/30 overflow-hidden">
              <motion.div
                className="h-full"
                style={{
                  background:
                    "repeating-linear-gradient(90deg, var(--neon-cyan) 0px, var(--neon-cyan) 6px, transparent 6px, transparent 9px)",
                }}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quest Log Frame */}
      <motion.div
        variants={containerVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        {/* Log frame */}
        <div
          className="relative border-2 border-neon-cyan/30 bg-background/80 overflow-hidden"
          style={{
            boxShadow:
              "0 0 30px rgba(0, 255, 255, 0.06), inset 0 0 60px rgba(0, 0, 0, 0.5)",
          }}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-neon-cyan/20 bg-card-bg/50">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              <span className="font-terminal text-sm text-foreground-muted">
                {experiences.length} QUESTS COMPLETED
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-pixel text-[10px] text-neon-magenta">
                MAIN {experiences.filter((e) => e.type === "work").length}
              </span>
              <span className="font-pixel text-[10px] text-neon-green">
                SIDE {experiences.filter((e) => e.type === "education").length}
              </span>
            </div>
          </div>

          {/* Quest entries */}
          <div className="divide-y divide-foreground-muted/10">
            {experiences.map((exp, index) => {
              const isWork = exp.type === "work";
              const xp = questXP(exp.highlights, exp.duration);
              const rank = questRank(xp);
              const accentColor = isWork
                ? "var(--neon-magenta)"
                : "var(--neon-green)";
              const isExpanded = expandedId === exp.id;

              return (
                <motion.div key={exp.id} variants={itemVars}>
                  {/* Quest row — clickable to expand */}
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedId(isExpanded ? null : exp.id)
                    }
                    className="w-full text-left px-5 py-4 transition-colors duration-200 hover:bg-card-bg/60 group"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-start gap-4">
                      {/* Quest number */}
                      <div
                        className="flex-shrink-0 w-9 h-9 flex items-center justify-center border font-pixel text-[10px] mt-0.5"
                        style={{
                          borderColor: accentColor,
                          color: accentColor,
                          boxShadow: `0 0 6px color-mix(in srgb, ${accentColor} 25%, transparent)`,
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      {/* Quest info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          {/* Quest type badge */}
                          <span
                            className="font-pixel text-[8px] px-1.5 py-0.5"
                            style={{
                              color: accentColor,
                              border: `1px solid ${accentColor}`,
                            }}
                          >
                            {isWork ? "MAIN QUEST" : "SIDE QUEST"}
                          </span>
                          {/* Rank badge */}
                          <span
                            className="font-pixel text-[8px] px-1.5 py-0.5"
                            style={{
                              color: rank.color,
                              backgroundColor: `color-mix(in srgb, ${rank.color} 10%, transparent)`,
                            }}
                          >
                            {rank.label}
                          </span>
                        </div>

                        {/* Role */}
                        <h3 className="font-pixel text-xs text-white leading-relaxed">
                          {exp.role}
                        </h3>

                        {/* Company + duration */}
                        <div className="flex items-center gap-2 mt-1 flex-wrap">
                          <span
                            className="font-terminal text-base"
                            style={{ color: isWork ? "var(--neon-cyan)" : "var(--neon-green)" }}
                          >
                            {exp.company}
                          </span>
                          <span className="font-terminal text-sm text-foreground-muted">
                            &middot; {exp.duration}
                          </span>
                        </div>
                      </div>

                      {/* XP + expand indicator */}
                      <div className="flex-shrink-0 text-right flex flex-col items-end gap-1">
                        <span className="font-terminal text-sm text-neon-cyan">
                          +{xp} XP
                        </span>
                        <svg
                          className={`w-4 h-4 text-foreground-muted transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </button>

                  {/* Expanded details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div
                          className="px-5 pb-4 ml-13"
                          style={{ marginLeft: "3.25rem" }}
                        >
                          {/* Location */}
                          <div className="flex items-center gap-2 mb-3">
                            <svg
                              className="w-3.5 h-3.5 text-foreground-muted"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            <span className="font-terminal text-sm text-foreground-muted">
                              {exp.location}
                            </span>
                          </div>

                          {/* Loot / Achievements */}
                          <div className="mb-1">
                            <span
                              className="font-pixel text-[8px] tracking-wider"
                              style={{ color: accentColor }}
                            >
                              ACHIEVEMENTS UNLOCKED
                            </span>
                          </div>
                          <ul className="space-y-1.5">
                            {exp.highlights.map((highlight, idx) => (
                              <li
                                key={idx}
                                className="font-terminal text-sm text-foreground-muted flex items-start gap-2"
                              >
                                <span
                                  className="mt-1 font-pixel text-[8px] flex-shrink-0"
                                  style={{ color: accentColor }}
                                >
                                  &gt;
                                </span>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom bar */}
          <div className="flex items-center justify-between px-5 py-3 border-t border-neon-cyan/20 bg-card-bg/50">
            <span className="font-terminal text-sm text-foreground-muted">
              &gt; CLICK QUEST TO INSPECT_
            </span>
            <button
              onClick={openModal}
              className="font-pixel text-[10px] text-neon-purple hover:text-neon-magenta transition-colors"
            >
              [ FULL LOG ]
            </button>
          </div>

          {/* Frame corners */}
          <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-neon-cyan/30" />
          <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-neon-cyan/30" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-neon-cyan/30" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-neon-cyan/30" />
        </div>
      </motion.div>
    </section>
  );
};
