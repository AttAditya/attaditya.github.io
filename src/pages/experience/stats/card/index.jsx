import { Glass } from "../../../../components/glass";

import "./style.css";

export function StatsCard({ stat, desc }) {
  return (<>
    <div className="stats-card-container">
      <Glass className="stats-card">
        <h2 className="stats-card-title">{stat}</h2>
        <p className="stats-card-desc">{desc}</p>
      </Glass>
    </div>
  </>);
}

