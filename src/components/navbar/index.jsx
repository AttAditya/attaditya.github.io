import { useState } from "react";
import {
  AppWindowMac,
  Award,
  ChevronDown,
  ChevronUp,
  GitPullRequestArrow,
  GraduationCap,
  HandCoins,
  Handshake,
  LampDesk,
} from "lucide-react";

import { NavButton } from "./nav-button";

import PxAditya from "../../assets/PxAditya.png";
import "./style.css";

export function Navbar() {
  const [expanded, setExpanded] = useState(false);

  const navigations = [
    {
      icon: <LampDesk />,
      text: "Spotlight",
      location: "/"
    },
    {
      icon: <HandCoins />,
      text: "Experience",
      location: "/experience"
    },
    {
      icon: <AppWindowMac />,
      text: "Projects",
      location: "/projects"
    },
    {
      icon: <Award />,
      text: "Competitive Programming",
      location: "/competitive-programming",
    },
    {
      icon: <GitPullRequestArrow />,
      text: "Open Source",
      location: "/open-source"
    },
    {
      icon: <GraduationCap />,
      text: "Education",
      location: "/education"
    },
    {
      icon: <Handshake />,
      text: "Contact",
      location: "/contact"
    },
    {
      icon: <ChevronUp />,
      text: "Collapse",
      action: () => setExpanded(false),
      expandFn: (expanded) => expanded,
    },
    {
      icon: <ChevronDown />,
      text: "Expand",
      action: () => setExpanded(true),
      expandFn: (expanded) => !expanded,
    },
  ];

  return (<>
    <nav className={`navbar ${expanded ? "expanded" : ""}`}>
      <div className="navbar-wrapper">
        <div className="navbar-logo">
          <img src={PxAditya} alt="Pixel Aditya" />
        </div>
        <ul>
          {
            navigations.map((nav) => <li key={nav.text}>
              <NavButton
                icon={nav.icon}
                text={nav.text}
                location={nav.location}
                action={nav.action}
                expanded={nav.action ? nav.expandFn(expanded) : expanded}
              />
            </li>)
          }
        </ul>
      </div>
    </nav>
  </>);
}
