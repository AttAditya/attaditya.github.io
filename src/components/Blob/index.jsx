import { useMemo } from "react";
import { BlobCircle } from "./BlobCircle";
import "./style.css";

function isMobile() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return toMatch.some((pattern) => navigator.userAgent.match(pattern));
}

export function Blob({ min = 5, max = 15 }) {
  const blobCount = useMemo(() => {
    const adjustedMin = isMobile() ? 1 : min;
    const adjustedMax = isMobile() ? 3 : max;
    return Math.floor(Math.random() * (adjustedMax - adjustedMin)) + adjustedMin;
  }, [min, max]);

  const blobs = useMemo(() => {
    return Array(blobCount)
      .fill(0)
      .map((_, index) => ({
        key: index,
        baseX: `${Math.random() * 50 + 25}%`,
        baseY: `${Math.random() * 50 + 25}%`,
        size: Math.random() * 15 + 5,
        radius: Math.random() * 15 + 5,
        color: Math.random() > 0.5 ? "var(--accent-blue)" : "var(--accent-green)",
        direction: Math.round(Math.random()),
      }));
  }, [blobCount]);

  return (
    <div className="blob-container">
      {blobs.map((blob) => (
        <BlobCircle
          key={blob.key}
          baseX={blob.baseX}
          baseY={blob.baseY}
          size={blob.size}
          radius={blob.radius}
          color={blob.color}
          direction={blob.direction}
        />
      ))}
    </div>
  );
}
