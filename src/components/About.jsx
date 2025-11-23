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
            Issu de la <span>communication digitale</span>, j’ai développé des compétences solides en <span>stratégie éditoriale, création de contenus, SEO/SEA et gestion de projet</span>.
          </p>

          <p>
            Le <span>développement web</span> s’est imposé comme la suite logique de mon parcours : un moyen de transformer mes idées, mes contenus et mes intentions UX en interfaces concrètes, modernes et fonctionnelles. C’est ce qui m’a poussé à élargir mes compétences vers la technique.
          </p>

          <p>
            La formation <span><a href="https://openclassrooms.com/fr/paths/899-developpeur-web" target="_blank" rel="noopener noreferrer">
            OpenClassrooms</a></span> m’a permis d’acquérir une méthode rigoureuse et une bonne maîtrise des standards du web. J’ai travaillé sur plusieurs projets concrets en <span>React, JavaScript, Node.js et MongoDB</span>, qui m’ont permis d’acquérir des bases solides et opérationnelles.
          </p>

          <p>
            Je porte une attention particulière à la <span>lisibilité du code</span>, à l’<span>accessibilité</span>, à la <span>cohérence visuelle</span> et à la <span>performance</span>.
          </p>

          <p>
            Mon objectif est d’évoluer dans un environnement où communication digitale et développement front-end se complètent, afin de contribuer à des projets concrets, bien construits et centrés sur l’utilisateur.
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