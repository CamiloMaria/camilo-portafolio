"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function BackgroundElements() {
    const [particles, setParticles] = useState<
        Array<{
            id: number
            x: number
            y: number
            size: number
            color: string
            duration: number
            delay: number
        }>
    >([])

    useEffect(() => {
        const colors = [
            "rgba(168, 85, 247, 0.4)", // purple
            "rgba(236, 72, 153, 0.4)", // pink
            "rgba(79, 70, 229, 0.4)", // indigo
        ]

        const newParticles = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 60 + 20,
            color: colors[Math.floor(Math.random() * colors.length)],
            duration: Math.random() * 20 + 10,
            delay: Math.random() * 5,
        }))

        setParticles(newParticles)
    }, [])

    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-900/30 z-0" />

            {/* Floating particles */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full blur-xl opacity-20"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: particle.size,
                        height: particle.size,
                        backgroundColor: particle.color,
                    }}
                    animate={{
                        x: [0, Math.random() * 100 - 50, 0],
                        y: [0, Math.random() * 100 - 50, 0],
                    }}
                    transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: particle.duration,
                        delay: particle.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Grid pattern */}
            <div
                className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMzMzMiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PHBhdGggZD0iTTMwIDBIMHYzMGgzMHoiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIuNSIvPjxwYXRoIGQ9Ik0zMCAwaDMwdjMwSDMweiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')]"
                style={{ opacity: 0.05 }}
            />
        </div>
    )
}
