import "./style.css";

export function JSONBox({ data, className = "" }) {
  return (
    <div className={`json-box ${className}`}>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </div>
  );
}
