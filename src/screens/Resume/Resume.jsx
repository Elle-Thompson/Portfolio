import React from "react";
import Footer from "../../components/footer";
import "./Resume.css";
import NavBar from "../../components/NavBar/NavBar";

const Resume = () => {
  // const pdf = "https://drive.google.com/file/d/1sQAdTOr3RErwvkT8Oxu64W7H6Xw9WT2U/preview";

  return (
    <div className="Resume-page">
      <div id="Resume" className="div-right">
        <h2 id="heading">Resume</h2>
        <Footer />
        <NavBar />

        <div className="Resume-page-wrapper">
          <div>
            <h1>Elle Thompson</h1>
            <h2>Front-end Developer</h2>
            <h3>Oakland, CA</h3>
          </div>

          <p>
            Web Developer with experience building and troubleshooting web
            applications using HTML, CSS, Javascript, and React.js. Resourceful
            problem-solver comfortable working on cross-functional teams and in
            leadership positions with typically and atypically developed
            individuals as demonstrated by 2 years as a behavior technician.
            Proven track record of excellent communication skills in customer
            facing roles demonstrated by 5 years as Starbucks partner. With a
            degree in psychology and a background in social impact, global
            awareness is a priority. Currently pursuing roles in web development
            that provide growth and mentorship opportunities
          </p>

          <div id="work-xp">
            <h2 >Technical Skills</h2>
            <ul>
              <li> HTML </li>
              <li> CSS </li>
              <li> Javascript </li>
              <li> React.js </li>
              <li> Git/Github </li>
              <li> Rest API </li>
              <li> Jira </li>
              <li> Zendesk </li>
            </ul>
          </div>

          <div id="work-xp">
            <h2>Work Experience</h2>
             <h3> Jr. Front-end Developer</h3>
            <div id="job-title"><h4>SpaceLab</h4>
              <p>06/2022 - Present</p>
            </div>
            <ul >
              <li>
                
                Assisted with the development and creation of startup website
              </li>
              <li>
                
                Resolved conflicts due to inconsistencies in user story General
                Assembly
              </li>
              </ul>

               <h3>Software Engineering Fellow </h3>
              <div id="job-title">
                <h4> General Assembly </h4>
                
                <p>09/2021 - 12/2021 </p>
              </div>
              <ul>
              <li>
                
                Me Time (Game inspired by "Bop-it") Built using react.js, HTML,
                CSS, and javascript.
              </li>
              <li>
                
                Rick & Morty (Character dictionary) Built using Rest api,
                react.js, HTML, CSS, and javascript
              </li>
              <li>
                
                To-Do List (Full stack web application) Built using Mongo DB,
                react.js, HTML, CSS, and javascript
              </li>
              </ul>
               <h3>Freelance Web Developer</h3>
              <div id="job-title"> <h4>NizTech</h4> <p>02/2021 - 07/2021</p></div>
              <ul> 
              <li> Partnered with Sr. Web Developer to create web application components in react.js</li>
              </ul>
               <h3>Lead Behavior Technician</h3>
              <div id="job-title"><h4> Advance Behavioral Therapies</h4> <p>08/2019 - 09/2021</p></div>
              <ul> <li> Led team of 63 behavior technicians ensuring quality of training and clinical practices</li>
              <li> Taught neurodiverse children life and social skills through play therapy</li>
              </ul>
              <h3>Shift Supervisor</h3>
              <div id="job-title"><h4> Starbucks Coffee Company</h4> <p>03/2013 - 01/2018</p></div>
              <h3>Lead Behavior Technician</h3>
              <div id="job-title"><h4> Advance Behavioral Therapies</h4> <p>08/2019 - 09/2021</p></div>
            
          </div>
<div id="work-xp">   
          <h2>Education and Training</h2>  </div>
          <div id="ed-title"> <h3 > Bachelor of Arts - Psychology </h3> <p>- Arizona State University, Tempe AZ</p></div>
          <div id="ed-title">  <h3>Software Engineering Certificate  </h3> <p>- General Assembly, San Francisco </p></div>

        </div>
        
        <div id="download-link"> <button> <a href="https://drive.google.com/uc?export=download&id=1sQAdTOr3RErwvkT8Oxu64W7H6Xw9WT2U"  download="Elle_Thompson_Resume"> Download Resume </a></button>  </div>

        </div> 
    </div>
  ); 
};

export default Resume;
