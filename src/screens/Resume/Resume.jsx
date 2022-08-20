import React from 'react';
import Footer from "../../components/footer";
import './Resume.css'
import NavBar from "../../components/NavBar";


const Resume = () => {

  
  const pdf = "https://drive.google.com/file/d/1sQAdTOr3RErwvkT8Oxu64W7H6Xw9WT2U/preview";


  return (
    <div className="wrapper resume-page">

<NavBar/>


      <div id="resume" className="div-right">
        <h2 id="heading">Resume</h2>
        <iframe title="resume" src={pdf} allow="autoplay" />
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
