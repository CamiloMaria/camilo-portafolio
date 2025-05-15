export interface Project {
    id: number
    title: string
    description: string
    image: string
    tags: string[]
    githubUrl: string
    featured: boolean
    category: "backend" | "frontend" | "mobile"
    demoUrl?: string
    longDescription?: string
    gallery?: string[]
}