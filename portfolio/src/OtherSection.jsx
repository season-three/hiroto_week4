import React, { useState } from "react";

const OtherSection = (prots) => {
  const [isPublished, togglePublished] = useState(false);
  return (
    <section className="visual-area game-section">
      GameSection
      <div className="visual-area-inner">
        <div className="visual-category-inner"></div>
        <ul className="visual-list"></ul>
      </div>
    </section>
  );
};

export default OtherSection;
