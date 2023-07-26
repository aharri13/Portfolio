import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { routePath } from "./constants/route";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={routePath.hero} element={<Hero />} />
          <Route path={routePath.about} element={<About />} />
          <Route path={routePath.experience} element={<Experience />} />
          <Route path={routePath.skills} element={<Skills />} />
          <Route path={routePath.projects} element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
