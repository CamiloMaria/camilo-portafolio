import { Project } from "@/types/project";

const projects: Project[] = [
    {
        id: 1,
        title: "Dashboard E-Commerce Plaza Lama",
        description: "Dashboard para e-commerce desarrollado desde cero, reemplazando una versión antigua en Angular con mejoras significativas de rendimiento.",
        longDescription:
            "Este dashboard para e-commerce fue creado completamente desde cero para Plaza Lama, sustituyendo una versión anterior desarrollada en una versión obsoleta de Angular. El proyecto mejoró el rendimiento en más de un 200% y automatizó numerosos procesos. Implementado con las mejores prácticas del framework, cuenta con una interfaz responsiva, gestión de inventario, y utiliza mocks para las llamadas a la API durante el desarrollo.",
        image: "/projects/frontend-1.webp",
        gallery: [
            "/projects/frontend-1.webp",
            "/projects/frontend-2.webp",
            "/projects/frontend-3.webp",
            "/projects/frontend-4.webp",
            "/projects/frontend-5.webp",
        ],
        tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Tanstack", "Radix", "Zod"],
        demoUrl: "https://cm-dashboard-frontend.netlify.app/",
        githubUrl: "https://github.com/CamiloMaria/dashboard-frontend",
        featured: true,
        category: "frontend",
    },
    {
        id: 2,
        title: "Backend Dashboard E-Commerce",
        description: "API backend desarrollada con NestJS para soportar todas las funcionalidades del dashboard e-commerce de Plaza Lama.",
        longDescription:
            "Este proyecto constituye el backend que conecta toda la lógica del dashboard frontend para Plaza Lama. Desarrollado con las mejores prácticas de NestJS, implementa una arquitectura robusta para gestionar la autenticación, autorización y todas las operaciones de negocio. Utiliza TypeORM como ORM para la gestión de base de datos, JWT para la autenticación, Winston para logging, y está completamente probado con Jest.",
        image: "/placeholder.svg?height=400&width=600",
        gallery: [
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
        ],
        tags: ["NestJS", "TypeScript", "Node.js", "TypeORM", "JWT", "RxJS", "Jest"],
        githubUrl: "https://github.com/CamiloMaria/dashboard-backend",
        featured: true,
        category: "backend",
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
        category: "frontend",
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
        category: "frontend",
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
        category: "frontend",
    },
]

export default projects;