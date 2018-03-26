import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Header from "./Header";
import Gallery from "./Gallery";
import Profile from "./Profile";
import Contact from "./Contact";
import Post from "./Post";
import Footer from "./Footer";

const App = () => (
  <Router>
    <div>
      <Header />
      <Redirect exact from="/" to="/portfolio" />
      <Route exact path="/portfolio" component={Gallery} />
      <Route path="/profile" component={Profile} />
      <Route path="/contact" component={Contact} />
      <Route path="/posts/:id" component={Post} />
      <Footer />
    </div>
  </Router>
);

export default App;
