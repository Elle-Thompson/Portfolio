import React from "react";
import { Link } from "react-router-dom";
import $ from 'jquery'

const NavBar = () => {



  $(function(){
    $('a').each(function() {
      if ($(this).prop('href') == window.location.href) {
        $(this).addClass('current');
      }
    });
  });


  
  




  return (
      <div>
    <div id="NavBar">
    <nav>
        <ul id="link-list">
    
        <li > <a>  <Link to="/">
          Home
        </Link></a> </li>

        <li>  <a><Link to="/AboutMe">
           About Me 
        </Link></a></li>

        <li>  <a> <Link to="/Projects">
           Projects 
        </Link></a></li>

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
        </nav>
      </div>
      </div>
   
  );
};

export default NavBar;
