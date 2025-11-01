import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";



export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollerRef = useRef(null);
  const navigate = useNavigate();

  // Association nom du repo → image locale
  const projectImages = {
    "booki": "/images/Booki.webp",
    "kasa": "/images/Kasa.webp",
    "portfolio-architecte-sophie": "/images/portfolio-architecte-sophie.webp",
    "mon-vieux-grimoire": "/images/Mon-Vieux-Grimoire.webp",
    "nina-carducci-dev-seo": "/images/Nina-Carducci-Dev-SEO.webp",
  };


 
  const projectRoutes = {
    "booki": "/booki",
    "kasa": "/kasa",
    "nina-carducci-dev-seo": "/nina",
    "portfolio-architecte-sophie": "/sophiebluel",
    "mon-vieux-grimoire": "/grimoire",
  };

  // Exclure certains dépôts spécifiques
  const excludedRepos = ["portfolio-williamscht", "menu-maker-by-qwenta"];


  // Fetch tous les dépôts GitHub publics
  useEffect(() => {
  async function fetchRepos() {
    try {
      const res = await fetch(
        "https://api.github.com/users/williamscht/repos?per_page=100&type=owner&sort=updated"
      );
      if (!res.ok) throw new Error(`Erreur API GitHub : ${res.status}`);
      const data = await res.json();

      setRepos(data);
      setLoading(false);

      // cache avec un timestamp
      localStorage.setItem(
        "reposData",
        JSON.stringify({ timestamp: Date.now(), data })
      );
    } catch (error) {
      console.error("❌ Erreur de récupération :", error);
      setLoading(false);
    }
  }

  // Vérifie si des données sont déjà en cache
  const cached = localStorage.getItem("reposData");
  if (cached) {
    const { timestamp, data } = JSON.parse(cached);
    const twentyFourHours = 24 * 60 * 60 * 1000;
    const isCacheValid = Date.now() - timestamp < twentyFourHours;

    if (isCacheValid) {
      // Données récentes : on les utilise directement
      setRepos(data);
      setLoading(false);
      console.log("Données chargées depuis le cache local");
      return; 
    } else {
      console.log("Cache expiré, mise à jour des dépôts GitHub...");
    }
  }

  // Pas de cache ou cache expiré → on fetch
  fetchRepos();
}, []);



  // Scroll horizontal 
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onWheel = (e) => {
      const mainlyVertical = Math.abs(e.deltaY) > Math.abs(e.deltaX);
      if (!mainlyVertical) return;
      const atStart = el.scrollLeft <= 0;
      const atEnd = Math.ceil(el.scrollLeft + el.clientWidth) >= el.scrollWidth;
      if ((e.deltaY < 0 && atStart) || (e.deltaY > 0 && atEnd)) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  if (loading) return <p style={{ padding: "2rem" }}>Chargement des projets GitHub...</p>;
  if (!repos || repos.length === 0) return <p>Aucun projet trouvé sur GitHub.</p>;

 
  return (
    <section className="projects" id="projects">
      <div className="projects-head">
        <h2 className="projects-title">Mes réalisations</h2>
      </div>

      <div className="projects-scroller" ref={scrollerRef}>

        {/*logique d'image à l’intérieur du .map() */}

        {repos
          .filter((repo) => !excludedRepos.includes(repo.name.toLowerCase()))
          .map((repo)=> {
          console.log("→ Dépôt détecté :", repo.name);
          console.log("🔗 Lien généré :", projectRoutes[repo.name.toLowerCase()]);

          const image =
            projectImages[repo.name.toLowerCase()] || "/images/default.webp";

          return (
            <div
                key={repo.id}
                className="project-card"
                onClick={() => {
                  const route = projectRoutes[repo.name.toLowerCase()];
                  if (route) {
                    navigate(route);
                    setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }, 100);
                    
                  } else {
                    window.open(repo.html_url, "_blank"); // ouvre GitHub si pas de route
                  }
                }}
                style={{ cursor: "pointer" }}
              >
                <div className="project-image">
                  <img
                    src={image}
                    alt={repo.name}
                    onError={(e) => (e.currentTarget.src = "/images/default.webp")}
                    loading="lazy"
                  />
                </div>

                <div className="project-meta">
                  <h3 className="project-title">{repo.name.replace(/-/g, " ")}</h3>
                  <p className="project-desc">
                    {repo.description || "Aucune description fournie."}
                  </p>

                  <div className="project-footer">
                    {repo.language && <span className="lang-chip">{repo.language}</span>}
                    <span className="project-link">Voir le projet →</span>
                  </div>
                </div>
              </div>
          );
        })}
      </div>
    </section>
  );
}