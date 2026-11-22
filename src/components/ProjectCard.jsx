import { Link } from "react-router-dom";

export default function ProjectCard({ project, featured = false }) {
  return (
    <article className={`project-card ${featured ? "is-featured" : ""}`} id={project.id}>
      <div
        className={`project-visual${project.cover ? " has-cover" : ""}`}
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
      <div className="project-body">
        <p className="project-role">
          <span>Cargo</span>
          {project.role}
        </p>
        <h3>{project.name}</h3>
        <p className="project-summary">{project.summary}</p>
        <ul className="tags">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="project-actions">
          <a className="btn btn-lime" href={project.url} target="_blank" rel="noopener noreferrer">
            Ver site
          </a>
          {project.store && (
            <a className="btn btn-ghost" href={project.store} target="_blank" rel="noopener noreferrer">
              Google Play
            </a>
          )}
          <Link className="btn btn-text" to={`/projetos?projeto=${project.id}`}>
            Detalhes
          </Link>
        </div>
      </div>
    </article>
  );
}
