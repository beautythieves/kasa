import React from "react";
import Erreur from "./404.png";
import Oups from "./Oups.png";
import "./Error.css";
import { NavLink } from "react-router-dom";

const Error = () => (
  <div className="error">
    <img src={Erreur} alt="Erreur 404" />

    <img src={Oups} alt="Oups" />
    <p className= "return-home">
        <NavLink to="/">Retourner sur la page d'accueil</NavLink>
    </p>
  </div>
);

export default Error;
