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
      <div className="main-container">
        <div className="hellow1"></div>
        <div className="hellow2">
          <div className="hayhand">
            <h1 className="hay">
              Hello!
              <span className="hand">
                <FaHandsClapping />
              </span>
            </h1>
          </div>
          <div className="name">
            <h1>
              <span className='spancs'>I'm</span> Dattu
            </h1>
          </div>
          <div className="description">
            <h2 className="description1">
              UI/UX Designer, Front-End Developer & Thinker.<br></br> Based in
              India.
            </h2>
          </div>
        </div>
        <div className="hellow"></div>
        <div className="hellow4">
          <div>
            <img src={img1} alt="Image" className="photo"></img>
          </div>
        </div>
        <div className="hellow5">
          <div>
            <ul className="list-items">
              {symbals.map((each, i) => (
                <li className="eachsymbal" key={i}>{each.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="hellow">
          <div className="button-container">
            <button className="button1"> Download CV</button>
            <button className="button2"> Get In Touch!</button>
          </div>
        </div>
       <div className="hellow"></div>
       <div className="hellow0">
          <h4 className="gmail">dattukumar995@gmail.com</h4>
       </div>
      </div>
    );
};
export default Home;
