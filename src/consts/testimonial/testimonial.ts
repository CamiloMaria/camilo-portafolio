import { Testimonial } from "@/types/testimonial";

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Nurys Castillo",
        position: "CEO",    
        company: "C&C Technology Supply",
        category: "tech",
        rating: 5,
        text: "Camilo is a gem! Not only does he work fast and with surprising efficiency, but he also has a huge heart. In all my years in the professional world, I have not met someone with such willingness, human warmth, and eagerness to help. He always arrives with a smile, encourages everyone around him, and makes any project flow with incredible energy. Having him on our team has been a true blessing.",
        highlight: "having him on our team has been a true blessing",
        color: "from-purple-500 to-indigo-600",
        accentColor: "rgba(139, 92, 246, 0.8)",
        featured: true,
        country: "Dominican Republic"
    },
    {
        id: 2,
        name: "Bernardo Valdez",
        position: "E-commerce Supervisor",
        company: "Plaza Lama",
        category: "ecommerce",
        rating: 5,
        text: "Working with Camilo was an exceptional experience. His ability to solve problems quickly made a difference in our team. He always showed a proactive attitude and impeccable work ethic. What really distinguishes him is his constant willingness to collaborate and help his colleagues. Camilo not only brings results, he also brings human value.",
        highlight: "constant willingness to collaborate and help",
        color: "from-pink-500 to-rose-600",
        accentColor: "rgba(236, 72, 153, 0.8)",
        featured: false,
        country: "Dominican Republic"
    },
    {
        id: 3,
        name: "Mario Lama",
        position: "E-commerce Manager",
        company: "Plaza Lama",
        category: "ecommerce",
        rating: 5,
        text: "Camilo proved to be a valuable resource from day one. His technical mastery and execution speed make him an exceptional professional. What I highlight most is his attitude: always willing to contribute, always with good energy, and always with a solution in mind. It was a pleasure to have him on the team.",
        highlight: "always willing to contribute, always with good energy",
        color: "from-amber-500 to-orange-600",
        accentColor: "rgba(245, 158, 11, 0.8)",
        featured: false,
        country: "Dominican Republic"
    },
    {
        id: 4,
        name: "Brayan Castañeda",
        position: "Process and Management Consultant",
        company: "Plaza Lama - Instaleap",
        category: "consulting",
        rating: 5,
        text: "During the restructuring process at Plaza Lama, Camilo demonstrated rapid understanding of objectives and great adaptability. His collaborative approach and willingness to build sustainable solutions made a real difference in the transition. Camilo is not just a great developer, he is a strategic ally in any transformation process.",
        highlight: "His collaborative approach and willingness to build sustainable solutions",
        color: "from-emerald-500 to-teal-600",
        accentColor: "rgba(16, 185, 129, 0.8)",
        featured: false,
        country: "Colombia"
    },
]

export default testimonials;