import { Interest } from "@/types/about";
import { BookOpen, Camera, Code, Mountain, Music } from "lucide-react";
import { MapPin } from "lucide-react";

const interests: Interest[] = [
    { name: "Traveling", icon: <MapPin className="w-5 h-5" /> },
    { name: "Photography", icon: <Camera className="w-5 h-5" /> },
    { name: "Reading", icon: <BookOpen className="w-5 h-5" /> },
    { name: "Hiking", icon: <Mountain className="w-5 h-5" /> },
    { name: "Coding", icon: <Code className="w-5 h-5" /> },
    { name: "Music", icon: <Music className="w-5 h-5" /> },
]

export default interests;