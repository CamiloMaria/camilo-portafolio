import { getCategoryIcon, Skill } from "@/types/about/skill";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";

// Skill card component with 3D effect
const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="relative"
        >
            <motion.div
                className="bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden h-full"
                whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 30px -15px rgba(168, 85, 247, 0.4)",
                    borderColor: "rgba(168, 85, 247, 0.3)",
                }}
                transition={{ duration: 0.2 }}
            >
                <div className="p-5 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                        <div>
                            <h4 className="text-white font-bold text-lg">{skill.name}</h4>
                            <div className="flex items-center text-sm text-gray-400">
                                {skill.yearsExperience && (
                                    <span className="font-mono">{skill.yearsExperience}+ años</span>
                                )}
                            </div>
                        </div>
                        <div
                            className={`w-10 h-10 rounded-lg p-2 flex items-center justify-center ${skill.category === "frontend"
                                ? "bg-purple-500/20 text-purple-300"
                                : skill.category === "backend"
                                    ? "bg-blue-500/20 text-blue-300"
                                    : skill.category === "devops"
                                        ? "bg-pink-500/20 text-pink-300"
                                        : "bg-green-500/20 text-green-300"
                                }`}
                        >
                            {getCategoryIcon(skill.category)}
                        </div>
                    </div>

                    <div className="mt-1 mb-3">
                        <div className="h-1.5 bg-gray-700/70 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                                transition={{ duration: 1, delay: index * 0.05 + 0.2, ease: "easeOut" }}
                                className={`h-full rounded-full ${skill.category === "frontend"
                                    ? "bg-gradient-to-r from-purple-500 to-pink-500"
                                    : skill.category === "backend"
                                        ? "bg-gradient-to-r from-blue-500 to-purple-500"
                                        : skill.category === "devops"
                                            ? "bg-gradient-to-r from-pink-500 to-orange-500"
                                            : skill.category === "herramientas"
                                                ? "bg-gradient-to-r from-green-500 to-blue-500"
                                                : skill.category === "idiomas"
                                                    ? "bg-gradient-to-r from-red-500 to-yellow-500"
                                                    : "bg-gradient-to-r from-green-500 to-blue-500"
                                    }`}
                            />
                        </div>
                    </div>

                    <p className="text-gray-300 text-sm flex-grow">{skill.description}</p>

                    <div className="mt-3 pt-3 border-t border-gray-700/30">
                        <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-400 capitalize">{skill.category}</span>
                            <span className="text-xs font-mono text-gray-400">{skill.level}%</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default SkillCard;