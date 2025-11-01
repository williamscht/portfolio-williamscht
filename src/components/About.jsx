import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

export default function About() {
  return (
    <section id="about">
      {/* Bloc 01 : Pitch */}
      <div className="about-section">
        <div className="about-left">
          <span className="about-number">01</span>
          <span className="about-title">À PROPOS</span>
        </div>

        <div className="about-right">
          <p>
            Je suis <span>William Schmitt</span>, développeur web junior spécialisé dans la création d’interfaces modernes, performantes et accessibles. 
            J’aime concevoir des sites clairs et bien structurés, où la technique sert avant tout l’usage.
          </p>

          <p>
            Issu du domaine créatif, j’ai choisi le développement pour allier design et logique. 
            La formation <span>OpenClassrooms</span> m’a permis d’acquérir une méthode rigoureuse et une bonne maîtrise des standards du web.
          </p>

          <p>
            Je m’attache à produire un code propre, maintenable et optimisé, tout en gardant une attention constante à l’expérience utilisateur. 
            Curieux et organisé, je cherche toujours à comprendre le “pourquoi” derrière chaque fonctionnalité.
          </p>

          <p>
            Mon objectif est de rejoindre une équipe dynamique où je pourrai continuer à progresser, 
            consolider mes compétences front-end et participer à des projets utiles et bien conçus.
          </p>
        </div>
      </div>

      {/* Bloc 02 : Technologies */}
      <div className="about-section">
        <div className="about-left">
          <span className="about-number">02</span>
          <span className="about-title">TECHNOLOGIES APPRISES</span>
        </div>

        <div className="about-right tech-icons">
          <FaHtml5 className="tech-icon html" title="HTML5" />
          <FaCss3Alt className="tech-icon css" title="CSS3" />
          <FaJs className="tech-icon js" title="JavaScript" />
          <FaReact className="tech-icon react" title="React" />
          <FaNodeJs className="tech-icon node" title="Node.js" />
          <SiMongodb className="tech-icon mongo" title="MongoDB" />
        </div>
      </div>
    </section>
  );
}