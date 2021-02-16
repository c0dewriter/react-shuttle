/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";


ReactDOM.render(
  <React.StrictMode>
    <div className="container mx-auto bg-gray-50">
      <div className="box-border border-2 transition duration-200 ease-out hover:shadow-xl">
        <ul className="list-disc list-inside p-5">
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
      </div>
      <button className="btn">Click me!</button>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
