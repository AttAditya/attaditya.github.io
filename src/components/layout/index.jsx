import {
  Routes,
  Route,
} from "react-router-dom";

import { Navbar } from "../navbar";
import { SpotlightPage } from "../../pages/spotlight";
import { ExperiencePage } from "../../pages/experience";
import { ProjectsPage } from "../../pages/projects";
import { TechnologiesPage } from "../../pages/technologies";
import { CompetitiveProgrammingPage } from "../../pages/competitive-programming";
import { OpenSourcePage } from "../../pages/open-source";
import { EducationPage } from "../../pages/education";
import { ContactPage } from "../../pages/contact";
import { Loki } from "../loki";

import "./style.css";

export function PageLayout() {
  const routes = [
    {
      path: "/",
      element: <SpotlightPage />
    },
    {
      path: "/experience",
      element: <ExperiencePage />
    },
    {
      path: "/projects",
      element: <ProjectsPage />
    },
    {
      path: "/technologies",
      element: <TechnologiesPage />
    },
    {
      path: "/competitive-programming",
      element: <CompetitiveProgrammingPage />
    },
    {
      path: "/open-source",
      element: <OpenSourcePage />
    },
    {
      path: "/education",
      element: <EducationPage />
    },
    {
      path: "/contact",
      element: <ContactPage />
    },
  ];

  return (<>
    <div className="page-layout">
      <Navbar />
      <Routes>
        {
          routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))
        }
      </Routes>
      <footer>
        <Loki text="ADITYA" />
      </footer>
    </div>
  </>);
}
