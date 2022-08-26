import React from "react";
import Footer from "../../components/footer";
import "./Skills.css";
import NavBar from "../../components/NavBar";

const Skills = () => {
  return (
    <div className="skills-page">
    

      <div className="div-right">
        <h2 id="heading">Tech Stack</h2>

<NavBar/>
<Footer/>

        <div>
          <div id="skills-icons">
            <div id="skills-div">
              <img
                id="skill-icon"
                alt=""
                src="https://img.icons8.com/ios-filled/50/000000/html.png"
              />
              <p id="skills-text"> HTML </p>
            </div>
            <div id="skills-div">
              
              <img
                id="skill-icon"
                alt=""
                src="https://img.icons8.com/plasticine/50/000000/react.png"
              />
              <p id="skills-text">React </p>
            </div>
            <div id="skills-div">
              
              <img
                id="skill-icon"
                alt=""
                src="https://img.icons8.com/ios-filled/50/000000/javascript.png"
              />
              <p id="skills-text">JavaScript </p>
            </div>
            <div id="skills-div">
              
              <img
                id="skill-icon"
                alt=""
                src="https://img.icons8.com/color/50/000000/css3.png"
              />
              <p id="skills-text">CSS </p>
            </div>
            <div id="skills-div">
              
              <img
                id="skill-icon"
                alt=""
                src="https://img.icons8.com/color/50/000000/mongodb.png"
              />
              <p id="skills-text">MongoDB </p>
            </div>
            <div id="skills-div">
              
              <img
                id="skill-icon"
                alt=""
                src="https://img.icons8.com/fluency/50/000000/node-js.png"
              />
              <p id="skills-text">Node.js </p>
            </div>
            <div id="skills-div">
              
              <img
                id="skill-icon"
                alt=""
                src="https://img.icons8.com/ios-filled/50/000000/github.png"
              />
              <p id="skills-text">GitHub </p>
            </div>
            <div id="skills-div">
              
              <img
                id="skill-icon"
                alt=""
                src="https://img.icons8.com/color/50/000000/django.png"
              />
              <p id="skills-text">Django </p>
            </div>
            <div id="skills-div">
              
              <img
                id="skill-icon"
                alt=""
                src="https://img.icons8.com/fluency/50/000000/python.png"
              />
              <p id="skills-text">Python </p>
            </div>
            <div id="skills-div">
              
              <img
                id="skill-icon"
                alt=""
                src="https://img.icons8.com/color/50/000000/postgreesql.png"
              />
              <p id="skills-text">PostgreSQL </p>
            </div>
            <div id="skills-div">
              
              <img
                id="skill-icon"
                alt=""
                src="https://img.icons8.com/wired/50/000000/postman-api.png"
              />
              <p id="skills-text">Postman </p>
            </div>
            <div id="skills-div">
              
              <img
                id="skill-icon"
                alt=""
                src="https://img.icons8.com/ios/50/000000/api-settings.png"
              />
              <p id="skills-text">Rest API </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Skills;
