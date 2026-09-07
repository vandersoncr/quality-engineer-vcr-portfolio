// *****************************************************************************
// *                  Developed by Vanderson Rodrigues - 2026
// *****************************************************************************

import {
  ArrowRight,
  CheckCircle2,
  Download,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
} from "lucide-react";

import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { Nav } from "@/components/Nav";
import { SectionTitle } from "@/components/SectionTitle";
import { SignalCard } from "@/components/SignalCard";

import {
  certifications,
  education,
  experiences,
  profile,
  projects,
  skillGroups,
} from "@/data/portfolio";

const qualityFlow = [
  "Planning",
  "Requirements",
  "Development",
  "Testing",
  "CI/CD",
  "Monitoring",
];

export default function Home() {
  return (
    <main id="top">
      <Nav />

      <section className="hero container">
        <div className="hero-copy">
          <div className="status">
            <span /> Quality Engineering • Manaus, BR
          </div>

          <p className="kicker">{profile.role}</p>

          <h1>
            Qualidade como <em>engenharia</em>, não como etapa final.
          </h1>

          <p className="hero-text">{profile.headline}</p>

          <div className="hero-tags">
            <span>Web</span>
            <span>APIs</span>
            <span>E2E</span>
            <span>Automation</span>
            <span>Performance</span>
            <span>Security</span>
          </div>

          <div className="hero-actions">
            <a className="btn primary" href="#projects">
              Ver projetos <ArrowRight size={17} />
            </a>

            <a className="btn" href="#experience">
              Ver experiência
            </a>

            <a
              className="btn ghost"
              href="/Curriculo_Vanderson_Rodrigues_Quality_Engineer.pdf"
              download
            >
              CV <Download size={16} />
            </a>
          </div>
        </div>

        <SignalCard />
      </section>

      <section className="container section about" id="about">
        <SectionTitle
          eyebrow="01 / Perfil"
          title="Engenharia de qualidade do requisito ao feedback."
        />

        <div className="about-grid">
          <p>{profile.summary}</p>

          <div className="principles">
            <div>
              <ShieldCheck />{" "}
              <span>
                <strong>Quality by design</strong>
                Risco, critérios e testabilidade desde o refinamento.
              </span>
            </div>

            <div>
              <TerminalSquare />{" "}
              <span>
                <strong>Automation with purpose</strong>
                Automação orientada a valor, estabilidade e feedback rápido.
              </span>
            </div>

            <div>
              <Sparkles />{" "}
              <span>
                <strong>Next frontier</strong>
                IA aplicada a QA como trilha de evolução, separada da
                experiência consolidada.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="container section" id="experience">
        <SectionTitle
          eyebrow="02 / Experiência"
          title="Contextos complexos. Qualidade contínua."
          subtitle="Responsabilidade, stack e impacto — sem transformar a experiência em uma lista genérica de tarefas."
        />

        <div className="timeline">
          {experiences.map((exp) => (
            <article className="timeline-item" key={exp.company}>
              <div className="time">
                <span>{exp.period}</span>
                <small>{exp.location}</small>
              </div>

              <div className="experience-card">
                <div className="card-head">
                  <div>
                    <p>{exp.company}</p>
                    <h3>{exp.role}</h3>
                  </div>
                </div>

                <p className="muted">{exp.context}</p>

                <ul>
                  {exp.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <div className="chips">
                  {exp.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects-wrap" id="projects">
        <div className="container">
          <SectionTitle
            eyebrow="03 / Case studies"
            title="Evidências técnicas, não apenas ferramentas."
            subtitle="Cases construídos apenas com experiências e competências documentadas no currículo."
          />

          <div className="projects-grid">
            {projects.map((p, i) => (
              <article
                className={`project-card ${p.featured ? "featured" : ""}`}
                key={p.title}
              >
                <div className="project-index">0{i + 1}</div>

                <span className="eyebrow">{p.eyebrow}</span>

                <h3>{p.title}</h3>

                <div className="case-block">
                  <small>PROBLEMA</small>
                  <p>{p.problem}</p>
                </div>

                <div className="case-block">
                  <small>ESTRATÉGIA</small>
                  <p>{p.strategy}</p>
                </div>

                <div className="case-block">
                  <small>IMPLEMENTAÇÃO</small>

                  <ul>
                    {p.implementation.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>

                <div className="result">
                  <CheckCircle2 size={18} />
                  <p>{p.result}</p>
                </div>

                <div className="chips">
                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container section quality">
        <SectionTitle
          eyebrow="04 / Quality Engineering"
          title="Qualidade ao longo de todo o SDLC."
        />

        <div className="flow" aria-label="Fluxo de Quality Engineering">
          {qualityFlow.map((x, i) => (
            <div key={x} className="flow-step">
              <span>{String(i + 1).padStart(2, "0")}</span>
              <strong>{x}</strong>

              {i < qualityFlow.length - 1 && <ArrowRight size={18} />}
            </div>
          ))}
        </div>

        <div className="quality-grid">
          <p>Shift Left</p>
          <p>Automation</p>
          <p>API Testing</p>
          <p>Performance</p>
          <p>Security</p>
          <p>Continuous Testing</p>
        </div>
      </section>

      <section className="container section" id="skills">
        <SectionTitle
          eyebrow="05 / Tech stack"
          title="Stack organizada por contexto de uso."
          subtitle="Sem porcentagens arbitrárias: experiência profissional e trilha de evolução ficam explicitamente separadas."
        />

        <div className="skills-grid">
          {skillGroups.map((g) => (
            <article
              className={
                g.title === "Currently Exploring"
                  ? "skill-card exploring"
                  : "skill-card"
              }
              key={g.title}
            >
              <h3>{g.title}</h3>

              <div className="chips">
                {g.items.map((i) => (
                  <span key={i}>{i}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container section ai">
        <div>
          <span className="eyebrow">06 / AI + QA</span>

          <h2>AI-Assisted Quality Engineering</h2>

          <p>
            Trilha de aprofundamento voltada a elevar produtividade, análise e
            avaliação em QA sem apresentar estudo como experiência profissional
            consolidada.
          </p>
        </div>

        <div className="ai-map">
          {[
            "LLMs",
            "Prompt Engineering",
            "RAG",
            "AI Agents",
            "MCP",
            "LLM Evaluation",
            "AI Security",
            "AI-Native Engineering",
          ].map((x) => (
            <span key={x}>{x}</span>
          ))}
        </div>
      </section>

      <section className="container section" id="education">
        <SectionTitle
          eyebrow="07 / Formação"
          title="Formação & especializações."
          subtitle="Base acadêmica e cursos selecionados pelo impacto direto no posicionamento como Quality Engineer. A Home prioriza relevância para recrutadores em vez de volume de certificados."
        />

        <div className="edu-grid">
          <article>
            <h3>Formação Acadêmica</h3>

            {education.map((e) => (
              <p key={e}>{e}</p>
            ))}
          </article>

          <article>
            <h3>Cursos & Formação Complementar em Destaque</h3>

            {certifications.map((c) => (
              <p key={c}>{c}</p>
            ))}

            <small className="education-note">
              Seleção orientada a QA, automação, API, segurança e engenharia de
              software.
            </small>
          </article>
        </div>
      </section>

      <section className="container contact" id="contact">
        <div>
          <span className="eyebrow">08 / Contato</span>

          <h2>Vamos construir software com mais qualidade?</h2>

          <p>
            Disponível para conversas sobre Quality Engineering, automação de
            testes, API, performance e evolução de práticas de qualidade.
          </p>
        </div>

        <div className="contact-links">
          <a href={`mailto:${profile.email}`}>
            <Mail /> {profile.email}
          </a>

          <a href={profile.linkedin} target="_blank">
            <LinkedinIcon /> LinkedIn
          </a>

          <a href={profile.github} target="_blank">
            <GithubIcon /> GitHub
          </a>

          <span>
            <MapPin /> {profile.location}
          </span>
        </div>
      </section>

      <footer className="container footer">
        <span>Vanderson Cardoso Rodrigues</span>

        <span>
          Quality Engineering throughout the Software Development Lifecycle.
        </span>
      </footer>
    </main>
  );
}