import { AnimatePresence, motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { X, ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { Project } from "@/types/project"

// Project detail modal component
export default function ProjectModal({
    project,
    isOpen,
    onClose,
}: {
    project: Project | null
    isOpen: boolean
    onClose: () => void
}) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }

        return () => {
            document.body.style.overflow = "auto"
        }
    }, [isOpen])

    useEffect(() => {
        setCurrentImageIndex(0)
    }, [project])

    if (!project) return null

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose()
        }
    }

    const nextImage = () => {
        if (!project.gallery) return
        setCurrentImageIndex((prev) => (prev + 1) % project.gallery!.length)
    }

    const prevImage = () => {
        if (!project.gallery) return
        setCurrentImageIndex((prev) => (prev - 1 + project.gallery!.length) % project.gallery!.length)
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto"
                    onClick={handleBackdropClick}
                >
                    <motion.div
                        ref={modalRef}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="bg-gray-900 border border-gray-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-800/80 text-white hover:bg-gray-700 transition-colors"
                            aria-label="Close modal"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Project gallery */}
                        <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden rounded-t-2xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentImageIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={project.gallery?.[currentImageIndex] || project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                                </motion.div>
                            </AnimatePresence>

                            {/* Gallery navigation */}
                            {project.gallery && project.gallery.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
                                        aria-label="Previous image"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
                                        aria-label="Next image"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>

                                    {/* Image indicators */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                                        {project.gallery.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentImageIndex(index)}
                                                className={`w-2 h-2 rounded-full transition-all ${currentImageIndex === index ? "bg-white w-4" : "bg-white/50"
                                                    }`}
                                                aria-label={`Go to image ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}

                            {/* Project title overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900 to-transparent">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.slice(0, 3).map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 text-xs rounded-full bg-purple-900/60 text-purple-200 backdrop-blur-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                    {project.tags.length > 3 && (
                                        <span className="px-3 py-1 text-xs rounded-full bg-gray-800/60 text-gray-300 backdrop-blur-sm">
                                            +{project.tags.length - 3} more
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Project content */}
                        <div className="p-6">
                            <div className="prose prose-invert max-w-none">
                                <p className="text-gray-300 mb-6 text-lg">{project.longDescription || project.description}</p>

                                {/* Project details */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, index) => (
                                                <span key={index} className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-3">Links</h4>
                                        <div className="flex gap-4">
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                <span>Live Demo</span>
                                            </a>
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                                            >
                                                <Github className="w-4 h-4" />
                                                <span>Source Code</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Action buttons */}
                            <div className="mt-8 flex justify-end">
                                <button
                                    onClick={onClose}
                                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] focus:outline-none"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
