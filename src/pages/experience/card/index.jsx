import * as Icons from "lucide-react";
import { Glass } from "../../../components/glass";

import "./style.css";

export function ExperienceCard({ experience }) {
  const IconComponent = Icons[experience.icon] || Icons.Briefcase;
  
  const role = experience.role || "Employee";
  const company = experience.company || "Company";
  const companyUrl = experience.company_url;
  
  let [sYear, sMonth, sDay] = experience.start.split("-");
  const sDate = new Date(`${sYear}-${sMonth}-${sDay}`);
  const start = sDate.toLocaleString(
    "en-US",
    {
      month: "short",
      year: "numeric"
    }
  );

  let [eYear, eMonth, eDay] = experience.end ? experience.end.split("-") : [];
  let eDate = !experience.end
    ? new Date()
    : new Date(`${eYear}-${eMonth}-${eDay}`);
  const end = experience.end
    ? eDate.toLocaleString(
      "en-US",
      {
        month: "short",
        year: "numeric"
      }
    )
    : "Present";

  return (<>
    <Glass className="experience-card">
      <div className="experience-card-icon">
        <IconComponent />
      </div>
      <div className="experience-card-content">
        <h2 className="experience-card-role">
          {role}
        </h2>
        <p className="experience-card-company">
          <a href={companyUrl} target="_blank" rel="noopener noreferrer">
            <span>
              {company}
            </span>
          </a>
          {companyUrl ? (
            <a href={companyUrl} target="_blank" rel="noopener noreferrer">
              <Icons.ExternalLink className="experience-card-company-link" />
            </a>
          ) : company}
        </p>
      </div>
      <p className="experience-card-duration">
        {start} - {end}
      </p>
    </Glass>
  </>);
}