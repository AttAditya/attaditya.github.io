import { StatsCard } from "./card";

import "./style.css";

export function ExperienceStats() {
  return (<>
    <div className="stats">
      <div className="stats-rows">
        <StatsCard stat={9} desc={"months of experience"} />
        <div className="stat-cols">
          <StatsCard stat={9} desc={"months of experience"} />
          <StatsCard stat={9} desc={"months of experience"} />
        </div>
      </div>
    </div>
  </>);
}
