import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { filters, projects } from "../data";

export default function Projects() {
  const [filter, setFilter] = useState("todos");
  const [params, setParams] = useSearchParams();
  const openId = params.get("projeto");

  const visible = useMemo(() => {
    if (filter === "todos") return projects;
    return projects.filter((project) => project.stack.includes(filter));
  }, [filter]);

  const selected = projects.find((project) => project.id === openId) || null;

  function close() {
    setParams(
      (current) => {
        const next = new URLSearchParams(current);
        next.delete("projeto");
        return next;
      },
      { replace: true }
    );
  }

  return (
    <section className="section projects-page">
      <div className="wrap">
        <p className="section-kicker">
          <span>04</span> Projetos
        </p>
        <div className="section-head split">
          <div>
            <h1>Produtos em produção.</h1>
            <p className="prose">
              Cada card traz o cargo na entrega, o que o produto faz e a stack. Os links abrem o site ou o
              aplicativo na Play Store.
            </p>
          </div>
          <p className="count-pill">{visible.length} de {projects.length}</p>
        </div>

        <div className="filters" role="tablist" aria-label="Filtrar por tecnologia">
          {filters.map((item) => {
            const count =
              item.id === "todos"
                ? projects.length
                : projects.filter((project) => project.stack.includes(item.id)).length;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={filter === item.id}
                className={filter === item.id ? "is-active" : ""}
                onClick={() => setFilter(item.id)}
              >
                {item.label}
                <span>{count}</span>
              </button>
            );
          })}
        </div>

        <div className="project-grid" key={filter}>
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <AnimatePresence>{selected && <ProjectModal project={selected} onClose={close} />}</AnimatePresence>
    </section>
  );
}
