import React from "react";
import ProjectTemplate from "../components/ProjectTemplate";
import ProjectNavigation from "../components/ProjectNavigation";

export default function Kasa() {
  return (
    <section className="project-page">
      <ProjectTemplate
        title="Kasa"
        image="/images/Kasa.webp"
        year="2024"
        link="https://williamscht.github.io/Kasa/"
        services={["Application React", "Gestion des routes dynamiques"]}
        mission="Développer une application de location immobilière en React, en assurant la navigation, la gestion dynamique des données et la conformité avec les maquettes Figma."
      />

      <div className="project-content">
        <h2 className="section-label">01 / Aperçu</h2>
        <p>
          Kasa est une application web de location de logements réalisée avec React. Ce projet m’a permis
          d’apprendre à structurer une application monopage, à gérer les routes avec React Router, et à manipuler des données
          dynamiques à partir de fichiers JSON.
        </p>

        <h2 className="section-label">02 / Stack technique</h2>
        <ul className="stack-list">
          <li>React.js</li>
          <li>React Router</li>
          <li>Vite</li>
          <li>CSS Modules / SCSS</li>
        </ul>

        <h2 className="section-label">03 / Résultats</h2>
        <p>
          Le site offre une navigation fluide entre les logements, avec un système de collapse dynamique et des carrousels d’images
          entièrement intégrés. Le code est propre, réutilisable et validé par ESLint.
        </p>

        <h2 className="section-label">04 / Perspectives</h2>
        <p>
          À terme, j’aimerais y intégrer une API réelle et une base de données pour gérer les annonces et les utilisateurs.
        </p>
      </div>

      <ProjectNavigation
        prev={{ path: "/booki", label: "Booki" }}
        next={{ path: "/nina", label: "Nina Carducci" }}
      />
    </section>
  );
}