import React from "react";
import ProjectTemplate from "../components/ProjectTemplate";
import ProjectNavigation from "../components/ProjectNavigation";

export default function NinaCarducci() {
  return (
    <section className="project-page">
      <ProjectTemplate
        title="Nina Carducci"
        image="/images/Nina-Carducci-Dev-SEO.webp"
        year="2024"
        link="https://williamscht.github.io/Nina-Carducci-Dev-SEO/"
        services={["Optimisation SEO", "Debug et performance web"]}
        mission="Optimiser le site vitrine d’une photographe professionnelle pour améliorer son référencement naturel et ses performances Lighthouse."
      />

      <div className="project-content">
        <h2 className="section-label">01 / Aperçu</h2>
        <p>
          Ce projet m’a permis d’aborder le référencement naturel (SEO) et les bonnes pratiques
          d’optimisation des performances web. J’ai corrigé des erreurs HTML, compressé les images et ajouté des balises sémantiques.
        </p>

        <h2 className="section-label">02 / Stack technique</h2>
        <ul className="stack-list">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>Audit Lighthouse</li>
        </ul>

        <h2 className="section-label">03 / Résultats</h2>
        <p>
          Le site est passé d’un score Lighthouse moyen à un score de 95+ sur l’ensemble des critères.
          J’ai également amélioré la compatibilité mobile et ajouté des microdonnées Schema.org.
        </p>

        <h2 className="section-label">04 / Perspectives</h2>
        <p>
          Prévoir une migration vers un framework moderne comme Next.js pour renforcer la performance et le SEO technique.
        </p>
      </div>

      <ProjectNavigation
        prev={{ path: "/kasa", label: "Kasa" }}
        next={{ path: "/grimoire", label: "Mon Vieux Grimoire" }}
      />
    </section>
  );
}