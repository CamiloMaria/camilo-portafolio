import { Star } from "lucide-react"

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

export default RatingStars;