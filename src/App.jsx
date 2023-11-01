//import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import React from "react";

function App() {
  //api key
  let apiKey = process.env.REACT_APP_NEWS_API;
  return (
    <BrowserRouter className="container">
      <Navbar about="About-Us " />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Hero
              apiKey={apiKey}
              key="general"
              country="in"
              category="general"
            />
          }
        />
        <Route
          exact
          path="/general"
          element={
            <Hero
              apiKey={apiKey}
              key="general"
              country="in"
              category="general"
            />
          }
        />
        <Route exact path="/About" element={<About />} />
        <Route
          exact
          path="/business"
          element={
            <Hero
              apiKey={apiKey}
              key="business"
              country="in"
              category="business"
            />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <Hero
              apiKey={apiKey}
              key="ent"
              country="in"
              category="entertainment"
            />
          }
        />
        <Route
          exact
          path="/science"
          element={
            <Hero apiKey={apiKey} country="in" key="sc" category="science" />
          }
        />
        <Route
          exact
          path="/sports"
          element={
            <Hero apiKey={apiKey} country="in" key="sports" category="sports" />
          }
        />
        <Route
          exact
          path="/technology"
          element={
            <Hero
              apiKey={apiKey}
              country="in"
              key="tech"
              category="technology"
            />
          }
        />
        <Route
          exact
          path="/health"
          element={
            <Hero apiKey={apiKey} country="in" key="health" category="health" />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
