import { Glass } from "../../../glass";

import "./style.css";

export function HistogramBin({
  width,
  heightRatio,
  highlight,
  label
}) {
  return (<>
    <Glass
      className={`histogram-bin ${highlight ? "highlight" : ""}`}
      style={{
        width: width,
        height: `${15 * heightRatio}rem`,
      }}
    >
      <span
        style={{
          
        }}
      >
        {label}
      </span>
    </Glass>
  </>);
}