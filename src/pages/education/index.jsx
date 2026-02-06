import { Glass } from "@components/Glass";
import { Gradient } from "@components/Gradient";
import { ExternalLink } from "lucide-react";
import "./style.css";

const educationData = [
  {
    school: "Scaler School of Technology",
    degree: "Bachelor in Computer Science",
    location: "Bangalore, India",
    start: "July 2023",
    end: null,
    url: "https://scaler.com/school-of-technology",
    logo: "https://scaler-blog-prod-wp-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/10/22114541/Scaler_Logo_WhiteBG.jpg",
  },
  {
    school: "BITS Pilani",
    degree: "Bachelor in Computer Science (Online)",
    location: "Pilani, India",
    start: "July 2023",
    end: null,
    url: "https://www.bits-pilani.ac.in/",
    logo: "https://d2lk14jtvqry1q.cloudfront.net/media/small_BITS_Pilani_7a058e9309_098a202d47_d55a9cc055_b70d67d1ea.png",
  },
  {
    school: "Aravali International School",
    degree: "High School (10th & 12th)",
    location: "Faridabad, India",
    start: "November 2014",
    end: "April 2023",
    url: "https://aravali.edu.in/",
    logo: null,
  },
];

function EducationCard({ education }) {
  return (
    <Glass className="education-card">
      <div className="education-logo">
        {education.logo ? (
          <img src={education.logo} alt={education.school} />
        ) : (
          <div className="education-logo-placeholder">
            {education.school.charAt(0)}
          </div>
        )}
      </div>
      <div className="education-info">
        <div className="education-header">
          <h3 className="education-school">{education.school}</h3>
          <a
            href={education.url}
            target="_blank"
            rel="noopener noreferrer"
            className="education-link"
          >
            <ExternalLink size={16} />
          </a>
        </div>
        <p className="education-degree">{education.degree}</p>
        <div className="education-meta">
          <span>{education.location}</span>
          <span>
            {education.start} - {education.end || "Present"}
          </span>
        </div>
        {!education.end && (
          <span className="education-badge">
            <Gradient>Ongoing</Gradient>
          </span>
        )}
      </div>
    </Glass>
  );
}

export function Education() {
  return (
    <div className="education-page">
      <div className="education-content">
        <h1 className="page-title">
          <Gradient>Education</Gradient>
        </h1>

        <div className="education-list">
          {educationData.map((edu, index) => (
            <EducationCard key={index} education={edu} />
          ))}
        </div>
      </div>
    </div>
  );
}
