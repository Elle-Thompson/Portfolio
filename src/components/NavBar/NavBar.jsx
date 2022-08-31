import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import "./NavBar.css";

const NavBar = () => {
  $(function () {
    $("a").each(function () {
      if ($(this).prop("href") == window.location.href) {
        $(this).addClass("current");
      }
    });
  });

  
  

  return (
    <nav id="NavBar">
      <ul className="link-list">
        <li className="link-item">
          <a>
            <Link to="/">Home</Link>
          </a>
        </li>

        <li className="link-item">
          <a>
            <Link to="/AboutMe">About Me</Link>
          </a>
        </li>

        <li className="link-item">
          <a>
            <Link to="/Projects">Projects</Link>
          </a>
        </li>

        <li className="link-item">
          <Link to="/Skills">Tech Stack</Link>
        </li>

        <li className="link-item">
          <Link to="/Resume">Resume</Link>
        </li>

        <li className="link-item">
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>

      <div className="hamburger">
        <span className="bar"> </span>
        <span className="bar"> </span>
        <span className="bar"> </span>
      </div>
    </nav>
  );
};

export default NavBar;
