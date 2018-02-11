import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header";
import Gallery from "./Gallery";
import Post from "./Post";

const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Gallery} />
      <Route path="/posts/:id" component={Post} />
    </div>
  </Router>
);

export default App;
