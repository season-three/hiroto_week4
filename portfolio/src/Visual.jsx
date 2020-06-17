import React, { useState } from "react";

const Visual = (prots) => {
  const [isPublished, togglePublished] = useState(false);
  return (
    <div>
      <div className="top-visual">top-visual</div>
      <div className="top-inner">top-inner</div>
    </div>
  );
};

export default Visual;
