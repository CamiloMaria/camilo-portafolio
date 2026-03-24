"use client";

import { type FC, useState, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { socialLinks } from "@/lib/portfolio-data";
import {
  containerVariants,
  itemVariants,
  headerVariants,
} from "@/lib/animation-variants";

export const Contact: FC = () => {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const containerVars = useMemo(
    () => containerVariants(shouldReduceMotion, 0.1),
    [shouldReduceMotion]
  );
  const itemVars = useMemo(
    () => itemVariants(shouldReduceMotion),
    [shouldReduceMotion]
  );
  const headerVars = useMemo(
    () => headerVariants(shouldReduceMotion),
    [shouldReduceMotion]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio contact from ${formState.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    );
    window.location.href = `mailto:${socialLinks.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="min-h-dvh py-20 px-4 relative grid-pattern"
      aria-labelledby="contact-heading"
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
          <span className="font-pixel text-xl text-neon-magenta tracking-widest pulse-neon">
            INSERT COIN
          </span>
          <h2
            id="contact-heading"
            className="font-pixel text-2xl md:text-3xl text-white mt-4"
          >
            GET IN TOUCH
          </h2>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Contact Links */}
          <motion.div variants={itemVars} className="space-y-4">
            <h3 className="font-pixel text-sm text-neon-cyan mb-6">
              CHOOSE YOUR PATH
            </h3>

            {/* Email Button */}
            <a
              href={`mailto:${socialLinks.email}`}
              className="group block relative p-4 bg-card-bg border-2 border-neon-magenta hover:bg-neon-magenta/10 transition-all duration-300 hover:box-glow-magenta active:scale-[0.98]"
              aria-label={`Send email to ${socialLinks.email}`}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 flex items-center justify-center bg-neon-magenta/20 text-neon-magenta"
                  aria-hidden="true"
                >
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="font-pixel text-xs text-neon-magenta">
                    EMAIL
                  </span>
                  <p className="font-terminal text-lg text-white">
                    {socialLinks.email}
                  </p>
                </div>
              </div>
              {/* Decorative corners */}
              <div className="absolute top-2 left-2 w-2 h-2 border-l-2 border-t-2 border-neon-magenta" />
              <div className="absolute top-2 right-2 w-2 h-2 border-r-2 border-t-2 border-neon-magenta" />
              <div className="absolute bottom-2 left-2 w-2 h-2 border-l-2 border-b-2 border-neon-magenta" />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-r-2 border-b-2 border-neon-magenta" />
            </a>

            {/* GitHub */}
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative p-4 bg-card-bg border-2 border-neon-green hover:bg-neon-green/10 transition-all duration-300 hover:box-glow-green active:scale-[0.98]"
              aria-label="GitHub profile"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 flex items-center justify-center bg-neon-green/20 text-neon-green"
                  aria-hidden="true"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <span className="font-pixel text-xs text-neon-green">
                    GITHUB
                  </span>
                  <p className="font-terminal text-lg text-white">
                    @CamiloMaria
                  </p>
                </div>
              </div>
              {/* Decorative corners */}
              <div className="absolute top-2 left-2 w-2 h-2 border-l-2 border-t-2 border-neon-green" />
              <div className="absolute top-2 right-2 w-2 h-2 border-r-2 border-t-2 border-neon-green" />
              <div className="absolute bottom-2 left-2 w-2 h-2 border-l-2 border-b-2 border-neon-green" />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-r-2 border-b-2 border-neon-green" />
            </a>

            {/* LinkedIn */}
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative p-4 bg-card-bg border-2 border-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 hover:box-glow-cyan active:scale-[0.98]"
              aria-label="LinkedIn profile"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 flex items-center justify-center bg-neon-cyan/20 text-neon-cyan"
                  aria-hidden="true"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div>
                  <span className="font-pixel text-xs text-neon-cyan">
                    LINKEDIN
                  </span>
                  <p className="font-terminal text-lg text-white">
                    /in/camilo-maria/
                  </p>
                </div>
              </div>
              {/* Decorative corners */}
              <div className="absolute top-2 left-2 w-2 h-2 border-l-2 border-t-2 border-neon-cyan" />
              <div className="absolute top-2 right-2 w-2 h-2 border-r-2 border-t-2 border-neon-cyan" />
              <div className="absolute bottom-2 left-2 w-2 h-2 border-l-2 border-b-2 border-neon-cyan" />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-r-2 border-b-2 border-neon-cyan" />
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVars}>
            <h3 className="font-pixel text-sm text-neon-purple mb-6">
              SEND MESSAGE
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block font-terminal text-lg text-foreground-muted mb-2"
                >
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-card-bg-alt border-2 border-neon-purple/50 text-white font-terminal text-lg focus:border-neon-purple focus:outline-none focus:box-glow-purple transition-all placeholder:text-[#666]"
                  aria-required="true"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block font-terminal text-lg text-foreground-muted mb-2"
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-card-bg-alt border-2 border-neon-purple/50 text-white font-terminal text-lg focus:border-neon-purple focus:outline-none focus:box-glow-purple transition-all placeholder:text-[#666]"
                  aria-required="true"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block font-terminal text-lg text-foreground-muted mb-2"
                >
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-card-bg-alt border-2 border-neon-purple/50 text-white font-terminal text-lg focus:border-neon-purple focus:outline-none focus:box-glow-purple transition-all resize-none placeholder:text-[#666]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full neon-button neon-button-magenta font-futuristic text-sm px-8 py-4 bg-neon-magenta/10 border-2 border-neon-magenta text-neon-magenta hover:bg-neon-magenta/20 transition-all"
              >
                SEND MESSAGE
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
