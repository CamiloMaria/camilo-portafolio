import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

// 3D rotating cube component for profile image
const ProfileCube = () => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 })
    const cubeRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!cubeRef.current) return

            const rect = cubeRef.current.getBoundingClientRect()
            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2
            const mouseX = e.clientX
            const mouseY = e.clientY

            // Calculate rotation based on mouse position relative to center
            const rotateY = ((mouseX - centerX) / (rect.width / 2)) * 15
            const rotateX = ((centerY - mouseY) / (rect.height / 2)) * 15

            setRotation({ x: rotateX, y: rotateY })
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
        <div ref={cubeRef} className="w-full h-full perspective-1000 relative">
            <motion.div
                className="w-full h-full relative preserve-3d"
                animate={{
                    rotateX: rotation.x,
                    rotateY: rotation.y,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
                {/* Front face - main profile image */}
                <div className="absolute inset-0 backface-hidden">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 mix-blend-overlay rounded-2xl z-10" />
                        <Image
                            src="/images/profile.webp"
                            alt="Camilo José María Castillo"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 border-4 border-purple-500/30 rounded-2xl z-20" />
                    </div>
                </div>

                {/* Back face - could be another image or content */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gray-800 rounded-2xl overflow-hidden border-4 border-purple-500/30">
                    <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Camilo José María</h3>
                            <p className="text-purple-300">Software Engineer</p>
                            <div className="mt-4 w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default ProfileCube
