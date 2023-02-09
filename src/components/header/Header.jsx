import React from "react";
/* import header logo kasa image */
import logo from "./logoKasa.png";
/* import NavLink from react-router-dom */
/*import { NavLink } from "react-router-dom";*/
/*import header css */
import "./Header.css";
/* create a header component */

export default function Header() {
  return (
    <header>
      <img className="header-img" src={logo} alt="kasa logo" />
      <nav className ="navbar">
      <a href="/">Accueil</a>
      <a href="/A_propos">&Agrave; propos</a>

      {/* <NavLink to ="/">Accueil</NavLink>
      <NavLink to ="/A_propos">&Agrave; propos</NavLink> */}
       
      </nav>
    </header>
  );
}
