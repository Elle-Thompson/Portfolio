import './App.css';
import {Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Home from "./components/Home";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">


          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Skills" element={<Skills/>} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Contact" element={<Contact />} />
         </Routes>

      
    </div>
  );
}

export default App;
