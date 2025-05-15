import { Project } from "@/types/project"
import {
    Smartphone,
    Server,
    Tag,
    Globe,
} from "lucide-react"

export default function CategoryIcon({ category }: { category: Project["category"] }) {
    switch (category) {
        case "frontend":
            return <Globe className="w-4 h-4" />
        case "mobile":
            return <Smartphone className="w-4 h-4" />
        case "backend":
            return <Server className="w-4 h-4" />
        default:
            return <Tag className="w-4 h-4" />
    }
}
