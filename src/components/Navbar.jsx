import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";


export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const location = useLocation();

  const handleSetActive = (link) => {
    setActiveLink(link);

    // Si on est déjà sur la page d'accueil et qu'on clique sur "Accueil"
    if (link === "home" && location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <HashLink
            smooth
            to="/#hero"
            className={activeLink === "home" ? "nav-active" : ""}
            onClick={() => handleSetActive("home")}
          >
            Accueil
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            to="/#about"
            className={activeLink === "about" ? "nav-active" : ""}
            onClick={() => handleSetActive("about")}
          >
            À propos
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            to="/#projects"
            className={activeLink === "projects" ? "nav-active" : ""}
            onClick={() => handleSetActive("projects")}
          >
            Projets
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            to="/#contact"
            className={activeLink === "contact" ? "nav-active" : ""}
            onClick={() => handleSetActive("contact")}
          >
            Contact
          </HashLink>
        </li>
      </ul>
    </nav>
  );
}