import { useState } from "react";
import {
  Sparkles,
  Briefcase,
  FolderGit2,
  Wrench,
  Trophy,
  GraduationCap,
  Mail,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import { NavButton } from "./NavButton";
import logo from "@assets/images/logo.png";
import "./style.css";

export function Navbar() {
  const [expanded, setExpanded] = useState(false);

  const navigations = [
    { icon: <Sparkles />, text: "Spotlight", path: "/" },
    { icon: <Briefcase />, text: "Experience", path: "/experience" },
    { icon: <FolderGit2 />, text: "Projects", path: "/projects" },
    { icon: <Wrench />, text: "Skills", path: "/skills" },
    { icon: <Trophy />, text: "Competitive Programming", path: "/cp" },
    { icon: <GraduationCap />, text: "Education", path: "/education" },
    { icon: <Mail />, text: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`navbar ${expanded ? "expanded" : ""}`}>
      <div className="navbar-wrapper">
        <div className="navbar-logo">
          <img src={logo} alt="Aditya" />
        </div>

        <ul className="navbar-list">
          {navigations.map((nav) => (
            <li key={nav.path}>
              <NavButton
                icon={nav.icon}
                text={nav.text}
                path={nav.path}
                expanded={expanded}
              />
            </li>
          ))}

          <li className="navbar-toggle">
            <NavButton
              icon={expanded ? <ChevronUp /> : <ChevronDown />}
              text={expanded ? "Collapse" : "Expand"}
              action={() => setExpanded(!expanded)}
              expanded={true}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}
