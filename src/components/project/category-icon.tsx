import { Project } from "@/types/project"
import { Code, Layers, Eye, Tag } from "lucide-react"

export default function CategoryIcon({ category }: { category: Project["category"] }) {
    switch (category) {
        case "web":
            return <Code className="w-4 h-4" />
        case "mobile":
            return <Layers className="w-4 h-4" />
        case "design":
            return <Eye className="w-4 h-4" />
        case "ai":
            return (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 2L2 7L12 12L22 7L12 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M2 17L12 22L22 17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M2 12L12 17L22 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        default:
            return <Tag className="w-4 h-4" />
    }
}
