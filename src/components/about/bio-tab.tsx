import { BioDetail } from "@/types/about";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

// Bio tab component
const BioTab = ({ detail, index, isActive }: { detail: BioDetail; index: number; isActive: boolean }) => {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative overflow-hidden rounded-xl ${isActive ? "z-10" : "z-0"}`}
        >
            <motion.div
                animate={{
                    scale: isActive ? 1 : 0.95,
                    opacity: isActive ? 1 : 0.7,
                }}
                transition={{ duration: 0.3 }}
                className={`p-6 rounded-xl ${isActive
                    ? "bg-gradient-to-br from-purple-900/30 to-gray-800/80 border border-purple-500/30"
                    : "bg-gray-800/20"
                    }`}
            >
                <div className="flex items-start gap-4">
                    <div
                        className={`p-3 rounded-lg ${isActive ? "bg-purple-500/30 text-purple-300" : "bg-gray-700/50 text-gray-400"
                            }`}
                    >
                        {detail.icon}
                    </div>

                    <div>
                        <h4 className={`text-lg font-bold mb-2 ${isActive ? "text-white" : "text-gray-400"}`}>{detail.title}</h4>
                        <p className={`${isActive ? "text-gray-300" : "text-gray-500"} transition-colors duration-300`}>
                            {detail.content}
                        </p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default BioTab;