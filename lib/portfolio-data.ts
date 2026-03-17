export type SkillCategory = "frontend" | "backend" | "tools";

export interface Skill {
  name: string;
  level: number; // 0-100
  category: SkillCategory;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  demoUrl?: string;
  sourceUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  highlights: string[];
  type: "work" | "education";
}

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 95, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "Next.js", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 95, category: "frontend" },
  { name: "State Management", level: 85, category: "frontend" },
  { name: "Framer Motion", level: 80, category: "frontend" },
  
  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "REST APIs", level: 85, category: "backend" },
  { name: "PostgreSQL", level: 75, category: "backend" },
  { name: "GraphQL", level: 70, category: "backend" },
  
  // Tools
  { name: "Git", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 75, category: "tools" },
  { name: "Testing", level: 80, category: "tools" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Full-featured shopping platform with cart, checkout, and payment integration. Built with Next.js 14 and Stripe.",
    techStack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    demoUrl: "https://demo.example.com",
    sourceUrl: "https://github.com/example/ecommerce",
  },
  {
    id: "2",
    title: "Real-time Dashboard",
    description: "Analytics dashboard with live data visualization, charts, and WebSocket updates for real-time monitoring.",
    techStack: ["React", "D3.js", "WebSocket", "Node.js"],
    demoUrl: "https://demo.example.com",
    sourceUrl: "https://github.com/example/dashboard",
  },
  {
    id: "3",
    title: "Task Management App",
    description: "Collaborative project management tool with drag-and-drop boards, real-time updates, and team collaboration.",
    techStack: ["Next.js", "Prisma", "Tailwind", "NextAuth"],
    demoUrl: "https://demo.example.com",
    sourceUrl: "https://github.com/example/tasks",
  },
  {
    id: "4",
    title: "Portfolio Website",
    description: "Personal portfolio with custom animations, dark mode, and responsive design. You're looking at it!",
    techStack: ["Next.js", "Framer Motion", "TypeScript", "Tailwind"],
    sourceUrl: "https://github.com/example/portfolio",
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "TechCorp",
    role: "Senior Frontend Developer",
    duration: "2022 - Present",
    location: "Remote",
    highlights: [
      "Led frontend architecture decisions for enterprise SaaS product",
      "Reduced bundle size by 40% through code splitting and optimization",
      "Mentored junior developers and conducted code reviews",
    ],
    type: "work",
  },
  {
    id: "2",
    company: "StartupXYZ",
    role: "Full Stack Developer",
    duration: "2020 - 2022",
    location: "New York, NY",
    highlights: [
      "Built MVP from scratch using React and Node.js",
      "Implemented real-time collaboration features with WebSockets",
      "Integrated third-party APIs and payment systems",
    ],
    type: "work",
  },
  {
    id: "3",
    company: "FreeCodeCamp",
    role: "Open Source Contributor",
    duration: "2019 - 2020",
    location: "Remote",
    highlights: [
      "Contributed to documentation and learning resources",
      "Built coding challenges and curriculum content",
    ],
    type: "work",
  },
  {
    id: "4",
    company: "University of Technology",
    role: "BS Computer Science",
    duration: "2015 - 2019",
    location: "Boston, MA",
    highlights: [
      "Graduated with Honors",
      "Specialized in Human-Computer Interaction",
      "President of Computer Science Club",
    ],
    type: "education",
  },
];

export const socialLinks = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  email: "camilo@example.com",
};
