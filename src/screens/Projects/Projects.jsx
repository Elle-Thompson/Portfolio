import React from "react";
import "./Projects.css";
import NavBar from "../../components/NavBar/NavBar";

const Projects = () => {
  return (
    <div className="projects-page-wrapper ">
      <div className="div-right">
        <div id="header">
          <h2 id="heading">Projects</h2>

          <NavBar />
          
        </div>
        <div className="project-wrapper">
         
            <div className="proj-img proj-img1">
              <a href="https://elle-thompson.github.io/rick-morty-project2/#/">
                <img
                  id="proj-img"
                  src="https://i.ibb.co/wMRXSgv/Screen-Shot-2021-12-27-at-7-17-18-PM.png"
                  alt="project1"
                />
              </a>

              <h4 className="proj1-des1"> Rick and Morty</h4>
              <p className="proj1-des2">
                Search engine using Rick and Morty API. Built with react, HTML,
                and javascript, and styled with CSS.
              </p>

            </div>
            

            <div className="proj-img proj-img2">
              <a href="https://elle-thompson-metime.netlify.app/">
                <img
                  id="proj-img"
                  src="https://i.ibb.co/47F28TT/Screen-Shot-2021-12-27-at-7-02-40-PM.png"
                  alt="project2"
                />
              </a>

              <h4 className="proj2-des1"> MeTime</h4>
              <p className="proj2-des2">
                A game inspired by Bop-it and whack-a-mole. Built with react.js,
                HTML, and javascript, and styled with CSS.
              </p>
            </div>

            <div className="proj-img proj-img3">
              <a href="https://ga-runtime-terror.github.io/toucan/">
                <img
                  id="proj-img"
                  src="https://i.ibb.co/Th5Qtyk/Screen-Shot-2021-12-27-at-7-20-53-PM.png"
                  alt="project3"
                />
              </a>

              <h4 className="proj3-des1">To-do list</h4>
              <p className="proj3-des2">
                User auth. Front-end built with react, HTML, and javascript, and
                styled with CSS. Back-end built with node.js, mongo, and
                express. Also uses a quote api.
              </p>
            </div>

            <div className="proj-img proj-img4"> 
            <p id="more">  More to come!  </p>
               </div>

            <div >
             
            </div>

            <div className="proj2"></div>
            <div className="proj2-description">
              
            </div>

            <div className="proj3"></div>

            <div className="proj3-description">
              
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Projects;
