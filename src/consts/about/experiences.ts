import { Experience } from "@/types/about";

const experiences: Experience[] = [
    {
        title: "Consultant and Mentor",
        company: "Plaza Lama",
        location: "Santo Domingo, Dominican Republic (Remote)",
        period: "2025 - 2025",
        area: "E-commerce",
        description:
            "Technical consulting for optimization and improvement of existing systems. Mentoring and teaching new programmers. Resolution of critical bugs without direct participation in code development. Consulting on implementation of new technologies and solutions. Analysis and recommendations to improve software architecture and development processes.",
        achievements: [
            "Effective resolution of critical errors in production systems, reducing downtime.",
            "Complete training of new programmers on existing codebase and system architecture.",
            "Detailed teaching of the operation of all platform services and microservices.",
            "Implementation of best practices that increased code quality and reduced recurring bugs."
        ],
        type: "work",
        current: true,
        technologies: ["NodeJs", "TypeScript", "NestJs", "React", "MySQL", "Linux", "Docker", "GitLab CI/CD", "Jira", "Intranet"]
    },
    {
        title: "Full Stack Developer",
        company: "Plaza Lama",
        location: "Santo Domingo, Dominican Republic (Remote)",
        period: "2023 - 2025",
        area: "E-commerce",
        description:
            "As the sole programmer on the team, I was responsible for code review and debugging to ensure quality and functionality. Development of databases, applications, and servers to support websites from the backend. Integration of third-party APIs to improve functionality and user experience. Frontend resource optimization, significantly reducing loading times. Direct communication with clients to review progress, gather feedback, and resolve concerns. Code refactoring to modernize architecture and facilitate software maintenance.",
        achievements: [
            "Creation of new services integrating external APIs such as Uber Eats, PedidosYa, ChatGPT, Shopify, Magento, and InstaLeap, expanding platform capabilities.",
            "Automation of product, pricing, and inventory uploading process in Uber Eats and PedidosYa, transforming a manual process into a fully automated one.",
            "Optimization of existing services, improving performance and user experience.",
            "Implementation of microservices architecture and monorepo configuration to improve code scalability and maintainability.",
            "Migration of website from Shopify to Magento and subsequently from Magento to InstaLeap, ensuring business continuity during transitions.",
            "Migration of administrative dashboard from an old Angular version to React, increasing its speed and effectiveness by more than 200%.",
            "Implementation of an image management system in the dashboard that allows uploading and managing files without manual intervention, optimizing workflow.",
            "Implementation of CI/CD pipelines to automate testing, integration, and deployment, reducing errors and accelerating the development cycle."
        ],
        type: "work",
        current: false,
        technologies: ["NodeJs", "TypeScript", "NestJs", "Angular", "React", "MongoDB", "MySQL", "Linux", "PM2", "Docker", "GitLab CI/CD", "Jira", "Intranet"]
    },
    {
        title: "Full Stack Developer Intern",
        company: "Plaza Lama",
        location: "Santo Domingo, Dominican Republic",
        period: "2023 - 2023",
        area: "Technology",
        description:
            "3-month internship in the technology area where I learned the technologies used in the company and provided support to the main programmer. Familiarization with system architecture and participation in internal projects to improve operational efficiency.",
        achievements: [
            "Development and implementation of an intranet module for employees to check phone extensions throughout the company, improving internal communication."
        ],
        type: "work",
        current: false,
        technologies: ["NodeJs", "TypeScript", "NestJs", "Angular", "MySQL", "Intranet"]
    },
    {
        title: "Database Administrator",
        company: "C&C Technology Supply, LLC",
        location: "Santo Domingo, Dominican Republic",
        period: "2020 - 2022",
        area: "Information Technology",
        description:
            "Optimization of data backup and recovery processes to improve system stability. Database and server administration, support, and proactive monitoring. Agile resolution of critical incidents in production, minimizing downtime and preventing economic losses. Implementation of monitoring solutions that enabled problem detection before they became critical.",
        achievements: [
            "Design and implementation of a centralized database to store and manage employee and customer information, significantly improving critical data organization.",
            "Development of a system to record and monitor daily operational routines, enabling better planning and optimization of internal processes.",
            "Automation of reports based on stored data, facilitating strategic decision-making."
        ],
        type: "work",
        current: false,
        technologies: ["NodeJs", "Python", "PostgreSQL", "Linux"]
    },
    // Education entries
    {
        title: "Master of Science in Computer Information Systems, IT Project Management Concentration (In Progress)",
        company: "Boston University",
        location: "Boston, MA, USA",
        period: "2025 - 2027 (Expected)",
        description:
            "Concentration in IT Project Management. Developing advanced skills in planning, execution, and leadership of large-scale technology projects.",
        type: "education",
        current: true,
        achievements: [],
    },
    {
        title: "Software Engineering",
        company: "Instituto Tecnológico de Santo Domingo (INTEC)",
        location: "Santo Domingo, Dominican Republic",
        period: "2020 - 2024",
        description:
            "Solid foundation in software development, data structures, algorithms, and database management. Complementary studies in Scientific Computing with Python (2022).",
        type: "education",
        current: false,
        achievements: [
            "Development of a tower defense video game as final project, demonstrating skills in game programming and interactive system design.",
            "Awarded as first graduating class to create a complete and functional video game as final degree project, setting a precedent for future students.",
        ],
    },
]

export default experiences;