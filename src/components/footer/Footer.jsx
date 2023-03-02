import React from 'react';
import './Footer.scss';

/* create footer component*/
import logo from './LOGO.png';
export default function Footer() {
    return (
        <footer className="footer">
<img className= "footer_img" src={logo} alt ="footer logo kasa" />     
        <p className= "allright">Ⓒ 2020 Kasa.All rights reserved</p>
        </footer>
    );
    }
