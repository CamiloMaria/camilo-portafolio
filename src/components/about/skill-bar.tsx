"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import type { Skill } from '../../sections/about-me' // Assuming Skill type is exported from about-me.tsx

// Skill bar component
const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-3"
        >
            <div className="flex justify-between items-center mb-1">
                <span className="text-white font-medium text-sm">{skill.name}</span>
                <span className="text-gray-400 text-xs">{skill.level}%</span>
            </div>
            <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                    className={`h-full rounded-full ${skill.category === "frontend"
                        ? "bg-gradient-to-r from-purple-500 to-pink-500"
                        : skill.category === "backend"
                            ? "bg-gradient-to-r from-blue-500 to-purple-500"
                            : skill.category === "design"
                                ? "bg-gradient-to-r from-pink-500 to-orange-500"
                                : "bg-gradient-to-r from-green-500 to-blue-500"
                        }`}
                />
            </div>
        </motion.div>
    )
}

export default SkillBar 