"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

// Testimonial type definition
type Testimonial = {
    id: number
    name: string
    position: string
    company: string
    category: "tech" | "design" | "ecommerce" | "marketing" | "startup"
    rating: number
    text: string
    highlight: string
    color: string
    accentColor: string
    shape: "circle" | "square" | "triangle" | "hexagon" | "wave"
    featured?: boolean
}

// Sample testimonials data
const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Sarah Johnson",
        position: "CEO",
        company: "TechVision Inc.",
        category: "tech",
        rating: 5,
        text: "Working with Camilo was an absolute pleasure. His technical expertise and creative approach to problem-solving resulted in a product that exceeded our expectations. He was responsive, professional, and delivered on time.",
        highlight: "exceeded our expectations",
        color: "from-purple-500 to-indigo-600",
        accentColor: "rgba(139, 92, 246, 0.8)",
        shape: "hexagon",
        featured: true,
    },
    {
        id: 2,
        name: "Michael Chen",
        position: "Product Manager",
        company: "Innovate Solutions",
        category: "startup",
        rating: 5,
        text: "Camilo's attention to detail and commitment to quality is unmatched. He took our vague concept and transformed it into a beautiful, functional website that perfectly represents our brand. I highly recommend his services.",
        highlight: "attention to detail",
        color: "from-pink-500 to-rose-600",
        accentColor: "rgba(236, 72, 153, 0.8)",
        shape: "circle",
        featured: false,
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        position: "Marketing Director",
        company: "Global Brands",
        category: "marketing",
        rating: 4,
        text: "We hired Camilo to redesign our e-commerce platform, and the results were outstanding. The new site is not only visually stunning but also performs exceptionally well. Our conversion rates have increased by 40% since the launch.",
        highlight: "conversion rates increased by 40%",
        color: "from-amber-500 to-orange-600",
        accentColor: "rgba(245, 158, 11, 0.8)",
        shape: "wave",
        featured: false,
    },
    {
        id: 4,
        name: "David Kim",
        position: "Founder",
        company: "StartUp Ventures",
        category: "startup",
        rating: 5,
        text: "As a startup founder with limited technical knowledge, I needed someone who could guide me through the development process. Camilo was patient, educational, and delivered a product that helped us secure our next round of funding.",
        highlight: "helped us secure our next round of funding",
        color: "from-emerald-500 to-teal-600",
        accentColor: "rgba(16, 185, 129, 0.8)",
        shape: "triangle",
        featured: false,
    },
    {
        id: 5,
        name: "Olivia Martinez",
        position: "UX Director",
        company: "Design Forward",
        category: "design",
        rating: 5,
        text: "I've worked with many developers, but Camilo stands out for his ability to translate design concepts into flawless code. His understanding of both design principles and technical implementation makes him a rare and valuable talent.",
        highlight: "translate design concepts into flawless code",
        color: "from-blue-500 to-cyan-600",
        accentColor: "rgba(59, 130, 246, 0.8)",
        shape: "square",
        featured: false,
    },
    {
        id: 6,
        name: "Thomas Wright",
        position: "E-Commerce Manager",
        company: "Retail Innovations",
        category: "ecommerce",
        rating: 5,
        text: "The custom e-commerce solution Camilo built for us has completely transformed our online business. The intuitive interface and seamless checkout process have significantly reduced cart abandonment and improved customer satisfaction.",
        highlight: "completely transformed our online business",
        color: "from-violet-500 to-purple-600",
        accentColor: "rgba(139, 92, 246, 0.8)",
        shape: "hexagon",
        featured: false,
    },
]

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

