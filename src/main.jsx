import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const div = document.createElement("div");
div.setAttribute("id", "root");

div.innerHTML = "<h1>Hello</h1>";

const body = document.body;

body.appendChild(div);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
