import React from 'react';
/* import header logo kasa image */
import logo from '../images/logoKasa.png';
import '../styles/header.css';
/* create a header component */

export default function Header() {
  return (
    <header>
    <p>
  <img className="header" src={logo} alt="kasa logo"/></p>
  <p> Accueil</p>
  <p> &Agrave; propos</p>
  </header>
  )
}
