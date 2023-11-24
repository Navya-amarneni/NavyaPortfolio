import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./components/App";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Experiences from "./components/Experience";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import About from "./components/About";
import Resume from "./components/resume";
import Contact from "./components/contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route key="/" path="/" element={<App />}></Route>
      <Route key="/eductaion" path="/education" element={<Education />}></Route>
      <Route key="/projects" path="/projects" element={<Projects />}></Route>
      <Route key="/experiences" path="/experiences" element={<Experiences />} />
      <Route key="/skills" path="/skills" element={<Skills />} />
      <Route key="/about" path="/about" element={<About />} />
      <Route key="/resume" path="/resume" element={<Resume />} />
      <Route key="/contact" path="/contact" element={<Contact />} />
      <Route
        key="/achievements"
        path="/achievements"
        element={<Achievements />}
      />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
