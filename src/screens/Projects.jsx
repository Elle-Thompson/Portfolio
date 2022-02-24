import React from 'react';
import Footer from "../components/footer";

const Projects = () => {
  return (
    <div className="wrapper">
      <div className="div-left">
        <h3> Elle Thompson | Full-Stack Developer </h3>
        <img src="https://i.ibb.co/kM3Fb41/It-me.jpg" alt="It-me" />
      </div>

      <div id="projects" className="div-right">
        <div id="header">
          {" "}
          <h2 id="heading">Projects</h2>{" "}
        </div>
        <div id="project-wrapper">
          <div id="proj1">
            <a href="https://elle-thompson-metime.netlify.app/">
              <img
                id="proj-img"
                src="https://i.ibb.co/47F28TT/Screen-Shot-2021-12-27-at-7-02-40-PM.png"
                alt="project1"
              />
            </a>
          </div>
          <div id="proj1-description">
            {" "}
            <h4> MeTime</h4>{" "}
            <p>
              A game inspired by Bop-it and whack-a-mole. Built with react,
              HTML, and javascript, and styled with CSS.
            </p>{" "}
          </div>

          <div id="proj2">
            {" "}
            <a href="https://elle-thompson.github.io/rick-morty-project2/#/">
              <img
                id="proj-img"
                src="https://i.ibb.co/wMRXSgv/Screen-Shot-2021-12-27-at-7-17-18-PM.png"
                alt="project2"
              />
            </a>
          </div>

          <div id="proj2-description">
            {" "}
            <h4> Rick and Morty</h4>
            <p>
              {" "}
              Search engine using Rick and Morty API. Built with react, HTML,
              and javascript, and styled with CSS.
            </p>{" "}
          </div>

          <div id="proj3">
            <a href="https://ga-runtime-terror.github.io/toucan/">
              {" "}
              <img
                id="proj-img"
                src="https://i.ibb.co/Th5Qtyk/Screen-Shot-2021-12-27-at-7-20-53-PM.png"
                alt="project3"
              />{" "}
            </a>
          </div>

          <div id="proj3-description">
            {" "}
            <h4>To-do list</h4>
            <p>
              {" "}
              User auth. Front-end built with react, HTML, and javascript, and
              styled with CSS. Back-end built with node.js, mongo, and express.
              Also uses a quote api.
            </p>{" "}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
