import React from "react";
import ProjectTemplate from "../components/ProjectTemplate";
import ProjectNavigation from "../components/ProjectNavigation";

export default function MonVieuxGrimoire() {
  return (
    <section className="project-page">
      <ProjectTemplate
        title="Mon Vieux Grimoire"
        image="/images/Mon-Vieux-Grimoire.webp"
        year="2025"
        link="https://github.com/williamscht/Mon-Vieux-Grimoire"
        services={["Développement backend", "API REST sécurisée"]}
        mission="Concevoir le backend complet d’une application de notation de livres, en Node.js, Express et MongoDB."
      />

      <div className="project-content">
        <h2 className="section-label">01 / Aperçu</h2>
        <p>
          Ce projet visait à construire une API REST complète pour gérer les livres et leurs notations. L’objectif principal
          était de garantir la sécurité, la validation des données et la scalabilité du backend.
        </p>

        <h2 className="section-label">02 / Stack technique</h2>
        <ul className="stack-list">
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>Middleware Multer & Auth JWT</li>
        </ul>

        <h2 className="section-label">03 / Résultats</h2>
        <p>
          L’API a passé avec succès les tests d’intégration fournis par OpenClassrooms. Toutes les routes CRUD ont été sécurisées
          et documentées dans Swagger.
        </p>

        <h2 className="section-label">04 / Perspectives</h2>
        <p>
          J’aimerais ajouter une interface front-end React pour la gestion des livres et des utilisateurs.
        </p>
      </div>

      <ProjectNavigation
        prev={{ path: "/nina-carducci", label: "Nina Carducci" }}
        next={{ path: "/sophie-bluel", label: "Sophie Bluel" }}
      />
    </section>
  );
}