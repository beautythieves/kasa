import React from "react";
import Erreur from "./404.png";
import "./Error.scss";
import { NavLink } from "react-router-dom";

const Error = () => (
  <div className="error">
    <img className = "error_img" src={Erreur} alt="Erreur 404" />

    <p className= "oups" >Oups! La page que vous demandez n'existe pas.</p>
    <p className= "return-home">
        <NavLink to="/">Retourner sur la page d'accueil</NavLink>
    </p>
  </div>
);

export default Error;
