import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

import { Layout } from "@components/Layout";
import { Spotlight } from "@pages/spotlight";
import { Experience } from "@pages/experience";
import { Projects } from "@pages/projects";
import { Skills } from "@pages/skills";
import { CompetitiveProgramming } from "@pages/cp";
import { Education } from "@pages/education";
import { Contact } from "@pages/contact";

export function App() {
  const Router = {
    Browser: BrowserRouter,
    Hash: HashRouter,
  }[window.routerMode];

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Spotlight />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/cp" element={<CompetitiveProgramming />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
