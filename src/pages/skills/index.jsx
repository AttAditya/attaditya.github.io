import { Glass } from "@components/Glass";
import { Gradient } from "@components/Gradient";
import "./style.css";

const skillCategories = [
  {
    name: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "Flask", "FastAPI", "Django"],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase"],
  },
  {
    name: "Tools & Platforms",
    skills: ["Git", "Docker", "Linux", "AWS", "Vercel", "GitHub Actions"],
  },
  {
    name: "Other",
    skills: ["REST APIs", "GraphQL", "WebSockets", "CI/CD", "Agile"],
  },
];

function SkillCategory({ category }) {
  return (
    <Glass className="skill-category">
      <h3 className="category-name">
        <Gradient>{category.name}</Gradient>
      </h3>
      <div className="skill-tags">
        {category.skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </Glass>
  );
}

export function Skills() {
  return (
    <div className="skills-page">
      <div className="skills-content">
        <h1 className="page-title">
          <Gradient>Skills & Technologies</Gradient>
        </h1>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
