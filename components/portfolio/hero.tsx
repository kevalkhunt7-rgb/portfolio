"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="hero" aria-label="Intro" className="min-h-[88vh] flex items-center section section-padding">
      <div className="w-full text-center sm:text-left reveal">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
          Software Developer | Web Enthusiast
        </p>
        <h1 className="text-balance text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
          Hi, I&apos;m <span className="text-primary">Keval Khunt</span>.
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-muted-foreground mx-auto sm:mx-0">
          I craft performant, accessible web apps with a focus on clean design and delightful user experiences.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-start">
          <a href="#projects">
            <Button className="transition-transform hover:translate-y-[-1px]">View My Work</Button>
          </a>
          <a href="#contact">
            <Button
              variant="outline"
              className="border-border hover:border-primary/60 hover:text-primary transition-colors bg-transparent"
            >
              Contact Me
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
