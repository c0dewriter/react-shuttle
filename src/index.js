/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Routes} from "./Core/Router";
import reportWebVitals from "./reportWebVitals";


ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
