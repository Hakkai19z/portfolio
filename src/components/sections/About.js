import { useApp } from "../../context/AppContext";

const SKILLS = [
  { label: "Web",            tags: ["React", "Next.js", "PHP", "HTML/CSS", "JavaScript"] },
  { label: "Automatisation", tags: ["VBA / Macros", "Excel", "PowerPoint", "PowerShell"] },
  { label: "Outils",         tags: ["Git", "MySQL", "Flutter", "Symfony", "Figma"] },
];

export default function About() {
  const { activeSection } = useApp();

  return (
    <section className={`section${activeSection === "about" ? " active" : ""}`} id="about">
      <div className="container">
        <h2 className="section-title">À <span>Propos</span></h2>
        <p className="section-subtitle">Développeur passionné basé à Paris, France</p>

        <div className="about-grid">
          <div className="about-photo">
            <img
              className="about-photo__img"
              src="img/about/photo.jpeg"
              alt="Kahil Mokhtari"
            />
            <div className="about-photo__badge">
              <span className="about-photo__badge-icon">💻</span>
              <span className="about-photo__badge-text">Full-Stack<br />Developer</span>
            </div>
          </div>

          <div>
            <p className="about-bio">
              Je suis <strong>Kahil Mokhtari</strong>, développeur web full-stack basé à Paris.
              Je transforme vos idées en produits digitaux concrets — sites modernes, applications web
              sur-mesure et outils Office automatisés qui font vraiment gagner du temps.
            </p>
            <p className="about-bio">
              Chaque projet est livré avec soin, dans les délais et adapté à votre budget.
              Mon objectif : que vous repartiez avec un outil dont vous êtes fier,
              et un partenaire tech sur qui compter pour la suite.
            </p>

            <div className="about-skills">
              {SKILLS.map((s, i) => (
                <div key={i} className="about-skill-row">
                  <span className="about-skill-label">{s.label}</span>
                  <div className="about-skill-tags">
                    {s.tags.map((tag, j) => (
                      <span key={j} className="about-skill-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="about-actions">
              <a
                href="mailto:Kahil.mokhtari@gmail.com"
                className="about-cv"
              >
                ✉ kahil.mokhtari@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
