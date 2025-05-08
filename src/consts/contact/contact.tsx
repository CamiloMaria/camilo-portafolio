import { Linkedin, Instagram, Github, MessageCircle, Mail } from "lucide-react";

// Social media and contact data
const contactData = [
    {
        name: "LinkedIn",
        icon: <Linkedin className="w-5 h-5" />,
        url: "https://linkedin.com/in/camilojosemaria",
        username: "camilojosemaria",
        color: "bg-[#0077B5]",
        hoverColor: "hover:bg-[#0077B5]/90",
        textColor: "text-[#0077B5]",
    },
    {
        name: "Instagram",
        icon: <Instagram className="w-5 h-5" />,
        url: "https://instagram.com/camilojosemaria",
        username: "@camilojosemaria",
        color: "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]",
        hoverColor: "hover:from-[#833AB4]/90 hover:via-[#FD1D1D]/90 hover:to-[#FCAF45]/90",
        textColor: "text-transparent bg-clip-text bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]",
    },
    {
        name: "GitHub",
        icon: <Github className="w-5 h-5" />,
        url: "https://github.com/camilojosemaria",
        username: "camilojosemaria",
        color: "bg-[#333333]",
        hoverColor: "hover:bg-[#333333]/90",
        textColor: "text-[#333333]",
    },
    {
        name: "WhatsApp",
        icon: <MessageCircle className="w-5 h-5" />,
        url: "https://wa.me/1234567890",
        username: "+1 (234) 567-890",
        color: "bg-[#25D366]",
        hoverColor: "hover:bg-[#25D366]/90",
        textColor: "text-[#25D366]",
    },
    {
        name: "Email",
        icon: <Mail className="w-5 h-5" />,
        url: "mailto:camilo@example.com",
        username: "camilo@example.com",
        color: "bg-purple-600",
        hoverColor: "hover:bg-purple-600/90",
        textColor: "text-purple-600",
    },
]

export default contactData;