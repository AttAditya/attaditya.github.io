import { Glass } from "@components/Glass";
import { Gradient } from "@components/Gradient";
import { ExternalLink } from "lucide-react";
import "./style.css";

const experienceData = [
  {
    company: "Scaler School of Technology",
    position: "Teaching Assistant",
    location: "Bangalore, India",
    start: "April 2024",
    end: null,
    url: "https://scaler.com/school-of-technology",
  },
  {
    company: "The World Times",
    position: "Software Developer",
    location: "Remote (Bengaluru, India)",
    start: "March 2024",
    end: null,
    url: "https://theworldtimes.in/",
  },
  {
    company: "Zolo Stays",
    position: "Intern (Scaler Innovation Labs)",
    location: "Remote (Bengaluru, India)",
    start: "March 2024",
    end: "May 2024",
    url: "https://zolostays.com/",
  },
  {
    company: "The World Times",
    position: "IT Developer",
    location: "Remote (Faridabad, India)",
    start: "January 2023",
    end: "July 2023",
    url: "https://theworldtimes.in/",
  },
];

function ExperienceCard({ experience }) {
  return (
    <Glass className="experience-card">
      <div className="experience-header">
        <h3 className="experience-position">{experience.position}</h3>
        <a
          href={experience.url}
          target="_blank"
          rel="noopener noreferrer"
          className="experience-company"
        >
          <span>{experience.company}</span>
          <ExternalLink size={16} />
        </a>
      </div>
      <div className="experience-meta">
        <span className="experience-location">{experience.location}</span>
        <span className="experience-dates">
          {experience.start} - {experience.end || "Present"}
        </span>
      </div>
      {!experience.end && (
        <span className="experience-badge">
          <Gradient>Current</Gradient>
        </span>
      )}
    </Glass>
  );
}

export function Experience() {
  return (
    <div className="experience-page">
      <div className="experience-content">
        <h1 className="page-title">
          <Gradient>Experience</Gradient>
        </h1>

        <div className="experience-list">
          {experienceData.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </div>
    </div>
  );
}
