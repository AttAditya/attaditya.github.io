import "./style.css";

export function Glass({
  children,
  className = "",
  ...props
}) {
  return (<>
    <div
      {...props}
      className={`glass-card ${className}`}
    >
      {children}
    </div>
  </>);
}
