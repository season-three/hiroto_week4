import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Visual from "./Visual";
import About from "./about";

const Top = (prots) => {
  return (
    <div id="top">
      <div>
        <h1>Welcome</h1>
        <p>
          <Link to="/about">About</Link>
        </p>

        <Header />
        <Visual />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default Top;
