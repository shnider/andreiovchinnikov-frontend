import React from "react";

import Card from "./Card";

export default () => (
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <Card id="1" />
      </div>
      <div className="col-md-4">
        <Card id="2" />
      </div>
      <div className="col-md-4">
        <Card id="3" />
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <Card id="4" />
      </div>
      <div className="col-md-4">
        <Card id="5" />
      </div>
      <div className="col-md-4">
        <Card id="6" />
      </div>
    </div>
  </div>
);