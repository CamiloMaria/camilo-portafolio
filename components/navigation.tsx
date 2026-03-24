"use client";

import { useState, useEffect, type FC } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useResumeModal } from "@/hooks/use-resume-modal";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "HOME", href: "#hero" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/CamiloMaria", icon: "GH" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/camilo-maria",
    icon: "IN",
  },
];

export const Navigation: FC = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal } = useResumeModal();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);

          const sections = navItems.map((item) => item.href.slice(1));

          for (const section of sections.reverse()) {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              if (rect.top <= 150) {
                setActiveSection(section);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-sm border-b border-neon-purple/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="#hero"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                handleNavClick(e, "#hero")
              }
              className="font-pixel text-xs md:text-sm text-neon-cyan hover:text-neon-magenta transition-colors"
            >
              CAMILO
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`font-pixel text-[10px] px-3 py-2 transition-all duration-200 relative ${
                    activeSection === item.href.slice(1)
                      ? "text-neon-magenta"
                      : "text-foreground-muted hover:text-neon-cyan"
                  }`}
                >
                  {item.label}
                  {activeSection === item.href.slice(1) && (
                    <motion.span
                      layoutId="nav-glow"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-magenta shadow-[0_0_10px_var(--neon-magenta)]"
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Desktop Social & Resume */}
            <div className="hidden md:flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-terminal text-sm text-foreground-muted hover:text-neon-cyan transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
              <button
                onClick={openModal}
                className="neon-button neon-button-green font-futuristic text-xs px-4 py-2 border border-neon-green text-neon-green hover:bg-neon-green/10 transition-colors"
                aria-label="View Resume"
              >
                RESUME
              </button>
            </div>

            {/* Mobile Menu Button — animates to X */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-neon-cyan relative w-10 h-10 flex items-center justify-center"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <span
                className="absolute block w-6 h-0.5 bg-current transition-all duration-300"
                style={{
                  transform: isMobileMenuOpen
                    ? "rotate(45deg)"
                    : "translateY(-6px)",
                }}
              />
              <span
                className="absolute block w-6 h-0.5 bg-current transition-all duration-300"
                style={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                }}
              />
              <span
                className="absolute block w-6 h-0.5 bg-current transition-all duration-300"
                style={{
                  transform: isMobileMenuOpen
                    ? "rotate(-45deg)"
                    : "translateY(6px)",
                }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay with exit animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/98 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: index * 0.05 }}
                  className={`font-pixel text-lg ${
                    activeSection === item.href.slice(1)
                      ? "text-neon-magenta"
                      : "text-neon-cyan"
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.3 }}
                className="flex gap-6 mt-8"
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-terminal text-xl text-neon-cyan"
                  >
                    {social.icon}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openModal();
                  }}
                  className="neon-button font-futuristic text-lg px-6 py-3 border-2 border-neon-green text-neon-green"
                  aria-label="View Resume"
                >
                  RESUME
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
