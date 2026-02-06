import "./style.css";

export function Gradient({ children, className = "" }) {
  return (
    <span className={`gradient-text ${className}`}>
      {children}
    </span>
  );
}
