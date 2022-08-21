import React from 'react';
import Footer from "../../components/footer";
import './Resume.css'
import NavBar from "../../components/NavBar";


const Resume = () => {

  
  const pdf = "https://drive.google.com/file/d/1sQAdTOr3RErwvkT8Oxu64W7H6Xw9WT2U/preview";


  return (
    <div className="Resume-page">
      <div id="Resume" className="div-right">
        <h2 id="heading">Resume</h2>
<Footer />
<NavBar/>
      
        <div className="Resume-page-wrapper">  



        <iframe title="resume" src={pdf} allow="autoplay" />
      </div>
      </div>
      
    </div>
  );
};

export default Resume;
