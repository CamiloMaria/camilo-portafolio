import { useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";

// 3D Card component with tilt effect
export default function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
    const cardRef = useRef<HTMLDivElement>(null)
    const [rotateX, setRotateX] = useState(0)
    const [rotateY, setRotateY] = useState(0)
    const [scale, setScale] = useState(1)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return

        const card = cardRef.current
        const rect = card.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const mouseX = e.clientX
        const mouseY = e.clientY

        const rotateXValue = ((mouseY - centerY) / (rect.height / 2)) * -5
        const rotateYValue = ((mouseX - centerX) / (rect.width / 2)) * 5

        setRotateX(rotateXValue)
        setRotateY(rotateYValue)
        setScale(1.02)
    }

    const handleMouseLeave = () => {
        setRotateX(0)
        setRotateY(0)
        setScale(1)
    }

    const springConfig = { stiffness: 300, damping: 20, mass: 0.5 }
    const springRotateX = useSpring(rotateX, springConfig)
    const springRotateY = useSpring(rotateY, springConfig)
    const springScale = useSpring(scale, springConfig)

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX: springRotateX,
                rotateY: springRotateY,
                scale: springScale,
                transformPerspective: 1000,
            }}
            className={`will-change-transform ${className}`}
        >
            {children}
        </motion.div>
    )
}