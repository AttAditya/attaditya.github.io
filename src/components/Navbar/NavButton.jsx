import { useLocation, useNavigate } from "react-router-dom";
import "./style.css";

export function NavButton({ icon, text, path, action, expanded }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = path && location.pathname === path;

  const handleClick = () => {
    if (path) {
      navigate(path);
    }
    if (action) {
      action();
    }
  };

  return (
    <button
      className={`nav-button ${expanded ? "expanded" : ""} ${isActive ? "active" : ""} ${action ? "action-btn" : ""}`}
      onClick={handleClick}
      title={text}
    >
      <span className="nav-button-bg" />
      <div className="nav-button-icon">{icon}</div>
      <div className="nav-button-text">{text}</div>
    </button>
  );
}
