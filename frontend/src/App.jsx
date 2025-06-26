import { Route, Routes } from 'react-router-dom';
import Navbar from './navber/navber';
import Home from './pages/home';
import About from './pages/about';
import Resume from './pages/resume';
import Skills from './pages/skills';
import Projects from './pages/projects';
import Contact from './pages/contacts';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
