import React from 'react';
import { Link } from "react-router-dom";
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="div-left">
        <h3> Elle Thompson | Front-End Developer </h3>
        <div id="primary-picture"> <img
          
          src="https://i.ibb.co/kM3Fb41/It-me.jpg"
          alt="Self-photo"
        />
        </div>
      </div>

      <div className="div-right">

        <div className="buttons">
          <header>
            <h2>Hey There! I'm <span className="span3"> Elle.</span> 
            </h2>
            <span className="span1">Front-End Developer</span>
          </header>
<div id="secondary-picture"> <img
          
          src="https://i.ibb.co/kM3Fb41/It-me.jpg"
          alt="Self-photo"
        />
        </div>
          <Link to="/AboutMe">
            <button>About </button>
          </Link>
          <Link to="/Projects">
            <button>Projects</button>
          </Link>
          <Link to="/Skills">
            <button>Tech Stack</button>
          </Link>
          <Link to="/Resume">
            <button>Resume</button>
          </Link>
          <Link to="/Contact">
            <button>Contact</button>
          </Link>

          <div className="links">
            <a href="https://www.linkedin.com/in/ellethompson01/">
              <i className="fab fa-linkedin fa-3x" />
            </a>
            <a href="https://github.com/Elle-Thompson">
              <i className="fab fa-github fa-3x" />
            </a>

          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
