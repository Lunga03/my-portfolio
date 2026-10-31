"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Education", href: "/#education" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="group flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label={`${DATA.name} — home`}
        >
          <span className="flex size-8 items-center justify-center rounded-lg border border-border bg-card font-mono text-[11px] font-semibold tracking-widest text-foreground transition-colors group-hover:border-sky-500/40">
            {DATA.initials}
          </span>
          <span className="hidden text-sm font-medium tracking-tight sm:block">
            {DATA.shortName}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted/70 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <div className="hidden items-center gap-1 sm:flex">
            <a
              href={DATA.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (placeholder link)"
              className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted/70 hover:text-foreground"
            >
              <DATA.contact.social.GitHub.icon className="size-4" aria-hidden />
            </a>
            <a
              href={DATA.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (placeholder link)"
              className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted/70 hover:text-foreground"
            >
              <DATA.contact.social.LinkedIn.icon
                className="size-4"
                aria-hidden
              />
            </a>
          </div>
          <ModeToggle />
          <button
            type="button"
            className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted/70 hover:text-foreground md:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? (
              <X className="size-4" aria-hidden />
            ) : (
              <Menu className="size-4" aria-hidden />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={cn(
          "border-t border-border/70 md:hidden",
          isOpen ? "block" : "hidden"
        )}
      >
        <nav
          className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-4"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/70 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 flex items-center gap-2 border-t border-border pt-3">
            <a
              href={DATA.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs text-muted-foreground hover:text-foreground"
            >
              <DATA.contact.social.GitHub.icon className="size-4" aria-hidden />
              GitHub
            </a>
            <a
              href={DATA.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs text-muted-foreground hover:text-foreground"
            >
              <DATA.contact.social.LinkedIn.icon
                className="size-4"
                aria-hidden
              />
              LinkedIn
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
