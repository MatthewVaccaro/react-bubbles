import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import Nav from "./components/nav";
import BubblePage from "./components/BubblePage";
import ProtectedRoute from "./utils/ProtectedRoute";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Login} />
        <ProtectedRoute exact path="/bubblePage" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
