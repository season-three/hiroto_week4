import React, { useState } from "react";

const Footer = (prots) => {
  const [isPublished, togglePublished] = useState(false);
  return (
    <footer>
      <div className="footer">
        footer
        <div className="footer-sns">footer-sns</div>
        <div className="footer-menu">footer-menu</div>
        <div className="copyright">copyright</div>
      </div>
    </footer>
  );
};

export default Footer;
