import { Testimonial } from "@/types/testimonial";

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Nurys Castillo",
        position: "CEO",
        company: "C&C Technology Supply",
        category: "tech",
        rating: 5,
        text: "¡Camilo es una joya! No solo trabaja rápido y con una eficiencia que sorprende, sino que también tiene un corazón enorme. En todos mis años en el mundo profesional, no he conocido a alguien con tanta disposición, calidez humana y ganas de ayudar. Siempre llega con una sonrisa, anima a todos a su alrededor, y hace que cualquier proyecto fluya con una energía increíble. Haberlo tenido en nuestro equipo ha sido una verdadera bendición.",
        highlight: "haberlo tenido en nuestro equipo ha sido una verdadera bendición",
        color: "from-purple-500 to-indigo-600",
        accentColor: "rgba(139, 92, 246, 0.8)",
        featured: true,
        country: "República Dominicana"
    },
    {
        id: 2,
        name: "Bernardo Valdez",
        position: "Supervisor de E-commerce",
        company: "Plaza Lama",
        category: "ecommerce",
        rating: 5,
        text: "Trabajar con Camilo fue una experiencia excepcional. Su capacidad para resolver problemas rápidamente marcó una diferencia en nuestro equipo. Siempre mostró una actitud proactiva y una ética de trabajo impecable. Lo que realmente lo distingue es su disposición constante a colaborar y ayudar a sus compañeros. Camilo no solo aporta resultados, también aporta valor humano.",
        highlight: "disposición constante a colaborar y ayudar",
        color: "from-pink-500 to-rose-600",
        accentColor: "rgba(236, 72, 153, 0.8)",
        featured: false,
        country: "República Dominicana"
    },
    {
        id: 3,
        name: "Mario Lama",
        position: "Jefe de E-commerce",
        company: "Plaza Lama",
        category: "ecommerce",
        rating: 5,
        text: "Camilo demostró ser un recurso valioso desde el primer día. Su dominio técnico y velocidad de ejecución lo convierten en un profesional excepcional. Lo que más destaco es su actitud: siempre dispuesto a aportar, siempre con buena energía, y siempre con una solución en mente. Fue un placer contar con él en el equipo.",
        highlight: "siempre dispuesto a aportar, siempre con buena energía",
        color: "from-amber-500 to-orange-600",
        accentColor: "rgba(245, 158, 11, 0.8)",
        featured: false,
        country: "República Dominicana"
    },
    {
        id: 4,
        name: "Brayan Castañeda",
        position: "Consultor de Procesos y Gestión",
        company: "Instaleap",
        category: "consulting",
        rating: 5,
        text: "Durante el proceso de reestructuración en Plaza Lama, Camilo demostró una comprensión rápida de los objetivos y gran adaptabilidad. Su enfoque colaborativo y disposición para construir soluciones sostenibles marcaron una diferencia real en la transición. Camilo no es solo un gran desarrollador, es un aliado estratégico en cualquier proceso de transformación.",
        highlight: "Su enfoque colaborativo y disposición para construir soluciones sostenibles",
        color: "from-emerald-500 to-teal-600",
        accentColor: "rgba(16, 185, 129, 0.8)",
        featured: false,
        country: "Colombia"
    },
]

export default testimonials;