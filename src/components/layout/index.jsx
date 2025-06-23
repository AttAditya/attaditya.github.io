import {
  Routes,
  Route,
} from "react-router-dom";
import { Navbar } from "../navbar";
import {
  SpotlightPage,
} from "../../pages/spotlight";

import "./style.css";

export function PageLayout() {
  const routes = [
    {
      path: "/",
      element: <SpotlightPage />
    },
    {
      path: "/experience",
      element: <div>Experience Page</div>
    },
    {
      path: "/projects",
      element: <div>Projects Page</div>
    },
    {
      path: "/education",
      element: <div>Education Page</div>
    },
    {
      path: "/contact",
      element: <div>Contact Page</div>
    },
    {
      path: "/competitive-programming",
      element: <div>Competitive Programming Page</div>
    },
    {
      path: "/open-source",
      element: <div>Open Source Page</div>
    }
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
    </div>
  </>);
}
