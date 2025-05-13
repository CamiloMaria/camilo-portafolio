import { Experience } from "@/types/about";

const experiences: Experience[] = [
    {
        title: "Consultor y Mentor",
        company: "Plaza Lama",
        location: "Santo Domingo, República Dominicana (Remoto)",
        period: "2025 - Actualidad",
        area: "E-commerce",
        description:
            "Consultoría técnica para optimización y mejora de sistemas existentes. Mentoría y enseñanza a nuevos programadores. Resolución de bugs críticos sin participación directa en el desarrollo de código. Asesoramiento en implementación de nuevas tecnologías y soluciones. Análisis y recomendaciones para mejorar la arquitectura de software y procesos de desarrollo.",
        achievements: [
            "Resolución efectiva de errores críticos en sistemas de producción, reduciendo el tiempo de inactividad.",
            "Capacitación completa a nuevos programadores sobre la base de código existente y la arquitectura del sistema.",
            "Enseñanza detallada del funcionamiento de todos los servicios y microservicios de la plataforma.",
            "Implementación de mejores prácticas que aumentaron la calidad del código y redujeron los bugs recurrentes."
        ],
        type: "work",
        current: true,
        technologies: ["NodeJs", "TypeScript", "NestJs", "React", "MySQL", "Linux", "Docker", "GitLab CI/CD", "Jira", "Intranet"]
    },
    {
        title: "Desarrollador Full Stack",
        company: "Plaza Lama",
        location: "Santo Domingo, República Dominicana (Remoto)",
        period: "2023 - 2025",
        area: "E-commerce",
        description:
            "Como único programador del equipo, me encargué de la revisión y depuración de código para garantizar calidad y funcionalidad. Desarrollo de bases de datos, aplicaciones y servidores para soportar sitios web desde el backend. Integración de APIs de terceros para mejorar funcionalidades y experiencia del usuario. Optimización de recursos del frontend, reduciendo significativamente los tiempos de carga. Comunicación directa con clientes para revisar avances, recoger feedback y resolver inquietudes. Refactorización de código para modernizar la arquitectura y facilitar el mantenimiento del software.",
        achievements: [
            "Creación de nuevos servicios integrando APIs externas como Uber Eats, PedidosYa, ChatGPT, Shopify, Magento e InstaLeap, ampliando las capacidades de la plataforma.",
            "Automatización del proceso de carga de productos, precios e inventario en Uber Eats y PedidosYa, transformando un proceso manual en uno completamente automatizado.",
            "Optimización de servicios existentes, mejorando el rendimiento y la experiencia del usuario.",
            "Implementación de arquitectura de microservicios y configuración de monorepos para mejorar la escalabilidad y mantenibilidad del código.",
            "Migración de la pagina web de Shopify a Magento y posteriormente de Magento a InstaLeap, garantizando la continuidad del negocio durante las transiciones.",
            "Migración del dashboard administrativo de una versión antigua de Angular a React, aumentando su velocidad y efectividad en más de un 200%.",
            "Implementación de un sistema de gestión de imágenes en el dashboard que permite subir y administrar archivos sin necesidad de hacerlo manualmente, optimizando el flujo de trabajo.",
            "Implementación de pipelines de CI/CD para automatizar pruebas, integración y despliegue, reduciendo errores y acelerando el ciclo de desarrollo."
        ],
        type: "work",
        current: false,
        technologies: ["NodeJs", "TypeScript", "NestJs", "Angular", "React", "MongoDB", "MySQL", "Linux", "PM2", "Docker", "GitLab CI/CD", "Jira", "Intranet"]
    },
    {
        title: "Pasante Desarrollador Full Stack",
        company: "Plaza Lama",
        location: "Santo Domingo, República Dominicana",
        period: "2023 - 2023",
        area: "Tecnología",
        description:
            "Pasantía de 3 meses en el área de tecnología donde aprendí las tecnologías utilizadas en la empresa y brindé apoyo al programador principal. Familiarización con la arquitectura de sistemas y participación en proyectos internos para mejorar la eficiencia operativa.",
        achievements: [
            "Desarrollo e implementación de un módulo en la intranet para que los empleados puedan consultar las extensiones telefónicas de toda la empresa, mejorando la comunicación interna."
        ],
        type: "work",
        current: false,
        technologies: ["NodeJs", "TypeScript", "NestJs", "Angular", "MySQL", "Intranet"]
    },
    {
        title: "Database Administrator",
        company: "C&C Technology Supply, LLC",
        location: "Santo Domingo, República Dominicana",
        period: "2020 - 2022",
        area: "Tecnología de la Información",
        description:
            "Optimización de procesos de respaldo y recuperación de datos para mejorar la estabilidad del sistema. Administración, soporte y monitoreo proactivo de bases de datos y servidores. Resolución ágil de incidentes críticos en producción, minimizando el tiempo de inactividad y previniendo pérdidas económicas. Implementación de soluciones de monitoreo que permitieron detectar problemas antes de que se volvieran críticos.",
        achievements: [
            "Diseño e implementación de una base de datos centralizada para almacenar y gestionar información de empleados y clientes, mejorando significativamente la organización de datos críticos.",
            "Desarrollo de un sistema para registrar y monitorear rutinas diarias operativas, permitiendo una mejor planificación y optimización de procesos internos.",
            "Automatización de reportes basados en los datos almacenados, facilitando la toma de decisiones estratégicas."
        ],
        type: "work",
        current: false,
        technologies: ["NodeJs", "Python", "PostgreSQL", "Linux"]
    },
    // Education entries
    {
        title: "Master of Science en Computer Information Systems, IT Project Management Concentration (En curso)",
        company: "Boston University",
        location: "Boston, MA, EE.UU.",
        period: "2025 - 2026 (Esperado)",
        description:
            "Concentración en Gestión de Proyectos de Tecnología (IT Project Management). Desarrollando habilidades avanzadas en planificación, ejecución y liderazgo de proyectos tecnológicos a gran escala.",
        type: "education",
        current: true,
        achievements: [],
    },
    {
        title: "Ingeniería de Software",
        company: "Instituto Tecnológico de Santo Domingo (INTEC)",
        location: "Santo Domingo, República Dominicana",
        period: "2020 - 2024",
        description:
            "Formación sólida en desarrollo de software, estructuras de datos, algoritmos y gestión de bases de datos. Estudios complementarios en Computación Científica con Python (2022).",
        type: "education",
        current: false,
        achievements: [
            "Desarrollo de un videojuego tower defense como proyecto final, demostrando habilidades en programación de juegos y diseño de sistemas interactivos.",
            "Premiado como primera promoción en crear un videojuego completo y funcional como proyecto final de grado, estableciendo un precedente para futuros estudiantes.",
        ],
    },
]

export default experiences;