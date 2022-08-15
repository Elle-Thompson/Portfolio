import React from 'react';
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div id="banner">
      <div className="home-link">
        <Link to="/">
          <button id="HOME-BTTN">HOME</button>
        </Link>
      </div>
  
    </div>
  );
};

export default Banner;
