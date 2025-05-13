"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { contactData } from "@/consts/contact"
import { SocialCard } from "@/components/contact"
import { Mail } from "lucide-react"

export default function ContactSection() {
    const sectionRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
    const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [100, 0, 0, 100])
    const springY = useSpring(y, { stiffness: 100, damping: 20 })

    return (
        <section
            id="contacto"
            ref={sectionRef}
            className="py-20 px-6 md:px-10 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_70%)]"></div>

                <motion.div
                    className="absolute -top-[40%] -left-[10%] w-[70%] h-[70%] rounded-full bg-purple-900/10 blur-3xl"
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
                    className="absolute -bottom-[40%] -right-[10%] w-[70%] h-[70%] rounded-full bg-pink-900/10 blur-3xl"
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
                            Contactar{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 animate-gradient bg-size-200">
                                Conmigo
                            </span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
                            No dudes en contactarme a través de cualquiera de estas plataformas. Siempre estoy abierto a discutir nuevos proyectos,
                            ideas creativas u oportunidades para ser parte de tu visión.
                        </p>
                    </motion.div>
                </div>

                {/* Social Media Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {contactData.map((item) => (
                        <SocialCard key={item.name} item={item} />
                    ))}
                </div>

                {/* Additional Contact Info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 text-center"
                >
                    <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/30 shadow-xl max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-4">Crea algo increíble juntos</h3>
                        <p className="text-gray-300 mb-6">
                            Ya sea que tengas una pregunta, consulta sobre un proyecto o simplemente quieras saludar, ¡haré todo lo posible por responderte
                            lo antes posible!
                        </p>
                        <div className="flex justify-center">
                            <motion.a
                                href="mailto:camilo_jose08@hotmail.com"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium flex items-center gap-2 transform transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                            >
                                <Mail className="w-5 h-5" />
                                Enviar Email Directo
                            </motion.a>
                        </div>
                    </div>
                </motion.div>

                {/* Response Time Note */}
                <div className="mt-12 text-center text-gray-400">
                    <p>Usualmente, respondo dentro de 24 horas</p>
                </div>
            </motion.div>
        </section>
    )
}
