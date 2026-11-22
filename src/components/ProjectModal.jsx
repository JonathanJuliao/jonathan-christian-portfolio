import { useEffect } from "react";
import { motion } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="modal-backdrop"
      role="presentation"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(event) => event.stopPropagation()}
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className={`project-visual modal-visual${project.cover ? " has-cover" : ""}`}
          data-tone={project.tone}
          aria-hidden="true"
        >
          {project.cover ? (
            <img className="project-cover" src={project.cover} alt="" />
          ) : (
            <span className="project-watermark">{project.name.slice(0, 2)}</span>
          )}
          <span className="project-kind">{project.kind}</span>
        </div>
        <div className="modal-body">
          <div className="modal-top">
            <p className="project-role">
              <span>Cargo</span>
              {project.role}
            </p>
            <button className="icon-btn" type="button" onClick={onClose} aria-label="Fechar detalhes">
              ×
            </button>
          </div>
          <h2 id="modal-title">{project.name}</h2>
          <div className="project-actions">
            <a className="btn btn-lime" href={project.url} target="_blank" rel="noopener noreferrer">
              Abrir site
            </a>
            {project.store && (
              <a className="btn btn-ghost" href={project.store} target="_blank" rel="noopener noreferrer">
                Google Play
              </a>
            )}
          </div>
          <p>{project.description}</p>
          {project.participation?.length > 0 && (
            <>
              <h3>Minha participação</h3>
              {project.participation.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </>
          )}
          <h3>No produto</h3>
          <ul className="scope">
            {project.scope.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul className="tags">
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}
