import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
      <div>
    <div id="banner">

        <ul id="link-list">
    
        <li >  <Link to="/">
          Home
        </Link></li>

        <li><Link to="/Projects">
           Projects 
        </Link></li>

        <li><Link to="/Skills">
          Skills
        </Link></li>

        <li> <Link to="/Resume">
          Resume
        </Link></li>

       <li> <Link to="/Contact">
          Contact Me
        </Link>
        </li>
        
        </ul>
      </div>
      </div>
   
  );
};

export default Banner;
