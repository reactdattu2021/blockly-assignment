
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import Logo from "../assets/Logo.svg";
import "./navber.css";

const Navbar = (props) => {
  const { themebutton } = props;
  console.log(themebutton);
  
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Resume", to: "/resume" },
    { name: "Skills", to: "/skills" },
    { name: "Projects", to: "/projects" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 w-100%">
      <div className="container-fluid">
        {/* Brand and logo */}
        <div className="d-flex align-items-center">
          <img src={Logo} className="logo" alt="Logo" />
          <span className="navbar-brand mb-0 ms-2">Dattu Kumar</span>
        </div>

        {/* Toggle button for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible section */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navLinks.map((each) => (
              <li className="nav-item" key={each.name}>
                <NavLink className="nav-link" to={each.to}>
                  {each.name}
                </NavLink>
              </li>
            ))}
            
            <li className=" ">
              {themebutton}
              
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

