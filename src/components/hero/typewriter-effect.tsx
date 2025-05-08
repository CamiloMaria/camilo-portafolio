"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypewriterEffectProps {
    text: string
    delay?: number
    speed?: number
}

export default function TypewriterEffect({ text, delay = 1.2, speed = 100 }: TypewriterEffectProps) {
    const [displayText, setDisplayText] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isTyping, setIsTyping] = useState(false)

    useEffect(() => {
        // Initial delay before typing starts
        const timeout = setTimeout(() => {
            setIsTyping(true)
        }, delay * 1000)

        return () => clearTimeout(timeout)
    }, [delay])

    useEffect(() => {
        let timeout: NodeJS.Timeout

        if (isTyping && currentIndex < text.length) {
            timeout = setTimeout(() => {
                setDisplayText((prev) => prev + text[currentIndex])
                setCurrentIndex((prev) => prev + 1)
            }, speed)
        }

        return () => clearTimeout(timeout)
    }, [currentIndex, isTyping, speed, text])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="inline-block text-xl md:text-2xl text-purple-300 font-medium"
        >
            {displayText}
            {isTyping && currentIndex < text.length && (
                <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8 }}
                    className="ml-1 inline-block w-2 h-5 bg-purple-400"
                />
            )}
        </motion.div>
    )
}
