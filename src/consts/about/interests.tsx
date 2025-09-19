import { Interest } from "@/types/about";
import { BookOpen, Camera, Code, Dumbbell, Heart, MapPin } from "lucide-react";

const interests: Interest[] = [
    { name: "Travel", icon: <MapPin className="w-5 h-5" />, description: "Passionate about discovering new cultures, cuisines, and landscapes. I dream of visiting as many countries as possible." },
    { name: "Gaming", icon: <Camera className="w-5 h-5" />, description: "Strategy and adventure video game enthusiast. I enjoy both indie and AAA titles, especially those with immersive narratives." },
    { name: "Sports", icon: <Dumbbell className="w-5 h-5" />, description: "I regularly practice gym and soccer. Sports are my way of maintaining balance between mind and body." },
    { name: "Sleep", icon: <BookOpen className="w-5 h-5" />, description: "Advocate for quality rest as a fundamental pillar for productivity and creativity. I consider sleep to be humanity's greatest discovery and my favorite activity when I'm not programming." },
    { name: "Coding", icon: <Code className="w-5 h-5" />, description: "I develop personal projects to explore new technologies. I contribute to open source repositories and enjoy solving complex problems through code." },
    { name: "Volunteering", icon: <Heart className="w-5 h-5" />, description: "Committed to helping those most in need through community projects. I firmly believe that with the help of technology we can help much more than we think and transform entire lives and communities." },
]

export default interests;