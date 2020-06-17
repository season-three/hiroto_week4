import React, { useState } from "react";

const Header = (prots) => {
  const [isPublished, togglePublished] = useState(false);
  return (
    <header>
      <div id="loading-bg" className="bigger">
        <nav className="navigation"></nav>
        <div id="overlay"></div>
        <div className="hamburger-menu"></div>
      </div>
    </header>
  );
};

export default Header;
