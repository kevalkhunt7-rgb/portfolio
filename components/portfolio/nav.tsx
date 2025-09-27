"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="section h-14 flex items-center justify-between">
        <Link
          href="#hero"
          className="font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          Keval Khunt
          <span className="sr-only">Go to hero</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-4">
          <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Skills
          </a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#contact">
            <Button size="sm" className="transition-transform hover:translate-y-[-1px]">
              Contact Me
            </Button>
          </a>
        </div>
      </div>
    </header>
  )
}
