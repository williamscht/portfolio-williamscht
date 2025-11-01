import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


export default function ProjectNavigation() {
  const location = useLocation();

  // Liste ordonnée de tes projets
  const projects = [
    { path: "/booki", label: "Booki" },
    { path: "/kasa", label: "Kasa" },
    { path: "/nina", label: "Nina Carducci" },
    { path: "/sophiebluel", label: "Sophie Bluel" },
    { path: "/grimoire", label: "Mon Vieux Grimoire" },
  ];

  // Trouve l’index du projet actuel
  const currentIndex = projects.findIndex(
    (project) => project.path === location.pathname
  );

  // Détermine les projets précédent et suivant
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="project-navigation">
      {prev && (
        <Link to={prev.path} className="nav-arrow left">
          <FaArrowLeft />
          <span>{prev.label}</span>
        </Link>
      )}

      {next && (
        <Link to={next.path} className="nav-arrow right">
          <span>{next.label}</span>
          <FaArrowRight />
        </Link>
      )}
    </div>
  );
}