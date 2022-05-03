import React from 'react';
import DivLeft from '../../components/DivLeft';
import Footer from "../../components/footer";
import './Resume.css'

const Resume = () => {
  const pdf = "https://drive.google.com/file/d/1sQAdTOr3RErwvkT8Oxu64W7H6Xw9WT2U/preview";

  return (
    <div className="wrapper resume-page">
      <DivLeft />

      <div id="resume" className="div-right">
        <h2 id="heading">Resume</h2>
        <iframe title="resume" src={pdf} allow="autoplay" />
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
