import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div id="banner">
      <div className="home-link">
        <Link to="/">
          <button id="HOME-BTTN">HOME</button>
        </Link>

        <div className="page-links">
          <Link to="/Projects">
            <button id="page-button"> Projects </button>
          </Link>
          <Link to="/Skills">
            <button id="page-button">Skills</button>
          </Link>
          <Link to="/Resume">
            <button id="page-button">Resume</button>
          </Link>
          <Link to="/Contact">
            <button id="page-button">Contact Me</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
