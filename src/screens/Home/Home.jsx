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
          alt="It-me"
        />
        </div>
      </div>

      <div className="div-right">
        <div className="buttons">
          <header>
            <h2>Hey There! I'm Elle. </h2>
            <span className="span1">Front-End Developer</span>
          </header>

          <Link to="/AboutMe">
            <button>ABOUT ME</button>
          </Link>
          <Link to="/Projects">
            <button>PROJECTS</button>
          </Link>
          <Link to="/Skills">
            <button>TECH STACK</button>
          </Link>
          <Link to="/Resume">
            <button>RESUME</button>
          </Link>
          <Link to="/Contact">
            <button>CONTACT ME</button>
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
        <footer >
          <a href="https://www.linkedin.com/in/ellethompson01/">
            <i className="fab fa-linkedin fa-2x" />
          </a>
          <a href="https://github.com/Elle-Thompson">
            <i className="fab fa-github fa-2x" />
          </a>

    
        </footer>
      </div>
    </div>
  );
};

export default Home;
