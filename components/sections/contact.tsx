"use client";

import { type FC, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { socialLinks } from "@/lib/portfolio-data";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const Contact: FC = () => {
  const [formState, setFormState] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section
      id="contact"
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
          <span className="font-[family-name:var(--font-pixel)] text-xl text-[#ff00ff] tracking-widest pulse-neon">
            INSERT COIN
          </span>
          <h2 className="font-[family-name:var(--font-pixel)] text-2xl md:text-3xl text-white mt-4">
            GET IN TOUCH
          </h2>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Contact Links - Arcade Buttons */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-[family-name:var(--font-pixel)] text-sm text-[#00ffff] mb-6">
              CHOOSE YOUR PATH
            </h3>

            {/* Email Button */}
            <a
              href={`mailto:${socialLinks.email}`}
              className="
                group block relative p-4 bg-[#151520] border-2 border-[#ff00ff]
                hover:bg-[#ff00ff]/10 transition-all duration-300
                hover:box-glow-magenta
              "
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#ff00ff]/20 text-[#ff00ff]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="font-[family-name:var(--font-pixel)] text-xs text-[#ff00ff]">
                    EMAIL
                  </span>
                  <p className="font-[family-name:var(--font-terminal)] text-lg text-white">
                    {socialLinks.email}
                  </p>
                </div>
              </div>
              {/* Decorative corners */}
              <div className="absolute top-1 left-1 w-2 h-2 border-l border-t border-[#ff00ff] opacity-50" />
              <div className="absolute top-1 right-1 w-2 h-2 border-r border-t border-[#ff00ff] opacity-50" />
              <div className="absolute bottom-1 left-1 w-2 h-2 border-l border-b border-[#ff00ff] opacity-50" />
              <div className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-[#ff00ff] opacity-50" />
            </a>

            {/* LinkedIn Button */}
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group block relative p-4 bg-[#151520] border-2 border-[#00ffff]
                hover:bg-[#00ffff]/10 transition-all duration-300
                hover:box-glow-cyan
              "
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#00ffff]/20 text-[#00ffff]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div>
                  <span className="font-[family-name:var(--font-pixel)] text-xs text-[#00ffff]">
                    LINKEDIN
                  </span>
                  <p className="font-[family-name:var(--font-terminal)] text-lg text-white">
                    Connect with me
                  </p>
                </div>
              </div>
              {/* Decorative corners */}
              <div className="absolute top-1 left-1 w-2 h-2 border-l border-t border-[#00ffff] opacity-50" />
              <div className="absolute top-1 right-1 w-2 h-2 border-r border-t border-[#00ffff] opacity-50" />
              <div className="absolute bottom-1 left-1 w-2 h-2 border-l border-b border-[#00ffff] opacity-50" />
              <div className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-[#00ffff] opacity-50" />
            </a>

            {/* GitHub Button */}
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group block relative p-4 bg-[#151520] border-2 border-[#39ff14]
                hover:bg-[#39ff14]/10 transition-all duration-300
                hover:box-glow-green
              "
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#39ff14]/20 text-[#39ff14]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <span className="font-[family-name:var(--font-pixel)] text-xs text-[#39ff14]">
                    GITHUB
                  </span>
                  <p className="font-[family-name:var(--font-terminal)] text-lg text-white">
                    Check my code
                  </p>
                </div>
              </div>
              {/* Decorative corners */}
              <div className="absolute top-1 left-1 w-2 h-2 border-l border-t border-[#39ff14] opacity-50" />
              <div className="absolute top-1 right-1 w-2 h-2 border-r border-t border-[#39ff14] opacity-50" />
              <div className="absolute bottom-1 left-1 w-2 h-2 border-l border-b border-[#39ff14] opacity-50" />
              <div className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-[#39ff14] opacity-50" />
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <h3 className="font-[family-name:var(--font-pixel)] text-sm text-[#bf00ff] mb-6">
              SEND A MESSAGE
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 bg-[#39ff14]/10 border-2 border-[#39ff14] text-center"
              >
                <div className="text-[#39ff14] mb-2">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-[family-name:var(--font-terminal)] text-lg text-white">
                  MESSAGE SENT!
                </p>
                <p className="font-[family-name:var(--font-terminal)] text-sm text-[#b0b0b0] mt-2">
                  I&apos;ll get back to you soon
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block font-[family-name:var(--font-pixel)] text-xs text-[#b0b0b0] mb-2">
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))}
                    className="
                      w-full p-3 bg-[#151520] border-2 border-[#bf00ff]/50 
                      text-white font-[family-name:var(--font-terminal)] text-lg
                      focus:border-[#bf00ff] focus:outline-none focus:box-glow-purple
                      transition-all
                    "
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block font-[family-name:var(--font-pixel)] text-xs text-[#b0b0b0] mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))}
                    className="
                      w-full p-3 bg-[#151520] border-2 border-[#bf00ff]/50 
                      text-white font-[family-name:var(--font-terminal)] text-lg
                      focus:border-[#bf00ff] focus:outline-none focus:box-glow-purple
                      transition-all
                    "
                    placeholder="Enter your email"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block font-[family-name:var(--font-pixel)] text-xs text-[#b0b0b0] mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState((prev) => ({ ...prev, message: e.target.value }))}
                    className="
                      w-full p-3 bg-[#151520] border-2 border-[#bf00ff]/50 
                      text-white font-[family-name:var(--font-terminal)] text-lg
                      focus:border-[#bf00ff] focus:outline-none focus:box-glow-purple
                      transition-all resize-none
                    "
                    placeholder="Enter your message"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    w-full neon-button neon-button-magenta
                    font-[family-name:var(--font-futuristic)] text-base px-8 py-3
                    bg-[#ff00ff]/10 border-2 border-[#ff00ff] text-[#ff00ff]
                    hover:bg-[#ff00ff]/20 transition-all disabled:opacity-50
                  "
                >
                  {isSubmitting ? "SENDING..." : "START A NEW GAME"}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
