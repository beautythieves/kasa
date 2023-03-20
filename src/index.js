import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.scss";
import "index.css" 
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routeur/AppRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
