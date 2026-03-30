import { useEffect } from "react";
import { FaGithub, FaTimes, FaExternalLinkAlt, FaFileAlt } from "react-icons/fa";

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

          <div className="modal__links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="modal__link">
                <FaGithub /> GitHub
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="modal__link">
                <FaExternalLinkAlt /> Démo
              </a>
            )}
            {project.docs && project.docs.map((doc, i) => (
              <a key={i} href={doc.url} target="_blank" rel="noopener noreferrer" className="modal__link">
                <FaFileAlt /> {doc.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
