import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Top from "./Top";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Top} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>
        <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default App;

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div>
//         <Route exact path="/" component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/blog/:id" component={Blog} />
//       </div>
//     </BrowserRouter>
//   );
// };

// const Home = () => {
//   return (
//     <div>
//       <h1>Welcome</h1>
//       <p>
//         <Link to="/about">About</Link>
//       </p>
//     </div>
//   );
// };
// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <p>
//         <Link to="/">Home</Link>
//       </p>
//     </div>
//   );
// };

// const Blog = (props) => {
//   const { id } = props.match.params;

//   return (
//     <div>
//       <p>{id}番目の記事です</p>
//     </div>
//   );
// };

// export default App;
