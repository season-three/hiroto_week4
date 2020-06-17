import React, { useState } from "react";

const WebSection = (prots) => {
  const [isPublished, togglePublished] = useState(false);
  return (
    <section className="visual-area web-section">
      WebSection
      <div className="visual-area-inner">
        <div className="visual-category-inner"></div>
        <ul className="visual-list"></ul>
      </div>
      <a id="other"></a>
    </section>
  );
};

export default WebSection;
