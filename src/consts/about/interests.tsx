import { Interest } from "@/types/about";
import { BookOpen, Camera, Code, Dumbbell, Heart, MapPin } from "lucide-react";

const interests: Interest[] = [
    { name: "Viajar", icon: <MapPin className="w-5 h-5" />, description: "Apasionado por descubrir nuevas culturas, gastronomías y paisajes. Sueño con visitar todos los países posibles." },
    { name: "Gaming", icon: <Camera className="w-5 h-5" />, description: "Entusiasta de videojuegos de estrategia y aventuras. Disfruto tanto de títulos indie como AAA, especialmente aquellos con narrativas inmersivas." },
    { name: "Deporte", icon: <Dumbbell className="w-5 h-5" />, description: "Practico regularmente gimnasio y futbol. El deporte es mi forma de mantener equilibrio entre la mente y el cuerpo." },
    { name: "Dormir", icon: <BookOpen className="w-5 h-5" />, description: "Defensor del descanso de calidad como pilar fundamental para la productividad y creatividad. Considero que dormir es el mejor descubrimiento de la humanidad y mi actividad favorita cuando no estoy programando." },
    { name: "Codear", icon: <Code className="w-5 h-5" />, description: "Desarrollo proyectos personales para explorar nuevas tecnologías. Contribuyo a repositorios open source y disfruto resolviendo problemas complejos mediante código." },
    { name: "Voluntariado", icon: <Heart className="w-5 h-5" />, description: "Comprometido con ayudar a los más necesitados a través de proyectos comunitarios. Creo firmemente que con la ayuda de la tecnología podemos ayudar mucho más de lo que creemos y transformar vidas y comunidades enteras." },
]

export default interests;