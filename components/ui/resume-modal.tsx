"use client";

import { useState, useEffect, useCallback, type FC, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Shared variants base - exit is always defined
const baseModalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

// Reduced motion variants - no animation
const reducedMotionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export const ResumeModal: FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const handleClose = useCallback(() => {
    setIsLoading(true);
    setHasError(false);
    onClose();
  }, [onClose]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  // Handle click outside
  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      handleClose();
    }
  };

  // Focus trap and body scroll lock
  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialogRef.current?.close();
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Camilo-Resume.pdf";
    link.click();
  };

  const modalVariants = shouldReduceMotion
    ? reducedMotionVariants
    : baseModalVariants;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.dialog
          ref={dialogRef}
          className="bg-[#151520] rounded-lg border-2 border-[#00ffff] shadow-[0_0_20px_rgba(0,255,255,0.3),0_0_40px_rgba(0,255,255,0.1)] max-w-4xl w-[95vw] max-h-[90vh] p-0 m-auto backdrop:bg-black/80"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={handleBackdropClick}
          aria-labelledby="resume-modal-title"
          aria-describedby="resume-modal-description"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#bf00ff]/30 bg-[#0a0a0f]/50">
            <h2
              id="resume-modal-title"
              className="font-[family-name:var(--font-pixel)] text-sm text-[#00ffff]"
            >
              RESUME PREVIEW
            </h2>
            <div className="flex items-center gap-3">
              <button
                onClick={handleDownload}
                className="font-[family-name:var(--font-futuristic)] text-xs px-4 py-2 border border-[#39ff14] text-[#39ff14] hover:bg-[#39ff14]/10 transition-colors rounded"
                aria-label="Download Resume"
              >
                DOWNLOAD
              </button>
              <button
                onClick={handleClose}
                className="p-2 text-[#b0b0b0] hover:text-[#ff00ff] transition-colors rounded"
                aria-label="Close modal"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="relative w-full h-[70vh] bg-[#0a0a0f]">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 border-4 border-[#bf00ff]/30 border-t-[#bf00ff] rounded-full animate-spin" />
                  <span className="font-[family-name:var(--font-terminal)] text-lg text-[#b0b0b0]">
                    LOADING...
                  </span>
                </div>
              </div>
            )}

            {hasError ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4 text-center px-4">
                  <svg
                    className="w-16 h-16 text-[#ff00ff]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <p className="font-[family-name:var(--font-terminal)] text-xl text-[#b0b0b0]">
                    UNABLE TO LOAD RESUME
                  </p>
                  <p
                    id="resume-modal-description"
                    className="font-[family-name:var(--font-terminal)] text-lg text-[#b0b0b0] max-w-md"
                  >
                    The resume could not be previewed. Please download it instead.
                  </p>
                  <button
                    onClick={handleDownload}
                    className="mt-4 font-[family-name:var(--font-futuristic)] text-sm px-6 py-3 bg-[#ff00ff]/10 border-2 border-[#ff00ff] text-[#ff00ff] hover:bg-[#ff00ff]/20 transition-colors rounded"
                  >
                    DOWNLOAD RESUME
                  </button>
                </div>
              </div>
            ) : (
              <iframe
                src="/resume.pdf"
                className="w-full h-full"
                title="Resume Preview"
                onLoad={handleIframeLoad}
                onError={handleIframeError}
              />
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-3 border-t border-[#bf00ff]/30 bg-[#0a0a0f]/50">
            <p className="font-[family-name:var(--font-terminal)] text-sm text-[#b0b0b0] text-center">
              PRESS <span className="text-[#00ffff]">[ESC]</span> TO CLOSE
            </p>
          </div>
        </motion.dialog>
      )}
    </AnimatePresence>
  );
};
