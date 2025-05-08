"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"
import CustomCursor from "../components/custom-cursor"
import TypewriterEffect from "../components/typewriter-effect"
import BackgroundElements from "../components/background-elements"
import LoadingAnimation from "../components/loading-animation"

export default function Hero() {
    const [isLoading, setIsLoading] = useState(true)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const heroRef = useRef<HTMLDivElement>(null)

    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 500], [0, 150])

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    if (isLoading) {
        return <LoadingAnimation />
    }

    const navItems = [
        { key: "home", href: "#home" },
        { key: "about", href: "#about" },
        { key: "projects", href: "#projects" },
        { key: "skills", href: "#skills" },
        { key: "contact", href: "#contact" },
    ]

    return (
        <>
            <CustomCursor />
            <div ref={heroRef} className="relative min-h-screen bg-gray-900 overflow-hidden">
                <BackgroundElements />

                {/* Navigation */}
                <nav className="absolute top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-white text-xl font-bold"
                    >
                        CJM
                    </motion.div>

                    <div className="flex items-center gap-4">
                        {/* Language Selector */}
                        {/* <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
                            <LanguageSelector />
                        </motion.div> */}

                        {/* Mobile Menu Button */}
                        <div className="relative">
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-white focus:outline-none z-50 relative"
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </motion.button>

                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{
                                    height: isMenuOpen ? "auto" : 0,
                                    opacity: isMenuOpen ? 1 : 0,
                                }}
                                transition={{ duration: 0.5 }}
                                className="absolute right-0 top-10 bg-gray-800 rounded-lg overflow-hidden w-48"
                            >
                                {isMenuOpen && (
                                    <ul className="py-2 px-4">
                                        {navItems.map((item, index) => (
                                            <motion.li
                                                key={item.key}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                                className="py-2"
                                            >
                                                <a href={item.href} className="text-white hover:text-purple-400 transition-colors duration-300">
                                                    {item.key}
                                                </a>
                                            </motion.li>
                                        ))}
                                    </ul>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </nav>

                {/* Main Hero Content */}
                <div className="flex flex-col items-center justify-center min-h-screen px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        style={{ y }}
                        className="text-center"
                    >
                        {/* Headshot with floating animation */}
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                repeat: Number.POSITIVE_INFINITY,
                                duration: 4,
                                ease: "easeInOut",
                            }}
                            className="relative mx-auto mb-8 w-40 h-40 rounded-full overflow-hidden border-4 border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.5)]"
                        >
                            <Image
                                src="/placeholder.svg?height=160&width=160"
                                alt="Camilo José María Castillo"
                                width={160}
                                height={160}
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Name with gradient animation */}
                        <motion.h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-transparent bg-clip-text bg-size-200 animate-gradient">
                            Camilo José María Castillo
                        </motion.h1>

                        {/* Professional title with typewriter effect */}
                        <div className="h-8 mb-2">
                            <TypewriterEffect text="Software Engineer" />
                        </div>

                        {/* Age */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.7 }}
                            transition={{ duration: 0.5, delay: 1.5 }}
                            className="text-gray-400 mb-8"
                        >
                            22 years old
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.8 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] focus:outline-none">
                                Ver proyectos
                            </button>
                            <button className="px-8 py-3 bg-transparent border-2 border-purple-500 rounded-full text-white font-medium transform transition-all duration-300 hover:bg-purple-900/30 hover:scale-105 focus:outline-none">
                                Contactame
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Scroll indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.2, duration: 0.5 }}
                        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                            className="flex flex-col items-center"
                        >
                            <span className="text-gray-400 text-sm mb-2">Scroll down</span>
                            <ChevronDown className="w-6 h-6 text-purple-500" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}
