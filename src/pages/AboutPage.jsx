import React from "react";
/* about page */
import backgroundImage from "../images/aboutback.png";
import Collapse from "../components/Collapse/Collapse";
/*import about scss*/
import "./AboutPage.scss";

export default function About() {
  return (
    <main className="about_container">
      <img src={backgroundImage} alt="background" />
      <div className="about_collapse_container">
        <Collapse
          title="Fiabilité"
          content="Les annonces en ligne sur notre site sont vérifiées en permanence. Nous veillons à la conformité des photographies des logements et au sérieux des annonceurs."
        />
        <Collapse
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de note plateforme."
        />
        <Collapse
          title="Service"
          content="Nos équipes se tiennent à votre disposition pour répondre à toutes vos questions de 8h à 20h tous les jours."
        />
        <Collapse
          title="Responsabilité"
          content="Kasa est une agence de voyage qui vous propose des séjours à la carte. Chaque annonceur doit avoir un profil certifié et chaque logement répond aux critères de sécurité."
        />
      </div>
    </main>
  );
}
