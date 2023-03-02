import React from "react";
/* import header logo kasa image */
import logo from "./logoKasa.png";
/* import NavLink from react-router-dom */
import { NavLink } from "react-router-dom";
/*import header css */
import "./Header.scss";
/* create a header component */

export default function Header() {
  return (
    <header>
    <div className="header-logo">
      <img className="header-img" src={logo} alt="kasa logo" />
    </div>
      <nav className="navbar">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">&Agrave; propos</NavLink>
      </nav>
    </header>
  );
}
