"use client";

import type { FC } from "react";

interface ScanlinesProps {
  enabled?: boolean;
}

export const Scanlines: FC<ScanlinesProps> = ({ enabled = true }) => {
  if (!enabled) return null;
  
  return (
    <div 
      className="scanlines pointer-events-none fixed inset-0 z-[9999] hidden md:block" 
      aria-hidden="true"
    />
  );
};
