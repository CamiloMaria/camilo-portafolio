import { Interest } from "@/types/about";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

// Interest item component with hover effect
const InterestItem = ({ interest, index }: { interest: Interest; index: number }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                className="bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden h-full"
                whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px -15px rgba(168, 85, 247, 0.4)",
                    borderColor: "rgba(168, 85, 247, 0.3)",
                }}
                transition={{ duration: 0.2 }}
            >
                <div className="p-4 flex flex-col items-center text-center h-full">
                    <div className="p-3 rounded-full bg-purple-500/20 text-purple-300 mb-3">{interest.icon}</div>
                    <h4 className="text-white font-medium mb-2">{interest.name}</h4>

                    <AnimatePresence>
                        {isHovered && (
                            <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="text-gray-400 text-xs overflow-hidden"
                            >
                                {interest.description}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default InterestItem;
