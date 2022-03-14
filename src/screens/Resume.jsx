import React from 'react';
import DivLeft from '../components/DivLeft';
import Footer from "../components/footer";

const Resume = () => {
  const pdf =
    "https://drive.google.com/file/d/1BRvbmw7olyGPdgKbQnH6_Si8DU8_Otyk/preview";

  return (
    <div className="wrapper">
      <DivLeft />

      <div id="resume" className="div-right">
        {" "}
        <h2 id="heading">Resume</h2>
        <iframe title="resume" src={pdf} allow="autoplay" />
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
