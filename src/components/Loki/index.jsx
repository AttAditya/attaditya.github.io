import { LokiChar } from "./LokiChar";
import "./style.css";

export function Loki({ text, className = "" }) {
  return (
    <span className={`loki-text ${className}`}>
      {text.split("").map((char, index) => (
        <LokiChar key={`${char}-${index}`} char={char} />
      ))}
    </span>
  );
}
