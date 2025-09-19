"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import {
    Briefcase,
    GraduationCap,
    Download,
    ExternalLink,
    Plus,
    Minus,
} from "lucide-react"
import { bioDetails, experiences, interests, skills } from "@/consts/about"
import SkillCard from "@/components/about/skill-card"
import { getCategoryIcon, SKILL_CATEGORIES, SkillCategory } from "@/types/about/skill"
import { BioTab, ExperienceCard, InterestItem, ProfileCube } from "@/components/about"

// Main About Section component
export default function AboutSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const [activeExperience, setActiveExperience] = useState<number | null>(0)
    const [activeBioTab, setActiveBioTab] = useState(0)
    const [activeSkillCategory, setActiveSkillCategory] = useState<SkillCategory>(
        "all",
    )
    const [expandedSkills, setExpandedSkills] = useState(false)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
    const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [100, 0, 0, 100])
    const springY = useSpring(y, { stiffness: 100, damping: 20 })

    // Get one skill from each category for the 'all' view
    const oneSkillPerCategory = SKILL_CATEGORIES.flatMap(category => {
        if (category === "all") return [];

        // Get all skills from this category
        const categorySkills = skills.filter(skill => skill.category === category);
        if (categorySkills.length === 0) return [];

        // Select specific skills for each category
        switch (category) {
            case "languages":
                const englishSkill = categorySkills.find(skill => skill.name.includes("English") || skill.name.includes("Inglés"));
                if (englishSkill) return [englishSkill];
                break;

            case "frontend":
                const reactSkill = categorySkills.find(skill => skill.name === "React");
                if (reactSkill) return [reactSkill];
                break;

            case "backend":
                const nestjsSkill = categorySkills.find(skill => skill.name === "NestJs");
                if (nestjsSkill) return [nestjsSkill];
                break;

            case "devops":
                const pm2Skill = categorySkills.find(skill => skill.name === "PM2");
                if (pm2Skill) return [pm2Skill];
                break;

            case "tools":
                const gitSkill = categorySkills.find(skill => skill.name === "Git");
                if (gitSkill) return [gitSkill];
                break;

            case "other":
                const typescriptSkill = categorySkills.find(skill => skill.name === "TypeScript");
                if (typescriptSkill) return [typescriptSkill];
                break;
        }

        // For unspecified categories or if the specific skill is not found,
        // use the highest level as a fallback
        return [categorySkills.sort((a, b) => b.level - a.level)[0]];
    });

    // Filter skills based on active category
    const filteredSkills = activeSkillCategory === "all"
        ? (expandedSkills ? skills : oneSkillPerCategory)
        : skills.filter((skill) => skill.category === activeSkillCategory);

    // Display limited skills unless expanded
    const displayedSkills = expandedSkills
        ? filteredSkills
        : filteredSkills.slice(0, 6);

    // Filter experiences based on type
    const workExperiences = experiences.filter((exp) => exp.type === "work")
    const educationExperiences = experiences.filter((exp) => exp.type === "education" || exp.type === "award")

    return (
        <section
            id="about-me"
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
                            Learn more about me, my background, and what I do.
                        </p>
                    </motion.div>
                </div>

                {/* Bio Section with 3D Profile */}
                <div className="mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Profile Image Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-4 flex justify-center"
                        >
                            <div className="relative w-full max-w-sm aspect-square">
                                <ProfileCube />

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

                        {/* Bio Content Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-8"
                        >
                            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/30 p-6 md:p-8 shadow-xl">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-2xl font-bold text-white">Software Engineer & Full Stack Developer</h3>
                                </div>

                                {/* Bio Tabs */}
                                <div className="space-y-4 mb-6">
                                    {bioDetails.map((detail, index) => (
                                        <div key={index} onClick={() => setActiveBioTab(index)}>
                                            <BioTab detail={detail} index={index} isActive={activeBioTab === index} />
                                        </div>
                                    ))}
                                </div>

                                {/* Personal Info Grid */}
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                                    <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30">
                                        <div className="text-gray-400 text-sm mb-1">Age</div>
                                        <div className="text-white font-medium">23</div>
                                    </div>

                                    <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30">
                                        <div className="text-gray-400 text-sm mb-1">Location</div>
                                        <div className="text-white font-medium">Providence, RI</div>
                                    </div>

                                    <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30">
                                        <div className="text-gray-400 text-sm mb-1">Nationality</div>
                                        <div className="text-white font-medium">Dominican</div>
                                    </div>

                                    <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30">
                                        <div className="text-gray-400 text-sm mb-1">Languages</div>
                                        <div className="text-white font-medium">Spanish, English</div>
                                    </div>

                                    <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30">
                                        <div className="text-gray-400 text-sm mb-1">Freelance</div>
                                        <div className="text-white font-medium">Available</div>
                                    </div>

                                    <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30">
                                        <div className="text-gray-400 text-sm mb-1">Experience</div>
                                        <div className="text-white font-medium">+2 Years</div>
                                    </div>
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex flex-wrap gap-4 mt-8">
                                    <motion.a
                                        href="/resume/resume.pdf"
                                        download
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
                </div>

                {/* Skills Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/30 p-6 md:p-8 shadow-xl">
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                            <h3 className="text-2xl font-bold text-white">My Skills</h3>

                            {/* Skill category tabs */}
                            <div className="flex flex-wrap gap-2">
                                <button
                                    onClick={() => setActiveSkillCategory("all")}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeSkillCategory === "all"
                                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                                        : "bg-gray-700/50 text-gray-400 hover:bg-gray-700"
                                        }`}
                                >
                                    All Skills
                                </button>

                                {SKILL_CATEGORIES.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setActiveSkillCategory(category as SkillCategory)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${activeSkillCategory === category
                                            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                                            : "bg-gray-700/50 text-gray-400 hover:bg-gray-700"
                                            }`}
                                    >
                                        <span className="w-4 h-4">{getCategoryIcon(category)}</span>
                                        <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Skills grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                            {activeSkillCategory === "all" ? (
                                // General view by categories
                                displayedSkills.map((skill, index) => (
                                    <div key={skill.name} className="flex flex-col">
                                        <div className="mb-2 flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className="w-5 h-5">{getCategoryIcon(skill.category)}</span>
                                                <span className="text-sm font-semibold text-purple-400 capitalize">
                                                    {skill.category}
                                                </span>
                                            </div>
                                            <button
                                                onClick={() => setActiveSkillCategory(skill.category)}
                                                className="text-xs text-gray-400 hover:text-purple-400 transition-colors"
                                            >
                                                View all
                                            </button>
                                        </div>
                                        <SkillCard skill={skill} index={index} />
                                    </div>
                                ))
                            ) : (
                                // Normal view filtered by category
                                displayedSkills.map((skill, index) => (
                                    <SkillCard key={skill.name} skill={skill} index={index} />
                                ))
                            )}
                        </div>

                        {/* Show more/less button */}
                        {filteredSkills.length > 6 && (
                            <div className="flex justify-center mt-6">
                                <motion.button
                                    onClick={() => setExpandedSkills(!expandedSkills)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-3 bg-gray-800/80 border border-gray-700/50 rounded-full text-white font-medium flex items-center gap-2 hover:bg-gray-700/80 transition-colors"
                                >
                                    {expandedSkills ? (
                                        <>
                                            <Minus className="w-4 h-4" />
                                            Show Less
                                        </>
                                    ) : (
                                        <>
                                            <Plus className="w-4 h-4" />
                                            Show More ({filteredSkills.length - 6} more)
                                        </>
                                    )}
                                </motion.button>
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* Experience Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-20"
                >
                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/30 p-6 md:p-8 shadow-xl">
                        <h3 className="text-2xl font-bold text-white mb-8">Experience & Education</h3>

                        {/* Work Experience */}
                        <div className="mb-10">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="p-2 rounded-lg bg-purple-500/20 text-purple-300">
                                    <Briefcase className="w-5 h-5" />
                                </div>
                                <h4 className="text-xl font-bold text-white">Work Experience</h4>
                            </div>

                            <div className="space-y-4">
                                {workExperiences.map((experience, index) => (
                                    <ExperienceCard
                                        key={`${experience.title}-${experience.company}`}
                                        experience={experience}
                                        index={index}
                                        isActive={activeExperience === index}
                                        onClick={() => setActiveExperience(index === activeExperience ? null : index)}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Education & Awards */}
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="p-2 rounded-lg bg-blue-500/20 text-blue-300">
                                    <GraduationCap className="w-5 h-5" />
                                </div>
                                <h4 className="text-xl font-bold text-white">Education & Awards</h4>
                            </div>

                            <div className="space-y-4">
                                {educationExperiences.map((experience, index) => (
                                    <ExperienceCard
                                        key={`${experience.title}-${experience.company}`}
                                        experience={experience}
                                        index={index + workExperiences.length}
                                        isActive={activeExperience === index + workExperiences.length}
                                        onClick={() =>
                                            setActiveExperience(
                                                index + workExperiences.length === activeExperience ? null : index + workExperiences.length,
                                            )
                                        }
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Interests Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-20"
                >
                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/30 p-6 md:p-8 shadow-xl">
                        <h3 className="text-2xl font-bold text-white mb-6">My Interests</h3>
                        <p className="text-gray-400 mb-8 max-w-3xl">
                            Beyond programming and development, I am passionate about these activities that keep me inspired and balanced.
                            Hover over each card to learn more.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {interests.map((interest, index) => (
                                <InterestItem key={interest.name} interest={interest} index={index} />
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Quote Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/30 shadow-xl relative overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"></div>

                        <div className="relative">
                            <div className="text-5xl text-purple-500 mb-4">&quot;</div>
                            <p className="text-xl text-gray-300 italic mb-6">
                                I believe that great software is not just about code, but about creating experiences that improve people&apos;s lives.
                            </p>
                            <div className="text-white font-bold">Camilo José María Castillo</div>
                            <div className="text-purple-400 text-sm">Software Engineer</div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}
