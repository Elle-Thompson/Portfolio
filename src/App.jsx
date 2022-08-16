import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Projects from './screens/Projects/Projects';
import AboutMe from './screens/AboutMe/AboutMe';
import Skills from './screens/Skills/Skills';
import Resume from './screens/Resume/Resume';
import Home from './screens/Home/Home';
import Contact from './screens/Contact/Contact';

function App () {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/AboutMe" element={<AboutMe/>}/>
        <Route path="/Skills" element={<Skills/>}/>
        <Route path="/Resume" element={<Resume/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
