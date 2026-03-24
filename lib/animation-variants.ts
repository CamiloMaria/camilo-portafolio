import type { Variants } from "framer-motion";

export function containerVariants(
  reduceMotion: boolean,
  stagger = 0.12
): Variants {
  if (reduceMotion) return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: stagger },
    },
  };
}

export function itemVariants(
  reduceMotion: boolean,
  opts?: { direction?: "x" | "y"; distance?: number; duration?: number }
): Variants {
  const { direction = "y", distance = 20, duration = 0.5 } = opts ?? {};
  if (reduceMotion) return { hidden: { opacity: 0 }, visible: { opacity: 1 } };

  const hidden: Record<string, number> = { opacity: 0 };
  hidden[direction] = distance;

  const visible: Record<string, number | object> = {
    opacity: 1,
    transition: { duration },
  };
  visible[direction] = 0;

  return { hidden, visible } as Variants;
}

export function headerVariants(reduceMotion: boolean): Variants {
  if (reduceMotion) return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  return {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };
}
