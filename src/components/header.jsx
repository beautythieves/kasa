import React from 'react';
/* import header image */
import header from '../images/Header.png';
/* create a header component */
/* get scr header image */

export default function Header() {
  return (
    <header>
  <img className="header" src={header} alt="kasa logo"/>
  </header>
  )
}
