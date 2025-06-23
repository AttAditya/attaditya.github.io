import { useEffect, useRef } from "react";

import "./style.css";

export function BlobCircle({
  baseX = "50%",
  baseY = "50%",
  radius = 10,
  size = "20rem",
  color = "var(--accent-blue)",
  counter = 0
}) {
  const element = useRef();
  
  const generatePath = () => {
    const path = [];
    const points = 20;

    for (let i = 0; i < points; i++) {
      const angle = (i / points) * Math.PI * 2;
      const x = Math.cos(angle) * (radius + (Math.random() * 2));
      const y = Math.sin(angle) * (radius + (Math.random() * 2));
      
      [
        path.push,
        path.unshift
      ][counter].bind(path)({
        x: x.toFixed(2),
        y: y.toFixed(2),
      });
    }

    return path;
  }

  const currentPos = (path) => {
    const now = new Date();
    const s = now.getSeconds();
    const ms = now.getMilliseconds();
    const millis = ((s * 1000) + ms);
    
    const index = Math.floor((millis) / 1000);
    const t = (millis % 1000) / 1000;
    
    const sx = path[index % path.length].x;
    const sy = path[index % path.length].y;

    const dx = path[(index + 1) % path.length].x;
    const dy = path[(index + 1) % path.length].y;
    
    const x = (sx * (1 - t)) + (dx * t);
    const y = (sy * (1 - t)) + (dy * t);

    return {
      x: parseFloat(x).toFixed(2),
      y: parseFloat(y).toFixed(2),
    };
  }

  useEffect(() => {
    const path = generatePath();
    const updatePosition = () => {
      const pos = currentPos(path);
      
      if (element.current) {
        element.current.style.left = `calc(${baseX} + ${pos.x}rem)`;
        element.current.style.top = `calc(${baseY} + ${pos.y}rem)`;
      }

      requestAnimationFrame(updatePosition);
    };

    updatePosition();
    return cancelAnimationFrame(updatePosition);
  });

  return (<>
    <span
      className="blob-circle"
      style={{
        width: `${size}rem`,
        height: `${size}rem`,
        color: color,
        transition: "none",
      }}
      ref={element}
    />
  </>);
}
