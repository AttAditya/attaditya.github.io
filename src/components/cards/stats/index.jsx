import { Glass } from "../../../components/glass";

import "./style.css";

export function StatsCard({ stat, substat, desc }) {
  return (<>
    <div className="stats-card-container">
      <Glass className="stats-card">
        <h2 className="stats-card-title">
          {stat}
          {substat && (
            <span className="substat">
              {substat}
            </span>
          )}
        </h2>
        <p className="stats-card-desc">{desc}</p>
      </Glass>
    </div>
  </>);
}

