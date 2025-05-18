import { Mail } from "lucide-react";
import { ContactItem } from "@/types/contact";

// Social media and contact data
const contactData: ContactItem[] = [
    {
        name: "LinkedIn",
        icon: "/socials/linkedin.svg",
        useImage: true,
        url: "https://linkedin.com/in/camilo-maria",
        username: "camilo-maria",
        color: "bg-[#0077B5]",
        hoverColor: "hover:bg-[#0077B5]/90",
        textColor: "text-[#0077B5]",
    },
    {
        name: "Instagram",
        icon: "/socials/instagram.svg",
        useImage: true,
        url: "https://instagram.com/camilo._.jose",
        username: "@camilo._.jose",
        color: "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]",
        hoverColor: "hover:from-[#833AB4]/90 hover:via-[#FD1D1D]/90 hover:to-[#FCAF45]/90",
        textColor: "text-transparent bg-clip-text bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]",
    },
    {
        name: "GitHub",
        icon: "/socials/github.svg",
        useImage: true,
        url: "https://github.com/CamiloMaria",
        username: "CamiloMaria",
        color: "bg-[#333333]",
        hoverColor: "hover:bg-[#333333]/90",
        textColor: "text-[#333333]",
    },
    {
        name: "WhatsApp USA",
        icon: "/socials/whatsapp.svg",
        useImage: true,
        url: "https://wa.me/14013281867",
        username: "+1 (401) 328-1867 (SMS)",
        color: "bg-[#25D366]",
        hoverColor: "hover:bg-[#25D366]/90",
        textColor: "text-[#25D366]",
    },
    {
        name: "WhatsApp RD",
        icon: "/socials/whatsapp.svg",
        useImage: true,
        url: "https://wa.me/18096028624",
        username: "+1 (809) 602-8624 (SMS & Llamadas)",
        color: "bg-[#25D366]",
        hoverColor: "hover:bg-[#25D366]/90",
        textColor: "text-[#25D366]",
    },
    {
        name: "Email",
        icon: <Mail className="w-5 h-5" />,
        url: "mailto:camilo_jose08@hotmail.com",
        username: "camilo_jose08@hotmail.com",
        color: "bg-purple-600",
        hoverColor: "hover:bg-purple-600/90",
        textColor: "text-purple-600",
    },
]

export default contactData;