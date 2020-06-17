import React, { useState } from "react";

const GameSection = (prots) => {
  const [isPublished, togglePublished] = useState(false);
  return (
    <section className="visual-area game-section">
      GameSection
      <div className="visual-area-inner">
        <div className="visual-category-inner"></div>
        <ul className="visual-list"></ul>
      </div>
      <a id="web"></a>
    </section>
  );
};

export default GameSection;
