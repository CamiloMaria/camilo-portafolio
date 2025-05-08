"use client"

import type React from "react"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"
import { Calendar, MapPin, Briefcase, GraduationCap, Award, Download, ExternalLink } from "lucide-react"

// Skill type definition
type Skill = {
    name: string
    level: number // 0-100
    category: "frontend" | "backend" | "design" | "other"
    icon?: string
}

// Experience type definition
type Experience = {
    title: string
    company: string
    location: string
    period: string
    description: string
    type: "work" | "education" | "award"
    current?: boolean
}

// Interest type definition
type Interest = {
    name: string
    icon: React.ReactNode
}

// Sample skills data
const skills: Skill[] = [
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "React", level: 85, category: "frontend" },
    { name: "TypeScript", level: 80, category: "frontend" },
    { name: "Next.js", level: 85, category: "frontend" },
    { name: "HTML/CSS", level: 90, category: "frontend" },
    { name: "Tailwind CSS", level: 85, category: "frontend" },
    { name: "Node.js", level: 75, category: "backend" },
    { name: "Express", level: 70, category: "backend" },
    { name: "MongoDB", level: 65, category: "backend" },
    { name: "PostgreSQL", level: 60, category: "backend" },
    { name: "GraphQL", level: 65, category: "backend" },
    { name: "UI/UX Design", level: 75, category: "design" },
    { name: "Figma", level: 70, category: "design" },
    { name: "Git", level: 80, category: "other" },
    { name: "Docker", level: 60, category: "other" },
    { name: "AWS", level: 55, category: "other" },
]

// Sample experience data
const experiences: Experience[] = [
    {
        title: "Senior Software Engineer",
        company: "Tech Innovations Inc.",
        location: "San Francisco, CA",
        period: "2022 - Present",
        description:
            "Leading the frontend development team in building scalable web applications. Implementing modern React architectures and mentoring junior developers.",
        type: "work",
        current: true,
    },
    {
        title: "Frontend Developer",
        company: "Digital Solutions Ltd.",
        location: "New York, NY",
        period: "2020 - 2022",
        description:
            "Developed responsive web applications using React and Next.js. Collaborated with designers to implement pixel-perfect UI components.",
        type: "work",
    },
    {
        title: "Web Developer Intern",
        company: "StartUp Ventures",
        location: "Boston, MA",
        period: "2019 - 2020",
        description:
            "Assisted in developing and maintaining company websites. Gained hands-on experience with JavaScript frameworks and responsive design.",
        type: "work",
    },
    {
        title: "Master of Computer Science",
        company: "Tech University",
        location: "Cambridge, MA",
        period: "2018 - 2020",
        description:
            "Specialized in Web Technologies and Human-Computer Interaction. Graduated with honors and completed a thesis on modern frontend architectures.",
        type: "education",
    },
    {
        title: "Bachelor of Science in Computer Science",
        company: "State University",
        location: "Los Angeles, CA",
        period: "2014 - 2018",
        description:
            "Focused on software engineering and web development. Participated in multiple hackathons and coding competitions.",
        type: "education",
    },
    {
        title: "Web Development Excellence Award",
        company: "International Dev Conference",
        location: "Online",
        period: "2021",
        description:
            "Recognized for contributions to open-source web development projects and innovative approaches to frontend architecture.",
        type: "award",
    },
]

// Sample interests data
const interests: Interest[] = [
    { name: "Traveling", icon: <MapPin className="w-5 h-5" /> },
    { name: "Photography", icon: <Camera className="w-5 h-5" /> },
    { name: "Reading", icon: <BookOpen className="w-5 h-5" /> },
    { name: "Hiking", icon: <Mountain className="w-5 h-5" /> },
    { name: "Coding", icon: <Code className="w-5 h-5" /> },
    { name: "Music", icon: <Music className="w-5 h-5" /> },
]

// Import missing icons
import { Camera, BookOpen, Mountain, Code, Music } from "lucide-react"

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

// Main About Section component
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
