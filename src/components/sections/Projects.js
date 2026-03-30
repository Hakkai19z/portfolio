import { useApp } from "../../context/AppContext";

const PROJECTS = [
  {
    title: "OptiFleet",
    tech: "PHP · MySQL · Bootstrap",
    gradient: "linear-gradient(135deg, #6366f1 0%, #4338ca 100%)",
    description: [
      "Application web complète de gestion de flotte automobile : suivi des véhicules, chauffeurs et interventions en temps réel.",
      "Tableau de bord administrateur, gestion des réservations, historique des maintenances et rapports exportables.",
    ],
    github: "https://github.com/Hakkai19z/OptiFleet",
  },
  {
    title: "Symfony Blog",
    tech: "Symfony · PHP · Twig · MySQL",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
    description: [
      "Blog complet développé avec Symfony — gestion des articles, catégories, commentaires et authentification utilisateur.",
      "Architecture MVC propre, Doctrine ORM, formulaires Symfony et gestion des rôles admin/user.",
    ],
    github: "https://github.com/Hakkai19z/Synfony_Blog",
  },
  {
    title: "E-Shop",
    tech: "PHP · MySQL · HTML/CSS",
    gradient: "linear-gradient(135deg, #22d3ee 0%, #0284c7 100%)",
    description: [
      "Site e-commerce avec catalogue produits, panier dynamique, système de commandes et interface d'administration.",
      "Authentification sécurisée, gestion des stocks et suivi des commandes en temps réel.",
    ],
    github: "https://github.com/Hakkai19z/ESHOP-",
  },
  {
    title: "Librairie",
    tech: "PHP · MySQL · API Google Books",
    gradient: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    description: [
      "Application de gestion de bibliothèque intégrant l'API Google Books pour rechercher et ajouter des livres par genre ou titre.",
      "Système d'inscription sécurisé, bibliothèque personnelle par utilisateur avec ajout, visualisation et suppression de livres.",
    ],
    github: "https://github.com/Hakkai19z/Librairie",
  },
  {
    title: "Space Odyssey",
    tech: "PHP · JavaScript · HTML/CSS",
    img: "img/projects/space-odyssey.jpg",
    description: [
      "Site de réservation de vols et d'hôtels dans l'espace — identité visuelle complète, logo, charte graphique et slogan.",
      "Développé en HTML, CSS et JavaScript avec un travail sur le référencement SEO.",
    ],
    github: "https://github.com/Hakkai19z/SpaceOdyssey",
  },
  {
    title: "Pierre Papier Ciseaux",
    tech: "JavaScript · HTML/CSS",
    gradient: "linear-gradient(135deg, #f97316 0%, #c2410c 100%)",
    description: [
      "Jeu classique Pierre Papier Ciseaux jouable contre une IA, avec animations et score en temps réel.",
      "Interface responsive, logique de jeu en JavaScript pur, sans dépendances externes.",
    ],
    github: "https://github.com/Hakkai19z/Pierre-Papier-Ciseaux",
  },
];

export default function Projects() {
  const { activeSection, setProjectModal } = useApp();

  return (
    <section className={`section${activeSection === "projects" ? " active" : ""}`} id="projects">
      <div className="container">
        <h2 className="section-title">Mes <span>Réalisations</span></h2>
        <p className="section-subtitle">Quelques projets qui illustrent mon savoir-faire</p>

        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <div
              key={i}
              className="project-card"
              onClick={() => setProjectModal(project)}
            >
              <div className="project-card__img">
                {project.img ? (
                  <img src={project.img} alt={project.title} />
                ) : (
                  <div className="project-card__gradient" style={{ background: project.gradient }}>
                    <span className="project-card__gradient-title">{project.title}</span>
                  </div>
                )}
                <div className="project-card__overlay">
                  <span className="project-card__overlay-label">Voir détails</span>
                </div>
              </div>
              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <span className="project-card__tech">{project.tech}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
