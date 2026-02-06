import { Glass } from "@components/Glass";
import { Gradient } from "@components/Gradient";
import { ExternalLink, Github } from "lucide-react";
import "./style.css";

const githubAccounts = [
  { name: "AttAditya", url: "https://github.com/AttAditya" },
  { name: "Attachment Studios", url: "https://github.com/Attachment-Studios" },
  { name: "SyntLang", url: "https://github.com/SyntLang" },
  { name: "Berry Foundations", url: "https://github.com/Berry-Foundations" },
];

const featuredProjects = [
  {
    name: "Portfolio 2026",
    description: "This portfolio website you're looking at right now",
    url: "https://github.com/AttAditya/attaditya.github.io",
    tech: ["React", "Vite", "CSS"],
  },
  {
    name: "Synt",
    description: "A programming language with a focus on simplicity",
    url: "https://github.com/SyntLang/Synt",
    tech: ["Python", "Language Design"],
  },
  {
    name: "CLI Image Editor",
    description: "Command-line image editing tool",
    url: "https://github.com/AttAditya/CLI-Image-Editor",
    tech: ["Python", "Pillow"],
  },
  {
    name: "Cellular Automata",
    description: "Interactive cellular automata simulation",
    url: "https://github.com/AttAditya/cellular-automata",
    tech: ["JavaScript", "Canvas"],
  },
];

function ProjectCard({ project }) {
  return (
    <Glass className="project-card">
      <div className="project-header">
        <h3 className="project-name">{project.name}</h3>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <ExternalLink size={18} />
        </a>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="project-tech">
        {project.tech.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </Glass>
  );
}

export function Projects() {
  return (
    <div className="projects-page">
      <div className="projects-content">
        <h1 className="page-title">
          <Gradient>Projects</Gradient>
        </h1>

        <section className="projects-section">
          <h2 className="section-title">GitHub Accounts</h2>
          <div className="github-accounts">
            {githubAccounts.map((account, index) => (
              <a
                key={index}
                href={account.url}
                target="_blank"
                rel="noopener noreferrer"
                className="github-account"
              >
                <Glass className="github-card">
                  <Github size={20} />
                  <span>{account.name}</span>
                </Glass>
              </a>
            ))}
          </div>
        </section>

        <section className="projects-section">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
