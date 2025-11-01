import React from "react";
import ProjectTemplate from "../components/ProjectTemplate";
import ProjectNavigation from "../components/ProjectNavigation";

export default function Booki() {
  return (
    <section className="project-page">
      <ProjectTemplate
        title="Booki"
        image="/images/Booki.webp"
        year="2024"
        link="https://williamscht.github.io/Booki/"
        services={["Intégration HTML & CSS", "Responsive design"]}
        mission="Concevoir une page d’accueil moderne et responsive pour une agence de voyage, fidèle à la maquette Figma fournie par OpenClassrooms."
      />

      {/* bloc Aperçu */}
      <div className="project-content">
        <h2 className="section-label">01 / Aperçu</h2>
        <p>
          Booki est le premier projet de ma formation OpenClassrooms. Il m’a
          permis d’apprendre à transformer une maquette Figma en site web
          statique, fidèle au design, tout en respectant les bonnes pratiques
          d’intégration.
        </p>
        <p>
          Le site a été entièrement codé en HTML5 et CSS3 sans framework, avec
          un fort accent mis sur la sémantique, la hiérarchisation du contenu et
          la compatibilité multi-écrans.
        </p>

        <h2 className="section-label">02 / Stack technique</h2>
        <ul className="stack-list">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Responsive design (Media Queries)</li>
          <li>Accessibilité et SEO de base</li>
        </ul>

        <h2 className="section-label">03 / Résultats</h2>
        <p>
          Le site est entièrement responsive et obtient un score parfait sur
          Lighthouse pour les performances et l’accessibilité. Cette première
          expérience m’a permis de maîtriser la rigueur du code propre et la
          gestion des grilles flexibles.
        </p>

        <h2 className="section-label">04 / Perspectives</h2>
        <p>
          J’envisage d’ajouter une version dynamique avec React, permettant la
          recherche et le filtrage des logements directement depuis une API.
        </p>
      </div>

      <ProjectNavigation next={{ path: "/kasa", label: "Kasa" }} />
    </section>
  );
}