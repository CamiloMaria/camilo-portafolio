import { motion } from "framer-motion"

// Animated highlight component
const AnimatedHighlight = ({
    text,
    color = "rgba(168, 85, 247, 0.5)",
    isFeatured = false,
}: {
    text: string
    color?: string
    isFeatured?: boolean
}) => {
    return (
        <motion.span
            className="font-bold relative inline-block"
            initial={{ color: "rgb(209, 213, 219)" }}
            animate={{
                color: ["rgb(209, 213, 219)", "rgb(255, 255, 255)", "rgb(209, 213, 219)"],
                textShadow: [
                    "0 0 0px rgba(0, 0, 0, 0)",
                    `0 0 ${isFeatured ? "10px" : "8px"} ${color}`,
                    "0 0 0px rgba(0, 0, 0, 0)",
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
                className={`absolute bottom-0 left-0 w-full h-[${isFeatured ? "3px" : "2px"}] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full`}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                    duration: 1.5,
                    delay: 0.5,
                    ease: "easeOut",
                }}
            />
            {text}
        </motion.span>
    )
}

export default AnimatedHighlight;