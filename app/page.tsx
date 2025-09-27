import { Navbar } from "@/components/portfolio/nav"
import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Projects } from "@/components/portfolio/projects"
import { Skills } from "@/components/portfolio/skills"
import { Contact } from "@/components/portfolio/contact"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <footer className="section section-padding text-center text-sm text-muted-foreground">
        <p className="text-pretty">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </main>
  )
}
