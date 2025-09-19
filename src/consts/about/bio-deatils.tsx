import { BioDetail } from "@/types/about";
import { ArrowRight, Sparkles } from "lucide-react";

const bioDetails: BioDetail[] = [
    {
        title: "Background",
        content:
            "I'm Camilo, a passionate Software Engineer with experience in building modern applications. With over 4 years of experience, I specialize in creating responsive and user-friendly interfaces using cutting-edge technologies.",
        icon: <Sparkles className="w-5 h-5" />,
    },
    {
        title: "Journey",
        content:
            "My software development journey began during my university years, where I discovered my passion for creating digital experiences that solve real-world problems. Since then, I've worked with various companies to deliver high-quality web solutions.",
        icon: <ArrowRight className="w-5 h-5" />,
    },
    {
        title: "Philosophy",
        content:
            "I believe in writing clean and maintainable code, and staying updated with the latest industry trends and best practices. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying my hobbies.",
        icon: <Sparkles className="w-5 h-5" />,
    },
]

export default bioDetails;