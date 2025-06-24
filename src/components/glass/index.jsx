import "./style.css";

export function Glass({ children, className = "" }) {
  return (<>
    <div className={`glass-card ${className}`}>
      {children}
    </div>
  </>);
}
