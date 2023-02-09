import React from 'react';
import './Footer.css';

/* create footer component*/
import foot from './Footer.png';
export default function Footer() {
    return (
        <footer className="footer">
<img className= "footer_img" src={foot} alt ="" />     
        </footer>
    );
    }
