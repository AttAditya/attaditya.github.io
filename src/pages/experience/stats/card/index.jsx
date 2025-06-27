import { Glass } from "../../../../components/glass";

import "./style.css";

export function StatsCard({ stat, desc }) {
  return (<>
    <Glass className="stats-card">
      <h2 className="stat-card-title">{stat}</h2>
      <p className="stat-card-desc">{desc}</p>
    </Glass>
  </>);
}

