import { StatsCard } from "./card";

import "./style.css";

export function ExperienceStats({ stats }) {
  const findMonths = (exp) => {
    const { start, end, professional } = exp;
    if (!professional) return 0;
    
    const startDate = new Date(start);
    const endDate = end ? new Date(end) : new Date();

    const months = (
      endDate.getFullYear() - startDate.getFullYear()
    ) * 12 + (endDate.getMonth() - startDate.getMonth()) + 1;
    
    return months;
  }

  const experienceMonths = stats.reduce(
    (acc, exp) => findMonths(exp) + acc, 0
  );

  const experienceDomains = new Set(stats.reduce(
    (acc, exp) => ([
      ...exp.tags.domains,
      ...acc,
    ]), []
  )).size;

  const experienceTools = new Set(stats.reduce(
    (acc, exp) => ([
      ...exp.tags.tools,
      ...acc,
    ]), []
  )).size;

  return (<>
    <div className="stats">
      <div className="stats-rows">
        <div className="stats-cols">
        <StatsCard
          stat={
            experienceMonths > 12
            ? (experienceMonths / 12).toFixed(1)
            : experienceMonths
          }
          desc={
            experienceMonths > 12
            ? "years of experience"
            : "months of experience"
          }
        />
        </div>
        <div className="stats-cols">
          <StatsCard
            stat={experienceDomains}
            desc={"domains worked in"}
          />
          
          <StatsCard
            stat={experienceTools}
            desc={"tools used"}
          />
        </div>
      </div>
    </div>
  </>);
}
