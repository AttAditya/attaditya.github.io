import { BlobCircle } from "./blob-circle";

import "./style.css";

export function Blob({ min = 5, max = 15 }) {
  function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
  }

  if (detectMob()) {
    min = 1;
    max = 3;
  }

  return (<>
    <div className="blob">
      {
        Array(
          Math.floor(Math.random() * (max - min)) + min
        ).fill(0).map((_, index) => <BlobCircle
          key={index}
          baseX={`${(Math.random() * 50) + 25}%`}
          baseY={`${(Math.random() * 50) + 25}%`}
          size={Math.random() * 20}
          radius={Math.random() * 20}
          color={`var(--accent-${Math.random() > 0.5 ? "blue" : "green"})`}
          counter={Math.round(Math.random())}
        />)
      }
    </div>
  </>)
}
