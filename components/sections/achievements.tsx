"use client";

import { useMemo, type FC } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  headerVariants,
} from "@/lib/animation-variants";

interface Achievement {
  id: string;
  icon: string;
  title: string;
  description: string;
  date?: string;
  rarity: "common" | "rare" | "epic" | "legendary";
  unlocked: boolean;
}

const achievements: Achievement[] = [
  {
    id: "first-code",
    icon: ">_",
    title: "Hello World",
    description: "Wrote your first line of code",
    date: "2018",
    rarity: "common",
    unlocked: true,
  },
  {
    id: "degree",
    icon: "**",
    title: "Scholar",
    description: "BS in Software Engineering from INTEC",
    date: "Aug 2024",
    rarity: "epic",
    unlocked: true,
  },
  {
    id: "first-job",
    icon: ">>",
    title: "Player 2 Has Entered",
    description: "Landed first developer role at Plaza Lama",
    date: "Jul 2023",
    rarity: "rare",
    unlocked: true,
  },
  {
    id: "solo-dev",
    icon: "!!",
    title: "Lone Wolf",
    description: "Sole developer managing full lifecycle of enterprise project",
    date: "Sep 2023",
    rarity: "epic",
    unlocked: true,
  },
  {
    id: "performance",
    icon: "^^",
    title: "Speed Demon",
    description: "Achieved 200% performance boost migrating Angular to React",
    date: "2024",
    rarity: "legendary",
    unlocked: true,
  },
  {
    id: "mentor",
    icon: "<3",
    title: "Sensei",
    description: "Mentored devs, reducing onboarding time by 50%",
    date: "Apr 2025",
    rarity: "rare",
    unlocked: true,
  },
  {
    id: "open-source",
    icon: "{}",
    title: "Open Source Hero",
    description: "Published NestJS enterprise boilerplate on GitHub",
    date: "2024",
    rarity: "rare",
    unlocked: true,
  },
  {
    id: "intranet",
    icon: "##",
    title: "10K Users Served",
    description: "Built intranet module used by 10,000+ employees",
    date: "2023",
    rarity: "epic",
    unlocked: true,
  },
  {
    id: "masters",
    icon: "?!",
    title: "Prestige Mode",
    description: "Complete MS at Boston University",
    rarity: "legendary",
    unlocked: false,
  },
  {
    id: "100-stars",
    icon: "++",
    title: "Star Collector",
    description: "Reach 100 stars across GitHub repos",
    rarity: "epic",
    unlocked: false,
  },
  {
    id: "startup",
    icon: "$>",
    title: "Entrepreneur",
    description: "Launch your own product or startup",
    rarity: "legendary",
    unlocked: false,
  },
  {
    id: "conference",
    icon: "//",
    title: "Main Stage",
    description: "Give a talk at a tech conference",
    rarity: "epic",
    unlocked: false,
  },
];

const rarityConfig = {
  common: { label: "COMMON", color: "var(--foreground-muted)", glow: "none" },
  rare: { label: "RARE", color: "var(--neon-cyan)", glow: "0 0 8px rgba(0,255,255,0.3)" },
  epic: { label: "EPIC", color: "var(--neon-purple)", glow: "0 0 8px rgba(191,0,255,0.3)" },
  legendary: { label: "LEGENDARY", color: "var(--neon-magenta)", glow: "0 0 12px rgba(255,0,255,0.4)" },
};

export const Achievements: FC = () => {
  const shouldReduceMotion = useReducedMotion() ?? false;

  const containerVars = useMemo(
    () => containerVariants(shouldReduceMotion, 0.06),
    [shouldReduceMotion]
  );
  const itemVars = useMemo(
    () => itemVariants(shouldReduceMotion, { distance: 20 }),
    [shouldReduceMotion]
  );
  const headerVars = useMemo(
    () => headerVariants(shouldReduceMotion),
    [shouldReduceMotion]
  );

  const unlocked = achievements.filter((a) => a.unlocked).length;
  const total = achievements.length;
  const pct = Math.round((unlocked / total) * 100);

  return (
    <section
      id="achievements"
      className="min-h-dvh py-20 px-4 relative grid-pattern"
      aria-labelledby="achievements-heading"
    >
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-12">
        <motion.div
          variants={headerVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="font-pixel text-xl text-neon-magenta tracking-widest">
            TROPHY ROOM
          </span>
          <h2
            id="achievements-heading"
            className="font-pixel text-2xl md:text-3xl text-white mt-4"
          >
            ACHIEVEMENTS
          </h2>

          {/* Progress */}
          <div className="mt-6 max-w-sm mx-auto">
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-terminal text-sm text-foreground-muted">
                {unlocked}/{total} UNLOCKED
              </span>
              <span className="font-terminal text-sm text-neon-magenta">
                {pct}%
              </span>
            </div>
            <div className="h-2 bg-background border border-neon-magenta/30 overflow-hidden">
              <motion.div
                className="h-full"
                style={{
                  background:
                    "linear-gradient(90deg, var(--neon-magenta), var(--neon-purple))",
                  boxShadow: "0 0 10px rgba(255,0,255,0.4)",
                }}
                initial={{ width: 0 }}
                whileInView={{ width: `${pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Achievement grid */}
      <motion.div
        variants={containerVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {achievements.map((ach) => {
          const rarity = rarityConfig[ach.rarity];
          const locked = !ach.unlocked;

          return (
            <motion.div
              key={ach.id}
              variants={itemVars}
              className={`group relative border bg-background/80 transition-all duration-300 ${locked
                ? "border-foreground-muted/15 opacity-50 grayscale"
                : "border-foreground-muted/20 hover:scale-[1.03]"
                }`}
              style={{
                boxShadow: locked ? "none" : rarity.glow,
              }}
            >
              {/* Rarity top accent line */}
              {!locked && (
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{
                    background: rarity.color,
                    boxShadow: rarity.glow,
                  }}
                />
              )}

              <div className="p-4">
                <div className="flex items-start gap-3">
                  {/* Icon */}
                  <div
                    className="flex-shrink-0 w-10 h-10 flex items-center justify-center border font-pixel text-[10px]"
                    style={{
                      borderColor: locked
                        ? "rgba(176,176,176,0.2)"
                        : rarity.color,
                      color: locked
                        ? "rgba(176,176,176,0.3)"
                        : rarity.color,
                      backgroundColor: locked
                        ? "transparent"
                        : `color-mix(in srgb, ${rarity.color} 8%, transparent)`,
                    }}
                  >
                    {locked ? "??" : ach.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3
                        className="font-pixel text-[10px] leading-relaxed truncate"
                        style={{
                          color: locked ? "var(--foreground-muted)" : "#fff",
                        }}
                      >
                        {locked ? "LOCKED" : ach.title}
                      </h3>
                    </div>
                    <p className="font-terminal text-sm text-foreground-muted leading-snug">
                      {ach.description}
                    </p>
                  </div>
                </div>

                {/* Footer: rarity + date */}
                <div className="flex items-center justify-between mt-3 pt-2 border-t border-foreground-muted/10">
                  <span
                    className="font-pixel text-[7px] tracking-widest"
                    style={{ color: locked ? "var(--foreground-muted)" : rarity.color }}
                  >
                    {rarity.label}
                  </span>
                  {ach.date && !locked && (
                    <span className="font-terminal text-xs text-foreground-muted">
                      {ach.date}
                    </span>
                  )}
                  {locked && (
                    <svg
                      className="w-3.5 h-3.5 text-foreground-muted/40"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};
