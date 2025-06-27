import Navbar from "../navber/navber";
import React from "react";
import "./home.css";
import {
  FaFacebook,
  FaCameraRetro,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
} from "react-icons/fa";
import { IoLogoSnapchat } from "react-icons/io5";
import { FaHandsClapping } from "react-icons/fa6";
import img1 from "../assets/Image.svg";

const Home = () => {
  const symbals = [
    { name: <FaFacebook /> },
    { name: <FaCameraRetro /> },
    { name: <FaTwitter /> },
    { name: <FaGithub /> },
    { name: <FaLinkedin /> },
    { name: <FaTelegramPlane /> },
    { name: <IoLogoSnapchat /> },
  ];
  return (
    <div className="home-container">
      <div>
        <h1 className="custom-box">
          Hello!
          <span className="hai">
            
            <FaHandsClapping />
          </span>
        </h1>
      </div>
      <div className="title-box">
        <h1>
          <span>I'm</span> Dattu
        </h1>
      </div>
      <div className="description-box">
        <h2>
          UI/UX Designer, Front-End Developer & Thinker.<br></br> Based in
          India.
        </h2>
      </div>
      <div className="button-container">
        <button> Download CV</button>
        <button> Get In Touch!</button>
      </div>
      <div>
        <ul className="symbols-list">
          {symbals.map((each, i) => (
            <li key={i}>{each.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <img src={img1} alt="Image" className="image-wrapper"></img>
      </div>
    </div>
  );
};
export default Home;
