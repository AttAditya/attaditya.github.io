import { useNavigate } from "react-router-dom";

import "./style.css";

export function NavButton({
  icon,
  text,
  location,
  action,
  expanded,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (location) {
      window.activateLoader(() => {
        navigate(location);
      });
    };
    if (action) action();
  };

  return (<>
    <button
      className={`
        navbar-button
        ${expanded ? "expanded" : ""}
        ${action ? "action" : ""}
      `}
      onClick={handleClick}
    >
      <span className="navbar-button-background" />
      <div className="navbar-button-icon">
        {icon}
      </div>

      <div className="navbar-button-text">
        {text}
      </div>
    </button>
  </>);
}
