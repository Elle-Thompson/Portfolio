import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="home-link">
        <Link to="/">
          <button id="HOME-BTTN">HOME</button>
        </Link>
      </div>
  
    </footer>
  );
};

export default Footer;
