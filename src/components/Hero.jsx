export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Bonjour,<br />
            Je suis <span>William Schmitt 👨🏽‍💻</span>
          </h1>

          <h2><span className="dot online"></span> Développeur Web Junior</h2>

          <p className="hero-description">
            Passionné par la création d’expériences web modernes, je conçois et développe
            des interfaces à la fois performantes, intuitives et accessibles.  
            J’aime transformer des concepts en produits concrets, en alliant rigueur
            technique, sens du détail et créativité.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">Voir mes projets</a>
            <a
              href="mailto:contact@exemple.com?subject=Contact%20depuis%20votre%20portfolio"
              className="btn btn-secondary"
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}