import { useApp } from "../../context/AppContext";

const STEPS = [
  {
    num: "01", icon: "💬", title: "Découverte",
    desc: "On discute de votre projet, de vos besoins et objectifs. Je vous conseille sur les meilleures solutions adaptées à votre budget.",
    tag: "Écoute & conseil",
  },
  {
    num: "02", icon: "✏️", title: "Conception",
    desc: "Proposition détaillée avec planning et maquettes si nécessaire. Tout est validé ensemble avant de commencer.",
    tag: "Planning & design",
  },
  {
    num: "03", icon: "⚡", title: "Développement",
    desc: "Développement avec mises à jour régulières. Votre retour est intégré à chaque étape pour un résultat parfait.",
    tag: "Code & itérations",
  },
  {
    num: "04", icon: "🚀", title: "Livraison",
    desc: "Tests complets, corrections finales et mise en ligne. Je vous accompagne après la livraison pour toute évolution.",
    tag: "Mise en ligne",
  },
];

export default function Process() {
  const { activeSection } = useApp();
  const isActive = activeSection === "process";

  return (
    <section className={`section${isActive ? " active" : ""}`} id="process">
      <div className="container">
        <h2 className="section-title">Comment je <span>travaille</span></h2>
        <p className="section-subtitle">Un processus transparent du début à la fin</p>

        <div className="process-timeline">
          {STEPS.map((step, i) => (
            <div key={i} className="process-card" style={{ "--delay": `${0.1 + i * 0.15}s` }}>
              <div className="process-card__bg-num">{step.num}</div>
              <div className="process-card__top">
                <div className="process-card__icon-ring">
                  <span className="process-card__icon">{step.icon}</span>
                </div>
                <span className="process-card__tag">{step.tag}</span>
              </div>
              <h3 className="process-card__title">{step.title}</h3>
              <p className="process-card__desc">{step.desc}</p>
              <div className="process-card__index">{step.num}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
