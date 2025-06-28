import { HistogramBin } from "./hist-bin";

import "./style.css";

export function HistogramCard({ data }) {
  const binWidth = `${(40 / (data.length))}vw`;
  const maxCounts = data.reduce(
    (a, b) => Math.max(a, b.count), 0
  );

  const shouldHighlight = (bin) => (
    bin.start <= bin.highlight &&
    bin.end > bin.highlight
  );

  return (<>
    <div className="histogram">
      {
        data.map(
          (bin) => (
            <HistogramBin
              key={bin.start}
              width={binWidth}
              heightRatio={bin.count / maxCounts}
              highlight={shouldHighlight(bin)}
              label={`${bin.start}+`}
            />
          )
        )
      }
    </div>
  </>);
}