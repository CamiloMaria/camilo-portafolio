export interface Project {
    id: number
    title: string
    description: string
    image: string
    tags: string[]
    demoUrl: string
    githubUrl: string
    featured: boolean
    category: "web" | "mobile" | "design" | "ai"
    longDescription?: string
    gallery?: string[]
}