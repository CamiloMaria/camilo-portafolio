"use client"

import { useState, useRef, useEffect } from "react"
import {
    motion,
    useScroll,
    useTransform,
    useMotionValue,
} from "framer-motion"
import { ExternalLink, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Project } from "@/types/project"
import { projects } from "@/consts/project"
import { ProjectCursor, TiltCard, CategoryIcon, ProjectModal } from "@/components/project"

// Main Projects Section component
export default function ProjectsSection() {
    const [filter, setFilter] = useState<"all" | "featured" | Project["category"]>("all")
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [showCustomCursor, setShowCustomCursor] = useState(false)
    const [filteredProjects, setFilteredProjects] = useState(projects)
    const [refreshKey, setRefreshKey] = useState(0)

    const sectionRef = useRef<HTMLDivElement>(null)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    // Modificar las transformaciones para mantener un valor mínimo de opacidad
    // para que el contenido no desaparezca completamente
    const contentOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.8, 1, 1, 0.8])
    const contentY = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [50, 0, 0, 50])

    // Update filtered projects when filter changes
    useEffect(() => {
        if (filter === "all") {
            setFilteredProjects(projects);
        } else if (filter === "featured") {
            const featured = projects.filter((project) => project.featured);
            setFilteredProjects(featured);
        } else {
            const filtered = projects.filter((project) => project.category === filter);
            setFilteredProjects(filtered);
        }
        // Force a component refresh by updating the key
        setRefreshKey(prevKey => prevKey + 1);
    }, [filter])

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e
        mouseX.set(clientX)
        mouseY.set(clientY)
    }

    const openProjectModal = (project: Project) => {
        setSelectedProject(project)
        setIsModalOpen(true)
    }

    const closeProjectModal = () => {
        setIsModalOpen(false)
    }

    // Categories for filter
    const categories = [
        { id: "all", label: "Todos" },
        { id: "featured", label: "Destacados" },
        { id: "frontend", label: "Frontend" },
        { id: "backend", label: "Backend" },
        { id: "mobile", label: "Mobile" },
    ]

    return (
        <section
            id="proyectos"
            ref={sectionRef}
            className="py-20 px-6 md:px-10 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setShowCustomCursor(true)}
            onMouseLeave={() => setShowCustomCursor(false)}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_70%)]"></div>

                <motion.div
                    className="absolute -top-[40%] -left-[10%] w-[70%] h-[70%] rounded-full bg-purple-900/10 blur-3xl"
                    animate={{
                        x: [0, 30, 0],
                        y: [0, 15, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />

                <motion.div
                    className="absolute -bottom-[40%] -right-[10%] w-[70%] h-[70%] rounded-full bg-pink-900/10 blur-3xl"
                    animate={{
                        x: [0, -30, 0],
                        y: [0, -15, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Custom cursor */}
            {showCustomCursor && <ProjectCursor mouseX={mouseX} mouseY={mouseY} />}

            {/* Header Section - Always visible, independent of scroll animations */}
            <div className="max-w-7xl mx-auto relative z-20 mb-16 text-center">
                <motion.div
                    key={`header-${refreshKey}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="min-opacity-80"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        Mis{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 animate-gradient bg-size-200">
                            Proyectos
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
                        Aquí están algunos de mis proyectos recientes. Cada uno fue cuidadosamente elaborado con atención al detalle, rendimiento,
                        y experiencia de usuario.
                    </p>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((category) => (
                            <motion.button
                                key={category.id}
                                onClick={() => {
                                    // Use type assertion that matches the filter state type
                                    const newFilter = category.id as "all" | "featured" | Project["category"];
                                    if (newFilter !== filter) {
                                        setFilter(newFilter);
                                    } else {
                                        // If clicking the same filter, force a re-render
                                        setRefreshKey(prev => prev + 1);
                                    }
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${filter === category.id
                                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/20"
                                    : "bg-gray-800/80 text-gray-400 hover:bg-gray-700/80 backdrop-blur-sm"
                                    }`}
                            >
                                {category.id !== "all" && category.id !== "featured" && (
                                    <span className="mr-2 inline-block align-middle">
                                        <CategoryIcon category={category.id as Project["category"]} />
                                    </span>
                                )}
                                {category.label}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Content section - Affected by scroll animations but with minimum visibility */}
            <motion.div
                key={`container-${filter}-${refreshKey}`}
                className="max-w-7xl mx-auto relative z-10 min-opacity-80"
                style={{ opacity: contentOpacity, y: contentY }}
            >
                {/* Featured Project Showcase (only shown when not filtering) */}
                {filter === "all" && (
                    <motion.div
                        key={`featured-showcase-${filter}-${refreshKey}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-800/50 shadow-xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-8">
                                <div className="flex flex-col justify-center">
                                    <div className="mb-4">
                                        <span className="px-4 py-1.5 text-xs font-semibold rounded-full bg-purple-500/20 text-purple-300 backdrop-blur-sm">
                                            Featured Project
                                        </span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{projects[0].title}</h3>
                                    <p className="text-gray-300 mb-6">{projects[0].longDescription || projects[0].description}</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {projects[0].tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 text-xs rounded-full bg-gray-800/80 text-gray-300 backdrop-blur-sm"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-4">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => openProjectModal(projects[0])}
                                            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium transform transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] focus:outline-none"
                                        >
                                            View Details
                                        </motion.button>
                                        {projects[0].demoUrl && (
                                            <motion.a
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                href={projects[0].demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-6 py-3 bg-transparent border border-purple-500/50 rounded-full text-white font-medium transform transition-all duration-300 hover:bg-purple-500/10 focus:outline-none"
                                            >
                                                Live Demo
                                            </motion.a>
                                        )}
                                        <motion.a
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            href={projects[0].githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 bg-transparent border border-purple-500/50 rounded-full text-white font-medium transform transition-all duration-300 hover:bg-purple-500/10 focus:outline-none"
                                        >
                                            GitHub
                                        </motion.a>
                                    </div>
                                </div>
                                <div className="relative h-64 md:h-auto rounded-xl overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 mix-blend-overlay rounded-xl" />
                                    <Image
                                        src={projects[0].image || "/placeholder.svg"}
                                        alt={projects[0].title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover rounded-xl"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-60" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Projects Grid */}
                <div
                    key={`projects-grid-${filter}-${refreshKey}`}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={`project-${project.id}-${refreshKey}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.4,
                                delay: Math.min(index * 0.1, 0.5), // Limitar el delay máximo
                                ease: "easeOut"
                            }}
                            className="group"
                        >
                            <TiltCard className="h-full">
                                <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-700/50 h-full flex flex-col transform transition-all duration-500 group-hover:border-purple-500/30 group-hover:shadow-purple-500/10">
                                    {/* Project Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />

                                        {/* Category badge */}
                                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gray-900/70 backdrop-blur-sm text-xs font-medium text-gray-300 flex items-center gap-1.5">
                                            <CategoryIcon category={project.category} />
                                            <span className="capitalize">{project.category}</span>
                                        </div>

                                        {/* Overlay with links on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3, delay: 0.1 }}
                                                className="flex gap-4"
                                            >
                                                {project.demoUrl && (
                                                    <a
                                                        href={project.demoUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-2 bg-white/90 rounded-full text-purple-600 hover:bg-white transition-colors duration-300 transform hover:scale-110"
                                                        aria-label={`View live demo of ${project.title}`}
                                                    >
                                                        <ExternalLink className="w-5 h-5" />
                                                    </a>
                                                )}
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 bg-white/90 rounded-full text-purple-600 hover:bg-white transition-colors duration-300 transform hover:scale-110"
                                                    aria-label={`View GitHub repository of ${project.title}`}
                                                >
                                                    <Image src="/socials/github.svg" alt="GitHub" width={20} height={20} />
                                                </a>
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Project Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.slice(0, 3).map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 text-xs rounded-full bg-gray-700/80 text-gray-300 backdrop-blur-sm group-hover:bg-purple-900/30 group-hover:text-purple-200 transition-colors duration-300"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                            {project.tags.length > 3 && (
                                                <span className="px-3 py-1 text-xs rounded-full bg-gray-700/80 text-gray-300 backdrop-blur-sm">
                                                    +{project.tags.length - 3}
                                                </span>
                                            )}
                                        </div>

                                        {/* View Details Button */}
                                        <button
                                            onClick={() => openProjectModal(project)}
                                            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-medium group/btn"
                                        >
                                            View Details
                                            <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }} className="ml-1 inline-block">
                                                <ArrowRight className="w-4 h-4" />
                                            </motion.span>
                                        </button>
                                    </div>

                                    {/* Featured Badge */}
                                    {project.featured && (
                                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold">
                                            Featured
                                        </div>
                                    )}
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>

                {/* Empty state when no projects match filter */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        key={`empty-state-${filter}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <p className="text-gray-400 text-lg">No projects found matching the selected filter.</p>
                        <button
                            onClick={() => {
                                setFilter("all");
                            }}
                            className="mt-4 px-6 py-2 bg-purple-600 rounded-full text-white font-medium"
                        >
                            View All Projects
                        </button>
                    </motion.div>
                )}

                {/* View All Projects Button */}
                {filteredProjects.length > 0 && (
                    <motion.div
                        key={`view-all-${filter}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-16 text-center"
                    >
                        <motion.a
                            href="https://github.com/CamiloMaria?tab=repositories"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium transform transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] focus:outline-none"
                        >
                            View All Projects
                            <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }} className="ml-2 inline-block">
                                <ArrowRight className="w-5 h-5" />
                            </motion.span>
                        </motion.a>
                    </motion.div>
                )}
            </motion.div>

            {/* Project Detail Modal */}
            <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeProjectModal} />
        </section>
    )
}
