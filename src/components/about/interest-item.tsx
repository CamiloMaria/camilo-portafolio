"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Interest } from "@/types/about";

// Interest item component
const InterestItem = ({ interest, index }: { interest: Interest; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="flex flex-col items-center justify-center p-3 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105"
        >
            <div className="p-2 rounded-full bg-purple-500/20 text-purple-300 mb-1.5">{interest.icon}</div>
            <span className="text-gray-300 text-xs font-medium">{interest.name}</span>
        </motion.div>
    )
}

export default InterestItem 