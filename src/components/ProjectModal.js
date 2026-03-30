import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="modal-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="modal">
        <div className="modal__header">
          <div>
            <h2 className="modal__title">{project.title}</h2>
            <p className="modal__tech">{project.tech}</p>
          </div>
          <button className="modal__close" onClick={onClose} aria-label="Fermer">
            <FaTimes />
          </button>
        </div>

        {project.img && (
          <img
            className="modal__img"
            src={project.img}
            alt={project.title}
          />
        )}

        <div className="modal__body">
          {project.description.map((para, i) => (
            <p key={i} className="modal__desc">{para}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
