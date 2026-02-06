import "./style.css";

export function Glass({ children, className = "", ...props }) {
  return (
    <div className={`glass-card ${className}`} {...props}>
      {children}
    </div>
  );
}
