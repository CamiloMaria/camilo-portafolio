"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Download, ExternalLink } from "lucide-react"
import { SkillBar, TimelineItem, InterestItem } from "@/components/about"
import { skills, experiences, interests } from "@/consts/about"

export default function AboutMe() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const bioRef = useRef<HTMLDivElement>(null)
    const [activeTab, setActiveTab] = useState<"skills" | "experience" | "education">("skills")
    const [activeSkillCategory, setActiveSkillCategory] = useState<"frontend" | "backend" | "design" | "other">(
        "frontend",
    )

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
    const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [100, 0, 0, 100])
    const springY = useSpring(y, { stiffness: 100, damping: 20 })

    // Filter experiences based on active tab
    const filteredExperiences = experiences.filter((exp) => {
        if (activeTab === "experience") return exp.type === "work"
        if (activeTab === "education") return exp.type === "education" || exp.type === "award"
        return true
    })

    return (
        <section
            id="about"
            ref={sectionRef}
            className="py-20 px-6 md:px-10 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_70%)]"></div>

                <motion.div
                    className="absolute -bottom-[40%] -left-[10%] w-[70%] h-[70%] rounded-full bg-purple-900/10 blur-3xl"
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
                    className="absolute -top-[40%] -right-[10%] w-[70%] h-[70%] rounded-full bg-pink-900/10 blur-3xl"
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

            <motion.div className="max-w-7xl mx-auto relative z-10" style={{ opacity, y: springY }}>
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                            About{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 animate-gradient bg-size-200">
                                Me
                            </span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
                            Get to know more about me, my background, and what I do.
                        </p>
                    </motion.div>
                </div>

                {/* Bio Section */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-20">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 flex justify-center lg:justify-end"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 mix-blend-overlay rounded-2xl z-10" />
                            <Image
                                src="/placeholder.svg?height=320&width=320"
                                alt="Camilo José María Castillo"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 border-4 border-purple-500/30 rounded-2xl z-20" />

                            {/* Decorative elements */}
                            <motion.div
                                className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-40 z-0"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                            />
                            <motion.div
                                className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-xl opacity-40 z-0"
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                            />
                        </div>
                    </motion.div>

                    {/* Bio Column */}
                    <motion.div
                        ref={bioRef}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-3"
                    >
                        <div className="bg-gray-800/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-700/50 shadow-xl">
                            <h3 className="text-2xl font-bold text-white mb-4">Software Engineer & Web Developer</h3>

                            <div className="space-y-4 text-gray-300">
                                <p>
                                    I&apos;m Camilo, a passionate Software Engineer with expertise in building modern web applications. With 5+
                                    years of experience, I specialize in creating responsive, user-friendly interfaces using cutting-edge
                                    technologies.
                                </p>
                                <p>
                                    My journey in software development began during my university years, where I discovered my passion for
                                    creating digital experiences that solve real-world problems. Since then, I&apos;ve worked with various
                                    companies to deliver high-quality web solutions.
                                </p>
                                <p>
                                    I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends
                                    and best practices. When I&apos;m not coding, you can find me exploring new technologies, contributing to
                                    open-source projects, or enjoying my hobbies.
                                </p>
                            </div>

                            {/* Personal Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                <div>
                                    <ul className="space-y-2">
                                        <li className="flex items-center text-gray-300">
                                            <span className="font-semibold text-white mr-2">Age:</span> 22
                                        </li>
                                        <li className="flex items-center text-gray-300">
                                            <span className="font-semibold text-white mr-2">Location:</span> San Francisco, CA
                                        </li>
                                        <li className="flex items-center text-gray-300">
                                            <span className="font-semibold text-white mr-2">Nationality:</span> Spanish
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="space-y-2">
                                        <li className="flex items-center text-gray-300">
                                            <span className="font-semibold text-white mr-2">Languages:</span> English, Spanish
                                        </li>
                                        <li className="flex items-center text-gray-300">
                                            <span className="font-semibold text-white mr-2">Freelance:</span> Available
                                        </li>
                                        <li className="flex items-center text-gray-300">
                                            <span className="font-semibold text-white mr-2">Experience:</span> 5+ Years
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4 mt-8">
                                <motion.a
                                    href="#"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium flex items-center gap-2 transform transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                                >
                                    <Download className="w-4 h-4" />
                                    Download CV
                                </motion.a>
                                <motion.a
                                    href="#contact"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-3 bg-transparent border border-purple-500 rounded-full text-white font-medium flex items-center gap-2 transform transition-all duration-300 hover:bg-purple-500/10"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    Contact Me
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Skills & Experience Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
                    {/* Skills & Interests Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-gray-800/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-700/50 shadow-xl h-full flex flex-col">
                            <h3 className="text-2xl font-bold text-white mb-4">My Skills</h3>

                            {/* Skill category tabs */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["frontend", "backend", "design", "other"].map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setActiveSkillCategory(category as "frontend" | "backend" | "design" | "other")}
                                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${activeSkillCategory === category
                                            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                                            : "bg-gray-700/50 text-gray-400 hover:bg-gray-700"
                                            }`}
                                    >
                                        {category.charAt(0).toUpperCase() + category.slice(1)}
                                    </button>
                                ))}
                            </div>

                            {/* Skill bars */}
                            <div className="space-y-3 mb-8 flex-grow">
                                {skills
                                    .filter((skill) => skill.category === activeSkillCategory)
                                    .map((skill, index) => (
                                        <SkillBar key={skill.name} skill={skill} index={index} />
                                    ))}
                            </div>

                            {/* Interests Section - Integrated */}
                            <div className="pt-4 border-t border-gray-700/50 mt-auto">
                                <h3 className="text-xl font-bold text-white mb-4">My Interests</h3>
                                <div className="grid grid-cols-3 sm:grid-cols-3 gap-3">
                                    {interests.map((interest, index) => (
                                        <InterestItem key={interest.name} interest={interest} index={index} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Experience Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-gray-800/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-700/50 shadow-xl h-full">
                            <h3 className="text-2xl font-bold text-white mb-6">Experience & Education</h3>

                            {/* Experience tabs */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {["experience", "education"].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab as "experience" | "education")}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === tab
                                            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                                            : "bg-gray-700/50 text-gray-400 hover:bg-gray-700"
                                            }`}
                                    >
                                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                    </button>
                                ))}
                            </div>

                            {/* Timeline */}
                            <div className="mt-8 pl-4">
                                {filteredExperiences.map((experience, index) => (
                                    <TimelineItem
                                        key={`${experience.title}-${experience.company}`}
                                        experience={experience}
                                        index={index}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Quote Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/30 shadow-xl">
                        <div className="text-5xl text-purple-500 mb-4">&quot;</div>
                        <p className="text-xl text-gray-300 italic mb-6">
                            I believe that great software is not just about code, but about creating experiences that make people&apos;s
                            lives better.
                        </p>
                        <div className="text-white font-bold">Camilo José María Castillo</div>
                        <div className="text-purple-400 text-sm">Software Engineer</div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}
