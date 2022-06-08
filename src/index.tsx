import React from "react";
import ReactDOM from "react-dom/client";
import "./fonts/Montserrat/Montserrat-Regular.ttf";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Router>
    <App />
  </Router>
);
