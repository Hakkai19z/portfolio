import { useState, useEffect, useRef } from "react";
import { useApp } from "../../context/AppContext";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ROLES = [
  "Développeur Web Full-Stack",
  "Expert Automatisation Office",
  "Développeur React & Next.js",
  "Créateur d'expériences digitales",
];

const STATS = [
  { target: 8,   suffix: "+", label: "Projets réalisés" },
  { target: 2,   suffix: "+", label: "Ans d'expérience" },
  { target: 100, suffix: "%", label: "Satisfaction client" },
];

export default function Hero() {
  const { activeSection, navigate } = useApp();
  const [roleIdx, setRoleIdx] = useState(0);
  const [counts, setCounts] = useState(STATS.map(() => 0));
  const animated = useRef(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIdx(i => (i + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (activeSection !== "home" || animated.current) return;
    animated.current = true;
    STATS.forEach(({ target }, i) => {
      const steps = 40;
      const increment = target / steps;
      let current = 0;
      setTimeout(() => {
        const interval = setInterval(() => {
          current = Math.min(current + increment, target);
          setCounts(prev => {
            const next = [...prev];
            next[i] = Math.floor(current);
            return next;
          });
          if (current >= target) clearInterval(interval);
        }, 30);
      }, i * 200);
    });
  }, [activeSection]);

  return (
    <section className={`section${activeSection === "home" ? " active" : ""}`} id="home">
      <div className="container">
        <div className="hero">

          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Disponible pour de nouveaux projets
          </div>

          <h1 className="hero__name">
            Kahil <span className="accent">Mokhtari</span>
          </h1>

          <p className="hero__role">
            <strong key={roleIdx} className="hero__role-animated">{ROLES[roleIdx]}</strong>
          </p>

          <p className="hero__desc">
            Je crée des sites web modernes et j'automatise vos fichiers Office —
            pour faire avancer votre business plus vite.
          </p>

          <div className="hero__ctas">
            <button className="btn btn-primary" onClick={() => navigate("contact")}>
              Démarrer un projet →
            </button>
            <button className="btn btn-outline" onClick={() => navigate("services")}>
              Voir mes services
            </button>
          </div>

          <div className="hero__stats">
            {STATS.map((stat, i) => (
              <div key={i} className="hero__stat">
                <span className="hero__stat-num">{counts[i]}{stat.suffix}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="hero__socials">
            <a
              href="https://github.com/Hakkai19z"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/kahil-mokhtari/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
