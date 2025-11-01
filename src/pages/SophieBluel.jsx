import React from "react";
import ProjectTemplate from "../components/ProjectTemplate";
import ProjectNavigation from "../components/ProjectNavigation";

export default function SophieBluel() {
  return (
    <section className="project-page">
      <ProjectTemplate
        title="Sophie Bluel"
        image="/images/portfolio-architecte-sophie.webp"
        year="2025"
        link="https://williamscht.github.io/portfolio-architecte-sophie/"
        services={["JavaScript pur", "Manipulation du DOM"]}
        mission="Créer une interface dynamique pour un portfolio d’architecte, avec un système de gestion des projets et une modale d’upload d’images."
      />

      <div className="project-content">
        <h2 className="section-label">01 / Aperçu</h2>
        <p>
          Ce projet a renforcé mes compétences en JavaScript vanilla et en gestion des événements DOM. J’ai développé un système
          de filtrage de projets, d’ouverture de modale et d’interaction dynamique avec une API.
        </p>

        <h2 className="section-label">02 / Stack technique</h2>
        <ul className="stack-list">
          <li>JavaScript (ES6+)</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>API REST</li>
        </ul>

        <h2 className="section-label">03 / Résultats</h2>
        <p>
          L’application gère les ajouts et suppressions d’images côté front, avec une interface fluide et réactive.
          Le code est organisé et documenté.
        </p>

        <h2 className="section-label">04 / Perspectives</h2>
        <p>
          J’aimerais migrer ce projet vers React afin de centraliser la gestion des états et d’améliorer la maintenabilité.
        </p>
      </div>

      <ProjectNavigation
        prev={{ path: "/mon-vieux-grimoire", label: "Mon Vieux Grimoire" }}
        next={{ path: "/booki", label: "Booki" }}
      />
    </section>
  );
}