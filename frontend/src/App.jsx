import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoMdMoon,IoMdSunny } from "react-icons/io";
import "./App.css";
import Navbar from "./navber/navber";
import Home from "./pages/home";
import About from "./pages/about";
import Resume from "./pages/resume";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import Contact from "./pages/contacts";
import { TbBackground } from "react-icons/tb";

function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    // Remove existing theme classes
    document.body.classList.remove("light-theme", "dark-theme");
    // Add the current theme class
    document.body.classList.add(`${theme}-theme`);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div className="App">
      <Navbar themebutton={<button className="button" onClick={toggleTheme}>
        {theme === "light" ? <IoMdMoon style={{color:"white"}} /> : <IoMdSunny style={{color:"yellow"}} />}
      </button>}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"}
      </button> */}

      
    </div>
  );
}

export default App;
