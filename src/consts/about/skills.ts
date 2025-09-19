import { Skill, SkillCategory, SKILL_CATEGORIES } from "@/types/about";

// Typed skills map object grouped by category
const skillsByCategory: Record<SkillCategory, Skill[]> = {
    all: [],
    languages: [
        { name: "Spanish (Native)", level: 100, category: "languages", description: "Native mastery of Spanish language with excellent written and verbal communication." },
        { name: "English (C1)", level: 83, category: "languages", description: "Advanced level of English with fluent professional communication capabilities." },
    ],
    
    tools: [
        { name: "Git", level: 100, category: "tools", description: "Advanced version control and repository management.", yearsExperience: 5 },
        { name: "GitHub", level: 100, category: "tools", description: "Project collaboration, issue management and pull requests.", yearsExperience: 5 },
        { name: "GitLab", level: 100, category: "tools", description: "Complete repository management and integrated CI/CD.", yearsExperience: 4 },
        { name: "Postman", level: 100, category: "tools", description: "REST and GraphQL API testing and documentation.", yearsExperience: 4 },
        { name: "Jira", level: 100, category: "tools", description: "Agile project management and task tracking.", yearsExperience: 4 },
        { name: "Notion", level: 100, category: "tools", description: "Project documentation and knowledge management.", yearsExperience: 3 },
        { name: "Slack", level: 80, category: "tools", description: "Effective communication in development teams.", yearsExperience: 4 },
        { name: "Figma", level: 60, category: "tools", description: "Interface design and collaboration with design teams.", yearsExperience: 3 },
        { name: "VSCode", level: 100, category: "tools", description: "Code editor for development with advanced features.", yearsExperience: 5 },
        { name: "Cursor AI", level: 100, category: "tools", description: "AI-powered code editor with intelligent suggestions.", yearsExperience: 4 },
        { name: "GitHub Copilot", level: 100, category: "tools", description: "AI-powered code editor with intelligent suggestions.", yearsExperience: 4 },
    ],
    
    devops: [
        { name: "PM2", level: 100, category: "devops", description: "Advanced Node.js process management in production.", yearsExperience: 4 },
        { name: "Docker", level: 70, category: "devops", description: "Application and service containerization.", yearsExperience: 3 },
        { name: "Cloudflare", level: 70, category: "devops", description: "CDN, DNS and web security configuration.", yearsExperience: 3 },
        { name: "GitLab CI/CD", level: 60, category: "devops", description: "Integration and deployment pipeline automation.", yearsExperience: 3 },
        { name: "Nginx", level: 50, category: "devops", description: "Web server and reverse proxy configuration.", yearsExperience: 3 },
    ],
    
    frontend: [
        { name: "CSS", level: 100, category: "frontend", description: "Advanced styling, animations and responsive layouts.", yearsExperience: 6 },
        { name: "HTML", level: 100, category: "frontend", description: "Semantic and accessible structuring of web content.", yearsExperience: 6 },
        { name: "Tailwind CSS", level: 100, category: "frontend", description: "Rapid development with CSS utilities and custom components.", yearsExperience: 4 },
        { name: "SASS", level: 100, category: "frontend", description: "CSS preprocessor for maintainable and modular styles.", yearsExperience: 5 },
        { name: "Astro", level: 100, category: "frontend", description: "Creation of fast websites with partial rendering.", yearsExperience: 3 },
        { name: "React", level: 100, category: "frontend", description: "Dynamic interface development with reusable components.", yearsExperience: 5 },
        { name: "Next.js", level: 85, category: "frontend", description: "React framework with SSR, SSG and integrated optimizations.", yearsExperience: 4 },
        { name: "Angular", level: 60, category: "frontend", description: "Enterprise application development with TypeScript.", yearsExperience: 3 },
        { name: "Vue.js", level: 40, category: "frontend", description: "Progressive framework for user interfaces.", yearsExperience: 3 },
        { name: "Svelte", level: 30, category: "frontend", description: "Component compiler with performance focus.", yearsExperience: 3 },
    ],
    
    backend: [
        { name: "Node.js", level: 100, category: "backend", description: "Server and API development with JavaScript.", yearsExperience: 5 },
        { name: "Express", level: 100, category: "backend", description: "Minimalist framework for REST APIs and web applications.", yearsExperience: 5 },
        { name: "NestJs", level: 100, category: "backend", description: "TypeScript framework with modular and scalable architecture.", yearsExperience: 4 },
        { name: "MongoDB", level: 100, category: "backend", description: "NoSQL database with flexible document modeling.", yearsExperience: 5 },
        { name: "PostgreSQL", level: 100, category: "backend", description: "Robust relational database with advanced extensions.", yearsExperience: 4 },
        { name: "MySQL", level: 100, category: "backend", description: "Relational database management system.", yearsExperience: 5 },
        { name: "Microservices", level: 100, category: "backend", description: "Distributed architecture for scalable applications.", yearsExperience: 4 },
        { name: "Redis", level: 80, category: "backend", description: "In-memory storage for caching and messaging.", yearsExperience: 3 },
        { name: "AWS", level: 80, category: "backend", description: "Cloud services for application deployment and scaling.", yearsExperience: 4 },
        { name: "Azure", level: 80, category: "backend", description: "Microsoft cloud platform for enterprise applications.", yearsExperience: 3 },
        { name: "Google Cloud", level: 60, category: "backend", description: "Cloud services focused on machine learning and big data.", yearsExperience: 3 },
    ],
    
    other: [
        { name: "JavaScript", level: 100, category: "other", description: "Frontend and backend programming with ES6+ and advanced patterns.", yearsExperience: 6 },
        { name: "TypeScript", level: 100, category: "other", description: "Static typing development for more robust code.", yearsExperience: 5 },
        { name: "JWT", level: 100, category: "other", description: "Token-based authentication and authorization.", yearsExperience: 4 },
        { name: "OAuth", level: 100, category: "other", description: "Implementation of authentication flows with external providers.", yearsExperience: 4 },
        { name: "RBAC", level: 100, category: "other", description: "Role-based access control for secure applications.", yearsExperience: 4 },
        { name: "2FA", level: 100, category: "other", description: "Two-factor authentication implementation.", yearsExperience: 3 },
        { name: "bcrypt", level: 100, category: "other", description: "Secure hashing of passwords and sensitive data.", yearsExperience: 4 },
        { name: "rate-limiting", level: 100, category: "other", description: "Protection against brute force and DoS attacks.", yearsExperience: 4 },
        { name: "CORS", level: 100, category: "other", description: "Security policy configuration for shared resources.", yearsExperience: 5 },
        { name: "Firebase", level: 100, category: "other", description: "Development platform with authentication and real-time database.", yearsExperience: 4 },
        { name: "Supabase", level: 100, category: "other", description: "Open source alternative to Firebase with PostgreSQL.", yearsExperience: 3 },
    ]
};

// Type-safe way to create a flattened skills array
const skills: Skill[] = SKILL_CATEGORIES.flatMap(category => skillsByCategory[category]);

export default skills;

// Export individual skill categories for direct access if needed
export const {
    languages,
    tools,
    devops,
    frontend,
    backend,
    other
} = skillsByCategory;