// Rating stars component
const RatingStars = ({ rating }: { rating: number }) => {
    return (
        <div className="flex">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`} />
            ))}
        </div>
    )
}

// Custom shape component
const ShapeElement = ({
    shape,
    color,
    className,
}: { shape: Testimonial["shape"]; color: string; className?: string }) => {
    switch (shape) {
        case "circle":
            return <div className={`rounded-full ${className}`} style={{ background: color }} />
        case "square":
            return <div className={`rounded-lg ${className}`} style={{ background: color }} />
        case "triangle":
            return (
                <div className={`${className} relative`}>
                    <div
                        style={{
                            width: "0",
                            height: "0",
                            borderLeft: "25px solid transparent",
                            borderRight: "25px solid transparent",
                            borderBottom: `50px solid ${color}`,
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    />
                </div>
            )
        case "hexagon":
            return (
                <div className={`${className} relative`}>
                    <div
                        style={{
                            width: "50px",
                            height: "30px",
                            background: color,
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                        }}
                    />
                </div>
            )
        case "wave":
            return (
                <div className={`${className} relative overflow-hidden`}>
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "0",
                            right: "0",
                            height: "20px",
                            background: color,
                            transform: "translateY(-50%)",
                            borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            bottom: "50%",
                            left: "0",
                            right: "0",
                            height: "20px",
                            background: color,
                            borderRadius: "0 0 50% 50% / 0 0 100% 100%",
                        }}
                    />
                </div>
            )
        default:
            return <div className={className} style={{ background: color }} />
    }
}

// Custom quote mark component
const QuoteMark = ({ color, isClosing = false }: { color: string; isClosing?: boolean }) => {
    return (
        <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: isClosing ? "rotate(180deg)" : "none" }}
            className={isClosing ? "ml-auto" : ""}
        >
            <path
                d="M12.5 25H7.5C6.83696 25 6.20107 24.7366 5.73223 24.2678C5.26339 23.7989 5 23.163 5 22.5V17.5C5 16.837 5.26339 16.2011 5.73223 15.7322C6.20107 15.2634 6.83696 15 7.5 15H12.5C13.163 15 13.7989 15.2634 14.2678 15.7322C14.7366 16.2011 15 16.837 15 17.5V22.5C15 25.5 12.5 30 10 32.5M32.5 25H27.5C26.837 25 26.2011 24.7366 25.7322 24.2678C25.2634 23.7989 25 23.163 25 22.5V17.5C25 16.837 25.2634 16.2011 25.7322 15.7322C26.2011 15.2634 26.837 15 27.5 15H32.5C33.163 15 33.7989 15.2634 34.2678 15.7322C34.7366 16.2011 35 16.837 35 17.5V22.5C35 25.5 32.5 30 30 32.5"
                stroke={color}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

// Pattern background component
const PatternBackground = ({ index }: { index: number }) => {
    const patterns = [
        "radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.05) 0%, transparent 8%), radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.05) 0%, transparent 8%)",
        "linear-gradient(45deg, rgba(255, 255, 255, 0.02) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.02) 50%, rgba(255, 255, 255, 0.02) 75%, transparent 75%, transparent)",
        "radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.03) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.03) 0%, transparent 20%)",
        "linear-gradient(135deg, rgba(255, 255, 255, 0.02) 25%, transparent 25%), linear-gradient(225deg, rgba(255, 255, 255, 0.02) 25%, transparent 25%), linear-gradient(315deg, rgba(255, 255, 255, 0.02) 25%, transparent 25%), linear-gradient(45deg, rgba(255, 255, 255, 0.02) 25%, transparent 25%)",
        "repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.01) 0, rgba(255, 255, 255, 0.01) 1px, transparent 1px, transparent 4px)",
        "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 40%)",
    ]

    return (
        <div
            className="absolute inset-0 opacity-30 mix-blend-overlay"
            style={{
                backgroundImage: patterns[index % patterns.length],
                backgroundSize: index % 2 === 0 ? "30px 30px" : "20px 20px",
            }}
        />
    )
}

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
            }}
            transition={{ duration: 0.5 }}
            className={`bg-gray-800/50 backdrop-blur-sm rounded-xl border ${isActive ? "border-purple-500/30 shadow-lg shadow-purple-500/10" : "border-gray-700/50"
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

            {/* Abstract shape element */}
            <div className="absolute top-6 right-6 w-16 h-16 opacity-20">
                <ShapeElement shape={testimonial.shape} color={testimonial.accentColor} className="w-full h-full" />
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
                    </div>
                    <div>
                        <RatingStars rating={testimonial.rating} />
                    </div>
                </div>
            </div>

            {testimonial.featured && (
                <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-xs font-bold">
                    Featured
                </div>
            )}
        </motion.div>
    )
}

// Featured testimonial component
const FeaturedTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
    // Function to highlight the key phrase with animation for featured testimonial
    const highlightText = (text: string, highlight: string) => {
        if (!highlight) return text

        const parts = text.split(new RegExp(`(${highlight})`, "gi"))
        return (
            <>
                {parts.map((part, i) =>
                    part.toLowerCase() === highlight.toLowerCase() ? (
                        <AnimatedHighlight
                            key={i}
                            text={part}
                            color={testimonial.accentColor}
                            isFeatured={true}
                        />
                    ) : (
                        <span key={i}>{part}</span>
                    ),
                )}
            </>
        )
    }

    return (
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 p-8 shadow-xl relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-20">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.05) 0%, transparent 8%), radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.05) 0%, transparent 8%)",
                        backgroundSize: "30px 30px",
                    }}
                />
            </div>

            {/* Decorative elements */}
            <div
                className={`absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br ${testimonial.color} opacity-10 blur-3xl`}
            />
            <div
                className={`absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-br ${testimonial.color} opacity-10 blur-3xl`}
            />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
                {/* Left column - Visual representation */}
                <div className="lg:col-span-2 flex flex-col items-center justify-center">
                    <div className="relative w-full max-w-xs aspect-square flex items-center justify-center mb-6">
                        {/* Abstract shape background */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-10">
                            <ShapeElement shape={testimonial.shape} color={testimonial.accentColor} className="w-4/5 h-4/5" />
                        </div>

                        {/* Client name as large typographic element */}
                        <div className="relative z-10 text-center">
                            <h3
                                className={`text-6xl font-extrabold bg-gradient-to-r ${testimonial.color} text-transparent bg-clip-text`}
                            >
                                {testimonial.name.charAt(0)}
                            </h3>
                            <div className={`h-1 w-16 mx-auto mt-2 rounded-full bg-gradient-to-r ${testimonial.color}`}></div>
                        </div>
                    </div>

                    <div className="text-center">
                        <h4 className="text-2xl font-bold text-white mb-1">{testimonial.name}</h4>
                        <p
                            className={`bg-gradient-to-r ${testimonial.color} text-transparent bg-clip-text font-medium text-lg mb-2`}
                        >
                            {testimonial.position}
                        </p>
                        <p className="text-gray-400">{testimonial.company}</p>
                        <div className="flex justify-center mt-3 scale-125">
                            <RatingStars rating={testimonial.rating} />
                        </div>
                    </div>
                </div>

                {/* Right column - Testimonial text */}
                <div className="lg:col-span-3 flex flex-col justify-center">
                    <div className="relative">
                        <QuoteMark color={testimonial.accentColor} />
                        <p className="text-gray-300 text-xl italic leading-relaxed my-6">
                            {highlightText(testimonial.text, testimonial.highlight)}
                        </p>
                        <QuoteMark color={testimonial.accentColor} isClosing />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0)
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
    }

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + carouselTestimonials.length) % carouselTestimonials.length)
    }

    const goToTestimonial = (index: number) => {
        setActiveIndex(index)
    }

    return (
        <section
            id="testimonials"
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
                            Client{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 animate-gradient bg-size-200">
                                Testimonials
                            </span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
                            Don&apos;t just take my word for it. Here&apos;s what my clients have to say about working with me.
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
                                <TestimonialCard
                                    key={testimonial.id}
                                    testimonial={testimonial}
                                    index={index}
                                    isActive={
                                        index === activeIndex ||
                                        index === (activeIndex + 1) % carouselTestimonials.length ||
                                        index === (activeIndex + 2) % carouselTestimonials.length
                                    }
                                />
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
                        <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Our Success Stories?</h3>
                        <p className="text-gray-300 mb-6">
                            Let&apos;s create something amazing that will have you raving about the results too.
                        </p>
                        <div className="flex justify-center">
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium transform transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                            >
                                Start Your Project
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}
