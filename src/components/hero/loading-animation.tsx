"use client"

import { motion } from "framer-motion"

export default function LoadingAnimation() {
    return (
        <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center"
            >
                <motion.div className="flex space-x-2 mb-4">
                    {[0, 1, 2].map((index) => (
                        <motion.div
                            key={index}
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: index * 0.2,
                                ease: "easeInOut",
                            }}
                            className="w-4 h-4 rounded-full bg-purple-500"
                        />
                    ))}
                </motion.div>
                <motion.p
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="text-purple-300 text-sm"
                >
                    Loading Portfolio
                </motion.p>
            </motion.div>
        </div>
    )
}
