import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Login</Link>
      <Link to="/bubblepage">Bubble Page</Link>
    </nav>
  );
};

export default Nav;
