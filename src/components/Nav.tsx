// *****************************************************************************
// *                  Developed by Vanderson Rodrigues - 2026
// *****************************************************************************

"use client";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { profile } from "@/data/portfolio";
import { ThemeToggle } from "@/components/ThemeToggle";


export function Nav() {
  return (
    <header className="nav-shell">
      <nav className="nav" aria-label="Navegação principal">
        <a className="brand" href="#top">
          VR<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#experience">Experiência</a>
          <a href="#projects">Projetos</a>
          <a href="#skills">Stack</a>
          <a href="#education">Formação</a>
          <a href="#contact">Contato</a>
        </div>
        <div className="nav-actions">
          <ThemeToggle />
          <div className="nav-social">
            <a href={profile.github} target="_blank" aria-label="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" aria-label="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
