"use client"

import { motion } from "framer-motion"

type Skill = { name: string; level: number }

const skills: Skill[] = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "TypeScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Testing", level: 70 },
]

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section section-padding">
      <div className="reveal">
        <h2 id="skills-title" className="text-2xl md:text-3xl font-semibold mb-8">
          Skills
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {skills.map((s) => (
            <div key={s.name}>
              <div className="flex items-center justify-between text-sm">
                <span>{s.name}</span>
                <span className="text-muted-foreground">{s.level}%</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-muted overflow-hidden">
                <motion.div
                  className="h-2 rounded-full bg-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }} // animate only once
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
