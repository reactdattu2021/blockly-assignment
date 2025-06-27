import "./about.css";
import img4 from "../assets/Vector 4.svg";
import img3 from "../assets/Rectangle.svg";
import img5 from "../assets/Vector 5.svg";
import { FaFacebook,FaCameraRetro ,FaTwitter, FaGithub ,FaLinkedin,FaTelegramPlane  } from "react-icons/fa";
import { IoLogoSnapchat } from "react-icons/io5";

const About = () => {
    const symbals = [{ name: <FaFacebook /> }, { name: <FaCameraRetro /> },
         { name: <FaTwitter /> },{ name: <FaGithub /> },{ name: <FaLinkedin /> },{ name:<FaTelegramPlane />}
        ,{ name:<IoLogoSnapchat />}];
  return (
    <>
      <div className="about-container">
        <div className="about">
          <img src={img3} className="rotated-image" alt="Rectangle" />
        </div>
        <div className="positioned-box">
          <div className="styled-box-container">
            <h1 className="styled-box">{"This is it. ;)"}</h1>
            <div className="underline"></div>
          </div>

          <p className="paragraph">
            Anish Kr. Sinha is an Indian{" "}
            <span className="span1">UI/UX Designer & Front End Developer</span>{" "}
            with a passion for designing beautiful and fuctional user
            experiences. Typically, he’s Driven & permanently Curious. He’s
            obsessed with designing things and even more obsessed with designing
            cool & clean stuff for the web and mobile. He has been in the
            business of creating since he hung his first painting on the wall
            when he was 11.<br></br>
            He holds a <span className="span1">bachelor degree</span> in{" "}
            <span className="span1">Computer Applications</span>. During his
            graduation, he has been actively involved in the web design
            community for the last 3 years. he has designed websites for small
            businesses, events, nonprofits and more. Currently he’s based in
            Bihar, <span className="span1">India</span>. Where he’s working as
            an independent creative.<br></br>
            His interests, however, extend beyond the web and he loves helping
            people with branding and print design. He even loves designing{" "}
            <span className="span1">3D floor plan</span>.<br></br>
            When he’s not designing, he’s probably hanging out with his
            girlfriend, watching series, sketching or messing around on
            something inspired by YouTube tutorials.
            <div className="underline1"></div>
          </p>
        </div>
        <div>
            <img src={img4} className="rotated-image2" alt="Vector 5" />
        </div>
      </div>
      <div>
        <img src={img4} className="rotated-image1" alt="Vector 4" />
      </div>
      <div>
        <img src={img5} className="rotated-image3" alt="Vector 6" />
      </div>
      <div>
        <ul className="symbols-list">
          {symbals.map((each, i) => (
            <li className="list-items" key={i}>{each.name}</li>
          ))}
         
        </ul>
        
      </div>
    </>
  );
};

export default About;
