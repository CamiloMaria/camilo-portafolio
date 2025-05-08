import { MotionValue, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

// Custom cursor component for project cards
export default function ProjectCursor({ mouseX, mouseY }: { mouseX: MotionValue<number>; mouseY: MotionValue<number> }) {
    const cursorSize = 24
    const cursorX = useTransform(mouseX, (value) => value - cursorSize / 2)
    const cursorY = useTransform(mouseY, (value) => value - cursorSize / 2)

    return (
        <motion.div
            className="pointer-events-none fixed top-0 left-0 z-50 flex items-center justify-center rounded-full bg-purple-500 text-white"
            style={{
                x: cursorX,
                y: cursorY,
                width: cursorSize,
                height: cursorSize,
            }}
        >
            <Eye className="w-3 h-3" />
        </motion.div>
    )
}