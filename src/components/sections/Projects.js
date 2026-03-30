import { useApp } from "../../context/AppContext";

const PROJECTS = [
  {
    title: "OptiFleet",
    tech: "PHP · MySQL · Bootstrap",
    gradient: "linear-gradient(135deg, #6366f1 0%, #4338ca 100%)",
    description: [
      "Application web complète de gestion de flotte automobile développée en PHP/MySQL. Le système centralise le suivi en temps réel des véhicules, des chauffeurs et des interventions techniques sur une interface unifiée.",
      "Côté administration : tableau de bord avec indicateurs clés, gestion des réservations et des affectations, historique complet des maintenances et génération de rapports exportables en PDF/Excel.",
    ],
  },
  {
    title: "Symfony Blog",
    tech: "Symfony · PHP · Twig · MySQL",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
    description: [
      "Plateforme de blog full-featured construite sur le framework Symfony. L'application couvre la gestion des articles, des catégories, des commentaires et un système d'authentification sécurisé avec gestion des rôles admin/utilisateur.",
      "Architecture MVC rigoureuse, Doctrine ORM pour la persistance des données, formulaires Symfony avec validation, et protection CSRF intégrée. Interfaces séparées pour les lecteurs et les administrateurs.",
    ],
  },
  {
    title: "E-Shop",
    tech: "PHP · MySQL · HTML/CSS",
    gradient: "linear-gradient(135deg, #22d3ee 0%, #0284c7 100%)",
    description: [
      "Site e-commerce complet avec catalogue produits dynamique, panier persistant en session, tunnel de commande et interface d'administration dédiée à la gestion des produits et des commandes.",
      "Authentification sécurisée avec hachage des mots de passe, gestion des stocks en temps réel, suivi du statut des commandes et tableau de bord vendeur avec statistiques de ventes.",
    ],
  },
  {
    title: "Librairie",
    tech: "PHP · MySQL · API Google Books",
    gradient: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    description: [
      "Application de gestion de bibliothèque personnelle intégrant l'API Google Books pour enrichir automatiquement les fiches livres (couverture, synopsis, auteur) à partir d'une simple recherche par titre ou genre.",
      "Chaque utilisateur dispose d'une bibliothèque privée avec ajout, visualisation et suppression de livres. Inscription sécurisée, sessions utilisateur et interface épurée orientée expérience de lecture.",
    ],
  },
  {
    title: "Space Odyssey",
    tech: "PHP · JavaScript · HTML/CSS",
    img: "img/projects/space-odyssey.jpg",
    description: [
      "Site de réservation de vols et d'hôtels spatiaux — un projet créatif alliant développement web et direction artistique. Identité visuelle complète conçue from scratch : logo, charte graphique, typographie et slogan.",
      "Développé en HTML, CSS et JavaScript vanilla avec une attention particulière portée au référencement SEO : balises sémantiques, méta descriptions, structure des URLs et optimisation des temps de chargement.",
    ],
  },
  {
    title: "Pierre Papier Ciseaux",
    tech: "JavaScript · HTML/CSS",
    gradient: "linear-gradient(135deg, #f97316 0%, #c2410c 100%)",
    description: [
      "Jeu classique Pierre Papier Ciseaux entièrement jouable contre une IA avec trois niveaux de difficulté. L'interface propose des animations fluides sur chaque action et un système de score en temps réel.",
      "Développé en JavaScript pur sans aucune dépendance externe — logique de jeu, gestion des états, animations CSS et responsive design intégralement codés à la main.",
    ],
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
