import { useState } from "react";
import { useApp } from "../../context/AppContext";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const INFO = [
  { icon: <FaMapMarkerAlt />, label: "Localisation",  value: "Paris, France",              href: null },
  { icon: <FaPhone />,        label: "Téléphone",     value: "+33 6 46 13 08 52",          href: "tel:+33646130852" },
  { icon: <FaEnvelope />,     label: "Email",         value: "kahil.mokhtari@gmail.com",   href: "mailto:kahil.mokhtari@gmail.com" },
  { icon: <FaClock />,        label: "Disponibilité", value: "Réponse sous 24h",           href: null },
];

export default function Contact() {
  const { activeSection, showToast } = useApp();
  const [form, setForm]     = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(form),
      });
      if (res.ok) {
        showToast("Message envoyé ! Je vous réponds sous 24h.", "success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        showToast("Erreur lors de l'envoi. Écrivez-moi directement par email.", "error");
      }
    } catch {
      showToast("Erreur réseau. Réessayez ou contactez-moi par email.", "error");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className={`section${activeSection === "contact" ? " active" : ""}`} id="contact">
      <div className="container">
        <h2 className="section-title">Démarrons votre <span>Projet</span></h2>
        <p className="section-subtitle">Discutons de votre idée — première consultation gratuite</p>

        <div className="contact-grid">
          <div className="contact-info">
            {INFO.map((item, i) => (
              <div key={i} className="contact-info-card">
                <div className="contact-info-card__icon">{item.icon}</div>
                <div>
                  <div className="contact-info-card__label">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className="contact-info-card__value">{item.value}</a>
                  ) : (
                    <span className="contact-info-card__value">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__row">
              <div className="form-field">
                <input name="name" value={form.name} onChange={handleChange} placeholder="Votre nom" required />
              </div>
              <div className="form-field">
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Votre email" required />
              </div>
            </div>

            <div className="form-field">
              <input name="subject" value={form.subject} onChange={handleChange} placeholder="Sujet" />
            </div>

            <div className="form-field">
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Décrivez votre projet..." required />
            </div>

            <button type="submit" className="form-submit" disabled={sending}>
              {sending
                ? <><span className="spinner" /> Envoi en cours...</>
                : "Envoyer le message →"
              }
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
