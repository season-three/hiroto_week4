import React, { useState } from "react";
import Navigation from "./Navigation";

const Header = (prots) => {
  const [isPublished, togglePublished] = useState(false);
  return (
    <header>
      <div className="smaller">
        <div id="loading-bg" className="bigger">
          <Navigation />
          <div id="overlay">
            <div className="overlay-inner"></div>
          </div>
          <div className="hamburger-menu">
            <a href="" className="menu-trigger">
              <span className="bigger"></span>
              <span className="bigger"></span>
              <span className="bigger"></span>
              <p>MENU</p>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
