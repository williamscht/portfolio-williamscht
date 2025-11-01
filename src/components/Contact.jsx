import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="about-section">
      {/* Colonne gauche */}
      <div className="about-left">
        <span className="about-number">03</span>
        <span className="about-title">CONTACT</span>
      </div>

      {/* Colonne droite */}
      <div className="about-right contact-wrapper">
        <p>
           👋  Une idée, un projet, ou simplement envie d’échanger ?  
          Je suis toujours ouvert à de nouvelles collaborations.
        </p>

        <a
          href="mailto:contact@exemple.com?subject=Contact%20depuis%20votre%20portfolio&body=Bonjour%20William%2C%0A%0AJe%20souhaite%20vous%20contacter%20concernant..." aria-label="Envoyer un mail à William Schmitt"
          className="contact-mail"
        >
          williamscht@dev.fr
        </a>
      </div>
    </section>
  );
}