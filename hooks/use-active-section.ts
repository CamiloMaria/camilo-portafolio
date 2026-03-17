"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export interface UseActiveSectionOptions {
  /** Array of section IDs to track */
  sectionIds: string[];
  /** Offset from top of viewport to consider section as "active" */
  offset?: number;
  /** Root margin for intersection observer */
  rootMargin?: string;
}

export interface UseActiveSectionReturn {
  /** The currently active section ID */
  activeSection: string | null;
  /** Ref for the container (optional) */
  containerRef: React.RefObject<HTMLDivElement | null>;
}

/**
 * Hook to track which section is currently visible in the viewport
 * Uses Intersection Observer API for performance
 */
export function useActiveSection({
  sectionIds,
  offset = 100,
  rootMargin = `-${offset}px 0px -66% 0px`,
}: UseActiveSectionOptions): UseActiveSectionReturn {
  const [activeSection, setActiveSection] = useState<string | null>(
    sectionIds[0] || null
  );
  const containerRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => {
          const rectA = a.boundingClientRect;
          const rectB = b.boundingClientRect;
          return rectA.top - rectB.top;
        });

      if (visibleSections.length > 0) {
        const topSection = visibleSections[0];
        setActiveSection(topSection.target.id);
      }
    },
    []
  );

  useEffect(() => {
    if (sectionIds.length === 0) return;

    // Disconnect previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Create new observer
    observerRef.current = new IntersectionObserver(handleIntersect, {
      rootMargin,
      threshold: 0,
    });

    // Observe all sections
    sectionIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observerRef.current?.observe(element);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [sectionIds, rootMargin, handleIntersect]);

  return {
    activeSection,
    containerRef,
  };
}
