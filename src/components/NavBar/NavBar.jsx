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
      <div className=" container nav-container">
        <input className="checkbox" type="checkbox" name="" id="checkbox" />
        <div className="hamburger">
          <span className="bar line1"> </span>
          <span className="bar line2"> </span>
          <span className="bar line3"> </span>
        </div>

        <div className="menu-items">
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
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
