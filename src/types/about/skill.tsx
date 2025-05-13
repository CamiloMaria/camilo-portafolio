import { Code, Wrench, Server, Globe, Book, Cloud } from "lucide-react";

export type SkillCategory = "all" | "frontend" | "backend" | "devops" | "herramientas" | "idiomas" | "otras";

export interface Skill {
    name: string;
    level: number;
    category: SkillCategory;
    description: string
    yearsExperience?: number
};

export const SKILL_CATEGORIES: SkillCategory[] = ["frontend", "backend", "devops", "herramientas", "idiomas", "otras"];

export const getCategoryIcon = (category: string) => {
    switch (category) {
        case "frontend":
            return <Code className="w-full h-full" />
        case "backend":
            return <Server className="w-full h-full" />
        case "devops":
            return <Cloud className="w-full h-full" />
        case "herramientas":
            return <Wrench className="w-full h-full" />
        case "idiomas":
            return <Globe className="w-full h-full" />
        default:
            return <Book className="w-full h-full" />
    }
}