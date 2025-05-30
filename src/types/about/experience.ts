export interface Experience {
    title: string
    company: string
    location: string
    period: string
    description: string
    type: "work" | "education" | "award"
    area?: string
    achievements?: string[]
    current?: boolean
    logo?: string
    technologies?: string[]
}