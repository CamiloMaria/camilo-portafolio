import { BioDetail } from "@/types/about";
import { ArrowRight, Sparkles } from "lucide-react";

const bioDetails: BioDetail[] = [
    {
        title: "Antecedentes",
        content:
            "Soy Camilo, un Ingeniero de Software apasionado con experiencia en la construcción de aplicaciones modernas. Con más de 4 años de experiencia, me especializo en crear interfaces responsivas y amigables utilizando tecnologías de vanguardia.",
        icon: <Sparkles className="w-5 h-5" />,
    },
    {
        title: "Trayectoria",
        content:
            "Mi camino en el desarrollo de software comenzó durante mis años universitarios, donde descubrí mi pasión por crear experiencias digitales que resuelven problemas del mundo real. Desde entonces, he trabajado con varias empresas para ofrecer soluciones web de alta calidad.",
        icon: <ArrowRight className="w-5 h-5" />,
    },
    {
        title: "Filosofía",
        content:
            "Creo en escribir código limpio y mantenible, y en mantenerme actualizado con las últimas tendencias y mejores prácticas de la industria. Cuando no estoy programando, puedes encontrarme explorando nuevas tecnologías, contribuyendo a proyectos de código abierto o disfrutando de mis pasatiempos.",
        icon: <Sparkles className="w-5 h-5" />,
    },
]

export default bioDetails;