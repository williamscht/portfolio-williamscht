import React from "react";


export default function ProjectTemplate({
  title = "",
  image = "",
  year = "",
  link = "",
  services = [],
  mission = "",
  stack = [],
  results = "",
  improvements = "",
}) {
  return (
    <div className="project-template">
      <div className="project-header">
        <h1 className="project-title">{title}</h1>

        <div className="project-meta">
          <div>
            <span>Année</span>
            <p>{year}</p>
          </div>

          <div>
            <span>Lien</span>
            {link ? (
              <a href={link} target="_blank" rel="noopener noreferrer">
                Voir le site ou Github
              </a>
            ) : (
              <p>Non disponible</p>
            )}
          </div>

          <div>
            <span>Compétences mobilisées</span>
            {Array.isArray(services) && services.length > 0 ? (
              services.map((service, index) => <p key={index}>{service}</p>)
            ) : (
              <p>—</p>
            )}
          </div>

          <div className="mission">
            <span>Mission</span>
            <p>{mission}</p>
          </div>
        </div>
      </div>

      <div className="project-image">
        {image ? (
          <img
            src={image}
            alt={`Aperçu du projet ${title}`}
            onError={(e) => (e.currentTarget.src = "/images/default.jpg")}
            loading="lazy"
          />
        ) : (
          <div className="no-image">Image non disponible</div>
        )}
      </div>

      <div className="project-body">
        {Array.isArray(stack) && stack.length > 0 && (
          <>
            <h2 className="section-label">02 / Stack technique</h2>
            <ul className="stack-list">
              {stack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </>
        )}

        {results && (
          <>
            <h2 className="section-label">03 / Résultats</h2>
            <p>{results}</p>
          </>
        )}

        {improvements && (
          <>
            <h2 className="section-label">04 / Perspectives</h2>
            <p>{improvements}</p>
          </>
        )}
      </div>
    </div>
  );
}