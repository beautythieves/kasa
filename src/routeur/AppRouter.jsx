import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Home from "../pages/HomePage";
import Error from "../pages/ErrorPage";
import About from "../pages/AboutPage";
import Accomodation from "../pages/AccomodationPage";

export default function AppRouter() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accomodation/:id" element={<Accomodation />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}
