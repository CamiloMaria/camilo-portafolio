"use client";

import { useMemo, type FC } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { personalInfo } from "@/lib/portfolio-data";
import {
  containerVariants,
  itemVariants,
  headerVariants,
} from "@/lib/animation-variants";

const attributes = [
  { label: "STR", name: "Backend", value: 88, color: "var(--neon-magenta)" },
  { label: "INT", name: "Frontend", value: 95, color: "var(--neon-cyan)" },
  { label: "DEX", name: "DevOps", value: 74, color: "var(--neon-green)" },
  { label: "WIS", name: "Architecture", value: 82, color: "var(--neon-purple)" },
  { label: "CHA", name: "Leadership", value: 85, color: "var(--neon-magenta)" },
];

const equippedGear = [
  { name: "React", slot: "WEAPON" },
  { name: "TypeScript", slot: "ARMOR" },
  { name: "Next.js", slot: "HELM" },
  { name: "NestJS", slot: "SHIELD" },
  { name: "Docker", slot: "BOOTS" },
  { name: "PostgreSQL", slot: "RING" },
];

const statusEffects = [
  { icon: "~", label: "MS @ Boston University", active: true },
  { icon: "#", label: "Based in Providence, RI", active: true },
  { icon: "!", label: "Open to opportunities", active: true },
];

