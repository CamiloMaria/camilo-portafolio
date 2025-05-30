import { motion } from "framer-motion"
import { Testimonial } from "@/types/testimonial"
import { PatternBackground, QuoteMark } from "."
import { getInitials } from "@/lib/utils"

// Testimonial card component
const TestimonialCard = ({
    testimonial,
    index,
    isActive,
}: {
    testimonial: Testimonial
    index: number
    isActive: boolean
}) => {
    // Function to highlight the key phrase with animation
    const highlightText = (text: string, highlight: string) => {
        if (!highlight) return text

        const parts = text.split(new RegExp(`(${highlight})`, "gi"))
        return (
            <>
                {parts.map((part, i) =>
                    part.toLowerCase() === highlight.toLowerCase() ? (
                        <motion.span
                            key={i}
                            className="font-bold relative inline-block"
                            initial={{ color: "rgb(209, 213, 219)" }}
                            animate={{
                                color: ["rgb(209, 213, 219)", "rgb(255, 255, 255)", "rgb(209, 213, 219)"],
                                textShadow: [
                                    "0 0 0px rgba(168, 85, 247, 0)",
                                    "0 0 8px rgba(168, 85, 247, 0.5)",
                                    "0 0 0px rgba(168, 85, 247, 0)",
                                ],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "reverse",
                                ease: "easeInOut",
                            }}
                        >
                            <motion.span
                                className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{
                                    duration: 1.5,
                                    delay: 0.5,
                                    ease: "easeOut",
                                }}
                            />
                            {part}
                        </motion.span>
                    ) : (
                        <span key={i}>{part}</span>
                    ),
                )}
            </>
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
                opacity: isActive ? 1 : 0.5,
                scale: isActive ? 1 : 0.9,
                y: isActive ? 0 : 20,
                boxShadow: isActive
                    ? [
                        "0 0 0 rgba(168, 85, 247, 0)",
                        "0 0 20px rgba(168, 85, 247, 0.3)",
                        "0 0 0 rgba(168, 85, 247, 0)",
                    ]
                    : "none"
            }}
            transition={{
                duration: 0.5,
                boxShadow: {
                    duration: 2,
                    repeat: isActive ? Number.POSITIVE_INFINITY : 0,
                    repeatType: "reverse",
                }
            }}
            whileHover={{
                scale: isActive ? 1 : 0.95, // No escalar si está activa
                boxShadow: isActive
                    ? "0 0 25px rgba(168, 85, 247, 0.3)"
                    : "0 0 15px rgba(168, 85, 247, 0.2)"
            }}
            className={`bg-gray-800/50 backdrop-blur-sm rounded-xl border ${isActive
                ? "border-purple-500/50 shadow-lg shadow-purple-500/20"
                : "border-gray-700/50"
                } p-6 md:p-8 transition-all duration-300 h-full relative overflow-hidden`}
        >
            {/* Pattern background */}
            <PatternBackground index={index} />

            {/* Decorative elements */}
            <div
                className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${testimonial.color} opacity-10 blur-xl`}
            />
            <div
                className={`absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-gradient-to-br ${testimonial.color} opacity-10 blur-xl`}
            />

            {/* Client name as large typographic element */}
            <div className="relative z-10 text-center">
                <h3
                    className={`text-6xl font-extrabold bg-gradient-to-r ${testimonial.color} text-transparent bg-clip-text`}
                >
                    {getInitials(testimonial.name)}
                </h3>
                <div className={`h-1 w-16 mx-auto mt-2 rounded-full bg-gradient-to-r ${testimonial.color}`}></div>
            </div>

            {/* Quote opening */}
            <QuoteMark color={testimonial.accentColor} />

            {/* Testimonial text */}
            <div className="relative my-6">
                <p className="text-gray-300 relative z-10 text-lg leading-relaxed">
                    {highlightText(testimonial.text, testimonial.highlight)}
                </p>
            </div>

            {/* Quote closing */}
            <QuoteMark color={testimonial.accentColor} isClosing />

            {/* Client info */}
            <div className="mt-6 border-t border-gray-700/50 pt-4">
                <div className="flex justify-between items-center">
                    <div>
                        <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                        <p className={`bg-gradient-to-r ${testimonial.color} text-transparent bg-clip-text font-medium`}>
                            {testimonial.position}, {testimonial.company}
                        </p>
                        {testimonial.country && (
                            <p className="text-gray-400 text-sm mt-1">
                                {testimonial.country}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {testimonial.featured && (
                <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-xs font-bold">
                    Featured
                </div>
            )}

            {isActive && (
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                />
            )}
        </motion.div>
    )
}

export default TestimonialCard;