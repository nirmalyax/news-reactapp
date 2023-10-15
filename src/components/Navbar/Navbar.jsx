import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from 'react'
import './Nav-style.css'
import './logo.png'

const Navbar = (props) => {

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
        <Link className="navbar-brand" to="/"><strong>dailyNEWS</strong></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">svcc
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">
                {props.home}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.about}</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {props.news}
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/">Action</Link></li>
                <li><Link className="dropdown-item" to="/">Another action</Link></li>
                <li><Link className="dropdown-item" to="/">Something else here</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;