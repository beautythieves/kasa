import React from 'react';
import './Footer.scss';

/* create footer component*/
import logo from './LOGO.png';
import allrights from './Allrights.png';
export default function Footer() {
    return (
        <footer className="footer">
<img className= "footer_img" src={logo} alt ="footer logo kasa" />     
   <img className='allrights.img' src= {allrights} alt="all rights reserved" />
        </footer>
    );
    }
