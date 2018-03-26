import "flexboxgrid2/flexboxgrid2.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./fonts/index.css"
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
