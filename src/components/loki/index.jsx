import { LokiChar } from "./loki-char";

import "./style.css";

export function Loki({ text }) {
  return (<>
    <span className="loki-text">
      {
        ` ${text} `.split("").map((char, index) => <LokiChar
          char={char}
          key={`${char}${index}`}
        />)
      }
    </span>
  </>);
}
