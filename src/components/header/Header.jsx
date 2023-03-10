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
      <NavLink to="/" className={({isActive}) => (isActive ? "isActive" : '')}>Accueil</NavLink>
      <NavLink to="/about" className={({isActive}) => (isActive ? "isActive" : '')}>&Agrave; propos</NavLink>


      </nav>
    </header>
  );
}
