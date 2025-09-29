import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type Project = {
  title: string
  name:string
  description: string
  tech: string[]
  github?: string
  demo?: string
  image?: string
}

const projects: Project[] = [
  {
    title: "Doctor Appointment Booking System",
    name:"Medique",
    description: "Medique is a web application that allows patients to book doctor appointments online in a simple and convenient way. It provides a user-friendly interface for patients to view available doctors, check schedules, and confirm appointments.",
    tech: ["React.js", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/kevalkhunt7-rgb/Medique",
    demo: "https://medique-51kbt2gib-kevalkhunt7-5969s-projects.vercel.app/",
    image: "/project-1.png",
  }
  
]

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="section section-padding">
      <div className="reveal">
        <h2 id="projects-title" className="text-2xl md:text-3xl font-semibold text-balance mb-8">
          Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Card
              key={p.title}
              className="group overflow-hidden border-border/60 transition-colors hover:border-primary/60"
            >
              <CardHeader className="p-0">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={p.image || "/placeholder.svg?height=300&width=600&query=project%20preview"}
                    alt={`${p.title} preview`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-5">
                <CardTitle className="text-lg">{p.title}</CardTitle>
                <p className="text-lg">{p.name}</p>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Badge key={t} variant="outline" className="border-border/60">
                      {t}
                    </Badge>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer">
                      <Button size="sm" className="transition-transform hover:translate-y-[-1px]">
                        Demo
                      </Button>
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-border hover:border-primary/60 hover:text-primary bg-transparent"
                      >
                        GitHub
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
