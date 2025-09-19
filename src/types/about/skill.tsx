import { Code, Wrench, Server, Globe, Book, Cloud } from "lucide-react";

export type SkillCategory = "all" | "frontend" | "backend" | "devops" | "tools" | "languages" | "other";

export interface Skill {
    name: string;
    level: number;
    category: SkillCategory;
    description: string
    yearsExperience?: number
};

export const SKILL_CATEGORIES: SkillCategory[] = ["frontend", "backend", "devops", "tools", "languages", "other"];

export const getCategoryIcon = (category: string) => {
    switch (category) {
        case "frontend":
            return <Code className="w-full h-full" />
        case "backend":
            return <Server className="w-full h-full" />
        case "devops":
            return <Cloud className="w-full h-full" />
        case "tools":
            return <Wrench className="w-full h-full" />
        case "languages":
            return <Globe className="w-full h-full" />
        default:
            return <Book className="w-full h-full" />
    }
}