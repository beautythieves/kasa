import React from "react";
/* about page */
import backgroundImage from "../images/aboutback.png";
import Collapse from "../components/Collapse/Collapse";
/*import about scss*/
import "./AboutPage.scss";
import Banner from "../components/banner/Banner";
export default function About() {
  return (
    <main className="about_container">
      <Banner image={backgroundImage}  />
      <img src={backgroundImage} alt="background" />
     
      <div className="about_collapse_container">
        <Collapse
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale.
          Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        />
        <Collapse
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de note plateforme."
        />
        <Collapse
          title="Service"
          content="Nos équipes se tiennent à votre disposition pour vous forunir une expérience parfaite. N'hésitez-pas à nous contacter pour toute question ou suggestion."
        />
        <Collapse
          title="Sécurité"
          content="La sécurité est une priorité pour Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque 
          logmeent correspond à des critères de sécurité stricts. En laissant une note et un commentaire, vous contribuez à la sécurité de la communauté Kasa."
        />
      </div>
    </main>
  );
}
