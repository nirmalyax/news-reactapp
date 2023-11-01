//import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import React from "react";

function App() {
  return (
    <BrowserRouter className="container">
      <Navbar about="About-Us " />
      <Routes>
        <Route
          exact
          path="/"
          element={<Hero key="general" country="in" category="general" />}
        />
        <Route
          exact
          path="/general"
          element={<Hero key="general" country="in" category="general" />}
        />
        <Route exact path="/About" element={<About />} />
        <Route
          exact
          path="/business"
          element={<Hero key="business" country="in" category="business" />}
        />
        <Route
          exact
          path="/entertainment"
          element={<Hero key="ent" country="in" category="entertainment" />}
        />
        <Route
          exact
          path="/science"
          element={<Hero country="in" key="sc" category="science" />}
        />
        <Route
          exact
          path="/sports"
          element={<Hero country="in" key="sports" category="sports" />}
        />
        <Route
          exact
          path="/technology"
          element={<Hero country="in" key="tech" category="technology" />}
        />
        <Route
          exact
          path="/health"
          element={<Hero country="in" key="health" category="health" />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
