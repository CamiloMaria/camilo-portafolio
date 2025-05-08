"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, MapPin, Briefcase, GraduationCap, Award } from "lucide-react"
import type { Experience } from '../../sections/about-me' // Assuming Experience type is exported

// Timeline item component
const TimelineItem = ({ experience, index }: { experience: Experience; index: number }) => {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-8 relative pl-8"
        >
            {/* Timeline connector */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-700" />

            {/* Timeline dot */}
            <div
                className={`absolute left-[-8px] top-0 w-4 h-4 rounded-full border-2 ${experience.current
                    ? "bg-purple-500 border-purple-300 animate-pulse"
                    : experience.type === "work"
                        ? "bg-purple-500 border-gray-800"
                        : experience.type === "education"
                            ? "bg-blue-500 border-gray-800"
                            : "bg-pink-500 border-gray-800"
                    }`}
            />

            {/* Content */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-colors duration-300 shadow-lg">
                <div className="flex items-center mb-2">
                    <span
                        className={`p-2 rounded-lg mr-3 ${experience.type === "work"
                            ? "bg-purple-500/20 text-purple-300"
                            : experience.type === "education"
                                ? "bg-blue-500/20 text-blue-300"
                                : "bg-pink-500/20 text-pink-300"
                            }`}
                    >
                        {experience.type === "work" ? (
                            <Briefcase className="w-5 h-5" />
                        ) : experience.type === "education" ? (
                            <GraduationCap className="w-5 h-5" />
                        ) : (
                            <Award className="w-5 h-5" />
                        )}
                    </span>
                    <div>
                        <h4 className="text-lg font-bold text-white flex items-center">
                            {experience.title}
                            {experience.current && (
                                <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-purple-500/30 text-purple-300">Current</span>
                            )}
                        </h4>
                        <div className="text-gray-400 text-sm">{experience.company}</div>
                    </div>
                </div>

                <div className="flex items-center text-gray-400 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-3">{experience.period}</span>
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{experience.location}</span>
                </div>

                <p className="text-gray-300">{experience.description}</p>
            </div>
        </motion.div>
    )
}

export default TimelineItem 