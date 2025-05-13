"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { testimonials } from "@/consts/testimonial"
import { TestimonialCard, FeaturedTestimonial } from "@/components/testimonial"

export default function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
    const sectionRef = useRef<HTMLDivElement>(null)
    const carouselRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
    const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [100, 0, 0, 100])
    const springY = useSpring(y, { stiffness: 100, damping: 20 })

    // Find featured testimonial
    const featuredTestimonial = testimonials.find((t) => t.featured) || testimonials[0]

    // Filter out featured testimonial from carousel
    const carouselTestimonials = testimonials.filter((t) => t.id !== featuredTestimonial.id)

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % carouselTestimonials.length)
        setSelectedIndex(null)
    }

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + carouselTestimonials.length) % carouselTestimonials.length)
        setSelectedIndex(null)
    }

    const goToTestimonial = (index: number) => {
        setActiveIndex(index)
        setSelectedIndex(null)
    }

    const handleCardClick = (index: number) => {
        setSelectedIndex(index === selectedIndex ? null : index)
    }

    // Function to determine if a card is active
    const isCardActive = (index: number) => {
        // If a card is selected, only it should be active
        if (selectedIndex !== null) {
            return index === selectedIndex
        }

        // Otherwise only highlight the current active card
        return index === activeIndex
    }

    return (
        <section
            id="testimonios"
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
                            Testimonios de{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 animate-gradient bg-size-200">
                                Clientes
                            </span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
                            No solo tomes mi palabra. Esto es lo que mis clientes tienen que decir sobre trabajar conmigo.
                        </p>
                    </motion.div>
                </div>

                {/* Featured Testimonial */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <FeaturedTestimonial testimonial={featuredTestimonial} />
                    </motion.div>
                </div>

                {/* Testimonials Carousel */}
                <div className="relative" ref={carouselRef}>
                    <div className="overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {carouselTestimonials.map((testimonial, index) => (
                                <div
                                    key={testimonial.id}
                                    onClick={() => handleCardClick(index)}
                                    className="cursor-pointer overflow-hidden"
                                >
                                    <TestimonialCard
                                        testimonial={testimonial}
                                        index={index}
                                        isActive={isCardActive(index)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex justify-center items-center mt-10 gap-4">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={prevTestimonial}
                            className="p-3 rounded-full bg-gray-800 text-white hover:bg-purple-600 transition-colors duration-300"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </motion.button>

                        <div className="flex gap-2">
                            {carouselTestimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToTestimonial(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-purple-500 w-6" : "bg-gray-600 hover:bg-gray-500"
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={nextTestimonial}
                            className="p-3 rounded-full bg-gray-800 text-white hover:bg-purple-600 transition-colors duration-300"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </motion.button>
                    </div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 text-center"
                >
                    <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/30 shadow-xl max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-4">¿Listo para unirte a nuestras historias de éxito?</h3>
                        <p className="text-gray-300 mb-6">
                            Creemos juntos algo increíble que te haga sentir orgulloso de los resultados.
                        </p>
                        <div className="flex justify-center">
                            <motion.a
                                href="#contacto"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium transform transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                            >
                                Iniciar Tu Proyecto
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}
