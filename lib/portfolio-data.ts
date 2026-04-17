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
  image?: string;
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

export const personalInfo = {
  name: "Camilo José María Castillo",
  title: "Full Stack Developer",
  location: "Providence, RI",
  phone: "+1 (401) 374-7468",
  email: "camilo_jose08@hotmail.com",
};

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 95, category: "frontend" },
  { name: "TypeScript", level: 95, category: "frontend" },
  { name: "Next.js", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 95, category: "frontend" },
  { name: "Angular", level: 85, category: "frontend" },
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "Framer Motion", level: 80, category: "frontend" },
  
  // Backend
  { name: "Node.js", level: 90, category: "backend" },
  { name: "NestJS", level: 85, category: "backend" },
  { name: "PostgreSQL", level: 80, category: "backend" },
  { name: "MySQL", level: 85, category: "backend" },
  { name: "MongoDB", level: 75, category: "backend" },
  { name: "REST APIs", level: 90, category: "backend" },
  { name: "Microservices", level: 80, category: "backend" },
  { name: "JWT/Auth", level: 85, category: "backend" },
  
  // Tools & Other
  { name: "Docker", level: 75, category: "tools" },
  { name: "AWS", level: 70, category: "tools" },
  { name: "Linux", level: 80, category: "tools" },
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "CI/CD", level: 80, category: "tools" },
  { name: "Agile/Scrum", level: 85, category: "tools" },
  { name: "AI Tools", level: 90, category: "tools" },
];

export const projects: Project[] = [
  {
    id: "7",
    title: "NotifyHub",
    description:
      "Multi-channel notification SaaS with a live sandbox. Send a notification and watch it flow through BullMQ queues, retry under chaos injection, and arrive in real time via WebSockets.",
    techStack: [
      "NestJS",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Socket.io",
      "Tailwind CSS",
    ],
    sourceUrl: "https://github.com/CamiloMaria/notifyhub",
    demoUrl: "https://notifyhub-nine.vercel.app",
    image: "/notifyhub.png",
  },
  {
    id: "1",
    title: "Plaza Lama E-Commerce Dashboard",
    description:
      "E-commerce dashboard developed from scratch, replacing an old Angular version with significant performance improvements.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Tanstack",
      "Radix",
      "Zod",
    ],
    demoUrl: "https://cm-dashboard-frontend.netlify.app/",
    sourceUrl: "https://github.com/CamiloMaria/dashboard-frontend",
    image: "/plaza-lama-dashboard.png",
  },
  {
    id: "8",
    title: "FlowBoard",
    description:
      "Real-time collaborative Kanban board with dual WebSocket architecture. Socket.io for board sync + Yjs CRDTs for character-level collaborative editing. Demo mode with 3 AI bots performing live collaboration.",
    techStack: [
      "NestJS",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Socket.io",
      "Yjs",
      "Tailwind CSS",
    ],
    demoUrl: "https://flowboard-web-taupe.vercel.app/demo",
    sourceUrl: "https://github.com/CamiloMaria/flowboard",
    image: "/flowboard.png",
  },
  {
    id: "3",
    title: "Personal Portfolio",
    description:
      "Personal portfolio website developed with Next.js, TypeScript and Tailwind CSS with interactive animations and responsive design.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React",
      "Responsive Design",
    ],
    demoUrl: "https://camilo-portafolio.vercel.app/",
    sourceUrl: "https://github.com/CamiloMaria/camilo-portafolio",
    image: "/personal-portfolio.png",
  },

  {
    id: "5",
    title: "BeccaStudio - Photography Portfolio",
    description:
      "Professional website for a photographer, with image gallery, services, testimonials and session booking system.",
    techStack: [
      "Astro",
      "Tailwind CSS",
      "Responsive Design",
      "Photography",
      "Portfolio",
    ],
    demoUrl: "https://beccastudio.com/",
    sourceUrl: "https://github.com/CamiloMaria/beccastudio",
    image: "/beccastudio.png",
  },
  {
    id: "6",
    title: "AI Resume Analyzer",
    description:
      "A smart resume analysis tool that helps job seekers optimize their resumes for specific job applications using AI-powered feedback.",
    techStack: [
      "React 19",
      "React Router 7",
      "TypeScript",
      "TailwindCSS",
      "PDF.js",
      "Puter.js",
      "Zustand",
      "Vite",
      "AI",
    ],
    sourceUrl: "https://github.com/CamiloMaria/ai-resume-analyzer",
  },
];

export const experiences: Experience[] = [
  // Work Experience
  {
    id: "1",
    company: "Plaza Lama",
    role: "Technical Consultant & Mentor",
    duration: "Apr 2025 - Jun 2025",
    location: "Remote",
    highlights: [
      "Mentored new developers through structured training sessions and one-on-one coaching",
      "Led to 30% increase in coding efficiency",
      "Reduced onboarding time by 50%",
    ],
    type: "work",
  },
  {
    id: "2",
    company: "Plaza Lama",
    role: "Full Stack Developer",
    duration: "Sep 2023 - Mar 2025",
    location: "Santo Domingo, DR (Hybrid)",
    highlights: [
      "Sole developer independently managing full development lifecycle",
      "Implemented scalable microservice architecture and monorepo setup",
      "Upgraded admin dashboard from Angular to React (200% performance increase)",
      "Established CI/CD pipelines reducing manual errors and accelerating releases",
    ],
    type: "work",
  },
  {
    id: "3",
    company: "Plaza Lama",
    role: "Full Stack Developer Intern",
    duration: "Jul 2023 - Sep 2023",
    location: "Santo Domingo, DR",
    highlights: [
      "Developed comprehensive intranet module for 10k+ employees",
      "Enhanced internal communication efficiency by 40%",
      "Streamlined project collaboration",
    ],
    type: "work",
  },
  // Education
  {
    id: "4",
    company: "Boston University",
    role: "MS in Computer Information Systems",
    duration: "Sep 2025 - Mar 2027",
    location: "Boston, MA",
    highlights: [
      "IT Project & Product Management specialization",
      "Part-time program",
    ],
    type: "education",
  },
  {
    id: "5",
    company: "Instituto Tecnológico de Santo Domingo (INTEC)",
    role: "Bachelor of Science in Software Engineering",
    duration: "Aug 2020 - Aug 2024",
    location: "Santo Domingo, DR",
    highlights: [
      "Software Engineering major",
    ],
    type: "education",
  },
];

export const socialLinks = {
  github: "https://github.com/CamiloMaria",
  linkedin: "https://www.linkedin.com/in/camilo-maria/",
  email: "camilo_jose08@hotmail.com",
  portfolio: "https://camilo-portafolio.vercel.app/",
};
