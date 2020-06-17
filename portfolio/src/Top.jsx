import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Visual from "./Visual";

const Top = (prots) => {
  const [isPublished, togglePublished] = useState(false);
  return (
    <div id="top">
      <Header />
      <Visual />
      <Main />
      <Footer />
    </div>
  );
};

export default Top;
