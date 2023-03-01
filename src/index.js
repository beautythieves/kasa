import React from "react";
import ReactDOM from "react-dom/client";
/*import style.scss from styles/style.csss*/
import "./styles/style.scss";
import "index.css" 
import reportWebVitals from "./reportWebVitals";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/HomePage";

import { Routes, BrowserRouter, Route } from "react-router-dom";
import Error from "./pages/ErrorPage";
import About from "./pages/AboutPage";
import Accomodation from "./pages/AccomodationPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/accomodation/:id" element={<Accomodation />}></Route>
        {/* if the user types in a wrong path (none of the path below), it will show the error page */}
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
