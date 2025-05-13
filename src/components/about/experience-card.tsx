import { useInView } from "framer-motion"
import { Experience } from "@/types/about/experience"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Calendar, MapPin, Briefcase, GraduationCap, Award, ChevronRight } from "lucide-react"
import { useRef, } from "react"


// Experience card component
const ExperienceCard = ({
    experience,
    index,
    isActive,
    onClick,
}: {
    experience: Experience
    index: number
    isActive: boolean
    onClick: () => void
}) => {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative cursor-pointer transition-all duration-300 ${isActive ? "z-10" : "z-0"}`}
            onClick={onClick}
        >
            <motion.div
                className={`bg-gray-800/60 backdrop-blur-sm rounded-xl border overflow-hidden ${isActive ? "border-purple-500/50 shadow-lg shadow-purple-500/10" : "border-gray-700/50"
                    }`}
                animate={{
                    scale: isActive ? 1 : 0.98,
                    opacity: isActive ? 1 : 0.7,
                }}
                whileHover={{
                    scale: 1.02,
                    borderColor: "rgba(168, 85, 247, 0.3)",
                }}
                transition={{ duration: 0.2 }}
            >
                <div className="p-5">
                    <div className="flex items-start gap-4">
                        {experience.logo && (
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden bg-gray-700/50 relative">
                                <Image
                                    src={experience.logo || "/placeholder.svg"}
                                    alt={experience.company}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}

                        <div className="flex-grow">
                            <div className="flex items-center">
                                <h4 className="text-lg font-bold text-white flex items-center">
                                    {experience.title}
                                    {experience.current && (
                                        <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-purple-500/30 text-purple-300">
                                            Actual
                                        </span>
                                    )}
                                </h4>
                            </div>

                            <div className="text-gray-400 text-sm">{experience.company}</div>

                            <div className="flex items-center text-gray-400 text-xs mt-1">
                                <Calendar className="w-3 h-3 mr-1" />
                                <span className="mr-3">{experience.period}</span>
                                <MapPin className="w-3 h-3 mr-1" />
                                <span>{experience.location}</span>
                            </div>
                        </div>

                        <div
                            className={`p-2 rounded-lg ${experience.type === "work"
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
                        </div>
                    </div>

                    <AnimatePresence>
                        {isActive && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="mt-4 pt-4 border-t border-gray-700/30">
                                    <p className="text-gray-300 mb-3">{experience.description}</p>

                                    {experience.achievements && experience.achievements.length > 0 && (
                                        <div className="mb-3">
                                            <h5 className="text-white font-medium mb-2 text-sm">Logros Clave:</h5>
                                            <ul className="space-y-1">
                                                {experience.achievements.map((achievement, i) => (
                                                    <li key={i} className="text-gray-300 text-sm flex items-start">
                                                        <ChevronRight className="w-4 h-4 text-purple-400 mr-1 flex-shrink-0 mt-0.5" />
                                                        <span>{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {experience.technologies && (
                                        <div className="flex flex-wrap gap-1.5">
                                            {experience.technologies.map((tech, i) => (
                                                <span key={i} className="px-2 py-1 bg-gray-700/50 rounded-md text-gray-300 text-xs">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default ExperienceCard;