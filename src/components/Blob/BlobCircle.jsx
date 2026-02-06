import { useEffect, useRef, useCallback } from "react";

export function BlobCircle({
  baseX = "50%",
  baseY = "50%",
  radius = 10,
  size = 20,
  color = "var(--accent-blue)",
  direction = 0,
}) {
  const elementRef = useRef(null);
  const pathRef = useRef([]);

  const generatePath = useCallback(() => {
    const path = [];
    const points = 20;

    for (let i = 0; i < points; i++) {
      const angle = (i / points) * Math.PI * 2;
      const x = Math.cos(angle) * (radius + Math.random() * 2);
      const y = Math.sin(angle) * (radius + Math.random() * 2);

      if (direction === 0) {
        path.push({ x: x.toFixed(2), y: y.toFixed(2) });
      } else {
        path.unshift({ x: x.toFixed(2), y: y.toFixed(2) });
      }
    }

    return path;
  }, [radius, direction]);

  const getCurrentPosition = useCallback((path) => {
    const now = new Date();
    const s = now.getSeconds();
    const ms = now.getMilliseconds();
    const millis = s * 1000 + ms;

    const index = Math.floor(millis / 1000);
    const t = (millis % 1000) / 1000;

    const current = path[index % path.length];
    const next = path[(index + 1) % path.length];

    const x = parseFloat(current.x) * (1 - t) + parseFloat(next.x) * t;
    const y = parseFloat(current.y) * (1 - t) + parseFloat(next.y) * t;

    return { x: x.toFixed(2), y: y.toFixed(2) };
  }, []);

  useEffect(() => {
    pathRef.current = generatePath();

    let animationId;
    const updatePosition = () => {
      const pos = getCurrentPosition(pathRef.current);

      if (elementRef.current) {
        elementRef.current.style.left = `calc(${baseX} + ${pos.x}rem)`;
        elementRef.current.style.top = `calc(${baseY} + ${pos.y}rem)`;
      }

      animationId = requestAnimationFrame(updatePosition);
    };

    updatePosition();
    return () => cancelAnimationFrame(animationId);
  }, [baseX, baseY, generatePath, getCurrentPosition]);

  return (
    <span
      ref={elementRef}
      className="blob-circle"
      style={{
        width: `${size}rem`,
        height: `${size}rem`,
        backgroundColor: color,
      }}
    />
  );
}
