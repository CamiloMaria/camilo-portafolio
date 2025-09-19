import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Code, User, Star, Heart } from "lucide-react"

// 3D rotating cube component for profile image
const ProfileCube = () => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 })
    const [isHovered, setIsHovered] = useState(false)
    const [activeFloatingElement, setActiveFloatingElement] = useState(0)
    const cubeRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!cubeRef.current) return

            const rect = cubeRef.current.getBoundingClientRect()
            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2
            const mouseX = e.clientX
            const mouseY = e.clientY

            // Enhanced rotation with smoother interpolation
            const rotateY = ((mouseX - centerX) / (rect.width / 2)) * 20
            const rotateX = ((centerY - mouseY) / (rect.height / 2)) * 20

            setRotation({ x: rotateX, y: rotateY })
        }

        const handleMouseLeave = () => {
            // Reset rotation when mouse leaves the area
            setRotation({ x: 0, y: 0 })
        }

        window.addEventListener("mousemove", handleMouseMove)
        document.addEventListener("mouseleave", handleMouseLeave)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mouseleave", handleMouseLeave)
        }
    }, [])

    // Cycle through floating elements
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFloatingElement(prev => (prev + 1) % 4)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    // Floating elements data
    const floatingElements = [
        { icon: Code, color: "text-blue-400", bgColor: "bg-blue-500/20", label: "Developer" },
        { icon: Star, color: "text-yellow-400", bgColor: "bg-yellow-500/20", label: "Quality" },
        { icon: Heart, color: "text-red-400", bgColor: "bg-red-500/20", label: "Passion" },
        { icon: User, color: "text-green-400", bgColor: "bg-green-500/20", label: "Teamwork" },
    ]

    return (
        <div
            ref={cubeRef}
            className="w-full h-full perspective-1000 relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Floating Elements */}
            <AnimatePresence>
                {floatingElements.map((element, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: activeFloatingElement === index ? 1 : 0.3,
                            scale: activeFloatingElement === index ? 1.2 : 0.8,
                            x: Math.cos((index * Math.PI) / 2) * 120,
                            y: Math.sin((index * Math.PI) / 2) * 120,
                            rotate: activeFloatingElement === index ? 360 : 0,
                        }}
                        transition={{
                            duration: 0.8,
                            type: "spring",
                            stiffness: 100,
                            damping: 15
                        }}
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 ${element.bgColor} ${element.color} rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10 z-30`}
                    >
                        <element.icon className="w-6 h-6" />
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{
                                opacity: activeFloatingElement === index ? 1 : 0,
                                y: activeFloatingElement === index ? -40 : 10
                            }}
                            className="absolute top-0 left-1/2 -translate-x-1/2 text-xs font-medium text-white bg-gray-900/80 px-2 py-1 rounded-full whitespace-nowrap"
                        >
                            {element.label}
                        </motion.div>
                    </motion.div>
                ))}
            </AnimatePresence>

            {/* Enhanced Glowing Background */}
            <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                    background: isHovered
                        ? "radial-gradient(circle, rgba(168,85,247,0.3) 0%, rgba(236,72,153,0.2) 50%, transparent 100%)"
                        : "radial-gradient(circle, rgba(168,85,247,0.1) 0%, rgba(236,72,153,0.05) 50%, transparent 100%)"
                }}
                transition={{ duration: 0.5 }}
            />

            {/* Main Cube */}
            <motion.div
                className="w-full h-full relative preserve-3d"
                animate={{
                    rotateX: rotation.x,
                    rotateY: rotation.y,
                    scale: isHovered ? 1.05 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 25,
                    scale: { duration: 0.3 }
                }}
            >
                {/* Front face - Enhanced main profile image */}
                <motion.div
                    className="absolute inset-0 backface-hidden"
                    whileHover={{ z: 10 }}
                >
                    <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                        {/* Dynamic gradient overlay */}
                        <motion.div
                            className="absolute inset-0 rounded-2xl z-10"
                            animate={{
                                background: isHovered
                                    ? "linear-gradient(135deg, rgba(168,85,247,0.3) 0%, rgba(236,72,153,0.3) 100%)"
                                    : "linear-gradient(135deg, rgba(168,85,247,0.2) 0%, rgba(236,72,153,0.2) 100%)"
                            }}
                            transition={{ duration: 0.5 }}
                        />

                        {/* Profile Image */}
                        <motion.div
                            className="w-full h-full"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src="/images/profile.webp"
                                alt="Camilo José María Castillo"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition-all duration-500"
                            />
                        </motion.div>

                        {/* Enhanced border with glow effect */}
                        <motion.div
                            className="absolute inset-0 rounded-2xl z-20"
                            animate={{
                                boxShadow: isHovered
                                    ? "0 0 30px rgba(168,85,247,0.6), inset 0 0 0 4px rgba(168,85,247,0.5)"
                                    : "0 0 15px rgba(168,85,247,0.3), inset 0 0 0 4px rgba(168,85,247,0.3)"
                            }}
                            transition={{ duration: 0.5 }}
                        />

                        {/* Shine effect on hover */}
                        <motion.div
                            className="absolute inset-0 rounded-2xl opacity-0 z-30"
                            style={{
                                background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)"
                            }}
                            animate={{
                                opacity: isHovered ? 1 : 0,
                                x: isHovered ? "100%" : "-100%"
                            }}
                            transition={{
                                opacity: { duration: 0.3 },
                                x: { duration: 0.8, ease: "easeInOut" }
                            }}
                        />
                    </div>
                </motion.div>

                {/* Back face - Enhanced info card */}
                <motion.div
                    className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl overflow-hidden"
                    style={{
                        background: "linear-gradient(135deg, rgba(31,41,55,0.95) 0%, rgba(17,24,39,0.95) 100%)"
                    }}
                >
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-20">
                        <motion.div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: "radial-gradient(circle at 25% 25%, rgba(168,85,247,0.3) 0%, transparent 25%), radial-gradient(circle at 75% 75%, rgba(236,72,153,0.3) 0%, transparent 25%)"
                            }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                    </div>

                    <motion.div
                        className="absolute inset-0 flex items-center justify-center p-6 text-center z-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="space-y-4">
                            {/* Profile Info */}
                            <motion.div
                                initial={{ scale: 0.8 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <h3 className="text-2xl font-bold text-white mb-2">Camilo José María</h3>
                                <p className="text-purple-300 text-lg">Software Engineer</p>
                            </motion.div>

                            {/* Stats */}
                            <motion.div
                                className="grid grid-cols-2 gap-4 mt-6"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <div className="bg-purple-500/20 rounded-lg p-3 backdrop-blur-sm">
                                    <div className="text-white font-bold text-lg">+2</div>
                                    <div className="text-purple-300 text-xs">Years Exp.</div>
                                </div>
                                <div className="bg-pink-500/20 rounded-lg p-3 backdrop-blur-sm">
                                    <div className="text-white font-bold text-lg">5+</div>
                                    <div className="text-pink-300 text-xs">Projects</div>
                                </div>
                            </motion.div>

                            {/* Animated divider */}
                            <motion.div
                                className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: 64 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            />

                            {/* Skills badges */}
                            <motion.div
                                className="flex flex-wrap justify-center gap-2 mt-4"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                {["React", "Node.js", "TypeScript"].map((skill, index) => (
                                    <motion.span
                                        key={skill}
                                        className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/30"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Enhanced border */}
                    <div className="absolute inset-0 border-4 border-purple-500/40 rounded-2xl" />
                </motion.div>
            </motion.div>

            {/* Particle effects */}
            <AnimatePresence>
                {isHovered && (
                    <>
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-purple-400 rounded-full"
                                initial={{
                                    opacity: 0,
                                    x: "50%",
                                    y: "50%",
                                    scale: 0
                                }}
                                animate={{
                                    opacity: [0, 1, 0],
                                    x: `${50 + (Math.random() - 0.5) * 200}%`,
                                    y: `${50 + (Math.random() - 0.5) * 200}%`,
                                    scale: [0, 1, 0]
                                }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: 2,
                                    delay: i * 0.2,
                                    repeat: Infinity,
                                    repeatDelay: 1
                                }}
                            />
                        ))}
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}

export default ProfileCube
