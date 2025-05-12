import { Testimonial } from "@/types/testimonial"
import { AnimatedHighlight, RatingStars, ShapeElement, QuoteMark } from "."

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

export default FeaturedTestimonial;