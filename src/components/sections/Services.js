import { useApp } from "../../context/AppContext";

const WEB_FEATURES = [
  "Sites vitrines & landing pages",
  "Applications web React / Next.js",
  "Sites e-commerce",
  "Responsive mobile & optimisé SEO",
  "Intégration API & back-end",
];

const AUTO_FEATURES = [
  "Tableaux de bord Excel dynamiques",
  "Macros VBA & automatisation avancée",
  "Rapports PowerPoint auto-générés",
  "Imports / exports & traitement de données",
  "Templates professionnels sur mesure",
];

export default function Services() {
  const { activeSection, navigate } = useApp();

  return (
    <section className={`section${activeSection === "services" ? " active" : ""}`} id="services">
      <div className="container">
        <h2 className="section-title">Mes <span>Services</span></h2>
        <p className="section-subtitle">Des solutions sur-mesure adaptées à vos besoins</p>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-card__header">
              <div className="service-card__icon">🌐</div>
              <div>
                <span className="service-card__tag">Développement</span>
                <h3 className="service-card__name">Sites & Applications Web</h3>
              </div>
            </div>
            <p className="service-card__desc">
              Des sites vitrines modernes, des landing pages percutantes et des applications web
              sur mesure — pour propulser votre présence en ligne.
            </p>
            <ul className="service-card__features">
              {WEB_FEATURES.map((f, i) => (
                <li key={i}>
                  <span className="feature-tick">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="service-card__btn"
              onClick={(e) => { e.preventDefault(); navigate("contact"); }}
            >
              Demander un devis
            </a>
          </div>

          <div className="service-card service-card--cyan">
            <div className="service-card__header">
              <div className="service-card__icon service-card__icon--cyan">📊</div>
              <div>
                <span className="service-card__tag service-card__tag--cyan">Automatisation</span>
                <h3 className="service-card__name">Excel · PowerPoint · Word</h3>
              </div>
            </div>
            <p className="service-card__desc">
              Fini les tâches répétitives ! J'automatise vos fichiers Office avec des macros VBA
              pour vous faire gagner des heures chaque semaine.
            </p>
            <ul className="service-card__features">
              {AUTO_FEATURES.map((f, i) => (
                <li key={i}>
                  <span className="feature-tick feature-tick--cyan">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="service-card__btn"
              onClick={(e) => { e.preventDefault(); navigate("contact"); }}
            >
              Demander un devis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
