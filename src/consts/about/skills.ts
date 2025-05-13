import { Skill, SkillCategory, SKILL_CATEGORIES } from "@/types/about";

// Typed skills map object grouped by category
const skillsByCategory: Record<SkillCategory, Skill[]> = {
    all: [],
    idiomas: [
        { name: "Español (Nativo)", level: 100, category: "idiomas", description: "Dominio nativo del idioma español con excelente comunicación escrita y verbal." },
        { name: "Inglés (C1)", level: 83, category: "idiomas", description: "Nivel avanzado de inglés con capacidad para comunicación profesional fluida." },
    ],
    
    herramientas: [
        { name: "Git", level: 100, category: "herramientas", description: "Control de versiones avanzado y gestión de repositorios.", yearsExperience: 5 },
        { name: "GitHub", level: 100, category: "herramientas", description: "Colaboración en proyectos, gestión de issues y pull requests.", yearsExperience: 5 },
        { name: "GitLab", level: 100, category: "herramientas", description: "Gestión completa de repositorios y CI/CD integrado.", yearsExperience: 4 },
        { name: "Postman", level: 100, category: "herramientas", description: "Pruebas y documentación de APIs REST y GraphQL.", yearsExperience: 4 },
        { name: "Jira", level: 100, category: "herramientas", description: "Gestión ágil de proyectos y seguimiento de tareas.", yearsExperience: 4 },
        { name: "Notion", level: 100, category: "herramientas", description: "Documentación de proyectos y gestión de conocimiento.", yearsExperience: 3 },
        { name: "Slack", level: 80, category: "herramientas", description: "Comunicación efectiva en equipos de desarrollo.", yearsExperience: 4 },
        { name: "Figma", level: 60, category: "herramientas", description: "Diseño de interfaces y colaboración con equipos de diseño.", yearsExperience: 3 },
    ],
    
    devops: [
        { name: "PM2", level: 100, category: "devops", description: "Gestión avanzada de procesos Node.js en producción.", yearsExperience: 4 },
        { name: "Docker", level: 70, category: "devops", description: "Containerización de aplicaciones y servicios.", yearsExperience: 3 },
        { name: "Cloudflare", level: 70, category: "devops", description: "Configuración de CDN, DNS y seguridad web.", yearsExperience: 3 },
        { name: "GitLab CI/CD", level: 60, category: "devops", description: "Automatización de pipelines de integración y despliegue.", yearsExperience: 3 },
        { name: "Nginx", level: 50, category: "devops", description: "Configuración de servidores web y proxy inverso.", yearsExperience: 3 },
    ],
    
    frontend: [
        { name: "CSS", level: 100, category: "frontend", description: "Estilos avanzados, animaciones y layouts responsivos.", yearsExperience: 6 },
        { name: "HTML", level: 100, category: "frontend", description: "Estructuración semántica y accesible de contenido web.", yearsExperience: 6 },
        { name: "Tailwind CSS", level: 100, category: "frontend", description: "Desarrollo rápido con utilidades CSS y componentes personalizados.", yearsExperience: 4 },
        { name: "SASS", level: 100, category: "frontend", description: "Preprocesador CSS para estilos mantenibles y modulares.", yearsExperience: 5 },
        { name: "Astro", level: 100, category: "frontend", description: "Creación de sitios web rápidos con renderizado parcial.", yearsExperience: 3 },
        { name: "React", level: 100, category: "frontend", description: "Desarrollo de interfaces dinámicas con componentes reutilizables.", yearsExperience: 5 },
        { name: "Next.js", level: 85, category: "frontend", description: "Framework React con SSR, SSG y optimizaciones integradas.", yearsExperience: 4 },
        { name: "Angular", level: 60, category: "frontend", description: "Desarrollo de aplicaciones empresariales con TypeScript.", yearsExperience: 3 },
        { name: "Vue.js", level: 40, category: "frontend", description: "Framework progresivo para interfaces de usuario.", yearsExperience: 3 },
        { name: "Svelte", level: 30, category: "frontend", description: "Compilador de componentes con enfoque en rendimiento.", yearsExperience: 3 },
    ],
    
    backend: [
        { name: "Node.js", level: 100, category: "backend", description: "Desarrollo de servidores y APIs con JavaScript.", yearsExperience: 5 },
        { name: "Express", level: 100, category: "backend", description: "Framework minimalista para APIs REST y aplicaciones web.", yearsExperience: 5 },
        { name: "NestJs", level: 100, category: "backend", description: "Framework TypeScript con arquitectura modular y escalable.", yearsExperience: 4 },
        { name: "MongoDB", level: 100, category: "backend", description: "Base de datos NoSQL con modelado flexible de documentos.", yearsExperience: 5 },
        { name: "PostgreSQL", level: 100, category: "backend", description: "Base de datos relacional robusta con extensiones avanzadas.", yearsExperience: 4 },
        { name: "MySQL", level: 100, category: "backend", description: "Sistema de gestión de bases de datos relacionales.", yearsExperience: 5 },
        { name: "Microservices", level: 100, category: "backend", description: "Arquitectura distribuida para aplicaciones escalables.", yearsExperience: 4 },
        { name: "Redis", level: 80, category: "backend", description: "Almacenamiento en memoria para caché y mensajería.", yearsExperience: 3 },
        { name: "AWS", level: 80, category: "backend", description: "Servicios cloud para despliegue y escalado de aplicaciones.", yearsExperience: 4 },
        { name: "Azure", level: 80, category: "backend", description: "Plataforma cloud de Microsoft para aplicaciones empresariales.", yearsExperience: 3 },
        { name: "Google Cloud", level: 60, category: "backend", description: "Servicios cloud con enfoque en machine learning y big data.", yearsExperience: 3 },
    ],
    
    otras: [
        { name: "JavaScript", level: 100, category: "otras", description: "Programación frontend y backend con ES6+ y patrones avanzados.", yearsExperience: 6 },
        { name: "TypeScript", level: 100, category: "otras", description: "Desarrollo con tipado estático para código más robusto.", yearsExperience: 5 },
        { name: "JWT", level: 100, category: "otras", description: "Autenticación y autorización basada en tokens.", yearsExperience: 4 },
        { name: "OAuth", level: 100, category: "otras", description: "Implementación de flujos de autenticación con proveedores externos.", yearsExperience: 4 },
        { name: "RBAC", level: 100, category: "otras", description: "Control de acceso basado en roles para aplicaciones seguras.", yearsExperience: 4 },
        { name: "2FA", level: 100, category: "otras", description: "Implementación de autenticación de dos factores.", yearsExperience: 3 },
        { name: "bcrypt", level: 100, category: "otras", description: "Hashing seguro de contraseñas y datos sensibles.", yearsExperience: 4 },
        { name: "rate-limiting", level: 100, category: "otras", description: "Protección contra ataques de fuerza bruta y DoS.", yearsExperience: 4 },
        { name: "CORS", level: 100, category: "otras", description: "Configuración de políticas de seguridad para recursos compartidos.", yearsExperience: 5 },
        { name: "Firebase", level: 100, category: "otras", description: "Plataforma de desarrollo con autenticación y base de datos en tiempo real.", yearsExperience: 4 },
        { name: "Supabase", level: 100, category: "otras", description: "Alternativa open source a Firebase con PostgreSQL.", yearsExperience: 3 },
    ]
};

// Type-safe way to create a flattened skills array
const skills: Skill[] = SKILL_CATEGORIES.flatMap(category => skillsByCategory[category]);

export default skills;

// Export individual skill categories for direct access if needed
export const {
    idiomas,
    herramientas,
    devops,
    frontend,
    backend,
    otras
} = skillsByCategory;
