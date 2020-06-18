import React, { useState } from "react";

const Visual = (prots) => {
  const [isPublished, togglePublished] = useState(false);
  return (
    <div>
      <div className="top-visual">
        <div className="top-bg_1 rellax"></div>
        <div className="top-bg_2 rellax"></div>
        <div className="top-anim-1"></div>
        <div className="topinner"></div>
      </div>
      <div className="scrollDown">
        <a href="#game"></a>
      </div>
      <a id="game"></a>
    </div>
  );
};

export default Visual;
