import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import "./Nav-style.css";
import "./logo.png";

const Navbar = (props) => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    //console.log(offset);
    if (offset > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    //console.log("UseEffect")
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={` heading ${
        scrolled ? "sticky-header" : ""
      } navbar navbar-expand-lg `}
    >
      <div className="container-fluid">
        <img
          className="nav-logo"
          alt="logo"
          src="logo.png"
          width="30"
          height="30"
        />
        <Link className="navbar-brand" to="/">
          <strong>dailyNEWS</strong>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">
                {props.home}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/general">
                General
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/business">
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entertainment">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/health">
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/science">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sports">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technology">
                Technology
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.about}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
