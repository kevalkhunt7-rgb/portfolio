export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section section-padding">
      <div className="grid gap-8 md:grid-cols-[160px_1fr] items-start reveal">
        <div className="flex items-center justify-center md:justify-start">
          <img
            src="/developer-avatar.png"
            alt="Portrait of the developer"
            className="h-32 w-32 md:h-40 md:w-40 rounded-full border border-border object-cover"
          />
        </div>
        <div>
          <h2 id="about-title" className="text-2xl md:text-3xl font-semibold text-balance">
            About Me
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            I&apos;m a developer who loves building modern web apps with React, TypeScript, and Node.js. I focus on
            performance, accessibility, and clean, maintainable code.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> React & Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Tailwind CSS
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
