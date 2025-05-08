import { Project } from "@/types/project";

const projects: Project[] = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce platform with payment integration, user authentication, and admin dashboard.",
        longDescription:
            "This comprehensive e-commerce solution features a responsive design, secure payment processing through Stripe, user authentication with role-based access control, and a powerful admin dashboard for inventory management. The platform includes product search with filters, wishlist functionality, order tracking, and detailed analytics for store owners.",
        image: "/placeholder.svg?height=400&width=600",
        gallery: [
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
        ],
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Supabase"],
        demoUrl: "#",
        githubUrl: "#",
        featured: true,
        category: "web",
    },
    {
        id: 2,
        title: "AI Content Generator",
        description: "An AI-powered application that generates marketing content based on user prompts and preferences.",
        longDescription:
            "This AI-powered content generation tool helps marketers create compelling copy for various channels. It leverages advanced language models to generate blog posts, social media content, email campaigns, and product descriptions. The application includes tone adjustment, keyword optimization, and content length controls to ensure the output matches brand guidelines.",
        image: "/placeholder.svg?height=400&width=600",
        gallery: [
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
        ],
        tags: ["React", "Node.js", "OpenAI API", "MongoDB", "Express"],
        demoUrl: "#",
        githubUrl: "#",
        featured: true,
        category: "ai",
    },
    {
        id: 3,
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates and team collaboration features.",
        longDescription:
            "This task management solution enables teams to collaborate efficiently with real-time updates. Features include customizable kanban boards, task assignments with priority levels, deadline tracking with notifications, file attachments, and comment threads. The app also provides time tracking, reporting tools, and integrations with popular calendar and communication platforms.",
        image: "/placeholder.svg?height=400&width=600",
        gallery: [
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
        ],
        tags: ["React", "Firebase", "Material UI", "Redux", "PWA"],
        demoUrl: "#",
        githubUrl: "#",
        featured: false,
        category: "web",
    },
    {
        id: 4,
        title: "Fitness Tracker",
        description: "A mobile-first fitness tracking application that monitors workouts, nutrition, and progress.",
        longDescription:
            "This comprehensive fitness companion helps users achieve their health goals by tracking workouts, nutrition, and overall progress. The app features custom workout creation, exercise libraries with video demonstrations, nutrition logging with barcode scanning, body measurement tracking, and progress visualization through charts and graphs. It also includes social features for sharing achievements and competing with friends.",
        image: "/placeholder.svg?height=400&width=600",
        gallery: [
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
        ],
        tags: ["React Native", "TypeScript", "GraphQL", "AWS Amplify"],
        demoUrl: "#",
        githubUrl: "#",
        featured: false,
        category: "mobile",
    },
    {
        id: 5,
        title: "Portfolio Website",
        description: "A modern portfolio website with animations, dark mode, and responsive design.",
        longDescription:
            "This portfolio website showcases creative work through a modern, responsive design with smooth animations and transitions. It features a customizable dark/light mode, project filtering by category, detailed project case studies, integrated contact form, and performance optimization for fast loading. The site is built with accessibility in mind and includes SEO best practices for better visibility.",
        image: "/placeholder.svg?height=400&width=600",
        gallery: [
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
        ],
        tags: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
        demoUrl: "#",
        githubUrl: "#",
        featured: false,
        category: "design",
    },
    {
        id: 6,
        title: "Weather Dashboard",
        description:
            "A weather dashboard that displays current and forecasted weather data with interactive visualizations.",
        longDescription:
            "This weather dashboard provides comprehensive meteorological data through intuitive visualizations. It features current conditions, hourly and 7-day forecasts, interactive maps with radar overlays, severe weather alerts, and historical weather data comparison. Users can save multiple locations, view air quality information, and access sunrise/sunset times along with moon phases.",
        image: "/placeholder.svg?height=400&width=600",
        gallery: [
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
        ],
        tags: ["JavaScript", "Chart.js", "Weather API", "CSS3", "HTML5"],
        demoUrl: "#",
        githubUrl: "#",
        featured: false,
        category: "web",
    },
]

export default projects;