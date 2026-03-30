import { useApp } from "../../context/AppContext";

const STEPS = [
  {
    num: "01", icon: "💬", title: "Découverte",
    desc: "On discute de votre projet, de vos besoins et objectifs. Je vous conseille sur les meilleures solutions adaptées à votre budget.",
  },
  {
    num: "02", icon: "✏️", title: "Conception",
    desc: "Proposition détaillée avec planning et maquettes si nécessaire. Tout est validé ensemble avant de commencer.",
  },
  {
    num: "03", icon: "⚡", title: "Développement",
    desc: "Développement avec mises à jour régulières. Votre retour est intégré à chaque étape pour un résultat parfait.",
  },
  {
    num: "04", icon: "🚀", title: "Livraison",
    desc: "Tests complets, corrections finales et mise en ligne. Je vous accompagne après la livraison pour toute évolution.",
  },
];

export default function Process() {
  const { activeSection } = useApp();

  return (
    <section className={`section${activeSection === "process" ? " active" : ""}`} id="process">
      <div className="container">
        <h2 className="section-title">Comment je <span>travaille</span></h2>
        <p className="section-subtitle">Un processus transparent du début à la fin</p>

        <div className="process-grid">
          {STEPS.map((step, i) => (
            <div key={i} className="process-step">
              <span className="process-step__num">{step.num}</span>
              <span className="process-step__icon">{step.icon}</span>
              <h3 className="process-step__title">{step.title}</h3>
              <p className="process-step__desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
