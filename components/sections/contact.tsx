"use client";

import { useMemo, type FC } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { socialLinks } from "@/lib/portfolio-data";
import {
  containerVariants,
  itemVariants,
  headerVariants,
} from "@/lib/animation-variants";

const contactOptions = [
  {
    key: "A",
    label: "EMAIL",
    value: socialLinks.email,
    href: `mailto:${socialLinks.email}`,
    external: false,
    color: "var(--neon-magenta)",
    glowClass: "hover:box-glow-magenta",
    borderClass: "border-neon-magenta",
    bgClass: "bg-neon-magenta/20",
    textClass: "text-neon-magenta",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    key: "B",
    label: "GITHUB",
    value: "@CamiloMaria",
    href: socialLinks.github,
    external: true,
    color: "var(--neon-green)",
    glowClass: "hover:box-glow-green",
    borderClass: "border-neon-green",
    bgClass: "bg-neon-green/20",
    textClass: "text-neon-green",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    key: "C",
    label: "LINKEDIN",
    value: "/in/camilo-maria",
    href: socialLinks.linkedin,
    external: true,
    color: "var(--neon-cyan)",
    glowClass: "hover:box-glow-cyan",
    borderClass: "border-neon-cyan",
    bgClass: "bg-neon-cyan/20",
    textClass: "text-neon-cyan",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
];

export const Contact: FC = () => {
  const shouldReduceMotion = useReducedMotion() ?? false;

  const containerVars = useMemo(
    () => containerVariants(shouldReduceMotion, 0.15),
    [shouldReduceMotion]
  );
  const itemVars = useMemo(
    () => itemVariants(shouldReduceMotion, { distance: 30 }),
    [shouldReduceMotion]
  );
  const headerVars = useMemo(
    () => headerVariants(shouldReduceMotion),
    [shouldReduceMotion]
  );

  return (
    <section
      id="contact"
      className="min-h-dvh py-20 px-4 relative grid-pattern flex flex-col justify-center"
      aria-labelledby="contact-heading"
    >
      {/* Section header */}
      <div className="max-w-3xl mx-auto mb-12 w-full">
        <motion.div
          variants={headerVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="font-pixel text-xl text-neon-magenta tracking-widest pulse-neon">
            CONTINUE?
          </span>
          <h2
            id="contact-heading"
            className="font-pixel text-2xl md:text-3xl text-white mt-4"
          >
            SELECT CHANNEL
          </h2>
          <p className="font-terminal text-lg text-foreground-muted mt-4 max-w-md mx-auto" style={{ textWrap: "balance" }}>
            Ready to team up? Pick your preferred way to connect.
          </p>
        </motion.div>
      </div>

      {/* CRT Monitor Frame */}
      <motion.div
        variants={containerVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto w-full"
      >
        {/* Monitor bezel */}
        <div
          className="relative border-2 border-neon-purple/40 bg-background/80 p-6 md:p-10"
          style={{
            boxShadow:
              "0 0 30px rgba(191, 0, 255, 0.08), inset 0 0 60px rgba(0, 0, 0, 0.5)",
          }}
        >
          {/* Scanline decoration at top */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent" />

          {/* Terminal header */}
          <motion.div variants={itemVars} className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              <span className="font-terminal text-sm text-foreground-muted">
                SYSTEM ONLINE &mdash; 3 CHANNELS AVAILABLE
              </span>
            </div>
            <div className="h-px bg-foreground-muted/20" />
          </motion.div>

          {/* Contact options */}
          <div className="space-y-4">
            {contactOptions.map((option) => (
              <motion.a
                key={option.key}
                variants={itemVars}
                href={option.href}
                target={option.external ? "_blank" : undefined}
                rel={option.external ? "noopener noreferrer" : undefined}
                className={`group block relative overflow-hidden border ${option.borderClass}/30 hover:${option.borderClass} ${option.glowClass} transition-all duration-300 active:scale-[0.98]`}
                style={{
                  boxShadow: `inset 0 0 30px color-mix(in srgb, ${option.color} 5%, transparent)`,
                }}
                aria-label={`${option.label}: ${option.value}`}
              >
                {/* Hover background sweep */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent 0%, color-mix(in srgb, ${option.color} 8%, transparent) 50%, transparent 100%)`,
                  }}
                />

                <div className="relative flex items-center gap-4 p-4 md:p-5">
                  {/* Key badge */}
                  <div
                    className="flex-shrink-0 w-10 h-10 flex items-center justify-center border font-pixel text-xs transition-all duration-300 group-hover:scale-110"
                    style={{
                      borderColor: option.color,
                      color: option.color,
                      boxShadow: `0 0 8px color-mix(in srgb, ${option.color} 30%, transparent)`,
                    }}
                  >
                    {option.key}
                  </div>

                  {/* Icon */}
                  <div className={`flex-shrink-0 ${option.textClass} transition-transform duration-300 group-hover:scale-110`}>
                    {option.icon}
                  </div>

                  {/* Label + value */}
                  <div className="flex-1 min-w-0">
                    <span
                      className="font-pixel text-[10px] tracking-widest block"
                      style={{ color: option.color }}
                    >
                      {option.label}
                    </span>
                    <span className="font-terminal text-lg text-white block truncate group-hover:text-foreground transition-colors">
                      {option.value}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div
                    className="flex-shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    style={{ color: option.color }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Terminal footer */}
          <motion.div variants={itemVars} className="mt-8">
            <div className="h-px bg-foreground-muted/20 mb-3" />
            <div className="flex items-center justify-between">
              <span className="font-terminal text-sm text-foreground-muted">
                &gt; AWAITING INPUT_
              </span>
              <span className="font-terminal text-sm text-neon-purple/60">
                CREDITS: 99
              </span>
            </div>
          </motion.div>

          {/* Monitor bezel corners */}
          <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-neon-purple/30" />
          <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-neon-purple/30" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-neon-purple/30" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-neon-purple/30" />

          {/* Bottom scanline */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};