export const About: FC = () => {
  const shouldReduceMotion = useReducedMotion() ?? false;

  const containerVars = useMemo(
    () => containerVariants(shouldReduceMotion, 0.1),
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

  return (
    <section
      id="about"
      className="min-h-dvh py-20 px-4 relative grid-pattern flex flex-col justify-center"
      aria-labelledby="about-heading"
    >
      {/* Section header */}
      <div className="max-w-4xl mx-auto mb-12 w-full">
        <motion.div
          variants={headerVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="font-pixel text-xl text-neon-green tracking-widest">
            PLAYER SELECT
          </span>
          <h2
            id="about-heading"
            className="font-pixel text-2xl md:text-3xl text-white mt-4"
          >
            ABOUT ME
          </h2>
        </motion.div>
      </div>

      <motion.div
        variants={containerVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left panel — Character card (2 cols) */}
          <motion.div variants={itemVars} className="lg:col-span-2">
            <div
              className="relative border-2 border-neon-green/40 bg-background/80 h-full"
              style={{
                boxShadow:
                  "0 0 25px rgba(57, 255, 20, 0.06), inset 0 0 50px rgba(0, 0, 0, 0.5)",
              }}
            >
              {/* Card header */}
              <div className="px-4 py-3 border-b border-neon-green/20 bg-card-bg/50">
                <span className="font-pixel text-[10px] text-neon-green tracking-widest">
                  CHARACTER PROFILE
                </span>
              </div>

              <div className="p-5">
                {/* Avatar frame */}
                <div className="relative w-32 h-32 mx-auto mb-5">
                  <div
                    className="w-full h-full border-2 border-neon-green/50 flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(57,255,20,0.08) 0%, rgba(0,255,255,0.05) 100%)",
                      boxShadow: "inset 0 0 30px rgba(57,255,20,0.1)",
                    }}
                  >
                    {/* Pixel art character placeholder */}
                    <div className="grid grid-cols-5 gap-0.5">
                      {/* Simple pixel face */}
                      {[
                        0,0,1,0,0,
                        0,1,1,1,0,
                        1,0,1,0,1,
                        1,1,1,1,1,
                        0,1,0,1,0,
                        0,1,1,1,0,
                        1,1,0,1,1,
                        0,1,0,1,0,
                      ].map((pixel, i) => (
                        <div
                          key={i}
                          className="w-3 h-3"
                          style={{
                            backgroundColor: pixel
                              ? "var(--neon-green)"
                              : "transparent",
                            boxShadow: pixel
                              ? "0 0 4px rgba(57,255,20,0.5)"
                              : "none",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  {/* Corner accents on avatar */}
                  <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-neon-green" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-neon-green" />
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-neon-green" />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-neon-green" />
                </div>

                {/* Name */}
                <div className="text-center mb-4">
                  <h3 className="font-pixel text-sm text-white mb-1">
                    {personalInfo.name.split(" ")[0].toUpperCase()}
                  </h3>
                  <span className="font-terminal text-base text-neon-cyan">
                    {personalInfo.title}
                  </span>
                </div>

                {/* Class / Level */}
                <div className="flex items-center justify-center gap-3 mb-5">
                  <span
                    className="font-pixel text-[8px] px-2 py-1 border"
                    style={{
                      color: "var(--neon-cyan)",
                      borderColor: "var(--neon-cyan)",
                      backgroundColor: "rgba(0,255,255,0.08)",
                    }}
                  >
                    CLASS: FULL STACK
                  </span>
                  <span
                    className="font-pixel text-[8px] px-2 py-1 border"
                    style={{
                      color: "var(--neon-magenta)",
                      borderColor: "var(--neon-magenta)",
                      backgroundColor: "rgba(255,0,255,0.08)",
                    }}
                  >
                    LVL 25
                  </span>
                </div>

                {/* Status effects */}
                <div className="space-y-2">
                  {statusEffects.map((status) => (
                    <div
                      key={status.label}
                      className="flex items-center gap-2"
                    >
                      <span className="font-pixel text-[10px] text-neon-green w-4 text-center">
                        {status.icon}
                      </span>
                      <span className="font-terminal text-sm text-foreground-muted">
                        {status.label}
                      </span>
                      {status.active && (
                        <div className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse ml-auto" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Frame corners */}
              <div className="absolute top-3 left-3 w-3 h-3 border-l border-t border-neon-green/30" />
              <div className="absolute top-3 right-3 w-3 h-3 border-r border-t border-neon-green/30" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-l border-b border-neon-green/30" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-r border-b border-neon-green/30" />
            </div>
          </motion.div>

          {/* Right panel — Stats & Gear (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            {/* Attributes panel */}
            <motion.div variants={itemVars}>
              <div
                className="relative border-2 border-neon-purple/40 bg-background/80"
                style={{
                  boxShadow:
                    "0 0 25px rgba(191,0,255,0.06), inset 0 0 50px rgba(0,0,0,0.5)",
                }}
              >
                <div className="px-4 py-3 border-b border-neon-purple/20 bg-card-bg/50">
                  <span className="font-pixel text-[10px] text-neon-purple tracking-widest">
                    ATTRIBUTES
                  </span>
                </div>

                <div className="p-5 space-y-4">
                  {attributes.map((attr) => (
                    <div key={attr.label} className="group">
                      <div className="flex items-center gap-3 mb-1.5">
                        <span
                          className="font-pixel text-[10px] w-8"
                          style={{ color: attr.color }}
                        >
                          {attr.label}
                        </span>
                        <span className="font-terminal text-sm text-foreground-muted flex-1">
                          {attr.name}
                        </span>
                        <span
                          className="font-terminal text-sm tabular-nums"
                          style={{ color: attr.color }}
                        >
                          {attr.value}
                        </span>
                      </div>
                      <div className="h-1.5 bg-background border border-foreground-muted/10 overflow-hidden">
                        <motion.div
                          className="h-full"
                          style={{
                            background: `linear-gradient(90deg, ${attr.color}, color-mix(in srgb, ${attr.color} 60%, transparent))`,
                            boxShadow: `0 0 8px ${attr.color}`,
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${attr.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Frame corners */}
                <div className="absolute top-3 left-3 w-3 h-3 border-l border-t border-neon-purple/30" />
                <div className="absolute top-3 right-3 w-3 h-3 border-r border-t border-neon-purple/30" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-l border-b border-neon-purple/30" />
                <div className="absolute bottom-3 right-3 w-3 h-3 border-r border-b border-neon-purple/30" />
              </div>
            </motion.div>

            {/* Equipped Gear panel */}
            <motion.div variants={itemVars}>
              <div
                className="relative border-2 border-neon-magenta/40 bg-background/80"
                style={{
                  boxShadow:
                    "0 0 25px rgba(255,0,255,0.06), inset 0 0 50px rgba(0,0,0,0.5)",
                }}
              >
                <div className="px-4 py-3 border-b border-neon-magenta/20 bg-card-bg/50">
                  <span className="font-pixel text-[10px] text-neon-magenta tracking-widest">
                    EQUIPPED GEAR
                  </span>
                </div>

                <div className="p-5">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {equippedGear.map((gear) => (
                      <div
                        key={gear.name}
                        className="group relative p-3 border border-neon-magenta/20 bg-card-bg/40 hover:border-neon-magenta/60 hover:bg-neon-magenta/5 transition-all duration-200"
                      >
                        <span className="font-pixel text-[7px] text-foreground-muted block mb-1 tracking-wider">
                          {gear.slot}
                        </span>
                        <span className="font-terminal text-base text-white group-hover:text-neon-magenta transition-colors">
                          {gear.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Frame corners */}
                <div className="absolute top-3 left-3 w-3 h-3 border-l border-t border-neon-magenta/30" />
                <div className="absolute top-3 right-3 w-3 h-3 border-r border-t border-neon-magenta/30" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-l border-b border-neon-magenta/30" />
                <div className="absolute bottom-3 right-3 w-3 h-3 border-r border-b border-neon-magenta/30" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
