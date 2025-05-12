import { Copy, Check, ExternalLink } from "lucide-react"
import { ContactItem } from "@/types/contact"
import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

const SocialCard = ({ item }: { item: ContactItem }) => {
    const [copied, setCopied] = useState(false)

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:border-purple-500/30 group"
        >
            <div className="p-6">
                <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg ${item.color} text-white mr-4`}>
                        {item.useImage ? (
                            <Image
                                src={item.icon as string}
                                alt={`${item.name} icon`}
                                width={20}
                                height={20}
                                className="w-5 h-5 brightness-0 invert"
                            />
                        ) : (
                            item.icon
                        )}
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg">{item.name}</h3>
                        <p className="text-gray-400 text-sm flex items-center gap-2">
                            <span className={item.name === "Instagram" ? item.textColor : "text-gray-400"}>{item.username}</span>
                            <button
                                onClick={() => copyToClipboard(item.username)}
                                className="text-gray-500 hover:text-gray-300 transition-colors"
                                aria-label={`Copy ${item.name} username`}
                            >
                                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                            </button>
                        </p>
                    </div>
                </div>
                <div className="mt-4">
                    <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${item.color} text-white font-medium transition-all duration-300 ${item.hoverColor} hover:scale-105`}
                    >
                        Contactar <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </motion.div>
    )
}

export default SocialCard;