"use client";

import { useState, useEffect, type FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useResumeModal } from "@/hooks/use-resume-modal";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "HOME", href: "#hero" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com", icon: "GH" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "IN" },
];

export const Navigation: FC = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal } = useResumeModal();

  // Use passive scroll listener to avoid setState in effect
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
    
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
            ? "bg-[#0a0a0f]/95 backdrop-blur-sm border-b border-[#bf00ff]/30" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link 
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="font-[family-name:var(--font-pixel)] text-xs md:text-sm text-[#00ffff] hover:text-[#ff00ff] transition-colors"
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
                  className={`font-[family-name:var(--font-pixel)] text-[10px] px-3 py-2 transition-all duration-200 relative ${
                    activeSection === item.href.slice(1)
                      ? "text-[#ff00ff]"
                      : "text-[#b0b0b0] hover:text-[#00ffff]"
                  }`}
                >
                  {item.label}
                  {activeSection === item.href.slice(1) && (
                    <motion.span
                      layoutId="nav-glow"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff00ff] shadow-[0_0_10px_#ff00ff]"
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
                  className="font-[family-name:var(--font-terminal)] text-sm text-[#b0b0b0] hover:text-[#00ffff] transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
              <button
                onClick={openModal}
                className="font-[family-name:var(--font-futuristic)] text-xs px-4 py-2 border border-[#39ff14] text-[#39ff14] hover:bg-[#39ff14]/10 transition-colors"
                aria-label="View Resume"
              >
                RESUME
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#00ffff]"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="block w-6 h-0.5 bg-current mb-1.5" />
              <span className="block w-6 h-0.5 bg-current mb-1.5" />
              <span className="block w-6 h-0.5 bg-current" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-[#0a0a0f]/98 md:hidden"
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`font-[family-name:var(--font-pixel)] text-lg ${
                  activeSection === item.href.slice(1)
                    ? "text-[#ff00ff]"
                    : "text-[#00ffff]"
                }`}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-6 mt-8"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[family-name:var(--font-terminal)] text-xl text-[#00ffff]"
                >
                  {social.icon}
                </a>
              ))}
              <button
                onClick={openModal}
                className="font-[family-name:var(--font-futuristic)] text-lg px-6 py-3 border-2 border-[#39ff14] text-[#39ff14]"
                aria-label="View Resume"
              >
                RESUME
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  );
};
