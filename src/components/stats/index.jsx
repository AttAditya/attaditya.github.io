import { StatsCard } from "../cards/stats";

import "./style.css";

function StatsRows({ children }) {
  return (<>
    <div className="stats-rows">
      {children}
    </div>
  </>);
}

function StatsCols({ children }) {
  return (<>
    <div className="stats-cols">
      {children}
    </div>
  </>);
}

function StatsData({ stats }) {
  return (<>
    {stats.element && (
      <StatsCard
        desc={stats.element.desc}
        stat={stats.element.stat}
        substat={stats.element.substat}
      />
    )}

    {stats.rows && (
      <StatsRows>
        {
          stats.rows.map((row, index) => (
            <StatsData
              key={index}
              stats={row}
            />
          ))
        }
      </StatsRows>
    )}

    {stats.cols && (
      <StatsCols>
        {
          stats.cols.map((col, index) => (
            <StatsData
              key={index}
              stats={col}
            />
          ))
        }
      </StatsCols>
    )}
  </>);
}

export function Stats({ stats }) {
  return (<>
    <div className="stats">
      <StatsData stats={stats} />
    </div>
  </>);
}
