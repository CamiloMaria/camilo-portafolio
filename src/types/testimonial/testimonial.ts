
// Testimonial type definition
export interface Testimonial {
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
