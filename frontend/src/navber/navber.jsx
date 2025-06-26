import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdSunny } from "react-icons/io";
import { GiJusticeStar } from "react-icons/gi";
import "./navber.css";
import Logo from '../assets/Logo.svg'

const Navbar = () => {
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Resume", to: "/resume" },
    { name: "Skills", to: "/skills" },
    { name: "Projects", to: "/projects" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <>
      <div className="navbar-container">
        <div className="div1">
          <img src={Logo} className="logo"></img>
          <h1 className="navbar-title"> Dattu kumumar </h1>
        </div>
        <div className="div2">
          <nav className="navbar-links">
            {navLinks.map((each, i) => {
              return (
                <NavLink key={each.name} to={each.to}>
                  <ul>
                    <li>{each.name}</li>
                  </ul>
                </NavLink>
              );
            })}
          </nav>

          <IoMdSunny className="toggle" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
