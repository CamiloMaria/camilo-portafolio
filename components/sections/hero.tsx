"use client";

import { type FC } from "react";
import { motion, type Variants } from "framer-motion";
import { socialLinks } from "@/lib/portfolio-data";
import { useResumeModal } from "@/hooks/use-resume-modal";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const insertCoinVariants: Variants = {
  initial: { opacity: 0.5 },
  pulse: {
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const Hero: FC = () => {
  const { openModal } = useResumeModal();

  const scrollToSkills = () => {
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative grid-pattern overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Corner decorations */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-[#ff00ff]/30" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-[#00ffff]/30" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-[#39ff14]/30" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-[#bf00ff]/30" />
        
        {/* Animated scanline effect */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-b from-transparent via-[#ff00ff]/20 to-transparent"
          animate={{ y: ["-10%", "110%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-4xl"
      >
        {/* INSERT COIN */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.span
            variants={insertCoinVariants}
            initial="initial"
            animate="pulse"
            className="font-[family-name:var(--font-pixel)] text-lg md:text-xl text-[#ff00ff] tracking-widest"
          >
            INSERT COIN
          </motion.span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="font-[family-name:var(--font-pixel)] text-3xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight"
        >
          <span className="text-[#00ffff]">CAMILO</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={itemVariants}
          className="font-[family-name:var(--font-terminal)] text-2xl md:text-3xl text-[#39ff14] mb-2"
        >
          FRONTEND DEVELOPER
        </motion.p>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="font-[family-name:var(--font-terminal)] text-lg md:text-xl text-[#b0b0b0] mb-12 max-w-2xl mx-auto"
        >
          Building immersive digital experiences with code and creativity
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={scrollToSkills}
            className="neon-button neon-button-magenta font-[family-name:var(--font-futuristic)] text-sm md:text-base px-8 py-3 bg-[#ff00ff]/10 border-2 border-[#ff00ff] text-[#ff00ff] rounded"
          >
            START GAME
          </button>
          <button
            onClick={openModal}
            className="neon-button neon-button-cyan font-[family-name:var(--font-futuristic)] text-sm md:text-base px-8 py-3 bg-transparent border-2 border-[#00ffff] text-[#00ffff] rounded hover:bg-[#00ffff]/10"
          >
            VIEW RESUME
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-6">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-[#b0b0b0] hover:text-[#00ffff] transition-colors"
            aria-label="GitHub"
          >
            <svg
              className="w-6 h-6 group-hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] transition-all"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-[family-name:var(--font-terminal)] text-lg">GitHub</span>
          </a>

          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-[#b0b0b0] hover:text-[#00ffff] transition-colors"
            aria-label="LinkedIn"
          >
            <svg
              className="w-6 h-6 group-hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] transition-all"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span className="font-[family-name:var(--font-terminal)] text-lg">LinkedIn</span>
          </a>

          <a
            href={`mailto:${socialLinks.email}`}
            className="group flex items-center gap-2 text-[#b0b0b0] hover:text-[#00ffff] transition-colors"
            aria-label="Email"
          >
            <svg
              className="w-6 h-6 group-hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] transition-all"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="font-[family-name:var(--font-terminal)] text-lg">Email</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-[#bf00ff]"
        >
          <span className="font-[family-name:var(--font-terminal)] text-sm mb-2">SCROLL</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};
