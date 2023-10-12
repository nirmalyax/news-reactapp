import { useEffect, useState } from "react";

import React from 'react'
import './Nav-style.css'
import './logo.png'

const Navbar = () => {

  const [scrolled , setScrolled] = useState(false);
  const handleScroll = () =>{
      const offset  = window.scrollY;
      //console.log(offset);
      if (offset > 150) {
          setScrolled(true);
      }
      else{
          setScrolled(false);
      }
  };

  useEffect(() => {
      console.log("UseEffect")
      window.addEventListener("scroll", handleScroll)
  }, []);


  return (
    <nav className={` heading ${scrolled ? 'sticky-header' : ''} navbar navbar-expand-lg `}>
      <div className="container-fluid">
      <img className='nav-logo' alt='logo' src="logo.png" width="30" height="30"/>
        <a className="navbar-brand" href="/"><strong>dailyNEWS</strong></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="/">
                <strong>Home</strong></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"><strong>About</strong></a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;